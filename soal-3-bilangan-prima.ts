/* Soal 3. Buatlah Bilangan Prima dari NIM. 
Ambil 2 digit terakhir NIM dan tambahkan 10,
 jadikan batas akhir pencarian bilangan prima. 
 Buat program TypeScript untuk menampilkan semua bilangan prima dari 1 sampai batas tersebut.

Contoh: NIM 230411013, 
2 digit terakhir  yaitu 13 ditambah 10, 
sehingga menjadi 23 (batas akhir)

Output: 2, 3, 5, 7, 11, 13, 17, 19, 23 */
const nimSaya: string = "053311265";
function isPrima(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function cetakBilanganPrima(nimStr: string): void {
  console.log("\n=== Soal 3: Bilangan Prima ===");

  const duaDigitTerakhir: number = parseInt(nimStr.slice(-2), 10);
  const batasAkhir: number = duaDigitTerakhir + 10;

  const daftarPrima: number[] = [];

  for (let i = 1; i <= batasAkhir; i++) {
    if (isPrima(i)) {
      daftarPrima.push(i);
    }
  }

  console.log(`2 Digit Terakhir: ${duaDigitTerakhir}`);
  console.log(`Batas Akhir: ${duaDigitTerakhir} + 10 = ${batasAkhir}`);
  console.log(`Output: ${daftarPrima.join(", ")}`);
}

cetakBilanganPrima(nimSaya)