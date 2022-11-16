//rfc: react function component
import React from 'react'

export default function Demo() { //functional component
    // Lệnh return sẽ chứa giao diện compotnent
    //Lưu ý: Nội dụng của component phải đc bao phú bởi 1 thẻ
    // <></>: Thẻ fragment thẻ vô hình
  return (
    <>
        <button className="btn btn-danger mx-2">Button</button>
        <button className="btn btn-success">Button</button>
    </>
  )
}
