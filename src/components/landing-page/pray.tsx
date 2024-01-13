import Image from "next/image";

export default function Pray() {
  return (
    <section className="pray flex justify-center bg-yi-rose text-center font-Itim text-sm text-white">
      <div className="flex max-w-2xl flex-col items-center justify-evenly py-20">
        <div className="px-8 ">
          <span className="font-ViaodaLibre">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
            <span className="block pt-2 font-ViaodaLibre text-sm">
              QS. Ar-Rum Ayat 21
            </span>
          </span>
        </div>
        <div className="my-8 font-Allura text-lg tracking-wide">
          <span>Assalamualaikum Warahmatullahi Wabarakatuh</span>
        </div>
        <div className="px-8">
          <span>
            Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan segenap
            kerendahan hati, perkenankanlah kami mengundang Bapak/Ibu/Saudara/i
            untuk hadir di acara pernikahan putra putri kami:
          </span>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-2.5 my-5">
          <div>
            <span className="font-Parisienne text-3xl">Yuni</span>
          </div>
          <div className="my-5">
            <span className="font-Parisienne text-2xl">&</span>
          </div>
          <div className="relative pb-10">
            <span className="font-Parisienne text-3xl">Indra Putra</span>
          </div>
        </div>
        <div className="relative flex w-32">
          <Image
            src={"/img/border-flower-3.svg"}
            width={150}
            height={200}
            unoptimized={true}
            alt="border flower"
            className="absolute left-[122px] top-[0px]"
          />
          <Image
            src={"/img/border-flower-3.svg"}
            width={150}
            height={200}
            unoptimized={true}
            alt="border flower"
            className="absolute right-[0px] top-[0px]"
          />
          <Image
            src={"/img/border-flower-3.svg"}
            width={150}
            height={200}
            unoptimized={true}
            alt="border flower"
            className="absolute right-[122px] top-[0px]"
          />
        </div>
      </div>
    </section>
  );
}
