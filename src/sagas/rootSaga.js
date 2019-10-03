import {all} from 'redux-saga/effects'
import movieDetailsSaga from './movieDetailsSaga'
import movieListsSaga from './movieListsSaga'
import searchResultSaga from './searchResultSaga'

export default function* rootSaga(){
    yield all([
        movieDetailsSaga(),
        movieListsSaga(),
        searchResultSaga()
    ])
}

