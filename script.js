// script.js

// Fungsi untuk menampilkan angka atau operator ke layar
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Fungsi untuk membersihkan layar
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Fungsi untuk menghapus digit terakhir
function deleteDigit() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk melakukan perhitungan
function calculate() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
