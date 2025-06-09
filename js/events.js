// events.html 的控制邏輯
fetch("data/events.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("event-list");
    data.forEach(event => {
      const item = document.createElement("li");
      item.innerHTML = `
        <h3>${event.title}</h3>
        <p>時間：${event.date}</p>
        <p>對戰：${event.teams}</p>
        <p>地點：${event.location}</p>
      `;
      list.appendChild(item);
    });
  })
  .catch(err => {
    document.getElementById("event-list").innerHTML = `<p>❗ 載入失敗：${err.message}</p>`;
  });
