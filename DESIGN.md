DESIGN.md — Sher Ahmed Visual Design System

This file is the visual source of truth for the Sher Ahmed Portfolio website. Reproduce the supplied reference image as a real responsive interface rather than placing the screenshot on the page.

1. Core Visual Direction

SmileLab should feel modern, premium, friendly, editorial, playful, clean, and unmistakably dental.

The page background is pure white. Large blue content sections float on the page as separate visual objects. These sections must use subtle soft warped-card silhouettes matching the reference instead of generic rounded rectangles. White cards, large typography, oversized dental imagery, and lime CTAs create the visual hierarchy.

The website must NOT feel like a traditional corporate medical site.

Primary formula:

white canvas

#6EABDD soft organic section silhouettes matching the reference

large bold white headings

white floating cards

#D6F24C CTA accents

oversized dental/people imagery

minimal rounded icons

soft overlapping layers

generous whitespace

The signature design language is 80% premium rounded card and 20% restrained organic edge geometry.

CRITICAL SHAPE RULE — Molar Crown Without Roots

The large blue section shapes must resemble the upper crown/body of a molar tooth without any roots, exactly like the supplied reference image.

This is not a literal tooth illustration. It is a content panel whose outer silhouette subtly suggests a molar crown.

The correct mental model is:

a wide, soft molar crown that has been stretched horizontally into a website section

Overall proportion

The section must remain highly usable for layout:

approximately 80–85% rounded content panel

approximately 15–20% molar-crown character

wide rather than tall

no roots

no pointed lower extensions

no narrow tooth neck

Top edge — molar crown

The top edge is where most of the molar resemblance should come from.

Use:

two broad, extremely soft crown lobes

a shallow center valley between them

very smooth transitions

low amplitude curves

The crown bumps must be subtle enough that the panel still feels almost rectangular.

Conceptually:

       broad lobe             broad lobe
      __________             __________

**/ \_**\_\_\_\_****/ \_\_
/ \

Do NOT make the lobes circular, bubbly, or cloud-like.

Left and right sides

Sides should:

begin with large rounded upper corners

remain mostly vertical

bow very slightly outward or inward

taper very gently toward the lower portion

never form a tooth neck

The side deformation should be subtle.

Bottom edge — NO ROOTS

The bottom must not contain tooth roots.

Instead, create a broad molar-body base:

two very shallow rounded lower lobes

a soft center rise/indentation

no downward points

no root forks

no deep notches

Conceptually:

\ /
\_\_ ****\_\_\_**** **/
\_**\_****/ \_**\_\_\_**/

This lower contour should be much shallower than an anatomical tooth.

Full silhouette concept

Use this as the visual idea only:

        _________          _________
    ___/         \________/         \___

\_/ \_
/ \
| |
| |
| |
\ /
\_** **\_\_\_\_**** **\_/
\_**\_****/ \_**\_\_\_**/

Then stretch it horizontally so it functions as a website panel.

What makes it match the reference

The reference image has:

large rounded corners

subtle crown bumps at the top

soft asymmetric side movement

a gently sculpted bottom

no roots

no sharp notches

no obvious tooth outline

generous flat usable interior space

The molar resemblance should be noticeable when you look at the whole silhouette, but the content should remain the first thing the user notices.

Hero shape

The hero uses the largest and softest molar crown.

Requirements:

very wide

two extremely broad top lobes

shallow top-center dip

lower edge with two soft broad body lobes

strong rounded outer corners

no root geometry

less deformation than smaller sections because it contains the navigation and large hero composition

Smaller section shapes

About, Services, Clinic, Why Choose Us, Results, Testimonials, Team, Awards, and CTA should use related crown-only molar silhouettes.

Create 3–4 variants:

Molar A — Hero

broadest and smoothest

nearly rectangular

shallow crown valley

shallow lower body sculpting

Molar B — Left Card

slightly stronger upper-left crown

softer upper-right crown

mild asymmetric lower contour

Molar C — Right Card

opposite bias from Molar B

keeps paired cards from appearing duplicated

