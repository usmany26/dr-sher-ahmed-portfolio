CLAUDE.md — Sher Ahmed Next.js Build Instructions

Project Goal

Build the dental landing page from the supplied visual reference as a real responsive Next.js application.

DESIGN.md is the visual source of truth. Follow it closely.

Do not use the screenshot as a page background. Recreate the design using semantic React components, Tailwind/CSS, proper assets, and tooth-shaped section primitives.

1. Technology

Use:

Next.js App Router

TypeScript

React

Tailwind CSS

next/image

next/font

Lucide React for suitable simple outline icons

SVG masks / clip paths for tooth-inspired large sections

Do not add a large UI library unless the existing project already depends on one.

Do not introduce unnecessary packages.

2. Source of Truth Priority

When choices conflict, use this order:

supplied visual reference

DESIGN.md

existing project conventions

implementation convenience

Never abandon the visual language just because a generic Tailwind solution is easier.

CRITICAL SHAPE IMPLEMENTATION — MOLAR CROWN, NO ROOTS

The blue section silhouettes must visually resemble a molar crown/body without roots, matching the supplied reference image.

Do not treat the shape as a generic organic rectangle, and do not draw a full anatomical tooth.

Correct geometry:

wide horizontally stretched molar crown

two broad subtle top crown lobes

shallow center valley

large rounded outer corners

mostly vertical sides with mild organic bowing

gently sculpted lower body

two shallow lower lobes are acceptable

absolutely NO tooth roots

absolutely no pointed downward extensions

no deep root fork or sharp concave notch

Target balance:

80–85% practical rounded panel
15–20% molar-crown silhouette

Use reusable variants:

type MolarShapeVariant = "hero" | "left" | "right" | "compact";

Desktop implementation should prefer SVG masks / clip paths.

The path must keep control-point displacement restrained. The crown resemblance comes mainly from:

two broad top lobes

shallow central top dip

subtle side taper

softly sculpted bottom body

It must NOT come from roots.

For paired sections, alternate left/right asymmetry while keeping the same molar-crown family.

On mobile, simplify the geometry rather than preserving complex paths.

Visual QA rule:

full tooth with roots = wrong

random blob = wrong

cloud = wrong

plain generic rounded rectangle = too weak

broad molar crown without roots, stretched into a content panel = correct

The supplied screenshot is the visual authority. Match its silhouette rather than inventing anatomical tooth geometry.

3. Mandatory Brand Colors

Use these exact values:

const colors = {
primary: "#6EABDD",
primaryDeep: "#4F8CC4",
lime: "#D6F24C",
purple: "#7C5CFF",
success: "#2FBF71",
ink: "#10162B",
white: "#FFFFFF",
};

Primary blue #6EABDD must visually dominate.

Do not substitute Tailwind blue-\*, cyan, or a random gradient.

Primary CTA lime is #D6F24C.

4. Global CSS Variables

Add:

:root {
--page: #FFFFFF;
--primary: #6EABDD;
--primary-deep: #4F8CC4;
--lime: #D6F24C;
--purple: #7C5CFF;
--success: #2FBF71;
--ink: #10162B;
--shadow-card: 0 18px 50px rgba(16, 22, 43, 0.08);
--shadow-floating: 0 24px 60px rgba(16, 22, 43, 0.12);
}

5. Suggested Project Structure

app/
layout.tsx
page.tsx
globals.css

components/
layout/
Container.tsx
Header.tsx
Footer.tsx

sections/
HeroSection.tsx
AboutSection.tsx
ServicesSection.tsx
ClinicSection.tsx
WhyChooseUsSection.tsx
ResultsSection.tsx
TestimonialsSection.tsx
TeamSection.tsx
AwardsSection.tsx
FinalCtaSection.tsx

ui/
ToothSection.tsx
PillButton.tsx
Eyebrow.tsx
FloatingCard.tsx
StatCard.tsx
ServiceCard.tsx
DoctorCard.tsx
TestimonialCard.tsx
AwardCard.tsx
AvatarStack.tsx
CircularConsultationBadge.tsx

icons/
ToothLogo.tsx

lib/
site-data.ts
cn.ts

public/
images/
hero/
doctors/
clinic/
results/
patients/
footer/

Adapt to the current repository rather than forcing this structure if a clean equivalent already exists.

6. Component Strategy

Do not write the whole page in app/page.tsx.

page.tsx should mostly compose section components.

Example:

export default function HomePage() {
return (

<main>
<HeroSection />
<AboutServicesGroup />
<ClinicWhyChooseGroup />
<ResultsTestimonialsGroup />
<BottomSections />
<Footer />
</main>
);
}

Use data-driven components for repeating content.

7. ToothSection Primitive

Create a reusable section primitive:

type ToothSectionProps = {
variant?: "hero" | "content" | "services" | "cta";
className?: string;
children: React.ReactNode;
};

Usage:

<ToothSection variant="content" className="p-8 md:p-12">
  ...
