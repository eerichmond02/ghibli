import React from 'react';
import { PropTypes } from 'prop-types';
import maleAvatar from './Ghibli-Assignment-Assets/Male-Avatar.png';
import femaleAvatar from './Ghibli-Assignment-Assets/Female-Avatar.png';

const Person = (props) => {
	let returned;

	if (props.person.gender === 'Male') {
		returned = (
			<img src={maleAvatar} alt={props.person.name} title={props.person.name} key={props.person.id}/>
		);
	} else if (props.person.gender === 'Female') {
		returned = (
			<img src={femaleAvatar} alt={props.person.name} title={props.person.name} key={props.person.id}/>
		);
	} else {

	}

	return (
		returned
	);

}