import {
    ActionsTypes, StateUsersPageType, StateUsersType,
} from "./store";
import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: StateUsersPageType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'The Knight',
            status: 'bla bla bla',
            avatar: '/img/avatar4.png',
            location: {
                city: 'Dirtmouth',
                country: 'Hallownest'
            }
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Grim',
            status: 'bla bla bla',
            avatar: '/img/avatar4.png',
            location: {
                city: 'City of Tears',
                country: 'Hallownest'
            }
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Cornifer',
            status: 'bla bla bla',
            avatar: '/img/avatar4.png',
            location: {
                city: 'Deepnest',
                country: 'Hallownest'
            }
        },
    ],
}

export const usersReducer = (state: StateUsersPageType = initialState, action: ActionsTypes): StateUsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userId ? { ...el, followed: true } : el
                ),
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userId ? { ...el, followed: false } : el
                ),
            };
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.userId]}
        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId
    }
}
export const setUsersAC = (users: StateUsersType[]) => {
    return {
        type: "SET_USERS",
        users
    }
}

export default usersReducer;