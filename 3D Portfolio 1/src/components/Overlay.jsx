import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import '../index.css'
import { Scroll } from '@react-three/drei';
import gsap from 'gsap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaWhatsapp, FaMap, FaEnvelope } from 'react-icons/fa';

const Section = (props) => {

    return (
        <section
            className={`h-screen flex flex-col justify-center p-8 items-center ${props.right ? "md:items-end" : "md:items-start"
                }`}
            style={{
                opacity: props.opacity,
            }}
        >
            <div className="w-[95vw] md:w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white bg-opacity-30 rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );

}

export default function Overlay() {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 4));  // Opacity decreases as you scroll through the first 1/4
        setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4)); // Opacity increases smoothly (with easing) through the second 1/4
        setOpacityThirdSection(scroll.curve(2 / 4, 1 / 4));  // Opacity continues increasing smoothly through the third 1/4
        setOpacityLastSection(scroll.range(3 / 4, 1 / 4)); // Opacity decreases as you scroll through the last 1/4

    });


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>

            <Scroll html>
                <div className='w-screen'>
                    {/* Intro section */}
                    <Section opacity={opacityFirstSection}>
                        <div className='font-serif' >
                            <h1 className='  text-3xl md:text-4xl font-bold'>Hi <span className='wave'>👋</span></h1>
                            <h1 className='  text-3xl md:text-4xl font-bold my-2'>I'm Lorem</h1>
                            <p className='text-lg  '>Front Developer | Software Engineer</p>
                        </div>
                    </Section>

                    <Section right opacity={opacitySecondSection}>
                        <h1 className='text-4xl text-center  font-bold py-2'>My Skills</h1>
                        <div className="flex flex-wrap space-x-2 space-y-2 items-center" style={{ justifySelf: 'center' }}>

                            <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" alt="HTML" className='h-16 rounded-lg' />
                            <img src="https://img.icons8.com/fluent/512/css3.png" alt="" className='h-20 rounded-lg' />
                            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" className='h-20 rounded-lg' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="" className='h-16 rounded-lg' />
                            <img src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg" alt="" className='h-16 rounded-lg' />
                            <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" className='h-16 rounded-lg' />

                            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" className='h-16 rounded-lg' />
                            <img src="https://img.icons8.com/?size=512&id=40670&format=png" alt="" className='rounded-lg h-20' />


                        </div>

                    </Section>

                    {/* Projects section */}
                    <Section opacity={opacityThirdSection}>
                        <h1 className='text-4xl text-center  font-bold my-4'>Projects</h1>
                        <Slider {...settings}>
                            <div>
                                <img src="https://s3.amazonaws.com/creativetim_bucket/products/586/original/vision-ui-dashboard-pro-chakra.png?1641980193" alt="Project 1" className='w-full h-auto rounded-lg' />
                                <h2 className=' text-xl text-center mt-4'>Project 1</h2>
                                <p className=' text-center'>Description of Project 1</p>
                            </div>
                            <div>
                                <img src="https://cdn.hackr.io/uploads/posts/attachments/1678885374bshYKyqEUv.png" alt="Project 2" className='w-full h-auto rounded-lg' />
                                <h2 className=' text-xl text-center mt-4'>Project 2</h2>
                                <p className=' text-center'>Description of Project 2</p>
                            </div>
                            <div>
                                <img src="https://www.logicraysacademy.com/blog/wp-content/uploads/2023/03/rp7.jpg" alt="Project 3" className='w-full h-auto rounded-lg' />
                                <h2 className=' text-xl text-center mt-4'>Project 3</h2>
                                <p className=' text-center'>Description of Project 3</p>
                            </div>
                        </Slider>
                    </Section>
                    <Section right opacity={opacityLastSection}>
                    <h1 className='text-4xl text-center  font-bold my-4'>Contact Me</h1>
                        <div className='flex flex-col flex-wrap items-start justify-center space-y-2'>
                            <div className="flex items-center space-x-4 cursor-pointer "><FaWhatsapp className='text-3xl cursor-pointer'/> <a href="wa.me/+000000000"  target='_blank' className='cursor-pointer hover:underline'>+000000000</a></div>
                            <div className="flex items-center space-x-4 cursor-pointer "><FaEnvelope className='text-3xl cursor-pointer'/> <a href="mailto:loremispum@gmail.com" target='_blank' className='cursor-pointer hover:underline'>loremispum@gmail.com</a></div>
                            <div className="flex items-center space-x-4 cursor-pointer "><FaMap className='text-3xl cursor-pointer'/> <a href="https://humais-ali.vercel.app" target='_blank' className='cursor-pointer hover:underline'>Islamabad Pakistan</a></div>


                        </div>
                    </Section>
                </div>
            </Scroll>
        </>
    )
}
