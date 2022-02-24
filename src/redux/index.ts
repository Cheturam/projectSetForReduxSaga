import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from '../saga'
import configureStore from "./CreateStore";

export const reducers = combineReducers({
    // login: require('./loginRedux/loginRedux').reducer,
    getFlagRequest:require('./getRequestFlag/getFlagRequestRedux').reducer  ///import all your redux reducers
})

export default (): Record<string, any> => {
    const finalReducers = persistReducer({
        key: 'root',
        storage,

    }, reducers)

    const { store }: any = configureStore(finalReducers, rootSaga)

    const persistor = persistStore(store)
    return { store, persistor }
}
