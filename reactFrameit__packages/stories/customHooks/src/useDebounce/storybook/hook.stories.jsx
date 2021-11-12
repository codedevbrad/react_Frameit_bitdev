import DebounceComponent from './index';

export default {
    title: 'Hooks/DebounceComponent' ,
    component: DebounceComponent ,
    argTypes: { }
};

const Template = (args) => <DebounceComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    delay: 3000
};
