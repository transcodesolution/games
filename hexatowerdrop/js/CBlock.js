function CBlock(oBlockPhysic, oBlockInfos, oParentContainer) {
    var _oParentContainer;
    var _oBlockSprite;
    var _oBlockPhysic;
    var _oExplosion;

    var _iBlockType;
    var _iXVar;
    var _iYVar;
    var _iRotation;

    this._init = function() {
        _iBlockType = oBlockInfos.type;
        _iXVar = oBlockInfos.posX;
        _iYVar = oBlockInfos.posY;
        _iRotation = oBlockInfos.rotation;
        var oPos = {
            x: (MATRIX_X_START + (BLOCK_HALF_SIZE * _iXVar)) / WORLD_SCALE,
            y: (MATRIX_Y_START + (BLOCK_HALF_SIZE * _iYVar)) / WORLD_SCALE
        };

        oPos.x += BLOCKS_PADDING_X;
        oPos.y -= BLOCKS_PADDING_Y;

        this._initPlayerSprite();
        _oBlockPhysic = oBlockPhysic;
        _oBlockPhysic.SetPositionAndAngle(oPos, degreesToRadians(_iRotation));

        // SET SPRITE POSITION
        this._moveSpritePosOnPhysicPos();

        if (!s_bMobile) {
            _oBlockSprite.cursor = "pointer";
        }
    };

    this.onClickedBlock = function(evt) {
        if (!_oBlockPhysic || !_oBlockPhysic.IsActive()) {
            return;
        }

        // CHECK IF THE CLICKED POINT IS ON THIS BLOCK, OR THE BLOCK WILL NOT EXPLODE
        var oPointV = new Box2D.Common.Math.b2Vec2((evt.stageX / s_iScaleFactor) / WORLD_SCALE, (evt.stageY / s_iScaleFactor) / WORLD_SCALE);
        if (this.checkIfPointIsInFixture(oPointV) === true) {
            if (soundPlaying("clicked_block") === false) {
                playSound("clicked_block", 1, false);
            }
            if (_iBlockType !== BLOCK_SPEED) {
                this.explodeBlock();
            } else {
                this.onClickedSpeedBlock();
            }
            return;
        }
    };

    this.checkIfPointIsInFixture = function(oPointV) {
        if (!_oBlockPhysic) {
            return false;
        }

        // GET THE FIRST FIXTURE OF THE LIST
        var b2Fixtures = _oBlockPhysic.GetFixtureList();
        // UNTIL WE REACH THE END OF THE LIST (NULL), LOOP
        while (b2Fixtures) {
            // GET THE NEXT ON THE LIST, CHECK IT
            var b2Current = b2Fixtures;
            var b2Fixtures = b2Fixtures.GetNext();
            // IF THE POINT IT'S IN THE FIXTURE, RETURN TRUE
            if (b2Current.TestPoint(oPointV)) {
                return true;
            }
        };
        // ELSE, RETURN FALSE
        return false;
    };

    this.onClickedSpeedBlock = function() {
        if (soundPlaying("speed_bonus") === false) {
            playSound("speed_bonus", 1, false);
        }

        this.destroyBlock();
        s_oGame.addDestroyedBlocks();
        s_oGame.onSpeedBlockExploded();
    };

    this.destroyBlock = function() {
        s_oGame.addDestroyedBlocks();
        this._initExplosion();
        if (_oBlockPhysic) {
            _oBlockPhysic.SetActive(false);
        }
    };

    this.explodeBlock = function() {
        if (_oExplosion || !_oBlockPhysic) {
            return;
        }
        if (soundPlaying("explosion") === false) {
            playSound("explosion", 1, false);
        }

        this.destroyBlock();

        var iValue = BLOCK_VALUE;
        // CHECK IF THE BLOCK IS A BONUS
        if (_iBlockType === BLOCK_BONUS) {
            if (soundPlaying("bonus") === false) {
                playSound("bonus", 1, false);
            }
            iValue = BLOCK_BONUS_VALUE;
        }
        // IF IT'S A BOMB, EXPLOSION
        if (_iBlockType === BLOCK_BOMB) {
            s_oGame.addBombExplosion(_oBlockSprite.x, _oBlockSprite.y);
            return;
        }

        s_oGame.addScore(_oBlockSprite.x, _oBlockSprite.y, iValue);
    };

    this._initExplosion = function() {
        var oSize = {
            width: 190,
            height: 196
        };
        _oBlockSprite.visible = false;

        var oData = {
            images: [s_oSpriteLibrary.getSprite('explosion')],
            frames: {
                width: oSize.width,
                height: oSize.height,
                regX: oSize.width * 0.5,
                regY: oSize.height * 0.5
            },
            animations: {
                idle: [0, 20, false]
            },
            framerate: 30
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oExplosion = createSprite(oSpriteSheet, 'idle', oSize.width * 0.5, oSize.height * 0.5, oSize.width, oSize.height);
        _oExplosion.scaleX = _oExplosion.scaleY = 1.7;
        _oExplosion.x = _oBlockSprite.x;
        _oExplosion.y = _oBlockSprite.y;
        _oParentContainer.addChild(_oExplosion);

        var oParent = this;
        createjs.Tween.get(_oExplosion)
            .to({
                alpha: 0
            }, 1000, createjs.Ease.linear)
            .call(function() {
                createjs.Tween.removeTweens(_oExplosion);
                _oParentContainer.removeChild(_oExplosion);
                oParent.unload();
            });
    };

    this._initPlayerSprite = function() {
        var szImage;
        switch (_iBlockType) {
            case BLOCK_BONUS:
                {
                    szImage = "block_star";
                    break;
                }
            case BLOCK_BOMB:
                {
                    szImage = "block_bomb";
                    break;
                }
            case BLOCK_SPEED:
                {
                    szImage = "block_speed";
                    break;
                }
            case BLOCK_0:
                {
                    szImage = "block_0";
                    break;
                }
            case BLOCK_1:
                {
                    szImage = "block_1";
                    break;
                }
            case BLOCK_2:
                {
                    szImage = "block_2";
                    break;
                }
            case BLOCK_3:
                {
                    szImage = "block_3";
                    break;
                }
            case BLOCK_4:
                {
                    szImage = "block_4";
                    break;
                }
            case BLOCK_5:
                {
                    szImage = "block_5";
                    break;
                }
            case BLOCK_6:
                {
                    szImage = "block_6";
                    break;
                }
            case BLOCK_7:
                {
                    szImage = "block_7";
                    break;
                }
            case BLOCK_8:
                {
                    szImage = "block_8";
                    break;
                }
            case BLOCK_9:
                {
                    szImage = "block_9";
                    break;
                }
            case BLOCK_10:
                {
                    szImage = "block_10";
                    break;
                }
            case BLOCK_11:
                {
                    szImage = "block_11";
                    break;
                }
            case BLOCK_12:
                {
                    szImage = "block_12";
                    break;
                }
            case BLOCK_13:
                {
                    szImage = "block_13";
                    break;
                }
            case BLOCK_14:
                {
                    szImage = "block_14";
                    break;
                }
        }

        var oSprite = s_oSpriteLibrary.getSprite(szImage);
        _oBlockSprite = createBitmap(oSprite);
        _oBlockSprite.regX = oSprite.width * 0.5;
        _oBlockSprite.regY = oSprite.height * 0.5;
        _oBlockSprite.rotation = _iRotation;
        _oParentContainer.addChild(_oBlockSprite);
    };

    this.getBody = function() {
        return _oBlockPhysic;
    };

    this.getX = function() {
        return _oBlockSprite.x;
    };

    this.getY = function() {
        return _oBlockSprite.y;
    };

    this.unload = function() {
        _oBlockSprite.removeAllEventListeners();
        _oParentContainer.removeChild(_oBlockSprite);
        _oBlockPhysic = null;
    };

    this._moveSpritePosOnPhysicPos = function() {
        _oBlockSprite.x = WORLD_SCALE * _oBlockPhysic.GetPosition().x;
        _oBlockSprite.y = WORLD_SCALE * _oBlockPhysic.GetPosition().y;
        _oBlockSprite.rotation = _oBlockPhysic.GetAngle() / Math.PI * 180.0;
    };

    this._checkPositionToDestroy = function() {
        // IF THE BLOCK GOES OFF SCREEN, IT'S DESTROYED
        if (_oBlockPhysic.GetLinearVelocity().y > BLOCK_FALLING_SPEED_LIMIT) {
            this.unload();
            return;
        }

        var iPosX = WORLD_SCALE * _oBlockPhysic.GetPosition().x;
        if (iPosX > CANVAS_WIDTH + PLAYER_OFFSCREEN_TOLERANCE ||
            iPosX < -1 * PLAYER_OFFSCREEN_TOLERANCE) {
            this.unload();
            return;
        }

        var iPosY = WORLD_SCALE * _oBlockPhysic.GetPosition().y;
        if (iPosY > CANVAS_HEIGHT && _oBlockPhysic.GetLinearVelocity().y > BLOCK_SPEED_LIMIT) {
            this.unload();
        }
    };

    this.update = function() {
        if (!_oBlockPhysic) {
            return;
        }

        this._moveSpritePosOnPhysicPos();
        this._checkPositionToDestroy();
    };

    _oParentContainer = oParentContainer;

    this._init();
};