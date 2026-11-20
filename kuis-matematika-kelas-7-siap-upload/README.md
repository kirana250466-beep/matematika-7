# Kuis Matematika Kelas 7

Satu halaman kuis (Bilangan Bulat, Pecahan, Himpunan, Aljabar, Perbandingan). Guru masuk dengan nama "Ferdi".

## Isi folder

- `public/index.html` : seluruh aplikasi kuis
- `src/worker.js` : Worker kecil (melayani halaman dan `/health`)
- `wrangler.jsonc` : konfigurasi Worker + aset statis
- `package.json` : skrip `dev` dan `deploy`

File harus berada di akar repo GitHub (`wrangler.jsonc` sejajar dengan `package.json`).

## Deploy sebagai Worker (disarankan)

Cloudflare Dashboard > Workers & Pages > Create > Import a repository.

- Nama Worker: `kuis-matematika-kelas-7` (harus sama dengan `name` di `wrangler.jsonc`)
- Root directory: `/`
- Build command: kosongkan
- Deploy command: `npx wrangler deploy`

## Deploy sebagai Pages

Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git.

- Framework preset: None
- Build command: kosongkan
- Build output directory: `public`

Pages akan memberi peringatan bahwa `wrangler.jsonc` diabaikan. Itu normal dan bukan error.

## Cek setelah deploy

Buka `https://NAMA-ANDA.workers.dev/health`. Jika muncul `{"ok":true,...}`, Worker berjalan.
