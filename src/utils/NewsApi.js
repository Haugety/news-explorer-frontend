import options from './data';

class NewsApi {
  constructor() {
    this._options = options;
  }

  _generateUrl(keyword) {
    const presentDate = new Date(Date.now());
    const pastDate = new Date(Date.now());
    pastDate.setDate(pastDate.getDate() - 7);

    const isoPresentDate = presentDate.toISOString().substr(0, 10);
    const isoPastDate = pastDate.toISOString().substr(0, 10);
    return `${this._options.newsApiUrl}?q=${keyword}&from=${isoPastDate}&to=${isoPresentDate}&pageSize=100&apiKey=21655f240a914e1685f399d55ff927ed`;
  }

  getNews(keyword) {
    return fetch(this._generateUrl(keyword))
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
        return res.json();
      });
  }
}

const newsApi = new NewsApi(options);

export default newsApi;
