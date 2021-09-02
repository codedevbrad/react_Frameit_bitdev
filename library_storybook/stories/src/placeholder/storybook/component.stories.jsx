import React from 'react';
import { useEffect } from 'react';

import LoadingCard , { TrackLoadingCardHelper } from '../app/index';

export default {
    title: 'Loading/placeholder',
    component: LoadingShowcase , 
    argTypes: {
        state:  {
            control: { disable: true }
        }
    }
};

const LoadingShowcase = ( { ...props  }) => {

        let placeholderstate = new TrackLoadingCardHelper();

        useEffect( ( ) => {
                setTimeout( ( ) => {
                        placeholderstate.loaded();
                } , 5000 );
        } , [ placeholderstate.state  ] );
        
        return (
            <>
                <p onClick={ ( ) => placeholderstate.reset() }> reset </p>

                <LoadingCard { ...props } state={ placeholderstate.state }>
                    <div>
                        hey dude. i loaded
                    </div>
                 </LoadingCard>
            </>
        )
}

const Template = (args) => <LoadingShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = {
    cards: 5 , rows: 2
};
