/**
 * Format tanggal
 * if elsenya disini
 * Declare tanggal, bulan, tahun
 * tanggal hanya boleh 1 - 31
 * bulan hanya boleh 1 - 12
 * tahun hanya boleh 1900-2200
 * 
 * switch casenya
 * Jika bulan 1 maka januari dst
 * Jika bulan 2 maka check, lagi jika tanggal = 29 maka check tahun apakah kabisat atau gak
 *      Jika bukan maka jadikan ke angka 28, jika iya maka tetap aja seperti itu
 * 
 */

let tanggal = 29;
let bulan = 2;
let tahun = 2201;

switch(bulan){
    case 1:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Januari '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 2:
        if(tahun>1899 && tahun<2201){
            if(tahun%4==0 && tahun%100!=0){
                if(tanggal>0 && tanggal<30){
                    console.log(tanggal+' Februari '+tahun);
                }else{
                    console.log('Tanggal salah');
                }
            }else if(tahun%4==0 && tahun%100==0 && tahun%400){
                if(tanggal>0 && tanggal<30){
                    console.log(tanggal+' Februari '+tahun);
                }else{
                    console.log('Tanggal salah');
                }
            }else{
                if(tanggal>0 && tanggal<29){
                    console.log(tanggal+' Februari '+tahun);
                }else{
                    console.log('Tanggal salah');
                }
            }
        }else{
            console.log('Tahun salah');
        }
        break;
    case 3:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Maret '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 4:
        if(tanggal>0 && tanggal <31){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' April '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 5:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Mei '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 6:
        if(tanggal>0 && tanggal <31){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Juni '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 7:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Juli '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 8:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Agustus '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 9:
        if(tanggal>0 && tanggal <31){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' September '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 10:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Okteber '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 11:
        if(tanggal>0 && tanggal <31){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' November '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    case 12:
        if(tanggal>0 && tanggal <32){
            if(tahun>1899 && tahun<2201){
                console.log(tanggal+' Desember '+tahun);
            }else{
                console.log('Tahun salah');
            }
        }else{
            console.log('Tanggal salah');
        }
        break;
    default:
        console.log('Bulan Salah');
}