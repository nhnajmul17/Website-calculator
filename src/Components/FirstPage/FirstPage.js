import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './First.css'

import { frameWorkPrice } from '../../Redux/Calculate/CalculateSlice';
import { useDispatch } from 'react-redux';


const FirstPage = () => {
    // const [price, setPrice] = useState(2000)
    // const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()



    const handleframe = (e) => {
        console.log(e)
        dispatch(frameWorkPrice(e))
        alert(`${e} Framework selected Click "Next" for going to next page`)
        // setToggle(true);
    }


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col box-border'>
                        <Row className="g-4">
                            <Col>

                                <h3 className='fw-bold'>I WANT MY SITE TO BUILT ON (CHOOSE FRAMEWORK)</h3>



                                <Card onClick={() => handleframe('python')} className='mb-2 text-start ' style={{ textDecoration: 'none' }} body> <span className='fw-bold'>Python</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('wordpress')} className='mb-2 text-start ' body> <span className='fw-bold'>Word Press</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('phplaravel')} className='mb-2 text-start' body><span className='fw-bold'>Php Laravel</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('php')} className='mb-2 text-start' body><span className='fw-bold'>Php(from Scratch)</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => handleframe('kajabi')} className='mb-2 text-start' body><span className='fw-bold'>Kajabi</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>



                            </Col>
                        </Row>
                        <div className='flex'>
                            <Button disabled variant="light">Previous</Button>
                            <ProgressBar variant="info" now={30} />
                            <Link to='/second'>
                                <Button className='text-info' variant="light">Next</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='col p-5'>
                        <p>Please Input All The field To Show Estimate Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;