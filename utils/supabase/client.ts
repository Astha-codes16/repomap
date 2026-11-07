import { createBrowserClient } from "@supabase/ssr";

const requireEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const createClient = (getToken: () => Promise<string | null>) =>
  createBrowserClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"),
    {
      accessToken: async () => (await getToken()) ?? null,
    },
  );
