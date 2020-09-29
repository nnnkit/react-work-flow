import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
  state = {
    article: {},
  };
  componentDidMount() {
    let { slug } = this.props.match.params;
    let url = 'https://conduit.productionready.io/api/articles/';
    fetch(url + slug)
      .then((res) => res.json())
      .then(({ article }) => {
        this.setState({ article });
      });
  }
  render() {
    let { title, body } = this.state?.article;
    return (
      this.state.article && (
        <ul>
          <li>{title}</li>
          <p>{body}</p>
        </ul>
      )
    );
  }
}

export default Article;