Molar D — Compact CTA

slightly more visible crown character

compact proportions

still no roots

Shape implementation

Desktop should preferably use SVG masks or clip paths.

Recommended normalized coordinate system:

viewBox="0 0 1000 600"

Keep most control points close to the bounding rectangle.

Example starting geometry:

<path d="
M 70 24
C 180 4, 300 12, 420 28
C 500 38, 555 38, 635 28
C 760 10, 850 5, 930 28
C 970 40, 985 75, 978 125
L 966 455
C 962 510, 935 545, 890 557
C 780 570, 700 548, 610 552
C 545 556, 515 570, 455 563
C 360 550, 275 570, 175 558
C 105 550, 62 540, 48 485
C 38 445, 48 395, 43 345
C 38 285, 28 235, 38 180
C 43 135, 36 88, 52 55
C 57 43, 62 33, 70 24
Z" />

This is a starting point, not a fixed final path. Adjust against the reference image.

Important: the mask should suggest a molar crown/body without roots.

Mobile behavior

On mobile, preserve the crown idea but reduce deformation.

Use:

subtle top-center dip

broad rounded upper lobes

mostly straight sides

simple rounded lower edge

no root-like lower geometry

Fallback:

border-radius: 38px 34px 42px 36px;

Optionally add a very mild clip-path to create the crown dip.

Non-negotiable acceptance test

A section is correct when:

it resembles the crown/body of a molar

it has NO roots

it remains mostly rectangular

crown lobes are broad and subtle

the bottom is sculpted but not forked

it does not look like a cloud

it does not look like a random liquid blob

it matches the soft silhouette language of the supplied reference image

2. Color System

Define all colors as CSS variables.

:root {
--color-page: #FFFFFF;
--color-blue: #6EABDD;
--color-blue-deep: #4F8CC4;
--color-lime: #D6F24C;
--color-purple: #7C5CFF;
--color-success: #2FBF71;
--color-ink: #10162B;
--color-white-82: rgba(255, 255, 255, 0.82);
--color-white-15: rgba(255, 255, 255, 0.15);
--color-blue-12: rgba(110, 171, 221, 0.12);
--shadow-card: 0 18px 50px rgba(16, 22, 43, 0.08);
--shadow-floating: 0 24px 60px rgba(16, 22, 43, 0.12);
}

Primary Dental Blue — #6EABDD

This is the dominant visual color. Use it for the hero, large section backgrounds, service areas, CTA sections, footer, dental graphics, and decorative surfaces. Do not substitute a darker or more saturated blue.

Deep Blue — #4F8CC4

Use sparingly for depth, illustration shadows, secondary blue elements, icon details, and hover states.

Lime Accent — #D6F24C

This is the primary CTA/accent color. Use it for Book Consultation buttons, arrow buttons, active states, highlighted badges, and the circular consultation badge. It should strongly contrast against the blue, but never be overused.

Purple Accent — #7C5CFF

Use occasionally for premium/secondary decorative moments, especially the Premium Clinic card. Purple must never compete with the lime CTA.

Dark Ink — #10162B

Use instead of pure black on white/lime surfaces for card headings, body text, labels, and utility copy.

Success Green — #2FBF71

Use only for semantic positive states such as verified, success, availability, positive statistics, or check icons.

White — #FFFFFF

Use for the page background, typography over blue, floating cards, service cards, icon surfaces, and light UI elements.

3. Typography

Use a clean geometric sans-serif. Preferred:

font-family: var(--font-inter), Inter, Arial, sans-serif;

If a closer project font exists, it may be used only if it preserves the same modern editorial feel.

Hero Headline

Desktop:

72px–110px

weight 700–800

line-height 0.90–1.0

letter-spacing -0.04em

color #FFFFFF

Suggested:

.hero-title {
font-size: clamp(4rem, 7vw, 7rem);
line-height: 0.92;
letter-spacing: -0.045em;
font-weight: 760;
}

Intentional line break:

Restore
Your True
Smile

Section Headings

Desktop:

