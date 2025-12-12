// I can't recall where I learned how to do this. I'm gonna say AI taught me how to do this. Idk man I was drunk
// I do appreciate the notes I left for myself. Easy understanding for when I am overewhelmed

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
        // Display mode - shift to block element (as oppose to none.)
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
        caption: 'The first point contact transistor.'
    },
    { 
        src: 'img/transistor.jpg',
        alt: 'Close-up of a transistor component',
        caption: 'Another Angle of the transistor.'
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
        // https://en.wikipedia.org/wiki/Electret_microphone //
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
        // https://en.wikipedia.org/wiki/Model_V //
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

// Review form functionality
function addReview(event) {
    event.preventDefault();
    
    // Get form values
    var reviewerName = document.getElementById('reviewer-name').value;
    var rating = document.getElementById('rating-select').value;
    var reviewText = document.getElementById('review-text').value;
    
    // Create star rating string
    var starRating = '';
    for (var i = 1; i <= 5; i++) {
        starRating += i <= rating ? '★' : '☆';
        // Windows Character Map //
    }
    
    // Get current date
    var currentDate = new Date();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
    var dateString = monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
    
    // Create new review card
    var reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = 
        '<div class="review-header">' +
        '<h4>' + reviewerName + '</h4>' +
        '<div class="rating">' + starRating + '</div>' +
        '</div>' +
        '<p class="review-text">"' + reviewText + '"</p>' +
        '<p class="review-date">' + dateString + '</p>';
    
    // Add to reviews container
    var reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.appendChild(reviewCard);
    
    // Reset form
    document.getElementById('review-form').reset();
    
    // Hide the form section
    var formSection = document.querySelector('.add-review-section');
    if (formSection) {
        formSection.style.display = 'none';
    }
    
    // Scroll to new review
    reviewCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
