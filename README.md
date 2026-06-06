# Atriopelago — strona

**Aktualizacja:** 2026-05-22 — sync z master sales kit, fix stale links

**Co robimy:** pełny marketing dla małych obiektów turystycznych — Meta Ads, krótkie filmy, strona PL+EN, social i miesięczny raport. Strona to JEDEN z 6-8 elementów które ustawiamy, nie cały produkt.
**Target:** hotele butikowe, czartery jachtów, wille i pensjonaty 4-12 pokoi z międzynarodowym ruchem.
**Domena:** atriopelago.pl
**Email:** hello@atriopelago.pl
**Stack:** Astro 6 + TypeScript strict + custom CSS + Netlify (deploy) + Cyberfolks (domena) + Meta Ads Business Manager + AI video (Higgsfield) + ImageMagick (photo)

---

## ⚠️ Single Source of Truth — NIE w tym folderze

Wszystkie master dokumenty (oferta, cennik, sprint plan, deploy guide, cold outreach maile) żyją w **`../dokumenty/`** — NIE w tym folderze.

| Co | Plik master | Po co |
|---|---|---|
| Pełna oferta + sales kit | `../dokumenty/OFERTA_DLA_MNIE.md` | Operacyjny playbook sprzedażowy (16 sekcji: pakiety, discovery script, objection handling, proposal email, Yachtfun/Tiande playbooki, self-marketing) |
| Cennik master z brutto + add-ons + bundle + konkurencja | `../dokumenty/CENNIK_MASTER.md` | Lookup table cen przy proposal i rozmowie z klientem |
| Sprint plan team + ICE scoring + KPI | `../dokumenty/START_TUTAJ.md` | Daily hub Kuba + Bartek + Claude |
| Step-by-step Netlify deploy | `../dokumenty/DEPLOY_NETLIFY.md` | Procedura deploy + DNS + SSL + Cal.com + email setup |
| 5 cold maili Hot list + sequence | `../dokumenty/OUTREACH_5_MAILI.md` | Sprint 4 outreach (DOPIERO po Tiande + Yachtfun live) |

**Zasada (per `START_TUTAJ.md §13`):** NIE tworzymy nowych plików `.md`. Wszystko żyje w `dokumenty/` master files. Strona = SSOT contentu publika w `src/content/home.ts`.

---

## Struktura folderu strony

```
stronaInternetowaPelago/
├── src/
│   ├── components/HomePage.astro     # główny komponent strony
│   ├── content/home.ts                # SSOT: copy PL+EN + pakiety A/B/C
│   ├── layouts/BaseLayout.astro       # meta/SEO/JSON-LD/OG/hreflang
│   ├── pages/index.astro              # PL route (/)
│   ├── pages/en/index.astro           # EN route (/en/)
│   └── styles/global.css
├── public/                            # statyczne assety (WebP/sitemap)
├── oferta/_archive/                   # GPT_REJECTED legacy docs (3 HTML decki + 1 MD)
├── dist/                              # output buildu (gitignored)
├── astro.config.mjs                   # site + trailingSlash + Vite alias
├── netlify.toml                       # build + headers + redirects
├── package.json
└── README.md                          # ten plik
```

---

## Quick scripts

```bash
npm run dev      # dev server (http://localhost:4321)
npm run build    # astro check && astro build → dist/
npm run preview  # podgląd produkcyjnego buildu
npm run check    # tylko astro check (typy + walidacja)
```

---

## Hosting / Deploy

- Production: **Netlify** (deploy z `npm run build` albo drag&drop `dist/`)
- Domain registrar: **Cyberfolks** (atriopelago.pl)
- Kliencka subdomena: `[obiekt].atriopelago.pl` (Netlify wildcard, included w Pakiecie B przez 12 mies / Pakiecie A przez 3 mies)
- Pełna procedura step-by-step: `../dokumenty/DEPLOY_NETLIFY.md`

---

## Aktualizacja cennika / pakietów / oferty

**Zasada spójności (consistency-map):**

1. **Cennik / pakiety** zmieniają się NAJPIERW w `../dokumenty/CENNIK_MASTER.md` (master lookup)
2. Następnie `../dokumenty/OFERTA_DLA_MNIE.md` §3 (sales kit description)
3. Na końcu `src/content/home.ts` PL i EN (publiczny copy)
4. Schema.org `priceRange` w `src/layouts/BaseLayout.astro` — synchronizuj z CENNIK §1 quick lookup

**Niedopuszczalne:** edytować ofertę tylko na stronie lub tylko w docsach. **Zmiana = touch wszystkie 4 miejsca w jednej sesji.**

Jeśli niespójność — `dokumenty/` ma pierwszeństwo (master). Strona = okrojony publiczny teaser.

---

## Co jest LIVE vs co czeka

Stan żywy w `../dokumenty/START_TUTAJ.md §12 KPI tracker`. Główne flagi:

- Strona built lokalnie ✅
- Strona live na `atriopelago.pl` ❌ (Sprint 1 Day 1)
- Email `hello@atriopelago.pl` ❌ (Sprint 1)
- Cal.com discovery slot ❌ (Sprint 1)
- LinkedIn post #1 ❌ (Sprint 1)
- Yachtfun discovery ❌ (Sprint 1)
- Yachtfun strona live ❌ (Sprint 2, Day 10)
- Tiande strona live ❌ (Sprint 4, Day 22-24)
- Pierwszy cold mail ❌ (Sprint 4 Day 28+, **DOPIERO po Tiande + Yachtfun live**)

---

## Co naprawione (consistency review 2026-05-22)

Audit zsynchronizował: budżety Meta (300-500 zł test, 500-1 500 zł sezon, 1 000-4 000 zł retainer), zaliczenie A→B (100%), early bird Pakiet B (4 500 zł do 31.08.2026), 5% bonus formulacja Pakietu C (od rezerwacji bezpośrednich UTM-tracked, nie leadów), Schema priceRange (1200-7380 PLN), package-grid CSS 4→3 kolumny.

## Hero film + creative direction — status

- **Hero film V3 Raffles/Absurdist** = `../dokumenty/HERO_FILM_V3_RAFFLES_ABSURDIST.md` + `../dokumenty/04_HERO_FILM_V3.md` + `../dokumenty/ZANZIBAR_BLACK_LUXURY_HERO_FILM_PROMPTS_V2.md` — **aktywny backlog plan** (`START_TUTAJ.md §8 BACKLOG`, ICE 5.7, brak budżetu ~$15 + 4h Bartka, nie potrzebny do M1, wraca po pierwszym retainerze).
- **Market notes inline w `HomePage.astro`** (poprzednio: "Luxury rhythm / Booking logic / Bilingual sales" z odniesieniem do Raffles) — review 2026-05-22 zastąpił te 3 punkty na "Luka po Profitroomie / Mechanika nie obietnica / Fair-exchange early bird". **Decyzja do potwierdzenia z Kubą** — czy zostawić nową wersję (positioning-driven), czy wrócić do creative-direction-driven (Raffles luxury rhythm) jako brand voice direction Atriopelago.

`oferta/_archive/` zawiera **wyłącznie** GPT_REJECTED legacy docs (3 HTML decki + 1 MD z 2026-05-13) — landing-page builder udający marketing agency, nie kanon.
