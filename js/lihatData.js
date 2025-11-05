// js/lihatData.js
import { getAllData } from "./dataService.js";
import { renderTableData } from "./uiHandler.js";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await getAllData(); // ambil semua data dari Firestore
    renderTableData(data); // tampilkan di tabel
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
});
