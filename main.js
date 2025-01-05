document.addEventListener("DOMContentLoaded", () => {
	onload = () => {
		const c = setTimeout(() => {
			document.body.classList.remove("not-loaded");
			clearTimeout(c);
		}, 1000);
	};

	const phrases = [
		"Eres la mejor Enfermera 🐈‍⬛",
		"Estefanía, eres maravillosa 🌹",
		"Siempre estaré para ti 💫",
		"Puedes con todooo 💪🏼",
		"Leona licenciada oficial 🦁",
		"Te quiero mucho 💕",
		"Te mereces toditooo 🌟",
	];

	const title = document.getElementById("title");

	const index = Math.floor(Math.random() * phrases.length);

	title.innerHTML = phrases[index];
});
