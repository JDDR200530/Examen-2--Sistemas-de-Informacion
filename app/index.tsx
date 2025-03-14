import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ProductForm from '@/components/ProductForm';

interface Product {
    codigo: string;
    nombre: string;
    categoria: string;
    cantidad: string;
    precio: string;
    fecha: Date;
    observaciones: string;
}

const Index = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (product: Product) => {
        setProducts(prev => [...prev, product]);
        setShowForm(false);
    };

    const handleDelete = (codigo: string) => {
        setProducts(prev => prev.filter(product => product.codigo !== codigo));
    };

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold mb-5 text-center">Registro de Productos</Text>
            
            {!showForm ? (
                <TouchableOpacity 
                    className="bg-blue-500 p-3 rounded-lg mb-5"
                    onPress={() => setShowForm(true)}
                >
                    <Text className="text-white text-center font-semibold">Nuevo Producto</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <ProductForm onSubmit={handleSubmit} />
                    <TouchableOpacity 
                        className="bg-gray-500 p-3 rounded-lg mb-5"
                        onPress={() => setShowForm(false)}
                    >
                        <Text className="text-white text-center font-semibold">Cancelar</Text>
                    </TouchableOpacity>
                </>
            )}
            
            <Text className="text-xl font-semibold mt-5 mb-3">Listado de Productos</Text>
            {products.length === 0 ? (
                <Text className="text-gray-500 text-center italic">No hay productos registrados</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.codigo}
                    renderItem={({ item }) => (
                        <View className="p-3 border border-gray-300 rounded-lg mb-2 bg-gray-50">
                            <View className="flex-row justify-between items-center mb-2">
                                <Text className="text-lg font-semibold text-gray-800">{item.nombre}</Text>
                                <TouchableOpacity 
                                    onPress={() => handleDelete(item.codigo)}
                                    className="bg-red-500 px-3 py-1 rounded"
                                >
                                    <Text className="text-white">Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                            <Text className="text-gray-600">Código: {item.codigo}</Text>
                            <Text className="text-gray-600">Categoría: {item.categoria}</Text>
                            <Text className="text-gray-600">Cantidad: {item.cantidad}</Text>
                            <Text className="text-gray-600">Precio: ${item.precio}</Text>
                            <Text className="text-gray-600">Fecha: {item.fecha.toLocaleDateString()}</Text>
                            {item.observaciones && (
                                <Text className="text-gray-600 mt-1">
                                    Observaciones: {item.observaciones}
                                </Text>
                            )}
                        </View>
                    )}
                />
            )}
        </ScrollView>
    );
};

export default Index;