34px–52px

weight 600–750

line-height 0.98–1.1

slightly negative tracking

Card Headings

18px–28px

weight 600–700

Body Text

Desktop:

16px–18px

line-height 1.5–1.7

Mobile:

14px–16px

White body text over blue:

color: rgba(255,255,255,0.82);

Keep paragraph width around 420px–560px.

4. Layout System

Page:

body {
margin: 0;
background: #FFFFFF;
color: #10162B;
}

Desktop container:

max-width: 1360px;
margin-inline: auto;
padding-inline: 20px;

The blue sections must remain detached from the browser edges.

Recommended:

side gutter desktop: 24px–40px

vertical gap between blue panels: 16px–32px

major grouping gap: up to 48px

section padding desktop: 64px–96px

section padding tablet: 48px–64px

section padding mobile: 24px–32px

Reference page rhythm:

Hero
About + Services
Clinic Choice + Why Choose Us
Results + Testimonials
Team + Awards + Final CTA
Footer

5. Tooth-Inspired Section Geometry

This is the most important design rule.

Do NOT make random liquid blobs, cloud shapes, or extremely wavy cards. Large sections must stay easy to lay content into.

The silhouette should be:

80% rounded content card + 20% restrained organic edge geometry

Top:

mostly horizontal

two subtle broad shallow top-edge variations

shallow center indentation

never dramatic

Sides:

mostly straight

smooth organic variation

generous corner transitions

Bottom:

slight inward taper

two shallow broad shallow edge variations

no sharp roots or points

Desktop visual radius:

40px–100px

Mobile:

28px–48px

Use asymmetric corners where useful.

Fallback example:

border-radius: 72px 52px 82px 60px;

Important panels should use SVG masks or clip-path rather than only border-radius.

6. Reusable Shape Variants

Create only 3–4 reusable shape families.

Shape A — Hero

subtle crown movement at top

slightly tapered lower corners

broad clean central area

mild subtle lower-edge variation

Shape B — Content

Use for About, Clinic, Results, Team.

mostly rectangular

one slightly asymmetric corner

shallow edge movement

Shape C — Services / Testimonials

relatively flat top

subtle bottom root curve

broad soft corners

Shape D — CTA

compact panel

slightly stronger lower tooth character

still easy to place text/image inside

Alternate them across the page. Do not generate a different random silhouette for every section.

On mobile, simplify them into asymmetric rounded cards.

7. Hero Section

The header sits inside the hero blue shape.

Approximate desktop:

hero width: full content container

height: 620px–760px

padding: 28px 70px 56px

background: #6EABDD

Navigation

Left:

tooth outline logo in lime

SmileLab wordmark in white

Center:

Home

About

Services

Results

Reviews

Contact

Right:

lime Book Consultation pill

Nav height:

approximately 72px–86px

Logo visual height:

30px–36px

Hero Content

Two-column editorial layout.

Left:

giant 3-line headline

short supporting description

lime CTA

patient avatars/social proof

Right:

oversized glossy tooth

miniature dental workers

floating 98% card

circular lime consultation badge

Do not constrain the hero illustration into a normal rectangular image card. It may extend beyond the nominal grid.

98% Statistic Card

White card:

width 170px–210px

radius 28px–38px

soft floating shadow

large green 98%

dark text label

tiny lime icon control

Circular Consultation Badge

Lime circle:

roughly 100px–130px

outer ring text

central diagonal arrow

optional very slow rotation

Outer copy:

BOOK YOUR CONSULTATION • BOOK YOUR CONSULTATION •

8. About / Dentist Section

Blue tooth-shaped panel with:

small white pill: About the Dentist

heading: Care. Precision. Beautiful Smiles.

body copy

lime Learn More button

large dentist portrait

floating 15+ Years Experience card

The portrait should integrate directly into the blue panel and may overlap edges. Do not place it in a normal bordered card.

9. Services Section

Blue tooth-shaped panel with:

white eyebrow pill

heading: Comprehensive Care for Every Smile

six white service cards

lime View All Services CTA

