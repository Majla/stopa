'use strict';
(function(){
	var el = document.createElement('style');
	el.setAttribute('nonce', document.currentScript.getAttribute('nonce') || document.currentScript.nonce);
	el.className='tracy-debug';
	el.textContent="#tracy-debug,#tracy-debug *{font: inherit;line-height: inherit;color: inherit;background: transparent;margin: 0;padding: 0;border: none;text-align: inherit;list-style: inherit;opacity: 1;border-radius: 0;box-shadow: none;text-shadow: none;box-sizing: border-box;text-decoration: none;text-transform: inherit;white-space: inherit;float: none;clear: none;max-width: initial;min-width: initial;max-height: initial;min-height: initial}#tracy-debug *:not(svg):not(img):not(table){width: initial;height: initial}#tracy-debug:before,#tracy-debug:after,#tracy-debug *:before,#tracy-debug *:after{all: unset}#tracy-debug{display: none;direction: ltr}body#tracy-debug{display: block}#tracy-debug:not(body){position: absolute;left: 0;top: 0}#tracy-debug b,#tracy-debug strong{font-weight: bold}#tracy-debug small{font-size: smaller}#tracy-debug i,#tracy-debug em{font-style: italic}#tracy-debug a{color: #125EAE;text-decoration: none}#tracy-debug a:hover,#tracy-debug a:focus{background-color: #125EAE;color: white}#tracy-debug h2,#tracy-debug h3,#tracy-debug p{margin: .4em 0}#tracy-debug table{border-collapse: collapse;background: #FDF5CE;width: 100%}#tracy-debug tr:nth-child(2n) td{background: rgba(0,0,0,0.02)}#tracy-debug td,#tracy-debug th{border: 1px solid #E6DFBF;padding: 2px 5px;vertical-align: top;text-align: left}#tracy-debug th{background: #F4F3F1;color: #655E5E;font-size: 90%;font-weight: bold}#tracy-debug .tracy-sortable>:first-child>tr:first-child>*{position: relative}#tracy-debug .tracy-sortable>:first-child>tr:first-child>*:hover:before{position: absolute;right: .3em;content:\"\\21C5\";opacity: .4;font-weight: normal}#tracy-debug pre,#tracy-debug code{font: 9pt\/1.5 Consolas,monospace}#tracy-debug pre{white-space: pre}#tracy-debug table .tracy-right{text-align: right}#tracy-debug svg{display: inline}#tracy-debug-bar{font: normal normal 13px\/1.55 Tahoma,sans-serif;color: #333;border: 1px solid #c9c9c9;background: #EDEAE0 url('data:image\/png;base64,R0lGODlhAQAUALMAAOzq4e\/t5e7s4\/Dt5vDu5e3r4vDu5uvp4O\/t5AAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABABQAAAQM0EgySEAYi1LA+UcEADs=') top;background-size: 1em;position: fixed;min-width: 50px;white-space: nowrap;z-index: 30000;opacity: .9;transition: opacity 0.2s;will-change: opacity,top,left;border-radius: 3px;box-shadow: 1px 1px 10px rgba(0,0,0,.15)}#tracy-debug-bar:hover{opacity: 1;transition: opacity 0.1s}#tracy-debug-bar .tracy-row{list-style: none none;display: flex}#tracy-debug-bar .tracy-row:not(:first-child){background: #d5d2c6;opacity: .8}#tracy-debug-bar .tracy-row[data-tracy-group=\"ajax\"]{animation: tracy-row-flash .2s ease}@keyframes tracy-row-flash{0%{background: #c9c0a0}}#tracy-debug-bar .tracy-row:not(:first-child) li:first-child{width: 4.1em;text-align: center}#tracy-debug-bar img{vertical-align: bottom;position: relative;top: -2px}#tracy-debug-bar svg{vertical-align: bottom;width: 1.23em;height: 1.55em}#tracy-debug-bar .tracy-label{margin-left: .2em}#tracy-debug-bar li>a,#tracy-debug-bar li>span{color: #000;display: block;padding: 0 .4em}#tracy-debug-bar li>a:hover{color: black;background: #c3c1b8}#tracy-debug-bar li:first-child{cursor: move}#tracy-debug-logo svg{width: 3.4em;margin: 0 .2em 0 .5em}#tracy-debug .tracy-panel{display: none;font: normal normal 12px\/1.5 sans-serif;background: white;color: #333;text-align: left}body#tracy-debug .tracy-panel{display: block}#tracy-debug h1{font: normal normal 23px\/1.4 Tahoma,sans-serif;color: #575753;margin: -5px -5px 5px;padding: 0 5px 0 5px;word-wrap: break-word}#tracy-debug .tracy-inner{overflow: auto;flex: 1}#tracy-debug .tracy-panel .tracy-icons{display: none}#tracy-debug .tracy-panel-ajax h1::after,#tracy-debug .tracy-panel-redirect h1::after{content:'ajax';float: right;font-size: 65%;margin: 0 .3em}#tracy-debug .tracy-panel-redirect h1::after{content:'redirect'}#tracy-debug .tracy-mode-peek,#tracy-debug .tracy-mode-float{position: fixed;flex-direction: column;padding: 10px;min-width: 200px;min-height: 80px;border-radius: 5px;box-shadow: 1px 1px 20px rgba(102,102,102,0.36);border: 1px solid rgba(0,0,0,0.1)}#tracy-debug .tracy-mode-peek,#tracy-debug .tracy-mode-float:not(.tracy-panel-resized){max-width: 700px;max-height: 500px}@media (max-height: 555px){#tracy-debug .tracy-mode-peek,#tracy-debug .tracy-mode-float:not(.tracy-panel-resized){max-height: 100vh}}#tracy-debug .tracy-mode-peek h1{cursor: move}#tracy-debug .tracy-mode-float{display: flex;opacity: .95;transition: opacity 0.2s;will-change: opacity,top,left;overflow: auto;resize: both}#tracy-debug .tracy-focused{display: flex;opacity: 1;transition: opacity 0.1s}#tracy-debug .tracy-mode-float h1{cursor: move;padding-right: 25px}#tracy-debug .tracy-mode-float .tracy-icons{display: block;position: absolute;top: 0;right: 5px;font-size: 18px}#tracy-debug .tracy-mode-window{padding: 10px}#tracy-debug .tracy-icons a{color: #575753}#tracy-debug .tracy-icons a:hover{color: white}#tracy-debug .tracy-inner-container{min-width: 100%;float: left}#tracy-debug .tracy-dump div{padding-left: 3ex}#tracy-debug .tracy-dump div div{border-left: 1px solid rgba(0,0,0,.1);margin-left: .5ex}#tracy-debug .tracy-dump div div:hover{border-left-color: rgba(0,0,0,.25)}#tracy-debug .tracy-dump{background: #FDF5CE;padding: .4em .7em;border: 1px dotted silver;overflow: auto}#tracy-debug table .tracy-dump{padding: 0;margin: 0;border: none}#tracy-debug .tracy-dump-location{color: gray;font-size: 80%;text-decoration: none;background: none;opacity: .5;float: right;cursor: pointer}#tracy-debug .tracy-dump-location:hover,#tracy-debug .tracy-dump-location:focus{color: gray;background: none;opacity: 1}#tracy-debug .tracy-dump-array,#tracy-debug .tracy-dump-object{color: #C22}#tracy-debug .tracy-dump-string{color: #35D;white-space: break-spaces}#tracy-debug div.tracy-dump-string{position: relative;padding-left: 3.5ex}#tracy-debug .tracy-dump-lq{margin-left: calc(-1ex - 1px)}#tracy-debug div.tracy-dump-string:before{content:'';position: absolute;left: calc(3ex - 1px);top: 1.5em;bottom: 0;border-left: 1px solid rgba(0,0,0,.1)}#tracy-debug .tracy-dump-virtual span,#tracy-debug .tracy-dump-dynamic span,#tracy-debug .tracy-dump-string span{color: rgba(0,0,0,0.5)}#tracy-debug .tracy-dump-virtual i,#tracy-debug .tracy-dump-dynamic i,#tracy-debug .tracy-dump-string i{font-size: 80%;font-style: normal;color: rgba(0,0,0,0.5);user-select: none}#tracy-debug .tracy-dump-number{color: #090}#tracy-debug .tracy-dump-null,#tracy-debug .tracy-dump-bool{color: #850}#tracy-debug .tracy-dump-virtual{font-style: italic}#tracy-debug .tracy-dump-public::after{content:' pub'}#tracy-debug .tracy-dump-protected::after{content:' pro'}#tracy-debug .tracy-dump-private::after{content:' pri'}#tracy-debug .tracy-dump-public::after,#tracy-debug .tracy-dump-protected::after,#tracy-debug .tracy-dump-private::after,#tracy-debug .tracy-dump-hash{font-size: 85%;color: rgba(0,0,0,0.5)}#tracy-debug .tracy-dump-indent{display: none}#tracy-debug .tracy-dump-highlight{background: #C22;color: white;border-radius: 2px;padding: 0 2px;margin: 0 -2px}#tracy-debug span[data-tracy-href]{border-bottom: 1px dotted rgba(0,0,0,.2)}#tracy-debug .tracy-toggle:after{content:'';display: inline-block;vertical-align: middle;line-height: 0;border-top: .6ex solid;border-right: .6ex solid transparent;border-left: .6ex solid transparent;transform: scale(1,1.5);margin: 0 .2ex 0 .7ex;transition: .1s transform;opacity: .5}#tracy-debug .tracy-toggle.tracy-collapsed:after{transform: rotate(-90deg) scale(1,1.5) translate(.1ex,0)}@media print{#tracy-debug *{display: none}}.tracy-collapsed{display: none}.tracy-toggle.tracy-collapsed{display: inline}.tracy-toggle{cursor: pointer;user-select: none}.tracy-toggle:after{content:'';display: inline-block;vertical-align: middle;line-height: 0;border-top: .6ex solid;border-right: .6ex solid transparent;border-left: .6ex solid transparent;transform: scale(1,1.5);margin: 0 .2ex 0 .7ex;transition: .1s transform;opacity: .5}.tracy-toggle.tracy-collapsed:after{transform: rotate(-90deg) scale(1,1.5) translate(.1ex,0)}.tracy-sortable>:first-child>tr:first-child>*{position: relative}.tracy-sortable>:first-child>tr:first-child>*:hover:before{position: absolute;right: .3em;content:\"\\21C5\";opacity: .4;font-weight: normal}.tracy-dump.tracy-light{text-align: left;color: #444;background: #fdf9e2;border-radius: 4px;padding: 1em;margin: 1em 0;word-break: break-all;white-space: pre-wrap}.tracy-dump.tracy-light div{padding-left: 2.5ex}.tracy-dump.tracy-light div div{border-left: 1px solid rgba(0,0,0,.1);margin-left: .5ex}.tracy-dump.tracy-light div div:hover{border-left-color: rgba(0,0,0,.25)}.tracy-light .tracy-dump-location{color: gray;font-size: 80%;text-decoration: none;background: none;opacity: .5;float: right;cursor: pointer}.tracy-light .tracy-dump-location:hover,.tracy-light .tracy-dump-location:focus{opacity: 1}.tracy-light .tracy-dump-array,.tracy-light .tracy-dump-object{color: #C22;user-select: text}.tracy-light .tracy-dump-string{color: #35D;white-space: break-spaces}.tracy-light div.tracy-dump-string{position: relative;padding-left: 3.5ex}.tracy-light .tracy-dump-lq{margin-left: calc(-1ex - 1px)}.tracy-light div.tracy-dump-string:before{content:'';position: absolute;left: calc(3ex - 1px);top: 1.5em;bottom: 0;border-left: 1px solid rgba(0,0,0,.1)}.tracy-light .tracy-dump-virtual span,.tracy-light .tracy-dump-dynamic span,.tracy-light .tracy-dump-string span{color: rgba(0,0,0,0.5)}.tracy-light .tracy-dump-virtual i,.tracy-light .tracy-dump-dynamic i,.tracy-light .tracy-dump-string i{font-size: 80%;font-style: normal;color: rgba(0,0,0,0.5);user-select: none}.tracy-light .tracy-dump-number{color: #090}.tracy-light .tracy-dump-null,.tracy-light .tracy-dump-bool{color: #850}.tracy-light .tracy-dump-virtual{font-style: italic}.tracy-light .tracy-dump-public::after{content:' pub'}.tracy-light .tracy-dump-protected::after{content:' pro'}.tracy-light .tracy-dump-private::after{content:' pri'}.tracy-light .tracy-dump-public::after,.tracy-light .tracy-dump-protected::after,.tracy-light .tracy-dump-private::after,.tracy-light .tracy-dump-hash{font-size: 85%;color: rgba(0,0,0,0.5)}.tracy-light .tracy-dump-indent{display: none}.tracy-light .tracy-dump-highlight{background: #C22;color: white;border-radius: 2px;padding: 0 2px;margin: 0 -2px}span[data-tracy-href]{border-bottom: 1px dotted rgba(0,0,0,.2)}.tracy-light .tracy-dump-flash{animation: tracy-dump-flash .2s ease}@keyframes tracy-dump-flash{0%{background: #c0c0c033}}.tracy-dump.tracy-dark{text-align: left;color: #f8f8f2;background: #29292e;border-radius: 4px;padding: 1em;margin: 1em 0;word-break: break-all;white-space: pre-wrap}.tracy-dump.tracy-dark div{padding-left: 2.5ex}.tracy-dump.tracy-dark div div{border-left: 1px solid rgba(255,255,255,.1);margin-left: .5ex}.tracy-dump.tracy-dark div div:hover{border-left-color: rgba(255,255,255,.25)}.tracy-dark .tracy-dump-location{color: silver;font-size: 80%;text-decoration: none;background: none;opacity: .5;float: right;cursor: pointer}.tracy-dark .tracy-dump-location:hover,.tracy-dark .tracy-dump-location:focus{opacity: 1}.tracy-dark .tracy-dump-array,.tracy-dark .tracy-dump-object{color: #f69c2e;user-select: text}.tracy-dark .tracy-dump-string{color: #3cdfef;white-space: break-spaces}.tracy-dark div.tracy-dump-string{position: relative;padding-left: 3.5ex}.tracy-dark .tracy-dump-lq{margin-left: calc(-1ex - 1px)}.tracy-dark div.tracy-dump-string:before{content:'';position: absolute;left: calc(3ex - 1px);top: 1.5em;bottom: 0;border-left: 1px solid rgba(255,255,255,.1)}.tracy-dark .tracy-dump-virtual span,.tracy-dark .tracy-dump-dynamic span,.tracy-dark .tracy-dump-string span{color: rgba(255,255,255,0.5)}.tracy-dark .tracy-dump-virtual i,.tracy-dark .tracy-dump-dynamic i,.tracy-dark .tracy-dump-string i{font-size: 80%;font-style: normal;color: rgba(255,255,255,0.5);user-select: none}.tracy-dark .tracy-dump-number{color: #77d285}.tracy-dark .tracy-dump-null,.tracy-dark .tracy-dump-bool{color: #f3cb44}.tracy-dark .tracy-dump-virtual{font-style: italic}.tracy-dark .tracy-dump-public::after{content:' pub'}.tracy-dark .tracy-dump-protected::after{content:' pro'}.tracy-dark .tracy-dump-private::after{content:' pri'}.tracy-dark .tracy-dump-public::after,.tracy-dark .tracy-dump-protected::after,.tracy-dark .tracy-dump-private::after,.tracy-dark .tracy-dump-hash{font-size: 85%;color: rgba(255,255,255,0.4)}.tracy-dark .tracy-dump-indent{display: none}.tracy-dark .tracy-dump-highlight{background: #C22;color: white;border-radius: 2px;padding: 0 2px;margin: 0 -2px}span[data-tracy-href]{border-bottom: 1px dotted rgba(255,255,255,.2)}.tracy-dark .tracy-dump-flash{animation: tracy-dump-flash .2s ease}@keyframes tracy-dump-flash{0%{background: #c0c0c033}}#tracy-bs{font: 9pt\/1.5 Verdana,sans-serif;background: white;color: #333;position: absolute;z-index: 20000;left: 0;top: 0;width: 100%;text-align: left}#tracy-bs a{text-decoration: none;color: #328ADC;padding: 2px 4px;margin: -2px -4px}#tracy-bs a+a{margin-left: 0}#tracy-bs a:hover,#tracy-bs a:focus{color: #085AA3}#tracy-bs-toggle{position: absolute;right: .5em;top: .5em;text-decoration: none;background: #CD1818;color: white!important;padding: 3px}.tracy-bs-main{display: flex;flex-direction: column;min-height: 100vh}.tracy-bs-main.tracy-collapsed{display: none}#tracy-bs div.panel:last-of-type{flex: 1}#tracy-bs-error{background: #CD1818;color: white;font-size: 13pt}#tracy-bs-error::selection,#tracy-bs-error ::selection{color: black!important;background: #FDF5CE!important}#tracy-bs-error a{color: #ffefa1!important}#tracy-bs-error span span{font-size: 80%;color: rgba(255,255,255,0.5);text-shadow: none}#tracy-bs-error a.action{color: white!important;opacity: 0;font-size: .7em;border-bottom: none!important}#tracy-bs-error:hover a.action{opacity: .6}#tracy-bs-error a.action:hover{opacity: 1}#tracy-bs-error i{color: #ffefa1;font-style: normal}#tracy-bs h1{font-size: 15pt;font-weight: normal;text-shadow: 1px 1px 2px rgba(0,0,0,.3);margin: .7em 0}#tracy-bs h1 span{white-space: pre-wrap}#tracy-bs h2{font-size: 14pt;font-weight: normal;margin: .6em 0}#tracy-bs h3{font-size: 10pt;font-weight: bold;margin: 1em 0;padding: 0}#tracy-bs p,#tracy-bs pre{margin: .8em 0}#tracy-bs pre,#tracy-bs code,#tracy-bs table{font: 9pt\/1.5 Consolas,monospace!important}#tracy-bs pre,#tracy-bs table{background: #FDF5CE;padding: .4em .7em;border: 1px dotted silver;overflow: auto}#tracy-bs table pre{padding: 0;margin: 0;border: none}#tracy-bs table{border-collapse: collapse;width: 100%;margin-bottom: 1em}#tracy-bs td,#tracy-bs th{vertical-align: top;text-align: left;padding: 2px 6px;border: 1px solid #e6dfbf}#tracy-bs th{font-weight: bold}#tracy-bs tr>:first-child{width: 20%}#tracy-bs tr:nth-child(2n),#tracy-bs tr:nth-child(2n) pre{background-color: #F7F0CB}#tracy-bs ol{margin: 1em 0;padding-left: 2.5em}#tracy-bs ul{font-size: 7pt;padding: 2em 3em;margin: 1em 0 0;color: #777;background: #F6F5F3;border-top: 1px solid #DDD;list-style: none}#tracy-bs .footer-logo a{position: absolute;bottom: 0;right: 0;width: 100px;height: 50px;background: url('data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAUBAMAAAD\/1DctAAAAMFBMVEWupZzj39rEvbTy8O3X0sz9\/PvGwLu8tavQysHq6OS0rKP5+Pbd2dT29fPMxbzPx8DKErMJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQoFX3TQWgTQRQA0MWLIJJDYehBTykhG5ERTx56K1u8eEhCYtomE7x5L4iLh0ViF7egewuFFqSIYE6hIHsIYQ6CQSg9CDKn4QsNCRlB59C74J\/ZNHW1+An5+bOPyf6\/s46oz2P+A0yIeZZ2ieEHi6TOnLKTxvWq+b52mxlVO3xnM1s7xLX1504XQH65OnW2dBqn7cCkYsFsfYsWpyY\/2salmFTpEyzeR8zosYqMdiPDXdyU52K1wgEa\/SjGpdEwUAxqvRfckQCDOyFearsEHe2grvkh\/cFAHKvdtI3lcVceKQIOFpv+FOZaNPQBwJZLPp+hfrvT5JZXaUFsR8zqQc9qSgAharkfS5M\/5F6nGJJAtXq\/eLr3ucZpHccSxOOIPaQhtHohpCH2Xu6rLmQ0djnr4\/+J3C6v+AW8\/XWYxwYNdlhWj\/P5fPSTQwVr0T9lGxdaBCqErNZaqYnEwbkjEB3NasGF3lPdrHa1nnxNOMgj0+neePUPjd2v\/qVvUv29ifvc19huQ48qwXShy\/9o8o3OSk0cs37mOFd0Ydgvsf\/oZEnPVtggfd66lORn9mDyyzXU13SRtH2L6aR5T\/snGAcZPfAXz5J1YlJWBEuxdMYqQecpBrlM49xAbmqyHA+xlA1FxBtqT2xmJoNXZlIt74ZBLeJ9ZGDqByNI7p543idzJ23vXEv7IgnsxiS+eNtwNbFdLq7+Bi4wQ0I4SVb9AAAAAElFTkSuQmCC') no-repeat;opacity: .6;padding: 0;margin: 0}#tracy-bs .footer-logo a:hover,#tracy-bs .footer-logo a:focus{opacity: 1;transition: opacity 0.1s}#tracy-bs div.panel{padding: 1px 25px}#tracy-bs div.inner{background: #F4F3F1;padding: .1em 1em 1em;border-radius: 8px}#tracy-bs .outer{overflow: auto}#tracy-bs.mac .outer{padding-bottom: 12px}#tracy-bs pre.code>div{min-width: 100%;float: left;white-space: pre}#tracy-bs .highlight{background: #CD1818;color: white;font-weight: bold;font-style: normal;display: block;padding: 0 .4em;margin: 0 -.4em}#tracy-bs .line{color: #9F9C7F;font-weight: normal;font-style: normal}#tracy-bs a.tracy-editor{color: inherit;border-bottom: 1px dotted rgba(0,0,0,.3);border-radius: 3px}#tracy-bs a.tracy-editor:hover{background: #0001}#tracy-bs span[data-tracy-href]{border-bottom: 1px dotted rgba(0,0,0,.3)}#tracy-bs .tracy-dump-whitespace{color: #0003}#tracy-bs .caused{float: right;padding: .3em .6em;background: #df8075;border-radius: 0 0 0 8px;white-space: nowrap}#tracy-bs .caused a{color: white}#tracy-bs .args tr:first-child>*{position: relative}#tracy-bs .args tr:first-child td:before{position: absolute;right: .3em;content:'may not be true';opacity: .4}";
	document.head.appendChild(el);})
