import StorageComponent from './index';

export default {
    title: 'Hooks/useStorage' ,
    component: StorageComponent ,
    argTypes: { }
};

const Template = (args) => <StorageComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
 };
