export const projects = [
    {
        number: '01',
        category: 'EDUCATION · WEB',
        title: 'Sistem Informasi Akademik Berbasis Web',
        description:
            'Website berfungsi sebagai portal bagi guru dan siswa dalam proses penilaian dan pembelajaran. Memiliki 3 role (guru, siswa, admin) dengan input nilai bulanan, presensi, dan perhitungan rata-rata semester otomatis agar orang tua bisa memantau perkembangan anak secara langsung.',
        tags: ['MySQL', 'Laravel', 'PHP', 'React.js', 'Tailwind CSS', 'TypeScript'],
        year: '2022',
        link: import.meta.env.VITE_PROJECT_1_URL || 'https://siamialghivari.mfarhanf.dpdns.org/',
    },
    {
        number: '02',
        category: 'EDUCATION · WEB & MOBILE',
        title: 'Aplikasi Computer Based Test (CBT)',
        description:
            'Sistem ujian online untuk mempermudah tes kompetensi peserta. Memiliki 3 role (guru, siswa, admin), diakses guru/admin via web dan siswa via mobile (Android). Mendukung import soal, notifikasi ujian, proktoring, dan perhitungan skor otomatis.',
        tags: ['PostgreSQL', 'Flutter', 'Dart', 'Google Firebase'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_2_URL || 'https://cbtsystem.mfarhanf.dpdns.org/',
    },
    {
        number: '03',
        category: 'F&B · WEB & MOBILE',
        title: 'Catter Coffee Center Web Profile',
        description:
            'Catter Coffee Center adalah website profil untuk kedai kopi & kafe yang berlokasi di Turen, Kabupaten Malang, dengan tagline "A Fresh Breeze from The South". Situsnya bergaya visual modern, kombinasi warna hitam, oranye, dan putih tulang, dengan foto makanan/minuman yang jadi elemen utama tiap section (khas landing page one-page/single scroll).',
        tags: ['Canva'],
        year: '2026',
    },
    {
        number: '04',
        category: 'SERVICE · WEB & MOBILE',
        title: 'REPARO - Aplikasi Jasa Service Elektronik',
        description:
            'Reparo adalah platform manajemen operasional servis dan pemeliharaan perangkat (Maintenance & Repair Operations Web & Mobile Platform). Sistem ini dirancang untuk mendigitalisasi seluruh siklus hidup layanan reparasi secara transparan, akuntabel, dan terstruktur—menghubungkan Pelanggan, Kasir, Teknisi, dan Admin Operasional dalam satu ekosistem terpadu.',
        tags: ['SQLite', 'Laravel', 'Flutter'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_4_URL || 'https://reparov1.mfarhanf.dpdns.org/',
    },
    {
        number: '05',
        category: 'FASHION E-COMMERCE · WEB & MOBILE',
        title: 'MIRA & VALE - Aplikasi Jasa Service Elektronik',
        description:
            'A luxury resale boutique web application for thoughtfully selected bags, small leather goods, and accessories with a second chapter.',
        tags: ['SQLite', 'Laravel', 'Flutter'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_5_URL || 'https://miravale.mfarhanf.dpdns.org/',
    },
]
