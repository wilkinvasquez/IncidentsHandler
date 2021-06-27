const AppState = {
    isAlertVisible: false,
    alertType: null,
    alertText: null,
    alertCallback: () => {},

    isLoadingVisible: false,
    isSignedIn: false,
    isSplashScreenVisible: true,
    location: null,

    isFormVisible: false,
    formType: null,
    formPayload: {},
    formCallback: () => {},

    isDetailVisible: false,
    detailType: null,
    detailPayload: {}
}

export default AppState;