Desktop card grid:

3 columns × 2 rows

Services:

Dental Implants

Dental Crowns

Teeth Whitening

Orthodontics

Cosmetic Dentistry

General Dentistry

Card style:

background: #FFFFFF;
border-radius: 18px 28px 22px 20px;

Each card contains:

clean dental icon

title

minimal supporting decoration

Keep cards compact, airy, and borderless.

10. Clinic Choice Section

Blue panel.

Left:

eyebrow pill

heading: Personalized Care for Your Needs

large bright clinic/interior photo

Right:

two vertically stacked clinic options

Premium Clinic

Primary visible accent: #7C5CFF

Contains:

crown/tooth icon

title Premium Clinic

short description

small white arrow circle

Standard Clinic

White card:

tooth icon

title Standard Clinic

short dark text

small arrow control

The cards should feel more like premium hospitality/product choice cards than hospital directory entries.

11. Why Choose Us

Blue panel with heading:

Experience the
Highest Standard
of Dental Care

Use three white stat cards:

15+ Years of Experience

20k+ Patients Treated

98% Success Rate

Each card:

large number

short descriptor

simple rounded outline icon

generous white space

Below:

centered italic supporting line

lime Learn More button

12. Before & After

Blue section titled Before & After.

Desktop:

three large visual comparison cards

Each:

rounded image area

left/right comparison

center vertical slider

circular slider handle

treatment label beneath

Treatments:

Teeth Whitening

Dental Implants

Veneers

Do not make these tiny thumbnail cards.

Add subtle carousel dots below.

13. Testimonials

Blue panel titled What Our Patients Say.

Use three floating white testimonial cards.

Each:

patient avatar

patient name

star rating

short quote

treatment context if available

Card example:

border-radius: 22px 30px 24px 22px;
box-shadow: 0 18px 50px rgba(16,22,43,0.08);

No heavy borders.

Add subtle pagination dots below.

14. Team

Blue panel.

Label:

Meet Our Experts

Heading:

The Team Behind Your Smile

Use four doctor portrait cards as in the reference.

Each:

large portrait

name

specialty

Keep them friendly and simple. The image area may have irregular rounded masks consistent with the organic design language.

Bottom:

lime View All Doctors button

15. Awards

Smaller blue panel.

Label:

Awards & Certifications

Heading:

Trusted. Recognized. Awarded.

Use stacked compact white award cards.

Each:

outline award icon

award title

organization/year

arrow chevron

Keep this section editorial and compact.

16. Final CTA

Blue tooth panel.

Left:

heading Ready to Transform Your Smile?

short supporting copy

lime Book Your Consultation button

Right:

large smiling patient portrait integrated into the panel

The image should visually anchor the section and can overlap edges. Do not put it in a small photo card.

17. Footer

Footer is a blue section, not a plain white footer.

Desktop columns:

SmileLab brand + short text + social icons

Quick Links

Services

Contact Us

map card

Bottom bar:

copyright

Privacy Policy

Terms of Service

Use white typography and muted white secondary text.

Footer geometry should be organic but simpler than major content sections.

18. Buttons

Primary CTA:

background: #D6F24C;
color: #10162B;
min-height: 52px;
padding: 0 28px;
border-radius: 999px;
font-weight: 650;

Hover:

scale about 1.01–1.03

arrow moves 3px–5px

subtle shadow

No dramatic bouncing.

Secondary white pill:

background: #FFFFFF;
color: #10162B;
border-radius: 999px;
padding: 8px 16px;
font-size: 12px;

19. Floating White Cards

General style:

background: #FFFFFF;
color: #10162B;
border-radius: 20px 32px 24px 22px;
box-shadow: 0 18px 50px rgba(16,22,43,0.08);

Avoid visible gray borders unless needed for accessibility.

Floating cards can overlap illustrations and section edges.

20. Icons

Use one consistent icon family.

Rules:

modern outline style

rounded stroke ends

1.5–2px strokes

minimal internal detail

no heavy filled icon packs

Useful icons:

