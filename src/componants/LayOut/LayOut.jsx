import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React from "react";
export default function LayOut() {
    return <>
        <Navbar />
        <Outlet></Outlet>
        <Footer />

    </>
}
