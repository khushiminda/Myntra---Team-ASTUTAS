import React from "react";
import image1 from '../assets/Screenshot 2024-07-11 131845.png';
import image2 from '../assets/Screenshot 2024-07-11 131901.png';
import image3 from '../assets/Screenshot 2024-07-11 132048.png';

const Dashboard= () => {
    const scenarios = [
        {
            id: 1,
            title: 'High Return Rates Due to Fit Issues',
            image: image1,
            description: 'Current training lacks realistic, immersive scenarios, limiting hands-on experience and preparedness for real-world situations.',
        },
        {
            id: 2,
            title: 'Low User Engagement and Habitual Visits',
            image: image2,
            description: 'Myntra struggles to maintain high user engagement and frequent visits, especially among Gen Z. In a competitive market, it is crucial to enhance user engagement and provide a seamless shopping experience.',
        },
        {
            id: 3,
            title: 'Seamless and Integrated Shopping Experience',
            image: image3,
            description: 'Effortless shopping, streamlined journey, boosted conversions, precision fit, and confidence in choices are key to a successful shopping experience.',
        },
    ];

    return (
        <div className="bg-gray-50">
            <div className="bg-pink-100 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-pink-600">Myntra Hackerramp </h1>
                </div>

               
            </div>

          

        </div>
    );
}

export default Dashboard;
