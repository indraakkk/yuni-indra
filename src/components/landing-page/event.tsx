import Image from "next/image";

export default function Event() {
  return (
    <section className="event bg-yi-white/80">
      <div className="flex h-screen flex-col items-center justify-evenly">
        <div className="relative">
          <Image
            src={"/img/bg-event.svg"}
            width={350}
            height={200}
            alt="event detail background"
            unoptimized={true}
          />
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-2/4 -translate-y-2/4 text-center">
            <span className="block font-ViaodaLibre text-4xl">Akad Nikah</span>
            <span className="block font-ViaodaLibre">Sabtu, 17 Juni 2023</span>
            <span className="block font-CinzelDecorative">07:00 - 10:00</span>
            <span className="mt-5 block font-ViaodaLibre text-4xl">
              Resepsi
            </span>
            <span className="block font-ViaodaLibre">Sabtu, 17 Juni 2023</span>
            <span className="font-CinzelDecorative">12:30 - 15:00</span>
            <span className="mb-5 mt-5 block font-ViaodaLibre">
              Villa Rumah Kayu, Lubuk Minturun, Padang
            </span>

            <a
              href="https://goo.gl/maps/ueuyWvK8coBUYqLR8?coh=178573&entry=tt"
              target="_blank"
              className="rounded-xl bg-yi-rose px-10 py-2 font-Itim text-white"
            >
              Google Maps
            </a>

            <Image
              src={"/img/border-flower-1.svg"}
              width={120}
              height={200}
              alt="event detail background"
              unoptimized={true}
              className="absolute bottom-[18rem] left-[15rem]"
            />
            <Image
              src={"/img/border-flower-2.svg"}
              width={180}
              height={200}
              alt="event detail background"
              unoptimized={true}
              className="absolute right-64 rotate-[9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
