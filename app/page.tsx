"use client";

import { FormEvent, useState } from "react";

const PHONE_PRIMARY = "8269860518";
const PHONE_SECONDARY = "8821972045";
const services = [
  { icon: "🦴", title: "Orthopaedics", description: "Consultation for bone, joint and musculoskeletal concerns with an orthopaedic specialist." },
  { icon: "🤰", title: "Obstetrics & Gynaecology", description: "Women’s health, pregnancy-related consultation and maternity care support." },
  { icon: "🚑", title: "Trauma & Emergency", description: "Round-the-clock emergency and trauma assistance. Call the hospital for immediate guidance." },
  { icon: "🩻", title: "Digital X-Ray", description: "Diagnostic imaging facility featured in the hospital information poster." },
  { icon: "🏥", title: "In-patient Care", description: "Hospital and patient-care facilities designed to support treatment and recovery." },
  { icon: "🩺", title: "General Medical Support", description: "Connect with the hospital team to understand available consultations and services." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleAppointment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const message = [
      "Hello Balaji Hospital, I would like to request an appointment.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Department: ${form.get("department")}`,
      `Preferred date: ${form.get("date") || "Not specified"}`,
      `Message: ${form.get("message") || "None"}`,
    ].join("\n");
    window.open(`https://wa.me/91${PHONE_PRIMARY}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar"><div className="container topbarInner">
        <span>📍 Ward No. 3, Manjganj, Madhya Pradesh</span>
        <span>24×7 Emergency: <a href={`tel:${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a> · <a href={`tel:${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a></span>
      </div></div>

      <header className="siteHeader"><div className="container navInner">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brandMark">✚</span><span>BALAJI HOSPITAL<small>MULTI-SPECIALITY &amp; TRAUMA CENTRE</small></span></a>
        <button className="menuButton" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About Us</a><a href="#doctors" onClick={closeMenu}>Our Doctors</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="button navCta" href="#contact">Book Appointment <span>↗</span></a>
      </div></header>

      <main>
        <section className="hero" id="home">
          <div className="heroImage" aria-hidden="true" />
          <div className="heroOverlay" />
          <div className="container heroContent">
            <div className="heroCopy">
              <span className="eyebrow"><i /> CARE WHEN YOU NEED IT MOST · OPEN 24×7</span>
              <h1>Compassionate care.<br /><em>Closer to home.</em></h1>
              <p>Welcome to Balaji Multi-Speciality Hospital &amp; Trauma Centre, Manjganj. Dedicated medical professionals, specialist consultations and round-the-clock emergency support for your family.</p>
              <div className="heroActions"><a className="button redButton" href="#contact">Book an Appointment <b>→</b></a><a className="button whiteButton" href={`tel:${PHONE_PRIMARY}`}>☎ Call 24×7</a></div>
              <div className="heroTrust"><span>✦ Multi-speciality care</span><span>✦ Emergency support</span><span>✦ ISO 9001:2015*</span></div>
            </div>
            <div className="heroCallout"><span className="calloutIcon">✚</span><span><strong>24×7 Emergency Support</strong><small>Call our hospital team anytime</small><b>{PHONE_PRIMARY} · {PHONE_SECONDARY}</b></span></div>
          </div>
        </section>

        <section className="quickFacts"><div className="container factsGrid">
          <div><b>24×7</b><span>Emergency assistance</span></div><div><b>2</b><span>Featured specialists</span></div><div><b>Multi</b><span>Speciality services</span></div><div><b>ISO</b><span>9001:2015 certified*</span></div>
        </div></section>

        <section className="section" id="services"><div className="container">
          <div className="sectionHeading"><span className="kicker">WHAT WE OFFER</span><h2>Care across important specialties</h2><p>Access essential medical services and specialist care at one convenient location in Manjganj.</p></div>
          <div className="serviceGrid">{services.map(service => <article className="serviceCard" key={service.title}><span className="serviceIcon">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
        </div></section>

        <section className="aboutSection section" id="about"><div className="container aboutGrid">
          <div className="aboutVisual"><img src="/hospital-front.jpg" alt="Balaji Hospital building in Manjganj" /><div className="imageLabel"><b>✚</b><span><strong>Balaji Hospital</strong><small>Multi-Speciality &amp; Trauma Centre</small></span></div></div>
          <div className="aboutCopy"><span className="kicker">ABOUT BALAJI HOSPITAL</span><h2>Local healthcare, with a personal touch.</h2><p>Balaji Multi-Speciality Hospital &amp; Trauma Centre serves the Manjganj community with a focus on accessible specialist consultations and emergency support. Our team is committed to treating every patient with respect, attention and care.</p>
            <ul><li>24×7 emergency availability</li><li>Specialist consultations</li><li>Digital X-Ray facility</li><li>Patient-focused environment</li></ul><a className="button blueButton" href="#contact">Get in touch <b>→</b></a>
          </div>
        </div></section>

        <section className="section" id="doctors"><div className="container"><div className="sectionHeading"><span className="kicker">MEET THE SPECIALISTS</span><h2>Doctors featured at Balaji Hospital</h2><p>Connect with the hospital to confirm consultation schedules and availability.</p></div>
          <div className="doctorGrid"><article className="doctorCard"><span className="doctorIcon">🩺</span><h3>Dr. Avneesh Singh</h3><p>MBBS, MS (Orthopaedics)</p><span className="specialtyPill">Orthopaedics Specialist</span></article><article className="doctorCard"><span className="doctorIcon">🩺</span><h3>Dr. Vandana Singh</h3><p>MBBS, MS (Obs &amp; Gynae), DNB</p><span className="specialtyPill">Obstetrics &amp; Gynaecology</span></article></div>
        </div></section>

        <section className="emergencyBand"><div className="container emergencyInner"><div><span className="kicker lightKicker">HERE WHEN YOU NEED US</span><h2>Need emergency assistance?</h2><p>Balaji Hospital is available 24×7 for emergency enquiries.</p></div><a className="button redButton" href={`tel:${PHONE_PRIMARY}`}>☎ Call {PHONE_PRIMARY}</a></div></section>

        <section className="section contactSection" id="contact"><div className="container"><div className="sectionHeading"><span className="kicker">WE’RE HERE TO HELP</span><h2>Contact &amp; appointment enquiries</h2><p>Call the hospital or send an appointment enquiry. The form opens WhatsApp with your details.</p></div>
          <div className="contactGrid"><aside className="contactCard"><h3>Balaji Hospital</h3><div className="contactItem"><span>📍</span><p><b>Visit us</b>Ward No. 3, Manjganj<br />District Manjganj, Madhya Pradesh</p></div><div className="contactItem"><span>☎</span><p><b>Call us</b><a href={`tel:${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a><br /><a href={`tel:${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a></p></div><div className="contactItem"><span>⏰</span><p><b>Emergency support</b>Available 24 hours, 7 days</p></div></aside>
            <form className="appointmentForm" onSubmit={handleAppointment}><h3>Request an appointment</h3><p>Share your details and our team can follow up.</p><div className="formGrid">
              <label>Your name<input name="name" required placeholder="Enter your name" /></label><label>Phone number<input name="phone" required type="tel" pattern="[0-9+ -]{10,15}" placeholder="Your contact number" /></label>
              <label>Department<select name="department"><option>General enquiry</option><option>Orthopaedics</option><option>Obstetrics &amp; Gynaecology</option><option>Trauma / Emergency</option><option>Digital X-Ray</option></select></label><label>Preferred date<input name="date" type="date" /></label>
              <label className="fullWidth">Message (optional)<textarea name="message" rows={3} placeholder="Tell us briefly how we can help" /></label>
            </div><button className="button blueButton submitButton" type="submit">Send enquiry on WhatsApp ↗</button><small>For emergencies, please call the hospital directly. This demo form does not store medical or personal information.</small></form>
          </div>
        </div></section>
      </main>

      <footer><div className="container footerInner"><div><strong>✚ BALAJI HOSPITAL</strong><small>Multi-Speciality Hospital &amp; Trauma Centre · Manjganj, M.P.</small></div><span>© {new Date().getFullYear()} Balaji Hospital. Website concept demo.</span></div></footer>
      <a className="floatingCall" href={`tel:${PHONE_PRIMARY}`}>☎ Emergency Call</a>
    </>
  );
}
