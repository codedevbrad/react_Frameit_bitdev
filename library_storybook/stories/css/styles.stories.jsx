
import './styles.css';

const CssStory = ( ) => {
    return (
        <div>css </div>
    )
}

export default {
    title: 'css/styles',
    component: CssStory 
};

const Template = (args) => <CssStory {...args} />;

export const Basic = Template.bind({ });

Basic.args = { }