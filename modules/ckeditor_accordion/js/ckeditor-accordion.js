/**
 * @file
 * CKEditor Accordion functionality.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.ckeditorAccordion = {
    attach: function (context, settings) {

      // Create accordion functionality if the required elements exist is available.
      var $ckeditorAccordion = $('.ckeditor-accordion');
      if ($ckeditorAccordion.length > 0) {
        // Create simple accordion mechanism for each tab.
        $ckeditorAccordion.each(function () {
          var $accordion = $(this);
          if ($accordion.hasClass('styled')) {
            return;
          }

          // The first one is the correct one.
          if (!drupalSettings.ckeditorAccordion.accordionStyle.collapseAll) {
            $accordion.children('dt:first').addClass('active');
            $accordion.children('dd:first').addClass('active');
            $accordion.children('dd:first').css('display', 'block');
          }

          // Turn the accordion tabs to links so that the content is accessible & can be traversed using keyboard.
          $accordion.children('dt').each(function () {
            var $tab = $(this);
            var tabText = $tab.html();
            var toggleClass = $tab.hasClass('active') ? ' active' : '';
            $tab.html('<span class="ckeditor-accordion-toggle' + toggleClass + '"></span><a class="ckeditor-accordion-toggler" href="#">' + tabText + '</a>');
          });

          // Wrap the accordion in a div element so that quick edit function shows the source correctly.
          $accordion.addClass('styled').removeClass('ckeditor-accordion').wrap('<div class="ckeditor-accordion-container"></div>');

          // Trigger an ckeditorAccordionAttached event to let other frameworks know that the accordion has been attached.
          $accordion.trigger('ckeditorAccordionAttached');
        });

        // Add click event to body once because quick edits & ajax calls might reset the HTML.
        $('dt').click(function(e){
          e.preventDefault();
          $('dt').removeClass('active');
          $('dd').hide();
          $(this).addClass('active');
          $(this).next().show();
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
