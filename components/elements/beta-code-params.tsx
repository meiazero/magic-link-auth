"use client";

import { useSearchParams } from "next/navigation";

interface BetaCodeParamsProps {}

export function BetaCodeParams({}: BetaCodeParamsProps) {
  const searchParams = useSearchParams();

  const search = searchParams.get("code");

  return (
    <div>
      <h1>Login</h1>
      <p>code: {search}</p>
    </div>
  );
}
