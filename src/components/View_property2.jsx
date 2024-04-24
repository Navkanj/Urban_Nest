import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import house1 from './img/1-1.jpg';
import house2 from './img/1-2.jpg';
import house3 from './img/1-3.jpg';
import house4 from './img/1-4.jpg';
import house5 from './img/1-5.jpg';

const View_property2 = () => {
    document.title = "View Property";

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const houseImages = [house1, house2, house3, house4, house5];

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % houseImages.length;
        setCurrentImageIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 + houseImages.length) % houseImages.length;
        setCurrentImageIndex(prevIndex);
    };

    const [showAlert, setShowAlert] = useState(false);
    const handleSaveProperty = (e) => {
        e.preventDefault();
        setShowAlert(true); 
    };

    return (
        <>
            <Nav />

            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src={houseImages[currentImageIndex]} alt="" />
                        </div>
                        <div className="small-images">
                            {houseImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`House ${index + 1}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                        <button className="prev-btn" onClick={prevImage}>&lt;</button>
                        <button className="next-btn" onClick={nextImage}>&gt;</button>
                    </div>
                    <h3 className="name">Modern Flats and Apartments</h3>
                    <p className="location"><i className="fas fa-map-marker-alt"></i><span>Delhi, India</span></p>
                    <div className="info">
                        <p><i className="fas fa-tag"></i><span>22.5 lac</span></p>
                        <p><i className="fas fa-user"></i><span>Rahul (owner)</span></p>
                        <p><i className="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
                        <p><i className="fas fa-building"></i><span>Flat</span></p>
                        <p><i className="fas fa-house"></i><span>Sale</span></p>
                        <p><i className="fas fa-calendar"></i><span>10-01-2023</span></p>
                    </div>
                    <h3 className="title">Details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Rooms :</i><span>4 BHK</span></p>
                            <p><i>Deposit amount :</i><span>0</span></p>
                            <p><i>Status :</i><span>Ready to move</span></p>
                            <p><i>Bedroom :</i><span>4</span></p>
                            <p><i>Bathroom :</i><span>5</span></p>
                            <p><i>Balcony :</i><span>3</span></p>
                        </div>
                        <div className="box">
                            <p><i>Carpet area :</i><span>1100 sqft</span></p>
                            <p><i>Age :</i><span>3 years</span></p>
                            <p><i>Room floor :</i><span>3</span></p>
                            <p><i>Total floors :</i><span>22</span></p>
                            <p><i>Furnished :</i><span>Semi-furnished</span></p>
                            <p><i>Loan :</i><span>Available</span></p>
                        </div>
                    </div>
                    <h3 className="title">Amenities</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Lifts</span></p>
                            <p><i className="fas fa-check"></i><span>Security guards</span></p>
                            <p><i className="fas fa-times"></i><span>Playground</span></p>
                            <p><i className="fas fa-check"></i><span>Gardens</span></p>
                            <p><i className="fas fa-check"></i><span>Water supply</span></p>
                            <p><i className="fas fa-check"></i><span>Power backup</span></p>
                        </div>
                        <div className="box">
                            <p><i className="fas fa-check"></i><span>Parking area</span></p>
                            <p><i className="fas fa-times"></i><span>Gym</span></p>
                            <p><i className="fas fa-check"></i><span>Shopping mall</span></p>
                            <p><i className="fas fa-check"></i><span>Hospital</span></p>
                            <p><i className="fas fa-check"></i><span>Schools</span></p>
                            <p><i className="fas fa-check"></i><span>Market area</span></p>
                        </div>
                    </div>
                    <h3 className="title">Description</h3>
                    <p className="description">It is a very budget-friendly apartment you will get.</p>
                    <form onSubmit={handleSaveProperty}>
                        <input type="submit" value="Save Property" name="save" className="inline-btn" />
                    </form>
                    
                    {showAlert && (
                        <div className="custom-alert">
                            <p>Property has been saved!</p>
                            <button onClick={() => setShowAlert(false)}>Close</button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default View_property2;
