$(document).on("shiny:sessioninitialized", function(event) {
	// initialize with first active tab (if there is one)
	var active_tab = $(".header-nav a.active");
	Shiny.setInputValue("header-switch", false);

	if (active_tab.length) {
		Shiny.setInputValue("header-nav", active_tab[0].innerText);
	}

	$(".header-nav > a").on("click", function() {
		Shiny.setInputValue("header-nav", this.innerText);

		$(".header-nav > a").removeClass("active");
		$(this).addClass("active");
	});

	$(".header-links > a").on("click", function() {
		Shiny.setInputValue("header-link", $(this).attr("title"), {priority: "event"});
	});

	$(".header-switch").on("click", function() {
		if ($(this).hasClass("highlight")) {
			Shiny.setInputValue("header-switch", false);
			$(this).removeClass("highlight");
		} else {
			Shiny.setInputValue("header-switch", true);
			$(this).addClass("highlight");
		}

		$("div.nicescroll-rails").remove();
	});
});