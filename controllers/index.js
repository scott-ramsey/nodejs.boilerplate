window.__gigyaConf = { 
    containerID: 'gigyaContainer',
    onError: onError
 }

var showScreenSetParams = {
    screenSet: 'Default-RegistrationLogin',
    authFlow: 'redirect',
    redirectURL: '/dashboard'
}

var onGigyaServiceReady = function() {
    gigya.accounts.showScreenSet(showScreenSetParams);
}

function onError(e) {
    console.log(e);
}