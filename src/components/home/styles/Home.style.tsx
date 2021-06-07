import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../../constants';


const style = StyleSheet.create({

    MainContainView: {
        flex: 1,
        backgroundColor:Colors.white,
    },
    SearchView: {
        backgroundColor:Colors.white,
        flex: 1,
        marginHorizontal: 10,
    },
    SearchContainerView: {
        marginBottom:5,
        marginHorizontal:5,
        backgroundColor:Colors.white,
        flexDirection: 'row',
    },
    toolbar: {
        fontFamily: Fonts.name.logo_regular,
    }
});
export default style