import React , { useState } from 'react';

import Carousel from '../app/index';

const CarouselShowcase = ( ) => {
    const [ boxes , setBoxes ] = useState([
        { title: 'hello box 1' } ,
        { title: 'hello box 2' } ,
        { title: 'hello box 3' } ,
        { title: 'hello box 4' } ,
        { title: 'hello box 5' } ,
        { title: 'hello box 6' } ,
        { title: 'hello box 7' } ,
        { title: 'hello box 8' }
    ]);
    return (
        <Carousel className={ 'carousel_cool' } debug={ false }
          l={ [ { max: '1920px' , min: '600px' } , 5 ] }
          m={ [ { max: '599px'  , min: '0px'   } , 3 ] }
        >

            { boxes.map( ( eachbox , index ) =>
                <div className="box" key={ index }>
                    <p> { eachbox.title } </p>
                </div>
            )}
        </Carousel>
    )
}

export default {
    title: 'Components/Carousel',
    component: CarouselShowcase 
};

const Template = (args) => <CarouselShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
}

Component.args = { 

};
