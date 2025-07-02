
function toggleLang() {
  const current = document.getElementById('langToggle').innerText;
  if (current.includes("中文")) {
    document.getElementById('langToggle').innerText = "🌐 English / 中文";
  } else {
    document.getElementById('langToggle').innerText = "🌐 中文 / English";
  }
}
