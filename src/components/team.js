import React from 'react'
import Damian from '../images/damian.jpg'
import Tom from '../images/Tom.jpg'
import Linked from '../images/li.png'

export default function Team() {
    return (
        <div className="">
            <div data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className='row   border-0    pt-3 pb-3 m-0 shadow cardBg '>
                <div className='col-md-6 col-sm-12 pt-5  pb-5 d-flex justify-content-center'>
                    <img className='flex-left rounded shadow img' src={Tom}></img>
                </div>

                <div className='col-md-6 col-sm-12   pt-5 pb-5'>
                    <h2>Thomas Meade</h2>
                    <h3>Managing Partner/Co-Founder</h3>
                    <ul>
                        <li>16 years experience in the cannabis industry</li>
                        <li>Thomas’s vast experience, allows him to confidently consult in, facility designs, lighting, table layout, facility workflow, building management systems, advising on cultivation techniques, properly forecasting budget needs, and managing a team of knowledgeable staff.</li>
                        <li>Thomas has worked with over 150 thousand square feet of cultivation space</li>

                    </ul>
                    <span>
                        <a href='https://www.linkedin.com/in/tom-meade-667b33154/'><img className='socialIcons' src={Linked} ></img></a>
                    </span>
                </div>


                <br />
            </div>
            <div className="pt-3">

                <div data-sal='zoom-in' data-sal-delay="3000" data-sal-easing="ease" className='row border-0   p-3 m-0 shadow cardBg'>
                    <div className='col-md-6 col-sm-12 pt-5 pb-5 d-flex justify-content-center'>
                        <img className='flex-left rounded shadow img' src={Damian}></img>
                    </div>
                    <div className='col-md-6 col-sm-12  d-flex align-items-center pt-5 pb-5'>
                        <div>

                            <h2>Damian Shroyer</h2>
                            <h3>Partner/Co-Founder</h3>
                            <ul >
                                <li>Over 20 years experience in cannabis cultivation and construction</li>
                                <li>He specializes in grow room design, layout and operations, construction design from ground up to TI, IPM/vector and nutrient identification issues, genetic selection and breeding programs. And all aspects of cultivation, from seed/clone to harvest.</li>


                                <li>Damian’s plant knowledge and construction experience has made him a force to be reckoned with in the cannabis industry. </li>

                            </ul>
                            <span>
                                <a href='https://www.linkedin.com/in/damian-shroyer-5153a0b7/'><img className='socialIcons' src={Linked} ></img></a>
                            </span>
                        </div>

                    </div>

                </div>
            </div>

        </div >
    )
}
