/**
 * Smoothly scrolls to an element with the specified ID
 * @param targetId - The ID of the target element (with or without #)
 */
export const smoothScroll = (targetId: string): void => {
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
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