</ToothSection>

This component owns:

primary blue background

clipping/mask

base responsive shape behavior

overflow rules

Do not manually reproduce random shape CSS in every section.

8. Tooth Shape Implementation

Preferred order:

SVG mask

SVG clip-path

CSS clip-path

asymmetric border-radius as a mobile/fallback solution

Do not use blob generators.

Shape rules:

mostly horizontal top

shallow crown bumps

subtle center indentation

mostly straight sides

soft root movement at bottom

no sharp points

Target:

80% rounded card

20% tooth/soft editorial silhouette

Create only 3–4 variants and reuse them.

Mobile must simplify the geometry.

9. Main Page Layout

Desktop max-width:

roughly 1200px–1360px

Large blue panels must NOT touch browser edges.

Maintain white exterior gutters.

Common grouping:

Hero
About + Services
Clinic + Why Choose Us
Results + Testimonials
Team + Awards + Final CTA
Footer

Use small gaps between paired blue sections to match the reference.

10. Hero

Header is inside the hero section.

Structure:

Hero ToothSection
├── Header
└── Hero Content
├── Left Copy
└── Right Visual

Desktop:

min-height about 650px

giant heading on left

oversized dental visual on right

layered floating elements

Do not put the tooth image in a card.

Hero Z-index

background z-0
decorations z-10
tooth z-20
workers z-25
floating cards z-30
navigation z-50

Ensure the 98% card sits above the illustration.

11. Header

Desktop:

Logo | navigation | lime CTA

Links:

Home

About

Services

Results

Reviews

Contact

Active Home can use a subtle underline.

Mobile:

logo

menu trigger

no squeezed desktop nav

Header remains visually integrated into the blue hero.

12. Logo

Use SVG.

Requirements:

lime tooth outline

white SmileLab wordmark on blue

no excess bounding-box whitespace

visually about 30px–36px high in desktop header

If icon + text are rendered separately, preserve the same proportions.

13. Buttons

Create a reusable primary CTA.

<PillButton>
  Book Your Consultation
  <ArrowRight />
</PillButton>

Style:

background: #D6F24C;
color: #10162B;
min-height: 52px;
padding-inline: 28px;
border-radius: 999px;
font-weight: 650;

Hover:

very small scale

arrow moves 3px–5px

subtle shadow

No dramatic bounce.

14. Eyebrow Pills

Create reusable small white pills for:

About the Dentist

Our Services

Choose Your Clinic

Why Choose Us

Real Results, Real Smiles

Meet Our Experts

Awards & Certifications

Keep them compact and understated.

15. Image Handling

Use next/image for raster imagery.

Use proper sizes.

Use priority only for hero-critical assets.

Use lazy loading below the fold.

Do not make people/tooth imagery CSS backgrounds unless clipping needs justify it.

If exact assets are not available:

preserve layout and proportions with placeholders

do not substitute random imagery that changes composition

make replacement paths obvious

16. Hero Tooth / Worker Composition

If the tooth and workers are supplied as one composited file, use one image.

If separate assets exist, layer them inside a relative container.

Example:

<div className="relative h-[520px]">
  <Image
    src="/images/hero/tooth.webp"
    alt=""
    fill
    className="object-contain pointer-events-none"
  />
</div>

Decorative workers can use pointer-events-none.

17. Hero Typography

Suggested responsive class:

<h1 className="
  text-[52px]
  leading-[0.92]
  tracking-[-0.045em]
  font-bold
  text-white
  sm:text-[64px]
  lg:text-[88px]
  xl:text-[104px]
">
  Restore
  <br />
  Your True
  <br />
  Smile
</h1>

Fine-tune after visual comparison.

18. About Section Requirements

Must contain:

About the Dentist pill

heading

short body copy

lime Learn More button

large dentist portrait

white floating 15+ Years Experience card

The portrait integrates directly with the blue panel.

19. Services Requirements

Must contain six services:

Dental Implants

Dental Crowns

Teeth Whitening

Orthodontics

Cosmetic Dentistry

General Dentistry

Desktop:

3 × 2 white card grid

Bottom:

lime View All Services

Cards should be borderless and compact.

20. Clinic Section Requirements

Must contain:

large clinic photo

Premium Clinic purple card

Standard Clinic white card

Premium color:

#7C5CFF

Do not style these like admin/dashboard cards.

21. Why Choose Us Requirements

Must contain three white statistic cards:

15+ Years of Experience

20k+ Patients Treated

98% Success Rate

Also:

heading

italic support text

lime Learn More CTA

22. Results Requirements

Must contain three image-led before/after cards:

Teeth Whitening

Dental Implants

Veneers

Use:

split comparison images

slider divider

circular slider handle

treatment label

Add subtle carousel indicators.

23. Testimonials Requirements

Use three white testimonial cards.

Each includes:

avatar

patient name

stars

short review

No heavy border.

Add subtle pagination dots.

24. Team Requirements

Use four doctor cards in the reference style.

Each:

