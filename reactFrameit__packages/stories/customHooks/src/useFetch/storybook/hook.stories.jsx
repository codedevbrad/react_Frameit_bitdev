import FetchComponent from './index';

export default {
    title: 'Hooks/FetchComponent' ,
    component: FetchComponent ,
    argTypes: { }
};

const Template = (args) => <FetchComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
};
