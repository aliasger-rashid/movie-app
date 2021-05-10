import { combineReducers } from 'redux';
import { exampleContainerReducer as example } from '@scenes/ExampleScreen/reducer';
import { homeContainerReducer as home } from '@scenes/HomeScreen/reducer';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';

export default () => {
  const rootReducer = combineReducers({
    example,
    home
  });

  return configureStore(rootReducer, rootSaga);
};
