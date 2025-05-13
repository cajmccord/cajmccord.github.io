  document.addEventListener("DOMContentLoaded", () => {
    // Inject stylesheet with version
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `theme/style.css?v=${Date.now}`;
    head.appendChild(link);

    // Load shared header
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
