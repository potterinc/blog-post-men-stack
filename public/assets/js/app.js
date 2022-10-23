$(() => {
    /**
     * UI NAVIGATION BUTTONS
     */
    // Create a new article
    $('#quotes').on('click', () => {
        $('#router-outlet').load('../components/quotes.html')
    })

    // Create a new article
    $('.new-article').on('click', () => {
        $('#router-outlet').load('../components/new/new.html')
    })

    // View all articles
    $('#view-all').on('click', () => {
        $('#router-outlet').load('../components/view-all/articles.html')
    })
})
