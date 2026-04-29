import { createClient, groq } from 'next-sanity';
import { clientConfig } from './config';

if (!clientConfig.projectId || !clientConfig.dataset) {
  throw new Error('Missing Sanity configuration. Check your environment variables.');
}

export const client = createClient(clientConfig);

export async function getArticles() {
  return await client.fetch(
    groq`*[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      language,
      excerpt,
      coverImage,
      readTime,
      publishedAt,
      featured
    }`
  );
}

export async function getArticle(slug: string) {
  return await client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      language,
      excerpt,
      body,
      coverImage,
      readTime,
      publishedAt,
      featured
    }`,
    { slug }
  );
}

export async function getFeaturedArticles() {
  return await client.fetch(
    groq`*[_type == "article" && featured == true] | order(publishedAt desc)[0..2] {
      _id,
      title,
      slug,
      category,
      language,
      excerpt,
      coverImage,
      readTime,
      publishedAt
    }`
  );
}

export async function getArticlesByCategory(category: string) {
  return await client.fetch(
    groq`*[_type == "article" && $category in category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      language,
      excerpt,
      coverImage,
      readTime,
      publishedAt
    }`,
    { category }
  );
}

export async function searchArticles(query: string) {
  const searchQuery = query ? `*${query}*` : "*";
  return await client.fetch(
    groq`*[_type == "article" && title match $searchQuery || excerpt match $searchQuery] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      language,
      excerpt,
      coverImage,
      readTime,
      publishedAt
    }`,
    { searchQuery }
  );
}
