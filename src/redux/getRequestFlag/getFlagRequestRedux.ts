import { createReducer, createActions } from "reduxsauce";


const { Types, Creators } = createActions({
    getRequestFlag: [],
    getRequestFlagSuccess: ['flagData'],
    getRequestFlagFailure: ['data'],
    setGetRequestFlag: ["key", "value"]
})

export const flagCreator = Creators
export const flagTypes = Types


interface IinitialInterface {
    loading?: boolean;
    allFlagData?: object;
}


const INITIAL_STATE: IinitialInterface = {
    loading: false,
    allFlagData: {}
}


const getRequestFlag = (state = INITIAL_STATE) => {

    return {
        ...state,
        loading: true
    }

}
const getRequestFlagSuccess = (state = INITIAL_STATE, action: any) => {

    return {
        ...state,
        loading: false
    }
}

const getRequestFlagFailure = (state = INITIAL_STATE, action: any) => {

    return {
        ...state,
        loading: false
    }
}

const setGetRequestFlag = (state = INITIAL_STATE, action: any) => {
    return {
        ...state,
    }

}


export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_REQUEST_FLAG]: getRequestFlag,
    [Types.GET_REQUEST_FLAG_SUCCESS]: getRequestFlagSuccess,
    [Types.GET_REQUEST_FLAG_FAILURE]: getRequestFlagFailure,
    [Types.SET_GET_REQUEST_FLAG]: setGetRequestFlag,
})