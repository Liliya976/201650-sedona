(function(document){

	var link = document.querySelector(".form-content-btn");
	var popup = document.querySelector(".searh-form");

	// var close = popup.querySelector(".modal-content-close"); // кнопка закрытия//
	// var check-in = popup.querySelector("[name=check-in-date]");
	// var check-out = popup.querySelector("[name=check-out-date]");
	// var form = popup.querySelector("form");


	link.addEventListener("click", function(event) {
	  event.preventDefault();
	  popup.classList.add("searh-form-show");
	});

	//   link.addEventListener("click", function(event) {
	//   event.preventDefault();
	//   popup.classList.remove("searh-form-show");
	// });

	// form.addEventListener("submit", function(event) {
	//     if (!check-in.value || !check-out.value) {
	//     event.preventDefault();
	//     console.log("Укажите дату"); 
	//   }
	// });

})(document);
