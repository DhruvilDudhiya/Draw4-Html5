
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class DiractionAnimation extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__DiractionAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {DiractionAnimation} */
	static getComponent(gameObject) {
		return gameObject["__DiractionAnimation"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	awake(){
	}
	clockWiseDirection(){
		this.gameObject.flipX = false;
		var tween = this.scene.tweens.addCounter({
			from : 0,
			to : 360,
			duration : 5000,
			repeat : -1,
			onUpdate : (tween) => {
				this.gameObject.setAngle(tween.getValue());
			}
		})
	}
	antiClockWiseDirection(){
		this.gameObject.flipX = true;
			var tween = this.scene.tweens.addCounter({
			from : 360,
			to : 0,
			duration : 5000,
			repeat : -1,
			onUpdate : (tween) => {
				this.gameObject.setAngle(tween.getValue());
			}
		})
		 
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
