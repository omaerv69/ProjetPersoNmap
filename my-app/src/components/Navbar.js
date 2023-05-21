import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="w-full text-4xl font-bold text-purple-500">
        <Link href="/">Persomap</Link>
      </h1>
      <ul className="flex text-1xl">
        <li className="p-4 hover:text-purple-500">
          <Link href="/home" className="font-semibold">Accueil</Link>
        </li>
        <li className="p-4 hover:text-purple-500">
          <Link href="/history" className="font-semibold">Historique</Link>
        </li>
        <li className="p-4 hover:text-purple-500">
          <Link href="/result" className="font-semibold">Résultat</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
