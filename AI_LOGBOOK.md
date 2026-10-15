# AI LOGBOOK — SmartLife AI

## Identitas Tim

| Data | Keterangan |
|---|---|
| Nama Produk | SmartLife AI |
| Tema | Solusi Digital untuk Kehidupan Sehari-hari Berbantuan Kecerdasan Artifisial |
| Anggota 1 | **ISI NAMA LENGKAP** |
| Anggota 2 | **ISI NAMA LENGKAP** |
| Kelas | **ISI KELAS** |
| Jurusan | **ISI JURUSAN** |
| Sekolah | **ISI NAMA SEKOLAH** |

---

# Tahap 1 — Eksplorasi Ide & Perancangan Solusi

### Tujuan
Menentukan masalah sehari-hari yang dapat dibantu dengan solusi digital.

### Interaksi AI
**Prompt:**
> "Berikan beberapa ide project website bertema solusi digital untuk kehidupan sehari-hari yang dapat menggunakan HTML, CSS, JavaScript dan memiliki unsur kecerdasan artifisial."

### Hasil Eksplorasi
Beberapa kemungkinan yang dipertimbangkan:
- pengingat tugas;
- pencatat keuangan;
- pengatur jadwal;
- rekomendasi aktivitas;
- dashboard produktivitas.

### Keputusan Tim
Tim memilih **SmartLife AI**, yaitu website yang menggabungkan manajemen tugas, pencatatan pengeluaran, statistik, dan sistem rekomendasi.

### Alasan Pemilihan
Masalah yang dipilih dekat dengan kehidupan pelajar sehingga mudah diuji menggunakan data nyata sederhana dan mudah dijelaskan saat presentasi.

### Validasi & Modifikasi Mandiri
Tim tidak langsung mengambil semua ide AI. Tim memilih fitur yang realistis untuk dikerjakan dalam HTML, CSS, dan JavaScript. Fitur disederhanakan agar dapat dipahami dan diuji sendiri.

---

# Tahap 2 — Penyusunan Kerangka Kode (Scaffolding)

### Tujuan
Menyusun struktur dasar repository dan hubungan antara HTML, CSS, dan JavaScript.

### Interaksi AI
**Prompt:**
> "Buatkan kerangka website pengelola tugas dan pengeluaran menggunakan HTML, CSS, dan JavaScript yang responsif."

### Rancangan yang Digunakan
- `index.html` sebagai struktur halaman;
- `style.css` sebagai desain;
- `script.js` sebagai logika aplikasi;
- `localStorage` sebagai penyimpanan data browser.

### Validasi & Modifikasi Mandiri
Tim:
1. mengubah nama aplikasi menjadi SmartLife AI;
2. mengubah struktur section;
3. membuat desain dashboard sendiri berdasarkan kebutuhan;
4. menambahkan navigasi;
5. menambahkan dark/light mode;
6. menambahkan statistik;
7. menambahkan validasi input;
8. menyesuaikan sistem rekomendasi.

Kode diuji dengan browser dan diperiksa kembali agar anggota tim memahami fungsi tiap bagian.

---

# Tahap 3 — Pemecahan Masalah & Penanganan Galat (Debugging)

## Masalah 1 — Data hilang setelah refresh

### Interaksi AI
**Prompt:**
> "Bagaimana cara menyimpan array data tugas JavaScript agar data tetap ada setelah browser di-refresh?"

### Solusi yang Dipelajari
Data dapat diubah menjadi JSON menggunakan `JSON.stringify()` sebelum disimpan ke LocalStorage dan dikembalikan menjadi object/array dengan `JSON.parse()`.

### Validasi & Modifikasi Mandiri
Tim melakukan pengujian:
1. menambah tugas;
2. refresh halaman;
3. memastikan tugas masih ada;
4. menandai tugas selesai;
5. refresh kembali;
6. memastikan status tetap tersimpan.

---

## Masalah 2 — Input tidak valid

### Interaksi AI
**Prompt:**
> "Bagaimana cara melakukan validasi input kosong dan jumlah pengeluaran yang bukan angka pada JavaScript?"

### Validasi & Modifikasi Mandiri
Tim menerapkan pengecekan `trim()`, `Number()`, dan `Number.isFinite()` sebelum data dimasukkan ke array.

---

## Masalah 3 — Tampilan mobile

### Interaksi AI
**Prompt:**
> "Berikan cara membuat layout HTML CSS responsive untuk layar smartphone dan laptop."

### Validasi & Modifikasi Mandiri
Tim menyesuaikan breakpoint CSS, membuat menu mobile, mengubah grid menjadi satu kolom pada layar kecil, dan menguji tampilan menggunakan browser dengan ukuran layar berbeda.

---

# Tahap 4 — Refleksi & Penjelasan Kode

### Pemahaman Tim

**HTML**
Digunakan untuk membuat struktur seperti navbar, hero, form, daftar tugas, daftar pengeluaran, dan bagian rekomendasi.

**CSS**
Digunakan untuk mengatur warna, layout, kartu glassmorphism, responsive design, tombol, dan tampilan mobile.

**JavaScript**
Digunakan untuk:
- membaca input;
- menambah data;
- mengubah status tugas;
- menghapus data;
- menghitung statistik;
- menyimpan data ke LocalStorage;
- menghasilkan rekomendasi.

**LocalStorage**
Digunakan agar data tugas dan pengeluaran tetap tersedia ketika halaman di-refresh pada browser yang sama.

**Sistem Rekomendasi**
Sistem menggunakan kondisi `if/else` berdasarkan jumlah tugas, prioritas tugas, dan total pengeluaran untuk menghasilkan saran.

### Validasi & Modifikasi Mandiri
Sebelum project dianggap selesai, tim melakukan pengujian fungsi secara mandiri. Tim memastikan dapat menjelaskan:
- alur penambahan tugas;
- alur penyimpanan LocalStorage;
- proses menghitung progress;
- proses menghitung total pengeluaran;
- proses menghasilkan rekomendasi;
- fungsi responsive CSS.

---

# Ringkasan Penggunaan AI

| Tahap | Tujuan | AI | Validasi Tim |
|---|---|---|---|
| 1 | Eksplorasi ide | ChatGPT | Memilih dan menyederhanakan konsep |
| 2 | Scaffolding | ChatGPT | Mengubah struktur dan desain |
| 3 | Debugging | ChatGPT | Menguji dan memperbaiki kode |
| 4 | Pemahaman | ChatGPT | Menjelaskan kembali fungsi kode |

> AI digunakan sebagai alat bantu pembelajaran dan pengembangan. Tim bertanggung jawab terhadap logika, modifikasi, pengujian, dan kebenaran fungsi project.
