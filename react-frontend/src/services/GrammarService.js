import axios from "axios";
import {authHeader} from './auth-header';

const GRAMMAR_API_END_POINT = "/api/grammars";

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

class GrammarService {
    
    ///get all grammar
    getAllGrammar() {
        return axios.get(GRAMMAR_API_END_POINT, {
            headers: {...headers,...authHeader()},
        })
    }

    // delete grammar with id
    deleteGrammarId(grammarId) {
        return axios.delete(GRAMMAR_API_END_POINT + '/' + grammarId, {headers: {...headers, ...authHeader()}})
    }

    // add grammar with name
    addGrammarWithName(nameGrammar) {
        let formData = new FormData();
        formData.append("name",nameGrammar);
        return axios.post(GRAMMAR_API_END_POINT,formData,{
            headers:{...headers, ...authHeader()}
        })
    }

    // get grammar with id
    getGrammarWithId(id) {
        return axios.get(GRAMMAR_API_END_POINT + '/' + id, {headers: {...headers, ...authHeader()}});
    }

    // update name grammar
    updateNameGrammar(id, name_grammar){
        let formData = new FormData();
        formData.append("name_grammar",name_grammar);
        return axios.put(GRAMMAR_API_END_POINT + '/' + id, formData,{
            headers:{...headers,...authHeader()}
        })
    } 

}

export default new GrammarService()