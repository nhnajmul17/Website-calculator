import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './First.css'

import { frameWorkPrice } from '../../Redux/Calculate/CalculateSlice';
import { useDispatch } from 'react-redux';


const FirstPage = () => {
    // const [price, setPrice] = useState(2000)
    const dispatch = useDispatch()


    /* const handleFrame = e => {

        if (e === 'python') {
            setPrice(2000)
        }

        else if (e === 'wordpress') {
            setPrice(3000)

        }
        else if (e === 'phplaravel') {
            setPrice(3500)

        }
        else if (e === 'php') {
            setPrice(4000)

        }
        else if (e === 'kajabi') {
            setPrice(4500)

        }
        dispatch(frameWorkPrice(price))
        alert(` ${e} Frame work added`)

    } */

    const handleframe = () => {
        alert('Framework selected Click "Next" for going to next page')
    }


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='col box-border'>
                        <Row className="g-4">
                            <Col onClick={() => handleframe()}>

                                <h3 className='fw-bold'>I WANT MY SITE TO BUILT ON (CHOOSE FRAMEWORK)</h3>



                                <Card onClick={() => dispatch(frameWorkPrice('python'))} className='mb-2 text-start' style={{ textDecoration: 'none' }} body> <span className='fw-bold'>Python</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(frameWorkPrice('wordpress'))} className='mb-2 text-start' body> <span className='fw-bold'>Word Press</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(frameWorkPrice('phplaravel'))} className='mb-2 text-start' body><span className='fw-bold'>Php Laravel</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(frameWorkPrice('php'))} className='mb-2 text-start' body><span className='fw-bold'>Php(from Scratch)</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>

                                <Card onClick={() => dispatch(frameWorkPrice('kajabi'))} className='mb-2 text-start' body><span className='fw-bold'>Kajabi</span> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, similique?</Card>



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