import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { checkValidData } from "../pages/login_Signup/formValidate/validate"
import { addMessages, addUser, removeUser } from "../store/loginSignupSlice";
import { auth } from "./firebase";



// signup logic or create account
export const signup = async (email, password, username, dispatch) => {

    // form validation check
    const message = checkValidData(email, password, username);
    dispatch(addMessages(message));

    if (message) return

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // dispatch any sussucess action
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(addMessages(errorCode))
    }
}


// login logic


export const login = async (email, password, dispatch) => {
    const message = checkValidData(email, password);
    dispatch(addMessages(message));

    if (message) return

    try {

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);

    } catch (error) {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        dispatch(addMessages("Please check Email or password !"));
    }

}



// sign out logic


export const signOutUser = async (navigate) => {


    try {
        await signOut(auth);

    } catch (error) {
        navigate("/error")
    }
}


// ononAuthStateChanged

export const handelAuthStateChanged = (navigate, dispatch) => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/home");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    });
}

