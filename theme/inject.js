// Load shared components into page
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "includes/header.html");
  });
  
  function includeHTML(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch " + file);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error(err));
  }

document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `theme/style.css?v=${STYLE_VERSION}`;
  head.appendChild(link);
});
