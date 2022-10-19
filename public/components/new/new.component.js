
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
  
    $.ajax({
        url: '/api/articles',
        type: 'POST',
        dataType:'json',
        contentType: 'application/json',
        data: {
            firstName: $('#firstname').val(),
            lastName: $('#lastname').val(),
            title: $('#title').val(),
            story: $('#content').val(),
            tags: tags
            },
        beforeSend: () => {
            $('#publish').html(null)
                .append($('<span></span>')
                    .addClass('loader'))
        },
        success: (res) => {
            $('#publish').html('Post Content')
            console.log(res.message)
        },
        statusCode:{
            404:(e)=> console.log(`Bad Request: ${e.message}`),
            201:(res)=> console.log(`Success: ${res.message}`)
        }
    })
})

// Add Tags
$('#add-tag').on('click', (() => {

    if (color > pills.length - 1)
        color = 0
    if ($('#tag-name').val() != null && $('#tag-name').val() != '') {
        tags.push($('#tag-name').val())
        $('#tag-list').append($(`<span>${tags[i]}</span>`)
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
            return false;
        }
    }
    authenticate.flag = true;
}