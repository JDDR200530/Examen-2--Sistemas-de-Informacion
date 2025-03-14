import { useState, useCallback } from 'react';

interface FormField {
    value: string;
    error: string;
    touched: boolean;
}

interface FormState {
    [key: string]: FormField;
}

interface ValidationRules {
    [key: string]: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        unique?: boolean;
        custom?: (value: string) => string | undefined;
    };
}


const codigosExistentes = ['A001', 'B002', 'C003'];

const useFormulario = (initialState: { [key: string]: string }, validationRules: ValidationRules = {}) => {
    const createInitialFormState = (): FormState => {
        const formState: FormState = {};
        for (const key in initialState) {
            formState[key] = {
                value: initialState[key],
                error: '',
                touched: false
            };
        }
        return formState;
    };

    const [formState, setFormState] = useState<FormState>(createInitialFormState());

    const validateField = (name: string, value: string): string => {
        const rules = validationRules[name];
        if (!rules) return '';

       
        if (rules.unique && name === 'codigo') {
            if (codigosExistentes.includes(value)) {
                return 'Este codigo ya existe';
            }
        }

        // Validación de campo requerido
        if (rules.required && !value.trim()) {
            return 'Este campo es requerido';
        }

        // Validación de longitud mínima
        if (rules.minLength && value.length < rules.minLength) {
            return `Minimo ${rules.minLength} caracteres`;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            return `Maximo ${rules.maxLength} caracteres`;
        }

        // Validación de cantidad (número entero positivo)
        if (name === 'cantidad') {
            if (!/^\d+$/.test(value)) {
                return 'Debe ser un numero entero';
            }
            if (parseInt(value) <= 0) {
                return 'Debe ser mayor a 0';
            }
        }

        // Validacion de precio 
        if (name === 'precio') {
            if (!/^\d+(\.\d{0,2})?$/.test(value)) {
                return 'Formato invalido (use punto para decimales)';
            }
            if (parseFloat(value) <= 0) {
                return 'Debe ser mayor a 0';
            }
        }

      
        if (rules.pattern && !rules.pattern.test(value)) {
            return 'Formato inválido';
        }

     
        if (rules.custom) {
            const customError = rules.custom(value);
            if (customError) return customError;
        }

        return '';
    };

    const handleChange = useCallback((name: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                value,
                error: validateField(name, value),
                touched: true
            }
        }));
    }, [validationRules]);

    const isFormValid = useCallback((): boolean => {
        return Object.keys(formState).every(key => {
            const field = formState[key];
            return field.touched && !field.error;
        });
    }, [formState]);

    const resetForm = useCallback(() => {
        setFormState(createInitialFormState());
    }, [initialState]);

    return {
        formState,
        handleChange,
        isFormValid,
        resetForm
    };
};

export default useFormulario;