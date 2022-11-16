import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Demo from "./components/Demo";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./databinding/DataBinding";
import HandleEvent from "./handleEvent/HandleEvent";
import DemoLogin from "./State/DemoLogin";
// import css ảnh hưởng toan` bo ung dung
import "./index.scss";
import TangGiamFontSize from "./State/TangGiamFontSize/TangGiamFontSize";
import DemoProps from "./props/DemoProps/DemoProps";
import BaiTapShop from "./props/BaiTapShop/BaiTapShop";
import BaiTapXemChiTiet from "./props/BaiTapXemChiTiet/BaiTapXemChiTiet";
//Cấu hình react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate";
import Page404 from "./pages/Page404/Page404";
import BaiTapGioHang from "./pages/BaiTapGioHang/BaiTapGioHang";
import ReactForm from "./pages/Form/ReactForm";
import ReactLifeCycle from "./pages/ReactLifeCycle/ReactLifeCycle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="btgiohang" element={<BaiTapGioHang />}></Route>
          <Route path="form" element={<ReactForm />}></Route>
          <Route path="reactlifecycle" element={<ReactLifeCycle />}></Route>
          {/* <Route path="*" element={<Page404 />}></Route> */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes> 
    </BrowserRouter>
  </>
);
