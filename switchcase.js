let tanggal = 31
let bulan = 3
let tahun = 1996

if(
    (bulan == 1,3,5,7,8,10,12 && tanggal>31)||
    (bulan == 4, 6, 9, 11 && tanggal>30) || 
    (tahun%4==0 && bulan == 2 && tanggal>29) || 
    (tahun%4 != 0 && bulan == 2 && tanggal>28)
    ) {
    console.log('masukkan tanggal yang benar!')
    }
else if (tahun==1996&&bulan==7&&tanggal==15){
    console.log('HAPPY BIRTHDAY!!!!')
}
else{
    switch (bulan) {
        case 1 :
            console.log(`${tanggal} Januari ${tahun}`);
            break;
        case 2 :
            console.log(`${tanggal} Februari ${tahun}`);
            break;
        case 3 :
            console.log(`${tanggal} Maret ${tahun}`);
            break;
        case 4 :
            console.log(`${tanggal} April ${tahun}`);
            break;
        case 5 :
            console.log(`${tanggal} Mei ${tahun}`);
            break;
        case 6 :
            console.log(`${tanggal} Juni ${tahun}`);
            break;
        case 7 :
            console.log(`${tanggal} Juli ${tahun}`);
            break;
        case 8 :
            console.log(`${tanggal} Agustus ${tahun}`);
            break;
        case 9 :
            console.log(`${tanggal} September ${tahun}`);
            break;
        case 10 :
            console.log(`${tanggal} Oktober ${tahun}`);
            break;
        case 11 :
            console.log(`${tanggal} November ${tahun}`);
            break;
        case 12 :
            console.log(`${tanggal} Desember ${tahun}`);
            break;
    }
}