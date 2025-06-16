/**
* Template Name: Presento
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/* Forms JS */
  
        // Honeypot Spam Protection
        document.addEventListener("DOMContentLoaded", function () {
              const forms = document.querySelectorAll("form[action='https://api.web3forms.com/submit']");

              forms.forEach(function (form) {
                  form.addEventListener("submit", async function (event) {
                      event.preventDefault();

                      const botCheck = form.querySelector("input[name='botcheck']");
                      const loading = form.querySelector(".loading");
                      const errorMessage = form.querySelector(".error-message");
                      const sentMessage = form.querySelector(".sent-message");

                      // Honeypot Check: Prevent submission if botcheck is filled (indicates spam)
                      if (botCheck && botCheck.checked) {
                          errorMessage.textContent = "Spam detected. Please try again.";
                          errorMessage.style.display = "block";
                          return;
                      }

                      loading.style.display = "block";
                      errorMessage.style.display = "none";
                      sentMessage.style.display = "none";

                      const formData = new FormData(form);

                      try {
                          let response = await fetch(form.action, {
                              method: "POST",
                              body: formData,
                              headers: {
                                  "Accept": "application/json"
                              }
                          });

                          loading.style.display = "none";

                          if (response.ok) {
                              sentMessage.style.display = "block";
                              form.reset(); // Clear the form upon success
                          } else {
                              const result = await response.json();
                              errorMessage.textContent = result.message || "Something went wrong!";
                              errorMessage.style.display = "block";
                          }
                      } catch (error) {
                          loading.style.display = "none";
                          errorMessage.textContent = "There was an error sending your message. Please try again.";
                          errorMessage.style.display = "block";
                      }
                  });
              });
          });


        document.addEventListener("DOMContentLoaded", function () {
          const forms = document.querySelectorAll("form[action='https://api.web3forms.com/submit']");

          forms.forEach(function (form) {
            form.addEventListener("submit", async function (event) {
              event.preventDefault();

              const loading = form.querySelector(".loading");
              const errorMessage = form.querySelector(".error-message");
              const sentMessage = form.querySelector(".sent-message");

              loading.style.display = "block";
              errorMessage.style.display = "none";
              sentMessage.style.display = "none";

              const formData = new FormData(form);

              try {
                let response = await fetch(form.action, {
                  method: "POST",
                  body: formData,
                  headers: {
                    "Accept": "application/json"
                  }
                });

                loading.style.display = "none";

                if (response.ok) {
                  sentMessage.style.display = "block";
                  form.reset();  // Clear the form upon success
                } else {
                  const result = await response.json();
                  errorMessage.textContent = result.message || "Something went wrong!";
                  errorMessage.style.display = "block";
                }
              } catch (error) {
                loading.style.display = "none";
                errorMessage.textContent = "There was an error sending your message. Please try again.";
                errorMessage.style.display = "block";
              }
            });
          });
        });

        
        
  
  /* Hidden about section */

    // Get the 'Read More' hidden content section
    var content = document.getElementById("read-more-content");

    //Hidden-content section remain hidden when refresh
    /*window.addEventListener('beforeunload', function() {
      document.querySelectorAll('.hidden-content').forEach(function(element) {
        element.style.display = 'none';
      });
    });*/

    // Wait for the DOM to load completely
    document.addEventListener('DOMContentLoaded', function() {
      // Get the 'Read More' link
      var readMoreLink = document.querySelector('.read-more');

      // Add click event listener to the 'Read More' link
      readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default link behavior

        //

        // Toggle the hidden content visibility
        if (content.style.display === "block") {
          content.style.display = "none";
          readMoreLink.innerHTML = '<span data-translate="true">Read More</span><i class="bi bi-chevron-down"></i>';
        } else {
          content.style.display = "block";
          readMoreLink.innerHTML = '<span data-translate="true">Show Less</span><i class="bi bi-chevron-up"></i>';

        // Scroll to the "Read More" section
          content.scrollIntoView({
            behavior: "smooth",  // Optional for smooth scrolling
            block: "start"  // Aligns to the top of the section
          });

        }
      });
    });


(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();