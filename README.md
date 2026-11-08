# Web Profile — Muhammad Farhan Fajriansyah

Website personal portfolio berbasis **React.js** dan **Tailwind CSS**, dibuat sebagai media perkenalan diri, showcase proyek, dan kontak untuk keperluan pencarian kerja sebagai Full Stack Developer.

---

## ✨ Fitur

- **Single Page Application** dengan smooth scroll navigation antar section
- **Fully Responsive** — dioptimalkan untuk mobile, tablet, dan desktop
- **Animasi interaktif** menggunakan [Motion](https://motion.dev/) (fade in, scroll reveal, stagger)
- **Navbar sticky** dengan status "Open for Projects"
- **Profile Card** dinamis dengan animasi ulang saat breakpoint berubah

---

## 🧩 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS v4 |
| Animasi | Motion (motion.dev) |
| Build Tool | Vite |

---

## 📁 Struktur Project

```
web-profile/
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Techhero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Process.jsx
│   │   ├── Guarantee.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── Hooks/
│   │   └── useBreakpoint.js
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── process.js
│   │   ├── guarantee.js
│   │   └── skills.js
│   ├── lib/
│   │   └── Motion.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 Penjelasan Komponen

### Layout Utama
- **`App.jsx`** — Merangkai seluruh section menjadi satu halaman (Navbar → Hero → About → Skills → Projects → Process → Guarantee → Contact → Footer)
- **`Navbar.jsx`** — Navigasi sticky dengan logo, menu anchor link, dan status ketersediaan
- **`Footer.jsx`** — Informasi hak cipta dan identitas singkat

### Section
- **`Hero.jsx`** — Perkenalan awal: nama, tagline, deskripsi singkat, CTA, statistik pengalaman, dan `ProfileCard`
- **`About.jsx`** — Deskripsi diri lebih lengkap beserta tabel data pribadi
- **`Skills.jsx`** — Daftar teknologi yang dikuasai, dikelompokkan per kategori (Frontend, Backend, Database, Tools)
- **`Projects.jsx`** — Daftar proyek yang pernah dikerjakan beserta tech stack masing-masing
- **`Process.jsx`** — Alur kerja dalam mengembangkan sebuah proyek
- **`Guarantee.jsx`** — Komitmen kerja dan nilai-nilai yang dipegang
- **`Contact.jsx`** — Ajakan untuk terhubung beserta kontak (email & GitHub)

### Komponen Pendukung
- **`ProfileCard.jsx`** — Kartu profil ringkas (avatar, nama, status, tech stack) yang tampil di Hero pada layar besar
- **`Techhero.jsx`** — Daftar badge teknologi utama, digunakan di dalam `ProfileCard`

### Utilitas
- **`Hooks/useBreakpoint.js`** — Custom hook untuk mendeteksi breakpoint layar (`lg` ke atas), digunakan untuk memicu ulang animasi `ProfileCard` saat ukuran layar berubah
- **`lib/Motion.js`** — Kumpulan preset animasi (variants) Motion yang dipakai berulang di berbagai komponen: `fadeInUp`, `scrollReveal`, `staggerContainer`, `staggerItem`, dll

---

## 🚀 Instalasi & Menjalankan Project

1. **Clone repository**
   ```bash
   git clone https://github.com/HanTweener/web-profile-2.git
   cd web-profile-2
   ```

2. **Setup Environment Variables**
   Salin `.env.example` menjadi `.env` lalu sesuaikan isinya:
   ```bash
   cp .env.example .env
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser.

5. **Build untuk production**
   ```bash
   npm run build
   ```

---

## 🐳 Deployment via Docker & GHCR

Project ini telah dikonfigurasi dengan **GitHub Actions** untuk otomatis meng-compile dan mem-publish image ke **GitHub Container Registry (GHCR)** setiap ada push ke branch `main`. Di server atau lokal, kita hanya perlu pull image yang sudah jadi tanpa perlu compile ulang.

### Menjalankan dengan Docker Compose

1. Pastikan file `.env` sudah terisi dengan token tunnel dan konfigurasi port.
2. Jalankan:
   ```bash
   docker compose pull
   docker compose up -d
   ```
   Atau gunakan script deployment PowerShell:
   ```powershell
   .\deploy.ps1
   ```

---

## 🔑 Mapping & Key

Setiap kali sebuah array data dirender jadi list elemen memakai `.map()`, React mewajibkan tiap elemen hasil render diberi prop `key` yang unik di antara saudara-saudaranya. Ini dipakai React untuk mengenali elemen mana yang berubah, ditambah, atau dihapus saat data berubah, sehingga re-render lebih efisien dan tidak salah mencocokkan elemen.

Berikut daftar seluruh pemakaian `.map()` di project ini beserta key yang digunakan:

| Komponen | Sumber Data | Di-mapping menjadi | Key yang dipakai |
|---|---|---|---|
| `Navbar.jsx` | `menuItems` (array lokal) | Link menu navigasi | `item.to` |
| `About.jsx` | `infoList` (array lokal) | Baris data diri (nama, domisili, dst) | `item.label` |
| `Skills.jsx` | `data/skills.js` → `skillGroups` | Kotak kategori skill (Frontend, Backend, dst) | `group.category` |
| `Skills.jsx` | `group.items` (nested, per kategori) | Baris nama skill | `item` (string skill itu sendiri) |
| `Projects.jsx` | `data/projects.js` → `projects` | Baris/card tiap project | `project.number` |
| `Projects.jsx` | `project.tags` (nested, per project) | Badge tag teknologi | `tag` (string tag itu sendiri) |
| `Process.jsx` | `data/process.js` → `processSteps` | Kotak tahapan kerja (01–04) | `step.number` |
| `Process.jsx` | `data/process.js` → `processChecklist` | Baris checklist deliverables | `item` (string checklist itu sendiri) |
| `Guarantee.jsx` | `data/guarantee.js` → `guaranteePoints` | Kotak poin komitmen kerja | `point.category` |
| `ProfileCard.jsx` | `infoRows` (array lokal) | Baris label (Status/Lokasi/Github) | `row.label` |
| `ProfileCard.jsx` | `infoRows` (array lokal, kolom kedua) | Baris value (Tersedia/Yogyakarta/dst) | `row.label` |
| `Techhero.jsx` | `data/profile.js` → `mainTechStack` | Badge tech stack di ProfileCard | `tech` (string tech itu sendiri) |
| `Hero.jsx` | `data/profile.js` → `stats` | Angka statistik (3, 2, 250+) | `stat.label` |

### Aturan pemilihan key

- **Prioritas utama:** id atau field unik yang benar-benar tidak berubah dan tidak duplikat, misalnya `item.to`, `project.number`, `group.category`.
- **Kalau data hanya berupa array of string** (contoh: `project.tags`, `skillGroups[].items`), string itu sendiri dipakai sebagai key selama dipastikan tidak ada duplikat dalam array yang sama.
- **Tidak menggunakan index array** (`key={index}`) sebagai key di project ini, karena index bisa berubah urutannya kalau data ditambah/dihapus/diurutkan ulang, yang berisiko membuat React salah mencocokkan elemen saat re-render.

---

## 🎨 Kustomisasi

- **Ganti data pribadi** — edit array/teks di masing-masing file komponen (`About.jsx`, `Skills.jsx`, `Projects.jsx`, dst)
- **Ganti foto profil** — replace file di `src/assets/profile.jpg`
- **Ganti preset animasi** — edit `src/lib/Motion.js`
- **Ganti warna aksen** — cari dan ganti class `blue-300`/`blue-400` di seluruh komponen

---

## 📬 Kontak

- **Email:** m.farhan.fajriansyah@gmail.com
- **GitHub:** [github.com/Hantweener](https://github.com/HanTweener)
- **Domisili:** Malang, Jawa Timur

---

## 📝 Lisensi

Project ini dibuat untuk keperluan personal portfolio. Bebas digunakan sebagai referensi belajar.