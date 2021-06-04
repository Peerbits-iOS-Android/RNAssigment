import { Content } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle';

interface ScrollProps {
    onRef?: (ref: ScrollContainer) => void,
    scrollEnabled?: boolean
}

class ScrollContainer extends Component<ScrollProps> {
    componentDidMount = () => {

        if (this.props.onRef)
            this.props.onRef(this)

    }


    render() {
        return (
            <Content scrollEnabled={this.props.scrollEnabled || true}
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                {...this.props}>
                <View style={CommonStyle.containerStyle}>
                    {this.props.children}
                </View>
            </Content>


        )
    }
}


export default ScrollContainer
