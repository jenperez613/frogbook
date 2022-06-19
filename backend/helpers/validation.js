import User from '../models/User.js'

export const validateEmail = (email) => {
    return String(email).toLowerCase()
        .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/)
}

export const validateLength = (text, min, max) => {
    if (text.length > max || text.length < min) {
        return false;
    }
    return true
}

export const validateUserName = async (userName) => {
    let a = false;

    do {
        let check = await User.findOne({userName})

        if (check) {
            userName +=  (+new Date() * Math.random()).toString().substring(0,1)
        } else {
            a = false;
        }
    } while (a);
    return userName
}