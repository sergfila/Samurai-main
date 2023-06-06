import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {StateUsersPageType} from "../../../redux/store";
import {unfollowAC, followAC, setUsersAC} from "../../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    usersPage: StateUsersPageType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsersAC: (users: StateUsersPageType) => void
}

function mapStateToProps({usersPage}:MapStateToPropsType) {
    return {
        usersPage: usersPage
    }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsersAC: (users: any) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);