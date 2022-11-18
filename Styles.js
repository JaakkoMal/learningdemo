import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edeff5',
        alignItems: 'center',
    },
    title: {
        marginTop: 40,
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
        borderColor: '#031073',
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
        backgroundColor: '#f7f7f7',
        borderColor: '#031073',
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 1,
        shadowOpacity: 0.15
    },
    flightInfoTitle: {
        fontSize: 36,
        fontWeight: 'bold',
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
        borderRadius: 12,
        marginTop: 24,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        paddingLeft: 12,
        backgroundColor: '#031073',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 1,
        shadowOpacity: 0.15,
      },
      buttonText: {
        fontSize: 16,
        color: '#edeff5'
      },
      infoButton: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderColor: '#031073',
        borderWidth: 2,
        borderRadius: 50
      },
      infoButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#031073'
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalCloseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1
      },
      modalCloseButtonText: {
        fontSize: 16,
        color: '#031073',
        paddingTop: 20
      },
      favoriteBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#dce2f2',
        borderWidth: 1,
        borderColor: '#031073',
        borderRadius: 5,
        marginBottom: 2
      },
      favoriteHeading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#031073',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#031073'
      },
      favoriteText: {
        fontSize: 24,
        color: '#031073',
        margin: 24
      },
      favoriteRemove: {
        fontSize: 16,
        color: '#031073',
        marginLeft: 32,
        marginRight: 5,
        marginTop: 31
      }
})