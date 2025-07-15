"use client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import React from "react";

export function Providers({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <HeroUIProvider className="relative flex h-full min-h-[100dvh] flex-col">
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
