import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { websiteTypePrice } from '../../Redux/Calculate/CalculateSlice';
import { useDispatch } from 'react-redux';


const SecondPage = () => {
    // const [price, setPrice] = useState(2000)
    const dispatch = useDispatch()

    /* const handleFrame = e => {

        if (e === 'ecommerce') {
            setPrice(2000)
        }

        else if (e === 'onlinecourse') {
            setPrice(3000)

        }
        else if (e === 'blog') {
            setPrice(3500)

        }
        else if (e === 'company') {
            setPrice(4000)

        }
        dispatch(websiteTypePrice(price))

    }
    console.log(price) */

    const handleframe = () => {
        alert('Website selected Click "Next" for going to next page')
    }


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col box-border'>
                        <Row className="g-4">
                            <Col onClick={() => handleframe()}>
                                <h3 className='fw-bold'>I WANT TO BUILD</h3>
                                <Card onClick={() => dispatch(websiteTypePrice('ecommerce'))} className='mb-2 text-start ' body><span className='fw-bold'>An ecommerce Site</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(websiteTypePrice('onlinecourse'))} className='mb-2 text-start' body> <span className='fw-bold'>An Online Course Platform</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(websiteTypePrice('blog'))} className='mb-2 text-start' body><span className='fw-bold'>A Blog Site</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(websiteTypePrice('company'))} className='mb-2 text-start' body><span className='fw-bold'>My Compnay Site with Plce Calculators</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                            </Col>
                        </Row>
                        <div className='flex'>
                            <Link to='/first'>
                                <Button className='text-info' variant="light">Previous</Button>
                            </Link>
                            <ProgressBar variant="info" now={60} />

                            <Link to='/final'>
                                <Button className='text-info' variant="light">Next</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='col p-5'>
                        <p>Please Input All The field To Show Estimate Price </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;