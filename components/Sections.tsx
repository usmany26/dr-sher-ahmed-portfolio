import Image from "next/image";
import { ArrowRight, BadgeCheck, Crown, Heart, Instagram, Mail, MapPin, Phone, Users } from "lucide-react";
import { awards, services } from "@/lib/site-data";
import { CustomerReviewsCarousel } from "./CustomerReviewsCarousel";
import { ContactForm } from "./ContactForm";
import { Eyebrow, Logo, PillButton, ToothSection } from "./ui";

const clinic = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85";
const patient = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85";
const dentist = "/assets/dr-sher.png";

export function AboutServices() { return <div className="pair pair-about">
  <ToothSection id="about"><div className="copy"><Eyebrow>About the Dentist</Eyebrow><h2>Care. Precision.<br />Beautiful Smiles.</h2><p>Dr. Sher combines advanced technology with a gentle touch to deliver exceptional dental care for the whole family.</p></div><div className="portrait"><Image src={dentist} alt="Dr. Sher, lead dentist" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="pmdc-chip"><BadgeCheck aria-hidden="true"/><span>PMDC Reg. No. 809450-01-D</span></div><div className="experience"><strong>4+</strong><span>Years<br />Experience</span></div></ToothSection>
  <ToothSection variant="services" id="services"><Eyebrow>Our Services</Eyebrow><h2>Comprehensive Care<br />for Every Smile</h2><div className="service-grid">{services.map(({ title, image }) => <article className="service-card" key={title}><div className="service-icon"><Image src={image} alt="" fill sizes="108px" /></div><b>{title}</b></article>)}</div></ToothSection>
  </div>; }

export function ClinicWhy() { return <div className="pair">
  <ToothSection><Eyebrow>Choose Your Clinic</Eyebrow><h2>Personalized Care<br />for Your Needs</h2><div className="clinic-layout"><div className="clinic-photo"><Image src={clinic} alt="Bright modern dental clinic" fill sizes="50vw" /></div><div className="clinic-options"><article className="premium"><h3><Crown />The Dental Arch</h3><p>Advanced care with the latest technology and personalized experience.</p></article><article><h3>Dentech Dental Surgery</h3><p>Quality care for everyday dental needs at affordable prices.</p></article></div></div></ToothSection>
  <ToothSection id="results"><Eyebrow>Why Choose Us</Eyebrow><h2>Experience the<br />Highest Standard<br />of Dental Care</h2><div className="stats">{[["4+","Years of Experience"],["200+","Patients Treated"],["98%","Success Rate"]].map(([n,l])=><article key={l}><Users /><strong>{n}</strong><span>{l}</span></article>)}</div><blockquote>“We combine expertise, technology, and compassion to give you the smile you deserve.”</blockquote></ToothSection>
  </div>; }

export function ResultsTestimonials() { return <div className="pair pair-results">
  <ToothSection variant="services" id="contact-form"><Eyebrow>Contact Dr. Sher</Eyebrow><h2>Let’s Talk About<br />Your Smile</h2><ContactForm /></ToothSection>
  <ToothSection variant="services" id="experience" className="work-image-section"><Eyebrow>Professional Journey</Eyebrow><h2>Work Experience</h2><div className="work-image"><Image src="/assets/experience.png" alt="Dr. Sher's professional work experience journey" fill sizes="(max-width: 720px) 100vw, 50vw" /></div></ToothSection>
  </div>; }

export function BottomSections() { return <div className="bottom-grid">
  <ToothSection id="reviews"><Eyebrow>Patient Stories</Eyebrow><h2>Customer Reviews</h2><CustomerReviewsCarousel /></ToothSection>
  <ToothSection variant="compact"><Eyebrow>Awards &amp; Certifications</Eyebrow><h2>Trusted. Recognized.<br />Awarded.</h2><div className="award-list">{awards.map(({title,meta,icon:Icon})=><article key={title}><Icon/><div><b>{title}</b><span>{meta}</span></div><ArrowRight/></article>)}</div></ToothSection>
  <ToothSection variant="compact" id="contact"><div className="cta-copy"><h2>Ready to Transform<br />Your Smile?</h2><p>Book your consultation today and take the first step towards a healthier, more confident you.</p><PillButton href="https://wa.me/923333344272?text=Hello%20Dr.%20Sher%2C%20I%20would%20like%20to%20book%20a%20consultation.">Book Your Consultation</PillButton></div><div className="patient"><Image src={patient} alt="Smiling SmileLab patient" fill sizes="40vw" /></div></ToothSection>
  </div>; }

export function Footer() { return <footer><div className="footer-grid"><div><Logo/><p>Advanced dental care with a personal touch. Restoring smiles, building confidence.</p><div className="social"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook"><Heart/></a></div></div><div><b>Quick Links</b><a href="#about">About Us</a><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div><div><b>Services</b><a>Dental Implants</a><a>Dental Crowns</a><a>Teeth Whitening</a><a>Orthodontics</a></div><div><b>Contact Us</b><a><Phone/> +92 333 3344 272</a><a><Mail/> ahmadsaddozaii@gmail.com</a><a><MapPin/> 22/E Commercial, PGECHS-II, Lahore</a></div><div className="map"><MapPin/><span>SmileLab<br/>New York</span></div></div><div className="footer-bottom"><span>© 2026 SmileLab. All rights reserved.</span><span>Privacy Policy &nbsp;&nbsp; Terms of Service</span></div></footer>; }
