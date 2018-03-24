$(() => {
	const $openButton = $('#openModal');
	const $modal = $('#modal');
	const $closeButton = $('#modal');

	const openModal = () => {
		$modal.css('display', 'block');
	};
	const closeModal = () => {
		$modal.css('display', 'none');
	};

	$openButton.on('click', openModal);
	$closeButton.on('click', closeModal);
	setTimeout(openModal, 1000);
});
