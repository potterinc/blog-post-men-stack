
let tags = []
let pills = [
    'dark',
    'primary',
    'secondary',
    'info',
    'warning',
    'success',
    'light'
]
let i = color = 0;
let tagList = ""

// Publish Article
$('#publish').on('click', () => {
    // ..code here
})
// Add Tags
$('#add-tag').on('click', (() => {

    if (color > pills.length - 1)
        color = 0
    if ($('#tag-name').val() != null && $('#tag-name').val() != '') {
        tags.push($('#tag-name').val())

        tagList += `<span class="badge m-1 rounded-pill text-bg-${pills[color]}">
                            ${tags[i]}
                        </span>`
        $('#tag-list').html(tagList);

        $('#tag-name').val(null)
        i++
        color++
    }
    return

}))