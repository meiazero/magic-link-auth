import { randomUUID } from "crypto";
import { z } from "zod";

const bodyRequestSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
});

export async function POST(request: Request) {
  const body = await request.json();

  // validate the body content using zod
  // if the body is invalid, it will throw an error
  const data = bodyRequestSchema.safeParse(body);

  if (!data.success) {
    return new Response(JSON.stringify(data.error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  // try send email
  try {
    const verificationCode = randomUUID();

    // send email
    // const { data: resendData, error } = await resend.emails.send({
    //   from: "Meiazero <noreply@meiazero.dev>",
    //   to: [data.data.email],
    //   subject: "Sign in to your account",
    //   react: MagicLinkEmail({
    //     url: env.NEXT_PUBLIC_URL,
    //     verificationCode,
    //   }),
    // });

    // if (error) {
    //   return new Response(JSON.stringify({ error: error }), {
    //     status: 400,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });
    // }

    return new Response(JSON.stringify({ data: verificationCode }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in /api/mail/link route:", error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
