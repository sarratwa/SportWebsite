$(document).ready(function() {
	activeLink();

	/*

	active link header

	*/

	function activeLink() {
		$(document).ready(function () {
			$('.site-navigation ul li a').click(function(e) {
		
				$('.site-navigation ul li.active').removeClass('active');
		
				var $parent = $(this).parent();
				$parent.addClass('active');
				e.preventDefault();
			});
		});
	}
});