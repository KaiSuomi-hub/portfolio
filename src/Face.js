import face from './face.jpg';
import React from 'react';

class Face extends React.Component {
   render(){
    return(
        <div>
            <div id="face">
                
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-filters">
  <filter id="duotone_peachypink">
    <feColorMatrix type="matrix" result="grayscale"
      values="1 0 0 0 0
              1 0 0 0 0
              1 0 0 0 0
              0 0 0 1 0" />
    
    <feComponentTransfer color-interpolation-filters="sRGB" result="duotone_magenta_gold">
      <feFuncR type="table" tableValues="0.9 0.9"></feFuncR>
      <feFuncG type="table" tableValues="0.1 0.9"></feFuncG>
      <feFuncB type="table" tableValues="0.8 0.1"></feFuncB>
      <feFuncA type="table" tableValues="0 1"></feFuncA>
    </feComponentTransfer> 
  </filter>
</svg>
      </div>
    );
  }
}
  
  export default Face;