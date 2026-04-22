document.addEventListener("DOMContentLoaded", () => {
	onload = () => {
		const c = setTimeout(() => {
			document.body.classList.remove("not-loaded");
			clearTimeout(c);
		}, 1000);
	};

	const phrases = [
		"Animo con tu trabajoooo 💻💗 ",
		"Sigue así, vas super bien Fauu 👏🏼",
		"Puedes con todooo 💪🏼",
		"Fau, eres lo máximo 🥳💖 ",
	];

	const title = document.getElementById("title");

	const index = Math.floor(Math.random() * phrases.length);

	title.innerHTML = phrases[index];
});
