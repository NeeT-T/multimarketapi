import yup from "./Locale";

const yupInstance = yup();

const credentials = () => {
    return yupInstance.object().shape({
        email: yupInstance.string().required().label('EMAIL'),
        senha: yupInstance.string().required().label('SENHA'),
    });
}

export default {
    credentials,
}