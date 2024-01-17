
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class CardPreset extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CardPreset"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setSize(85,200)
		this.gameObjectPreset = this.gameObject.setInteractive();
		this.gameObjectPreset.input.cursor = "pointer";
		this.gameObjectPreset.on("pointerdown", (pointer) => {
			this.lastPosX = pointer.x;
			this.lastPosY = pointer.y;
			this.gameObjectPreset.x = pointer.x;
			this.gameObjectPreset.y = pointer.y;
			let parentContainerName = this.gameObjectPreset.parentContainer.name;
			this.handleParantContainerOperation(parentContainerName,this.gameObjectPreset);
		});
		this.gameObjectPreset.on("pointerup", () => {
		});
		this.gameObjectPreset.on("drag", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = pointer.x;
			this.gameObjectPreset.y = pointer.y;
		});
		this.gameObjectPreset.on("dragend", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = pointer.x - dragX;
			this.gameObjectPreset.y = pointer.y - dragY;
			if (this.gameObjectPreset.x >= 430 && this.gameObjectPreset.y >= 615 && this.gameObjectPreset.x <= 660 && this.gameObjectPreset.y <= 940) {
				this.gameObjectPreset.setPosition(this.gameObject.scene.disbleCard1.x, this.gameObject.scene.disbleCard1.y);
				this.gameObjectPreset.setVisible(false);
				this.gameObject.scene.sendDiscardPileCard(this.gameObjectPreset.name);
				this.gameObject.scene.oCardManager.arrangeHandCardPosition();
			} else {
				this.gameObjectPreset.setPosition(parseFloat(this.lastPosX), parseFloat(this.lastPosY));
				this.gameObject.scene.playerHandcontainer.add(this.gameObjectPreset);
				this.gameObject.scene.oCardManager.arrangeHandCardPosition();
			}
		})
		/* END-USER-CTR-CODE */
	}

	/** @returns {CardPreset} */
	static getComponent(gameObject) {
		return gameObject["__CardPreset"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {string} */
	cardId = "";
	/** @type {string} */
	cardColor = "";
	/** @type {string} */
	cardNumber = "";

	/* START-USER-CODE */

	// Write your code here.
	handleParantContainerOperation(parentContainerName, cardObject) {
		console.log("containerName",parentContainerName);
		switch (parentContainerName) {
			case "playerHandcontainer":
				console.log("cardObject", cardObject,"parentContainerName", parentContainerName);
				this.gameObjectPreset.scene.playerHandcontainer.remove(cardObject);
				break;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
