
const component_data = [
    {
        name: 'carousel' ,
        description: 'utility carousel component to showcase images' , 
        link: '/component?id=carousel' , 
        data: {

        }
    } , 
    {
        name: 'dropdown' ,
        description: 'utility dropdown with various options.' , 
        link: '/component?id=dropdown'
    } , 
    {
        name: 'header' ,
        description: 'utility header component' , 
        link: '/component?id=header'
    }
];

const getComponent = ( search ) => new Promise( ( resolve , reject ) => {
    let found = component_data.filter( obj => obj.name == search );
    resolve( found[0] );

    if ( !found ){
        reject( null );
    }

});

export {
    component_data , getComponent
}