$(() => {
    
    // Create a new article
    $('.new-article').on('click', () => {
        $('#router-outlet').load('../components/new.html')
    })

    // View all articles
    $('#view-all').on('click', () => {
        $('#router-outlet').load('../new.html')
    })

    // Go to Blog Page
    $('#blog').on('click', () => {
        $('#router-outlet').load('../new.html')
    })
    // Hire
    $('#hire').on('click', () => {
        $('#router-outlet').load('../new.html')
    })
})