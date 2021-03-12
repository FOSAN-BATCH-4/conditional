// TUGAS NO 2

let nama = "Abdurahman";
let peran = "Penyihir";

if (nama == "") {
  console.log("Nama harus diisi!");
} else {
  if (peran == "") {
    console.log(`Halo ${nama} Pilih peranmu untuk memulai game!`);
  } else if (peran === "Ksatria") {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(
      `Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`
    );
  } else if (peran === "Tabib") {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(
      `Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`
    );
  } else if (peran === "Penyihir") {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(
      `Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
    );
  }
}
// AKHIR TUGAS NO 2

// TUGAS NO 3
let tanggal = 29;
let bulan = 2;
let tahun = 2012;

if (tanggal != "" && bulan != "" && tahun != "") {
  if (tahun >= 1900 && tahun <= 2200) {
    switch (bulan) {
      case 1:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Januari ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 2:
        if (
          (tahun % 4 == 0 && tahun % 100 != 0) ||
          (tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0)
        ) {
          if (tanggal >= 1 && tanggal <= 29) {
            console.log(`${tanggal} Februari ${tahun}`);
          } else {
            console.log("tanggal salah");
          }
        } else {
          if (tanggal >= 1 && tanggal <= 28) {
            console.log(`${tanggal} Februari ${tahun}`);
          } else {
            console.log("tanggal salah");
          }
        }
        break;
      case 3:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Maret ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
      case 4:
        if (tanggal >= 1 && tanggal <= 30) {
          console.log(`${tanggal} April ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 5:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Mei ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 6:
        if (tanggal >= 1 && tanggal <= 30) {
          console.log(`${tanggal} Juni ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 7:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Juli ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 8:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Agustus ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 9:
        if (tanggal >= 1 && tanggal <= 30) {
          console.log(`${tanggal} September ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 10:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Oktober ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 11:
        if (tanggal >= 1 && tanggal <= 30) {
          console.log(`${tanggal} November ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      case 12:
        if (tanggal >= 1 && tanggal <= 31) {
          console.log(`${tanggal} Desember ${tahun}`);
        } else {
          console.log("tanggal salah");
        }
        break;
      default:
        console.log("bulan salah");
    }
  } else {
    console.log("tahun salah");
  }
} else {
  console.log("tanggal, bulan, dan tahun tidak boleh kosong");
}
// AKHIR TUGAS NO 3
