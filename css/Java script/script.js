// ===== Contato WhatsApp =====
const whatsappButtons = [
  document.getElementById("whatsappBtnHero"),
  document.getElementById("whatsappBtnNav"),
  document.getElementById("contactWhatsapp")
];

whatsappButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      window.open("https://wa.me/5545998181217", "_blank");
    });
  }
});

// ===== Contato Email =====
const emailButtons = [
  document.getElementById("emailBtnHero"),
  document.getElementById("emailBtnNav"),
  document.getElementById("contactEmail")
];

emailButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "mailto:reymondlima8@gmail.com";
    });
  }
});

// ===== Fade-in simples para todas as seções =====
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));
