import React from "react";

export const metadata = {
  title: "PSMC",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto h-full  min-h-full w-full min-w-full">
      {children}
    </div>
  );
}

export const revalidate = 3600; // revalidate at most every hour
