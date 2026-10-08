# Handoff: Lottoman — NLA 5/90 Lottery PWA (Landing Page)

## Overview
Lottoman is a licensed NLA 5/90 lottery marketing agent in Ghana. This bundle contains the approved design for the **marketing landing page**. The page drives two conversions: **Sign up / log in and play** (paid for with mobile money) and **Download the Lottoman app**.

**Hard constraint: NO USSD anywhere.** Never mention dial codes. Users play only through the web dashboard (PWA) and the mobile app. Mobile money (MTN, AirtelTigo, Telecel) is only how users pay.

## About the Design Files
`Lottoman Landing.dc.html` is a **design reference built in HTML**. It is a prototype that shows the intended look and behaviour. It is not production code to copy. Recreate it in a real app. Recommended stack: **React + Vite + TypeScript + Tailwind** (or CSS variables), built as an installable PWA.

- `Lottoman Landing.dc.html` is the approved design (Indigo / Purple / Magenta / Gold palette). To view it, open it in a browser.
- `support.js` is the runtime that lets the `.dc.html` open in a browser. It is not part of the app.

The markup lives in the `<x-dc>` template with inline styles. The data and logic (games list, payout multipliers, countdown maths, calculator) live in the `class Component` script.

## Fidelity
**High-fidelity.** The colours, type, spacing, copy and motion are final, so recreate them pixel-accurately. Results, winners and stats are **mock data**. Payout multipliers are **placeholders until official NLA rates are confirmed**.

---

## Design Tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| Indigo Night (base) | `#1E1B4B` | Backgrounds of the hero, calculator and winners sections. Nav background at 82% alpha |
| Indigo Deep | `#2A2266` | Gradient partner on dark sections |
| Night Black | `#0E0C24` | Footer, phone mockup body |
| Ink | `#14122E` | Body text on light, trust bar and results backgrounds |
| Royal Purple | `#6D28D9` | Links, eyebrow labels on light, chips, step 1, card gradients |
| Electric Magenta (CTA) | `#FF2D78` | The single most important action: Play Now, Sign Up, Play, selected bet type, countdown seconds |
| Fortune Gold (money only) | `#FFB800` | Prize amounts, payout figure, countdown digits, lotto balls, logo ball, calculator eyebrow |
| Gold Light | `#FFE08A` | Highlight on balls |
| Gold Text on White | `#B78600` | Multiplier text on white cards |
| Aqua Mint | `#12E0B8` | Live dot, stake value, results eyebrow, checkmarks |
| Win Green | `#16A34A` | Success, responsible-gaming dot |
| Cloud (page bg) | `#F7F7FB` | Light page background |
| Border Light | `#ECEAF6` | Card borders on light |
| Chip BG | `#F1EEFB` | Secondary buttons and chips on light |
| Muted on Light | `#5B5580` | Secondary text on light |
| Text on Dark | `#CFC9F2` | Body text on dark |
| Muted on Dark | `#9990D6` | Labels and captions on dark |

Game card header gradients (135°):
- Mon `#6D28D9→#FF2D78`
- Tue `#12E0B8→#6D28D9`
- Wed `#4338CA→#6D28D9`
- Thu `#FFB800→#FF2D78`
- Fri `#FF2D78→#6D28D9`
- Sat `#6D28D9→#1E1B4B`
- Sun `#FFB800→#16A34A`

Colour rules:
- Use magenta only for the primary action on each screen.
- Use gold only for money moments.
- Never use gold or mint for long body text.

### Typography (Google Fonts)
- **Display / headings:** Sora 600/700/800.
  - H1 `clamp(38px,6vw,68px)`, weight 800, line-height 1.02, letter-spacing -1.5px.
  - H2 `clamp(28px,4vw,44px)`, weight 800, letter-spacing -1px.
  - Card titles 26px, weight 800.
- **Body / UI:** Inter 400–700, 15–17px, line-height 1.5–1.6.
- **Numbers:** JetBrains Mono 500/700 with `font-variant-numeric: tabular-nums`. Use it for countdowns, stakes, payouts and balls.
- **Eyebrow labels:** 13px, weight 700, uppercase, letter-spacing 2px.

