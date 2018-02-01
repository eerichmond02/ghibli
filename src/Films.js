import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { clearFilms } from './state/actions'
import Person from './Person'

const Films = (props) => {
	if (props.filmStatus === 'isLoaded') {
		return (
			<div>
				<hr />
				<div className="films">
					<h2>Film Description(s)</h2>
					<div>
		      	{props.currentFilms.map(film =>  (
		      		<div className="filminfo" key={film.id}>
			      		<p>{film.title}</p>
			      		<p className="filmdesc">{film.descrip}</p>
			      		<br />
		      		</div>
		      	))}
	      	</div>
					<button onClick={props.clearFilms}>Clear</button>
				</div>
			</div>
		);
	} else { return null; }
}

const mapStateToProps = (state) => {
  return (
    {
      currentFilms: state.currentFilms,
      filmStatus: state.filmStatus
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return (
    {
			clearFilms: () => {
				dispatch(clearFilms());
			}
    }
  )
}

const ConnectedFilms = connect(mapStateToProps, mapDispatchToProps)(Films);
export default ConnectedFilms;