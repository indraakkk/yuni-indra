import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero h-screen bg-yi-white/80">
      <div className="flex h-screen flex-col items-center justify-evenly">
        <div className="text-center">
          <h3 className="font-ViaodaLibre">The Wedding of</h3>
          <h1 className="font-Parisienne text-[3rem]">Yuni & Indra</h1>
          <h3 className="font-CinzelDecorative">17.06.23</h3>
        </div>
        <div>
          <Image
            src={"/img/hero.png"}
            width={400}
            height={200}
            unoptimized={true}
            alt="yuni indra draw in line style"
          />
        </div>
      </div>
    </section>
  );
}
