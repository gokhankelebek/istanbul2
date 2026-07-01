"use client";

import { usePathname } from "next/navigation";

/**
 * Hides global site chrome (navbar, footer, mobile order bar) on routes that
 * should be self-contained — e.g. the /in-store view-only menu, which must not
 * surface any "Order Online" navigation.
 */
const HIDDEN_PREFIXES = ["/in-store"];

export default function ConditionalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hidden = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname?.startsWith(`${p}/`)
  );
  if (hidden) return null;
  return <>{children}</>;
}
