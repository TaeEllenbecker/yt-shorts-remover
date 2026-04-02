const observeYouTube = () => {
  const observer = new MutationObserver(() => {
    const shortsShelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    shortsShelves.forEach(shelf => shelf.remove());
    const items = document.querySelectorAll('ytd-reel-item-renderer');
    items.forEach(item => item.remove());
    const suggested = document.querySelectorAll('ytd-reel-shelf-renderer');
    suggested.forEach(suggest => suggest.remove());
    console.log('Removed')
    
    if (window.location.pathname.startsWith('/shorts/')) {
        window.location.href = window.location.href.replace('/shorts/', '/watch?v=');
    }
  });
  // Start observing the body for changes
  observer.observe(document.body, { childList: true, subtree: true });
};

observeYouTube();
