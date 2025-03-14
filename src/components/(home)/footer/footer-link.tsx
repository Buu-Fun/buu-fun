import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";
export type TFooterLink = {
  href: string;
  _blank?: HTMLAttributeAnchorTarget;
  title: string;
};
export type TFooterLinks = { title: string; links: TFooterLink[] };
export function FooterLink({
  _blank,
  href,
  title,
  className,
  onClick,
}: TFooterLink & {
  className?: string;
  onClick?: (href: string) => (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      href={href}
      target={_blank}
      onClick={(e) => {
        if (onClick) {
          onClick(href)(e);
        }
      }}
      className={cn("text-base text-white hover:text-white/80", className)}
    >
      {title}
    </Link>
  );
}
export function FooterLinks({ links, title }: TFooterLinks) {
  return (
    <div>
      <h5 className="text-xs font-medium uppercase">{title}</h5>
      <div className="flex gap-2 flex-col mt-5">
        {links.map((item, index) => {
          return (
            <FooterLink
              key={`footer-links-${item.href.trim()}-${item.title.trim()}-${index}`}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
