const form = document.getElementById("record-form");
const list = document.getElementById("record-list");

function loadRecords() {
  list.innerHTML = "";
  const records = JSON.parse(localStorage.getItem("records")) || [];
  records.forEach((rec, i) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${rec.date}</strong> - ${rec.type} ${rec.duration} 分鐘
      <br>備註：${rec.note || "無"}
      <button onclick="deleteRecord(${i})">❌</button>
    `;
    list.appendChild(item);
  });
}

function deleteRecord(index) {
  const records = JSON.parse(localStorage.getItem("records")) || [];
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  loadRecords();
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;
  const duration = document.getElementById("duration").value;
  const note = document.getElementById("note").value;
  const records = JSON.parse(localStorage.getItem("records")) || [];
  records.push({ date, type, duration, note });
  localStorage.setItem("records", JSON.stringify(records));
  form.reset();
  loadRecords();
});

loadRecords();
