import yup from "./Locale";

const yupInstance = yup();

const categorie = () => {
    return yupInstance.object().shape({
        nome: yupInstance.string().required().label('NOME'),
    });
}

export default {
    categorie,
}