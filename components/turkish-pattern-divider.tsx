/**
 * Turkish kilim-inspired divider band between sections.
 * Use variant="light" when the previous section has a dark background.
 */
export default function TurkishPatternDivider({
  variant = "default",
}: {
  variant?: "default" | "light";
}) {
  return (
    <div
      className={variant === "light" ? "turkish-divider-light" : "turkish-divider"}
      aria-hidden
    />
  );
}
