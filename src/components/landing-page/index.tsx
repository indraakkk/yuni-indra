import PageLayout from "~/components/layout";
import Pray from "./pray";
import Hero from "./hero";
import Event from "./event";
import Image from "next/image";
import { useState } from "react";

const LandingPage = () => {
  const [showBank, setShowBank] = useState(false);
  const galleries = [
    "/img/gallery/gallery-1.jpg",
    "/img/gallery/gallery-2.png",
    "/img/gallery/gallery-3.png",
    "/img/gallery/gallery-4.png",
    "/img/gallery/gallery-5.jpg",
    "/img/gallery/gallery-6.jpg",
    "/img/gallery/gallery-7.jpg",
    "/img/gallery/gallery-8.jpg",
    "/img/gallery/gallery-9.jpg",
    "/img/gallery/gallery-10.jpg",
  ];

  const handleShowBankAccount = (cond: boolean) => {
    setShowBank(!cond);
  };

  return (
    <PageLayout>
      <Hero />
      <Pray />
      <Event />
      <section className="gallery-and-egiving relative bg-yi-sage">
        <div className="relative">
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-10">
              {galleries.map((v, i) => {
                return (
                  <Image
                    key={i}
                    src={v}
                    width={200}
                    height={100}
                    unoptimized={true}
                    alt={`gallery-${i}`}
                    className="mx-2"
                  />
                );
              })}

              {galleries.map((v, i) => {
                return (
                  <Image
                    key={i}
                    src={v}
                    width={200}
                    height={100}
                    unoptimized={true}
                    alt={`gallery-${i}`}
                    className="mx-2"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="egift flex flex-col items-center justify-center font-Itim text-white">
          <button
            onClick={() => handleShowBankAccount(showBank)}
            className={`${
              showBank ? "" : "mb-10"
            } my-5 h-7 w-48 rounded-md bg-yi-rose`}
          >
            Electronic Giving
          </button>
          <div
            className={`${showBank ? "block" : "hidden"} text-center text-sm`}
          >
            <div className="flex flex-col">
              <span>Transfer via mandiri</span>
              <span className="text-lg">1110013658923</span>
              <span>Yuni</span>
            </div>
            <div className="my-3 flex flex-col">
              <span>Transfer via mandiri</span>
              <span className="text-lg">1090017506718</span>
              <span>Indra Putra</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LandingPage;
