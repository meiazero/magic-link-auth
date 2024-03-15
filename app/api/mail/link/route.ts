import { env } from "@/env";
import { resend } from "@/lib/resend";
import { generateVerificationToken } from "@/lib/token";
import { z } from "zod";

const bodyRequestSchema = z.object({
  email: z.string().email({
    message: "The email is required.",
  }),
  url: z.string().min(1, {
    message: "The url is required.",
  }),
});

export async function POST(request: Request) {
  const body = await request.json();

  // validate the body content using zod
  // if the body is invalid, it will throw an error
  const bodyParsed = bodyRequestSchema.safeParse(body);

  if (!bodyParsed.success) {
    return new Response(JSON.stringify(bodyParsed.error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const verification_code = generateVerificationToken(env.TOKEN_SEED);

  // try send email
  try {
    const link = `${bodyParsed.data.url}/auth/magic-link?code=${verification_code}`;

    // send email
    const { data: ResendData, error } = await resend.emails.send({
      from: "Meiazero <noreply@meiazero.dev>",
      to: bodyParsed.data.email,
      subject: "Sign in to your account",
      html: `
      <p>Click the link below to access your account</p>
      <a href="${link}">link</a>
      <p>Or copy and paste the following link into your browser:</p>
      <p>${link}</p>
      `,
      attachments: [],
    });

    if (error) {
      console.error("Error in /api/mail/link route:", error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      });
    }

    return new Response(
      JSON.stringify({
        ResendData,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  } catch (error: any) {
    console.error("Error in /api/mail/link route:", error);
    return new Response(JSON.stringify({ error: error?.message }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
