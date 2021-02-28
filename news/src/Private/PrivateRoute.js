import { Redirect, Route } from "react-router"
import { isLogin } from "../auth.service"

const PrivateRoute = ({component: Component, ...rest}) => {
    // console.log(isLogin())
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />

    );
};

export default PrivateRoute