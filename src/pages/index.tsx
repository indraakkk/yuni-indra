import { type NextPage } from "next";
import LandingPage from "~/components/landing-page";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.invitees.hello.useQuery({ text: "from tRPC" });

  return <LandingPage />;
};

export default Home;
