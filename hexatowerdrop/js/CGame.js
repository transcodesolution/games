function CGame(oData) {
    var _bStartGame;
    var _bDisableEvents;
    var _bNewBestScore;

    var _iScoreMultiplier;
    var _iDestroyedBlocks;
    var _iTotalScore;
    var _iScore;

    var _oData;
    var _oBg1;
    var _oBg2;
    var _oShake;
    var _oPhysicWorld;
    var _oPhysicObjectsCreator;
    var _oGameContainer;
    var _oBgContainer;
    var _oPopupContainer;
    var _oHitArea;
    var _oFloor;
    var _oFloorCover;
    var _oPlayer;
    var _oInterface;
    var _oEndPanel;
    var _oHelpPanel;
    var _oNewBestScoreText;

    var _aBlockMatrix;

    this._init = function() {
        _oBgContainer = new createjs.Container();
        s_oStage.addChild(_oBgContainer);

        var oSprite = s_oSpriteLibrary.getSprite('bg_game');
        _oBg1 = createBitmap(oSprite);
        _oBg1.y = 0;
        _oBg2 = createBitmap(oSprite);
        _oBg2.y = CANVAS_HEIGHT;
        _oBgContainer.addChild(_oBg1, _oBg2);

        _oGameContainer = new createjs.Container();
        s_oStage.addChild(_oGameContainer);

        this._resetVariables();



        this._initNewGame();


        _oPopupContainer = new createjs.Container();
        _oGameContainer.addChild(_oPopupContainer);

        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.alpha = 0.01;
        _oPopupContainer.addChild(_oHitArea);

        _oHitArea.on("pressup", function(evt) {
            s_oGame.onClickedBlock(evt);
        });

        this._addFloorCover();

        _oInterface = new CInterface(_oPopupContainer);
        _oInterface.initInterfacesText();
        this.initNewBestScoreText();

        if (s_bFirstTimePlaying === true) {
            _oHelpPanel = CHelpPanel();
        } else {
            this._onExitHelp();
        }

    };

    this.startShake = function() {
        _oShake = new CShake(_oGameContainer, 500, 5, 20);
    };

    this.onClickedBlock = function(evt) {
        for (var i = 0; i < _aBlockMatrix.length; i++) {
            if (_aBlockMatrix[i] !== null) {
                _aBlockMatrix[i].onClickedBlock(evt);
            };
        };
    };

    this._initNewGame = function() {
        s_oPhysicsController = new CPhysicsController();
        _oPhysicObjectsCreator = new CPhysicObjectsCreator(s_oPhysicsController.getWorld());
        _oPhysicWorld = new CPhysicWorld(_oPhysicObjectsCreator, _oGameContainer);

        _oFloor = _oPhysicObjectsCreator.addFloor(_oGameContainer);
        _oPlayer = _oPhysicObjectsCreator.addPlayer(_oGameContainer);

        this._addFirstMatrix();
        this.createNewMatrixSet();
    };

    this._addFirstMatrix = function() {
        // THIS WILL ADD SOME LINES OF BLOCKS TO LEARN HOW TO PLAY
        var aMatrixData = [{
                'type': BLOCK_14,
                'posX': 2,
                'posY': -11,
                'rotation': 0
            },
            {
                'type': BLOCK_11,
                'posX': 4,
                'posY': -9,
                'rotation': 0
            },
            {
                'type': BLOCK_1,
                'posX': -1,
                'posY': -9,
                'rotation': 0
            },
            {
                'type': BLOCK_1,
                'posX': -1,
                'posY': -7,
                'rotation': 0
            },
            {
                'type': BLOCK_11,
                'posX': 4,
                'posY': -7,
                'rotation': 0
            },
            {
                'type': BLOCK_1,
                'posX': 5,
                'posY': -5,
                'rotation': 0
            },
            {
                'type': BLOCK_11,
                'posX': 0,
                'posY': -5,
                'rotation': 0
            },
            {
                'type': BLOCK_14,
                'posX': 2,
                'posY': -3,
                'rotation': 0
            }
        ];
        for (var i = 0; i < aMatrixData.length; i++) {
            var oBlockPhysic = _oPhysicObjectsCreator.createBlock(DYNAMIC_BODY, aMatrixData[i].type);
            var oBlock = new CBlock(oBlockPhysic, aMatrixData[i], _oGameContainer);
            _aBlockMatrix.push(oBlock);
        };
    };

    this.setFloorCoverPosition = function(iNewY) {
        _oFloorCover.y = FLOOR_COVER_Y - iNewY;
    };

    this._addFloorCover = function() {
        _oFloorCover = createBitmap(s_oSpriteLibrary.getSprite('floor_cover'));
        _oFloorCover.x = 0;
        _oFloorCover.y = FLOOR_COVER_Y;
        _oFloorCover.on("mousedown", function() {});
        _oPopupContainer.addChild(_oFloorCover);
    };

    this.createNewMatrixSet = function() {
        // THE MATRIX SETS ARE DIVIDED BY DIFFICULTY (ACCORDING TO PLAYER'S SCORE)
        var iLimitMax = BLOCK_MATRIX_LIST.length;
        if (_iScore < SCORE_DIFFICULTY_LIMIT) {
            iLimitMax = 10; // UNDER THIS LIMIT, THE MATRIX SETS ARE EASIER
        }

        // PICK A RANDOM SET FROM THE MATRIX LIST OF BLOCK SETS
        var iRandomIndex = Math.floor(Math.random() * iLimitMax);
        this.addMatrixSet(iRandomIndex);
    };

    this.getPhysicWorld = function() {
        return _oPhysicWorld;
    };

    this.addBombExplosion = function(iX, iY) {
        if (soundPlaying("bomb") === false) {
            playSound("bomb", 1, false);
        }

        this.startShake();

        var oBomb = new createjs.Shape();
        oBomb.graphics.beginFill("black").drawCircle(iX, iY, EXPLOSION_SIZE);
        oBomb.alpha = 0.3;
        _oGameContainer.addChild(oBomb);

        // DESTROY ALL THE BLOCKS NEAR THE EXPLOSION
        var aBlocks = [];
        for (var i = 0; i < _aBlockMatrix.length; i++) {
            var oBlock = _aBlockMatrix[i];
            if (distanceBetweenTwoPoints(iX, iY, oBlock.getX(), oBlock.getY()) < EXPLOSION_SIZE) {
                aBlocks.push(oBlock);
            }
        };

        createjs.Tween.get(oBomb)
            .to({
                alpha: 0
            }, 500, createjs.Ease.linear)
            .call(function() {
                createjs.Tween.removeTweens(oBomb);
                _oGameContainer.removeChild(oBomb);
            });

        this.loopThroughBlocksExplosion(aBlocks);
    };

    this._resetVariables = function() {
        _oEndPanel = null;

        _bStartGame = false;
        _bDisableEvents = false;
        _bNewBestScore = false;

        _aBlockMatrix = [];

        _iDestroyedBlocks = 0;
        _iScore = 0;
        _iScoreMultiplier = 1;
        _iTotalScore = s_iTotalScore;

        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
    };

    this.initNewBestScoreText = function() {
        _oNewBestScoreText = new CTLText(_oPopupContainer,
            CANVAS_WIDTH / 2 - 250, CANVAS_HEIGHT_HALF - 200, 500, 100,
            50, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
            0, 0,
            " ",
            true, true, true,
            false);


    };

    this.addMatrixSet = function(iIndex) {
        // ADD A SET OF BLOCKS FROM THE MATRIX
        var aMatrixData = BLOCK_MATRIX_LIST[iIndex];
        for (var i = 0; i < aMatrixData.length; i++) {
            var oBlockPhysic = _oPhysicObjectsCreator.createBlock(DYNAMIC_BODY, aMatrixData[i].type);
            var oBlock = new CBlock(oBlockPhysic, aMatrixData[i], _oGameContainer);
            _aBlockMatrix.push(oBlock);
        };
        // SET THE POPUP CONTAINER IN FRONT OF THE GAME CONTAINER, EVERY TIME
        _oGameContainer.addChild(_oPopupContainer);
    };

    this.unload = function() {
        _bStartGame = false;
        _oInterface.unload();
        this.destroyPhysicsEngine();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oGame = null;
    };

    this.destroyPhysicsEngine = function() {
        s_oPhysicsController.destroyWorld();

        _oFloor.unload();
        _oFloor = null;
        _oPlayer.unload();
        _oPlayer = null;

        for (var i = 0; i < _aBlockMatrix.length; i++) {
            _aBlockMatrix[i].unload();
            _aBlockMatrix[i] = null;
        };

        _oPhysicObjectsCreator = null;
        _oPhysicWorld = null;
        s_oPhysicsController = null;
    };

    this.onExit = function() {
        setVolume("soundtrack", 1);
        $("#canvas").trigger("end_session");
        $("#canvas").trigger("show_interlevel_ad");
        this.unload();
        s_oMain.gotoMenu();
    };

    this.restart = function() {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        $("#canvas").trigger("restart_level");
        this.unload();
        s_oMain.gotoGame();
    };

    this._onExitHelp = function() {
        _bStartGame = true;
        s_bFirstTimePlaying = false;
        _oPlayer.activatePlayer(true);
    };

    this.addDestroyedBlocks = function() {
        _iDestroyedBlocks++;
        _iScoreMultiplier = 1 + Math.round(_iDestroyedBlocks / MULTIPLIER_DIVIDER);
    };

    this.updateScore = function() {
        // UPDATE TOTAL SCORE
        _iTotalScore += _iScore;
        s_iTotalScore = _iTotalScore;
        saveItem("hexagonfall_total_score", s_iTotalScore);

        // UPDATE BEST SCORE
        if (_iScore > s_iBestScore) {
            s_iBestScore = _iScore;
            saveItem("hexagonfall_best_score", s_iBestScore);
        }
    };

    this.setFloorMovement = function(bValue) {
        _oFloor.setActive(bValue);
    };

    this.addScore = function(iX, iY, iBlockValue) {
        var iPoints = iBlockValue * _iScoreMultiplier;
        this.initScoreText(iPoints, iX, iY);
        _iScore += iPoints;
        _oInterface.refreshScoreText(_iScore);

        // SHOW A "NEW BEST SCORE" TEXT, IF NEEDED
        if (_iScore > s_iBestScore) {
            this.showNewBestScore();
            s_iBestScore = _iScore;
            saveItem("hexagonfall_best_score", s_iBestScore);
            _oInterface.refreshBestScoreText();
            _bNewBestScore = true;
        }
    };

    this.showNewBestScore = function() {
        if (_bNewBestScore === true || s_bFirstTimePlaying === true) {
            return;
        }
        if (soundPlaying("newbestscore") === false) {
            playSound("newbestscore", 1, false);
        }

        var iScaleMax = 1.2;
        _oNewBestScoreText.refreshText(TEXT_NEWBESTSCORE);

        new createjs.Tween.get(_oNewBestScoreText.getText())
            .to({
                alpha: 1
            }, 500, createjs.Ease.quadIn)
            .call(function() {
                new createjs.Tween.get(_oNewBestScoreText.getText(), {
                        loop: true
                    })
                    .to({
                        scaleX: iScaleMax,
                        scaleY: iScaleMax
                    }, 1000, createjs.Ease.quadOut)
                    .to({
                        scaleX: 1,
                        scaleY: 1
                    }, 1000, createjs.Ease.quadIn);
                new createjs.Tween.get(_oNewBestScoreText.getText())
                    .wait(2000)
                    .to({
                        alpha: 0
                    }, 1000, createjs.Ease.quadOut)
                    .call(function() {
                        _oNewBestScoreText.refreshText(" ");
                    });
            });
    };

    this.initScoreText = function(iValue, iX, iY) {
        var oScoreText = new createjs.Text("+" + iValue, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        oScoreText.textAlign = "center";
        oScoreText.textBaseline = "alphabetic";
        oScoreText.x = iX;
        oScoreText.y = iY;
        _oPopupContainer.addChild(oScoreText);

        var iSpeed = 1000;

        createjs.Tween.get(oScoreText)
            .to({
                y: oScoreText.y - 400,
                alpha: 0
            }, iSpeed, createjs.Ease.sineOut)
            .call(function() {
                createjs.Tween.removeTweens(oScoreText);
                _oPopupContainer.removeChild(oScoreText);
            });
    };

    this.loopThroughBlocksExplosion = function(aArray) {
        for (var i = 0; i < aArray.length; i++) {
            (function(i) {
                setTimeout(function() {
                    aArray[i].explodeBlock();
                }, 20 * i);
            })(i);
        };
    };

    this.onSpeedBlockExploded = function() {
        this.loopThroughBlocksExplosion(_aBlockMatrix);
    };

    this.gameOver = function() {
        _bStartGame = false;

        this.updateScore();

        if (_oEndPanel === null) {
            $("#canvas").trigger("share_event", s_iTotalScore);
            $("#canvas").trigger("save_score", s_iTotalScore);

            playSound("game_over", 1, false);
            stopSound("soundtrack");

            setTimeout(function() {
                playSound("soundtrack", 0.5, false);
            }, 3000);

            _oEndPanel = new CEndPanel(_iScore);
            _bDisableEvents = true;
        }
    };

    this.setStartGame = function(bValue) {
        _bStartGame = bValue;
        _bDisableEvents = bValue;
    };

    this.updatePhysics = function() {
        // KEEP THE SPRITES' POSITION ON THEIR PHYSIC OBJECTS
        _oPlayer.update();
        _oFloor.update();

        for (var i = 0; i < _aBlockMatrix.length; i++) {
            _aBlockMatrix[i].update();
        };

        s_oPhysicsController.update();
    };

    this.updateBackgroundPosition = function(iY) {
        _oBg1.y -= iY / BACKGROUND_MOVEMENT_VAR;
        if (_oBg1.y <= -1 * CANVAS_HEIGHT) {
            _oBg1.y = 0;
        }

        _oBg2.y -= iY / BACKGROUND_MOVEMENT_VAR;
        if (_oBg2.y <= 0) {
            _oBg2.y = CANVAS_HEIGHT;
        }
    };

    this.update = function() {
        if (!_bStartGame) {
            return;
        }

        for (var i = 0; i < UPDATE_LOOP_VAR; i++) {
            this.updatePhysics();
        };
    };

    s_oGame = this;

    _oData = oData;
    MATRIX_SPEED = oData.matrix_speed;
    BLOCK_VALUE = oData.block_value;
    BLOCK_BONUS_VALUE = oData.block_bonus_value;
    this._init();
}

var s_oGame = null;