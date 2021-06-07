import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../constants';


const style = StyleSheet.create({

    ImageView: {
        flex: 1,
        marginBottom:30,
    },
    PostView: {
        marginTop:5,
        resizeMode: 'stretch',
    },
    CaptionContainerView: {
        marginHorizontal: 10,
        marginTop: 5,
        color: Colors.black2,
        fontSize: Fonts.size._17px,
        fontFamily: Fonts.name.regular,
    },
    DateView: {
        marginHorizontal: 10,
        color: Colors.gray2,
        fontSize: Fonts.size._14px,
        fontFamily: Fonts.name.regular,
    },
    ProfileImageContainerView: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 5,
    },
    ProfileImageView: {
        borderWidth: 2,
        borderColor: Colors.red,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    CaptionView: {
        color: Colors.black2,
        fontSize: Fonts.size._17px,
        fontFamily: Fonts.name.regular,
        marginStart: 5,
    },
    UserNameView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        color: Colors.black2,
        fontSize: Fonts.size._17px,
        fontFamily: Fonts.name.bold,
    },
    CaptionUserNameView: {
        color: Colors.black2,
        fontSize: Fonts.size._17px,
        fontFamily: Fonts.name.bold,
    },
    ListItem: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
export default style