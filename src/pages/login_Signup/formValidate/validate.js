export const checkValidData = (email, password, userName) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    const isUserName = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(userName)

    if (!isEmailValid) {
        return "Email id is not Valid."
    }
    if (!isPasswordValid) {
        return "Password  is not Valid."
    }
    if (!isUserName) {
        return "UserName is not Valid."
    }

    return null
}