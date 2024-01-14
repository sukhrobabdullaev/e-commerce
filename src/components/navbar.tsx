import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={100}
          height={100}
          style={{
            width: "130px",
            height: "50px",
            objectFit: "contain",
          }}
        />
      </Link>

      <div className="flex items-center md:space-x-2.5 space-x-1 text-sm">
        <nav className="md:ml-auto flex md:flex-wrap md:items-center text-base gap-2 flex-row md:justify-center">
          <Link href={"/"} className="md:mr-5 hover:text-gray-900 text-base">
            Home
          </Link>
          <Link
            href={"/products"}
            className="md:mr-5 hover:text-gray-900  text-base"
          >
            Products
          </Link>
        </nav>
        <Link href={"/shopping-cart"}>
          <button className="button  bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            My bag
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
