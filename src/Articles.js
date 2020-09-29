import React from 'react';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    let url =
      'https://conduit.productionready.io/api/articles?limit=10&offset=0';
    fetch(url)
      .then((res) => res.json())
      .then(({ articles }) => {
        this.setState({ articles });
      });
  }
  render() {
    return (
      <ul>
        {this.state.articles.map((article) => (
          <li>
            <h2 class='heading'>
              <Link to={`/article/${article.slug}`}>{article.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    );
  }
}

export default Articles;
