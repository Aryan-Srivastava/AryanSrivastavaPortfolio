// particles in background
particlesJS("particles-js", {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
		},
		size: {
			value: 8.5,
			random: true,
			anim: {
				enable: true,
				speed: 12,
				size_min: 0.1,
				sync: true,
			},
		},
		move: {
			enable: true,
			speed: 5,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 900,
				rotateY: 1200,
			},
		},
	},
});

// typing animation
var typed = new Typed("#typed", {
	stringsElement: "#typed-strings",
	smartBackspace: true,
	loop: true,
	cursor: false,
	typeSpeed: 80,
	backSpeed: 70,
	loopCount: Infinity,
	showCursor: false,
});

// cursor

const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;

	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

	//cursor effects when mouse stopped
	function mouseStopped() {
		cursor.style.display = "none";
	}
	clearTimeout(timeout);
	timeout = setTimeout(mouseStopped, 1000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
});

// pwa

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("sw.js")
			.then((res) => console.log("service worker registered"))
			.catch((err) => console.log("service worker not registered", err));
	});
}