/**
 * - Decalare nama game
 * - Declare the name and peran's variable
 * - Buat input menjadi lower case
 * - Peran harus diisi, jika kosong maka "pilih Peranmu untuk memulai game"
 * - Peran have 3 type = Ksatria, Tabib, Penyihir.
 * - Nama harus diisi, jika kosong maka keluar peringatan "Nama harus diisi"
 * - Output nama dan peran , awal huruf besar, seterusnya huruf kecil (Dika, Penyihir)
**/

const gameName = 'Proxytia';
//masukan nama sembarang
let nama = 'dor'.toLowerCase();
//masukan peran Ksatria, Tabib, dan Penyihir
let peran = ''.toLowerCase();
//Syntax untuk tampilan nama dan peran agar huruf pertama besar seterusnya kecil
let namaProses = nama.charAt(0).toUpperCase()+nama.slice(1);
let peranProses = peran.charAt(0).toUpperCase()+peran.slice(1);

if(nama){
    if(peran==='ksatria'){
        console.log('Selamat datang di Dunia '+gameName+','+' '+namaProses)
        console.log('Halo'+' '+peranProses+' '+namaProses+', '+'kamu dapat menyerang dengan senjatamu!')
    }else if(peran==='tabib'){
        console.log('Selamat datang di Dunia '+gameName+','+' '+namaProses)
        console.log('Halo'+' '+peranProses+' '+namaProses+', '+'kamu akan membantu temanmu yang terluka.')
    }else if(peran==='penyihir'){
        console.log('Selamat datang di Dunia '+gameName+','+' '+namaProses)
        console.log('Halo'+' '+peranProses+' '+namaProses+', '+'ciptakan keajaiban yang membantu kemenanganmu!')
    }else{
        console.log('Halo'+' '+namaProses+','+' '+'Pilih peranmu untuk memulai game!');
    }
}else{
    console.log('Nama harus diisi!');
}
