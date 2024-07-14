import React from "react";
import mgcms from "../assets/blue_dress.glb"
import hamzatyellow from "../assets/yellow_dress.glb"
import dgc from "../assets/surfing_swimsuit_low-poly.glb"
import dosi from "../assets/open_puffer_jacket.glb"
import geig from "../assets/dior_bolso_saddle_con_bandolera_rojo.glb"
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
        },
        {
            id: 2,
            title: 'Low User Engagement and Habitual Visits',
            image: image2,
            description: 'Myntra struggles to maintain high user engagement andfrequent visits, especially among Gen Z. In a competitivemarket, it Trend. Swipe. Shop. Repeat',
        },
        {
            id: 3,
            title: 'Seamless and Integrated Shopping Experience',
            image: image3,
            description: 'Effortless Shopping, Streamlined Journey, Boosted Conversions, Precision Fit, Confidence in Choices.',
        },
        // Add more scenarios as needed
    ];
    return (
        <div>
            <div>
                <div className="bg-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">Personalization, Categorization & Engagement</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-[0px] sm:ml-[20%]">
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img src={scenario.image} alt={scenario.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                                <p className="text-gray-600">{scenario.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" md:ml-[20%]">
                <h1 className="mt-5 text-3xl text-center font-bold">
                    <Typography variant="bold">AR TRY ONS Visualization</Typography>
                </h1>
                <div className='flex md:flex-row flex-col flex-wrap '>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px] rounded-lg" data-aos="fade-up" date-aos-delay="200">
                        <div className="row text-base">
                            <div className="flex flex-col rounded-full ">
                                <div className="icon-box">
                                    <h4 className=" font-bold tracking-widest text-lg mt-10 mb-5">RARE BLUE HOT DRESS</h4>
                                    <p className="description bg-zinc-700 text-white  rounded-lg p-4"> RARE
                                    Halter Neck Twisted Tiered Midi Dress.
                                    100% Original Products
                                    Pay on delivery might be available
                                    Easy 14 days returns and exchanges
                                    
                                    </p>
                                    
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Forever 21's blue fancy short dress is the perfect blend of fun and elegance.</li>
                                        <li> Made from a premium blend of polyester and spandex, this dress features a flattering fit and flare silhouette.</li>
                                        <li>Size: Available in XS, S, M, L, XL</li>
                                        <li>Price: ₹3,499</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='block my-3 '>
                                <model-viewer
                                    src={mgcms}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#Ffc0cb',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>


                            </div>

                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px] rounded-lg" data-aos="fade-up" date-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">AND
                                    Yellow Self Design Tie-Up Neck Fit & Flare Dress</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    100% Original Products Pay on delivery might be available
                                    Easy 14 days returns and exchanges
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">YELLOW FLARRED SLEEVES</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Yellowself design fit & flare dress</li>
                                        <li>Short, flared sleeves. Above knee length in flared hem.</li>
                                        <li>₹749 Price Details Maximum Retail PriceRs. 2499 (Incl. of all taxes) Discount70% OFF Selling PriceRs. 749 (Incl. of all taxes) MRP₹2499(70% OFF).</li>
                                        <li>Coupon Discount: Rs. 141 off (check cart for final savings)</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "

                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#Ffc0cb',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={hamzatyellow}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px] rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">BLACK Swimsuit</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    Brand: Speedo Type: Classic Swimsuit Color: Black Size: Available in XS, S, M, L, XL Price: ₹3,999 Fit Style: Slim Fit
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">Specifications</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Speedo's classic black swimsuit is designed for both performance and style. Made from high-quality, chlorine-resistant fabric, this swimsuit offers a sleek and streamlined fit.</li>
                                        <li>It features a scoop neckline and moderate cut legs for optimal comfort and movement, making it ideal for both competitive swimming and casual pool days. </li>
                                        <li>The minimalist design ensures you look effortlessly chic while enjoying your swim.</li>
                                        <li>Classic Swimsuit</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#Ffc0cb',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dgc}
                                    alt="Digital Geiger Counter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px] rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">DIOR Handbag</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    This luxurious red handbag from Dior epitomizes elegance and sophistication. Crafted from premium calfskin leather, it features a smooth finish with the iconic Dior logo embossed in gold-tone hardware. 
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">Key Features</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Brand: Dior</li>
                                        <li>Type: Luxurious Handbag</li>
                                        <li>Size: One Size</li>
                                        <li>Fit Style: Elegant and Sophisticated</li>
                                        <li>The bag includes a top handle and a detachable shoulder strap, providing versatile styling options. </li>
                                        <li>The interior is spacious with multiple compartments. This timeless piece adds a touch of luxury to any outfit, making it a must-have accessory for any fashion-forward individual.</li>

                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#Ffc0cb',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={geig}
                                    alt="Digital Geiger Counter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[1000px] rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg"> Open Puffer Jacket The North Face</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    he North Face's black open puffer jacket is designed for ultimate comfort and warmth. 
                                    </p>
                                    <h4 className="font-bold tracking-widest mt-5 text-lg">Key Features of the Digital Dosimeter</h4>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>Color: Black.</li>
                                        <li>Size: Available in XS, S, M, L, XL</li>
                                        <li>Price: ₹12,999</li>
                                        <li>The jacket includes two spacious side pockets and a high collar to protect against the cold</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#Ffc0cb',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dosi}
                                    alt="Digital Dosimeter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>



                </div>

                {/* <a class="flex justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div id="card" className='flex justify-center m-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'>
      <model-viewer src="mgcms.glb"
      ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
      poster="logo.png"
      alt="mgcms"
      shadow-intensity="1"
      camera-controls
      auto-rotate ar>
          </model-viewer>
          
      </div>
      
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AR Military Grade Mobile Gas Chromatography</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.</p>
      </div>
    </a> */}
    <br /><br />
            </div>
        </div>
    )
        ;
};

export default Arlearning;
