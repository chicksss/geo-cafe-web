import React, { useEffect } from "react";

import Card from "./Card";
import p1 from "./img/p1.jpg";
import p2 from "./img/woodbg.jpg";

import "./style.css";

const App = () => {
  useEffect(() => {
    const d = new Date();
    let hour = d.getHours();
    if (hour >= 9 && hour < 17) {
      // Assuming open hours are 9 AM to 5 PM
      document.getElementById("demo").innerHTML = "Open";
    } else {
      document.getElementById("demo").innerHTML = "Closed";
    }
  }, []);

  return (
    <div class="font w-screen">
      <section
        className="md:h-[100vh] h-[70vh] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${p1})` }}
      >
        <aside class="md:absolute md:z-20 md:text-white md:px-20 md:block hidden">
          <div class="grid items-center gap-20 mt-[400px]">
            <img
              src={require("./img/instagram-2.gif")}
              className="w-12 h-12 rounded-full"
              alt="Logo"
            />
            <img
              src={require("./img/Facebook.gif")}
              className="w-12 h-12 rounded-full"
              alt="Logo"
            />
          </div>
        </aside>
        <div className="mycss hidden md:block"></div>
        <div className="mycss2 h-[100vh] md:hidden"></div>
        <div class="grid md:flex justify-between z-10 absolute md:ml-56  items-center  py-40">
          <div class="grid px-5">
            <span class="text-2xl font-bold text-white">Welcome to</span>
            <h1 class="font-bold md:text-7xl text-5xl  text-white">
              <b class="text-[#a7c957]">Geo</b>{" "}
              <b class="text-[#f4e285]">Café</b>
            </h1>
            <p class="text-white md:w-[490px] md:text-2xl py-3">
              <span>A MUST TRY HIDDEN CAFÉ in BAYAMBANG PANGASINAN</span>{" "}
              <br></br>
              {/* <span>Located at:Mangayao,Bayambang (GEO FARM).</span> <br></br>
              <span>Operating Hours:10am to 10pm Monday to Sunday</span> */}
              <br></br>
              <br></br>
              <button class="rounded-lg px-5 py-2 bg-white text-black">
                History
              </button>
            </p>
          </div>

          <div class="md:block md:ml-56 hidden">
            <img
              src={require("./img/logo.jpg")}
              className="w84 h-84 rounded-full"
              alt="Logo"
            />
          </div>
        </div>
      </section>

  

   

  
      <section class=" bg-[#e9edc9]">
        <div class="flex justify-evenly py-10 text-center bg-[#fefae0] rounded-xl">
          <div class="px-10 w-[900px] overflow-y-auto h-96">
            <h1 class="text-start font-bold text-2xl font-bold py-2">
              History of Geo Cafe
            </h1>
            <p class="w-[100%] text-justify text-2xl">
              &nbsp; &nbsp; &nbsp; &nbsp; Geo Cafe These days, family-run
              restaurants and other firms are everywhere, navigating the
              difficult daily operations of a bustling commercial landscape.
              Nevertheless, there is frequently unrealized potential for growing
              the clientele and raising the profile of the business. This is
              exactly where Edalyn Gravides's wise management of Geo Cafe enters
              the picture. Edalyn Gravides started her career as a chef in the
              city of Manila. When job security was endangered by the lockdown
              during the difficult epidemic days, her journey took a dramatic
              turn. Due to this uncertainty, Edalyn and her husband made the
              decision to start a new business, which resulted in the
              establishment of Geo Cafe in 2021. The Global Environmental
              Organization is represented by the acronym Geo Farm, which is
              where the idea for Geo Cafe originated. Situated in an area where
              the appeal of mild weather and fresh air draws people, Geo Cafe
              emerged as a haven for people looking to escape the chaos of the
              city. In addition to making Geo Cafe stand out, its distinctive
              beginnings emphasize the café's dedication to environmental
              awareness, which is evident in the welcoming and airy environment
              it provides for customers. Geo Café, located in the Geo Farm in
              Barangay Mangayao, Bayambang, Pangasinan, provides a one-of-a-kind
              dining experience amidst the grandeur of nature. With a commitment
              to environmental consciousness, the café reduces its environmental
              impact by procuring local ingredients and positively contributing
              to the Barangay Mangayao community. Inside the Geo Café, there is
              a large menu with milk tea, fruit tea, fruit shakes, sweets,
              drinks, pasta, rice dinners, platters, and crepes that customers
              may buy and order. Geo Café is inspired by the relationship
              between food and surroundings. Geo Cafe's menu combines a variety
              of flavor’s that are sourced from all over the world. This
              international culinary adventure is proof of Edalyn's skill as a
              chef and her commitment to offering a special dining experience.
              Geo Cafe aims to be a melting pot of cultures as well as a gourmet
              heaven. The goal of the café's cuisine, which incorporates
              flavor’s from throughout the world, is to create an environment
              where guests may go on a sensory journey that has no bounds. Every
              visit to Geo Cafe promises to be a joyful diversion from the
              usual, thanks to Edalyn Gravides' meticulously crafted ambiance,
              which accentuates the global concept. Geo Cafe seeks to provide a
              friendly environment in which clients may savior not only the
              flavors but also the essence of culinary talent in every mouthful,
              making each visit an extraordinary voyage into the world of food
              satisfactions.
            </p>
          </div>
          <div class="md:grid justify-center items-center">
            <div class="flex justify-center">
              <img
                src={require("./img/eda.jpg")}
                class="w-80 h-80 rounded-lg"
                alt="Logo"
              />
            </div>
            <div>
              <h1 class="text-2xl font-bold py-2">
                Edalyn Gravidez & Elmer Gravidez{" "}
              </h1>
            </div>
            <span class="font-light">Owner of Geo Café</span> <br></br>
          </div>
        </div>
      </section>

      <section class="bg-[#faedcd]">
        <h1 class="font-bold text-3xl text-center py-5">What's in GEO CAFE?</h1>
        <div
          id="default-carousel"
          class="relative w-full text-center md:mt-[-70px]"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <p class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div class="flex justify-center py-3">
                  <img
                    src={require("./img/restaurant.png")}
                    class="w-16 h-16"
                    alt="Logo"
                  />
                </div>
                <b class="text-2xl font-bold mt-3">
                  Fil-Italian Cuisine Restaurant
                </b>
              </p>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <p class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div class="flex justify-center py-3">
                  <img
                    src={require("./img/crepe.png")}
                    class="w-16 h-16"
                    alt="Logo"
                  />
                </div>
                <b class="text-2xl font-bold mt-3">
                  FREE CREPES for birthday celebrants - let the whole place
                  celebrate with you
                </b>
              </p>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <p class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div class="flex justify-center py-3">
                  <img
                    src={require("./img/event.png")}
                    class="w-16 h-16"
                    alt="Logo"
                  />
                </div>
                <b class="text-2xl font-bold mt-3">
                  An events place focusing on small to mid intimate events
                </b>
              </p>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <p class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div class="flex justify-center py-3">
                  <img
                    src={require("./img/tree-silhouette.png")}
                    class="w-16 h-16"
                    alt="Logo"
                  />
                </div>
                <b class="text-2xl font-bold mt-3">Relaxing Ambiance</b>
              </p>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <p class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div class="flex justify-center py-3">
                  <img
                    src={require("./img/aso.png")}
                    class="w-16 h-16"
                    alt="Logo"
                  />
                </div>
                <b class="text-2xl font-bold mt-3">Pet friendly restaurant</b>
              </p>
            </div>
          </div>

          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div>
      </section>

      <section class=" bg-[#e9edc9]">
        <h1 class="font-bold text-3xl text-center py-5">
          Explore the beauty and relaxing inside in Geo Cafe
        </h1>
        <div class="flex justify-center gap-10 px-10 mt-20 py-5">
          <div>
            <img
              src={require("./img/p6.jpg")}
              class="w-96 h-96 rounded-lg  mt-[-30px] shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              alt="Logo"
            />
          </div>

          <div>
            <img
              src={require("./img/p7.jpg")}
              class="w-96 h-96 rounded-lg  mt-[30px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              alt="Logo"
            />
          </div>

          <div>
            <img
              src={require("./img/p8.jpg")}
              class="w-96 h-96 rounded-lg  mt-[-30px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              alt="Logo"
            />
          </div>
        </div>
      </section>

      <section class="bg-[#faedcd] px-10 py-5 grid">
        <div class="text-center py-5">
          <b class="text-3xl font-bold text-center">Contact Us</b>
        </div>
        <div class="md:flex md:gap-10 md:justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.225317516189!2d120.46695067412338!3d15.844750745410314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391495ab46ee205%3A0x7e5b74eb2a420189!2sGeo%20Caf%C3%A9%20and%20Restobar!5e0!3m2!1sen!2sph!4v1722960860203!5m2!1sen!2sph" class="w-96 h-96 rounded-lg shawdow-lg" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="grid gap-3 md:grid md:p-5">
          <div class="flex justify-start w-96 text-start gap-10 shadow-lg px-2 py-2 items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-10 w-10"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <i>
              <a
                href="https://www.facebook.com/geocaferestobar"
                class="underline"
              >
                https://www.facebook.com/geocaferestobar
              </a>
            </i>
          </div>

          <div class="flex justify-start w-96 text-start gap-10 shadow-lg px-2 py-2 items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-100 w-10"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

            <a
              href="https://www.instagram.com/geocaferestobar/?fbclid=IwY2xjawEdfAlleHRuA2FlbQIxMAABHf_RmdR88H8Fp2b8d-sXvKdHbrffnQqK0PGyAcvWGayNoKn-OM6Evs9yjQ_aem_p10th9sTI56vu6lr86fLiQ"
              class="underline"
            >
              <i> instagram.com/geocaferestobar </i>
            </a>
          </div>

          <div class="flex justify-start w-96 text-start gap-10 shadow-lg px-2 py-2 items-center rounded-lg">
            <img src={require("./img/cp.png")} class="w-12 h-12" alt="Logo" />

            <i>+63 995-782-6491</i>
          </div>
        </div>
        </div>
      </section>
      <footer class="bg-[#e9edc9]">
          <div class="flex justify-center gap-10 px-2 py-2 items-center rounded-lg">
          
          <b id="demo"></b>
          </div>
        </footer>
    </div>
  );
};

export default App;
