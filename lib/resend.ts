import { env } from "@/env";
import { Resend } from "resend";

/**
 * Resend API client
 * @see https://resend.com/docs/introduction
 * @example
 * import { resend } from "@/lib/resend";
 * const response = await resend.emails.send({
 *  to: "example@email.com",
 * from: "test@email.com",
 * subject: "Test",
 * text: "Hello, World!"
 * });
 *
 */
export const resend = new Resend(env.RESEND_API_KEY!);
