import axios from 'axios';
import { CHANGE_PEOPLE_STATUS, CHANGE_FILM_STATUS, ADD_PERSON, ADD_FILM, CLEAR_FILMS } from './types'

export const peopleFetchData = () => {
  
  return (dispatch, getState, url) => {
    dispatch(changePeopleStatus('isLoading'));

    axios.get(url + '/people')
      .then(({data}) => {
        console.log(data);

        data.forEach(person => {
          let films = [];
          person.films.forEach(film => {
            films.push(film);
          });
          dispatch(addPerson(person.id, person.name, person.gender, films));
        }); 

        dispatch(changePeopleStatus('isLoaded'));

      })
      .catch(() => dispatch(changePeopleStatus('failedToLoad')));
  };
}

export const filmFetchData = (films) => {
  
  return (dispatch, getState, url) => {
    dispatch(clearFilms());
    dispatch(changeFilmStatus('isLoading'));

    films.forEach(film => {
      axios.get(film)
        .then(({data}) => {
          console.log(data);

          dispatch(addFilm(data.id, data.title, data.description));

          dispatch(changeFilmStatus('isLoaded'));

        })
        .catch((err) => {
          console.log(err);
          dispatch(changeFilmStatus('failedToLoad'))
        });
    });

  };
}

export const changePeopleStatus = (status) => ({type: CHANGE_PEOPLE_STATUS, payload: status});
export const changeFilmStatus = (status) => ({type: CHANGE_FILM_STATUS, payload: status});
export const addPerson = (id, name, gender, films) => ({type: ADD_PERSON, payload: {id, name, gender, films}});
export const addFilm = (id, title, description) => ({type: ADD_FILM, payload: {id, title, description}});
export const clearFilms = () => ({type: CLEAR_FILMS});