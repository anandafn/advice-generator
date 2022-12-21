const api_url = "https://api.adviceslip.com/advice";

const btn = document.querySelector(".btn-click-me");
const id = document.querySelector(".id-advice");
const adviceEl = document.querySelector(".text-advice");

const advice = async () => {
  try {
    const res = await fetch(api_url);
    const { slip: data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Trigger the button click
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const data = await advice();

  id.textContent = `${data.id}`;
  adviceEl.textContent = `"${data.advice}"`;
});
