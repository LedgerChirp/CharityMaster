import React from 'react'

function Registerform() {
  return (
    <div>
        <section className="mt">

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        
                        <h1 className="mt-24  md:text-3xl text-xl font-[Caudex] text-[#3A3845] ">
                            Register | Create new account
                        </h1>


                        <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">First Name</label>
                                <input type="text" placeholder="John" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Last name</label>
                                <input type="text" placeholder="Snow" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Phone number</label>
                                <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Email address</label>
                                <input type="email" placeholder="johnsnow@example.com" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Password</label>
                                <input type="password" placeholder="Enter your password" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-[Caudex] text-[#3A3845]">Confirm password</label>
                                <input type="password" placeholder="Enter your password" className="block w-full rounded-lg border-gray-600  p-4 pr-12 text-sm shadow-sm" />
                            </div>

                            <button
                                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#d79326] rounded-xl hover:bg-[#ffb13b] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Sign Up </span>
                            </button>
                        </form>
                    </div>
                </div>
            
        </section>

    </div>
  )
}

export default Registerform