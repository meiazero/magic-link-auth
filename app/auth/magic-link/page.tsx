import { Suspense } from "react";
import { BetaCodeParams } from "@/components/elements";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BetaCodeParams />
    </Suspense>
  );
}
