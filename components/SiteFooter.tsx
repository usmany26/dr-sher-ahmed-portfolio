"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./ui";

const mapUrl = "https://www.google.com/maps/place/31%C2%B025'16.9%22N+74%C2%B016'38.0%22E/@31.4213514,74.2772112,17z";

export function SiteFooter() {
  const reduceMotion = useReducedMotion();
  return <motion.footer initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .95, ease: [0.16, 1, 0.3, 1] }}>
    <div className="footer-grid">
      <div><Logo/><p>Advanced dental care with a personal touch. Restoring smiles, building confidence.</p><div className="social"><a href="https://www.linkedin.com/in/dr-sher-ahmad-khan-64ba66194/" target="_blank" rel="noreferrer" aria-label="Dr. Sher on LinkedIn"><Linkedin/></a><a href="https://www.instagram.com/sher.a.khann?igsh=MWF1NnEwbzAwcGJjdA%3D%3D" target="_blank" rel="noreferrer" aria-label="Dr. Sher on Instagram"><Instagram/></a><a href="https://www.facebook.com/share/1B1Qc4L4w4/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Dr. Sher on Facebook"><Facebook/></a></div></div>
      <div><b>Quick Links</b><a href="#about">About Us</a><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact-form">Contact</a></div>
      <div><b>Services</b><a>RCT / Root Canal</a><a>Dental Crowns</a><a>Teeth Whitening</a><a>Orthodontics</a><a>Cosmetic Dentistry</a><a>General Dentistry</a></div>
      <div><b>Contact Us</b><a><Phone/> +92 333 3344 272</a><a><Mail/> ahmadsaddozaii@gmail.com</a><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin/> 22/E Commercial, PGECHS-II, Lahore</a></div>
      <a className="map" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Open clinic location in Google Maps"><iframe title="Clinic location" src="https://www.google.com/maps?q=31.4213514,74.2772112&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></a>
    </div>
    <div className="footer-bottom"><span>© 2026 SmileLab. All rights reserved.</span></div>
  </motion.footer>;
}
