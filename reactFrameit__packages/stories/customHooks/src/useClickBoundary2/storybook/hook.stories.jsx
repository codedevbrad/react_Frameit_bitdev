import ClickBox from './index';

export default {
    title: 'Hooks/useClickoutside2' ,
    component: ClickBox ,
    argTypes: { }
};

const Template = (args) => <ClickBox {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry', onClickOutside: ( ) => console.log('clicked outside')
};
