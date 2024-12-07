import { Link } from "react-router-dom"
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { Button } from "../components"

export const PageNotFound = ({children}) => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4 ">
        <p className="text-7xl font-bold text-gray-700 my-7 dark:text-white ">404, Oops</p>
        <div className="max-w-md">
          <img className="rounded-lg my-6 " src={PageNotFoundImage} alt="404 Page Not Found" />
        </div>
        
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <Button children= "{Back to Cinemate}"/>
        </Link>
      </div>
    </section>
    </main>
  )
}

