// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Simple mailto form
function openMailto(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();

  const subject = encodeURIComponent("Inquiry — Edmonton Freight Solutions");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nDetails:\n${msg}\n\n— Sent from the website`
  );

  window.location.href = `mailto:hello@edmontonfreightsolutions.ca?subject=${subject}&body=${body}`;
  return false;
}
window.openMailto = openMailto;
