
const stateDefault = [
    {taiKhoan: 'khaido', matKhau: '123'},
    {taiKhoan: 'sangng', matKhau: '321'}
]

export const arrNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_NGUOI_DUNG': {
            state.push(action.payload);
            return [...state];
        }
        default: return state;
    }
}