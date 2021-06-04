import { StyleSheet } from "react-native"
import { Colors, Fonts, wp } from "../../constants"

export default StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor:Colors.white,
        justifyContent: "center",
    },
    containerStyleWithCenter: {
        flex: 1,
        backgroundColor:Colors.DarkBlueColor,
        justifyContent: "center",
        alignItems: "center"
    },
    splashImageStyle: {
        width:100,
        height:100,
        justifyContent:'center',
        alignSelf:'center'
    },
    containerStyleWithHorizontalCenter: {
        alignItems: "center",
    },
    horizontalContainerStyle: {
        flexDirection: "row"
    },
    avatarStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.gray2,
    },
    CardStyle: {
        elevation: 5,
        shadowColor: Colors.grayColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    backgroundStyle: {
        backgroundColor: Colors.blue
    },
    horizontalContainerStyleWithCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    commonTextTitleStyle: {
        color: Colors.headerTitleColor,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._25px
    },
    rightPaddedStyle: {
        paddingStart: wp(16),
    }
})