();
(function() {/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

let panelZIndex = 20000,
	maxAjaxRows = 3,
	autoRefresh = true,
	nonce = document.currentScript.getAttribute('nonce') || document.currentScript.nonce,
	contentId = document.currentScript.dataset.id,
	ajaxCounter = 1,
	baseUrl = location.href.split('#')[0];

baseUrl += (baseUrl.indexOf('?') < 0 ? '?' : '&');

class Panel
{
	constructor(id) {
		this.id = id;
		this.elem = document.getElementById(this.id);
		this.elem.Tracy = this.elem.Tracy || {};
	}


	init() {
		let elem = this.elem;

		this.init = function() {};
		elem.innerHTML = addNonces(elem.dataset.tracyContent);
		Tracy.Dumper.init(Debug.layer);
		delete elem.dataset.tracyContent;
		evalScripts(elem);

		draggable(elem, {
			handles: elem.querySelectorAll('h1'),
			start: () => {
				if (!this.is(Panel.FLOAT)) {
					this.toFloat();
				}
				this.focus();
				this.peekPosition = false;
			}
		});

		elem.addEventListener('mousedown', () => {
			this.focus();
		});

		elem.addEventListener('mouseenter', () => {
			clearTimeout(elem.Tracy.displayTimeout);
		});

		elem.addEventListener('mouseleave', () => {
			this.blur();
		});

		elem.addEventListener('mousemove', (e) => {
			if (e.buttons && !this.is(Panel.RESIZED) && (elem.style.width || elem.style.height)) {
				elem.classList.add(Panel.RESIZED);
			}
		});

		elem.addEventListener('tracy-toggle', () => {
			this.reposition();
		});

		elem.querySelectorAll('.tracy-icons a').forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.tracyAction === 'close') {
					this.toPeek();
				} else if (link.dataset.tracyAction === 'window') {
					this.toWindow();
				}
				e.preventDefault();
				e.stopImmediatePropagation();
			});
		});

		if (this.is('tracy-panel-persist')) {
			Tracy.Toggle.persist(elem);
		}
	}


	is(mode) {
		return this.elem.classList.contains(mode);
	}


	focus() {
		let elem = this.elem;
		if (this.is(Panel.WINDOW)) {
			elem.Tracy.window.focus();

		} else if (!this.is(Panel.FOCUSED)) {
			for (let id in Debug.panels) {
				Debug.panels[id].elem.classList.remove(Panel.FOCUSED);
			}
			elem.classList.add(Panel.FOCUSED);
			elem.style.zIndex = panelZIndex + Panel.zIndexCounter++;
		}
	}


	blur() {
		let elem = this.elem;
		if (this.is(Panel.PEEK)) {
			clearTimeout(elem.Tracy.displayTimeout);
			elem.Tracy.displayTimeout = setTimeout(() => {
				elem.classList.remove(Panel.FOCUSED);
			}, 50);
		}
	}


	toFloat() {
		this.elem.classList.remove(Panel.WINDOW);
		this.elem.classList.remove(Panel.PEEK);
		this.elem.classList.add(Panel.FLOAT);
		this.elem.classList.remove(Panel.RESIZED);
		this.reposition();
	}


	toPeek() {
		this.elem.classList.remove(Panel.WINDOW);
		this.elem.classList.remove(Panel.FLOAT);
		this.elem.classList.remove(Panel.FOCUSED);
		this.elem.classList.add(Panel.PEEK);
		this.elem.style.width = '';
		this.elem.style.height = '';
		this.elem.classList.remove(Panel.RESIZED);
	}


	toWindow() {
		let offset = getOffset(this.elem);
		offset.left += typeof window.screenLeft === 'number' ? window.screenLeft : (window.screenX + 10);
		offset.top += typeof window.screenTop === 'number' ? window.screenTop : (window.screenY + 50);

		let win = window.open('', this.id.replace(/-/g, '_'), 'left=' + offset.left + ',top=' + offset.top
		+ ',width=' + this.elem.offsetWidth + ',height=' + this.elem.offsetHeight + ',resizable=yes,scrollbars=yes');
		if (!win) {
			return false;
		}

		let doc = win.document;
		doc.write('<!DOCTYPE html><meta charset="utf-8">'
		+ '<script src="' + (baseUrl.replace(/&/g, '&amp;').replace(/"/g, '&quot;')) + '_tracy_bar=js&amp;XDEBUG_SESSION_STOP=1" onload="Tracy.Dumper.init()" async></script>'
		+ '<body id="tracy-debug">'
		);
		doc.body.innerHTML = '<div class="tracy-panel tracy-mode-window" id="' + this.elem.id + '">' + this.elem.innerHTML + '</div>';
		evalScripts(doc.body);
		if (this.elem.querySelector('h1')) {
			doc.title = this.elem.querySelector('h1').textContent;
		}

		win.addEventListener('beforeunload', () => {
			this.toPeek();
			win.close(); // forces closing, can be invoked by F5
		});

		doc.addEventListener('keyup', (e) => {
			if (e.keyCode === 27 && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
				win.close();
			}
		});

		this.elem.classList.remove(Panel.FLOAT);
		this.elem.classList.remove(Panel.PEEK);
		this.elem.classList.remove(Panel.FOCUSED);
		this.elem.classList.remove(Panel.RESIZED);
		this.elem.classList.add(Panel.WINDOW);
		this.elem.Tracy.window = win;
		return true;
	}


	reposition(deltaX, deltaY) {
		let pos = getPosition(this.elem);
		if (pos.width) { // is visible?
			setPosition(this.elem, {left: pos.left + (deltaX || 0), top: pos.top + (deltaY || 0)});
			if (this.is(Panel.RESIZED)) {
				let size = getWindowSize();
				this.elem.style.width = Math.min(size.width, pos.width) + 'px';
				this.elem.style.height = Math.min(size.height, pos.height) + 'px';
			}
		}
	}


	savePosition() {
		let key = this.id.split(':')[0]; // remove :contentId part
		let pos = getPosition(this.elem);
		if (this.is(Panel.WINDOW)) {
			localStorage.setItem(key, JSON.stringify({window: true}));
		} else if (pos.width) { // is visible?
			localStorage.setItem(key, JSON.stringify({right: pos.right, bottom: pos.bottom, width: pos.width, height: pos.height, zIndex: this.elem.style.zIndex - panelZIndex, resized: this.is(Panel.RESIZED)}));
		} else {
			localStorage.removeItem(key);
		}
	}


	restorePosition() {
		let key = this.id.split(':')[0];
		let pos = JSON.parse(localStorage.getItem(key));
		if (!pos) {
			this.elem.classList.add(Panel.PEEK);
		} else if (pos.window) {
			this.init();
			this.toWindow() || this.toFloat();
		} else if (this.elem.dataset.tracyContent) {
			this.init();
			this.toFloat();
			if (pos.resized) {
				this.elem.classList.add(Panel.RESIZED);
				this.elem.style.width = pos.width + 'px';
				this.elem.style.height = pos.height + 'px';
			}
			setPosition(this.elem, pos);
			this.elem.style.zIndex = panelZIndex + (pos.zIndex || 1);
			Panel.zIndexCounter = Math.max(Panel.zIndexCounter, (pos.zIndex || 1)) + 1;
		}
	}
}

Panel.PEEK = 'tracy-mode-peek';
Panel.FLOAT = 'tracy-mode-float';
Panel.WINDOW = 'tracy-mode-window';
Panel.FOCUSED = 'tracy-focused';
Panel.RESIZED = 'tracy-panel-resized';
Panel.zIndexCounter = 1;


class Bar
{
	init() {
		this.id = 'tracy-debug-bar';
		this.elem = document.getElementById(this.id);

		draggable(this.elem, {
			handles: this.elem.querySelectorAll('li:first-child'),
			draggedClass: 'tracy-dragged',
			stop: () => {
				this.savePosition();
			}
		});

		this.elem.addEventListener('mousedown', (e) => {
			e.preventDefault();
		});

		this.initTabs(this.elem);
		this.restorePosition();

		(new MutationObserver(() => {
			this.restorePosition();
		})).observe(this.elem, {childList: true, characterData: true, subtree: true});
	}


	initTabs(elem) {
		elem.querySelectorAll('a').forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.tracyAction === 'close') {
					this.close();

				} else if (link.rel) {
					let panel = Debug.panels[link.rel];
					panel.init();

					if (e.shiftKey) {
						panel.toFloat();
						panel.toWindow();

					} else if (panel.is(Panel.FLOAT)) {
						panel.toPeek();

					} else {
						panel.toFloat();
						if (panel.peekPosition) {
							panel.reposition(-Math.round(Math.random() * 100) - 20, (Math.round(Math.random() * 100) + 20) * (this.isAtTop() ? 1 : -1));
							panel.peekPosition = false;
						}
					}
				}
				e.preventDefault();
				e.stopImmediatePropagation();
			});

			link.addEventListener('mouseenter', (e) => {
				if (e.buttons || !link.rel || elem.classList.contains('tracy-dragged')) {
					return;
				}

				clearTimeout(this.displayTimeout);
				this.displayTimeout = setTimeout(() => {
					let panel = Debug.panels[link.rel];
					panel.focus();

					if (panel.is(Panel.PEEK)) {
						panel.init();

						let pos = getPosition(panel.elem);
						setPosition(panel.elem, {
							left: getOffset(link).left + getPosition(link).width + 4 - pos.width,
							top: this.isAtTop()
								? getOffset(this.elem).top + getPosition(this.elem).height + 4
								: getOffset(this.elem).top - pos.height - 4
						});
						panel.peekPosition = true;
					}
				}, 50);
			});

			link.addEventListener('mouseleave', () => {
				clearTimeout(this.displayTimeout);

				if (link.rel && !elem.classList.contains('tracy-dragged')) {
					Debug.panels[link.rel].blur();
				}
			});
		});
		this.autoHideLabels();
	}


	autoHideLabels() {
		let width = getWindowSize().width;
		this.elem.querySelectorAll('.tracy-row').forEach((row) => {
			let i, labels = row.querySelectorAll('.tracy-label');
			for (i = 0; i < labels.length && row.clientWidth < width; i++) {
				labels.item(i).hidden = false;
			}
			for (i = labels.length - 1; i >= 0 && row.clientWidth >= width; i--) {
				labels.item(i).hidden = true;
			}
		});
	}


	close() {
		document.getElementById('tracy-debug').style.display = 'none';
	}


	reposition(deltaX, deltaY) {
		let pos = getPosition(this.elem);
		if (pos.width) { // is visible?
			setPosition(this.elem, {left: pos.left + (deltaX || 0), top: pos.top + (deltaY || 0)});
			this.savePosition();
		}
	}


	savePosition() {
		let pos = getPosition(this.elem);
		if (pos.width) { // is visible?
			localStorage.setItem(this.id, JSON.stringify(this.isAtTop() ? {right: pos.right, top: pos.top} : {right: pos.right, bottom: pos.bottom}));
		}
	}


	restorePosition() {
		let pos = JSON.parse(localStorage.getItem(this.id));
		setPosition(this.elem, pos || {right: 0, bottom: 0});
		this.savePosition();
	}


	isAtTop() {
		let pos = getPosition(this.elem);
		return pos.top < 100 && pos.bottom > pos.top;
	}
}


