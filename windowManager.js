https://github.com/mel-cruz/DetecTop.gitlet topZ = 10;

function openApp(name) {
  const win = document.getElementById(name + "Window");

  if (!win) return;

  win.classList.remove("hidden");

  // bring to front
  win.style.zIndex = topZ++;
}

function closeApp(name) {
  const win = document.getElementById(name + "Window");

  if (!win) return;

  win.classList.add("hidden");
}