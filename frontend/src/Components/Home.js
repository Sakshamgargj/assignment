
function Home() {
  return (
    <div className="w-full">

      {/* Top refund banner */}
      <div className="w-full bg-yellow-300 text-center py-2 text-lg md:text-xl font-semibold">
        Enjoy 100% Refund On Course Completion
      </div>

      
      <div className="w-full flex flex-col md:flex-row gap-10 mt-4 md:mt-10 px-4 md:px-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col mt-8 md:mt-20 gap-6 text-left md:w-1/2">

          {/* IIT DELHI TAG */}
          <div className="border rounded-full px-4 py-2 inline-flex items-center gap-2 bg-white shadow-sm w-fit text-sm">
            <span className="text-gray-600">An</span>
            <span className="font-semibold text-purple-600">IIT Delhi</span>
            <span className="text-gray-600">Alumni Initiative</span>
          </div>

          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Level Up <span>🚀</span> Your Career With Expert Mentorship & Internships For
            <span className="inline-block bg-purple-100 px-3 py-1 rounded-lg text-purple-700 ml-2">
              FREE
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-600 text-base md:text-lg">
            With 100% Refund guarantee on course completion.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.dto_UknSThfSRMLbtm2PGQHaHh?pid=Api&P=0&h=180"
              alt="Google"
              className="w-5 md:w-6"
            />
            <p className="font-semibold text-sm md:text-base">4.9/5 ⭐⭐⭐⭐⭐</p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg">
              Explore Courses
            </button>

            <div className="flex items-center gap-2 text-purple-700 font-medium">
              <span className="text-xl">▶</span>
              100% refund offer
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */} 

        <div className="relative flex justify-center w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

            
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center h-60 md:h-72 
                                transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
                <div className="space-y-4">
                    <div className="flex items-center bg-green-100 p-3 rounded-lg transition hover:bg-green-200">
                    <span className="text-xl mr-3">📈</span>
                    <p className="font-semibold">100% Refund</p>
                    </div>
                    <div className="flex items-center bg-yellow-100 p-3 rounded-lg transition hover:bg-yellow-200">
                    <span className="text-xl mr-3">💬</span>
                    <p className="font-semibold">Instant doubt Support</p>
                    </div>
                    <div className="flex items-center bg-purple-100 p-3 rounded-lg transition hover:bg-purple-200">
                    <span className="text-xl mr-3">🎓</span>
                    <p className="font-semibold">Internship Opportunities</p>
                    </div>
                </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-2xl h-60 md:h-72 overflow-hidden 
                                transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer flex items-center justify-center">
                <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295396_1280.png"
                    alt="person"
                    className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                />
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-2xl h-60 md:h-72 overflow-hidden 
                                transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer flex items-center justify-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/046/985/444/non_2x/four-section-infographic-diagram-free-vector.jpg"
                    alt="student"
                    className="h-full w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                />
                </div>

                {/* Card 4 */}
                <div className="bg-green-300 shadow-lg rounded-2xl flex flex-col items-center justify-center h-60 md:h-72 p-6 transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
                <p className="text-lg font-bold mb-2">Google Reviews</p>
                <p className="text-2xl font-semibold mb-2">4.9/5 ⭐⭐⭐⭐</p>
                </div>

          </div>
        </div>

      </div>

      {/* { explanation} */}
      <div className="w-full mt-20 mb-0 bg-purple-300 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

          
          <div className="flex items-center justify-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/2989/2989849.png" alt="IMG" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <p className="text-2xl sm:text-[32px] font-semibold leading-none">50+</p>
              <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Courses</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3076/3076176.png" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <p className="text-2xl sm:text-[32px] font-semibold leading-none">100k+</p>
              <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Learners</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <p className="text-2xl sm:text-[32px] font-semibold leading-none">100%</p>
              <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Doubts Solved</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/993/993699.png" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <p className="text-2xl sm:text-[32px] font-semibold leading-none">10k+</p>
              <p className="text-lg sm:text-[24px] text-gray-700 mt-1">Student Projects</p>
            </div>
          </div>

        </div>
      </div>

    

    </div>
  );
}

export default Home;
