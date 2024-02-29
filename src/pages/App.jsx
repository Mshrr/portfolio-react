// import { useState } from 'react'
import React, {useState} from "react"
import "../styles/style.css"
import Navbar from '../component/Navbar'
import Certified from "../component/Certified";
import Home from "../component/Home";
import Loader from "../component/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Journey from "../component/Journey";
import Contact from "../component/Contact";
import Skills from "../component/Skills";
// import NavButton from "../component/navbutton"

function App() {
  return (
    <>
      <Loader loadingTime={3000}></Loader>
      <Navbar/>
      <section id="section1" ><Home/></section>
      <section id="section2"><Journey/></section>
      <section id="section3"><Skills/></section>
      <section id="section4" className="carousel slide"><Certified /></section>
      <section id="section5"></section>
      <section id="section6"><Contact /></section>
    </>
  )
}

export default App;
