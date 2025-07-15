"use client";

import { addToast, Button } from "@heroui/react";
import clsx from "clsx";
import Link from "next/link";

export default function RootRoute({}: {}) {
  return (
    <>
      <Link href="/protected/psmc">Link</Link>
      <Button
        variant="solid"
        color="primary"
        className={clsx("mx-3 my-2 flex-[.5] text-xl print:hidden", {})}
        onPress={() => {
          addToast({
            title: "Error",
            description: "Calculation in progress",
          });
        }}
        fullWidth
      >
        Test
      </Button>
      <button
        onClick={() =>
          addToast({
            title: "Error",
            description: "Calculation in progress",
          })
        }
      >
        Test
      </button>
    </>
  );
}
