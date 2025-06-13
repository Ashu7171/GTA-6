import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { motion } from "framer-motion";


const App = () => {
  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate:10,
      duration: 2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",
    })
    .to(".vi-mask-group", {
      scale:10,
      duration: 2,
      delay: -1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity: 0,
      onUpdate: function() {
        if(this.progress() >= 0.9) {
          document.querySelector('.svg').remove();
          setShowContent(true)
          this.kill()
        }
      }
    })
  })

  useGSAP(() => {
    if(!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -1
    })
    
    gsap.to(".clouds", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8
    })

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8
    })

    gsap.to(".text", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8
    })

    gsap.to(".chars", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: -0.8,
      x: "-50%",
      bottom: "-30%",
    })

    const main = document.querySelector('.main');

    main?.addEventListener("mousemove",function(e) {
      const xMove = (e.clientX/window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 1.7}%` //0.4
      })

      gsap.to(".clouds", {
        x: xMove
      })

      gsap.to(".bg", {
        x: -xMove*2 //1.7
      })
  })
},[showContent])

  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
    </div>
    {showContent && 
      <div className="main w-full rotate-0 sm:rotate-[-10deg] scale-100 sm:scale-[1.7]">
        <div className="landing overflow-hidden relative w-full min-h-screen bg-black">
          <div className="navbar absolute top-0 left-0 w-full py-4 px-4 sm:py-8 sm:px-8 z-[10]">
            <div className="logo flex gap-3 sm:gap-5 items-center">
              <div className='lines flex flex-col gap-1'>
                <div className='line w-10 h-1 bg-white'></div>
                <div className='line w-7.5 h-1 bg-white'></div>
                <div className='line w-5 h-1 bg-white'></div>
              </div>
              <h3 className="text-white leading-none -mt-1 sm:-mt-2 text-2xl sm:text-4xl">VI</h3>
            </div>
          </div>
          <div className='imagesdiv relative overflow-hidden w-full h-screen'>
            <img className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-[1.7] rotate-[-5deg] clouds"src="./clouds.png"  />
            <img className="absolute inset-0 w-full h-full object-cover scale-105 sm:scale-[1.4] rotate-[-5deg] bg" src="./bg.png" />
            <div className='text absolute scale-[1.8] rotate-[-10deg] flex flex-col top-10 left-1/2 -translate-x-1/2'>
              <h1 className='text-8xl text-white font-pricedown leading-none -ml-35'>grand</h1>
              <h1 className='text-8xl text-white font-pricedown leading-none -ml-20'>theft</h1>
              <h1 className='text-8xl text-white font-pricedown leading-none -ml-22'>auto</h1>
            </div>
            <img className='absolute chars -bottom-[170%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] h-full' src="./chars.png" />
          </div>
          <div className='btmbar w-full px-10 py-15 absolute bottom-0 left-0 z-[10] bg-gradient-to-t from-black to-transparent'>
          </div>
        </div> 
        <div className="w-full bg-black overflow-hidden">
          <div className="div1 relative w-full h-full">
            <img className=" object-cover" src="./div1.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-1/3 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text ">LUCIA</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text" >CAMINOS</motion.h1>
              <br />
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-pink-500 mb-6">
                Lucia’s father taught her to fight <br />as soon as she could walk.
              </motion.h3>
            </div>

            {/* ✅ Right name */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 z-20 text-white text-right">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">JASON</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">DUVAL</motion.h1>
              <br />
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-blue-700 mb-6">
              Jason wants an easy life, <br />but things just keep getting harder
              </motion.h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div2 relative w-full h-full">
            <img className=" object-contain" src="./div2.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-1/5 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text drop-shadow-lg">CAL</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">HAMPTON</motion.h1>
            </div>

            {/* ✅ Right name */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 z-20 text-right">
              <br />
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-yellow-300 mb-6">
              Cal feels safest snooping on <br />Coast Guard comms with a few beers<br />and some private browser tabs open.
              </motion.h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div3 relative w-full h-full">
            <img className=" object-cover" src="./div3.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} className="text-4xl text-orange-500 mb-6">
                A local vice city legend built <br /> a legitimate empire spanning real <br /> estate, a strip club and <br />a recording studio.
              </motion.h3>
            </div>

            {/* ✅ Right name */}
            <div className="absolute top-1/3 right-10 -translate-y-1/2 z-20 text-white text-right">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">BOOBIE</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">IKE</motion.h1>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div4 relative w-full h-full">
            <img className=" object-cover" src="./div4.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-3/5 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">DRE'QUAN</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">PRIEST</motion.h1>
              <br />
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-black mb-6">
                Dre'Quan was always more of <br />a hustler than a gangster.
              </motion.h3>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div5 relative w-full h-full">
            <img className=" object-cover" src="./div5.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-2/3 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-amber-300 drop-shadow-lg mb-6">
                Bae-Luxe and Roxy aka Real Dimez ,<br /> keep their hard cash via <br />spicy rap tracks and <br />relentless social media presence.
              </motion.h3>
            </div>

            {/* ✅ Right name */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 z-20 text-white text-right">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">REAL</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">DIMEZ</motion.h1>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div6 relative w-full h-full">
            <img className=" object-cover" src="./div6.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-1/3 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">RAUL</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">BAUTISTA</motion.h1>
              <br />
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} 
              className="text-4xl text-blue-600 mb-6">
                Raul's a seasoned bank robber <br />always on the hunt for talent ready to <br />take risks that bring the biggest rewards.
              </motion.h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className="div7 relative w-full h-full">
            <img className=" object-cover" src="./div7.jpg" alt="" />
            {/* ✅ Left name */}
            <div className="absolute top-1/3 left-10 -translate-y-1/2 z-20 text-white text-left">
              <motion.h3 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 ,delay:0.8}}
              style={{ fontFamily: "'Anton', sans-serif" }} className="text-4xl text-pink-500 drop-shadow-lg mb-6">
                Brian's a classic drug runner from <br />the golden age of smuggling in the Keys.
              </motion.h3>
            </div>

            {/* ✅ Right name */}
            <div className="absolute top-1/3 right-10 -translate-y-1/2 z-20 text-white text-right">
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.4}}
              className="text-9xl gradient-text">BRIAN</motion.h1>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 ,delay:0.6}}
              className="text-9xl gradient-text">HEDER</motion.h1>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          </div>
          <div className='div8 flex flex-col items-center justify-center relative w-full bg-black mt-10 mb-10'>
            <img className='scale-[0.8]' src="./gta6.png" alt="" />
            <motion.h3 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 ,delay:0.4}}
            style={{ fontFamily: "'Anton', sans-serif" }} 
            className="text-7xl text-white mb-10">
                COMING MAY 26 2026 <br /> 
            </motion.h3>       
            <img src="./ps5.png" alt="" />
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default App