import React from 'react';
import './styles.css';

const AvatarElement = ( { border , avatarIcon , avatarName , iconDimensions } ) => {

      return (
          <div className="reactFrameit_avatar">
              <div className={`reactFrameit_avatar_icon reactFrameit_avatar_icon-${ border }`}>
                <img src={ avatarIcon } alt={ 'avatar icon' } style={ iconDimensions }/>
              </div>
              <div className="reactFrameit_avatar_text">
                <h3> { avatarName } </h3>
              </div>
          </div>
      )
}

export default AvatarElement;
