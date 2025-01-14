import Image from 'next/image';

const partners = [
  {
    name: "Atlas Copco",
    logo: "/logo-1.png",
    width: 184,
    height: 52,
  },
  {
    name: "Globe Power",
    logo: "/logo-2.png",
    width: 215,
    height: 52,
  },
  {
    name: "Fuelco",
    logo: "/logo-3.png",
    width: 134,
    height: 52,
  },
  {
    name: "Doosan",
    logo: "/logo-4.png",
    width: 198,
    height: 52,
  },
  {
    name: "PCI Gases",
    logo: "/logo-5.png",
    width: 198,
    height: 42,
  },
];

export default function PartnerShowcase() {
  return (
    <section className="bg-zinc-100 py-10 px-6 md:px-6 lg:px-6" aria-label="Partners logos">
      <div className="relative max-w-screen-2xl mx-auto lg:px-10">
        {/* Flex container to wrap logos, with 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
              aria-label={`${partner.name} logo`}
            >
              <div className="relative w-full h-auto lg:h-[62px] md:h-[52px] sm:h-[32px]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
