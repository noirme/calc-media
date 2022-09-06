const nb1 = document.querySelector("#nb1");
const nb2 = document.querySelector("#nb2");
const nb3 = document.querySelector("#nb3");
const nb4 = document.querySelector("#nb4");
const btn = document.querySelector("#btn");
const res = document.querySelector(".res");

const calcular = (event) => {
  event.preventDefault();
  if (
    +nb1.value == "" ||
    +nb2.value == "" ||
    +nb3.value == "" ||
    +nb4.value == ""
  ) {
    window.alert("[ERROR] Preencha as notas corretamente!");
    res.textContent = "";
    return;
  }

  const media = (+nb1.value + +nb2.value + +nb3.value + +nb4.value) / 4;
  if (media.toFixed(1) >= 6) {
    res.textContent = `Aprovado. Média:${media.toFixed(1)}`;
    res.style.color = "green";
    return;
  }
  res.textContent = `Reprovado. A sua média foi ${media.toFixed(1)}`;
  res.style.color = "red";
};

btn.addEventListener("click", calcular);

