"use client";

import Link from "next/link";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Konten Media Sosial",
    target: "social-media",
    description:
      "Perancangan dan pengembangan konten media sosial dengan pendekatan visual yang menarik, informatif, dan sesuai dengan karakter brand.",
  },
  {
    title: "Poster / Pamflet Cetak",
    target: "poster",
    description:
      "Desain poster dan pamflet untuk kebutuhan promosi, publikasi, event, dan komunikasi visual.",
  },
  {
    title: "Analisis Performa Konten",
    target: "analysis",
    description:
      "Analisis performa konten berdasarkan engagement, reach, impressions, dan berbagai indikator performa media sosial.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <main className="home-page">

      {/* NAVBAR */}
      <nav className="home-nav">
        <div className="nav-logo">
          Portfolio
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <Link href="/page-profile">Profile</Link>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <p className="small-label">
            Professional <br></br>
            Portfolio
          </p>

   <h1 className="hero-title">
  <img
    src="/title.png"
    alt="Portofolio"
    className="title-image"
  />
</h1>

          <p className="hero-subtitle">
            Visual Stories, Personality Craft
          </p>

          <div className="hero-line">
            <span><img src="/logo-instagram.png" alt="Instagram" /> @hellonasywa</span>
            <span>nasywaarts@gmail.com</span>
          </div>

          <div className="intro-card">

            <div className="intro-text">
              <h2>
                Hello! I&apos;m Nasywa!
              </h2>

              <p>
                I’m Nasywa, socmed specialist with a deep passion for graphic design and editing. 
                I have 4 Years experience researching, designing, and developing visual concepts 
                with a focus on clarity, creativity, and audience engagement. Skilled in Adobe Illustrator, 
                Procreate, Figma,  Canva, DaVinci Resolve and CapCut. I’ve earned national-level recognition 
                from the Ministry of Education, Culture, Research, and Technology for my creative work. 
                I enjoy collaborating with teams, connecting with new people, and contributing to innovative, 
                meaningful projects.
              </p>

              <div className="software-list">
                <span><img src="/logo-canva.png" alt="Canva"/></span>
                <span><img src="/logo-procreate.png" alt="ProCreate"/></span>
                <span><img src="/logo-figma.png" alt="Figma"/></span>
                <span><img src="/logo-ai.png" alt="Adobe Illustrator"/></span>
                <span><img src="/logo-capcut.png" alt="CapCut"/></span>
                <span><img src="/logo-davinciresolve.png" alt="DaVinci Resolve"/></span>
              </div>
            </div>

            <div className="intro-image">
              <div className="person-placeholder">
                <img src="/nasywa.png" alt="Nasywa" />
              </div>
            </div>

          </div>

          {/* NUMBERS */}
          <div className="numbers-section">

            <div className="numbers-description">
              <h3>My Numbers</h3>
              <p>
                These figures represent four years of freelance working experience.
              </p>
            </div>

            <div className="numbers-grid">

              <div className="number-card">
                <strong>30+</strong>
                <span>Clients</span>
              </div>

              <div className="number-card">
                <strong>70+</strong>
                <span>Page Illustrations</span>
              </div>

              <div className="number-card">
                <strong>10+</strong>
                <span>Logos & Branding</span>
              </div>

              <div className="number-card">
                <strong>100+</strong>
                <span>Visual Assets</span>
              </div>

            </div>
      
          </div>

        </div>
      </section>
      <img src="/background-1.png" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} alt="Background"/>

      {/* CHALLENGE */}
<section id="challenge" className="challenge">

 {/* BACKGROUND */}
  <img
    src="/background-2.png"
    className="challenge-bg"
    alt="Background"
  />

  <div className="section-label">
    Challenge
  </div>

  <div className="challenge-buttons">

    {portfolioItems.map((item, index) => (
      <button
        key={item.title}
        className={
          activeSection === index
            ? "challenge-button active"
            : "challenge-button"
        }
        onClick={() => {
          setActiveSection(index);

          document
            .getElementById(item.target)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }}
      >
        {item.title}
      </button>
    ))}

  </div>

</section>

     {/* PORTFOLIO */}
