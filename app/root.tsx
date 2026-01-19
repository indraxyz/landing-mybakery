import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-50 navigation-blur border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="skeleton-pulse h-8 w-32 rounded" />
            <div className="hidden md:flex items-center space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton-pulse h-4 w-16 rounded" />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="skeleton-pulse h-9 w-9 rounded-full" />
              <div className="md:hidden skeleton-pulse h-9 w-9 rounded" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero skeleton */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 skeleton-pulse-bg" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="skeleton-pulse-light h-5 w-48 mx-auto mb-4 rounded" />
              <div className="skeleton-pulse-light h-14 sm:h-16 md:h-20 w-full max-w-xl mx-auto mb-6 rounded" />
              <div className="skeleton-pulse-light h-5 w-full max-w-md mx-auto mb-3 rounded" />
              <div className="skeleton-pulse-light h-5 w-3/4 max-w-sm mx-auto mb-10 rounded" />
              <div className="skeleton-pulse-primary h-14 w-40 mx-auto rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function HydrateFallback() {
  return <LoadingSkeleton />;
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = sessionStorage.getItem('mybakery-theme') || 'system';
                  const root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {
                  const root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  root.classList.add(systemTheme);
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
