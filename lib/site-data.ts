import { Award, BadgeCheck, Crown } from "lucide-react";
export const nav = ["Home", "About", "Services", "Results", "Reviews", "Contact"];
export const services = [
  { title: "RCT / Root Canal", image: "/assets/root-canal-cropped.png" },
  { title: "Dental Crowns", image: "/assets/dental-crown-cropped.png" },
  { title: "Teeth Whitening", image: "/assets/teeth-whitening-cropped.png" },
  { title: "Orthodontics", image: "/assets/orthodentics-cropped.png" },
  { title: "Cosmetic Dentistry", image: "/assets/scaling-cropped.png" },
  { title: "General Dentistry", image: "/assets/general-dentisty-cropped.png" },
];
export const doctors = [
  { name: "Dr. Reed", role: "Lead Dentist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=85" },
  { name: "Dr. Emily Clark", role: "Orthodontist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=85" },
  { name: "Dr. James Lee", role: "Implant Specialist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=85" },
  { name: "Dr. Sophia Patel", role: "Cosmetic Dentist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=85" },
];
export const testimonials = [
  { name: "Sarah Johnson", text: "The team completely transformed my smile. I couldn’t be happier!", treatment: "Smile makeover" },
  { name: "Michael Brown", text: "Professional, caring, and the results exceeded my expectations.", treatment: "Dental implants" },
  { name: "Emily Davis", text: "From consultation to final result, the experience was amazing.", treatment: "Teeth whitening" },
];
export const workExperience = [
  { organization: "Rashid Latif Dental College", role: "Demonstrator" },
  { organization: "The Dental Arc", role: "Associate Dentist" },
  { organization: "Dentech Dental Surgery", role: "Dentist" },
  { organization: "Data Darbar Hospital", role: "General Dentist" },
  { organization: "Iqbal Clinics", role: "Dental Intern" },
];
export const patientReviews = [
  { name: "Usman Yousaf", treatment: "Cosmetic Dentistry", review: "My teeth felt noticeably cleaner and healthier after the scaling. Dr. Sher explained everything clearly and made the whole visit comfortable." },
  { name: "Muhammad Ali", treatment: "RCT", review: "I was nervous about the root canal, but the treatment was smooth and virtually painless. The care and follow-up were excellent." },
  { name: "Muhammad Waqas", treatment: "Cosmetic Dentistry", review: "A very professional and gentle scaling experience. I am genuinely pleased with the clean results and friendly service." },
];
export const awards = [
  { title: "Excellence in Dental Care", meta: "National Dental Association", icon: Award },
  { title: "Top Implant Clinic", meta: "HealthCare Awards 2023", icon: BadgeCheck },
  { title: "Patient Choice Award", meta: "2024 Winner", icon: Crown },
];
