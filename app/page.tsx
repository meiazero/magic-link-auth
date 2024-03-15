import { ThemeToggle } from "@/components/elements";
import { AuthForm } from "@/components/elements/auth-form";

export default function Page() {
  return (
    <>
      <div className="fixed right-0 p-4">
        <ThemeToggle />
      </div>

      <section className="flex min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-sm">
          <AuthForm />
        </div>
      </section>
    </>
  );
}
