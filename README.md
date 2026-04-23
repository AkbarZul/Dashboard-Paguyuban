# Dashboard Paguyuban

Dashboard Paguyuban adalah sebuah aplikasi web front-end yang dibangun menggunakan ekosistem modern React dan Vite. Aplikasi ini dirancang untuk memudahkan manajemen dan pemantauan data paguyuban, terintegrasi dengan Supabase sebagai arsitektur backend.

## 🚀 Tech Stack

Aplikasi ini menggunakan teknologi terbaru dan modern:

- **Framework**: [React 19](https://react.dev/) dengan [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) dengan dukungan utilitas `clsx` & `tailwind-merge`
- **Backend / Database Service**: [Supabase](https://supabase.com/)
- **Data Fetching / State Management**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **Form Handling & Validasi**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons & UI Notifications**: [Lucide React](https://lucide.dev/) & [React Hot Toast](https://react-hot-toast.com/)

## 📦 Prasyarat (Prerequisites)

Pastikan sistem Anda sudah terinstal:
- [Node.js](https://nodejs.org/) (Sangat disarankan memakai versi LTS terbaru)
- Package manager **Yarn** (Atau bisa memakai `npm` / `pnpm`, proyek ini memakai `yarn.lock`)

## 🛠️ Instalasi & Menjalankan Proyek Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi di lingkungan pengembangan lokal:

1. **Clone repository dan masuk ke folder**:
   ```bash
   git clone <url-repository>
   cd dashborad-paguyuban
   ```

2. **Instal dependensi platform**:
   Jika memakai Yarn:
   ```bash
   yarn install
   ```
   Atau jika memakai npm:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variable (.env)**:
   Proyek ini menggunakan Supabase. Sesuaikan file `.env` di *root* folder proyek dengan detail kredensial server Anda. Contoh konfigurasi:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Jalankan *Development Server***:
   ```bash
   yarn dev
   # atau
   npm run dev
   ```

5. **Akses Aplikasi**:
   Aplikasi dapat diakses melalui browser dengan URL yang ditampilkan pada terminal Anda (biasanya `http://localhost:5173`).

## 📜 Daftar Skrip (Scripts)

Beberapa command yang dapat digunakan di proyek ini:

- `yarn dev`: Menjalankan server pengembangan (*development*) Vite.
- `yarn build`: Melakukan *checking* tipe TypeScript (`tsc -b`) dan mem-build project untuk siap dipakai (*production*) lewat Vite.
- `yarn lint`: Menjalankan ESLint untuk mengecek kesalahan kualitas *code style* yang ditetapkan.
- `yarn preview`: Menjalankan server mini lokal untuk mengecek hasil dari skrip `build` aplikasi sebelum *deployment*.

## 📁 Gambaran Struktur Direktori

- `/src`: Menyimpan logika utama, antarmuka (components, pages), routing, dan integrasi API milik proyek React.
- `/public`: Berisi aset statis murni yang tidak akan ikut ter-bundle oleh Vite.
- `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`: Kumpulan konfigurasi penting untuk build system dan styling.
