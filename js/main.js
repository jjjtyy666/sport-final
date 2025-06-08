// 首頁 JS 控制// 熱門賽事
fetch("data/events.json")
  .then(res => res.json())
  .then(data => {
    const hotList = document.getElementById("hot-events");
    data.slice(0, 3).forEach(event => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${event.title}</strong> - ${event.date}
        <br>${event.teams}
      `;
      hotList.appendChild(item);
    });
  });

// 新聞摘要
fetch("data/news.json")
  .then(res => res.json())
  .then(news => {
    const list = document.getElementById("news-summary");
    news.slice(0, 3).forEach(article => {
      const item = document.createElement("li");
      item.innerHTML = `
        <a href="${article.url}" target="_blank">${article.title}</a>
        <p><small>${article.date}</small></p>
      `;
      list.appendChild(item);
    });
  });
