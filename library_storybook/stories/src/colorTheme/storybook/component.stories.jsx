import React from 'react';
import Theme from '../app';

function ThemeShowcase ( { ...props } ) {
    return (
        <div>
                <Theme { ...props }>
                    <h1> hey dude </h1>
                    <p> hows it going </p>
                </Theme>

                <Theme { ...props }>
                    <div>
                         <ul>
                            <li> hey dude </li>
                        </ul>
                    </div>
                </Theme>

                <Theme { ...props }>
                    <i class="fi-rr-arrow-small-left"></i>
                </Theme>
        </div>
    );
}

export default {
    title: 'themeMode',
    component: ThemeShowcase , 
    argTypes: {
       
        themeMode: {
            control: 'radio' , 
            options: [ 'light' , 'dark' ]
        }
    }
};

const Template = (args) => <ThemeShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = {
    layout: 'centered'
}

Component.args = { themeMode: 'dark' }