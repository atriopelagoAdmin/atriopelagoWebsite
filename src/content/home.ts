export type Locale = "pl" | "en";

type Package = {
  name: string;
  price: string;
  timing: string;
  description: string;
  items: string[];
  featured?: boolean;
  note?: string;
};

type CaseBlock = {
  name: string;
  label: string;
  summary: string;
  details: string[];
};

export const home = {
  pl: {
    lang: "pl",
    localePath: "/",
    altPath: "/en",
    nav: {
      work: "Referencje",
      offer: "Pakiety",
      process: "Proces",
      review: "Rozmowa",
      lang: "EN"
    },
    meta: {
      title: "Atriopelago — marketing dla małych obiektów turystycznych (ads, content, strona, social)",
      description:
        "Pełny marketing dla małego hotelu, czarteru albo willi. Meta Ads, krótkie filmy, strona PL+EN, social i raport — żeby goście znajdowali Cię poza Bookingiem — w Google, na Instagramie, na własnej stronie."
    },
    hero: {
      eyebrow: "Atriopelago",
      title: "Goście dzwonią bezpośrednio, sezon się sam nie sprzeda. Bierzemy Twój marketing za rękę.",
      lead:
        "Prowadzimy marketing małego obiektu turystycznego od A do Z: Meta Ads, krótkie filmy, strona PL+EN, social i miesięczny raport. Płacisz za efekt — zapytania bezpośrednie, widoczność poza Bookingiem, własna marka online. Strona to tylko jeden z 6 elementów, które ustawiamy.",
      primaryCta: "Umów bezpłatną 15-min rozmowę marketingową",
      secondaryCta: "Zobacz pakiety",
      mediaLabel: "Krótki film w kampanii",
      mediaTitle: "Kilkanaście sekund atmosfery obiektu",
      mediaCopy:
        "Krótkie filmy (15-30 sek) lecą w Meta Ads i na social. Robimy je z Twoich materiałów albo generujemy AI. Dopóki nie ma finalnego materiału, strona pokazuje docelową kompozycję."
    },
    proof: [
      "Meta Ads (Facebook + Instagram)",
      "Krótkie filmy i grafiki sezonowe",
      "Strona PL+EN dla gościa zagranicznego",
      "Social media + miesięczny raport"
    ],
    problem: {
      eyebrow: "Co widzimy najczęściej",
      title: "Marketing małego obiektu śpi: social martwy, Ads nie ma, strona po polsku, a gość zagraniczny rezerwuje przez Bookinga (z 18% prowizji).",
      points: [
        "Reklam na Facebooku i Instagramie nikt nie odpalił, więc zapytań poza sezonem brak — wszystko stoi na Bookingu i prowizji.",
        "Social media śpi: ostatni post sprzed pół roku, brak krótkich filmów, brak grafik sezonowych. Gość zagląda na profil i widzi obiekt, który wygląda jakby już nie działał.",
        "Strona po polsku — gość z Niemiec albo Skandynawii odbija się w 5 sekund, bo nie rozumie kim jesteście i dla kogo jest ten pobyt.",
        "Droga do zapytania jest schowana albo niejasna. Gość, który chciał zarezerwować bezpośrednio, ląduje z powrotem na Bookingu — bo nie znalazł formularza.",
        "Nikt nie mierzy co działa. Wydatki na promocję są, ale nie wiadomo, czy ktoś z nich przyszedł. Brak raportu, brak decyzji, brak rozwoju."
      ]
    },
    audiences: {
      eyebrow: "Dla kogo",
      title: "Dla małych obiektów turystycznych prowadzonych przez właścicieli.",
      items: [
        {
          title: "Hotele butikowe",
          copy:
            "4-12 pokoi, międzynarodowi goście, sezonowa sprzedaż. Ustawiamy Meta Ads, content sezonowy i stronę PL+EN tak, żeby zapytanie bezpośrednie szło do Ciebie, nie tylko przez Booking."
        },
        {
          title: "Czartery jachtów",
          copy:
            "Gość kupuje dzień, pewność organizacji i emocję wyprawy. Krótkie filmy w kampanii Meta + IG sprzedają to szybciej niż rozmowa telefoniczna."
        },
        {
          title: "Wille i pensjonaty sezonowe",
          copy:
            "Obiekty 4-12 pokoi, często prowadzone przez właścicieli. Offline mają jakość — online potrzebują marketingu: ads, social, strona PL+EN, raport."
        }
      ]
    },
    solution: {
      eyebrow: "Co dostajesz",
      title: "Pełen marketing obiektu: ads, content, strona, social, raport — w jednym miejscu.",
      items: [
        "Meta Ads (Facebook + Instagram): setup pikseli, kampanie sezonowe, optymalizacja, raport co miesiąc",
        "Krótkie filmy 15-30 sek do reklam i na social — z Twoich materiałów albo wygenerowane AI",
        "Grafiki sezonowe i posty na Instagram / Facebook — kalendarz publikacji robiony za Ciebie",
        "Strona po polsku i angielsku, 5-7 sekcji, napisana pod gościa zagranicznego (nie tłumaczenie maszynowe)",
        "Droga do zapytania: formularz, WhatsApp, email, kalendarz online — gość pisze do Ciebie, nie przez Booking",
        "Miesięczny raport: co kosztowało, co zadziałało, co zmieniamy w następnym miesiącu",
        "AI w naszym workflow (krótkie filmy, retusz zdjęć, asysta przy copy) = szybsza produkcja i niższa cena niż klasyczna agencja. Decyzje strategiczne i edytorskie — zawsze człowiek (Kuba + Bartek)."
      ]
    },
    packages: {
      eyebrow: "Pakiety",
      title: "Trzy sposoby zacząć — od testu po roczne prowadzenie marketingu.",
      items: [
        {
          name: "Pakiet A — Czy w ogóle warto",
          price: "1 200-1 500 zł netto",
          timing: "1 tydzień",
          description:
            "Test marketingu Twojego obiektu. Nie ścigamy się z kampanią roczną — sprawdzamy, czy gość w ogóle reaguje na Twoją ofertę zanim wydasz większe pieniądze.",
          items: [
            "Mini-landing PL+EN pod jedną kampanię testową",
            "5 grafik na Instagram / Facebook (sezonowe, gotowe do publikacji)",
            "1 krótki film 15-30 sek (generowany AI albo z Twoich materiałów)",
            "Meta Ads test 7 dni (setup, kampania, optymalizacja — budżet reklamowy płacisz osobno)",
            "Raport: co działało, co nie, czy warto iść dalej"
          ],
          note: "Cena nie zawiera budżetu reklamowego (rekomendacja: 300-500 zł netto na 7 dni testu, optymalna wartość dla lepszych rezultatów: 600-1 000 zł). Jeśli w 30 dni przechodzisz na Pakiet B, te 1 200-1 500 zł zaliczamy w 100% — płacisz tylko różnicę do B (3 000-3 300 zł)."
        },
        {
          name: "Pakiet B ⭐ — Sezon w garści",
          price: "4 500 zł early bird (do 31.08.2026) / 4 500-6 000 zł wg skali",
          timing: "2-3 tygodnie produkcji, kampania 30 dni",
          description:
            "Pełna kampania sezonowa prowadzona za Ciebie. Strona, content, ads, social i raport — wszystko zsynchronizowane na jeden sezon (lato, święta, weekend majowy). Pierwszych 5 klientów przed 31.08.2026 płaci 4 500 zł niezależnie od skali obiektu — razem budujemy case studies.",
          featured: true,
          items: [
            "Strona PL+EN, 5-7 sekcji, napisana pod gościa zagranicznego (nie tłumaczenie maszynowe)",
            "12-15 zdjęć selekcja + retusz cyfrowy z Twoich materiałów",
            "15 grafik sezonowych na Instagram / Facebook",
            "3 krótkie filmy 15-30 sek (generowane AI + Twoje materiały)",
            "Meta Ads: setup pikseli + kampania sezonowa + 30 dni optymalizacji",
            "Kalendarz publikacji IG/FB na cały sezon",
            "Analytics (GA4 + Meta Pixel) + miesięczny raport",
            "2 rundy poprawek copy + 2 rundy design w cenie",
            "Hosting strony pod [obiekt].atriopelago.pl przez 12 miesięcy w cenie",
            "Handoff: przewodnik + 30-min konsultacja po publikacji"
          ],
          note: "Early bird 4 500 zł obowiązuje do 31.08.2026 lub pierwszych 5 podpisanych. Budżet reklamowy płacisz osobno do Meta (rekomendacja: 500-1 500 zł netto / mies. przez min 1 mies). Bez budżetu kampania nie ma jak działać."
        },
        {
          name: "Pakiet C — Roczny partner marketingowy",
          price: "2 800-3 800 zł / mies. + budżet Ads osobno",
          timing: "min. 6 miesięcy",
          description:
            "Jeden numer do dzwonienia, kiedy chodzi o marketing obiektu. Prowadzimy ads, social, content, SEO i email cały rok. Ty się zajmujesz gośćmi.",
          items: [
            "Strona PL+EN + bieżące aktualizacje (oferty, sezony, ceny)",
            "Meta Ads: prowadzenie + optymalizacja + testowanie kreacji",
            "Social organic: 8 postów + 2 reels miesięcznie na Instagram / Facebook",
            "SEO content: 1 blog post miesięcznie PL+EN (długi ogon, ruch poza sezonem)",
            "Email automation: powitanie nowych gości, sezonowe oferty, follow-up po pobycie",
            "Miesięczny raport + 1h call strategiczny",
            "+5% prowizji od potwierdzonych rezerwacji bezpośrednich (UTM + Meta Pixel attribution, rozliczane kwartalnie)"
          ],
          note: "Budżet reklamowy płacisz osobno do Meta (rekomendacja: 1 000-4 000 zł netto / mies. wg skali). Minimalny okres współpracy: 6 miesięcy — marketing potrzebuje czasu, żeby dane się zebrały i kampania zaczęła pracować."
        }
      ] satisfies Package[]
    },
    cases: {
      eyebrow: "Referencje",
      title: "Pierwsze realizacje. Pełne case studies hospitality publikujemy z pierwszymi klientami.",
      items: [
        {
          name: "Zanzibar Yachtfun × ITAKA",
          label: "Czarter katamaranowy / pitch sponsoringowy — wdrożony",
          summary:
            "Zaprojektowaliśmy i wdrożyliśmy na Netlify prezentację pitch sponsoringu brandingowego Felix Finis i wysłaliśmy ją do ITAKA. Strona PL+EN czarteru w produkcji. Live: itakapresentation.netlify.app",
          details: [
            "Pitch deck — design + wdrożenie",
            "Hosting Netlify, wysłany do ITAKA",
            "Strona czarteru PL+EN w produkcji"
          ]
        },
        {
          name: "Tiande Boutique Hotel",
          label: "Hotel butikowy / Zanzibar — druk dostarczony",
          summary:
            "Zaprojektowane i dostarczone materiały drukowane — rollup i ulotka na targi turystyczne. Marketing cyfrowy w przygotowaniu.",
          details: [
            "Rollup + ulotka na targi — dostarczone",
            "Materiały B2B do druku",
            "Marketing cyfrowy w przygotowaniu"
          ]
        }
      ] satisfies CaseBlock[]
    },
    process: {
      eyebrow: "Proces",
      title: "Krótki proces, jasny efekt.",
      items: [
        ["01", "Rozmowa 15 min", "Pytamy o obiekt, sezon, budżet i cel. Bez prezentacji sprzedażowej — od razu mówimy, czy ma sens."],
        ["02", "Brief i strategia", "Ustalamy pozycjonowanie, profil gościa, kanały (Meta Ads, social, strona, email) i KPI miesięczne."],
        ["03", "Produkcja kampanii", "Piszemy copy PL+EN, robimy grafiki i krótkie filmy, budujemy stronę, konfigurujemy Meta Ads i piksele."],
        ["04", "Launch i optymalizacja", "Odpalamy kampanię, monitorujemy codziennie pierwszy tydzień, raportujemy co miesiąc, zmieniamy co nie pracuje."]
      ]
    },
    review: {
      eyebrow: "Wejście",
      title: "Umów bezpłatną 15-min rozmowę marketingową",
      copy:
        "Bez prezentacji sprzedażowej. Pytamy o obiekt, sezon, budżet i co konkretnie chcesz osiągnąć. Po rozmowie wiesz, który pakiet (A, B czy C) pasuje do Twojego momentu — albo czy w ogóle ma sens teraz zaczynać.",
      fields: ["Link do obiektu", "Typ obiektu", "Sezon / okno sprzedaży", "Co jest najpilniejsze", "Email lub telefon"],
      cta: "Wyślij — odezwiemy się w 24h",
      mailSubject: "Atriopelago — chcę umówić rozmowę marketingową"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najczęstsze pytania",
      items: [
        ["Czy robicie Meta Ads (Facebook + Instagram)?", "Tak. Setup pikseli, kampanie sezonowe i prowadzenie miesięczne to standard Pakietu B i C. W Pakiecie A robimy 7-dniowy test, żeby sprawdzić, czy w ogóle warto."],
        ["Czy zarządzacie social mediami?", "Tak — w Pakiecie B robimy kalendarz na sezon, w Pakiecie C prowadzimy social co miesiąc (8 postów + 2 reels). Pakiet A zawiera 5 grafik startowych."],
        ["Czy mogę dostać tylko stronę, bez reklam?", "Tak. Pakiet A zawiera mini-landing i jest dobrym testem zanim wejdziesz w pełną kampanię. Ale uczciwie: sama strona bez ads i social nie zarobi — bo gość musi się o niej dowiedzieć."],
        ["Co z budżetem reklamowym Meta Ads?", "Budżet płacisz osobno bezpośrednio do Meta. Rekomendacja: 300-500 zł netto na 7 dni testu (Pakiet A — optymalnie 600-1 000 zł dla lepszych rezultatów), 500-1 500 zł / mies. na obiekt sezonowy (Pakiet B), 1 000-4 000 zł / mies. retainer (Pakiet C). Bez budżetu kampania nie ma jak działać."],
        ["Czy obiecujecie więcej rezerwacji?", "Nie. Obiecujemy mechanikę: ads dowiozą ruch, content go zatrzyma, strona przekona, droga do zapytania pokaże gdzie pisać. Ile to da rezerwacji, zależy od Twojej ceny, oferty, sezonu i konkurencji — tego nie kontrolujemy i nie gwarantujemy."],
        ["Co z hostingiem strony?", "Hosting jest w cenie Pakietu B (12 mies.) i Pakietu C (cały okres współpracy). Po tym okresie 39 zł / mies. albo migrujemy na Twoją własną domenę."],
        ["Co trzeba dostarczyć?", "Link do obiektu / listingu, aktualne zdjęcia (jeśli są), profil gościa, plan sezonowy, dostępy do Meta Business albo zgodę na utworzenie konta, kontakt do osoby decyzyjnej."],
        ["Co z filmami, jeśli nic nie mam nagrane?", "Generujemy krótkie filmy 15-30 sek przy pomocy AI albo robimy z Twoich zdjęć. Dla obiektu w produkcji wystarczy 3-5 dobrych zdjęć, żeby zacząć kampanię."],
        ["Konkurencja ma stronę za 1 500 zł na Webwave albo Wix — czemu u Was drożej?", "Bo nie sprzedajemy strony. Webwave/Wix to DIY: sam wybierasz template, sam piszesz copy, używasz Google Translate na EN, nie masz reklam, nie masz social. My sprzedajemy cykl marketingowy — strona PL+EN to JEDEN element z 6-8, reszta to Meta Ads, content social, raporty, optymalizacja. Jeśli Twój gość to wyłącznie Polak na 2 noce — Webwave wystarczy. Jeśli chcesz gości zagranicznych i regularne zapytania bezpośrednie — Webwave to start, nie cel."],
        ["Czy macie portfolio?", "Mamy dostarczone realizacje: dla Zanzibar Yachtfun zaprojektowaliśmy i wdrożyliśmy na Netlify pitch sponsoringu brandingowego Felix Finis i wysłaliśmy go do ITAKA (live: itakapresentation.netlify.app), a strona PL+EN czarteru jest w produkcji; dla Tiande Boutique Hotel na Zanzibarze zaprojektowaliśmy i dostarczyliśmy materiały drukowane — rollup i ulotkę na targi turystyczne. Pełne case studies hospitality publikujemy z pierwszych 5 klientów Pakietu B przed 31.08.2026 — dlatego oni dostają early bird 4 500 zł zamiast widełek 4 500-6 000 wg skali. Fair exchange: Ty dostajesz lepszą cenę, my dostajemy proof."],
        ["Czy mogę negocjować cenę?", "Pakiet B early bird (4 500 zł) to już nasza negocjacja — bez early bird, przy większym obiekcie, cena idzie do 5 500-6 000 zł. Jeśli 4 500 zł jest za wysoko, proponujemy Pakiet A za 1 200-1 500 zł (tygodniowy test). Kwota A zalicza się w 100% do B przy upgrade w 30 dni — realnie tracisz 0 zł na A, dostajesz odpowiedź czy w ogóle inwestować w marketing."],
        ["Od dawna działacie?", "Atriopelago jako brand uruchomiliśmy w maju 2026 jako specjalizację Pelago Studio — firmy która od dawna robi marketing dla hospitality i czarterów (Zanzibar Yachtfun, Tiande Boutique Hotel). Wydzieliliśmy Atriopelago konkretnie pod małe obiekty 4-12 pokoi i czartery 1-3 jednostki — segment który Profitroom porzucił w 2022 (przeszli upmarket na 40+ pokoi), Hotres obsługuje silnikiem rezerwacji bez marketingu, a freelancerzy z Useme robią to po taniości bez strategii. Honest > flashy: razem budujemy case studies, ty dostajesz lepszą cenę, my dostajemy proof."],
        ["Jak wyglądają płatności?", "Pakiet A (test) — 100% przy podpisaniu. Pakiet B (sezon) — 50% przy podpisaniu, 50% przed publikacją. Pakiet C (retainer) — faktura na początku każdego miesiąca, płatność z góry. Termin każdej faktury: 7 dni roboczych. Faktura VAT z numerem NIP. Klient z UE — reverse charge VAT (mechanizm odwrotnego obciążenia). 50% zaliczki Pakietu B jest non-refundable od dnia rozpoczęcia pracy (zaczynamy od dnia podpisania). Budżet reklamowy Meta zawsze płacisz osobno z własnej karty do Meta Business Manager — nie pośredniczymy w przepływie kasy."],
        ["Jak szybko odpowiadacie?", "Email i Slack: 1 dzień roboczy (Pn-Pt 9-17). Critical bug post-launch (strona padła, ads zatrzymane, Pixel nie strzela): 2 dni robocze fix. Discovery call → propozycja: 2 dni robocze. Przy Pakiecie C (retainer) priority response 1 dzień roboczy na wszystko, plus 1h call strategy/mc."],
        ["Czy ceny są netto czy brutto?", "Wszystkie ceny na stronie są netto, dolicz 23% VAT. Pakiet A brutto: 1 476-1 845 zł. Pakiet B early bird brutto: 5 535 zł (4 500 zł × 1,23). Pakiet C brutto wg skali: 3 444 / 4 059 / 4 674 zł/mc. **Klient VAT-ZW (np. mały pensjonat bez VAT-u)** — brutto = Twoja realna cena, bo VAT-u nie odzyskujesz. **Klient z UE** — reverse charge, VAT płacisz u siebie. **Klient spoza UE** — 0% VAT (export usług)."]
      ]
    },
    footer: {
      tagline: "Pełen marketing dla małych obiektów turystycznych: ads, content, strona, social.",
      contact: "officepelago@gmail.com",
      langSwitch: "EN"
    }
  },
  en: {
    lang: "en",
    localePath: "/en",
    altPath: "/",
    nav: {
      work: "References",
      offer: "Packages",
      process: "Process",
      review: "Call",
      lang: "PL"
    },
    meta: {
      title: "Atriopelago — marketing agency for small tourism properties (ads, content, website, social)",
      description:
        "Full marketing for a small hotel, charter or villa. Meta Ads, short videos, bilingual website, social and monthly report — so guests find you beyond Booking — in Google, on Instagram, on your own website."
    },
    hero: {
      eyebrow: "Atriopelago",
      title: "Guests book directly, the season doesn't sell itself. We run your marketing end to end.",
      lead:
        "We run the marketing of a small tourism property from A to Z: Meta Ads, short videos, bilingual website, social and a monthly report. You pay for the outcome — direct inquiries, visibility beyond Booking, your own brand online. The website is just one of six pieces we set up.",
      primaryCta: "Book a free 15-min marketing call",
      secondaryCta: "See packages",
      mediaLabel: "Short film in the campaign",
      mediaTitle: "A few seconds of the property's atmosphere",
      mediaCopy:
        "Short films (15-30s) run in Meta Ads and on social. We make them from your materials or generate them with AI. Until the final assets arrive, the page shows the intended composition."
    },
    proof: [
      "Meta Ads (Facebook + Instagram)",
      "Short films and seasonal graphics",
      "Bilingual website for international guests",
      "Social media + monthly report"
    ],
    problem: {
      eyebrow: "What we usually see",
      title: "Small-property marketing is asleep: dead social, no ads, Polish-only website — and the international guest books via Booking.com (with 18% commission).",
      points: [
        "Nobody ever launched Facebook or Instagram ads, so inquiries outside high season are basically zero — everything rides on Booking and its fee.",
        "Social media is asleep: last post six months ago, no short videos, no seasonal graphics. A guest checks the profile and sees a property that 'probably doesn't operate anymore'.",
        "Website is Polish-only — a German or Scandinavian guest bounces in 5 seconds because they don't understand who you are and who the stay is for.",
        "The inquiry path is hidden or unclear. A guest who wanted to book directly ends up back on Booking — because they couldn't find your form.",
        "Nobody measures what works. Money goes out on promotion, but nobody knows if it brought anyone in. No report, no decision, no growth."
      ]
    },
    audiences: {
      eyebrow: "Who it is for",
      title: "For small owner-operated tourism properties.",
      items: [
        {
          title: "Boutique hotels",
          copy:
            "4-12 rooms, international guests, seasonal sales. We set up Meta Ads, seasonal content and a bilingual website so the direct inquiry comes to you, not just through Booking."
        },
        {
          title: "Yacht charters",
          copy:
            "Guests buy the day, the trust in the operation and the emotion of the trip. Short films in Meta + IG campaigns sell that faster than a phone call."
        },
        {
          title: "Villas and seasonal stays",
          copy:
            "4-12 unit properties, often owner-operated. Offline they have quality — online they need marketing: ads, social, bilingual website, report."
        }
      ]
    },
    solution: {
      eyebrow: "What you get",
      title: "Full property marketing: ads, content, website, social, report — in one place.",
      items: [
        "Meta Ads (Facebook + Instagram): pixel setup, seasonal campaigns, monthly optimisation and report",
        "Short films 15-30s for ads and social — from your materials or AI-generated",
        "Seasonal graphics and Instagram / Facebook posts — publishing calendar done for you",
        "Bilingual website, 5-7 sections, written for international guests (not machine translation)",
        "Direct inquiry path: form, WhatsApp, email, online booking calendar — the guest contacts you directly, not through Booking",
        "Monthly report: what it cost, what worked, what we change next month",
        "AI in our workflow (short films, photo retouch, copy assistance) = faster production and lower price than a classic agency. Strategic and editorial decisions — always human (Kuba + Bartek)."
      ]
    },
    packages: {
      eyebrow: "Packages",
      title: "Three entry points — from a test to a full-year marketing partnership.",
      items: [
        {
          name: "Package A — Is it even worth it",
          price: "1,200-1,500 PLN net",
          timing: "1 week",
          description:
            "A marketing test for your property. We don't rush into a year-long campaign — we check whether a guest reacts to your offer at all before you spend bigger money.",
          items: [
            "Mini-landing PL+EN for one test campaign",
            "5 Instagram / Facebook graphics (seasonal, ready to publish)",
            "1 short film 15-30s (AI-generated or from your materials)",
            "Meta Ads test 7 days (setup, campaign, optimisation — ad budget paid separately)",
            "Report: what worked, what didn't, whether to keep going"
          ],
          note: "Price does not include the ad budget (recommended: 300-500 PLN net for the 7-day test, optimal for better results: 600-1,000 PLN). If you upgrade to Package B within 30 days, we credit 100% of this fee — you only pay the difference to B (3,000-3,300 PLN)."
        },
        {
          name: "Package B ⭐ — Season in hand",
          price: "4,500 PLN early bird (until 31.08.2026) / 4,500-6,000 PLN by scale",
          timing: "2-3 weeks production, 30-day campaign",
          description:
            "A full seasonal campaign run for you. Website, content, ads, social and report — all aligned to one season (summer, holidays, May weekend). First 5 clients before 31.08.2026 pay 4,500 PLN regardless of property scale — together we build case studies.",
          featured: true,
          items: [
            "Bilingual website, 5-7 sections, written for international guests (not machine translation)",
            "12-15 photos selection + digital retouching from your materials",
            "15 seasonal graphics for Instagram / Facebook",
            "3 short films 15-30s (AI-generated + your materials)",
            "Meta Ads: pixel setup + seasonal campaign + 30 days of optimisation",
            "Instagram / Facebook publishing calendar for the entire season",
            "Analytics (GA4 + Meta Pixel) + monthly report",
            "2 rounds of copy revisions + 2 rounds of design revisions included",
            "Hosting on [property].atriopelago.pl for 12 months included",
            "Handoff: guide + 30-min consultation after launch"
          ],
          note: "Early bird 4,500 PLN valid until 31.08.2026 or first 5 signed. Ad budget paid separately to Meta (recommended: 500-1,500 PLN net / month for at least 1 month). Without budget the campaign has no way to run."
        },
        {
          name: "Package C — Yearly marketing partner",
          price: "2,800-3,800 PLN / month + ad budget separately",
          timing: "min. 6 months",
          description:
            "One number to call when it's about marketing. We run ads, social, content, SEO and email all year. You take care of the guests.",
          items: [
            "Bilingual website + ongoing updates (offers, seasons, prices)",
            "Meta Ads: management + optimisation + creative testing",
            "Organic social: 8 posts + 2 reels per month on Instagram / Facebook",
            "SEO content: 1 blog post per month PL+EN (long tail, off-season traffic)",
            "Email automation: guest welcome, seasonal offers, post-stay follow-up",
            "Monthly report + 1h strategy call",
            "+5% commission on confirmed direct bookings (UTM + Meta Pixel attribution, settled quarterly)"
          ],
          note: "Ad budget paid separately to Meta (recommended: 1,000-4,000 PLN net / month by scale). Minimum engagement: 6 months — marketing needs time for data to accumulate and the campaign to start performing."
        }
      ] satisfies Package[]
    },
    cases: {
      eyebrow: "References",
      title: "First projects. Full hospitality case studies launch with our first clients.",
      items: [
        {
          name: "Zanzibar Yachtfun × ITAKA",
          label: "Catamaran charter / sponsorship pitch — shipped",
          summary:
            "We designed and deployed the Felix Finis brand-sponsorship pitch on Netlify and sent it to ITAKA. Charter PL+EN site in production. Live: itakapresentation.netlify.app",
          details: [
            "Pitch deck — design + deploy",
            "Hosted on Netlify, sent to ITAKA",
            "Charter PL+EN site in production"
          ]
        },
        {
          name: "Tiande Boutique Hotel",
          label: "Boutique hotel / Zanzibar — print delivered",
          summary:
            "We designed and delivered printed collateral — roll-up and flyer for a travel fair. Digital marketing in preparation.",
          details: [
            "Roll-up + flyer for travel fair — delivered",
            "B2B print-ready collateral",
            "Digital marketing in preparation"
          ]
        }
      ] satisfies CaseBlock[]
    },
    process: {
      eyebrow: "Process",
      title: "Short process, clear outcome.",
      items: [
        ["01", "15-min call", "We ask about the property, season, budget and goal. No sales pitch — we say upfront whether it makes sense."],
        ["02", "Brief and strategy", "We set positioning, guest profile, channels (Meta Ads, social, website, email) and monthly KPIs."],
        ["03", "Campaign production", "We write PL+EN copy, produce graphics and short films, build the website, configure Meta Ads and pixels."],
        ["04", "Launch and optimisation", "We launch the campaign, monitor it daily in week one, report monthly, change what isn't performing."]
      ]
    },
    review: {
      eyebrow: "Entry",
      title: "Book a free 15-min marketing call",
      copy:
        "No sales pitch. We ask about the property, season, budget and what you actually want to achieve. After the call you know which package (A, B or C) fits your moment — or whether it even makes sense to start now.",
      fields: ["Property link", "Property type", "Season / sales window", "What is most urgent", "Email or phone"],
      cta: "Send — we reply within 24h",
      mailSubject: "Atriopelago — I'd like to book a marketing call"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        ["Do you run Meta Ads (Facebook + Instagram)?", "Yes. Pixel setup, seasonal campaigns and monthly management are standard in Packages B and C. In Package A we run a 7-day test to check if it's even worth going further."],
        ["Do you manage social media?", "Yes — in Package B we plan the season, in Package C we run social monthly (8 posts + 2 reels). Package A includes 5 starter graphics."],
        ["Can I get just the website, without ads?", "Yes. Package A includes a mini-landing and is a good test before committing to a full campaign. Honestly though: a website alone, without ads or social, won't earn — because the guest needs to find out it exists."],
        ["What about the Meta Ads budget?", "You pay the ad budget directly to Meta. Recommended: 300-500 PLN net for the 7-day test (Package A — optimal 600-1,000 PLN for better results), 500-1,500 PLN / month for a seasonal property (Package B), 1,000-4,000 PLN / month retainer (Package C). Without budget the campaign has no way to run."],
        ["Do you promise more bookings?", "No. We promise the mechanics: ads bring traffic, content holds it, the website convinces, the inquiry path shows where to write. How many bookings that gives depends on your price, offer, season and competition — we don't control or guarantee that."],
        ["What about website hosting?", "Hosting is included in Package B (12 months) and Package C (entire engagement). After that it's 39 PLN / month or we migrate to your own domain."],
        ["What do I need to provide?", "Property / listing link, current photos (if any), guest profile, seasonal plan, access to Meta Business or permission to create one, decision-maker's contact."],
        ["What if I have no video material recorded?", "We generate short 15-30s AI films or build them from your photos. For a property in production, 3-5 good photos are enough to start a campaign."],
        ["Competitors offer a website for 1,500 PLN on Webwave or Wix — why is yours more expensive?", "Because we don't sell a website. Webwave/Wix is DIY: you pick a template, write copy yourself, use Google Translate for EN, no ads, no social. We sell a marketing cycle — the PL+EN website is ONE of 6-8 elements, the rest is Meta Ads, social content, reports, optimisation. If your guest is only a Polish tourist for 2 nights — Webwave is enough. If you want international guests and regular direct inquiries — Webwave is a start, not a destination."],
        ["Do you have a portfolio?", "We have shipped deliverables: for Zanzibar Yachtfun we designed and deployed the Felix Finis brand-sponsorship pitch on Netlify and sent it to ITAKA (live: itakapresentation.netlify.app), with the PL+EN charter site in production; for Tiande Boutique Hotel in Zanzibar we designed and delivered printed collateral — a roll-up and flyer for a travel fair. Full hospitality case studies will be published with our first 5 Package B clients before 31.08.2026 — that's why they get the early bird 4,500 PLN instead of the 4,500-6,000 scale range. Fair exchange: you get a better price, we get proof."],
        ["Can I negotiate the price?", "Package B early bird (4,500 PLN) is already our negotiation — without early bird, for a larger property, the price goes to 5,500-6,000 PLN. If 4,500 PLN is too high, we propose Package A for 1,200-1,500 PLN (a one-week test). The A amount is credited 100% to B on upgrade within 30 days — you lose effectively 0 PLN on A, you get an answer whether marketing is worth investing in at all."],
        ["How long have you been operating?", "Atriopelago as a brand launched in May 2026 as a specialisation of Pelago Studio — a company that's been doing marketing for hospitality and charters for a while (Zanzibar Yachtfun, Tiande Boutique Hotel). We spun out Atriopelago specifically for small properties 4-12 rooms and charters 1-3 vessels — the segment that Profitroom officially abandoned in 2022 (they pivoted upmarket to 40+ rooms), Hotres serves only with a booking engine without marketing, and Useme freelancers do it cheap without strategy. Honest > flashy: we build case studies together, you get a better price, we get proof."],
        ["How do payments work?", "Package A (test) — 100% upfront on signing. Package B (season) — 50% on signing, 50% before publication. Package C (retainer) — invoice at the start of each month, payment in advance. Payment terms: 7 business days per invoice. VAT invoice with your tax ID. EU client — reverse charge VAT mechanism. The 50% upfront for Package B is non-refundable from the day work starts (we begin on the signing day). The Meta ad budget is always paid separately from your own card to Meta Business Manager — we don't mediate cash flow."],
        ["How fast do you respond?", "Email and Slack: 1 business day (Mon-Fri 9-17 CET). Critical bug post-launch (site down, ads paused, Pixel not firing): 2 business days to fix. Discovery call → proposal: 2 business days. Package C clients (retainer) get priority response — 1 business day on everything, plus a 1h strategy call per month."],
        ["Are the prices net or gross?", "All prices on the page are net, add 23% VAT (Poland). Package A gross: 1,476-1,845 PLN. Package B early bird gross: 5,535 PLN (4,500 PLN × 1.23). Package C gross by scale: 3,444 / 4,059 / 4,674 PLN/month. **VAT-exempt clients in Poland (small guesthouses without VAT registration)** — gross is your real cost, since you can't recover VAT. **EU clients** — reverse charge, you pay VAT in your country. **Non-EU clients** — 0% VAT (service export)."]
      ]
    },
    footer: {
      tagline: "Full marketing for small tourism properties: ads, content, website, social.",
      contact: "officepelago@gmail.com",
      langSwitch: "PL"
    }
  }
} as const;
