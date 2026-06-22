/* ============================================
   BALAJI CONSTRUCTION - Gallery JavaScript
   Lightbox viewer & gallery interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Lightbox Functionality ----
  const galleryItems = document.querySelectorAll('.gallery-item, .project-card');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-content img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let currentImageIndex = 0;
  let galleryImages = [];

  // Collect all gallery images
  const collectImages = () => {
    galleryImages = [];
    document.querySelectorAll('.gallery-item img').forEach(img => {
      galleryImages.push(img.src);
    });
  };

  // Open lightbox
  const openLightbox = (index) => {
    if (!lightbox || galleryImages.length === 0) return;
    currentImageIndex = index;
    lightboxImg.src = galleryImages[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    
    // Smooth transition
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      lightboxImg.src = galleryImages[currentImageIndex];
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }, 200);
  };

  // Setup lightbox events
  if (lightbox) {
    collectImages();

    // Click on gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        collectImages(); // Refresh in case of filtering
        openLightbox(index);
      });
    });

    // Close button
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Navigation buttons
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => navigateLightbox(1));
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
      }
    });

    // Add transition to lightbox image
    if (lightboxImg) {
      lightboxImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
  }


  // ---- Gallery Category Filter (if on gallery page) ----
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItemElements = document.querySelectorAll('.gallery-item');

  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItemElements.forEach(item => {
          const category = item.getAttribute('data-category');

          if (filterValue === 'all' || category === filterValue) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 400);
          }
        });

        // Re-collect images after filter for lightbox
        setTimeout(collectImages, 500);
      });
    });
  }


  // ---- Touch/Swipe Support for Lightbox ----
  if (lightbox) {
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
          navigateLightbox(1); // Swipe left = next
        } else {
          navigateLightbox(-1); // Swipe right = prev
        }
      }
    }, { passive: true });
  }

});
