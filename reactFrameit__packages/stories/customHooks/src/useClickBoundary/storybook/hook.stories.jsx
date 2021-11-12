import UseHook from './index';

export default {
    title:    'Hooks/useClickoutside' ,
    component: UseHook ,
    argTypes:  { }
};

const Template = (args) => <UseHook {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
};
