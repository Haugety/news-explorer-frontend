import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  openLoginPopup,
  ...props
}) => {
  React.useEffect(() => {
    if (!props.loggedIn) {
      openLoginPopup();
    }
  }, []);

  return (
    <Route>
      {
        () => (props.loggedIn === true ? (<Component {...props} />) : (<Redirect to="/" />))
      }
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  loggedIn: PropTypes.bool,
  openLoginPopup: PropTypes.func,
};

export default ProtectedRoute;
