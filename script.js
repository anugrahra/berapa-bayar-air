const golongan = document.querySelector('#golongan');
const stBulanLalu = document.querySelector('#stBulanLalu');
const stBulanSekarang = document.querySelector('#stBulanSekarang');
const submit = document.querySelector('#submit');
const hasil = document.querySelector('#hasil');

submit.addEventListener('click', hitung);

function hitung() {
  let beban = 15000;
  let kubikasi = stBulanSekarang.value - stBulanLalu.value;
  let blokPakai1 = '';
  let blokPakai2 = '';

  if (golongan.value == 1) {
    blokPakai1 = 1800;
    blokPakai2 = 3500;
  } else if (golongan.value == 2) {
    blokPakai1 = 3500;
    blokPakai2 = 4500;
  }

  let kubikasi10kibik = blokPakai1 * 10;

  if (kubikasi <= 10) {
    hasil.textContent = kubikasi * blokPakai1 + beban;
  } else {
    hasil.textContent = kubikasi10kibik + beban + (kubikasi - 10) * blokPakai2;
  }
}