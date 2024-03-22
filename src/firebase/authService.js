// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { checkValidData } from "../pages/login_Signup/formValidate/validate"
// import { addMessages } from "../store/loginSignupSlice";
// import { auth } from "./firebase";


// // signup logic
// export const signup = async (email, password, username, dispatch) => {

//     // form validation check
//     const message = checkValidData(email, password, username);
//     dispatch(addMessages(message));

//     if (message) return

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         console.log(user);
//         // dispatch any sussucess action
//     } catch (error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         dispatch(addMessages(errorCode + " - " + errorMessage));
//     }
// }


// // login logic


// export const login = async (email, password, dispatch) => {
//     const message = checkValidData(email, password);
//     dispatch(addMessages(message));

//     if (message) return

//     try {

//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         console.log(user);

//     } catch (error) {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         dispatch(addMessages(errorCode + " - " + errorMessage));
//     }

// }




