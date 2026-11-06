// ---------------------------------------------------------------
// CONTACTGEGEVENS: vul hier je echte gegevens in (dit bestand is publiek).
// Laat een veld leeg ("") om het niet te tonen.
// ---------------------------------------------------------------
var CONFIG = {
  phone: "",                 // bv. "+32 470 12 34 56"
  email: "",                 // bv. "info@cam-renting.be"
  // Optioneel: een Formspree-adres (https://formspree.io) zodat het formulier
  // rechtstreeks verstuurt. Leeg = het formulier opent het mailprogramma.
  formEndpoint: ""
};

var I18N = {
  nl: {
    "nav.home": "Home", "nav.fleet": "Onze vloot", "nav.partners": "Onze partners", "nav.contact": "Contact",
    "hero.eyebrow": "Transport & pakketlevering · Leuven · Antwerpen",
    "hero.title": "Uw pakketten, op tijd en betrouwbaar geleverd.",
    "hero.lead": "Cam-Renting is een Belgisch transportbedrijf. Dagelijks rijden onze chauffeurs en voertuigen voor PostNL, bpost en Colis Privé.",
    "hero.cta1": "Neem contact op", "hero.cta2": "Bekijk onze vloot",
    "stats.clients": "partners: PostNL, bpost, Colis Privé",
    "stats.cities": "regio’s: Leuven & Antwerpen",
    "stats.ev": "elektrische voertuigen in onze vloot",
    "services.title": "Onze diensten",
    "services.s1t": "Pakketlevering", "services.s1d": "Dagelijkse leveringen aan huis en aan bedrijven, voor PostNL, bpost en Colis Privé.",
    "services.s2t": "Palletvervoer", "services.s2d": "Met onze 20 m³ camion voeren we pallets voor Colis Privé aan en af naar het depot in Leuven.",
    "services.s3t": "Elektrisch en stedelijk", "services.s3d": "Onze elektrische voertuigen rijden stil en uitstootvrij door de steden Leuven en Antwerpen.",
    "fleet.title": "Onze vloot", "fleet.sub": "Het juiste voertuig voor elke opdracht.",
    "fleet.v1d": "Grote bestelwagens voor grote volumes en zwaardere ladingen.",
    "fleet.v2t": "Vrachtwagens", "fleet.v2d": "Onze trucks rijden voor bpost.",
    "fleet.v3d": "Nieuwe elektrische Townstar-bestelwagens, in Leuven en in Antwerpen.",
    "fleet.v4d": "Elektrische bestelwagens voor leveringen in Antwerpen.",
    "fleet.v5d": "Camion van 20 m³ voor het vervoer van pallets naar het Colis Privé-depot in Leuven.",
    "partners.title": "We rijden voor", "partners.more": "Meer over onze partners",
    "partners.pageTitle": "Onze partners", "partners.lead": "Wij rijden dagelijks voor drie grote logistieke netwerken.",
    "partners.p1d": "Pakketlevering met grote Mercedes bestelwagens.",
    "partners.p2d": "Pakketlevering en transport met onze vrachtwagens.",
    "partners.p3d": "Levering met elektrische Townstar (Leuven, Antwerpen) en Maxus eDeliver (Antwerpen), en palletvervoer met onze 20 m³ camion naar het depot in Leuven.",
    "band.title": "Een vraag of een opdracht?", "band.cta": "Contacteer ons",
    "contact.title": "Contact", "contact.lead": "Stuur ons een bericht of bel ons. We antwoorden zo snel mogelijk.",
    "contact.details": "Onze gegevens", "contact.company": "Bedrijf", "contact.phone": "Telefoon",
    "contact.area": "Werkgebied", "contact.web": "Website", "contact.formTitle": "Stuur een bericht",
    "form.name": "Naam", "form.email": "Uw e-mailadres", "form.phone": "Telefoon (optioneel)",
    "form.message": "Bericht", "form.send": "Verstuur",
    "form.errRequired": "Vul uw naam, een geldig e-mailadres en een bericht in.",
    "form.sending": "Bezig met versturen…", "form.ok": "Bedankt, uw bericht is verstuurd.",
    "form.fail": "Versturen is mislukt. Probeer later opnieuw of bel ons.",
    "form.mailOpen": "Uw mailprogramma wordt geopend om het bericht te versturen."
  },
  fr: {
    "nav.home": "Accueil", "nav.fleet": "Notre flotte", "nav.partners": "Nos partenaires", "nav.contact": "Contact",
    "hero.eyebrow": "Transport & livraison de colis · Louvain · Anvers",
    "hero.title": "Vos colis livrés à temps et en toute fiabilité.",
    "hero.lead": "Cam-Renting est une entreprise belge de transport. Chaque jour, nos chauffeurs et nos véhicules roulent pour PostNL, bpost et Colis Privé.",
    "hero.cta1": "Nous contacter", "hero.cta2": "Voir notre flotte",
    "stats.clients": "partenaires : PostNL, bpost, Colis Privé",
    "stats.cities": "régions : Louvain & Anvers",
    "stats.ev": "véhicules électriques dans notre flotte",
    "services.title": "Nos services",
    "services.s1t": "Livraison de colis", "services.s1d": "Livraisons quotidiennes chez les particuliers et les entreprises, pour PostNL, bpost et Colis Privé.",
    "services.s2t": "Transport de palettes", "services.s2d": "Avec notre camion de 20 m³, nous amenons et reprenons les palettes de Colis Privé au dépôt de Louvain.",
    "services.s3t": "Électrique et urbain", "services.s3d": "Nos véhicules électriques circulent silencieusement et sans émissions à Louvain et à Anvers.",
    "fleet.title": "Notre flotte", "fleet.sub": "Le bon véhicule pour chaque mission.",
    "fleet.v1d": "Grandes camionnettes pour les gros volumes et les charges lourdes.",
    "fleet.v2t": "Camions", "fleet.v2d": "Nos camions roulent pour bpost.",
    "fleet.v3d": "Nouvelles camionnettes électriques Townstar, à Louvain et à Anvers.",
    "fleet.v4d": "Camionnettes électriques pour les livraisons à Anvers.",
    "fleet.v5d": "Camion de 20 m³ pour transporter les palettes vers le dépôt Colis Privé de Louvain.",
    "partners.title": "Nous roulons pour", "partners.more": "En savoir plus sur nos partenaires",
    "partners.pageTitle": "Nos partenaires", "partners.lead": "Nous roulons chaque jour pour trois grands réseaux logistiques.",
    "partners.p1d": "Livraison de colis avec de grandes camionnettes Mercedes.",
    "partners.p2d": "Livraison de colis et transport avec nos camions.",
    "partners.p3d": "Livraison avec des Townstar électriques (Louvain, Anvers) et des Maxus eDeliver (Anvers), et transport de palettes avec notre camion de 20 m³ vers le dépôt de Louvain.",
    "band.title": "Une question ou une mission ?", "band.cta": "Contactez-nous",
    "contact.title": "Contact", "contact.lead": "Envoyez-nous un message ou appelez-nous. Nous répondons au plus vite.",
    "contact.details": "Nos coordonnées", "contact.company": "Société", "contact.phone": "Téléphone",
    "contact.area": "Zone d’activité", "contact.web": "Site web", "contact.formTitle": "Envoyer un message",
    "form.name": "Nom", "form.email": "Votre adresse e-mail", "form.phone": "Téléphone (facultatif)",
    "form.message": "Message", "form.send": "Envoyer",
    "form.errRequired": "Indiquez votre nom, une adresse e-mail valide et un message.",
    "form.sending": "Envoi en cours…", "form.ok": "Merci, votre message a été envoyé.",
    "form.fail": "L’envoi a échoué. Réessayez plus tard ou appelez-nous.",
    "form.mailOpen": "Votre logiciel de messagerie s’ouvre pour envoyer le message."
  },
  en: {
    "nav.home": "Home", "nav.fleet": "Our fleet", "nav.partners": "Our partners", "nav.contact": "Contact",
    "hero.eyebrow": "Transport & parcel delivery · Leuven · Antwerp",
    "hero.title": "Your parcels, delivered on time and reliably.",
    "hero.lead": "Cam-Renting is a Belgian transport company. Every day our drivers and vehicles work for PostNL, bpost and Colis Privé.",
    "hero.cta1": "Get in touch", "hero.cta2": "See our fleet",
    "stats.clients": "partners: PostNL, bpost, Colis Privé",
    "stats.cities": "regions: Leuven & Antwerp",
    "stats.ev": "electric vehicles in our fleet",
    "services.title": "Our services",
    "services.s1t": "Parcel delivery", "services.s1d": "Daily deliveries to homes and businesses for PostNL, bpost and Colis Privé.",
    "services.s2t": "Pallet transport", "services.s2d": "With our 20 m³ truck we carry pallets for Colis Privé to and from the depot in Leuven.",
    "services.s3t": "Electric and urban", "services.s3d": "Our electric vehicles drive quietly and emission-free through Leuven and Antwerp.",
    "fleet.title": "Our fleet", "fleet.sub": "The right vehicle for every job.",
    "fleet.v1d": "Large vans for big volumes and heavier loads.",
    "fleet.v2t": "Trucks", "fleet.v2d": "Our trucks drive for bpost.",
    "fleet.v3d": "New electric Townstar vans, in Leuven and in Antwerp.",
    "fleet.v4d": "Electric vans for deliveries in Antwerp.",
    "fleet.v5d": "20 m³ truck carrying pallets to the Colis Privé depot in Leuven.",
    "partners.title": "We drive for", "partners.more": "More about our partners",
    "partners.pageTitle": "Our partners", "partners.lead": "Every day we drive for three major logistics networks.",
    "partners.p1d": "Parcel delivery with large Mercedes vans.",
    "partners.p2d": "Parcel delivery and transport with our trucks.",
    "partners.p3d": "Delivery with electric Townstar (Leuven, Antwerp) and Maxus eDeliver (Antwerp) vans, and pallet transport with our 20 m³ truck to the depot in Leuven.",
    "band.title": "A question or a job?", "band.cta": "Contact us",
    "contact.title": "Contact", "contact.lead": "Send us a message or give us a call. We reply as soon as we can.",
    "contact.details": "Our details", "contact.company": "Company", "contact.phone": "Phone",
    "contact.area": "Area", "contact.web": "Website", "contact.formTitle": "Send a message",
    "form.name": "Name", "form.email": "Your email address", "form.phone": "Phone (optional)",
    "form.message": "Message", "form.send": "Send",
    "form.errRequired": "Please enter your name, a valid email address and a message.",
    "form.sending": "Sending…", "form.ok": "Thank you, your message has been sent.",
    "form.fail": "Sending failed. Please try again later or call us.",
    "form.mailOpen": "Your email app is opening to send the message."
  }
};

