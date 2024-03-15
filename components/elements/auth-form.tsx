"use client";

import { env } from "@/env";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface AuthFormProps {}

export function AuthForm({}: AuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // to test
      email: "avilaemanueel@gmail.com",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(!isLoading);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // implement logic to send magic link to email using /api/mail/link
      const response = await fetch(`${env.NEXT_PUBLIC_URL}/api/mail/link`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      }

      form.reset();

      toast.success("Check your email", {
        description: "We've sent you a magic link to sign in.",
        duration: 3000,
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
        duration: 3000,
      });
    } finally {
      setIsLoading(isLoading);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="mx-auto w-fit">
          Send magic link
          {isLoading ? (
            <Loader2Icon className="ms-2 size-4 animate-spin" />
          ) : (
            <SparklesIcon className="ms-2 size-4" />
          )}
        </Button>
      </form>
    </Form>
  );
}
