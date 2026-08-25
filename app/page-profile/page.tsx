"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "JADWAL",
  "QnA",
];

const posts = [
  {
    src: "/konten-medsos-1.png",
    type: "image",
    caption: "(jadwal open trip) September S nya apa? SAILING BARENG SALT & SAIL LAH😎 Selain ngasih makan Instagram, kita juga perlu ngasih makan mental health kita loh! Salah satunya ya refreshing liat alam. Coba cek jadwal trip kita siapa tau cocok sama tanggal libur kamu🫣 Cus keburu seat nya habis!",
    hashtag: "#opentrip #traveling #september #opentripbali #saltnsail",
  },
  {
    src: "/konten-medsos-5.mp4",
    type: "video",
    caption: "(dia sibuk cari yg baru) Coba tag temen kamu yang kaya gini!😭",
    hashtag: "#fyp #opentrip #saltnsail #pulauharapan #pulaupahawang",
  },
  {
    src: "/konten-medsos-3.png",
    type: "image",
    caption: "(kuis berhadiah) 3 TRIP GRATIS UNTUK 3 PEMENANG‼️ CARA IKUTAN 1. Follow Instagram @saltnsail.id (wajib, akan dicek). 2. ⁠Like postingan ini. 3. ⁠Tulis jawaban kamu dan mention 1 orang teman kamu di kolom komentar. S&K PEMENANG 1. Pemenang diambil berdasarkan undian dari komentar yang jawabannya benar dan memenuhi syarat! 2. ⁠Apabila syarat tidak lengkap maka dinyatakan gugur. GAMPANG BANGET NGGAK SIH? Batas Waktu 31 Agustus 2026 Pukul 23.59 RUGI BANGET KALO KETINGGALAN!!!",
    hashtag: "#kuisberhadiah #saltnsail #tripgratis",
  },
  {
    src: "/konten-medsos-4.png",
    type: "image",
    caption: "(jangan lupa nyenengin diri bestie) Tutorial tetap chill di era gempuran ini😭 Btw jadinya udah booking belum? Keburu full!",
    hashtag: "#opentrip #opentripbali #nusapenida #saltnsail",
  },
  {
    src: "/video-1.mp4",
    type: "video",
    caption: "(REELS SNORKLING) Kapan lagi bisa Snorkeling 200 ribuan? Tag temen kamu yang sukanya bilang mau snorkeling!😭",
    hashtag: "#snorkeling #opentrip #snorkelingbali #wisatalaut #saltnsail",
  },
  {
    src: "/konten-medsos-6.png",
    type: "image",
    caption: "(nusa penida) SAILMATES IS CALLING‼️Yang punya wishlist ke Nusa Penida tahun ini, sini-sini kumpul! ada info menarik! Budget 500k an udah bisa seharian penuh keliling Nusa Penida dengan full fasilitas, jadi tinggal duduk manis menikmati pemandangan🥹 Save postingan ini buat referensi liburan kamu! Jangan lupa booking sebelum kehabisan🤫",
    hashtag: "#opentrip #opentripbali #nusapenida #travelingindonesia #saltnsail",
  },
];

