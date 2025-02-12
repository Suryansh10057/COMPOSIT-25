import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/animate.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import React, { useState, useEffect, useRef } from 'react';
import AppRouter from './Routes';
import Preloader from './components/Shared/Preloader';
import Orb from './components/Animations/Particle';
import ParticlesBackground from './components/Animations/WebBackground';
const App = () => {
    const [phase, setPhase] = useState("enter"); // "enter", "video", "content"
    const videoRef = useRef(null);
    // const audioRef = useRef(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const demoAsyncCall = () => {
            return new Promise((resolve) => setTimeout(() => resolve(), 2000));
        };
        demoAsyncCall().then(() => setLoading(false));
    }, []); 


    const handleEnterClick = () => {
      setPhase("video"); // Switch to video phase
      if (videoRef.current ) {
          videoRef.current.play(); 
       
      }
  };




    const handleVideoEnd = () => {
      setPhase("content"); // Switch to main app content after video ends
    
  };
    const handleSkipClick = () => {
      setPhase("content"); // Skip video and switch to main app content
    //
  };


    return (
        <>
            {phase === "enter" && (
               
                <>
                <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <ParticlesBackground /> */}
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0.6}
                        forceHoverState={true}
                    />
                     <p
                    onClick={handleEnterClick}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    className='enter-btn'
                    >
                    Enter
                </p>
</div>
</>
            )}

            {phase === "video" && (
                <div style={{ position: "relative", width: "100%", height: "100vh" }}>
                    <video
                        ref={videoRef}
                        src="/composit.mp4" // Replace with your video file path
                        onEnded={handleVideoEnd}
                        style={{
                            width: "100%",
                            height: "100vh",
                            objectFit: "cover",
                            position: "absolute",
                            top: "0",
                            left: "0",
                        }}
                        autoPlay
                    />

                    <button
                        onClick={handleSkipClick}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#f00",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Skip
                    </button>
                </div>
            )}

            {phase === "content" && (
                <React.Fragment>
                    <AppRouter />
                    {loading && <Preloader />}
                </React.Fragment>
            )}
        </>
    );
};

export default App;