class Debug
{
	static init(content) {
		Debug.bar = new Bar;
		Debug.panels = {};
		Debug.layer = document.createElement('div');
		Debug.layer.setAttribute('id', 'tracy-debug');
		Debug.layer.innerHTML = addNonces(content);
		(document.body || document.documentElement).appendChild(Debug.layer);
		evalScripts(Debug.layer);
		Debug.layer.style.display = 'block';
		Debug.bar.init();

		Debug.layer.querySelectorAll('.tracy-panel').forEach((panel) => {
			Debug.panels[panel.id] = new Panel(panel.id);
			Debug.panels[panel.id].restorePosition();
		});

		Debug.captureWindow();
		Debug.captureAjax();

		Tracy.TableSort.init();
	}


	static loadAjax(content) {
		let rows = Debug.bar.elem.querySelectorAll('.tracy-row[data-tracy-group=ajax]');
		rows = Array.from(rows).reverse();
		let max = maxAjaxRows;
		rows.forEach((row) => {
			if (--max > 0) {
				return;
			}
			row.querySelectorAll('a[rel]').forEach((tab) => {
				let panel = Debug.panels[tab.rel];
				if (panel.is(Panel.PEEK)) {
					delete Debug.panels[tab.rel];
					panel.elem.remove();
				}
			});
			row.remove();
		});

		if (rows[0]) { // update content in first-row panels
			rows[0].querySelectorAll('a[rel]').forEach((tab) => {
				Debug.panels[tab.rel].savePosition();
				Debug.panels[tab.rel].toPeek();
			});
		}

		Debug.layer.insertAdjacentHTML('beforeend', content.panels);
		evalScripts(Debug.layer);
		Debug.bar.elem.insertAdjacentHTML('beforeend', content.bar);
		let ajaxBar = Debug.bar.elem.querySelector('.tracy-row:last-child');

		Debug.layer.querySelectorAll('.tracy-panel').forEach((panel) => {
			if (!Debug.panels[panel.id]) {
				Debug.panels[panel.id] = new Panel(panel.id);
				Debug.panels[panel.id].restorePosition();
			}
		});

		Debug.bar.initTabs(ajaxBar);
	}


