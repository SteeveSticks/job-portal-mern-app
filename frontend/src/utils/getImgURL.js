const getImgUrl = (url) => {
  // if it's alredy a full URL (cloudinary), return as-is
  if (url.startsWith("http")) {
    return url;
  }

  // else treat it like a local file
  return new URL(`../assets/jobs/${url}`, import.meta.url).href;
};

export { getImgUrl };
