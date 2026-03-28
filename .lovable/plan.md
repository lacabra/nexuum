

# Nexuum Landing Page — Implementation Plan

## Visual Design System
- **Base**: White background with soft gray sections for contrast
- **Accent**: Muted teal/blue (`hsl(200, 45%, 45%)` range) for scientific feel
- **Typography**: Inter font, strong hierarchy with large bold headlines, lighter body text
- **Spacing**: Generous whitespace, consistent section padding (120px+ vertical)
- **Details**: Thin dividers, subtle shadows, soft gradients on cards

## Page Sections (8 total)

### 1. Hero
- Large headline + subheadline with max-width for readability
- Two CTAs: filled primary "Request Early Access" + ghost "See How It Works"
- Abstract background visual: subtle SVG grid/node network pattern using CSS/SVG (no images)

### 2. Problem Section
- Two-column layout: left column lists fragmented problems, right column shows consequences
- Subtle separator line between columns, muted icons

### 3. Solution Section
- Three-step flow with clean connectors (Ingest → Structure → Intelligence)
- System diagram aesthetic using cards connected by lines
- Closing statement emphasized

### 4. Shared Framework
- 4-column grid for Impact, Risk, Progress, Readiness
- Each with abstract geometric icon, title, and description
- Clean card or bordered layout

### 5. How It Works
- Horizontal 4-step flow with numbered steps and connectors
- Steps: Ingest → Structure → Generate Intelligence → Share
- Minimal line/arrow connectors

### 6. Who It's For
- 3-column layout for Startups, Institutions, Investors
- Each column: headline, tagline, bullet points
- Professional card styling with subtle borders

### 7. Product Layer
- 3 cards: Fundraising Basics, Project Cockpit, Portfolio Intelligence
- Modular card layout with hover effects

### 8. Closing / CTA
- Centered layout, bold headline, two CTAs
- High-contrast primary button, subtle secondary

## Components to Create
- `HeroSection` — with animated SVG network background
- `ProblemSection` — two-column problem/consequence layout
- `SolutionSection` — step flow with diagram feel
- `FrameworkSection` — 4-column dimension grid
- `HowItWorksSection` — numbered step flow
- `AudienceSection` — 3-column persona cards
- `ProductSection` — 3 product cards
- `ClosingSection` — final CTA block
- `Navbar` — minimal fixed nav with logo + CTA
- `Footer` — simple footer with links

## Behavior
- Smooth scroll navigation from navbar
- Subtle hover effects on cards and buttons
- Fully mobile responsive (stacked layouts on small screens)
- Lightweight CSS animations (fade-in on scroll using intersection observer)

