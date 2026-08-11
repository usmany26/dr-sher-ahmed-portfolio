"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { nav } from "@/lib/site-data";
import { Logo, PillButton } from "./ui";
export function Header() {
  const [open, setOpen] = useState(false);
  return <header><Logo /><nav className={open ? "nav-open" : ""} aria-label="Main navigation">{nav.map((n, i) => <a onClick={() => setOpen(false)} className={i === 0 ? "active" : ""} key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav><PillButton href="https://wa.me/923333344272?text=Hello%20Dr.%20Sher%2C%20I%20would%20like%20to%20book%20a%20consultation.">Book Consultation</PillButton><button className="menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(value => !value)}><Menu /></button></header>;
}
