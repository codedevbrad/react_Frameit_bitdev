import react, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import ModalSingle from '../../modal/app/modal';
import './style.scss';

const AuthGoogleLogin = ( { googleAPIKey , appTitle = 'our app' } ) => {

    const [ user , setUser ] = useState( { } );

    const googleSignIn = ( res ) => {
        setUser( {
            profile: res.profileObj , 
            accessToken: res.accessToken
        } );
    }

    const authSubmit = ( closeModal ) => {
        console.log( user );
        closeModal();
    }

    return (
        <ModalSingle isForm={ true } modalToggleTitle={ 'sign up' } modalClass={ 'test'} saveButtonText={ 
            'Sign in'
        } saveMethod={ authSubmit } type={ 'center_fitted' }>

            <div className="reactFrameit_googleLogin">
                    <div className="rf-gl-c googleTitle">
                        <h1> Sign in with google </h1>
                        <p> use your google account to sign into { appTitle } </p>
                    </div>

                   <div className="rf-gl-c googleForm">
                        <GoogleLogin
                                clientId={ googleAPIKey }
                                buttonText="Login"
                                onSuccess={googleSignIn}
                                onFailure={ googleSignIn }
                                cookiePolicy={'single_host_origin'}
                                className={ 'googleBtn' }
                                buttonText={ 'sign in with google' }
                            />
                   </div>
            </div>

        </ModalSingle>
    )
}

export default AuthGoogleLogin;