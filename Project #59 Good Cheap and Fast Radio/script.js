document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".theme-checkbox").forEach(function(checkbox) {
      checkbox.addEventListener("click", function() {
        var id = this.id;
        var others = Array.from(document.querySelectorAll(".theme-checkbox")).filter(function(el) {
          return el !== checkbox;
        });
  
        if (this.checked) {
          if ((id === "good" && (document.getElementById("fast").checked && document.getElementById("cheap").checked)) ||
              (id === "cheap" && (document.getElementById("fast").checked && document.getElementById("good").checked)) ||
              (id === "fast" && (document.getElementById("cheap").checked && document.getElementById("good").checked))) {
            others.forEach(function(el) {
              el.checked = false;
            });
          }
        }
      });
    });
  });
  