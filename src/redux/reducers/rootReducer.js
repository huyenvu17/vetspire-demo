import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenReducer from './authen.reducer';
import loadingReducer from './loading.reducer';
import dashboardReducer from './dashboard.reducer';
import usersReducer from './users.reducer';
import notificationReducer from './notification.reducer';
import modalReducer from './modal.reducer';
const rootReducer = combineReducers({
    form,
    modalReducer,
    notificationReducer,
    authenReducer,
    loadingReducer,
    dashboardReducer,
    usersReducer
})

export default rootReducer;