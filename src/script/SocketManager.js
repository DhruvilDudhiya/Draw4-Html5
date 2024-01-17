class SocketManager {
    constructor(oScene) {
        this.sRootUrl = "https://uno-backend.lc.webdevprojects.cloud";
        this.oScene = oScene;
        this.iBattleId = oScene.iBattleId
        this.sPlayerID = oScene.sPlayerID
        this.sAuthToken = oScene.sAuthToken
        this.nTotalPlayerCount = oScene.nTotalPlayerCount
        this.sPlayerName = oScene.sPlayerName
        this.sMobile = oScene.sMobile
        // this.oResDiscardPileTopCard;

        this.socket = io();
        console.log('this.socket', this.socket)
        this.socket = io(this.sRootUrl, {
            transports: ['polling'],
            auth: {
                i_battle_id: this.iBattleId,
                i_player_id: this.sPlayerID,
                s_auth_token: this.sAuthToken,
                nTotalPlayerCount: this.nTotalPlayerCount,
                s_player_name: this.sPlayerName,
                b_reconnect: false,
                s_mobile: this.sMobile,
                s_user_name: this.sPlayerName
            }
        });
        this.socket.on('connect', (data) => {
            console.log("Connected to Socket :: ", this.socket.id);
        });
        this.socket.emit("reqTableJoin", {
            i_battle_id: this.iBattleId
        }, (data, error) => {
            console.log("Event Emitted!", error, data);
            this.oScene.oGameManager.ownPlayerId = data.oData.iPlayerId;
            this.oScene.oGameManager.iBattleId = data.oData.iBattleId;
            this.oScene.oGameManager.totalPlayerCount = this.nTotalPlayerCount;
            this.oScene.oGameManager.sPlayerName = this.sPlayerName;
            this.oScene.oPlayerManager.setTotalPlayer(this.oScene.oGameManager.totalPlayerCount);
            this.oScene.oPlayerManager.setOwnPlayer();
        });

        this.socket.on(this.iBattleId, (data) => {
            this.onReceiveData(data);
        })
        this.onReceiveData = (data1) => {
            const data = JSON.parse(data1);
            switch (data.sTaskName) {
                case "resTableState":
                    this.oScene.oPlayerManager.setPlayers(data.oData);
                    break;
                case "resGameInitializeTimerExpired":
                    console.log('%c resGameInitializeTimerExpired', 'color: #CE375C', data);
                    break;    
                case "resHand":
                    this.oScene.oTweenManager.cardDistribute(data.oData);
                    break;
                case "resDiscardPileTopCard":
                    this.oScene.oCardManager.setDiscardPileTopCard(data.oData.oDiscardPileTopCard);
                    this.oScene.changRoundDirection(true);
                case "resDrawCard":
                    console.log(" %c resDrawCard:", "background: red; ", data);
                    if(data.oData.oDiscardPileTopCard){
                    }else{
                        this.oScene.oCardManager.setDrawCard(data.oData)
                    }
                    break;
                case "resInitMasterTimer":
                    console.log("resInitMasterTimer :", data);
                    this.oScene.setMasterTimer(data.oData);
                    break;
                case "resTurnTimer":
                    console.log("resTurnTimer :", data);
                    this.oScene.oPlayerManager.changePlayerTurn(data.oData);
                    this.oScene.oCardManager.setPlayableCards(data.oData);
                    break;
                case "resTurnMissed":
                    console.log('%c resTurnMissed', 'color: #5BB381' , data.oData);
                    this.oScene.oPlayerManager.setPlayerLife(data.oData);
                    break;
                case "resGameState":
                    console.log("resGameState", data);
                    this.oScene.oPlayerManager.setPlayers(data.oData.oTable)
                    this.oScene.oCardManager.setPlayerHand(data.oData);
                    this.oScene.oCardManager.resDiscardPileData(data.oData.oTable)
                    this.oScene.oCardManager.setPlayableCards(data.oData.oTurnInfo);
                    break;
                case "resDiscardPile":
                    console.log("resDiscardPile:", data);
                    this.oScene.oCardManager.setDiscardPileTopCard(data.oData.oCard);
                    if (data.oData.iPlayerId == this.oScene.oGameManager.ownPlayerId) {
                        if (data.oData.oCard.nLabel == 13 || data.oData.oCard.nLabel == 14) {
                            this.oScene.wildCardColorContainer.visible = true;
                        }
                    } else {
                        console.log("OpponentSelectedColor", data.oData.eColor);
                    }
                    break;
                case "resPlayerLeft":
                    break;
                case "resGameStatistics":
                    console.log("resGameStatistics:", data);
                    break;
                case "resGameOver":
                    console.log("resGameOver:", data);
                    this.oScene.showResultScreen(data.oData);
                    break;
                case "playerDisconnected":
                    console.log("playerDisconnected:", data);
                    break;
                case "resUserSkip":
                    console.log("resUserSkip", data);
                    this.oScene.oTweenManager.skipCardAnimation(data.oData);
                    break;
                case "resReverseTurn":
                    console.log("resReverseTurn", data);
                    this.oScene.changRoundDirection(data.oData.bTurnClockwise);
                case "resWildCardColor":
                    console.log("resWildCardColor:", data);
                    break;
                case "resUnoDeclare":
                    console.log("resUnoDeclare:", data);
                    break;
                case "resGameInitializeTimer":
                    console.log("resGameInitializeTimer", data);
                    // this.oScene.gameInitializeTimer(data.oData);
                    break;
                    default:
                        console.log('%c New Event !!!!!! ', 'color: #E3B34C' , data.sTaskName,data);
                        break;
            }
        }
    }
}