import React from "react";
import FullPageImage from "../assets/mainphoto.png"

const Dashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-pink-100 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-pink-600">Myntra Hackerramp</h1>
                </div>
            </div>

            {/* Full-page image section */}
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${FullPageImage})`, // Use the imported image
                }}
            >
                {/* Optional: Add content overlay here */}
            </div>
        </div>
    );
}

export default Dashboard;
