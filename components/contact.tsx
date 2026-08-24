"use client";

import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <section ref={ref} id="contact" className="contact-workshop">
      <div className="contact-workshop-stars" aria-hidden="true" />
      <span className="contact-gear contact-gear-left" aria-hidden="true">⚙</span>
      <span className="contact-gear contact-gear-right" aria-hidden="true">⚙</span>
      <span className="contact-comet contact-comet-one" aria-hidden="true" />
      <span className="contact-comet contact-comet-two" aria-hidden="true" />

      <div className="contact-workshop-shell">
        <header className="contact-workshop-heading">
          <div className="contact-radar" aria-hidden="true">
            <span />
            <span />
            <i />
          </div>
          <span className="contact-workshop-kicker">Mission control is online</span>
          <h2>Let&apos;s Build Something</h2>
          <p>Have a product idea, a tricky build, or a team that needs an extra pair of hands? Send the signal.</p>
        </header>

        <div className="contact-transmission" role="status" aria-label="Secure contact channel is online">
          <span className="contact-transmission-channel">
            <i aria-hidden="true" /> Secure uplink
          </span>
          <span className="contact-waveform" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i />
          </span>
          <span className="contact-transmission-code">BEIRUT // UTC+3 // CHANNEL 24</span>
        </div>

        <div className="contact-workshop-grid">
          <div className="contact-workshop-details">
            <div className="contact-signal-panel">
              <a href="mailto:mohammadhabibyassine@gmail.com" className="contact-signal-row">
                <span className="contact-signal-icon"><HiMail aria-hidden="true" /></span>
                <span><small>Email channel</small><strong>mohammadhabibyassine@gmail.com</strong></span>
              </a>
              <a href="tel:+96181653405" className="contact-signal-row">
                <span className="contact-signal-icon"><HiPhone aria-hidden="true" /></span>
                <span><small>Direct line</small><strong>+961 81 653 405</strong></span>
              </a>
              <div className="contact-signal-row">
                <span className="contact-signal-icon"><HiLocationMarker aria-hidden="true" /></span>
                <span><small>Base station</small><strong>Beirut, Lebanon · Remote worldwide</strong></span>
              </div>
            </div>

            <div className="contact-availability" role="status">
              <span className="contact-availability-light" aria-hidden="true" />
              <div><small>Current status</small><strong>Available for new missions</strong></div>
              <span className="contact-response-time">Replies within 24h</span>
            </div>

            <div className="contact-workshop-actions" aria-label="Professional links">
              <a href="https://github.com/mohammadhabibyassine" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /><span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mohammad-habib-yassine-6403aa242" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" /><span>LinkedIn</span>
              </a>
              <a href="/MohammadYassineCV.pdf" download>
                <HiDownload aria-hidden="true" /><span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="contact-console">
            <div className="contact-console-antenna" aria-hidden="true">
              <i />
              <span />
            </div>
            <div className="contact-console-scan" aria-hidden="true" />
            <div className="contact-console-bar" aria-hidden="true">
              <span /><span /><span />
              <strong>NEW_MESSAGE.exe</strong>
            </div>

            <form
              ref={formRef}
              className="contact-workshop-form"
              action={async (formData) => {
                setSubmitStatus("sending");
                setSubmitMessage("Sending...");

                const { data, error } = await sendEmail(formData);
                if (error) {
                  setSubmitStatus("error");
                  setSubmitMessage(error);
                  toast.error(error);
                  return;
                }

                const resendError = (
                  data as { error?: { message?: string } } | null | undefined
                )?.error?.message;

                if (resendError) {
                  setSubmitStatus("error");
                  setSubmitMessage(resendError);
                  toast.error(resendError);
                  return;
                }

                formRef.current?.reset();
                setSubmitStatus("success");
                setSubmitMessage("Message sent — I will reply soon.");
                toast.success("Email sent successfully!");
              }}
            >
              <div className="contact-field">
                <label htmlFor="contact-email"><span>01</span> Your email</label>
                <input
                  id="contact-email"
                  className="contact-workshop-input"
                  name="senderEmail"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={500}
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-field contact-field-message">
                <label htmlFor="contact-message"><span>02</span> Tell me about the mission</label>
                <textarea
                  id="contact-message"
                  className="contact-workshop-input contact-workshop-message"
                  name="message"
                  placeholder="What are we building?"
                  required
                  maxLength={5000}
                />
              </div>

              <SubmitBtn />

              <p
                aria-live="polite"
                className={`contact-workshop-status contact-workshop-status-${submitStatus}`}
              >
                {submitMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
