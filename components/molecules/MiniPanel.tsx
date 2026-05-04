type MiniPanelProps = {
  title: string;
  children: React.ReactNode;
};

export function MiniPanel({ title, children }: MiniPanelProps) {
  return (
    <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.08] p-[30px]">
      <h4 className="m-0 mb-2.5 text-[26px] font-normal leading-[1.08] tracking-[-0.03em] text-white">
        {title}
      </h4>
      <div className="text-white/75 [&>p]:m-0 [&>p]:mb-4 [&>p]:text-base [&>p]:leading-[1.7] [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
