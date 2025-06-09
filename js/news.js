fetch("data/news.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    data.forEach(article => {
      const item = document.createElement("li");
      item.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.summary}</p>
        <small>${article.date}</small>
      `;
      list.appendChild(item);
    });
  })
  .catch(err => {
    document.getElementById("news-list").innerHTML = `<p>❗ 載入失敗：${err.message}</p>`;
  });
