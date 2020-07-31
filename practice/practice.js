// ======== 1. Solution ========

// Using selectors inside the element
const questions = document.querySelectorAll(".question");
// console.log(questions);

questions.forEach((question) => {
  //   console.log(question);
  question.addEventListener("click", () => {
    questions.forEach((questionItem) => {
      //   console.log(questionItem);
      //   console.log(question, "question");

      if (questionItem === question) {
        // if (question.classList.contains("show-text")) {
        //   question.classList.remove("show-text");
        // } else {
        //   question.classList.add("show-text");
        // }
        question.classList.toggle("show-text");
      }
    });
  });
});

// ======== 2. Solution ========

// all the three question buttons
// click event listener
// Loop over them

// Traversing the DOM

// once I click on the button,
// check who's the parent or parent of the parent
// parentElement
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     // console.log(btn);
//     console.log(e.currentTarget);
//     console.log(e.currentTarget.parentElement);
//     console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
