import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContextProvider from "../../context/MainContext";
import AuthContextProvider from "../../context/AuthContext";
import MenuMobile from "../../components/MenuMobile";
import ModalMobile from '../../components/ModalMobile/index';
import BackToTop from "../../components/BackToTop";
const MainLayout = () => {
  return (
    // <>
    //   <Header />
    //   <Outlet />
    //   <Footer />
    // </>
    <MainContextProvider>
      <AuthContextProvider>
        <div class="page-wrapper">
          <Header />
          <Outlet />
          <Footer />
          <BackToTop/>
          <MenuMobile/>
          <ModalMobile/>
        </div>
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
