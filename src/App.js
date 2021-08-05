import { useState } from 'react';
import Img from './assets/tom.jpg'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark && 'dark'}>
      
     <button className="p-2 text-center bg-purple-500" onClick={() => setDark(!dark)}>click for {dark ? 'dark' : 'light'} mode</button>

      
      <div className="dark:bg-pink-700 sm:bg-blue-500 lg:bg-secondColor xl:bg-mainColor debug-screens">
        <div className="min-h-screen px-4 mx-auto bg-gray-100 sm:container">


          <section id="header">
            <div className="text-center">
              <h1 className="text-secondColor">Tom Gonzales home training <br /> I'll get you in shape!</h1>
              <h2>Muscle building • Functional training • Nutritional advice</h2>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-10 mt-8" id="img_services">
            <div className="ml-auto" id="image">
              <img src={Img} alt="Tom Gonzales Online Training" />
            </div>

            <div className="sm:hidden lg:block" id="services">
              <h3>I offer you:</h3>
              <ul className="list-disc list-inside">
                <li className="mb-4 text-xl">Lessons via Skype and you can record all sessions and watch them again later. </li>
                <li className="mb-4 text-xl">Holistic full body training</li>
                <li className="mb-4 text-xl">Training without equipment</li>
                <li className="mb-4 text-xl">Pain reduction</li>
                <li className="mb-4 text-xl">Tailored nutrition plans</li>
              </ul>
              <h3 className="mt-10">My qualifications:</h3>
              <ul className="list-disc list-inside">
                <li className="mb-4 text-xl">Certified nutritionist</li>
                <li className="mb-4 text-xl">Certified fitness trainer</li>
                <li className="mb-4 text-xl">5 years of experience in 1: 1 training</li>
              </ul>
            </div>
          </section>



          <section className="w-8/12 mx-auto mt-8" id="price_payment">
            <div >
              <h2>Prices and payment</h2>
              <p>My most important goal is that you get ahead with your goals.</p>
              <p>In a free opening session we will discuss what you want to achieve and how much you can or want to spend. Then we are guaranteed to find a solution that suits you.</p>
            </div>
          </section>


          <section className="mt-8 mb-10" id="contact">
            <div className="grid w-8/12 grid-cols-2 gap-4 mx-auto">
              <div id="email">
                <p>Your message:</p>
                <a href="#" className="flex items-center px-4 py-2 transition bg-gray-300 rounded shadow-sm w-max focus:ring-2 focus:ring-blue-600 hover:bg-gray-400 hover:shadow-none">
                  <svg className="h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                  <span>Send an Email</span>
                </a>
              </div>
              {/* TODO for make button for whats app  */}
              <div id="whatsApp_telefon">
                <p>WhatsApp:</p>
                1 222 555 44 33
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default App;
