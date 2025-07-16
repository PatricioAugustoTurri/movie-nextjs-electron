import Navbar from "./Nabvar";

function Footer() {
  return (
    <div className="w-full h-60 bg-white flex md:justify-between md:items-center px-4 md:px-20 lg:px-36 flex-col md:flex-row gap-2 md:gap-0 mt-10 shadow-2xl justify-center">
      <div>
        <h1 className="text-2xl font-bold">Movie</h1>
        <p className="text-sm text-black/50">Copyright © 2025 Movie</p>
      </div>
      <div className="flex gap-4 items-center">
       <Navbar isHeader={false} />
      </div> 
    </div>
  );
}

export default Footer;
