document.addEventListener("DOMContentLoaded", function () {
    const storeItems = [
        {
            name: 'TV',
            price: 800.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Phone',
            price: 700.00,
            inStock: false,
            details: '5G'
        },
        {
            name: 'Game Console',
            price: 300.00,
            inStock: true,
            details: 'The latest and greatest'
        },
        {
            name: 'Laptop',
            price: 1200.00,
            inStock: true,
            details: '16GB RAM 1TB SSD'
        },
        {
            name: 'Smart Watch',
            price: 200.00,
            inStock: false,
            details: 'Counts your steps'
        },
        {
            name: 'Headphones',
            price: 100.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Keyboard',
            price: 100.00,
            inStock: true,
            details: 'Types for you'
        },
        {
            name: 'HDMI Cord',
            price: 100.00,
            inStock: true,
            details: 'HDMI to USB type C'
        },
        {
            name: 'Monitor',
            price: 300.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Speaker',
            price: 200.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Video Game',
            price: 60.00,
            inStock: true,
            details: 'Enjoy for hours'
        },
    ];

    const productContainer = document.getElementById("productContainer");

    storeItems.forEach(item => {
        const itemName = item.name;
        const itemPrice = item.price;
        const itemInStock = item.inStock;
        const itemDetails = item.details;

        if (itemInStock) {
            
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("productContainer"); 

            
            const priceParagraph = document.createElement("p");
            priceParagraph.textContent = `$${itemPrice}`;
            priceParagraph.classList.add("price");

            const itemNameParagraph = document.createElement("p");
            itemNameParagraph.textContent = itemName;
            itemNameParagraph.classList.add("itemName");

            const detailsParagraph = document.createElement("p");
            detailsParagraph.textContent = itemDetails;
            detailsParagraph.classList.add("details");

           
            itemContainer.appendChild(priceParagraph);
            itemContainer.appendChild(itemNameParagraph);
            itemContainer.appendChild(detailsParagraph);

            
            productContainer.appendChild(itemContainer);
        }
    });
});
$("#clickMe").click(function () {
    $("#contentContainer").toggleClass("darkMode");
});