import React from 'react';
import s from './Users.module.scss';
import {StateUsersPageType, StateUsersType} from "../../../redux/store";
import MainTitle from "../../Elements/Titles/MainTitle";
import {v1} from "uuid";
import axios from "axios";

type UsersPageType = {
    usersPage: StateUsersPageType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: StateUsersType[]) => void
}

const Users = ({usersPage, follow, unfollow, setUsers}: UsersPageType) => {

    if (usersPage.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })

        // setUsers([
        //     {
        //         id: v1(),
        //         followed: true,
        //         fullName: 'The Knight',
        //         status: 'bla bla bla',
        //         avatar: '/img/avatar4.png',
        //         location: {
        //             city: 'Dirtmouth',
        //             country: 'Hallownest'
        //         }
        //     },
        //     {
        //         id: v1(),
        //         followed: false,
        //         fullName: 'Grim',
        //         status: 'bla bla bla',
        //         avatar: '/img/avatar4.png',
        //         location: {
        //             city: 'City of Tears',
        //             country: 'Hallownest'
        //         }
        //     },
        //     {
        //         id: v1(),
        //         followed: true,
        //         fullName: 'Cornifer',
        //         status: 'bla bla bla',
        //         avatar: '/img/avatar4.png',
        //         location: {
        //             city: 'Deepnest',
        //             country: 'Hallownest'
        //         }
        //     },
        // ])
    }

    return (
        <div className={s.wrapper}>
            <MainTitle title='Users'/>

            {usersPage.users.map(el =>
                <div className={s.items} key={el.id}>
                    <div className={s.item}>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : `${process.env.PUBLIC_URL}/img/unknown.png`} alt=''/>
                        </div>
                        <div>
                            {el.followed
                                ? <button className={s.follow} onClick={() => {follow(el.id)}}>unfollow</button>
                                : <button className={s.unfollow} onClick={() => {unfollow(el.id)}}>follow</button>}
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.name}>
                            {el.name}
                            <div><span>{'el.location.country'}, {'el.location.city'}</span></div>
                        </div>
                        <div className={s.status}>
                            {el.status}
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Users;
