$(() => {
    $('#edit').on('click', (e) => {
        e.preventDefault();

        let itemNumber = prompt('What is the item number for the entry you are inquiring about?', '1');
        $.ajax({
            url: '/inventory/editInventoryItem',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                itemNumber: itemNumber
            }),

            success: () => {
                location.reload();
            }
        })
    })
})