tooth

sparkle

calendar

arrow

location

shield

check

star

clock

phone

dental tools

heart

Icon container on blue:

width: 48px;
height: 48px;
background: rgba(255,255,255,0.15);
border-radius: 16px;

On white:

background: rgba(110,171,221,0.12);

21. Image Style

Photography should feel:

bright

natural

warm

friendly

premium

professional

Avoid:

dark hospital imagery

sterile clinical grading

exaggerated stock-photo smiles

strong blue photo filters

Hero tooth:

glossy white/off-white enamel

soft blue reflections

friendly stylized realism

oversized

not anatomical/scary

Miniature workers:

blue uniforms around #6EABDD

darker blue details

always secondary to the tooth

22. Layering and Depth

Do not flatten the design into a standard grid.

Layering pattern:

blue tooth-shaped section
→ large main visual
→ visual slightly breaks grid
→ floating white card
→ lime CTA/badge
→ tiny decorative details

Suggested layers:

--z-bg: 0;
--z-content: 10;
--z-image: 20;
--z-floating: 30;
--z-nav: 50;

23. Shadows

White cards:

box-shadow: 0 18px 50px rgba(16, 22, 43, 0.08);

Hero floating objects:

box-shadow: 0 24px 60px rgba(16, 22, 43, 0.12);

Blue sections normally do not need shadows.

24. Motion

Allowed:

slow hero tooth translateY

gentle independent movement on floating cards

CTA arrow horizontal movement on hover

very slow circular CTA rotation

section entrance fade + about 20px vertical movement

Avoid:

large bounce

fast movement

constant scale pulsing

aggressive parallax

Always respect prefers-reduced-motion.

25. Responsive Rules

Desktop

Preserve full editorial layout, paired panels, overlaps, and layered imagery.

Tablet

reduce shape distortion

reduce overlap

use 2-column card layouts

reduce headline scale

preserve white gutters

Mobile

keep 16px–20px white outside gutter

simplify tooth silhouettes

blue section radius around 28px–40px

stack hero elements

reduce decorations

service cards become 1–2 columns

testimonials stack or horizontally scroll

doctor cards become 2 columns or carousel

final CTA portrait moves below copy when needed

Hero order:

nav

headline

description

CTA

social proof

tooth image

statistics

Mobile hero headline:

approximately 48px–64px

Do not shrink desktop absolute positioning to fit mobile. Reflow it.

26. Accent Color Rule

Within one viewport, blue + white should dominate.

Usually:

blue

white

lime

Purple should appear only occasionally.

Do not show too many accent colors at once.

27. What Not To Do

Do NOT:

replace tooth silhouettes with generic rounded rectangles everywhere

create exaggerated wavy blobs

use cloud-like shapes

make every section identical

put every image inside a white card

overuse lime

overuse purple

use heavy dark shadows

add visible gray borders everywhere

turn the page into a dashboard/grid

flatten overlapping elements

use gradients everywhere

mix inconsistent icon packs

change the primary blue away from #6EABDD

28. Suggested Design Tokens

export const designTokens = {
colors: {
page: "#FFFFFF",
primary: "#6EABDD",
primaryDeep: "#4F8CC4",
lime: "#D6F24C",
purple: "#7C5CFF",
success: "#2FBF71",
ink: "#10162B",
},
radii: {
card: "24px",
cardLg: "32px",
section: "64px",
pill: "999px",
},
shadows: {
card: "0 18px 50px rgba(16,22,43,.08)",
floating: "0 24px 60px rgba(16,22,43,.12)",
},
};

29. Final Visual Check

Before a section is considered done, check:

Is white canvas visible around it?

Is primary blue exactly #6EABDD?

Does the silhouette subtly reference a tooth?

Is the shape still mostly rectangular and practical?

Is typography bold and editorial?

Are white cards floating rather than boxed into a rigid grid?

Is lime reserved for meaningful actions?

Is imagery large enough to anchor the composition?

Is whitespace generous?

Does it feel like a premium creative-studio dental site instead of a generic template?
