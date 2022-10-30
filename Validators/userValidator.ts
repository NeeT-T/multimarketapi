import yup from "./Locale";

const yupInstance = yup();

const credentials = () => {
    return yupInstance.object().shape({
        email: yupInstance.string().required().email().label('EMAIL'),
        senha: yupInstance.string().required().label('SENHA'),
    });
}

const updateCredentials = () => {
    return yupInstance.object().shape({
        email: yupInstance.string().required().email().label('EMAIL'),
        senha: yupInstance.string().required().label('SENHA'),
        senhaAntiga: yupInstance.string().label('SENHA ANTIGA'),
        emailNovo: yupInstance.string().email().label('EMAIL NOVO'),
    });
}

export default {
    credentials,
    updateCredentials,
}