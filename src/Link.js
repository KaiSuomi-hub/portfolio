import  React  from 'react';
import Microlink from '@microlink/react'

function Link() {
    return (
        <div className="wrapper">
            <div>
            <p>Wordpress/Woocommerce</p>
            <Microlink url=' http://kuurokoira.fi' />
            <br/>
            </div>

            <div>
            <p>An EC-calculator in React</p>
            <Microlink url='http://rusinapul.la/ec' />
            </div>

            <div>
            <p>Some stuff with WebGL, PHP and Jquery</p>
            <Microlink url='https://geronimo.okol.org/~suoant/naytto/' />
            </div>

            <div>
            <p>WebGL</p>
            <Microlink url='https://tanhuala.fi/gallery/3d' />
            </div>

            <div>
            <p>Tsekkaa myös github</p>
            <Microlink url='https://github.com/KaiSuomi-hub/' />            
            </div>
            
        </div>
        );
}

export default Link;