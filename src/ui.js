const Ui = (function () {
  const selectors = {
    imageContainer: '.image-container',
    centerContent: '.center-content',
    youtubeStream: '.youtube-stream',
    taskToggle: '.task-toggle',
    settingsIcon: '.settings-icon',
  };

  // I'm a sci-fi fan and I like dark aesthetic, which is why these are my search terms
  const searchTerms = [
    'night',
    'rain',
    'water',
    'neon',
    'astronomy',
    'forest',
    'dark',
  ];
  return {
    getSelectors: function () {
      return selectors;
    },
    getSearchTerms: function () {
      return searchTerms;
    },
    // Method that randomly chooses images from unsplash. The unsplash api already supports random image searching, so this randomly
    // pulls an image search term from an array
    getRandomSearchTerms: function () {
      const searchTerms = Ui.getSearchTerms();
      return searchTerms[Math.floor(Math.random() * searchTerms.length)];
    },
    // Grabs the randomly chosen search term from the above method, appends it to the default unsplash URL, and applies it to the
    // background of the image container.
    // Will be called in the init function
    changeBackground: function () {
      const selectors = Ui.getSelectors();
      const searchTerm = Ui.getRandomSearchTerms();
      const url = 'https://source.unsplash.com/random/';
      const backgroundImgUrl = `${url}?${searchTerm}`;
      const imgContainer = document.querySelector(selectors.imageContainer);
      imgContainer.style.background = `url(${backgroundImgUrl}) no-repeat center center/cover`;

      console.log(backgroundImgUrl);
    },
  };
})();

export { Ui };
