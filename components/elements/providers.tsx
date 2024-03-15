import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Renders the Providers component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {React.ReactNode} The rendered Providers component.
 */
export function Providers({ children }: ProvidersProps): React.ReactNode {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors closeButton expand={true} position="top-right" />
      </ThemeProvider>
    </>
  );
}
