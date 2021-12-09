import React from 'react'
import { Container } from 'react-bootstrap'
const typog = { fontSize: '1.5rem' }

export default function intro() {
    return (



        <div style={typog} className="pt-1 pb-1 border-0 rounded cardBg shadow">
            <div className="text-center ">
                <h2>"We stand for the highest standards"</h2>
            </div>
            <ul className='pt-5'>
                <li>Summa Standards is equipped with industry leading professional consultants.Our team is here to help fully consult on any size or scaled project.We offer turnkey facility designs, cultivation room design, and on-site project consultation.Along with superior service capabilities, our commercial team is here to increase yields, lower production costs, and generally increase the efficiency of any commercial cultivation facility.</li>
                <li>Our team is comprised of individuals that provide a unique set of skills and expertise to all our clients.Our team has over 35 years of growing experience and knowledge.Together, this team has worked on over 150 thousand square feet of cultivation space, and it continues to increase each day.</li>
                <li>At Summa Standards, we are proud to be a team of growing professionals and enthusiasts, committed to sharing our passion with others in our community.</li>
            </ul>
        </div>


    )
}

