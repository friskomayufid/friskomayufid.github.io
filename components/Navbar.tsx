import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

function Navbar({ theme, setTheme }: { theme: string, setTheme: Function }) {

  const handleTheme = (mode: string) => {
    setTimeout(() => {
      setTheme(mode)
    }, 300)
  }
  return (
    <>
      <div className="text-right">
        {theme === 'light' ?
          <button className="px-2 py-2 bg-mainred rounded-full text-white mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " onClick={() => handleTheme('dark')}><MdOutlineDarkMode /></button> :
          <button className="px-2 py-2 bg-white rounded-full text-mainred mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " onClick={() => handleTheme('light')}><MdOutlineLightMode /></button>
        }
      </div>
    </>
  )
}

export default Navbar