	static captureWindow() {
		let size = getWindowSize();

		window.addEventListener('resize', () => {
			let newSize = getWindowSize();

			Debug.bar.reposition(newSize.width - size.width, newSize.height - size.height);
			Debug.bar.autoHideLabels();

			for (let id in Debug.panels) {
				Debug.panels[id].reposition(newSize.width - size.width, newSize.height - size.height);
			}

			size = newSize;
		});

		window.addEventListener('unload', () => {
			for (let id in Debug.panels) {
				Debug.panels[id].savePosition();
			}
		});
	}


	static captureAjax() {
		let header = Tracy.getAjaxHeader();
		if (!header) {
			return;
		}
		let oldOpen = XMLHttpRequest.prototype.open;

		XMLHttpRequest.prototype.open = function() {
			oldOpen.apply(this, arguments);
			if (autoRefresh && new URL(arguments[1], location.origin).host === location.host) {
				let reqId = header + '_' + ajaxCounter++;
				this.setRequestHeader('X-Tracy-Ajax', reqId);
				this.addEventListener('load', function() {
					if (this.getAllResponseHeaders().match(/^X-Tracy-Ajax: 1/mi)) {
						Debug.loadScript(baseUrl + '_tracy_bar=content-ajax.' + reqId + '&XDEBUG_SESSION_STOP=1&v=' + Math.random());
					}
				});
			}
		};

		let oldFetch = window.fetch;
		window.fetch = function(request, options) {
			request = request instanceof Request ? request : new Request(request, options || {});

			if (autoRefresh && new URL(request.url, location.origin).host === location.host) {
				let reqId = header + '_' + ajaxCounter++;
				request.headers.set('X-Tracy-Ajax', reqId);
				return oldFetch(request).then((response) => {
					if (response instanceof Response && response.headers.has('X-Tracy-Ajax') && response.headers.get('X-Tracy-Ajax')[0] === '1') {
						Debug.loadScript(baseUrl + '_tracy_bar=content-ajax.' + reqId + '&XDEBUG_SESSION_STOP=1&v=' + Math.random());
					}

					return response;
				});
			}

			return oldFetch(request);
		};
	}


