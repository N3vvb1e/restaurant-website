import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Casa Românească
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-amber-200">
              Acasă
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-amber-200">
              Meniu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber-200">
              Despre noi
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-amber-200">
              Galerie
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
