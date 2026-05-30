# Ecommerce Architecture

## Product Model

Cada producto puede tener múltiples variantes.

```ts
type ProductVariant = {
  id: string;
  size: ProductSize;
  color: ProductColor;
  stock: number;
};
```

Ejemplos de variantes:

- Negro / S
- Negro / M
- Negro / L
- Blanco / M
- Blanco / XL

El stock se controla por variante y no por producto.

---

## Product Pricing

Los precios se almacenan utilizando un precio original y opcionalmente un precio promocional.

```ts
type ProductCardData = {
  originalPrice: number;
  salePrice?: number;
};
```

### Reglas

- `originalPrice` es obligatorio.
- `salePrice` es opcional.
- Si existe `salePrice`, el producto se considera en oferta.
- Nunca se almacena un porcentaje de descuento.
- El porcentaje se calcula dinámicamente a partir de ambos precios.

Ejemplo:

```ts
{
  originalPrice: 100000,
  salePrice: 80000
}
```

---

## Product Variant Selection

La selección de color y talle se gestiona mediante el hook:

```ts
useProductVariant();
```

### Responsabilidades

- Mantener la variante seleccionada.
- Obtener colores disponibles.
- Obtener talles disponibles.
- Validar combinaciones existentes.
- Exponer el stock de la variante seleccionada (opcional).

### Regla de negocio

Un talle sólo puede seleccionarse si existe para el color actualmente seleccionado.
Se muestran solamente los talles correspondientes para cada color y viceversa.

---

## Product Card

La card de producto permite:

- Navegar al detalle.
- Seleccionar color.
- Seleccionar talle.
- Visualizar stock (opcional).
- Añadir directamente una variante al carrito.

### Estructura

```txt
┌─────────────────────┐
│       Imagen        │
│                     │
│  Añadir al carrito  │
├─────────────────────┤
│ Nombre              │
│ Categoría           │
│ Colores             │
│ Talles              │
│ Precio              │
└─────────────────────┘
```

### Comportamiento

#### Imagen

- Navega al detalle del producto.
- Tiene efecto hover.
- Contiene el botón de añadir al carrito.

#### Variantes

- Los colores se muestran como botones.
- Los talles se muestran como botones.
- La selección actual se resalta visualmente.

#### Precio

Si existe descuento:

```txt
$100.000
↓
$80.000
```

Se muestra:

- Precio original tachado.
- Precio promocional.
- Porcentaje de descuento.

---

## Cart Model

El carrito almacena variantes y no productos.

```ts
type CartItem = {
  product: ProductCardData;
  variant: ProductVariant;
  quantity: number;
};
```

### Motivo

Un mismo producto puede existir varias veces con distintas variantes.

Ejemplo:

```txt
Remera Negra M
Remera Negra L
Remera Blanca M
```

Cada línea es independiente.

---

## Cart Item Identification

Todas las operaciones del carrito utilizan:

```ts
variant.id;
```

No se utiliza:

```ts
product.id;
```

porque un producto puede tener múltiples variantes.

---

## Cart Persistence

El carrito se persiste en:

```txt
localStorage["cart"]
```

Formato:

```ts
CartItem[]
```

Flujo:

1. La aplicación inicia.
2. Se lee localStorage.
3. Se hidrata Redux.
4. Se habilita la persistencia automática.

---

## Cart Calculations

### Precio unitario

```ts
const unitPrice = product.salePrice ?? product.originalPrice;
```

### Total por línea

```ts
const totalPrice = unitPrice * quantity;
```

### Total del carrito

```ts
Σ(unitPrice × quantity)
```

Los descuentos siempre participan en el cálculo final.

---

## Cart Item Layout

Cada item del carrito está dividido en tres áreas visuales.

```txt
┌────────┬─────────────────────┬──────────────┐
│ Imagen │ Información         │ Acciones     │
│        │                     │ y precios    │
└────────┴─────────────────────┴──────────────┘
```

### Imagen

- Imagen principal del producto.

### Información

- Nombre.
- Categoría.
- Subcategoría.
- Color seleccionado.
- Talle seleccionado.
- Controles de cantidad.

### Acciones y precios

- Botón eliminar.
- Precio unitario.
- Precio total de la línea.

---

## Low Stock Indicator

Un producto se considera con stock bajo cuando:

```ts
totalStock > 0 && totalStock <= 4;
```

En ese caso se muestra:

```txt
Últimas unidades
```