	static loadScript(url) {
		if (Debug.scriptElem) {
			Debug.scriptElem.remove();
		}
		Debug.scriptElem = document.createElement('script');
		Debug.scriptElem.src = url;
		Debug.scriptElem.setAttribute('nonce', nonce);
		(document.body || document.documentElement).appendChild(Debug.scriptElem);
	}


	static setOptions(options) {
		maxAjaxRows = options.maxAjaxRows || maxAjaxRows;
		autoRefresh = typeof options.autoRefresh !== 'undefined' ? options.autoRefresh : autoRefresh;
		panelZIndex = options.panelZIndex || panelZIndex;
	}
}


function evalScripts(elem) {
	elem.querySelectorAll('script').forEach((script) => {
		if ((!script.hasAttribute('type') || script.type === 'text/javascript' || script.type === 'application/javascript') && !script.tracyEvaluated) {
			let document = script.ownerDocument;
			let dolly = document.createElement('script');
			dolly.textContent = script.textContent;
			dolly.setAttribute('nonce', nonce);
			(document.body || document.documentElement).appendChild(dolly);
			script.tracyEvaluated = true;
		}
	});
}


let dragging;

function draggable(elem, options) {
	let dE = document.documentElement, started, deltaX, deltaY, clientX, clientY;
	options = options || {};

	let redraw = function () {
		if (dragging) {
			setPosition(elem, {left: clientX + deltaX, top: clientY + deltaY});
			requestAnimationFrame(redraw);
		}
	};

	let onMove = function(e) {
		if (e.buttons === 0) {
			return onEnd(e);
		}
		if (!started) {
			if (options.draggedClass) {
				elem.classList.add(options.draggedClass);
			}
			if (options.start) {
				options.start(e, elem);
			}
			started = true;
		}

		clientX = e.touches ? e.touches[0].clientX : e.clientX;
		clientY = e.touches ? e.touches[0].clientY : e.clientY;
		return false;
	};

	let onEnd = function(e) {
		if (started) {
			if (options.draggedClass) {
				elem.classList.remove(options.draggedClass);
			}
			if (options.stop) {
				options.stop(e, elem);
			}
		}
		dragging = null;
		dE.removeEventListener('mousemove', onMove);
		dE.removeEventListener('mouseup', onEnd);
		dE.removeEventListener('touchmove', onMove);
		dE.removeEventListener('touchend', onEnd);
		return false;
	};

	let onStart = function(e) {
		e.preventDefault();
		e.stopPropagation();

		if (dragging) { // missed mouseup out of window?
			return onEnd(e);
		}

		let pos = getPosition(elem);
		clientX = e.touches ? e.touches[0].clientX : e.clientX;
		clientY = e.touches ? e.touches[0].clientY : e.clientY;
		deltaX = pos.left - clientX;
		deltaY = pos.top - clientY;
		dragging = true;
		started = false;
		dE.addEventListener('mousemove', onMove);
		dE.addEventListener('mouseup', onEnd);
		dE.addEventListener('touchmove', onMove);
		dE.addEventListener('touchend', onEnd);
		requestAnimationFrame(redraw);
		if (options.start) {
			options.start(e, elem);
		}
	};

	options.handles.forEach((handle) => {
		handle.addEventListener('mousedown', onStart);
		handle.addEventListener('touchstart', onStart);

		handle.addEventListener('click', (e) => {
			if (started) {
				e.stopImmediatePropagation();
			}
		});
	});
}


