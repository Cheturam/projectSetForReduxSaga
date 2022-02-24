import { takeEvery } from 'redux-saga/effects'
import { flagCreator, flagTypes } from '../redux/getRequestFlag/getFlagRequestRedux'
import ApiServices from '../services/ApiServices'
import { flagActions } from './allFlagRequestSaga/allFlagRequestSaga'

const api: any = ApiServices.create()
export default function* root(): Generator {

    yield takeEvery(flagTypes.GET_REQUEST_FLAG, flagActions, api)
    // yield takeEvery("POST_LOGIN_REQUEST", loginActions, api)
}      