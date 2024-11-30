// Responsive Navbar Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Smooth Scroll for Navigation Links
const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Validation
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (event) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    event.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  }
});

// Project Modal (Optional for detailed view)
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectInfo = card.querySelector(".project-info").innerHTML;
    const modal = document.createElement("div");
    modal.classList.add("project-modal");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                ${projectInfo}
            </div>
        `;
    document.body.appendChild(modal);

    // Close Modal
    modal.querySelector(".close-modal").addEventListener("click", () => {
      modal.remove();
    });

    // Close Modal on Outside Click
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.remove();
    });
  });
});

// Dynamic Footer Year
const footerYear = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footerYear.innerHTML = `&copy; ${currentYear}  Ajay Singhadiya. All rights reserved.`;


