function isEmpty(val) {
    if (val === "") {
        return true;
    }

    return false;
}

$(() => {

    $('#addItem').on('click', function (e) {
        e.preventDefault();

        let $supplyName = $('#supplyName').val();
        let $description = $('#description').val();
        let $quantity = $('#quantity').val();

        if (isEmpty($supplyName) || isEmpty($description) || isEmpty($quantity)) {
            $('#error-msg').html('Error: empty value was entered')
            return false;
        } else {
            $.ajax({
                url: '/inventory/addInventoryItem',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    supplyName: $supplyName,
                    description: $description,
                    quantity: $quantity
                }),

                success: () => {
                    location.reload();
                },
            })
        }

    })

})