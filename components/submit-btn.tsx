import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="contact-workshop-submit"
      disabled={pending}
      aria-label={pending ? "Sending message" : "Submit contact form"}
    >
      <span>{pending ? "Sending..." : "Submit"}</span>
    </button>
  );
}
