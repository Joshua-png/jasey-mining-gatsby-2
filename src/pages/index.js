import React from 'react';

import Layout from '@common/Layout';
import Layouts from '../components/layout/layout';
import Header from '@sections/Header';
import Footer from '@sections/Footer';
import WhoWeArey from '@sections/WhoWeAre';
import Clients from '../components/sections/Clients';
import WhatWeDo from '../components/sections/WhatWeDo';
import Project from '../components/sections/Project';
import Gallerys from '../components/sections/Gallery';
import ContactInfo from '../components/sections/ContactInfo';
import Form from '../components/sections/Form';

const IndexPage = () => (
  <Layout>
    <Layouts />
    <Header />
    <WhoWeArey />
    <Clients />
    <WhatWeDo />
    <Gallerys />
    <Project />
    <ContactInfo />
    <Form />
    <Footer />
  </Layout>
);

export default IndexPage;
