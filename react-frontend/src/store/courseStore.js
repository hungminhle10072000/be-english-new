import { createStore } from 'redux'
import  courseReducer  from '../reducer/courseReducer/courseReducer'

export const storeCourse = createStore(courseReducer)