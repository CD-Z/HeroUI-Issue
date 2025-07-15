import { Spinner } from "@heroui/react";

export default function RootLoading() {
  return (
    <Spinner
      size="lg"
      className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto"
    />
  );
}
