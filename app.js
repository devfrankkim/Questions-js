// event
// add event

let questionBtn = document.querySelectorAll(".question-btn");
let questions = document.querySelectorAll(".question");

// questionBtn.forEach((button) => {
//   // ---- iterate elements ----
//   //   console.log(button);
//   button.addEventListener("click", (event) => {
//     // console.log("event", event.currentTarget);
//     // console.log(event.currentTarget.parentElement);
//     // console.log(event.currentTarget.parentElement.parentElement);
//     // console.log("button", button);
//     // event.currentTarget.parentElement.parentElement;

//     // let question = event.currentTarget.parentElement.parentElement;
//     let question = button.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

questions.forEach((question) => {
  // 1. loop
  // 2. click the section
  // 3. loop and compare
  // 4. Validate if clicked
  question.addEventListener("click", () => {
    console.log("question", question);

    questions.forEach((item) => {
      console.log("item", item);
      if (question === item) {
        if (question.classList.contains("show-text")) {
          question.classList.remove("show-text");
          //   question.classList.remove("question-text");
        } else {
          question.classList.add("show-text");
          //   question.classList.add("question-text");
        }
      }
    });
  });
});
