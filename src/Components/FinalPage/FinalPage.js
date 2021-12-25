import React from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiTypePrice } from '../../Redux/Calculate/CalculateSlice';
import { paymentType } from '../../Redux/Calculate/CalculateSlice';

const FinalPage = () => {
    const dispatch = useDispatch()
    const framePrice = useSelector((state) => state.calculator.framePrice)
    const webPrice = useSelector((state) => state.calculator.webPrice)
    const uiPrice = useSelector((state) => state.calculator.uiPrice)
    const Payment = useSelector((state) => state.calculator.paymentPrice)

    const total = framePrice + webPrice + uiPrice + Payment;
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col'>
                        <div className='m-5'>
                            <h4>DO YOU HAVE UX DESIGN READY? </h4>
                            <Button onClick={() => dispatch(uiTypePrice('yes'))} className='me-3' variant='outline-info'>Yes</Button>
                            <Button onClick={() => dispatch(uiTypePrice('no'))} variant='outline-info'>No</Button>
                        </div>
                        <div className='m-5'>
                            <h4>HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE? </h4>
                        </div>
                        <div className='m-5'>
                            <h4>ANY PAYMENT GATEWAY INTEGRATION? </h4>
                            <Button onClick={() => dispatch(paymentType('stripe'))} className='me-3' variant='outline-info'>Stipe</Button>
                            <Button onClick={() => dispatch(paymentType('paypal'))} className='me-3' variant='outline-info'>Paypal</Button>
                            <Button onClick={() => dispatch(paymentType('both'))} className='me-3' variant='outline-info'>Both</Button>
                            <Button onClick={() => dispatch(paymentType('none'))} variant='outline-info'>None</Button>
                        </div>





                        <div className='row'>
                            <div className="col">

                                <Link to='/second'>  <Button className='text-info' variant="light">Previous</Button> </Link>

                            </div>
                            <div className="col mt-3">

                                <ProgressBar variant="info" now={100} />

                            </div>
                            <div className="col">
                                <Button disabled variant="light">Next</Button>


                            </div>


                        </div>
                    </div>
                    <div className='col  m-5 px-5 pt-5'>
                        <div className='col m-5 '>
                            <Card style={{ width: '22rem' }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2  text-info">Est. Cost</Card.Subtitle>
                                    <Card.Text>
                                        <Card.Title className='fw-bold'>${total}</Card.Title>

                                        This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to developement. Project will be divided into 2-3 milestone payments.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="position-relative">
                            <div>
                                <Button variant="info">Start Your Project Now</Button>
                            </div>

                        </div>


                    </div>
                </div>
            </div >


        </div >
    );
};

export default FinalPage;