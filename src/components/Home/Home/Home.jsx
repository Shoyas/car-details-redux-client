import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import Body from '../Body/Body';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Header from '../Head/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <MessengerCustomerChat
                pageId="101240722011384"
                appId="927030501367008"
            />,
            <Footer/>
        </div>
    );
};

export default Home;