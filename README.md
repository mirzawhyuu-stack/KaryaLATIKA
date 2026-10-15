# 🤖 SmartLife AI

> **Solusi Digital untuk Kehidupan Sehari-hari Berbantuan Kecerdasan Artifisial**

SmartLife AI adalah website sederhana yang membantu pengguna, khususnya pelajar, mengelola tugas sehari-hari dan mencatat pengeluaran dalam satu dashboard. Website juga memiliki fitur **Smart Recommendation** yang menganalisis data aktivitas pengguna menggunakan logika rekomendasi berbasis aturan.

## 1. Latar Belakang dan Tujuan

Pelajar sering memiliki beberapa tugas dan pengeluaran dalam satu hari. Jika tidak dicatat, aktivitas tersebut lebih sulit dipantau.

SmartLife AI dibuat sebagai solusi digital sederhana untuk:
- mengelola daftar tugas;
- menentukan prioritas;
- menandai tugas yang selesai;
- mencatat pengeluaran;
- melihat statistik aktivitas;
- mendapatkan rekomendasi berdasarkan data yang dimasukkan.

### Target Pengguna
- Siswa/pelajar
- Mahasiswa
- Pengguna yang ingin mengatur aktivitas harian secara sederhana

## 2. Fitur Utama

### Manajemen Tugas
- Tambah tugas
- Prioritas tinggi, sedang, dan rendah
- Tandai tugas selesai
- Hapus tugas
- Statistik progress

### Keuangan
- Tambah pengeluaran
- Kategori pengeluaran
- Total pengeluaran
- Riwayat transaksi
- Hapus transaksi

### Smart Recommendation
Sistem menganalisis:
- jumlah tugas yang belum selesai;
- tugas dengan prioritas tinggi;
- total pengeluaran;
- ada/tidaknya catatan transaksi.

Kemudian sistem memberikan rekomendasi yang sesuai.

### Fitur Tambahan
- Dark mode / light mode
- Responsive untuk laptop dan smartphone
- LocalStorage sehingga data tetap ada setelah halaman di-refresh
- Navigasi mobile

## 3. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML5 | Struktur halaman |
| CSS3 | Tampilan, layout, responsive design, animasi |
| JavaScript | Logika aplikasi dan interaksi |
| LocalStorage | Penyimpanan data di browser |
| GitHub | Repository dan version control |
| GitHub Pages | Publikasi website |

Tidak menggunakan framework eksternal sehingga struktur dasar dapat dipahami oleh anggota tim.

## 4. Pemanfaatan AI (AI Usage Disclosure)

### Alat AI yang Digunakan
- ChatGPT

### Pemanfaatan AI
AI digunakan sebagai alat bantu, bukan sebagai pengganti pemahaman peserta, untuk:
1. eksplorasi ide;
2. merancang fitur;
3. membuat alternatif struktur HTML/CSS/JavaScript;
4. membantu mencari penyebab error;
5. menjelaskan fungsi kode;
6. memberikan saran pengembangan antarmuka.

### Contoh Prompt Utama
**Tahap ide:**
> "Berikan beberapa ide project website bertema solusi digital untuk kehidupan sehari-hari yang dapat menggunakan HTML, CSS, JavaScript dan memiliki unsur kecerdasan artifisial."

**Tahap scaffolding:**
> "Buatkan kerangka website pengelola tugas dan pengeluaran menggunakan HTML, CSS, dan JavaScript yang responsif."

**Tahap debugging:**
> "Jelaskan cara memperbaiki penyimpanan array JavaScript agar data tetap ada ketika browser di-refresh menggunakan LocalStorage."

**Tahap pemahaman:**
> "Jelaskan fungsi setiap bagian JavaScript pada aplikasi task manager dan sistem rekomendasi."

### Penyesuaian dan Verifikasi Mandiri
Kode yang diberikan AI tidak digunakan tanpa pemeriksaan. Tim:
- mengubah struktur dan tampilan antarmuka;
- menentukan sendiri nama aplikasi dan fitur;
- menyesuaikan alur input dan validasi;
- menambahkan LocalStorage;
- menambahkan dark/light mode;
- mengembangkan sistem rekomendasi;
- melakukan pengujian tambah, edit status, hapus, refresh, dan reset data;
- membaca dan memahami fungsi setiap bagian kode.

Catatan interaksi AI yang lebih lengkap tersedia pada `AI_LOGBOOK.md`.

## 5. Panduan Penggunaan

### Menjalankan Secara Lokal
1. Clone/download repository.
2. Buka folder project.
3. Buka `index.html` menggunakan browser.
4. Tambahkan tugas pada bagian **Tugas**.
5. Tandai tugas selesai menggunakan tombol ✓.
6. Tambahkan pengeluaran pada bagian **Keuangan**.
7. Tekan **Analisis Aktivitas** untuk mendapatkan rekomendasi.
8. Gunakan tombol ☾/☀ untuk mengganti tema.

### Publikasi
Website dipublikasikan menggunakan **GitHub Pages**.

**Link website aktif:**  
`[ISI LINK GITHUB PAGES DI SINI]`

## 6. Struktur Repository

```text
SmartLife-AI/
├── index.html
├── style.css
├── script.js
├── README.md
├── AI_LOGBOOK.md
└── assets/
```

## 7. Identitas Pengembang

| Data | Anggota 1 | Anggota 2 |
|---|---|---|
| Nama Lengkap | **ISI NAMA** | **ISI NAMA** |
| Kelas | **ISI KELAS** | **ISI KELAS** |
| Jurusan | **ISI JURUSAN** | **ISI JURUSAN** |
| Sekolah | **ISI SEKOLAH** | **ISI SEKOLAH** |

> **Penting:** Ganti semua bagian `ISI ...` dengan data anggota tim sebelum repository dikumpulkan.
