import React, { Component, ReactNode } from 'react'
import { Image, I18nManager, ImageStyle, ViewStyle, StatusBar } from 'react-native'
import { Header, Left, Right, Body, Icon, Text, Title } from 'native-base'
import { Colors, Fonts } from '../../constants';
import Clickable from './Clickable';

interface TextOption {
    text?: string,
    color?: string,

}
interface ImageOption {
    image?: number | { uri: string },
    color?: string,
    imageStyle?: ImageStyle
}
interface IconOption {
    icon?: string,
    color?: string,
}
interface ViewOption {

    view?: {
        render: () => ReactNode
    }
}
interface Option extends TextOption, ImageOption, IconOption, ViewOption {
    onPress?: () => void
}

export interface ToolbarProps {

    androidStatusBarColor?: string,
    backgroundColor?: string,
    left?: Option,
    titleFont?: string,
    transparent?: boolean,
    isTitleLeft?: boolean,
    right?: Array<Option>,
    light?: boolean,
    title?: string,
    titleColor?: string,
    image?: number | { uri?: string },
    style?: ViewStyle

}

class Toolbar extends Component<ToolbarProps> {

    componentDidMount() {

        // StatusBar.setBarStyle('light-content')
    }

    render() {

        return (
            // <Header androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props} style={{ backgroundColor?: this.props.backgroundColor || Colors.darkBlue, justifyContent: 'center' }} >
            <Header
                transparent androidStatusBarColor={this.props.androidStatusBarColor
                    || this.props.backgroundColor || 'transparent'}
                style={{
                    backgroundColor: this.props.backgroundColor || Colors.primaryColor,
                    justifyContent: 'center', borderBottomWidth: 0, borderBottomColor:
                        Colors.gray2, ...this.props.style
                }}>
                <Left style={{ flex: 1 }}>
                    {this._renderOption(this.props.left)}
                </Left>

                <Body style={{ flex: 3 }}>

                    {this._renderTitle()}

                </Body>
                <Right style={{ flex: 1 }}>
                    {this._renderRight()}
                </Right>
                <StatusBar
                    translucent={true} barStyle={!this.props.light ? 'dark-content' : 'light-content'} />
            </Header >
        )
    }

    // <Left>{this._renderOption(this.props.left)}</Left>


    //     <Body >
    //     {this._renderTitle()}
    // </Body>
    // <Right>
    //                 {this._renderRight()}
    //             </Right>


    _renderTitle() {

        let { title, image, titleColor, isTitleLeft } = this.props;

        if (title) {
            return (<Title style={{ fontSize:Fonts.size._20px, color: titleColor || Colors.black2, alignSelf: isTitleLeft ? 'flex-start' : 'center', ...styles.titleStyle }}>{title}</Title>)
        } else if (image) {
            return (<Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain', tintColor: this.props.titleColor }}
            />)
        }
    }

    _renderOption(options?: Option): ReactNode {

        if (options) {
            let { icon, image, text, onPress, color, imageStyle, view } = options;

            if (icon) {
                return (<Clickable onPress={onPress} style={styles.iconStyle}>
                    <Icon name={icon} style={{ color: color || Colors.black2 }} />
                </Clickable>)
            } else if (image) {
                return (
                    <Clickable onPress={onPress}>
                        <Image source={image}
                            style={{
                                marginHorizontal: 8,
                                resizeMode: "contain",
                                transform: [{ rotate: I18nManager.isRTL ? "180deg" : "0deg" }], ...imageStyle
                            }} />
                    </Clickable>

                )

            } else if (text) {
                return (<Clickable style={styles.textContainerStyle} onPress={onPress}>
                    <Text style={{ ...styles.textStyle, color: color || Colors.white }}>{text}</Text>
                </Clickable>)
            } else if (view && view.render) {
                return view.render()
            }
        }
    }

    _renderRight() {
        if (this.props.right)
            return this.props.right.map(right => { return (this._renderOption(right)) })
    }
}

const styles = {
    textStyle: {
        marginHorizontal: 4,
        fontSize: Fonts.size._17px,
        color: Colors.headerTitleColor,
        fontFamily: Fonts.name.bold
    },
    titleStyle: {
        fontSize: Fonts.size._30px,
        fontWeight: "500",
        fontFamily: Fonts.name.logo_regular,
    },
    textContainerStyle: {

    },
    iconStyle: {
        marginHorizontal: 4,
        padding: 4,
    }
}

export default Toolbar
