import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from './components/Content';
import "./Assignment1.css"

const Assignment1 = () => {
    return (
        <div className="assignment-1">
            <Header className="header" />
            <Content className="content" />
            <Footer className="footer" />
        </div>
    )
}

export default Assignment1
