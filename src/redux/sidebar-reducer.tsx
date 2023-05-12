import {ActionsTypes, StateSidebarType} from "./store";
import {v1} from "uuid";

const initialState: StateSidebarType = {
    friendsBar: [
        {id: v1(), name: 'The Knight', avatar: '/img/avatar1.png'},
        {id: v1(), name: 'Grimm', avatar: '/img/avatar2.png'},
        {id: v1(), name: 'Cornifer', avatar: '/img/avatar3.png'},
    ]
}

const sidebarReducer = (state: StateSidebarType = initialState, action: ActionsTypes) => {
    return state
}

export default sidebarReducer