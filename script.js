let apiQuotes = [];

// get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (error) {
        // catch error here
    }
}

// onload
getQuotes();