import { ADD_PERSON, ADD_FILM, CHANGE_PEOPLE_STATUS, CHANGE_FILM_STATUS, CLEAR_FILMS } from './types'

class Person {
  constructor(id, name, gender, films) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.films = films
  }
}

class Film {
  constructor(id, title, descrip) {
    this.id = id;
    this.title = title;
    this.descrip = descrip;
  }
}

const initialState = {
  people: [],
  peopleStatus: '',
  filmStatus: '',
  //personSelected: undefined,
  currentFilms: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: state.people.concat(new Person(action.payload.id, action.payload.name, action.payload.gender, action.payload.films))
      }
    case CHANGE_PEOPLE_STATUS:
      return {
        ...state,
        peopleStatus: action.payload
      }
    case CHANGE_FILM_STATUS:
      return {
        ...state,
        filmStatus: action.payload
      }
    case ADD_FILM:
      return {
        ...state,
        currentFilms: state.currentFilms.concat(new Film(action.payload.id, action.payload.title, action.payload.description))
      }
    case CLEAR_FILMS:
      return {
        ...state,
        currentFilms: [],
        filmStatus: ''
      }
    default:
      return state;
  }
}

export default reducer;