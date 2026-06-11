import Image from "next/image";
import Link from "next/link";
import { blogContent } from "@/data/site";
import type { Locale } from "@/lib/locales";

type BlogGridProps = {
  locale: Locale;
};

export function BlogGrid({ locale }: BlogGridProps) {
  const { sectionTitle, posts } = blogContent;
  const blogHref = `/${locale}/blog`;

  return (
    <section className="blog-section bg-white">
      <div className="section-padding blog-section__inner">
        <h2 className="blog-section__heading">{sectionTitle}</h2>
        <div className="blog-section__grid">
          {posts.map((post) => {
            const caption = post.description?.trim() || post.title.trim();

            return (
              <article key={post.slug} className="blog-card">
                <div className="blog-card__media">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={640}
                    height={400}
                    className="blog-card__image"
                    sizes="(max-width: 639px) 100vw, 50vw"
                  />
                </div>
                {caption ? (
                  <p className="blog-card__caption">{caption}</p>
                ) : null}
                <Link href={blogHref} className="blog-card__coming-soon">
                  {post.status}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
