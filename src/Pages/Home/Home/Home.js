import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Directions from '../DIrections/Directions';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Directions></Directions>
            <Article></Article>
        </div>
    );
};

export default Home;