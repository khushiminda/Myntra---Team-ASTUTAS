import React from "react";

import image1 from '../assets/Screenshot 2024-07-11 131845.png'
import image2 from '../assets/Screenshot 2024-07-11 131901.png'
import image3 from '../assets/Screenshot 2024-07-11 132048.png'
import { Typography } from "@mui/material";
const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'High Return Rates Due to Fit Issues',
            image: image1,
            description: 'Current training lacks realistic,immersive scenarios, limiting hands-on experience and preparedness for real-world situations.',
            url:"https://www.instagram.com/ar/1654809875352016/?ch=MWMxZDE1Y2M0OTQzZDkyMjFmOGY1ZmM0NGI1YTRkODc%3D"
        },
        {
            id: 2,
            title: 'Low User Engagement and Habitual Visits',
            image: image2,
            description: 'Myntra struggles to maintain high user engagement andfrequent visits, especially among Gen Z. In a competitivemarket, it Trend. Swipe. Shop. Repeat',
            url:"https://www.instagram.com/ar/1654809875352016/?ch=MWMxZDE1Y2M0OTQzZDkyMjFmOGY1ZmM0NGI1YTRkODc%3D"
        },
        {
            id: 3,
            title: 'Seamless and Integrated Shopping Experience',
            image: image3,
            description: 'Effortless Shopping, Streamlined Journey, Boosted Conversions, Precision Fit, Confidence in Choices.',
            url:"https://www.instagram.com/ar/1654809875352016/?ch=MWMxZDE1Y2M0OTQzZDkyMjFmOGY1ZmM0NGI1YTRkODc%3D"
        },
        // Add more scenarios as needed
    ];
    return (
        <div>
            <div>
                <div className="bg-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-pink-600">Instagram Filters</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[20%]">
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img src={scenario.image} alt={scenario.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                                <Typography component="a" href={scenario.url} target="_blank" rel="noopener noreferrer" sx={{ display: "block", color: "blue", wordWrap: "break-word", mb: 2 }}>
                                        {scenario.url}
                              </Typography>
                                <p className="text-gray-600">{scenario.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
        ;
};

export default Arlearning;