### Radii, spacing, shadows
- Radii:
  - Pills 999px
  - Buttons 12px
  - Chips 12–14px
  - Cards 22px
  - Hero card and calculator panels 24–26px
  - Download block 32px
  - Phone 38px
- Section padding: `clamp(56px,8vw,96px)` vertical, `clamp(18px,5vw,60px)` horizontal. Content max-width 1080–1180px.
- Card shadow: `0 14px 34px rgba(30,27,75,.08)`. On hover: `0 24px 50px rgba(30,27,75,.18)` plus `translateY(-6px)`, 250ms.
- CTA glow: `0 12px 30px rgba(255,45,120,.45)` pulsing to `.75` (2.6s, ease-in-out, infinite).

---

## Sections (in order)

1. **Sticky nav**
   - Background `rgba(30,27,75,.82)` with a 14px backdrop blur.
   - Logo: a gold radial-gradient ball with "90" plus the "Lottoman" wordmark (Sora, weight 800, 22px).
   - Links: Games · Results · How to Play · Win Calculator · Support. Hidden below 940px.
   - Buttons: **Log In** (outline) and **Sign Up** (magenta).
2. **Hero**
   - Background: Indigo with purple and magenta radial glows.
   - Badge: "Licensed NLA 5/90 Agent" with a mint live dot.
   - H1: "Ghana's lucky number is **Lottoman**." The word "Lottoman" has a gold→magenta gradient.
   - Subcopy, then CTAs: **Play Now** (magenta, pulsing) and **Download the App** (ghost).
   - Microcopy: "18+ only · Play responsibly · Winning is never guaranteed."
   - Glass card on the right: "Next draw", the name of the nearest draw, and a 4-cell countdown (days, hours and minutes in gold, seconds in magenta).
   - 7 floating multicolour lotto balls behind the content, using a `float` keyframe (5–9s, staggered).
   - Two columns, stacking to one below 880px.
3. **Trust bar**
   - Ink background.
   - NLA shield badge (gold) · magenta "18+" circle · "Play Responsibly" with a green dot.
4. **Games grid**
   - `repeat(auto-fill, minmax(300px,1fr))`, gap 20px, 7 cards.
   - Card header: gradient with the day pill, 7:30 PM, the draw name and a tagline.
   - Card body: a purple "5 / 90" chip, a live countdown `Xd HH:MM:SS`, and "Direct 5 pays up to ×44,000".
   - Buttons: **Play** (magenta) and **Details** (chip).
5. **Win Calculator** (no login)
   - Left panel: a grid of 6 bet-type buttons (Direct 2–5, Perm 2, Banker). The selected button is magenta.
   - When Perm is selected, a "Numbers to perm" picker appears (3/4/5/6, gold selection).
   - Stake slider: GHS 1–200, value shown in mint.
   - Right panel: "Potential win" in a big gold mono figure that **counts up** (700ms, ease-out cubic) on every change.
   - Below the figure: an explanation line and the disclaimer "Indicative multipliers, pending official NLA payout confirmation. Not a guarantee of winnings."
6. **How it works**
   - 3 cards: Create your account → Fund with mobile money (MTN, AirtelTigo, Telecel) → Pick your numbers & play.
   - Number tiles in purple, magenta and gold.
7. **Latest Results**
   - Ink background.
   - Each row: game name, mono date and 5 gold balls (44px).
   - "View all results →" link in mint.
8. **Download the app**
   - Purple→Indigo gradient block.
   - H2: "Play from your pocket, day or night".
   - 3 benefits with mint checks.
   - App Store and Google Play badges (mock), a QR code placeholder, and a phone mockup (wallet card, quick-play balls, Confirm ticket button).
9. **Winners / social proof**
   - 3 stat tiles with gold mono figures.
   - Anonymised winner cards: initials, gold amount, town · game.
   - Disclaimer line.
