import arcjet, {
    detectBot,
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow
} from '@arcjet/next'
import { env } from './env'

export {
    detectBot,
    fixedWindow,
    protectSignup,
    sensitiveInfo,
    shield,
    slidingWindow
}
export default arcjet({
    key:env.ARCJET_KEY,
    // to track the request if we do not provide characterstics by default it takes ip
    characteristics:["fingerprint"],

    // define base rule here
    // inside rules thing will run every time we run arcjet
    rules:[
        shield({
            mode:'LIVE',
        }),
    ]
})