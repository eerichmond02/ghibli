import React from 'react';
import { PropTypes } from 'prop-types';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import maleAvatar from './Ghibli-Assignment-Assets/Male-Avatar.png';
import femaleAvatar from './Ghibli-Assignment-Assets/Female-Avatar.png';
import { connect } from 'react-redux';
import { peopleFetchData, filmFetchData } from './state/actions'

const Person = (props) => {
	let returned;

	if (props.person.gender === 'Male') {
		returned = (
			<div key={props.person.id} className='personInfo'>
				<div className='icon-ill-maleavatar' onClick={() => props.filmFetchData(props.person.films)}></div>
				<p className='name'>{props.person.name}</p>
			</div>
		);
	} else if (props.person.gender === 'Female') {
		returned = (
			<div key={props.person.id} className='personInfo'>
				<div className='icon-ill-femaleavatar' onClick={() => props.filmFetchData(props.person.films)}></div>
				<p className='name'>{props.person.name}</p>
			</div>
		);
	} else {
		returned = (
			<div key={props.person.id} className='personInfo'>
				<div className='icon-ill-happyface' onClick={() => props.filmFetchData(props.person.films)}></div>
				<p className='name'>{props.person.name}</p>
			</div>
		);
	}

	return (
		returned
	);
}

const mapStateToProps = (state) => {
  return (
    {
      state
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
			filmFetchData: (films) => {
				dispatch(filmFetchData(films));
			}
    }
  )
}

const ConnectedPerson = connect(mapStateToProps, mapDispatchToProps)(Person);
export default ConnectedPerson;