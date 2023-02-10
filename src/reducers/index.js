import { combineReducers } from 'redux';
import { LocaleReducer } from './localeReducer';
import { ThemeReducer } from './themeReducer';
import user from './userReducer';
import loading from './loadingReducer';
import errors from './errorReducer';

export default combineReducers({
  locale: LocaleReducer,
  theme: ThemeReducer,
  user,
  loading,
  errors,
});
