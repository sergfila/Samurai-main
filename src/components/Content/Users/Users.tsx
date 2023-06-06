import React from 'react';
import s from './Users.module.scss';
import {StateUsersPageType} from "../../../redux/store";
import MainTitle from "../../Elements/Titles/MainTitle";

type UsersPageType = {
    usersPage: StateUsersPageType
}

const Users = ({usersPage}: UsersPageType) => {
    return (
        <div className={s.wrapper}>
            <MainTitle title='Users'/>

            {usersPage.users.map(el =>
                <div className={s.items} key={el.id}>
                    <div className={s.item}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}${el.avatar}`} alt=''/>
                        </div>
                        <div>
                            {el.followed
                                ? <a href=''>follow</a>
                                : <a href=''>unfollow</a>}
                        </div>
                    </div>
                    <div className={s.item}>
                        <div>
                            <div>
                                {el.fullName}
                            </div>
                            <div>
                                {el.status}
                            </div>
                        </div>
                        <div>
                            <div>
                                {el.location.city}
                            </div>
                            <div>
                                {el.location.country}
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Users;