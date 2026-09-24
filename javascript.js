const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
	const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";

	document.body.classList.toggle("dark-mode", darkModeEnabled);
	themeToggle.textContent = darkModeEnabled ? "Light mode" : "Dark mode";
	themeToggle.setAttribute("aria-label", darkModeEnabled ? "Disable dark mode" : "Enable dark mode");
	themeToggle.setAttribute("aria-pressed", String(darkModeEnabled));

	themeToggle.addEventListener("click", () => {
		const enabled = document.body.classList.toggle("dark-mode");

		localStorage.setItem("dark-mode", enabled ? "enabled" : "disabled");
		themeToggle.textContent = enabled ? "Light mode" : "Dark mode";
		themeToggle.setAttribute("aria-label", enabled ? "Disable dark mode" : "Enable dark mode");
		themeToggle.setAttribute("aria-pressed", String(enabled));
	});
}
