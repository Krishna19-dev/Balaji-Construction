/* ============================================
   BALAJI CONSTRUCTION - Form Validation
   Client-side form validation with feedback
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  // ---- Validation Rules ----
  const validators = {
    name: {
      validate: (value) => value.trim().length >= 2,
      message: 'Please enter your full name (at least 2 characters)'
    },
    email: {
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value.trim());
      },
      message: 'Please enter a valid email address'
    },
    phone: {
      validate: (value) => {
        if (value.trim() === '') return true; // Phone is optional
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
        return phoneRegex.test(value.trim());
      },
      message: 'Please enter a valid phone number (10-15 digits)'
    },
    subject: {
      validate: (value) => value.trim() !== '' && value.trim() !== 'Select a Subject',
      message: 'Please select a subject'
    },
    message: {
      validate: (value) => value.trim().length >= 10,
      message: 'Please enter a message (at least 10 characters)'
    }
  };


  // ---- Helper Functions ----

  /**
   * Show error state on a form group
   * @param {HTMLElement} formGroup - The .form-group container
   * @param {string} message - Error message to display
   */
  const showError = (formGroup, message) => {
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    const errorEl = formGroup.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  /**
   * Show success state on a form group
   * @param {HTMLElement} formGroup - The .form-group container
   */
  const showSuccess = (formGroup) => {
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
  };

  /**
   * Clear validation state from a form group
   * @param {HTMLElement} formGroup - The .form-group container
   */
  const clearState = (formGroup) => {
    formGroup.classList.remove('error', 'success');
  };

  /**
   * Validate a single field
   * @param {HTMLElement} input - The input element
   * @returns {boolean} Whether the field is valid
   */
  const validateField = (input) => {
    const fieldName = input.getAttribute('name');
    const formGroup = input.closest('.form-group');
    const validator = validators[fieldName];

    if (!validator || !formGroup) return true;

    if (validator.validate(input.value)) {
      showSuccess(formGroup);
      return true;
    } else {
      showError(formGroup, validator.message);
      return false;
    }
  };


  // ---- Real-time Validation on Blur ----
  const formInputs = contactForm.querySelectorAll('.form-input');
  
  formInputs.forEach(input => {
    // Validate on blur (when user leaves field)
    input.addEventListener('blur', () => {
      if (input.value.trim() !== '') {
        validateField(input);
      }
    });

    // Clear error on focus (when user starts typing again)
    input.addEventListener('focus', () => {
      const formGroup = input.closest('.form-group');
      if (formGroup && formGroup.classList.contains('error')) {
        clearState(formGroup);
      }
    });

    // Live validation on input for fields already in error
    input.addEventListener('input', () => {
      const formGroup = input.closest('.form-group');
      if (formGroup && formGroup.classList.contains('error')) {
        validateField(input);
      }
    });
  });


  // ---- Form Submission ----
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const formData = {};

    // Validate all fields
    formInputs.forEach(input => {
      const fieldName = input.getAttribute('name');
      if (fieldName && validators[fieldName]) {
        if (!validateField(input)) {
          isValid = false;
        }
        formData[fieldName] = input.value.trim();
      }
    });

    if (!isValid) {
      // Scroll to first error
      const firstError = contactForm.querySelector('.form-group.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';

      // Show success message
      const successMessage = document.querySelector('.form-success-message');
      if (successMessage) {
        successMessage.classList.add('visible');
        successMessage.innerHTML = `
          <i class="fas fa-check-circle" style="font-size: 2rem; color: #10B981; display: block; margin-bottom: 12px;"></i>
          <h4 style="margin-bottom: 8px; color: #065F46;">Thank You, ${formData.name || 'Guest'}!</h4>
          <p>Your message has been received successfully. Our team will get back to you within 24 hours.</p>
        `;
      }

      // Reset form
      contactForm.reset();
      formInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        if (formGroup) clearState(formGroup);
      });

      // Hide success message after 8 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove('visible');
        }
      }, 8000);

      // Log form data (for development)
      console.log('Form submitted:', formData);
    }, 1500);
  });


  // ---- Character Counter for Message Field ----
  const messageField = contactForm.querySelector('textarea[name="message"]');
  if (messageField) {
    const maxLength = 1000;
    
    // Create character counter element
    const counterEl = document.createElement('div');
    counterEl.style.cssText = 'text-align: right; font-size: 0.75rem; color: #9CA3AF; margin-top: 4px;';
    counterEl.textContent = `0 / ${maxLength} characters`;
    messageField.parentElement.appendChild(counterEl);

    messageField.addEventListener('input', () => {
      const length = messageField.value.length;
      counterEl.textContent = `${length} / ${maxLength} characters`;
      
      if (length > maxLength) {
        counterEl.style.color = '#EF4444';
      } else if (length > maxLength * 0.8) {
        counterEl.style.color = '#F59E0B';
      } else {
        counterEl.style.color = '#9CA3AF';
      }
    });
  }

});
