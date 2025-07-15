import * as React from "react";

import dynamic from "next/dynamic";

const NavConstructor = dynamic(
  () => import("@components/navigator/NavConstructor"),
);

export default async function Home() {
  return <NavConstructor />;
}
