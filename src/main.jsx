import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GeneralForm from './components/GeneralForm.jsx';
import UserInfo from './components/UserInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <UserInfo />
    <Footer />
  </StrictMode>
);
