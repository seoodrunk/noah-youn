var filterActive = false;

function nextSlide($slide) {
	var $container = $slide.parent('.slides'),
		slidesCount = $container.data('slides-count'),
		slideIndex = $slide.data('slide-index');

	console.log(slidesCount, slideIndex);

	if (slideIndex < slidesCount) {
		$slide.next('.slide').toggleClass('slide-active');
		$slide.toggleClass('slide-active');
	} else {
		$container.children().first().toggleClass('slide-active');
		$slide.toggleClass('slide-active');
	}
}

function categoryFilter(filter) {
	$('.project').removeClass('category-filtered');

	if (filter) {
		console.log('show only ' + filter);
		$('.project[data-category!="' + filter + '"]').addClass('category-filtered');
	}

	filterActive = filter;
}

$(document).ready(function(){

	$('.category-filter').click(function() {
		var category = $(this).data('category-filter');
		$('.category-filter').removeClass('category-filter-active');

		if (filterActive == category) {
			categoryFilter(false);
		} else {
			$(this).addClass('category-filter-active');
			categoryFilter(category);
		}
	});

	$('.slide').click(function() {
		nextSlide($(this));
	});
});

function myFunction() {
    console.log("click");
  var x = document.getElementById("hide");
  if (x.style.display === "none") {
     x.style.display = "block";}
    else {x.style.display = "none";}
            }
