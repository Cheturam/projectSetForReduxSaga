import { compose, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";

export default (rootReducer: any, rootSaga: any): Record<string, any> => {
  const middleware: any = [];
  const enhancers: any = [];

  const sagaMiddleware: any = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));

  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};