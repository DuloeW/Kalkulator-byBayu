var keputusan = prompt("Masukan Pilihan Kamu! \n Perkalian = 1 \n Pembagian = 2 \n Penjumlahan = 3 \n Pengurangan = 4 \n Rumus = 5");

switch (keputusan) {
  case '1':
    alert("Oke kamu memilih Perkalian");
    var kali = prompt("Masukan perkalian berapa yang anda mau \n Hanya sampai perkalian 10");
      switch (kali) {
        case '1':
          alert("Perkalian 1 \n  1 x 1 = 1 \n  1 x 2 = 2 \n  1 x 3 = 3 \n  1 x 4 = 4 \n  1 x 5 = 5 \n  1 x 6 = 6 \n  1 x 7 = 7 \n  1 x 8 = 8 \n  1 x 9 = 9 \n  1 x 10 = 10 \n")
          break;
        case '2':
          alert("Perkalian 2 \n  2 x 1 = 2 \n  2 x 2 = 4 \n  2 x 3 = 6 \n  2 x 4 = 8 \n  2 x 5 = 10 \n  2 x 6 = 12 \n  2 x 7 = 14 \n  2 x 8 = 16 \n  2 x 9 = 18 \n  2 x 10 = 20 \n")
          break;
        case '3':
          alert("Perkalian 3 \n  3 x 1 = 3 \n  3 x 2 = 6 \n  3 x 3 = 9 \n  3 x 4 = 12 \n  3 x 5 = 15 \n  3 x 6 = 18 \n  3 x 7 = 21 \n  3 x 8 = 24 \n  3 x 9 = 27 \n  3 x 10 = 30 \n")
          break;
        case '4':
          alert("Perkalian 4 \n  4 x 1 = 4 \n  4 x 2 = 8 \n  4 x 3 = 12 \n  4 x 4 = 16 \n  4 x 5 = 20 \n  4 x 6 = 24 \n  4 x 7 = 28 \n  4 x 8 = 32 \n  4 x 9 = 36 \n  4 x 10 = 40 \n")
          break;
        case '5':
          alert("Perkalian 5 \n  5 x 1 = 5 \n  5 x 2 = 10 \n  5 x 3 = 15 \n  5 x 4 = 20 \n  5 x 5 = 25 \n  5 x 6 = 30 \n  5 x 7 = 35 \n  5 x 8 = 40 \n  5 x 9 = 45 \n  5 x 10 = 50 \n")
          break;
        case '6':
          alert("Perkalian 6 \n  6 x 1 = 6 \n  6 x 2 = 12 \n  6 x 3 = 18 \n  6 x 4 = 24 \n  6 x 5 = 30 \n  6 x 6 = 36 \n  6 x 7 = 42 \n  6 x 8 = 48 \n  6 x 9 = 54 \n  6 x 10 = 60 \n")
          break;
        case '7':
          alert("Perkalian 7 \n  7 x 1 = 7 \n  7 x 2 = 14 \n  7 x 3 = 21 \n  7 x 4 = 28 \n  7 x 5 = 35 \n  7 x 6 = 42 \n  7 x 7 = 49 \n  7 x 8 = 56 \n  7 x 9 = 63 \n  7 x 10 = 70 \n")
          break;
        case '8':
          alert("Perkalian 8 \n  8 x 1 = 8 \n  8 x 2 = 16 \n  8 x 3 = 24 \n  8 x 4 = 32 \n 8 x 5 = 40 \n  8 x 6 = 48 \n  8 x 7 = 56 \n  8 x 8 = 64 \n  8 x 9 = 72 \n  8 x 10 = 80 \n")
          break;
        case '9':
          alert("Perkalian 9 \n  9 x 1 = 9 \n  9 x 2 = 18 \n  9 x 3 = 27 \n  9 x 4 = 36 \n  9 x 5 = 45 \n  9 x 6 = 54 \n  9 x 7 = 63 \n  9 x 8 = 72 \n  9 x 9 = 81 \n 9 x 10 = 90 \n")
          break;
        case '10':
          alert("Perkalian 10 \n  10 x 1 = 10 \n  10 x 2 = 20 \n  10 x 3 = 30 \n  10 x 4 = 40 \n  10 x 5 = 50 \n  10 x 6 = 60 \n  10 x 7 = 70 \n  10 x 8 = 80 \n  10 x 9 = 90 \n  10 x 10 = 100 \n")
          break;
        default:
          alert("HANYA SAMPAI PERKALIAN 10")
      }
    break;
  case '2':
    alert("Oke kamu memilih Pembagian \n (nilai pertama : nila kedua)");
    var bagi1 = parseInt(prompt("Masukan nilai bagi pertama"));
    var bagi2 = parseInt(prompt("Masukan nilai bagi kedua"));
    var hasilBagi = bagi1 / bagi2;
    alert("Nilai bagi pertama kamu " + bagi1 + " dan nilai bagi kedua kamu " + bagi2 + " maka hasil bagi kamu adalah " + hasilBagi + "\n (" + bagi1 + " : " + bagi2 + " = " + hasilBagi +")");
    var persen = confirm("Mau tau hasil dari bagi kamu jika di ubah ke bentuk pesen(%)?")
        if (persen == true) {
          var persenBag = hasilBagi * 1 / 100
          //var bulatPers = Math.round() + hasilBagi
          alert("Hasil bagi kamu jika di jadikan persen maka akan menjadi " + persenBag + "%")
        }else if(persen == false){
          alert("Oke, jika mau mengulang tinggal refresh halaman ini")
        }
    break;
  case '3':
    alert("Oke kamu memilih Penjumlahan \n (nilai pertama + nila kedua)");
    var tambah1 = parseInt(prompt("Masukan nilai tambah pertama"));
    var tambah2 = parseInt(prompt("Masukan nilai tambah kedua"));
    var hasilTambah = tambah1 + tambah2;
    alert("Nilai jumlah pertama kamu " + tambah1 + " dan nilai jumlah kedua kamu " + tambah2 + " maka hasil jumlah kamu adalah " + hasilTambah + "\n (" + tambah1 + " + " + tambah2 + " = " + hasilTambah +")");
    var latTambah = confirm("Mau latihan soal pertambahan?")
        if (latTambah == true) {
          var solTambah1 = Math.round(Math.random() * 1000);
          var solTambah2 = Math.round(Math.random() * 1000);
          var hasilSoal  = solTambah1 + solTambah2;
          var gabSoal    = parseInt(prompt(solTambah1 + " + " + solTambah2 + " = ?"))
              if (gabSoal == hasilSoal) {
                alert("yey kamu benar")
              }else if(gabSoal != hasilSoal){
                alert("Loh kok salah?")
              }
        }else if(latTambah == false){
           alert("Oke, jika mau mengulang tinggal refresh halaman ini")
        }
    break;
  case '4':
    alert("Oke kamu memilih Pengurangan \n (nilai pertama - nila kedua)");
    var kurang1 = parseInt(prompt("Masukan nilai kurang pertama"));
    var kurang2 = parseInt(prompt("Masukan nilai kurang kedua"));
    var hasilKurang = kurang1 - kurang2;
    alert("Nilai kurang pertama kamu " + kurang1 + " dan nilai kurang kedua kamu " + kurang2 + " maka hasil jumlah kamu adalah " + hasilKurang + "\n (" + kurang1 + " - " + kurang2 + " = " + hasilKurang +")");
    var latKurang = confirm("Mau latihan pengurangan?")
        if (latKurang == true) {
          var level = prompt("Silahkan pilih level pengurangannya \n level : \n 1 \n 2 \n 3 \n 4")
            switch (level) {
              case '1':
                var solKurang1 = Math.round(Math.random());
                var solKurang2 = Math.round(Math.random());
                var hasSoal  = solKurang1 - solKurang2;
                var gabuSoal    = parseInt(prompt(solKurang1 + " - " + solKurang2+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("yey kamu benar")
                  }else if(gabuSoal != hasSoal){
                    alert("BLOKKKK")
                  }
                break;
              case '2':
                 var solKurang2 = Math.round(Math.random() * 100);
                var solKurang3 = Math.round(Math.random() * 10);
                var hasSoal  = solKurang2 - solKurang3;
                var gabuSoal    = parseInt(prompt(solKurang2 + " - " + solKurang3+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("yey kamu benar")
                  }else if(gabuSoal != hasSoal){
                    alert("BLOKKKK")
                  }
                break;
              case '3':
                 var solKurang3 = Math.round(Math.random() * 1000);
                var solKurang4 = Math.round(Math.random() * 100);
                var hasSoal  = solKurang3 - solKurang4;
                var gabuSoal    = parseInt(prompt(solKurang3 + " - " + solKurang4+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("yey kamu benar")
                  }else if(gabuSoal != hasSoal){
                    alert("BLOKKKK BLOKKKK")
                  }
                break;
              case '4':
                 var solKurang5 = Math.round(Math.random() * 100000 * 5);
                var solKurang6 = Math.round(Math.random() * 10000);
                var hasSoal  = solKurang5 - solKurang6;
                var gabuSoal    = parseInt(prompt(solKurang5 + " - " + solKurang6+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("yey kamu benar")
                  }else if(gabuSoal != hasSoal){
                    alert("BLOKKKK BLOKKKK BLOKKKK")
                  }
                break;
              default:
                alert("CUMAN SAMPAII LEVEL 4 AJA YA KAK \n jangan Typo")
            }
        }
    break;
  case '5':
    var penentu5Case = prompt("Silahkan mau memilih rumus apa? \n => Luas \n => Keliling")
      switch (penentu5Case) {
        case 'Luas':
          var pilLuas = prompt("Luas : \n => Persegi \n => Persegi Panjang \n => Segitiga")
            switch (pilLuas) {
              case 'Persegi':
                alert("Oke, kamu memilih rumus persegi");
                var sisi1 = parseInt(prompt("Masukan sisi dari persegi ini 🟥"))
                var hasilPer = sisi1 * sisi1
                alert("Kamu memasukan sisi persegi ini 🟥 dengan panjang " + sisi1 + "cm, \nJadi luas dari persegi yang memiliki sisi " + sisi1 + "cm adalah " + hasilPer + "cm")
                break;
             case 'Persegi Panjang':
               alert("Oke, kamu memilih rumus persegi panjang")
               function lebarPerJang(p,l){
                 return p * l;
               }
               var p = parseInt(prompt("Masukan panjang dari persegi panjang ini 🎴"))
               var l = parseInt(prompt("Masukan lebar dari persegi panjang ini 🎴"))
               var hasil = lebarPerJang(p,l)
               alert("=>Kamu memasukan panjang dari persegi panjang ini 🎴 dengan panjang " + p + "cm, \n=>Dan kamu memasukan lebar dari persegi panjang ini 🎴 dengan lebar " + l + "cm \n=>Jadi, luas dari persegi panjang yang memiliki panjang " + p + "cm dan memiliki lebar " + l + "cm adalah " + hasil + "cm")
               break;
            case 'Segitiga':
              alert("Oke, kamu memilih rumus segitiga")
              function luasSegitiga(a,t){
                return 1 * ( a * t) / 2
              }
              var a = parseInt(prompt("Masukan panjang alas dari segitiga ini 🔺"))
              var t = parseInt(prompt("Masukan tinggi dari segitiga ini 🔺"))
              var hasilSegit = luasSegitiga(a,t)
              alert("=>Kamu memasukan panjang alas dari segitiga ini 🔺 dengan panjang " + a + "cm, \n=>Dan kamu memasukan tinggi dari segitiga ini 🔺 dengan tinggi " + t + "cm \n=>Jadi, luas dari segitiga yang memiliki alas " + a + "cm dan memiliki tinggi " + t + "cm adalah " + hasilSegit + "cm")
              break;
            default:
              alert("Hanya ada Persegi, Persegi Panjang, Segitiga \n jangan Typo");
          }
          break;
        case 'Keliling':
          var pilKeling = prompt("Keliling : \n => Persegi \n => Persegi Panjang \n => Segitiga")
            switch (pilKeling) {
              case 'Persegi':
                alert("Oke, kamu memilih rumus persegi");
                var sisi1 = parseInt(prompt("Masukan sisi dari persegi ini 🟥"))
                var hasilPer = sisi1 + sisi1 + sisi1 + sisi1
                alert("=>Kamu memasukan sisi persegi ini 🟥 dengan panjang " + sisi1 + "cm, \n=>Jadi, Keliling dari persegi yang memiliki sisi " + sisi1 + "cm adalah " + hasilPer + "cm")
                break;
              case 'Persegi Panjang':
                alert("Oke, kamu memilih rumus persegi panjang")
                function kelilingPerJang(p,l){
                  return 2 * (p + l);
                }
                var p = parseInt(prompt("Masukan panjang dari persegi panjang ini 🎴"))
                var l = parseInt(prompt("Masukan lebar dari persegi panjang ini 🎴"))
                var hasil = kelilingPerJang(p,l)
                alert("=>Kamu memasukan panjang dari persegi panjang ini 🎴 dengan panjang " + p + "cm, \n=>Dan kamu memasukan lebar dari persegi panjang ini 🎴 dengan lebar " + l + "cm \n=>Jadi, keliling dari persegi panjang yang memiliki panjang " + p + "cm dan memiliki lebar " + l + "cm adalah " + hasil + "cm")
                break;
              case 'Segitiga':
                alert("Oke, kamu memilih rumus segitiga")
                function kelilingSegitiga(a,b,c){
                  return a + b + c
                }
                var a = parseInt(prompt("Masukan sisi pertama dari segitiga ini 🔺"))
                var b = parseInt(prompt("Masukan sisi kedua dari segitiga ini 🔺"))
                var c = parseInt(prompt("Masukan sisi ketiga dari segitiga ini 🔺"))
                var hasilSegit = kelilingSegitiga(a,b,c)
                alert("=>Kamu memasukan sisi pertama dari segitiga ini 🔺 dengan panjang " + a + "cm, \n=>Kamu memasukan sisi kedua dari segitiga ini 🔺 dengan panjang " + b + "cm \n=>Dan kamu memasukan sisi ketiga dengan panjang " + c +"cm \n=>Jadi, keliling dari segitiga yang memiliki sisi pertama " + a + "cm, sisi kedua " + b + "cm dan memiliki sisi ketiga " + c + "cm adalah " + hasilSegit + "cm")
              break;
            default:
              alert("Hanya ada Persegi, Persegi Panjang, Segitiga \n jangan Typo");
          }
          break;
        default:
          alert("Hanya Ada Luas dan Keliling Saja \n jangan Typo")
      }
    break;
  default:
    alert("Jangan Typo")
}
document.getElementById('text').innerHTML = "Terimakasih telah mencoba mesin kami";
document.getElementById('emot').innerHTML =
"😇🙏"
document.getElementById('copy-right').innerHTML =
"©2022-Bayu Code"
