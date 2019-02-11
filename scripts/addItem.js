$(function () {
    $('#submit').on('click', function (e) {
        let $supplyName = $('#supplyName')
        let $description = $('#description')
        let $quantity = $('#quantity')
        e.preventDefault();
        $.ajax({
            url: '/user/addInventoryItem',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                supplyName: $supplyName.val(),
                description: $description.val(),
                quantity: $quantity.val()
            }),
            success: function () {
                location.reload();
            },

            error: function (err) {
                console.log(err)
            }
        })
    })
})