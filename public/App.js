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
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#b6b2b2",
			},
		},
		opacity: {
			value: 0.5211089197812949,
			random: false,
			anim: {
				enable: true,
				speed: 4,
				opacity_min: 0.1,
				sync: false,
			},
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
		line_linked: {
			enable: true,
			distance: 200,
			color: "#c8c8c8",
			opacity: 0.4,
			width: 1,
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
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "repulse",
			},
			onclick: {
				enable: false,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
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
			.register("/sw.js")
			.then((res) => console.log("service worker registered"))
			.catch((err) => console.log("service worker not registered", err));
	});
}