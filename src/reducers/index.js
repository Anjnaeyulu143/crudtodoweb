
 import { ADD_ARTICLES } from "../actions";

export default function articles (state = [],action){
     if(action.type === ADD_ARTICLES){
         return action.article
     }
     return state
}