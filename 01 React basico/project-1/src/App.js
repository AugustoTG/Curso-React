
import './App.css';
import { Component} from 'react';
// stateless não tem estado
// componente de class // o componente de classe tem que ter um metodo render e retornar JSX
class App extends Component {
  state = {
    counter: 0,
    posts: [
      {id: 1,
        title: 'O Título 1',
        body: 'O corpo 1'
      },
      {id: 2,
        title: 'O Título 2',
        body: 'O corpo 2'
      },
      {id: 3,
        title: 'O Título 3',
        body: 'O corpo 3'
      }
    ]
  };

  handleTimeOut = ()=>{
    const {posts, counter} = this.state;
    posts[0].title = 'O título mudou!';
    setTimeout(()=>{
      this.setState({posts, counter: counter + 1});
    }, 1000);
  }

  componentDidMount(){
    this.handleTimeOut();
  };

  componentDidUpdate(){
    this.handleTimeOut();
  }

  render(){
    const {posts, counter} = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };
}

// stateless // componente de função retornando JSX
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá Mundo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