(function () {
  var lang = "nl";
  try {
    var saved = localStorage.getItem("lang");
    if (saved && I18N[saved]) lang = saved;
    else {
      var nav = (navigator.language || "nl").slice(0, 2);
      if (I18N[nav]) lang = nav;
    }
  } catch (e) {}

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.nl[key] || key; }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("lang", lang); } catch (e) {}
      apply();
    });
  });

  // mobile menu
  var menuBtn = document.querySelector(".menu-btn");
  var navEl = document.getElementById("nav");
  if (menuBtn && navEl) {
    menuBtn.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // contact details from CONFIG
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var kind = el.getAttribute("data-contact");
    var val = CONFIG[kind];
    var dd = el.closest("dd");
    if (!val) { dd.previousElementSibling.hidden = true; dd.hidden = true; return; }
    el.textContent = val;
    el.href = kind === "phone" ? "tel:" + val.replace(/[^+\d]/g, "") : "mailto:" + val;
  });

  // contact form
  var form = document.getElementById("contact-form");
  if (form) {
    var note = document.getElementById("form-note");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var d = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim()
      };
      note.className = "note";
      if (!d.name || !d.message || !/^\S+@\S+\.\S+$/.test(d.email)) {
        note.classList.add("err");
        note.textContent = t("form.errRequired");
        return;
      }
      if (CONFIG.formEndpoint) {
        note.textContent = t("form.sending");
        fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(d)
        }).then(function (r) {
          if (!r.ok) throw new Error("http " + r.status);
          note.textContent = t("form.ok");
          form.reset();
        }).catch(function () {
          note.classList.add("err");
          note.textContent = t("form.fail");
        });
      } else if (CONFIG.email) {
        var body = d.message + "\n\n" + d.name + "\n" + d.email + (d.phone ? "\n" + d.phone : "");
        location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Contact cam-renting.be – " + d.name) +
          "&body=" + encodeURIComponent(body);
        note.textContent = t("form.mailOpen");
      } else {
        note.classList.add("err");
        note.textContent = t("form.fail");
      }
    });
  }

  apply();
})();
