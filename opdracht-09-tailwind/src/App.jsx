import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div class="flex-col w-150 ml-180">
        <img class="h-10 w-10 absolute" src='/img/icon.svg' />
        <h3 class="text-indigo-500 font-sans font-bold text-3xl ml-15 mt-4 relative"><span class="text-slate-900 dark:text-white" >Work</span>cation</h3>
        <img class="h-70 w-110 rounded-2xl drop-shadow-2xl mt-6 mb-13" src='/img/woman.webp' />
        <h1 class="text-slate-900 dark:text-white font-sans font-bold text-4xl w-100 mb-8">You can work from anywhere. <span class="text-indigo-500">Take advantage of it.</span></h1>
        <p class="font-sans text-slate-900 text-xl mb-7 w-95 dark:text-white" >Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.</p>
        <button class="bg-indigo-500 text-white h-12 w-50 font-sans font-bold rounded-md drop-shadow-md">BOOK YOUR ESCAPE</button>
      </div>

    </>
  )
}

export default App
