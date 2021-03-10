import './App.css';
import 'jquery';
import '@popperjs/core'; 
import Content from './Content';
import Navi from './Navi'
function App() {
  return (
    <div className="App">
        <div className="navbar-fixed-left">
          <Navi/>
        <div className="row">
          <div id="me">.</div>
      <Content
        // Left={"This is on the Left side"}
            Para={ <text >Hi<br />
                    My name is Antti Suomi and I'm an entry level code monkey.
                        <br />
              <br />
              I love pretty things and I'm a bit slow so I mainly mess around with front end side of things.
              <br /><br />
              Take a look below for some stuff I've done with React, Bootstrap and CSS
            </text>
            }
          // Right={"This is on the right"} 
          />
          <div id="code">.</div>
          <Content
        // Left={"This is on the Left side"}
            Para={ <text ><br />
              This is the code side
              <br />
              <br />
              ss
              <br /><br />
              ss
            </text>
            }
          // Right={"This is on the right"} 
          />
                    <div id="cv">.</div>

            <Content
        // Left={"This is on the Left side"}
            Para={ <text ><br />
              This is the CVVVV
              <br />
              <br />
              ss
              <br /><br />
              ss
            </text>
            }
          // Right={"This is on the right"} 
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