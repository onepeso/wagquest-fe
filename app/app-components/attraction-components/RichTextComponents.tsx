import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div>
          <Image
            src={urlFor(value).url()}
            alt={value.alt}
            width={2000}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-bold">{children}</h5>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-4">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = value.blank ? "noopener noreferrer" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-red-500 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
