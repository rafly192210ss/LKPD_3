let totalBayar = 0;

function tambahPesanan() {
    let selectMenu = document.getElementById("menu");
    let namaMenu = selectMenu.options[selectMenu.selectedIndex].text;
    let harga = parseInt(selectMenu.value);
    let jumlah = parseInt(document.getElementById("jumlah").value);

    if (jumlah <= 0 || isNaN(jumlah)) {
        alert("Masukkan jumlah pesanan yang valid!");
        return;
    }

    let subtotal = harga * jumlah;
    totalBayar += subtotal;

    // Tambah item ke daftar di layar
    let ul = document.getElementById("daftarPesanan");
    let li = document.createElement("li");
    li.innerHTML = `<span>${namaMenu.split(' - ')[0]} x${jumlah}</span> <span>Rp ${subtotal.toLocaleString()}</span>`;
    ul.appendChild(li);

    // Update Total Bayar
    document.getElementById("totalBayar").innerText = `Rp ${totalBayar.toLocaleString()}`;
}