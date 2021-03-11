const joi = require('joi');

const name = joi.string().min(5).regex(/^[a-z A-Z]+$/)
const phone = joi.string().min(11)
const password = joi.string().min(8).strict()
const email = joi.string().email();


const registerSchema = joi.object().keys({
    name: name.required(),
    phone: phone.required(),
    email: email.required(),
    password: password.required(),
})


module.exports = {
    "register" : registerSchema
}