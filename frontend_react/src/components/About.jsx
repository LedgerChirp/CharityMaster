import React from 'react'

function About() {

  

  return (
    <div className='flex md:flex-row flex-col justify-center items-center'>

        <img className='md:h-[60vh]' src="./assets/aboutimg.jpg" alt="" />

        <div className='flex flex-col justify-center py-4 md:py-6' >
            <h1 className='text-5xl font-[Caudex] text-[#3A3845] md:py-5 pl-20'>About us</h1>
            <p className='md:text-2xl text-xl py-4 text-justify font-serif text-[#494950] px-5 md:px-20'>

              We believe there is nothing better than a healthy smile, and that all children deserve a nutritious meal. Donations we collect go on to help those who can't afford it or get their own supplies.
              We have made it our mission to feed malnourished children.
            </p>
        </div>
    </div>

  )
}

export default About