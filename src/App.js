import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import Footer from './components/Footer'
import { Link } from 'react-router-dom';


function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/" >My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">ABOUT ME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'Black'}} to="/" >My Portfolio</Link>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main></Main>
        </Content>
        <Footer />
    </Layout>
</div>
  );
}

export default App;
