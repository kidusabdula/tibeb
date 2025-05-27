'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Categories({ categories }: { categories: { name: string; image: string }[] }) {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <h2 className="text-3xl font-playfair text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link key={category.name} href={`/${category.name}`} className="block group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h3 className="text-2xl font-playfair text-white drop-shadow-md">
                  {category.name.toUpperCase()}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
