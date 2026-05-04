type SimpleListItemProps = {
  title: string;
  children: React.ReactNode;
};

export function SimpleListItem({ title, children }: SimpleListItemProps) {
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white px-[22px] py-5">
      <h4 className="m-0 mb-2 text-xl font-normal tracking-[-0.02em] text-ink">
        {title}
      </h4>
      <div className="[&>p]:m-0 [&>p]:text-base [&>p]:leading-[1.7] [&>p]:text-muted">
        {children}
      </div>
    </div>
  );
}
