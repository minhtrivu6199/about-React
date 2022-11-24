//File cấu hình store để chứa các state của ứng dụng

import {configureStore} from '@reduxjs/toolkit';
import { arrNguoiDungReducer } from './reducers/arrNguoiDungReducer';
import { gameReducer } from './reducers/gameReducer';

export const store = configureStore({
    reducer: {
        //Các state ứng dụng đặt tại đây
        fontSizeState: (state = 16,action) => {
            switch (action.type) {
                case 'TANG_GIAM_FONT_SIZE': {
                    state = state + action.payload;
                    return state;
                }
                default: return state;
            }
        },

        imgSrcReducer: (state = './img/imgRedCar.jpg', action) => {
            switch (action.type) {
                case 'CHANGE_COLOR': {
                    state =action.payload;
                    return state;
                }
                default: return state;
            }
        },

        arrNguoiDungReducer: arrNguoiDungReducer,

        gameReducer: gameReducer
    }
})