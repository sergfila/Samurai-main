import {
    ActionsTypes, StateUsersPageType, StateUsersType,
} from "./store";
import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: StateUsersPageType = {
    users: []
}

export const usersReducer = (state: StateUsersPageType = initialState, action: ActionsTypes): StateUsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userId ? { ...el, followed: false } : el
                ),
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userId ? { ...el, followed: true } : el
                ),
            };
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
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