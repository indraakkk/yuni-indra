import PageLayout from "~/components/layout";
import Image from "next/image";

const LandingPage = () => {
  return (
    <PageLayout>
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
      <section className="pray bg-yi-rose text-center font-Itim text-white">
        <div
          className="flex flex-col items-center justify-evenly
        py-8"
        >
          <div className="px-8 ">
            <span>
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
              <span className="block pt-2 font-ViaodaLibre text-lg">
                QS. Ar-Rum Ayat 21
              </span>
            </span>
          </div>
          <div className="font-Allura text-2xl tracking-wide">
            <span>Assalamualaikum Warahmatullahi Wabarakatuh</span>
          </div>
          <div className="px-8">
            <span>
              Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan segenap
              kerendahan hati, perkenankanlah kami mengundang
              Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan putra putri
              kami:
            </span>
          </div>
          <div className="mt-8 flex flex-col">
            <div>
              <span className="font-Parisienne text-5xl">Yuni</span>
              <span className="mt-4 block">
                Anak kedua dari{" "}
                <span className="block">
                  Bapak Adiwatmadja Rahman dan Ibu Awisalfasni
                </span>
              </span>
            </div>
            <div>
              <span className="font-Parisienne text-5xl">Indra Putra</span>
              <span className="mt-1 block">
                Anak pertama dari{" "}
                <span className="block">
                  Bapak H. Zulkarnain dan Ibu Hj. Asnimar
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="event">
        {/* <div className="flex h-screen flex-col items-center justify-evenly">
          <div className="event-background h-64 w-44 bg-yi-sage"></div>
        </div> */}
      </section>
      {/* <section className="gallery-and-egiving">gallery and e giving</section> */}
    </PageLayout>
  );
};

export default LandingPage;
