/*Accordion Question JavaScript Code*/
const accordionQuestions = document.querySelectorAll(".accordion-question");

/*Traversing by forEach Method*/
accordionQuestions.forEach((accordionQuestion) => {
  accordionQuestion.addEventListener("click", () => {
    accordionQuestion.classList.toggle("accordion-active-question");
    const boxHeight = accordionQuestion.nextElementSibling.scrollHeight;
    if (accordionQuestion.classList.contains("accordion-active-question")) {
      accordionQuestion.nextElementSibling.style.maxHeight = `${boxHeight}px`;
    } else {
      accordionQuestion.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
