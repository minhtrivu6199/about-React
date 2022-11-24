

const stateDefault = {
    arrXucXac: [
        {img: './img/6.png', diem:6},
        {img: './img/6.png', diem:6},
        {img: './img/6.png', diem:6},
    ],

    tongSoBanThang: 0,
    tongSoBanChoi: 0,
    giaTriCuoc: true //true: tai, false: xiu
}

export const gameReducer = (state = stateDefault, action) => {
    switch (action.type){
        case 'DAT_CUOC': {
            state.giaTriCuoc = action.payload;
            return {...state};
        }
        case 'PLAY_GAME': {
            //Xử lý tạo ra mảng xx ngẫu nhiên để thay đổi mảng xx cũ
            let arrXXNN = [];
            for( let i=1; i <=3; i++) {
                //moi lan chay thi tao ra 1 so ngau nhien
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //tu so ngau nhien tao ra object XucXac
                let xxNN = {diem:soNgauNhien, img:`./img/${soNgauNhien}.png`};
                //them ob xxnn vao mang;
                arrXXNN.push(xxNN);
            }
            //Cap nhat lai state xxNN
            state.arrXucXac = arrXXNN;

            //Xu ly tinh diem
            let tongDiem = arrXXNN.reduce((td,xx)=> {
                return td + xx.diem;
            },0)

            if ((tongDiem > 11 && state.giaTriCuoc) || (tongDiem <= 11 && !state.giaTriCuoc)) {
                //Thang: cap nhat lai state so ban thang 
                state.tongSoBanThang += 1;
            }
            // luon luon tang state ban choi sau moi lan play game
            state.tongSoBanChoi += 1;

            return {...state};
        }
        default: return state;
    }
}