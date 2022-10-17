import yup from "./Locale";

const yupInstance = yup();

const products = () => {
    return yupInstance.object().shape({
        nome: yupInstance.string().required().label('NOME'),
        preco: yupInstance.string().required().label('PREÇO'),
        cesta: yupInstance.boolean().required().label('CESTA'),
        categorieId: yupInstance.number().required().label('CATEGORIA'),
        marketId: yupInstance.number().required().label('MERCADO'),
    });
}

export default {
    products,
}