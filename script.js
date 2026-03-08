let count5  = 0;
      const count5Display = document.getElementById("count5");
      const increase5Btn = document.getElementById("increase5Btn");
      increase5Btn.addEventListener("click", function () {
        count5 = count5 + 5;
        count5Display.textContent = count5;
      });

      let countFive = 0;

      const countFiveDisplay = document.getElementById("countFive");
      const decreaseFiveBtn = document.getElementById("decreaseFiveBtn");

      decreaseFiveBtn.addEventListener("click", function () {
        countFive = countFive - 5;
        countFiveDisplay.textContent = countFive;
      });
