let observer = new IntersectionObserver((entries) => { 
	entries.forEach(entry => {
		if(entry.isIntersecting) entry.target.classList.add('animation');
	});
}, {rootMargin: '5px'});
document.querySelectorAll('.animate').forEach(element=>{observer.observe(element)});
document.querySelectorAll('.animate-inside > *:not(.animate-inside)').forEach(element=>{observer.observe(element)});

function goTo(offset = 0, duration = 1000) {
	var initialPosition = window.pageYOffset;
	var frequency = 3;
	var count = (duration - (duration % frequency)) / frequency;
	var gap = (offset - initialPosition) / count;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
		window.scrollTo({top: gap * count + initialPosition, left: 0, behavior: 'auto'})
	else
		for (var i = 1; i <= count; i++)
			(function()	{
				var position = gap * i;
				setTimeout(function(){window.scrollTo({top: position + initialPosition, left: 0, behavior: 'smooth'});}, frequency * i);
			})();
};
if (document.querySelector('header > a') && (location.pathname == '/web/stopa/www/')) {
	document.querySelector('header > a').addEventListener('click', function () {
		event.preventDefault();
		goTo();
	});
};
if (document.querySelector('header > nav > a.current')) {
	document.querySelector('header > nav > a.current').addEventListener('click', function () {
		event.preventDefault();
		goTo();
	});
};
if (document.querySelector('footer > div > div.goto > a[href="#"]')) {
	document.querySelector('footer > div > div.goto > a[href="#"]').addEventListener('click', function () {
		event.preventDefault();		
		goTo();
	});
};
if (document.querySelector('section.introduction > div > a[href="#trasy"]')) {
	document.querySelector('section.introduction > div > a[href="#trasy"]').addEventListener('click', function () {
		event.preventDefault();
		goTo((document.getElementById('trasy').offsetTop - document.querySelector('header').scrollHeight) + parseFloat(window.getComputedStyle(document.querySelector('main.homepage > section.trails')).getPropertyValue('padding-top')) - parseFloat(getComputedStyle(document.documentElement).fontSize)*2);
	});
};
if (location.hash == '#rocniky') {
	goTo(document.getElementById('rocniky').offsetTop - document.querySelector('header').scrollHeight, 333);
	history.replaceState(null, document.title, location.pathname+location.search);
};
if (location.hash.match(/#rocnik-\d{1,2}/)) {
	var target = location.hash.split('#')[1];
	goTo(Math.max((document.getElementById('rocniky').offsetTop - document.querySelector('header').scrollHeight), (document.getElementById(target).offsetTop - (window.innerHeight / 2))), 666);
	history.replaceState(null, document.title, location.pathname+location.search);
	setTimeout(function(){document.getElementById(target).classList.add('anchored');}, 666 * 2);
	setTimeout(function(){document.getElementById(target).classList.remove('anchored');}, 666 * 4);
};

console.log("%c   _____                           _       _\n  / ____|                         /_/     | |\n | (___   _____   _____ _ __ _ __  _   ___| |_ ___  _ __   ___  _   _\n  \\___ \\ / _ \\ \\ / / _ \\ '__| '_ \\| | / __| __/ _ \\| '_ \\ / _ \\| | | |\n  ____) |  __/\\ V /  __/ |  | | | | | \\__ \\ || (_) | |_) | (_) | |_| |\n |_____/ \\___| \\_/ \\___|_|  |_| |_|_| |___/\\__\\___/| .__/ \\___/ \\__,_|\n                                                   | |\n                                                   |_|\n","color: green; font-family: monospace; font-weight: bold;");