let typedOptions = {
  strings: [
    "a Software Engineer",
    "a Problem Solver",
    "a Frontend Developer",
    "a Freelancer",
  ],
  // shuffle: true,
  showCursor: false,
  loop: true,
  typeSpeed: 30,
  backSpeed: 60,
};

let typed = new Typed("#intro-span", typedOptions);

let flickityOptions = {
  accessibility: true,
  adaptiveHeight: false,
  autoPlay: false,
  cellAlign: "center",
  cellSelector: ".skill",
  wrapAround: true,
  pageDots: true,
};

let elem = document.querySelector(".skills-container");

let flickity = new Flickity(elem, flickityOptions);
