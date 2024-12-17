window.addEventListener("load", function () {
  setTimeout(function () {
    Particles.init({
      selector: ".particles-background",
    });
  }, 100);
});

const typed = new Typed("#typedText", {
  strings: ["Frontend Developer", "and a freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

function copyToClipboard(linkField) {
  navigator.clipboard.writeText(linkField);
}
