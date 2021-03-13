import  React  from 'react';
import Microlink from '@microlink/react'

function Link() {
    return (
        <div>
            <p>Wordpress/Woocommerce</p>
            <Microlink url=' http://kuurokoira.fi' />
            <br/>
            <p>An EC-calculator in React</p>
            <Microlink url='http://rusinapul.la/ec' />

            <p>Some stuff with WebGL, PHP and Jquery</p>
            <Microlink url='https://geronimo.okol.org/~suoant/naytto/' />

            <p>WebGL</p>
            <Microlink url='https://tanhuala.fi/gallery/3d' />

            <p>Tsekkaa myös github</p>
            <Microlink url='https://github.com/KaiSuomi-hub/' />            

        </div>
        );
}

export default Link;