export const initialState = {
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: null,
    isSignedIn: false, // 로그인 여부
    isSigningOut: false, // 로그아웃 시도중
    isSignedOut: false,
    isSigningIn: false, // 로그인 시도중
    signInErrorReason: '',
    isSignedUp: false,
    isSignIngUp: false,
    signUpErrorReason: '',
    me: null,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const loadUserRequestAction = data => ({
    type: LOAD_USER_REQUEST,
    payload: {
        id : data,
    }
})

export const signUpRequestAction = data => ({
    type: SIGN_UP_REQUEST,
    payload: {
        signUpData: data,
    },
});

export const signInRequestAction = data => {
    return ({
    type: SIGN_IN_REQUEST,
    payload: {
        signInData: data,
    },
})};

export const signOutRequestAction = () => {
    return {type: SIGN_OUT_REQUEST};
};

export default (state = initialState, action) => {
    const { type, payload, error } = action;

    console.log('type: ',type,'paylaod: ', payload, 'error: ', error);

    switch (type) {
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSignIngUp: true,
                isSignedUp: false,
                signUpErrorReason: '',
            };
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSignIngUp: false,
                isSignedUp: true,
            };
        }
        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isSignIngUp: false,
                signUpErrorReason: error,
            };
        }
        case SIGN_IN_REQUEST:
            return {
                ...state,
                isSigningIn: true,
                signInErrorReason: '',
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                me:payload,
                isSigningIn: false,
                isSignedIn: true,
                isLoading: false,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                isSigningIn: false,
                isSignedIn: false,
                signInErrorReason: error,
                me: null,
            };
        case SIGN_OUT_REQUEST:
            return {
                ...state,
                isSigningOut: true,
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                isSignedIn: false,
                isSignedOut: true,
                isSigningOut: false,
                me: null,
            };
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                isSigningOut: false,
                isSignedOut: false,
            };
        case LOAD_USER_REQUEST:
            return {
                ...state,
                loadUserLoading: true,
                loadUserError: null,
                loadUserDone: false
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loadUserLoading: false,
                me: payload,
                isSignedIn: true,
                loadUserDone: true
            };
        case LOAD_USER_FAILURE:
            return {
                ...state,
                loadUserLoading: false,
                isSignedIn: false,
                loadUserError: error,
            };
        default:
            return state;
    }
};