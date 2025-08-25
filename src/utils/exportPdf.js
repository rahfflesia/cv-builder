import html2pdf from "html2pdf.js";

export default function exportPdf() {
  const cv = document.getElementById("cv-component");
  const opt = {
    margin: [15, 15],
    filename: "cv.pdf",
    html2canvas: { scale: 2, letterRendering: true },
    image: { type: "jpeg", quality: 1 },
    jsPDF: { unit: "pt", format: "letter", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };
  html2pdf().from(cv).set(opt).save();
}
