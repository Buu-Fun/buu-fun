import Link from "next/link";
import React, { HTMLAttributeAnchorTarget } from "react";
export type TFooterLink = {
  href: string;
  _blank?: HTMLAttributeAnchorTarget;
  title: string;
};
export function FooterLink({ _blank, href, title }: TFooterLink) {
  return (
    <Link
      href={href}
      target={_blank}
      className="text-base text-white hover:text-white/80 "
    >
      {title}
    </Link>
  );
}
export type TFooterLinks = { title: string; links: TFooterLink[] };
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
