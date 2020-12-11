class McAvatar extends HTMLElement {
	constructor () {
		super();
		this.style.display = 'inline-block';
		var shadow = this.attachShadow({mode: 'open'});

		this.img = document.createElement('img');
		this.img.loading = 'lazy';

		const style = document.createElement('style');
		style.textContent = this._style;

		shadow.appendChild(style);
		shadow.appendChild(this.img);
		this.render();
	}

	render () {
		const defWidth = this.getAttribute('width') || 32;
		const defheight = this.getAttribute('height') || 32;
		this.style.width = `${defWidth}px`;
		this.style.height = `${defheight}px`;
		this.img.width = defWidth;
		this.img.height = defheight;
		this.img.src = this.formatAvatarURL(this.getAttribute('user'), this.getAttribute('type')||'helm');
	}

	connectedCallback () {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}

	get _style () {
		return `
			img {
				image-rendering: pixelated;
			}
		`;
	}

	static get observedAttributes () { // (3)
		return ['user', 'type', 'width', 'height'];
	}

	formatAvatarURL (user='steve', type='helm') {
		return `https://minotar.net/${type}/${user}/16.png`;
	}
}

export default McAvatar;