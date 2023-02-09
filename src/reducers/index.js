import { combineReducers } from 'redux';
import { LocaleReducer } from './localeReducer';
import { ThemeReducer } from './themeReducer';

export default combineReducers({
  locale: LocaleReducer,
  theme: ThemeReducer,
});
