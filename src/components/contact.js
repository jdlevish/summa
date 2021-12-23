import React from 'react'
import { Button } from 'react-bootstrap'

export default function contact() {
    return (
        <div className=' text-center pt-3  cardBg contact'>
            <div className='row'>
                <div className='col text-align-center'>
                    <h2> Contact Us! </h2>

                    <p> To learn more about our services get in touch with us below </p>
                </div>
            </div>
            <div className=' pb-5'>
                <form className='row'>
                    <div className=' col pb-2'>
                        <label>Name : </label>

                        <input type='text' className='conForm ' >
                        </input>
                    </div>
                    <div className=' col pb-2'>
                        <label>E-mail: </label>

                        <input type='email' className='conForm ' >
                        </input>
                    </div>
                    <div className='col pb-2'>

                        <label>Phone: </label>

                        <input type='phone' className='conForm ' >
                        </input>
                    </div>
                    <div className='row pt-4'>
                        <div className='col pb-2'>
                            <Button variant="outline-dark" type='submit'>
                                Submit
                            </Button>
                        </div>
                    </div>






                </form>
            </div>


        </div  >
    )
}
