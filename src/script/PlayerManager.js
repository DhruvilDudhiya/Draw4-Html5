
class PlayerManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.playerPrefab = [this.oScene.ownPlayerProfile, this.oScene.playerProfile_2, this.oScene.playerProfile_3, this.oScene.playerProfile_4];
        this.playerList = new Map();
    }
    //check own player is in map or not
    //function call user join req  
    setOwnPlayer() {
        // player is not in map so add player
        if (!this.playerList.has(this.oScene.oGameManager.ownPlayerId)) {
            //add player in map
            this.addPlayer(this.oScene.oGameManager.ownPlayerId, this.oScene.oGameManager.sPlayerName)
            this.setOwnPlayerSeat(this.oScene.oGameManager.ownPlayerId, 0)
        }
    }
    addPlayer(id, name) {
        //set player with key and value
        this.playerList.set(id, name);
    }

    setOwnPlayerSeat(id, seatNo) {
        // check player in map
        if (this.playerList.has(id)) {
            this.playerPrefab[seatNo].setInfo(this.playerPrefab[seatNo], this.playerList.get(id))
            this.playerPrefab[seatNo].setName(id)
        }
    }
    setOpponentPlayerSeat(id, seatNo) {
        if (this.playerList.has(id)) {
            this.playerPrefab[seatNo].setInfo(this.playerPrefab[seatNo], this.playerList.get(id))
            this.playerPrefab[seatNo].setName(id)
        }
    }
    setPlayers = ({ aPlayer, table }) => {
        let j = 1;
        for (let i = 0; i < aPlayer.length; i++) {
            this.oScene.playerProfile_2.visible = true;
            if (!(this.playerList.has(aPlayer[i].iPlayerId)) && aPlayer[i].iPlayerId != this.oScene.oGameManager.ownPlayerId) {
                this.addPlayer(aPlayer[i].iPlayerId, aPlayer[i].sUserName)
                this.setOpponentPlayerSeat(aPlayer[i].iPlayerId, j++)
            }
            else if (aPlayer[i].iPlayerId == this.oScene.oGameManager.ownPlayerId) {
                this.addPlayer(aPlayer[i].iPlayerId, aPlayer[i].sUserName)
                this.setOwnPlayerSeat(aPlayer[i].iPlayerId, 0)
            }
        }
    }
    setTotalPlayer = (totalPlayer) => {
        switch (totalPlayer) {
            case "2":
                this.playerPrefab[1].x = 536;
                this.playerPrefab[1].y = 228;
                this.playerPrefab[1].visible = false;
                this.oScene.playerProfile_3.visible = false;
                this.oScene.playerProfile_4.visible = false;
                break;
            case "3":
                break;
            case "4":
                this.playerPrefab[1].x = 186;
                this.playerPrefab[1].y = 440;
                this.playerPrefab[2].x = 536;
                this.playerPrefab[2].y = 228;
                this.playerPrefab[3].x = 889;
                this.playerPrefab[3].y = 440;
                this.oScene.playerProfile_3.visible = true;
                this.oScene.playerProfile_4.visible = true;
                break;
        }
    }
    changePlayerTurn(playerTurnData) {
        this.currentPlayerTurn = playerTurnData.iPlayerId;
        for (let i = 0; i < this.playerList.size; i++) {
            for (let j = 0; j < this.playerList.size; j++) {
                if (this.playerPrefab[j].name !== this.currentPlayerTurn) {
                    this.playerPrefab[j].intervalTimeReset();
                }
            }
            if (this.playerPrefab[i].name === this.currentPlayerTurn) {
                this.playerPrefab[i].startTimerInit(this.playerPrefab[i].x, this.playerPrefab[i].y, playerTurnData)
                break;
            }
        }
    }
    setPlayerLife = ({ iPlayerId, nMissedTurn }) => {
        this.playerPrefab[iPlayerId].setLife(nMissedTurn);
    }
}

