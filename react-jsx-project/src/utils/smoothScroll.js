/**
 * Smoothly scrolls to an element with the specified ID
 * @param {string} targetId - The ID of the target element (with or without #)
 */
export const smoothScroll = (targetId) => {
  // Ensure targetId starts with #
  const id = targetId.startsWith('#') ? targetId : `#${targetId}`;
  const element = document.querySelector(id);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
