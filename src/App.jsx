import { Link } from "react-router-dom"
import About from "./components/About"
import Music from "./components/Music"

 


export default function App() {
  return (
    <main className="h-screen flex items-center justify-center bg-navy relative flex-col">
      <div className="absolute backdrop-blur items-center ml-2 p-2 left-0 font-bold tracking-widest top-0 h-20 w-36  ">
       <h1 className="hover:text-red-300 ml-26 font-bold text-center  text-slate-800 ">nicoroc</h1>

      </div>
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
