function CMenu() {
    var _oMenuContainer;
    var _oBg;
    var _oGameLogo;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oButCredits;
    var _oCreditsPanel = null;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _oBestScoreText;

    var _iTimer;
    var _oBackgroundContainer;
    var _oBg1;
    var _oBg2;
    var _aBlocks;

    this._init = function() {
        //localStorage.clear();            // TO DELETE EVERYTHING SAVED IN LOCALSTORAGE

        _oBackgroundContainer = new createjs.Container();
        s_oStage.addChild(_oBackgroundContainer);

        _iTimer = MENU_TIMER_LIMIT - 100;
        _aBlocks = [];

        _oBg1 = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        _oBg1.y = 0;
        _oBackgroundContainer.addChild(_oBg1);
        _oBg2 = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        _oBg2.y = CANVAS_HEIGHT;
        _oBackgroundContainer.addChild(_oBg2);

        _oMenuContainer = new createjs.Container();
        s_oStage.addChild(_oMenuContainer);

        s_bFirstTimePlaying = true;

        var oGameLogo = s_oSpriteLibrary.getSprite('logo_menu');
        _oGameLogo = createBitmap(oGameLogo);
        _oGameLogo.regX = oGameLogo.width / 2;
        _oGameLogo.regY = oGameLogo.height / 2;
        _oGameLogo.x = CANVAS_WIDTH / 2;
        _oGameLogo.y = -150;
        createjs.Tween.get(_oGameLogo, {
            loop: false
        }).to({
            y: CANVAS_HEIGHT_HALF - 100
        }, 1000, createjs.Ease.cubicOut);
        _oMenuContainer.addChild(_oGameLogo);

        _oBestScoreText = new CTLText(_oMenuContainer,
            CANVAS_WIDTH / 2 - 300, CANVAS_HEIGHT_HALF + 150, 600, 36,
            36, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
            0, 0,
            " ",
            true, true, true,
            false);



        var oSpritePlay = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton((CANVAS_WIDTH_HALF), CANVAS_HEIGHT + 200, oSpritePlay, _oMenuContainer);
        createjs.Tween.get(_oButPlay.getSprite(), {
            loop: false
        }).to({
            y: CANVAS_HEIGHT_HALF + 350
        }, 1000, createjs.Ease.cubicOut);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {
            x: 20 + oSprite.width / 2,
            y: (oSprite.height / 2) + 10
        };
        _oButCredits = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, _oMenuContainer);
        _oButCredits.addEventListener(ON_MOUSE_UP, this._onCredits, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - oSprite.width / 4 - 20,
                y: (oSprite.height / 2) + 10
            };
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, _oMenuContainer);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {
                x: _pStartPosCredits.x + oSprite.width / 2 + 10,
                y: _pStartPosCredits.y
            };

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, _oMenuContainer);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oMenuContainer.addChild(_oFade);

        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 1000).call(function() {
            _oMenuContainer.removeChild(_oFade);
        });

        if (!s_bStorageAvailable) {
            new CMsgBox(TEXT_ERR_LS, _oMenuContainer);
        } else {
            var iTotalScore = getItem("hexagonfall_total_score");
            if (iTotalScore !== null && iTotalScore !== undefined) {
                s_iTotalScore = Number(iTotalScore);
            } else {
                s_iTotalScore = 0;
            };

            var iBestScore = getItem("hexagonfall_best_score");
            if (iBestScore !== null && iBestScore !== undefined) {
                s_iBestScore = iBestScore;
                _oBestScoreText.refreshText(TEXT_BEST_SCORE + ": " + s_iBestScore);
            } else {
                s_iBestScore = 0;
                _oBestScoreText.refreshText(" ");
            };
        }

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.updateBackgroundPosition = function() {
        var BACKGROUND_MOVEMENT_VAR = 3;

        _oBg1.y -= 1 * BACKGROUND_MOVEMENT_VAR;
        if (_oBg1.y <= 0 - CANVAS_HEIGHT) {
            _oBg1.y = 0;
        }

        _oBg2.y -= 1 * BACKGROUND_MOVEMENT_VAR;
        if (_oBg2.y <= 0) {
            _oBg2.y = CANVAS_HEIGHT;
        }
    };

    this.unload = function() {
        _oButPlay.unload();
        _oButPlay = null;

        _oButCredits.unload();

        _oMenuContainer.removeAllChildren();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }
        s_oMenu = null;
    };

    this.refreshButtonPos = function(iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y + iNewY);
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX, _pStartPosFullscreen.y + iNewY);
        }

        _oButCredits.setPosition(_pStartPosCredits.x + iNewX, _pStartPosCredits.y + iNewY);
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this.exitFromCredits = function() {
        _oCreditsPanel = null;
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onCredits = function() {
        _oCreditsPanel = new CCreditsPanel();
    };

    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    this.initNewBlock = function() {
        var iRandomX = Math.floor(Math.random() * (650)) + 50;
        var iRandomType = Math.floor(Math.random() * (15)) + 0;

        var oSprite = s_oSpriteLibrary.getSprite("block_" + iRandomType);
        var oBlockSprite = createBitmap(oSprite);
        oBlockSprite.regX = oSprite.width * 0.5;
        oBlockSprite.regY = oSprite.height * 0.5;
        oBlockSprite.scaleX = oBlockSprite.scaleY = 0.8;
        oBlockSprite.x = iRandomX;
        oBlockSprite.y = -200;
        _oBackgroundContainer.addChild(oBlockSprite);
        _aBlocks.push(oBlockSprite);
    };

    this.updateBlocksPosition = function() {
        for (var i = 0; i < _aBlocks.length; i++) {
            _aBlocks[i].rotation += MENU_BLOCKS_ROTATION;
            _aBlocks[i].y += MENU_BLOCKS_SPEED;

            if (_aBlocks[i].y > CANVAS_HEIGHT + 200) {
                _oBackgroundContainer.removeChild(_aBlocks[i]);
            }
        };
    };

    this.update = function() {
        this.updateBackgroundPosition();
        this.updateBlocksPosition();

        _iTimer += s_iTimeElaps;
        if (_iTimer > MENU_TIMER_LIMIT) {
            _iTimer = 0;
            this.initNewBlock();
        }
    };

    s_oMenu = this;

    this._init();
}

var s_oMenu = null;