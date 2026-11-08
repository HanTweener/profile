// Fade in + slide up dari bawah — cocok untuk elemen Hero saat pertama load
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: "easeOut" },
}

// Fade in polos, tanpa geser — cocok untuk elemen simpel (background, divider)
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

// Slide in dari kanan — cocok untuk ProfileCard di Hero (col-start-4)
export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

// Slide in dari kiri — pasangan slideInRight, buat elemen di sisi kiri
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

// Scroll reveal — animasi jalan saat elemen masuk viewport, sekali aja (untuk section About/Skills/Projects/dst)
export const scrollReveal = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.0, ease: "easeOut" },
}

export const scrollRevealleft = {
    initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
}

// Scroll reveal versi lebih lambat, cocok untuk judul besar section
export const scrollRevealSlow = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
}

// Hover + tap untuk tombol/link interaktif
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
}

// Untuk parent list/grid — mengatur jeda antar child saat muncul berurutan
export const staggerContainer = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: {},
    visible: {
      transition: { duration: 2.0,
        staggerChildren: 0.15,
      },
    },
  },
}

export const staggerContainerleft = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: {
    hidden: {opacity: 0, x: 500 },
    visible: {opacity: 1, x: 0, transition: { duration: 2.0, ease: "easeOut" }
    },
  },
}

// Untuk child di dalam staggerContainer (misal tiap card Skills/Projects)
export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
}

// Helper: bikin delay custom di atas fadeInUp, buat elemen yang muncul berurutan manual
export const fadeInUpDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
})