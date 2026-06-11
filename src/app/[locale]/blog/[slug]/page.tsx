import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { blogContent } from "@/data/site";

const blogPosts = blogContent.posts;
import type { HeroContent } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

function heroFromPostTitle(title: string, fallback: string): HeroContent {
  const text = title.trim() || fallback;
  const words = text.split(" ");
  if (words.length < 2) {
    return { title: { white: text, gold: "" } };
  }
  const mid = Math.ceil(words.length / 2);
  return {
    title: {
      white: `${words.slice(0, mid).join(" ")} `,
      gold: words.slice(mid).join(" "),
    },
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero
        locale={locale as Locale}
        content={heroFromPostTitle(post.title, post.description ?? post.title)}
      />

      <article className="section-padding mx-auto max-w-3xl bg-white">
        <Link
          href={`/${locale}/blog`}
          className="text-sm text-text-highlight hover:underline"
        >
          ← Back to E-Blog
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-highlight">
          {post.status}
        </p>
        {post.title ? (
          <h2 className="mt-4 text-2xl font-semibold text-primary">{post.title}</h2>
        ) : null}
        <div className="blog-card__media mt-8">
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="blog-card__image w-full"
          />
        </div>
        {post.description ? (
          <p className="mt-6 text-lg leading-relaxed text-[rgba(115,119,127,0.85)]">
            {post.description}
          </p>
        ) : null}
      </article>
    </>
  );
}
