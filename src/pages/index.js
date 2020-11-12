import React from 'react';

import Layout from '@common/Layout';
import Layouts from '../components/layout/layout';
// import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import WhoWeArey from '@sections/WhoWeAre';
import Clients from '../components/sections/Clients';

const IndexPage = () => (
  <Layout>
    <Layouts />
    {/* <Navbar /> */}
    <Header />
    <WhoWeArey />
    <Clients />
    <About />
    <Brands />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
