import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    serchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({serchValue: value})
  }

  render() {
    const { posts, page, postsPerPage, allPosts, serchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!serchValue ? allPosts.filter(post =>{
      return post.title.toLowerCase().includes(serchValue.toLowerCase())
    }) : posts;
    return (
      <section className="container">
        {!!serchValue && (
        <><h1>Serch Value: {serchValue}</h1></>)}
        <input
          type='search'
          onChange={this.handleChange}
          value={serchValue}
          />
        <Posts posts={filteredPosts} />

        <div className="button-container">
          {!serchValue && (<Button
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />)}
        </div>
      </section>
    );
  }
}

