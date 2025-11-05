// js/uiHandler.js
function renderTableData(dataArray) {
  const tableBody = document.getElementById("dataTable");
  tableBody.innerHTML = "";

  // Jika tidak ada data sama sekali
  if (!dataArray || dataArray.length === 0) {
    tableBody.innerHTML = `
      <tr><td colspan="5" class="text-center text-muted">Tidak ada data ditemukan</td></tr>
    `;
    return;
  }

  let validCount = 0;

  dataArray.forEach((item, index) => {
    // Hanya tampilkan data yang lengkap
    if (item.nim && item.nama && item.matakuliah && item.nilai !== undefined) {
      validCount++;
      const row = `
        <tr>
          <td>${validCount}</td>
          <td>${item.nim}</td>
          <td>${item.nama}</td>
          <td>${item.matakuliah}</td>
          <td>${item.nilai}</td
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  });

  // Jika semua data undefined
  if (validCount === 0) {
    tableBody.innerHTML = `
      <tr><td colspan="5" class="text-center text-muted">Tidak ada data valid untuk ditampilkan</td></tr>
    `;
  }
}

export { renderTableData };
