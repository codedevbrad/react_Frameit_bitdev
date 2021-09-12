import React , {  useState , useEffect  } from 'react';
import anime from 'animejs';
import './styles.scss';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const eyes2 = [
  [
      'M47.3646 45.7793C40.5206 45.4534 41.1624 43 41.1624 32.1495L41.1624 26.6049C41.1624 22.3272 43.1045 18.5283 47.3575 18.0699C48.6943 17.9258 50.1119 17.8451 51.4779 17.8169C55.8022 17.7275 59.3302 20.3507 59.4563 24.6741C59.5 26.1742 59.5 27.9358 59.5 30L58.6054 39.4999C58.2968 42.777 56.8222 45.9539 53.5326 46.0699C51.3191 46.1479 48.8806 45.8515 47.3646 45.7793Z' ,
      'M95.9466 46.527C94.6092 46.527 90.6461 47.3908 87.2417 46.7837C82.8501 46.0006 82 39.8226 82 34.5221V29.1903C82 23.0055 82.3168 17 87.5609 17C88.6477 17.0824 89.6621 17.1576 90.6084 17.2263C93.1755 17.4128 96.4332 16.7411 97.8492 18.8904C99.5162 21.4207 98.8813 27.1111 98.8813 34.1116V36.0174C98.8813 42.5233 98.2229 46.527 95.9466 46.527Z'
  ]
];

const ratings = [
    {
        color: '#ff7675',
        stage: 'stage1' ,
        morph: 'M36 87.6667C36 70.1777 50.1777 56 67.6667 56H73.3333C90.8224 56 105 70.1776 105 87.6667V87.6667C105 91.1645 102.164 94 98.6667 94H42.3333C38.8355 94 36 91.1645 36 87.6667V87.6667Z'
    } ,
    {
        color: '#ffbe76',
        stage: 'stage2' ,
        morph: 'M36 74C36 69.5817 39.5817 66 44 66H97C101.418 66 105 69.5817 105 74V76C105 80.4183 101.418 84 97 84H44C39.5817 84 36 80.4183 36 76V74Z'
    } ,
    {
        color: '#00b894' ,
        stage: 'stage3'  ,
        morph: 'M38 71.5C38 68.4624 40.4624 66 43.5 66H101.5C104.538 66 107 68.4624 107 71.5V71.5C107 80.6127 99.6127 88 90.5 88H54.5C45.3873 88 38 80.6127 38 71.5V71.5Z'
    },
    {
        color: 'darkblue' ,
        stage: 'stage4'  ,
        morph: 'M38 67C38 61.4772 42.4772 57 48 57H97C102.523 57 107 61.4772 107 67V70C107 83.8071 95.8071 95 82 95H63C49.1929 95 38 83.8071 38 70V67Z'
    }
]

const RatingForm = ( ) => {
    const [ rangeValue , updateRange ] = useState( 0 );
    const [ currStage  , setStage   ] = useState( ratings[0] );
    const [ tadaClass  , triggerTadaClass ] = useState( false );

    var svgAnimate = ( morph , target ) => {
        anime({
             duration : 1000 ,
             easing :   "easeOutExpo" ,
             targets :  target ,
             d :        [ { value : morph } ]
         });
    }

    useEffect( ( ) => {

    } , [ ] );

    const rangeChange = async ( stageObj , morphValue ) => {
        svgAnimate( morphValue , '.mouth' );
          setStage( stageObj );
    }

    const rangeInterval = async ( ) => {
        triggerTadaClass( true );
        await delay( 300 );
        triggerTadaClass( false );
    }

    const calculateRange = ( value ) => {
        updateRange( value );

        if ( value == 25 || value == 50 || value == 75 ) {
           rangeInterval( );
        }

        if ( value >= 0 && value < 25 ) {
           rangeChange( ratings[0] , ratings[0].morph );
        }
        if ( value > 25 && value < 50 ) {
          rangeChange( ratings[1] , ratings[1].morph );
        }
        if ( value > 50 && value <= 75 ) {
          rangeChange( ratings[2] , ratings[2].morph );
        }
        if ( value > 75 && value <= 100 ) {
          rangeChange( ratings[3] , ratings[3].morph );
        }
    }

    return (
      <div className="reactFrameit_ratings">
                <h3> Rate your experience </h3>
                <div className="sliderInside">

                    <div className={`sliderAvatar ${ tadaClass ? 'sliderAvatar_animated2' : '' }`}>
                        <svg viewBox="0 0 144 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="144" height="131" rx="20" fill={ currStage.color }/>
                                <path d={ eyes2[0][0]  }  fill="white" className="eyesLeft"  />
                                <path d={ eyes2[0][1]  }  fill="white" className="eyesRight" />
                                <path d={ ratings[0].morph }  fill="white" className="mouth" />
                        </svg>
                    </div>
                    <div className="sliderBox">

                        <input type="range" min="1" max="100" value={ rangeValue } className={ `slider slider_${ currStage.stage }` }
                                 id="myRange"
                           onChange={ ( e ) => calculateRange( e.target.value ) }
                        />
                    </div>
                </div>

                <div className="submit__rating"> <h3> send feedback </h3> </div>
      </div>
    )
}

export default RatingForm;
