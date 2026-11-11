"use client";

import Link from "next/link";
import { useSyncExternalStore, type ComponentProps } from "react";
import { LINKS } from "@/lib/constants";

/** The ordering hub lives on store.istanbul2.com, where "/" is the hub itself (see next.config.ts). */
const isStoreHost = (host: string) => host.startsWith("store.");

const noop = () => () => {};

/**
 * True when the page is being viewed on store.istanbul2.com. On the server, and
 * during hydration, this is false; React re-renders right after with the real value.
 */
export function useOnStoreHost(): boolean {
  return useSyncExternalStore(
    noop,
    () => isStoreHost(window.location.hostname),
    () => false
  );
}

/**
 * A link to a page on the main site. On www it is a normal client-side <Link>.
 * On store.istanbul2.com it points at https://www.istanbul2.com instead, because
 * there "/" is the ordering hub and other paths only redirect back to www.
 */
export default function SiteLink({
  href,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const onStore = useOnStoreHost();
  if (onStore && href.startsWith("/")) {
    return <a href={`${LINKS.website}${href}`} {...props} />;
  }
  return <Link href={href} {...props} />;
}
