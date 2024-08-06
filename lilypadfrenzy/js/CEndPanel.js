function CEndPanel(oSpriteBg) {

    var _oBg;
    var _oScoreTextOutline;
    var _oScoreText;
    var _oMsgTextOutline;
    var _oMsgText;
    var _oGroup;

    this._init = function(oSpriteBg) {

        _oBg = createBitmap(oSpriteBg);

        _oMsgTextOutline = new createjs.Text(TEXT_CONGRATS, "32px " + FONT_GAME, "#008733");
        _oMsgTextOutline.x = CANVAS_WIDTH / 2;
        _oMsgTextOutline.y = (CANVAS_HEIGHT / 2) - 70;
        _oMsgTextOutline.outline = 3;
        _oMsgTextOutline.textAlign = "center";

        _oMsgText = new createjs.Text(TEXT_CONGRATS, "32px " + FONT_GAME, "#ffffff");
        _oMsgText.x = CANVAS_WIDTH / 2;
        _oMsgText.y = (CANVAS_HEIGHT / 2) - 70;
        _oMsgText.textAlign = "center";

        _oScoreTextOutline = new createjs.Text(TEXT_FINAL_SCORE + "\n99999", "26px " + FONT_GAME, "#008733");
        _oScoreTextOutline.x = CANVAS_WIDTH / 2;
        _oScoreTextOutline.y = (CANVAS_HEIGHT / 2);
        _oScoreTextOutline.lineHeight = 50;
        _oScoreTextOutline.outline = 3;
        _oScoreTextOutline.textAlign = "center";

        _oScoreText = new createjs.Text(TEXT_FINAL_SCORE + "\n99999", "26px " + FONT_GAME, "#ffffff");
        _oScoreText.x = CANVAS_WIDTH / 2;
        _oScoreText.y = (CANVAS_HEIGHT / 2);
        _oScoreText.lineHeight = 50;
        _oScoreText.textAlign = "center";

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible = false;

        _oGroup.addChild(_oBg, _oScoreTextOutline, _oScoreText, _oMsgTextOutline, _oMsgText);

        s_oStage.addChild(_oGroup);
    };

    this.unload = function() {
        _oGroup.off("mousedown", this._onExit);
        s_oStage.removeChild(_oGroup);
    };

    this._initListener = function() {
        _oGroup.on("mousedown", this._onExit);
        $(s_oMain).trigger("show_interlevel_ad");
    };

    this.show = function(iScore, bWin) {
        if (bWin) {
            _oMsgTextOutline.text = TEXT_CONGRATS;
            _oMsgText.text = TEXT_CONGRATS;
        } else {
            _oMsgTextOutline.text = TEXT_GAMEOVER;
            _oMsgText.text = TEXT_GAMEOVER;
        }
        _oScoreTextOutline.text = TEXT_FINAL_SCORE + "\n" + iScore;
        _oScoreText.text = TEXT_FINAL_SCORE + "\n" + iScore;
        _oGroup.visible = true;

        var oParent = this;
        createjs.Tween.get(_oGroup).to({
            alpha: 1
        }, 500).call(function() {
            oParent._initListener();
        });

        $(s_oMain).trigger("save_score", iScore);
    };

    this._onExit = function() {
        _oGroup.off("mousedown");
        s_oGame.onExit();
    };

    this._init(oSpriteBg);

    return this;
}