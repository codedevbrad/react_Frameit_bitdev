import React , { useState } from 'react';
import GridItem from '../gridItem/index';

export default {
    title: 'Grid/gridItem',
    component: GridItem , 
    argTypes: {
        size: {
            options: [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 ] , 
            control: 'select'
        }
    }
};


const Template = (args) => <GridItem { ...args } />;

export const Basic = Template.bind({ });

Basic.args = {
    size: 12 , classname: 'item' , children: 
    <div style={{ background: 'red' , padding: '10px' }}>
        he there
    </div>
}