export default function ProfilePage() {

  const [selectedPost, setSelectedPost] = useState<(typeof posts)[number] | null>(null);

  return (
    <main className="profile-page">

      {/* NAVBAR */}
      <nav className="home-nav">

        <div className="nav-logo">
          Portfolio
        </div>

        <div className="nav-links">
          <Link href="/" className="back">
            Home
          </Link>

          <a href="#page-profile">
            Profile
          </a>
        </div>

      </nav>

{/* ================= PROFILE HEADER ================= */}
<div className="profile-heading">
  CONTOH TAMPILAN SOROTAN DAN POSTINGAN
</div>

      {/* TOP BAR */}
      <header className="profile-header">

        <Link
          href="/"
          className="back"
        >
          ‹
        </Link>

        <strong>
          salt&sail.id
        </strong>

        <span className="dots">
          •••
        </span>

      </header>


      {/* PROFILE */}
      <section className="profile">

        <div className="profile-top">

          <div className="profile-picture">

            <Image
              src="/photoprofile.png"
              alt="Salt&Sail"
              width={180}
              height={180}
            />

          </div>


          <div className="profile-statistics">

            <h1>
              Salt&Sail
            </h1>

            <div className="stats">

              <div>
                <strong>
                  2.867
                </strong>

                <span>
                  posts
                </span>
              </div>

              <div>
                <strong>
                  305K
                </strong>

                <span>
                  followers
                </span>
              </div>

              <div>
                <strong>
                  6
                </strong>

                <span>
                  following
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* BIO */}
        <div className="bio">

          <span className="category">
            Travel Company
          </span>

          <p>
            Open Trip | Private Trip
          </p>

          <a href="#">
            #FindHappinessFindSalt&Sail
          </a>

          <span className="more">
            ... more
          </span>

          <p>
            Booking/Information your trip 🛳️
          </p>

          <a href="#">
            🔗 linktr.ee/Salt&Sail
          </a>

          <div className="threads">
            ◎ Salt&Sail.id
          </div>

        </div>


        {/* BUTTON */}
        <div className="profile-buttons">

          <button>
            Edit profile
          </button>

          <button>
            Share profile
          </button>

          <button>
            ♙
          </button>

        </div>


        {/* HIGHLIGHT */}
<div className="highlights">

  {highlights.map((item, index) => (
    <div
      className="highlight"
      key={item}
    >
      <div className="highlight-image">
        <Image
          src={
            index === 0
              ? "/highlight-1.png"
              : "/highlight-2.png"
          }
          alt={item}
          width={100}
          height={100}
        />
      </div>

      <span>{item}</span>
    </div>
  ))}

</div>
      </section>


    {/* TABS */}
<div className="tabs">
  <div className="tabs-inner">

    <img
      src="/profile.png"
      alt="Posts"
      className="tab-icon selected"
    />

    <img
      src="/reel.png"
      alt="Reels"
      className="tab-icon"
    />

    <img
      src="/arrow.png"
      alt="Repost"
      className="tab-icon"
    />

    <img
      src="/photo.png"
      alt="Tagged"
      className="tab-icon"
    />

  </div>
</div>

{/* POSTS */}
<section className="post-grid">

  {posts.map((post, index) => (
    <button
      className="post"
      key={post.src}
      type="button"
      onClick={() => setSelectedPost(post)}
    >

      {post.type === "video" ? (
        <video
          src={post.src}
          muted
          loop
          autoPlay
          playsInline
          className="post-media"
        />
      ) : (
        <Image
          src={post.src}
          alt={`Post ${index + 1}`}
          fill
          sizes="(max-width: 500px) 33vw, 300px"
          className="post-media"
        />
      )}

    </button>
  ))}

</section>

{/* INSTAGRAM STYLE POPUP */}
{selectedPost !== null && (
  <div
    className="instagram-modal"
    onClick={() => setSelectedPost(null)}
  >

    <div
      className="instagram-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE */}
      <button
        type="button"
        className="instagram-close"
        onClick={() => setSelectedPost(null)}
      >
        ×
      </button>


      {/* IMAGE / VIDEO */}
<div className="instagram-image">
  {selectedPost.type === "video" ? (
    <video
      src={selectedPost.src}
      className="modal-post-video"
      controls
      autoPlay
      playsInline
    />
  ) : (
    <Image
      src={selectedPost.src}
      alt="Social Media Post"
      fill
      sizes="70vw"
      className="modal-post-image"
    />
  )}
</div>


      {/* RIGHT SIDE */}
      <div className="instagram-info">

        <div className="instagram-user">

          <Image
            src="/photoprofile.png"
            alt="Salt&Sail"
            width={45}
            height={45}
          />

          <div>
            <strong>salt&sail.id</strong>
            <span>Salt&Sail</span>
          </div>

        </div>


       <div className="instagram-caption">

  <strong>salt&sail.id</strong>

  <p>
    {selectedPost.caption}
  </p>

  <p>
    {selectedPost.hashtag}
  </p>

</div>


        <div className="instagram-actions">

          <span><img src="/heart.png" alt="Like" /></span>
          <span><img src="/chat.png" alt="Comment" /></span>
          <span><img src="/send.png" alt="Share" /></span>

        </div>

      </div>

    </div>

  </div>
)}
{/* ================= DISCLAIMER ================= */}
<section className="disclaimer">

  <h2>!! DISCLAIMER !!</h2>

  <p>
    Konten yang ditampilkan mungkin tidak sesuai dengan nama tempat
    yang disebutkan. Seluruh materi konten berasal dari pixels.com
    sehingga konten yang dibuat menyesuaikan ketersediaan video yang
    ada di platform tersebut. Konten hanya menunjukkan bagaimana
    proses berpikir dan hasil visual akhir dari pengembangan sosial
    media Salt & Sail.
  </p>

</section>

    </main>
  );
}
