import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';
import Chat from './component/Chat';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Login from './component/Login';
import { useStateValue } from './StateProvider';

export interface IUser {
  name?: string;
  email?: string;
  photo?: string;
}

const Container = styled.div`
    // display: grid;
    // grid-template-columns: 180px 1fr;
    // width: 100vw;
    // height: 100vh;
`
const App = () => {
  const [state, dispatch] = useStateValue();
  const { user } = state;

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
              <Sidebar />

              <Routes>
                  <Route
                      path="/"
                      element={<MainContent />}
                  />
                  <Route
                      path="/room/:roomId"
                      element={<Chat />}
                  />
              </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
