import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#edeff5',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#031073'
    },
    gameboardContainer: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 362,
        height: 362,
        borderWidth: 1,
        borderColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.35
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    boxText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    flightInfoBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        borderColor: '#031073',
        borderRadius: 5,
        marginBottom: 5,
    },
    flightInfoTitle: {
        fontSize: 36,
        color: '#031073'
    },
    flightInfoText: {
        fontSize: 16,
        color: '#031073',
        marginBottom: 2
    },
    scrollView: {
        width: '100%'
    },
    formContainer: {
        padding: 20,
    },
    formTitle: {
        fontSize: 24,
        margin: 20,
        color: '#031073'
    },
    inputField: {
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        width: '70%'
    },
    modal: {
        marginTop: 300,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.65
    },
    customButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 24,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        paddingLeft: 12,
        backgroundColor: '#031073',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 1,
        shadowOpacity: 0.45,
      },
      buttonText: {
        fontSize: 16,
        color: '#edeff5'
      }
})