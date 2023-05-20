import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <main>{props.children}</main>
      <footer className="flex justify-center">
        <span className="my-8 font-Itim">Made with ❤️ by yuni-indra</span>
      </footer>
    </>
  );
};

export default PageLayout;
