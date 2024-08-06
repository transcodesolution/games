function CInterface(iScore) {
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosScore;
    var _pStartPosLevel;
    var _pStartPosFullscreen;

    var _oLevelText;
    var _oLevelTextOutline;
    var _oScoreText;
    var _oScoreTextOutline;
    var _oButExit;
    var _oHitArea;
    var _oAudioToggle;
    var _oEndPanel;
    var _oNextLevelPanel;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function(iScore) {
        _pStartPosScore = {
            x: 10,
            y: 10
        };

        _oScoreTextOutline = new createjs.Text(TEXT_SCORE + " " + iScore, "26px " + FONT_GAME, "#008733");
        _oScoreTextOutline.x = _pStartPosScore.x;
        _oScoreTextOutline.y = _pStartPosScore.y;
        _oScoreTextOutline.textAlign = "left";
        _oScoreTextOutline.outline = 2;
        s_oStage.addChild(_oScoreTextOutline);

        _oScoreText = new createjs.Text(TEXT_SCORE + " " + iScore, "26px " + FONT_GAME, "#fff");
        _oScoreText.x = _pStartPosScore.x;
        _oScoreText.y = _pStartPosScore.y;
        _oScoreText.textAlign = "left";
        s_oStage.addChild(_oScoreText);

        _pStartPosLevel = {
            x: 10,
            y: 46
        };
        _oLevelTextOutline = new createjs.Text(TEXT_LEVEL + " " + s_iLastLevel, "22px " + FONT_GAME, "#008733");
        _oLevelTextOutline.x = _pStartPosLevel.x;
        _oLevelTextOutline.y = _pStartPosLevel.y;
        _oLevelTextOutline.textAlign = "left";
        _oLevelTextOutline.outline = 2;
        s_oStage.addChild(_oLevelTextOutline);

        _oLevelText = new createjs.Text(TEXT_LEVEL + " " + s_iLastLevel, "22px " + FONT_GAME, "#fff");
        _oLevelText.x = _pStartPosLevel.x;
        _oLevelText.y = _pStartPosLevel.y;
        _oLevelText.textAlign = "left";
        s_oStage.addChild(_oLevelText);

        var oParent = this;
        _oHitArea = createBitmap(s_oSpriteLibrary.getSprite('hit_area'));
        s_oStage.addChild(_oHitArea);
        _oHitArea.on("pressup", function(evt) {
            oParent._onTapScreen(evt.stageX, evt.stageY)
        });

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {
            x: CANVAS_WIDTH - (oSprite.width / 2),
            y: (oSprite.height / 2) + 4
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _pStartPosAudio = {
                x: _pStartPosExit.x - oSprite.width,
                y: (oSprite.height / 2) + 4
            }
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

            _pStartPosFullscreen = {
                x: _pStartPosAudio.x - oSprite.width / 2,
                y: _pStartPosAudio.y
            };
        } else {
            _pStartPosFullscreen = {
                x: _oButExit.getX() - oSprite.width,
                y: (oSprite.height / 2) + 4
            }
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');


            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _oNextLevelPanel = new CNextLevel();
        _oEndPanel = new CEndPanel(s_oSpriteLibrary.getSprite('msg_box'));

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.unload = function() {
        _oButExit.unload();
        _oButExit = null;

        if (DISABLE_SOUND_MOBILE === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.unload();
        }

        s_oStage.removeAllChildren();
        s_oInterface = null;
    };

    this.refreshButtonPos = function(iNewX, iNewY) {
        _oScoreText.x = _pStartPosScore.x + iNewX;
        _oScoreText.y = _pStartPosScore.y + iNewY;
        _oLevelText.x = _pStartPosLevel.x + iNewX;
        _oLevelText.y = _pStartPosLevel.y + iNewY;

        _oScoreTextOutline.x = _pStartPosScore.x + iNewX;
        _oScoreTextOutline.y = _pStartPosScore.y + iNewY;
        _oLevelTextOutline.x = _pStartPosLevel.x + iNewX;
        _oLevelTextOutline.y = _pStartPosLevel.y + iNewY;

        _oButExit.setPosition(_pStartPosExit.x - iNewX, _pStartPosExit.y + iNewY);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX, _pStartPosFullscreen.y + iNewY);
        }
    };

    this._onTapScreen = function(iX, iY) {
        s_oGame.onShot(iX, iY);
    };

    this.gameOver = function(iScore) {
        _oEndPanel.show(iScore, false);
    };

    this.win = function(iScore) {
        _oEndPanel.show(iScore, true);
    };

    this.nextLevel = function(iLevel, iScore) {
        _oNextLevelPanel.show(iLevel, iScore);
    };

    this.refreshScore = function(iScore) {
        _oScoreText.text = TEXT_SCORE + " " + iScore;
        _oScoreTextOutline.text = TEXT_SCORE + " " + iScore;
    };

    this.refreshLevel = function(iLevel) {
        _oLevelText.text = TEXT_LEVEL + " " + iLevel;
        _oLevelTextOutline.text = TEXT_LEVEL + " " + iLevel;

    };

    this._onExit = function() {
        s_oGame.onExit();
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    s_oInterface = this;

    this._init(iScore);

    return this;
}

var s_oInterface = null;