document.getElementById("estimator-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const employees = parseInt(document.getElementById("employees").value, 10);
  const service = document.getElementById("service").value;
  const resultEl = document.getElementById("result");

  if (!employees || !service) {
    resultEl.textContent = "Udfyld venligst alle felter.";
    return;
  }

  // Simple math logic
  let basePrice = 300; // base per employee
  if (service === "management") basePrice = 500;
  else if (service === "both") basePrice = 600;

  const estimatedPrice = basePrice * employees;

  resultEl.textContent = `Estimeret månedlig pris: ${estimatedPrice.toLocaleString("da-DK")} kr.`;
});
