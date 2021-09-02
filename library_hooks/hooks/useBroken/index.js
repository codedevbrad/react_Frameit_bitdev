import react from 'react';

const Item = ( { element , method , itemRef } ) => { 
        
    const elementRef = useRef( null );
    const { isLast , last } = itemRef;

    useEffect( ( ) => {
    
            if ( isLast ) {
               last();
            }
            
    } , [ ] );

    return ( 
        <li onClick={ ( ) => method( value ) } ref={ elementRef }> { element } </li>
    )
}

/*{ 
    <Item element={ item.element } 
           method={ method } 
              key={ index }
          itemRef={ { 
        isLast: index == itemsShow.length - 1  , last: createLists } 
    }/
    
}*/


/*
function createLists ( ) {

                let elements = [...document.querySelectorAll('#unique ul li') ]
                elements.shift();

                let elementsPut = [ ];
                
                elements.map( ( element , index ) => {
                        if ( element.offsetTop != refPlaced.current.offsetTop ) {
                            // element.style.background = 'red';
                            elementsPut.push( itemsShow[ index ] );
                        } 
                });

                let breakPoint = ( itemsShow.length - elementsPut.length );

                let itemsKeep = [...itemsShow];
                itemsKeep.length = breakPoint;

                // console.log( itemsShow , breakPoint , itemsKeep );

                setHiddenItems( elementsPut );
                setItemsShow( itemsKeep );
        }
*/