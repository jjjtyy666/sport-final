fetch("data/news.json")                           ✅ 相對路徑正確（GitHub Pages 適用）
  .then(res => res.json())                        ✅ 對 response 做 JSON 解析
  .then(data => {
    const list = document.getElementById("news-list");    ✅ 取得容器 ul
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
