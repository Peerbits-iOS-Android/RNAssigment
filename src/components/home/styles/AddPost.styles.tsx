import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image : {
        height : 150,
        width : '100%',
        alignSelf : 'center',
        resizeMode : 'contain'
    },
    selectedImage : {
        height : Dimensions.get('screen').height / 1.8,
        width : '100%',
        alignSelf : 'center',
        resizeMode : 'contain',
        marginTop : 15,
        marginBottom : 15
    },
    contentWrapper : {
        padding : 10,
        margin : 10
    },
    imageContainer : {
        height:Dimensions.get('screen').height / 1.8,
        borderWidth : 0.5,
        borderColor : 'gray',
        width : '80%',
        justifyContent : 'center',
        marginTop : 10
    }
})

export default styles