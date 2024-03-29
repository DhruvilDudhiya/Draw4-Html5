class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.ownPlayerId = "";
        this.iBattleId = "";
        this.totalPlayerCount = "";
        this.sPlayerName = "";
        this.isOwnTurn = false;
        this.cardGap = 60;
        this.bTurnClockwise = true;
        this.currentCardId = " ";
    }
    setReverseTurn(data){
        if(data.oData.bTurnClockwise == false){
            this.oScene.oTweenManager.roundAreoReverse();
        }else{
            this.oScene.oTweenManager.roundAeroDefault();
        }
    }
}