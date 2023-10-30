import { Alert } from "react-daisyui"
import NavbarElement from "../components/NavbarElement"

const Invalid = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <NavbarElement></NavbarElement>
      <Alert className="max-w-md" icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
        <span>Error! Task failed successfully</span>
      </Alert>
      <div className="text-neutral-content">404 page not found</div>
    </div>
  )
}

export default Invalid