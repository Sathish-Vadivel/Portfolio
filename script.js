function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const blog_container = document.querySelector('.blog_container');

    // Define scroll speed and interval
    const scrollSpeed = 2; // Adjust scroll speed (higher value for faster scrolling)
    const scrollInterval = 30; // Adjust scroll interval in milliseconds
    let scrollDirection = 'right'; // Initial scroll direction

    // Function to scroll blog_container automatically
    function autoScroll() {
        if (scrollDirection === 'right') {
            blog_container.scrollLeft += scrollSpeed;
            // Check if reached end of scroll
            if (blog_container.scrollLeft >= blog_container.scrollWidth - blog_container.clientWidth) {
                scrollDirection = 'left';
            }
        } else if (scrollDirection === 'left') {
            blog_container.scrollLeft -= scrollSpeed;
            // Check if scrolled back to start
            if (blog_container.scrollLeft <= 0) {
                scrollDirection = 'right';
            }
        }
    }

    // Start auto-scrolling
    let scrollIntervalId = setInterval(autoScroll, scrollInterval);

    // Stop auto-scrolling when mouse enters blog_container
    blog_container.addEventListener('mouseenter', () => {
        clearInterval(scrollIntervalId);
    });

    // Resume auto-scrolling when mouse leaves blog_container
    blog_container.addEventListener('mouseleave', () => {
        scrollIntervalId = setInterval(autoScroll, scrollInterval);
    });

    // Optional: Stop auto-scrolling when clicking on a blog_card
    const blog_cards = document.querySelectorAll('.blog_card');
    blog_cards.forEach(blog_card => {
        blog_card.addEventListener('click', () => {
            clearInterval(scrollIntervalId);
        });
    });
});

function openCertificateModal(modalId) {
    document.getElementById("cert-overlay").style.display = "block";
    document.getElementById(modalId).style.display = "block";
}

function closeCertificateModal() {
    document.getElementById("cert-overlay").style.display = "none";

    document.querySelectorAll(".cert-modal-box").forEach(modal => {
        modal.style.display = "none";
    });
}
