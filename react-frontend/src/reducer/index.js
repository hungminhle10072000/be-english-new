import { combineReducers } from "redux"
import users from './users'
import admin_alert_info from './admin_alert_info'
import itemUserEdit from './itemUserEdit'
import itemUserLogin from "./itemUserLogin"
import statusRegister from "./statusRegister"
import vocabularyTopics from './VocabularyTopicReducer/vocabularyTopics'
import statusFormAddVocaTopic from "./VocabularyTopicReducer/statusFormAddVocaTopic"
import itemVocaTopicEdit from './VocabularyTopicReducer/itemVocaTopicEdit'
import listVocabularyWithTopic from "./VocabularyReducer/listVocabularyWithTopic"
import itemVocaEdit from "./VocabularyReducer/itemVocaEdit"

import  courseReducer  from '../reducer/courseReducer/courseReducer'
import courseEditReducer from '../reducer/courseReducer/courseEditReducer'
import chapterReducer from '../reducer/chapterReducer/chapterReducer'
import chapterEditReducer from "../reducer/chapterReducer/chapterEditReducer";
import lessonReducer from "./lessonReducer/lessonReducer";

import statusFormSendMail from "./statusFormSendMail"
import statusFormAddVoca from "./VocabularyReducer/statusFormAddVoca"

import lessonEditReducer from "./lessonReducer/lessonEditReducer";

import grammarsReducer from "./GrammarReducer/grammarsReducer"
import statusFormAddGrammar from './GrammarReducer/statusFormAddGrammar'
import itemGrammarEdit from './GrammarReducer/itemGrammarEdit'

import commentReducer from "./commentReducer/commentReducer"

import userVocabularyTopicReducer from "./UserVocabularyTopicReducer/userVocabularyTopicReducer"
import userVocabularyWithTopic from './VocabularyReducer/userListVocabularyWithTopic'

import UserItemLearnGrammar from './UserItemLearnGrammar/UserItemLearnGrammar'
import userListGrammar from './UserGrammarReducer/userListGrammar'
import userValueSelectGrammar from './UserGrammarReducer/userValueSelectGrammar'
import userValueSelectTopic from './UserVocabularyTopicReducer/userValueSelectTopic'

const appReducers = combineReducers({
    users,
    courseReducer,
    itemUserEdit,
    admin_alert_info,
    itemUserLogin,
    statusRegister,
    courseEditReducer,
    chapterReducer,
    chapterEditReducer,
    lessonReducer,
    statusFormSendMail,
    vocabularyTopics,
    statusFormAddVocaTopic,
    itemVocaTopicEdit,
    listVocabularyWithTopic,
    statusFormAddVoca,
    itemVocaEdit,
    lessonEditReducer,
    grammarsReducer,
    statusFormAddGrammar,
    itemGrammarEdit,
    commentReducer,
    userVocabularyTopicReducer,
    userVocabularyWithTopic,
    UserItemLearnGrammar,
    userListGrammar,
    userValueSelectGrammar,
    userValueSelectTopic
});
export default appReducers;