window.addEventListener('load', function() {
  const tweetInput = document.querySelector('.tweet-input');
  const tweetPreview = document.querySelector('.tweet-preview');
  const characterCounter = document.querySelector('.character-counter');

  tweetInput.addEventListener('input', () => {
    const tweetContent = tweetInput.value;
    const tweetLength = tweetContent.length;
    tweetPreview.textContent = tweetContent;
    characterCounter.textContent = `${tweetLength}/280`;

    if (tweetLength > 280) {
      characterCounter.style.color = 'red';
    } else {
      characterCounter.style.color = '';
    }
  });
});
