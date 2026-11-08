export const projects = [
    {
        number: '01',
        category: 'EDUCATION · WEB',
        title: 'Sistem Informasi Akademik Berbasis Web',
        description:
            'Website berfungsi sebagai portal bagi guru dan siswa dalam proses penilaian dan pembelajaran. Memiliki 3 role (guru, siswa, admin) dengan input nilai bulanan, presensi, dan perhitungan rata-rata semester otomatis agar orang tua bisa memantau perkembangan anak secara langsung.',
        tags: ['MySQL', 'Laravel', 'React', 'Tailwind CSS'],
        year: '2022',
        link: import.meta.env.VITE_PROJECT_1_URL || 'https://siamialghivari.mfarhanf.dpdns.org/',
    },
    {
        number: '02',
        category: 'EDUCATION · WEB & MOBILE',
        title: 'Aplikasi Computer Based Test (CBT)',
        description:
            'Sistem ujian online untuk mempermudah tes kompetensi peserta. Memiliki 3 role (guru, siswa, admin), diakses guru/admin via web dan siswa via mobile (Android). Mendukung import soal, notifikasi ujian, proktoring, dan perhitungan skor otomatis.',
        tags: ['PostgreSQL', 'Flutter', 'Google Firebase'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_2_URL || 'https://cbtsystem.mfarhanf.dpdns.org/',
    },
    {
        number: '03',
        category: 'Health · WEB',
        title: 'RUANG BACA CMI - Platform Informasi Klinik CMI',
        description:
            'Website artikel untuk Ujian Masuk IT CMI, menggunakan Laravel, MySQL, Eloquent, dan Blade. Proyek demo dengan antarmuka berbahasa Indonesia; bukan situs resmi Klinik Utama CMI.',
        tags: ['MySQL', 'Laravel', 'Blade'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_4_URL || 'https://bacacmiv1.mfarhanf.dpdns.org/',
    },
    {
        number: '04',
        category: 'FASHION E-COMMERCE · WEB',
        title: 'MIRA & VALE - Currated Fashion Exhange Platform',
        description:
            'A luxury resale boutique web application for thoughtfully selected bags, small leather goods, and accessories with a second chapter.',
        tags: ['SQLite', 'Go', 'React', 'Tailwind CSS'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_5_URL || 'https://miravale.mfarhanf.dpdns.org/',
    },
    {
        number: '05',
        category: 'SERVICE · WEB & MOBILE',
        title: 'REPARO - Aplikasi Jasa Service Elektronik',
        description:
            'Reparo adalah platform manajemen operasional servis dan pemeliharaan perangkat (Maintenance & Repair Operations Web & Mobile Platform). Sistem ini dirancang untuk mendigitalisasi seluruh siklus hidup layanan reparasi secara transparan, akuntabel, dan terstruktur—menghubungkan Pelanggan, Kasir, Teknisi, dan Admin Operasional dalam satu ekosistem terpadu.',
        tags: ['SQLite', 'Laravel', 'Flutter'],
        year: '2026',
        link: import.meta.env.VITE_PROJECT_4_URL || 'https://reparov1.mfarhanf.dpdns.org/',
    },
]
