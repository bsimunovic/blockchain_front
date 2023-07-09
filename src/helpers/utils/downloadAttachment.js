export function downloadAttachment(fileName, cb, extension = ".pdf") {
  const url = window.URL.createObjectURL(cb());
  const link = document.createElement("a");
  link.href = url;

  link.setAttribute("download", `${fileName}${extension}`);
  document.body.appendChild(link);
  link.click();
}
