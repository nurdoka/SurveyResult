import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Regions from "./pages/Regions.jsx";
import {LanguageProvider} from "./context/LanguageContext.jsx";
import Counties from "./pages/Counties.jsx";
import {AnswerOptionsProvider} from "./context/AnswerOptionContext.jsx";

function Logout() {
    localStorage.clear()
    return <Navigate to="/login"/>
}

function App() {
    return (
        <LanguageProvider>
            <AnswerOptionsProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home/>
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route
                            path="/regions"
                            element={
                                <ProtectedRoute>
                                    <Regions/>
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route
                            path="/counties"
                            element={
                                <ProtectedRoute>
                                    <Counties/>
                                </ProtectedRoute>
                            }
                        ></Route>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </AnswerOptionsProvider>
        </LanguageProvider>
    )
}

export default App
