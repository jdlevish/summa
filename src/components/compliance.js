import React from 'react'
import { Container } from 'react-bootstrap'

export default function compliance() {
    const typog = { fontSize: '1.5rem' }
    const typog2 = { fontSize: '2rem' }
    return (
        <div className=" pt-5  pb-5 border-0 rounded   shadow cardBg">

            <h2 style={typog2}>Metrc & Code Compliance Management</h2>
            <ul style={typog}>
                <li>Metrc compliant track and trace protocols </li>
                <li>Department of Pest Regulations</li>
            </ul>


        </div>
    )
}
