import { StyleSheet } from 'react-native';
import { theme } from '../../styles/global';

export default StyleSheet.create({

    modal: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 30,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    txtCancelar: {
        color: "#f00",
        textAlign: 'center',
        fontWeight: 'bold',
    },

})