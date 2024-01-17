class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.cardCount = 1;
        this.arrCardDistribute = []
        this.cards = [];
    }

    popupOpen(targetName) {
        targetName.visible = true;
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 0, to: 1 },
            scaleY: { from: 0, to: 1 },
            duration: 200,
            ease: 'Linear',
        })
    }

    initializeTimerAnimation(targetName) {
        this.initializeTimerTween = this.oScene.tweens.add({
            targets: targetName,
            scaleY: { from: 0.7, to: 1, from: 1, to: 0.7 },
            scaleX: { from: 0.7, to: 1, from: 1, to: 0.7 },
            duration: 300,
            ease: 'Linear',
        })
    }

    popupClose(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 1, to: 0 },
            scaleY: { from: 1, to: 0 },
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
                targetName.visible = false;
            }
        })
    }

    musicOnAnimation(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            x: { from: targetName.x, to: targetName.x + 24 },
            duration: 100,
            ease: 'Linear'
        })
    }

    musicOffAnimation(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            x: { from: targetName.x, to: targetName.x - 24 },
            duration: 100,
            ease: 'Linear'
        })
    }

    // roundAeroDefault() {
    //     this.roundAeroTween = this.oScene.tweens.addCounter({
    //         targets: this.oScene.round_aero,
    //         duration: 1000,
    //         // from : 0,
    //         // to: 360,
    //         // repeat : 1000,
    //         ease: 'Linear',
    //         angle: 180,
    //         loop: -1
    //     })
    // }
    // roundAreoReverse() {
    //     this.roundAreoReverseTween = this.oScene.tweens.add({
    //         targets: this.oScene.round_aero,
    //         duration: 1000,
    //         ease: 'Linear',
    //         angle: -180,
    //         loop: -1
    //         // from : 360,
    //         // to : 0
    //     })
    // }


    cardDistribute(data) {
        this.cardDistributeData = data
        // this.cardDistributeAnimation(data);
        this.cardDistributeAnimationFor2Players(this.cardDistributeData);
    }

    skipCardAnimation(oData) {
        let skipCard = this.oScene.add.image(400, 260, "skip-blue");
        skipCard.setScale(0.25);
        this.currentPlayerTurn = oData.iPlayerId;
        this.playerPrefab = this.oScene.oPlayerManager.playerPrefab
        let posX, posY;
        for (let i = 0; i < this.playerPrefab.length; i++) {
            console.log(this.playerPrefab[i], oData.iPlayerId);
            if (this.playerPrefab[i].name === this.currentPlayerTurn) {
                posX = this.playerPrefab[i].x
                posY = this.playerPrefab[i].y
                break;
            }
        }

        this.oScene.tweens.add({
            targets: skipCard,
            x: posX,
            y: posY,
            scaleX: 0.05,
            scaleY: 0.05,
            duration: 1000,
            completeDelay: 1000,
            onComplete: () => {
                skipCard.destroy();
            }
        })
    }

    // cardDistributeAnimation(data) {
    //     let card = this.oScene.add.image(341, 280, "draw4-card");
    //     card.scaleX = 0.5;
    //     card.scaleY = 0.5;

    //     let ownY = 1746;

    //     this.oScene.cardGroupContainer.add(card)

    //     this.oScene.cardGroupContainer.x = (1080 - ((this.oScene.cardGroupContainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    //     this.oScene.tweens.add({
    //         targets: card,
    //         x: this.oScene.cardGroupContainer.getAll().length * this.oScene.oGameManager.cardGap,
    //         y: ownY,
    //         duration: 210,
    //         onComplete: () => {
    //             this.oScene.cardGroupContainer.x = (1080 - ((this.oScene.cardGroupContainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    //             if (this.cardCount !== this.cardDistributeData.aHand.length) {
    //                 this.cardCount++;
    //                 this.cardDistributeAnimation();
    //             }
    //             else {
    //                 this.oScene.oCardManager.setPlayerHand(this.cardDistributeData);
    //                 this.oScene.cardGroupContainer.removeAll(true);
    //             }
    //         }
    //     })

    // }
    cardDistributeAnimationFor2Players = (data) => {
        console.log(data);
        var self = this;
        for (var i = 0; i < 14; i++) {
            this.cards[i] = this.oScene.add.image(976, 1380, "draw4-card");
            this.cards[i].setScale(0.2);
        }
        for (var j = 0; j < 14; j++) {
            if (j % 2 === 0) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: 425 + j * 25,
                    y: 1746,
                    scaleX: { from: 0.2, to: 0.5 },
                    scaleY: { from: 0.2, to: 0.5 },
                    duration: 210,
                    delay: (j * 50),
                })
            } else {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    x: this.oScene.oPlayerManager.playerPrefab[1].x,
                    y: this.oScene.oPlayerManager.playerPrefab[1].y,
                    scaleX: { from: 0.2, to: 0.5 },
                    scaleY: { from: 0.2, to: 0.5 },
                    duration: 210,
                    delay: (j * 50),
                    alpha: 0
                })
            }
        }
        for (let j = 0; j < 14; j++) {
            if (j % 2 == 0) {
                this.oScene.tweens.add({
                    targets: this.cards[j],
                    ease: "Power2",
                    scaleX: 0,
                    duration: 300,
                    delay: 1000,
                    flipX: true,
                    onComplete: () => {
                        this.cards[j].destroy();
                        if (j == 12) {
                            self.oScene.oCardManager.setPlayerHand(data);
                        }
                    }
                })
            }
        }

    }
}