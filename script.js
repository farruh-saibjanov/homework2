document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const comment = btn.closest(".comment");
      if (comment) {
        comment.remove();
      }
    });
  });
});


  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const comment = btn.closest(".comment");
      if (comment) comment.remove();
    });
  });

 
  const comments = document.querySelectorAll(".comment");

  comments.forEach((comment) => {
    const plusBtn = comment.querySelector(".plus");
    const minusBtn = comment.querySelector(".minos"); 
    const scoreSpan = comment.querySelector(".span");

    if (plusBtn && minusBtn && scoreSpan) {
      plusBtn.addEventListener("click", () => {
        let score = parseInt(scoreSpan.textContent || "0", 10);
        scoreSpan.textContent = String(score + 1);
      });

      minusBtn.addEventListener("click", () => {
        let score = parseInt(scoreSpan.textContent || "0", 10);
        if (score > 0) {
          scoreSpan.textContent = String(score - 1);
        }
      });
    }
  });
});
