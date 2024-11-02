const products = [
    {
        id: 1,
        img: "./images/product1.jpg",
        alt: "product1",
        product_Name: "DNK Yellow Shoes",
        price: "$120.00",
        category: "Men",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: true
    },
    {
        id: 2,
        img: "./images/product_2.jpg",
        alt: "product2",
        product_Name: "DNK Blue Shoes",
        price: "$200.00 - $240.00",
        category: "Men",
        rating: "☆☆☆☆☆",
        color: ["blue", "green", "red"],
        onSale: false
    },
    {
        id: 3,
        img: "./images/product3.jpg",
        alt: "product3",
        product_Name: "Dark Brown Jeans",
        price: "$200.00 - $240.00",
        category: "Men",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: false
    },
    {
        id: 4,
        img: "./images/product4.jpg",
        alt: "product4",
        product_Name: "Blue Denim Shorts",
        price: "$130.00",
        category: "Women",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: false
    },
    {
        id: 5,
        img: "./images/product5.jpg",
        alt: "product5",
        product_Name: "Anchor Bracelet",
        price: "$150.00 - $180.00",
        category: "Accessories",
        rating: "☆☆☆☆☆",
        color: ["black", "brown", "maroon"],
        onSale: false
    },
    {
        id: 6,
        img: "./images/product6.jpg",
        alt: "product6",
        product_Name: "Boho Bangle Bracelet",
        price: "$150.00 - $170.00",
        category: "Accessories",
        rating: "☆☆☆☆☆",
        color: ["blue", "green", "maroon"],
        onSale: true
    },
    {
        id: 7,
        img: "./images/product7.jpg",
        alt: "product7",
        product_Name: "Blue Denim Jeans",
        price: "$150.00",
        category: "Women",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: false
    },
    {
        id: 8,
        img: "./images/product8.jpg",
        alt: "product8",
        product_Name: "Basic Gray Jeans",
        price: "$150.00",
        category: "Women",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: false
    },
    {
        id: 9,
        img: "./images/product9.jpg",
        alt: "product9",
        product_Name: "Light Brown Purse",
        price: "$150.00",
        category: "Accessories",
        rating: "☆☆☆☆☆",
        color: [],
        onSale: false
    },
    {
        id: 10,
        img: "./images/product10.jpg",
        alt: "product10",
        product_Name: "Bright Red Bag",
        price: "$100.00 - $140.00",
        category: "Accessories",
        rating: "☆☆☆☆☆",
        color: ["blue", "yellow", "purple", "brown"],
        onSale: false
    }
];

function renderCatalog() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const productImage = document.createElement('img');
        productImage.src = product.img;
        productImage.alt = product.alt;

        if (product.onSale) {
            const saleTag = document.createElement('div');
            saleTag.classList.add('sale-tag');
            saleTag.textContent = 'Sale!';
            imageWrapper.appendChild(saleTag); 
        }
    
        imageWrapper.appendChild(productImage); 
        productCard.appendChild(imageWrapper);

        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = product.product_Name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;

        const productRating = document.createElement('div');
        productRating.classList.add("product-rating");
        productRating.textContent = product.rating;

        const productCategory = document.createElement('p');
        productCategory.classList.add("product-category");
        productCategory.textContent = product.category;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(productCategory);

        productCard.addEventListener('click', () => openModal(product));
        console.log("Product clicked:", product); 
        catalog.appendChild(productCard);

        // Color display section
        if (product.color && product.color.length > 0) {
            const colorContainer = document.createElement('div');
            colorContainer.classList.add('colors');

            product.color.forEach(color => {
                const colorDot = document.createElement('div');
                colorDot.classList.add('color-dot');
                colorDot.style.backgroundColor = color; // Set the background color
                colorDot.title = color; // Optional: show the color name on hover
                colorContainer.appendChild(colorDot);
            });

            productCard.appendChild(colorContainer);
        }
    })

function openModal(product) {
    
    if (product) {
        const modalColor = document.querySelector('.modalProductColor');
        modalColor.innerHTML = '';
        console.log("Opening modal for:", product);
        document.getElementById('modal-image').src = product.img;
        document.getElementById('modal-image').alt = product.alt;
        document.getElementById('modalProductName').textContent = product.product_Name;
        document.getElementById('modalProductPrice').textContent = `Price: ${product.price}`;
        document.getElementById('modalProductCategory').textContent = `Category: ${product.category}`;
        document.getElementById('modalProductRating').textContent = product.rating;

        if (product.color.length > 0) {
            product.color.forEach(color => {
                const colorDot = document.createElement('div');
                colorDot.classList.add('color-dot'); // Add class for styling
                colorDot.style.backgroundColor = color; // Set the background color
                modalColor.appendChild(colorDot);
            });
        } else {
            modalColor.textContent = 'No available colors';
        }

        const modal = document.getElementById('productModal');
        modal.style.display = 'block';
    } else {
        console.error("No product found");
    }
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('close').addEventListener('click', () => {
        
        document.getElementById('productModal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
}
renderCatalog();
