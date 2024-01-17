
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// playerProfile
		const playerProfile = scene.add.container(0, 6);
		this.add(playerProfile);

		// life_Holder
		const life_Holder = scene.add.image(1, 69, "Life-Holder");
		playerProfile.add(life_Holder);

		// player_bg
		const player_bg = scene.add.image(0, 0, "player-bg");
		playerProfile.add(player_bg);

		// container_life
		const container_life = scene.add.container(0, -6);
		playerProfile.add(container_life);

		// life_3
		const life_3 = scene.add.image(47, 110, "Life-[-Dark-]");
		life_3.scaleX = 0.8;
		life_3.scaleY = 0.8;
		container_life.add(life_3);

		// life_2
		const life_2 = scene.add.image(7, 110, "Life-[-Dark-]");
		life_2.scaleX = 0.8;
		life_2.scaleY = 0.8;
		container_life.add(life_2);

		// life_1
		const life_1 = scene.add.image(-33, 110, "Life-[-Dark-]");
		life_1.scaleX = 0.8;
		life_1.scaleY = 0.8;
		container_life.add(life_1);

		// playerInfo
		const playerInfo = scene.add.container(0, 1);
		this.add(playerInfo);

		// txtPlayerName
		const txtPlayerName = scene.add.text(-1, 44, "", {});
		txtPlayerName.scaleX = 1.1;
		txtPlayerName.scaleY = 1.1;
		txtPlayerName.setOrigin(0.5, 0.5);
		txtPlayerName.text = "New text";
		txtPlayerName.setStyle({ "align": "center", "fontFamily": "Futura", "fontSize": "25px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2,"shadow.offsetX":1,"shadow.offsetY":1,"shadow.stroke":true,"shadow.fill":true});
		txtPlayerName.setPadding({"left":1,"top":1,"right":1,"bottom":1});
		playerInfo.add(txtPlayerName);

		// profile_icon
		const profile_icon = scene.add.image(0, 0, "profile-icon");
		profile_icon.scaleX = 0.3;
		profile_icon.scaleY = 0.3;
		profile_icon.visible = false;
		playerInfo.add(profile_icon);

		// timer_ring
		const timer_ring = scene.add.image(-1, 5, "timer-ring");
		timer_ring.scaleX = 1.35;
		timer_ring.scaleY = 0.9;
		timer_ring.visible = false;
		this.add(timer_ring);

		this.playerProfile = playerProfile;
		this.player_bg = player_bg;
		this.container_life = container_life;
		this.life_3 = life_3;
		this.life_2 = life_2;
		this.life_1 = life_1;
		this.playerInfo = playerInfo;
		this.txtPlayerName = txtPlayerName;
		this.timer_ring = timer_ring;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.shape = this.oScene.add.graphics();
		this.shape.visible = false;

		const maskShape = this.shape.createGeometryMask();
		this.timer_ring.setMask(maskShape);
		this.shape.x = this.timer_ring.x;
		this.shape.y = this.timer_ring.y;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	playerProfile;
	/** @type {Phaser.GameObjects.Image} */
	player_bg;
	/** @type {Phaser.GameObjects.Container} */
	container_life;
	/** @type {Phaser.GameObjects.Image} */
	life_3;
	/** @type {Phaser.GameObjects.Image} */
	life_2;
	/** @type {Phaser.GameObjects.Image} */
	life_1;
	/** @type {Phaser.GameObjects.Container} */
	playerInfo;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayerName;
	/** @type {Phaser.GameObjects.Image} */
	timer_ring;

	/* START-USER-CODE */

	// Write your code here.


	setInfo(ownPlayer, playerName) {
		ownPlayer.txtPlayerName.text = playerName.toUpperCase();
	}
	setLife = (playerId,turnMissed) => {
	 console.log('%c PlayerData', 'color: #5BB381' ,playerId ,turnMissed);
	}
	startTimerInit(x, y, data) {
		this.intervalTimeReset();
		this.timer_ring.visible = true
		let ttl = data.ttl / 1000;
		let start = 90;
		let end = 360 / ttl;
		let temp = end;
		let self = this;
		this.intervalTimer = setInterval(() => {
			this.shape.slice(x, y, 128, Phaser.Math.DegToRad(start), Phaser.Math.DegToRad(start + end)).fill();
			if (end >= 270) {
				this.timer_ring.tintFill = true;
				this.timer_ring.setTintFill(0xaa0000);
			}
			if (end >= 360) {
				self.intervalTimeReset();
			}
			end += (temp / 10);
		}, 100)
	}

	intervalTimeReset() {
		this.shape.clear();
		this.timer_ring.clearTint();
		this.timer_ring.tintFill = false;
		this.timer_ring.visible = false
		clearInterval(this.intervalTimer);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
