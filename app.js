document.querySelectorAll(".add-icon").forEach((box) =>
  box.addEventListener("click", (e) => {
    let cardParent = e.currentTarget.parentElement.parentElement;
    let global = cardParent.parentElement.querySelectorAll(".card");
    let cardBody = cardParent.querySelector(".card_body");

    global.forEach((items) =>
      items.querySelector(".card_body").classList.add("display-none")
    );

    if (cardBody.classList.contains("display-none")) {
      cardBody.classList.remove("display-none");
    } else {
      cardBody.classList.add("display-none");
    }
  })
);

