function getImgUrl(name) {
  return new URL(`../assets/jobs/${name}`, import.meta.url);
}

export { getImgUrl };
