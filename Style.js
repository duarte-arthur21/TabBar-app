import {StyleSheet} from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    textInput: {
        fontSize: 30,
        color: '#000f',
        textAlign: 'center',
        backgroundColor: '#ffff',
        borderBottomColor: '#000',
        borderRadius: 15,
        marginBottom: "5%",
        shadowColor: '#000',
    },
    titulo: {
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: "100",
        color:'#fff',
        borderColor: '#000',
        textAlign: 'justify',
        marginLeft: '7%',
        marginRight: '5%',
        position: 'relative'
      },
      buttom: {
        fontSize: 25,
        backgroundColor: '#ffa500',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "5%",
        width: '90%'
      },
      flag: {
        flex: 1,
        display: 'flex',
        position: 'absolute',
        marginTop: '6%',
        marginLeft: '10%',
        width: '20%',
        height: '35%'
      },

});

export {estilo}
