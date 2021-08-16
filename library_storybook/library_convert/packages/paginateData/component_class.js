import React , { Fragment , useState , useEffect } from 'react';
import './component_style.scss';

/*
    - add classes for the loading bar placeholder
    - add choice for loading placeholder
    -
*/

const LoadingCard = ( { children , state , cards } ) => {
    return (
        <Fragment>
            { state  &&
              <div className={ `loadingCards`}>
                  { [...Array(cards)].map( ( el ) =>
                    <div className="card">
                      <div className="bars">
                        <div className="bar bar1 loading"></div>
                        <div className="bar bar2 loading"></div>
                      </div>
                    </div>
                  )}
              </div>
            }
        </Fragment>
    )
}

const PaginateListScroll = ( { action , loadingCards , children } ) => {

      const [ loadingState , setLoading ] = useState( true );

      const showAction = async ( ) => {
          console.log('loading');
          let cards = await action();
          console.log('loaded' , cards );
      }

      return (
          <div className="paginate__scroll">
              <div className="paginate__content">
                { children }
                <LoadingCard state={ loadingState } cards={ 2 }/>
              </div>
              <div className="paginate__more" onClick={ () => showAction() }> show more </div>
          </div>
      )
}

function PaginateListScrollHelper ( setAmount , ajaxCall , addToArray , cardLoadingMethods ) {
      const [options , setOptions] = useState({
          eachSet:   setAmount ,
          paginateLength: 0 ,
          currSet:   0 ,
          totalSets: 0
      });

      this.state = options;

      this.initialiseLength = ( length ) => {
          let optionsClone = { ...options , paginateLength: length  , totalSets: Math.ceil( length / options.eachSet ) , currSet: 1 }
          setOptions( optionsClone );
      }

      this.customPagination = ( ) => {
            if ( options.currSet !== options.totalSets ) {
                return this.startPaginating()
            } else {
               return false;
            }
      }

      this.simplePagination = async ( ) => {
            return 5;
            // if ( options.currSet !== options.totalSets ) {
            //   let array = await this.startPaginating();
            //   let [ elements , length ] = array;
            //   addToArray( elements );
            //  return Length;
            // }
      }

      this.startPaginating = ( ) => {
          let nextSet = options.currSet + 1;
          let optionsClone = { ...options , currSet: nextSet };
          setOptions( optionsClone );

          let end = ( options.eachSet * nextSet );
          var all = [ options.eachSet * ( nextSet - 1 ) , (options.eachSet * nextSet) - 1 ];

          if ( nextSet === options.totalSets ) {
                all[1] = ( options.paginateLength - 1 );
          }
          let lastIndex = options.paginateLength - 1;
          return ajaxCall( end )
                   .then( ( array ) => {
                        return [ ...array , all ];
                   });
      }
}

export { PaginateListScroll , PaginateListScrollHelper }
