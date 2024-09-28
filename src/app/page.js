"use client"
import Image from "next/image";


import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import deved from "./pic.jpg"
import design from "./design.png"
import code from "./code.png"
import consulting from "./consulting.png"
import web1 from "./web1.png"
import web2 from "./web2.png"
import web3 from "./web3.png"
import web4 from "./web4.png"
import web5 from "./web5.png"
import web6 from "./web6.png"
import { useState } from "react";
 
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    
    // <div className={darkMode ? "dark":""}>
    <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
     <head>
     <title>
      Portfolio
     </title>
  
     </head>
     

     <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className=" min-h-screen">       <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons md:text-3xl">Developed by Kwame</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer" onClick={()=>{
              setDarkMode(!darkMode)
            }}/>
          </li>
          <li><a href="/kwameresuming.pdf" className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" >Resume</a></li>
        </ul>
      </nav>

      <div className="text-center p-10 ">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Kwame Addo</h2>
        <h3 className="text-2xl py-2">Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
          Developer with some experience in aws,Scala and Java
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href='http://www.linkedin.com/in/kwa1234'> <AiFillLinkedin /></a>
        <a href="https://github.com/addo12kwame/"> <AiFillGithub /> </a>
    
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover"/>
      </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">
            Services I offer
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800">
          Since the beginning, I have been <span className="text-teal-500">coding</span> and all so everything is cool with agaoawfaflakjfkaj
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
          Since the beginning, I have been <span className="text-teal-500">coding</span> and all so everything is cool with agaoawfaflakjfkaj
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
          Since the beginning, I have been <span className="text-teal-500">coding</span> and all so everyt
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
            <Image src={design} width={100} height={100}/>
            
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p>
              Create nice designs 
            </p>
            <h4 className="py-4 text-teal-600">
              Tools I used
            </h4 >
            <p className="text-gra-800 py-1">VsCode</p>
            <p className="text-gra-800 py-1">Pycharm</p>
            <p className="text-gra-800 py-1">CodeBlocks</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100}/>
            
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p>
              Create nice designs 
            </p>
            <h4 className="py-4 text-teal-600">
              Tools I used
            </h4 >
            <p className="text-gra-800 py-1">VsCode</p>
            <p className="text-gra-800 py-1">Pycharm</p>
            <p className="text-gra-800 py-1">CodeBlocks</p>
              </div>
              <div className="text-center  justify-center shadow-lg p-10 rounded-xl my-10 ">
            <Image src={consulting} height={100} width={100}/>
            
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p>
              Create nice designs 
            </p>
            <h4 className="py-4 text-teal-600">
              Tools I used
            </h4 >
            <p className="text-gra-800 py-1">VsCode</p>
            <p className="text-gra-800 py-1">Pycharm</p>
            <p className="text-gra-800 py-1">CodeBlocks</p>
              </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
          Since the beginning, I have been <span className="text-teal-500">coding</span> and all so everything is cool with agaoawfaflakjfkaj
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web1}/>
          </div>
        </div>
        <div className="basis-1/3 flex-1">
          <div><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web2}/></div>
        </div>
        <div className="basis-1/3 flex-1">
          <div><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web3}/></div>
        </div>
        <div className="basis-1/3 flex-1">
          <div><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web4}/></div>
        </div>
        <div className="basis-1/3 flex-1">
          <div><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web5}/></div>
        </div>
        <div className="basis-1/3 flex-1">
          <div><Image className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={web6}/></div>
        </div>
      </section>
     </main>
     </div>

    
    
  );
}
