function calculate() {
    let berat = document.getElementById('berat').value;
    let tinggi = document.getElementById('tinggi').value;
    let bmi = berat / (tinggi * tinggi);
    bmi = bmi.toFixed(2);
    document.getElementById('bmi').innerText = bmi;
}
