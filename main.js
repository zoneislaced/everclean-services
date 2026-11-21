const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  const setMenu = isOpen => {
    nav.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };
  menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Pre-select the town when a visitor picks one from the "other towns" list
const quoteForm = document.getElementById("quoteForm");
document.querySelectorAll("[data-town]").forEach(link => {
  link.addEventListener("click", () => {
    const select = quoteForm && quoteForm.querySelector("select[name=town]");
    if (select) select.value = link.getAttribute("data-town");
  });
});

// Quote form: submits to Netlify Forms (form name "quote")
if (quoteForm) {
  const feedback = quoteForm.querySelector(".form-feedback");
  const button = quoteForm.querySelector(".form-submit");
  quoteForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!quoteForm.checkValidity()) { quoteForm.reportValidity(); return; }
    button.disabled = true;
    feedback.textContent = "Sending your enquiry…";
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(quoteForm)).toString()
    })
      .then(response => {
        if (!response.ok) throw new Error("Status " + response.status);
        window.location.href = "/thank-you.html";
      })
      .catch(() => {
        button.disabled = false;
        feedback.textContent = "Sorry, that didn't send. Please call or WhatsApp us on 0706 855 633.";
      });
  });
}
