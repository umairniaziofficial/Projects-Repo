window.addEventListener(("load"),()=> {
  // Hide loader
  document.querySelector('.loader').style.display = 'none';
  // Show content
  document.getElementById('content').style.display = 'block';
  // Allow scrolling
  document.body.style.overflow = 'auto';
});

// Ignore this code as this is for blog 

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    toggle.addEventListener("click", () => document.body.classList.toggle("dark-mode"));
  
    const throttle = (func, limit) => {
      let lastFunc, lastRan;
      return () => {
        const context = this, args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };
  
    const toggleSidebar = () => document.body.classList.toggle("sidebar-visible");
    document.querySelector(".sidebar-toggle").addEventListener("click", toggleSidebar);
  
    const headers = document.querySelectorAll(".post-content :is(h1, h2, h3)");
    const sidebar = document.querySelector(".sidebar");
  
    headers.forEach((header, index) => {
      const headerId = header.id || `header${index + 1}`;
      header.id = headerId;
      header.setAttribute("tabindex", "0");
  
      const link = document.createElement("a");
      link.href = `#${headerId}`;
      link.textContent = header.textContent;
      link.className = "sidebar-link";
      link.dataset.headerId = headerId;
  
      sidebar.insertBefore(link, document.querySelector(".reading-progress-container"));
    });
  
    const handleScroll = () => {
      const headers = document.querySelectorAll(".post-content :is(h1, h2, h3)");
      let lastPassedHeaderId = null;
  
      headers.forEach((header) => {
        if (header.getBoundingClientRect().top < window.innerHeight / 2) {
          lastPassedHeaderId = header.id;
        }
      });
  
      const sidebarLinks = document.querySelectorAll(".sidebar-link");
      sidebarLinks.forEach((link) => {
        link.classList.toggle("active", lastPassedHeaderId === link.dataset.headerId);
      });
  
      const [firstHeader, lastParagraph] = [
        document.querySelector(".post-content :is(h1, h2, h3):first-of-type"),
        document.querySelector(".post-content p:last-of-type")
      ];
  
      const startOffset = firstHeader.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2;
      const endOffset = lastParagraph.getBoundingClientRect().bottom + window.pageYOffset - window.innerHeight / 2;
  
      const [scrollTop, scrollRange, scrollPosition] = [
        window.pageYOffset,
        endOffset - startOffset,
        scrollTop - startOffset
      ];
  
      let progress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
      document.querySelector(".reading-progress-bar").style.width = progress * 100 + "%";
    };
  
    document.addEventListener("scroll", throttle(handleScroll, 25));
  });
  