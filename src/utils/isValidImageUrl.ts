export const isValidImageUrl = (url?: string): boolean => {
  if (!url) return false;

  const imageUrlPattern = /\.(jpeg|jpg|gif|png|webp|svg)$/i;
  try {
    const parsedUrl = new URL(url);
    return imageUrlPattern.test(parsedUrl.pathname);
  } catch (e) {
    return false;
  }
};
