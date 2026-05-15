import SpaceX from "@/components/layout/SpaceX";

export default function InfoSection() {
  const items = [
    {
      title: "T6",
      description: "ALUMINIO",
    },
    {
      title: "0.01",
      description: "TOLERANCIA (MM)",
    },
    {
      title: "3X",
      description: "RESISTENCIA A LA TRACCIÓN",
    },
    {
      title: "100%",
      description: "RECICLABLE",
    },
  ];
  return (
    <SpaceX className="py-vertical-mobile lg:py-vertical-desktop bg-on-surface-strong text-surface">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-xl items-center">
        <div className="w-full md:w-1/2">
          <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase mb-md block">
            MATERIALES Y FILOSOFÍA
          </span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] leading-[1.3] mb-lg uppercase">
            Radio Cero
          </h2>
          <p className="text-base leading-[1.6]">
            Rechazamos lo superfluo. Cada línea, cada junta, cada elección de
            material es un acto deliberado de sustracción. Nuestros productos
            están construidos con aluminio aeronáutico de alta calidad, lanas
            estructuradas y compuestos de carbono. La función dicta la forma,
            resultando en objetos de profunda permanencia y claridad absoluta.
          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-md text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="border bg-on-surface border-surface/70 p-lg flex flex-col items-center justify-center"
            >
              <span className="block text-2xl font-semibold leading-[1.4] mb-xs">
                {item.title}
              </span>
              <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SpaceX>
  );
}
