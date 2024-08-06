function CPlayer(oPlayerPhysic, oParentContainer) {
    var _oPlayerPhysic;
    var _oPlayerSprite;
    var _oParentContainer;

    this._init = function() {
        var oSprite = s_oSpriteLibrary.getSprite('player');
        _oPlayerSprite = createBitmap(oSprite);
        _oPlayerSprite.regX = oSprite.width * 0.5;
        _oPlayerSprite.regY = oSprite.height * 0.5;
        _oParentContainer.addChild(_oPlayerSprite);

        this._moveSpritePosOnPhysicPos();
    };

    this.unload = function() {
        _oPlayerSprite.removeAllEventListeners();
        _oParentContainer.removeChild(_oPlayerSprite);
        _oPlayerPhysic = null;
    };

    this._checkPositionToDestroy = function() {
        // IF THE PLAYER GOES OFF SCREEN, IT'S GAMEOVER
        var oInfos = s_oPhysicsController.getElementPosition(_oPlayerPhysic);
        if (oInfos.x > CANVAS_WIDTH + PLAYER_OFFSCREEN_TOLERANCE ||
            oInfos.x < -1 * PLAYER_OFFSCREEN_TOLERANCE) {
            this.destroyPlayer();
        };
    };

    this._moveSpritePosOnPhysicPos = function() {
        var oInfos = s_oPhysicsController.getElementPosition(_oPlayerPhysic);
        _oPlayerSprite.x = oInfos.x;
        _oPlayerSprite.y = oInfos.y;
        _oPlayerSprite.rotation = oInfos.angle;
    };

    this._checkPositionToMoveFloor = function() {
        // IF THE PLAYER IS BELOW A Y LIMIT, THE "FLOOR" WILL RISE TO RESET IT IN POSITION
        var oInfos = s_oPhysicsController.getElementPosition(_oPlayerPhysic);
        if (oInfos.y > PLAYER_Y_LIMIT) {
            s_oGame.setFloorMovement(true);
        } else {
            s_oGame.setFloorMovement(false);
        };
    };

    this.destroyPlayer = function() {
        s_oGame.gameOver();
        this.unload();
    };

    this.activatePlayer = function(bValue) {
        _oPlayerPhysic.GetBody().SetActive(bValue);
    };

    this.getBody = function() {
        return _oPlayerPhysic;
    };

    this.update = function() {
        if (!_oPlayerPhysic) {
            return;
        }

        this._moveSpritePosOnPhysicPos();
        this._checkPositionToMoveFloor();
        this._checkPositionToDestroy();
    };

    _oParentContainer = oParentContainer;
    _oPlayerPhysic = oPlayerPhysic;

    this._init();
};