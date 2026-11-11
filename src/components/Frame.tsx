import type { ReactNode } from "react";

type FrameProps = {
  className?: string;
  children: ReactNode;
};

export function Frame({ className, children }: FrameProps) {
  return (
    <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-6 ${className ?? ""}`}>{children}</div>
  );
}
