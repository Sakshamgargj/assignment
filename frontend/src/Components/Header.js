import { Link } from "react-router-dom";


function Header(){
    return(
        <div>
      <nav className="w-full bg-white shadow-md px-20 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
         
          <span className="text-xl font-bold text-3xl text-purple-600">Xpert</span>
        </div>

        {/* Right: Nav Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <Link 
              className="text-gray-700 hover:text-purple-600 transition" 
              to="/"
            >
              Home
            </Link>
          </li>


          <li>
            <Link 
              className="text-gray-700 hover:text-purple-600 transition" 
              to="/basket"
            >
              About Us
            </Link>
          </li>

          
        </ul>

      </nav>
      
      
     
    </div>
    )
}
export default Header;