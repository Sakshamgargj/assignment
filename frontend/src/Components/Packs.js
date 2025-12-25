import React from 'react'

function Packs() {
    return (
        <div className="w-full overflow-hidden">
                        
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/021/587/783/small_2x/learning-human-hands-holding-colorful-letters-photo.jpg"
                alt=""
                className="w-full h-[400px] object-cover p-6"
            />            
            <div className="flex flex-row gap-6 m-10 justify-center">

                <div className="bg-yellow-400 w-[400px] h-60 rounded-xl shadow-lg 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                  p-4 flex flex-col">

                    <h3 className="text-3xl text-white font-bold mb-2">
                        Customized Course Pack
                    </h3>

                    <p className="text-purple-600 font-semibold bg-white rounded-md px-3 py-2 inline-block mb-3">
                        🎬 Choose Any 4 or 4+ Courses
                    </p>

                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
                        ₹1,499
                    </h1>

                    <p className="text-lg font-semibold text-center text-gray-800 mb-3">
                        Avail 100% REFUND in 1 year
                    </p>

                    {/* Center Button */}
                    <div className="flex justify-center mt-auto">
                        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-lg 
                         hover:bg-gray-100 transition-colors duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>

               
                <div className="bg-red-400 w-[400px] h-60 rounded-xl shadow-lg 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                  p-4 flex flex-col">

                    <h3 className="text-3xl text-white font-bold mb-2">
                        Customized Course Pack
                    </h3>

                    <p className="text-purple-600 font-semibold bg-white rounded-md px-3 py-2 inline-block mb-3">
                        🎬 Choose Any 4 or 4+ Courses
                    </p>

                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
                        ₹3,999
                    </h1>

                    <p className="text-lg font-semibold text-center text-gray-800 mb-3">
                        Avail 100% REFUND in 1 year
                    </p>

                    {/* Center Button */}
                    <div className="flex justify-center mt-auto">
                        <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-lg 
                         hover:bg-gray-100 transition-colors duration-300">
                            Enroll Now
                        </button>
                    </div>
                </div>

            </div>

            <div className='bg-purple-600 text-white font-bold p-10 m-10 rounded-lg shadow-lg'>
                <h3 className='text-center text-6xl'>How to Enroll</h3>
            </div>

        </div>
    )
}

export default Packs
