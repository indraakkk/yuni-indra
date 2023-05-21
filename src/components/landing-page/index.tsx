import PageLayout from "~/components/layout";
import Pray from "./pray";
import Hero from "./hero";
import Event from "./event";
import GalleryAndForm from "./gallery-and-form";

const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Pray />
      <Event />
      <GalleryAndForm />
    </PageLayout>
  );
};

export default LandingPage;
