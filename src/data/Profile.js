const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/HanTweener'
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || 'HanTweener'

export const profile = {
  name: 'Muhammad Farhan Fajriansyah',
  nameWithTitle: 'Muhammad Farhan Fajriansyah',
  initials: 'MF',
  role: 'FULL STACK DEVELOPER',
  location: 'Malang, Indonesia',
  domicile: 'Malang, Jawa Timur Indonesia',
  email: import.meta.env.VITE_PROFILE_EMAIL || 'm.farhan.fajriansyah@gmail.com',
  github: {
    username: githubUsername,
    handle: `@${githubUsername}`,
    url: githubUrl,
    display: githubUrl.replace(/^https?:\/\//, ''),
  },
  status: {
    label: 'Tersedia',
    availability: 'Open for Projects',
  },
  entitas: 'Fresh Graduate / Full-time',
  sektor: 'Web · Mobile · Sistem Informasi',
  pengalaman: '3 Tahun · 5 Proyek Utama',
}


export const stats = [
  { value: '3', label: 'Tahun Pengalaman' },
  { value: '5', label: 'Proyek Selesai' },
  { value: '', label: '' },
]

// Tech stack utama (ditampilkan di ProfileCard)
export const mainTechStack = ['React', 'Next', 'Flutter', 'Laravel']
