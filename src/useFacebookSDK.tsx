import { useEffect, useState } from 'react'

export interface AuthResponse {
    accessToken: string
    userID: string
    expiresIn: number
    signedRequest: string
    graphDomain: string
    data_access_expiration_time: number
}

declare global {
    const FB: any
    interface Window {
        fbAsyncInit: () => void
    }
    interface Element {
        src: string
    }
}


export interface FBAuthResponse {
    authResponse: AuthResponse
    status: 'connected' | 'not_authorized' | 'unknown'
}

export function useFacebookSdk(appId: string, apiVersion: string, lang: string) {
    const [fbSdkReady, setFbSdkReady] = useState(false)
    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: appId,
                cookie: true,
                xfbml: true,
                version: apiVersion,
            })
            setFbSdkReady(true)
        }
        ;(function (d, s, id) {
            let js,
                fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) {
                return
            }
            js = d.createElement(s)
            js.id = id
            js.src = `https://connect.facebook.net/${lang}/sdk.js#xfbml=1&version=${apiVersion}`
            fjs?.parentNode?.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')
    }, [])

    return { fbSdkReady }
}
