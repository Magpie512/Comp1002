// Function to show different sections - simple DOM manipulation
function showSection(sectionName) {
    // Hide all sections first
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    // Show the requested section
    var targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Initialize - show the product showcase on page load
window.addEventListener('DOMContentLoaded', function() {
    showSection('product_showcase');
});

// I really didn't need to over complicate it like I did when I was drunk, huh.

// Image gallery functionality
var galleryImages = [
    {
        src: 'img/transistor-physicists-John-Bardeen-American-William-B.jpg',
        alt: 'Transistor inventors at Bell Labs demonstrating the device',
        caption: 'The transistor team at Bell Laboratories'
    },
    {
        src: 'img/—Pngtree—circuit board_1377943.png',
        alt: 'Circuit board with transistor components',
        caption: 'Modern circuit board technology'
    }
];

var currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop around if at the end
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    // Update the image and caption
    var imgElement = document.getElementById('gallery-image');
    var captionElement = document.getElementById('gallery-caption');
    
    if (imgElement && captionElement) {
        imgElement.src = galleryImages[currentImageIndex].src;
        imgElement.alt = galleryImages[currentImageIndex].alt;
        captionElement.textContent = galleryImages[currentImageIndex].caption;
    }
}

// Similar products data and functionality
var similarProducts = [
    {
        title: 'Diodes (Rectifiers)',
        description: 'Semiconductor devices that allow current to flow in one direction, essential for converting AC to DC power and signal processing.',
        features: [
            'One-way current flow',
            'Voltage regulation',
            'Signal detection and mixing',
            'Protection against reverse polarity'
        ]
    },
    {
        title: 'Integrated Circuits',
        description: 'Revolutionary chips that combine multiple transistors and components on a single piece of silicon, enabling compact and complex electronic systems.',
        features: [
            'Miniaturized circuitry',
            'High-speed processing',
            'Reduced power consumption',
            'Cost-effective mass production'
        ]
    },
    {
        title: 'Microprocessors',
        description: 'The brain of modern computers, containing millions of transistors on a single chip to execute instructions and process data.',
        features: [
            'Central processing unit on a chip',
            'Programmable logic',
            'High computational speed',
            'Versatile applications'
        ]
    },
    {
        title: 'Solid-State Memory',
        description: 'Non-volatile storage using transistor-based technology to retain data without power, revolutionizing data storage and retrieval.',
        features: [
            'Fast read/write speeds',
            'No moving parts',
            'Low power consumption',
            'Durable and reliable'
        ]
    }
];

var currentProductIndex = 0;

function changeSimilarProduct(direction) {
    currentProductIndex += direction;
    
    // Loop around if at the end
    if (currentProductIndex >= similarProducts.length) {
        currentProductIndex = 0;
    } else if (currentProductIndex < 0) {
        currentProductIndex = similarProducts.length - 1;
    }
    
    // Update the product display
    var product = similarProducts[currentProductIndex];
    var titleElement = document.getElementById('product-title');
    var descElement = document.getElementById('product-description');
    var featuresElement = document.getElementById('product-features');
    
    if (titleElement && descElement && featuresElement) {
        titleElement.textContent = product.title;
        descElement.textContent = product.description;
        
        // Clear and rebuild features list
        featuresElement.innerHTML = '';
        product.features.forEach(function(feature) {
            var li = document.createElement('li');
            li.textContent = feature;
            featuresElement.appendChild(li);
        });
    }
}