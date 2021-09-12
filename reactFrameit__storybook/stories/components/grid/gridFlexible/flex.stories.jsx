import React , { useState } from 'react';
import Grid from './index';
import GridItem from '../gridItem/index';

export default {
    title: 'Grid/flexible',
    component: Grid , 
    argTypes: {

    }
};

const style_1 = { background: 'red'    }
const style_2 = { background: 'green'  }
const style_3 = { background: 'blue'   }

const FlexGridShowcase = ( { ...props } ) => {
    return (
        <Grid {...props}>
                <GridItem size={ 12 } style={ style_1 }> col 12  </GridItem>
                <GridItem size={ 6 }  style={ style_2 }> col 6   </GridItem>
                <GridItem size={ 6 }  style={ style_3 }> col 6   </GridItem>
                <GridItem size={ 12 } style={ style_1 }> col 12  </GridItem>
        </Grid>
    )
}

const Template = (args) => <FlexGridShowcase { ...args } />;

export const Basic = Template.bind({ });

Basic.args = { 
    classname: 'gridcontainer'
 }