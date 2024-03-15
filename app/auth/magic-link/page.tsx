"use client";

import { useSearchParams } from "next/navigation";

interface PageProps {}

export default function Page({}: PageProps) {
  const search = useSearchParams();
  return (
    <div>
      <h1>Login</h1>
      <p>code: {search.get("code")}</p>
    </div>
  );
}
