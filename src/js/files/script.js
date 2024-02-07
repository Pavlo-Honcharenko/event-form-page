// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Opens and closes the card by click on the "show map" button
document.addEventListener('DOMContentLoaded', function () {
	// Get the element with the class "show-map"
	const showMapButton = document.querySelector('.show-map');

	// Check if the showMapButton element exists
	if (showMapButton) {
		// Add a click event listener to the "show-map" button
		showMapButton.addEventListener('click', function () {
			// Toggle the "show" class on the element
			showMapButton.classList.toggle('show');
		});
	}
});
