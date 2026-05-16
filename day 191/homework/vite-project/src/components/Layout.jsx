import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
