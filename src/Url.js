import  React  from 'react';
import { ReactTinyLink } from 'react-tiny-link';

function Url() {
    return (
        <div className="wrapper">
            
            <div><p>This segment, as this whole page is a continuous work-in-progress. </p></div>
            <div><p>As I mentioned I tend to focus on front end.</p></div>
            <div><p>I mess around more with python and linux than PHP&Mysql. </p>
            <i>I do need to do a back end for this site tho.</i></div>

            <div >
            <p>WebGL</p>
            <ReactTinyLink
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url="https://tanhuala.fi/gallery/3d"
            /> 
            </div>
                <div>
            <p>Wordpress/Woocommerce </p>
            <ReactTinyLink
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url="https://Kuurokoira.fi"
            />
            </div>

            <div>
            <p>An EC-calculator in React</p>
            <ReactTinyLink
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url="https://www.pavunversooulu.fi/category/66/ravinnelaskuri"
            />
            </div>

            <div>
            <p>Some stuff with WebGL & PHP</p>
            <ReactTinyLink
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url="https://geronimo.okol.org/~suoant/naytto"
            />
            </div>

         
            

            <div>
            <p>Check out my github</p>
            <ReactTinyLink
            cardSize="small"
            showGraphic={false}
            maxLine={2}
            minLine={1}
            url="https://github.com/KaiSuomi-hub/"
            />  
            </div>

        </div>
        );
}

export default Url;