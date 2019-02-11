/**
 * 1. Search Popup
 * 2. Index Tiled
 * 3. Menu Mobile
 * 4. Project Detail
 * 5. Preload
 */

'use strict';

// Send email
$(function() {
    // Get the form.
    var form = $('#ajax-contact');
    // Get the messages div.
    var formMessages = $('#form-messages');
    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
    	// Stop the browser from submitting the form.
    	event.preventDefault();
    	// Serialize the form data.
		var formData = $(form).serialize();
		console.log("FORM: " + formData);
		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		}).done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text(response);

		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#message').val('');
		}).fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});
	});
});

(function ($) {
	$(document).ready(function () {

		var $header = $('.sidebar');

		// Menu Mobile
		var $btnMenu = $('.menu-mobile'),
			$hideMenu = $('.hide-menu');

		$btnMenu.on('click', function () {
			$header.toggleClass('active');

			if ($header.hasClass('active')) {
				$hideMenu.addClass('active');
			}
			else {
				$hideMenu.removeClass('active');
			}
		});
		$hideMenu.on('click', function () {
			$header.removeClass('active');
			$hideMenu.removeClass('active');
		});

		$('.menu-item-has-children', '.main-menu').on('click', ' > a', function (e) {
			var ww = $(window).width();

			if (ww <=991) {
				var $parent = $(e.target).closest('.menu-item-has-children');
				e.preventDefault();
				$('>.sub-menu', $parent).slideToggle(400);
			}
		});
	});
})(jQuery);