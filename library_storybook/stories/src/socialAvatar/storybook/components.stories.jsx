
import SocialAvatar from '../app/index';
import Dropdown from '../../dropdown/app/dropdown';

export default {
    title: 'Avatar',
    component: SocialAvatar , 
    argTypes: {
        profilename: {
            description: 'avatar name' 
        } ,
        type: {
            description: 'set the type of avatar you want' , 
            options: [ 'male' , 'female' , 'human' , 'identicon' , 
                       'initials' , 'bottts' , 'avataaars' , 
                       'jdenticon' 
            ] , 
            control: { type: 'radio' }
        }
    }
};


const Method = ( itemBack ) => {
    console.log( itemBack );
}

const dropdown_required = {
    method: Method , 
    items:
    [
      { element: 'profile' , 
        value: 50 
      } , 
      { element: 'settings'   ,
        value: 100 
      } , 
      {
        element: 'messages' ,
        value: 200
      }
    ]
}

const AvatarShowcase = ( { ...props } ) => {
    return (
        <div>
            <Dropdown theme={'dark'} flow={'vert' } verticalPosition={ 'bottom' } 
                          direction={ 'right' } dropdownText={ <SocialAvatar { ...props } /> } dropdownRequired={ dropdown_required }
                    />
        </div>
    )
}

const Template = (args) => <AvatarShowcase {...args} />;

export const Component = Template.bind({ });

Component.parameters = { 
    layout: 'centered'
}

Component.args = {
    profilename: 'ben. williams' 
};
