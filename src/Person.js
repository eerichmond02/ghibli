import React from 'react';
import { PropTypes } from 'prop-types';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import maleAvatar from './Ghibli-Assignment-Assets/Male-Avatar.png';
import femaleAvatar from './Ghibli-Assignment-Assets/Female-Avatar.png';

const Person = (props) => {
	let returned;

	if (props.person.gender === 'Male') {
		returned = (
			<div key={props.person.id} styles={styles}>
				<div className='icon-ill-maleavatar' styles={styles}></div>
				<span>{props.person.name}</span>
			</div>
		);
	} else if (props.person.gender === 'Female') {
		returned = (
			<div key={props.person.id} styles={styles}>
				<div className='icon-ill-femaleavatar' styles={styles}></div>
				<span>{props.person.name}</span>
			</div>
		);
	} else {
		returned = (
			<div key={props.person.id} styles={styles}>
				<div className='icon-ill-happyface' styles={styles}></div>
				<span>{props.person.name}</span>
			</div>
		);
	}

	return (
		returned
	);
}

const styles = {
	display: 'inline',
	width: 'fit-content',
	marginRight: '0px'
}

export default Person;