10. **Footer**
    - Night Black background.
    - Brand blurb and social links (Facebook, Instagram, YouTube, X).
    - Play / Company / Legal columns (Terms & Conditions, Privacy Policy, Responsible Gaming).
    - 18+ responsible-gaming line and copyright.

Responsive behaviour:
- Hero, calculator and download grids collapse to 1 column below 880px.
- Footer becomes 2 columns below 880px and 1 column below 540px.
- Stats become 1 column below 540px.

---

## Interactions & Behaviour
- **Countdowns:**
  - Tick every second.
  - Each draw is weekly at **19:30 Africa/Accra** on its weekday. If today's draw has already passed, count down to next week's.
  - The hero shows whichever draw is soonest.
- **Calculator:**
  - Potential win = `stake × multiplier[betType]`.
  - For Perm, show "per winning pair" and the number of possible pairs (`nCr(k,2)`).
  - Clamp the stake to 1–200.
- **Motion:** respect `prefers-reduced-motion` by disabling the ball float and the CTA pulse.
- **Play buttons:** go to the play flow (dashboard). Sign-in is required.

## Single source of truth (create `src/config/games.ts`)
```ts
export const DRAW_TIME = "19:30"; // Africa/Accra
export const GAMES = [
  { day: 1, name: "Monday Special",        tag: "Start the week lucky",       gradient: ["#6D28D9", "#FF2D78"] },
  { day: 2, name: "Lucky Tuesday",         tag: "Midweek momentum",           gradient: ["#12E0B8", "#6D28D9"] },
  { day: 3, name: "Mid Week",              tag: "Break the week open",        gradient: ["#4338CA", "#6D28D9"] },
  { day: 4, name: "Fortune Thursday",      tag: "Ghana's favourite draw",     gradient: ["#FFB800", "#FF2D78"] },
  { day: 5, name: "Friday Bonanza",        tag: "End the week big",           gradient: ["#FF2D78", "#6D28D9"] },
  { day: 6, name: "National Weekly Lotto", tag: "The national draw",          gradient: ["#6D28D9", "#1E1B4B"] },
  { day: 0, name: "Sunday Aseda",          tag: "Give thanks, play grateful", gradient: ["#FFB800", "#16A34A"] },
];
// TODO: confirm against official NLA payout table before launch
export const PAYOUTS = { "Direct 1": null, "Direct 2": 240, "Direct 3": 2100, "Direct 4": 6000, "Direct 5": 44000, "Perm 2": 240, "Perm 3": null, "Banker": 240 };
export const STAKE = { min: 1, max: 200, currency: "GHS" };
```
NLA also runs midday "Noon Rush" and "VAG" draws. Leave room in the config to add them.

---

## Beyond the landing page
These screens are not designed yet. Build them in the landing page's visual language.
- **Auth:** Sign Up / Log In with a phone number plus a password or OTP.
- **Dashboard:**
  - Wallet balance.
  - Fund the wallet with mobile money (choose MTN, AirtelTigo or Telecel).
  - Active and past tickets, results, quick-play and profile.
- **Play flow:**
  - Steps: game → bet type (Direct 1–5 / Perm 2–3 / Banker) → pick numbers from 1–90 → stake (min GHS 1) → confirm → mobile money authorisation → ticket confirmation.
  - Build real loading, success and failure states.
- **Results page:** browse by game and date.
- **Legal pages:**
  - Terms, Privacy and Responsible Gaming, with clearly marked placeholder content.
  - An 18+ age gate.
- **PWA:**
  - `manifest.json` with theme `#1E1B4B`, standalone display and icons.
  - A service worker with an offline app shell.
  - An install prompt.
- **Services:**
  - Mock the auth and mobile money layers behind swappable interfaces (`AuthService`, `PaymentService`).
  - Keep secrets out of the code.

## Assets
There are no image assets. The logo, balls, badges and QR code are CSS placeholders. Real assets still needed:
- Logo lockup
- NLA licence badge
- Official App Store and Google Play badges
- Real QR code
- Mobile money provider logos
- Manifest app icons
