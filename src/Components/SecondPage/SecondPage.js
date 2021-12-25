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

    const handleframe = (e) => {
        dispatch(websiteTypePrice(e))
        alert(`${e} Website selected Click "Next" for going to next page`)
    }


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col box-border'>
                        <Row className="g-4">
                            <Col >
                                <h5 className='fw-bold'>I WANT TO BUILD</h5>
                                <Card onClick={() => handleframe('ecommerce')} className='mb-2 text-start ' body><span className='fw-bold'>An ecommerce Site</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('onlinecourse')} className='mb-2 text-start' body> <span className='fw-bold'>An Online Course Platform</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('blog')} className='mb-2 text-start' body><span className='fw-bold'>A Blog Site</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('company')} className='mb-2 text-start' body><span className='fw-bold'>My Compnay Site with Plce Calculators</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                            </Col>
                        </Row>
                        <div className='row'>
                            <div className="col">
                                <Link to='/first'>
                                    <Button className='text-info' variant="light">Previous</Button>
                                </Link>
                            </div>

                            <div className="col mt-3">
                                <ProgressBar variant="info" now={60} />

                            </div>
                            <div className="col">
                                <Link to='/final'>
                                    <Button className='text-info' variant="light">Next</Button>
                                </Link>

                            </div>



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