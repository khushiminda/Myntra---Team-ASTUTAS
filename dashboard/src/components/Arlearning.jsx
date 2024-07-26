import React from "react";
import mgcms from "../assets/blue_dress.glb";
import hamzatyellow from "../assets/yellow_dress.glb";
import dgc from "../assets/surfing_swimsuit_low-poly.glb";
import dosi from "../assets/open_puffer_jacket.glb";
import geig from "../assets/dior_bolso_saddle_con_bandolera_rojo.glb";
import image1 from '../assets/Screenshot 2024-07-11 131845.png';
import image2 from '../assets/Screenshot 2024-07-11 131901.png';
import image3 from '../assets/Screenshot 2024-07-11 132048.png';

const Arlearning = () => {
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
                    <h1 className="text-5xl font-bold text-pink-600">Personalization, Categorization & Engagement</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[15%]">
                    {scenarios.map((scenario) => (
                        <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={scenario.image} alt={scenario.title} className="w-full h-50  mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                            <p className="text-gray-600">{scenario.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-8">
                <h1 className="mt-5 text-5xl font-bold text-pink-600">AR Try Ons Visualization</h1>
            </div>

            <div className="flex flex-wrap justify-center px-8 ml-[0px] sm:ml-[10%]">
                {/* Section 1 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">Rare Blue Hot Dress</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                        RARE Halter Neck Twisted Tiered Midi Dress. 100% Original Products, Pay on delivery might be available, Easy 14 days returns and exchanges.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Forever 21's blue fancy short dress is the perfect blend of fun and elegance.</li>
                        <li>Made from a premium blend of polyester and spandex, this dress features a flattering fit and flare silhouette.</li>
                        <li>Size: Available in XS, S, M, L, XL</li>
                        <li>Price: ₹3,499</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={mgcms}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="mgcms"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">AND Yellow Self Design Tie-Up Neck Fit & Flare Dress</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                        100% Original Products. Pay on delivery might be available. Easy 14 days returns and exchanges.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Yellow self design fit & flare dress</li>
                        <li>Short, flared sleeves. Above knee length in flared hem.</li>
                        <li>₹749 (Maximum Retail Price: ₹2499)</li>
                        <li>Coupon Discount: ₹141 off (check cart for final savings)</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={hamzatyellow}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="hamzatyellow"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">BLACK Swimsuit</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                        Brand: Speedo. Type: Classic Swimsuit. Color: Black. Size: Available in XS, S, M, L, XL. Price: ₹3,999. Fit Style: Slim Fit.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Speedo's classic black swimsuit is designed for both performance and style.</li>
                        <li>Made from high-quality, chlorine-resistant fabric, this swimsuit offers a sleek and streamlined fit.</li>
                        
                        <li>Minimalist design ensures you look effortlessly chic while enjoying your swim.</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={dgc}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            alt="Digital Geiger Counter"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="max-w-md bg-white shadow-md m-5 p-5 rounded-lg transition-transform transform hover:scale-105">
                    <h4 className="text-2xl font-bold tracking-wide mt-5 mb-4 text-pink-600">DIOR Handbag</h4>
                    <p className="description bg-gray-100 text-gray-700 rounded-lg p-4 mb-4">
                        This luxurious red handbag from Dior epitomizes elegance and sophistication. Crafted from premium calfskin leather, it features a smooth finish with the iconic Dior logo embossed in gold-tone hardware. The spacious interior is lined with fine suede, offering ample space for your essentials.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Style: Crossbody</li>
                        <li>Color: Red</li>
                        <li>Material: Calfskin Leather</li>
                        <li>Price: ₹1,49,999</li>
                    </ul>
                    <div id="card" className="my-3">
                        <model-viewer
                            src={geig}
                            style={{ width: '100%', height: '400px', backgroundColor: '#Ffc0cb', '--poster-color': '#ffffff00' }}
                            ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                            poster="logo.png"
                            alt="geig"
                            shadow-intensity="1"
                            camera-controls
                            auto-rotate
                            ar
                        ></model-viewer>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Arlearning;
