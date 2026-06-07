let total = 0;

function adicionar() {
  const nome = document.getElementById("nome").value;
  const renda = parseFloat(document.getElementById("renda").value);

  if (!nome || isNaN(renda)) return;

  const li = document.createElement("li");
  li.textContent = `${nome} - R$ ${renda}`;
  document.getElementById("lista").appendChild(li);

  total += renda;
  document.getElementById("total").textContent = total.toFixed(2);

  document.getElementById("nome").value = "";
  document.getElementById("renda").value = "";
}