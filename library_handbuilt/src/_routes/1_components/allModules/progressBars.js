import React , { useContext , useEffect , useState } from 'react';
import { ProgressBars } from  '../@codedevbrad_react_frameit/index';

const ProgressBarsShowcase = ( ) => {
    const { ProgressBar , ProgressBarHelper } = ProgressBars;

    let progressBar__1 = new ProgressBarHelper();
    let progressBar__2 = new ProgressBarHelper();

    const toggleProgress = ( ) => {
       progressBar__1.toggleProgress();
    }

    useEffect( ( ) => {
       progressBar__2.start();
    }, [ ] );

    return (

        <div className="eachComponent_showcase showcase_progressBars">
              <section>
                <code>
                  {
`
let progressBar__1 = new ProgressBarHelper();

const toggleProgress = ( ) => {
   progressBar__1.toggleProgress();
}

return (
  <ProgressBar startingCompletion={ 65  } completionTime={ 10 } state={ progressBar__1.state } />

  <h2 onClick={ () => toggleProgress() }> play or pause  </h2>
  <h2 onClick={ () => progressBar__1.pause() }> pause </h2>
)
`
                  }
                </code>
                <ProgressBar startingCompletion={ 65  } completionTime={ 10 } state={ progressBar__1.state } />

                <h2 onClick={ () => toggleProgress() }> play or pause  </h2>
                <h2 onClick={ () => progressBar__1.pause() }> pause </h2>

              </section>

              <section>
                <code>
                  {
  `
  let progressBar__2 = new ProgressBarHelper();

  useEffect( ( ) => {
     progressBar__2.start();
  }, [ ] );

  <ProgressBar startingCompletion={ 100 } completionTime={ 50 } state={ progressBar__2.state } />
  `
                  }
                </code>
                <ProgressBar startingCompletion={ 100 } completionTime={ 50 } state={ progressBar__2.state } />
              </section>

                <ul className="component_notes">
                    <li> > must not allow pausing and starting when the timer has finished </li>
                    <li> > add a reset for the progress bar using the ProgressBarHelper state </li>
                </ul>
        </div>
    )
}

export default ProgressBarsShowcase;
