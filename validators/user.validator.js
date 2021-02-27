const joi = require('joi');

const name = joi.string().regex(/^[a-z A-Z]+$/)
const phone = joi.string().regex(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/)
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