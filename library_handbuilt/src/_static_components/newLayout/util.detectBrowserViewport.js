
export const getCurrScreen = ( l , m , s ) => {
    var found;
    [ l , m , s ].forEach( ( each ) => {
          if ( each !== undefined ) {
              let [ pixel_control , responsiveClass ] = each;
              var sizeMax = window.matchMedia(`(max-width: ${ pixel_control.max })`).matches;
              var sizeMin = window.matchMedia(`(min-width: ${ pixel_control.min })`).matches;

              if ( sizeMax && sizeMin ) found = responsiveClass;
        }
    });
    return found;
}
