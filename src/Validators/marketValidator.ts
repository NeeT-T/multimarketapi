import yup from "./Locale";

const yupInstance = yup();

const market = () => {
    return yupInstance.object().shape({
        nome: yupInstance.string().required().label('NOME DO MERCADO'),
        cnpj: yupInstance.string().required().label('CNPJ DO MERCADO'),
        cep: yupInstance.string().required().label('CEP DO MERCADO'),
    });
}

export default {
    market,
}