<section id="portfolio" className="portfolio-section">

  {/* ================= MEDIA SOSIAL ================= */}
  <div
    id="social-media"
    className="portfolio-block"
  >

    <div className="portfolio-title blue">
      Konten Media Sosial
    </div>

    <p className="portfolio-description">
      <strong>Carousel & Reels</strong>
      <br />
    Rancangan visual sosial media Salt & Sea dibuat sedemikian rupa agar memiliki kesan humble, fun, dan santai sehingga cocok dengan target market utama yakni Gen Z.  
<br /><br />
Mengapa ini Penting?<br />
Karena visual yang baik dapat mempengaruhi first impression.
<br /><br />
<strong>“The decision-making in the mobile shopping is highly depending on the product’s first impression and their visual preference.”</strong> Predicting the mobile consumer purchase behavior using quantified visual preferences (KAIST, 2017).
    </p>

    <div className="social-grid">

       <div className="portfolio-image tall">
         <video
    src="/video-1.mp4"
    controls
    autoPlay
    muted
    loop
    playsInline
  />
      </div>
      

       <div className="portfolio-image tall">
         <video
    src="/konten-medsos-5.mp4"
    controls
    autoPlay
    muted
    loop
    playsInline
  />
      </div>
      <div className="portfolio-image">
        <img
          src="/konten-medsos-3.png"
          alt="Social media content"
        />
      </div>

      <div className="portfolio-image">
        <img
          src="/konten-medsos-4.png"
          alt="Social media content"
        />
      </div>

      <div className="portfolio-image">
        <img
          src="/konten-medsos-1.png"
          alt="Social media content"
        />
      </div>

      <div className="portfolio-image">
        <img
          src="/konten-medsos-6.png"
          alt="Social media content"
        />
      </div>

    </div>

  <div className="show-links">
  <a
    href="/page-profile"
    className="show-link"
  >
    <span>Tampilkan Simulasi Konten</span>
    <span className="link-icon">→</span>
  </a>

  <a
    href="https://drive.google.com/file/d/19_wA9UNwyEUw1AoBI58ZG8tvucfdyEy5/view?usp=drivesdk"
    className="show-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>Penjelasan Konsep</span>
    <span className="external-icon">↗</span>
  </a>
</div>

  </div>


  {/* ================= POSTER ================= */}
<div
  id="poster"
  className="portfolio-block"
>
  <div className="portfolio-title purple">
    Poster / Pamflet Cetak
  </div>

  <div className="poster-grid">

    <div className="poster-content">

      <div className="portfolio-image poster">
        <img
          src="/pamflet.png"
          alt="Poster"
        />
      </div>

      {/* DESKRIPSI */}
      <div className="poster-description">

        <div className="description-left">
          <p>
            Brosur promosi Open Trip Menjangan Tabuhan untuk Salt & Sail dirancang dengan konsep visual tropis yang ceria dan adventurous. Penggunaan fotografi underwater, warna turquoise dan kuning (palet warna Salt & Sea) serta tipografi rounded menciptakan kesan fun, fresh, dan sesuai dengan karakter wisata bahari.
          </p>
        </div>

        <div className="description-right">
          <p>
            Informasi seperti harga, jadwal keberangkatan, fasilitas, dokumentasi aktivitas, hingga kontak booking disusun dalam layout yang terstruktur agar mudah dipahami. Desain ini bertujuan menarik perhatian calon wisatawan sekaligus memberikan informasi perjalanan secara komunikatif dan engaging.
          </p>
        </div>

      </div>

    </div>

  </div>
</div>


  {/* ================= ANALYSIS ================= */}
  <div
    id="analysis"
    className="portfolio-block"
  >

    <div className="portfolio-title tosca">
      Analisis Performa Konten
    </div>

    <div className="analysis-card">
      <img
        src="/analisis-performa-konten.png"
        alt="Content analysis"
      />
    </div>
  </div>

</section>

      {/* THANK YOU */}
      <section className="thank-you">
  <div className="thank-glow"></div>

  <h2 className="thank-title">
  Thank You
</h2>
 <img src="/background-3.png" alt="background" />

  <div className="footer-line">
    <span className="instagram-link">
      <img src="/logo-instagram.png" alt="Instagram" />
      @hellonasywa
    </span>

    <span>nasywaarts@gmail.com</span>
  </div>
</section>

    </main>
  );
};
