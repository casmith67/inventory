$(() => {
    $('.edit').on('click', (e) => {
        e.preventDefault();

        console.log("I was clicked")

        let $itemNumber = $(this).closest('tr')
            .find('.item_number')
            .text();

        let $supplyName = $('#supplyName').val();
        let $description = $('#description').val();
        let $quantity = $('#quantity').val();

        console.log($('#supplyName').closest('label').find('.supplyName').val());

        $.ajax({
            url: '/inventory/editInventoryItem',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                itemNumber: $itemNumber,
                supplyName: $supplyName,
                description: $description,
                quantity: $quantity
            }),

            success: () => {
                location.reload();
            }
        })
    })
})