

document.addEventListener("DOMContentLoaded", () => {
  const splide = new Splide(".splide", {
    type: "loop",
    cover: true,
    lazyLoad: "nearby",
    padding: {
      right: "5rem",
      left: "5rem",
    },
    breakpoints: {
      9000: {
        perPage: 3,
        gap: "1rem",
      },
      800: {
        perPage: 2,
        gap: "1rem",
      },
      480: {
        perPage: 1,
        gap: "1rem",
      },
    },
    autoplay: true,
  }).mount();
});
