function CFloor(oFloorPhysic, oParentContainer) {
    var b2Vec2 = Box2D.Common.Math.b2Vec2;

    var _iMultiplier;

    var _oFloorPhysic;
    var _oParentContainer;

    var _bActive;

    this._init = function() {
        _bActive = true;
        _iMultiplier = 1;
    };

    this.setActive = function(bValue) {
        _bActive = bValue;
    };

    this.unload = function() {
        _oFloorPhysic.SetActive(false);
    };

    this.getBody = function() {
        return _oFloorPhysic;
    };

    this._checkToCreateNewFloor = function() {
        var oFloorPos = _oFloorPhysic.GetPosition();

        // IF THE FLOOR IS ABOVE THE LIMIT TO BUILD A NEW FLOOR/BLOCKS SET, BUILD NEW SET
        if (oFloorPos.y < FLOOR_LIMIT_SCALED) {
            s_oGame.createNewMatrixSet();
            _oFloorPhysic.SetPosition(new b2Vec2(oFloorPos.x, FLOOR_Y_START_SCALED));
            return;
        };
    };

    this._moveFloor = function() {
        var oFloorPos = _oFloorPhysic.GetPosition();

        var iTotalMovement = oFloorPos.y - PLAYER_LIMIT_SCALED;
        var iLerp = (iTotalMovement / PLAYER_LIMIT_SCALED) / FLOOR_LERP_DIVIDER;
        _oFloorPhysic.SetPosition(new b2Vec2(oFloorPos.x, oFloorPos.y - FLOOR_VELOCITY_MULTIPLIER * (iLerp)));

        s_oGame.updateBackgroundPosition(oFloorPos.y);
    };

    this.update = function() {
        if (!_oFloorPhysic) {
            return;
        }

        if (_bActive) {
            this._moveFloor();
        }

        this._checkToCreateNewFloor();
    };

    _oParentContainer = oParentContainer;
    _oFloorPhysic = oFloorPhysic;

    this._init();
};