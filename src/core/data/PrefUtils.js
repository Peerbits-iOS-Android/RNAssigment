import AsyncStorage from '@react-native-community/async-storage';
import { API_TOKEN, USER, IS_LOGGED_IN, CONFIG, COMPANY_DETAILS, KEY_USER_DATA } from './PrefKeys';
import { COMMON_SET_USER, COMMON_SET_COMPANY_DETAILS } from '../../reducers/types';
import { setConfiguration as setConfigInStore } from '../../actions/CommonActions'

export const setItem = async (key, value = "") => {

    await AsyncStorage.setItem(key, value ? value.toString() : "")

}

export const setBoolean = async (key, boolean = false) => {

    await AsyncStorage.setItem(key, boolean !== undefined ? boolean.toString() : "false")

}

export const getBoolean = async (key) => {

    const value = await AsyncStorage.getItem(key)

    return value == true
}


export const getItem = async (key, defaultValue = "") => {

    const value = await AsyncStorage.getItem(key)

    return value || defaultValue;

}


export const setToken = async (value) => {

    await AsyncStorage.setItem(API_TOKEN, value)

}


export const getToken = async () => {

    const token = await AsyncStorage.getItem(API_TOKEN)

    return token;

}

export const getUser = async () => {

    const user = await AsyncStorage.getItem(USER)


    return user ? JSON.parse(user) : {};

}