import { call, put } from "redux-saga/effects";
import { flagCreator } from "../../redux/getRequestFlag/getFlagRequestRedux";



export function* flagActions(api: any, action: any): any {
    try {
        const response = yield call(api.login, action.phoneNumber);
        if (response.status === 200) {
            yield put(flagCreator.getRequestFlagSuccess(response.data));
        } else {
            yield put(flagCreator.getRequestFlagFailure(response.data));
        }
    } catch (error) {
        yield put(flagCreator.getRequestFlagFailure(error));
    }
}