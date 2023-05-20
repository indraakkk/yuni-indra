import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <main>{props.children}</main>
      <footer>footer</footer>
    </>
  );
};

export default PageLayout;
