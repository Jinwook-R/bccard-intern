export const initialState = {
    mainReviews: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'},{src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'},{src: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'}],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔네요',
        },{
            User: {
                nickname: 'hero',
                },
                content: '얼른 사고 싶네요',
            },
        ]
    }],
    imagesPaths:[],
    reviewAdded:false
};

const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = {
    type: ADD_REVIEW,
};

const dummyReview = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: [],
}

const reducer =  (state = initialState, action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                mainPosts: [dummyReview, ...state.mainReviews],
                postAdded: true
            }
        default:
            return state;
    }

}