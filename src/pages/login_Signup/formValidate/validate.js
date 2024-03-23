export const checkValidData = (email, password, userName) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    const isUserName = /^[a-zA-Z0-9_-]{3,16}$/.test(userName)

    if (!isEmailValid) {
        return "Email id is not Valid."
    }
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
    }
    if (!isUserName) {
        return "Username must be between 5 to 20 characters long and contain only letters and digits."
    }

    return null
}