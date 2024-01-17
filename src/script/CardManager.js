class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setCardData(id, color, lable, x, y, containerName) {
        this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, x, y));
        this.tempCard1.cardId = id;
        this.tempCard1.cardColor = color;
        this.tempCard1.cardNumber = lable;
        this.tempCard1.cardImage.setTexture("card-" + color + "-" + lable);
        this.tempCard1.setName(id);
        containerName.add(this.tempCard1);
    }
    setPlayerHand(data) {
        let nPlayerCard = 0;
        for (let i = 0; i < data.aHand.length; i++) {
            this.tempCard = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 1746));
            // this.tempCard.angle = ;
            this.tempCard.cardImage.setTexture("card-" + data.aHand[nPlayerCard].eColor + "-" + data.aHand[nPlayerCard].nLabel);
            this.tempCard.setName(data.aHand[nPlayerCard].iCardId);
            this.oScene.playerHandcontainer.add(this.tempCard);
            nPlayerCard++;
        }
        this.oScene.playerHandcontainer.x = (1080 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    setDiscardPileTopCard = ({ iCardId, eColor, nLabel, nScore }) => {
        // this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, 400,265));
        this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, 535, 780));
        this.tempCard1.cardImage.setTexture("card-" + eColor + "-" + nLabel);
        this.tempCard1.setName(iCardId);
        this.oScene.discardPileTopCardContainer.add(this.tempCard1);
        console.log('%c setDiscardData', 'color: #E3B34C', this.oScene.discardPileTopCardContainer);
        this.oScene.discardPileTopCardContainer.iterate(card => {
            const index = this.oScene.discardPileTopCardContainer.getIndex(card);
            if (index % 2 === 0) {
                card.setAngle(0);
            } else {
                card.setAngle(10);
            }
        });
        this.tempCard1.disableInteractive();

    }
    resDiscardPileData(data) {
        for (let i = 0; i < data.aDiscardPile.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, 535, 780));
            this.tempCard1.cardImage.setTexture("card-" + data.aDiscardPile[i].eColor + "-" + data.aDiscardPile[i].nLabel);
            this.tempCard1.setName(data.aDiscardPile[i].iCardId);
            this.oScene.discardPileTopCardContainer.add(this.tempCard1);
            this.oScene.discardPileTopCardContainer.list.iterate(card => {
                const index = this.oScene.discardPileTopCardContainer.getIndex(card);
                if (index % 2 === 0) {
                    card.setAngle(0);
                } else {
                    card.setAngle(10);
                }
            });
            this.tempCard1.disableInteractive();
        }
    }
    setDrawCard = ({ iPlayerId, aCard, nDrawNormal, nSpecialMeterFillCount, bIsPlayable, nHandScore, eReason }) => {
        if (bIsPlayable) {
            this.oScene.isPlayableCardContainer.visible = true;
            for (let i = 0; i < aCard.length; i++) {
                this.centerCard = this.oScene.add.existing(new CardPrefab(this.oScene, 550, 1190));
                this.centerCard.setScale(0.7);
                this.centerCard.cardImage.setTexture("card-" + aCard[i].eColor + "-" + aCard[i].nLabel);
                this.centerCard.setName(aCard[i].iCardId);
                this.centerCard.disableInteractive();
            }
        } else {
            this.setCardonHand(aCard);
            this.oScene.playerHandcontainer.x = (1080 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
        }
    }
    setCardonHand = (cards) => {
        for (let i = 0; i < cards.length; i++) {
            let posX = this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap;
            let PosY = 1746;
            this.setCardData(cards[i].iCardId, cards[i].eColor, cards[i].nLabel, posX, PosY, this.oScene.playerHandcontainer)
        }
    }
    setPlayableCards =({aPlayableCards}) => {
        this.oScene.playerHandcontainer.list.forEach((card, i) => {
            if (aPlayableCards.includes(card.name)) {
                card.setInteractive();
                card.setDepth(1);
                card.setY(card.y - 15);
            } else {
                card.disableInteractive();
            }
        })
    }
    arrangeHandCardPosition() {
        let i = 0;
        this.oScene.playerHandcontainer.getAll().forEach(card => {
            card.setPosition((i++ * this.oScene.oGameManager.cardGap), 1746);
        })
        // 1080 scene width...
        this.oScene.playerHandcontainer.x = (1080 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
}