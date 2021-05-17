class Player {
    constructor() {
        this.distance = 0;
        this.name = null;
        this.index = null;
        this.playerIndex = "player" + this.index;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    update() {

        database.ref(this.playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo() {
        var playerInfoReference = database.ref('player');
        playerInfoReference.on("value", function (data) {
            allPlayers = data.val();
        })
    }
    play() {
        form.hide();
        textSize(30);
        text("The Game Has Started", 120, 100);
        player.getPlayerInfo();
        if (allPlayers != undefined) {
            var displayPosition = {
                x: 50,
                y: 100
            };
            displayPosition.x += 2;
            displayPosition.y += 2;

            text(allPlayers[this.playerIndex].name + ":" + allPlayers[this.playerIndex].distance , 50, 100 );
        }
    }
}