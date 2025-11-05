// validation.js
// Modul berisi fungsi validasi untuk form input

/**
 * Periksa apakah value string non-empty setelah trim
 * @param {string} value
 */
export function isNonEmpty(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * Validasi nilai (harus integer/number antara 0 dan 100)
 * @param {any} v
 */
export function isValidNilai(v) {
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 && n <= 100;
}

/**
 * Validasi keseluruhan form
 * @param {{nim:string,nama:string,matakuliah:string,nilai:any}} obj
 * @returns {{ok:boolean, messages:string[]}}
 */
export function validateForm(obj) {
  const messages = [];

  if (!isNonEmpty(obj.nim)) messages.push("NIM harus diisi.");
  if (!isNonEmpty(obj.nama)) messages.push("Nama harus diisi.");
  if (!isNonEmpty(obj.matakuliah)) messages.push("Mata kuliah harus diisi.");
  if (!isValidNilai(obj.nilai))
    messages.push("Nilai harus angka antara 0 - 100.");

  return { ok: messages.length === 0, messages };
}