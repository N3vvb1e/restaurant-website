import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Bine ați venit la Casa Românească
        </h1>
        <p className="text-xl">
          Experimentați mese rafinate și evenimente de neuitat
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mâncăruri populare</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Tocăniță de porc cu mămăliguță",
                image: "/main-dish1.jpg",
              },
              { name: "Șnițel de pui/porc", image: "/main-dish2.jpg" },
              { name: "Ciorbă de văcuță", image: "/soup1.jpg" },
              {
                name: "Ciorbă 'Casa Românească' cu afumătură",
                image: "/soup2.jpg",
              },
            ].map((dish, index) => (
              <div key={index} className="bg-amber-100 p-4 rounded-lg">
                <Image
                  src={`${dish.image}?height=150&width=150`}
                  alt={dish.name}
                  width={150}
                  height={150}
                  className="mb-2 rounded-lg"
                />
                <p className="font-semibold">{dish.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ore de deschidere</h2>
          <ul className="space-y-2">
            <li>Luni - Vineri: 09:00 AM - 10:00 PM</li>
            <li>Sâmbătă - duminică: 10:00 AM - 10:00 PM</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <Link
          href="/contact"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
        >
          Rezervați acum
        </Link>
      </section>
    </div>
  );
}
