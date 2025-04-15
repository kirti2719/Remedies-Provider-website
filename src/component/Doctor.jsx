import React, { useState } from 'react';
import './Doctor.css';
import doc1 from '../Imagedoctor/doc1.jpeg';
import doc2 from '../Imagedoctor/doc2.jpeg';
import doc3 from '../Imagedoctor/doc3.jpeg';
import doc4 from '../Imagedoctor/doc4.webp';
import doc5 from '../Imagedoctor/doc5.jpg';
import doc6 from '../Imagedoctor/doc6.avif';
import doc7 from '../Imagedoctor/doc7.jpeg';
import doc8 from '../Imagedoctor/doc8.jpg';
import docfront from '../Imagedoctor/docfront.avif';

import Ent from '../Imagedoctor/Ent.svg';
import cataract from '../Imagedoctor/cataract.svg';
import hair from '../Imagedoctor/hair.svg';
import knee from '../Imagedoctor/knee.svg';
import lasik from '../Imagedoctor/lasik.svg';
import lipomo from '../Imagedoctor/lipomo.svg';
import ortho from '../Imagedoctor/ortho.svg';
import varicose from '../Imagedoctor/varicose.svg';

const doctors = [
    { id: 1, name: "Dr. Arjun Mehta", specialty: "ENT", img: doc1, phone: "+91 98765 43210", details: "Expert in ear, nose, and throat treatments with 10+ years of experience." },
    { id: 2, name: "Dr. Priya Sharma", specialty: "Cataract", img: doc2, phone: "+91 88976 54321", details: "Senior ophthalmologist specializing in cataract surgery." },
    { id: 3, name: "Dr. Ramesh Iyer", specialty: "Hair", img: doc3, phone: "+91 99887 76543", details: "Renowned dermatologist for hair restoration and treatments." },
    { id: 4, name: "Dr. Sanjay Kapoor", specialty: "Knee", img: doc4, phone: "+91 87654 32109", details: "Orthopedic surgeon specialized in knee replacements." },
    { id: 5, name: "Dr. Aditi Verma", specialty: "Lasik", img: doc5, phone: "+91 96543 21098", details: "Expert in laser vision correction (LASIK & PRK procedures)." },
    { id: 6, name: "Dr. Neha Rajan", specialty: "Lipomo", img: doc6, phone: "+91 99876 54321", details: "Specialist in lipoma and minor skin surgeries." },
    { id: 7, name: "Dr. Veera Joshi", specialty: "Ortho", img: doc7, phone: "+91 97865 43210", details: "Senior orthopedic doctor for fractures and joint issues." },
    { id: 8, name: "Dr. Meera Nair", specialty: "Varicose", img: doc8, phone: "+91 88765 43210", details: "Varicose vein specialist with advanced laser treatments." }
];

const specialties = [
    { name: "ENT", icon: Ent },
    { name: "Cataract", icon: cataract },
    { name: "Hair", icon: hair },
    { name: "Knee", icon: knee },
    { name: "Lasik", icon: lasik },
    { name: "Lipomo", icon: lipomo },
    { name: "Ortho", icon: ortho },
    { name: "Varicose", icon: varicose }
];

export default function Doctor() {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const filteredDoctors = selectedSpecialty
        ? doctors.filter(doc => doc.specialty === selectedSpecialty)
        : doctors;

    return (
        <div className='spec-section'>
          <div className="front-section">
    <div className="front-content">
        <h2 className="shine-text">Consult with a Specialist Doctor</h2>
        <p>Find the best doctors based on your needs and get expert medical consultation.</p>
    </div>
    <div className="front-image">
        <img src={docfront} alt="Doctor Consultation" />
    </div>
</div>

            {/* Continuous Scrolling Specialties */}
            <div className="specialty-slider">
                <div className="slider-track">
                    {specialties.concat(specialties).map((spec, index) => (
                        <img
                            key={index}
                            src={spec.icon}
                            alt={spec.name}
                            className={`specialty-icon ${selectedSpecialty === spec.name ? 'active' : ''}`}
                            onClick={() => setSelectedSpecialty(spec.name)}
                        />
                    ))}
                </div>
            </div>

            {/* Doctors List */}
            <div className="doctors-list">
                {filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="doctor-card">
                        <img src={doctor.img} alt={doctor.name} />
                        <h4>{doctor.name}</h4>
                        <p><strong>Specialty:</strong> {doctor.specialty}</p>
                        <p><strong>Phone:</strong> {doctor.phone}</p>
                        <p className="doctor-details">{doctor.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
