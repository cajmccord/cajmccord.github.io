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
  