import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Product {
    codigo: string;
    nombre: string;
    categoria: string;
    cantidad: string;
    precio: string;
    fecha: Date;
    observaciones: string;
}

interface Props {
    onSubmit: (product: Product) => void;
}

const categorias = [
    'Tecnologia',
    'Limpieza',
    'Bano',
    'Jardin',
    'Cocina'
];

const ProductForm = ({ onSubmit }: Props) => {
    const [formData, setFormData] = useState<Product>({
        codigo: '',
        nombre: '',
        categoria: '',
        cantidad: '',
        precio: '',
        fecha: new Date(),
        observaciones: ''
    });

    const [errors, setErrors] = useState({
        codigo: '',
        nombre: '',
        categoria: '',
        cantidad: '',
        precio: ''
    });

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = Object.values(errors).every(error => !error) &&
            Object.keys(formData).every(key => 
                key === 'observaciones' || formData[key as keyof Product] !== ''
            );
        setIsFormValid(isValid);
    }, [formData, errors]);

    const validarCampo = (nombre: keyof Product, valor: string) => {
        let error = '';
        switch (nombre) {
            case 'codigo':
                if (!valor) error = 'El codigo es requerido';
                else if (valor.length > 10) error = 'Maximo 10 caracteres';
                else if (!/^[a-zA-Z0-9]+$/.test(valor)) error = 'Solo caracteres alfanumericos';
                break;
            case 'nombre':
                if (!valor) error = 'El nombre es requerido';
                else if (valor.length < 3) error = 'Minimo 3 caracteres';
                break;
            case 'categoria':
                if (!valor) error = 'Seleccione una categoria';
                break;
            case 'cantidad':
                if (!valor) error = 'La cantidad es requerida';
                else if (!/^\d+$/.test(valor)) error = 'Debe ser un numero entero';
                else if (Number(valor) < 1) error = 'Minimo 1 unidad';
                break;
            case 'precio':
                if (!valor) error = 'El precio es requerido';
                else if (!/^\d+(\.\d{0,2})?$/.test(valor)) error = 'Formato invalido (0.00)';
                else if (Number(valor) <= 0) error = 'Debe ser mayor a 0';
                break;
        }
        return error;
    };

    const handleChange = (nombre: keyof Product, valor: string) => {
        setFormData(prev => ({ ...prev, [nombre]: valor }));
        if (nombre !== 'observaciones') {
            const error = validarCampo(nombre, valor);
            setErrors(prev => ({ ...prev, [nombre]: error }));
        }
    };

    const handleSubmit = () => {
        if (isFormValid) {
            onSubmit(formData);
            setFormData({
                codigo: '',
                nombre: '',
                categoria: '',
                cantidad: '',
                precio: '',
                fecha: new Date(),
                observaciones: ''
            });
        }
    };

    return (
        <ScrollView className="flex-1">
            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Codigo de Producto</Text>
                <TextInput
                    className={`border p-3 rounded-md text-base bg-white ${
                        errors.codigo ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.codigo}
                    onChangeText={(valor) => handleChange('codigo', valor)}
                    maxLength={10}
                    placeholder="Ingrese codigo"
                />
                {errors.codigo && (
                    <Text className="text-red-500 text-xs mt-1">{errors.codigo}</Text>
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Nombre del Producto</Text>
                <TextInput
                    className={`border p-3 rounded-md text-base bg-white ${
                        errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.nombre}
                    onChangeText={(valor) => handleChange('nombre', valor)}
                    placeholder="Ingrese nombre"
                />
                {errors.nombre && (
                    <Text className="text-red-500 text-xs mt-1">{errors.nombre}</Text>
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Categoria</Text>
                <TouchableOpacity
                    className={`border p-3 rounded-md bg-white ${
                        errors.categoria ? 'border-red-500' : 'border-gray-300'
                    }`}
                    onPress={() => setShowCategories(!showCategories)}
                >
                    <Text>{formData.categoria || 'Seleccione categoría'}</Text>
                </TouchableOpacity>
                {showCategories && (
                    <View className="border border-gray-300 mt-1 rounded-md">
                        {categorias.map((cat) => (
                            <TouchableOpacity
                                key={cat}
                                className="p-3 border-b border-gray-200"
                                onPress={() => {
                                    handleChange('categoria', cat);
                                    setShowCategories(false);
                                }}
                            >
                                <Text>{cat}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                {errors.categoria && (
                    <Text className="text-red-500 text-xs mt-1">{errors.categoria}</Text>
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Cantidad</Text>
                <TextInput
                    className={`border p-3 rounded-md text-base bg-white ${
                        errors.cantidad ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.cantidad}
                    onChangeText={(valor) => handleChange('cantidad', valor)}
                    keyboardType="numeric"
                    placeholder="Ingrese cantidad"
                />
                {errors.cantidad && (
                    <Text className="text-red-500 text-xs mt-1">{errors.cantidad}</Text>
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Precio Unitario</Text>
                <TextInput
                    className={`border p-3 rounded-md text-base bg-white ${
                        errors.precio ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.precio}
                    onChangeText={(valor) => handleChange('precio', valor)}
                    keyboardType="decimal-pad"
                    placeholder="Ingrese precio"
                />
                {errors.precio && (
                    <Text className="text-red-500 text-xs mt-1">{errors.precio}</Text>
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Fecha de Ingreso</Text>
                <TouchableOpacity 
                    className="border border-gray-300 p-3 rounded-md bg-white"
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text>{formData.fecha.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={formData.fecha}
                        mode="date"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            if (selectedDate) {
                                setFormData(prev => ({ ...prev, fecha: selectedDate }));
                            }
                        }}
                    />
                )}
            </View>

            <View className="mb-4">
                <Text className="text-base font-medium mb-2">Observaciones</Text>
                <TextInput
                    className="border border-gray-300 p-3 rounded-md text-base bg-white h-24"
                    value={formData.observaciones}
                    onChangeText={(valor) => handleChange('observaciones', valor)}
                    multiline
                    numberOfLines={4}
                    placeholder="Ingrese observaciones (opcional)"
                />
            </View>

            <TouchableOpacity 
                className={`p-4 rounded-lg mt-5 mb-8 ${
                    isFormValid ? 'bg-blue-500' : 'bg-gray-400'
                }`}
                onPress={handleSubmit}
                disabled={!isFormValid}
            >
                <Text className="text-white text-center text-base font-semibold">
                    {isFormValid ? 'Guardar Producto' : 'Complete todos los campos requeridos'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProductForm;