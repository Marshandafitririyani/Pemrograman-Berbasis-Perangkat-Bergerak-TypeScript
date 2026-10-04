/* Soal 1. Buatlah Pola Segitiga dari NIM, Ambil digit terakhir NIM Anda sebagai tinggi segitiga. 
Contoh: NIM 230411013  (digit terakhir = 3,  tinggi segitiga = 3). 
Buat program TypeScript untuk mencetak segitiga angka dengan pola berikut:

1

1 2

1 2 3

Jika tinggi segitiga = 5, maka baris terakhir menampilkan angka 1 sampai 5, dan seterusnya. */

const nim: string = "053311265";
function cetakSegitiga(nimStr: string): void {
  const digitTerakhir: number = parseInt(nimStr.charAt(nimStr.length - 1), 10);

  console.log(`=== Soal 1: Pola Segitiga (Tinggi: ${digitTerakhir}) ===`);

  if (isNaN(digitTerakhir) || digitTerakhir <= 0) {
    console.log("Digit terakhir NIM harus berupa angka lebih besar dari 0.");
    return;
  }

  for (let i = 1; i <= digitTerakhir; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += j + " ";
    }
    console.log(baris.trimEnd());
  }
}
cetakSegitiga(nim);