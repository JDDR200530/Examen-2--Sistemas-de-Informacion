import { Colors } from "@/constants/Colors"
import {StyleSheet} from "react-native"

export const globalStyles = StyleSheet.create(
    {
        background:{
            flex: 1,
            backgroundColor: Colors.background,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20
        },
        Conteiner:{
            flex:1,
            justifyContent: "space-between",
            paddingBottom: 20,
            alignItems:"center",
            paddingVertical: 20,
            
        },

        TextConteiner:{
            color: Colors.textPrimary,
            fontSize: 20,
            textAlign: "center",
            fontWeight: 800,
            width:400
        },
        button:{
        height:80,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal:5,
        },

        inputContainer: {
            flex: 1, 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100%", 
          },
          
          buttonContainer:{
            width: 100,
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            paddingVertical: 150,
            shadowOpacity: 7

          },
           row : {
            flexDirection: "row",
            justifyContent:'center',
            marginBottom: 30,
            paddingHorizontal: 50,
        

        },
        
        input :{
            width:250,
            height: 50,
            borderColor: Colors.InputText,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            fontSize: 18,
            color: Colors.textPrimary,
            backgroundColor: Colors.InputText,
            marginVertical: 10,
            justifyContent: "center",
            alignItems:"center"    
        },
       
        inputRow: {
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: Colors.InputText,
          borderRadius: 10,
          backgroundColor: Colors.InputText,
          paddingHorizontal: 10,
          width: 250,
          height: 50,
        },
        

        dropdownButton:{
            backgroundColor: Colors.textPrimary,
            padding: 10,
            borderRadius: 10,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
            
        },
        modalBackground:
        {
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",

        },
        modalContainer: {
            backgroundColor: "#fff",
            width: "80%",
            borderRadius: 10,
            padding: 20,
            justifyContent: "center"
        },
        optionText: {
            fontSize: 18,
            color: "#333",
            justifyContent: "center"
        },
        optionItem: {
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          },
          selectedOptionBox: {
            backgroundColor: Colors.InputText,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            marginLeft: 10,
          },
        
          selectedOptionText: {
            fontSize: 16,
            color: Colors.textPrimary,
          },
          selectedOptionContainer: {
            backgroundColor: "#e0e0e0",
            padding: 8,
            borderRadius: 5,
            marginTop: 5,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",

          },
          modalContent: {
            width: "80%", 
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          },
          
          closeButton: {
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10,
            justifyContent:"center",
            alignItems: "center"
          },
          keyboardBackground: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)", // Fondo oscuro
          },
          keyboardContainer: {
            backgroundColor: "white",
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          keyButton: {
            flex: 1,
            margin: 5,
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ddd",
            borderRadius: 10,
          },
          keyText: {
            fontSize: 22,
            fontWeight: "bold",
          },
          
          closeButtonText: {
            color: "white",
            fontWeight: "bold",
          },
          resultContainer: {
            marginTop: 20,
            padding: 10,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
            alignItems: "center",
        },
        
        resultText: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#333",
        },
        title :{
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.textPrimary,
          paddingVertical : 50,
          
        }
    }
)