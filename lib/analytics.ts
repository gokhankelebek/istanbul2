/**
 * Send a GA4 event from client code. gtag is set up in app/layout.tsx; if it
 * isn't loaded (blocked, or no measurement ID), this does nothing.
 * Never pass personal details (names, emails, phone numbers) as parameters.
 */
export function trackEvent(name: string, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const clean: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== "") clean[k] = v;
  gtag("event", name, clean);
}
