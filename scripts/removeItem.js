$(function () {

    $('#removeItem').on('click', function (e) {

        let $itemNumber = $('#item_number').html();
        e.preventDefault();

        $.ajax({
            url: '/inventory/removeItem',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                item_number: $itemNumber
            }),

            success: function () {
                location.reload()
            }
        })

    })

})