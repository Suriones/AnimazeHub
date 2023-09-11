import { authAPI } from "./API/api";

const initialState = {
    login: null,
    password: null,
    admin: false,
    authStatus: false
};

const auth_reducer = (state = initialState, action) => {

    const _createStateCopyAuth = () => {
        let stateCopy = {
            login: state.login,
            password: state.password,
            admin: state.admin,
            authStatus: state.authStatus
        }

        return stateCopy;
    }

    let stateCopy;

    switch (action.type) {
        case "setActiveUser":
            stateCopy = _createStateCopyAuth();
            stateCopy.login = action.user.login;
            stateCopy.password = action.user.password;
            stateCopy.admin = action.user.admin;
            stateCopy.authStatus = true;

            return stateCopy;
            
        case "exitUser":
            stateCopy = _createStateCopyAuth();
            stateCopy.authStatus = false;

            return stateCopy;

        default:
            return state;
    }
}

export const authDAL = {
    checkLogin(login) {
        return async () => {

            const users = await authAPI.getUsers();
            let check = true;

            users.map(u => {
                if (u.login === login) {
                    check = false;
                }
            });
            
            return check;
        }
    },
    addUser(user) {
        return async (dispatch) => {
            await authAPI.addUser(user);
            dispatch({ type: "setActiveUser", user: user });
        }
    },
    loginUser(user) {
        return async (dispatch) => {
            const users = await authAPI.getUsers();
            users.map (u => {
                if (user.login === u.login) {
                    if (user.password === u.password) {
                        dispatch({type: "setActiveUser", user: u});
                    }
                }
            })
        }
    }
}

export default auth_reducer;