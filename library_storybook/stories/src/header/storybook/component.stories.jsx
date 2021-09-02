
import Header from '../app/index';

export default {
    title: 'Navigation/header',
    component: Header , 
    argTypes: {
        theme: {
            description: 'control the color theme of the dropdown.' ,
            table: {
                type: { summary: 'type: string' },
            },
            options: ['light' , 'dark' ] , 
            control: { type: 'radio' } 
        }
    }
};

const Template = (args) => <Header {...args} />;

export const Component = Template.bind({ });

Component.parameters = {

}

Component.args = {
    dropdownText: 'click dropdown'
};
