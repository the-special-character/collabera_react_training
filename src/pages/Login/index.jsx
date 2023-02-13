import { connect } from 'react-redux';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: values =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: values,
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(null, mapDispatchToProps)(Login);
