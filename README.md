## TASK CONDITIONAL JAVASCRIPT

#### Directions

kamu diminta untuk mengerjakan sebuah latihan yang ada di code academy. kerjakan pada unit 1 (introduction) dan 2 (conditional) pada block javascript link latihan pada codeacademy ada dibawah ini

```
https://www.codecademy.com/learn/introduction-to-javascript
```



## TASK IF-ELSE

#### Directions

Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu `nama`dan `peran`. Variabel `peran`harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 `peran`berbeda yaitu **Ksatria**, **Tabib**, dan **Penyihir**. Tugas Anda adalah untuk membuat program yang mengecek isi variabel `peran`serta mengeluarkan respon sesuai isi variabel tersebut.

#### Hints

- Variabel tetap di-input secara manual.
- Variabel `nama`dan `peran`dapat diisi apa saja.
- Nama tidak perlu dicek sama persis seperti contoh input/output
- Buat `If-Else`berbeda masing-masing untuk mengecek `peran`

#### Input

```javascript
//Contoh input
let nama = 'Mikael';
let peran = '';
```

Silakan ganti nilai nama dan peran untuk mengetes kondisi!

#### Output

```javascript
// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
```



## TASK SWITCH-CASE

#### Directions

Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan SWITCH CASE & IF ELSE untuk kasus ini!





#### Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi

```javascript
let tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
```

Contoh:

```javascript
#CONTOH

let hari = 21; let bulan = 1; let tahun = 1945;
Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

let hari = 31; let bulan = 4; let tahun = 1945;
Maka hasil yang akan tampil di console adalah: 'tanggal salah';

let hari = 1; let bulan = 14; let tahun = 1945;
Maka hasil yang akan tampil di console adalah: 'bulan salah';

let hari = 1; let bulan = 2; let tahun = 2211;
Maka hasil yang akan tampil di console adalah: 'tahun salah';
```