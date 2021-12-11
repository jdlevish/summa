import React from 'react'
const typog = { fontSize: '1rem' }
const typog2 = { fontSize: '2rem' }

export default function Pest() {
    return (
        <div className="pt-5 border-0 rounded cardBg shadow">
            <h2 style={typog2} className='padding'>Integrated Pest Management </h2>
            <ul style={typog}>
                <li> Pest identification</li>
                <li>Proper application specified for identifying insects, viruses and nutrient deficiencies within the plant.</li>
                <li>Weekly applications </li>
                <li>Our team will provide you with the best IPM that works with each state’s regulations in order to keep your garden clean.</li>

            </ul>

        </div>
    )
}
