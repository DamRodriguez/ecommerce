import CategoriesSection from "@/components/pages/home/CategoriesSection";
import HomeHero from "@/components/pages/home/HomeHero";
import InfoSection from "@/components/pages/home/InfoSection";

export default function HomePage() {
  return (
    <section>
      <HomeHero />
      <InfoSection />
      <CategoriesSection />
      {/* <!-- About the Studio --> */}
      <section className="w-full bg-surface-bright border-b border-outline">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-[600px] lg:h-auto relative border-b lg:border-b-0 lg:border-r border-outline">
            <img
              alt="Architectural Studio Space"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUxjMymXPJva_rm9iUakb5V3q6d95i9iBCNMXbp08uYAlsQnTHapX4rXM8BUcWLkjwS3f1j9x_pz1mUtTQe-Zpi-nm8MFJh_X85vp0sOnOZO1i3zFzNjwl0IzeUHv92UGnaGbNj0yx8KUFxQNe0C98xoc8co8Y9Gy3wT-4Mxk_Ywo2K--o1nnyomJ45LbVaNpiCLySCQQVPuDPLbCeP7Q3G_tBgwG6ixQs-mwVgs4a4-WXELQ46uvW08LPGWa1cCPbOKjc22lJfe_y"
            />
          </div>
          <div className="w-full lg:w-1/2 p-margin-mobile md:p-margin-desktop flex flex-col justify-center">
            <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-md block">
              SOBRE EL ESTUDIO
            </span>
            <h2 className="text-5xl font-bold tracking-[-0.02em] leading-[1.2] text-on-surface mb-lg uppercase">
              Ingeniería
              <br />
              Estética
            </h2>
            <p className="text-lg leading-[1.6] text-on-surface-variant mb-lg">
              Fundado en los principios del brutalismo y el diseño industrial,
              el estudio ARCHITECT existe en la intersección de la belleza
              austera y la utilidad intransigente. No diseñamos para las masas;
              diseñamos para el individuo exigente.
            </p>
            <p className="text-base leading-[1.6] text-on-surface-variant mb-xl">
              Cada prototipo es sometido a rigurosas pruebas de estrés, no solo
              por durabilidad física, sino por resistencia visual. Nuestro
              objetivo es crear objetos que sean inmunes a las tendencias,
              existiendo como elementos permanentes en un mundo temporal.
            </p>
            <a
              className="inline-flex items-center text-on-surface font-accent text-xs font-medium tracking-[0.1em] uppercase border border-on-surface px-lg py-md hover:bg-primary hover:text-on-primary transition-colors w-max rounded-none"
              href="#"
            >
              LEER EL MANIFIESTO{" "}
              <span className="material-symbols-outlined ml-sm text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- New Collection Editorial --> */}
      <section className="w-full bg-surface-bright flex flex-col md:flex-row border-b border-outline">
        <div className="w-full md:w-2/5 p-margin-mobile md:p-margin-desktop border-b md:border-b-0 md:border-r border-outline flex flex-col justify-between">
          <div>
            <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface-variant mb-md block">
              EDITORIAL
            </span>
            <h2 className="text-3xl font-semibold tracking-[-0.01em] leading-[1.3] text-on-surface mb-lg uppercase">
              El Protocolo
              <br />
              Obsidiana
            </h2>
            <p className="text-base leading-[1.6] text-on-surface-variant mb-xl">
              Un estudio de densidad y sustracción de materiales. La nueva
              colección elimina lo superfluo para revelar el núcleo esencial de
              la utilidad moderna.
            </p>
          </div>
          <a
            className="inline-flex items-center text-on-surface font-accent text-xs font-medium tracking-[0.1em] uppercase hover:underline underline-offset-4"
            href="#"
          >
            EXPLORAR COLECCIÓN{" "}
            <span className="material-symbols-outlined ml-sm text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="w-full md:w-3/5 h-[512px] md:h-auto relative">
          <img
            alt="Editorial Image"
            className="absolute inset-0 w-full h-full object-cover"
            data-alt="A wide, cinematic editorial shot capturing a stark, architectural space defined by brutalist concrete walls and sharp shadows. In the foreground, an impeccably styled model wears a highly structured, minimalist black garment that mirrors the geometry of the surrounding environment. The palette is strictly monochrome, utilizing deep blacks, stark whites, and the mid-tone grays of the concrete. The atmosphere is serious, high-value, and reflective of elite aesthetic sensibilities."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2Sb75R-XxU4T-y2RmhZlf1ImGu2FCaCZO4wAmLPdfBTyfUENWbFgyKUKALc2h2kVcekUTyzKXM3cFrXvpM5Hx1gbEKCaudxoUzmQ9hSdYsOl0n0sTJnS_uisD5YEv3SyBeSrS6eBU9l2cegq9tJN6xu4cgN9KxtA4ldgQi7pREPnTIdIKrUuBvRRxK2DZf_ptNUSNfKV6lriN_M6GgHh_GI3qp9vU4bNW9ngq_Uv6jtyo6YsHmnCtw_b6ZiobYS2hwixPIXopQ_5"
          />
        </div>
      </section>
      {/* <!-- Social Proof / Instagram Grid --> */}
      <section className="w-full bg-surface border-b border-outline">
        <div className="p-margin-mobile md:p-margin-desktop border-b border-outline flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
          <div>
            <h2 className="text-2xl font-semibold leading-[1.4] text-on-surface uppercase">
              EN CONTEXTO
            </h2>
            <p className="text-base leading-[1.6] text-on-surface-variant mt-sm">
              Etiqueta a @ARCHITECT_STUDIO para aparecer aquí.
            </p>
          </div>
          <a
            className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface hover:underline underline-offset-4"
            href="#"
          >
            SÍGUENOS
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-outline">
          <a
            className="block aspect-square relative border-r border-b md:border-b-0 border-outline group overflow-hidden"
            href="#"
          >
            <img
              alt="Social Feed Image 1"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx60JFSd_lPNQHnlLDy-9K72DkLBgfbAFZHP_gCyzF_mOXnoFleeg-HnHGdCDwq5eROt1mnULNnc9pUgupqDUex2krzkHPpwTn8s4dp9EXv0ZUE_lH9f6YgKajkEMVI5QLIWcaSAtJdjgwZauynggR0XkZugQ4n2h3ypRsU0V0j46Mu6k-Wf2JpmRnhQcnhAtydOSZQqyp8gCUmOrh_O4Ohyic3sbNWPDy6NNiJyWDf58gSvVnsKe8Th9AqFDvuOyjYbeFIP4KCXGm"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-surface text-[32px]">
                open_in_new
              </span>
            </div>
          </a>
          <a
            className="block aspect-square relative border-r border-b md:border-b-0 border-outline group overflow-hidden"
            href="#"
          >
            <img
              alt="Social Feed Image 2"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcKI1i74trEt6F4rMwFilmM08TxpD-KOX9F9ybViedq_b0lzZRfNKU_EhNZ3Pe5brARuiRV2sruzWy_FhycviK09_BA2zRbDhcTtqiRyOW769XbFGTOBA-SsCVkxG0llryMFNm0FBGNCTyTa5hIGcfA9FhDq5iJQWnNJksohM4dXm330RqxX6X1TQeHSvUDiGW0naNHMXHee-4PbSBDcKPhSo4vhjmMm3ir96Y9_nGwpEDQWAVsQQu_x1Kwee-zM3_0FsW6Hu4UHtx"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-surface text-[32px]">
                open_in_new
              </span>
            </div>
          </a>
          <a
            className="block aspect-square relative border-r border-outline group overflow-hidden"
            href="#"
          >
            <img
              alt="Social Feed Image 3"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN3OnBfyZS86lnrJqShgYQeUcN-iXLS6PHkNaSHpZXNMIvxd8cvs7JMlNDRTxHtZJLRVrtJg__ymRT6ViuyYuZMPPyvP1eG1391PqxgsV-MWWqP-cQmWeU2e8_3sYrYPDG3mIEC7RFc28rYPobx81UhnNnUV7Gck55YH13tyCbjHKrQbD8ktq0oeLa6Bij07vIt0zeXll-XRAGekCgRIp5yZipfbojn3rVlLNULcq2xkKEouNxFc0XQEgnIJ7_aOZy7jhxPm3zOtq8"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-surface text-[32px]">
                open_in_new
              </span>
            </div>
          </a>
          <a
            className="block aspect-square relative group overflow-hidden"
            href="#"
          >
            <img
              alt="Social Feed Image 4"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkgF_EyeqOJlGbDISymt9bDWGXP6zDsdVJf5gBps1NfYuyBumls2y9aG-UfX6ZUrateEHi9kCIMRSUBpMfzph9Hjv_jWwR1ySkg9X2c4Vu1CtlCiXqgC5XSNw-AKu1fKN6BvEE1xCZtU1wZ6N8RPa3Tn_RvBFJ8JStmXcjbEMhUvo8_mZ0Mm42Hg9yqgz3PaiUUio_bm4GhARBigcyuUmVn9cV0jF_l68TgRdbymzU4xE2F_7mjohianG3x1cD_Fpu7_xwmfnHRkpU"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-surface text-[32px]">
                open_in_new
              </span>
            </div>
          </a>
        </div>
      </section>
      {/* <!-- As Seen In / Press --> */}
      <section className="w-full py-xl bg-surface-bright border-b border-outline overflow-hidden">
        <div className="flex items-center justify-center space-x-xl md:space-x-[120px] opacity-40 grayscale">
          <span className="text-3xl font-semibold tracking-widest">
            MONOCLE
          </span>
          <span className="text-3xl font-semibold tracking-widest">DEZEEN</span>
          <span className="text-3xl font-semibold tracking-widest">
            WALLPAPER*
          </span>
          <span className="text-3xl font-semibold tracking-widest hidden md:block">
            KINFOLK
          </span>
        </div>
      </section>
      {/* <!-- Benefits Section --> */}
      <section className="w-full p-margin-mobile md:p-margin-desktop bg-surface border-b border-outline">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-xl md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-outline">
          <div className="pt-xl md:pt-0 pb-xl md:pb-0 md:px-lg flex flex-col items-start first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0">
            <span className="material-symbols-outlined text-[32px] text-on-surface mb-md">
              local_shipping
            </span>
            <h3 className="text-2xl font-semibold leading-[1.4] text-on-surface mb-sm uppercase">
              Tránsito Global
            </h3>
            <p className="text-base leading-[1.6] text-on-surface-variant">
              Envío acelerado y neutral en carbono en todos los pedidos
              internacionales superiores a $500.
            </p>
          </div>
          <div className="pt-xl md:pt-0 pb-xl md:pb-0 md:px-lg flex flex-col items-start">
            <span className="material-symbols-outlined text-[32px] text-on-surface mb-md">
              lock
            </span>
            <h3 className="text-2xl font-semibold leading-[1.4] text-on-surface mb-sm uppercase">
              Bóveda Encriptada
            </h3>
            <p className="text-base leading-[1.6] text-on-surface-variant">
              Encriptación de grado militar para todas las transacciones.
              Seguridad absoluta garantizada.
            </p>
          </div>
          <div className="pt-xl md:pt-0 pb-xl md:pb-0 md:px-lg flex flex-col items-start">
            <span className="material-symbols-outlined text-[32px] text-on-surface mb-md">
              assignment_return
            </span>
            <h3 className="text-2xl font-semibold leading-[1.4] text-on-surface mb-sm uppercase">
              Devoluciones Impecables
            </h3>
            <p className="text-base leading-[1.6] text-on-surface-variant">
              Una ventana de 30 días para devoluciones, siempre que la
              integridad estructural no esté comprometida.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Newsletter Section --> */}
      <section className="w-full bg-surface-bright border-b border-outline">
        <div className="p-margin-mobile md:p-margin-desktop max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] leading-[1.3] text-on-surface mb-sm uppercase">
            El Boletín
          </h2>
          <p className="text-base leading-[1.6] text-on-surface-variant mb-lg">
            Suscríbase para recibir anuncios de productos austeros, colecciones
            de acceso restringido y actualizaciones técnicas.
          </p>
          <form className="flex flex-col sm:flex-row w-full max-w-xl mx-auto">
            <input
              className="flex-grow bg-surface border border-outline p-md font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface placeholder-outline-variant focus:outline-none focus:ring-1 focus:ring-primary rounded-none mb-sm sm:mb-0 sm:border-r-0"
              placeholder="INGRESE SU CORREO ELECTRÓNICO"
              type="email"
            />
            <button
              className="bg-primary text-on-primary border border-primary px-lg py-md font-accent text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#333333] transition-colors rounded-none"
              type="submit"
            >
              SUSCRIBIRSE
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
