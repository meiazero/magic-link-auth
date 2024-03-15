import { createHash } from "node:crypto";

/**
 * Generate a verification token
 * @param seed a string to be used as a seed for the token
 * @returns a string that is a hash of the seed and a random string
 */
export function generateVerificationToken(seed: string): string {
  const input = seed + Math.random().toString(36).substring(7);
  const hash = createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

/**
 * Validate a verification token
 * @param token the token to validate
 * @param seed the seed used to generate the token
 * @returns a boolean indicating whether the token is valid
 */

export function validateVerificationToken(
  token: string,
  seed: string,
): boolean {
  return token === generateVerificationToken(seed);
}
