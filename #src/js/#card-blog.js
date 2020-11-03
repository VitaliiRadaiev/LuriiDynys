{
	let card = document.querySelectorAll('.card-blog');
	if(card.length>0) {
		card.forEach( function(elem, index) {
			let textBlock = elem.querySelector('.card-blog__text');

			let span = textBlock.querySelector('span')
			if(span) {
				span.remove();
			}
			
			let text = textBlock.innerText;
			if(text.length > 405) {
				textBlock.innerHTML = [...text].splice(0, 405).join('') + ' <span>… more</span>';
			} else {
				textBlock.innerHTML = text + ' <span>… more</span>';
			}

		});
	}
}