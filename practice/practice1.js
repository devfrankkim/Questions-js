const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // automatic looping START
  //   console.log("1", question); // (3)

  const btn = question.querySelector(".question-btn");
  //   console.log(btn); // (3)
  // automatic looping END

  // ======= Button click!! =======
  btn.addEventListener("click", () => {
    // console.log("question", question); // (itself)

    // console.log(questions); // (3)

    // automatic looping START -> Compare
    questions.forEach(function (item) {
      //   console.log("item", item);
      //   console.log("question", question);

      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// // traversing the DOM
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e);
//     // console.log(e.currentTarget);
//     // console.log(e.currentTarget.parentElement);
//     // console.log(e.currentTarget.parentElement.parentElement);

//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });
