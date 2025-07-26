export const dynamicPosts = [];

export function addDynamicPost(post) {
  dynamicPosts.push({ id: Date.now(), ...post });
}

export function getDynamicPostBySlug(slug) {
  return dynamicPosts.find((post) => post.slug === slug);
}

export function getDynamicPosts() {
  return dynamicPosts;
}
