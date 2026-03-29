import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-accent text-bg-primary font-display font-bold text-sm tracking-wide rounded-none outline-none transition-all hover:bg-[#b8ea4f] active:scale-[0.98] disabled:opacity-50"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-bg-primary/40 border-t-bg-primary" />
          Sending...
        </>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
