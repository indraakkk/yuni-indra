import Image from "next/image";

export default function Event() {
  const openGoogleMap = () => {
    console.log("open google map");
  };

  return (
    <section className="event">
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
            <span className="block font-ViaodaLibre">Sabtu, 06 Juni 2023</span>
            <span className="block font-CinzelDecorative">09:00 - 10:00</span>
            <span className="mt-5 block font-ViaodaLibre text-4xl">
              Resepsi
            </span>
            <span className="block font-ViaodaLibre">Sabtu, 06 Juni 2023</span>
            <span className="font-CinzelDecorative">12:30 - 15:00</span>
            <span className="mb-5 mt-5 block font-ViaodaLibre">
              Villa Rumah Kayu, Lubuk Minturun, Padang
            </span>

            <button
              className="h-10 w-48 rounded-xl bg-yi-rose font-Itim text-white"
              onClick={() => openGoogleMap()}
            >
              Google Maps
            </button>
            <Image
              src={"/img/star.svg"}
              width={120}
              height={200}
              alt="event detail background"
              unoptimized={true}
              className="absolute bottom-[17rem] left-[15rem]"
            />
            <Image
              src={"/img/star.svg"}
              width={180}
              height={200}
              alt="event detail background"
              unoptimized={true}
              className="absolute right-64 rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
