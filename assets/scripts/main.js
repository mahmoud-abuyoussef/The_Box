document.getElementById("toggle").onclick = () => {
  if (document.getElementById("nav-menu").classList.contains("isopen")) {
    document.getElementById("nav-menu").classList.remove("isopen");
  } else {
    document.getElementById("nav-menu").classList.add("isopen");
  }
};
