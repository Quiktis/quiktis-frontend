import * as React from "react";

import { cn } from "@/src/lib/utils";
import { FieldError } from "react-hook-form";

interface InputProps extends React.ComponentProps<"input"> {
  error?: FieldError;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          type={type}
          className={cn(
            "flex min-h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red-300 text-sm ">{error.message}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
