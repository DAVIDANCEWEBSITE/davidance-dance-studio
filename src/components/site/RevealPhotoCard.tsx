import { Link, type LinkProps } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/utils";

type Props = {
  to: Exclude<LinkProps["to"], undefined>;
  params?: LinkProps["params"];
  title: string;
  image: string;
  reveal?: string | undefined;
  leading?: ReactNode;
  className?: string;
};

/** Shared photograph curtain; first touch reveals, second touch follows the link. */
export function RevealPhotoCard({ to, params, title, image, reveal, leading, className }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Link
      to={to}
      {...(params ? { params } : {})}
      data-open={open}
      onClick={(event) => {
        if (window.matchMedia("(hover: none)").matches && !open) {
          event.preventDefault();
          setOpen(true);
        }
      }}
      className={cn("group relative flex aspect-[4/3] min-w-0 flex-col justify-end overflow-hidden rounded-lg shadow-soft transition-shadow duration-500 hover:shadow-glow data-[open=true]:shadow-glow", className)}
    >
      <SmartImage src={image} alt={title} wrapperClassName="absolute inset-0" className="transition-transform duration-[1.2s] group-hover:scale-105 group-data-[open=true]:scale-105 motion-reduce:transition-none" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-plum/10 via-plum/30 to-plum/85" />
      <div aria-hidden className="absolute inset-0 translate-y-full bg-gradient-brand opacity-90 transition-transform duration-700 ease-out group-hover:translate-y-0 group-data-[open=true]:translate-y-0 motion-reduce:transition-none" />
      <div className="relative p-5">
        <h3 className="flex items-center gap-2 text-balance text-xl font-medium text-cream">{leading}{title}</h3>
        <span aria-hidden className="mt-2 block h-px w-10 bg-cream/80 transition-all duration-500 group-hover:w-20 group-data-[open=true]:w-20 motion-reduce:transition-none" />
        {reveal && (
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-data-[open=true]:grid-rows-[1fr] group-data-[open=true]:opacity-100 motion-reduce:transition-none">
            <div className="overflow-hidden"><p className="mt-3 text-pretty text-sm font-medium text-cream">{reveal}</p></div>
          </div>
        )}
      </div>
    </Link>
  );
}