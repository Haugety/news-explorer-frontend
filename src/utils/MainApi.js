import options from './data';

class MainApi {
  constructor() {
    this._options = options;
  }

  register(data) {
    return fetch(`${this._options.mainApiUrl}/signup`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text()
            .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
        }
        return res.json();
      });
  }

  authorize(data) {
    return fetch(`${this._options.mainApiUrl}/signin`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text()
            .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
        }
        return res.json();
      });
  }

  getUser() {
    return fetch(`${this._options.mainApiUrl}/users/me`, {
      headers: {
        ...this._options.headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text()
            .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
        }
        return res.json();
      });
  }

  getContent() {
    return fetch(`${this._options.mainApiUrl}/articles`, {
      headers: {
        ...this._options.headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text()
            .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
        }
        return res.json();
      });
  }

  createArticle(data) {
    return fetch(`${this._options.mainApiUrl}/articles`, {
      method: 'POST',
      body: JSON.stringify({
        id: data.id,
        keyword: data.key,
        title: data.title,
        text: data.description,
        date: data.publishedAt,
        source: data.source.name,
        link: data.url,
        image: data.urlToImage,
      }),
      headers: {
        ...this._options.headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text()
            .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
        }
        return res.json();
      });
  }

  removeArticle = (articleId) => fetch(`${this._options.mainApiUrl}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      ...this._options.headers,
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        return res.text()
          .then((text) => Promise.reject(new Error(JSON.parse(text).message)));
      }
      return res.json();
    })
}

const mainApi = new MainApi(options);

export default mainApi;
