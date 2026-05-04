import { cn } from "@/lib/cn";

type FormFieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export function FormField({ id, label, children, fullWidth }: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", fullWidth && "col-span-full")}>
      <label htmlFor={id} className="text-sm font-bold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

/** Clases compartidas para inputs del formulario de contacto. */
export const FIELD_CONTROL_CLASS =
  "box-border w-full rounded-[14px] border border-line bg-surface px-4 py-3.5 font-inherit text-body";