large portrait

name

specialty

Bottom:

lime View All Doctors

Do not make generic employee cards.

25. Awards Requirements

Use:

section label

heading

stacked white award cards

Each award:

outline icon

title

year/organization

arrow

26. Final CTA Requirements

Left:

Ready to Transform Your Smile?

short copy

lime Book Your Consultation

Right:

large integrated smiling patient portrait

Do not put the portrait in a small normal card.

27. Footer Requirements

Blue footer with:

SmileLab brand

short brand copy

social icons

Quick Links

Services

Contact Us

map preview

Bottom:

copyright

Privacy Policy

Terms of Service

Use white / muted-white text.

28. Data-Driven Repeated Content

Create lib/site-data.ts.

Example:

export const services = [
{ title: "Dental Implants", icon: "implant" },
{ title: "Dental Crowns", icon: "crown" },
{ title: "Teeth Whitening", icon: "sparkles" },
{ title: "Orthodontics", icon: "braces" },
{ title: "Cosmetic Dentistry", icon: "tooth" },
{ title: "General Dentistry", icon: "shield" },
];

Do the same for:

nav

testimonials

doctors

awards

results

footer links

29. Responsive Breakpoints

Under 640px

one-column main composition

white exterior gutter 16px

simplified tooth shapes

hero stacked

section padding around 24px

services 1–2 columns depending on available width

CTA portrait below copy

no desktop absolute positioning carried over blindly

640–1024px

compressed layouts

card grids often 2 columns

reduced overlap

simplified decorative objects

1024px+

full paired panels

layered imagery

intentional overlap

full tooth silhouettes

30. Mobile Hero Order

header

headline

description

primary CTA

social proof

hero tooth visual

statistic card

Mobile hero title:

approximately 48px–64px

Do not simply scale down the desktop arrangement.

31. Accessibility

Required:

semantic HTML

correct heading order

real links and buttons

keyboard focus states

aria-label for icon-only controls

adequate contrast

meaningful alt text

reduced-motion support

Never remove focus outlines without a visible replacement.

32. Performance

Use:

next/image

sizes

optimized WebP/AVIF where available

lazy-loading below fold

SVG for icons/logo

hero-only priority assets

Avoid oversized source images.

33. Animation

Prefer CSS/Tailwind for simple motion.

Example:

@keyframes float-soft {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-8px); }
}

@keyframes rotate-slow {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

Keep it subtle.

Respect:

@media (prefers-reduced-motion: reduce) {
...
}

Do not add an animation library unless needed or already installed.

34. Avoid Generic Tailwind Output

Do not repeatedly solve the design with:

rounded-3xl bg-blue-400 p-8

That destroys the visual character.

Use:

exact color tokens

custom shape variants

asymmetric geometry

controlled overlap

intentional spacing

correct editorial typography

35. No Screenshot-as-Website

Never implement the site as:

<Image src="/reference.png" fill />

The screenshot is a design reference only.

Every visible text element, card, button, image, and section must be a real interface element.

36. Build Order

Build in this order:

inspect current repository

global font and CSS

design tokens

page container system

ToothSection shape variants

button / eyebrow / floating-card primitives

header + hero

About + Services

Clinic + Why Choose Us

Results + Testimonials

Team + Awards + CTA

footer

responsive behavior

subtle motion

visual QA and polish

Do not spend too long on microdetails before the main composition matches.

37. Visual QA Workflow

After every major section:

run the app

compare visually with the reference

verify section width and height

verify tooth silhouette

verify heading scale and line breaks

verify image scale/position

verify white gutters

verify card overlap

verify lime CTA placement

verify mobile behavior

Fix macro differences first.

38. Desktop Targets

Target main content width:

approximately 1200px–1360px

Do not stretch sections edge-to-edge.

Maintain consistent white page margins.

39. Code Quality

Use:

focused components

meaningful names

strict TypeScript

reusable variants

no duplicated magic values

no giant page.tsx

no repeated massive inline SVGs

no unused code

Prefer small scoped changes.

40. Claude Working Rules

When modifying this project:

inspect existing files before editing

preserve working functionality

do not refactor unrelated areas

do not install dependencies without a clear need

do not change the brand palette

do not replace provided assets casually

do not invent additional brand colors

do not convert tooth sections into generic rounded cards

do not rewrite whole files for tiny changes when targeted edits work

keep work scoped to the user request

If a requested change conflicts with DESIGN.md, identify the conflict before intentionally deviating.

41. Definition of Done

The page is done when:

it is a real responsive Next.js interface

all major reference sections are implemented

primary blue is exactly #6EABDD

CTA lime is exactly #D6F24C

blue sections use controlled soft warped-card silhouettes matching the reference

white exterior gutters remain visible

hero has oversized layered dental imagery

cards are white with subtle shadows

desktop composition closely follows the reference

mobile is deliberately reflowed

no horizontal overflow exists

accessibility basics are implemented

the result feels premium/editorial rather than like a generic dental template
