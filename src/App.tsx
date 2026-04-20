import React, { ReactNode, useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  BarChart3, 
  Cpu, 
  FileCheck, 
  Globe,
  ExternalLink,
  Factory,
  Languages
} from "lucide-react";

type Language = "SE" | "EN" | "FI";

const translations: Record<Language, any> = {
  EN: {
    services: "Services",
    partners: "Finnish Partners",
    edge: "The Edge",
    heroTitle: "Bridging the",
    heroHighlight: "Risk Chasm.",
    heroSubtitle: "Bridging the gap between NORDAMP OY's Finnish Industrial Innovation and the Swedish Green Transition. We take full project ownership where others just offer man-hours.",
    swedishExecution: "Swedish Execution",
    suomeksi: "In Finnish",
    strategyLabel: "The NPC Strategy",
    strategyQuote: '"We manage the complexity of the Swedish market so you can focus on the excellence of your technology."',
    partnershipLabel: "Finnish Partnership",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE",
    partnershipP1: "For Finnish industrial exporters, NORDAMP OY provides a solid foundation for electrical and automation innovations. When the project moves to the Swedish market, NORDIC PROJECT CORE steps in as the local operational anchor.",
    partnershipP2: "We ensure that the technical excellence designed with NORDAMP is seamlessly implemented within the framework of Swedish regulations (SSG), labor culture, and standards.",
    finnishInnovation: "Finnish Innovation",
    finnishInnovationDesc: "NORDAMP OY's expertise in electrical and automation design.",
    swedishExecutionLabel: "Swedish Execution",
    swedishExecutionDesc: "Local project management and responsibility in Sweden.",
    industrialPartner: "Industrial Electrical & Automation Partner",
    solutionsLabel: "Ratkaisut — Our Solutions",
    onePartner: "One Partner.",
    fullResponsibility: "Full Responsibility.",
    sol1Title: "Total Delivery",
    sol1Tag: "Everything in one package",
    sol1Desc: "We take ownership of the entire project lifecycle. From initial audit to final handover, NPC ensures the project stays on budget and on schedule in the Swedish landscape.",
    sol2Title: "Specialist Services",
    sol2Tag: "Help exactly when you need it",
    sol2Desc: "Strategic consultancy for specific project phases. We help navigate SSG standards, electrical codes, and complex labor market mechanics.",
    sol3Title: "Implementation & Oversight",
    sol3Tag: "From plans to reality",
    sol3Desc: "We ensure Finnish engineering isn't just a plan on paper—it's a functioning asset on the Swedish construction site.",
    gapLabel: "The Strategic Gap",
    gapTitle: "Bridging the Gap between",
    gapHighlight: "Clients & Suppliers.",
    clientLabel: "The Client (The Finnish Exporter)",
    clientDesc: "Possesses world-class industrial technology but lacks the operational infrastructure to manage complex legal and labor requirements in Sweden.",
    bridgeLabel: "The Bridge (Nordic Project Core)",
    bridgeDesc: "We translate technology into local execution, managing the friction of a foreign market and protecting the Client's margin and reputation.",
    supplierLabel: "The Supplier (Swedish Workforce)",
    supplierDesc: "High-quality local contractors who require strict, technically-competent management that understands both international design and local work culture.",
    coreFunction: "Core Function",
    neutralizingRisk: "Neutralizing risk by managing the informational & cultural debt that accumulates at the border.",
    edgeLabel: "The NPC Edge",
    edgeTitle1: "Practical",
    edgeTitle2: "Know-how",
    edgeTitle3: "Meets",
    edgeTitle4: "Theoretical",
    edgeTitle5: "Know-why.",
    edgeAdv1: "Dual-Depth Expertise",
    edgeAdv1Desc: "Professional electrician skills + B.Sc. Electrical Engineering.",
    edgeAdv2: "Local Presence",
    edgeAdv2Desc: "Based in Åre, Sweden. Deep network of local contractors.",
    edgeAdv3: "Tech-Driven",
    edgeAdv3Desc: "Leveraging AI for compliance and predictive scheduling.",
    leadershipAnchor: "Strategic Leadership Anchor",
    locationLabel: "Location",
    partnerLabel: "Partner",
    trackRecord: "Track Record",
    trackRecordValue: "100% On-Time Delivery",
    futureOutlook: "Future Outlook",
    futureOutlookValue: "Scalable AI Engine",
    integrating: "Integrating Finnish industrial innovation in Sweden",
    storyLabel: "Our Story",
    storyTitle: "From Field Execution to",
    storyTitleHighlight: "Strategic Ownership.",
    storyP1: "Founded by Antti Koskinen, Nordic Project Core was built on a foundation of technical precision. Starting his career as an electrician and commissioning trainee, Antti saw firsthand the 'information debt' that cripples international industrial projects.",
    storyP2: "With a technical background in Electrical Engineering and hands-on experience at refineries, polymer production sites, and CFB plants, the mission became clear: to bridge the gap between technical design and local Swedish implementation.",
    storyP3: "Today, we leverage years of experience with industry leaders like Sumitomo SHI FW and NORDAMP OY to provide Finnish exporters with the 'boots on the ground' they need to succeed in Sweden.",
    sol4Title: "Problem Manager",
    sol4Tag: "Rescue for stagnant projects",
    sol4Desc: "Specializing in resolving critical obstacles, schedule drifts, and complex Change Management. We step in when the project pipeline is blocked by local Swedish requirements or contractor friction.",
    milestone1Year: "2015-2020",
    milestone1Title: "Technical Foundations",
    milestone1Desc: "Field experience in electrical installations and commissioning at Quattroservices Oy.",
    milestone2Year: "2020-2023",
    milestone2Title: "Entrepreneurial Consulting",
    milestone2Desc: "Strategic E&I consulting and site supervision for large-scale industrial plants across Finland.",
    milestone3Year: "2023-Present",
    milestone3Title: "The Bridge to Sweden",
    milestone3Desc: "Strategic leadership in Åre and Jämtland, managing EIC scopes for the Swedish green transition."
  },
  SE: {
    services: "Tjänster",
    partners: "Finska Partners",
    edge: "Vår Kant",
    heroTitle: "Överbryggar",
    heroHighlight: "Riskklyftan.",
    heroSubtitle: "Vi överbryggar gapet mellan NORDAMP OY:s finska industriella innovation och den svenska gröna omställningen. Vi tar totalt projektansvar där andra bara erbjuder mantimmar.",
    swedishExecution: "Svenskt Utförande",
    suomeksi: "På finska",
    strategyLabel: "NPC Strategi",
    strategyQuote: '"Vi hanterar komplexiteten på den svenska marknaden så att du kan fokusera på din tekniska excellens."',
    partnershipLabel: "Finskt Partnerskap",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE",
    partnershipP1: "För finska industriella exportörer erbjuder NORDAMP OY een solid grund för el- och automationsinnovationer. När projektet flyttar till den svenska marknaden kliver NORDIC PROJECT CORE in som det lokala operativa ankaret.",
    partnershipP2: "Vi säkerställer att den tekniska excellens som designats med NORDAMP implementeras sömlöst inom ramen för svenska regler (SSG), arbetskultur och standarder.",
    finnishInnovation: "Finsk Innovation",
    finnishInnovationDesc: "NORDAMP OY:s expertis inom el- och automationsdesign.",
    swedishExecutionLabel: "Svenskt Utförande",
    swedishExecutionDesc: "Lokal projektledning och ansvar i Sverige.",
    industrialPartner: "Industriell El- & Automationspartner",
    solutionsLabel: "Lösningar — Våra Lösningar",
    onePartner: "En Partner.",
    fullResponsibility: "Fullt Ansvar.",
    sol1Title: "Totalleverans",
    sol1Tag: "Allt i ett paket",
    sol1Desc: "Vi tar ansvar för hela projektets livscykel. Från inledande revision till slutlig överlämning ser NPC till att projektet håller budget och tidsplan i det svenska landskapet.",
    sol2Title: "Specialisttjänster",
    sol2Tag: "Hjälp exakt när du behöver det",
    sol2Desc: "Strategisk rådgivning för specifika projektfaser. Vi hjälper till att navigera SSG-standarder, elföreskrifter och komplex arbetsmarknadsmekanik.",
    sol3Title: "Implementation & Tillsyn",
    sol3Tag: "Från planer till verklighet",
    sol3Desc: "Vi säkerställer att finsk ingenjörskonst inte bara är en plan på papperet – det är en fungerande tillgång på den svenska byggarbetsplatsen.",
    gapLabel: "Det Strategiska Gapet",
    gapTitle: "Överbryggar Gapet mellan",
    gapHighlight: "Kunder & Leverantörer.",
    clientLabel: "Kunden (Den Finska Exportören)",
    clientDesc: "Besitter industriell teknik i världsklass men saknar den operativa infrastrukturen för att hantera komplexa juridiska och arbetsrättsliga krav i Sverige.",
    bridgeLabel: "Bron (Nordic Project Core)",
    bridgeDesc: "Vi översätter teknik till lokalt utförande, hanterar friktionen på en utländsk marknad och skyddar kundens märgin och rykte.",
    supplierLabel: "Leverantören (Svensk Arbetskraft)",
    supplierDesc: "Högkvalitativa lokala entreprenörer som kräver strikt, tekniskt kompetent ledning som förstår både internationell design och lokal arbetskultur.",
    coreFunction: "Kärnfunktion",
    neutralizingRisk: "Neutraliserar risk genom att hantera den informations- och kulturskuld som ackumuleras vid gränsen.",
    edgeLabel: "NPC-Kanten",
    edgeTitle1: "Praktiskt",
    edgeTitle2: "Kunnande",
    edgeTitle3: "Möter",
    edgeTitle4: "Teoretiskt",
    edgeTitle5: "Varför.",
    edgeAdv1: "Dubbel Expertis",
    edgeAdv1Desc: "Professionell elektriker + högskoleingenjör i elektroteknik.",
    edgeAdv2: "Lokal Närvaro",
    edgeAdv2Desc: "Baserad i Åre, Sverige. Djupt nätverk av lokala entreprenörer.",
    edgeAdv3: "Teknikdriven",
    edgeAdv3Desc: "Använder AI för efterlevnad och prediktiv schemaläggning.",
    leadershipAnchor: "Strategiskt Ledarskapsankare",
    locationLabel: "Plats",
    partnerLabel: "Partner",
    trackRecord: "Meritlista",
    trackRecordValue: "100% Leverans i Tid",
    futureOutlook: "Framtidsutsikter",
    futureOutlookValue: "Skalbar AI-motor",
    integrating: "Integrerar finsk industriell innovation i Sverige",
    storyLabel: "Vår Berättelse",
    storyTitle: "Från Utförande i Fält till",
    storyTitleHighlight: "Strategiskt Ansvar.",
    storyP1: "Nordic Project Core grundades av Antti Koskinen och bygger på en grund av teknisk precision. Antti började sin karriär som elektriker och drifttagningspraktikant och såg på nära håll den 'informationsskuld' som lamslår internationella industriprojekt.",
    storyP2: "Med en teknisk bakgrund inom elteknik och praktisk erfarenhet från raffinaderier, polymerproduktionsanläggningar och CFB-kraftverk blev missionen tydlig: att överbrygga gapet mellan teknisk design och lokalt svenskt utförande.",
    storyP3: "Idag drar vi nytta av år av erfarenhet med branschledare som Sumitomo SHI FW och NORDAMP OY för att ge finska exportörer det lokala stöd de behöver för att lyckas i Sverige.",
    sol4Title: "Problem Manager",
    sol4Tag: "Räddning för avstannade projekt",
    sol4Desc: "Specialiserade på att lösa kritiska hinder, tidsplanförskjutningar och komplex Change Management. Vi kliver in när projektet blockeras av lokala svenska krav eller friktion mellan entreprenörer.",
    milestone1Year: "2015-2020",
    milestone1Title: "Teknisk Grund",
    milestone1Desc: "Fälterfarenhet av elinstallationer och driftsättning hos Quattroservices Oy.",
    milestone2Year: "2020-2023",
    milestone2Title: "Entreprenöriell Rådgivning",
    milestone2Desc: "Strategisk rådgivning inom el och automation för storskaliga industrianläggningar i Finland.",
    milestone3Year: "2023-Nu",
    milestone3Title: "Bron till Sverige",
    milestone3Desc: "Strategiskt ledarskap i Åre och Jämtland, med ansvar för el och automation i den svenska gröna omställningen."
  },
  FI: {
    services: "Palvelut",
    partners: "Suomalaiset Kumppanit",
    edge: "Vauhtimme",
    heroTitle: "Ylitämme",
    heroHighlight: "Riskikuilun.",
    heroSubtitle: "Yhdistämme NORDAMP OY:n suomalaisen teollisen innovaation ja Ruotsin vihreän siirtymän. Otamme täyden projektivastuun siellä, missä muut tarjoavat vain työtunteja.",
    swedishExecution: "Ruotsalainen Toteutus",
    suomeksi: "Suomeksi",
    strategyLabel: "NPC-strategia",
    strategyQuote: '"Hallitsemme Ruotsin markkinoiden monimutkaisuuden, jotta sinä voit keskittyä teknologiasi huippuosaamiseen."',
    partnershipLabel: "Suomalainen Kumppanuus",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE",
    partnershipP1: "Suomalaisille teollisuuden viejille NORDAMP OY tarjoaa vankan perustan sähkö- ja automaatioalan innovaatioille. Kun hanke siirtyy Ruotsin markkinoille, NORDIC PROJECT CORE astuu kuvaan paikallisena operatiivisena ankkurina.",
    partnershipP2: "Varmistamme, että NORDAMP:n kanssa suunniteltu tekninen huippuosaaminen toteutuu saumattomasti Ruotsin säädösten (SSG), työmarkkinakulttuurin ja standardien puitteissa.",
    finnishInnovation: "Suomalainen Innovaatio",
    finnishInnovationDesc: "NORDAMP OY:n asiantuntemus sähkö- ja automaatiosuunnittelussa.",
    swedishExecutionLabel: "Ruotsalainen Toteutus",
    swedishExecutionDesc: "Paikallinen projektinhallinta ja vastuunotto Ruotsissa.",
    industrialPartner: "Teollisuuden sähkö- ja automaatiokumppani",
    solutionsLabel: "Ratkaisut — Palvelumme",
    onePartner: "Yksi Kumppani.",
    fullResponsibility: "Kokonaisvastuu.",
    sol1Title: "Kokonaisvastuu (Total Delivery)",
    sol1Tag: "Kaikki yhdessä paketissa",
    sol1Desc: "Otamme vastuun koko projektin elinkaaresta. Alkuperäisestä auditoinnista lopulliseen luovutukseen, NPC varmistaa, että projekti pysyy budjetissa ja aikataulussa Ruotsin toimintaympäristössä.",
    sol2Title: "Asiantuntijapalvelut",
    sol2Tag: "Apua juuri silloin kun tarvitset",
    sol2Desc: "Strateginen konsultointi projektin tiettyihin vaiheisiin. Autamme navigoimaan SSG-standardien, sähmääräysten ja monimutkaisen työmarkkinamekaniikan läpi.",
    sol3Title: "Toteutus ja Valvonta",
    sol3Tag: "Suunnitelmista todellisuuteen",
    sol3Desc: "Varmistamme, ettei suomalainen suunnittelu jää vain paperille – se on toimiva omaisuuserä Ruotsin työmaalla.",
    gapLabel: "Strateginen kuilu",
    gapTitle: "Yhdistämme kuilun",
    gapHighlight: "Asiakkaiden ja Toimittajien välillä.",
    clientLabel: "Asiakas (Suomalainen Viejä)",
    clientDesc: "Omistaa maailmanluokan teollista teknologiaa, mutta häneltä puuttuu operatiivinen infrastruktuuri Ruotsin monimutkaisten laki- ja työvoimavaatimusten hallintaan.",
    bridgeLabel: "Silta (Nordic Project Core)",
    bridgeDesc: "Käännämme teknologian paikalliseksi toteutukseksi, hallitsemme ulkomaan markkinoiden kitkaa ja suojelemme asiakkaan katetta ja mainetta.",
    supplierLabel: "Toimittaja (Ruotsalainen Työvoima)",
    supplierDesc: "Korkealaatuiset paikalliset urakoitsijat, jotka vaativat tiukkaa ja teknisesti pätevää johtamista, joka ymmärtää sekä kansainvälistä suunnittelua että paikallista työkulttuuria.",
    coreFunction: "Ydintoiminto",
    neutralizingRisk: "Neutraloimme riskiä hallitsemalla rajalle kertyvää tiedollista ja kulttuurista velkaa.",
    edgeLabel: "NPC-etu",
    edgeTitle1: "Käytännön",
    edgeTitle2: "Osaaminen",
    edgeTitle3: "Kohtaa",
    edgeTitle4: "Teoreettisen",
    edgeTitle5: "Ymmärryksen.",
    edgeAdv1: "Kaksoissyvyys",
    edgeAdv1Desc: "Sähköasentajan ammattitaito + B.Sc. sähkötekniikka.",
    edgeAdv2: "Paikallinen Läsnäolo",
    edgeAdv2Desc: "Sijainti Åressa, Ruotsissa. Syvä verkosto paikallisia urakoitsijoita.",
    edgeAdv3: "Teknologiavetoinen",
    edgeAdv3Desc: "Hyödyntää tekoälyä vaatimustenmukaisuudessa ja ennakoivassa aikataulutuksessa.",
    leadershipAnchor: "Strateginen johtajuuden ankkuri",
    locationLabel: "Sijainti",
    partnerLabel: "Kumppani",
    trackRecord: "Näytöt",
    trackRecordValue: "100% Aikataulussa pysyminen",
    futureOutlook: "Tulevaisuus",
    futureOutlookValue: "Skaalautuva AI-moottori",
    integrating: "Suomalaisen teollisuusosaamisen integrointi Ruotsiin",
    storyLabel: "Tarinamme",
    storyTitle: "Kentältä",
    storyTitleHighlight: "Strategiseen Vastuuseen.",
    storyP1: "Antti Koskisen perustama Nordic Project Core rakentuu teknisen tarkkuuden perustalle. Antti aloitti uransa sähköasentajana ja käyttöönottoharjoittelijana, ja näki läheltä 'tietovelan', joka lamaannuttaa kansainvälisiä teollisuusprojekteja.",
    storyP2: "Sähkötekniikan Bc.S-tutkinto ja käytännön kokemus jalostamoilta, polymeeritehtailta ja CFB-voimalaitoksilta loivat selkeän mission: yhdistää tekninen suunnittelu ja paikallinen ruotsalainen toteutus.",
    storyP3: "Tänään hyödynnämme vuosien kokemusta alan johtajien, kuten Sumitomo SHI FW:n ja NORDAMP OY:n, kanssa tarjotaksemme suomalaisille viejille tarvittavan paikallisen tuen Ruotsissa menestymiseen.",
    sol4Title: "Problem Manager",
    sol4Tag: "Pelastus jumiutuneille projekteille",
    sol4Desc: "Erikoistunut kriittisten esteiden, aikatauluviivästysten ja monimutkaisen Change Management -prosessin hallintaan. Astumme kuvaan, kun projekti on pysähtynyt paikallisten ruotsalaisten vaatimusten tai urakoitsijoiden välisen kitkan vuoksi.",
    milestone1Year: "2015-2020",
    milestone1Title: "Tekninen Perusta",
    milestone1Desc: "Kenttäkokemus sähköasennuksista ja käyttöönotosta Quattroservices Oy:ssä.",
    milestone2Year: "2020-2023",
    milestone2Title: "Yrittäjävetoinen Konsultointi",
    milestone2Desc: "Strateginen sähkö- ja automaatiokonsultointi sekä työmaavalvonta suurissa teollisuuslaitoksissa Suomessa.",
    milestone3Year: "2023-Nykyhetki",
    milestone3Title: "Silta Ruotsiin",
    milestone3Desc: "Strateginen johtajuus Åressa ja Jämtlandissa, vastaten sähkö- ja automaatiokokonaisuuksista Ruotsin vihreässä siirtymässä."
  }
};

const SectionLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`text-[10px] uppercase tracking-[0.25em] font-bold text-accent-green mb-4 ${className}`}>
    {children}
  </div>
);

const Logo = ({ light = true }: { light?: boolean }) => (
  <div className="flex items-center gap-1 font-sans font-black tracking-tighter text-xl uppercase select-none">
    <span className="text-nordamp-blue">NORDIC</span>
    <span className={light ? "text-white" : "text-bg-dark"}>PROJECT CORE</span>
  </div>
);

const NordampBadge = () => (
  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Partner:</span>
    <div className="flex items-center gap-1 font-black text-xs uppercase tracking-tighter">
      <span className="text-nordamp-blue">NORD</span>
      <div className="flex items-center">
        <span className="text-white"></span>
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 20H8L12 11L16 20H20L12 4Z" />
        </svg>
        <span className="text-white">MP</span>
      </div>
    </div>
  </div>
);

const Navbar = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => {
  const t = translations[lang];
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-8 border-b border-border-subtle bg-bg-dark z-50 sticky top-0">
      <div className="flex items-center gap-6">
        <Logo />
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-white/50">
          <a href="#solutions" className="text-accent-green hover:text-accent-green/80 transition-colors uppercase">{t.services}</a>
          <a href="#nordamp" className="hover:text-nordamp-blue transition-colors uppercase">{t.partners}</a>
          <a href="#story" className="hover:text-white transition-colors uppercase">{t.storyLabel}</a>
          <a href="#edge" className="hover:text-white transition-colors uppercase">{t.edge}</a>
        </div>
        
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-md">
          {(["SE", "EN", "FI"] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-all rounded ${
                lang === l ? "bg-nordamp-blue text-white" : "text-white/40 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-bg-dark text-text-main selection:bg-nordamp-blue selection:text-white scroll-smooth">
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Area */}
      <main className="flex flex-col">
        
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-20 md:py-32 flex flex-col justify-center min-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[60px] sm:text-[80px] md:text-[110px] leading-[0.85] font-black tracking-tighter uppercase text-balance"
              >
                {t.heroTitle} <br /> <span className="text-nordamp-blue">{t.heroHighlight}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12 text-xl md:text-2xl font-light text-white/70 max-w-3xl leading-relaxed"
              >
                {t.heroSubtitle}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-2 group">
                  {t.swedishExecution} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#nordamp" className="px-8 py-4 border border-nordamp-blue/30 text-nordamp-blue hover:bg-nordamp-blue/10 font-black uppercase text-sm tracking-widest transition-all">
                  {t.suomeksi}
                </a>
              </motion.div>
            </div>
            
            <div className="md:col-span-4 pb-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="border-l-2 border-accent-green pl-6"
              >
                <SectionLabel>{t.strategyLabel}</SectionLabel>
                <p className="text-lg leading-relaxed italic opacity-80 font-serif">
                  {t.strategyQuote}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NORDAMP OY Partnership Section */}
        <section id="nordamp" className="py-24 px-6 md:px-12 bg-bg-alt border-y border-border-subtle overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel className="text-nordamp-blue">{t.partnershipLabel}</SectionLabel>
                <h2 className="text-4xl md:text-6xl mb-8 uppercase font-black leading-none tracking-tighter">{t.partnershipTitle}</h2>
                <div className="space-y-6 text-lg text-text-dim leading-relaxed">
                  <p>{t.partnershipP1}</p>
                  <p>{t.partnershipP2}</p>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Factory className="text-nordamp-blue mb-4" size={24} />
                    <h4 className="font-bold mb-2 uppercase">{t.finnishInnovation}</h4>
                    <p className="text-sm opacity-60">{t.finnishInnovationDesc}</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <Globe className="text-accent-green mb-4" size={24} />
                    <h4 className="font-bold mb-2 uppercase">{t.swedishExecutionLabel}</h4>
                    <p className="text-sm opacity-60">{t.swedishExecutionDesc}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="p-12 bg-bg-dark rounded-[3rem] border border-nordamp-blue/20 shadow-[0_0_50px_rgba(0,71,255,0.1)]">
                   <div className="flex flex-col items-center gap-8 py-10">
                     <div className="flex items-center gap-3 font-black text-4xl uppercase tracking-tighter">
                        <span className="text-nordamp-blue">NORD</span>
                        <div className="flex items-center">
                          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 20H8L12 11L16 20H20L12 4Z" />
                          </svg>
                          <span className="text-white">MP</span>
                        </div>
                      </div>
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <p className="text-center text-sm font-medium tracking-widest text-white/40 uppercase">
                        {t.industrialPartner}
                      </p>
                      <button className="flex items-center gap-2 text-xs font-bold text-nordamp-blue hover:text-white transition-colors border border-nordamp-blue/30 px-6 py-3 rounded-full uppercase tracking-widest">
                        Nordamp.fi <ExternalLink size={14} />
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Landscape - Inspired by Velocy */}
        <section id="solutions" className="py-24 px-6 md:px-12 bg-bg-dark">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>{t.solutionsLabel}</SectionLabel>
            <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter uppercase leading-[0.9]">
              {t.onePartner} <br />
              <span className="text-nordamp-blue">{t.fullResponsibility}</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
              {[
                {
                  title: t.sol1Title,
                  tag: t.sol1Tag,
                  desc: t.sol1Desc,
                  features: ["Full Lifecycle Ownership", t.swedishExecution, "Local Networks"]
                },
                {
                  title: t.sol2Title,
                  tag: t.sol2Tag,
                  desc: t.sol2Desc,
                  features: ["Technical Auditing", "Compliance Consulting", "Regulatory Guidance"]
                },
                {
                  title: t.sol3Title,
                  tag: t.sol3Tag,
                  desc: t.sol3Desc,
                  features: ["Field Engineering", "Installation Supervision", "Quality Assurance"]
                },
                {
                  title: t.sol4Title,
                  tag: t.sol4Tag,
                  desc: t.sol4Desc,
                  features: ["Change Management", "Obstacle Removal", "Schedule Recovery", "Conflict Resolution"]
                }
              ].map((solution, idx) => (
                <div key={idx} className="p-10 bg-bg-dark hover:bg-bg-alt transition-colors group">
                  <div className="mb-8">
                    <span className="text-xs font-mono text-accent-green bg-accent-green/10 px-2 py-1 rounded tracking-widest uppercase">Solution 0{idx + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-nordamp-blue transition-colors leading-none">{solution.title}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6 font-bold">{solution.tag}</p>
                  <p className="text-text-dim mb-8 text-sm leading-relaxed">{solution.desc}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs font-semibold text-white/70 uppercase tracking-wider">
                        <div className="w-1 h-1 bg-nordamp-blue rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Business Gap Section */}
        <section className="py-24 px-6 md:px-12 bg-bg-alt border-y border-border-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-nordamp-blue/5 blur-[120px] -z-10 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <SectionLabel>{t.gapLabel}</SectionLabel>
                <h2 className="text-4xl md:text-6xl mb-8 uppercase tracking-tighter font-black leading-none">{t.gapTitle} <br /><span className="text-nordamp-blue">{t.gapHighlight}</span></h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2">{t.clientLabel}</h4>
                      <p className="text-text-dim text-sm leading-relaxed">{t.clientDesc}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-nordamp-blue flex items-center justify-center font-bold text-lg text-white">NPC</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2 text-nordamp-blue">{t.bridgeLabel}</h4>
                      <p className="text-white text-sm leading-relaxed font-medium">{t.bridgeDesc}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2">{t.supplierLabel}</h4>
                      <p className="text-text-dim text-sm leading-relaxed">{t.supplierDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 relative">
                <div className="aspect-square bg-bg-dark border border-white/10 rounded-[3rem] p-8 flex flex-col justify-center gap-12">
                   <div className="flex justify-between items-center">
                     <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-[10px] font-bold text-white/30 uppercase text-center p-2">Client (FI)</div>
                     <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 via-nordamp-blue to-white/20 relative mx-4">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-nordamp-blue rounded-full shadow-[0_0_20px_rgba(0,71,255,0.4)] flex items-center justify-center text-[8px] font-black text-white">NPC</div>
                     </div>
                     <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-[10px] font-bold text-white/30 uppercase text-center p-2">Vendor (SE)</div>
                   </div>
                   <div className="text-center">
                     <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-green mb-4">{t.coreFunction}</h5>
                     <p className="text-lg font-light leading-tight">{t.neutralizingRisk}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-24 px-6 md:px-12 bg-bg-dark overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <SectionLabel>{t.storyLabel}</SectionLabel>
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
                  {t.storyTitle} <br />
                  <span className="text-nordamp-blue">{t.storyTitleHighlight}</span>
                </h2>
                <div className="space-y-8 text-xl text-text-dim max-w-2xl leading-relaxed">
                  <p>{t.storyP1}</p>
                  <p>{t.storyP2}</p>
                  <p className="text-white font-medium">{t.storyP3}</p>
                </div>
              </div>
              
              <div className="md:col-span-4 mt-12 md:mt-24">
                <div className="space-y-16 relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10 hidden sm:block" />
                  
                  {[
                    { year: t.milestone1Year, title: t.milestone1Title, desc: t.milestone1Desc },
                    { year: t.milestone2Year, title: t.milestone2Title, desc: t.milestone2Desc },
                    { year: t.milestone3Year, title: t.milestone3Title, desc: t.milestone3Desc }
                  ].map((milestone, idx) => (
                    <div key={idx} className="relative pl-0 sm:pl-12 group">
                      <div className="absolute left-0 top-0 w-10 h-10 bg-bg-alt border border-white/10 rounded-full items-center justify-center hidden sm:flex z-10 group-hover:border-nordamp-blue transition-colors">
                        <div className="w-2 h-2 bg-nordamp-blue rounded-full" />
                      </div>
                      <div className="text-[10px] font-mono text-accent-green mb-2 tracking-widest uppercase">{milestone.year}</div>
                      <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">{milestone.title}</h4>
                      <p className="text-text-dim text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage / Edge */}
        <section id="edge" className="py-24 px-6 md:px-12 bg-bg-dark overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel>{t.edgeLabel}</SectionLabel>
              <h2 className="text-4xl md:text-7xl mb-12 uppercase font-black leading-[0.9] tracking-tighter">{t.edgeTitle1} <span className="italic font-light">{t.edgeTitle2}</span> <br /> {t.edgeTitle3} {t.edgeTitle4} <span className="italic font-light">{t.edgeTitle5}</span></h2>
              <div className="space-y-12">
                {[
                  { title: t.edgeAdv1, desc: t.edgeAdv1Desc },
                  { title: t.edgeAdv2, desc: t.edgeAdv2Desc },
                  { title: t.edgeAdv3, desc: t.edgeAdv3Desc }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 items-start">
                    <div className="text-xs font-mono text-white/20 pt-1">0{idx + 1}</div>
                    <div>
                      <h4 className="text-xl font-bold uppercase mb-2 tracking-wide">{item.title}</h4>
                      <p className="text-text-dim text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-nordamp-blue/5 blur-3xl rounded-full"></div>
              <div className="h-full w-full border border-border-subtle flex items-center justify-center relative z-10">
                <MapPin size={100} className="text-nordamp-blue" strokeWidth={1} />
                <div className="absolute bottom-12 right-12 text-right text-balance">
                  <div className="text-[60px] leading-none font-black text-white/5 uppercase select-none">Åre</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-accent-green">{t.leadershipAnchor}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Data Bar */}
      <footer className="grid grid-cols-2 md:grid-cols-4 px-6 md:px-12 py-10 border-t border-border-subtle text-[10px] uppercase tracking-[0.2em] font-bold bg-bg-alt">
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <span className="text-white/30">{t.locationLabel}</span>
          <span>Åre, Sweden — HQ</span>
        </div>
        <div className="flex flex-col gap-2 mb-8 md:mb-0 border-l md:border-l-0 border-border-subtle pl-6 md:pl-0">
          <span className="text-white/30">{t.partnerLabel}</span>
          <span className="text-nordamp-blue">NORDAMP OY (FI)</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white/30">{t.trackRecord}</span>
          <span className="text-accent-green">{t.trackRecordValue}</span>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 border-l border-border-subtle md:border-l-0 pl-6 md:pl-0">
          <span className="text-white/30">{t.futureOutlook}</span>
          <span>{t.futureOutlookValue}</span>
        </div>
      </footer>
      
      <div className="px-6 md:px-12 py-8 text-[9px] uppercase tracking-widest text-white/20 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span>© 2026 NORDIC PROJECT CORE.</span>
          <Logo />
        </div>
        <span>{t.integrating}</span>
      </div>
    </div>
  );
}
