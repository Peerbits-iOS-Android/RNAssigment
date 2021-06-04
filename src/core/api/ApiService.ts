import NetInfo from '@react-native-community/netinfo';
import axios, { AxiosResponse } from 'axios';
import { appConfig, logger } from '..';
import { IS_LOGGED_IN, KEY_TOKEN } from '../data/PrefKeys';

export const METHOD = {

    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    PATCH: "patch"

}

interface Response<T> {

    data: T,
    message: string,
    error: [string]

}

export default async (endpoint: string, params: any = {}, onSuccess: (res: Response) => void, onFailure: (error: any) => void, method: string = METHOD.POST) => {

    // const token = store.getState().session[KEY_TOKEN]
    //  const lang = await getItem(KEY_LANGUAGE_ID, "1")
    // const { company_uuid } = store.getState().common.companyDetails
    // const token = "Token eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NjkzMjY3NDN9.lYVts0p2gD8RXvyGYcSoabB8qgeZXAaZB1M14wQDnmSEbu9ZV3EtBfJ32QgGMpQvQ-094WfNRcN2HPsgCLaBqg";

    // params.language = 'en'
    logger(appConfig.BASE_URL + endpoint + '\n------------------Params-------------------')
    // logger("Token", token);


    const isConnected = await NetInfo.fetch()
    logger("Internet connection", isConnected);

    if (!isConnected.isConnected)
        onFailure('Please check your internet connection.')
    else {

        //  params.language_id = lang;

        if (params._path != undefined) {
            endpoint = `${endpoint}/${params._path}`
            delete params._path;
        }

        // params = { ...params, ...store.getState().common.deviceInfo }
        let headers = {
            // Authorization: token || "",
            "Accept": 'application/json',
        }
        // logger("Header API key : ", headers.apiKey)
        if (params._parts) {

            headers = {
                ...headers,
                'Content-Type': 'multipart/form-data'
            }
        }

        logger(JSON.stringify(params));
        logger('---------------------------------------------')

        // let paramsData = new FormData()

        // for (const property in params) {
        //     paramsData.append(property, params[property])
        // }

        // if (paramsData._parts.length)
        //     params = paramsData
        // else
        //     params.company_id = getUserFromStore().company_id || appConfig.COMPANY_ID;


        //params = stringify(params)
        const config = {
            baseURL: appConfig.BASE_URL,
            params,
            timeout: 60000,
            headers: headers,
        }

        let request: Promise<any>


        switch (method) {

            case METHOD.POST:
                request = axios.post(endpoint, params, config)
                break;
            case METHOD.GET:
                request = axios.get(endpoint, config)
                break;
            case METHOD.DELETE:
                request = axios.delete(endpoint, config)
                break;
            case METHOD.PUT:
                request = axios.put(endpoint, params, config)
                break;
            case METHOD.PATCH:
                request = axios.patch(endpoint, params, config)
                break;
        }

        //  logger("state", store.getState())
        request.then((response: AxiosResponse<Response>) => {
            logger('------------------ Response-------------------')
            logger(endpoint + '\n Response', JSON.stringify(response));
            logger('---------------------------------------------')


            if (response) {
                if (response.status == 200) {
                    if (response.data.status == 1 || response.data.success == 1) {
                        try {
                            onSuccess(response.data.data ? response.data.data as Response : response.data as Response)

                            //onSuccess(response)

                        } catch (err) {
                            logger('Error', err);
                            onFailure('Something went wrong')
                        }

                    } else {
                        const error = response.data.error[0];

                        onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')
                    }
                } else if (response.status == 401) {


                    onFailure('Session expired')

                } else {

                    onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')

                }
            } else {
                onFailure('Something went wrong')
            }
        }).catch(error => {


            logger('Error', error);

            if (error && error.response) {

                switch (error.response.status) {

                    case 401:

                        onFailure('Session expired')

                        break;

                    default:
                        onFailure(error.message)
                        break


                }
            } else
                onFailure('Something went wrong')
        })
    }

}

