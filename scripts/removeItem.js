$(function () {

    $('.removeItem').on('click', function (e) {

        let $itemNumber = $('.item_number').html();

        console.log($itemNumber);
        e.preventDefault();

        $.ajax({
            url: '/inventory/removeInventoryItem',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                item_number: $itemNumber
            }),

            success: function () {
                //location.reload()
            }
        })

    })

})