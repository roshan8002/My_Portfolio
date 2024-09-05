const scriptURL =
  "https://script.google.com/macros/s/AKfycbzNrzdZQ9uYcJ1Y2P1OOQon9mcUshGQ3tkWKtIiS9Euj0L0i5B0Ynv-_v-TBVnDqTnp/exec";
const form = document.form["product"];

form.addEvenListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank You! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error", error.message));
});
