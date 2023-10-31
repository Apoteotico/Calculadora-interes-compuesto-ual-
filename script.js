function calculateInterest() {
  const initialAmount = parseFloat(document.getElementById("initialAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100; // Convertir porcentaje a decimal
  const periods = parseInt(document.getElementById("periods").value);

  const futureValue = initialAmount * Math.pow(1 + interestRate, periods);

  document.getElementById("result").textContent = futureValue.toFixed(2); // Mostrar el resultado en dos decimales
}
document.getElementById("toggleButton").addEventListener("click", function() {
  var answer = document.getElementById("answer");
  if (answer.style.display === "none") {
      answer.style.display = "block";
  } else {
      answer.style.display = "none";
  }
});
