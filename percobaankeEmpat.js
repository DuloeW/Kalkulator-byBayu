var identitas = prompt("Masukan Nama Kamu")
var keputusan = prompt("Masukan Pilihan Kamu! \n Perkalian = 1 \n Pembagian = 2 \n Penjumlahan = 3 \n Pengurangan = 4 \n Rumus = 5");

switch (keputusan) {
  case '1':
    var kepKali = prompt("Kamu memilih perkalian : \n =>Perkalian Manual ( 1 ) \n =>Perkalian Instan ( 2 )")
        switch (kepKali) {
          case '1':
            alert("Oke, kamu memilih perkalian manual")
            var nilaiKali = parseInt(prompt("Perkalian berapa"))
            var ulngKali  = parseInt(prompt("sampai berapa"))
                for (let i = 1; i <= ulngKali; i++) {
                var hasil = i * nilaiKali
                document.getElementById('pemilihan').innerHTML = "Kamu tadi memilih perkalian manual"
                document.getElementById('skor').innerHTML = "Perkalian " + nilaiKali + " sampai " + ulngKali + "x"
                document.getElementById('skor').style.fontSize = '10px'
                  if (i == 10) {
                   alert("Selamat Menikmati Mengetuk Layar") 
                  }else if(i == ulngKali){
                    alert("2 Kali ketukan lagi untuk menyelesaikan ini")
                  }
                alert(`${nilaiKali} x ${i} = ${hasil} `);
              }
          break;
        case '2':
          alert("Oke kamu memilih perkalian instan ");
          var kali = prompt("Masukan perkalian berapa yang anda mau \n Hanya sampai perkalian 10");
          switch (kali) {
            case '1':
              alert("Perkalian 1 \n  1 x 1 = 1 \n  1 x 2 = 2 \n  1 x 3 = 3 \n  1 x 4 = 4 \n  1 x 5 = 5 \n  1 x 6 = 6 \n  1 x 7 = 7 \n  1 x 8 = 8 \n  1 x 9 = 9 \n  1 x 10 = 10 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 1 yang instan"
              break;
            case '2':
              alert("Perkalian 2 \n  2 x 1 = 2 \n  2 x 2 = 4 \n  2 x 3 = 6 \n  2 x 4 = 8 \n  2 x 5 = 10 \n  2 x 6 = 12 \n  2 x 7 = 14 \n  2 x 8 = 16 \n  2 x 9 = 18 \n  2 x 10 = 20 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 2 yang instan"
              break;
            case '3':
              alert("Perkalian 3 \n  3 x 1 = 3 \n  3 x 2 = 6 \n  3 x 3 = 9 \n  3 x 4 = 12 \n  3 x 5 = 15 \n  3 x 6 = 18 \n  3 x 7 = 21 \n  3 x 8 = 24 \n  3 x 9 = 27 \n  3 x 10 = 30 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 3 yang instan"
              break;
            case '4':
              alert("Perkalian 4 \n  4 x 1 = 4 \n  4 x 2 = 8 \n  4 x 3 = 12 \n  4 x 4 = 16 \n  4 x 5 = 20 \n  4 x 6 = 24 \n  4 x 7 = 28 \n  4 x 8 = 32 \n  4 x 9 = 36 \n  4 x 10 = 40 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 4 yang instan"
              break;
            case '5':
              alert("Perkalian 5 \n  5 x 1 = 5 \n  5 x 2 = 10 \n  5 x 3 = 15 \n  5 x 4 = 20 \n  5 x 5 = 25 \n  5 x 6 = 30 \n  5 x 7 = 35 \n  5 x 8 = 40 \n  5 x 9 = 45 \n  5 x 10 = 50 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 5 yang instan"
              break;
            case '6':
              alert("Perkalian 6 \n  6 x 1 = 6 \n  6 x 2 = 12 \n  6 x 3 = 18 \n  6 x 4 = 24 \n  6 x 5 = 30 \n  6 x 6 = 36 \n  6 x 7 = 42 \n  6 x 8 = 48 \n  6 x 9 = 54 \n  6 x 10 = 60 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 6 yang instan"
              break;
            case '7':
              alert("Perkalian 7 \n  7 x 1 = 7 \n  7 x 2 = 14 \n  7 x 3 = 21 \n  7 x 4 = 28 \n  7 x 5 = 35 \n  7 x 6 = 42 \n  7 x 7 = 49 \n  7 x 8 = 56 \n  7 x 9 = 63 \n  7 x 10 = 70 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 7 yang instan"
              break;
            case '8':
              alert("Perkalian 8 \n  8 x 1 = 8 \n  8 x 2 = 16 \n  8 x 3 = 24 \n  8 x 4 = 32 \n 8 x 5 = 40 \n  8 x 6 = 48 \n  8 x 7 = 56 \n 8 x 8 = 64 \n  8 x 9 = 72 \n  8 x 10 = 80 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 8 yang instan"
              break;
            case '9':
              alert("Perkalian 9 \n  9 x 1 = 9 \n  9 x 2 = 18 \n  9 x 3 = 27 \n  9 x 4 = 36 \n  9 x 5 = 45 \n  9 x 6 = 54 \n  9 x 7 = 63 \n  9 x 8 = 72 \n  9 x 9 = 81 \n 9 x 10 = 90 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 9 yang instan"
              break;
            case '10':
              alert("Perkalian 10 \n  10 x 1 = 10 \n  10 x 2 = 20 \n  10 x 3 = 30 \n  10 x 4 = 40 \n  10 x 5 = 50 \n  10 x 6 = 60 \n  10 x 7 = 70 \n  10 x 8 = 80 \n  10 x 9 = 90 \n  10 x 10 = 100 \n")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian 10 yang instan"
              break;
            default:
              alert("HANYA SAMPAI PERKALIAN 10")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian instan"
          }
          break;
        default:
          alert("Pilih no 1 dan 2 aja ya kak")
          document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih perkalian"
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
          alert("Hasil bagi kamu jika di jadikan persen maka akan menjadi " + persenBag + "%")
          document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih hasil bagi ke bentuk persentase"
          document.getElementById('skor').innerHTML = " " + hasilBagi + " = " + persenBag + "%"
          document.getElementById('skor').style.fontSize = "10px"
        }else if(persen == false){
          alert("Oke, jika mau mengulang tinggal pencet tombol ulang di halaman utama")
          document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih pembagian"
          document.getElementById('skor').innerHTML = "Tetapi kamu menolak untuk dijadikan ke bentuk persen"
          document.getElementById('skor').style.fontSize = "10px"
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
                alert("Hasilnya ad di layar utama")
                document.getElementById('pemilihan').innerHTML = "Yey kamu benar di latihan soal pertambahan"
                document.getElementById('skor').innerHTML = "100%"
              }else if(gabSoal < hasilSoal){
                alert("Hasilnya ad di layar utama")
                document.getElementById('pemilihan').innerHTML = "Hmm kamu kekurangan seharusnya " + hasilSoal
                document.getElementById('skor').innerHTML = "25%"
              }else if(gabSoal > hasilSoal){
                alert("Hasilnya ad di layar utama")
                document.getElementById('pemilihan').innerHTML = "Hmm kamu kelewatan seharusnya " + hasilSoal
                document.getElementById('skor').innerHTML = "50%"
              }
        }else if(latTambah == false){
           alert("Oke, jika mau mengulang tinggal pencet tombol halaman utama")
           document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih penjumlahan"
           document.getElementById('skor').innerHTML = "Tetapi kamu menolak latihan soal"
           document.getElementById('skor').style.fontSize = "10px"
        }
    break;
  case '4':
    alert("Oke kamu memilih Pengurangan \n (nilai pertama - nila kedua)");
    var kurang1 = parseInt(prompt("Masukan nilai kurang pertama"));
    var kurang2 = parseInt(prompt("Masukan nilai kurang kedua"));
    var hasilKurang = kurang1 - kurang2;
    alert("Nilai kurang pertama kamu " + kurang1 + " dan nilai kurang kedua kamu " + kurang2 + " maka hasil kurang kamu adalah " + hasilKurang + "\n (" + kurang1 + " - " + kurang2 + " = " + hasilKurang +")");
    var latKurang = confirm("Mau latihan pengurangan?")
        if (latKurang == true) {
          var level = prompt("Silahkan pilih level pengurangannya \n level : \n 1 \n 2 \n 3 \n 4 \n 5")
            switch (level) {
              case '1':
                var solKurang1 = Math.round(Math.random());
                var solKurang2 = Math.round(Math.random());
                var hasSoal  = solKurang1 - solKurang2;
                var gabuSoal    = parseInt(prompt(solKurang1 + " - " + solKurang2+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Yey kamu benar di latihan soal pengurangan lvl 1"
                    document.getElementById('skor').innerHTML = "100%"
                  }else if(gabuSoal > hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kelewatan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "50%"
                  }else if(gabuSoal < hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kekurangan seharusnya " + hasilSoal
                    document.getElementById('skor').innerHTML = "25%"
                  }
                break;
              case '2':
                 var solKurang2 = Math.round(Math.random() * 100);
                var solKurang3 = Math.round(Math.random() * 10);
                var hasSoal  = solKurang2 - solKurang3;
                var gabuSoal    = parseInt(prompt(solKurang2 + " - " + solKurang3+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Yey kamu benar di latihan soal pengurangan lvl 2"
                    document.getElementById('skor').innerHTML = "100%"
                  }else if(gabuSoal < hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kekurangan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "25%"
                  }else if(gabuSoal > hasilSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kelewatan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "50%"
                  }
                break;
              case '3':
                 var solKurang3 = Math.round(Math.random() * 1000);
                var solKurang4 = Math.round(Math.random() * 100);
                var hasSoal  = solKurang3 - solKurang4;
                var gabuSoal    = parseInt(prompt(solKurang3 + " - " + solKurang4+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Yey kamu benar di latihan soal pengurangan lvl 3"
                    document.getElementById('skor').innerHTML = "100%"
                  }else if(gabuSoal > hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kelewatan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "50%"
                  }else if(gabuSoal < hasSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kekurangan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "25%"
                  }
                break;
              case '4':
                 var solKurang5 = Math.round(Math.random() * 100000 * 5);
                var solKurang6 = Math.round(Math.random() * 10000);
                var hasSoal  = solKurang5 - solKurang6;
                var gabuSoal    = parseInt(prompt(solKurang5 + " - " + solKurang6+ " = ?"))
                  if (gabuSoal == hasSoal) {
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Yey kamu benar di latihan soal pengurangan lvl 4"
                    document.getElementById('skor').innerHTML = "100%"
                  }else if(gabuSoal > hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kelewatan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "50%"
                  }else if(gabuSoal < hasSoal){
                    alert("Hasilnya ad di layar utama")
                    document.getElementById('pemilihan').innerHTML = "Hmm kamu kekurangan seharusnya " + hasSoal
                    document.getElementById('skor').innerHTML = "25%"
                  }
                break;
              case '5':
                if (level == 5) {
                  var lev5Kep = confirm("Yakin level 5?")
                  if (lev5Kep == true) {
                    alert("Selamat datang di level dewa matematika")
                    alert("Dan ini adalah pengurangan yang akan di campur dengan perkalian dan pembagian")
                    alert("Mari kita mulai")
                    alert("3")
                    alert("2")
                    alert("1")
                    var solKe1 = Math.round(Math.random() * 100)
                    var solKe2 = Math.round(Math.random() * 100 - 8)
                    var solKe3 = Math.round(Math.random() * 100 )
                    var ranHasil = solKe1 * solKe3 - solKe1 / solKe2 * 0
                    var soalRan = prompt(solKe1 + " x " + solKe3 + " - " + solKe1 + " : " + solKe2 + " x 0 = ?" )
                      if (soalRan == ranHasil) {
                        document.getElementById('pemilihan').innerHTML = "Ampun suhu kamu sudah menamatkan level dewa"
                        document.getElementById('skor').innerHTML = "1000%"
                        document.getElementById('body').style.background =  'linear-gradient(#8a004dc5, #08b2ff94)' 
                      }else{
                        document.getElementById('pemilihan').innerHTML = "Trimakasih Telah Mencoba Level Dewa 'seharusnya " + ranHasil + " '"
                        document.getElementById('skor').innerHTML = "50%"
                        document.getElementById('body').style.background =  'linear-gradient(#4d01a2, #83e2ff)'
                        document.getElementById('button').style.background = '#fff'
                        document.getElementById('button').style.boxShadow = 'inset 3px 3px 5px #9a9a9a'
                      }
                  }else{
                    alert("Takut Ya?")
                    document.getElementById('pemilihan').innerHTML = "Tadi kamu membatalkan memilih pengurangan lvl 5"
                  }
                }else{
                  alert("Jangan Typo")
                  document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih pengurangan"
                }
                break;
              
              default:
                alert("CUMAN SAMPAII LEVEL 5 AJA YA KAK \nJangan Typo")
                document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih pengurangan"
            }
        }else{
          alert("Oke, jika mau mengulang tinggal pencet tombol halaman utama")
           document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih pengurangan"
           document.getElementById('skor').innerHTML = "Tetapi kamu menolak latihan soal"
           document.getElementById('skor').style.fontSize = "10px"
        }
    break;
  case '5':
    var penentu5Case = prompt("Silahkan mau memilih rumus apa? \n => Luas ( 1 ) \n => Keliling ( 2 )")
      switch (penentu5Case) {
        case '1':
          var pilLuas = prompt("Luas : \n => Persegi ( 1 ) \n => Persegi Panjang ( 2 ) \n => Segitiga ( 3 )")
            switch (pilLuas) {
              case '1':
                alert("Oke, kamu memilih rumus persegi");
                var sisi1 = parseInt(prompt("Masukan sisi dari persegi ini 🟥"))
                var hasilPer = sisi1 * sisi1
                alert("Kamu memasukan sisi persegi ini 🟥 dengan panjang " + sisi1 + "cm, \nJadi luas dari persegi yang memiliki sisi " + sisi1 + "cm adalah " + hasilPer + "cm")
                document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih luas persegi"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasilPer + "cm"
                document.getElementById('skor').style.fontSize = "10px"
                break;
             case '2':
               alert("Oke, kamu memilih rumus persegi panjang")
               function lebarPerJang(p,l){
                 return p * l;
               }
               var p = parseInt(prompt("Masukan panjang dari persegi panjang ini 🎴"))
               var l = parseInt(prompt("Masukan lebar dari persegi panjang ini 🎴"))
               var hasil = lebarPerJang(p,l)
               alert("=>Kamu memasukan panjang dari persegi panjang ini 🎴 dengan panjang " + p + "cm, \n=>Dan kamu memasukan lebar dari persegi panjang ini 🎴 dengan lebar " + l + "cm \n=>Jadi, luas dari persegi panjang yang memiliki panjang " + p + "cm dan memiliki lebar " + l + "cm adalah " + hasil + "cm")
               document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih luas persegi panjang"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasil + "cm"
                document.getElementById('skor').style.fontSize = "10px"
               break;
            case '3':
              alert("Oke, kamu memilih rumus segitiga")
              function luasSegitiga(a,t){
                return 1 * ( a * t) / 2
              }
              var a = parseInt(prompt("Masukan panjang alas dari segitiga ini 🔺"))
              var t = parseInt(prompt("Masukan tinggi dari segitiga ini 🔺"))
              var hasilSegit = luasSegitiga(a,t)
              alert("=>Kamu memasukan panjang alas dari segitiga ini 🔺 dengan panjang " + a + "cm, \n=>Dan kamu memasukan tinggi dari segitiga ini 🔺 dengan tinggi " + t + "cm \n=>Jadi, luas dari segitiga yang memiliki alas " + a + "cm dan memiliki tinggi " + t + "cm adalah " + hasilSegit + "cm")
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih luas segitiga"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasilSegit + "cm"
                document.getElementById('skor').style.fontSize = "10px"
              break;
            default:
              alert("Hanya ada Persegi, Persegi Panjang, Segitiga \n jangan Typo");
              document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih luas"
          }
          break;
        case '2':
          var pilKeling = prompt("Keliling : \n => Persegi ( 1 ) \n => Persegi Panjang ( 2 ) \n => Segitiga ( 3 )")
            switch (pilKeling) {
              case '1':
                alert("Oke, kamu memilih rumus persegi");
                var sisi1 = parseInt(prompt("Masukan sisi dari persegi ini 🟥"))
                var hasilPer = sisi1 + sisi1 + sisi1 + sisi1
                alert("=>Kamu memasukan sisi persegi ini 🟥 dengan panjang " + sisi1 + "cm, \n=>Jadi, Keliling dari persegi yang memiliki sisi " + sisi1 + "cm adalah " + hasilPer + "cm")
                document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih keliling persegi"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasilPer + "cm"
                document.getElementById('skor').style.fontSize = "10px"
                break;
              case '2':
                alert("Oke, kamu memilih rumus persegi panjang")
                function kelilingPerJang(p,l){
                  return 2 * (p + l);
                }
                var p = parseInt(prompt("Masukan panjang dari persegi panjang ini 🎴"))
                var l = parseInt(prompt("Masukan lebar dari persegi panjang ini 🎴"))
                var hasil = kelilingPerJang(p,l)
                alert("=>Kamu memasukan panjang dari persegi panjang ini 🎴 dengan panjang " + p + "cm, \n=>Dan kamu memasukan lebar dari persegi panjang ini 🎴 dengan lebar " + l + "cm \n=>Jadi, keliling dari persegi panjang yang memiliki panjang " + p + "cm dan memiliki lebar " + l + "cm adalah " + hasil + "cm")
                document.getElementById('pemilihan').innerHTML = "Tadi kamu memilih keliling persegi panjang"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasil + "cm"
                document.getElementById('skor').style.fontSize = "10px"
                break;
              case '3':
                alert("Oke, kamu memilih rumus segitiga")
                function kelilingSegitiga(a,b,c){
                  return a + b + c
                }
                var a = parseInt(prompt("Masukan sisi pertama dari segitiga ini 🔺"))
                var b = parseInt(prompt("Masukan sisi kedua dari segitiga ini 🔺"))
                var c = parseInt(prompt("Masukan sisi ketiga dari segitiga ini 🔺"))
                var hasilSegit = kelilingSegitiga(a,b,c)
                alert("=>Kamu memasukan sisi pertama dari segitiga ini 🔺 dengan panjang " + a + "cm, \n=>Kamu memasukan sisi kedua dari segitiga ini 🔺 dengan panjang " + b + "cm \n=>Dan kamu memasukan sisi ketiga dengan panjang " + c +"cm \n=>Jadi, keliling dari segitiga yang memiliki sisi pertama " + a + "cm, sisi kedua " + b + "cm dan memiliki sisi ketiga " + c + "cm adalah " + hasilSegit + "cm")
                document.getElementById('pemilihan').innerHTML = "Kamu tadi memilih keliling segitiga"
                document.getElementById('skor').innerHTML = "hasilnya = " + hasilSegit + "cm"
                document.getElementById('skor').style.fontSize = '10px'
              break;
            default:
              alert("Hanya ada Persegi, Persegi Panjang, Segitiga \n jangan Typo");
              document.getElementById('pemilihan').innerHTML = "Kamu tadi memilih keliling"
          }
          break;
        default:
          alert("Hanya Ada Luas dan Keliling Saja \n jangan Typo")
          document.getElementById('pemilihan').innerHTML = "Kamu tadi memilih rumus"
      }
    break;
  default:
    alert("Hanya Sampai 5")
    document.getElementById('pemilihan').innerHTML = "Kamu tidak memilih apa pun"
}
//manipulasi penilaian
var penilaian = prompt("Tolong Nilai Games Ini \n⭐ \n⭐⭐ \n⭐⭐⭐ \n⭐⭐⭐⭐ \n⭐⭐⭐⭐⭐    ");
  if(penilaian == '⭐'){
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaian + ",  kami akan memperbaiki game ini"
  }else if(penilaian == '⭐⭐'){
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaian + ",  kami akan memperbaiki game ini"
  }else if(penilaian == '⭐⭐⭐'){
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaian + ",  kami akan memperbaiki game ini"
  }else if(penilaian == '⭐⭐⭐⭐'){
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaian + ",  kami akan memperbaiki game ini"
  }else if(penilaian == '⭐⭐⭐⭐⭐'){
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaian + ",  kami akan memperbaiki game ini"
  }else{
    alert("=>Kamu enggak punya emot bintang? \n=>Tolong nilai dengan angka")
    var penilaianAngka = prompt("Masukan berapa penilaian kamu")
    document.getElementById('bintang').innerHTML = "Terimakasi atas " + penilaianAngka + "%,kami akan memperbaiki game ini"
  }
document.getElementById('text').innerHTML = "Terimakasih " + identitas + " telah mencoba mesin kami";
document.getElementById('emot').innerHTML =
"😇🙏"
document.getElementById('copy-right').innerHTML =
"©2022-Bayu Code"