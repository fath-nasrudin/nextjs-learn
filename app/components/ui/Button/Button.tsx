import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="px-4 py-0.5 font-semibold rounded bg-brand">
      {children}
    </button>
  );
}

export default Button;
