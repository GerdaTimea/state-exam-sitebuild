function cardForCurrency(currency) {
  return `
    <section>
      <article>
        <h2 class="sub">${currency.sub}</h2>
        <p class="title">${currency.title}</p>
        <p class="text">${currency.text}</p>
      </article>
      <button>
        <span class="button-text">Save</span>
        <span class="material-icons">arrow_forward</span>
      </button>
    </section>
  `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");

  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];
    mainElement.insertAdjacentHTML("beforeend", cardForCurrency(currency));
  }

}

window.addEventListener("load", loadEvent);
