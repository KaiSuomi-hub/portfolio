import './App.css';
import 'jquery';
import '@popperjs/core'; 
import Content from './Content';
import Navi from './Navi';
import Link from './Link';
import Cv from "./Cv";
function App() {
  return (
    <div className="App">
      
        <div className="navbar-fixed-left">
          <Navi/>
        <div className="row">
          <div id="me">.</div>
      <Content
            Para={<text >
            <p> Hi!</p>
            <p>My name is Antti Suomi and I'm an entry level code monkey.</p>
            <p>I love pretty things and I'm a bit slow so I mainly mess around with front end side of things.</p>
            <p>Take a look below for some stuff I've done with React, Bootstrap and CSS.</p>
            </text>
            }
          />
          <div id="code">.</div>
          <Content
            Para={<text >
              <h3>Here's some stuff I've made</h3>
              <div><Link/></div>
            </text>
            }
          />
          <div id="cv">.</div>
            <Content
            Para={<text >
              <h3>This is my CV</h3>
              <p></p>
              <Cv/>
            </text>
            }
        />
        </div>
      </div>
      </div>

  );
}

export default App;

 //<a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>