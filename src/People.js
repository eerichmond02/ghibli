import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { peopleFetchData, filmFetchData } from './state/actions'
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import Person from './Person'

class People extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.peopleFetchData();
	}

	render() {
		if (this.props.peopleStatus === 'isLoaded'){
			return (
				<div className="people">
	      	{this.props.people.map(person =>  (
	      			<Person person={person} key={person.id}/>
	      	))}
				</div>
			);
		} else { return null; }		
	}
}

const mapStateToProps = (state) => {
  return (
    {
      people: state.people,
      peopleStatus: state.peopleStatus
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
			peopleFetchData: () => {
				dispatch(peopleFetchData());
			},
			filmFetchData: (films) => {
				console.log(filmFetchData);
				dispatch(filmFetchData(films));
			}
    }
  )
}

const ConnectedPeople = connect(mapStateToProps, mapDispatchToProps)(People);
export default ConnectedPeople;