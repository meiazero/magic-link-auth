import { createHash } from "node:crypto";

export function generateVerificationToken(seed: string): string {
  const input = seed + Math.random().toString(36).substring(7);
  const hash = createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

export function validateVerificationToken(
  token: string,
  seed: string,
): boolean {
  return token === generateVerificationToken(seed);
}
