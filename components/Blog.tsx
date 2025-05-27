'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ posts }: { posts: { title: string; excerpt: string; image: string }[] }) {
  return (
    <section className="py-12 px-6 bg-primaryBg text-secondaryBg">
      <h2 className="text-3xl font-playfair text-center mb-8">From Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover mb-4"
              priority
            />
            <h3 className="text-xl font-bold mb-2 text-textDark">{post.title}</h3>
            <p className="text-textDark mb-4">{post.excerpt}</p>
            <Link href={`/blog/${index}`} className="text-accentGold hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}