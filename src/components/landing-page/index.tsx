import PageLayout from "~/components/layout";
import Pray from "./pray";
import Hero from "./hero";
import Event from "./event";

const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Pray />
      <Event />
      {/* <section className="gallery-and-egiving">gallery and e giving</section> */}
    </PageLayout>
  );
};

export default LandingPage;
