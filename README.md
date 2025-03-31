# Luxury Portfolio Website


Sebuah website portofolio modern dan elegan yang dibangun dengan Next.js 13, Tailwind CSS, dan Framer Motion. Website ini menampilkan desain yang mewah dengan animasi yang halus dan interaksi yang menarik.

## 🌟 Fitur Utama

- ⚡ **Performa Tinggi** - Dioptimasi dengan Next.js 13 App Router
- 🎨 **Desain Responsif** - Tampilan yang sempurna di semua ukuran layar
- 🌓 **Dark Mode** - Tema gelap yang elegan sebagai default
- ✨ **Animasi Halus** - Menggunakan Framer Motion untuk transisi dan animasi
- 🎯 **Interaktif** - Elemen-elemen yang responsif terhadap interaksi pengguna
- 📱 **Mobile-First** - Didesain dengan pendekatan mobile-first
- 🔍 **SEO Friendly** - Optimasi SEO dengan metadata yang terstruktur

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)
- **Deployment**: [Vercel](https://vercel.com)

## 📦 Struktur Proyek

```
luxury-portfolio/
├── app/
│   ├── layout.tsx        # Layout utama aplikasi
│   ├── page.tsx          # Halaman utama
│   ├── not-found.tsx     # Halaman 404 custom
│   ├── error.tsx         # Halaman error handling
│   └── loading.tsx       # Loading state
├── components/
│   ├── MainSection.tsx   # Hero section
│   ├── FeaturedWork.tsx  # Showcase proyek
│   ├── Contact.tsx       # Formulir kontak
│   └── ...
├── styles/
│   └── globals.css       # Style global
├── public/              # Asset statis
└── ...
```

## 🚀 Cara Menjalankan Proyek

1. **Clone Repository**
```bash
git clone https://github.com/bimadevs/luxury-portfolio.git
cd luxury-portfolio
```

2. **Install Dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Jalankan Development Server**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🎨 Fitur Desain

### Komponen Utama
- **Hero Section**: Tampilan pembuka yang menarik dengan animasi teks
- **Portfolio Grid**: Galeri proyek yang responsif
- **Testimonial Slider**: Carousel testimoni yang elegan
- **Contact Form**: Formulir kontak yang interaktif

### Halaman Khusus
- **404 Page**: Halaman error custom dengan animasi glitch dan partikel
- **Loading State**: Animasi loading yang menarik
- **Error Boundary**: Penanganan error yang elegan

## 🔧 Konfigurasi

### Environment Variables
Buat file `.env.local` dan tambahkan variabel berikut:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Tailwind Configuration
Kustomisasi tema dapat dilakukan di `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Kustomisasi warna
      }
    }
  }
}
```

## 📱 Responsive Design
Website ini dioptimasi untuk berbagai ukuran layar:
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 🎯 Performance Optimization
- Gambar dioptimasi dengan Next.js Image
- Font loading dioptimasi
- Code splitting otomatis
- Prefetching halaman

## 🤝 Kontribusi
Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📄 Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 👨‍💻 Author
[Nama Anda]
- Website: [website-anda.com](https://bimadev.xyz)
- GitHub: [@bimadevs](https://github.com/bimadevs)
- Instagram: [@biimaa_jo](https://instagram/biimaa_jo)

## 🙏 Acknowledgments
- Design inspiration from [sumber-inspirasi]
- Icons by [Lucide Icons](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com) 