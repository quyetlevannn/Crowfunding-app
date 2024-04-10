import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAythRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
    const { payload } = action;
    try {
        const reponse = yield call(requestAythRegister, payload);
        if (reponse.status === 201) {
            toast.success('Created new account succcesfully !!!')
        }
    } catch (error) {

    }
}

function* handleAuthLogin(payload) {
    try {
        const response = yield call(requestAuthLogin, payload)
        console.log(' ~ response', response);
        if (response.data.accessToken && response.data.refreshToken) {
            saveToken(response.data.accessToken, response.data.refreshToken)
        }
        yield 1;
    }
    catch (error) {

    }
}
export { handleAuthLogin }