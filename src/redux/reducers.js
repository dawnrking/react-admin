import {combineReducers} from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfo';

// 自己手动合并
/*export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)

    }
}
*/

// redux 集成的合并
export default combineReducers({
  counter,
  userInfo
})
