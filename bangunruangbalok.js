function hitungVolumeBalok() {
    const inputPanjangElement = document.getElementById("panjang"); 
    const inputLebarElement = document.getElementById("lebar"); 
    const inputTinggiElement = document.getElementById("tinggi"); 
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const panjang = parseFloat(inputPanjangElement.value);
    const lebar = parseFloat(inputLebarElement.value);
    const tinggi = parseFloat(inputTinggiElement.value);

    if (isNaN(panjang, lebar, tinggi) || panjang, lebar, tinggi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan ukuran sisi yang valid";
    } else {
        const volume = panjang * lebar * tinggi;
        hasilPerhitunganElement.innerText = `Volume balok tersebut adalah ${volume}cm³`;
    }

    if (panjang, lebar, tinggi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan angka negatif.");
    }
}
