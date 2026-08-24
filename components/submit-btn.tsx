import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { HiPaperAirplane } from "react-icons/hi";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="contact-workshop-submit"
      disabled={pending}
      aria-label={pending ? "Sending message" : "Submit contact form"}
    >
      <span>{pending ? "Sending..." : "Send message"}</span>
      <HiPaperAirplane className="contact-submit-icon" aria-hidden="true" />
    </button>
  );
}
