import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {StateUsersPageType, StateUsersType} from "../../../redux/store";
import {unfollowAC, followAC, setUsersAC} from "../../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    usersPage: StateUsersPageType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: StateUsersType[]) => void
}

function mapStateToProps(state: MapStateToPropsType) {
    return {
        usersPage: state.usersPage
    }
}
function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: StateUsersType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);