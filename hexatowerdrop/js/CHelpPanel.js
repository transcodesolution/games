function CHelpPanel() {
    var _oContainer;
    var _oPanelContainer;
    var _oText1;
    var _oText2;
    var _oText3;
    var _oFade;

    var _pStartPanelPos;

    var _bFading;

    this._init = function() {
        _bFading = false;

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown", function() {});
        _oContainer.addChild(_oFade);

        createjs.Tween.get(_oFade).to({
            alpha: 0.7
        }, 500);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = createBitmap(oSprite);
        oPanel.regX = oSprite.width / 2;
        oPanel.regY = oSprite.height / 2;
        oPanel.x = CANVAS_WIDTH_HALF;
        oPanel.y = CANVAS_HEIGHT_HALF;
        _oPanelContainer.addChild(oPanel);

        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height / 2;
        _pStartPanelPos = {
            x: _oPanelContainer.x,
            y: _oPanelContainer.y
        };
        createjs.Tween.get(_oPanelContainer).to({
            y: 0
        }, 1000, createjs.Ease.backOut);

        this.initText();

        var oParent = this;
        _oPanelContainer.on("pressup", function() {
            oParent._onExitHelp()
        });
        _oContainer.on("pressup", function() {
            oParent._onExitHelp()
        });
        s_oGame._bDisableEvents = true;

        if (!s_bMobile) {
            _oPanelContainer.cursor = "pointer";
        };
    };

    this.initText = function() {
        var iPosXLines = CANVAS_WIDTH_HALF;
        var iPosYLine1 = CANVAS_HEIGHT_HALF - 145;
        var iPosYLine2 = CANVAS_HEIGHT_HALF - 32;
        var iPosYLine3 = CANVAS_HEIGHT_HALF + 75;

        _oText1 = new CTLText(_oPanelContainer,
            iPosXLines - 250, iPosYLine1, 500, 64,
            32, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
            0, 0,
            TEXT_HELP1,
            true, true, true,
            false);


        _oText2 = new CTLText(_oPanelContainer,
            iPosXLines - 250, iPosYLine2, 500, 64,
            32, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
            0, 0,
            TEXT_HELP2,
            true, true, true,
            false);



        _oText3 = new CTLText(_oPanelContainer,
            iPosXLines - 250, iPosYLine3, 500, 64,
            32, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
            0, 0,
            TEXT_HELP3,
            true, true, true,
            false);
    };

    this.unload = function() {
        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(_oPanelContainer).to({
            y: _pStartPanelPos.y
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(_oPanelContainer);
            s_oGame._bDisableEvents = false;
            var oParent = this;
            _oPanelContainer.off("pressup", function() {
                oParent._onExitHelp();
            });
        });
    };

    this._onExitHelp = function() {
        if (_bFading === true) {
            return;
        }

        _bFading = true;
        createjs.Tween.removeAllTweens();
        this.unload();
        s_oGame._onExitHelp();
    };

    this._init();
}