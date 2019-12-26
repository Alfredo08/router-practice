import React from 'react';

export default function Profile(props){

    console.log( props );
    let identifier = props.match.params.identifier;

    let currentProfile = props.profiles.find( profile => {
        console.log( profile.id, identifier );
        return identifier == profile.id;
    });
    return(
        <div>
            <h1> This is the profile of {currentProfile.firstName} {currentProfile.lastName} </h1>
            <p> At Thinkful he is a {currentProfile.role} </p>
            <div>
                <img src={currentProfile.image} alt="An image" />
            </div>
            <h2> His bio</h2>
            <p> {currentProfile.biography} </p>
        </div>
    );
}