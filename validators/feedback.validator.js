const joi = require('joi');

const name = joi.string().min(5).regex(/^[a-z A-Z]+$/)
const phone = joi.string().min(11)
const email = joi.string().email();
const content = joi.string().min(5).regex(/^[a-z A-Z]+$/)


const registerSchema = joi.object().keys({
    name: name.required(),
    phone: phone.required(),
    email: email.required(),
    content: content.required(),
})


module.exports = {
    "reg" : registerSchema
}