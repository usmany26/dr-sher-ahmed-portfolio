"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    window.setTimeout(() => form.reset(), 100);
  };

  return <form className="contact-form" action="https://formsubmit.co/ahmadsaddozaii@gmail.com" method="POST" target="_blank" onSubmit={handleSubmit}>
    <input type="hidden" name="_subject" value="New SmileLab consultation request"/>
    <input type="hidden" name="_template" value="table"/>
    <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off"/>
    <div className="form-row"><label><span>Name</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required/></label><label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label></div>
    <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required/></label>
    <label><span>Message</span><textarea name="message" rows={3} placeholder="How can Dr. Sher help?" required/></label>
    <button type="submit">Send Message <ArrowRight size={17}/></button>
  </form>;
}