// returns total offset for element
function getOffset(elem) {
	let res = {left: elem.offsetLeft, top: elem.offsetTop};
	while (elem = elem.offsetParent) { // eslint-disable-line no-cond-assign
		res.left += elem.offsetLeft; res.top += elem.offsetTop;
	}
	return res;
}


function getWindowSize() {
	return {
		width: document.documentElement.clientWidth,
		height: document.compatMode === 'BackCompat' ? window.innerHeight : document.documentElement.clientHeight
	};
}


// move to new position
function setPosition(elem, coords) {
	let win = getWindowSize();
	if (typeof coords.right !== 'undefined') {
		coords.left = win.width - elem.offsetWidth - coords.right;
	}
	if (typeof coords.bottom !== 'undefined') {
		coords.top = win.height - elem.offsetHeight - coords.bottom;
	}
	elem.style.left = Math.max(0, Math.min(coords.left, win.width - elem.offsetWidth)) + 'px';
	elem.style.top = Math.max(0, Math.min(coords.top, win.height - elem.offsetHeight)) + 'px';
}


// returns current position
function getPosition(elem) {
	let win = getWindowSize();
	return {
		left: elem.offsetLeft,
		top: elem.offsetTop,
		right: win.width - elem.offsetWidth - elem.offsetLeft,
		bottom: win.height - elem.offsetHeight - elem.offsetTop,
		width: elem.offsetWidth,
		height: elem.offsetHeight
	};
}


function addNonces(html) {
	let el = document.createElement('div');
	el.innerHTML = html;
	el.querySelectorAll('style').forEach((style) => {
		style.setAttribute('nonce', nonce);
	});
	return el.innerHTML;
}


let Tracy = window.Tracy = window.Tracy || {};
Tracy.DebugPanel = Panel;
Tracy.DebugBar = Bar;
Tracy.Debug = Debug;
Tracy.getAjaxHeader = () => contentId;

