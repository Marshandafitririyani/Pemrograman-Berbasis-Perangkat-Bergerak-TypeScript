/* Soal 2. Buatlah Deret Aritmatika dengan NIM. 
Ambil 2 digit terakhir NIM, jadikan angka awal deret. 
Ambil digit ke-3 dari belakang, jadikan beda (step). 
Buat program TypeScript untuk mencetak 10 angka pertama dari deret aritmatika tersebut.

Contoh: NIM 230411013, 
2 digit terakhir = 13,  
berarti start dari 13.  
digit ke-3 dari belakang + 1 (0 + 1), 
sehingg beda nya = 1 step.

Output:13, 14, 15, 16, 17, 18, 19, 20, 21, 22 */

const nimMahasiswa: string = "053311265";

function cetakDeretAritmatika(nimStr: string): void {
  console.log("\n=== Soal 2: Deret Aritmatika ===");
  const duaDigitTerakhir: number = parseInt(nimStr.slice(-2), 10);
  const digitKeTigaDariBelakang: number = parseInt(nimStr.charAt(nimStr.length - 3), 10);
  const beda: number = digitKeTigaDariBelakang + 1;

  const jumlahSuku: number = 10;
  const deret: number[] = [];

  for (let i = 0; i < jumlahSuku; i++) {
    const nilaiSuku: number = duaDigitTerakhir + i * beda;
    deret.push(nilaiSuku);
  }

  console.log(`Start: ${duaDigitTerakhir}, Beda: ${beda}`);
  console.log(`Output: ${deret.join(", ")}`);
}
cetakDeretAritmatika(nimMahasiswa);
