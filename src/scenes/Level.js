
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		let params = new URLSearchParams(location.search);
		this.iBattleId = params.get('iBattleId');
		this.sPlayerID = params.get('sPlayerID');
		this.sAuthToken = params.get('sAuthToken');
		this.nTotalPlayerCount = params.get('nTotalPlayerCount');
		this.sPlayerName = params.get('sPlayerName');
		this.sMobile = params.get('sMobile');
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 20);

		// background
		const background = this.add.image(544, 941, "Background");
		backgroundContainer.add(background);

		// draw_button
		const draw_button = this.add.image(901, 1197, "draw-button");
		backgroundContainer.add(draw_button);

		// draw4_button
		const draw4_button = this.add.image(190, 1202, "draw4-button");
		backgroundContainer.add(draw4_button);

		// draw4_card
		const draw4_card = this.add.image(976, 1380, "draw4-card");
		draw4_card.scaleX = 0.2;
		draw4_card.scaleY = 0.2;
		backgroundContainer.add(draw4_card);

		// txtInitializeTimer
		const txtInitializeTimer = this.add.text(287, 357, "", {});
		txtInitializeTimer.setOrigin(0.5, 0.5);
		txtInitializeTimer.visible = false;
		txtInitializeTimer.setStyle({ "fontSize": "50px" });
		backgroundContainer.add(txtInitializeTimer);

		// card_Holder_Bottom
		const card_Holder_Bottom = this.add.image(536, 1669, "Card-Holder-Bottom");
		card_Holder_Bottom.scaleX = 1.1;
		backgroundContainer.add(card_Holder_Bottom);

		// card_Holder_Top
		const card_Holder_Top = this.add.image(529, 116, "Card-Holder-Top");
		backgroundContainer.add(card_Holder_Top);

		// card_Holder_Left
		const card_Holder_Left = this.add.image(128, 633, "Card-Holder-Left");
		backgroundContainer.add(card_Holder_Left);

		// card_Holder_Right
		const card_Holder_Right = this.add.image(954, 631, "Card-Holder-Right");
		backgroundContainer.add(card_Holder_Right);

		// card_Holder_Center
		const card_Holder_Center = this.add.image(532, 771, "Card-Holder-Center");
		card_Holder_Center.scaleX = 1.1;
		card_Holder_Center.scaleY = 1.1;
		backgroundContainer.add(card_Holder_Center);

		// disbleCard1
		const disbleCard1 = this.add.image(540, 766, "card-black-14");
		disbleCard1.scaleX = 0.6;
		disbleCard1.scaleY = 0.6;
		disbleCard1.visible = false;
		backgroundContainer.add(disbleCard1);

		// clock_Icon_Holder
		const clock_Icon_Holder = this.add.image(199, 87, "Clock-Icon-Holder");
		backgroundContainer.add(clock_Icon_Holder);

		// clock_Icon
		const clock_Icon = this.add.image(101, 87, "Clock Icon");
		backgroundContainer.add(clock_Icon);

		// close_Button
		const close_Button = this.add.image(955, 91, "Close-Button");
		backgroundContainer.add(close_Button);

		// info_Button
		const info_Button = this.add.image(813, 91, "Info-Button");
		backgroundContainer.add(info_Button);

		// txt_time
		const txt_time = this.add.text(220, 87, "", {});
		txt_time.setOrigin(0.5, 0.5);
		txt_time.text = "10:00";
		txt_time.setStyle({ "fontFamily": "Futura", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.stroke":true,"shadow.fill":true});
		backgroundContainer.add(txt_time);

		// container_tempCards1
		const container_tempCards1 = this.add.container(1042, 610);

		// container_tempCards_left
		const container_tempCards_left = this.add.container(-1006, 3);
		container_tempCards_left.angle = 75;
		container_tempCards1.add(container_tempCards_left);

		// draw4_card_3
		const draw4_card_3 = this.add.image(33, 29, "draw4-card");
		draw4_card_3.scaleX = 0.7;
		draw4_card_3.scaleY = 0.7;
		draw4_card_3.angle = -10;
		container_tempCards_left.add(draw4_card_3);

		// draw4_card_4
		const draw4_card_4 = this.add.image(-11, 53, "draw4-card");
		draw4_card_4.scaleX = 0.7;
		draw4_card_4.scaleY = 0.7;
		draw4_card_4.angle = -35.00000000000006;
		container_tempCards_left.add(draw4_card_4);

		// container_tempCardRight
		const container_tempCardRight = this.add.container(0, 0);
		container_tempCards1.add(container_tempCardRight);

		// draw4_card_1
		const draw4_card_1 = this.add.image(0, 23, "draw4-card");
		draw4_card_1.scaleX = 0.7;
		draw4_card_1.scaleY = 0.7;
		draw4_card_1.angle = -50.00000000000006;
		container_tempCardRight.add(draw4_card_1);

		// draw4_card_2
		const draw4_card_2 = this.add.image(43, 0, "draw4-card");
		draw4_card_2.scaleX = 0.7;
		draw4_card_2.scaleY = 0.7;
		draw4_card_2.angle = -30.000000000000057;
		container_tempCardRight.add(draw4_card_2);

		// container_tempCardUp
		const container_tempCardUp = this.add.container(-568, -710);
		container_tempCards1.add(container_tempCardUp);

		// draw4_card_5
		const draw4_card_5 = this.add.image(127, 70, "draw4-card");
		draw4_card_5.scaleX = 0.5;
		draw4_card_5.scaleY = 0.5;
		draw4_card_5.angle = 45;
		container_tempCardUp.add(draw4_card_5);

		// draw4_card_6
		const draw4_card_6 = this.add.image(62, 65, "draw4-card");
		draw4_card_6.scaleX = 0.5;
		draw4_card_6.scaleY = 0.5;
		draw4_card_6.angle = 60;
		container_tempCardUp.add(draw4_card_6);

		// roundAeroContainer
		const roundAeroContainer = this.add.container(400, 260);

		// round_aero
		const round_aero = this.add.sprite(129, 527, "round_aero");
		round_aero.scaleX = 0.88;
		round_aero.scaleY = 0.88;
		round_aero.alpha = 0.5;
		round_aero.alphaTopLeft = 0.5;
		round_aero.alphaTopRight = 0.5;
		round_aero.alphaBottomLeft = 0.5;
		round_aero.alphaBottomRight = 0.5;
		round_aero.tintTopLeft = 2339814;
		round_aero.tintTopRight = 2339814;
		round_aero.tintBottomLeft = 2339814;
		round_aero.tintBottomRight = 2339814;
		roundAeroContainer.add(round_aero);

		// playerProfileContainer
		const playerProfileContainer = this.add.container(0, 0);
		playerProfileContainer.name = "playerProfileContainer";

		// playerProfile_2
		const playerProfile_2 = new PlayerProfile(this, 186, 440);
		playerProfile_2.visible = true;
		playerProfileContainer.add(playerProfile_2);

		// playerProfile_3
		const playerProfile_3 = new PlayerProfile(this, 536, 228);
		playerProfile_3.visible = true;
		playerProfileContainer.add(playerProfile_3);

		// playerProfile_4
		const playerProfile_4 = new PlayerProfile(this, 889, 440);
		playerProfile_4.visible = true;
		playerProfileContainer.add(playerProfile_4);

		// ownPlayerProfile
		const ownPlayerProfile = new PlayerProfile(this, 548, 1431);
		ownPlayerProfile.visible = true;
		playerProfileContainer.add(ownPlayerProfile);

		// discardPileTopCardContainer
		const discardPileTopCardContainer = this.add.container(0, 0);
		discardPileTopCardContainer.name = "discardPileTopCardContainer";

		// playerHandcontainer
		const playerHandcontainer = this.add.container(0, 0);
		playerHandcontainer.name = "playerHandcontainer";

		// tempCardContainer
		const tempCardContainer = this.add.container(0, 1);

		// isPlayableCardContainer
		const isPlayableCardContainer = this.add.container(0, 0);
		isPlayableCardContainer.visible = false;

		// isPlayBg
		const isPlayBg = this.add.rectangle(557, 1196, 128, 128);
		isPlayBg.scaleX = 3.7;
		isPlayBg.isFilled = true;
		isPlayBg.fillColor = 8745195;
		isPlayableCardContainer.add(isPlayBg);

		// play_butten
		const play_butten = this.add.image(394, 1203, "green butten");
		play_butten.scaleX = 0.6;
		play_butten.scaleY = 0.6;
		isPlayableCardContainer.add(play_butten);

		// keep_butten
		const keep_butten = this.add.image(713, 1199, "red botten");
		keep_butten.scaleX = 0.6;
		keep_butten.scaleY = 0.6;
		isPlayableCardContainer.add(keep_butten);

		// playTxt
		const playTxt = this.add.text(393, 1203, "", {});
		playTxt.scaleX = 3;
		playTxt.scaleY = 3;
		playTxt.setOrigin(0.5, 0.5);
		playTxt.text = "Play";
		playTxt.setStyle({ "fontSize": "20" });
		isPlayableCardContainer.add(playTxt);

		// keepTxt
		const keepTxt = this.add.text(710, 1198, "", {});
		keepTxt.scaleX = 3;
		keepTxt.scaleY = 3;
		keepTxt.setOrigin(0.5, 0.5);
		keepTxt.text = "keep";
		keepTxt.setStyle({ "fontSize": "30" });
		isPlayableCardContainer.add(keepTxt);

		// isPlayCardCont
		const isPlayCardCont = this.add.container(550, 1190);
		isPlayableCardContainer.add(isPlayCardCont);

		// wildCardColorContainer
		const wildCardColorContainer = this.add.container(0, -1);
		wildCardColorContainer.visible = false;

		// blueBtn
		const blueBtn = this.add.rectangle(577, 799, 128, 128);
		blueBtn.scaleX = 0.7;
		blueBtn.scaleY = 0.7;
		blueBtn.isFilled = true;
		blueBtn.fillColor = 298212;
		wildCardColorContainer.add(blueBtn);

		// greenBtn
		const greenBtn = this.add.rectangle(486, 713, 128, 128);
		greenBtn.scaleX = 0.7;
		greenBtn.scaleY = 0.7;
		greenBtn.isFilled = true;
		greenBtn.fillColor = 375042;
		wildCardColorContainer.add(greenBtn);

		// yellowBtn
		const yellowBtn = this.add.rectangle(486, 800, 128, 128);
		yellowBtn.scaleX = 0.7;
		yellowBtn.scaleY = 0.7;
		yellowBtn.isFilled = true;
		yellowBtn.fillColor = 15655204;
		wildCardColorContainer.add(yellowBtn);

		// redBtn
		const redBtn = this.add.rectangle(577, 712, 128, 128);
		redBtn.scaleX = 0.7;
		redBtn.scaleY = 0.7;
		redBtn.isFilled = true;
		redBtn.fillColor = 16190219;
		wildCardColorContainer.add(redBtn);

		// cardGroupContainer
		const cardGroupContainer = this.add.container(0, 0);

		// popupContainer
		const popupContainer = this.add.container(400, 300);
		popupContainer.visible = false;

		// winnerContainer
		const winnerContainer = this.add.container(0, 0);
		winnerContainer.visible = false;

		// winnerTitleContainer
		const winnerTitleContainer = this.add.container(550, 681);
		winnerTitleContainer.scaleX = 1.1220705659112935;
		winnerTitleContainer.scaleY = -0.2708249274290182;
		winnerContainer.add(winnerTitleContainer);

		// winnerTitleBackground
		const winnerTitleBackground = this.add.rectangle(-20, -1010, 128, 128);
		winnerTitleBackground.scaleX = 7.360472749913047;
		winnerTitleBackground.scaleY = -54.567101626330064;
		winnerTitleBackground.alpha = 0.4;
		winnerTitleBackground.isFilled = true;
		winnerTitleBackground.fillColor = 0;
		winnerTitleContainer.add(winnerTitleBackground);

		// txtNumberTitle
		const txtNumberTitle = this.add.text(-361, -518, "", {});
		txtNumberTitle.scaleX = 3.813956096994239;
		txtNumberTitle.scaleY = -16.249142636047566;
		txtNumberTitle.setOrigin(0.5, 0.5);
		txtNumberTitle.text = "No.";
		winnerTitleContainer.add(txtNumberTitle);

		// txtNameTitle
		const txtNameTitle = this.add.text(-269, -518, "", {});
		txtNameTitle.scaleX = 3.9308298309337557;
		txtNameTitle.scaleY = -16.249142636047566;
		txtNameTitle.setOrigin(0, 0.5);
		txtNameTitle.text = "Name";
		winnerTitleContainer.add(txtNameTitle);

		// txtScoreTitle
		const txtScoreTitle = this.add.text(60, -518, "", {});
		txtScoreTitle.scaleX = 3.889892383935366;
		txtScoreTitle.scaleY = -16.249142636047566;
		txtScoreTitle.setOrigin(0.5, 0.5);
		txtScoreTitle.text = "Score";
		winnerTitleContainer.add(txtScoreTitle);

		// txtPrizeTitle
		const txtPrizeTitle = this.add.text(306, -518, "", {});
		txtPrizeTitle.scaleX = 3.889892383935366;
		txtPrizeTitle.scaleY = -16.249142636047566;
		txtPrizeTitle.setOrigin(0.5, 0.5);
		txtPrizeTitle.text = "Prize";
		winnerTitleContainer.add(txtPrizeTitle);

		// text_1
		const text_1 = this.add.text(550, 488, "", {});
		text_1.scaleX = 2;
		text_1.scaleY = 2;
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "GAME OVER";
		text_1.setStyle({ "fontSize": "40px" });
		winnerContainer.add(text_1);

		// text_2
		const text_2 = this.add.text(538, 687, "", {});
		text_2.scaleX = 2;
		text_2.scaleY = 2;
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Rank";
		text_2.setStyle({ "fontSize": "30px" });
		winnerContainer.add(text_2);

		// coinbg
		const coinbg = this.add.image(529, 1758, "coinbg");
		coinbg.scaleX = 2;
		coinbg.scaleY = 2;
		coinbg.tintFill = true;
		coinbg.tintTopLeft = 11498742;
		coinbg.tintTopRight = 11498742;
		coinbg.tintBottomLeft = 11498742;
		coinbg.tintBottomRight = 11498742;
		winnerContainer.add(coinbg);

		// text_3
		const text_3 = this.add.text(524, 1759, "", {});
		text_3.scaleX = 2;
		text_3.scaleY = 2;
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Home";
		winnerContainer.add(text_3);

		// txtRank_1
		const txtRank_1 = this.add.text(547, 619, "", {});
		txtRank_1.scaleX = 2;
		txtRank_1.scaleY = 2;
		txtRank_1.setOrigin(0, 0.5);
		txtRank_1.text = "st";
		winnerContainer.add(txtRank_1);

		// txtRank
		const txtRank = this.add.text(538, 642, "", {});
		txtRank.scaleX = 2;
		txtRank.scaleY = 2;
		txtRank.setOrigin(0.5, 0.5);
		txtRank.text = "1";
		txtRank.setStyle({ "fontSize": "45px" });
		winnerContainer.add(txtRank);

		this.backgroundContainer = backgroundContainer;
		this.background = background;
		this.draw_button = draw_button;
		this.draw4_button = draw4_button;
		this.draw4_card = draw4_card;
		this.txtInitializeTimer = txtInitializeTimer;
		this.disbleCard1 = disbleCard1;
		this.close_Button = close_Button;
		this.txt_time = txt_time;
		this.roundAeroContainer = roundAeroContainer;
		this.round_aero = round_aero;
		this.playerProfileContainer = playerProfileContainer;
		this.playerProfile_2 = playerProfile_2;
		this.playerProfile_3 = playerProfile_3;
		this.playerProfile_4 = playerProfile_4;
		this.ownPlayerProfile = ownPlayerProfile;
		this.discardPileTopCardContainer = discardPileTopCardContainer;
		this.playerHandcontainer = playerHandcontainer;
		this.tempCardContainer = tempCardContainer;
		this.isPlayableCardContainer = isPlayableCardContainer;
		this.isPlayBg = isPlayBg;
		this.play_butten = play_butten;
		this.keep_butten = keep_butten;
		this.playTxt = playTxt;
		this.keepTxt = keepTxt;
		this.isPlayCardCont = isPlayCardCont;
		this.wildCardColorContainer = wildCardColorContainer;
		this.blueBtn = blueBtn;
		this.greenBtn = greenBtn;
		this.yellowBtn = yellowBtn;
		this.redBtn = redBtn;
		this.cardGroupContainer = cardGroupContainer;
		this.popupContainer = popupContainer;
		this.winnerContainer = winnerContainer;
		this.winnerTitleBackground = winnerTitleBackground;
		this.txtNumberTitle = txtNumberTitle;
		this.txtNameTitle = txtNameTitle;
		this.txtScoreTitle = txtScoreTitle;
		this.txtPrizeTitle = txtPrizeTitle;
		this.txtRank_1 = txtRank_1;
		this.txtRank = txtRank;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	draw_button;
	/** @type {Phaser.GameObjects.Image} */
	draw4_button;
	/** @type {Phaser.GameObjects.Image} */
	draw4_card;
	/** @type {Phaser.GameObjects.Text} */
	txtInitializeTimer;
	/** @type {Phaser.GameObjects.Image} */
	disbleCard1;
	/** @type {Phaser.GameObjects.Image} */
	close_Button;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Container} */
	roundAeroContainer;
	/** @type {Phaser.GameObjects.Sprite} */
	round_aero;
	/** @type {Phaser.GameObjects.Container} */
	playerProfileContainer;
	/** @type {PlayerProfile} */
	playerProfile_2;
	/** @type {PlayerProfile} */
	playerProfile_3;
	/** @type {PlayerProfile} */
	playerProfile_4;
	/** @type {PlayerProfile} */
	ownPlayerProfile;
	/** @type {Phaser.GameObjects.Container} */
	discardPileTopCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	playerHandcontainer;
	/** @type {Phaser.GameObjects.Container} */
	tempCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	isPlayableCardContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	isPlayBg;
	/** @type {Phaser.GameObjects.Image} */
	play_butten;
	/** @type {Phaser.GameObjects.Image} */
	keep_butten;
	/** @type {Phaser.GameObjects.Text} */
	playTxt;
	/** @type {Phaser.GameObjects.Text} */
	keepTxt;
	/** @type {Phaser.GameObjects.Container} */
	isPlayCardCont;
	/** @type {Phaser.GameObjects.Container} */
	wildCardColorContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	blueBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	greenBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	yellowBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	redBtn;
	/** @type {Phaser.GameObjects.Container} */
	cardGroupContainer;
	/** @type {Phaser.GameObjects.Container} */
	popupContainer;
	/** @type {Phaser.GameObjects.Container} */
	winnerContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	winnerTitleBackground;
	/** @type {Phaser.GameObjects.Text} */
	txtNumberTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtNameTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtScoreTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtPrizeTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtRank_1;
	/** @type {Phaser.GameObjects.Text} */
	txtRank;

	/* START-USER-CODE */

	// Write more your code here


	create() {

		this.editorCreate();
		this.oSocketManager = new SocketManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oInputManager = new InputManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oGameManager = new GameManager(this);
		this.oUiManager = new UiManager(this);
		this.oCardManager = new CardManager(this);
		this.oTweenManager = new TweenManager(this);
		this.play1 = new DiractionAnimation(this.round_aero);


	}

	gameInitializeTimer = (oData) => {
		let time = oData.ttl / 1000;
		this.txtInitializeTimer.visible = true;

		this.initializeTimer = setInterval(() => {
			time--;
			this.txtInitializeTimer.setText(time);
			this.oTweenManager.initializeTimerAnimation(this.txtInitializeTimer);

			if (time < 0) {
				clearInterval(this.initializeTimer)
				this.txtInitializeTimer.visible = false;
				this.oTweenManager.initializeTimerTween.stop();
			}
		}, 1000)
	}
	reqDrawCard = () => {
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqDrawCard", oData: {}
		}, (error, data) => {
			console.warn("Requested Card", error, data);
		})
	}
	changRoundDirection(clockWise) {
		if (clockWise) {
			this.play1.clockWiseDirection();
		} else {
			this.play1.antiClockWiseDirection();
		}
	}
	sendDiscardPileCard(discardcard) {
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqDiscardCard", oData: { iCardId: discardcard }
		}, (error, data) => {
			console.warn("dropCard Card", error, data);
		})
	}
	sendWildCardColor(color) {
		console.log("color", color);
		this.wildCardColorContainer.visible = false;
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqSetWildCardColor", oData: { eColor: color }
		}, (error, data) => {
			console.warn("reqSetWildCardColor", error, data);
		})
	}
	requestForDraw4() {
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqUno", oData: {}
		}, (error, data) => {
			console.warn("reqUno", error, data);
		})
	}
	setMasterTimer = ({ ttl , timestamp }) => {
		let countdown = setInterval(() => {
			let minutes = Math.floor(ttl / 60000);
			let seconds = Math.floor((ttl % 60000) / 1000);
			this.txt_time.setText(
				`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
			);
			if (ttl <= 0) {
				clearInterval(countdown);
			} else {
				ttl -= 1000;
			}
		}, 1000);
	}

	showResultScreen(oData) {
		this.winnerContainer.visible = true;
		let resultData = oData.aPlayer;

		resultData.sort((a, b) => a.nRank - b.nRank);
		console.log("%c Result Data sort by Rank", "background: white; color: black;", resultData);
		for (let i = 0; i < resultData.length; i++) {
			this.winnerPrefab = this.add.existing(new WinnerPrefab(this, 548, 919 + (i * 34)));
			this.winnerContainer.add(this.winnerPrefab);
			this.winnerPrefab.setWinnerData(resultData[i])
			this.winnerPrefab.txtNumber.setText(i + 1);
			if (resultData[i].iPlayerId === this.oGameManager.ownPlayerId) {
				this.winnerPrefab.setOwnBackground();
				this.txtRank.setText(resultData[i].nRank)
				switch (resultData[i].nRank) {
					case 1:
						this.txtRank_1.setText("st");
						break;
					case 2:
						this.txtRank_1.setText("nd");
						break;
					case 3:
						this.txtRank_1.setText("rd");
						break;
					case 4:
						this.txtRank_1.setText("th");
						break;
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
