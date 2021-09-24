import React , { useState } from 'react';
import Marquee from '../app/index';
import './style.scss';

const MarqueeStory = ( { ...props } ) => {
    return (
        <div>
            <Marquee { ...props }>
                   <div className={'m_title_bold_container'}>
                       <div className='m_title_bold'> Creative </div>
                       <div className='m_title_bold'> Creative </div>
                       <div className='m_title_bold'> Creative </div>
                    </div>  
            </Marquee>
        </div>
    )
}


export default {
    title: 'Components/Marquee',
    component: MarqueeStory , 
    argTypes: { 
        speed: {
            control: { type: 'radio' } , 
            options: [ 'slow' , 'veryslow' ]
        }
    }
};


const Template = (args) => <MarqueeStory {...args} />;

export const Basic = Template.bind({ });

Basic.parameters = { }

Basic.args = { 
    speed: 'slow'
 };
