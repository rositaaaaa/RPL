// js/main.js
import { addData } from "./dataService.js";

const form = document.getElementById("nilaiForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const matakuliah = document.getElementById("matakuliah").value;
  const nilai = parseFloat(document.getElementById("nilai").value);

  // Validasi form sederhana
  if (!nama || !nim || !matakuliah || isNaN(nilai)) {
    alert("⚠️ Semua kolom harus diisi dengan benar!");
    return;
  }

  try {
    await addData({ nama, nim, matakuliah, nilai });
    alert("✅ Data berhasil disimpan!");
    form.reset();
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
    alert("❌ Terjadi kesalahan saat menyimpan data.");
  }
});
