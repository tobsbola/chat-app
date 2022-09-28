import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import Header from './Header'
import Chat from './Chat'

const Container = styled.div`
    // display: grid;
    // grid-template-columns: 180px 1fr;
    // width: 100vw;
    // height: 100vh;
`

const Layout = (props: any) => {
    return (
        <Container>
            <Header />
            <div className="app__body">
                <Sidebar />

                <Routes>
                    <Route
                        path="/"
                        element={<MainContent />}
                    />
                    <Route
                        path="/rooms/:roomId"
                        element={<Chat />}
                    />
                </Routes>
            </div>
        </Container>

    )
}

export default Layout;
