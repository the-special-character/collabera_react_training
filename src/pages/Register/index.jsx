import { connect } from 'react-redux';
import { registerAction } from '../../actions/authActions';
import Register from './register.';

const mapDispatchToProps = dispatch => ({
  register: values =>
    dispatch({
      type: 'REGISTER_REQUEST',
      payload: values,
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(null, mapDispatchToProps)(Register);
