import React from 'react';
import OffcanvasNavigation from '../app/index';

const Menu = [ 
    { link: '/about'   , name: 'about' },
    { link: '/contact' , name: 'contact' }
]

const OffcanvasNavigationShowcase = ( { ...props }) => {
        return (
            <OffcanvasNavigation menu={ Menu } width={ 275 } { ...props }>
                <div>
                    hey dude
                </div>
            </OffcanvasNavigation>
        )
}

export default {
    title: 'Navigation/offcanvas',
    component:  OffcanvasNavigationShowcase , 
    argTypes: {
        side: {
            description: '' ,
            table: {
            type: { summary: 'type: string' },
            },
            options: [ 'left', 'right' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => < OffcanvasNavigationShowcase {...args} />;
export const Component = Template.bind({ });

Component.parameters = { }

Component.args = {
    side: 'left'
};