import React from 'react'
import { Component } from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { Colors } from '../../constants';

interface ClickableProps {

    borderLess?: boolean,
    rippleColor?: string,
    style?: any,
    activeOpacity?: number,
    onPress?: () => void,

}

class Clickable extends Component<ClickableProps> {
    render() {
        const { children, borderLess, rippleColor, style, activeOpacity } = this.props
        return (

            // <ElementButton
            //     iconComponent={}
            //     title={title} textStyle={textStyles} raised={raised} onPress={onPress} outline={outline} containerViewStyle={{ marginLeft: 0, marginRight: 0, flex: flex }} backgroundColor={bgColor} buttonStyle={{ ...bgStyles, ...style, flex: 0 }} />

            Platform.select({
                ios: <TouchableOpacity activeOpacity={activeOpacity || 0.5} style={style}
                    onPress={this.onPress}>
                    {children}
                </TouchableOpacity>,
                android: <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(rippleColor || Colors.white, borderLess)}
                    onPress={this.onPress}>


                    <View style={style}>
                        {children}
                    </View>
                </TouchableNativeFeedback>
            })

        );
    }

    onPress = () => {

        requestAnimationFrame(() => {

            if (this.props.onPress)
                this.props.onPress()
        })
    }
}

export default Clickable

