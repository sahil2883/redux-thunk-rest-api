import { combineReducers,applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Show,Add } from "./redux/reducer/reducers";


const rootreducers = combineReducers({Show,Add});

const middleware = [thunk];

const store = createStore(rootreducers,composeWithDevTools(applyMiddleware(...middleware)))

export default store;