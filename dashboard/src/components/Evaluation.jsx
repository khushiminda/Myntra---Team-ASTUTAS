import React from "react";

import image1 from '../assets/WhatsApp Image 2024-07-14 at 18.08.36.jpeg'
import image2 from '../assets/WhatsApp Image 2024-07-14 at 19.27.16.jpeg'
import image3 from '../assets/WhatsApp Image 2024-07-14 at 21.39.50.jpeg'
import { Typography } from "@mui/material";
const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'Trendy Glasses Try on Filter',
            image: image1,
            
            url:"https://www.instagram.com/ar/1654809875352016/?ch=MWMxZDE1Y2M0OTQzZDkyMjFmOGY1ZmM0NGI1YTRkODc%3D"
        },
        {
            id: 2,
            title: 'Grey Tennis Cap',
            image: image2,
            
            url:"https://www.instagram.com/ar/466233219479972/?ch=YjQ5NDhhNTZmZmZhODY0NThkNTkxZGM3YTJlZjM5MGI%3D"
        },
        {
            id: 3,
            title: ' Blue Swinging Counch',
            image: image3,
            
            url:"https://www.instagram.com/ar/1654809875352016/?ch=MWMxZDE1Y2M0OTQzZDkyMjFmOGY1ZmM0NGI1YTRkODc%3D"
        },
        // Add more scenarios as needed
    ];
    return (
        <div>
            <div>
                <div className="bg-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-6xl font-bold text-pink-600">Myntra Filters</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[20%]">
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className="bg-pink-200 p-6 rounded-lg shadow-md">
                                <img src={scenario.image} alt={scenario.title} className="w-full h-95 object-cover mb-4 rounded-md" />
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
