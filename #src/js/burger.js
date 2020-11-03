// === Burger Handler =====================================================================
{
	let burg = document.querySelector('.burger');
	let sidePanel = document.querySelector('.side-panel');
	if(burg) {
		burg.addEventListener('click',function() {
			if(sidePanel) {
				sidePanel.classList.toggle('open');
			}
		})
	}
	
	if(sidePanel) {
		window.addEventListener('click', function(e) {
			if(!e.target.closest('.side-panel') && !e.target.closest('.burger')) {
				sidePanel.classList.remove('open');
			}
		})
	}
}
// === Burger Handler =====================================================================	