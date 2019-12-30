import React from 'react';
import AppContext from './AppContext';

export default function Profile(props){

    return(
        <AppContext.Consumer>
            {
                function contextStuff(context){
                    console.log( context );
                    let identifier = props.match.params.identifier;

                    let currentProfile = context.profiles.find( profile => {
                        console.log( profile.id, identifier );
                        return identifier == profile.id;
                    });

                    return (
                        <div>
                            <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
                            <p> At Thinkful he is a {currentProfile.role} </p>
                            <div>
                                <img src={currentProfile.image} alt="An image" />
                            </div>
                            <h2> His bio</h2>
                            <p> {currentProfile.biography} </p>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );

}