Debug.setOptions({
	panelZIndex: Tracy.panelZIndex,
	maxAjaxRows: window.TracyMaxAjaxRows,
	autoRefresh: window.TracyAutoRefresh,
});
})();(function() {/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

const MOVE_THRESHOLD = 100;

// enables <a class="tracy-toggle" href="#"> or <span data-tracy-ref="#"> toggling
class Toggle
{
	static init() {
		let start;
		document.documentElement.addEventListener('mousedown', (e) => {
			start = [e.clientX, e.clientY];
		});

		document.documentElement.addEventListener('click', (e) => {
			let el;
			if (
				!e.shiftKey && !e.ctrlKey && !e.metaKey
				&& (el = e.target.closest('.tracy-toggle'))
				&& Math.pow(start[0] - e.clientX, 2) + Math.pow(start[1] - e.clientY, 2) < MOVE_THRESHOLD
			) {
				Toggle.toggle(el, undefined, e);
				e.stopImmediatePropagation();
			}
		});
		Toggle.init = function() {};
	}


	// changes element visibility
	static toggle(el, expand, e) {
		let collapsed = el.classList.contains('tracy-collapsed'),
			ref = el.getAttribute('data-tracy-ref') || el.getAttribute('href', 2),
			dest = el;

		if (typeof expand === 'undefined') {
			expand = collapsed;
		}

		if (!ref || ref === '#') {
			ref = '+';
		} else if (ref.substr(0, 1) === '#') {
			dest = document;
		}
		ref = ref.match(/(\^\s*([^+\s]*)\s*)?(\+\s*(\S*)\s*)?(.*)/);
		dest = ref[1] ? dest.parentNode : dest;
		dest = ref[2] ? dest.closest(ref[2]) : dest;
		dest = ref[3] ? Toggle.nextElement(dest.nextElementSibling, ref[4]) : dest;
		dest = ref[5] ? dest.querySelector(ref[5]) : dest;

		el.classList.toggle('tracy-collapsed', !expand);
		dest.classList.toggle('tracy-collapsed', !expand);

		el.dispatchEvent(new CustomEvent('tracy-toggle', {
			bubbles: true,
			detail: {relatedTarget: dest, collapsed: !expand, originalEvent: e}
		}));
	}


	// save & restore toggles
	static persist(baseEl, restore) {
		let saved = [];
		baseEl.addEventListener('tracy-toggle', (e) => {
			if (saved.indexOf(e.target) < 0) {
				saved.push(e.target);
			}
		});

		let toggles = JSON.parse(sessionStorage.getItem('tracy-toggles-' + baseEl.id));
		if (toggles && restore !== false) {
			toggles.forEach((item) => {
				let el = baseEl;
				for (let i in item.path) {
					if (!(el = el.children[item.path[i]])) {
						return;
					}
				}
				if (el.textContent === item.text) {
					Toggle.toggle(el, item.expand);
				}
			});
		}

		window.addEventListener('unload', () => {
			toggles = saved.map((el) => {
				let item = {path: [], text: el.textContent, expand: !el.classList.contains('tracy-collapsed')};
				do {
					item.path.unshift(Array.from(el.parentNode.children).indexOf(el));
					el = el.parentNode;
				} while (el && el !== baseEl);
				return item;
			});
			sessionStorage.setItem('tracy-toggles-' + baseEl.id, JSON.stringify(toggles));
		});
	}


	// finds next matching element
	static nextElement(el, selector) {
		while (el && selector && !el.matches(selector)) {
			el = el.nextElementSibling;
		}
		return el;
	}
}


let Tracy = window.Tracy = window.Tracy || {};
Tracy.Toggle = Tracy.Toggle || Toggle;
})();(function() {/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

// enables <table class="tracy-sortable">
class TableSort
{
	static init() {
		document.documentElement.addEventListener('click', (e) => {
			if (e.target.matches('.tracy-sortable > :first-child > tr:first-child *')) {
				TableSort.sort(e.target.closest('td,th'));
			}
		});

		TableSort.init = function() {};
	}

	static sort(tcell) {
		let tbody = tcell.closest('table').tBodies[0];
		let preserveFirst = !tcell.closest('thead') && !tcell.parentNode.querySelectorAll('td').length;
		let asc = !(tbody.tracyAsc === tcell.cellIndex);
		tbody.tracyAsc = asc ? tcell.cellIndex : null;
		let getText = (cell) => { return cell ? (cell.getAttribute('data-order') || cell.innerText) : ''; };

		Array.from(tbody.children)
			.slice(preserveFirst ? 1 : 0)
			.sort((a, b) => {
				return function(v1, v2) {
					return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
				}(getText((asc ? a : b).children[tcell.cellIndex]), getText((asc ? b : a).children[tcell.cellIndex]));
			})
			.forEach((tr) => { tbody.appendChild(tr); });
	}
}


let Tracy = window.Tracy = window.Tracy || {};
Tracy.TableSort = Tracy.TableSort || TableSort;
})();(function() {/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

const
	COLLAPSE_COUNT = 7,
	COLLAPSE_COUNT_TOP = 14,
	TYPE_ARRAY = 'a',
	TYPE_OBJECT = 'o',
	TYPE_RESOURCE = 'r',
	PROP_VIRTUAL = 4,
	PROP_PRIVATE = 2;

const
	HINT_CTRL = 'Ctrl-Click to open in editor',
	HINT_ALT = 'Alt-Click to expand/collapse all child nodes';

class Dumper
{
	static init(context) {
		// full lazy
		(context || document).querySelectorAll('[data-tracy-snapshot][data-tracy-dump]').forEach((pre) => { // <pre>
			let snapshot = JSON.parse(pre.getAttribute('data-tracy-snapshot'));
			pre.removeAttribute('data-tracy-snapshot');
			pre.appendChild(build(JSON.parse(pre.getAttribute('data-tracy-dump')), snapshot, pre.classList.contains('tracy-collapsed')));
			pre.removeAttribute('data-tracy-dump');
			pre.classList.remove('tracy-collapsed');
		});

		// snapshots
		(context || document).querySelectorAll('meta[itemprop=tracy-snapshot]').forEach((meta) => {
			let snapshot = JSON.parse(meta.getAttribute('content'));
			meta.parentElement.querySelectorAll('[data-tracy-dump]').forEach((pre) => { // <pre>
				if (pre.closest('[data-tracy-snapshot]')) { // ignore unrelated <span data-tracy-dump>
					return;
				}
				pre.appendChild(build(JSON.parse(pre.getAttribute('data-tracy-dump')), snapshot, pre.classList.contains('tracy-collapsed')));
				pre.removeAttribute('data-tracy-dump');
				pre.classList.remove('tracy-collapsed');
			});
			// <meta> must be left for debug bar panel content
		});

		if (Dumper.inited) {
			return;
		}
		Dumper.inited = true;

		document.documentElement.addEventListener('click', (e) => {
			let el;
			// enables <span data-tracy-href=""> & ctrl key
			if (e.ctrlKey && (el = e.target.closest('[data-tracy-href]'))) {
				location.href = el.getAttribute('data-tracy-href');
				return false;
			}

			// initializes lazy <span data-tracy-dump> inside <pre data-tracy-snapshot>
			if ((el = e.target.closest('[data-tracy-snapshot]'))) {
				let snapshot = JSON.parse(el.getAttribute('data-tracy-snapshot'));
				el.removeAttribute('data-tracy-snapshot');
				el.querySelectorAll('[data-tracy-dump]').forEach((toggler) => {
					if (!toggler.nextSibling) {
						toggler.after(document.createTextNode('\n')); // enforce \n after toggler
					}
					toggler.nextSibling.after(buildStruct(JSON.parse(toggler.getAttribute('data-tracy-dump')), snapshot, toggler, true, []));
					toggler.removeAttribute('data-tracy-dump');
				});
			}
		});

		document.documentElement.addEventListener('tracy-toggle', (e) => {
			if (!e.target.matches('.tracy-dump *')) {
				return;
			}

			let cont = e.detail.relatedTarget;
			let origE = e.detail.originalEvent;

			if (origE && origE.usedIds) { // triggered by expandChild()
				toggleChildren(cont, origE.usedIds);
				return;

			} else if (origE && origE.altKey && cont.querySelector('.tracy-toggle')) { // triggered by alt key
				if (e.detail.collapsed) { // reopen
					e.target.classList.toggle('tracy-collapsed', false);
					cont.classList.toggle('tracy-collapsed', false);
					e.detail.collapsed = false;
				}

				let expand = e.target.tracyAltExpand = !e.target.tracyAltExpand;
				toggleChildren(cont, expand ? {} : false);
			}

			cont.classList.toggle('tracy-dump-flash', !e.detail.collapsed);
		});

		document.documentElement.addEventListener('animationend', (e) => {
			if (e.animationName === 'tracy-dump-flash') {
				e.target.classList.toggle('tracy-dump-flash', false);
			}
		});

		document.addEventListener('mouseover', (e) => {
			if (!e.target.matches('.tracy-dump *')) {
				return;
			}

			let el;

			if (e.target.matches('.tracy-dump-hash') && (el = e.target.closest('.tracy-dump'))) {
				el.querySelectorAll('.tracy-dump-hash').forEach((el) => {
					if (el.textContent === e.target.textContent) {
						el.classList.add('tracy-dump-highlight');
					}
				});
				return;
			}

			if ((el = e.target.closest('.tracy-toggle')) && !el.title) {
				el.title = HINT_ALT;
			}
		});

		document.addEventListener('mouseout', (e) => {
			if (e.target.matches('.tracy-dump-hash')) {
				document.querySelectorAll('.tracy-dump-hash.tracy-dump-highlight').forEach((el) => {
					el.classList.remove('tracy-dump-highlight');
				});
			}
		});

		Tracy.Toggle.init();
	}
}


function build(data, repository, collapsed, parentIds, keyType) {
	let id, type = data === null ? 'null' : typeof data,
		collapseCount = collapsed === null ? COLLAPSE_COUNT : COLLAPSE_COUNT_TOP;

	if (type === 'null' || type === 'number' || type === 'boolean') {
		return createEl(null, null, [
			createEl(
				'span',
				{'class': 'tracy-dump-' + type.replace('ean', '')},
				[data + '']
			)
		]);

	} else if (type === 'string') {
		data = {
			string: data.replace(/&/g, '&amp;').replace(/</g, '&lt;'),
			length: [...data].length
		};

	} else if (Array.isArray(data)) {
		data = {array: null, items: data};

	} else if (data.ref) {
		id = data.ref;
		data = repository[id];
		if (!data) {
			throw new UnknownEntityException;
		}
	}


	if (data.string !== undefined || data.bin !== undefined) {
		let s = data.string === undefined ? data.bin : data.string;
		if (keyType === TYPE_ARRAY) {
			return createEl(null, null, [
				createEl(
					'span',
					{'class': 'tracy-dump-string'},
					{html: '<span class="tracy-dump-lq">\'</span>' + s + '<span>\'</span>'}
				),
			]);

		} else if (keyType !== undefined) {
			if (type !== 'string') {
				s = '<span class="tracy-dump-lq">\'</span>' + s + '<span>\'</span>';
			}

			const classes = [
				'tracy-dump-public',
				'tracy-dump-protected',
				'tracy-dump-private',
				'tracy-dump-dynamic',
				'tracy-dump-virtual',
			];
			return createEl(null, null, [
				createEl(
					'span',
					{
						'class': classes[typeof keyType === 'string' ? PROP_PRIVATE : keyType],
						'title': typeof keyType === 'string' ? 'declared in ' + keyType : null,
					},
					{html: s}
				),
			]);
		}

		let count = (s.match(/\n/g) || []).length;
		if (count) {
			let collapsed = count >= COLLAPSE_COUNT;
			return createEl(null, null, [
				createEl('span', {'class': collapsed ? 'tracy-toggle tracy-collapsed' : 'tracy-toggle'}, ['string']),
				'\n',
				createEl(
					'div',
					{
						'class': 'tracy-dump-string' + (collapsed ? ' tracy-collapsed' : ''),
						'title': data.length + (data.bin ? ' bytes' : ' characters'),
					},
					{html: '<span class="tracy-dump-lq">\'</span>' + s + '<span>\'</span>'}
				),
			]);
		}

		return createEl(null, null, [
			createEl(
				'span',
				{
					'class': 'tracy-dump-string',
					'title': data.length + (data.bin ? ' bytes' : ' characters'),
				},
				{html: '<span>\'</span>' + s + '<span>\'</span>'}
			),
		]);

	} else if (data.number) {
		return createEl(null, null, [
			createEl('span', {'class': 'tracy-dump-number'}, [data.number])
		]);

	} else if (data.text !== undefined) {
		return createEl(null, null, [
			createEl('span', {class: 'tracy-dump-virtual'}, [data.text])
		]);

	} else { // object || resource || array
		let span = data.array !== undefined
			? [
				createEl('span', {'class': 'tracy-dump-array'}, ['array']),
				' (' + (data.length || data.items.length) + ')'
			]
			: [
				createEl('span', {
					'class': data.object ? 'tracy-dump-object' : 'tracy-dump-resource',
					title: data.editor ? 'Declared in file ' + data.editor.file + ' on line ' + data.editor.line + (data.editor.url ? '\n' + HINT_CTRL : '') + '\n' + HINT_ALT : null,
					'data-tracy-href': data.editor ? data.editor.url : null
				}, [data.object || data.resource]),
				...(id ? [' ', createEl('span', {'class': 'tracy-dump-hash'}, [data.resource ? '@' + id.substr(1) : '#' + id])] : [])
			];

		parentIds = parentIds ? parentIds.slice() : [];
		let recursive = id && parentIds.indexOf(id) > -1;
		parentIds.push(id);

		if (recursive || !data.items || !data.items.length) {
			span.push(recursive ? ' RECURSION' : (!data.items || data.items.length ? ' …' : ''));
			return createEl(null, null, span);
		}

		collapsed = collapsed === true || data.collapsed || (data.items && data.items.length >= collapseCount);
		let toggle = createEl('span', {'class': collapsed ? 'tracy-toggle tracy-collapsed' : 'tracy-toggle'}, span);

		return createEl(null, null, [
			toggle,
			'\n',
			buildStruct(data, repository, toggle, collapsed, parentIds),
		]);
	}
}


function buildStruct(data, repository, toggle, collapsed, parentIds) {
	if (Array.isArray(data)) {
		data = {items: data};

	} else if (data.ref) {
		parentIds = parentIds.slice();
		parentIds.push(data.ref);
		data = repository[data.ref];
	}

	let cut = data.items && data.length > data.items.length;
	let type = data.object ? TYPE_OBJECT : data.resource ? TYPE_RESOURCE : TYPE_ARRAY;
	let div = createEl('div', {'class': collapsed ? 'tracy-collapsed' : null});

	if (collapsed) {
		let handler;
		toggle.addEventListener('tracy-toggle', handler = function() {
			toggle.removeEventListener('tracy-toggle', handler);
			createItems(div, data.items, type, repository, parentIds, null);
			if (cut) {
				createEl(div, null, ['…\n']);
			}
		});
	} else {
		createItems(div, data.items, type, repository, parentIds, true);
		if (cut) {
			createEl(div, null, ['…\n']);
		}
	}

	return div;
}


function createEl(el, attrs, content) {
	if (!(el instanceof Node)) {
		el = el ? document.createElement(el) : document.createDocumentFragment();
	}
	for (let id in attrs || {}) {
		if (attrs[id] !== null) {
			el.setAttribute(id, attrs[id]);
		}
	}

	if (content && content.html !== undefined) {
		el.innerHTML = content.html;
		return el;
	}
	content = content || [];
	for (let id = 0; id < content.length; id++) {
		let child = content[id];
		if (child !== null) {
			el.appendChild(child instanceof Node ? child : document.createTextNode(child));
		}
	}
	return el;
}


function createItems(el, items, type, repository, parentIds, collapsed) {
	let key, val, vis, ref, i, tmp;

	for (i = 0; i < items.length; i++) {
		if (type === TYPE_ARRAY) {
			[key, val, ref] = items[i];
		} else {
			[key, val, vis = PROP_VIRTUAL, ref] = items[i];
		}

		createEl(el, null, [
			build(key, null, null, null, type === TYPE_ARRAY ? TYPE_ARRAY : vis),
			type === TYPE_ARRAY ? ' => ' : ': ',
			...(ref ? [createEl('span', {'class': 'tracy-dump-hash'}, ['&' + ref]), ' '] : []),
			tmp = build(val, repository, collapsed, parentIds),
			tmp.lastElementChild.tagName === 'DIV' ? '' : '\n',
		]);
	}
}


function toggleChildren(cont, usedIds) {
	let hashEl, id;

	cont.querySelectorAll(':scope > .tracy-toggle').forEach((el) => {
		hashEl = (el.querySelector('.tracy-dump-hash') || el.previousElementSibling);
		id = hashEl && hashEl.matches('.tracy-dump-hash') ? hashEl.textContent : null;

		if (!usedIds || (id && usedIds[id])) {
			Tracy.Toggle.toggle(el, false);
		} else {
			usedIds[id] = true;
			Tracy.Toggle.toggle(el, true, {usedIds: usedIds});
		}
	});
}


function UnknownEntityException() {}


let Tracy = window.Tracy = window.Tracy || {};
Tracy.Dumper = Tracy.Dumper || Dumper;

function init() {
	Tracy.Dumper.init();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
})();(function() {/**
 * This file is part of the Tracy (https://tracy.nette.org)
 */

class BlueScreen
{
	static init(ajax) {
		let blueScreen = document.getElementById('tracy-bs');
		let styles = [];

		for (let i = 0; i < document.styleSheets.length; i++) {
			let style = document.styleSheets[i];
			if (!style.ownerNode.classList.contains('tracy-debug')) {
				style.oldDisabled = style.disabled;
				style.disabled = true;
				styles.push(style);
			}
		}

		if (navigator.platform.indexOf('Mac') > -1) {
			blueScreen.classList.add('mac');
		}

		document.getElementById('tracy-bs-toggle').addEventListener('tracy-toggle', function() {
			let collapsed = this.classList.contains('tracy-collapsed');
			for (let i = 0; i < styles.length; i++) {
				styles[i].disabled = collapsed ? styles[i].oldDisabled : true;
			}
		});

		if (!ajax) {
			document.body.appendChild(blueScreen);
			let id = location.href + document.getElementById('tracy-bs-error').textContent;
			Tracy.Toggle.persist(blueScreen, sessionStorage.getItem('tracy-toggles-bskey') === id);
			sessionStorage.setItem('tracy-toggles-bskey', id);
		}

		if (inited) {
			return;
		}
		inited = true;

		// enables toggling via ESC
		document.addEventListener('keyup', (e) => {
			if (e.keyCode === 27 && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) { // ESC
				Tracy.Toggle.toggle(document.getElementById('tracy-bs-toggle'));
			}
		});

		Tracy.TableSort.init();
	}


	static loadAjax(content) {
		let ajaxBs = document.getElementById('tracy-bs');
		if (ajaxBs) {
			ajaxBs.remove();
		}
		document.body.insertAdjacentHTML('beforeend', content);
		ajaxBs = document.getElementById('tracy-bs');
		Tracy.Dumper.init(ajaxBs);
		BlueScreen.init(true);
		window.scrollTo(0, 0);
	}
}

let inited;


let Tracy = window.Tracy = window.Tracy || {};
Tracy.BlueScreen = Tracy.BlueScreen || BlueScreen;
})();