// CTA destinations. Auth and the play flow are not built yet; these are the routes they will live at.
export const LINKS = {
  login: "/login",
  signup: "/signup",
  play: (gameId?: string) => (gameId ? `/play?game=${encodeURIComponent(gameId)}` : "/play"),
  gameDetails: (gameId: string) => `/games/${encodeURIComponent(gameId)}`,
  results: "/results",
  terms: "/legal/terms",
  privacy: "/legal/privacy",
  responsibleGaming: "/legal/responsible-gaming",
  // TODO: real store listings
  appStore: "#download",
  googlePlay: "#download",
} as const;

// TODO: real social profile URLs
export const SOCIALS = [
  { label: "f", name: "Facebook", href: "#footer" },
  { label: "IG", name: "Instagram", href: "#footer" },
  { label: "YT", name: "YouTube", href: "#footer" },
  { label: "X", name: "X", href: "#footer" },
] as const;
