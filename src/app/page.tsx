"use client";

import { addToast, Button } from "@heroui/react";

export default function RootRoute({}: {}) {
  return (
    <>
      <Button
        variant="solid"
        color="primary"
        className={"mx-3 my-2 flex-[.5] text-xl print:hidden"}
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
