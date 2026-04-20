import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Languages,
  ChevronDown,
  Shield,
  Network,
  Zap,
  HardHat
} from "lucide-react";

type Language = "SE" | "EN" | "FI";

const translations: Record<Language, any> = {
  EN: {
    services: "Services",
    partners: "Finnish Partners",
    edge: "The Edge",
    heroTitle: "Securing Control for",
    heroHighlight: "Complex Projects.",
    heroSubtitle: "Nordic Project Core is the decisive strategic lead for Energy & Heavy Industry delivery. We neutralize field friction and resolve project bottlenecks, ensuring high-value industrial assets reach the grid on schedule and at margin.",
    swedishExecution: "Swedish Execution",
    suomeksi: "In Finnish",
    strategyLabel: "The NPC Strategy",
    strategyQuote: '"Neutralizing field friction and operational risk to secure high-stakes industrial project delivery."',
    partnershipLabel: "Finnish Partnership",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE ENERGY",
    partnershipP1: "For major energy EPCs and industrial OEMs, NORDAMP OY delivers the high-precision E&I design foundations. Nordic Project Core acts as the decisive strategic lead for the execution of large-scale asset delivery in the Nordic corridor.",
    partnershipP2: "We specialize in the complex interface between multi-tier engineering packages and high-stakes field reality—ensuring that boiler blocks, turbine units, and carbon capture sets are successfully integrated into the Swedish industrial landscape.",
    finnishInnovation: "Finnish Innovation",
    finnishInnovationDesc: "NORDAMP OY's expertise in electrical and automation design.",
    swedishExecutionLabel: "Swedish Project Lead",
    swedishExecutionDesc: "Total project ownership and risk management in Sweden.",
    industrialPartner: "Strategic Industrial Project Partner",
    solutionsLabel: "Ratkaisut — Our Solutions",
    onePartner: "One Partner.",
    fullResponsibility: "Total Ownership.",
    sol1Title: "Strategic Project Lead",
    sol1Tag: "Full Lifecycle Ownership",
    sol1Desc: "Acting as the decisive liaison for OEMs and EPCs. We ensure project delivery by taking total ownership of the interface between engineering design and Nordic site reality, protecting your margins through strict field governance.",
    sol2Title: "Risk Management",
    sol2Tag: "Compliance & Regulatory Edge",
    sol2Desc: "Navigating the complexities of the Swedish energy market. We manage SSG standards, local labor agreements (MBL), and regulatory compliance to neutralize operational bottlenecks before they impact the schedule.",
    sol3Title: "Technical Implementation",
    sol3Tag: "OEM Design to Field Asset",
    sol3Desc: "Bridging the gap between engineering packages and field-installed reality. We ensure 100% adherence to technical specifications during installation, protecting the integrity of high-value industrial assets.",
    gapTitle: "Master the Friction of",
    gapHighlight: "Field Implementation",
    clientLabel: "Technical Innovation",
    clientDesc: "World-class engineering designs for the energy sector. Requires a high-stakes partner to ensure 100% specification compliance on the Swedish site.",
    bridgeLabel: "Project Leadership (NPC)",
    bridgeDesc: "The decisive factor in project success. We eliminate information debt, resolve field friction, and protect your margins through engineering-grade field leadership.",
    supplierLabel: "Execution Workforce",
    supplierDesc: "Local contractors requiring strict, technically-competent supervision to safeguard infrastructure integrity in the Nordic energy corridor.",
    coreFunction: "The Bridge Function",
    neutralizingRisk: "Neutralizing risk by managing the informational and cultural debt that accumulates at the border.",
    edgeLabel: "The NPC Edge",
    edgeTitle1: "HEAVY",
    edgeTitle2: "INDUSTRY",
    edgeTitle3: "PRECISION",
    edgeTitle4: "POWERED BY",
    edgeTitle5: "KNOW-HOW.",
    edgeAdv1: "Industrial Technical Leadership",
    edgeAdv1Desc: "Combining field journeyman skills with B.Sc. Electrical Engineering for heavy industry delivery.",
    edgeAdv2: "Nordic & European Network",
    edgeAdv2Desc: "HQ in Åre, Sweden. Deep integration with local and European heavy industry contractors.",
    edgeAdv3: "Tech-Driven",
    edgeAdv3Desc: "Leveraging AI for compliance and predictive scheduling.",
    leadershipAnchor: "Strategic Leadership Anchor",
    locationLabel: "Location",
    partnerLabel: "Partner",
    trackRecord: "Track Record",
    trackRecordValue: "100% On-Time Delivery",
    futureOutlook: "Future Outlook",
    futureOutlookValue: "Scalable AI Engine",
    contact: "Contact Us",
    nordicsHq: "Strategic HQ in Åre, Sweden — Centrally located to serve Energy & Heavy Industry project delivery across Finland, Sweden, and Norway.",
    areaOfWork: "Active Area: FINLAND, SWEDEN, NORWAY",
    expansionLabel: "Contractor Network: EUROPE-WIDE",
    whoWeAre: "Our Identity",
    whatWeDo: "WHAT WE DO",
    integrating: "Integrating Finnish industrial innovation in Sweden",
    storyLabel: "Our Story",
    storyTitle: "From Field Execution to",
    storyTitleHighlight: "Strategic Ownership.",
    storyP1: "Nordic Project Core was founded on a singular mandate: to eliminate the execution failure that occurs when high-value industrial engineering meets uncoordinated field implementation.",
    storyP2: "With a technical foundation in Electrical Engineering and operative roots in refineries, polymer sites, and complex CFB/BFB power plants, our mission is to provide the engineering-grade leadership required for multi-million euro energy infrastructure.",
    storyP3: "We don't just provide man-hours; we provide the decisive EIC leadership anchor that protects the technical integrity and financial margins of global energy contractors during the critical execution phase.",
    sol4Title: "Problem Manager",
    sol4Tag: "Project Rescuing & Acceleration",
    sol4Desc: "Decisive intervention for stagnant or distressed energy projects. Resolving multi-tier contractor friction, schedule drifts, and complex local technical obstacles to accelerate project momentum.",
    milestone1Year: "2020-2022",
    milestone1Title: "Establishment of Nordamp Oy",
    milestone1Desc: "Foundation of Nordamp Oy in Finland, delivering high-precision electrical and automation engineering for heavy industry.",
    milestone2Year: "2022-2024",
    milestone2Title: "Nordic Expansion",
    milestone2Desc: "Strategic expansion into the Swedish market, specializing in EIC project leadership for large-scale energy infrastructure.",
    milestone3Year: "2024-Present",
    milestone3Title: "Strategic Nordic Lead",
    milestone3Desc: "Establishing the Nordic Project Core brand in Sweden to serve as the decisive E&I leadership anchor for global EPCs and OEMs.",
    valuesLabel: "Core Values",
    valuesTitle: "The Principles of",
    valuesTitleHighlight: "Impact.",
    val1Title: "Uncompromising Integrity",
    val1Desc: "We do not hide behind complexity. We deliver the hard truth and the engineering evidence required to move projects forward.",
    val2Title: "Decisive Leadership",
    val2Desc: "NPC provides the operational structure where friction previously existed. We take ownership of the field and the result.",
    val3Title: "Precision Execution",
    val3Desc: "Field implementation must match engineering design 1:1. We bridge that gap with relentless attention to technical detail.",
    val4Title: "Market Neutrality",
    val4Desc: "We eliminate the cultural and informational debt of cross-border industrial operations through localized operational intelligence.",
    inquiryTitle: "Strategic Project Inquiry",
    inquirySubtitle: "Submit your project parameters. Our strategic lead will contact you to discuss neutralizing operational bottlenecks.",
    fullName: "Full Name",
    emailAddress: "Work Email",
    companyName: "Company / EPC / OEM",
    projectDetails: "Project Parameters & Strategic Challenges",
    sendInquiry: "Submit Strategic Inquiry",
    inquirySuccess: "Inquiry Received. Our EIC lead will contact you within 24 hours.",
    inquiryCTA: "INITIATE TECHNICAL INQUIRY PHASE",
    availability: "Available 7 days a week, 365 days in year."
  },
  SE: {
    services: "Tjänster",
    partners: "Finska Partners",
    edge: "Vår Kant",
    heroTitle: "Säkrad Kontroll över",
    heroHighlight: "Komplexa Projekt.",
    heroSubtitle: "Nordic Project Core är den avgörande strategiska ledaren för leveranser inom Energi & Tung Industri. Vi neutraliserar friktion i fält och löser flaskhalsar, vilket säkrar att industriella tillgångar når nätet i tid och med vinst.",
    swedishExecution: "Svenskt Utförande",
    suomeksi: "På finska",
    strategyLabel: "NPC Strategi",
    strategyQuote: '"Neutraliserar friktion i fält och operativ risk för att säkra leveransen av storskaliga industriprojekt."',
    partnershipLabel: "Finskt Partnerskap",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE ENERGY",
    partnershipP1: "För stora energi-EPC:er och industriella OEM-företag levererar NORDAMP OY de högprecisionsgrunder inom El & Automation som krävs. Nordic Project Core agerar som den avgörande strategiska ledaren för leverans av storskaliga tillgångar i den nordiska korridoren.",
    partnershipP2: "Vi är specialiserade på det komplexa gränssnittet mellan ingenjörspaket i flera led och verkligheten i fält – vi säkerställer att pannblock, turbineenheter och koldioxidavskiljningssystem integreras framgångsrikt i det svenska industrilandskapet.",
    finnishInnovation: "Finsk Innovation",
    finnishInnovationDesc: "NORDAMP OY:s expertis inom el- och automationsdesign.",
    swedishExecutionLabel: "Svensk Projektledare",
    swedishExecutionDesc: "Total projektledning och riskhantering i Sverige.",
    industrialPartner: "Strategisk Industriell Projektpartner",
    solutionsLabel: "Lösningar — Våra Lösningar",
    onePartner: "En Partner.",
    fullResponsibility: "Totalt Ansvar.",
    sol1Title: "Strategisk Projektledning",
    sol1Tag: "Fullt projektägande",
    sol1Desc: "Fungerar som den avgörande länken för OEM-företag och EPC-kontraktörer. Vi säkerställer projektleverans genom att ta totalt ansvar för gränssnittet mellan ingenjörsdesign och nordisk verklighet på plats.",
    sol2Title: "Riskhantering",
    sol2Tag: "Efterlevnad & Regulatorisk Fördel",
    sol2Desc: "Navigering i komplexiteten på den svenska energimarknaden. Vi hanterar SSG-standarder, lokala kollektivavtal (MBL) och regelefterlevnad för att neutralisera operativa flaskhalsar.",
    sol3Title: "Tekniskt Genomförande",
    sol3Tag: "Från OEM-design till Fälttillgång",
    sol3Desc: "Överbryggar gapet mellan ingenjörspaket och verklighet i fält. Vi säkerställer 100 % efterlevnad av tekniska specifikationer under installationen och skyddar dina industriella tillgångar.",
    gapTitle: "Behärska Friktionen i",
    gapHighlight: "Implementering i Fält",
    clientLabel: "Teknisk Innovation",
    clientDesc: "Ingenjörskonst i världsklass för energisektorn. Kräver en högkvalificerad partner för att säkerställa 100% specifikationsefterlevnad på den svenska marknaden.",
    bridgeLabel: "Projektledarskap (NPC)",
    bridgeDesc: "Den avgörande faktorn för projektets framgång. Vi eliminerar informationsskuld, löser fältfriktion och skyddar dina marginaler genom teknisk ledning på ingenjörsnivå.",
    supplierLabel: "Arbetskraft i Fält",
    supplierDesc: "Lokala entreprenörer som kräver strikt, tekniskt kompetent tillsyn för att säkra infrastrukturens integritet i den nordiska energikorridoren.",
    coreFunction: "Brofunktionen",
    neutralizingRisk: "Neutraliserar risk genom att hantera den informations- och kulturskuld som ackumuleras vid gränsen.",
    edgeLabel: "NPC-Kanten",
    edgeTitle1: "TUNG",
    edgeTitle2: "INDUSTRI",
    edgeTitle3: "PRECISION",
    edgeTitle4: "DRIVEN AV",
    edgeTitle5: "KUNNANDE.",
    edgeAdv1: "Industriellt Tekniskt Ledarskap",
    edgeAdv1Desc: "Kombinerar praktisk erfarenhet som montör med B.Sc. Elkraft för leveranser till tung industri.",
    edgeAdv2: "Nordiskt & Europeiskt Nätverk",
    edgeAdv2Desc: "Huvudkontor i Åre. Djup integration med lokala och europeiska entreprenörer inom tung industri.",
    edgeAdv3: "Teknikdriven",
    edgeAdv3Desc: "Använder AI för efterlevnad och prediktiv schemaläggning.",
    leadershipAnchor: "Strategiskt Ledarskapsankare",
    locationLabel: "Plats",
    partnerLabel: "Partner",
    trackRecord: "Meritlista",
    trackRecordValue: "100% Leverans i Tid",
    futureOutlook: "Framtidsutsikter",
    futureOutlookValue: "Skalbar AI-motor",
    contact: "Kontakta Oss",
    nordicsHq: "Strategiskt huvudkontor i Åre — Centralt beläget för att leverera projekt inom Energi & Tung Industri i Finland, Sverige och Norge.",
    areaOfWork: "Verksamhetsområde: FINLAND, SVERIGE, NORGE",
    expansionLabel: "Entreprenörsnätverk: EUROPA",
    whoWeAre: "Vår Identitet",
    whatWeDo: "VAD VI GÖR",
    integrating: "Integrerar finsk industriell innovation i Sverige",
    storyLabel: "Vår Berättelse",
    storyTitle: "Från Utförande i Fält till",
    storyTitleHighlight: "Strategiskt Ansvar.",
    storyP1: "Nordic Project Core grundades med ett tydligt uppdrag: att eliminera de utförandefel som uppstår när högkvalitativ industriell ingenjörskonst möter okoordinerad implementering i fält.",
    storyP2: "Med en teknisk grund inom elteknik och operativa rötter i raffinaderier, polymeranläggningar och komplexa CFB/BFB-kraftverk, är vårt uppdrag att tillhandahålla det ingenjörsledarskap som krävs för energiinfrastruktur i miljonklassen.",
    storyP3: "Vi tillhandahåller inte bara mantimmar; vi tillhandahåller det avgörande EIC-ledarskapsankaret som skyddar den tekniska integriteten och de finansiella marginalerna för globala energientreprenörer.",
    sol4Title: "Problem Manager",
    sol4Tag: "Projekträddning & Acceleration",
    sol4Desc: "Avgörande intervention för avstannade eller nödställda energiprojekt. Löser friktion mellan underentreprenörer i flera led och komplexa lokala tekniska hinder.",
    milestone1Year: "2020-2022",
    milestone1Title: "Etablering av Nordamp Oy",
    milestone1Desc: "Grundandet av Nordamp Oy i Finland, med leverans av högprecisions el- och automationsteknik för tung industri.",
    milestone2Year: "2022-2024",
    milestone2Title: "Nordisk Expansion",
    milestone2Desc: "Strategisk expansion till den svenska marknaden, specialiserad på EIC-projektledning för storskalig energiinfrastruktur.",
    milestone3Year: "2024-Nu",
    milestone3Title: "Strategisk Nordisk Ledare",
    milestone3Desc: "Etablering av varumärket Nordic Project Core i Sverige som det avgörande E&I-ledarskapsankaret för globala EPC:er och OEM-företag.",
    valuesLabel: "Kärnvärden",
    valuesTitle: "Principer för",
    valuesTitleHighlight: "Genomslag.",
    val1Title: "Okompromissad Integritet",
    val1Desc: "Vi gömmer oss inte bakom komplexitet. Vi levererar den hårda sanningen och de tekniska bevis som krävs för att föra projekt framåt.",
    val2Title: "Beslutsamt Ledarskap",
    val2Desc: "NPC tillhandahåller den operativa strukturen där friktion tidigare fanns. Vi tar ansvar för fältet och resultatet.",
    val3Title: "Precision i Utförandet",
    val3Desc: "Implementering i fält måste matcha ingenjörsdesignen 1:1. Vi överbryggar det gapet med obeveklig uppmärksamhet på tekniska detaljer.",
    val4Title: "Marknadsneutralitet",
    val4Desc: "Vi eliminerar den kulturella och informationsmässiga skulden i gränsöverskridande industriell verksamhet genom lokal operativ intelligens.",
    inquiryTitle: "Strategisk Projektförfrågan",
    inquirySubtitle: "Skicka in dina projektparametrar. Vår strategiska ledare kontaktar dig för att diskutera hur vi neutraliserar operativa flaskhalsar.",
    fullName: "Fullständigt Namn",
    emailAddress: "Arbetsmail",
    companyName: "Företag / EPC / OEM",
    projectDetails: "Projektparametrar & Strategiska Utmaningar",
    sendInquiry: "Skicka Strategisk Förfrågan",
    inquirySuccess: "Förfrågan mottagen. Vår EIC-ledare kontaktar dig inom 24 timmar.",
    inquiryCTA: "INITIERA TEKNISK FÖRFRÅGNINGSFAS",
    availability: "Tillgänglig 7 dagar i veckan, 365 dagar om året."
  },
  FI: {
    services: "Palvelut",
    partners: "Suomalaiset Kumppanit",
    edge: "Vauhtimme",
    heroTitle: "Haltuunotto Komplekseissa",
    heroHighlight: "Projekteissa.",
    heroSubtitle: "Nordic Project Core on ratkaiseva strateginen johtaja energia- ja raskaan teollisuuden toimituksissa. Neutraloimme kentällä syntyvän kitkan ja ratkaisemme pullonkaulat, varmistaen teollisuusomaisuuden valmistumisen aikataulussa ja katteet turvaten.",
    swedishExecution: "Ruotsalainen Toteutus",
    suomeksi: "Suomeksi",
    strategyLabel: "NPC-strategia",
    strategyQuote: '"Neutraloimme kenttäkitkan ja operatiiviset riskit varmistaaksemme vaativien teollisuusprojektien toimituksen."',
    partnershipLabel: "Suomalainen Kumppanuus",
    partnershipTitle: "NORDAMP OY x NORDIC PROJECT CORE ENERGY",
    partnershipP1: "Suurille energia-alan EPC-urakoitsijoille ja OEM-valmistajille NORDAMP OY toimittaa korkean tarkkuuden sähkö- ja automaatiosuunnittelun perustan. Nordic Project Core toimii ratkaisevana strategisena johtajana suurten omaisuuserien toimituksessa Pohjoismaissa.",
    partnershipP2: "Erikoistumme monitasoisten suunnittelupakettien ja vaativan kenttätoteutuksen väliseen rajapintaan – varmistaen, että kattilalohkot, turbiiniyksiköt ja hiilensidontajärjestelmät integroituvat onnistuneesti Ruotsin teolliseen ympäristöön.",
    finnishInnovation: "Suomalainen Innovaatio",
    finnishInnovationDesc: "NORDAMP OY:s asiantuntemus sähkö- ja automaatiosuunnittelussa.",
    swedishExecutionLabel: "Ruotsin Projektijohto",
    swedishExecutionDesc: "Kokonaisvastuu projektista ja riskienhallinnasta Ruotsissa.",
    industrialPartner: "Strateginen teollisuuden projektikumppani",
    solutionsLabel: "Ratkaisut — Palvelumme",
    onePartner: "Yksi Kumppani.",
    fullResponsibility: "Kokonaisvastuu.",
    sol1Title: "Strateginen projektijohto",
    sol1Tag: "Koko elinkaaren omistajuus",
    sol1Desc: "Toimii ratkaisevana linkkinä OEM-toimittajille ja EPC-urakoitsijoille. Varmistamme projektitoimituksen ottamalla kokonaisvastuun suunnittelun ja pohjoismaisen kenttätoteutuksen rajapinnasta.",
    sol2Title: "Riskienhallinta",
    sol2Tag: "Vaatimustenmukaisuus ja Sääntelyetu",
    sol2Desc: "Ruotsin energiamarkkinoiden monimutkaisuuden hallinta. Hallitsemme SSG-standardit, paikalliset työehtosopimukset (MBL) ja viranomaisvaatimukset operatiivisten esteiden poistamiseksi.",
    sol3Title: "Tekninen toteutus",
    sol3Tag: "OEM-suunnittelusta Kenttäomaisuudeksi",
    sol3Desc: "Suunnittelupakettien ja asennetun todellisuuden välinen silta. Varmistamme 100-prosenttisen teknisten spesifikaatioiden noudattamisen asennuksen aikana, suojaten teollisuusomaisuuden eheyden.",
    gapTitle: "Hallitse Kenttätoteutuksen",
    gapHighlight: "Kitka ja Haasteet",
    clientLabel: "Tekninen Innovaatio",
    clientDesc: "Maailmanluokan suunnitteluratkaisut energiasektorille. Vaatii vahvan kumppanin varmistamaan 100% spesifikaatioiden noudattamisen Ruotsin toimintaympäristössä.",
    bridgeLabel: "Projektijohtajuus (NPC)",
    bridgeDesc: "Ratkaiseva tekijä projektin onnistumisessa. Eliminoimme tietovelan, ratkaisemme kentän pullonkaulat ja suojaamme katteenne insinööritason kenttäjohtajuudella.",
    supplierLabel: "Toteuttava Työvoima",
    supplierDesc: "Paikalliset urakoitsijat, jotka vaativat tiukkaa ja teknisesti pätevää valvontaa infrastruktuurin eheyden turvaamiseksi pohjoismaisessa energiakäytävässä.",
    coreFunction: "Siltatoiminto",
    neutralizingRisk: "Neutralisoimme riskiä hallitsemalla rajalle kertyvää tiedollista ja kulttuurista velkaa.",
    edgeLabel: "NPC-etu",
    edgeTitle1: "RASKAAN",
    edgeTitle2: "TEOLLISUUDEN",
    edgeTitle3: "TARKKUUS",
    edgeTitle4: "PERUSTUU",
    edgeTitle5: "OSAAMISEEN.",
    edgeAdv1: "Teollisuustekninen Johtajuus",
    edgeAdv1Desc: "Yhdistää kentän asentajakokemuksen ja sähkötekniikan INS-tutkinnon raskaaseen teollisuuteen ja energia-alalle.",
    edgeAdv2: "Pohjoismainen & Eurooppalainen Verkosto",
    edgeAdv2Desc: "Pääkonttori Åressa. Syvä integraatio paikallisten ja eurooppalaisten raskaan teollisuuden urakoitsijoiden kanssa.",
    edgeAdv3: "Teknologiavetoinen",
    edgeAdv3Desc: "Hyödyntää tekoälyä vaatimustenmukaisuudessa ja ennakoivassa aikataulutuksessa.",
    leadershipAnchor: "Strateginen johtajuuden ankkuri",
    locationLabel: "Sijainti",
    partnerLabel: "Kumppani",
    trackRecord: "Näytöt",
    trackRecordValue: "100% Aikataulussa pysyminen",
    futureOutlook: "Tulevaisuus",
    futureOutlookValue: "Skaalautuva AI-moottori",
    contact: "Ota Yhteyttä",
    nordicsHq: "Strateginen pääkonttori Åressa — Keskeinen sijainti energia- ja raskaaseen teollisuuteen keskittyvälle projektitoimitukselle Suomessa, Ruotsissa ja Norjassa.",
    areaOfWork: "Toiminta-alue: SUOMI, RUOTSI, NORJA",
    expansionLabel: "Urakoitsijaverkosto: EUROOPAN LAAJUINEN",
    whoWeAre: "Identiteettimme",
    whatWeDo: "MITÄ ME TEEMME",
    integrating: "Suomalaisen teollisuusosaamisen integrointi Ruotsiin",
    storyLabel: "Tarinamme",
    storyTitle: "Kentältä",
    storyTitleHighlight: "Strategiseen Vastuuseen.",
    storyP1: "Nordic Project Core perustettiin selkeällä mandaatilla: eliminoida toteutusvirheet, joita syntyy, kun korkean tason teollisuussuunnittelu kohtaa koordinoimattoman kenttätoteutuksen.",
    storyP2: "Sähkötekniikan insinööritausta ja operatiiviset juuret jalostamoilla, polymeeritehtailla ja monimutkaisissa CFB/BFB-voimalaitoksissa mahdollistavat sen insinööritason johtajuuden, jota miljoonaluokan energiainfrastruktuurit vaativat.",
    storyP3: "Emme tarjoa vain työtunteja; tarjoamme ratkaisevan EIC-johtajuuden ankkurin, joka suojaa globaalien energiakonsernien teknisen eheyden ja taloudelliset katteet.",
    sol4Title: "Problem Manager",
    sol4Tag: "Projektien Pelastus ja Nopeutus",
    sol4Desc: "Ratkaiseva puuttuminen pysähtyneisiin tai kriisiytyneisiin energiaprojekteihin. Ratkaisemme monitasoiset urakoitsijaristiriidat, aikatauluviiveet ja monimutkaiset paikalliset tekniset esteet.",
    milestone1Year: "2020-2022",
    milestone1Title: "Nordamp Oy:n perustaminen",
    milestone1Desc: "Nordamp Oy:n perustaminen Suomessa, keskittyen korkean tarkkuuden sähkö- ja automaatiotekniikkaan raskaassa teollisuudessa.",
    milestone2Year: "2022-2024",
    milestone2Title: "Pohjoismainen laajentuminen",
    milestone2Desc: "Strateginen laajentuminen Ruotsin markkinoille, erikoistuen EIC-projektijohtamiseen suurissa energiainfrastruktuurihankkeissa.",
    milestone3Year: "2024-Nykyhetki",
    milestone3Title: "Strateginen pohjoismainen johtaja",
    milestone3Desc: "Nordic Project Core -brändin vakiinnuttaminen Ruotsissa ratkaisevana E&I-johtajuuden ankkurina globaaleille EPC-urakoitsijoille ja OEM-valmistajille.",
    valuesLabel: "Ydinarvot",
    valuesTitle: "Vaikutuksen",
    valuesTitleHighlight: "Periaatteet.",
    val1Title: "Tinkimätön Rehellisyys",
    val1Desc: "Emme piiloudu monimutkaisuuden taakse. Toimitamme kovan totuuden ja teknisen näytön, jota projektien edistäminen vaatii.",
    val2Title: "Ratkaiseva Johtajuus",
    val2Desc: "NPC luo operatiivisen rakenteen sinne, missä aiemmin oli kitkaa. Otamme vastuun kentästä ja lopputuloksesta.",
    val3Title: "Toteutuksen Tarkkuus",
    val3Desc: "Kenttätoteutuksen on vastattava suunnittelua 1:1. Ylitämme tuon kuilun hellittämättömällä huomiolla teknisiin yksityiskohtiin.",
    val4Title: "Markkinaneutraliteetti",
    val4Desc: "Eliminoimme rajat ylittävän teollisen toiminnan kulttuurisen ja tiedollisen velan paikallisen operatiivisen älykkyyden avulla.",
    inquiryTitle: "Strateginen Projektikysely",
    inquirySubtitle: "Anna projektin perustiedot. Strateginen johtajamme ottaa yhteyttä keskustellakseen operatiivisten pullonkaulojen poistamisesta.",
    fullName: "Koko Nimi",
    emailAddress: "Työsähköposti",
    companyName: "Yritys / EPC / OEM",
    projectDetails: "Projektin Tiedot & Strategiset Haasteet",
    sendInquiry: "Lähetä Strateginen Kysely",
    inquirySuccess: "Kysely vastaanotettu. EIC-johtajamme ottaa yhteyttä 24 tunnin kuluessa.",
    inquiryCTA: "KÄYNNISTÄ TEKNINEN KYSELYVAIHE",
    availability: "Tavoitettavissa 7 päivää viikossa, 365 päivää vuodessa."
  }
};

const SectionLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`text-[10px] uppercase tracking-[0.25em] font-bold text-accent-green mb-4 ${className}`}>
    {children}
  </div>
);

const Logo = ({ light = true }: { light?: boolean }) => (
  <div className="flex flex-col select-none group">
    <div className="flex items-center gap-1.5 font-sans font-black tracking-tighter text-2xl uppercase leading-none">
      <span className="text-nordamp-blue">NORDIC</span>
      <span className={light ? "text-white" : "text-bg-dark"}>PROJECT CORE</span>
    </div>
    <div className="flex items-center gap-2 mt-1">
      <div className="h-[2px] flex-grow bg-nordamp-blue/30 rounded-full" />
      <span className={`text-[9px] font-mono font-bold tracking-[0.4em] uppercase ${light ? "text-white/40" : "text-bg-dark/40"}`}>
        ENERGY
      </span>
      <div className="h-[2px] w-4 bg-nordamp-blue/60 rounded-full group-hover:w-8 transition-all duration-500" />
    </div>
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

const Navbar = ({ lang, setLang, onShowSolutions, onShowStory, onShowValues, onShowContact, onShowNordamp }: { lang: Language; setLang: (l: Language) => void; onShowSolutions: () => void; onShowStory: () => void; onShowValues: () => void; onShowContact: () => void; onShowNordamp: () => void }) => {
  const t = translations[lang];
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-8 border-b border-border-subtle bg-bg-dark z-50 sticky top-0">
      <div className="flex items-center gap-6">
        <Logo />
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-widest font-semibold text-white/50">
          {/* OUR IDENTITY DROPDOWN */}
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-white transition-colors uppercase">
            <span>{t.whoWeAre}</span>
            <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
            <div className="absolute top-full left-0 w-48 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[60]">
              <div className="bg-bg-alt border border-border-subtle shadow-2xl overflow-hidden pb-2">
                <button 
                  onClick={onShowStory}
                  className="w-full text-left block px-6 py-4 text-white/50 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-nordamp-blue uppercase tracking-widest leading-none font-bold"
                >
                  {t.storyLabel}
                </button>
                <button 
                  onClick={onShowValues}
                  className="w-full text-left block px-6 py-4 text-white/50 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-nordamp-blue uppercase tracking-widest leading-none font-bold"
                >
                  {t.valuesLabel}
                </button>
                <a href="#edge" className="block px-6 py-4 text-white/50 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-nordamp-blue uppercase tracking-widest leading-none font-bold">
                  {t.edge}
                </a>
              </div>
            </div>
          </div>

          {/* SERVICE & IMPACT DROPDOWN */}
          <div className="relative group flex items-center gap-1 cursor-pointer hover:text-accent-green transition-colors uppercase">
            <span className="text-accent-green text-xs font-black">{t.whatWeDo}</span>
            <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
            <div className="absolute top-full left-0 w-56 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 shadow-2xl z-[60]">
              <div className="bg-bg-alt border border-border-subtle shadow-2xl overflow-hidden pb-2">
                <button 
                  onClick={onShowSolutions}
                  className="w-full text-left block px-6 py-4 text-accent-green hover:bg-accent-green/5 transition-colors border-l-2 border-transparent hover:border-accent-green uppercase tracking-widest leading-none font-bold"
                >
                  {t.services}
                </button>
                <button 
                  onClick={onShowNordamp}
                  className="w-full text-left block px-6 py-4 text-white/50 hover:text-nordamp-blue hover:bg-nordamp-blue/5 transition-colors border-l-2 border-transparent hover:border-nordamp-blue uppercase tracking-widest leading-none font-bold"
                >
                  {t.partners}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onShowContact}
          className="bg-nordamp-blue hover:bg-nordamp-blue/80 text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-sm flex items-center gap-2 group"
        >
          {t.contact}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
}

