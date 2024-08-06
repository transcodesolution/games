function CPhysicObjectsCreator(oWorld) {
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

    var _oWorld;

    this.init = function() {
        _oWorld = oWorld;
    };

    this.addFloor = function(oContainer) {
        var iWidth = 350;
        var iHeight = 1;
        var iX = CANVAS_WIDTH_HALF;
        var iY = FLOOR_Y_START;

        var oPhysic = this.addRectangle(iWidth, iHeight, iX, iY, 0, FLOOR_DENSITY, FLOOR_FRICTION, FLOOR_RESTITUTION);
        var oFloor = new CFloor(oPhysic, oContainer);
        return oFloor;
    };

    this.addPlayer = function(oContainer) {
        var oPhysic;
        var iAngle = 0;
        var iX = PLAYER_START_X;
        var iY = PLAYER_START_Y;

        // CLONE THE COORDINATES TO AVOID MODIFYING THE ORIGINAL ONES (I USE "0" INDEX BECAUSE THERE'S ONLY ONE POLYGON)
        var aClonedCoordinates = [];
        var aPlayerCoordinates = GAME_OBJECTS.rigidBodies[0].polygons;
        for (var i = 0; i < aPlayerCoordinates.length; i++) {
            for (var j = 0; j < aPlayerCoordinates[i].length; j++) {
                aClonedCoordinates[j] = {
                    x: aPlayerCoordinates[i][j].x,
                    y: aPlayerCoordinates[i][j].y
                };
            };
        };
        var oPhysicWorld = s_oGame.getPhysicWorld();
        oPhysicWorld.centerToScreen(aClonedCoordinates);

        // CREATE THE PHYSIC SETTINGS FOR THIS POLYGON AND CREATE THE PLAYER
        oPhysic = this.addPolygon(aClonedCoordinates.reverse(), iX, iY, iAngle, PLAYER_DENSITY, PLAYER_FRICTION, PLAYER_RESTITUTION, DYNAMIC_BODY);
        var oPlayer = new CPlayer(oPhysic, oContainer);
        return oPlayer;
    };

    this.createBlock = function(iBodyType, iBlockType) {
        var oSquareShape = new b2PolygonShape();

        var oSquareFixture = new b2FixtureDef();
        oSquareFixture.density = BLOCK_DENSITY;
        oSquareFixture.friction = BLOCK_FRICTION;
        oSquareFixture.restitution = BLOCK_RESTITUTION;
        oSquareFixture.shape = oSquareShape;
        oSquareFixture.userData = {
            id: "block"
        };

        var oSquareBodyDef = new b2BodyDef();
        oSquareBodyDef.type = b2Body.b2_staticBody;
        if (iBodyType === DYNAMIC_BODY) {
            oSquareBodyDef.type = b2Body.b2_dynamicBody;
        };

        oSquareBodyDef.allowSleep = true;
        oSquareBodyDef.awake = true;
        oSquareBodyDef.bullet = true;

        var oBlock = _oWorld.CreateBody(oSquareBodyDef);

        // ACCORDING TO THE TYPE OF BLOCK, COMPOSE IT FROM THE SINGLE SQUARES
        switch (iBlockType) {
            case BLOCK_SPEED:
            case BLOCK_BOMB:
            case BLOCK_BONUS:
            case BLOCK_0:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
            case BLOCK_1:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
            case BLOCK_2:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(0, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_3:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -2 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-1 * BLOCK_HALF_SIZE_SCALED, 0));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);

                    var oSquareShape3 = new b2PolygonShape();
                    oSquareShape3.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(BLOCK_HALF_SIZE_SCALED, 2 * BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture3 = new b2FixtureDef();
                    oSquareFixture3.density = BLOCK_DENSITY;
                    oSquareFixture3.friction = BLOCK_FRICTION;
                    oSquareFixture3.restitution = BLOCK_RESTITUTION;
                    oSquareFixture3.shape = oSquareShape3;
                    oBlock.CreateFixture(oSquareFixture3);
                    break;
                };
            case BLOCK_4:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-3 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 4, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(0, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_5:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED * 2);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
            case BLOCK_6:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED * 2,
                        new b2Vec2(-1 * BLOCK_HALF_SIZE_SCALED, 0));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_7:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_8:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -2 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED, new b2Vec2(0, 0));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);

                    var oSquareShape3 = new b2PolygonShape();
                    oSquareShape3.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(BLOCK_HALF_SIZE_SCALED * 2, 2 * BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture3 = new b2FixtureDef();
                    oSquareFixture3.density = BLOCK_DENSITY;
                    oSquareFixture3.friction = BLOCK_FRICTION;
                    oSquareFixture3.restitution = BLOCK_RESTITUTION;
                    oSquareFixture3.shape = oSquareShape3;
                    oBlock.CreateFixture(oSquareFixture3);
                    break;
                };
            case BLOCK_9:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED * 4, BLOCK_HALF_SIZE_SCALED);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
            case BLOCK_10:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-1 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 2, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(0, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_11:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
            case BLOCK_12:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(0, BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);

                    var oSquareShape3 = new b2PolygonShape();
                    oSquareShape3.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture3 = new b2FixtureDef();
                    oSquareFixture3.density = BLOCK_DENSITY;
                    oSquareFixture3.friction = BLOCK_FRICTION;
                    oSquareFixture3.restitution = BLOCK_RESTITUTION;
                    oSquareFixture3.shape = oSquareShape3;
                    oBlock.CreateFixture(oSquareFixture3);
                    break;
                };
            case BLOCK_13:
                {
                    oSquareShape.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED, BLOCK_HALF_SIZE_SCALED * 2,
                        new b2Vec2(-2 * BLOCK_HALF_SIZE_SCALED, -1 * BLOCK_HALF_SIZE_SCALED));
                    oBlock.CreateFixture(oSquareFixture);

                    var oSquareShape2 = new b2PolygonShape();
                    oSquareShape2.SetAsOrientedBox(BLOCK_HALF_SIZE_SCALED * 3, BLOCK_HALF_SIZE_SCALED,
                        new b2Vec2(0, 2 * BLOCK_HALF_SIZE_SCALED));

                    var oSquareFixture2 = new b2FixtureDef();
                    oSquareFixture2.density = BLOCK_DENSITY;
                    oSquareFixture2.friction = BLOCK_FRICTION;
                    oSquareFixture2.restitution = BLOCK_RESTITUTION;
                    oSquareFixture2.shape = oSquareShape2;
                    oBlock.CreateFixture(oSquareFixture2);
                    break;
                };
            case BLOCK_14:
                {
                    oSquareShape.SetAsBox(BLOCK_HALF_SIZE_SCALED * 5, BLOCK_HALF_SIZE_SCALED);
                    oBlock.CreateFixture(oSquareFixture);
                    break;
                };
        }

        return oBlock;
    };

    this.addPolygon = function(aPoints, iX, iY, iAngle, density, friction, restitution, iType) {
        var oBodyDef = new b2BodyDef;
        oBodyDef.type = b2Body.b2_dynamicBody;
        if (iType === STATIC_BODY) {
            oBodyDef.type = b2Body.b2_staticBody;
        };
        oBodyDef.allowSleep = false;
        oBodyDef.bullet = true;


        var oFixDef = new b2FixtureDef;
        oFixDef.density = density;
        oFixDef.friction = friction;
        oFixDef.restitution = restitution;
        oFixDef.shape = new b2PolygonShape;
        oFixDef.userData = {
            id: "polygon"
        };

        var points = [];
        for (var i = 0; i < aPoints.length; i++) {
            var vec = new b2Vec2();
            vec.Set(aPoints[i].x / WORLD_SCALE, aPoints[i].y / WORLD_SCALE);
            points.push(vec);
        }
        oFixDef.shape.SetAsArray(points, points.length);

        oBodyDef.position.Set(iX / WORLD_SCALE, iY / WORLD_SCALE);
        oBodyDef.angle = iAngle * Math.PI / 180;

        var oBody = _oWorld.CreateBody(oBodyDef);
        var oCrateFixture = oBody.CreateFixture(oFixDef);
        oCrateFixture.GetBody().SetActive(false);
        return oCrateFixture;
    };

    this.addRectangle = function(iWidth, iHeight, iX, iY, iAngle, density, friction, restitution) {
        var oBodyDef = new b2BodyDef;
        oBodyDef.type = b2Body.b2_kinematicBody; // THIS WILL BE A KINEMATIC FLOOR, TO MOVE IT VERTICALLY

        var oFixDef = new b2FixtureDef;
        oFixDef.density = density;
        oFixDef.friction = friction;
        oFixDef.restitution = restitution;
        oFixDef.shape = new b2PolygonShape;
        oFixDef.shape.SetAsBox(iWidth / WORLD_SCALE, iHeight / WORLD_SCALE);
        oFixDef.userData = {
            id: "rectangle"
        };

        oBodyDef.position.Set(iX / WORLD_SCALE, iY / WORLD_SCALE);
        oBodyDef.angle = iAngle * Math.PI / 180;
        var oBody = _oWorld.CreateBody(oBodyDef);
        oBody.CreateFixture(oFixDef);

        return oBody;
    };

    this.init();
}