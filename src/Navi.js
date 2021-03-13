
import Face from './Face';
import  React  from 'react';

class Navi extends React.Component{
    render() {
        return (
            
            <nav role="navigation">
            <ul>
              <li><a href="./"><Face/></a>
                <ul className="dropdown">
                  
                  <li id="link"><a href="#me">Me</a></li>
                  <li id="link"><a href="#code">Code</a></li>
                    <li id="link"><a href="#cv">Cv</a></li>
              
                </ul>
              </li>
            </ul>
          </nav>
                
   );
}
}
export default Navi;