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
        caption: 'The first point contact transistor'
    },
    { 
        src: 'img/transistor.jpg',
        alt: 'Close-up of a transistor component',
        caption: 'Another Angle of the transistor'
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
        title: 'Electret Microphone',
        img: 'img/Electret_condenser_microphone_capsules.jpg',
        alt: 'An early microphone',
        description: 'An electret microphone is a type of condenser microphone that uses a permanently charged material to convert sound waves into electrical signals.',
        features: [
            'Compact and Low Cost',
            'Clear Audio Capture',
            'No Need for External Power'
        ]
    },
    {
        title: 'Model V Relay Computer',
        img: 'img/Bell_Relay_Computer.png',
        alt: 'An early relay computer',
        description: 'An early computer that utilized electromechanical relays for processing, showcasing the transition from mechanical to electronic computing.',
        features: [
            'Electromechanical switching',
            'Floating-point arithmetic',
            'Multi processing'
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
    var imgElement = document.getElementById('product-image');
    
    if (titleElement && descElement && featuresElement) {
        titleElement.textContent = product.title;
        descElement.textContent = product.description;
        
        // Update image if it exists
        if (imgElement && product.img) {
            imgElement.src = product.img;
            imgElement.alt = product.alt;
        }
        
        // Clear and rebuild features list
        featuresElement.innerHTML = '';
        product.features.forEach(function(feature) {
            var li = document.createElement('li');
            li.textContent = feature;
            featuresElement.appendChild(li);
        });
    }
}