import React , { useContext , useEffect , useState } from 'react';
import { Carousel } from '../@codedevbrad_react_frameit/index';

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
        <div className="eachComponent_showcase showcase_carousel">
          <code>
            {
`
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
`
            }
          </code>

          <section>
            <h3> component example </h3>

            <Carousel className={ 'carousel_cool' } debug={ false }
                      l={ [ { max: '1920px' , min: '600px' } , 5 ] }
                      m={ [ { max: '599px'  , min: '0px'   } , 3 ] }
             >
                  { boxes.map( ( eachbox , index ) =>
                     <div className="box" key={ index }>
                          <div>
                               <p> { eachbox.title } </p>
                          </div>
                     </div>
                  )}
           </Carousel>
         </section>

          <h3> to do </h3>
          <ul className="component_notes">
              <li> > render the width of the carousel first. then add the items to make sure you get a perfect width everytime. </li>
              <li> > detect any browser width change. etc, when the layout is changed. </li>
          </ul>
        </div>
    )
}

export default CarouselShowcase;
