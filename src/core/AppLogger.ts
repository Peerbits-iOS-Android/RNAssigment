export const logger = (message: string, optionalParams: [any]) => {


    if (optionalParams !== undefined)
        console.log(message, optionalParams)
    else
        console.log(message)
}