import PageLayout from "~/components/layout";
import Image from "next/image";

const LandingPage = () => {
  return (
    <PageLayout>
      <section className="hero bg-yi-white/55 h-screen">
        <div className="flex h-screen flex-col items-center justify-evenly">
          <div className="text-center">
            <h3 className="font-ViaodaLibre">The Wedding of</h3>
            <h1 className="font-Parisienne text-[3rem]">Yuni & Indra</h1>
            <h3 className="font-CinzelDecorative">06.17.23</h3>
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
      <section className="pray">pray</section>
      <section className="event">event</section>
      <section className="gallery-and-egiving">gallery and e giving</section>
    </PageLayout>
  );
};

export default LandingPage;
