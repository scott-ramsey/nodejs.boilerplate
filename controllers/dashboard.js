window.__gigyaConf = { 
    containerID: 'gigyaContainer',
    onError: onError
 }

var getAccountInfoParams = {
    include: 'profile,data,loginIDs',
    callback: getAccountInfoCallback
}

var showScreenSetParams = {
    screenSet: 'Default-ProfileUpdate'  
}

var onGigyaServiceReady = function() {
    gigya.accounts.getAccountInfo(getAccountInfoParams);
}

function getAccountInfoCallback(r) {
    accountInfo = r;

    console.log(accountInfo);

    if(accountInfo.UID) {
        setLogoutButton();
        gigya.accounts.showScreenSet(showScreenSetParams);
    }
    else {
        location = '/';
    }
}

function onError(e) {
    console.log(e);
}