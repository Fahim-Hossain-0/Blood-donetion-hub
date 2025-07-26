import React from 'react';
import TopNavbar from '../Components/TopNavbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <>
            <header>
                <TopNavbar></TopNavbar>
            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
        <footer>
            
        </footer>
        </>  
    );
};

export default AuthLayout;