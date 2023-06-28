import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        marginTop: "9%",
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor: '#808080',

        

    },
    div:{
        borderWidth: 1,
        borderStyle: "solid",
        borderTopColor: "black"
        
    },
    sprites:{
        alignSelf: "center",
        height: 100,
        width: 100,
        resizeMode: "cover"
    },
    texto:{
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center'
    }

})