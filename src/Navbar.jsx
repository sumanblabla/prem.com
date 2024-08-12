
const Navbar = () => {
 const navlist=("home", "about","skill","info","project");
  return (
    <div>
      <li className="flex gap-4 justify-around cursor-pointer text-black border-double border-4 border-black   ">
       <a href="home" className="hover:bg-black-100 transition-transform-300">home</a>
      <a href="about" className="hover:bg-sky-100">about</a>
      <a href="skill" className=" hover:bg-sky-100">skill</a>
      <a href="info" className=" hover:bg-sky-10">info</a>
      <a href="project" className=" hover:bg-sky-100">Projects</a>
      </li>
    </div>
  
    
  )
}

export default Navbar;