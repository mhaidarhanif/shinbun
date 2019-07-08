// @flow
import articles from './articles.json';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const articlesElement = document.getElementById('articles');

class Articles {
  static render() {
    articles.forEach(article => {
      const {image, imageText, type, title, author, timestamp} = article;
      const relativeTimestamp = dayjs(timestamp).fromNow();

      const articleElement = document.createElement('article');
      articleElement.innerHTML = `
        <article class="article">
          <div class="image">
            <img src="${image}" alt="${imageText}" />
          </div>
          <div class="highlight">
            <span class="type">${type}</span>
            <h2>${title}</h2>
            <span class="author">
              <a href="/${author.slug}">${author.name}</a>
            </span>
            <p>
              <button>💟 Like</button>
              <button>💬 Comment</button>
              <button>⏺️ Share</button>
              <span>${relativeTimestamp}</span>
            </p>
          </div>
        </article>
      `;

      articlesElement.append(articleElement);
    });
  }
}

export default Articles;
