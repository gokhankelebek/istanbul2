import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { Callout, DishLink, MenuLink } from "@/components/mdx/mdx-shortcodes";

function MdxImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, ...rest } = props;
  if (typeof src === "string" && src.startsWith("/")) {
    return (
      <span className="relative my-8 block aspect-video w-full overflow-hidden rounded-xl border border-stone/10">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </span>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element -- external or data URLs
  return <img src={src} alt={alt ?? ""} {...rest} />;
}

function MdxA({
  href,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith("/")) {
    return (
      <Link
        href={href}
        className="font-medium text-crimson underline decoration-crimson/35 underline-offset-2 hover:text-crimson-light"
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-crimson underline decoration-crimson/35 underline-offset-2 hover:text-crimson-light"
      {...rest}
    >
      {children}
    </a>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-heading mt-10 text-3xl font-bold text-stone first:mt-0 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-heading mt-10 scroll-mt-28 text-2xl font-bold text-stone sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-heading mt-8 scroll-mt-28 text-xl font-semibold text-stone sm:text-2xl"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="font-heading mt-6 text-lg font-semibold text-stone" {...props} />
  ),
  p: (props) => (
    <p className="mt-4 text-base leading-relaxed text-warm-gray" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-6 text-warm-gray marker:text-gold"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-warm-gray marker:text-gold"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-gold/60 pl-5 italic text-stone/85"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-stone/15" {...props} />,
  strong: (props) => <strong className="font-semibold text-stone" {...props} />,
  a: MdxA,
  img: MdxImg,
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-stone/10">
      <table className="w-full min-w-[320px] text-left text-sm text-warm-gray" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-stone/15 bg-cream px-4 py-3 font-semibold text-stone" {...props} />
  ),
  td: (props) => <td className="border-b border-stone/8 px-4 py-3" {...props} />,
  code: (props) => {
    const { className, children, ...rest } = props;
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code
          className={`block overflow-x-auto rounded-lg bg-stone p-4 text-sm text-cream ${className ?? ""}`}
          {...rest}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded bg-stone/10 px-1.5 py-0.5 font-mono text-sm text-crimson"
        {...rest}
      >
        {children}
      </code>
    );
  },
  pre: (props) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-stone p-0 text-cream" {...props} />
  ),
  Callout,
  MenuLink,
  DishLink,
};
