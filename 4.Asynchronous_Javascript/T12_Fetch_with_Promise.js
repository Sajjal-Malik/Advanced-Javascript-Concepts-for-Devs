// url not working (becuase complete url was not on this day)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=', { mode: 'cors'})
    .then((response) =>{
        return response.json();
    })
    .then(function (response) {
        const gifURL = response.data.images.original.url;
        const gifImage = document.createElement('img');
        gifImage.src = gifURL;
        document.body.appendChild(gifImage);
    })