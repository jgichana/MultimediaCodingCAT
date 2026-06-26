const video = document.getElementById("wildlifeVideo");
const actionButton = document.getElementById("videoActionButton");

if (video && actionButton) {
	actionButton.addEventListener("click", async () => {
		const isHidden = video.hidden;

		if (!isHidden) {
			video.pause();
			video.hidden = true;
			actionButton.textContent = "Show video and play";
			actionButton.setAttribute("aria-pressed", "true");
			return;
		}

		video.hidden = false;
		actionButton.textContent = "Hide video";
		actionButton.setAttribute("aria-pressed", "false");

		if (video.paused) {
			try {
				await video.play();
			} catch (error) {
				// Playback may be blocked by browser policy until user interaction.
			}
		}
	});
}
