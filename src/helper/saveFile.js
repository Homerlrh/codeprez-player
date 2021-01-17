export default function saveFile (data, lang) {
    const type = {type:`text/${lang}`||"text/javascript"};
    const blob = new Blob([data], type);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = "example.js";
    link.href = url;
    link.click();
  }