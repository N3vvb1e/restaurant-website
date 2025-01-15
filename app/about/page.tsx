import Image from "next/image";

const teamMembers = [
  {
    name: "Iosif Ștefănescu",
    role: "Bucătar șef",
    image: "/chef1.jpg?height=200&width=200",
  },
  {
    name: "Lara Norman",
    role: "Asistent bucătar",
    image: "/chef2.jpg?height=200&width=200",
  },
  {
    name: "Hans Ovando",
    role: "Bucătar-patiser",
    image: "/chef3.jpg?height=200&width=200",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Despre noi</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Povestea noastră</h2>
        <p className="text-lg mb-4">
          Înființat în 2010, restaurantul nostru servește mese delicioase și
          găzduiește evenimente de neuitat de peste un deceniu. Ne mândrim cu
          utilizarea celor mai proaspete ingrediente și cu crearea unei
          atmosfere calde, primitoare pentru toți oaspeții noștri.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Echipa noastră</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mb-4 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Valorile noastre</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Calitate: Folosim doar cele mai bune ingrediente în preparatele
            noastre.
          </li>
          <li>
            Tradiție: Respectăm rețetele clasice, adoptând în același timp
            tehnici moderne.
          </li>
          <li>
            Experiență: Ne străduim să creăm experiențe culinare de neuitat
            pentru oaspeții noștri.
          </li>
          <li>
            Comunitatea: Ne-am angajat să sprijinim producătorii locali și să
            dăm înapoi comunității noastre.
          </li>
        </ul>
      </section>
    </div>
  );
}