const StoryOverlay = ({ lang, onClose }: { lang: Language; onClose: () => void }) => {
  const t = translations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 bg-bg-dark z-[100] overflow-y-auto px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto relative">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          Close <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>

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

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 group"
          >
            Back to Home <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const SolutionsOverlay = ({ lang, onClose }: { lang: Language; onClose: () => void }) => {
  const t = translations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 bg-bg-dark z-[100] overflow-y-auto px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto relative">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          Close <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>

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
              features: ["OEM & EPC Execution Lead", "Handover Documentation Control", "Interface Risk Ownership"]
            },
            {
              title: t.sol2Title,
              tag: t.sol2Tag,
              desc: t.sol2Desc,
              features: ["SSG Standards Compliance", "MBL / Labor Market Navigation", "Swedish Market Access Strategy"]
            },
            {
              title: t.sol3Title,
              tag: t.sol3Tag,
              desc: t.sol3Desc,
              features: ["0% Information Drift Assurance", "Installation Field Supervision", "Commissioning Support"]
            },
            {
              title: t.sol4Title,
              tag: t.sol4Tag,
              desc: t.sol4Desc,
              features: ["Critical Path Acceleration", "Multi-tier Friction Resolution", "Technical Project Rescuing"]
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

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 group"
          >
            Back to Home <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const ValuesOverlay = ({ lang, onClose }: { lang: Language; onClose: () => void }) => {
  const t = translations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="fixed inset-0 bg-bg-dark z-[100] overflow-y-auto px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto relative">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          Close <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>

        <SectionLabel>{t.valuesLabel}</SectionLabel>
        <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter uppercase leading-[0.9]">
          {t.valuesTitle} <br />
          <span className="text-accent-green">{t.valuesTitleHighlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {[
            { title: t.val1Title, desc: t.val1Desc, icon: <Shield size={32} /> },
            { title: t.val2Title, desc: t.val2Desc, icon: <Network size={32} /> },
            { title: t.val3Title, desc: t.val3Desc, icon: <Zap size={32} /> },
            { title: t.val4Title, desc: t.val4Desc, icon: <Globe size={32} /> }
          ].map((val, idx) => (
            <div key={idx} className="p-12 bg-bg-dark border border-white/5 hover:bg-bg-alt transition-all group">
              <div className="text-accent-green mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {val.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight leading-none group-hover:text-accent-green transition-colors">{val.title}</h3>
              <p className="text-text-dim text-lg leading-relaxed max-w-md">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 group"
          >
            Back to Home <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const ContactOverlay = ({ lang, onClose }: { lang: Language; onClose: () => void }) => {
  const t = translations[lang];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API delay
    setTimeout(() => {
      // In a real app, logic for sending inquiry goes here
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-bg-dark/95 backdrop-blur-2xl z-[150] overflow-y-auto flex items-center justify-center p-6"
    >
      <div className="max-w-4xl w-full bg-bg-alt border border-white/10 p-8 md:p-16 relative rounded-sm shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          Close <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <SectionLabel className="mb-8">{t.contact}</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
                {t.inquiryTitle}
              </h2>
              <p className="text-text-dim text-lg mb-12 max-w-2xl leading-relaxed">
                {t.inquirySubtitle}
              </p>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.fullName}</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-nordamp-blue transition-colors font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.emailAddress}</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-nordamp-blue transition-colors font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.companyName}</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-nordamp-blue transition-colors font-medium" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2 flex flex-col h-full">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t.projectDetails}</label>
                    <textarea required className="w-full h-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-nordamp-blue transition-colors font-medium resize-none min-h-[160px]" />
                  </div>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:bg-nordamp-blue/80 transition-all flex items-center justify-center gap-3 group">
                    {t.sendInquiry} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-24 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-accent-green/10 border border-accent-green/30 rounded-full flex items-center justify-center mx-auto text-accent-green">
                <ShieldCheck size={48} />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">{t.inquirySuccess}</h2>
              <button 
                onClick={onClose}
                className="px-12 py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest transition-all"
              >
                Close Portal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const NordampOverlay = ({ lang, onClose }: { lang: Language; onClose: () => void }) => {
  const t = translations[lang];
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 bg-bg-dark z-[100] overflow-y-auto px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto relative">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          Close <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel className="text-nordamp-blue">{t.partnershipLabel}</SectionLabel>
            <h2 className="text-4xl md:text-8xl mb-8 uppercase font-black leading-[0.85] tracking-tighter">{t.partnershipTitle}</h2>
            <div className="space-y-6 text-xl text-text-dim leading-relaxed">
              <p>{t.partnershipP1}</p>
              <p>{t.partnershipP2}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/5 shadow-xl">
                <Factory className="text-nordamp-blue mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2 uppercase tracking-tight">{t.finnishInnovation}</h4>
                <p className="text-sm opacity-60 leading-relaxed font-medium">{t.finnishInnovationDesc}</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/5 shadow-xl">
                <Globe className="text-accent-green mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2 uppercase tracking-tight">{t.swedishExecutionLabel}</h4>
                <p className="text-sm opacity-60 leading-relaxed font-medium">{t.swedishExecutionDesc}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="p-16 bg-bg-dark rounded-[4rem] border border-nordamp-blue/20 shadow-[0_0_100px_rgba(0,71,255,0.15)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-nordamp-blue/5 to-transparent"></div>
               <div className="relative z-10 flex flex-col items-center gap-12 py-12">
                 <div className="flex items-center gap-4 font-black text-6xl uppercase tracking-tighter">
                    <span className="text-nordamp-blue">NORD</span>
                    <div className="flex items-center">
                      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 20H8L12 11L16 20H20L12 4Z" />
                      </svg>
                      <span className="text-white">MP</span>
                    </div>
                  </div>
                  <div className="h-[2px] w-32 bg-nordamp-blue/40" />
                  <p className="text-center text-lg font-bold tracking-widest text-white uppercase max-w-[200px]">
                    {t.industrialPartner}
                  </p>
                  <a 
                    href="https://nordamp.fi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-sm font-black text-nordamp-blue hover:text-white transition-all border-2 border-nordamp-blue/30 px-10 py-5 rounded-sm uppercase tracking-[0.3em] bg-nordamp-blue/5 hover:bg-nordamp-blue"
                  >
                    NORDAMP.FI <ExternalLink size={18} />
                  </a>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-5 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-3 group"
          >
            Back to Home <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [showSolutions, setShowSolutions] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showNordamp, setShowNordamp] = useState(false);
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-bg-dark text-text-main selection:bg-nordamp-blue selection:text-white scroll-smooth ${showSolutions || showStory || showValues || showContact || showNordamp ? "overflow-hidden" : ""}`}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onShowSolutions={() => setShowSolutions(true)} 
        onShowStory={() => setShowStory(true)}
        onShowValues={() => setShowValues(true)}
        onShowContact={() => setShowContact(true)}
        onShowNordamp={() => setShowNordamp(true)}
      />

      <AnimatePresence>
        {showSolutions && <SolutionsOverlay lang={lang} onClose={() => setShowSolutions(false)} />}
        {showStory && <StoryOverlay lang={lang} onClose={() => setShowStory(false)} />}
        {showValues && <ValuesOverlay lang={lang} onClose={() => setShowValues(false)} />}
        {showContact && <ContactOverlay lang={lang} onClose={() => setShowContact(false)} />}
        {showNordamp && <NordampOverlay lang={lang} onClose={() => setShowNordamp(false)} />}
      </AnimatePresence>

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
                <button 
                  onClick={() => setShowContact(true)}
                  className="px-8 py-4 bg-nordamp-blue text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center gap-2 group"
                >
                  {t.contact} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setShowSolutions(true)}
                  className="px-8 py-4 border border-nordamp-blue/30 text-nordamp-blue hover:bg-nordamp-blue/10 font-black uppercase text-sm tracking-widest transition-all"
                >
                  {t.swedishExecution}
                </button>
              </motion.div>
            </div>
            
            <div className="md:col-span-4 pb-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="border-l-2 border-accent-green pl-6 relative"
              >
                <div className="absolute -left-[2px] top-0 h-1/4 w-[2px] bg-white shadow-[0_0_10px_#fff]"></div>
                <div className="flex items-center gap-3 mb-4">
                  <SectionLabel className="mb-0">{t.strategyLabel}</SectionLabel>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent-green/10 border border-accent-green/20 rounded-full">
                    <div className="w-1 h-1 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-mono font-bold text-accent-green uppercase tracking-tighter">CORE_MODE: ACTIVE</span>
                  </div>
                </div>
                <p className="text-xl leading-[1.2] font-black uppercase tracking-tighter text-balance">
                  {t.strategyQuote}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase opacity-40 font-mono">Nordic Pipeline</span>
                    <span className="text-[10px] font-bold text-accent-green">STABLE</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase opacity-40 font-mono">Operational Focus</span>
                    <span className="text-[10px] font-bold text-nordamp-blue uppercase">Zero Friction</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Strategic Gap Section */}
        <section className="py-24 px-6 md:px-12 bg-bg-dark border-y border-border-subtle relative overflow-hidden">
          {/* Industrial Blueprint Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-nordamp-blue/5 -z-10 border-l border-white/5"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <SectionLabel>{t.gapLabel}</SectionLabel>
                <h2 className="text-4xl md:text-7xl mb-12 uppercase tracking-tighter font-black leading-[0.9]">{t.gapTitle} <br /><span className="text-nordamp-blue">{t.gapHighlight}</span></h2>
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-white/5 border border-white/10 flex flex-col items-center justify-center group-hover:border-white/30 transition-colors">
                      <span className="text-[10px] uppercase opacity-40 font-mono">Design</span>
                      <span className="font-bold text-xl">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2 tracking-wide flex items-center gap-2">
                        {t.clientLabel}
                        <div className="w-1 h-1 bg-nordamp-blue rounded-full animate-pulse"></div>
                      </h4>
                      <p className="text-text-dim text-sm leading-relaxed max-w-lg">{t.clientDesc}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-nordamp-blue flex flex-col items-center justify-center shadow-[0_0_30px_rgba(30,64,175,0.3)]">
                      <ShieldCheck size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2 text-nordamp-blue tracking-wide">{t.bridgeLabel}</h4>
                      <p className="text-white text-sm leading-relaxed font-medium max-w-lg">{t.bridgeDesc}</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-white/5 border border-white/10 flex flex-col items-center justify-center group-hover:border-white/30 transition-colors">
                      <span className="text-[10px] uppercase opacity-40 font-mono">Site</span>
                      <span className="font-bold text-xl">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl uppercase mb-2 tracking-wide">{t.supplierLabel}</h4>
                      <p className="text-text-dim text-sm leading-relaxed max-w-lg">{t.supplierDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-5 relative mt-12 md:mt-0">
                <div className="aspect-square bg-bg-alt border border-white/10 rounded-sm p-12 flex flex-col justify-center gap-16 relative">
                   {/* Technical corner accents */}
                   <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-nordamp-blue/40"></div>
                   <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-nordamp-blue/40"></div>

                   <div className="flex justify-between items-center relative">
                     <div className="flex flex-col items-center gap-3">
                       <div className="w-20 h-20 border border-white/10 bg-bg-dark flex items-center justify-center text-[10px] font-black text-white/30 uppercase text-center p-3 tracking-tighter leading-none relative">
                         <div className="absolute inset-0 border border-nordamp-blue/10 scale-90"></div>
                         INDUSTRIAL_TECH
                       </div>
                     </div>

                     <div className="h-[2px] flex-grow bg-white/5 relative mx-2">
                        <motion.div 
                          animate={{ left: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-[-4px] w-2 h-2 bg-nordamp-blue rounded-full shadow-[0_0_10px_#1E40AF]"
                        ></motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-nordamp-blue flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_40px_rgba(30,64,175,0.4)] z-10 border-2 border-white/10">BRIDGE</div>
                     </div>

                     <div className="flex flex-col items-center gap-3">
                       <div className="w-20 h-20 border border-white/10 bg-bg-dark flex items-center justify-center text-[10px] font-black text-white/30 uppercase text-center p-3 tracking-tighter leading-none relative">
                         <div className="absolute inset-0 border border-accent-green/10 scale-90"></div>
                         FIELD_EXECUTION
                       </div>
                     </div>
                   </div>

                   <div className="text-center pt-8 border-t border-white/5">
                     <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-accent-green mb-4">{t.coreFunction}</h5>
                     <p className="text-[11px] font-mono leading-relaxed text-white/50 max-w-xs mx-auto uppercase tracking-wider">
                       {t.neutralizingRisk}
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantage / Edge */}
        <section id="edge" className="py-24 px-6 md:px-12 bg-bg-dark overflow-hidden relative">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <SectionLabel>{t.edgeLabel}</SectionLabel>
              <h2 className="text-4xl md:text-8xl mb-16 uppercase font-black leading-[0.85] tracking-tighter">
                {t.edgeTitle1} <br />
                <span className="text-nordamp-blue">{t.edgeTitle2}</span> <br />
                {t.edgeTitle3} <br />
                <span className="italic font-light text-white/40 text-4xl md:text-5xl block mt-2">{t.edgeTitle4} {t.edgeTitle5}</span>
              </h2>
              <div className="space-y-16">
                {[
                  { title: t.edgeAdv1, desc: t.edgeAdv1Desc, icon: <Shield size={18} className="text-nordamp-blue" /> },
                  { title: t.edgeAdv2, desc: t.edgeAdv2Desc, icon: <Network size={18} className="text-nordamp-blue" /> },
                  { title: t.edgeAdv3, desc: t.edgeAdv3Desc, icon: <Zap size={18} className="text-accent-green" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 items-start group">
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-[10px] font-mono text-white/20">0{idx + 1}</div>
                      <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <h4 className="text-xl font-bold uppercase tracking-widest">{item.title}</h4>
                      </div>
                      <p className="text-text-dim text-sm leading-relaxed max-w-md group-hover:text-white/80 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-nordamp-blue/20 blur-[120px] rounded-full"></div>
              
              {/* Image Container with Tech Frame */}
              <div className="h-full w-full border border-border-subtle overflow-hidden relative z-10 group bg-bg-dark">
                {/* Background Satellite Map */}
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Satellite Europe" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1000 scale-125 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Grid Map for Europe */}
                <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none p-12">
                   <svg viewBox="0 0 400 400" className="w-full h-full fill-white/10 stroke-white/20 stroke-[0.5]">
                      {/* Abstract Europe Grid */}
                      <path d="M100 80 L120 70 L150 50 L180 40 L210 30 L250 40 L280 60 L290 100 L280 150 L260 200 L220 250 L180 300 L120 320 L80 300 L60 250 L70 180 L80 120 Z" />
                      <path d="M150 50 L160 100 L180 150 L170 200 L150 250" fill="none" />
                      <path d="M210 30 L200 80 L220 130 L230 180" fill="none" />
                   </svg>
                </div>

                {/* Scanning Line Animation */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <motion.div 
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1/2 bg-gradient-to-b from-transparent via-nordamp-blue/20 to-transparent flex flex-col items-center"
                  >
                    <div className="w-full h-[1px] bg-nordamp-blue/50"></div>
                  </motion.div>
                </div>

                {/* Technical Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/80"></div>
                <div className="absolute inset-0 border-[20px] border-bg-dark/50 pointer-events-none"></div>
                
                {/* Data Points */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  {/* Top Bar */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black text-nordamp-blue uppercase tracking-widest">{t.areaOfWork}</div>
                      <div className="h-[2px] w-12 bg-nordamp-blue"></div>
                    </div>
                    <div className="text-[8px] font-mono text-white/30 text-right leading-relaxed">
                      SENSORS: ACTIVE<br />
                      GEOCORE: 63.399N 13.081E<br />
                      SCAN_RES: 8K_EXT
                    </div>
                  </div>

                  {/* HQ Marker - centered better */}
                  <div className="absolute top-[38%] left-[48%] flex flex-col items-center">
                    <div className="relative">
                      <motion.div 
                        animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }} 
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-[-12px] rounded-full border border-accent-green"
                      ></motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }} 
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="w-4 h-4 rounded-full border-2 border-accent-green flex items-center justify-center bg-accent-green/20"
                      >
                        <div className="w-1 h-1 bg-accent-green rounded-full shadow-[0_0_8px_#7CF000]"></div>
                      </motion.div>
                    </div>
                    <div className="mt-4 bg-bg-dark/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-sm shadow-2xl">
                      <div className="text-[11px] font-black uppercase text-white tracking-[0.2em] flex items-center gap-3">
                         <span className="w-1.5 h-1.5 bg-accent-green rounded-full shadow-[0_0_10px_#7CF000] animate-pulse"></span>
                         ÅRE HQ_CENTRAL
                      </div>
                    </div>
                  </div>

                  {/* Network Nodes Simulation */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                     {[
                       {t: '30%', l: '35%'},
                       {t: '45%', l: '65%'},
                       {t: '60%', l: '40%'},
                       {t: '55%', l: '20%'},
                       {t: '25%', l: '75%'}
                     ].map((pos, i) => (
                       <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-30" style={{ top: pos.t, left: pos.l }}></div>
                     ))}
                  </div>

                  {/* Bottom Bar Info */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/10 pb-6">
                      <div className="space-y-3">
                        <div className="h-4 w-1 bg-nordamp-blue"></div>
                        <p className="text-xs font-semibold leading-relaxed max-w-[280px] text-white/90">
                          {t.nordicsHq}
                        </p>
                      </div>
                      <div className="hidden sm:block text-right">
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">{t.expansionLabel}</div>
                        <div className="flex gap-1.5 justify-end">
                          {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`w-2 h-[2px] ${i < 6 ? 'bg-nordamp-blue shadow-[0_0_5px_#1E40AF]' : 'bg-white/10'}`}></div>)}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                       <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-nordamp-blue rounded-full shadow-[0_0_8px_#1E40AF] animate-pulse"></div>
                         <div className="text-[9px] font-mono font-bold text-white/60 uppercase tracking-widest leading-none">NORDIC_CORE: ONLINE</div>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-accent-green rounded-full shadow-[0_0_8px_#7CF000]"></div>
                         <div className="text-[9px] font-mono font-bold text-white/60 uppercase tracking-widest leading-none">EU_NETWORK: LINKED</div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Area of work section was here */}

        {/* Final CTA Inquiry Section */}
        <section className="py-32 px-6 md:px-12 bg-bg-alt relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-nordamp-blue opacity-10 blur-[150px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl">
              <SectionLabel className="text-nordamp-blue border-nordamp-blue/30">{t.contact}</SectionLabel>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                {lang === "EN" ? (
                  <>Available <span className="text-nordamp-blue">7 days a week</span>, 365 days in year.</>
                ) : t.availability}
              </h2>
              <p className="text-text-dim text-xl max-w-xl leading-relaxed">
                Connect with our strategic project leads to discuss neutralizing risk in your Nordic energy project.
              </p>
            </div>
            <button 
              onClick={() => setShowContact(true)}
              className="px-12 py-8 bg-nordamp-blue text-white font-black uppercase text-xl tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform flex items-center gap-4 group"
            >
              {t.inquiryCTA} <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </button>
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
        <div className="flex flex-col items-start md:items-end gap-3 border-l border-border-subtle md:border-l-0 pl-6 md:pl-0">
          <span className="text-white/30 text-[9px] mb-1">{t.suomeksi} / {t.swedishExecution}</span>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-md">
            {(["SE", "EN", "FI"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all rounded ${
                  lang === l ? "bg-nordamp-blue text-white" : "text-white/30 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
      
      <div className="px-6 md:px-12 py-8 text-[9px] uppercase tracking-widest text-white/20 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span>© 2026 NORDIC PROJECT CORE ENERGY.</span>
          <Logo />
        </div>
        <span>{t.integrating}</span>
      </div>
    </div>
  );
}
