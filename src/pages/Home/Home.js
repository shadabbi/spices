import React, { Component } from 'react';

import classes from './Home.module.scss';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Categories from '../../components/categories/Categories';
 
class DemoCarousel extends Component {
    
    render() {
        
        return (
            <div>

                <Carousel>
                    
                    <div className={[classes.hero, classes.bg1].join(' ')}>
                    
                        <p className="legend">Legend 1</p>
                    </div>
                    <div className={[classes.hero, classes.bg2].join(' ')}>
                    
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className={[classes.hero, classes.bg3].join(' ')}>
                    
                        <p className="legend">spices buy</p>
                    </div>
                </Carousel>

                <Categories/>
            </div>
        );
    }
}



 
export default DemoCarousel;

// const header = () => {
//     return(
//         <section className={classes.hero}>

//         </section>
//     )
// }

// export default header;