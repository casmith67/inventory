$(function () {

    $('.removeItem').on('click', function (e) {

        let $itemNumber = $(this).closest('tr')
            .find('.item_number')
            .text();

        e.preventDefault();

        $.ajax({
            url: '/inventory/removeInventoryItem',
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