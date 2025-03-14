import { View, Text, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '@/style/global-styles';

interface Props {
    placeholder: string;
    options: string[];
    selectedOption?: string | null;
    onChangeValue: (value: string) => void;
    onSelectOption: (option: string) => void;
    value?: string;
    editable?: boolean;
}

const InputText = ({
    placeholder,
    options,
    selectedOption,
    onChangeValue,
    onSelectOption,
    value,
    editable = true
}: Props) => {
    const [inputValues, setInputValues] = useState(value);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (value !== inputValues) {
            setInputValues(value);
        }
    }, [value]);

    return (
        <View style={globalStyles.inputContainer}>
            <TextInput
                style={globalStyles.input}
                placeholder={placeholder}
                value={inputValues}
                editable={editable}
                onFocus={() => setModalVisible(true)}
            />
            <Modal visible={modalVisible} transparent animationType="fade">
                <TouchableOpacity 
                    style={globalStyles.modalBackground}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={globalStyles.modalContent}>
                        <Text >Seleccionar {placeholder}</Text>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    style={globalStyles.optionItem}
                                    onPress={() => {
                                        setInputValues(item);
                                        onSelectOption(item);
                                        onChangeValue(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={globalStyles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

export default InputText;