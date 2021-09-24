import React from "react";
import { useState , useEffect } from "react";

import './style.scss';

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt( Math.floor( Math.random( ) * charactersLength ) );
    }
    return result;
}

const SocialAvatar = ( { profilename , type = 'human' , identifyGender } ) => {

    let [ seed , setSeed ] = useState('');

    useEffect( ( ) => {
        setSeed( makeid( 15 ) );
    } , [ ] );

    return (
        <div className='reactFrameit_avatar'> 
            <div className='profilename'> { profilename } </div>
            <div className="avatar_img">
                <img src={ `https://avatars.dicebear.com/api/${ type }/${ seed }.svg` } />
            </div>
        </div>
    )
}

export default SocialAvatar;