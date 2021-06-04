import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Dialog from 'react-native-popup-dialog';
import { Colors, } from '../../constants';
export interface ProgressDialogProps {

    visible?: boolean,
    title?: string,
    message?: string,
    cancelable?: boolean,
    extraView?: any,
    onRef?: (ref: ProgressDialog) => void,
    onDismiss?: () => void,
    onTouchOutside?: () => void,
}
interface ProgressDialogState {
    visible: boolean
}
export default class ProgressDialog extends Component<ProgressDialogProps, ProgressDialogState> {

    state = {
        visible: false
    }

    static dialogInstance: ProgressDialog
    static show() {


        this.dialogInstance.showDialog()

    }

    static hide() {


        this.dialogInstance.hideDialog()

    }
    showDialog() {


        this.setState({
            visible: true,
            //   title: config.title,
            //   message: config.message,
            //   positiveButton: config.positiveButton,
            //   negativeButton: config.negativeButton,
            //   cancelable: config.cancelable,
            //   children: config.extraView
        })
    }
    hideDialog = () => {

        this.setState({
            visible: false
        })

    }
    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    render() {
        return (
            <Dialog
                dialogStyle={styles.styleDialogContent}
                footer={null}
                visible={this.state.visible}>

                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        style={{ alignSelf: 'center' }}
                        size='large' color={Colors.blue} />
                </View>
            </Dialog>
        )
    }
}




const styles = StyleSheet.create({
    styleDialogContent: {
        padding: 10,
        backgroundColor: Colors.white,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    activityIndicatorWrapper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

