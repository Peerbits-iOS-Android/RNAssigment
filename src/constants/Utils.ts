import { Toast } from "native-base";
import { Platform } from "react-native";
import { Utils } from ".";
import Strings from "./Language";

export default {

    showToast(message: string, duration = 4000, type: "danger" | "success" | "warning") {

        Toast.show({
            text: message.toString(),
            duration: duration,
            position: Utils.getDeviceType() == "I" ? 'top' : 'bottom',
            type: type
        })

    },

    showWarningToast(message: string, duration = 4000) {

        this.showToast(message, duration, 'warning');

    },

    showErrorToast(message: string, duration = 4000) {

        this.showToast(message, duration, 'danger');

    },

    validateEmail(email: string) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    getDeviceType() {

        return Platform.select({ ios: "I", android: "A" })
    },

    getCurrency(currency: String) {
        switch (currency) {
            case "USD": return "$"
            case "EUR": return "€"
            case "GBP": return "£"
            default: return "$"
        }
    },

    getRoles(roles: Number[]) {
        let rolesList = "";
        roles.map((value, index) => {
            if (index == roles.length - 1) {
                switch (value) {
                    case 1: rolesList += Strings.Editor
                        break;
                    case 2: rolesList += Strings.ProofReader
                        break;
                    case 3: rolesList += Strings.Translator
                        break;
                    case 4: rolesList += Strings.Influencer
                        break;
                }
            } else {
                switch (value) {
                    case 1: rolesList += Strings.Editor + ", "
                        break;
                    case 2: rolesList += Strings.ProofReader + ", "
                        break;
                    case 3: rolesList += Strings.Translator + ", "
                        break;
                    case 4: rolesList += Strings.Influencer + ", "
                        break;
                }
            }
        })
        return rolesList;
    },
}