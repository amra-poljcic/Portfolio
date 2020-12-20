import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import CardProject from 'components/CardProject';
import HeroSection from 'components/HeroSection';
import { getAllProjects } from 'api/project';
import { Spinner } from 'react-bootstrap';
import './Home.css';

const Home = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setProjects(await getAllProjects());
            /*
            const ArrowRight = <RightOutlined className="page-arrow" />;
            <ScrollMenu
              data={getProjects}
              alignCenter={false}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              wheel={false}
              itemClass="res-item"
            />
            */
        };
        fetchData();
    }, [])

    return (
        <div className='content-wrap'>
            <HeroSection />
            <Layout>
                {projects !== null ?
                    <CardProject project={projects[0]} />
                    :
                    <Spinner className='projects-spinner' animation="border"></Spinner>
                }
            </Layout>
        </div>
    );
}

export default Home
