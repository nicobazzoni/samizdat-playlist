import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import About from "./components/About"
import Music from "./components/Music"
import Header from "./components/Header"

const backgroundImages = [
  "url('https://storage.googleapis.com/nicoroc_audio/nicoroc%20(1).jpg')",
  "url('https://storage.googleapis.com/nicoroc_audio/tronred.jpeg')",
  "url('https://storage.googleapis.com/nicoroc_audio/1.jpg')",
  "url('https://storage.googleapis.com/nicoroc_audio/2.jpg')",
 
  // Add as many images as you like
];
 


export default function App() {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        setBgImage(backgroundImages[randomIndex]);
        setFade(true); // Fade-in the new image
      }, 1000); // Fade-out duration (1s)
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  
  
  return (
    
    <main      className="bg-repeat h-screen bg-center bg-[length:500px_500px]"
    style={{ backgroundImage: bgImage }}>
     
      <section className="">
        <Header />
      </section>

      
      
      
      <section>
        <Music/>
        </section>
        <section className="">
          <About />
        </section>

        <footer className="absolute backdrop-blur-sm w-auto mb-5 text-bold tracking-widest p-4 space-x-10 bottom-0 text-slate-200 justify-items-center ">
         
            
       <a href="https://www.instagram.com/nicoroc_nyc/">instagram </a>
            
        <a href="https://www.twitter.com/nicoroc">twitter</a>

        <a href="https://www.soundcloud.com/nicoroc">soundcloud</a>

          


        </footer>
    </main>
  )
}
