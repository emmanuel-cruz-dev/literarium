export const handleAccordionClick = (index: number) => {
  document
    .querySelectorAll(".about-mission__accordion-block")
    .forEach((item) => {
      item.classList.remove("active-item");
    });

  document
    .querySelector(`.about-mission__accordion-block:nth-child(${index})`)
    ?.classList.add("active-item");
};
