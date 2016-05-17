(function(document){

	var link = document.querySelector(".form-content-btn");
	var popup = document.querySelector(".searh-form");

	link.addEventListener("click", function(event) {
	  event.preventDefault();
	  popup.classList.add("searh-form-show");
	});

})(document);
