// weather.js
/**
 * @param {string} city
 * @returns {Promises<Object>} weather data
 */
async function getForecast(city) {
  const key = "YOUR_API_KEY";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
  );
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

document.querySelector("#searchBtn").addEventListener("click", async () => {
  const city = document.querySelector("#cityInput").value;
  try {
    const data = await getForecast(city);
    renderForecast(data);
  } catch (e) {
    alert(e.message);
  }
});
