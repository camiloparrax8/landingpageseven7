import Link from "next/link";
import { Fragment } from "react";
import type { BreadcrumbItem } from "@/types/content";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="mb-[18px] flex flex-wrap gap-2 text-[13px] text-muted">
      {items.map((item, i) => (
        <Fragment key={`${i}-${item.label}`}>
          {i > 0 ? <span className="opacity-60">/</span> : null}
          {"href" in item ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <strong>{item.label}</strong>
          )}
        </Fragment>
      ))}
    </div>
  );
}
