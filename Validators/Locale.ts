import * as yup from "yup";

const conditional = {
    required: "O campo ${path} é obrigatório.",
};

export default () => {
    yup.setLocale({
        mixed: conditional,
    });

    return yup;
};
