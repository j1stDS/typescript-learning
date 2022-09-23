interface IForm {
    name: string;

    password: string;
}

const form: IForm = {
    name: 'Me',
    password: '123'
}

const formValidation: FormValidation<typeof form> = {
    name: {
        isValid: true
    },

    password: {
        isValid: false,
        errorMessage: 'Password is to short'
    }
}

type FormValidation<T> = {
    [key in keyof T]: {
        isValid: true } | {
        isValid: false,
        errorMessage?: string
    }
};