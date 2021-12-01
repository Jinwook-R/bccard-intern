export const initialState = {
    isSignedIn: false, // 로그인 여부
    isSigningOut: false, // 로그아웃 시도중
    isSigningIn: false, // 로그인 시도중
    signInErrorReason: '', // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSignIngUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로워 리스트

};

// Action types
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

// Actions creators
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

export const logoutRequestAction = () => ({
    type: SIGN_OUT_REQUEST,
});

export default (state = initialState, action) => {
    const { type, payload, error } = action;
    console.log(type, payload, error,'?');
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
                isSigningOut: false,
                me: {},
            };
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                isSigningOut: false,
            };
        default:
            return state;
    }
};