import { Thumbnail, View } from 'native-base'
import React from 'react'
import { StatusBar } from 'react-native'
import { Images, Colors } from '../../../constants'
import { reset } from '../../../navigation/RootNavigation'
import { CommonStyle, MainContainer, ScrollContainer } from '../../common'


const Splash: React.FC = () => {

    setTimeout(() => {
        reset("Home")
    }, 3000)

    return (
        <MainContainer>
            <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
            <View style={CommonStyle.containerStyle}>
                <Thumbnail style={CommonStyle.splashImageStyle} source={Images.ic_SplashIcon} />
            </View>
        </MainContainer >
    )
}

export default Splash
