
import './App.css';
import { Component} from 'react';
import { PostCard } from './components/PostCard';
class App extends Component {
  state = {
    posts: [],
    photos: []
  };
  componentDidMount(){
    this.loadPosts()
  };

  loadPosts = async () => {
    const postsPesponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsPesponse, photosResponse]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postJson.map((post, index)=>{
      return {...post, cover: photosJson[index].url}
    });

    this.setState({posts: postAndPhotos});
  }

  render(){
    const {posts} = this.state;
    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <PostCard
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
        ))}
        </div>
      </section>
      
    );
  };
}
export default App;
