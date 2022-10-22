
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




// Publish Article
$('#publish').on('click', () => {

    if (validateInput('validArticle')) {
        $.ajax({
            url: 'api/articles',
            type: 'POST',
            dataType: 'json',
            data: {
                firstName: $('#firstname').val(),
                lastName: $('#lastname').val(),
                title: $('#title').val(),
                story: $('#content').val(),
                tags: tags
            },
            beforeSend: () => {
                $('#publish').html(null)
                $('#publish span').addClass('loader')
            },
            success: (res) => {
                $('#publish').html('Post Content')
            },
            complete: (res) => {
                $('#firstname').val(null)
                $('#lastname').val(null)
                $('#title').val(null)
                $('#content').val(null)
                $('#tag-list').html(null)
                tags = []
            },
            statusCode: {
                400: (e) => $('#notify').html(`Error: ${e.message}`).addClass('alert alert-danger'),
                201: (res) => {
                    $('#notify').html(`Success: ${res.message}`).addClass('alert alert-success')
                    setTimeout(() => {
                        $('#notify').fadeOut(1000).html(null)
                            .removeClass('alert alert-success').show()
                    }, 3000)
                }
            }
        })
    }
})

// Add Tags
$('#add-tag').on('click', (() => {

    if (color > pills.length - 1)
        color = 0
    if ($('#tag-name').val() != null && $('#tag-name').val() != '') {
        tags.push($('#tag-name').val())
        $('#tag-list').append($(`<label>${tags[i]}</label>`)
            .addClass(`badge m-1 rounded-pill text-bg-${pills[color]}`))

        $('#tag-name').val(null)
        i++
        color++
    }
    return

}))


validateInput = (inputArgs) => {
    let validInput = $('[' + inputArgs + ']');
    for (let formInput = 0; formInput < validInput.length; formInput++) {
        if (validInput.get(formInput).value == null || validInput.get(formInput).value == '') {
            validInput[formInput].placeholder = 'This field is required';
            validInput[formInput].style.borderLeftWidth = '5px';
            validInput[formInput].style.borderStyle = 'solid';
            validInput[formInput].style.borderLeftColor = '#a00';
            return false;
        }
    }
    return true
}