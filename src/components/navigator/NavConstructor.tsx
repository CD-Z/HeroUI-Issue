"use client";

import { addToast, Button } from "@heroui/react";
import {
  MutationFilters,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import clsx from "clsx";
import React from "react";

async function awaitMutations(
  queryClient: QueryClient,
  filter?: MutationFilters,
) {
  await new Promise<void>((resolve) => {
    const unsubscribe = queryClient.getMutationCache().subscribe(() => {
      if (queryClient.isMutating(filter) === 0) {
        unsubscribe(); // Unsubscribe once all mutations are finished
        resolve();
      }
    });
  });
}

export default function NavConstructor() {
  const queryClient = useQueryClient();

  async function calculate() {
    await awaitMutations(queryClient);

    addToast({
      title: "Error",
      description: "Calculation in progress",
    });

    return;
  }

  return (
    <>
      <Button
        variant="solid"
        color="primary"
        className={clsx("mx-3 my-2 flex-[.5] text-xl print:hidden", {})}
        onPress={() => {
          calculate();
        }}
        fullWidth
      >
        Test
      </Button>
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
        Test2
      </Button>
    </>
  );
}
