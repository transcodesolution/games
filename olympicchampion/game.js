! function(u) {
    "use strict";

    function i() {
        return Fi.__string_rec(this, "")
    }
    var h, e = {},
        A = A || {};

    function t(t, e) {
        var i, s = Object.create(t);
        for (i in e) s[i] = e[i];
        return e.toString !== Object.prototype.toString && (s.toString = e.toString), s
    }

    function d(t, e) {
        this.r = new RegExp(t, e.split("u").join(""))
    }

    function C() {}

    function p() {}

    function U() {}

    function R() {}

    function w() {
        this.b = ""
    }

    function c() {}(e.EReg = d).__name__ = "EReg", d.prototype = {
        match: function(t) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
        },
        matched: function(t) {
            if (null != this.r.m && 0 <= t && t < this.r.m.length) return this.r.m[t];
            throw ui.thrown("EReg::matched")
        },
        split: function(t) {
            var e = "#__delim__#";
            return t.replace(this.r, e).split(e)
        },
        __class__: d
    }, (e.HxOverrides = C).__name__ = "HxOverrides", C.strDate = function(t) {
        switch (t.length) {
            case 8:
                var e = t.split(":"),
                    i = new Date;
                return i.setTime(0), i.setUTCHours(e[0]), i.setUTCMinutes(e[1]), i.setUTCSeconds(e[2]), i;
            case 10:
                e = t.split("-");
                return new Date(e[0], e[1] - 1, e[2], 0, 0, 0);
            case 19:
                i = (e = t.split(" "))[0].split("-"), e = e[1].split(":");
                return new Date(i[0], i[1] - 1, i[2], e[0], e[1], e[2]);
            default:
                throw ui.thrown("Invalid date format : " + t)
        }
    }, C.cca = function(t, e) {
        e = t.charCodeAt(e);
        if (e == e) return e
    }, C.substr = function(t, e, i) {
        if (null == i) i = t.length;
        else if (i < 0) {
            if (0 != e) return "";
            i = t.length + i
        }
        return t.substr(e, i)
    }, C.remove = function(t, e) {
        e = t.indexOf(e);
        return -1 != e && (t.splice(e, 1), !0)
    }, C.now = function() {
        return Date.now()
    }, (e.Lambda = p).__name__ = "Lambda", p.has = function(t, e) {
        for (var i = ss(t); i.hasNext();)
            if (i.next() == e) return !0;
        return !1
    }, p.exists = function(t, e) {
        for (var i = ss(t); i.hasNext();)
            if (e(i.next())) return !0;
        return !1
    }, Math.__name__ = "Math", (e.Reflect = U).__name__ = "Reflect", U.field = function(t, e) {
        try {
            return t[e]
        } catch (t) {
            return null
        }
    }, U.fields = function(t) {
        var e = [];
        if (null != t) {
            var i, s = Object.prototype.hasOwnProperty;
            for (i in t) "__id__" != i && "hx__closures__" != i && s.call(t, i) && e.push(i)
        }
        return e
    }, U.isFunction = function(t) {
        return "function" == typeof t && !(t.__name__ || t.__ename__)
    }, U.compareMethods = function(t, e) {
        return t == e || !(!U.isFunction(t) || !U.isFunction(e)) && (t.scope == e.scope && t.method == e.method && null != t.method)
    }, U.deleteField = function(t, e) {
        return !!Object.prototype.hasOwnProperty.call(t, e) && (delete t[e], !0)
    }, (e.Std = R).__name__ = "Std", R.string = function(t) {
        return Fi.__string_rec(t, "")
    }, R.parseInt = function(t) {
        if (null != t)
            for (var e = 0, i = t.length; e < i;) {
                var s = e++,
                    n = t.charCodeAt(s);
                if (n <= 8 || 14 <= n && 32 != n && 45 != n) {
                    s = t.charCodeAt(1 + s), s = parseInt(t, 120 == s || 88 == s ? 16 : 10);
                    return isNaN(s) ? null : s
                }
            }
        return null
    }, R.random = function(t) {
        return t <= 0 ? 0 : Math.floor(Math.random() * t)
    }, (e.StringBuf = w).__name__ = "StringBuf", w.prototype = {
        __class__: w
    }, (e.StringTools = c).__name__ = "StringTools", c.htmlEscape = function(t, e) {
        for (var i = "", s = 0, n = t; s < n.length;) {
            var _ = s++,
                a = (t = n).charCodeAt(_);
            55296 <= a && a <= 56319 && (a = a - 55232 << 10 | 1023 & t.charCodeAt(1 + _)), 65536 <= a && ++s;
            var r = a;
            switch (r) {
                case 34:
                    i += e ? "&quot;" : String.fromCodePoint(r);
                    break;
                case 38:
                    i += "&amp;";
                    break;
                case 39:
                    i += e ? "&#039;" : String.fromCodePoint(r);
                    break;
                case 60:
                    i += "&lt;";
                    break;
                case 62:
                    i += "&gt;";
                    break;
                default:
                    i += String.fromCodePoint(r)
            }
        }
        return i
    }, c.isSpace = function(t, e) {
        e = C.cca(t, e);
        return 8 < e && e < 14 || 32 == e
    }, c.ltrim = function(t) {
        for (var e = t.length, i = 0; i < e && c.isSpace(t, i);) ++i;
        return 0 < i ? C.substr(t, i, e - i) : t
    }, c.rtrim = function(t) {
        for (var e = t.length, i = 0; i < e && c.isSpace(t, e - i - 1);) ++i;
        return 0 < i ? C.substr(t, 0, e - i) : t
    }, c.trim = function(t) {
        return c.ltrim(c.rtrim(t))
    }, c.replace = function(t, e, i) {
        return t.split(e).join(i)
    }, c.hex = function(t, e) {
        for (var i = ""; i = "0123456789ABCDEF".charAt(15 & t) + i, 0 < (t >>>= 4););
        if (null != e)
            for (; i.length < e;) i = "0" + i;
        return i
    };
    var s = A.ValueType = {
        __ename__: "ValueType",
        __constructs__: null,
        TNull: {
            _hx_name: "TNull",
            _hx_index: 0,
            __enum__: "ValueType",
            toString: i
        },
        TInt: {
            _hx_name: "TInt",
            _hx_index: 1,
            __enum__: "ValueType",
            toString: i
        },
        TFloat: {
            _hx_name: "TFloat",
            _hx_index: 2,
            __enum__: "ValueType",
            toString: i
        },
        TBool: {
            _hx_name: "TBool",
            _hx_index: 3,
            __enum__: "ValueType",
            toString: i
        },
        TObject: {
            _hx_name: "TObject",
            _hx_index: 4,
            __enum__: "ValueType",
            toString: i
        },
        TFunction: {
            _hx_name: "TFunction",
            _hx_index: 5,
            __enum__: "ValueType",
            toString: i
        },
        TClass: ((h = function(t) {
            return {
                _hx_index: 6,
                c: t,
                __enum__: "ValueType",
                toString: i
            }
        })._hx_name = "TClass", h.__params__ = ["c"], h),
        TEnum: ((h = function(t) {
            return {
                _hx_index: 7,
                e: t,
                __enum__: "ValueType",
                toString: i
            }
        })._hx_name = "TEnum", h.__params__ = ["e"], h),
        TUnknown: {
            _hx_name: "TUnknown",
            _hx_index: 8,
            __enum__: "ValueType",
            toString: i
        }
    };

    function I() {}

    function S(t) {
        this.nodeType = t, this.children = [], this.attributeMap = new Ii
    }
    s.__constructs__ = [s.TNull, s.TInt, s.TFloat, s.TBool, s.TObject, s.TFunction, s.TClass, s.TEnum, s.TUnknown], (e.Type = I).__name__ = "Type", I.getEnum = function(t) {
        return null == t ? null : A[t.__enum__]
    }, I.createEnum = function(t, e, i) {
        var s = U.field(t, e);
        if (null == s) throw ui.thrown("No such constructor " + e);
        if (U.isFunction(s)) {
            if (null == i) throw ui.thrown("Constructor " + e + " need parameters");
            return s.apply(t, i)
        }
        if (null != i && 0 != i.length) throw ui.thrown("Constructor " + e + " does not need parameters");
        return s
    }, I.createEnumIndex = function(t, e, i) {
        var s = t.__constructs__[e];
        if (null == (s = null == s ? null : s._hx_name)) throw ui.thrown(e + " is not a valid enum constructor index");
        return I.createEnum(t, s, i)
    }, I.typeof = function(t) {
        switch (typeof t) {
            case "boolean":
                return s.TBool;
            case "function":
                return t.__name__ || t.__ename__ ? s.TObject : s.TFunction;
            case "number":
                return Math.ceil(t) == t % 2147483648 ? s.TInt : s.TFloat;
            case "object":
                if (null == t) return s.TNull;
                var e = t.__enum__;
                if (null != e) return s.TEnum(A[e]);
                e = Fi.getClass(t);
                return null != e ? s.TClass(e) : s.TObject;
            case "string":
                return s.TClass(String);
            case "undefined":
                return s.TNull;
            default:
                return s.TUnknown
        }
    }, I.enumEq = function(t, e) {
        if (t == e) return !0;
        try {
            var i = t.__enum__;
            if (null == i || i != e.__enum__) return !1;
            if (t._hx_index != e._hx_index) return !1;
            for (var s = A[i].__constructs__[t._hx_index].__params__, n = 0; n < s.length;) {
                var _ = s[n];
                if (++n, !I.enumEq(t[_], e[_])) return !1
            }
        } catch (n) {
            return !1
        }
        return !0
    }, I.enumParameters = function(t) {
        var e = A[t.__enum__].__constructs__[t._hx_index].__params__;
        if (null == e) return [];
        for (var i = [], s = 0; s < e.length;) {
            var n = e[s];
            ++s, i.push(t[n])
        }
        return i
    };
    var v = {
        toString: function(t) {
            switch (t) {
                case 0:
                    return "Element";
                case 1:
                    return "PCData";
                case 2:
                    return "CData";
                case 3:
                    return "Comment";
                case 4:
                    return "DocType";
                case 5:
                    return "ProcessingInstruction";
                case 6:
                    return "Document"
            }
        }
    };
    (e.Xml = S).__name__ = "Xml", S.parse = function(t) {
        return Bi.parse(t)
    }, S.createElement = function(t) {
        var e = new S(S.Element);
        if (e.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeName = t, e
    }, S.createPCData = function(t) {
        var e = new S(S.PCData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createCData = function(t) {
        var e = new S(S.CData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createComment = function(t) {
        var e = new S(S.Comment);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocType = function(t) {
        var e = new S(S.DocType);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createProcessingInstruction = function(t) {
        var e = new S(S.ProcessingInstruction);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocument = function() {
        return new S(S.Document)
    }, S.prototype = {
        get: function(t) {
            if (this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return this.attributeMap.h[t]
        },
        set: function(t, e) {
            if (this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            this.attributeMap.h[t] = e
        },
        exists: function(t) {
            if (this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return Object.prototype.hasOwnProperty.call(this.attributeMap.h, t)
        },
        attributes: function() {
            if (this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return new ki(this.attributeMap.h)
        },
        elements: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            for (var t = [], e = 0, i = this.children; e < i.length;) {
                var s = i[e];
                ++e, s.nodeType == S.Element && t.push(s)
            }
            return new Di(t)
        },
        firstElement: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            for (var t = 0, e = this.children; t < e.length;) {
                var i = e[t];
                if (++t, i.nodeType == S.Element) return i
            }
            return null
        },
        addChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
        },
        removeChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return !!C.remove(this.children, t) && !(t.parent = null)
        },
        toString: function() {
            return Oi.print(this)
        },
        __class__: S
    };
    var n = function() {};

    function _() {}

    function a() {}(e["awe6.interfaces.IPauseable"] = n).__name__ = "awe6.interfaces.IPauseable", n.__isInterface__ = !0, n.prototype = {
        __class__: n
    }, (e["awe6.interfaces.IDisposable"] = _).__name__ = "awe6.interfaces.IDisposable", _.__isInterface__ = !0, _.prototype = {
        __class__: _
    }, (e["awe6.interfaces.IUpdateable"] = a).__name__ = "awe6.interfaces.IUpdateable", a.__isInterface__ = !0, a.prototype = {
        __class__: a
    };
    var r = function() {};

    function o(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._isEntity = Fi.__implements(this, m), this._init()
    }(e["awe6.interfaces.IProcess"] = r).__name__ = "awe6.interfaces.IProcess", r.__isInterface__ = !0, r.__interfaces__ = [n, _, a], (e["awe6.core.Process"] = o).__name__ = "awe6.core.Process", o.__interfaces__ = [r], o.prototype = {
        _init: function() {
            this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this.isDisposed = !1, this._age = 0, this._updates = 0
        },
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())
        },
        _disposer: function() {},
        getAge: function(t) {
            return null == t && (t = !0), t ? this._age : this._updates
        },
        update: function(t) {
            null == t && (t = 0), !this.isActive || this.isDisposed || (this._age += t, this._updates++, this._updater(t))
        },
        _updater: function(t) {
            null == t && (t = 0)
        },
        set_isActive: function(t) {
            return this.isDisposed ? this.isActive = !1 : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(kt.RESUME, this, !0, !0, !0)) : this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(kt.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(kt.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(kt.RESUME, this, !0, !0, !0))
        },
        _resumer: function() {},
        __class__: o
    };
    var l = function() {};
    (e["awe6.interfaces.IAgendaManager"] = l).__name__ = "awe6.interfaces.IAgendaManager", l.__isInterface__ = !0, l.prototype = {
        __class__: l
    };
    var g = function() {};

    function f() {}(e["awe6.interfaces.IEntityCollection"] = g).__name__ = "awe6.interfaces.IEntityCollection", g.__isInterface__ = !0, g.__interfaces__ = [l], g.prototype = {
        __class__: g
    }, (e["awe6.interfaces.IViewable"] = f).__name__ = "awe6.interfaces.IViewable", f.__isInterface__ = !0, f.prototype = {
        __class__: f
    };
    var m = function() {};

    function y(t, e, i) {
        null == this.get_view() && (this.view = new wt(t, i, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), o.call(this, t)
    }

    function x() {}

    function E(t, e, i, s, n, _, a, r, o, h, c) {
        null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 20), null == s && (s = 100), this._stateUp = new T(t, e), this._stateOver = new T(t, i), this.x = _, this.y = a, this.set_width(s), this.set_height(n), this._keyType = r, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = c, y.call(this, t)
    }(e["awe6.interfaces.IEntity"] = m).__name__ = "awe6.interfaces.IEntity", m.__isInterface__ = !0, m.__interfaces__ = [g, f, r], m.prototype = {
        __class__: m
    }, (e["awe6.core.Entity"] = y).__name__ = "awe6.core.Entity", y.__interfaces__ = [m], y.__super__ = o, y.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.agenda = bt.ALWAYS, this._entityAgendaPairs = new bi, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), I.enumEq(this.get_agenda(), bt.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(bt.ALWAYS))), this._isAgendaDirty = !1);
            for (var e = 0, i = this._cachedEntities; e < i.length;) {
                var s = i[e];
                ++e, s.update(t)
            }
        },
        _disposer: function() {
            this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
            var t = this._getEntities();
            t.reverse();
            for (var e = 0; e < t.length;) {
                var i = t[e];
                ++e, i.dispose()
            }
            for (i = this._entityAgendaPairs.iterator(); i.hasNext();) {
                var s = i.next();
                this._entityAgendaPairs.remove(s)
            }
            this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(t, e, i, s) {
            if (null == s && (s = 0), null == i && (i = !1), this.isDisposed || null == t) return null;
            null == e && (e = bt.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var _ = n.next();
                if (_.entity == t && I.enumEq(_.agenda, e)) return t
            }
            this._isAgendaDirty = !0, t.get_parent() != this && (t.remove(i), t instanceof y && t._setParent(this));
            var a = new N(t, e),
                r = this._entityAgendaPairs;
            return r.head = new Ti(a, r.head), i && (I.enumEq(e, this.get_agenda()) || e == bt.ALWAYS ? this.get_view().addChild(t.get_view(), s) : (t.get_view().set_priority(s), a.isAddedToView = !0)), t
        },
        removeEntity: function(t, e, i) {
            if (null == i && (i = !1), !this.isDisposed && null != t) {
                for (var s = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var _ = n.next();
                    _.entity != t || null != e && !I.enumEq(_.agenda, e) || (this._entityAgendaPairs.remove(_), s = !0)
                }
                s && (this._isAgendaDirty = !0, t instanceof y && t._setParent(null), i && t.get_view().remove())
            }
        },
        remove: function(t) {
            null == t && (t = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, t)
        },
        getEntities: function(t) {
            return this._getEntities(t)
        },
        _getEntities: function(t) {
            if (!this._isAgendaDirty && (null == t || I.enumEq(t, this.get_agenda()))) return this._cachedEntities;
            for (var e = [], i = this._entityAgendaPairs.iterator(); i.hasNext();) {
                var s = i.next();
                null != t && !I.enumEq(t, s.agenda) || e.push(s.entity)
            }
            return e.reverse(), e
        },
        getEntitiesByClass: function(t, e, i, s, n) {
            if (null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
            for (var _ = [], a = this._getEntities(e), r = 0; r < a.length;) {
                var o = a[r];
                ++r, Fi.__instanceof(o, t) && _.push(o), i && (_ = _.concat(o.getEntitiesByClass(t, e, !0)))
            }
            return s && null != this.get_parent() && (_ = _.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), _
        },
        setAgenda: function(t) {
            if (null == t && (t = bt.ALWAYS), I.enumEq(this.get_agenda(), t)) return !1;
            this._isAgendaDirty = !0;
            for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
                var i = e.next(),
                    s = I.enumEq(this.get_agenda(), i.agenda) && i.entity.get_view().get_parent() == this.get_view();
                s && i.entity.get_view().remove(), i.isAddedToView = i.isAddedToView || s
            }
            this.agenda = t;
            for (e = this._entityAgendaPairs.iterator(); e.hasNext();)(i = e.next()).isAddedToView && (I.enumEq(bt.ALWAYS, i.agenda) || I.enumEq(this.get_agenda(), i.agenda)) && this.get_view().addChild(i.entity.get_view());
            return !0
        },
        _setParent: function(t) {
            this.parent = t
        },
        set_id: function(t) {
            return this.id = t, this.id
        },
        get_agenda: function() {
            return this.agenda
        },
        get_parent: function() {
            return this.parent
        },
        get_view: function() {
            return this.view
        },
        __class__: y
    }), (e["awe6.interfaces.IPositionable"] = x).__name__ = "awe6.interfaces.IPositionable", x.__isInterface__ = !0, x.prototype = {
        __class__: x
    }, (e["awe6.core.BasicButton"] = E).__name__ = "awe6.core.BasicButton", E.__interfaces__ = [x], E.__super__ = y, E.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, bt.SUB_TYPE(b.UP), !0), this.addEntity(this._stateOver, bt.SUB_TYPE(b.OVER), !0), this.setAgenda(bt.SUB_TYPE(b.UP))
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t);
            var e = this._kernel.inputs.mouse,
                t = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            t && e.set_cursorType(Nt.BUTTON), t && !this.isOver && this.onRollOver(), !t && this.isOver && (e.set_cursorType(Nt.AUTO), this.onRollOut()), this.isOver = t, this.isOver && e.getIsButtonDown() && this.setAgenda(bt.SUB_TYPE(b.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(t, e, i, s, n, _) {
            return !(t < i) && (!(e < s) && (!(i + n < t) && !(s + _ < e)))
        },
        onClick: function() {
            this.setAgenda(bt.SUB_TYPE(b.UP)), null != this.onClickCallback && this.onClickCallback()
        },
        onRollOver: function() {
            this.setAgenda(bt.SUB_TYPE(b.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
        },
        onRollOut: function() {
            this.setAgenda(bt.SUB_TYPE(b.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
        },
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, null != this.get_view() && this.get_view().set_x(this.x), this.x
        },
        set_y: function(t) {
            return this.y = t, null != this.get_view() && this.get_view().set_y(this.y), this.y
        },
        set_width: function(t) {
            return this.width = t, this.width
        },
        set_height: function(t) {
            return this.height = t, this.height
        },
        __class__: E
    });
    var T = function(t, e) {
        y.call(this, t), this.view = e
    };
    (e["awe6.core._BasicButton._HelperState"] = T).__name__ = "awe6.core._BasicButton._HelperState", T.__super__ = y, T.prototype = t(y.prototype, {
        __class__: T
    });
    var b = A["awe6.core._BasicButton._HelperEState"] = {
        __ename__: "awe6.core._BasicButton._HelperEState",
        __constructs__: null,
        UP: {
            _hx_name: "UP",
            _hx_index: 0,
            __enum__: "awe6.core._BasicButton._HelperEState",
            toString: i
        },
        OVER: {
            _hx_name: "OVER",
            _hx_index: 1,
            __enum__: "awe6.core._BasicButton._HelperEState",
            toString: i
        }
    };
    b.__constructs__ = [b.UP, b.OVER];
    var k = function() {};

    function P(t) {
        this._defaultSecret = t
    }(e["awe6.interfaces.IEncrypter"] = k).__name__ = "awe6.interfaces.IEncrypter", k.__isInterface__ = !0, k.prototype = {
        __class__: k
    }, (e["awe6.core.Encrypter"] = P).__name__ = "awe6.core.Encrypter", P.__interfaces__ = [k], P.prototype = {
        decrypt: function(t, e) {
            null == e && (e = "");
            e = "" != e ? e : this._defaultSecret;
            return this._xor(t, e)
        },
        _xor: function(t, e) {
            for (var i = new Ei(new ArrayBuffer(t.length)), s = 0, n = 0, _ = i.length; n < _;) {
                var a = n++;
                i.b[a] = t.b[a] ^ C.cca(e, s), ++s >= e.length && (s = 0)
            }
            return i
        },
        __class__: P
    };
    var N = function(t, e) {
        this.entity = t, this.agenda = e, this.isAddedToView = !1
    };
    (e["awe6.core._Entity._HelperEntityAgendaPair"] = N).__name__ = "awe6.core._Entity._HelperEntityAgendaPair", N.prototype = {
        __class__: N
    };
    var M = function() {};

    function D(t, e, i, s, n, _, a, r, o, h, c, l, u, d) {
        this._kernel = t, this._keyUp = null != e ? e : It.UP, this._keyRight = null != i ? i : It.RIGHT, this._keyDown = null != s ? s : It.DOWN, this._keyLeft = null != n ? n : It.LEFT, this._keyPrimary = null != _ ? _ : It.SPACE, this._keySecondary = null != a ? a : It.Z, this._keyUpAlt = null != r ? r : It.W, this._keyRightAlt = null != o ? o : It.D, this._keyDownAlt = null != h ? h : It.S, this._keyLeftAlt = null != c ? c : It.A, this._keyPrimaryAlt = null != l ? l : It.Q, this._keySecondaryAlt = null != u ? u : It.E, this._joypadTouchType = null != d ? d : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._joypadTouchType != Ct.DISABLED, this._joypadStateCache = {
            age: 0,
            isFire: !1,
            isUp: !1,
            isRight: !1,
            isDown: !1,
            isLeft: !1,
            isPrevFire: !1,
            isPrevUp: !1,
            isPrevRight: !1,
            isPrevDown: !1,
            isPrevLeft: !1
        }
    }

    function L(t) {
        o.call(this, t)
    }

    function B(t) {
        o.call(this, t)
    }(e["awe6.interfaces.IInputJoypad"] = M).__name__ = "awe6.interfaces.IInputJoypad", M.__isInterface__ = !0, M.prototype = {
        __class__: M
    }, (e["awe6.core.InputJoypad"] = D).__name__ = "awe6.core.InputJoypad", D.__interfaces__ = [M], D.prototype = {
        _checkKeyboard: function(t, e) {
            switch (t._hx_index) {
                case 0:
                    return !!this._checkKeyboard(Rt.PRIMARY, e) || this._checkKeyboard(Rt.SECONDARY, e);
                case 1:
                    return !!e(this._keyUp) || e(this._keyUpAlt);
                case 2:
                    return !!e(this._keyRight) || e(this._keyRightAlt);
                case 3:
                    return !!e(this._keyDown) || e(this._keyDownAlt);
                case 4:
                    return !!e(this._keyLeft) || e(this._keyLeftAlt);
                case 5:
                    return !!e(this._keyPrimary) || e(this._keyPrimaryAlt);
                case 6:
                    return !!e(this._keySecondary) || e(this._keySecondaryAlt)
            }
        },
        getIsButtonDown: function(t) {
            return !!this._checkKeyboard(t, ns(h = this._kernel.inputs.keyboard, h.getIsKeyDown)) || !!this._isTouchEnabled && this._checkTouchIsDown(t)
        },
        getIsButtonPress: function(t) {
            return !!this._checkKeyboard(t, ns(h = this._kernel.inputs.keyboard, h.getIsKeyPress)) || !!this._isTouchEnabled && this._checkTouchIsPress(t)
        },
        getIsButtonRelease: function(t) {
            return !!this._checkKeyboard(t, ns(h = this._kernel.inputs.keyboard, h.getIsKeyRelease)) || !!this._isTouchEnabled && this._checkTouchIsRelease(t)
        },
        _getTouchButtonPosition: function(t) {
            switch (t._hx_index) {
                case 1:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .25 * this._kernel.factory.height
                    };
                case 2:
                    return {
                        x: .75 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    };
                case 3:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .75 * this._kernel.factory.height
                    };
                case 4:
                    return {
                        x: .25 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    };
                case 0:
                case 5:
                case 6:
                    return {
                        x: .5 * this._kernel.factory.width,
                        y: .5 * this._kernel.factory.height
                    }
            }
        },
        _getClosestTouchButton: function(t, e) {
            null == t && (t = this._mouse.x), null == e && (e = this._mouse.y);
            var i = 99999999,
                s = Rt.FIRE,
                n = Rt.FIRE,
                _ = this._getTouchButtonPosition(n),
                a = this._kernel.tools.distance(t, e, _.x, _.y, !0);
            a < i && (i = a, s = n);
            n = Rt.UP, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Rt.RIGHT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Rt.DOWN, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Rt.LEFT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Rt.PRIMARY, _ = this._getTouchButtonPosition(n);
            return (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n), s
        },
        _getTouchState: function() {
            var t = null != this._mouse || this._kernel.inputs.mouse instanceof dt && (this._mouse = Fi.__cast(this._kernel.inputs.mouse, dt), !0);
            if (!t || this._mouse.getAge() == this._joypadStateCache.age) return this._joypadStateCache;
            var e = {
                    age: this._mouse.getAge(),
                    isFire: !1,
                    isUp: !1,
                    isRight: !1,
                    isDown: !1,
                    isLeft: !1,
                    isPrevFire: this._joypadStateCache.isFire,
                    isPrevUp: this._joypadStateCache.isUp,
                    isPrevRight: this._joypadStateCache.isRight,
                    isPrevDown: this._joypadStateCache.isDown,
                    isPrevLeft: this._joypadStateCache.isLeft
                },
                i = this._joypadTouchType;
            switch (i._hx_index) {
                case 1:
                    var s = this._getClosestTouchButton();
                    e.isFire = s == Rt.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (e.isUp = s == Rt.UP, e.isRight = s == Rt.RIGHT, e.isDown = s == Rt.DOWN, e.isLeft = s == Rt.LEFT);
                    break;
                case 2:
                    var n = i.distance;
                    null == n && (n = 20), e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, e.isUp = this._mouse.getButtonDragHeight() < -n, e.isRight = this._mouse.getButtonDragWidth() > n, e.isDown = this._mouse.getButtonDragHeight() > n, e.isLeft = this._mouse.getButtonDragWidth() < -n;
                    break;
                case 3:
                    var _ = i.speed;
                    e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown() && (null == _ && (_ = 100), s = this._mouse.getDeltaX(), n = this._mouse.getDeltaY(), e.isUp = n < -_, e.isRight = _ < s, e.isDown = _ < n, e.isLeft = s < -_)
            }
            return this._joypadStateCache = e, this._joypadStateCache
        },
        _checkTouchIsDown: function(t) {
            var e = this._getTouchState();
            switch (t._hx_index) {
                case 1:
                    return e.isUp;
                case 2:
                    return e.isRight;
                case 3:
                    return e.isDown;
                case 4:
                    return e.isLeft;
                case 0:
                case 5:
                case 6:
                    return e.isFire
            }
        },
        _checkTouchIsPress: function(t) {
            var e = this._getTouchState();
            switch (t._hx_index) {
                case 1:
                    return !!e.isUp && !e.isPrevUp;
                case 2:
                    return !!e.isRight && !e.isPrevRight;
                case 3:
                    return !!e.isDown && !e.isPrevDown;
                case 4:
                    return !!e.isLeft && !e.isPrevLeft;
                case 0:
                case 5:
                case 6:
                    return !!e.isFire && !e.isPrevFire
            }
        },
        _checkTouchIsRelease: function(t) {
            var e = this._getTouchState();
            switch (t._hx_index) {
                case 1:
                    return !e.isUp && e.isPrevUp;
                case 2:
                    return !e.isRight && e.isPrevRight;
                case 3:
                    return !e.isDown && e.isPrevDown;
                case 4:
                    return !e.isLeft && e.isPrevLeft;
                case 0:
                case 5:
                case 6:
                    return !e.isFire && e.isPrevFire
            }
        },
        __class__: D
    }, l = function() {}, (e["awe6.interfaces.IResettable"] = l).__name__ = "awe6.interfaces.IResettable", l.__isInterface__ = !0, l.prototype = {
        __class__: l
    }, M = function() {}, (e["awe6.interfaces.IInputManager"] = M).__name__ = "awe6.interfaces.IInputManager", M.__isInterface__ = !0, M.__interfaces__ = [l], M.prototype = {
        __class__: M
    }, (e["awe6.core.InputManager"] = L).__name__ = "awe6.core.InputManager", L.__interfaces__ = [M], L.__super__ = o, L.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new ut(this._kernel), this.mouse = this._inputMouse = new dt(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            var e = this._inputKeyboard,
                i = t;
            null == i && (i = 0), e.isActive && !e.isDisposed && (e._age += i, e._updates++, e._updater(i)), null == (i = t) && (i = 0), (e = this._inputMouse).isActive && !e.isDisposed && (e._age += i, e._updates++, e._updater(i))
        },
        _disposer: function() {
            var t = this._inputKeyboard;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), (t = this._inputMouse).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), o.prototype._disposer.call(this)
        },
        createJoypad: function(t, e, i, s, n, _, a, r, o, h, c, l, u) {
            return new D(this._kernel, t, e, i, s, n, _, a, r, o, h, c, l, u)
        },
        reset: function() {
            var t = this._inputKeyboard;
            return t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), (t = this._inputMouse).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._init(), !0
        },
        __class__: L
    }), M = function() {}, (e["awe6.interfaces.IMessageManager"] = M).__name__ = "awe6.interfaces.IMessageManager", M.__isInterface__ = !0, M.__interfaces__ = [l], M.prototype = {
        __class__: M
    }, (e["awe6.core.MessageManager"] = B).__name__ = "awe6.core.MessageManager", B.__interfaces__ = [M], B.__super__ = o, B.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new bi, this._messageQueue = new Ui
        },
        removeSubscribers: function(t, e, i, s, n) {
            for (var _ = this._getSubscriptions(t, e, i, s, n, !0).iterator(); _.hasNext();) {
                var a = _.next();
                this._subscriptions.remove(a), this._isVerbose && di.trace("Removing " + R.string(a.sender) + ":" + R.string(a.message), {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 80,
                    className: "awe6.core.MessageManager",
                    methodName: "removeSubscribers"
                })
            }
        },
        sendMessage: function(t, e, i, s, n) {
            null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), this._sendMessage(t, e, e, i, s, n)
        },
        reset: function() {
            return this.removeSubscribers(), this._messageQueue = new Ui, !0
        },
        _updater: function(t) {
            if (null == t && (t = 0), o.prototype._updater.call(this, t), this._isOkToSendMessage())
                for (var e = this._messageQueue.h; null != e;) {
                    var i = e.item,
                        e = e.next,
                        i = i;
                    this._sendMessage(i.message, i.sender, i.target, i.isBubbleDown, i.isBubbleUp, i.isBubbleEverywhere), this._messageQueue.remove(i)
                }
        },
        _isOkToSendMessage: function() {
            return null != this._kernel.scenes.get_scene()
        },
        _sendMessage: function(t, e, i, s, n, _) {
            if (null == _ && (_ = !1), null == n && (n = !1), null == s && (s = !1), this._isVerbose && di.trace("Sending message: " + R.string(t) + " from " + e.id + "(" + R.string(Fi.getClass(e)) + ") via " + i.id + " (" + R.string(Fi.getClass(i)) + ")", {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 119,
                    className: "awe6.core.MessageManager",
                    methodName: "_sendMessage"
                }), this._isOkToSendMessage()) {
                if (_) {
                    var a = this._kernel.scenes.get_scene().getEntities()[0];
                    if (null != a && null != a.get_parent()) return void this._sendMessage(t, e, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
                }
                for (var r = this._getSubscriptions(i, t, null, e).iterator(); r.hasNext();) {
                    var o = r.next();
                    if (!this._send(o, t, e)) return
                }
                if (s)
                    for (var h = i.getEntities(), c = 0; c < h.length;) {
                        var l = h[c];
                        ++c, this._sendMessage(t, e, l, !0)
                    }
                n && null != i.get_parent() && Fi.__implements(i.get_parent(), m) && this._sendMessage(t, e, i.get_parent(), !1, !0)
            } else this._messageQueue.push(new O(t, e, i, s, n, _))
        },
        _send: function(t, e, i) {
            i = t.handler.apply(t.subscriber, [e, i]);
            return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), i
        },
        _getSubscriptions: function(t, e, i, s, n, _) {
            null == _ && (_ = !1);
            for (var a = new bi, r = this._subscriptions.iterator(); r.hasNext();) {
                var o = r.next();
                if (null == t || t == o.subscriber || t == o.sender) {
                    if (null != e && !Fi.__instanceof(e, o.messageClass)) {
                        var h = I.typeof(e);
                        if (7 == h._hx_index) {
                            h.e;
                            if (I.getEnum(e) != I.getEnum(o.message) || (h = o.message, A[e.__enum__].__constructs__[e._hx_index]._hx_name != A[h.__enum__].__constructs__[h._hx_index]._hx_name) || I.enumParameters(e).toString() != I.enumParameters(o.message).toString()) continue
                        } else if (e != o.message) continue
                    }
                    if (null == i || U.compareMethods(o.handler, i)) {
                        if (null != s) {
                            if (_) {
                                if (null != o.senderClassType) continue;
                                if (null == o.sender) continue
                            }
                            if (null != o.senderClassType && !Fi.__instanceof(s, o.senderClassType)) continue;
                            if (null != o.sender && o.sender != s) continue
                        }
                        a.head = new Ti(o, a.head)
                    }
                }
            }
            return a
        },
        __class__: B
    }), M = function(t, e, i, s, n, _) {
        null == _ && (_ = !1), this.subscriber = t, this.message = e, this.handler = i, this.sender = s, this.senderClassType = n, this.isRemovedAfterFirstSend = _, this.messageClass = Fi.getClass(e)
    }, (e["awe6.core._MessageManager._HelperSubscription"] = M).__name__ = "awe6.core._MessageManager._HelperSubscription", M.prototype = {
        __class__: M
    };
    var O = function(t, e, i, s, n, _) {
        null == _ && (_ = !1), null == n && (n = !1), null == s && (s = !1), this.message = t, this.sender = e, this.target = i, this.isBubbleDown = s, this.isBubbleUp = n, this.isBubbleEverywhere = _
    };

    function F() {}

    function G(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), this.type = e, this.isPauseable = i, this.isMuteable = s, this.isSessionSavedOnNext = n, o.call(this, t)
    }

    function V(t) {
        o.call(this, t)
    }

    function H(t, e, i, s, n, _, a, r, o, h) {
        null == o && (o = 0), null == n && (n = !1), null == s && (s = !1), this.font = null != t ? t : "_sans", this.size = null != e ? e : 12, this.color = null != i ? i : 0, this.isBold = s, this.isItalic = n, this.align = null != _ ? _ : Lt.LEFT, this.spacingHorizontal = null != a ? a : 0, this.spacingVertical = null != r ? r : 0, this.thickness = o, this.filters = h
    }

    function J(t) {
        this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    }

    function K() {}

    function j(t) {
        o.call(this, t)
    }

    function z(t) {
        o.call(this, t)
    }(e["awe6.core._MessageManager._HelperMessage"] = O).__name__ = "awe6.core._MessageManager._HelperMessage", O.prototype = {
        __class__: O
    }, (e["awe6.interfaces.IScene"] = F).__name__ = "awe6.interfaces.IScene", F.__isInterface__ = !0, F.__interfaces__ = [f, g, r], F.prototype = {
        __class__: F
    }, (e["awe6.core.Scene"] = G).__name__ = "awe6.core.Scene", G.__interfaces__ = [F], G.__super__ = o, G.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.isDisposable = !0, this._entity = new y(this._kernel), this.view = this._entity.get_view()
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), this._entity.update(t)
        },
        _disposer: function() {
            this._entity.dispose(), this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(t, e, i, s) {
            return null == s && (s = 0), null == i && (i = !1), this._entity.addEntity(t, e, i, s)
        },
        removeEntity: function(t, e, i) {
            null == i && (i = !1), this._entity.removeEntity(t, e, i)
        },
        getEntities: function(t) {
            return this._entity.getEntities(t)
        },
        getEntitiesByClass: function(t, e, i, s, n) {
            return null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), this._entity.getEntitiesByClass(t, e, i, s, !1)
        },
        get_view: function() {
            return this.view
        },
        get_agenda: function() {
            return this._entity.get_agenda()
        },
        setAgenda: function(t) {
            return this._entity.setAgenda(t)
        },
        __class__: G
    }), g = function() {}, (e["awe6.interfaces.ISceneManager"] = g).__name__ = "awe6.interfaces.ISceneManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.SceneManager"] = V).__name__ = "awe6.core.SceneManager", V.__interfaces__ = [g], V.__super__ = o, V.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.view = new wt(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), null != this.get_scene() && this.get_scene().update(t), null != this._sceneTransition && this._sceneTransition.update(t)
        },
        _disposer: function() {
            null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), o.prototype._disposer.call(this)
        },
        setScene: function(t) {
            var e = null;
            null != this.get_scene() && (e = this.get_scene().type, e = this._kernel.factory.createSceneTransition(t, e), null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = e, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null), this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(Mt.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(Mt.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(Mt.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(Mt.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(Mt.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
        },
        back: function() {
            var t = this._kernel.factory.getBackSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        next: function() {
            this.get_scene().isSessionSavedOnNext && null != this._kernel.get_session() && this._kernel.get_session().save();
            var t = this._kernel.factory.getNextSceneType(this.get_scene().type);
            null != t && this.setScene(t)
        },
        restart: function() {
            null == this.get_scene() ? this.setScene(this._kernel.factory.startingSceneType) : this.setScene(this.get_scene().type)
        },
        get_scene: function() {
            return this.scene
        },
        __class__: V
    }), g = function() {}, (e["awe6.interfaces.ITextStyle"] = g).__name__ = "awe6.interfaces.ITextStyle", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.TextStyle"] = H).__name__ = "awe6.core.TextStyle", H.__interfaces__ = [g], H.prototype = {
        toString: function() {
            return R.string(this.font + "," + this.size + "," + this.color + "," + R.string(this.isBold) + "," + R.string(this.isItalic) + "," + R.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + R.string(this.filters))
        },
        clone: function() {
            return new H(this.font, this.size, this.color, this.isBold, this.isItalic, this.align, this.spacingHorizontal, this.spacingVertical, this.thickness, this.filters)
        },
        __class__: H
    }, g = function() {}, (e["awe6.interfaces.ITools"] = g).__name__ = "awe6.interfaces.ITools", g.__isInterface__ = !0, g.__interfaces__ = [k], g.prototype = {
        __class__: g
    }, (e["awe6.core.Tools"] = J).__name__ = "awe6.core.Tools", J.__interfaces__ = [g], J.prototype = {
        createGuid: function(t, e) {
            return null == e && (e = ""), null == t && (t = !1), t ? e + C.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(), 0, 10) : e + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
        },
        _randomCharacter: function() {
            return C.substr(c.hex(65536 * (1 + Math.random()) | 0, 1), 1, null)
        },
        sortByPriority: function(t, e) {
            t = t.get_priority(), e = e.get_priority();
            return t < e ? -1 : e < t ? 1 : 0
        },
        _isCamelCase: function(t) {
            return t.toUpperCase() != t && (!(-1 < t.indexOf(" ")) && !(-1 < t.indexOf("_")))
        },
        _isConstCase: function(t) {
            return t.toUpperCase() == t && !(-1 < t.indexOf(" "))
        },
        fromCamelCase: function(t) {
            if (null == t || "" == t) return "";
            for (var e = "", i = t.split(""), s = "", n = 0; n < i.length;) {
                var _ = i[n];
                ++n, _.toLowerCase() != _ && (e += s), e += _, s = " "
            }
            return e
        },
        toConstCase: function(t) {
            if (null == t || "" == t) return "";
            if (this._isConstCase(t)) return t;
            this._isCamelCase(t) && (t = this.fromCamelCase(t));
            return t = c.replace(t, "     ", " "), t = c.replace(t, "    ", " "), t = c.replace(t, "   ", " "), t = c.replace(t, "  ", " "), (t = c.replace(t, " ", "_")).toUpperCase()
        },
        fromConstCase: function(t) {
            if (null == t || "" == t) return "";
            for (var e = "", i = t.split("_"), s = "", n = 0; n < i.length;) {
                var _ = i[n];
                ++n, e += s + (_.charAt(0).toUpperCase() + C.substr(_, 1, null).toLowerCase()), s = " "
            }
            return e
        },
        toWords: function(t) {
            return this._isCamelCase(t) ? this.fromCamelCase(t) : this._isConstCase(t) ? this.fromConstCase(t) : t
        },
        limit: function(t, e, i) {
            return i < t ? i : t < e ? e : t
        },
        distance: function(t, e, i, s, n) {
            null == n && (n = !1);
            t = i - t, e = s - e, e = t * t + e * e;
            return n ? e : Math.sqrt(e)
        },
        shuffle: function(t) {
            for (var e = t.slice(), i = e.length; 1 < i;) {
                var s = R.random(i),
                    n = e[--i];
                e[i] = e[s], e[s] = n
            }
            return e
        },
        convertUpdatesToFormattedTime: function(t, e) {
            t = Math.round(1e3 * t / this._kernel.factory.targetFramerate);
            return this.convertAgeToFormattedTime(t, e)
        },
        convertAgeToFormattedTime: function(t, e) {
            if (null == e && (e = "'"), t < 0) return "99" + e + "99" + e + "99";
            for (var i = t / 1e3, s = Math.floor(i), n = R.string(Math.floor(100 * (i - s))), _ = 0; 59 < s;) ++_, s -= 60;
            for (99 < _ && (_ = 99); n.length < 2;) n = "0" + n;
            t = null == s ? "null" : "" + s;
            s < 10 && (t = "0" + t);
            i = null == _ ? "null" : "" + _;
            return _ < 10 && (i = "0" + i), 0 == s && (t = "00"), 0 == _ && (i = "00"), R.string(i + e + t + e + n)
        },
        serialize: function(t) {
            return gi.run(t)
        },
        unserialize: function(t) {
            return yi.run(t)
        },
        decrypt: function(t, e) {
            return null == e && (e = ""), this._encrypter.decrypt(t, e)
        },
        __class__: J
    }, k = function() {}, (e["awe6.interfaces.IAssetManager"] = k).__name__ = "awe6.interfaces.IAssetManager", k.__isInterface__ = !0, k.prototype = {
        __class__: k
    }, (e["awe6.interfaces.IAssetManagerProcess"] = K).__name__ = "awe6.interfaces.IAssetManagerProcess", K.__isInterface__ = !0, K.__interfaces__ = [r, k], (e["awe6.core.drivers.AAssetManager"] = j).__name__ = "awe6.core.drivers.AAssetManager", j.__interfaces__ = [K], j.__super__ = o, j.prototype = t(o.prototype, {
        _init: function() {
            this._packageId = this._kernel.getConfig("settings.assets.packages.default"), null == this._packageId && (this._packageId = "assets"), o.prototype._init.call(this)
        },
        getAsset: function(t, e, i) {
            return null == e && (e = this._packageId), this._driverGetAsset(t, e, i)
        },
        _driverGetAsset: function(t, e, i) {
            return null
        },
        __class__: j
    }), g = function() {}, (e["awe6.interfaces.IAudioManager"] = g).__name__ = "awe6.interfaces.IAudioManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.drivers.AAudioManager"] = z).__name__ = "awe6.core.drivers.AAudioManager", z.__interfaces__ = [g], z.__super__ = o, z.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = 0, i = this._sounds; e < i.length;) {
                var s = i[e];
                ++e, s.isDisposed && C.remove(this._sounds, s)
            }
        },
        _disposer: function() {
            for (var t = 0, e = this._sounds; t < e.length;) {
                var i = e[t];
                ++t, i.dispose()
            }
            this.set_isMute(!1), o.prototype._disposer.call(this)
        },
        start: function(t, e, i, s, n, _, a, r) {
            if ((null == a && (a = !1), null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), null == e && (e = At.DEFAULT), a) && 0 != this._getSounds(t, e).length) return;
            this._sounds.push(this._driverSoundFactory(t, e, i, s, n, _, r))
        },
        _driverSoundFactory: function(t, e, i, s, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new W(this._kernel, t, this._packageId, e, i, s, n, _, a)
        },
        stop: function(t, e) {
            for (var i = this._getSounds(t, e), s = 0; s < i.length;) {
                var n = i[s];
                ++s, n.stop()
            }
        },
        transform: function(t, e, i, s, n) {
            null == n && (n = !1), null == s && (s = 0), null == i && (i = 1);
            for (var _ = this._getSounds(t, e), a = 0; a < _.length;) {
                var r = _[a];
                ++a, r.transform(i, s, n)
            }
        },
        set_isMute: function(t) {
            return this.isMute = t, this._driverSetIsMute(t), this.isMute
        },
        _driverSetIsMute: function(t) {},
        _getSounds: function(t, e) {
            var i = [];
            if (null == t && null == e) i = this._sounds.slice();
            else if (null == e)
                for (var s = 0, n = this._sounds; s < n.length;) {
                    var _ = n[s];
                    ++s, _.id == t && i.push(_)
                } else if (null == t)
                    for (s = 0, n = this._sounds; s < n.length;) {
                        _ = n[s];
                        ++s, I.enumEq(_.audioChannelType, e) && i.push(_)
                    } else
                        for (s = 0, n = this._sounds; s < n.length;) {
                            _ = n[s];
                            ++s, _.id == t && I.enumEq(_.audioChannelType, e) && i.push(_)
                        }
            return i
        },
        __class__: z
    });
    var W = function(t, e, i, s, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = i, this.audioChannelType = null != s ? s : At.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = _, this._volume = a, this._pan = r, this._onCompleteCallback = o, this._init()
    };

    function X(t, e, i) {
        null == e && (e = !1), this._context = t, this.isDebug = e, this._config = i, this.config = new Ii, null == (i = !0) && (i = !1), i && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ut.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = Ct.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Dt.GAME, this.keyPause = It.P, this.keyMute = It.M, this.keyNext = It.SPACE, this.keyBack = It.ESCAPE, this.keySpecial = It.CONTROL), this._configurer(i), this._driverInit()
    }

    function Q(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AHelperSound"] = W).__name__ = "awe6.core.drivers._AHelperSound", W.__interfaces__ = [_], W.prototype = {
        _init: function() {
            this._driverInit()
        },
        _driverInit: function() {},
        transform: function(t, e, i) {
            null == i && (i = !1), null == e && (e = 0), null == t && (t = 1), this.isDisposed || (i ? (this._volume = t, this._pan = e) : (this._volume = this._kernel.tools.limit(t, 0, 1), this._pan = this._kernel.tools.limit(e, -1, 1)), this._driverTransform(i))
        },
        _driverTransform: function(t) {
            null == t && (t = !1)
        },
        stop: function() {
            this._driverStop(), this.dispose()
        },
        _driverStop: function() {},
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this._driverStop())
        },
        __class__: W
    }, k = function() {}, (e["awe6.interfaces.IFactory"] = k).__name__ = "awe6.interfaces.IFactory", k.__isInterface__ = !0, k.prototype = {
        __class__: k
    }, (e["awe6.core.drivers.AFactory"] = X).__name__ = "awe6.core.drivers.AFactory", X.__interfaces__ = [_, k], X.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == C.substr(this._config, 0, 5) && this._traverseElements(S.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(t, e) {
            0 != e.length && (e += ".");
            for (var i = t; i.hasNext();) {
                var s = i.next();
                if (s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                var n, _ = e + s.nodeName;
                if (s.elements().hasNext() && this._traverseElements(s.elements(), _), s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                if (null != s.children[0]) {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    n = "<![CDATA[" == C.substr(Oi.print(s.children[0]), 0, 9)
                } else n = !1;
                if (n) {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    var a = s.children[0];
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    var r = Oi.print(s.children[0]).split("<![CDATA[").join("").split("]]>").join("");
                    if (a.nodeType == S.Document || a.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : v.toString(a.nodeType)));
                    a.nodeValue = r
                }
                if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                if (null == s.children[0]) this.config.h[_] = "";
                else {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    a = s.children[0].nodeType;
                    if (a != S.Element && a != S.Document) {
                        var o, r = this.config;
                        if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                        if (null == s.children[0]) o = "";
                        else {
                            if (s.nodeType != S.Document && s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                            a = s.children[0];
                            if (a.nodeType == S.Document || a.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : v.toString(a.nodeType)));
                            o = a.nodeValue
                        }
                        r.h[_] = o
                    } else this.config.h[_] = ""
                }
                for (var h = s.attributes(); h.hasNext();) {
                    var c = h.next(),
                        l = _ + "." + c,
                        u = this.config,
                        c = s.get(c);
                    u.h[l] = c
                }
            }
        },
        _configurer: function(t) {
            null == t && (t = !1)
        },
        _launchKernel: function() {
            var t;
            null == this._concreteKernel && (null == (t = !1) && (t = !1), t && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ut.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = Ct.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Dt.GAME, this.keyPause = It.P, this.keyMute = It.M, this.keyNext = It.SPACE, this.keyBack = It.ESCAPE, this.keySpecial = It.CONTROL), this._configurer(t), this._concreteKernel = new pt(this, this._context))
        },
        _getAssetUrls: function() {
            for (var t = [], e = 0; e < 1e3;) {
                var i = "settings.assets.url" + e++;
                Object.prototype.hasOwnProperty.call(this.config.h, i) && t.push(R.string(this.config.h[i]))
            }
            return t
        },
        onInitComplete: function(t) {
            null == this._kernel && null != t && (this._kernel = t, this._tools = this._kernel.tools, this.id = C.substr(this._tools.toConstCase(c.trim(this.id)), 0, 16), this.version = C.substr(c.trim(this.version), 0, 16), this.author = C.substr(c.trim(this.author), 0, 16))
        },
        createAssetManager: function() {
            return Fi.__implements(this._kernel.assets, K) ? Fi.__cast(this._kernel.assets, K) : new ot(this._kernel)
        },
        createEncrypter: function() {
            return new P(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new gt(this._kernel)
        },
        createPreloader: function() {
            return new ft(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            return null == t && (t = this.startingSceneType), new G(this._kernel, t)
        },
        createSceneTransition: function(t, e) {
            return new yt(this._kernel)
        },
        createSession: function(t) {
            return new at(this._kernel, t)
        },
        createTextStyle: function(t) {
            return new H
        },
        getBackSceneType: function(t) {
            return null
        },
        getNextSceneType: function(t) {
            return null
        },
        dispose: function() {
            var t;
            this.isDisposed || null == this._concreteKernel || (this.isDisposed = !0, this._driverDisposer(), (t = this._concreteKernel).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._concreteKernel = null, this._kernel = null, this.config = null)
        },
        _driverDisposer: function() {},
        __class__: X
    }, g = function() {}, (e["awe6.interfaces.IInputKeyboard"] = g).__name__ = "awe6.interfaces.IInputKeyboard", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.drivers.AInputKeyboard"] = Q).__name__ = "awe6.core.drivers.AInputKeyboard", Q.__interfaces__ = [g], Q.__super__ = o, Q.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = Object.create(null), i = [], s = 0, n = this._buffer; s < n.length;) {
                var _ = n[s];
                ++s;
                var a = null == _.keyCode ? "null" : "" + _.keyCode;
                Object.prototype.hasOwnProperty.call(e, a) ? i.push(_) : _.isDown ? this._keys[_.keyCode].isDown || (this._onDown(_.keyCode), e[a] = !0) : this._keys[_.keyCode].isDown && (this._onUp(_.keyCode), e[a] = !0)
            }
            this._buffer = i.slice();
            for (s = 0, n = this._keys; s < n.length;) {
                _ = n[s];
                ++s, _.isDown ? _.updatesDown++ : _.updatesUp++, _.isDown ? _.timeDown += t : _.timeUp += t
            }
        },
        _disposer: function() {
            this._keys = null, o.prototype._disposer.call(this)
        },
        _addEvent: function(t, e) {
            this._buffer.push(new Z(t, e))
        },
        _onDown: function(t) {
            t = this._keys[t];
            t.isUsed = !0, t.isDown = !0, t.timeUpPrevious = t.timeUp, t.updatesUpPrevious = t.updatesUp, t.updatesUp = 0, t.timeUp = 0
        },
        _onUp: function(t) {
            t = this._keys[t];
            t.isDown = !1, t.timeDownPrevious = t.timeDown, t.updatesDownPrevious = t.updatesDown, t.updatesDown = 0, t.timeDown = 0
        },
        _reset: function(t) {
            this._buffer = [], this._keys = [];
            for (var e = 0; e < 256;) {
                var i = e++;
                this._keys[i] = new Y(this._kernel)
            }
        },
        getIsKeyDown: function(t) {
            if (null == t) return !1;
            t = this.getKeyCode(t);
            return this._keys[t].isDown
        },
        getIsKeyPress: function(t) {
            if (null == t) return !1;
            t = this.getKeyCode(t);
            return 1 == this._keys[t].updatesDown
        },
        getIsKeyRelease: function(t) {
            if (null == t) return !1;
            t = this.getKeyCode(t);
            return !!this._keys[t].isUsed && 1 == this._keys[t].updatesUp
        },
        getKeyCode: function(t) {
            switch (t._hx_index) {
                case 0:
                    return 144;
                case 1:
                    return 12;
                case 2:
                    return 47;
                case 3:
                    return 18;
                case 4:
                    return 8;
                case 5:
                    return 20;
                case 6:
                    return 17;
                case 7:
                    return 46;
                case 8:
                    return 40;
                case 9:
                    return 35;
                case 10:
                    return 13;
                case 11:
                    return 27;
                case 12:
                    return 112;
                case 13:
                    return 121;
                case 14:
                    return 122;
                case 15:
                    return 123;
                case 16:
                    return 124;
                case 17:
                    return 125;
                case 18:
                    return 126;
                case 19:
                    return 113;
                case 20:
                    return 114;
                case 21:
                    return 115;
                case 22:
                    return 116;
                case 23:
                    return 117;
                case 24:
                    return 118;
                case 25:
                    return 119;
                case 26:
                    return 120;
                case 27:
                    return 36;
                case 28:
                    return 45;
                case 29:
                    return 37;
                case 30:
                    return 96;
                case 31:
                    return 97;
                case 32:
                    return 98;
                case 33:
                    return 99;
                case 34:
                    return 100;
                case 35:
                    return 101;
                case 36:
                    return 102;
                case 37:
                    return 103;
                case 38:
                    return 104;
                case 39:
                    return 105;
                case 40:
                    return 107;
                case 41:
                    return 110;
                case 42:
                    return 111;
                case 43:
                    return 108;
                case 44:
                    return 106;
                case 45:
                    return 109;
                case 46:
                    return 34;
                case 47:
                    return 33;
                case 48:
                    return 39;
                case 49:
                    return 16;
                case 50:
                    return 32;
                case 51:
                    return 9;
                case 52:
                    return 38;
                case 53:
                    return 65;
                case 54:
                    return 66;
                case 55:
                    return 67;
                case 56:
                    return 68;
                case 57:
                    return 69;
                case 58:
                    return 70;
                case 59:
                    return 71;
                case 60:
                    return 72;
                case 61:
                    return 73;
                case 62:
                    return 74;
                case 63:
                    return 75;
                case 64:
                    return 76;
                case 65:
                    return 77;
                case 66:
                    return 78;
                case 67:
                    return 79;
                case 68:
                    return 80;
                case 69:
                    return 81;
                case 70:
                    return 82;
                case 71:
                    return 83;
                case 72:
                    return 84;
                case 73:
                    return 85;
                case 74:
                    return 86;
                case 75:
                    return 87;
                case 76:
                    return 88;
                case 77:
                    return 89;
                case 78:
                    return 90;
                case 79:
                    return 48;
                case 80:
                    return 49;
                case 81:
                    return 50;
                case 82:
                    return 51;
                case 83:
                    return 52;
                case 84:
                    return 53;
                case 85:
                    return 54;
                case 86:
                    return 55;
                case 87:
                    return 56;
                case 88:
                    return 57;
                case 89:
                    return 186;
                case 90:
                    return 187;
                case 91:
                    return 189;
                case 92:
                    return 191;
                case 93:
                    return 222;
                case 94:
                    return 219;
                case 95:
                    return 221;
                case 96:
                    return 220;
                case 97:
                    return 192;
                case 98:
                    return 223;
                case 99:
                    return 0 | t.value
            }
        },
        getKey: function(t) {
            for (var e = It.__constructs__, i = new Array(e.length), s = 0, n = e.length; s < n;) i[a = s++] = e[a]._hx_name;
            var _ = i;
            _.pop();
            for (s = 0; s < _.length;) {
                var a = _[s];
                ++s;
                var r = I.createEnum(It, a);
                if (this.getKeyCode(r) == t) return r
            }
            return It.SUB_TYPE(t)
        },
        __class__: Q
    });
    var Y = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    (e["awe6.core.drivers._AInputKeyboard._HelperKey"] = Y).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKey", Y.prototype = {
        __class__: Y
    };
    var Z = function(t, e) {
        this.keyCode = t, this.isDown = e
    };

    function q(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = Z).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKeyEvent", Z.prototype = {
        __class__: Z
    }, k = function() {}, (e["awe6.interfaces.IInputMouse"] = k).__name__ = "awe6.interfaces.IInputMouse", k.__isInterface__ = !0, k.prototype = {
        __class__: k
    }, (e["awe6.core.drivers.AInputMouse"] = q).__name__ = "awe6.core.drivers.AInputMouse", q.__interfaces__ = [k], q.__super__ = o, q.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(Nt.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), this._deltaTimePrev = t, o.prototype._updater.call(this, t), this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._handleButton(Pt.LEFT, 0 < this._buffer.length ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(Pt.MIDDLE, this._isMiddleDown(), t), this._handleButton(Pt.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
        },
        _isMiddleDown: function() {
            return !1
        },
        _isRightDown: function() {
            return !1
        },
        _isWithinBounds: function() {
            return !0
        },
        _getPosition: function() {
            this.x = 0, this.y = 0
        },
        _handleButton: function(t, e, i) {
            null == i && (i = 0);
            t = this._getButton(t);
            e ? (t.isDown || (t.timeUpPrevious = t.timeUp, t.updatesUpPrevious = t.updatesUp, t.timeUp = t.updatesUp = 0, t.clickX = this.x, t.clickY = this.y), t.timeDown += i, t.updatesDown++, t.isDown = !0) : (t.isDown && (t.timeDownPrevious = t.timeDown, t.updatesDownPrevious = t.updatesDown, t.timeDown = t.updatesDown = 0), t.timeUp += i, t.updatesUp++, t.isDown = !1)
        },
        _disposer: function() {
            o.prototype._disposer.call(this)
        },
        _reset: function(t) {
            this._buffer = [], this._buttonLeft = new $(this._kernel), this._buttonMiddle = new $(this._kernel), this._buttonRight = new $(this._kernel)
        },
        _getButton: function(t) {
            switch (null == t && (t = Pt.LEFT), t._hx_index) {
                case 0:
                    return this._buttonLeft;
                case 1:
                    return this._buttonMiddle;
                case 2:
                    return this._buttonRight
            }
        },
        getDeltaX: function(t) {
            null == t && (t = !0);
            var e = this._deltaX;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getDeltaY: function(t) {
            null == t && (t = !0);
            var e = this._deltaY;
            return t && (e *= 1e3 / this._deltaTimePrev), Math.round(e)
        },
        getIsButtonDown: function(t) {
            return this._getButton(t).isDown
        },
        getIsButtonPress: function(t) {
            return 1 == this._getButton(t).updatesDown
        },
        getIsButtonRelease: function(t) {
            return 1 == this._getButton(t).updatesUp
        },
        getButtonDownDuration: function(t, e, i) {
            null == i && (i = !1), null == e && (e = !0);
            t = this._getButton(t);
            return i ? e ? t.timeDownPrevious : t.updatesDownPrevious : e ? t.timeDown : t.updatesDown
        },
        getButtonDragWidth: function(t) {
            t = this._getButton(t);
            return t.isDown ? this.x - t.clickX : 0
        },
        getButtonDragHeight: function(t) {
            t = this._getButton(t);
            return t.isDown ? this.y - t.clickY : 0
        },
        set_isVisible: function(t) {
            return this.isVisible = t, this.isVisible
        },
        set_cursorType: function(t) {
            return this.cursorType = t, this.cursorType
        },
        __class__: q
    });
    var $ = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };

    function tt(t, e) {
        this.factory = t, this._context = e, this.tools = this._tools = new J(this), o.call(this, this)
    }(e["awe6.core.drivers._AInputMouse._HelperButton"] = $).__name__ = "awe6.core.drivers._AInputMouse._HelperButton", $.prototype = {
        __class__: $
    }, g = function() {}, (e["awe6.interfaces.ILogger"] = g).__name__ = "awe6.interfaces.ILogger", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, k = function() {}, (e["awe6.interfaces.IKernel"] = k).__name__ = "awe6.interfaces.IKernel", k.__isInterface__ = !0, k.__interfaces__ = [g, n], k.prototype = {
        __class__: k
    }, (e["awe6.core.drivers.AKernel"] = tt).__name__ = "awe6.core.drivers.AKernel", tt.__interfaces__ = [k], tt.__super__ = o, tt.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._view = new wt(this, this._context, 0, this), this._processes = new Ui, this._helperFramerate = new et(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new ot(this._kernel), this.audio = this._audioManager = new ht(this._kernel), this.inputs = this._inputManager = new L(this._kernel), this.scenes = this._sceneManager = new V(this._kernel), this.messenger = this._messageManager = new B(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function(t) {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var e = this.factory.createAssetManager();
            e != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = e, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new mt(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
        },
        _updater: function(t) {
            null == t && (t = 0), this._helperFramerate.update();
            var e = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval;
            o.prototype._updater.call(this, e);
            for (var i = this._processes.h; null != i;) {
                var s = i.item,
                    i = i.next;
                s.update(e)
            }
            var n = this._view;
            null == (t = e) && (t = 0), n.isActive && !n.isDisposed && (n._age += t, n._updates++, n._updater(t))
        },
        _disposer: function() {
            for (var t = this._processes.h; null != t;) {
                var e = t.item,
                    t = t.next;
                this._removeProcess(e)
            }
            Fi.__implements(this.factory, _) && Fi.__cast(this.factory, _).dispose(), this.factory = null;
            var i = this._view;
            i.isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer()), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), o.prototype._disposer.call(this)
        },
        getConfig: function(t) {
            return Object.prototype.hasOwnProperty.call(this.factory.config.h, t) ? this.factory.config.h[t] : null
        },
        log: function(t) {
            null != this._logger ? this._logger.log(t) : this.isDebug && di.trace("LOG: " + R.string(t), {
                fileName: "awe6/core/drivers/AKernel.hx",
                lineNumber: 248,
                className: "awe6.core.drivers.AKernel",
                methodName: "log"
            })
        },
        getFramerate: function(t) {
            return null == t && (t = !0), t ? this._helperFramerate.framerate : this.factory.targetFramerate
        },
        _addProcess: function(t, e) {
            null == e && (e = !0), null != t && (e ? this._processes.add(t) : this._processes.push(t))
        },
        _removeProcess: function(t) {
            return null != t && (t.dispose(), this._processes.remove(t))
        },
        set_isEyeCandy: function(t) {
            return this.factory.isEyeCandyOptionEnabled ? (this.isEyeCandy = t, this._driverSetIsEyeCandy(t)) : this.isEyeCandy = !0, this.isEyeCandy
        },
        _driverSetIsEyeCandy: function(t) {},
        set_isFullScreen: function(t) {
            return !this.factory.isFullScreenOptionEnabled || I.enumEq(this.factory.fullScreenType, Ut.DISABLED) ? this.isFullScreen = !1 : (this.isFullScreen = t, this._driverSetIsFullScreen(t)), this.isFullScreen
        },
        _driverSetIsFullScreen: function(t) {},
        _pauser: function() {
            o.prototype._pauser.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().pause()
        },
        _resumer: function() {
            o.prototype._resumer.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().resume()
        },
        get_session: function() {
            return this.session
        },
        set_session: function(t) {
            return this.session = t, this.get_session()
        },
        __class__: tt
    });
    var et = function(t) {
        this.framerate = t, this._timeAtLastUpdate = C.now() / 1e3 * 1e3 | 0
    };

    function it(t, e, i, s, n, _, a, r, o, h, c, l, u, d, p, g, f) {
        null == f && (f = .35), null == g && (g = 0), null == p && (p = 8), null == i && (i = 30), null == e && (e = 30), null == s && (s = new wt(t)), null == n && (n = new wt(t)), null == _ && (_ = new wt(t)), null == a && (a = new wt(t)), null == r && (r = new wt(t)), null == o && (o = new wt(t)), null == h && (h = new wt(t)), null == c && (c = new wt(t)), null == l && (l = new wt(t)), null == u && (u = new wt(t)), null == d && (d = new wt(t)), this._borderView = s, this._buttonBack = new E(t, n, _, e, i), this._buttonMute = new E(t, a, r, e, i), this._buttonUnmute = new E(t, o, h, e, i), this._buttonPause = new E(t, c, l, e, i), this._buttonUnpause = new E(t, u, d, e, i), this._pauseBlur = p, this._pauseColor = g, this._pauseAlpha = f, this._context = new createjs.Container, y.call(this, t, null, this._context)
    }

    function st(t, e, i) {
        null == i && (i = !1), this._assets = e, this._isDecached = i, o.call(this, t)
    }

    function nt(t) {
        this._context = new createjs.Container, y.call(this, t, null, this._context)
    }

    function _t(t, e) {
        null == e && (e = 500), this._duration = e, this._context = new createjs.Container, y.call(this, t, null, this._context)
    }(e["awe6.core.drivers._AKernel._HelperFramerate"] = et).__name__ = "awe6.core.drivers._AKernel._HelperFramerate", et.prototype = {
        update: function() {
            this.timeInterval = (C.now() / 1e3 * 1e3 | 0) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = C.now() / 1e3 * 1e3 | 0
        },
        __class__: et
    }, n = function() {}, (e["awe6.interfaces.IOverlay"] = n).__name__ = "awe6.interfaces.IOverlay", n.__isInterface__ = !0, n.prototype = {
        __class__: n
    }, k = function() {}, (e["awe6.interfaces.IOverlayProcess"] = k).__name__ = "awe6.interfaces.IOverlayProcess", k.__isInterface__ = !0, k.__interfaces__ = [f, r, n], (e["awe6.core.drivers.AOverlay"] = it).__name__ = "awe6.core.drivers.AOverlay", it.__interfaces__ = [k], it.__super__ = y, it.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new wt(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new wt(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new wt(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100;
            var t = ns(this, this.activateButton),
                e = Mt.BACK,
                i = function() {
                    t(e)
                };
            this._buttonBack.onClickCallback = i;
            var s = ns(this, this.activateButton),
                n = Mt.MUTE,
                i = function() {
                    s(n)
                };
            this._buttonMute.onClickCallback = i;
            var _ = ns(this, this.activateButton),
                a = Mt.PAUSE,
                i = function() {
                    _(a)
                };
            this._buttonPause.onClickCallback = i;
            var r = ns(this, this.activateButton),
                o = Mt.UNMUTE,
                i = function() {
                    r(o)
                };
            this._buttonUnmute.onClickCallback = i;
            var h = ns(this, this.activateButton),
                c = Mt.UNPAUSE,
                i = function() {
                    h(c)
                };
            this._buttonUnpause.onClickCallback = i, this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var l = this._buttonBack.height,
                u = this._buttonBack.width,
                i = this._kernel.factory.width - 4 * u,
                l = l;
            this.positionButton(Mt.BACK, i, l), this.positionButton(Mt.MUTE, i += u, l), this.positionButton(Mt.UNMUTE, i, l), this.positionButton(Mt.PAUSE, i += u, l), this.positionButton(Mt.UNPAUSE, i, l)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), y.prototype._updater.call(this, t), 0 < this._flashDuration && (this._flashDuration -= this._flashAsTime ? t : 1, e = this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), this._flashAlpha = 1 < e ? 1 : e < 0 ? 0 : e), this._flashView.set_isVisible(0 < this._flashAlpha), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? Mt.BACK : Mt.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? Mt.PAUSE : Mt.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? Mt.UNMUTE : Mt.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t), this._pauseView.update(t))
        },
        _disposer: function() {
            null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), y.prototype._disposer.call(this)
        },
        _getButton: function(t) {
            switch (t._hx_index) {
                case 0:
                    return this._buttonBack;
                case 1:
                    return this._buttonMute;
                case 2:
                    return this._buttonUnmute;
                case 3:
                    return this._buttonPause;
                case 4:
                    return this._buttonUnpause;
                case 5:
                    t.value;
                    return null
            }
        },
        showButton: function(t, e) {
            null == e && (e = !0);
            t = this._getButton(t);
            null != t && (e ? this.addEntity(t, null, !0) : this.removeEntity(t, null, !0))
        },
        positionButton: function(t, e, i, s, n) {
            t = this._getButton(t);
            null != t && (t.set_x(e), t.set_y(i), null != s && t.set_width(s), null != n && t.set_height(n))
        },
        hideButtons: function() {
            this.showButton(Mt.BACK, !1), this.showButton(Mt.MUTE, !1), this.showButton(Mt.UNMUTE, !1), this.showButton(Mt.PAUSE, !1), this.showButton(Mt.UNPAUSE, !1)
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < i ? 1 : i < 0 ? 0 : i
        },
        activateButton: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(Mt.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(Mt.MUTE, !1), this.showButton(Mt.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Mt.MUTE, !0), this.showButton(Mt.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(Mt.PAUSE, !1), this.showButton(Mt.UNPAUSE, !0), this.activateButton(Mt.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Mt.PAUSE, !0), this.showButton(Mt.UNPAUSE, !1), this.activateButton(this._wasMute ? Mt.MUTE : Mt.UNMUTE), this._kernel.resume(), this._drawPause(!1));
                    break;
                case 5:
                    t.value
            }
        },
        _drawPause: function(t) {
            null == t && (t = !0), this._pauseView.set_isVisible(t)
        },
        get_pauseEntity: function() {
            return this.pauseEntity
        },
        set_pauseEntity: function(t) {
            return null != this.get_pauseEntity() && this.get_pauseEntity().get_view().remove(), this.pauseEntity = t, this._pauseView.addChild(this.get_pauseEntity().get_view()), this.get_pauseEntity()
        },
        __class__: it
    }), n = function() {}, (e["awe6.interfaces.IProgress"] = n).__name__ = "awe6.interfaces.IProgress", n.__isInterface__ = !0, k = function() {}, (e["awe6.interfaces.IPreloader"] = k).__name__ = "awe6.interfaces.IPreloader", k.__isInterface__ = !0, k.__interfaces__ = [n, f, r], (e["awe6.core.drivers.APreloader"] = st).__name__ = "awe6.core.drivers.APreloader", st.__interfaces__ = [k], st.__super__ = o, st.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new wt(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, 0 < this._assets.length && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        var t = ns(h = this._kernel, h.onPreloaderComplete),
                            e = this;
                        fi.delay(function() {
                            t(e)
                        }, 100)
                    } catch (t) {}
                    this._isComplete = !0
                }
            } else this._driverLoad(this._assets[this._currentAsset - 1]), this._currentProgress = 0
        },
        _driverLoad: function(t) {},
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), 0 == this._assets.length && this._kernel.onPreloaderComplete(this), this.get_view().set_isVisible(100 < this._age)
        },
        _disposer: function() {
            this.get_view().dispose(), this._driverDisposer(), o.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        get_view: function() {
            return this.view
        },
        __class__: st
    }), (e["awe6.core.drivers.AProfiler"] = nt).__name__ = "awe6.core.drivers.AProfiler", nt.__super__ = y, nt.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: nt
    }), k = function() {}, (e["awe6.interfaces.ISceneTransition"] = k).__name__ = "awe6.interfaces.ISceneTransition", k.__isInterface__ = !0, k.__interfaces__ = [f, n, r], (e["awe6.core.drivers.ASceneTransition"] = _t).__name__ = "awe6.core.drivers.ASceneTransition", _t.__interfaces__ = [k], _t.__super__ = y, _t.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        get_progress: function() {
            var t = this._age / this._duration;
            return 1 < t ? 1 : t < 0 ? 0 : t
        },
        __class__: _t
    }), r = function() {}, (e["awe6.interfaces.ISession"] = r).__name__ = "awe6.interfaces.ISession", r.__isInterface__ = !0, r.prototype = {
        __class__: r
    };
    var at = function(t, e) {
        null == e && (e = ""), this._kernel = t, "" == e && (e = "DEBUG_AWE6"), this.id = e, this._tools = this._kernel.tools, this._version = 1, this._init()
    };

    function rt(t, e, i, s) {
        null == i && (i = 0), this.context = e, this.set_priority(i), this.owner = s, o.call(this, t)
    }(e["awe6.core.drivers.ASession"] = at).__name__ = "awe6.core.drivers.ASession", at.__interfaces__ = [r], at.prototype = {
        _init: function() {
            this._driverLoad(), U.field(this._savedData, "_____VERSION") != this._version && this._driverReset();
            var t = null != U.field(this._savedData, this.id);
            this._data = {}, this._resetter(), this._setter(), t && (this._data = U.field(this._savedData, this.id), this._getter(), this.loadCount++)
        },
        _driverLoad: function() {
            this._savedData = {}
        },
        _driverSave: function() {},
        _driverReset: function() {
            this._savedData = {}
        },
        _getter: function() {
            this.loadCount = this._data.loadCount, this.saveCount = this._data.saveCount
        },
        _setter: function() {
            this._data.loadCount = this.loadCount, this._data.saveCount = this.saveCount
        },
        _resetter: function() {
            this.loadCount = 0, this.saveCount = 0
        },
        reset: function(t) {
            null == t && (t = !1), this._data = {}, this._resetter(), this._setter(), t && (this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave())
        },
        save: function() {
            this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave()
        },
        __class__: at
    }, k = function() {}, (e["awe6.interfaces.IPriority"] = k).__name__ = "awe6.interfaces.IPriority", k.__isInterface__ = !0, k.prototype = {
        __class__: k
    }, r = function() {}, (e["awe6.interfaces.IView"] = r).__name__ = "awe6.interfaces.IView", r.__isInterface__ = !0, r.__interfaces__ = [a, _, x, k], r.prototype = {
        __class__: r
    }, (e["awe6.core.drivers.AView"] = rt).__name__ = "awe6.core.drivers.AView", rt.__interfaces__ = [r], rt.__super__ = o, rt.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
        },
        addChild: function(t, e) {
            return null == e && (e = 0), this.isDisposed || null == t ? null : (t.get_parent() != this && (t.remove(), t instanceof rt && (i = t, this._children.push(i), i._setParent(this))), 0 != e && t.set_priority(e), this._isDirty = !0, t);
            var i
        },
        removeChild: function(t) {
            if (!this.isDisposed && null != t) {
                if (t instanceof rt) {
                    t = t;
                    if (t.get_parent() != this) return;
                    C.remove(this._children, t), t._setParent(null)
                }
                this._isDirty = !0
            }
        },
        remove: function() {
            null != this.get_parent() && this.get_parent().removeChild(this)
        },
        clear: function() {
            for (var t = 0, e = this._children; t < e.length;) {
                var i = e[t];
                ++t, this.removeChild(i)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = 0, i = this._children; e < i.length;) {
                var s = i[e];
                ++e;
                var n = t;
                null == n && (n = 0), s.isActive && !s.isDisposed && (s._age += n, s._updates++, s._updater(n))
            }
            this._isDirty && this._draw(), this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY
        },
        _disposer: function() {
            this.remove(), this._driverDisposer(), this.clear(), o.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        _draw: function() {
            this.isDisposed || (this._children.sort(ns(h = this._tools, h.sortByPriority)), this._driverDraw(), this._isDirty = !1)
        },
        _driverDraw: function() {},
        _setParent: function(t) {
            this.parent = t
        },
        get_priority: function() {
            return this.priority
        },
        set_priority: function(t) {
            return t == this.get_priority() || (this.priority = t, this.get_parent() instanceof rt && (null != (t = this.get_parent()) && (t._isDirty = !0))), this.get_priority()
        },
        set_isVisible: function(t) {
            return t == this.isVisible || (this.isVisible = t, this.get_parent() instanceof rt && (null != (t = this.get_parent()) && t._draw())), this.isVisible
        },
        get_parent: function() {
            return this.parent
        },
        get_isInViewStack: function() {
            return !!this.isVisible && (this.owner == this._kernel || null != this.get_parent() && this.get_parent().get_isInViewStack())
        },
        set_x: function(t) {
            return this.x = t, this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.x
        },
        set_y: function(t) {
            return this.y = t, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY, this.y
        },
        __class__: rt
    });
    var ot = function(t) {
        j.call(this, t)
    };
    (e["awe6.core.drivers.createjs.AssetManager"] = ot).__name__ = "awe6.core.drivers.createjs.AssetManager", ot.__super__ = j, ot.prototype = t(j.prototype, {
        _driverGetAsset: function(t, e, i) {
            var s = null;
            return null != ot.loadQueue && (s = ot.loadQueue.getResult(t)), s
        },
        __class__: ot
    });
    var ht = function(t) {
        z.call(this, t)
    };
    (e["awe6.core.drivers.createjs.AudioManager"] = ht).__name__ = "awe6.core.drivers.createjs.AudioManager", ht.__super__ = z, ht.prototype = t(z.prototype, {
        _init: function() {
            z.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", ns(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", ns(this, this._onVisibilityChange)), z.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(t, e, i, s, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new ct(this._kernel, t, this._packageId, e, i, s, n, _, a)
        },
        _driverSetIsMute: function(t) {
            try {
                createjs.Sound.muted = t
            } catch (t) {}
            try {
                createjs.Sound.setMute(t)
            } catch (t) {}
        },
        _onVisibilityChange: function(t) {
            this._getVisibilityPropery() ? (this._visibilityWasMute = this.isMute, this.set_isMute(!0)) : this.set_isMute(this._visibilityWasMute)
        },
        _getVisibilityPropery: function() {
            for (var t = ["hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden"], e = 0; e < t.length;) {
                var i = t[e];
                ++e;
                var s = window.document;
                if (Object.prototype.hasOwnProperty.call(s, i)) return U.field(window.document, i)
            }
            return window.document.hidden
        },
        __class__: ht
    });
    var ct = function(t, e, i, s, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), W.call(this, t, e, i, s, 1 == n ? 0 : n, _, a, r, o)
    };

    function lt(t, e, i) {
        X.call(this, t, e, i)
    }(e["awe6.core.drivers.createjs._HelperSound"] = ct).__name__ = "awe6.core.drivers.createjs._HelperSound", ct.__super__ = W, ct.prototype = t(W.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan), createjs.WebAudioPlugin.context && "suspended" == createjs.WebAudioPlugin.context.state && createjs.WebAudioPlugin.context.resume()
            } catch (t) {}
            null != this._sound ? (this._sound.addEventListener("complete", ns(this, this._onSoundComplete)), this._driverTransform()) : this.dispose()
        },
        _driverTransform: function(t) {
            null == t && (t = !1), null != this._sound && (t && (this._volume *= this._sound.volume, this._pan *= this._sound.pan), this._sound.volume = this._volume, this._sound.pan = this._pan)
        },
        _driverStop: function() {
            if (null != this._sound) try {
                this._sound.stop()
            } catch (t) {}
        },
        _onSoundComplete: function(t) {
            null != this._onCompleteCallback && this._onCompleteCallback.apply(this, []), this.dispose()
        },
        __class__: ct
    }), (e["awe6.core.drivers.createjs.Factory"] = lt).__name__ = "awe6.core.drivers.createjs.Factory", lt.__super__ = X, lt.prototype = t(X.prototype, {
        _driverInit: function() {
            this.isDebug || (di.trace = function(t, e) {
                window.console.log(t)
            });
            var t, e = new createjs.Container;
            this._context.addChild(e), this._context = e, this._countConfigsLoaded = 0, this._countConfigsToLoad = 0, "" != this._config ? (t = null != this._config ? this._config : "assets/__Config.xml", null != (e = this._context.getStage().canvas.getAttribute("config")) && "" != e && (t = e), this._loadConfig(t)) : this._launchKernel()
        },
        _launchKernel: function() {
            this._displayCredits();
            var t = !0;
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.nativeExperience") && (t = "true" == this.config.h["settings.nativeExperience"]);
            var e = this._context.getStage().canvas.getAttribute("nativeExperience");
            null != e && "" != e && (t = "true" == e), this.isNativeExperience = t, X.prototype._launchKernel.call(this);
            var i = this._concreteKernel.system.isDesktop,
                e = "default";
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.fullScreen") && (e = this.config.h["settings.fullScreen"]);
            t = this._context.getStage().canvas.getAttribute("fullScreen");
            null != t && "" != t && (e = t), this._kernel.set_isFullScreen(i && ("desktop" == e || "all" == e) || !i && ("mobile" == e || "all" == e || "default" == e)), this._kernel.isFullScreen && this.isNativeExperience && !i && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            di.trace(Object.prototype.hasOwnProperty.call(this.config.h, "settings.asciiArt") ? this.config.h["settings.asciiArt"] : "", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), di.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), di.trace("Powered by awe6 (http://awe6.org)", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 129,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), this.isDecached && di.trace("Note: decaching is currently enabled", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 132,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), di.trace("", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 134,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(t) {
            if ("<?xml" == C.substr(t, 0, 5)) this._parseXml(t);
            else {
                this.isDecached && (t += "?dc=" + R.random(99999));
                try {
                    var e = new Ni(t);
                    e.onError = ns(this, this._onIOError), e.onData = ns(this, this._onComplete), e.request()
                } catch (t) {
                    var i = ui.caught(t).unwrap();
                    return void this._onIOError(R.string(i))
                }
                this._countConfigsToLoad++
            }
        },
        _parseXml: function(t) {
            if (this._traverseElements(S.parse(t).firstElement().elements(), ""), Object.prototype.hasOwnProperty.call(this.config.h, "settings.joinXml") && this._countConfigsLoaded < 100) {
                var e = this.config.h["settings.joinXml"],
                    t = this.config;
                Object.prototype.hasOwnProperty.call(t.h, "settings.joinXml") && delete t.h["settings.joinXml"];
                for (var i = e.split(","), s = 0; s < i.length;) {
                    var n = i[s];
                    ++s, this._loadConfig(n)
                }
            }
            this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
        },
        _onIOError: function(t) {
            di.trace("IO Errors Occurred During Config Loading:" + t, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 188,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), di.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 189,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == C.substr(this._config, 0, 5) ? (di.trace("Embedded Config detected, using that to continue ...", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 192,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (di.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 198,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), di.trace("Unable to continue without Config.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 199,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(t) {
            var e;
            this._countConfigsLoaded++, "" != t ? ("<?xml" != C.substr(e = t, 0, 5) && (e = this.createEncrypter().decrypt(Ei.ofString(e)).toString()), this._parseXml(e)) : this._onIOError(t)
        },
        _getAssetUrls: function() {
            for (var t = ["bin/assets/audio/Applause.m4a", "bin/assets/audio/Applause.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/GameOver.m4a", "bin/assets/audio/GameOver.ogg", "bin/assets/audio/GameStart.m4a", "bin/assets/audio/GameStart.ogg", "bin/assets/audio/Jump1.m4a", "bin/assets/audio/Jump1.ogg", "bin/assets/audio/Jump2.m4a", "bin/assets/audio/Jump2.ogg", "bin/assets/audio/Jump3.m4a", "bin/assets/audio/Jump3.ogg", "bin/assets/audio/JumpImpact.m4a", "bin/assets/audio/JumpImpact.ogg", "bin/assets/audio/Medal1.m4a", "bin/assets/audio/Medal1.ogg", "bin/assets/audio/Medal2.m4a", "bin/assets/audio/Medal2.ogg", "bin/assets/audio/Medal3.m4a", "bin/assets/audio/Medal3.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/SkillPenalty.m4a", "bin/assets/audio/SkillPenalty.ogg", "bin/assets/audio/SkillPerfect.m4a", "bin/assets/audio/SkillPerfect.ogg", "bin/assets/audio/SkillStart.m4a", "bin/assets/audio/SkillStart.ogg", "bin/assets/audio/SprintGo.m4a", "bin/assets/audio/SprintGo.ogg", "bin/assets/audio/SprintGun.m4a", "bin/assets/audio/SprintGun.ogg", "bin/assets/audio/SprintMarks.m4a", "bin/assets/audio/SprintMarks.ogg", "bin/assets/audio/SprintSet.m4a", "bin/assets/audio/SprintSet.ogg", "bin/assets/audio/ThrowImpact.m4a", "bin/assets/audio/ThrowImpact.ogg", "bin/assets/audio/ThrowLaunch.m4a", "bin/assets/audio/ThrowLaunch.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/VoiceAvatar.m4a", "bin/assets/audio/VoiceAvatar.ogg", "bin/assets/audio/VoiceInstructions.m4a", "bin/assets/audio/VoiceInstructions.ogg", "bin/assets/audio/VoiceResults0.m4a", "bin/assets/audio/VoiceResults0.ogg", "bin/assets/audio/VoiceResults1.m4a", "bin/assets/audio/VoiceResults1.ogg", "bin/assets/audio/VoiceResults2.m4a", "bin/assets/audio/VoiceResults2.ogg", "bin/assets/audio/VoiceResults3.m4a", "bin/assets/audio/VoiceResults3.ogg", "bin/assets/audio/VoiceSelectLevel.m4a", "bin/assets/audio/VoiceSelectLevel.ogg", "bin/assets/audio/VoiceShop.m4a", "bin/assets/audio/VoiceShop.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.eot", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.svg", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.ttf", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.woff", "bin/assets/game/Coin.png", "bin/assets/game/Javelin.png", "bin/assets/game/LocationCrowd.png", "bin/assets/game/LocationGroundJump1.jpg", "bin/assets/game/LocationGroundJump2.jpg", "bin/assets/game/LocationGroundSprint1.jpg", "bin/assets/game/LocationGroundSprint2.jpg", "bin/assets/game/LocationGroundThrow1.jpg", "bin/assets/game/LocationGroundThrow2.jpg", "bin/assets/game/LocationRays.png", "bin/assets/game/LocationSky.jpg", "bin/assets/game/Scenery.json", "bin/assets/game/Scenery.png", "bin/assets/game/UnitA.json", "bin/assets/game/UnitA.png", "bin/assets/game/UnitB.json", "bin/assets/game/UnitB.png", "bin/assets/gui/Action.png", "bin/assets/gui/AvatarUnitA.png", "bin/assets/gui/AvatarUnitB.png", "bin/assets/gui/BgAbstract1.png", "bin/assets/gui/BgAbstract2.png", "bin/assets/gui/BgAbstract3.png", "bin/assets/gui/BgAbstract4.png", "bin/assets/gui/BgDetail.jpg", "bin/assets/gui/BgGradient1.png", "bin/assets/gui/BgGradient2.png", "bin/assets/gui/BgGradient3.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Buttons.png", "bin/assets/gui/HeroMedals.png", "bin/assets/gui/HeroUnitA.png", "bin/assets/gui/HeroUnitB.png", "bin/assets/gui/Hud.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/PanelBigBg.png", "bin/assets/gui/PanelBigFg.png", "bin/assets/gui/PanelLevel.png", "bin/assets/gui/PanelLevelBg.png", "bin/assets/gui/PanelResult.png", "bin/assets/gui/PanelShop.png", "bin/assets/gui/PanelSmallBg.png", "bin/assets/gui/PanelSmallFg.png", "bin/assets/gui/PanelUnit.png", "bin/assets/gui/SceneFgFooter1.png", "bin/assets/gui/SceneFgFooter2.png", "bin/assets/gui/SceneFgHeader1.png", "bin/assets/gui/SceneFgHeader2.png", "bin/assets/gui/Vignette.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png", "bin/assets/__Rotate.png"], e = [], i = 0, s = t.length; i < s;) t[n = i++] = C.substr(t[n], 4, null), ("__" == C.substr(t[n], 0, 2) || -1 < t[n].indexOf("/__")) && e.push(t[n]);
            for (i = 0; i < e.length;) {
                var n = e[i];
                ++i, C.remove(t, n)
            }
            return t
        },
        _driverDisposer: function() {
            null != this._context.parent && this._context.parent.removeChild(this._context)
        },
        preventDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.preventDefaultForKeys(t)
        },
        allowDefaultForKeys: function(t) {
            this._kernel.inputs.keyboard.allowDefaultForKeys(t)
        },
        __class__: lt
    });
    var ut = function(t) {
        Q.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputKeyboard"] = ut).__name__ = "awe6.core.drivers.createjs.InputKeyboard", ut.__super__ = Q, ut.prototype = t(Q.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", ns(this, this._onKeyDown)), this._document.addEventListener("keyup", ns(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", ns(this, this._onKeyDown)), this._document.removeEventListener("keyup", ns(this, this._onKeyUp)), Q.prototype._disposer.call(this)
        },
        _onKeyDown: function(t) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !0))
        },
        _onKeyUp: function(t) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(t.keyCode) && t.preventDefault(), this._addEvent(t.keyCode, !1))
        },
        preventDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < t.length;) {
                    var i = t[e];
                    ++e;
                    i = this.getKeyCode(i);
                    p.has(this._preventDefaultKeyCodes, i) || this._preventDefaultKeyCodes.push(i)
                }
        },
        allowDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
                    var i = this.getKey(this._preventDefaultKeyCodes[e]);
                    p.has(t, i) ? this._preventDefaultKeyCodes.splice(e, 1) : ++e
                }
        },
        __class__: ut
    });
    var dt = function(t) {
        q.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputMouse"] = dt).__name__ = "awe6.core.drivers.createjs.InputMouse", dt.__super__ = q, dt.prototype = t(q.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._system = this._kernel.system, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", ns(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", ns(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", ns(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", ns(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", ns(this, this._onMouseUp))), this._system.isDesktop && window.document.addEventListener("wheel", ns(this, this._onWheel)), window.focus()
        },
        _disposer: function() {
            this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", ns(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", ns(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", ns(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", ns(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", ns(this, this._onMouseUp))), this._system.isDesktop && window.document.removeEventListener("wheel", ns(this, this._onWheel)), q.prototype._disposer.call(this)
        },
        _isWithinBounds: function() {
            return this._stage.mouseInBounds
        },
        _getPosition: function() {
            var t, e;
            this._isTouch ? (this.x = this._touchX, this.y = this._touchY) : (t = this._stage.mouseX / this._stage.scaleX, e = this._kernel.factory.width, this.x = 0 | (e < t ? e : t < 0 ? 0 : t), t = this._stage.mouseY / this._stage.scaleY, e = this._kernel.factory.height, this.y = 0 | (e < t ? e : t < 0 ? 0 : t)), this.x = this.x == this._kernel.factory.width ? this._xPrev : this.x, this.y = this.y == this._kernel.factory.height ? this._yPrev : this.y
        },
        _onTouchStart: function(t) {
            this._onMouseDown(t), this._onTouch(t), this.x = this._touchX, this.y = this._touchY
        },
        _onTouchEnd: function(t) {
            this._onMouseUp(t), this._onTouch(t), dt._isSoundTriggered || (this._kernel.audio.start("Silence"), dt._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
        },
        _onTouch: function(t) {
            try {
                var e = (t.targetTouches[0].pageX - (0 | this._stage.canvas.offsetLeft)) / this._kernel._scaleX,
                    i = this._kernel.factory.width;
                this._touchX = 0 | (i < e ? i : e < 0 ? 0 : e);
                e = (t.targetTouches[0].pageY - (0 | this._stage.canvas.offsetTop)) / this._kernel._scaleY, i = this._kernel.factory.height;
                this._touchY = 0 | (i < e ? i : e < 0 ? 0 : e)
            } catch (t) {}
            this._stage.mouseInBounds && t.preventDefault()
        },
        _onMouseDown: function(t) {
            window.focus(), this.isActive && (!this._isTouch && 2 == t.nativeEvent.button || this._buffer.push(!0))
        },
        _onMouseUp: function(t) {
            this.isActive && (!this._isTouch && 2 == t.nativeEvent.button || this._buffer.push(!1))
        },
        _onWheel: function(t) {
            this.isActive && (this.scroll += Math.round(t.deltaY))
        },
        set_isVisible: function(t) {
            return this._stage.cursor = t ? "none" : "auto", q.prototype.set_isVisible.call(this, t)
        },
        set_cursorType: function(t) {
            switch (t._hx_index) {
                case 0:
                    e = "crosshair";
                    break;
                case 1:
                    e = "auto";
                    break;
                case 2:
                case 3:
                    e = "pointer";
                    break;
                case 4:
                    e = "text";
                    break;
                case 5:
                    var e = t.value
            }
            return this._stage.canvas.style.cursor = e, q.prototype.set_cursorType.call(this, t)
        },
        __class__: dt
    });
    var pt = function(t, e) {
        tt.call(this, t, e)
    };
    (e["awe6.core.drivers.createjs.Kernel"] = pt).__name__ = "awe6.core.drivers.createjs.Kernel", pt.__super__ = tt, pt.prototype = t(tt.prototype, {
        _driverGetIsLocal: function() {
            var t;
            switch (window.location.protocol) {
                case "http:":
                case "https:":
                    t = !1;
                    break;
                default:
                    t = !0
            }
            return t
        },
        _driverInit: function() {
            this.system = new Et(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + C.substr(c.hex(this.factory.bgColor, 8), 2, 6)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", ns(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", ns(this, this._onContextMenu), !1), window.addEventListener("unload", ns(this, this._onUnload))
        },
        _onUnload: function(t) {
            window.removeEventListener("unload", ns(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(t) {
            var e, i;
            t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay && (e = ns(h = this.overlay, h.activateButton), i = Mt.PAUSE, fi.delay(function() {
                e(i)
            }, 100))
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", ns(this, this._onContextMenu))
        },
        _onEnterFrame: function(t) {
            null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
            t = R.string(window.innerWidth) + ":" + R.string(window.innerHeight);
            this._prevWindowSize != t && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function(t) {},
        _driverSetIsFullScreen: function(t) {
            this._prevWindowSize = R.string(window.innerWidth) + ":" + R.string(window.innerHeight), this._scaleX = this._scaleY = 1;
            var e = this.factory.width,
                i = this.factory.height,
                s = window.innerWidth,
                n = window.innerHeight,
                _ = e < i,
                a = s < n;
            this.system.isRotated = !this.system.isDesktop && _ != a;
            _ = 0, a = 0;
            if (t) {
                var r = Math.min(s / e, n / i),
                    o = this.factory.fullScreenType;
                switch (o._hx_index) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this._scaleX = s / e, this._scaleY = n / i;
                        break;
                    case 3:
                        this._scaleX = this._scaleY = r;
                        break;
                    case 4:
                        r = r < .5 ? .25 : r < 1 ? .5 : Math.floor(r), this._scaleX = this._scaleY = r;
                        break;
                    case 5:
                        var h, c, l, u = o.value;
                        null != u.bleedWidth && null != u.bleedHeight && (l = e - 2 * R.parseInt(R.string(u.bleedWidth) + ""), c = i - 2 * R.parseInt(R.string(u.bleedHeight) + ""), h = Math.min(s / l, n / c), 1 == u.isBleedInternal && ((l = (u = e / i) / (c = Math.min(e / c, Math.max(l / i, s / n)))) < 1 && (l = c / u), h = Math.min(l * s / e, l * n / i)), this._scaleX = this._scaleY = h)
                }
                _ = Math.round((s - e * this._scaleX) / 2), a = Math.round((n - i * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(i * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", _ + "px", ""), this._stage.canvas.style.setProperty("margin-top", a + "px", "")
        },
        __class__: pt
    });
    var gt = function(t, e, i, s, n, _, a, r, o, h, c, l, u, d, p, g, f) {
        it.call(this, t, e, i, s, n, _, a, r, o, h, c, l, u, d, p, g, f)
    };
    (e["awe6.core.drivers.createjs.Overlay"] = gt).__name__ = "awe6.core.drivers.createjs.Overlay", gt.__super__ = it, gt.prototype = t(it.prototype, {
        _driverInit: function() {
            Fi.__cast(this._borderView, wt).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + c.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(t) {
            null == t && (t = 0), it.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + c.hex(s, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < i ? 1 : i < 0 ? 0 : i
        },
        __class__: gt
    });
    var ft = function(t, e, i) {
        st.call(this, t, e, i)
    };
    (e["awe6.core.drivers.createjs.Preloader"] = ft).__name__ = "awe6.core.drivers.createjs.Preloader", ft.__super__ = st, ft.prototype = t(st.prototype, {
        _init: function() {
            this._context = new createjs.Container, this.view = new wt(this._kernel, this._context), st.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = 0, this._completedDelay = 0;
            var t = this._isDecached ? "?dc=" + R.random(999999) : "",
                e = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && p.has(e, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
            var i = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                this._audioHoldDelay = this._getAudioHoldDelay();
                var s = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var n = 0, _ = this._assets; n < _.length;) {
                    var a = _[n];
                    ++n;
                    var r = C.substr(a, -3, null);
                    p.has(e, r) && (i.push(a), s || r != this._validSoundFormat || (r = "assets.audio." + C.substr(a.split("/").pop(), 0, -4), this._isFastTestMode || this._manifest.push({
                        src: a + t,
                        id: r
                    })))
                }
            }
            for (n = 0; n < i.length;) {
                a = i[n];
                ++n, C.remove(this._assets, a)
            }
            for (n = 0, _ = this._assets; n < _.length;) {
                a = _[n];
                ++n, this._manifest.push({
                    src: a + t,
                    id: a
                })
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", ns(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", ns(this, this._onError)), this._loadQueue.addEventListener("error", ns(this, this._onError));
            var n = ns(h = this._loadQueue, h.loadManifest),
                o = this._manifest;
            fi.delay(function() {
                n(o)
            }, 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function(t) {
            this._isComplete || (this._isComplete = !0, ot.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", ns(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", ns(this, this._onError)), this._loadQueue.removeEventListener("error", ns(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
        },
        _onError: function(t) {
            di.trace([t, t.title, t.message, t.data], {
                fileName: "awe6/core/drivers/createjs/Preloader.hx",
                lineNumber: 148,
                className: "awe6.core.drivers.createjs.Preloader",
                methodName: "_onError"
            })
        },
        _showAudioHoldMessage: function() {},
        _updater: function(t) {
            null == t && (t = 0), st.prototype._updater.call(this, t), this._isComplete && (this._completedDelay -= t, (0 <= this._audioHoldDelay && this._completedDelay <= 0 || this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease()) && (this._assets = []))
        },
        _getIsStockAndroidBrowser: function() {
            var t = -1 < this._system.userAgent.indexOf("Android") && -1 < this._system.userAgent.indexOf("Mozilla/5.0") && -1 < this._system.userAgent.indexOf("AppleWebKit"),
                e = new d("AppleWebKit/([\\d.]+)", ""),
                i = e.match(this._system.userAgent),
                s = i ? parseFloat(e.matched(1)) : 0,
                n = new d("Chrome/([\\d.]+)", ""),
                e = n.match(this._system.userAgent),
                n = e ? parseFloat(n.matched(1)) : 0;
            return t && (!!(i && s < 537) || !!e && n < 37)
        },
        _getAudioHoldDelay: function() {
            if (this._isSoundDisabled) return 0;
            try {
                if ("[WebAudioPlugin]" != createjs.Sound.activePlugin || "suspended" != createjs.Sound.activePlugin.context.state) return 0
            } catch (t) {}
            var t = -1;
            Object.prototype.hasOwnProperty.call(this._kernel.factory.config.h, "settings.audioHoldDelay") && (t = R.parseInt(this._kernel.factory.config.h["settings.audioHoldDelay"]));
            try {
                var e = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != e && "" != e && (t = R.parseInt(e))
            } catch (t) {}
            return t
        },
        __class__: ft
    });
    var mt = function(t) {
        nt.call(this, t)
    };
    (e["awe6.core.drivers.createjs.Profiler"] = mt).__name__ = "awe6.core.drivers.createjs.Profiler", mt.__super__ = nt, mt.prototype = t(nt.prototype, {
        _init: function() {
            nt.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var t = new createjs.Shape;
            this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + c.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + c.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + c.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + c.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            var t, e = 0 | this._kernel.getFramerate(!0);
            Math.min(this._height, this._height / this._kernel.factory.targetFramerate * e);
            this._fpsTextField.text = this._fpsLabel + ": " + e + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0 && (t = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024), e = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024), this._memoryTextField.text = this._memoryLabel + ": " + t + " / " + e)
        },
        __class__: mt
    });
    var yt = function(t, e) {
        _t.call(this, t, e)
    };

    function xt(t, e) {
        at.call(this, t, e)
    }(e["awe6.core.drivers.createjs.SceneTransition"] = yt).__name__ = "awe6.core.drivers.createjs.SceneTransition", yt.__super__ = _t, yt.prototype = t(_t.prototype, {
        _init: function() {
            _t.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
        },
        _updater: function(t) {
            null == t && (t = 0), _t.prototype._updater.call(this, t), this.isDisposed || (t = this.get_progress(), this._context.alpha = 1 - t)
        },
        __class__: yt
    }), (e["awe6.core.drivers.createjs.Session"] = xt).__name__ = "awe6.core.drivers.createjs.Session", xt.__super__ = at, xt.prototype = t(at.prototype, {
        _init: function() {
            var t = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = t ? Gi.getLocalStorage() : Gi.getSessionStorage(), at.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && Vi.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(Vi.get(this._kernel.factory.id)), this._driverSave(), Vi.remove(this._kernel.factory.id)), null != this._storage) try {
                var t = this._storage.getItem(this._kernel.factory.id);
                null != t && (this._savedData = this._tools.unserialize(t))
            } catch (t) {}
        },
        _driverReset: function() {
            if (null != this._storage) try {
                this._storage.removeItem(this._kernel.factory.id)
            } catch (t) {}
            this._savedData = {}
        },
        _driverSave: function() {
            if (null != this._storage) try {
                this._storage.setItem(this._kernel.factory.id, this._tools.serialize(this._savedData))
            } catch (t) {}
        },
        __class__: xt
    });
    var Et = function(t) {
        this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = u.navigator.userAgent, this.isSilk = new d("Silk", "").match(this.userAgent), this.isKaiOs = new d("KAIOS", "").match(this.userAgent), this.isCrosswalk = new d("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new d("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new d("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new d("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new d("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new d("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new d("Windows", "").match(this.userAgent) && (this.isWindows = !0, new d("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    (e["awe6.core.drivers.createjs.System"] = Et).__name__ = "awe6.core.drivers.createjs.System", Et.prototype = {
        get_isWebGL: function() {
            return !1
        },
        get_isFullScreenSupported: function() {
            try {
                var t = window.document.documentElement;
                if (null != t.requestFullscreen) return !0;
                if (null != t.msRequestFullscreen) return !0;
                if (null != t.mozRequestFullScreen) return !0;
                if (null != t.webkitRequestFullscreen) return !0
            } catch (t) {}
            return !1
        },
        requestFullScreen: function() {
            try {
                var t = window.document.documentElement;
                null != t.requestFullscreen ? t.requestFullscreen() : null != t.msRequestFullscreen ? t.msRequestFullscreen() : null != t.mozRequestFullScreen ? t.mozRequestFullScreen() : null != t.webkitRequestFullscreen && t.webkitRequestFullscreen()
            } catch (t) {}
        },
        requestExitFullScreen: function() {
            try {
                var t = window.document;
                null != t.exitFullscreen ? t.exitFullscreen() : null != t.msExitFullscreen ? t.msExitFullscreen() : null != t.mozCancelFullScreen ? t.mozCancelFullScreen() : null != t.webkitExitFullscreen && t.webkitExitFullscreen()
            } catch (t) {}
        },
        requestLockScreen: function() {
            if (!this.isDesktop) try {
                var t = this._kernel.factory.width < this._kernel.factory.height ? "portrait-primary" : "landscape-primary",
                    e = window.screen;
                null != e.orientation ? null != e.orientation.lock ? e.orientation.lock(t) : null != e.orientation.lockOrientation && e.orientation.lockOrientation(t) : null != e.mozOrientation ? e.mozLockOrientation(t) : null != e.msOrientation && e.msLockOrientation(t)
            } catch (t) {}
        },
        requestDeviceOrientation: function() {
            if (!this.isDesktop) try {
                null != window.DeviceMotionEvent && null != window.DeviceMotionEvent.requestPermission && window.DeviceMotionEvent.requestPermission()
            } catch (t) {}
        },
        __class__: Et
    };
    var wt = function(t, e, i, s) {
        rt.call(this, t, e, i, s)
    };

    function St(t, e, i, s) {
        null == s && (s = !0), null == i && (i = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = i, this._context = new createjs.Container, this.setPosition(0, 0), s && ((s = new createjs.Shape).graphics.beginFill("#FF0000"), s.graphics.drawRect(0, 0, this.width, this.height), s.graphics.endFill(), s.visible = !1, this._context.addChild(s), this._context.mask = s), y.call(this, t, null, this._context)
    }

    function vt(t, e, i, s, n, _, a) {
        null == a && (a = !1), null == _ && (_ = !1), null == s && (s = ""), this.textStyle = n, this._isMultiline = _, this._isCached = a, St.call(this, t, e, i, !1), this.set_text(s)
    }

    function Tt(t, e, i) {
        null == i && (i = 1e3), this._callbackFunction = e, this._duration = i, y.call(this, t)
    }(e["awe6.core.drivers.createjs.View"] = wt).__name__ = "awe6.core.drivers.createjs.View", wt.__super__ = rt, wt.prototype = t(rt.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), rt.prototype._init.call(this)
        },
        _driverDisposer: function() {
            if (null != this.context && null != this.context.parent) try {
                this.context.parent.removeChild(this.context)
            } catch (t) {}
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var i = t[e];
                ++e, i.isVisible && this._container.addChild(i.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, rt.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, rt.prototype.set_y.call(this, t)
        },
        __class__: wt
    }), (e["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = St).__name__ = "awe6.core.drivers.createjs.extras.gui.GuiEntity", St.__interfaces__ = [x], St.__super__ = y, St.prototype = t(y.prototype, {
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, this._context.x = this.x, this.x
        },
        set_y: function(t) {
            return this.y = t, this._context.y = this.y, this.y
        },
        set_isFlippedX: function(t) {
            return t == this.isFlippedX || (this.isFlippedX = t, this._context.scaleX *= -1, this.isFlippedX ? this.set_x(this.x + this.width) : this.set_x(this.x - this.width)), this.isFlippedX
        },
        __class__: St
    }), (e["awe6.core.drivers.createjs.extras.gui.Text"] = vt).__name__ = "awe6.core.drivers.createjs.extras.gui.Text", vt.__super__ = St, vt.prototype = t(St.prototype, {
        _init: function() {
            St.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text, this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
        },
        _updater: function(t) {
            null == t && (t = 0), St.prototype._updater.call(this, t), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
        },
        _draw: function() {
            if (this._textField.lineWidth = this.width, this._prevTextStyle != this.textStyle.toString()) {
                switch (this.textStyle.align._hx_index) {
                    case 0:
                    case 1:
                        this._textField.textAlign = "left";
                        break;
                    case 2:
                        this._textField.textAlign = "center", this._textField.x = .5 * this.width;
                        break;
                    case 3:
                        this._textField.textAlign = "right", this._textField.x = this.width
                }
                var t, e, i = c.hex(this.textStyle.color, 6);
                this._textField.color = "#" + i, this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters && ((t = this._textField).shadow = null, e = this.textStyle.filters.slice(), null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, 2 != e.length && 6 != e.length || (this._textFieldOutline = this._textField.clone(), i = c.hex(e.shift(), 6), this._textFieldOutline.color = "#" + i, i = e.shift(), this._textFieldOutline.outline = 2 * i, this._context.addChildAt(this._textFieldOutline, 0), t = this._textFieldOutline), 4 == e.length && (t.shadow = new createjs.Shadow("#" + c.hex(e[0], 6), e[1], e[2], e[3])))
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(t) {
            return null == t && (t = ""), this.text == t || (this.text = t, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0), this.text
        },
        __class__: vt
    }), (e["awe6.extras.Delay"] = Tt).__name__ = "awe6.extras.Delay", Tt.__super__ = y, Tt.prototype = t(y.prototype, {
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Tt
    });
    var bt = A["awe6.interfaces.EAgenda"] = {
        __ename__: "awe6.interfaces.EAgenda",
        __constructs__: null,
        ALWAYS: {
            _hx_name: "ALWAYS",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        BIRTH: {
            _hx_name: "BIRTH",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        DEATH: {
            _hx_name: "DEATH",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        STANDARD: {
            _hx_name: "STANDARD",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        ATTACK: {
            _hx_name: "ATTACK",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        DEFEND: {
            _hx_name: "DEFEND",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EAgenda",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 6,
                value: t,
                __enum__: "awe6.interfaces.EAgenda",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    bt.__constructs__ = [bt.ALWAYS, bt.BIRTH, bt.DEATH, bt.STANDARD, bt.ATTACK, bt.DEFEND, bt.SUB_TYPE];
    var At = A["awe6.interfaces.EAudioChannel"] = {
        __ename__: "awe6.interfaces.EAudioChannel",
        __constructs__: null,
        DEFAULT: {
            _hx_name: "DEFAULT",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: i
        },
        EFFECTS: {
            _hx_name: "EFFECTS",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: i
        },
        INTERFACE: {
            _hx_name: "INTERFACE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: i
        },
        MUSIC: {
            _hx_name: "MUSIC",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 4,
                value: t,
                __enum__: "awe6.interfaces.EAudioChannel",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    At.__constructs__ = [At.DEFAULT, At.EFFECTS, At.INTERFACE, At.MUSIC, At.SUB_TYPE];
    var Ut = A["awe6.interfaces.EFullScreen"] = {
        __ename__: "awe6.interfaces.EFullScreen",
        __constructs__: null,
        DISABLED: {
            _hx_name: "DISABLED",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: i
        },
        NO_SCALE: {
            _hx_name: "NO_SCALE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: i
        },
        SCALE_ASPECT_RATIO_IGNORE: {
            _hx_name: "SCALE_ASPECT_RATIO_IGNORE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: i
        },
        SCALE_ASPECT_RATIO_PRESERVE: {
            _hx_name: "SCALE_ASPECT_RATIO_PRESERVE",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: i
        },
        SCALE_NEAREST_MULTIPLE: {
            _hx_name: "SCALE_NEAREST_MULTIPLE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EFullScreen",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ut.__constructs__ = [Ut.DISABLED, Ut.NO_SCALE, Ut.SCALE_ASPECT_RATIO_IGNORE, Ut.SCALE_ASPECT_RATIO_PRESERVE, Ut.SCALE_NEAREST_MULTIPLE, Ut.SUB_TYPE];
    var Rt = A["awe6.interfaces.EJoypadButton"] = {
        __ename__: "awe6.interfaces.EJoypadButton",
        __constructs__: null,
        FIRE: {
            _hx_name: "FIRE",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        UP: {
            _hx_name: "UP",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        DOWN: {
            _hx_name: "DOWN",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        PRIMARY: {
            _hx_name: "PRIMARY",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        },
        SECONDARY: {
            _hx_name: "SECONDARY",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: i
        }
    };
    Rt.__constructs__ = [Rt.FIRE, Rt.UP, Rt.RIGHT, Rt.DOWN, Rt.LEFT, Rt.PRIMARY, Rt.SECONDARY];
    var Ct = A["awe6.interfaces.EJoypadTouch"] = {
        __ename__: "awe6.interfaces.EJoypadTouch",
        __constructs__: null,
        DISABLED: {
            _hx_name: "DISABLED",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EJoypadTouch",
            toString: i
        },
        DPAD: {
            _hx_name: "DPAD",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EJoypadTouch",
            toString: i
        },
        JOYSTICK: ((h = function(t) {
            return {
                _hx_index: 2,
                distance: t,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: i
            }
        })._hx_name = "JOYSTICK", h.__params__ = ["distance"], h),
        SWIPE: ((h = function(t) {
            return {
                _hx_index: 3,
                speed: t,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: i
            }
        })._hx_name = "SWIPE", h.__params__ = ["speed"], h)
    };
    Ct.__constructs__ = [Ct.DISABLED, Ct.DPAD, Ct.JOYSTICK, Ct.SWIPE];
    var It = A["awe6.interfaces.EKey"] = {
        __ename__: "awe6.interfaces.EKey",
        __constructs__: null,
        NUM_LOCK: {
            _hx_name: "NUM_LOCK",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        CLEAR: {
            _hx_name: "CLEAR",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        HELP: {
            _hx_name: "HELP",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        ALT: {
            _hx_name: "ALT",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        BACKSPACE: {
            _hx_name: "BACKSPACE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        CAPS_LOCK: {
            _hx_name: "CAPS_LOCK",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        CONTROL: {
            _hx_name: "CONTROL",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        DELETE: {
            _hx_name: "DELETE",
            _hx_index: 7,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        DOWN: {
            _hx_name: "DOWN",
            _hx_index: 8,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        END: {
            _hx_name: "END",
            _hx_index: 9,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        ENTER: {
            _hx_name: "ENTER",
            _hx_index: 10,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        ESCAPE: {
            _hx_name: "ESCAPE",
            _hx_index: 11,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F1: {
            _hx_name: "F1",
            _hx_index: 12,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F10: {
            _hx_name: "F10",
            _hx_index: 13,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F11: {
            _hx_name: "F11",
            _hx_index: 14,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F12: {
            _hx_name: "F12",
            _hx_index: 15,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F13: {
            _hx_name: "F13",
            _hx_index: 16,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F14: {
            _hx_name: "F14",
            _hx_index: 17,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F15: {
            _hx_name: "F15",
            _hx_index: 18,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F2: {
            _hx_name: "F2",
            _hx_index: 19,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F3: {
            _hx_name: "F3",
            _hx_index: 20,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F4: {
            _hx_name: "F4",
            _hx_index: 21,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F5: {
            _hx_name: "F5",
            _hx_index: 22,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F6: {
            _hx_name: "F6",
            _hx_index: 23,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F7: {
            _hx_name: "F7",
            _hx_index: 24,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F8: {
            _hx_name: "F8",
            _hx_index: 25,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F9: {
            _hx_name: "F9",
            _hx_index: 26,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        HOME: {
            _hx_name: "HOME",
            _hx_index: 27,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        INSERT: {
            _hx_name: "INSERT",
            _hx_index: 28,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 29,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_0: {
            _hx_name: "NUMPAD_0",
            _hx_index: 30,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_1: {
            _hx_name: "NUMPAD_1",
            _hx_index: 31,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_2: {
            _hx_name: "NUMPAD_2",
            _hx_index: 32,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_3: {
            _hx_name: "NUMPAD_3",
            _hx_index: 33,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_4: {
            _hx_name: "NUMPAD_4",
            _hx_index: 34,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_5: {
            _hx_name: "NUMPAD_5",
            _hx_index: 35,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_6: {
            _hx_name: "NUMPAD_6",
            _hx_index: 36,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_7: {
            _hx_name: "NUMPAD_7",
            _hx_index: 37,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_8: {
            _hx_name: "NUMPAD_8",
            _hx_index: 38,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_9: {
            _hx_name: "NUMPAD_9",
            _hx_index: 39,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_ADD: {
            _hx_name: "NUMPAD_ADD",
            _hx_index: 40,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_DECIMAL: {
            _hx_name: "NUMPAD_DECIMAL",
            _hx_index: 41,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_DIVIDE: {
            _hx_name: "NUMPAD_DIVIDE",
            _hx_index: 42,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_ENTER: {
            _hx_name: "NUMPAD_ENTER",
            _hx_index: 43,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_MULTIPLY: {
            _hx_name: "NUMPAD_MULTIPLY",
            _hx_index: 44,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMPAD_SUBTRACT: {
            _hx_name: "NUMPAD_SUBTRACT",
            _hx_index: 45,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        PAGE_DOWN: {
            _hx_name: "PAGE_DOWN",
            _hx_index: 46,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        PAGE_UP: {
            _hx_name: "PAGE_UP",
            _hx_index: 47,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 48,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SHIFT: {
            _hx_name: "SHIFT",
            _hx_index: 49,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SPACE: {
            _hx_name: "SPACE",
            _hx_index: 50,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        TAB: {
            _hx_name: "TAB",
            _hx_index: 51,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        UP: {
            _hx_name: "UP",
            _hx_index: 52,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        A: {
            _hx_name: "A",
            _hx_index: 53,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        B: {
            _hx_name: "B",
            _hx_index: 54,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        C: {
            _hx_name: "C",
            _hx_index: 55,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        D: {
            _hx_name: "D",
            _hx_index: 56,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        E: {
            _hx_name: "E",
            _hx_index: 57,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        F: {
            _hx_name: "F",
            _hx_index: 58,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        G: {
            _hx_name: "G",
            _hx_index: 59,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        H: {
            _hx_name: "H",
            _hx_index: 60,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        I: {
            _hx_name: "I",
            _hx_index: 61,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        J: {
            _hx_name: "J",
            _hx_index: 62,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        K: {
            _hx_name: "K",
            _hx_index: 63,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        L: {
            _hx_name: "L",
            _hx_index: 64,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        M: {
            _hx_name: "M",
            _hx_index: 65,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        N: {
            _hx_name: "N",
            _hx_index: 66,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        O: {
            _hx_name: "O",
            _hx_index: 67,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        P: {
            _hx_name: "P",
            _hx_index: 68,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        Q: {
            _hx_name: "Q",
            _hx_index: 69,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        R: {
            _hx_name: "R",
            _hx_index: 70,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        S: {
            _hx_name: "S",
            _hx_index: 71,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        T: {
            _hx_name: "T",
            _hx_index: 72,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        U: {
            _hx_name: "U",
            _hx_index: 73,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        V: {
            _hx_name: "V",
            _hx_index: 74,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        W: {
            _hx_name: "W",
            _hx_index: 75,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        X: {
            _hx_name: "X",
            _hx_index: 76,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        Y: {
            _hx_name: "Y",
            _hx_index: 77,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        Z: {
            _hx_name: "Z",
            _hx_index: 78,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_0: {
            _hx_name: "NUMBER_0",
            _hx_index: 79,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_1: {
            _hx_name: "NUMBER_1",
            _hx_index: 80,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_2: {
            _hx_name: "NUMBER_2",
            _hx_index: 81,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_3: {
            _hx_name: "NUMBER_3",
            _hx_index: 82,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_4: {
            _hx_name: "NUMBER_4",
            _hx_index: 83,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_5: {
            _hx_name: "NUMBER_5",
            _hx_index: 84,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_6: {
            _hx_name: "NUMBER_6",
            _hx_index: 85,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_7: {
            _hx_name: "NUMBER_7",
            _hx_index: 86,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_8: {
            _hx_name: "NUMBER_8",
            _hx_index: 87,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        NUMBER_9: {
            _hx_name: "NUMBER_9",
            _hx_index: 88,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        COLON: {
            _hx_name: "COLON",
            _hx_index: 89,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        EQUALS: {
            _hx_name: "EQUALS",
            _hx_index: 90,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        HYPHEN: {
            _hx_name: "HYPHEN",
            _hx_index: 91,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SLASH: {
            _hx_name: "SLASH",
            _hx_index: 92,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        TILDE: {
            _hx_name: "TILDE",
            _hx_index: 93,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SQUARELEFT: {
            _hx_name: "SQUARELEFT",
            _hx_index: 94,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SQUARERIGHT: {
            _hx_name: "SQUARERIGHT",
            _hx_index: 95,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        BACKSLASH: {
            _hx_name: "BACKSLASH",
            _hx_index: 96,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        APOSTROPHE: {
            _hx_name: "APOSTROPHE",
            _hx_index: 97,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        TOPLEFT: {
            _hx_name: "TOPLEFT",
            _hx_index: 98,
            __enum__: "awe6.interfaces.EKey",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 99,
                value: t,
                __enum__: "awe6.interfaces.EKey",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    It.__constructs__ = [It.NUM_LOCK, It.CLEAR, It.HELP, It.ALT, It.BACKSPACE, It.CAPS_LOCK, It.CONTROL, It.DELETE, It.DOWN, It.END, It.ENTER, It.ESCAPE, It.F1, It.F10, It.F11, It.F12, It.F13, It.F14, It.F15, It.F2, It.F3, It.F4, It.F5, It.F6, It.F7, It.F8, It.F9, It.HOME, It.INSERT, It.LEFT, It.NUMPAD_0, It.NUMPAD_1, It.NUMPAD_2, It.NUMPAD_3, It.NUMPAD_4, It.NUMPAD_5, It.NUMPAD_6, It.NUMPAD_7, It.NUMPAD_8, It.NUMPAD_9, It.NUMPAD_ADD, It.NUMPAD_DECIMAL, It.NUMPAD_DIVIDE, It.NUMPAD_ENTER, It.NUMPAD_MULTIPLY, It.NUMPAD_SUBTRACT, It.PAGE_DOWN, It.PAGE_UP, It.RIGHT, It.SHIFT, It.SPACE, It.TAB, It.UP, It.A, It.B, It.C, It.D, It.E, It.F, It.G, It.H, It.I, It.J, It.K, It.L, It.M, It.N, It.O, It.P, It.Q, It.R, It.S, It.T, It.U, It.V, It.W, It.X, It.Y, It.Z, It.NUMBER_0, It.NUMBER_1, It.NUMBER_2, It.NUMBER_3, It.NUMBER_4, It.NUMBER_5, It.NUMBER_6, It.NUMBER_7, It.NUMBER_8, It.NUMBER_9, It.COLON, It.EQUALS, It.HYPHEN, It.SLASH, It.TILDE, It.SQUARELEFT, It.SQUARERIGHT, It.BACKSLASH, It.APOSTROPHE, It.TOPLEFT, It.SUB_TYPE];
    var kt = A["awe6.interfaces.EMessage"] = {
        __ename__: "awe6.interfaces.EMessage",
        __constructs__: null,
        DISPOSE: {
            _hx_name: "DISPOSE",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMessage",
            toString: i
        },
        INIT: {
            _hx_name: "INIT",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMessage",
            toString: i
        },
        PAUSE: {
            _hx_name: "PAUSE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMessage",
            toString: i
        },
        RESUME: {
            _hx_name: "RESUME",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EMessage",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 4,
                value: t,
                __enum__: "awe6.interfaces.EMessage",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    kt.__constructs__ = [kt.DISPOSE, kt.INIT, kt.PAUSE, kt.RESUME, kt.SUB_TYPE];
    var Pt = A["awe6.interfaces.EMouseButton"] = {
        __ename__: "awe6.interfaces.EMouseButton",
        __constructs__: null,
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: i
        },
        MIDDLE: {
            _hx_name: "MIDDLE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: i
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: i
        }
    };
    Pt.__constructs__ = [Pt.LEFT, Pt.MIDDLE, Pt.RIGHT];
    var Nt = A["awe6.interfaces.EMouseCursor"] = {
        __ename__: "awe6.interfaces.EMouseCursor",
        __constructs__: null,
        ARROW: {
            _hx_name: "ARROW",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: i
        },
        AUTO: {
            _hx_name: "AUTO",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: i
        },
        BUTTON: {
            _hx_name: "BUTTON",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: i
        },
        HAND: {
            _hx_name: "HAND",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: i
        },
        IBEAM: {
            _hx_name: "IBEAM",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EMouseCursor",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Nt.__constructs__ = [Nt.ARROW, Nt.AUTO, Nt.BUTTON, Nt.HAND, Nt.IBEAM, Nt.SUB_TYPE];
    var Mt = A["awe6.interfaces.EOverlayButton"] = {
        __ename__: "awe6.interfaces.EOverlayButton",
        __constructs__: null,
        BACK: {
            _hx_name: "BACK",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: i
        },
        MUTE: {
            _hx_name: "MUTE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: i
        },
        UNMUTE: {
            _hx_name: "UNMUTE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: i
        },
        PAUSE: {
            _hx_name: "PAUSE",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: i
        },
        UNPAUSE: {
            _hx_name: "UNPAUSE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EOverlayButton",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Mt.__constructs__ = [Mt.BACK, Mt.MUTE, Mt.UNMUTE, Mt.PAUSE, Mt.UNPAUSE, Mt.SUB_TYPE];
    var Dt = A["awe6.interfaces.EScene"] = {
        __ename__: "awe6.interfaces.EScene",
        __constructs__: null,
        SPLASH: {
            _hx_name: "SPLASH",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        INTRO: {
            _hx_name: "INTRO",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SELECT_SESSION: {
            _hx_name: "SELECT_SESSION",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SELECT_STORY: {
            _hx_name: "SELECT_STORY",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SELECT_LEVEL: {
            _hx_name: "SELECT_LEVEL",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        INSTRUCTIONS: {
            _hx_name: "INSTRUCTIONS",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SETTINGS: {
            _hx_name: "SETTINGS",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        MENU: {
            _hx_name: "MENU",
            _hx_index: 7,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        AVATAR: {
            _hx_name: "AVATAR",
            _hx_index: 8,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SHOP: {
            _hx_name: "SHOP",
            _hx_index: 9,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        REWARDS: {
            _hx_name: "REWARDS",
            _hx_index: 10,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        LEADERBOARD: {
            _hx_name: "LEADERBOARD",
            _hx_index: 11,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        GAME: {
            _hx_name: "GAME",
            _hx_index: 12,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        INTERSTITIAL: {
            _hx_name: "INTERSTITIAL",
            _hx_index: 13,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        CINEMATIC: {
            _hx_name: "CINEMATIC",
            _hx_index: 14,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        RESULTS: {
            _hx_name: "RESULTS",
            _hx_index: 15,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        EXIT: {
            _hx_name: "EXIT",
            _hx_index: 16,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        TEST: {
            _hx_name: "TEST",
            _hx_index: 17,
            __enum__: "awe6.interfaces.EScene",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 18,
                value: t,
                __enum__: "awe6.interfaces.EScene",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Dt.__constructs__ = [Dt.SPLASH, Dt.INTRO, Dt.SELECT_SESSION, Dt.SELECT_STORY, Dt.SELECT_LEVEL, Dt.INSTRUCTIONS, Dt.SETTINGS, Dt.MENU, Dt.AVATAR, Dt.SHOP, Dt.REWARDS, Dt.LEADERBOARD, Dt.GAME, Dt.INTERSTITIAL, Dt.CINEMATIC, Dt.RESULTS, Dt.EXIT, Dt.TEST, Dt.SUB_TYPE];
    var Lt = A["awe6.interfaces.ETextAlign"] = {
        __ename__: "awe6.interfaces.ETextAlign",
        __constructs__: null,
        JUSTIFY: {
            _hx_name: "JUSTIFY",
            _hx_index: 0,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: i
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 1,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: i
        },
        CENTER: {
            _hx_name: "CENTER",
            _hx_index: 2,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: i
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 3,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: i
        }
    };
    Lt.__constructs__ = [Lt.JUSTIFY, Lt.LEFT, Lt.CENTER, Lt.RIGHT];
    var Bt = A["awe6.interfaces.ETextStyle"] = {
        __ename__: "awe6.interfaces.ETextStyle",
        __constructs__: null,
        BUTTON: {
            _hx_name: "BUTTON",
            _hx_index: 0,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        BODY: {
            _hx_name: "BODY",
            _hx_index: 1,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        HEADLINE: {
            _hx_name: "HEADLINE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        SUBHEAD: {
            _hx_name: "SUBHEAD",
            _hx_index: 3,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        SMALLPRINT: {
            _hx_name: "SMALLPRINT",
            _hx_index: 4,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        OVERSIZED: {
            _hx_name: "OVERSIZED",
            _hx_index: 5,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: i
        },
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 6,
                value: t,
                __enum__: "awe6.interfaces.ETextStyle",
                toString: i
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };

    function Ot(t) {
        this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, y.call(this, t, null, this._context)
    }

    function Ft(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
    }

    function Gt(t) {
        this._audio = t.audio, Ot.call(this, t)
    }

    function Vt(t) {
        ot.call(this, t)
    }
    Bt.__constructs__ = [Bt.BUTTON, Bt.BODY, Bt.HEADLINE, Bt.SUBHEAD, Bt.SMALLPRINT, Bt.OVERSIZED, Bt.SUB_TYPE], (e["cbctaf.AEntity"] = Ot).__name__ = "cbctaf.AEntity", Ot.__super__ = y, Ot.prototype = t(y.prototype, {
        __class__: Ot
    }), (e["cbctaf.AVo"] = Ft).__name__ = "cbctaf.AVo", Ft.prototype = {
        __class__: Ft
    }, (e["cbctaf.AccessibilityManager"] = Gt).__name__ = "cbctaf.AccessibilityManager", Gt.__super__ = Ot, Gt.prototype = t(Ot.prototype, {
        get__isApi: function() {
            return null != this._api
        },
        setAudioIsMute: function(t) {
            this.get__isApi() && this._api.setAudioIsMute(t)
        },
        getAdjustedAudioEffectsVolume: function() {
            return this._state.data.audioEffectsVolume / .8
        },
        getAdjustedAudioMusicVolume: function() {
            return this._state.data.audioMusicVolume / .8
        },
        getAdjustedAudioVoiceVolume: function() {
            return this._state.data.audioVoiceVolume / .8
        },
        getAdjustedVisualsIntensity: function() {
            return this._state.data.visualsIntensity / .8
        },
        getAdjustedVisualsContrast: function(t) {
            null == t && (t = this._state.data.visualsContrast);
            t -= .5;
            return t < .5 && (t *= .5), 1 + t
        },
        getAdjustedGameplayChallenge: function() {
            return (this._state.data.gameplayChallenge / .8 + 1) / 2
        },
        _init: function() {
            this._stageCanvas = this._factory._context.getStage().canvas, this._supers = {
                audioStart: ns(h = this._kernel.audio, h.start),
                audioTransform: ns(h = this._kernel.audio, h.transform)
            }, this._state = {
                wasMute: !1,
                data: this._createDefaultData(),
                isSkip: !1,
                isFirstUpdate: !0,
                isModalVisible: !1,
                buttons: [],
                buttonsCache: [],
                buttonHighlighted: null,
                buttonActivateDelayDuration: 0
            }, this._api = window.parent.parent.parent.gameAccessibility, this.get__isApi() || (this._api = window.parent.gameAccessibility), this.get__isApi() || (this._api = window.gameAccessibility), this.get__isApi() && (this._api.register(window, {
                show: ns(this, this._onApiControlPanelShow),
                close: ns(this, this._onApiControlPanelClose),
                update: ns(this, this._onApiUpdate)
            }), this._api.update(), this._state.isFirstUpdate = !1), this._doOverrides(), Ot.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t), this._state.buttonActivateDelayDuration -= t, this._buttonsInputs()
        },
        _doOverrides: function() {
            this._kernel.audio.start = ns(this, this._overrideAudioStart), this._kernel.audio.transform = ns(this, this._overrideAudioTransform)
        },
        _overrideAudioStart: function(t, e, i, s, n, _, a, r) {
            if (null == a && (a = !1), null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), null != e) switch (e._hx_index) {
                case 0:
                case 1:
                case 2:
                    n *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    n *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioStart(t, e, i, s, n, _, a, r)
        },
        _overrideAudioTransform: function(t, e, i, s, n) {
            if (null == n && (n = !1), null == s && (s = 0), null == i && (i = 1), !this._state.isSkip && null != e) switch (e._hx_index) {
                case 0:
                case 1:
                case 2:
                    i *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    i *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioTransform(t, e, i, s, n)
        },
        _onApiControlPanelShow: function() {
            this._state.isModalVisible = !0, createjs.Ticker.setPaused(!0), this._state.wasMute = this._audio.isMute, this._audio.set_isMute(!0)
        },
        _onApiControlPanelClose: function() {
            this._state.isModalVisible = !1, createjs.Ticker.setPaused(!1), this._audio.set_isMute(this._state.wasMute)
        },
        _onApiUpdate: function(t) {
            var e, i;
            t.dateUpdated = C.strDate(R.string(t.dateUpdated)), t.version <= this._state.data.version || (t.audioIsMute != this._state.data.audioIsMute && (di.trace("Audio IsMute Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 283,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.wasMute = t.audioIsMute, this._state.isFirstUpdate && this._audio.set_isMute(t.audioIsMute)), t.audioEffectsVolume != this._state.data.audioEffectsVolume && (di.trace("Audio Effects Volume Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 293,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = 0 == this._state.data.audioEffectsVolume, e = t.audioEffectsVolume * (i ? .5 : 1 / this._state.data.audioEffectsVolume), this._state.isSkip = !0, this._audio.transform(null, At.EFFECTS, e, null, !i), this._audio.transform(null, At.INTERFACE, e, null, !i), this._audio.transform(null, At.DEFAULT, e, null, !i), this._state.isSkip = !1), t.audioMusicVolume != this._state.data.audioMusicVolume && (di.trace("Audio Music Volume Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 304,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = 0 == this._state.data.audioMusicVolume, e = t.audioMusicVolume * (i ? .5 : 1 / this._state.data.audioMusicVolume), this._state.isSkip = !0, this._audio.transform(null, At.MUSIC, e, null, !i), this._state.isSkip = !1), t.audioVoiceVolume != this._state.data.audioVoiceVolume && di.trace("Audio Voice Volume Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 311,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesIsDisabled != this._state.data.subtitlesIsDisabled && di.trace("Subtitles IsDisabled Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 312,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesSize != this._state.data.subtitlesSize && di.trace("Subtitles Size Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 313,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsIntensity != this._state.data.visualsIntensity && di.trace("Visuals Intensity Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 314,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsContrast != this._state.data.visualsContrast && (di.trace("Visuals Contrast Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 317,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = this.getAdjustedVisualsContrast(t.visualsContrast), this._stageCanvas.style.filter = "contrast(" + i + ")"), t.gameplayChallenge != this._state.data.gameplayChallenge && di.trace("Gameplay Challenge Changed", {
                fileName: "src/cbctaf/AccessibilityManager.hx",
                lineNumber: 321,
                className: "cbctaf.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.data = t)
        },
        buttonsRegister: function(i, s, t) {
            null == t && (t = 2e3);
            var n = this;
            this._state.buttonsCache = this._state.buttons, this._state.buttonActivateDelayDuration = t, null != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = null, this._state.buttons = [], null != i && fi.delay(function() {
                var t = i,
                    e = i.get_agenda();
                n._state.buttons = t.getEntitiesByClass(Te, e, !0), !Fi.__implements(i, F) || null != (e = n._kernel.overlay._buttonPause) && n._state.buttons.push(e), n._state.buttons.sort(function(t, e) {
                    return Math.round(1e3 * (t.getAccessibilityPosition().y - e.getAccessibilityPosition().y))
                }), 0 < n._state.buttons.length && (n._state.buttonHighlighted = n._state.buttons[0]), null != s && 0 <= n._state.buttons.indexOf(s) && (n._state.buttonHighlighted = s)
            }, 1)
        },
        buttonsRevert: function() {
            null != this._state.buttonsCache && (this._state.buttons = this._state.buttonsCache), (this._state.buttonsCache = null) != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), 0 < this._state.buttons.length && (this._state.buttonHighlighted = this._state.buttons[0])
        },
        _buttonsInputs: function() {
            if (0 != this._state.buttons.length) {
                var t = this._kernel.inputs.keyboard.getIsKeyPress(It.UP) || this._kernel.inputs.keyboard.getIsKeyPress(It.W),
                    e = this._kernel.inputs.keyboard.getIsKeyPress(It.RIGHT) || this._kernel.inputs.keyboard.getIsKeyPress(It.D),
                    i = this._kernel.inputs.keyboard.getIsKeyPress(It.DOWN) || this._kernel.inputs.keyboard.getIsKeyPress(It.S),
                    s = this._kernel.inputs.keyboard.getIsKeyPress(It.LEFT) || this._kernel.inputs.keyboard.getIsKeyPress(It.A),
                    n = this._state.buttonActivateDelayDuration <= 0 && (this._kernel.inputs.keyboard.getIsKeyPress(It.ENTER) || this._kernel.inputs.keyboard.getIsKeyPress(It.SPACE));
                if (t || e || i || s) {
                    if (!this._state.buttonHighlighted.get_isHighlighted()) return void this._state.buttonHighlighted.highlight(!0);
                    if (this._state.buttons.length <= 1) return;
                    for (var _ = s ? .51 : i ? .26 : e ? .01 : t ? .76 : 0, a = this._state.buttonHighlighted.getAccessibilityPosition(), r = [], o = 0, h = this._state.buttons; o < h.length;) {
                        var c = h[o];
                        ++o, c != this._state.buttonHighlighted && c.get_isHighlightable() && r.push(c)
                    }
                    for (var l = r, u = new Array(l.length), r = 0, o = l.length; r < o;) {
                        var d = r++,
                            p = l[d],
                            g = p.getAccessibilityPosition(),
                            f = a.x - g.x,
                            m = a.y - g.y,
                            g = Math.sqrt(f * f + m * m),
                            f = (Math.atan2(m, f) / (2 * Math.PI) - _ + 10) % 1;
                        .5 < f && (f = 1 - f);
                        g = f - g / 1e4;
                        u[d] = {
                            button: p,
                            sort: g
                        }
                    }
                    t = u;
                    t.sort(function(t, e) {
                        return Math.round(1e4 * (e.sort - t.sort))
                    }), .25 < t[0].sort && (this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = t[0].button), this._state.buttonHighlighted.highlight(!0)
                }
                n && this._state.buttonHighlighted.onClick()
            }
        },
        _createDefaultData: function() {
            return {
                version: 0,
                dateUpdated: new Date,
                audioIsMute: !1,
                audioEffectsVolume: .8,
                audioMusicVolume: .8,
                audioVoiceVolume: .8,
                subtitlesIsDisabled: !1,
                subtitlesSize: .5,
                visualsIntensity: .8,
                visualsContrast: .5,
                gameplayChallenge: .8
            }
        },
        __class__: Gt
    }), (e["cbctaf.AssetManager"] = Vt).__name__ = "cbctaf.AssetManager", Vt.__super__ = ot, Vt.prototype = t(ot.prototype, {
        _init: function() {
            ot.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(Ht.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(Ht.OVERLAY_PAUSE_OVER)
        },
        get_buttonOver: function() {
            return this._createView(Ht.BUTTON_OVER)
        },
        get_buttonUp: function() {
            return this._createView(Ht.BUTTON_UP)
        },
        get_buttonSmallOver: function() {
            return this._createView(Ht.BUTTON_SMALL_OVER)
        },
        get_buttonSmallUp: function() {
            return this._createView(Ht.BUTTON_SMALL_UP)
        },
        _createView: function(t) {
            var e, i = new createjs.Container,
                s = new createjs.Bitmap(this.getAsset("assets/gui/Buttons.png"));
            switch (t._hx_index) {
                case 0:
                    e = new createjs.Rectangle(0, 0, 200, 65);
                    break;
                case 1:
                    e = new createjs.Rectangle(200, 0, 200, 65);
                    break;
                case 2:
                    e = new createjs.Rectangle(400, 65, 100, 30);
                    break;
                case 3:
                    e = new createjs.Rectangle(400, 95, 100, 30);
                    break;
                case 4:
                    e = new createjs.Rectangle(0, 65, 65, 65);
                    break;
                case 5:
                    e = new createjs.Rectangle(65, 65, 65, 65);
                    break;
                case 6:
                    e = new createjs.Rectangle(130, 65, 65, 65);
                    break;
                case 7:
                    e = new createjs.Rectangle(195, 65, 65, 65);
                    break;
                case 8:
                    e = new createjs.Rectangle(400, 0, 50, 50);
                    break;
                case 9:
                    e = new createjs.Rectangle(450, 0, 50, 50)
            }
            return s.sourceRect = e, s.cache(0, 0, s.sourceRect.width, s.sourceRect.height), i.addChild(s), new wt(this._kernel, i)
        },
        __class__: Vt
    });
    var Ht = A["cbctaf.EAsset"] = {
        __ename__: "cbctaf.EAsset",
        __constructs__: null,
        BUTTON_UP: {
            _hx_name: "BUTTON_UP",
            _hx_index: 0,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_OVER: {
            _hx_name: "BUTTON_OVER",
            _hx_index: 1,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_SMALL_UP: {
            _hx_name: "BUTTON_SMALL_UP",
            _hx_index: 2,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_SMALL_OVER: {
            _hx_name: "BUTTON_SMALL_OVER",
            _hx_index: 3,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_TWITTER_UP: {
            _hx_name: "BUTTON_TWITTER_UP",
            _hx_index: 4,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_TWITTER_OVER: {
            _hx_name: "BUTTON_TWITTER_OVER",
            _hx_index: 5,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_FACEBOOK_UP: {
            _hx_name: "BUTTON_FACEBOOK_UP",
            _hx_index: 6,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        BUTTON_FACEBOOK_OVER: {
            _hx_name: "BUTTON_FACEBOOK_OVER",
            _hx_index: 7,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        OVERLAY_PAUSE_UP: {
            _hx_name: "OVERLAY_PAUSE_UP",
            _hx_index: 8,
            __enum__: "cbctaf.EAsset",
            toString: i
        },
        OVERLAY_PAUSE_OVER: {
            _hx_name: "OVERLAY_PAUSE_OVER",
            _hx_index: 9,
            __enum__: "cbctaf.EAsset",
            toString: i
        }
    };

    function Jt(t, e, i) {
        this.COLOR_YELLOW = 16776960, this.COLOR_GREY = 5789784, this.COLOR_BLACK = 0, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_PANEL_TITLE = Bt.SUB_TYPE("PANEL_TITLE"), this.TEXTSTYLE_PANEL_STATS = Bt.SUB_TYPE("PANEL_STATS"), this.TEXTSTYLE_PANEL_MESSAGE = Bt.SUB_TYPE("PANEL_MESSAGE"), this.TEXTSTYLE_HUD_TITLE = Bt.SUB_TYPE("HUD_TITLE"), this.TEXTSTYLE_HUD_PROMPT = Bt.SUB_TYPE("HUD_PROMPT"), this.TEXTSTYLE_HUD_CURRENT = Bt.SUB_TYPE("HUD_CURRENT"), this.TEXTSTYLE_HUD_COINS = Bt.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_ALERT = Bt.SUB_TYPE("HUD_ALERT"), lt.call(this, t, e, i)
    }
    Ht.__constructs__ = [Ht.BUTTON_UP, Ht.BUTTON_OVER, Ht.BUTTON_SMALL_UP, Ht.BUTTON_SMALL_OVER, Ht.BUTTON_TWITTER_UP, Ht.BUTTON_TWITTER_OVER, Ht.BUTTON_FACEBOOK_UP, Ht.BUTTON_FACEBOOK_OVER, Ht.OVERLAY_PAUSE_UP, Ht.OVERLAY_PAUSE_OVER], (e["cbctaf.Factory"] = Jt).__name__ = "cbctaf.Factory", Jt.__super__ = lt, Jt.prototype = t(lt.prototype, {
        _configurer: function(t) {
            null == t && (t = !1), t && (this.id = "cbctaf", t = "1", null != pi.getString("revision") && (t = pi.getString("revision").split("\r\n")[0]), this.version = "1.3." + t, this.author = "Hypersurge", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = Ct.DISABLED, this.bgColor = 0, this.startingSceneType = Dt.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0, this.keyNext = null)
        },
        _launchKernel: function() {
            lt.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId"))
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new Vt(this._kernel), this.accessibility = new Gt(this._kernel)), this._assets
        },
        createLogger: function() {
            var t = R.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != t ? new Kt(this._kernel, t) : lt.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            var t = new Ke(this._kernel);
            return t.addEntity(this.accessibility, null, !0, 90), t
        },
        createPreloader: function() {
            return new zt(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            switch (this._kernel.log("scene: " + R.string(t)), t._hx_index) {
                case 1:
                    return new ai(this._kernel, t);
                case 4:
                    return new ci(this._kernel, t);
                case 5:
                    return new _i(this._kernel, t);
                case 7:
                    return new ri(this._kernel, t);
                case 8:
                    return new si(this._kernel, t);
                case 9:
                    return new li(this._kernel, t);
                case 12:
                    return new ni(this._kernel, t);
                case 15:
                    return new oi(this._kernel, t)
            }
            return lt.prototype.createScene.call(this, t)
        },
        createSceneTransition: function(t, e) {
            return new hi(this._kernel)
        },
        createSession: function(t) {
            return new Wt(this._kernel, t)
        },
        createTextStyle: function(t) {
            null == t && (t = Bt.BODY);
            var e, i = this._kernel.getConfig("settings.font.name");
            if (null == t) e = new H(i, 12, 8421504);
            else switch (t._hx_index) {
                case 0:
                    e = new H(i, 18, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, []);
                    break;
                case 1:
                    e = new H(i, 16, this.COLOR_BLACK, !1, !1, Lt.LEFT, 0, 18, 0, []);
                    break;
                case 2:
                    e = new H(i, 22, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, []);
                    break;
                case 3:
                    e = new H(i, 22, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                    break;
                case 4:
                    e = new H("Arial", 11, this.COLOR_GREY, !1, !1, Lt.CENTER, 0, 0, 0, []);
                    break;
                case 5:
                    e = new H(i, 44, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                    break;
                case 6:
                    switch (t.value) {
                        case "HUD_ALERT":
                            e = new H(i, 50, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, [0, 4]);
                            break;
                        case "HUD_COINS":
                            e = new H(i, 22, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                            break;
                        case "HUD_CURRENT":
                            e = new H(i, 45, this.COLOR_WHITE, !1, !1, Lt.LEFT, 0, 0, 0, []);
                            break;
                        case "HUD_PROMPT":
                            e = new H(i, 18, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_SCORE":
                            e = new H(i, 22, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, []);
                            break;
                        case "HUD_SKILL":
                            e = new H(i, 18, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_TIMING":
                            e = new H(i, 14, this.COLOR_YELLOW, !1, !1, Lt.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_TITLE":
                            e = new H(i, 12, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_MESSAGE":
                            e = new H(i, 12, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, []);
                            break;
                        case "PANEL_STATS":
                            e = new H(i, 12, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_TITLE":
                            e = new H(i, 19, this.COLOR_WHITE, !1, !1, Lt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PRELOADER":
                            e = new H(i, 14, this.COLOR_WHITE, !1, !1, Lt.CENTER, 0, 0, 0, []);
                            break;
                        default:
                            e = null
                    }
            }
            return e
        },
        getBackSceneType: function(t) {
            switch (t._hx_index) {
                case 4:
                    return Dt.AVATAR;
                case 12:
                    return Dt.SELECT_LEVEL;
                case 5:
                case 8:
                case 9:
                case 13:
                case 15:
                    return Dt.MENU
            }
            return lt.prototype.getBackSceneType.call(this, t)
        },
        getNextSceneType: function(t) {
            switch (t._hx_index) {
                case 1:
                    return Dt.MENU;
                case 4:
                    return Dt.GAME;
                case 5:
                case 7:
                    return Dt.AVATAR;
                case 8:
                case 9:
                    return Dt.SELECT_LEVEL;
                case 12:
                    return Dt.RESULTS;
                case 13:
                case 15:
                    return Dt.SHOP
            }
            return lt.prototype.getNextSceneType.call(this, t)
        },
        __class__: Jt
    });
    var Kt = function(t, e) {
        if (this._kernel = t, this._id = e, this._factory = this._kernel.factory, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
            this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), di.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "src/cbctaf/LoggerGoogleAnalytics.hx",
                lineNumber: 40,
                className: "cbctaf.LoggerGoogleAnalytics",
                methodName: "new"
            })
        } catch (t) {
            this._isTrackerEnabled = !1, di.trace("Google Analytics failed with property ID " + this._id, {
                fileName: "src/cbctaf/LoggerGoogleAnalytics.hx",
                lineNumber: 45,
                className: "cbctaf.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };

    function jt() {}(e["cbctaf.LoggerGoogleAnalytics"] = Kt).__name__ = "cbctaf.LoggerGoogleAnalytics", Kt.__interfaces__ = [g], Kt.prototype = {
        log: function(t) {
            C.substr(R.string(t), 0, 25);
            t = R.string(t).split(": ");
            this._isTrackerEnabled ? this._gaLib("send", {
                hitType: "event",
                eventCategory: t[0],
                eventAction: t[1],
                eventLabel: t[2]
            }) : di.trace("Logger:" + R.string([t[0], t[1], t[2]]), {
                fileName: "src/cbctaf/LoggerGoogleAnalytics.hx",
                lineNumber: 65,
                className: "cbctaf.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: Kt
    }, (e["cbctaf.Main"] = jt).__name__ = "cbctaf.Main", jt.main = function() {
        var t = window.document.getElementById("gameCanvas"),
            e = jt.getParams().h.lang;
        null != e && (i = "assets/__Config_" + e + ".xml", t.setAttribute("config", i));
        var i = new createjs.Stage(t),
            t = new createjs.Container;
        i.addChild(t), jt.factory = new Jt(t, !1, pi.getString("config"))
    }, jt.getParams = function() {
        for (var t = C.substr(u.location.search, 1, null), e = new Ii, i = 0, s = new d("[&;]", "g").split(t); i < s.length;) {
            var n = s[i];
            ++i;
            var _ = n.split("=");
            _.length < 2 || (n = _.shift(), n = decodeURIComponent(n.split("+").join(" ")), _ = _.join("="), _ = decodeURIComponent(_.split("+").join(" ")), e.h[n] = _)
        }
        return e
    };
    var zt = function(t, e, i) {
        ft.call(this, t, e, i)
    };
    (e["cbctaf.Preloader"] = zt).__name__ = "cbctaf.Preloader", zt.__super__ = ft, zt.prototype = t(ft.prototype, {
        _init: function() {
            this._factory = this._kernel.factory, this._proprietaryAudioFormat = "m4a";
            var t = new createjs.Bitmap("assets/__PreloaderBg.png");
            ft.prototype._init.call(this);
            this._bg = new createjs.Shape, this._bg.graphics.beginFill("#404040"), this._bg.graphics.drawRoundRect(-2, -2, 204, 14, 4), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#ffffff"), this._fg.graphics.drawRoundRect(0, 0, 200, 10, 4), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - 200), this._bg.y = this._fg.y = this._kernel.factory.height - 20 - 10 - 2, this._context.addChild(t), this._context.addChild(this._bg), this._context.addChild(this._fg)
        },
        _updater: function(t) {
            null == t && (t = 0), ft.prototype._updater.call(this, t), this._fg.scaleX = this.get_progress()
        },
        _showAudioHoldMessage: function() {
            var t = new Ze(this._kernel, this._kernel.factory.width, 20, R.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(Bt.SUB_TYPE("PRELOADER")));
            t.setPosition(0, this._bg.y - 6), this.get_view().addChild(t.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        __class__: zt
    });
    var Wt = function(t, e) {
        xt.call(this, t, e)
    };
    (e["cbctaf.Session"] = Wt).__name__ = "cbctaf.Session", Wt.__super__ = xt, Wt.prototype = t(xt.prototype, {
        _init: function() {
            this._version = 2, xt.prototype._init.call(this)
        },
        _getter: function() {
            xt.prototype._getter.call(this), this._upgradeMovementUnitA = this._getValidatedInteger(this._data.upgradeMovementUnitA), this._upgradeTimingUnitA = this._getValidatedInteger(this._data.upgradeTimingUnitA), this._upgradePowerUnitA = this._getValidatedInteger(this._data.upgradePowerUnitA), this._upgradeStaminaUnitA = this._getValidatedInteger(this._data.upgradeStaminaUnitA), this._medalLevel1UnitA = this._getValidatedInteger(this._data.medalLevel1UnitA), this._medalLevel2UnitA = this._getValidatedInteger(this._data.medalLevel2UnitA), this._medalLevel3UnitA = this._getValidatedInteger(this._data.medalLevel3UnitA), this._coinsUnitA = this._getValidatedInteger(this._data.coinsUnitA), this._upgradeMovementUnitB = this._getValidatedInteger(this._data.upgradeMovementUnitB), this._upgradeTimingUnitB = this._getValidatedInteger(this._data.upgradeTimingUnitB), this._upgradePowerUnitB = this._getValidatedInteger(this._data.upgradePowerUnitB), this._upgradeStaminaUnitB = this._getValidatedInteger(this._data.upgradeStaminaUnitB), this._medalLevel1UnitB = this._getValidatedInteger(this._data.medalLevel1UnitB), this._medalLevel2UnitB = this._getValidatedInteger(this._data.medalLevel2UnitB), this._medalLevel3UnitB = this._getValidatedInteger(this._data.medalLevel3UnitB), this._coinsUnitB = this._getValidatedInteger(this._data.coinsUnitB)
        },
        _getValidatedInteger: function(t) {
            return null == t || isNaN(t) ? 0 : t
        },
        _setter: function() {
            xt.prototype._setter.call(this), this._data.upgradeMovementUnitA = this._upgradeMovementUnitA, this._data.upgradeTimingUnitA = this._upgradeTimingUnitA, this._data.upgradePowerUnitA = this._upgradePowerUnitA, this._data.upgradeStaminaUnitA = this._upgradeStaminaUnitA, this._data.medalLevel1UnitA = this._medalLevel1UnitA, this._data.medalLevel2UnitA = this._medalLevel2UnitA, this._data.medalLevel3UnitA = this._medalLevel3UnitA, this._data.coinsUnitA = this._coinsUnitA, this._data.upgradeMovementUnitB = this._upgradeMovementUnitB, this._data.upgradeTimingUnitB = this._upgradeTimingUnitB, this._data.upgradePowerUnitB = this._upgradePowerUnitB, this._data.upgradeStaminaUnitB = this._upgradeStaminaUnitB, this._data.medalLevel1UnitB = this._medalLevel1UnitB, this._data.medalLevel2UnitB = this._medalLevel2UnitB, this._data.medalLevel3UnitB = this._medalLevel3UnitB, this._data.coinsUnitB = this._coinsUnitB
        },
        _resetter: function() {
            xt.prototype._resetter.call(this), this.cache = new Xt(this._kernel), this.resetUnit(_e.UNIT_A), this.resetUnit(_e.UNIT_B)
        },
        resetUnit: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._upgradeMovementUnitA = 0, this._upgradeTimingUnitA = 0, this._upgradePowerUnitA = 0, this._upgradeStaminaUnitA = 0, this._medalLevel1UnitA = 0, this._medalLevel2UnitA = 0, this._medalLevel3UnitA = 0, this._coinsUnitA = 0;
                    break;
                case 1:
                    this._upgradeMovementUnitB = 0, this._upgradeTimingUnitB = 0, this._upgradePowerUnitB = 0, this._upgradeStaminaUnitB = 0, this._medalLevel1UnitB = 0, this._medalLevel2UnitB = 0, this._medalLevel3UnitB = 0, this._coinsUnitB = 0
            }
        },
        setCoins: function(t, e) {
            switch (null == t && (t = this.cache.unitType), t._hx_index) {
                case 0:
                    return this._coinsUnitA = e;
                case 1:
                    return this._coinsUnitB = e
            }
        },
        getCoins: function(t) {
            var e;
            switch (null == t && (t = this.cache.unitType), t._hx_index) {
                case 0:
                    e = this._coinsUnitA;
                    break;
                case 1:
                    e = this._coinsUnitB
            }
            return 0 | Math.min(999999, e)
        },
        setMedal: function(t, e, i) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            this._medalLevel1UnitA = 0 | Math.max(this._medalLevel1UnitA, i._hx_index);
                            break;
                        case 1:
                            this._medalLevel2UnitA = 0 | Math.max(this._medalLevel2UnitA, i._hx_index);
                            break;
                        case 2:
                            this._medalLevel3UnitA = 0 | Math.max(this._medalLevel3UnitA, i._hx_index)
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            this._medalLevel1UnitB = 0 | Math.max(this._medalLevel1UnitB, i._hx_index);
                            break;
                        case 1:
                            this._medalLevel2UnitB = 0 | Math.max(this._medalLevel2UnitB, i._hx_index);
                            break;
                        case 2:
                            this._medalLevel3UnitB = 0 | Math.max(this._medalLevel3UnitB, i._hx_index)
                    }
            }
        },
        getMedal: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            return I.createEnumIndex(ie, this._medalLevel1UnitA, null);
                        case 1:
                            return I.createEnumIndex(ie, this._medalLevel2UnitA, null);
                        case 2:
                            return I.createEnumIndex(ie, this._medalLevel3UnitA, null)
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return I.createEnumIndex(ie, this._medalLevel1UnitB, null);
                        case 1:
                            return I.createEnumIndex(ie, this._medalLevel2UnitB, null);
                        case 2:
                            return I.createEnumIndex(ie, this._medalLevel3UnitB, null)
                    }
            }
        },
        setUpgrade: function(t, e, i) {
            switch (null == e && (e = this.cache.unitType), i < 0 && (i = 0), 8 < i && (i = 8), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            this._upgradeMovementUnitA = i;
                            break;
                        case 1:
                            this._upgradeTimingUnitA = i;
                            break;
                        case 2:
                            this._upgradePowerUnitA = i;
                            break;
                        case 3:
                            this._upgradeStaminaUnitA = i
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            this._upgradeMovementUnitB = i;
                            break;
                        case 1:
                            this._upgradeTimingUnitB = i;
                            break;
                        case 2:
                            this._upgradePowerUnitB = i;
                            break;
                        case 3:
                            this._upgradeStaminaUnitB = i
                    }
            }
        },
        getUpgrade: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            return this._upgradeMovementUnitA;
                        case 1:
                            return this._upgradeTimingUnitA;
                        case 2:
                            return this._upgradePowerUnitA;
                        case 3:
                            return this._upgradeStaminaUnitA
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return this._upgradeMovementUnitB;
                        case 1:
                            return this._upgradeTimingUnitB;
                        case 2:
                            return this._upgradePowerUnitB;
                        case 3:
                            return this._upgradeStaminaUnitB
                    }
            }
        },
        getUpgradeTitle: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = "gui.upgrades.movement";
                    break;
                case 1:
                    e = "gui.upgrades.timing";
                    break;
                case 2:
                    e = "gui.upgrades.power";
                    break;
                case 3:
                    e = "gui.upgrades.stamina"
            }
            return R.string(this._kernel.getConfig(e)).toUpperCase()
        },
        getMedalTitle: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = "gui.medals.none";
                    break;
                case 1:
                    e = "gui.medals.bronze";
                    break;
                case 2:
                    e = "gui.medals.silver";
                    break;
                case 3:
                    e = "gui.medals.gold"
            }
            return R.string(this._kernel.getConfig(e)).toUpperCase()
        },
        setIsTester: function(t) {
            this._isTester = t
        },
        get_isTester: function() {
            return !!this._kernel.isDebug || this._isTester
        },
        getMedalFromScore: function(t, e, i, s, n) {
            if (e) {
                if (t <= i) return ie.MEDAL_GOLD;
                if (t <= s) return ie.MEDAL_SILVER;
                if (t <= n) return ie.MEDAL_BRONZE
            } else {
                if (i <= t) return ie.MEDAL_GOLD;
                if (s <= t) return ie.MEDAL_SILVER;
                if (n <= t) return ie.MEDAL_BRONZE
            }
            return ie.MEDAL_NONE
        },
        __class__: Wt
    });
    var Xt = function(t) {
        this.retries = 0, this._kernel = t, this.totalPlays = 0, this.debugMessage = "", this.unitType = _e.UNIT_A, this.levelType = te.LEVEL_1, this.reset()
    };

    function Qt(t, e, i, s) {
        this._applauseVolume = .25, this.levelVo = e, this.hud = i, this._callbackScore = s, this.vo = new me(t, this.levelVo.locationType, this.levelVo.sportType), Ot.call(this, t)
    }(e["cbctaf._Session._HelperCache"] = Xt).__name__ = "cbctaf._Session._HelperCache", Xt.prototype = {
        reset: function() {
            this.medalType = ie.MEDAL_NONE
        },
        __class__: Xt
    }, (e["cbctaf.game.ALocation"] = Qt).__name__ = "cbctaf.game.ALocation", Qt.__super__ = Ot, Qt.prototype = t(Ot.prototype, {
        _getRenderables: function() {
            for (var t = [], e = 0, i = this.getEntitiesByClass(Yt); e < i.length;) {
                var s = i[e];
                ++e, s.isRendered && t.push(s)
            }
            return t
        },
        _getCameraTarget: function() {
            var t = this._kernel.inputs.mouse;
            return {
                x: t.relativeX * this.vo.width,
                y: 0,
                z: (1 - Math.pow(t.relativeY, .25)) * this.vo.height
            }
        },
        setScore: function(t) {
            this._callbackScore(t)
        },
        _init: function() {
            Ot.prototype._init.call(this), this.addEntity(this.camera = new qt(this._kernel, this.vo.width, 0, this.vo.height)), this.addEntity(this._renderer = new ye(this._kernel, this, this._kernel.factory.width, this._kernel.factory.height, ns(this, this._getRenderables)), null, !0), this._kernel.audio.start("Applause", At.EFFECTS, -1, 0, .25), this._kernel.audio.start("GameStart", At.EFFECTS, 1, 0, .75), this._createAllScenery()
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t);
            t = this._getCameraTarget();
            this.camera.setPosition(t.x, t.y, t.z);
            t = t.x / this.vo.width;
            this._applauseVolume = .9 * this._applauseVolume + .1 * (1 < t ? 1 : t < .125 ? .125 : t), this._kernel.audio.transform("Applause", At.EFFECTS, this._applauseVolume)
        },
        _disposer: function() {
            this._kernel.audio.stop("Applause", At.EFFECTS), Ot.prototype._disposer.call(this)
        },
        _createAllScenery: function() {},
        _createScenery: function(t, e, i, s) {
            null == s && (s = 0), this.addEntity(new xe(this._kernel, t, this, e, i, s))
        },
        _createDelay: function(t, e) {
            var i;
            null != this._delay && ((i = this._delay).isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())), this.addEntity(this._delay = new Tt(this._kernel, t, e))
        },
        __class__: Qt
    });
    var Yt = function() {};

    function Zt(t, e, i, s, n, _) {
        null == _ && (_ = 1), null == n && (n = 0), null == s && (s = 0), this._score = 0, this._isBulletTime = !1, this._isFinished = !1, this._isStarted = !1, this._inputs = {
            isQuick: !1,
            wasQuick: !1,
            isSkill: !1,
            isSkillStarted: !1,
            skillMax: 20,
            skillCount: 0,
            skillTimeout: 0,
            boost: 0,
            seed: 0,
            isPrompts: !1,
            momentumMinScale: .5,
            momentumMaxScale: 1.6,
            penaltyBurndown: 0
        }, this._animation = {
            pose: oe.JUMP_IDLE,
            nextPose: oe.JUMP_IDLE,
            defaultNextPose: oe.JUMP_RUN,
            frameIndex: 0,
            originX: .5
        }, this._bias = {
            movement: .5,
            timing: .5,
            power: .5,
            stamina: .5
        }, this.isRendered = !0, this._location = e, this._controller = i, this._variant = _, this.position = {
            x: s,
            y: n,
            z: 0
        }, Ot.call(this, t)
    }(e["cbctaf.game.IRenderable"] = Yt).__name__ = "cbctaf.game.IRenderable", Yt.__isInterface__ = !0, Yt.prototype = {
        __class__: Yt
    }, (e["cbctaf.game.AUnit"] = Zt).__name__ = "cbctaf.game.AUnit", Zt.__interfaces__ = [Yt], Zt.__super__ = Ot, Zt.prototype = t(Ot.prototype, {
        getTexture: function() {
            this._getIsAnimationComplete() && this._nextAnimation();
            var t = this._unitVo.getFrameTypes(this._animation.pose),
                t = t[this._animation.frameIndex % t.length],
                t = this._unitVo.getFrame(t);
            return {
                source: t.image,
                x: t.rect.x,
                y: t.rect.y,
                width: t.rect.width,
                height: t.rect.height,
                originX: (205 * this._animation.originX + t.regX) / t.rect.width,
                originY: (184.5 + t.regY) / t.rect.height,
                scale: 1.17,
                isFlip: !1,
                isAdd: !1,
                alpha: 1,
                rotation: 0
            }
        },
        getSpeed: function() {
            return this._isBulletTime ? 10 : Math.sqrt(this._momentum.x * this._momentum.x + this._momentum.y * this._momentum.y)
        },
        setStrategy: function(t) {
            this._strategy = t
        },
        setAnimation: function(t, e) {
            null == e && (e = !1), this._animation.nextPose = t, e && this._nextAnimation()
        },
        _init: function() {
            Ot.prototype._init.call(this), this._isHuman = this._controller == ae.HUMAN, this._unitVo = new ve(this._kernel, this._session.cache.unitType, this._location.levelVo.sportType, this._isHuman ? 1 : this._variant), this._strategy = he.WAITING, this._seed = R.random(10) + 20, this._momentum = {
                x: 0,
                y: 0,
                z: 0
            }, this._animation.originX = this._unitVo.sport == ne.THROW ? .65 : .5;
            var t = this._controller;
            switch (t._hx_index) {
                case 0:
                    this._bias.movement = this._unitVo.getBias(15, 20, ce.UPGRADE_MOVEMENT), this._bias.timing = this._unitVo.getBias(1, 0, ce.UPGRADE_TIMING), this._bias.power = this._unitVo.getBias(.825, 1, ce.UPGRADE_POWER), this._bias.stamina = this._unitVo.getBias(.95, 1, ce.UPGRADE_STAMINA);
                    break;
                case 1:
                    var e = t.p_skill;
                    this._bias.movement = this._unitVo.getBias(15, 30, null, e), this._bias.timing = this._unitVo.getBias(1, 0, null, e)
            }
            this._unitVo.sport != ne.SPRINT && (this._bias.movement *= .85);
            var i = this._location.levelVo.isNew ? 40 : 0 | this._unitVo.getBias(18, 25, ce.UPGRADE_TIMING);
            this._inputs.skillMax = i, this._inputs.boost = .5 * this._bias.movement, this._inputs.isPrompts = this._location.levelVo.isNew
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t), this._inputter(), this._mover(), this._animator()
        },
        _inputter: function() {
            var t, e, i, s, n, _, a, r;
            this._isHuman ? (t = this._location.hud, n = this._kernel.inputs.joypad, e = this._kernel.inputs.mouse, _ = n.getIsButtonPress(Rt.LEFT), i = n.getIsButtonPress(Rt.RIGHT), s = n.getIsButtonDown(Rt.FIRE) || n.getIsButtonDown(Rt.UP) || n.getIsButtonDown(Rt.DOWN) || e.getIsButtonDown(), n = n.getIsButtonRelease(Rt.FIRE) || n.getIsButtonRelease(Rt.UP) || n.getIsButtonRelease(Rt.DOWN) || e.getIsButtonRelease(), e.getIsButtonPress() && 100 < e.y && (_ = _ || e.x < .5 * this._factory.width, i = i || e.x > .5 * this._factory.width), !this._inputs.wasQuick && this._inputs.isQuick && t.configureQuick(!0, this._nextQuick()), this._inputs.wasQuick && !this._inputs.isQuick && (this._location.hud.configureQuick(!1), this._inputs.isPrompts && this._location.hud.configurePrompt("", !0)), this._inputs.isQuick && (this._inputs.isPrompts && this._location.hud.configurePrompt(this._kernel.getConfig("gui.scenes.game.hud.prompts.quick"), !0), (_ || i) && (this._inputs.boost *= this._bias.stamina, t.activateQuick(_) ? (t.configureQuick(!0, this._nextQuick()), this._momentum.x += this._inputs.boost, this._inputs.penaltyBurndown *= .8, this._session.setCoins(null, this._session.getCoins() + 1)) : (a = this._inputs.penaltyBurndown + .2, this._inputs.penaltyBurndown = 1 < a ? 1 : a < 0 ? 0 : a, this._momentum.x *= 1 - this._inputs.penaltyBurndown)), r = this._isStarted ? (a = this._momentum.x, r = this._bias.movement * this._inputs.momentumMinScale, (_ = this._bias.movement * this._inputs.momentumMaxScale) < a ? _ : a < r ? r : a) : 0, this._momentum.x = r), this._inputs.isSkill && (this._inputs.isSkillStarted || (this._inputs.skillCount = 0, this._inputs.skillTimeout++, this._inputs.isSkillStarted = s, this._inputs.isSkillStarted && this._kernel.audio.start("SkillStart", At.EFFECTS, 1, 0, .5), this._inputs.isPrompts && this._location.hud.configurePrompt(this._kernel.getConfig("gui.scenes.game.hud.prompts.skill.hold"), !0)), a = 0, r = !this._inputs.isPrompts && 60 < this._inputs.skillTimeout, this._location.hud.configureVignette(this._inputs.skillTimeout / 60 * 2), (this._inputs.isSkillStarted || r) && (s && (this._inputs.skillCount++, this._inputs.isPrompts && this._location.hud.configurePrompt(this._kernel.getConfig(this._unitVo.sport == ne.JUMP ? "gui.scenes.game.hud.prompts.skill.releaseJump" : "gui.scenes.game.hud.prompts.skill.releaseThrow"), !0)), r && (this._inputs.skillCount = this._inputs.skillMax + 2), a = this._inputs.skillCount <= this._inputs.skillMax + 1 ? this._inputs.skillCount / this._inputs.skillMax : -1, !n && -1 != a || (this._inputs.isSkill = !1, this._inputs.isSkillStarted = !1, this._inputs.skillTimeout = 0, this._location.hud.configureVignette(0), this._skillComplete(1 < a ? 1 : a < .5 ? .5 : a))), t.configureSkill(a)), this._inputs.wasQuick = this._inputs.isQuick) : this._momentum.x = this._isStarted ? .975 * this._momentum.x + 2 * this._bias.movement * .025 : 0
        },
        _mover: function() {
            this._isStarted && (this._isBulletTime || ((0 != this._momentum.z || 0 < this.position.z) && (this._momentum.z -= 1.5), this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z, 0 == this.position.z && (this._momentum.x *= .975, this._momentum.y *= .975, this._momentum.z *= .975)))
        },
        _animator: function() {
            this._isBulletTime || this._animation.frameIndex++
        },
        _skillComplete: function(t) {},
        _nextAnimation: function() {
            this._animation.pose = this._animation.nextPose, this._animation.nextPose = this._animation.defaultNextPose, this._animation.frameIndex = 0
        },
        _getIsAnimationComplete: function() {
            var t, e = this._unitVo.getFrameTypes(this._animation.pose);
            switch (this._animation.pose._hx_index) {
                case 0:
                case 1:
                case 4:
                case 7:
                case 8:
                case 11:
                case 12:
                case 13:
                    t = !0;
                    break;
                default:
                    t = !1
            }
            return t ? (this._animation.frameIndex >= e.length && (this._animation.frameIndex = e.length - 1), !1) : this._animation.frameIndex >= e.length
        },
        _nextQuick: function() {
            return this._unitVo.quicks[this._inputs.seed++ % this._unitVo.quicks.length]
        },
        _createDelay: function(t, e) {
            var i;
            null != this._delay && ((i = this._delay).isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())), this.addEntity(this._delay = new Tt(this._kernel, t, e))
        },
        __class__: Zt
    });
    var qt = function(t, e, i, s) {
        this._shake = {
            value: 0,
            resistance: .9,
            dx: 0,
            dy: 0
        }, this.x = e, this.y = i, this.z = s, Ot.call(this, t)
    };
    (e["cbctaf.game.Camera"] = qt).__name__ = "cbctaf.game.Camera", qt.__super__ = Ot, qt.prototype = t(Ot.prototype, {
        getPosition: function(t) {
            return null == t && (t = !1), {
                x: this.x + (t ? 5 * this._shake.dx : 0),
                y: this.y + (t ? 5 * this._shake.dy : 0),
                z: this.z + (t ? 5 * this._shake.dy : 0)
            }
        },
        setPosition: function(t, e, i) {
            var s = null != i && 80 < i ? .35 : .05;
            this.x = this.x * (1 - s) + t * s, this.y = this.y * (1 - s) + e * s, null != i && (this.z = i)
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), Ot.prototype._updater.call(this, t), 0 < this._shake.value && (this._shake.value *= this._shake.resistance, this._shake.value < .1 ? (this._shake.value = 0, this._shake.dx = 0, this._shake.dy = 0) : (e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dx = e * t, e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dy = e * t))
        },
        createRenderableTransformFromWorldCoords: function(t, e, i, s) {
            e = -285 / (e - 285);
            return {
                x: (-.85 * this.x + .98 * t - 722) * e + 360,
                y: (550 - i) * e - 550 + this.z,
                scale: s * e
            }
        },
        __class__: qt
    }), g = function(t, e, i, s, n) {
        this.isRendered = !0, this._location = e, this.position = {
            x: i,
            y: s,
            z: n
        }, Ot.call(this, t)
    }, (e["cbctaf.game.Coin"] = g).__name__ = "cbctaf.game.Coin", g.__interfaces__ = [Yt], g.__super__ = Ot, g.prototype = t(Ot.prototype, {
        getTexture: function() {
            return {
                source: this._source,
                x: 32 * this._frame,
                y: 0,
                width: 32,
                height: 32,
                originX: .5,
                originY: 1,
                scale: 1.5,
                isFlip: !1,
                isAdd: !1,
                alpha: 1 - Math.pow(this._updates / 80, 15),
                rotation: 0
            }
        },
        _init: function() {
            Ot.prototype._init.call(this);
            this._momentum = {
                x: 15 * (2 * Math.random() - 1),
                y: 15 * (2 * Math.random() - 1),
                z: 5 * Math.random()
            }, this._frame = 0, this._seed = R.random(32), this._updates = this._seed, this._source = this._assets.getAsset("assets/game/Coin.png"), this._location.addEntity(this._shadow = new $t(this._kernel, this._source)), this._session.setCoins(null, this._session.getCoins() + 10)
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t), this._mover(), this._frame = (this._seed + this._updates) % 32, this._shadow.setFrame(this.position.x, this.position.y, this._frame, 1 - Math.pow(this._updates / 80, 8)), 80 < this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        _disposer: function() {
            var t = this._shadow;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), Ot.prototype._disposer.call(this)
        },
        _mover: function() {
            this._momentum.x *= .975, this._momentum.y *= .975, this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z, this.position.z < 0 && (this.position.z = 0, this._momentum.z *= -.65)
        },
        __class__: g
    });
    var $t = function(t, e) {
        this._alpha = 1, this._frame = 1, this.isRendered = !0, this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this._source = e, Ot.call(this, t)
    };
    (e["cbctaf.game._Coin._CoinShadow"] = $t).__name__ = "cbctaf.game._Coin._CoinShadow", $t.__interfaces__ = [Yt], $t.__super__ = Ot, $t.prototype = t(Ot.prototype, {
        setFrame: function(t, e, i, s) {
            this.position.x = t, this.position.y = e, this._frame = i, this._alpha = s
        },
        getTexture: function() {
            return {
                source: this._source,
                x: 32 * this._frame,
                y: 32,
                width: 32,
                height: 32,
                originX: .5,
                originY: 1,
                scale: 1.5,
                isFlip: !1,
                isAdd: !1,
                alpha: this._alpha,
                rotation: 0
            }
        },
        __class__: $t
    });
    var te = A["cbctaf.game.ELevel"] = {
        __ename__: "cbctaf.game.ELevel",
        __constructs__: null,
        LEVEL_1: {
            _hx_name: "LEVEL_1",
            _hx_index: 0,
            __enum__: "cbctaf.game.ELevel",
            toString: i
        },
        LEVEL_2: {
            _hx_name: "LEVEL_2",
            _hx_index: 1,
            __enum__: "cbctaf.game.ELevel",
            toString: i
        },
        LEVEL_3: {
            _hx_name: "LEVEL_3",
            _hx_index: 2,
            __enum__: "cbctaf.game.ELevel",
            toString: i
        }
    };
    te.__constructs__ = [te.LEVEL_1, te.LEVEL_2, te.LEVEL_3];
    var ee = A["cbctaf.game.ELocation"] = {
        __ename__: "cbctaf.game.ELocation",
        __constructs__: null,
        LOCATION_A: {
            _hx_name: "LOCATION_A",
            _hx_index: 0,
            __enum__: "cbctaf.game.ELocation",
            toString: i
        }
    };
    ee.__constructs__ = [ee.LOCATION_A];
    var ie = A["cbctaf.game.EMedal"] = {
        __ename__: "cbctaf.game.EMedal",
        __constructs__: null,
        MEDAL_NONE: {
            _hx_name: "MEDAL_NONE",
            _hx_index: 0,
            __enum__: "cbctaf.game.EMedal",
            toString: i
        },
        MEDAL_BRONZE: {
            _hx_name: "MEDAL_BRONZE",
            _hx_index: 1,
            __enum__: "cbctaf.game.EMedal",
            toString: i
        },
        MEDAL_SILVER: {
            _hx_name: "MEDAL_SILVER",
            _hx_index: 2,
            __enum__: "cbctaf.game.EMedal",
            toString: i
        },
        MEDAL_GOLD: {
            _hx_name: "MEDAL_GOLD",
            _hx_index: 3,
            __enum__: "cbctaf.game.EMedal",
            toString: i
        }
    };
    ie.__constructs__ = [ie.MEDAL_NONE, ie.MEDAL_BRONZE, ie.MEDAL_SILVER, ie.MEDAL_GOLD];
    var se = A["cbctaf.game.EScenery"] = {
        __ename__: "cbctaf.game.EScenery",
        __constructs__: null,
        BANNER_1: {
            _hx_name: "BANNER_1",
            _hx_index: 0,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        BANNER_2: {
            _hx_name: "BANNER_2",
            _hx_index: 1,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        BLOCKS: {
            _hx_name: "BLOCKS",
            _hx_index: 2,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_1: {
            _hx_name: "FLAG_1",
            _hx_index: 3,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_2: {
            _hx_name: "FLAG_2",
            _hx_index: 4,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_3: {
            _hx_name: "FLAG_3",
            _hx_index: 5,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_4: {
            _hx_name: "FLAG_4",
            _hx_index: 6,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_5: {
            _hx_name: "FLAG_5",
            _hx_index: 7,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_6: {
            _hx_name: "FLAG_6",
            _hx_index: 8,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_7: {
            _hx_name: "FLAG_7",
            _hx_index: 9,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_8: {
            _hx_name: "FLAG_8",
            _hx_index: 10,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_9: {
            _hx_name: "FLAG_9",
            _hx_index: 11,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_10: {
            _hx_name: "FLAG_10",
            _hx_index: 12,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_11: {
            _hx_name: "FLAG_11",
            _hx_index: 13,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_12: {
            _hx_name: "FLAG_12",
            _hx_index: 14,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_13: {
            _hx_name: "FLAG_13",
            _hx_index: 15,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_14: {
            _hx_name: "FLAG_14",
            _hx_index: 16,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_15: {
            _hx_name: "FLAG_15",
            _hx_index: 17,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        FLAG_16: {
            _hx_name: "FLAG_16",
            _hx_index: 18,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        DISTANCE: {
            _hx_name: "DISTANCE",
            _hx_index: 19,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        TARGET: {
            _hx_name: "TARGET",
            _hx_index: 20,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_1: {
            _hx_name: "JUDGE_1",
            _hx_index: 21,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_2: {
            _hx_name: "JUDGE_2",
            _hx_index: 22,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_3: {
            _hx_name: "JUDGE_3",
            _hx_index: 23,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_4: {
            _hx_name: "JUDGE_4",
            _hx_index: 24,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_5: {
            _hx_name: "JUDGE_5",
            _hx_index: 25,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_6: {
            _hx_name: "JUDGE_6",
            _hx_index: 26,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        JUDGE_7: {
            _hx_name: "JUDGE_7",
            _hx_index: 27,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        CAMERA: {
            _hx_name: "CAMERA",
            _hx_index: 28,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER: {
            _hx_name: "MARKER",
            _hx_index: 29,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_10: {
            _hx_name: "MARKER_10",
            _hx_index: 30,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_20: {
            _hx_name: "MARKER_20",
            _hx_index: 31,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_30: {
            _hx_name: "MARKER_30",
            _hx_index: 32,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_40: {
            _hx_name: "MARKER_40",
            _hx_index: 33,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_50: {
            _hx_name: "MARKER_50",
            _hx_index: 34,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_60: {
            _hx_name: "MARKER_60",
            _hx_index: 35,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_70: {
            _hx_name: "MARKER_70",
            _hx_index: 36,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_80: {
            _hx_name: "MARKER_80",
            _hx_index: 37,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        },
        MARKER_90: {
            _hx_name: "MARKER_90",
            _hx_index: 38,
            __enum__: "cbctaf.game.EScenery",
            toString: i
        }
    };
    se.__constructs__ = [se.BANNER_1, se.BANNER_2, se.BLOCKS, se.FLAG_1, se.FLAG_2, se.FLAG_3, se.FLAG_4, se.FLAG_5, se.FLAG_6, se.FLAG_7, se.FLAG_8, se.FLAG_9, se.FLAG_10, se.FLAG_11, se.FLAG_12, se.FLAG_13, se.FLAG_14, se.FLAG_15, se.FLAG_16, se.DISTANCE, se.TARGET, se.JUDGE_1, se.JUDGE_2, se.JUDGE_3, se.JUDGE_4, se.JUDGE_5, se.JUDGE_6, se.JUDGE_7, se.CAMERA, se.MARKER, se.MARKER_10, se.MARKER_20, se.MARKER_30, se.MARKER_40, se.MARKER_50, se.MARKER_60, se.MARKER_70, se.MARKER_80, se.MARKER_90];
    var ne = A["cbctaf.game.ESport"] = {
        __ename__: "cbctaf.game.ESport",
        __constructs__: null,
        SPRINT: {
            _hx_name: "SPRINT",
            _hx_index: 0,
            __enum__: "cbctaf.game.ESport",
            toString: i
        },
        THROW: {
            _hx_name: "THROW",
            _hx_index: 1,
            __enum__: "cbctaf.game.ESport",
            toString: i
        },
        JUMP: {
            _hx_name: "JUMP",
            _hx_index: 2,
            __enum__: "cbctaf.game.ESport",
            toString: i
        }
    };
    ne.__constructs__ = [ne.SPRINT, ne.THROW, ne.JUMP];
    var _e = A["cbctaf.game.EUnit"] = {
        __ename__: "cbctaf.game.EUnit",
        __constructs__: null,
        UNIT_A: {
            _hx_name: "UNIT_A",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUnit",
            toString: i
        },
        UNIT_B: {
            _hx_name: "UNIT_B",
            _hx_index: 1,
            __enum__: "cbctaf.game.EUnit",
            toString: i
        }
    };
    _e.__constructs__ = [_e.UNIT_A, _e.UNIT_B];
    var ae = A["cbctaf.game.EUnitController"] = {
        __ename__: "cbctaf.game.EUnitController",
        __constructs__: null,
        HUMAN: {
            _hx_name: "HUMAN",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUnitController",
            toString: i
        },
        BOT: ((h = function(t) {
            return {
                _hx_index: 1,
                p_skill: t,
                __enum__: "cbctaf.game.EUnitController",
                toString: i
            }
        })._hx_name = "BOT", h.__params__ = ["p_skill"], h)
    };
    ae.__constructs__ = [ae.HUMAN, ae.BOT];
    var re = A["cbctaf.game.EUnitFrame"] = {
        __ename__: "cbctaf.game.EUnitFrame",
        __constructs__: null,
        SPRINT_1_SET1: {
            _hx_name: "SPRINT_1_SET1",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_SET2: {
            _hx_name: "SPRINT_1_SET2",
            _hx_index: 1,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_SET3: {
            _hx_name: "SPRINT_1_SET3",
            _hx_index: 2,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_START1: {
            _hx_name: "SPRINT_1_START1",
            _hx_index: 3,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_START2: {
            _hx_name: "SPRINT_1_START2",
            _hx_index: 4,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_START3: {
            _hx_name: "SPRINT_1_START3",
            _hx_index: 5,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN1: {
            _hx_name: "SPRINT_1_RUN1",
            _hx_index: 6,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN2: {
            _hx_name: "SPRINT_1_RUN2",
            _hx_index: 7,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN3: {
            _hx_name: "SPRINT_1_RUN3",
            _hx_index: 8,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN4: {
            _hx_name: "SPRINT_1_RUN4",
            _hx_index: 9,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN5: {
            _hx_name: "SPRINT_1_RUN5",
            _hx_index: 10,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_1_RUN6: {
            _hx_name: "SPRINT_1_RUN6",
            _hx_index: 11,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_SET1: {
            _hx_name: "SPRINT_2_SET1",
            _hx_index: 12,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_SET2: {
            _hx_name: "SPRINT_2_SET2",
            _hx_index: 13,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_SET3: {
            _hx_name: "SPRINT_2_SET3",
            _hx_index: 14,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_START1: {
            _hx_name: "SPRINT_2_START1",
            _hx_index: 15,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_START2: {
            _hx_name: "SPRINT_2_START2",
            _hx_index: 16,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_START3: {
            _hx_name: "SPRINT_2_START3",
            _hx_index: 17,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN1: {
            _hx_name: "SPRINT_2_RUN1",
            _hx_index: 18,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN2: {
            _hx_name: "SPRINT_2_RUN2",
            _hx_index: 19,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN3: {
            _hx_name: "SPRINT_2_RUN3",
            _hx_index: 20,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN4: {
            _hx_name: "SPRINT_2_RUN4",
            _hx_index: 21,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN5: {
            _hx_name: "SPRINT_2_RUN5",
            _hx_index: 22,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_2_RUN6: {
            _hx_name: "SPRINT_2_RUN6",
            _hx_index: 23,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_SET1: {
            _hx_name: "SPRINT_3_SET1",
            _hx_index: 24,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_SET2: {
            _hx_name: "SPRINT_3_SET2",
            _hx_index: 25,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_SET3: {
            _hx_name: "SPRINT_3_SET3",
            _hx_index: 26,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_START1: {
            _hx_name: "SPRINT_3_START1",
            _hx_index: 27,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_START2: {
            _hx_name: "SPRINT_3_START2",
            _hx_index: 28,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_START3: {
            _hx_name: "SPRINT_3_START3",
            _hx_index: 29,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN1: {
            _hx_name: "SPRINT_3_RUN1",
            _hx_index: 30,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN2: {
            _hx_name: "SPRINT_3_RUN2",
            _hx_index: 31,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN3: {
            _hx_name: "SPRINT_3_RUN3",
            _hx_index: 32,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN4: {
            _hx_name: "SPRINT_3_RUN4",
            _hx_index: 33,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN5: {
            _hx_name: "SPRINT_3_RUN5",
            _hx_index: 34,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_3_RUN6: {
            _hx_name: "SPRINT_3_RUN6",
            _hx_index: 35,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_SET1: {
            _hx_name: "SPRINT_4_SET1",
            _hx_index: 36,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_SET2: {
            _hx_name: "SPRINT_4_SET2",
            _hx_index: 37,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_SET3: {
            _hx_name: "SPRINT_4_SET3",
            _hx_index: 38,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_START1: {
            _hx_name: "SPRINT_4_START1",
            _hx_index: 39,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_START2: {
            _hx_name: "SPRINT_4_START2",
            _hx_index: 40,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_START3: {
            _hx_name: "SPRINT_4_START3",
            _hx_index: 41,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN1: {
            _hx_name: "SPRINT_4_RUN1",
            _hx_index: 42,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN2: {
            _hx_name: "SPRINT_4_RUN2",
            _hx_index: 43,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN3: {
            _hx_name: "SPRINT_4_RUN3",
            _hx_index: 44,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN4: {
            _hx_name: "SPRINT_4_RUN4",
            _hx_index: 45,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN5: {
            _hx_name: "SPRINT_4_RUN5",
            _hx_index: 46,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        SPRINT_4_RUN6: {
            _hx_name: "SPRINT_4_RUN6",
            _hx_index: 47,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_START1: {
            _hx_name: "THROW_1_START1",
            _hx_index: 48,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_START2: {
            _hx_name: "THROW_1_START2",
            _hx_index: 49,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_START3: {
            _hx_name: "THROW_1_START3",
            _hx_index: 50,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN1: {
            _hx_name: "THROW_1_RUN1",
            _hx_index: 51,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN2: {
            _hx_name: "THROW_1_RUN2",
            _hx_index: 52,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN3: {
            _hx_name: "THROW_1_RUN3",
            _hx_index: 53,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN4: {
            _hx_name: "THROW_1_RUN4",
            _hx_index: 54,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN5: {
            _hx_name: "THROW_1_RUN5",
            _hx_index: 55,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_RUN6: {
            _hx_name: "THROW_1_RUN6",
            _hx_index: 56,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH1: {
            _hx_name: "THROW_1_FINISH1",
            _hx_index: 57,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH2: {
            _hx_name: "THROW_1_FINISH2",
            _hx_index: 58,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH3: {
            _hx_name: "THROW_1_FINISH3",
            _hx_index: 59,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH4: {
            _hx_name: "THROW_1_FINISH4",
            _hx_index: 60,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH5: {
            _hx_name: "THROW_1_FINISH5",
            _hx_index: 61,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH6: {
            _hx_name: "THROW_1_FINISH6",
            _hx_index: 62,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        THROW_1_FINISH7: {
            _hx_name: "THROW_1_FINISH7",
            _hx_index: 63,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_IDLE: {
            _hx_name: "JUMP_1_IDLE",
            _hx_index: 64,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_START1: {
            _hx_name: "JUMP_1_START1",
            _hx_index: 65,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_START2: {
            _hx_name: "JUMP_1_START2",
            _hx_index: 66,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_START3: {
            _hx_name: "JUMP_1_START3",
            _hx_index: 67,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN1: {
            _hx_name: "JUMP_1_RUN1",
            _hx_index: 68,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN2: {
            _hx_name: "JUMP_1_RUN2",
            _hx_index: 69,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN3: {
            _hx_name: "JUMP_1_RUN3",
            _hx_index: 70,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN4: {
            _hx_name: "JUMP_1_RUN4",
            _hx_index: 71,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN5: {
            _hx_name: "JUMP_1_RUN5",
            _hx_index: 72,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_RUN6: {
            _hx_name: "JUMP_1_RUN6",
            _hx_index: 73,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_HOP1: {
            _hx_name: "JUMP_1_HOP1",
            _hx_index: 74,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_HOP2: {
            _hx_name: "JUMP_1_HOP2",
            _hx_index: 75,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_HOP3: {
            _hx_name: "JUMP_1_HOP3",
            _hx_index: 76,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_SKIP1: {
            _hx_name: "JUMP_1_SKIP1",
            _hx_index: 77,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_SKIP2: {
            _hx_name: "JUMP_1_SKIP2",
            _hx_index: 78,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_SKIP3: {
            _hx_name: "JUMP_1_SKIP3",
            _hx_index: 79,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP1: {
            _hx_name: "JUMP_1_JUMP1",
            _hx_index: 80,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP2: {
            _hx_name: "JUMP_1_JUMP2",
            _hx_index: 81,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP3: {
            _hx_name: "JUMP_1_JUMP3",
            _hx_index: 82,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP4: {
            _hx_name: "JUMP_1_JUMP4",
            _hx_index: 83,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP5: {
            _hx_name: "JUMP_1_JUMP5",
            _hx_index: 84,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        },
        JUMP_1_JUMP6: {
            _hx_name: "JUMP_1_JUMP6",
            _hx_index: 85,
            __enum__: "cbctaf.game.EUnitFrame",
            toString: i
        }
    };
    re.__constructs__ = [re.SPRINT_1_SET1, re.SPRINT_1_SET2, re.SPRINT_1_SET3, re.SPRINT_1_START1, re.SPRINT_1_START2, re.SPRINT_1_START3, re.SPRINT_1_RUN1, re.SPRINT_1_RUN2, re.SPRINT_1_RUN3, re.SPRINT_1_RUN4, re.SPRINT_1_RUN5, re.SPRINT_1_RUN6, re.SPRINT_2_SET1, re.SPRINT_2_SET2, re.SPRINT_2_SET3, re.SPRINT_2_START1, re.SPRINT_2_START2, re.SPRINT_2_START3, re.SPRINT_2_RUN1, re.SPRINT_2_RUN2, re.SPRINT_2_RUN3, re.SPRINT_2_RUN4, re.SPRINT_2_RUN5, re.SPRINT_2_RUN6, re.SPRINT_3_SET1, re.SPRINT_3_SET2, re.SPRINT_3_SET3, re.SPRINT_3_START1, re.SPRINT_3_START2, re.SPRINT_3_START3, re.SPRINT_3_RUN1, re.SPRINT_3_RUN2, re.SPRINT_3_RUN3, re.SPRINT_3_RUN4, re.SPRINT_3_RUN5, re.SPRINT_3_RUN6, re.SPRINT_4_SET1, re.SPRINT_4_SET2, re.SPRINT_4_SET3, re.SPRINT_4_START1, re.SPRINT_4_START2, re.SPRINT_4_START3, re.SPRINT_4_RUN1, re.SPRINT_4_RUN2, re.SPRINT_4_RUN3, re.SPRINT_4_RUN4, re.SPRINT_4_RUN5, re.SPRINT_4_RUN6, re.THROW_1_START1, re.THROW_1_START2, re.THROW_1_START3, re.THROW_1_RUN1, re.THROW_1_RUN2, re.THROW_1_RUN3, re.THROW_1_RUN4, re.THROW_1_RUN5, re.THROW_1_RUN6, re.THROW_1_FINISH1, re.THROW_1_FINISH2, re.THROW_1_FINISH3, re.THROW_1_FINISH4, re.THROW_1_FINISH5, re.THROW_1_FINISH6, re.THROW_1_FINISH7, re.JUMP_1_IDLE, re.JUMP_1_START1, re.JUMP_1_START2, re.JUMP_1_START3, re.JUMP_1_RUN1, re.JUMP_1_RUN2, re.JUMP_1_RUN3, re.JUMP_1_RUN4, re.JUMP_1_RUN5, re.JUMP_1_RUN6, re.JUMP_1_HOP1, re.JUMP_1_HOP2, re.JUMP_1_HOP3, re.JUMP_1_SKIP1, re.JUMP_1_SKIP2, re.JUMP_1_SKIP3, re.JUMP_1_JUMP1, re.JUMP_1_JUMP2, re.JUMP_1_JUMP3, re.JUMP_1_JUMP4, re.JUMP_1_JUMP5, re.JUMP_1_JUMP6];
    var oe = A["cbctaf.game.EUnitPose"] = {
        __ename__: "cbctaf.game.EUnitPose",
        __constructs__: null,
        SPRINT_IDLE: {
            _hx_name: "SPRINT_IDLE",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        SPRINT_SET: {
            _hx_name: "SPRINT_SET",
            _hx_index: 1,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        SPRINT_START: {
            _hx_name: "SPRINT_START",
            _hx_index: 2,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        SPRINT_RUN: {
            _hx_name: "SPRINT_RUN",
            _hx_index: 3,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        THROW_IDLE: {
            _hx_name: "THROW_IDLE",
            _hx_index: 4,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        THROW_START: {
            _hx_name: "THROW_START",
            _hx_index: 5,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        THROW_RUN: {
            _hx_name: "THROW_RUN",
            _hx_index: 6,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        THROW_FINISH: {
            _hx_name: "THROW_FINISH",
            _hx_index: 7,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_IDLE: {
            _hx_name: "JUMP_IDLE",
            _hx_index: 8,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_START: {
            _hx_name: "JUMP_START",
            _hx_index: 9,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_RUN: {
            _hx_name: "JUMP_RUN",
            _hx_index: 10,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_HOP: {
            _hx_name: "JUMP_HOP",
            _hx_index: 11,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_SKIP: {
            _hx_name: "JUMP_SKIP",
            _hx_index: 12,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        },
        JUMP_JUMP: {
            _hx_name: "JUMP_JUMP",
            _hx_index: 13,
            __enum__: "cbctaf.game.EUnitPose",
            toString: i
        }
    };
    oe.__constructs__ = [oe.SPRINT_IDLE, oe.SPRINT_SET, oe.SPRINT_START, oe.SPRINT_RUN, oe.THROW_IDLE, oe.THROW_START, oe.THROW_RUN, oe.THROW_FINISH, oe.JUMP_IDLE, oe.JUMP_START, oe.JUMP_RUN, oe.JUMP_HOP, oe.JUMP_SKIP, oe.JUMP_JUMP];
    var he = A["cbctaf.game.EUnitStrategy"] = {
        __ename__: "cbctaf.game.EUnitStrategy",
        __constructs__: null,
        WAITING: {
            _hx_name: "WAITING",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUnitStrategy",
            toString: i
        },
        PREPARING: {
            _hx_name: "PREPARING",
            _hx_index: 1,
            __enum__: "cbctaf.game.EUnitStrategy",
            toString: i
        },
        QUICKING: {
            _hx_name: "QUICKING",
            _hx_index: 2,
            __enum__: "cbctaf.game.EUnitStrategy",
            toString: i
        },
        SKILLING: {
            _hx_name: "SKILLING",
            _hx_index: 3,
            __enum__: "cbctaf.game.EUnitStrategy",
            toString: i
        },
        FINISHING: {
            _hx_name: "FINISHING",
            _hx_index: 4,
            __enum__: "cbctaf.game.EUnitStrategy",
            toString: i
        }
    };
    he.__constructs__ = [he.WAITING, he.PREPARING, he.QUICKING, he.SKILLING, he.FINISHING];
    var ce = A["cbctaf.game.EUpgrade"] = {
        __ename__: "cbctaf.game.EUpgrade",
        __constructs__: null,
        UPGRADE_MOVEMENT: {
            _hx_name: "UPGRADE_MOVEMENT",
            _hx_index: 0,
            __enum__: "cbctaf.game.EUpgrade",
            toString: i
        },
        UPGRADE_TIMING: {
            _hx_name: "UPGRADE_TIMING",
            _hx_index: 1,
            __enum__: "cbctaf.game.EUpgrade",
            toString: i
        },
        UPGRADE_POWER: {
            _hx_name: "UPGRADE_POWER",
            _hx_index: 2,
            __enum__: "cbctaf.game.EUpgrade",
            toString: i
        },
        UPGRADE_STAMINA: {
            _hx_name: "UPGRADE_STAMINA",
            _hx_index: 3,
            __enum__: "cbctaf.game.EUpgrade",
            toString: i
        }
    };

    function le(t, e, i) {
        this._isFinished = !1, this._rotation = .5, this.isRendered = !0, this._location = e, this.position = i, Ot.call(this, t)
    }
    ce.__constructs__ = [ce.UPGRADE_MOVEMENT, ce.UPGRADE_TIMING, ce.UPGRADE_POWER, ce.UPGRADE_STAMINA], g = function() {}, (e["cbctaf.game.IHud"] = g).__name__ = "cbctaf.game.IHud", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["cbctaf.game.Javelin"] = le).__name__ = "cbctaf.game.Javelin", le.__interfaces__ = [Yt], le.__super__ = Ot, le.prototype = t(Ot.prototype, {
        getTexture: function() {
            return {
                source: this._source,
                x: 0,
                y: 0,
                width: 256,
                height: 16,
                originX: .5,
                originY: .5,
                scale: .9,
                isFlip: !1,
                isAdd: !1,
                alpha: 1,
                rotation: this._rotation
            }
        },
        getSpeed: function() {
            return Math.sqrt(this._momentum.x * this._momentum.x + this._momentum.y * this._momentum.y)
        },
        _init: function() {
            Ot.prototype._init.call(this), this._momentum = {
                x: 0,
                y: 0,
                z: 0
            }, this._source = this._assets.getAsset("assets/game/Javelin.png"), this._location.addEntity(this._shadow = new ue(this._kernel, this._source))
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t), this._isFinished || (this._rotation = Math.atan2(-this._momentum.z, this._momentum.x) - .2, this._mover())
        },
        _disposer: function() {
            var t = this._shadow;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), Ot.prototype._disposer.call(this)
        },
        _mover: function() {
            0 < this.position.z && (this._momentum.z -= 1.5), this._momentum.x *= .995, this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z;
            var t = 110 * Math.sin(this._rotation),
                e = 110 * Math.cos(this._rotation);
            0 != this._momentum.z && this.position.z < t && (null != this._callbackFinished && this._callbackFinished(), this._momentum.x = 0, this._momentum.y = 0, this._momentum.z = 0, this.position.z = t, this.position.x -= e, this._isFinished = !0, this._kernel.audio.start("ThrowImpact", At.EFFECTS, 1, 0, .75)), this._shadow.setPosition(this.position.x, this.position.y, 0, null, 1, Math.cos(this._rotation))
        },
        launch: function(t, e, i) {
            this._callbackFinished = i, this._rotation = -Math.PI * (0 * (1 - e) + .2 * e), this._momentum.x = Math.cos(this._rotation) * t, this._momentum.z = -Math.sin(this._rotation) * t * .5, this._kernel.audio.start("ThrowLaunch", At.EFFECTS, 1, 0, .75)
        },
        __class__: le
    });
    var ue = function(t, e) {
        this._scale = 1, this._alpha = 1, this.isRendered = !0, this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this._source = e, Ot.call(this, t)
    };

    function de(t, e, i) {
        Ft.call(this, t), this.type = e, this.title = this._getTitle(), this.locationType = ee.LOCATION_A, this.scoreGold = this._getScoreGold(), this.scoreSilver = this._getScoreSilver(), this.scoreBronze = this._getScoreBronze(), this.medalType = this._session.getMedal(this.type, i), this.isLocked = this._getIsLocked(i), this.isNew = this.medalType == ie.MEDAL_NONE && !this.isLocked, this.message = this._getMessage(), this.sportType = this._getSportType()
    }

    function pe(t, e, i, s) {
        Qt.call(this, t, e, i, s)
    }

    function ge(t, e, i, s) {
        Qt.call(this, t, e, i, s)
    }

    function fe(t, e, i, s) {
        Qt.call(this, t, e, i, s)
    }(e["cbctaf.game._Javelin._JavelinShadow"] = ue).__name__ = "cbctaf.game._Javelin._JavelinShadow", ue.__interfaces__ = [Yt], ue.__super__ = Ot, ue.prototype = t(Ot.prototype, {
        setPosition: function(t, e, i, s, n, _) {
            null == _ && (_ = 1), null == n && (n = 1), null == s && (s = !0), this.position.x = t, this.position.y = e, this.position.z = i, this.isRendered = s, this._alpha = n, this._scale = _
        },
        getTexture: function() {
            return {
                source: this._source,
                x: 0,
                y: 16,
                width: 256,
                height: 16,
                originX: .5,
                originY: .5,
                scale: .9 * this._scale,
                isFlip: !1,
                isAdd: !1,
                alpha: this._alpha,
                rotation: 0
            }
        },
        __class__: ue
    }), (e["cbctaf.game.LevelVo"] = de).__name__ = "cbctaf.game.LevelVo", de.__super__ = Ft, de.prototype = t(Ft.prototype, {
        _getTitle: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = "gui.levels.level1";
                    break;
                case 1:
                    t = "gui.levels.level2";
                    break;
                case 2:
                    t = "gui.levels.level3"
            }
            return this._kernel.getConfig(t)
        },
        _getIsLocked: function(t) {
            switch (this.type._hx_index) {
                case 0:
                    return !1;
                case 1:
                    return this._session.getMedal(te.LEVEL_1, t)._hx_index <= ie.MEDAL_NONE._hx_index;
                case 2:
                    return this._session.getMedal(te.LEVEL_2, t)._hx_index <= ie.MEDAL_NONE._hx_index
            }
        },
        _getScoreGold: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 9.58 * this._factory.targetFramerate;
                case 1:
                    return 85;
                case 2:
                    return 18
            }
        },
        _getScoreSilver: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 11 * this._factory.targetFramerate;
                case 1:
                    return 70;
                case 2:
                    return 16
            }
        },
        _getScoreBronze: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 16 * this._factory.targetFramerate;
                case 1:
                    return 40;
                case 2:
                    return 13
            }
        },
        _getMessage: function() {
            var t, e = this._kernel.getConfig(this.isLocked ? "gui.scenes.selectLevel.messageLocked" : "gui.scenes.selectLevel.messageNew");
            switch (this.type._hx_index) {
                case 0:
                    t = "";
                    break;
                case 1:
                    t = "gui.levels.level1";
                    break;
                case 2:
                    t = "gui.levels.level2"
            }
            var i, s = this._kernel.getConfig(t);
            return null == s || 1 < (i = s.split(" ")).length && (s = i[0]), c.replace(e, "__PREVIOUS_LEVEL__", s)
        },
        _getSportType: function() {
            switch (this.type._hx_index) {
                case 0:
                    return ne.SPRINT;
                case 1:
                    return ne.THROW;
                case 2:
                    return ne.JUMP
            }
        },
        __class__: de
    }), (e["cbctaf.game.LocationJump"] = pe).__name__ = "cbctaf.game.LocationJump", pe.__super__ = Qt, pe.prototype = t(Qt.prototype, {
        _getCameraTarget: function() {
            var t = Math.min(this._player.position.x + 20 * this._player.getSpeed(), this.vo.positions.sprinting.finishX) - this._renderer.width,
                e = (this._player.position.z - this._renderer.height) / (this.vo.height - 2 * this._renderer.height);
            return {
                x: t / (this.vo.width - 2 * this._renderer.width) * this.vo.width,
                y: this._player.position.y,
                z: (1 - Math.pow(1 < e ? 1 : e < 0 ? 0 : e, .25)) * this.vo.height
            }
        },
        _init: function() {
            var t = this;
            Qt.prototype._init.call(this), this.addEntity(this._player = new Ee(this._kernel, this, ae.HUMAN, this.vo.positions.jumping.startX, this.vo.positions.jumping.laneY)), this._createDelay(function() {
                t.hud.configureAlert(t._kernel.getConfig("gui.scenes.game.hud.alerts.jump.start")), t._player.setStrategy(he.QUICKING)
            }, 4e3)
        },
        _createAllScenery: function() {
            Qt.prototype._createAllScenery.call(this);
            for (var t = this._tools.shuffle([se.FLAG_1, se.FLAG_2, se.FLAG_3, se.FLAG_4, se.FLAG_5, se.FLAG_6, se.FLAG_7, se.FLAG_8, se.FLAG_9, se.FLAG_10, se.FLAG_11, se.FLAG_12, se.FLAG_13, se.FLAG_14, se.FLAG_15, se.FLAG_16]), e = 0, i = 0; i < this.vo.width;) {
                i += 200;
                var s = t[e++ % t.length];
                this._createScenery(s, i, -115)
            }
            for (t = [se.BANNER_1, se.BANNER_2], e = 0, i = 0; i < this.vo.positions.jumping.launchX - 256;) {
                i += 288;
                var n = t[e++ % t.length];
                this._createScenery(n, i, -100)
            }
            this._createScenery(se.MARKER, this.vo.positions.jumping.launchX, -80), this._createScenery(se.MARKER, this.vo.positions.jumping.launchX, -30), this._createScenery(se.MARKER, this.vo.positions.jumping.finishX - 80, -80), this._createScenery(se.MARKER, this.vo.positions.jumping.finishX - 80, -30);
            for (var _ = [this.vo.positions.jumping.launchX + 80, this.vo.positions.jumping.finishX, this.vo.positions.jumping.distanceX + 380], a = 0; a < _.length;) {
                i = _[a];
                ++a, this._createScenery(se.CAMERA, i, -90)
            }
            this._createScenery(se.DISTANCE, this.vo.positions.jumping.distanceX, this.vo.positions.jumping.distanceY);
            for (var t = this._tools.shuffle([se.JUDGE_1, se.JUDGE_2, se.JUDGE_3, se.JUDGE_4, se.JUDGE_5, se.JUDGE_6, se.JUDGE_7]), e = 0, r = [this.vo.positions.jumping.startX - 160, this.vo.positions.jumping.launchX + 400, this.vo.positions.jumping.finishX + 160, this.vo.positions.jumping.distanceX], a = 0; a < r.length;) {
                i = r[a];
                ++a;
                var o = t[e++ % t.length];
                this._createScenery(o, i, -110)
            }
            for (i = this.vo.positions.jumping.startX; i < this.vo.positions.jumping.launchX;) i += R.random(64) + 64, Math.random() < .85 ? i += 256 : (o = t[e++ % t.length], this._createScenery(o, i, -110 - R.random(10)))
        },
        __class__: pe
    }), (e["cbctaf.game.LocationSprint"] = ge).__name__ = "cbctaf.game.LocationSprint", ge.__super__ = Qt, ge.prototype = t(Qt.prototype, {
        _getCameraTarget: function() {
            var t = Math.min(this._player.position.x + 20 * this._player.getSpeed(), this.vo.positions.sprinting.finishX) - this._renderer.width,
                e = (this._player.position.z - this._renderer.height) / (this.vo.height - 2 * this._renderer.height);
            return {
                x: t / (this.vo.width - 2 * this._renderer.width) * this.vo.width,
                y: this._player.position.y,
                z: (1 - Math.pow(1 < e ? 1 : e < 0 ? 0 : e, .25)) * this.vo.height
            }
        },
        _init: function() {
            var s = this;
            Qt.prototype._init.call(this), this.addEntity(this._player = new we(this._kernel, this, ae.HUMAN, this.vo.positions.sprinting.setX, this.vo.positions.sprinting.lane3Y)), this.addEntity(this._opponent1 = new we(this._kernel, this, ae.BOT(.98), this.vo.positions.sprinting.setX, this.vo.positions.sprinting.lane1Y, 4)), this.addEntity(this._opponent2 = new we(this._kernel, this, ae.BOT(.7), this.vo.positions.sprinting.setX, this.vo.positions.sprinting.lane2Y, 3)), this.addEntity(this._opponent3 = new we(this._kernel, this, ae.BOT(.15), this.vo.positions.sprinting.setX, this.vo.positions.sprinting.lane4Y, 2)), this._createDelay(function() {
                s._kernel.audio.start("SprintMarks", At.EFFECTS, 1, 0, 1), s._createDelay(function() {
                    s.hud.configureAlert(s._kernel.getConfig("gui.scenes.game.hud.alerts.sprint.set")), s._kernel.audio.start("SprintSet", At.EFFECTS, 1, 0, 1);
                    for (var t = 0, e = s.getEntitiesByClass(we); t < e.length;) {
                        var i = e[t];
                        ++t, i.setStrategy(he.PREPARING)
                    }
                    s._createDelay(function() {
                        s.hud.configureAlert(s._kernel.getConfig("gui.scenes.game.hud.alerts.sprint.go")), s._kernel.audio.start("SprintGo", At.EFFECTS, 1, 0, 1), s._kernel.audio.start("SprintGun", At.EFFECTS, 1, 0, 1), s._kernel.audio.start("GameOver", At.EFFECTS, 1, 0, .75);
                        for (var t = 0, e = s.getEntitiesByClass(we); t < e.length;) {
                            var i = e[t];
                            ++t, i.setStrategy(he.QUICKING)
                        }
                    }, 1500)
                }, 1500)
            }, 4e3)
        },
        _createAllScenery: function() {
            Qt.prototype._createAllScenery.call(this);
            for (var t = this._tools.shuffle([se.FLAG_1, se.FLAG_2, se.FLAG_3, se.FLAG_4, se.FLAG_5, se.FLAG_6, se.FLAG_7, se.FLAG_8, se.FLAG_9, se.FLAG_10, se.FLAG_11, se.FLAG_12, se.FLAG_13, se.FLAG_14, se.FLAG_15, se.FLAG_16]), e = 0, i = 0; i < this.vo.width;) {
                i += 200;
                var s = t[e++ % t.length];
                this._createScenery(s, i, -190, 0)
            }
            for (t = [se.BANNER_1, se.BANNER_2], e = 0, i = 0; i < this.vo.width;) {
                i += 288;
                var n = t[e++ % t.length];
                this._createScenery(n, i, -150)
            }
            t = [se.MARKER_10, se.MARKER_20, se.MARKER_30, se.MARKER_40, se.MARKER_50, se.MARKER_60, se.MARKER_70, se.MARKER_80, se.MARKER_90], e = 0, i = this.vo.positions.sprinting.startX;
            i += 800;
            var _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), i += 800;
            _ = t[e++ % t.length];
            this._createScenery(_, i, -132), this._createScenery(se.CAMERA, this.vo.positions.sprinting.startX, -135), this._createScenery(se.CAMERA, this.vo.positions.sprinting.finishX, -135);
            for (var t = this._tools.shuffle([se.JUDGE_1, se.JUDGE_2, se.JUDGE_3, se.JUDGE_4, se.JUDGE_5, se.JUDGE_6, se.JUDGE_7]), e = 0, a = [this.vo.positions.sprinting.startX, this.vo.positions.sprinting.finishX], r = 0; r < a.length;) {
                i = a[r];
                ++r;
                var o = t[e++ % t.length];
                this._createScenery(o, i - 100 + R.random(64), -160 - R.random(10));
                var h = t[e++ % t.length];
                this._createScenery(h, i - 100 + R.random(64) + 64, -160 - R.random(10));
                h = t[e++ % t.length];
                this._createScenery(h, i - 100 + R.random(64) + 128, -160 - R.random(10))
            }
            for (i = this.vo.positions.sprinting.startX; i < this.vo.positions.sprinting.finishX;) i += R.random(64) + 64, Math.random() < .85 ? i += 256 : (o = t[e++ % t.length], this._createScenery(o, i, -160 - R.random(10)));
            this._createScenery(se.BLOCKS, this.vo.positions.sprinting.blocksX, this.vo.positions.sprinting.lane1Y), this._createScenery(se.BLOCKS, this.vo.positions.sprinting.blocksX, this.vo.positions.sprinting.lane2Y), this._createScenery(se.BLOCKS, this.vo.positions.sprinting.blocksX, this.vo.positions.sprinting.lane3Y), this._createScenery(se.BLOCKS, this.vo.positions.sprinting.blocksX, this.vo.positions.sprinting.lane4Y)
        },
        __class__: ge
    }), (e["cbctaf.game.LocationThrow"] = fe).__name__ = "cbctaf.game.LocationThrow", fe.__super__ = Qt, fe.prototype = t(Qt.prototype, {
        _getCameraTarget: function() {
            var t = null != this._javelin && 750 < this._javelin._age,
                e = (t ? this._javelin : this._player).position,
                i = t ? 5 * this._javelin.getSpeed() : 20 * this._player.getSpeed(),
                t = (e.z - this._renderer.height) / (this.vo.height - 2 * this._renderer.height);
            return {
                x: (Math.min(e.x + i, this.vo.positions.sprinting.finishX) - this._renderer.width) / (this.vo.width - 2 * this._renderer.width) * this.vo.width,
                y: e.y,
                z: (1 - Math.pow(1 < t ? 1 : t < 0 ? 0 : t, .25)) * this.vo.height
            }
        },
        _init: function() {
            var t = this;
            Qt.prototype._init.call(this), this.addEntity(this._player = new Se(this._kernel, this, ae.HUMAN, this.vo.positions.throwing.startX, this.vo.positions.throwing.laneY, ns(this, this._createJavelin))), this._createDelay(function() {
                t.hud.configureAlert(t._kernel.getConfig("gui.scenes.game.hud.alerts.jump.start")), t._player.setStrategy(he.QUICKING)
            }, 4e3)
        },
        _createAllScenery: function() {
            Qt.prototype._createAllScenery.call(this);
            for (var t = this._tools.shuffle([se.FLAG_1, se.FLAG_2, se.FLAG_3, se.FLAG_4, se.FLAG_5, se.FLAG_6, se.FLAG_7, se.FLAG_8, se.FLAG_9, se.FLAG_10, se.FLAG_11, se.FLAG_12, se.FLAG_13, se.FLAG_14, se.FLAG_15, se.FLAG_16]), e = 0, i = 0; i < this.vo.positions.throwing.launchX - 256;) {
                i += 200;
                var s = t[e++ % t.length];
                this._createScenery(s, i, -175, 0)
            }
            for (t = [se.BANNER_1, se.BANNER_2], e = 0, i = 0; i < this.vo.positions.throwing.launchX - 256;) {
                i += 288;
                var n = t[e++ % t.length];
                this._createScenery(n, i, -200)
            }
            for (var t = [se.MARKER_20, se.MARKER_30, se.MARKER_40, se.MARKER_50, se.MARKER_60, se.MARKER_70, se.MARKER_80, se.MARKER_90], _ = [3880, 4760, 5610, 6440, 7250, 8050, 8865, 9670], e = 0, a = 0; a < _.length;) {
                i = _[a];
                ++a;
                var r = t[e++ % t.length];
                this._createScenery(r, i, -200)
            }
            this._createScenery(se.MARKER, this.vo.positions.throwing.startX - 240, -90), this._createScenery(se.MARKER, this.vo.positions.throwing.startX - 240, -20), this._createScenery(se.MARKER, this.vo.positions.throwing.launchX - 80, -90), this._createScenery(se.MARKER, this.vo.positions.throwing.launchX - 80, -20), this._createScenery(se.CAMERA, this.vo.positions.throwing.launchX, -135);
            for (var t = this._tools.shuffle([se.JUDGE_1, se.JUDGE_2, se.JUDGE_3, se.JUDGE_4, se.JUDGE_5, se.JUDGE_6, se.JUDGE_7]), e = 0, o = [this.vo.positions.throwing.startX, this.vo.positions.throwing.launchX, this.vo.positions.throwing.launchX + 80 * this.levelVo.scoreBronze, this.vo.positions.throwing.launchX + 80 * this.levelVo.scoreSilver, this.vo.positions.throwing.launchX + 80 * this.levelVo.scoreGold], a = 0; a < o.length;) {
                i = o[a];
                ++a;
                var h = t[e++ % t.length];
                this._createScenery(h, i - 100 + R.random(64), -160 - R.random(10) + (i > this.vo.positions.throwing.launchX ? -30 : 0));
                h = t[e++ % t.length];
                this._createScenery(h, i - 100 + R.random(64) + 64, -160 - R.random(10) + (i > this.vo.positions.throwing.launchX ? -30 : 0))
            }
        },
        _createJavelin: function(t) {
            var e;
            return null != this._javelin && ((e = this._javelin).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())), this.addEntity(this._javelin = new le(this._kernel, this, t)), this._javelin
        },
        __class__: fe
    });
    var me = function(t, e, i) {
        this.positions = {
            sprinting: {
                blocksX: 1285,
                setX: 1320,
                startX: 1365,
                finishX: 9368,
                lane1Y: -94,
                lane2Y: -72,
                lane3Y: -49,
                lane4Y: -27
            },
            throwing: {
                startX: 760,
                launchX: 2520,
                laneY: -59
            },
            jumping: {
                startX: 2100,
                launchX: 5618,
                finishX: 6582,
                laneY: -59,
                distanceX: 6942,
                distanceY: -100
            }
        }, this.height = 363, this.width = 10920, Ft.call(this, t), this.type = e, this.textureLocationSky = this._assets.getAsset("assets/game/LocationSky.jpg"), this.textureLocationRays = this._assets.getAsset("assets/game/LocationRays.png"), this.textureLocationCrowd = this._getTextureLocationCrowd(), this.textureLocationGround1 = this._getTextureLocationGround1(i), this.textureLocationGround2 = this._getTextureLocationGround2(i)
    };
    (e["cbctaf.game.LocationVo"] = me).__name__ = "cbctaf.game.LocationVo", me.__super__ = Ft, me.prototype = t(Ft.prototype, {
        _getTextureLocationCrowd: function() {
            this.type;
            return this._assets.getAsset("assets/game/LocationCrowd.png")
        },
        _getTextureLocationGround1: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = "assets/game/LocationGroundSprint1.jpg";
                    break;
                case 1:
                    e = "assets/game/LocationGroundThrow1.jpg";
                    break;
                case 2:
                    e = "assets/game/LocationGroundJump1.jpg"
            }
            return this._assets.getAsset(e)
        },
        _getTextureLocationGround2: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = "assets/game/LocationGroundSprint2.jpg";
                    break;
                case 1:
                    e = "assets/game/LocationGroundThrow2.jpg";
                    break;
                case 2:
                    e = "assets/game/LocationGroundJump2.jpg"
            }
            return this._assets.getAsset(e)
        },
        __class__: me
    });
    var ye = function(t, e, i, s, n) {
        this._location = e, this.width = i, this.height = s, this._getRenderables = n, Ot.call(this, t)
    };
    (e["cbctaf.game.Renderer"] = ye).__name__ = "cbctaf.game.Renderer", ye.__super__ = Ot, ye.prototype = t(Ot.prototype, {
        _init: function() {
            Ot.prototype._init.call(this), this._context.cache(0, 0, this.width, this.height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null)
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t);
            var e = this._location.camera.getPosition(),
                t = Math.round(-e.x),
                e = Math.max(0, Math.round(e.z));
            this._drawLocationSky(t, e), this._drawLocationGround(t, e), this._drawLocationCrowd(t, e), this._drawLocationRays(t, e), this._drawRenderables(t, e)
        },
        _drawLocationSky: function(t, e) {
            this._context2d.save();
            var i = this._location.vo.textureLocationSky;
            this._context2d.translate(t / this._location.vo.width * (i.width - this.width), (1 - e / this._location.vo.height) * -(i.height - this.height) - 20), this._context2d.drawImage(i, 0, 0), this._context2d.restore()
        },
        _drawLocationCrowd: function(t, e) {
            this._context2d.save();
            var i = this._location.vo.textureLocationCrowd;
            this._context2d.translate(t / this._location.vo.width * (2048 - this.width), e - 512 + (this.height - 256) + 1), this._context2d.drawImage(i, 0, 0, 1024, 512, 0, 0, 1024, 512), this._context2d.drawImage(i, 0, 512, 1024, 512, 1024, 0, 1024, 512), this._context2d.restore()
        },
        _drawLocationGround: function(t, e) {
            this._context2d.save();
            var i = this._location.vo.textureLocationGround1,
                s = this._location.vo.textureLocationGround2,
                n = t / this._location.vo.width,
                t = 18.45 * n - 1.5;
            this._context2d.translate(-4095, this.height - 256 + e), this._context2d.transform(1, 0, t, 1, 0, 0), this._context2d.translate(4095, 0), this._context2d.translate(n * (5460 - this.width), 0), this._context2d.drawImage(i, 1023, 0, 1, 256, 1008, 0, 32, 256), this._context2d.drawImage(s, 1023, 0, 1, 256, 2032, 0, 32, 256), this._context2d.drawImage(i, 1023, 256, 1, 256, 3056, 0, 32, 256), this._context2d.drawImage(s, 1023, 256, 1, 256, 4080, 0, 32, 256), this._context2d.drawImage(i, 1023, 512, 1, 256, 5104, 0, 32, 256), this._context2d.drawImage(s, 1023, 512, 1, 256, 6128, 0, 32, 256), this._context2d.drawImage(i, 1021, 768, 1, 256, 7152, 0, 32, 256), this._context2d.drawImage(s, 1021, 768, 1, 256, 8176, 0, 32, 256), this._context2d.drawImage(i, 0, 0, 1024, 256, 0, 0, 1024, 256), this._context2d.drawImage(s, 0, 0, 1024, 256, 1024, 0, 1024, 256), this._context2d.drawImage(i, 0, 256, 1024, 256, 2048, 0, 1024, 256), this._context2d.drawImage(s, 0, 256, 1024, 256, 3072, 0, 1024, 256), this._context2d.drawImage(i, 0, 512, 1024, 256, 4096, 0, 1024, 256), this._context2d.drawImage(s, 0, 512, 1024, 256, 5120, 0, 1024, 256), this._context2d.drawImage(i, 0, 768, 1024, 256, 6144, 0, 1024, 256), this._context2d.drawImage(s, 0, 768, 1022, 256, 7168, 0, 1022, 256), this._context2d.scale(-1, -1), this._context2d.drawImage(s, 0, 768, 1022, 256, -9212, -256, 1022, 256), this._context2d.drawImage(i, 0, 768, 1024, 256, -10236, -256, 1024, 256), this._context2d.restore()
        },
        _drawLocationRays: function(t, e) {
            this._context2d.save();
            var i = this._location.vo.textureLocationRays;
            this._context2d.translate(t / this._location.vo.width * (4 * i.width - this.width), 0);
            t = .5 * Math.sin(this._age / 1e3) + .5 * Math.cos(this._age / 650) + 1.5;
            t *= Math.pow((this.height - e) / this.height, 2), this._context2d.globalAlpha = t, this._context2d.globalCompositeOperation = "lighter";
            for (var s = 0; s < 4;) {
                var n = s++;
                this._context2d.drawImage(i, n * i.width, 0)
            }
            this._context2d.restore()
        },
        _drawRenderables: function(t, e) {
            var i = this._getRenderables();
            i.sort(ns(this, this._sortRenderable));
            for (var s = 0; s < i.length;) {
                var n = i[s];
                ++s;
                var _ = n.getTexture(),
                    a = this._location.camera.createRenderableTransformFromWorldCoords(n.position.x, n.position.y, n.position.z, _.scale),
                    r = a.x,
                    n = a.y;
                this._context2d.save(), _.isFlip && (this._context2d.translate(r, 0), this._context2d.scale(_.isFlip ? -1 : 1, 1), this._context2d.translate(-r, 0)), this._context2d.translate(0, this.height), this._context2d.scale(a.scale, a.scale), this._context2d.translate(-(_.width * _.originX), -(_.height * _.originY)), this._context2d.translate(r / a.scale, n / a.scale), 0 != _.rotation && (this._context2d.translate(_.width * _.originX, _.height * _.originY), this._context2d.rotate(_.rotation), this._context2d.translate(-(_.width * _.originX), -(_.height * _.originY))), this._context2d.globalAlpha = _.alpha, this._context2d.globalCompositeOperation = _.isAdd ? "lighter" : "source-over", this._context2d.drawImage(_.source, _.x, _.y, _.width, _.height, 0, 0, _.width, _.height), this._context2d.restore()
            }
        },
        _sortRenderable: function(t, e) {
            return t.position.y - e.position.y | 0
        },
        __class__: ye
    });
    var xe = function(t, e, i, s, n, _) {
        this.isRendered = !0, this.type = e, this._location = i, this.position = {
            x: s,
            y: n,
            z: _
        }, Ot.call(this, t)
    };
    (e["cbctaf.game.Scenery"] = xe).__name__ = "cbctaf.game.Scenery", xe.__interfaces__ = [Yt], xe.__super__ = Ot, xe.prototype = t(Ot.prototype, {
        getTexture: function() {
            return this._texture
        },
        _getOffsetY: function() {
            switch (this.type._hx_index) {
                case 2:
                    return .83;
                case 20:
                    return .5;
                case 21:
                case 22:
                case 23:
                case 24:
                default:
                    return .9
            }
        },
        _getScale: function() {
            switch (this.type._hx_index) {
                case 2:
                    return .7;
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                    return 1.25;
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                    return .65;
                case 28:
                    return .5;
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                    return .7;
                default:
                    return 1
            }
        },
        _getIsFlip: function() {
            var t = Math.random() < .5;
            switch (this.type._hx_index) {
                case 21:
                case 22:
                case 23:
                case 24:
                case 28:
                    return t;
                default:
                    return !1
            }
        },
        _init: function() {
            Ot.prototype._init.call(this), this._source = this._assets.getAsset("assets/game/Scenery.png"), this._spriteSheet = new createjs.SpriteSheet(this._assets.getAsset("assets/game/Scenery.json"));
            var t = this._tools.toWords(R.string(this.type)).split(" ").join(""),
                t = this._spriteSheet.getAnimation(t);
            this._frame = this._spriteSheet.getFrame(t.frames[0]), this._texture = {
                source: this._source,
                x: this._frame.rect.x,
                y: this._frame.rect.y,
                width: this._frame.rect.width,
                height: this._frame.rect.height,
                originX: .5,
                originY: this._getOffsetY(),
                scale: this._getScale(),
                isFlip: this._getIsFlip(),
                isAdd: !1,
                alpha: 1,
                rotation: 0
            }
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t)
        },
        __class__: xe
    });
    var Ee = function(t, e, i, s, n, _) {
        this._isJumpStarted = !1, this._jumpPoses = [oe.JUMP_HOP, oe.JUMP_SKIP, oe.JUMP_JUMP], this._jumpIndex = 0, Zt.call(this, t, e, i, s, n, _)
    };
    (e["cbctaf.game.UnitJump"] = Ee).__name__ = "cbctaf.game.UnitJump", Ee.__super__ = Zt, Ee.prototype = t(Zt.prototype, {
        setStrategy: function(t) {
            var e = this;
            Zt.prototype.setStrategy.call(this, t), this._strategy == he.PREPARING && this.setAnimation(oe.JUMP_IDLE, !0), this._strategy == he.QUICKING && (this._isStarted = !0, this._inputs.isQuick = this._isHuman, this.setAnimation(oe.JUMP_START, !0)), this._strategy == he.SKILLING && (this._inputs.isQuick = !1, this._isBulletTime = !0, this.setAnimation(this._jumpPoses[this._jumpIndex++], !0), this._createDelay(function() {
                e._inputs.isSkill = !0
            }, 500)), this._strategy == he.FINISHING && (this._isFinished = !0, this._inputs.isQuick = !1, this._inputs.isSkill = !1, this._kernel.audio.start("JumpImpact", At.EFFECTS, 1, 0, .75), this._isHuman && this._location.setScore(this._score))
        },
        _init: function() {
            Zt.prototype._init.call(this), this._animation.pose = oe.JUMP_IDLE, this._animation.defaultNextPose = oe.JUMP_RUN
        },
        _updater: function(t) {
            null == t && (t = 0), Zt.prototype._updater.call(this, t), this._score = this._calculateScore(), this._isHuman && (this._location.hud.configureCurrent(this._score), this._location.hud.configureTargets(this._score)), this._isStarted && !this._isFinished && this._strategy == he.QUICKING && this.position.x > this._location.vo.positions.jumping.launchX - 80 * (this._bias.timing + .1) && this.setStrategy(he.SKILLING)
        },
        _mover: function() {
            Zt.prototype._mover.call(this), this.position.z < 0 && (this.position.z = 0, this._momentum.z = 0, this.setStrategy(this._jumpIndex < 3 ? he.SKILLING : he.FINISHING)), 0 < this.position.z && this._jumpIndex < 3 && this.position.x > this._location.vo.positions.jumping.finishX - 40 && (this.position.x -= this._momentum.x), this._isFinished && (this._momentum.x = 0)
        },
        _skillComplete: function(t) {
            var e;
            switch (Zt.prototype._skillComplete.call(this, t), this._momentum.x *= Math.pow(t, .25), this._momentum.x = Math.max(.875 * this._momentum.x, 1.5 * this._inputs.boost) + 2 * this._jumpIndex, this._momentum.z = .5 * (18 + this._momentum.x * (.5 * t + .5) * this._bias.power * .25), this.position.z = 4 * this._momentum.z, this._isBulletTime = !1, this._isJumpStarted = !0, this._jumpIndex) {
                case 1:
                    e = "Jump1";
                    break;
                case 2:
                    e = "Jump2";
                    break;
                case 3:
                    e = "Jump3";
                    break;
                default:
                    e = "Jump3"
            }
            this._kernel.audio.start("ThrowLaunch", At.EFFECTS, 1, 0, .25), this._kernel.audio.start(e, At.EFFECTS, 1, 0, .35)
        },
        _calculateScore: function() {
            return !this._isFinished && this._isJumpStarted ? Math.max(0, (this.position.x - this._location.vo.positions.jumping.launchX - 8) / 80) : this._score
        },
        __class__: Ee
    });
    var we = function(t, e, i, s, n, _) {
        Zt.call(this, t, e, i, s, n, _)
    };
    (e["cbctaf.game.UnitSprint"] = we).__name__ = "cbctaf.game.UnitSprint", we.__super__ = Zt, we.prototype = t(Zt.prototype, {
        setStrategy: function(t) {
            var e = this;
            Zt.prototype.setStrategy.call(this, t), this._strategy == he.PREPARING && this._createDelay(function() {
                e.setAnimation(oe.SPRINT_SET, !0)
            }, Math.round(250 * this._bias.timing)), this._strategy == he.QUICKING && (this._isStarted = !0, this._createDelay(function() {
                e._inputs.isQuick = e._isHuman, e.setAnimation(oe.SPRINT_START, !0)
            }, Math.round(250 * this._bias.timing))), this._strategy == he.FINISHING && (this._isFinished = !0, this._inputs.isQuick = !1, this._momentum.x = 40, this._isHuman && this._location.setScore(this._score))
        },
        _init: function() {
            Zt.prototype._init.call(this), this._animation.pose = oe.SPRINT_IDLE, this._animation.defaultNextPose = oe.SPRINT_RUN
        },
        _updater: function(t) {
            null == t && (t = 0), Zt.prototype._updater.call(this, t), this._isStarted && !this._isFinished && this._score++, this._isHuman && (this._location.hud.configureCurrent(this._score), this._location.hud.configureTargets(this._score)), this._isStarted && !this._isFinished && this._strategy == he.QUICKING && this.position.x > this._location.vo.positions.sprinting.finishX && this.setStrategy(he.FINISHING)
        },
        __class__: we
    });
    var Se = function(t, e, i, s, n, _) {
        null == n && (n = 0), null == s && (s = 0), this._createJavelin = _, Zt.call(this, t, e, i, s, n)
    };
    (e["cbctaf.game.UnitThrow"] = Se).__name__ = "cbctaf.game.UnitThrow", Se.__super__ = Zt, Se.prototype = t(Zt.prototype, {
        setStrategy: function(t) {
            var e = this;
            Zt.prototype.setStrategy.call(this, t), this._strategy == he.PREPARING && this.setAnimation(oe.THROW_IDLE, !0), this._strategy == he.QUICKING && (this._isStarted = !0, this._inputs.isQuick = this._isHuman, this.setAnimation(oe.THROW_START, !0)), this._strategy == he.SKILLING && (this._inputs.isQuick = !1, this._isBulletTime = !0, this.setAnimation(oe.THROW_FINISH, !0), this._createDelay(function() {
                e._inputs.isSkill = !0
            }, 500)), this._strategy == he.FINISHING && (this._isFinished = !0, this._inputs.isQuick = !1, this._inputs.isSkill = !1)
        },
        _init: function() {
            Zt.prototype._init.call(this), this._animation.pose = oe.THROW_IDLE, this._animation.defaultNextPose = oe.THROW_RUN, this._inputs.momentumMinScale = .25
        },
        _updater: function(t) {
            null == t && (t = 0), Zt.prototype._updater.call(this, t), this._isJavelinFinished || (this._score = this._calculateScore()), this._isHuman && (this._location.hud.configureCurrent(this._score), this._location.hud.configureTargets(this._score)), this._isStarted && !this._isFinished && this._strategy == he.QUICKING && this.position.x > this._location.vo.positions.throwing.launchX - 80 * (this._bias.timing + 1.2) && this.setStrategy(he.SKILLING)
        },
        _skillComplete: function(t) {
            var e = this;
            Zt.prototype._skillComplete.call(this, t);
            var i = Math.max(100, this._momentum.x * this._bias.power * 6.2);
            this._createDelay(function() {
                e._javelin = e._createJavelin({
                    x: e.position.x + 60,
                    y: e.position.y,
                    z: e.position.z + 150
                }), e._javelin.launch(i, t, function() {
                    e._score = e._calculateScore(), e._location.setScore(e._score), e._isJavelinFinished = !0
                })
            }, Math.round(1e3 / this._factory.targetFramerate * 8)), this._isBulletTime = !1, this._momentum.x = 0, this.setStrategy(he.FINISHING)
        },
        _calculateScore: function() {
            return this._isJavelinFinished ? this._score : null == this._javelin ? 0 : Math.max(0, (this._javelin.position.x - this._location.vo.positions.throwing.launchX) / 80)
        },
        __class__: Se
    });
    var ve = function(t, e, i, s) {
        var n;
        switch (null == s && (s = 1), this._MAX_UPGRADES = 8, Ft.call(this, t), this.type = e, this.sport = null == i ? ne.SPRINT : i, this.title = this._getTitle(), this.subtitle = this._getSubtitle(), this.variant = s, this.quicks = this._getQuicks(), this.type._hx_index) {
            case 0:
                n = "assets/game/UnitA.json";
                break;
            case 1:
                n = "assets/game/UnitB.json"
        }
        switch (this._spriteSheet = new createjs.SpriteSheet(this._assets.getAsset(n)), this.type._hx_index) {
            case 0:
                n = "assets/game/UnitA.png";
                break;
            case 1:
                n = "assets/game/UnitB.png"
        }
        this._source = this._assets.getAsset(n)
    };
    (e["cbctaf.game.UnitVo"] = ve).__name__ = "cbctaf.game.UnitVo", ve.__super__ = Ft, ve.prototype = t(Ft.prototype, {
        _getTitle: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = "gui.units.unitA.title";
                    break;
                case 1:
                    t = "gui.units.unitB.title"
            }
            return this._kernel.getConfig(t)
        },
        _getSubtitle: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = "gui.units.unitA.subtitle";
                    break;
                case 1:
                    t = "gui.units.unitB.subtitle"
            }
            return this._kernel.getConfig(t)
        },
        _getQuicks: function() {
            if ("true" == this._kernel.getConfig("settings.overrideDefaultQuicks.random")) {
                for (var t = [!1], e = 0; e < 1e3;) {
                    e++;
                    t.push(Math.random() < .5)
                }
                return t
            }
            if ("qtequicks" == this._kernel.getConfig("settings.overrideDefaultQuicks.safety")) {
                var i;
                switch (this.sport._hx_index) {
                    case 0:
                        i = "settings.overrideDefaultQuicks.valueSprint";
                        break;
                    case 1:
                        i = "settings.overrideDefaultQuicks.valueThrow";
                        break;
                    case 2:
                        i = "settings.overrideDefaultQuicks.valueJump"
                }
                for (var s = c.replace(R.string(this._kernel.getConfig(i)), " ", "").split(","), n = new Array(s.length), e = 0, _ = s.length; e < _;) {
                    var a = e++;
                    n[a] = "L" == s[a]
                }
                return n
            }
            switch (this.sport._hx_index) {
                case 0:
                    return [!1];
                case 1:
                    return [!0, !1];
                case 2:
                    return [!1, !0, !1, !0, !1, !1, !0, !0, !1, !1, !0, !0, !1, !1, !1, !0, !0, !0, !1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1, !1, !1, !0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !0, !0, !0, !0, !0, !0, !1, !1, !1, !1, !1, !1, !0, !0, !0, !0, !0, !0]
            }
        },
        getDefault: function(t) {
            if ("hypersurge" == this._kernel.getConfig("settings.overrideDefaultUnitStats.safety")) return 0 | this._tools.limit(R.parseInt(this._kernel.getConfig("settings.overrideDefaultUnitStats.value")), 3, 5);
            switch (this.type._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            return 3;
                        case 1:
                            return 4;
                        case 2:
                            return 2;
                        case 3:
                            return 5
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return 5;
                        case 1:
                            return 2;
                        case 2:
                            return 3;
                        case 3:
                            return 4
                    }
            }
        },
        getUpgrade: function(t) {
            switch (t._hx_index) {
                case 0:
                    return this._session.getUpgrade(ce.UPGRADE_MOVEMENT, this.type);
                case 1:
                    return this._session.getUpgrade(ce.UPGRADE_TIMING, this.type);
                case 2:
                    return this._session.getUpgrade(ce.UPGRADE_POWER, this.type);
                case 3:
                    return this._session.getUpgrade(ce.UPGRADE_STAMINA, this.type)
            }
        },
        getTotal: function(t) {
            var e, i = this._MAX_UPGRADES;
            switch (t._hx_index) {
                case 0:
                    e = this.getDefault(ce.UPGRADE_MOVEMENT) + this.getUpgrade(ce.UPGRADE_MOVEMENT);
                    break;
                case 1:
                    e = this.getDefault(ce.UPGRADE_TIMING) + this.getUpgrade(ce.UPGRADE_TIMING);
                    break;
                case 2:
                    e = this.getDefault(ce.UPGRADE_POWER) + this.getUpgrade(ce.UPGRADE_POWER);
                    break;
                case 3:
                    e = this.getDefault(ce.UPGRADE_STAMINA) + this.getUpgrade(ce.UPGRADE_STAMINA)
            }
            return 0 | Math.min(i, e)
        },
        getAvailable: function(t) {
            switch (t._hx_index) {
                case 0:
                    return this._MAX_UPGRADES - this.getTotal(ce.UPGRADE_MOVEMENT);
                case 1:
                    return this._MAX_UPGRADES - this.getTotal(ce.UPGRADE_TIMING);
                case 2:
                    return this._MAX_UPGRADES - this.getTotal(ce.UPGRADE_POWER);
                case 3:
                    return this._MAX_UPGRADES - this.getTotal(ce.UPGRADE_STAMINA)
            }
        },
        getBias: function(t, e, i, s) {
            null == s && (s = 0);
            null != i && ((i = this.getTotal(i)) < 0 && (i = 0), i > this._MAX_UPGRADES && (i = this._MAX_UPGRADES), s = i / this._MAX_UPGRADES);
            e -= t;
            return t + Math.pow(s, this._factory.accessibility.getAdjustedGameplayChallenge()) * e
        },
        getPercentageComplete: function() {
            return (this.getTotal(ce.UPGRADE_MOVEMENT) + this.getTotal(ce.UPGRADE_TIMING) + this.getTotal(ce.UPGRADE_POWER) + this.getTotal(ce.UPGRADE_STAMINA)) / (4 * this._MAX_UPGRADES)
        },
        getFrame: function(t) {
            var e = c.replace(this._tools.toWords(A[t.__enum__].__constructs__[t._hx_index]._hx_name), " ", "_"),
                t = this._spriteSheet.getAnimation(e),
                e = null;
            return null != t && ((e = this._spriteSheet.getFrame(t.frames[0])).image = this._source), e
        },
        getFrameTypes: function(i) {
            function t(t, e) {
                return null == e && (e = 4), s._createFrameTypes(s.variant, i, t, e)
            }
            var s = this;
            switch (i._hx_index) {
                case 0:
                    return this._joinArrays([t(1, 1)]);
                case 1:
                    return this._joinArrays([t(1), t(2), t(3)]);
                case 2:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3, 3)]);
                case 3:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 3), t(5, 3), t(6, 3)]);
                case 4:
                    return this._joinArrays([t(1, 1)]);
                case 5:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3)]);
                case 6:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 3), t(5, 3), t(6, 3)]);
                case 7:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 3), t(5, 3), t(6, 3), t(7, 3)]);
                case 8:
                    return this._joinArrays([t(1, 1)]);
                case 9:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3)]);
                case 10:
                    return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 3), t(5, 3), t(6, 3)]);
                case 11:
                case 12:
                    return this._joinArrays([t(1), t(2, 5), t(3)]);
                case 13:
                    return this._joinArrays([t(1), t(2, 5), t(3, 5), t(4, 6), t(5, 3), t(6)])
            }
        },
        _createFrameTypes: function(t, e, i, s) {
            var n;
            switch (null == s && (s = 1), null == t && (t = 1), t < 1 && (t = 1), 4 < t && (t = 4), s < 1 && (s = 1), --t, --i, e._hx_index) {
                case 0:
                    n = [
                        [re.SPRINT_1_START1],
                        [re.SPRINT_2_START1],
                        [re.SPRINT_3_START1],
                        [re.SPRINT_4_START1]
                    ][t][i];
                    break;
                case 1:
                    n = [
                        [re.SPRINT_1_SET1, re.SPRINT_1_SET2, re.SPRINT_1_SET3],
                        [re.SPRINT_2_SET1, re.SPRINT_2_SET2, re.SPRINT_2_SET3],
                        [re.SPRINT_3_SET1, re.SPRINT_3_SET2, re.SPRINT_3_SET3],
                        [re.SPRINT_4_SET1, re.SPRINT_4_SET2, re.SPRINT_4_SET3]
                    ][t][i];
                    break;
                case 2:
                    n = [
                        [re.SPRINT_1_START1, re.SPRINT_1_START2, re.SPRINT_1_START3],
                        [re.SPRINT_2_START1, re.SPRINT_2_START2, re.SPRINT_2_START3],
                        [re.SPRINT_3_START1, re.SPRINT_3_START2, re.SPRINT_3_START3],
                        [re.SPRINT_4_START1, re.SPRINT_4_START2, re.SPRINT_4_START3]
                    ][t][i];
                    break;
                case 3:
                    n = [
                        [re.SPRINT_1_RUN1, re.SPRINT_1_RUN2, re.SPRINT_1_RUN3, re.SPRINT_1_RUN4, re.SPRINT_1_RUN5, re.SPRINT_1_RUN6],
                        [re.SPRINT_2_RUN1, re.SPRINT_2_RUN2, re.SPRINT_2_RUN3, re.SPRINT_2_RUN4, re.SPRINT_2_RUN5, re.SPRINT_2_RUN6],
                        [re.SPRINT_3_RUN1, re.SPRINT_3_RUN2, re.SPRINT_3_RUN3, re.SPRINT_3_RUN4, re.SPRINT_3_RUN5, re.SPRINT_3_RUN6],
                        [re.SPRINT_4_RUN1, re.SPRINT_4_RUN2, re.SPRINT_4_RUN3, re.SPRINT_4_RUN4, re.SPRINT_4_RUN5, re.SPRINT_4_RUN6]
                    ][t][i];
                    break;
                case 4:
                    n = [re.THROW_1_START1][i];
                    break;
                case 5:
                    n = [re.THROW_1_START1, re.THROW_1_START2, re.THROW_1_START3][i];
                    break;
                case 6:
                    n = [re.THROW_1_RUN1, re.THROW_1_RUN2, re.THROW_1_RUN3, re.THROW_1_RUN4, re.THROW_1_RUN5, re.THROW_1_RUN6][i];
                    break;
                case 7:
                    n = [re.THROW_1_FINISH1, re.THROW_1_FINISH2, re.THROW_1_FINISH3, re.THROW_1_FINISH4, re.THROW_1_FINISH5, re.THROW_1_FINISH6, re.THROW_1_FINISH7][i];
                    break;
                case 8:
                    n = [re.JUMP_1_IDLE][i];
                    break;
                case 9:
                    n = [re.JUMP_1_START1, re.JUMP_1_START2, re.JUMP_1_START3][i];
                    break;
                case 10:
                    n = [re.JUMP_1_RUN1, re.JUMP_1_RUN2, re.JUMP_1_RUN3, re.JUMP_1_RUN4, re.JUMP_1_RUN5, re.JUMP_1_RUN6][i];
                    break;
                case 11:
                    n = [re.JUMP_1_HOP1, re.JUMP_1_HOP2, re.JUMP_1_HOP3][i];
                    break;
                case 12:
                    n = [re.JUMP_1_SKIP1, re.JUMP_1_SKIP2, re.JUMP_1_SKIP3][i];
                    break;
                case 13:
                    n = [re.JUMP_1_JUMP1, re.JUMP_1_JUMP2, re.JUMP_1_JUMP3, re.JUMP_1_JUMP4, re.JUMP_1_JUMP5, re.JUMP_1_JUMP6][i]
            }
            for (var _ = [], a = 0, r = s; a < r;) {
                a++;
                null != n && _.push(n)
            }
            return _
        },
        _joinArrays: function(t) {
            for (var e = [], i = 0; i < t.length;) {
                var s = t[i];
                ++i, e = e.concat(s)
            }
            return e
        },
        __class__: ve
    });
    var Te = function(t, e, i, s, n, _, a, r, o, h, c) {
        E.call(this, t, e, i, s, n, _, a, r, o, h, c)
    };

    function be(t, e, i, s) {
        null == s && (s = !1), null == i && (i = 100), null == e && (e = 100), this._assets = Fi.__cast(t.assets, Vt), this._factory = Fi.__cast(t.factory, Jt), this._session = Fi.__cast(t.get_session(), Wt), this._system = t.system, St.call(this, t, e, i, s)
    }

    function Ae(t) {
        be.call(this, t, 720, 405, !1)
    }

    function Ue(t, e) {
        this._sceneType = e, be.call(this, t, t.factory.width, t.factory.height, !1)
    }

    function Re(t, e, i, s, n, _, a, r, o) {
        null == n && (n = 0), null == s && (s = 0);
        var h = new wt(t),
            c = new wt(t);
        E.call(this, t, h, c, e, i, s, n, _, a, r, o)
    }

    function Ce(t, e, i, s) {
        null == e && (e = 1), this._scale = e, be.call(this, t, 192, 192, !1), this.setPosition(0 | i, 0 | s)
    }

    function Ie(t, e, i, s, n, _, a, r) {
        null == s && (s = 0), null == i && (i = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._title = e.toUpperCase(), this._buttonType = "TEXT", Te.call(this, t, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, Math.round(i), Math.round(s), n, _, a, r)
    }

    function ke(t, e, i, s, n, _, a) {
        null == i && (i = 0), null == e && (e = 0), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SETTINGS", Te.call(this, t, this._assets.overlayPauseUp, this._assets.overlayPauseOver, 50, 50, e, i, s, n, _, a)
    }

    function Pe(t, e, i, s, n, _, a, r) {
        null == s && (s = 0), null == i && (i = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SMALL", Te.call(this, t, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, i, s, n, _, a, r), this.setTitle(e)
    }

    function Ne(t, e) {
        null == e && (e = !0), this._isAnimated = e, be.call(this, t, 120, 32, !1)
    }

    function Me(t, e, i) {
        this._MEDAL_WIDTH = 100, this._unitType = e, this._medalType = i, be.call(this, t, 720, 405, !1)
    }

    function De(t, e, i, s, n, _) {
        this._isCoinsVisible = e, this._isCoinsVisible = !0, this._isDistance = i, this._scoreGold = s, this._scoreSilver = n, this._scoreBronze = _, be.call(this, t, t.factory.width, t.factory.height, !1)
    }(e["cbctaf.gui.AButton"] = Te).__name__ = "cbctaf.gui.AButton", Te.__super__ = E, Te.prototype = t(E.prototype, {
        get_isHighlighted: function() {
            return this.isHighlighted
        },
        get_isHighlightable: function() {
            return !!this.get_view().isVisible && this.get_view().get_isInViewStack()
        },
        getAccessibilityPosition: function() {
            return {
                x: this.get_view().globalX + .5 * this.width,
                y: this.get_view().globalY + .5 * this.height
            }
        },
        _init: function() {
            E.prototype._init.call(this), this._createHighlightView()
        },
        _updater: function(t) {
            null == t && (t = 0), E.prototype._updater.call(this, t), this._highlightBitmap.alpha = Math.sin(this._age / 200) / 8 + .5
        },
        highlight: function(t) {
            null == t && (t = !0), t ? this.onRollOver() : this.onRollOut(), this.isHighlighted = t, this._highlightView.set_isVisible(t)
        },
        _createHighlightView: function() {
            var t, e = new createjs.Container,
                i = new createjs.Bitmap(this._kernel.assets.getAsset("assets/gui/Buttons.png"));
            switch (this._buttonType) {
                case "ARROW_DOWN":
                    t = new createjs.Rectangle(400, 190, 86, 50);
                    break;
                case "ARROW_UP":
                    t = new createjs.Rectangle(305, 190, 86, 50);
                    break;
                case "ICON":
                    t = new createjs.Rectangle(220, 130, 85, 85);
                    break;
                case "SETTINGS":
                    t = new createjs.Rectangle(420, 120, 70, 70);
                    break;
                case "SMALL":
                    t = new createjs.Rectangle(305, 130, 120, 50);
                    break;
                case "TEXT":
                    t = new createjs.Rectangle(0, 130, 220, 85);
                    break;
                default:
                    t = new createjs.Rectangle(0, 0, 1, 1)
            }
            i.sourceRect = t, i.cache(0, 0, i.sourceRect.width, i.sourceRect.height), i.x = i.y = -10, e.addChild(i), this._highlightBitmap = i, this._highlightView = new wt(this._kernel, e), this._highlightView.set_isVisible(!1), this.get_view().addChild(this._highlightView, 100)
        },
        __class__: Te
    }), (e["cbctaf.gui.AGuiEntity"] = be).__name__ = "cbctaf.gui.AGuiEntity", be.__super__ = St, be.prototype = t(St.prototype, {
        _convertFloatToString: function(t, e, i) {
            var s = "" + (t = Math.round(t * Math.pow(10, e))),
                n = s.length;
            if (n <= e) {
                for (; n < e;) s = "0" + s, ++n;
                s = "0." + s
            } else s = C.substr(s, 0, s.length - e) + "." + C.substr(s, s.length - e, null);
            for (; s.length < i + 1;) s = "0" + s;
            return s
        },
        __class__: be
    }), (e["cbctaf.gui.Action"] = Ae).__name__ = "cbctaf.gui.Action", Ae.__super__ = be, Ae.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._context.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Action.png")))
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._bitmap.x = 20 * Math.sin(this._updates / 50) - 5
        },
        __class__: Ae
    }), (e["cbctaf.gui.Bg"] = Ue).__name__ = "cbctaf.gui.Bg", Ue.__super__ = be, Ue.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._texture = this._assets.getAsset("assets/gui/BgDetail.jpg"), this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getAbstract())), this._bitmap.cache(0, 0, this.width, this.height), this._context.addChild(this._bitmap), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getAbstract()))), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getGradient()))), this._canvas = this._bitmap.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._pattern = this._context2d.createPattern(this._texture, "repeat"), this._context2d.fillStyle = this._pattern
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._draw()
        },
        _draw: function() {
            var t = -2 * this._kernel._updates % this._texture.width,
                e = 10 * Math.sin(this._kernel._updates / 30) - 10;
            this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this.width, this.height), this._context2d.translate(-t, -e)
        },
        _getAbstract: function() {
            switch (this._sceneType._hx_index) {
                case 4:
                case 9:
                    return "assets/gui/BgAbstract4.png";
                case 7:
                    return "assets/gui/BgAbstract1.png";
                case 8:
                    return "assets/gui/BgAbstract2.png";
                case 15:
                    return "assets/gui/BgAbstract3.png";
                default:
                    return "assets/gui/BgAbstract4.png"
            }
        },
        _getGradient: function() {
            switch (this._sceneType._hx_index) {
                case 4:
                case 8:
                    return "assets/gui/BgGradient2.png";
                case 7:
                    return "assets/gui/BgGradient1.png";
                case 9:
                    return "assets/gui/BgGradient3.png";
                case 15:
                    return "assets/gui/Vignette.png";
                default:
                    return "assets/gui/BgGradient3.png"
            }
        },
        __class__: Ue
    }), (e["cbctaf.gui.BlankButton"] = Re).__name__ = "cbctaf.gui.BlankButton", Re.__super__ = E, Re.prototype = t(E.prototype, {
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, E.prototype._updater.call(this, t)
        },
        __class__: Re
    }), (e["cbctaf.gui.Burst"] = Ce).__name__ = "cbctaf.gui.Burst", Ce.__super__ = be, Ce.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._scale,
                e = Math.random() < .5 ? -1 : 1;
            this._context.scaleX = t * e;
            t = this._scale, e = Math.random() < .5 ? -1 : 1;
            this._context.scaleY = t * e, this._context.compositeOperation = "lighter", this._context.mouseEnabled = !1, this._context.mouseChildren = !1, this._sprite = new createjs.Sprite(this._createSpriteSheet(), 0), this._context.addChild(this._sprite), this._drop = 0, this._context.alpha *= this._factory.accessibility.getAdjustedVisualsIntensity()
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._sprite.gotoAndStop(this._updates - 1), 16 <= this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())), this._drop += Math.random(), this._context.y += this._drop
        },
        _createSpriteSheet: function() {
            return new createjs.SpriteSheet({
                framerate: this._factory.targetFramerate,
                images: [this._assets.getAsset("assets/gui/Burst.jpg")],
                frames: {
                    width: 192,
                    height: 192,
                    count: 16,
                    regX: 96,
                    regY: 96
                }
            })
        },
        __class__: Ce
    }), (e["cbctaf.gui.Button"] = Ie).__name__ = "cbctaf.gui.Button", Ie.__super__ = Te, Ie.prototype = t(Te.prototype, {
        _init: function() {
            Te.prototype._init.call(this);
            var t = 19;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                i = this.height - t,
                s = this._kernel.factory.createTextStyle(Bt.BUTTON);
            this._textUp = new Ze(this._kernel, e, i, this._title, s), this._textOver = new Ze(this._kernel, e, i, this._title, s), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        setTitle: function(t) {
            this._title != t && (this._title = t.toUpperCase(), this._textUp.set_text(this._textOver.set_text(this._title)))
        },
        onRollOver: function() {
            Te.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", At.INTERFACE, 0, 0, .25)
        },
        __class__: Ie
    }), (e["cbctaf.gui.ButtonSettings"] = ke).__name__ = "cbctaf.gui.ButtonSettings", ke.__super__ = Te, ke.prototype = t(Te.prototype, {
        __class__: ke
    }), (e["cbctaf.gui.ButtonSmall"] = Pe).__name__ = "cbctaf.gui.ButtonSmall", Pe.__super__ = Te, Pe.prototype = t(Te.prototype, {
        _init: function() {
            Te.prototype._init.call(this);
            var t = 5;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                i = this.height - t,
                s = this._kernel.factory.createTextStyle(Bt.BUTTON);
            s.size = 12, this._textUp = new Ze(this._kernel, e, i, this._title, s), (s = this._kernel.factory.createTextStyle(Bt.BUTTON)).size = 12, this._textOver = new Ze(this._kernel, e, i, this._title, s), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, Te.prototype._updater.call(this, t)
        },
        setTitle: function(t) {
            this._title = t, this._title = this._title.toUpperCase(), this._textUp.set_text(this._title), this._textOver.set_text(this._title)
        },
        onRollOver: function() {
            Te.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", At.INTERFACE, 0, 0, .25)
        },
        onClick: function() {
            Te.prototype.onClick.call(this), this.isOver = !1
        },
        __class__: Pe
    }), (e["cbctaf.gui.Coins"] = Ne).__name__ = "cbctaf.gui.Coins", Ne.__super__ = be, Ne.prototype = t(be.prototype, {
        _init: function() {
            var t = this;
            be.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.getCoins(), this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/game/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 0, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/game/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(320, 0, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._bitmap.y = 3, this._context.addChild(this._bitmap);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Ze(this._kernel, this._bitmap.x - 5, 20, R.string(this._kernel.getConfig("gui.scenes.game.hud.coins")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new Ze(this._kernel, this._bitmap.x - 5, 35, R.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._message.setPosition(.85 * this._message.width - 1, .5 * this._message.height + 5), this._message._context.regX = .85 * this._message.width, this._message._context.regY = .5 * this._message.height, this._session.get_isTester() && this.addEntity(new Re(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
                t._session.setCoins(null, t._session.getCoins() + 100)
            }), null, !0, 10), this.addEntity(this._message, null, !0, 1)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e, i = this;
            be.prototype._updater.call(this, t), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), this._age < 3e3 || (this._prevCoins != this._session.getCoins() && (t = .25, this._prevCoins + 1 != this._session.getCoins() && (t = .65, null != this._tweezer && ((e = this._tweezer).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())), this.addEntity(this._tweezer = new ji(this._kernel, function(t) {
                i._message._context.scaleX = i._message._context.scaleY = t
            }, 1.75, 1, 0, 1e3, null, Hi.EASE_OUT, Ji.QUARTIC))), this._kernel.audio.start("Coin", At.INTERFACE, 0, 0, t, null, !1)), this._prevCoins = this._session.getCoins(), this._displayValue != this._session.getCoins() && (e = this._tools, this._displayValue = Math.round(.9 * this._displayValue + .1 * this._session.getCoins()), Math.abs(this._displayValue - this._session.getCoins()) < 5 && (this._displayValue = this._session.getCoins()), this._message.set_text(R.string(this._displayValue))))
        },
        __class__: Ne
    }), (e["cbctaf.gui.Hero"] = Me).__name__ = "cbctaf.gui.Hero", Me.__super__ = be, Me.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._container = new createjs.Container, this._context.addChild(this._container), this._container.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getImage()))), this._medalBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HeroMedals.png"));
            var t = this._getMedalCol() * this._MEDAL_WIDTH;
            this._medalBitmap.sourceRect = new createjs.Rectangle(t, 0, this._MEDAL_WIDTH, this.height), this._medalBitmap.x = .5 * (this.width - this._MEDAL_WIDTH), this._medalType != ie.MEDAL_NONE && this._container.addChild(this._medalBitmap)
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._container.x = 10 * Math.sin(this._updates / 50)
        },
        _getImage: function() {
            switch (this._unitType._hx_index) {
                case 0:
                    return "assets/gui/HeroUnitA.png";
                case 1:
                    return "assets/gui/HeroUnitB.png"
            }
        },
        _getMedalCol: function() {
            switch (this._unitType._hx_index) {
                case 0:
                    switch (this._medalType._hx_index) {
                        case 0:
                        case 1:
                            return 0;
                        case 2:
                            return 1;
                        case 3:
                            return 2
                    }
                    break;
                case 1:
                    switch (this._medalType._hx_index) {
                        case 0:
                            return 0;
                        case 1:
                            return 3;
                        case 2:
                            return 4;
                        case 3:
                            return 5
                    }
            }
        },
        __class__: Me
    }), (e["cbctaf.gui.Hud"] = De).__name__ = "cbctaf.gui.Hud", De.__interfaces__ = [g], De.__super__ = be, De.prototype = t(be.prototype, {
        _init: function() {
            var e = this;
            be.prototype._init.call(this);
            var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
            t.sourceRect = new createjs.Rectangle(0, 0, this.width, 80), this._context.addChild(t), this._targets = new Ve(this._kernel, this._isDistance, this._scoreGold, this._scoreSilver, this._scoreBronze), this.addEntity(this._targets, null, !0, 10), this._targets.setPosition(20, 12), this._current = new Be(this._kernel, this._isDistance), this.addEntity(this._current, null, !0, 10), this._current.setPosition(this._current.x + 70, 12), this._coins = new Ne(this._kernel, !1), this.addEntity(this._coins, null, this._isCoinsVisible, 100), this._coins.setPosition(540, 12), this._alert = new Le(this._kernel), this.addEntity(this._alert, null, !0, 90), this._alert.setPosition(.5 * (this.width - this._alert.width), .26 * (this.height - this._alert.height)), this._prompt = new Oe(this._kernel), this.addEntity(this._prompt, null, !0, 20), this._prompt.setPosition(.5 * (this.width - this._prompt.width), .4 * (this.height - this._prompt.height));
            this._skill = new Ge(this._kernel), this.addEntity(this._skill, null, !0, 50), this._skill.setPosition(.5 * (this.width - this._skill.width), .84 * (this.height - this._skill.height)), this._quickLeft = new Fe(this._kernel, !0), this.addEntity(this._quickLeft, null, !0, 50), this._quickLeft.setPosition(.25 * (this.width - this._quickLeft.width), .84 * (this.height - this._quickLeft.height)), this._quickRight = new Fe(this._kernel, !1), this.addEntity(this._quickRight, null, !0, 50), this._quickRight.setPosition(.75 * (this.width - this._quickRight.width), .84 * (this.height - this._quickRight.height)), this._vignette = new ei(this._kernel, 0), this.addEntity(this._vignette, null, !0, 1), this.addEntity(new ji(this._kernel, function(t) {
                e._targets.set_y(t)
            }, -100, this._targets.y, 2e3, 1e3, 0, Hi.EASE_OUT, Ji.QUARTIC)), this.addEntity(new ji(this._kernel, function(t) {
                e._current.set_y(t)
            }, -100, this._current.y, 2e3, 1e3, 0, Hi.EASE_OUT, Ji.QUARTIC)), this.addEntity(new ji(this._kernel, function(t) {
                e._coins.set_y(t)
            }, -100, this._coins.y, 3e3, 1e3, 0, Hi.EASE_OUT, Ji.QUARTIC))
        },
        configureTargets: function(t) {
            this._targets.configure(t)
        },
        configureCurrent: function(t) {
            this._current.configure(t)
        },
        configureAlert: function(t) {
            this._alert.configure(t)
        },
        configurePrompt: function(t, e) {
            null == e && (e = !1), this._prompt.configure(t, e)
        },
        configureSkill: function(t) {
            this._skill.configure(t)
        },
        configureQuick: function(t, e) {
            null == e && (e = !1), t ? (this._quickLeft.configure(e), this._quickRight.configure(!e)) : (this._quickLeft.configure(!1), this._quickRight.configure(!1))
        },
        activateQuick: function(t) {
            return (t ? this._quickLeft : this._quickRight).activate()
        },
        configureVignette: function(t) {
            this._vignette.set_alpha(t)
        },
        __class__: De
    });
    var Le = function(t) {
        be.call(this, t, 500, 80, !1)
    };
    (e["cbctaf.gui.HudAlert"] = Le).__name__ = "cbctaf.gui.HudAlert", Le.__super__ = be, Le.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_ALERT);
            this._title = new Ze(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10)
        },
        configure: function(t) {
            var e, i, s, n = this;
            "___" != t && (this._value = t, this._title.set_text(t.toUpperCase()), this._context.alpha = 1, this._context.uncache(), e = ns(h = this._context, h.cache), i = this.width, s = this.height, fi.delay(function() {
                e(0, 0, i, s)
            }, 100), null != this._tweezer && ((t = this._tweezer).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezer = new ji(this._kernel, function(t) {
                n._context.alpha = t
            }, 1, 0, 1e3, 500, 0, Hi.EASE_OUT, Ji.QUARTIC)))
        },
        __class__: Le
    });
    var Be = function(t, e) {
        this._delimeter = ".", this._isDistance = e, be.call(this, t, 220, 60, !1)
    };
    (e["cbctaf.gui.HudCurrent"] = Be).__name__ = "cbctaf.gui.HudCurrent", Be.__super__ = be, Be.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Ze(this._kernel, this.width, 20, R.string(this._kernel.getConfig(this._isDistance ? "gui.scenes.game.hud.current.distance" : "gui.scenes.game.hud.current.time")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 100, i = 0, s = (this._isDistance ? this._convertFloatToString(0, 2, 4) : C.substr(this._tools.convertUpdatesToFormattedTime(0, this._delimeter), 3, null)).split(""); i < s.length;) {
                var n = s[i];
                ++i;
                var _ = this._createDigit(n, e, -5);
                this._digits.push(_), this.addEntity(_, null, !0, 10), e += n == this._delimeter ? 10 : 28
            }
        },
        configure: function(t) {
            if (this._value != t) {
                this._value = t;
                for (var e = 0, i = 0, s = (this._isDistance ? this._convertFloatToString(this._value, 2, 4) : C.substr(this._tools.convertUpdatesToFormattedTime(0 | this._value, this._delimeter), 3, null)).split(""); i < s.length;) {
                    var n = s[i];
                    ++i, this._digits[e].set_text(n), ++e
                }
            }
        },
        _createDigit: function(t, e, i) {
            var s = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_CURRENT),
                s = new Ze(this._kernel, 40, 40, t, s);
            return s.setPosition(e, i), s
        },
        __class__: Be
    });
    var Oe = function(t) {
        be.call(this, t, 300, 30, !1)
    };
    (e["cbctaf.gui.HudPrompt"] = Oe).__name__ = "cbctaf.gui.HudPrompt", Oe.__super__ = be, Oe.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_PROMPT);
            this._title = new Ze(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10)
        },
        configure: function(t, e) {
            var i, s, n;
            null == e && (e = !1), "___" != t && (e && this._value == t || (this._value = t, this._title.set_text(t.toUpperCase()), this._context.alpha = 1, this._context.uncache(), i = ns(h = this._context, h.cache), s = this.width, n = this.height, fi.delay(function() {
                i(0, 0, s, n)
            }, 100), this._transitionIn()))
        },
        _transitionIn: function() {
            var t, e = this;
            null != this._tweezerIn && ((t = this._tweezerIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezerOut && ((t = this._tweezerOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezerIn = new ji(this._kernel, function(t) {
                e._context.alpha = t
            }, 0, 1, 0, 250, 0, Hi.EASE_IN, Ji.QUARTIC, ns(this, this._transitionOut)))
        },
        _transitionOut: function() {
            var t, e = this;
            null != this._tweezerIn && ((t = this._tweezerIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezerOut && ((t = this._tweezerOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezerOut = new ji(this._kernel, function(t) {
                e._context.alpha = t
            }, 1, 0, 750, 250, 0, Hi.EASE_OUT, Ji.QUARTIC, function() {
                e._value = ""
            }))
        },
        __class__: Oe
    });
    var Fe = function(t, e) {
        this._tweezers = {
            transitionInRing: null,
            transitionInButton: null,
            transitionInComplete: null,
            transitionOut: null,
            transitionWrong: null
        }, this._values = {
            isOn: !1
        }, this._isLeft = e, be.call(this, t, 100, 100, !1)
    };
    (e["cbctaf.gui.HudQuick"] = Fe).__name__ = "cbctaf.gui.HudQuick", Fe.__super__ = be, Fe.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._source = this._assets.getAsset("assets/gui/Hud.png"), this._bitmaps = {
                up: new createjs.Bitmap(this._source),
                over: new createjs.Bitmap(this._source),
                wrong: new createjs.Bitmap(this._source),
                ring: new createjs.Bitmap(this._source),
                arrow: new createjs.Bitmap(this._source)
            };
            this._bitmaps.up.sourceRect = new createjs.Rectangle(0 * this.width, 180, this.width, this.height), this._bitmaps.over.sourceRect = new createjs.Rectangle(this.width, 180, this.width, this.height), this._bitmaps.wrong.sourceRect = new createjs.Rectangle(2 * this.width, 180, this.width, this.height), this._bitmaps.ring.sourceRect = new createjs.Rectangle(3 * this.width, 180, this.width, this.height), this._bitmaps.arrow.sourceRect = new createjs.Rectangle((this._isLeft ? 4 : 5) * this.width, 180, this.width, this.height), this._bitmaps.ring.x = this._bitmaps.ring.regX = .5 * this.width, this._bitmaps.ring.y = this._bitmaps.ring.regY = .5 * this.height, this._buttonContainer = new createjs.Container, this._buttonContainer.addChild(this._bitmaps.up), this._buttonContainer.addChild(this._bitmaps.over), this._buttonContainer.addChild(this._bitmaps.arrow), this._context.addChild(this._bitmaps.ring), this._context.addChild(this._buttonContainer), this._context.addChild(this._bitmaps.wrong), this._reset()
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t)
        },
        _createTweezerTransitionIn: function() {
            var e = this;
            this._buttonContainer.visible = !0, this._bitmaps.up.visible = !0, this._bitmaps.ring.visible = !0, this._removeTransitions(), this.addEntity(this._tweezers.transitionInRing = new ji(this._kernel, function(t) {
                e._bitmaps.ring.alpha = t
            }, 0, 1, 150, 250, 0, Hi.EASE_IN, Ji.QUARTIC, ns(this, this._createTweezerTransitionInComplete))), this.addEntity(this._tweezers.transitionInButton = new ji(this._kernel, function(t) {
                e._buttonContainer.y = t
            }, this._factory.height - this.y + this.height, 0, 150, 1e3, 0, Hi.EASE_OUT, Ji.ELASTIC(500, .5)))
        },
        _createTweezerTransitionInComplete: function() {
            var t, e = this;
            null != this._tweezers.transitionInComplete && ((t = this._tweezers.transitionInComplete).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.transitionInComplete = new ji(this._kernel, function(t) {
                e._bitmaps.ring.scaleX = e._bitmaps.ring.scaleY = 2 - t, e._bitmaps.ring.alpha = t
            }, 1, 0, 0, 500, 0, Hi.EASE_OUT, Ji.QUARTIC))
        },
        _createTweezerTransitionWrong: function() {
            var e = this;
            this._removeTransitions(), this._bitmaps.wrong.visible = !0, this.addEntity(this._tweezers.transitionWrong = new ji(this._kernel, function(t) {
                e._bitmaps.wrong.alpha = t
            }, 1, 0, 150, 500, 0, Hi.EASE_IN, Ji.QUARTIC, function() {
                e._bitmaps.wrong.visible = !1
            }))
        },
        _removeTransitions: function() {
            var t;
            null != this._tweezers.transitionInRing && ((t = this._tweezers.transitionInRing).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.transitionInButton && ((t = this._tweezers.transitionInButton).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.transitionInComplete && ((t = this._tweezers.transitionInComplete).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.transitionOut && ((t = this._tweezers.transitionOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.transitionWrong && ((t = this._tweezers.transitionWrong).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()))
        },
        _reset: function() {
            this._buttonContainer.visible = !1, this._bitmaps.up.visible = !1, this._bitmaps.over.visible = !1, this._bitmaps.ring.visible = !1, this._bitmaps.wrong.visible = !1, this._bitmaps.ring.scaleX = this._bitmaps.ring.scaleY = 1, this._removeTransitions()
        },
        _createBurst: function(t) {
            t = new Ce(this._kernel, t, .5 * this.width, .5 * this.height);
            return this.addEntity(t, null, !0, 10), t
        },
        configure: function(t) {
            t && this._values.isOn || (t || this._values.isOn) && (this._reset(), this._values.isOn = !1, t && (this._createTweezerTransitionIn(), this._values.isOn = !0))
        },
        activate: function() {
            return this._values.isOn ? (this._createBurst(.75), this._reset(), !(this._values.isOn = !1)) : (this._createTweezerTransitionWrong(), !1)
        },
        __class__: Fe
    });
    var Ge = function(t) {
        this._tweezers = {
            transitionIn: null,
            transitionOut: null,
            shake: null,
            spin: null
        }, this._values = {
            actual: 0,
            isConfigured: !1,
            isDirty: !1,
            isChanged: !1,
            isPenalty: !1
        }, be.call(this, t, 100, 100, !1)
    };
    (e["cbctaf.gui.HudSkill"] = Ge).__name__ = "cbctaf.gui.HudSkill", Ge.__super__ = be, Ge.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._source = this._assets.getAsset("assets/gui/Hud.png"), this._bitmaps = {
                up: new createjs.Bitmap(this._source),
                over: new createjs.Bitmap(this._source),
                arrowFill: new createjs.Bitmap(this._source),
                arrowBorder: new createjs.Bitmap(this._source),
                gradient: new createjs.Bitmap(this._source)
            };
            this._bitmaps.up.sourceRect = new createjs.Rectangle(0 * this.width, 80, this.width, this.height), this._bitmaps.over.sourceRect = new createjs.Rectangle(this.width, 80, this.width, this.height), this._bitmaps.arrowFill.sourceRect = new createjs.Rectangle(2 * this.width, 80, this.width, this.height), this._bitmaps.arrowBorder.sourceRect = new createjs.Rectangle(3 * this.width, 80, this.width, this.height), this._bitmaps.gradient.sourceRect = new createjs.Rectangle(4 * this.width, 80, this.width, this.height), this._bitmaps.gradient.cache(0, 0, this.width, this.height), this._mask = new createjs.Shape, this._mask.x = this._mask.regX = .5 * this.width, this._mask.y = this._mask.regY = .5 * this.height, this._mask.rotation = -90, this._mask.visible = !1, this._bitmaps.gradient.mask = this._mask, this._arrowTint = new createjs.Shape, this._arrow = new createjs.Container, this._arrow.addChild(this._bitmaps.arrowFill), this._arrow.addChild(this._arrowTint), this._arrow.addChild(this._bitmaps.arrowBorder), this._arrow.x = this._arrow.regX = .5 * this.width, this._arrow.y = this._arrow.regY = .5 * this.height, this._container = new createjs.Container, this._container.addChild(this._mask), this._context.addChild(this._container), this._container.addChild(this._bitmaps.gradient), this._container.addChild(this._arrow), this._container.addChild(this._bitmaps.up), this._container.addChild(this._bitmaps.over), this._reset()
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._values.isConfigured && (this._container.alpha = .75 * this._container.alpha + .25, this._values.isDirty ? (this._bitmaps.up.visible = !this._values.isChanged, this._bitmaps.over.visible = this._values.isChanged, this._rotate(this._values.actual)) : (this._createBurst(.25, this._values.isPenalty ? 0 : this._values.actual), this._bitmaps.up.visible = !1, this._bitmaps.over.visible = !1, this._arrowTint.visible = !0, this._rotate(this._values.actual), this._tint(this._values.actual), 1 == this._values.actual ? (this._kernel.audio.start("SkillPerfect", At.INTERFACE, 0, 0, .35, null, !1), this._createTweezerSpin(), this._createTweezerTransitionOut()) : (this._values.isPenalty && this._kernel.audio.start("SkillPenalty", At.INTERFACE, 0, 0, .35, null, !1), this._createTweezerShake()), this._values.isConfigured = !1)), this._values.isDirty = !1, this._values.isChanged = !1
        },
        _rotate: function(t) {
            1 < t ? t = 1 : t < 0 && (t = 0), this._arrow.rotation = 360 * t, this._mask.graphics.clear(), this._mask.graphics.beginFill("#FF0000"), this._mask.graphics.arc(.5 * this.width, .5 * this.height, .5 * this.width, 0, t * Math.PI * 2, !1), this._mask.graphics.lineTo(.5 * this.width, .5 * this.height), this._mask.graphics.closePath()
        },
        _tint: function(t) {
            1 < t ? t = 1 : t < 0 && (t = 0);
            var e = Math.round(35 * Math.cos((t - .27) * Math.PI * 2) + .5 * this.width),
                t = Math.round(35 * Math.sin((t - .27) * Math.PI * 2) + .5 * this.height),
                t = this._getColor(this._bitmaps.gradient.cacheCanvas, e, t);
            this._arrowTint.graphics.clear(), this._arrowTint.graphics.beginFill(t), this._arrowTint.graphics.rect(0, 0, this.width, this.height), this._arrowTint.graphics.closePath(), this._bitmaps.arrowFill.cache(0, 0, this.width, this.height), this._arrowTint.filters = [new createjs.AlphaMaskFilter(this._bitmaps.arrowFill.cacheCanvas)], this._arrowTint.cache(0, 0, this.width, this.height)
        },
        _getColor: function(t, e, i) {
            i = t.getContext("2d", null).getImageData(e, i, 1, 1).data;
            return "#" + c.hex(i[0] << 16 | i[1] << 8 | i[2])
        },
        _createTweezerShake: function() {
            var t, e = this;
            null != this._tweezers.shake && ((t = this._tweezers.shake).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.shake = new ji(this._kernel, function(t) {
                e._rotate(e._values.actual + .2 * t * (1.2 - e._values.actual) * (e._values.isPenalty ? 1 : -1))
            }, 1, 0, 0, 150 * (this._values.isPenalty ? 2 : 1), 0, Hi.EASE_OUT, Ji.BOUNCE, ns(this, this._createTweezerTransitionOut)))
        },
        _createTweezerSpin: function() {
            var t, e = this;
            null != this._tweezers.spin && ((t = this._tweezers.spin).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.spin = new ji(this._kernel, function(t) {
                e._createBurst(.25, t)
            }, 0, 1, 0, 400, 0, Hi.EASE_OUT, Ji.LINEAR))
        },
        _createTweezerTransitionIn: function() {
            var t, e = this;
            null != this._tweezers.shake && ((t = this._tweezers.shake).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.spin && ((t = this._tweezers.spin).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezers.transitionOut && ((t = this._tweezers.transitionOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this._reset(), null != this._tweezers.transitionIn && ((t = this._tweezers.transitionIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.transitionIn = new ji(this._kernel, function(t) {
                e._container.alpha = t
            }, 0, 1, 0, 250, 0, Hi.EASE_IN, Ji.QUARTIC))
        },
        _createTweezerTransitionOut: function() {
            var t, e = this;
            null != this._tweezers.transitionOut && ((t = this._tweezers.transitionOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this._container.cache(0, 0, this.width, this.height), this.addEntity(this._tweezers.transitionOut = new ji(this._kernel, function(t) {
                e._container.alpha = t
            }, 1, 0, 150, 250, 0, Hi.EASE_OUT, Ji.QUARTIC, ns(this, this._reset)))
        },
        _reset: function() {
            this._container.uncache(), this._container.alpha = 0, this._arrowTint.visible = !1, this._bitmaps.up.visible = !0, this._bitmaps.over.visible = !1, this._values.actual = 0, this._values.isConfigured = !1, this._values.isDirty = !1, this._values.isPenalty = !1
        },
        _createBurst: function(t, e) {
            var i = Math.round(Math.cos((e - .25) * Math.PI * 2) * (.35 * this.width) + .5 * this.width),
                e = Math.round(Math.sin((e - .25) * Math.PI * 2) * (.35 * this.width) + .5 * this.height),
                e = new Ce(this._kernel, t, i, e);
            return this.addEntity(e, null, !0, 10), e
        },
        configure: function(t) {
            t < 0 && (t = .5, this._values.isPenalty = !0), this._values.isConfigured || this._createTweezerTransitionIn(), 1 < t ? t = 1 : t < 0 && (t = 0), this._values.isChanged = t != this._values.actual, this._values.actual = t, this._values.isConfigured = !0, this._values.isDirty = !0
        },
        __class__: Ge
    });
    var Ve = function(t, e, i, s, n) {
        this._isDistance = e, this._scoreGold = i, this._scoreSilver = s, this._scoreBronze = n, be.call(this, t, 110, 60, !1)
    };
    (e["cbctaf.gui.HudTargets"] = Ve).__name__ = "cbctaf.gui.HudTargets", Ve.__super__ = be, Ve.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Ze(this._kernel, this.width, 20, R.string(this._kernel.getConfig(this._isDistance ? "gui.scenes.game.hud.targets.distance" : "gui.scenes.game.hud.targets.time")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10);
            t = 11;
            this.addEntity(this._targetGold = new He(this._kernel, this._isDistance, ie.MEDAL_GOLD, this._scoreGold, 11), null, !0, 10), this.addEntity(this._targetSilver = new He(this._kernel, this._isDistance, ie.MEDAL_SILVER, this._scoreSilver, t += 11), null, !0, 10), this.addEntity(this._targetBronze = new He(this._kernel, this._isDistance, ie.MEDAL_BRONZE, this._scoreBronze, 33), null, !0, 10)
        },
        configure: function(t) {
            this._targetGold.setIsExpired(this._isDistance ? t > this._scoreGold : t <= this._scoreGold), this._targetSilver.setIsExpired(this._isDistance ? t > this._scoreSilver : t <= this._scoreSilver), this._targetBronze.setIsExpired(this._isDistance ? t > this._scoreBronze : t <= this._scoreBronze)
        },
        __class__: Ve
    });
    var He = function(t, e, i, s, n) {
        this._delimeter = ".", this._isDistance = e, this._medalType = i, this._score = s, be.call(this, t, 110, 20, !1), this.set_y(n), this.setIsExpired(this._isDistance)
    };

    function Je(t, e, i, s) {
        null == s && (s = 1), null == i && (i = !1), this._imageElement = e, this._isAdd = i, be.call(this, t, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(s)
    }(e["cbctaf.gui._HudTargets._HelperTarget"] = He).__name__ = "cbctaf.gui._HudTargets._HelperTarget", He.__super__ = be, He.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Ze(this._kernel, 50, 20, this._session.getMedalTitle(this._medalType).toUpperCase(), t, null, null, .5), this._title.setPosition(10, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 72, i = 0, s = (this._isDistance ? this._convertFloatToString(this._score, 2, 4) : C.substr(this._tools.convertUpdatesToFormattedTime(0 | this._score, this._delimeter), 3, null)).split(""); i < s.length;) {
                var n = s[i];
                ++i;
                var _ = this._createDigit(n, e, 0);
                this._digits.push(_), this.addEntity(_, null, !0, 10), e += n == this._delimeter ? 4 : 8
            }
        },
        _createDigit: function(t, e, i) {
            var s = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            s.align = Lt.LEFT;
            s = new Ze(this._kernel, 10, 10, t, s);
            return s.setPosition(e, i), s
        },
        setIsExpired: function(t) {
            for (var e = 0, i = this._digits; e < i.length;) {
                var s = i[e];
                ++e, s._context.alpha = t ? 1 : .25
            }
        },
        __class__: He
    }), (e["cbctaf.gui.Image"] = Je).__name__ = "cbctaf.gui.Image", Je.__super__ = be, Je.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        set_alpha: function(t) {
            return this._bitmap.alpha = t
        },
        __class__: Je
    });
    var Ke = function(t) {
        this._assetManager = Fi.__cast(t.assets, Vt), this._factory = Fi.__cast(t.factory, Jt), this._buttonSize = 50, gt.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
    };

    function je(t, e) {
        this._isSmall = e, be.call(this, t, this._isSmall ? 230 : 380, this._isSmall ? 190 : 240, !1)
    }

    function ze(t, e) {
        this._type = e, je.call(this, t, !0)
    }

    function We(t, e) {
        this._medalType = e, this._delayInitial = 1500, this._delayMedal = 750, je.call(this, t, !0)
    }

    function Xe(t, e) {
        this._type = e, je.call(this, t, !1)
    }

    function Qe(t, e) {
        this._statHeight = 12, this._statWidth = 8, this._type = e, je.call(this, t, !0)
    }(e["cbctaf.gui.Overlay"] = Ke).__name__ = "cbctaf.gui.Overlay", Ke.__super__ = gt, Ke.prototype = t(gt.prototype, {
        _init: function() {
            gt.prototype._init.call(this), this._buttonPause.remove(!0), this._buttonPause = new ke(this._kernel, null, null, null, this._buttonPause.onClickCallback, this._buttonPause.onRollOverCallback, this._buttonPause.onRollOutCallback), this.addEntity(this._buttonPause, null, !0, 25);
            var t = this._kernel.factory.width - this._buttonSize - 5;
            this.positionButton(Mt.PAUSE, t, 4), this.positionButton(Mt.UNPAUSE, -this._buttonSize - 10, 4), this.positionButton(Mt.BACK, -this._buttonSize - 10, 4), this.positionButton(Mt.MUTE, -this._buttonSize - 10, 4), this.positionButton(Mt.UNMUTE, -this._buttonSize - 10, 4), this._flashView.set_isVisible(!0), this._pauseMenu = new Ye(this._kernel), this.set_pauseEntity(this._pauseMenu)
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), i *= this._factory.accessibility.getAdjustedVisualsIntensity(), this._flashContext.compositeOperation = 0 == s ? "source-over" : "lighter", gt.prototype.flash.call(this, t, e, i, s)
        },
        _drawPause: function(t) {
            null == t && (t = !0), gt.prototype._drawPause.call(this, t), this._pauseMenu.pauseHandler(t)
        },
        __class__: Ke
    }), (e["cbctaf.gui.Panel"] = je).__name__ = "cbctaf.gui.Panel", je.__super__ = be, je.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this.set_y(Math.round(.5 * (this._factory.height - this.height))), this.addEntity(new y(this._kernel, null, this._bgContext = new createjs.Container), null, !0, 1), this._bgContext.alpha = .5, this.addEntity(new Je(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallBg.png" : "assets/gui/PanelBigBg.png")), null, !0, 2), this.addEntity(new y(this._kernel, null, this._fgContext = new createjs.Container), null, !0, 999), this.addEntity(new Je(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallFg.png" : "assets/gui/PanelBigFg.png")), null, !0, 1e3)
        },
        __class__: je
    }), (e["cbctaf.gui.PanelLevel"] = ze).__name__ = "cbctaf.gui.PanelLevel", ze.__super__ = je, ze.prototype = t(je.prototype, {
        _init: function() {
            je.prototype._init.call(this), this.vo = new de(this._kernel, this._type), this._bgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevelBg.png"));
            var t = this._getBgCol() * this.width;
            this._bgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._bgContext.addChild(this._bgBitmap), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevel.png"));
            t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            t.spacingVertical = 16, this._title = new Ze(this._kernel, 125, this.height - 60, this._getTitle().toUpperCase(), t), this._title.setPosition(0, 62), this.addEntity(this._title, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new Ze(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10)
        },
        _getTitle: function() {
            var t = "";
            return t += this.vo.title.split(" ").join("\n"), this.vo.isLocked || this.vo.isNew ? this.vo.isNew ? t += "\n" + R.string(this._kernel.getConfig("gui.scenes.selectLevel.new")).toUpperCase() : this.vo.isLocked && (t += "\n" + R.string(this._kernel.getConfig("gui.scenes.selectLevel.locked")).toUpperCase()) : t += "\n" + this._session.getMedalTitle(this.vo.medalType), t
        },
        _getMessage: function() {
            return this.vo.message
        },
        _getBgCol: function() {
            switch (this._type._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2
            }
        },
        _getFgCol: function() {
            if (this.vo.isLocked) return 4;
            switch (this.vo.medalType._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3
            }
        },
        __class__: ze
    }), (e["cbctaf.gui.PanelResult"] = We).__name__ = "cbctaf.gui.PanelResult", We.__super__ = je, We.prototype = t(je.prototype, {
        _init: function() {
            je.prototype._init.call(this), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelResult.png")), this._fgBitmap.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var t, e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            switch (this._message = new Ze(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), e), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10), this._medalType._hx_index) {
                case 0:
                    t = [];
                    break;
                case 1:
                    t = [ie.MEDAL_BRONZE];
                    break;
                case 2:
                    t = [ie.MEDAL_BRONZE, ie.MEDAL_SILVER];
                    break;
                case 3:
                    t = [ie.MEDAL_BRONZE, ie.MEDAL_SILVER, ie.MEDAL_GOLD]
            }
            for (var i = this._delayInitial, s = 0; s < t.length;) {
                var n = t[s];
                ++s, i += this._delayMedal, this.addEntity(new Tt(this._kernel, function(t, e) {
                    return function() {
                        t[0](e[0])
                    }
                }([ns(this, this._showMedal)], [n]), i))
            }
        },
        _showMedal: function(t) {
            var e = this._getFgCol(t);
            this._fgBitmap.sourceRect.x = e * this.width;
            t = t._hx_index;
            this.addEntity(new Ce(this._kernel, 1, 40 * (t + 1), 70), null, !0, 1e3), this._kernel.overlay.flash(100 * t + 100, !0, .3 * t), 0 < t && (this._kernel.audio.start("GameOver", At.INTERFACE, 1, 0, .5 * t), this._kernel.audio.start("Medal" + t, At.INTERFACE, 1, 0, .5 * t))
        },
        _getMessage: function() {
            var t = "";
            return t += R.string(this._kernel.getConfig("gui.scenes.results.message")) + " ", t += this._session.getMedalTitle(this._medalType) + "\n"
        },
        _getFgCol: function(t) {
            switch (t._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3
            }
        },
        __class__: We
    }), (e["cbctaf.gui.PanelShop"] = Xe).__name__ = "cbctaf.gui.PanelShop", Xe.__super__ = je, Xe.prototype = t(je.prototype, {
        _init: function() {
            je.prototype._init.call(this), this.vo = new ve(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = new Ne(this._kernel);
            t.setPosition(215, 43), this.addEntity(t, null, !0, 30);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new Ze(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new Ze(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var e = 86, i = [ce.UPGRADE_MOVEMENT, ce.UPGRADE_TIMING, ce.UPGRADE_POWER, ce.UPGRADE_STAMINA], s = 0; s < i.length;) {
                var n = i[s];
                ++s;
                n = this._createUpgrade(n, this._type, 0, e);
                this.addEntity(n, null, !0, 15), e += 0 | n.height
            }
        },
        _createUpgrade: function(t, e, i, s) {
            t = new ti(this._kernel, t, this.vo);
            return t.setPosition(i, s), t
        },
        _getTitle: function() {
            return this.vo.title
        },
        _getMessage: function() {
            return this.vo.subtitle
        },
        _getFgCol: function() {
            switch (this._type._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 1
            }
        },
        __class__: Xe
    }), (e["cbctaf.gui.PanelUnit"] = Qe).__name__ = "cbctaf.gui.PanelUnit", Qe.__super__ = je, Qe.prototype = t(je.prototype, {
        _init: function() {
            je.prototype._init.call(this), this.vo = new ve(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new Ze(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new Ze(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var e = 80, i = [ce.UPGRADE_MOVEMENT, ce.UPGRADE_TIMING, ce.UPGRADE_POWER, ce.UPGRADE_STAMINA], s = 0; s < i.length;) {
                var n = i[s];
                ++s;
                n = this._createBar(n);
                n.set_y(e), e += n.height, this.addEntity(n, null, !0, 15)
            }
        },
        _createBar: function(t) {
            var e = new be(this._kernel, this.width, this._statHeight + 2, !1),
                i = this._title.textStyle.clone();
            i.size = 16;
            i = new Ze(this._kernel, this._message.width, e.height, this._session.getUpgradeTitle(t).toUpperCase(), i);
            e.addEntity(i, null, !0, 1);
            for (var s = [], n = 0, _ = this.vo.getDefault(t); n < _;) {
                n++;
                s.push(0)
            }
            for (n = 0, _ = this.vo.getUpgrade(t); n < _;) {
                n++;
                s.push(1)
            }
            for (n = 0, _ = this.vo.getAvailable(t); n < _;) {
                n++;
                s.push(2)
            }
            for (; 8 < s.length;) s.shift();
            for (var a = 123, n = 0; n < s.length;) {
                var r = s[n];
                ++n;
                var o = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
                o.sourceRect = new createjs.Rectangle(2 * this.width + r * this._statWidth, 0, this._statWidth, this._statHeight), e._context.addChild(o), o.x = a, o.y = 7, a += this._statWidth
            }
            return e
        },
        _getTitle: function() {
            return this.vo.title
        },
        _getMessage: function() {
            return this.vo.subtitle
        },
        _getFgCol: function() {
            switch (this._type._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 1
            }
        },
        __class__: Qe
    });
    var Ye = function(t) {
        Ot.call(this, t)
    };
    (e["cbctaf.gui.PauseMenu"] = Ye).__name__ = "cbctaf.gui.PauseMenu", Ye.__super__ = Ot, Ye.prototype = t(Ot.prototype, {
        _init: function() {
            var t = this;
            Ot.prototype._init.call(this), this.addEntity(this._debugText = new Ze(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(Bt.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
            var e = Math.round((this._kernel.factory.width - 200) / 2),
                i = Math.round((this._kernel.factory.height - 65 * (this._isFullScreenSupported() ? 4 : 3)) / 2);
            this.addEntity(new Ie(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), e, i, null, function() {
                t._kernel.overlay.activateButton(Mt.UNPAUSE)
            }), bt.ALWAYS, !0, 1), this.addEntity(this._audioButton = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.audioOff"), e, i += 65, null, function() {
                t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._factory.accessibility.setAudioIsMute(t._kernel.overlay._wasMute), t._kernel.overlay.activateButton(Mt.UNPAUSE)
            }), bt.ALWAYS, !0, 1), this._isFullScreenSupported() && this.addEntity(this._fullScreenButton = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.fullScreenOn"), e, i += 65, null, function() {
                t._stageClick(), t._kernel.overlay.activateButton(Mt.UNPAUSE)
            }), bt.ALWAYS, !0, 1), this.addEntity(new Ie(this._kernel, this._kernel.getConfig("gui.buttons.back"), e, i += 65, null, function() {
                t._kernel.overlay.activateButton(Mt.UNPAUSE), t._kernel.scenes.back()
            }), bt.DEFEND, !0, 1), this.addEntity(new Ie(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), e, i, null, function() {
                t._kernel.overlay.activateButton(Mt.UNPAUSE), t._pressInstructions()
            }), bt.STANDARD, !0, 1)
        },
        _isFullScreenSupported: function() {
            try {
                var t = window.document.documentElement;
                if (null != t.requestFullscreen) return !0;
                if (null != t.msRequestFullscreen) return !0;
                if (null != t.mozRequestFullScreen) return !0;
                if (null != t.webkitRequestFullscreen) return !0
            } catch (t) {}
            return !1
        },
        _isFullScreenEnabled: function() {
            try {
                var t = window.document;
                return !!t.fullscreenElement || (!!t.mozFullScreenElement || (!!t.webkitFullscreenElement || t.msFullscreenElement))
            } catch (t) {}
            return !1
        },
        _disposer: function() {
            this._kernel._stage.removeEventListener("click", ns(this, this._stageClick), !0), Ot.prototype._disposer.call(this)
        },
        _pressInstructions: function() {
            try {
                this._kernel.scenes.get_scene()._pressInstructions()
            } catch (t) {
                this._kernel.scenes.setScene(Dt.INSTRUCTIONS)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), Ot.prototype._updater.call(this, t), this._isFullScreenClicked = !1
        },
        pauseHandler: function(t) {
            var e = this;
            t ? (this._audioButton.setTitle(this._kernel.getConfig(this._kernel.audio.isMute ? "gui.buttons.audioOn" : "gui.buttons.audioOff")), null != this._fullScreenButton && this._fullScreenButton.setTitle(this._kernel.getConfig(this._isFullScreenEnabled() ? "gui.buttons.fullScreenOff" : "gui.buttons.fullScreenOn")), this._kernel._stage.addEventListener("click", ns(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new ji(this._kernel, function(t) {
                e._context.y = t
            }, this._factory.height, 0, 0, 500, null, Hi.EASE_OUT, Ji.QUARTIC)), this._factory.accessibility.buttonsRegister(this, null, 500)) : (this._kernel._stage.removeEventListener("click", ns(this, this._stageClick), !0), this._factory.accessibility.buttonsRevert())
        },
        _stageClick: function(t) {
            this._kernel.isActive || null != this._fullScreenButton && (this._isFullScreenClicked || this._fullScreenButton.isOver && (this._isFullScreenEnabled() ? this._kernel.system.requestExitFullScreen() : (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()), this._isFullScreenClicked = !0, null != t && t.stopPropagation(), this._kernel.overlay.activateButton(Mt.UNPAUSE)))
        },
        __class__: Ye
    });
    var Ze = function(t, e, i, s, n, _, a, r) {
        null == r && (r = 1), null == a && (a = !1), null == _ && (_ = !1), null == s && (s = ""), s = c.replace(s, "<BR/>", "\n"), s = c.replace(s, "<br/>", "\n"), vt.call(this, t, e, i, s, n, _, a), this.set_alpha(r)
    };

    function qe(t, e, i) {
        this._big = e, this._small = i, be.call(this, t, 370, 200, !1)
    }

    function $e(t, e) {
        this._title = e, be.call(this, t, 350, 40, !1)
    }(e["cbctaf.gui.Text"] = Ze).__name__ = "cbctaf.gui.Text", Ze.__super__ = vt, Ze.prototype = t(vt.prototype, {
        _init: function() {
            vt.prototype._init.call(this), this._textField.textBaseline = "alphabetic", this._textField.y += 1.15 * this.textStyle.size, this._prevTextStyle = "invalidated"
        },
        set_alpha: function(t) {
            return this._context.alpha = t
        },
        __class__: Ze
    }), (e["cbctaf.gui.TitleBig"] = qe).__name__ = "cbctaf.gui.TitleBig", qe.__super__ = be, qe.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this);
            this._textBig = new Ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Bt.OVERSIZED), !1, !1, 1), this._textBig.setPosition(-1, 20), this.addEntity(this._textBig, null, !0, 1), this._textSmall = new Ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Bt.SUBHEAD), !1, !1, .5), this._textSmall.setPosition(0, 10), this.addEntity(this._textSmall, null, !0, 1), this.configure(this._big, this._small)
        },
        configure: function(t, e) {
            this._big = t, this._small = e, this._textBig.set_text(this._big.toUpperCase()), this._textSmall.set_text(this._small.toUpperCase())
        },
        __class__: qe
    }), (e["cbctaf.gui.TitleSmall"] = $e).__name__ = "cbctaf.gui.TitleSmall", $e.__super__ = be, $e.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._text = new Ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Bt.HEADLINE), !1, !1, 1), this._text.setPosition(0, 7), this.addEntity(this._text, null, !0, 1), this.set_x((this._factory.width - this.width) / 2), this.configure(this._title)
        },
        configure: function(t) {
            this._title = t, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
        },
        __class__: $e
    });
    var ti = function(t, e, i) {
        this._statHeight = 24, this._statWidth = 16, this._MAX_STATS = 8, this._type = e, this._unitVo = i, be.call(this, t, 380, 28, !1)
    };
    (e["cbctaf.gui.Upgrade"] = ti).__name__ = "cbctaf.gui.Upgrade", ti.__super__ = be, ti.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._prevCoins = this._session.getCoins(), (e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE)).size -= 4;
            var t = new Ze(this._kernel, 112, this.height, this._session.getUpgradeTitle(this._type).toUpperCase(), e);
            t.set_y(1), this.addEntity(t, null, !0, 1), this._bars = new createjs.Container, this._bars.x = 123, this._context.addChild(this._bars), this._button = new Pe(this._kernel, "", 245, -2, null, ns(this, this.buy)), this._session.get_isTester() && this.addEntity(new Re(this._kernel, this._statWidth * this._MAX_STATS, this._statHeight, this._bars.x, 0, null, ns(this, this._reduce)), null, !0, 1);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new Ze(this._kernel, 100, 20, "", e, null, null, .5), this._message.setPosition(244, 4), this.addEntity(this._message, null, !0, 29), this.configure()
        },
        _updater: function(t) {
            null == t && (t = 0), be.prototype._updater.call(this, t), this._prevCoins != this._session.getCoins() && (this._prevCoins = this._session.getCoins(), this.configure())
        },
        configure: function() {
            this._bars.removeAllChildren();
            var t = this._unitVo.getTotal(this._type),
                e = this._getPrice(t + 1),
                i = e <= this._session.getCoins();
            this._button.setTitle(R.string(this._kernel.getConfig("gui.buttons.buy")) + " " + e), t == this._MAX_STATS ? (this._button.remove(!0), this._message.set_text(R.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : i ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == e ? "null" : "" + e));
            for (var s = [], n = 0, _ = this._unitVo.getDefault(this._type); n < _;) {
                n++;
                s.push(0)
            }
            for (n = 0, _ = this._unitVo.getUpgrade(this._type); n < _;) {
                n++;
                s.push(1)
            }
            for (n = 0, _ = this._unitVo.getAvailable(this._type); n < _;) {
                n++;
                s.push(2)
            }
            for (; 8 < s.length;) s.shift();
            for (var a = 0, n = 0; n < s.length;) {
                var r = s[n];
                ++n;
                var o = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
                o.sourceRect = new createjs.Rectangle(2 * this.width + r * this._statWidth, 0, this._statWidth, this._statHeight), this._bars.addChild(o), o.x = a, a += this._statWidth
            }
        },
        _getPrice: function(t) {
            t < 0 && (t = 0), t > this._MAX_STATS && (t = this._MAX_STATS);
            return [0, 100, 300, 500, 800, 1300, 2100, 3400, 5500][t]
        },
        buy: function() {
            var t = this._unitVo.getTotal(this._type),
                t = this._getPrice(t + 1);
            t <= this._session.getCoins() && (this._session.setCoins(null, this._session.getCoins() - t), this._session.setUpgrade(this._type, this._unitType, this._unitVo.getUpgrade(this._type) + 1), this.configure(), this._kernel.audio.start("Coin", At.INTERFACE, 0, 0, .5))
        },
        _reduce: function() {
            this._session.setUpgrade(this._type, this._unitType, this._session.getUpgrade(this._type, this._unitType) - 1), this.configure()
        },
        __class__: ti
    });
    var ei = function(t, e) {
        null == e && (e = 1), be.call(this, t, null, null, !1), this.set_alpha(e)
    };

    function ii(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, G.call(this, t, e, i = !0, s, n)
    }(e["cbctaf.gui.Vignette"] = ei).__name__ = "cbctaf.gui.Vignette", ei.__super__ = be, ei.prototype = t(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Vignette.png")), this._context.addChild(this._bitmap)
        },
        set_alpha: function(t) {
            return this._bitmap.visible = 0 < t, this._bitmap.alpha = t
        },
        __class__: ei
    }), (e["cbctaf.scenes.AScene"] = ii).__name__ = "cbctaf.scenes.AScene", ii.__super__ = G, ii.prototype = t(G.prototype, {
        _init: function() {
            G.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(bt.STANDARD), this._factory.preventDefaultForKeys([It.SPACE]), this._kernel.audio.start("MusicMenu", At.MUSIC, -1, 0, .5, null, !0), this.type != Dt.GAME && (this._session.cache.retries = 0)
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([It.SPACE]), this._factory.accessibility.buttonsRegister(), G.prototype._disposer.call(this)
        },
        _pressContinue: function() {
            this._kernel.log("button: continue: " + R.string(this.type)), this._kernel.inputs.keyboard.getIsKeyDown(It.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(It.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester());
            var t = this._factory.getNextSceneType(this.type);
            t == Dt.SELECT_LEVEL && this._session.getMedal(te.LEVEL_1) == ie.MEDAL_NONE && (t = Dt.GAME);
            var e = ns(h = this._kernel.scenes, h.setScene),
                i = t;
            this._outro(function() {
                e(i)
            })
        },
        _pressInstructions: function() {
            this._kernel.log("button: instructions");
            var t = ns(h = this._kernel.scenes, h.setScene),
                e = Dt.INSTRUCTIONS;
            this._outro(function() {
                t(e)
            })
        },
        _outro: function(t) {
            this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
        },
        _addBg: function() {
            this.addEntity(new Ue(this._kernel, this.type), null, !0, 1)
        },
        _addFg: function(t, e, i, s) {
            null == s && (s = 0), null == i && (i = ""), null == e && (e = "");
            var n = this;
            this._fgHeader = new Je(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgHeader2.png" : "assets/gui/SceneFgHeader1.png"));
            var _ = this._fgHeader;
            _.set_x(_.x - s), this.addEntity(this._fgHeader, null, !0, 110), t ? this._fgHeader.addEntity(new $e(this._kernel, e), null, !0, 1) : this._fgHeader.addEntity(new qe(this._kernel, e, i), null, !0, 1), this._fgFooter = new Je(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgFooter2.png" : "assets/gui/SceneFgFooter1.png")), this.addEntity(this._fgFooter, null, !0, 100), this.addEntity(new ji(this._kernel, function(t) {
                n._fgHeader.set_y(t)
            }, -this._factory.height, this._fgHeader.y, 500, 1e3, null, Hi.EASE_OUT, Ji.EXPONENTIAL)), this.addEntity(new ji(this._kernel, function(t) {
                n._fgFooter.set_y(t)
            }, this._factory.height, this._fgFooter.y, t ? 0 : 750, 1e3, null, Hi.EASE_OUT, Ji.EXPONENTIAL))
        },
        _addButtons: function(t, e, i, s, n, _, a) {
            null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 0), null == t && (t = 1e3);
            var r = this;
            this._buttonRight = e, this._buttonLeft = i, this._buttonCenter = s, null != this._buttonRight && (this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 13), this.addEntity(this._buttonRight, null, !0, t), this.addEntity(new ji(this._kernel, function(t) {
                r._buttonRight.set_y(t)
            }, this._factory.height + 60, this._buttonRight.y, n + 1200, 2e3, null, Hi.EASE_OUT, Ji.ELASTIC()))), null != this._buttonCenter && (this._buttonCenter.setPosition(.5 * (this._factory.width - 200), this._factory.height - 65 - 13), this.addEntity(this._buttonCenter, null, !0, t + 1), this.addEntity(new ji(this._kernel, function(t) {
                r._buttonCenter.set_y(t)
            }, this._factory.height + 60, this._buttonCenter.y, a + 1300, 2e3, null, Hi.EASE_OUT, Ji.ELASTIC()))), null != this._buttonLeft && (this._buttonLeft.setPosition(30, this._factory.height - 65 - 13), this.addEntity(this._buttonLeft, null, !0, t + 2), this.addEntity(new ji(this._kernel, function(t) {
                r._buttonLeft.set_y(t)
            }, this._factory.height + 60, this._buttonLeft.y, _ + 1400, 2e3, null, Hi.EASE_OUT, Ji.ELASTIC())))
        },
        _defaultOutro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var i = 0, s = this.getEntitiesByClass(ji); i < s.length;) {
                    var n = s[i];
                    ++i, n.remove()
                }
                this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new ji(this._kernel, function(t) {
                    e._buttonLeft.set_y(t)
                }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, Hi.EASE_IN, Ji.BACK())), null != this._buttonCenter && this.addEntity(new ji(this._kernel, function(t) {
                    e._buttonCenter.set_y(t)
                }, this._buttonCenter.y, this._factory.height, 50, 1e3, null, Hi.EASE_IN, Ji.BACK())), null != this._buttonRight && this.addEntity(new ji(this._kernel, function(t) {
                    e._buttonRight.set_y(t)
                }, this._buttonRight.y, this._factory.height, 100, 1e3, null, Hi.EASE_IN, Ji.BACK())), this.addEntity(new ji(this._kernel, function(t) {
                    e._fgHeader.set_y(t)
                }, this._fgHeader.y, -this._factory.height, 250, 500, null, Hi.EASE_IN, Ji.EXPONENTIAL)), this.addEntity(new ji(this._kernel, function(t) {
                    e._fgFooter.set_y(t)
                }, this._fgFooter.y, this._factory.height, 500, 500, null, Hi.EASE_IN, Ji.EXPONENTIAL)), this.addEntity(new ji(this._kernel, function(t) {}, 0, 0, 100, 1e3, null, Hi.EASE_IN, Ji.BACK(), t)), this._kernel.audio.start("Transition", At.INTERFACE, 0, 0, .25), this._kernel.isDebug && t()
            }
        },
        _easyTweez: function(t) {
            null == t && (t = !0);
            for (var e = 0, i = this._easyTweezers; e < i.length;) {
                var s = [i[e]];
                ++e, t ? s[0].isVerticalIn ? this.addEntity(new ji(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_y(t)
                    }
                }(s), -this._factory.height + s[0].guiEntity.y, s[0].guiEntity.y, 500 + 100 * s[0].sequence, 2e3, null, Hi.EASE_OUT, Ji.QUARTIC)) : this.addEntity(new ji(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(s), this._factory.width + s[0].guiEntity.x, s[0].guiEntity.x, 500 + 100 * s[0].sequence, 2e3, null, Hi.EASE_OUT, Ji.QUARTIC)) : this.addEntity(new ji(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(s), s[0].guiEntity.x, -1.5 * this._factory.width + s[0].guiEntity.x, 50 * s[0].sequence, 500, null, Hi.EASE_IN, Ji.BACK()))
            }
        },
        _addEasyTweez: function(t, e, i) {
            null == i && (i = !0), null != t && this._easyTweezers.push({
                guiEntity: t,
                sequence: e,
                isVerticalIn: i
            })
        },
        _createBurst: function(t, e, i, s) {
            null == s && (s = 1e4);
            i = new Ce(this._kernel, t, e, i);
            return this.addEntity(i, null, !0, s), i
        },
        __class__: ii
    });
    var si = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Avatar"] = si).__name__ = "cbctaf.scenes.Avatar", si.__super__ = ii, si.prototype = t(ii.prototype, {
        _init: function() {
            var e = this;
            ii.prototype._init.call(this), this._session.cache.levelType = te.LEVEL_1, this._kernel.audio.start("MusicMenu", At.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start("VoiceAvatar", At.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.avatar.title")), this._panelUnitA = new Qe(this._kernel, _e.UNIT_A), this._panelUnitA.set_x(15), this.addEntity(this._panelUnitA, null, !0, 1e3), this._panelUnitB = new Qe(this._kernel, _e.UNIT_B), this._panelUnitB.set_x(this._factory.width - this._panelUnitB.width - 15), this.addEntity(this._panelUnitB, null, !0, 1e3), this.addEntity(new ji(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, -(this._panelUnitA.width + this._panelUnitA.x), this._panelUnitA.x, 1500, 1e3, null, Hi.EASE_OUT, Ji.QUARTIC)), this.addEntity(new ji(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._factory.width, this._panelUnitB.x, 1500, 1e3, null, Hi.EASE_OUT, Ji.QUARTIC)), this._avatarUnitA = new Je(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitA.png")), this._avatarUnitB = new Je(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitB.png")), this.addEntity(this._avatarUnitA, null, !0, 300), this.addEntity(this._avatarUnitB, null, !0, 300), this.addEntity(new ji(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, -this._factory.width, this._avatarUnitA.x, 100, 2e3, null, Hi.EASE_OUT, Ji.QUARTIC)), this.addEntity(new ji(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._factory.width, this._avatarUnitB.x, 100, 2e3, null, Hi.EASE_OUT, Ji.QUARTIC));
            var t = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitA"), 0, 0, null, ns(this, this._pressUnitA)),
                i = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitB"), 0, 0, null, ns(this, this._pressUnitB));
            this._addButtons(null, i, t), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
        },
        _updater: function(t) {
            null == t && (t = 0), ii.prototype._updater.call(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("GameOver", At.INTERFACE, 1, 0, .5), this.addEntity(new ji(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, this._panelUnitA.x, -this._factory.width, 0, 800, null, Hi.EASE_IN, Ji.BACK())), this.addEntity(new ji(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._panelUnitB.x, this._factory.width, 0, 800, null, Hi.EASE_IN, Ji.BACK())), this.addEntity(new ji(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, this._avatarUnitA.x, -this._factory.width, 0, 1e3, null, Hi.EASE_IN, Ji.BACK(.75))), this.addEntity(new ji(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._avatarUnitB.x, this._factory.width, 0, 1e3, null, Hi.EASE_IN, Ji.BACK(.75))))
        },
        _pressUnitA: function() {
            this._session.cache.unitType = _e.UNIT_A, this._pressContinue()
        },
        _pressUnitB: function() {
            this._session.cache.unitType = _e.UNIT_B, this._pressContinue()
        },
        __class__: si
    });
    var ni = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Game"] = ni).__name__ = "cbctaf.scenes.Game", ni.__super__ = ii, ni.prototype = t(ii.prototype, {
        _init: function() {
            var t, e, i, s, n, _, a, r, o, h;
            switch (ii.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(bt.DEFEND), this._session.cache.totalPlays++, this._session.cache.reset(), this._levelVo = new de(this._kernel, this._session.cache.levelType), this._hud = new De(this._kernel, !this._levelVo.isNew, this._levelVo.sportType != ne.SPRINT, this._levelVo.scoreGold, this._levelVo.scoreSilver, this._levelVo.scoreBronze), this._levelVo.sportType._hx_index) {
                case 0:
                    t = new ge(this._kernel, this._levelVo, this._hud, ns(this, this._handleScore));
                    break;
                case 1:
                    t = new fe(this._kernel, this._levelVo, this._hud, ns(this, this._handleScore));
                    break;
                case 2:
                    t = new pe(this._kernel, this._levelVo, this._hud, ns(this, this._handleScore))
            }
            this.addEntity(this._location = t, null, !0, 10), this.addEntity(this._hud, null, !0, 100), this._session.get_isTester() && (e = ns(this, this._winMedal), i = ie.MEDAL_BRONZE, s = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.testMode.bronze"), 0, 0, null, function() {
                e(i, !0)
            }), n = ns(this, this._winMedal), _ = ie.MEDAL_SILVER, a = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.testMode.silver"), 0, 0, null, function() {
                n(_, !0)
            }), r = ns(this, this._winMedal), o = ie.MEDAL_GOLD, h = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.testMode.gold"), 0, 0, null, function() {
                r(o, !0)
            }), this._addButtons(null, h, s, a, 1e3, 1e3, 1e3)), this._kernel.audio.stop(null, At.MUSIC), this._kernel.log("play: " + R.string(this._levelVo.type)), this._factory.preventDefaultForKeys([It.UP, It.RIGHT, It.DOWN, It.LEFT, It.SPACE])
        },
        _createDelay: function(t, e) {
            null == e && (e = 1e3), this.addEntity(new Tt(this._kernel, t, e))
        },
        _handleScore: function(t) {
            for (var e = 0, i = this.getEntitiesByClass(Ie); e < i.length;) {
                var s = i[e];
                ++e, s.isDisposed || (s.isDisposed = !0, s.set_isActive(!1), s._disposer())
            }
            t = this._session.getMedalFromScore(t, this._levelVo.sportType == ne.SPRINT, this._levelVo.scoreGold, this._levelVo.scoreSilver, this._levelVo.scoreBronze);
            this._winMedal(t);
            t = t == ie.MEDAL_NONE && ++this._session.cache.retries < 3;
            this._createDelay(t ? ns(h = this._kernel.scenes, h.restart) : ns(this, this._gameOver), 2500), this._flashPhotography(10, 250)
        },
        _winMedal: function(t, e) {
            null == e && (e = !1), this._session.cache.medalType = t, this._session.setMedal(this._levelVo.type, null, t), this._session.setCoins(null, this._session.getCoins() + this._getScore(t)), t != ie.MEDAL_NONE && this._kernel.audio.start("GameOver", At.EFFECTS, 1, 0, .75), this._kernel.log("medal: " + R.string(t) + ": " + R.string(this._levelVo.type)), e && this._gameOver()
        },
        _flashPhotography: function(t, e) {
            var i, s, n;
            0 <= --t && (this._kernel.overlay.flash(100, !0, .25 * Math.random() + .25), i = ns(this, this._flashPhotography), s = t, n = e, this._createDelay(function() {
                i(s, n)
            }, R.random(e)))
        },
        _gameOver: function() {
            this._kernel.scenes.next()
        },
        _updater: function(t) {
            null == t && (t = 0), ii.prototype._updater.call(this, t)
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([It.UP, It.RIGHT, It.DOWN, It.LEFT, It.SPACE]), this._kernel.audio.stop(null, At.MUSIC);
            var t = this._session;
            t.saveCount++, t._setter(), t._savedData._____VERSION = t._version, t._savedData[t.id] = t._data, t._driverSave(), ii.prototype._disposer.call(this)
        },
        _getScore: function(t) {
            switch (t._hx_index) {
                case 0:
                    return 0;
                case 1:
                    return 3e3;
                case 2:
                    return 5e3;
                case 3:
                    return 8e3
            }
        },
        __class__: ni
    });
    var _i = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Instructions"] = _i).__name__ = "cbctaf.scenes.Instructions", _i.__super__ = ii, _i.prototype = t(ii.prototype, {
        _init: function() {
            var t = this;
            ii.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(bt.DEFEND), this._kernel.audio.start("MusicMenu", At.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                t._kernel.audio.start("VoiceInstructions", At.INTERFACE, 1, 0, t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.instructions.title"));
            var e = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, ns(this, this._pressContinue));
            this._addButtons(null, e);
            var i = new Je(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
            this.addEntity(i, null, !0, 20), i.setPosition((this._factory.width - i.width) / 7, (this._factory.height - i.height) / 2);
            var s = new Ze(this._kernel, 300, 300, R.string(this._kernel.getConfig("gui.scenes.instructions.message")).toUpperCase(), this._factory.createTextStyle(Bt.BODY), !0, !1);
            s.setPosition(this._kernel.factory.width - s.width - 40, 90), this.addEntity(s, null, !0, 21), this._addEasyTweez(i, 1, !1), this._addEasyTweez(s, 2, !1), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, e)
        },
        _outro: function(t) {
            this._isOutroCalled || this._defaultOutro(t)
        },
        __class__: _i
    });
    var ai = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Intro"] = ai).__name__ = "cbctaf.scenes.Intro", ai.__super__ = ii, ai.prototype = t(ii.prototype, {
        _updater: function(t) {
            null == t && (t = 0), ii.prototype._updater.call(this, t), this._kernel.scenes.next()
        },
        __class__: ai
    });
    var ri = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Menu"] = ri).__name__ = "cbctaf.scenes.Menu", ri.__super__ = ii, ri.prototype = t(ii.prototype, {
        _init: function() {
            var e = this;
            ii.prototype._init.call(this), this._kernel.audio.start("MusicMenu", At.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("GameStart", At.EFFECTS, 1, 0, .75, 0, !0), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.menu.title"), this._kernel.getConfig("gui.scenes.menu.subtitle")), this.addEntity(this._action = new Ae(this._kernel), null, !0, 200), this.addEntity(new ji(this._kernel, function(t) {
                e._action.set_x(t)
            }, -this._factory.width, this._action.x, 500, 2e3, null, Hi.EASE_OUT, Ji.ELASTIC()));
            var t = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, ns(this, this._pressContinue)),
                i = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, ns(this, this._pressInstructions));
            this._addButtons(null, t, i), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new ji(this._kernel, function(t) {
                e._action.set_x(t)
            }, this._action.x, this._factory.width, 0, 1e3, null, Hi.EASE_IN, Ji.BACK())))
        },
        __class__: ri
    });
    var oi = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Results"] = oi).__name__ = "cbctaf.scenes.Results", oi.__super__ = ii, oi.prototype = t(ii.prototype, {
        _init: function() {
            var e = this;
            ii.prototype._init.call(this), this._levelVo = new de(this._kernel, this._session.cache.levelType, this._session.cache.unitType), this._kernel.audio.start("GameStart", At.INTERFACE, 1, 0, .5), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start(["VoiceResults0", "VoiceResults1", "VoiceResults2", "VoiceResults3"][e._session.cache.medalType._hx_index], At.INTERFACE, 1, 0, e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 3500 + 750 * this._session.cache.medalType._hx_index)), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.results.title"), this._levelVo.title, 120), this.addEntity(this._hero = new Me(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-20), this.addEntity(new ji(this._kernel, function(t) {
                e._hero.set_x(t)
            }, -this._factory.width, this._hero.x, 500, 2e3, null, Hi.EASE_OUT, Ji.ELASTIC())), this._panelResult = new We(this._kernel, this._session.cache.medalType), this._panelResult.set_x(this._factory.width - this._panelResult.width - 15), this.addEntity(this._panelResult, null, !0, 1e3), this.addEntity(new ji(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._factory.width, this._panelResult.x, 1500, 1e3, null, Hi.EASE_OUT, Ji.QUARTIC));
            var t = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, ns(this, this._pressContinue));
            this._addButtons(null, t), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
        },
        _updater: function(t) {
            null == t && (t = 0), ii.prototype._updater.call(this, t), 2e3 < this._age && Math.random() < this._session.cache.medalType._hx_index / 3 && this._createBurst(.5 * Math.random() + .5, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .5) * this._factory.width, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .25) * this._factory.height, 299)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new ji(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, this._factory.width, 0, 1e3, null, Hi.EASE_IN, Ji.BACK())), this.addEntity(new ji(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._panelResult.x, this._factory.width, 0, 800, null, Hi.EASE_IN, Ji.BACK())))
        },
        __class__: oi
    });
    var hi = function(t) {
        yt.call(this, t, 1e3)
    };
    (e["cbctaf.scenes.SceneTransition"] = hi).__name__ = "cbctaf.scenes.SceneTransition", hi.__super__ = yt, hi.prototype = t(yt.prototype, {
        _init: function() {
            yt.prototype._init.call(this)
        },
        __class__: hi
    });
    var ci = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.SelectLevel"] = ci).__name__ = "cbctaf.scenes.SelectLevel", ci.__super__ = ii, ci.prototype = t(ii.prototype, {
        _init: function() {
            var t = this;
            ii.prototype._init.call(this), this._kernel.audio.start("MusicMenu", At.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                t._kernel.audio.start("VoiceSelectLevel", At.INTERFACE, 1, 0, .85 * t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.selectLevel.title")), this._panelLevel1 = new ze(this._kernel, te.LEVEL_1), this._panelLevel1.set_x(15), this.addEntity(this._panelLevel1, null, !0, 200), this._panelLevel2 = new ze(this._kernel, te.LEVEL_2), this._panelLevel2.set_x(.5 * (this._factory.width - this._panelLevel2.width)), this.addEntity(this._panelLevel2, null, !0, 200), this._panelLevel3 = new ze(this._kernel, te.LEVEL_3), this._panelLevel3.set_x(this._factory.width - this._panelLevel3.width - 15), this.addEntity(this._panelLevel3, null, !0, 200);
            var e = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.levels.level1"), 0, 0, null, ns(this, this._pressLevel1)),
                i = this._panelLevel2.vo.isLocked ? null : new Ie(this._kernel, this._kernel.getConfig("gui.buttons.levels.level2"), 0, 0, null, ns(this, this._pressLevel2)),
                s = this._panelLevel3.vo.isLocked ? null : new Ie(this._kernel, this._kernel.getConfig("gui.buttons.levels.level3"), 0, 0, null, ns(this, this._pressLevel3));
            this._addButtons(null, s, e, i), this._addEasyTweez(this._panelLevel1, 1, !1), this._addEasyTweez(this._panelLevel2, 2, !1), this._addEasyTweez(this._panelLevel3, 3, !1), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, this._panelLevel2.vo.isLocked ? e : this._panelLevel3.vo.isLocked ? i : s)
        },
        _updater: function(t) {
            null == t && (t = 0), ii.prototype._updater.call(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("GameStart", At.INTERFACE, 1, 0, .5), this.addEntity(new ji(this._kernel, function(t) {
                e._kernel.audio.transform("MusicMenu", At.MUSIC, t)
            }, .5, 0, 0, 2e3)))
        },
        _pressLevel1: function() {
            this._session.cache.levelType = te.LEVEL_1, this._pressContinue()
        },
        _pressLevel2: function() {
            this._session.cache.levelType = te.LEVEL_2, this._pressContinue()
        },
        _pressLevel3: function() {
            this._session.cache.levelType = te.LEVEL_3, this._pressContinue()
        },
        __class__: ci
    });
    var li = function(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), ii.call(this, t, e, i, s, n)
    };
    (e["cbctaf.scenes.Shop"] = li).__name__ = "cbctaf.scenes.Shop", li.__super__ = ii, li.prototype = t(ii.prototype, {
        _init: function() {
            var e = this;
            ii.prototype._init.call(this), this._kernel.audio.start("MusicMenu", At.MUSIC, 0, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start("VoiceShop", At.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.shop.title")), this.addEntity(this._hero = new Me(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-160), this._hero.set_isFlippedX(!0), this.addEntity(new ji(this._kernel, function(t) {
                e._hero.set_x(t)
            }, -this._factory.width, this._hero.x, 500, 2e3, null, Hi.EASE_OUT, Ji.QUARTIC)), this._panelShop = new Xe(this._kernel, this._session.cache.unitType), this._panelShop.set_x(this._factory.width - this._panelShop.width - 15), this.addEntity(this._panelShop, null, !0, 1e3), this.addEntity(new ji(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._factory.width, this._panelShop.x, 1500, 1e3, null, Hi.EASE_OUT, Ji.QUARTIC));
            var t = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, ns(this, this._pressContinue)),
                i = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.avatar"), 0, 0, null, ns(this, this._pressAvatar)),
                s = new Ie(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, ns(this, this._pressReset));
            this._addButtons(null, t, i, 1 == this._panelShop.vo.getPercentageComplete() ? s : null), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new ji(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, -this._factory.width, 0, 1e3, null, Hi.EASE_IN, Ji.BACK())), this.addEntity(new ji(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._panelShop.x, this._factory.width, 0, 800, null, Hi.EASE_IN, Ji.BACK())))
        },
        _pressReset: function() {
            this._kernel.log("button: reset: "), this._session.resetUnit(this._session.cache.unitType);
            var t = ns(h = this._kernel.scenes, h.setScene),
                e = Dt.MENU;
            this._outro(function() {
                t(e)
            })
        },
        _pressAvatar: function() {
            this._kernel.log("button: avatar: ");
            var t = ns(h = this._kernel.scenes, h.setScene),
                e = Dt.AVATAR;
            this._outro(function() {
                t(e)
            })
        },
        __class__: li
    }), g = function() {}, (e["haxe.IMap"] = g).__name__ = "haxe.IMap", g.__isInterface__ = !0;
    var ui = function(t, e, i) {
        Error.call(this, t), this.message = t, this.__previousException = e, this.__nativeException = null != i ? i : this
    };
    (e["haxe.Exception"] = ui).__name__ = "haxe.Exception", ui.caught = function(t) {
        return t instanceof ui ? t : t instanceof Error ? new ui(t.message, null, t) : new xi(t, null, t)
    }, ui.thrown = function(t) {
        return t instanceof ui ? t.get_native() : t instanceof Error ? t : new xi(t)
    }, ui.__super__ = Error, ui.prototype = t(Error.prototype, {
        unwrap: function() {
            return this.__nativeException
        },
        get_native: function() {
            return this.__nativeException
        },
        __class__: ui
    });
    var di = function() {};
    (e["haxe.Log"] = di).__name__ = "haxe.Log", di.formatOutput = function(t, e) {
        var i = R.string(t);
        if (null == e) return i;
        var s = e.fileName + ":" + e.lineNumber;
        if (null != e.customParams)
            for (var n = 0, _ = e.customParams; n < _.length;) {
                t = _[n];
                ++n, i += ", " + R.string(t)
            }
        return s + ": " + i
    }, di.trace = function(t, e) {
        e = di.formatOutput(t, e);
        "undefined" != typeof console && null != console.log && console.log(e)
    };
    var pi = function() {};
    (e["haxe.Resource"] = pi).__name__ = "haxe.Resource", pi.getString = function(t) {
        for (var e = 0, i = pi.content; e < i.length;) {
            var s = i[e];
            if (++e, s.name == t) return null != s.str ? s.str : Si.decode(s.data).toString()
        }
        return null
    };
    var gi = function() {
        this.buf = new w, this.cache = [], this.useCache = gi.USE_CACHE, this.useEnumIndex = gi.USE_ENUM_INDEX, this.shash = new Ii, this.scount = 0
    };
    (e["haxe.Serializer"] = gi).__name__ = "haxe.Serializer", gi.run = function(t) {
        var e = new gi;
        return e.serialize(t), e.toString()
    }, gi.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(t) {
            var e = this.shash.h[t];
            if (null != e) return this.buf.b += "R", void(this.buf.b += null == e ? "null" : "" + e);
            this.shash.h[t] = this.scount++, this.buf.b += "y", t = encodeURIComponent(t), this.buf.b += R.string(t.length), this.buf.b += ":", this.buf.b += null == t ? "null" : "" + t
        },
        serializeRef: function(t) {
            for (var e = typeof t, i = 0, s = this.cache.length; i < s;) {
                var n = i++,
                    _ = this.cache[n];
                if (typeof _ == e && _ == t) return this.buf.b += "r", this.buf.b += null == n ? "null" : "" + n, !0
            }
            return this.cache.push(t), !1
        },
        serializeFields: function(t) {
            for (var e = 0, i = U.fields(t); e < i.length;) {
                var s = i[e];
                ++e, this.serializeString(s), this.serialize(U.field(t, s))
            }
            this.buf.b += "g"
        },
        serialize: function(t) {
            switch ((T = I.typeof(t))._hx_index) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == (e = t)) return void(this.buf.b += "z");
                    this.buf.b += "i", this.buf.b += null == e ? "null" : "" + e;
                    break;
                case 2:
                    var e = t;
                    isNaN(e) ? this.buf.b += "k" : isFinite(e) ? (this.buf.b += "d", this.buf.b += null == e ? "null" : "" + e) : this.buf.b += e < 0 ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += t ? "t" : "f";
                    break;
                case 4:
                    if (Fi.__instanceof(t, hs)) {
                        var i = t.__name__;
                        this.buf.b += "A", this.serializeString(i)
                    } else if (Fi.__instanceof(t, cs)) this.buf.b += "B", this.serializeString(t.__ename__);
                    else {
                        if (this.useCache && this.serializeRef(t)) return;
                        this.buf.b += "o", this.serializeFields(t)
                    }
                    break;
                case 5:
                    throw ui.thrown("Cannot serialize function");
                case 6:
                    var s = T.c;
                    if (s == String) return void this.serializeString(t);
                    if (this.useCache && this.serializeRef(t)) return;
                    switch (s) {
                        case Array:
                            var n = 0;
                            this.buf.b += "a";
                            for (var _ = 0, a = t.length; _ < a;) null == t[u = _++] ? ++n : (0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n), n = 0), this.serialize(t[u]));
                            0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n)), this.buf.b += "h";
                            break;
                        case Date:
                            var r = t;
                            this.buf.b += "v", this.buf.b += R.string(r.getTime());
                            break;
                        case Ai:
                            this.buf.b += "q";
                            for (var o = (e = t).keys(); o.hasNext();) {
                                var h = o.next();
                                this.buf.b += ":", this.buf.b += null == h ? "null" : "" + h, this.serialize(e.h[h])
                            }
                            this.buf.b += "h";
                            break;
                        case Ui:
                            this.buf.b += "l";
                            for (var c = (e = t).h; null != c;) {
                                var l = c.item,
                                    c = c.next,
                                    u = l;
                                this.serialize(u)
                            }
                            this.buf.b += "h";
                            break;
                        case Ci:
                            this.buf.b += "M";
                            for (o = (e = t).keys(); o.hasNext();) {
                                var h = o.next(),
                                    d = U.field(h, "__id__");
                                U.deleteField(h, "__id__"), this.serialize(h), h.__id__ = d, this.serialize(e.h[h.__id__])
                            }
                            this.buf.b += "h";
                            break;
                        case Ii:
                            this.buf.b += "b";
                            for (var r = (e = t).h, p = Object.keys(r), g = p.length, f = 0; f < g;) {
                                o = p[f++];
                                this.serializeString(o), this.serialize(e.h[o])
                            }
                            this.buf.b += "h";
                            break;
                        case Ei:
                            e = t;
                            this.buf.b += "s", this.buf.b += R.string(Math.ceil(8 * e.length / 6)), this.buf.b += ":";
                            var u = 0,
                                m = e.length - 2;
                            if (null == (y = gi.BASE64_CODES)) {
                                for (var y = new Array(gi.BASE64.length), _ = 0, a = gi.BASE64.length; _ < a;) {
                                    var x = _++;
                                    y[x] = C.cca(gi.BASE64, x)
                                }
                                gi.BASE64_CODES = y
                            }
                            for (; u < m;) {
                                var E = e.b[u++],
                                    w = e.b[u++],
                                    S = e.b[u++];
                                this.buf.b += String.fromCodePoint(y[E >> 2]), this.buf.b += String.fromCodePoint(y[63 & (E << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(y[63 & (w << 2 | S >> 6)]), this.buf.b += String.fromCodePoint(y[63 & S])
                            }
                            u == m ? (E = e.b[u++], w = e.b[u++], this.buf.b += String.fromCodePoint(y[E >> 2]), this.buf.b += String.fromCodePoint(y[63 & (E << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(y[w << 2 & 63])) : u == 1 + m && (E = e.b[u++], this.buf.b += String.fromCodePoint(y[E >> 2]), this.buf.b += String.fromCodePoint(y[E << 4 & 63]));
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(s.__name__), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(s.__name__), this.useCache && this.cache.push(t), this.serializeFields(t))
                    }
                    break;
                case 7:
                    i = T.e;
                    if (this.useCache) {
                        if (this.serializeRef(t)) return;
                        this.cache.pop()
                    }
                    this.buf.b += R.string(this.useEnumIndex ? "j" : "w"), this.serializeString(i.__ename__), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += R.string(t._hx_index)) : (i = t, this.serializeString(A[i.__enum__].__constructs__[i._hx_index]._hx_name)), this.buf.b += ":";
                    var v = I.enumParameters(t);
                    this.buf.b += R.string(v.length);
                    for (var T = 0; T < v.length;) {
                        var b = v[T];
                        ++T, this.serialize(b)
                    }
                    this.useCache && this.cache.push(t);
                    break;
                default:
                    throw ui.thrown("Cannot serialize " + R.string(t))
            }
        },
        __class__: gi
    };
    var fi = function(t) {
        var e = this;
        this.id = setInterval(function() {
            e.run()
        }, t)
    };

    function mi() {}(e["haxe.Timer"] = fi).__name__ = "haxe.Timer", fi.delay = function(t, e) {
        var i = new fi(e);
        return i.run = function() {
            i.stop(), t()
        }, i
    }, fi.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: fi
    }, (e["haxe._Unserializer.DefaultResolver"] = mi).__name__ = "haxe._Unserializer.DefaultResolver", mi.prototype = {
        resolveClass: function(t) {
            return e[t]
        },
        resolveEnum: function(t) {
            return A[t]
        },
        __class__: mi
    };
    var yi = function(t) {
        this.buf = t, this.length = this.buf.length, this.pos = 0, this.scache = [], this.cache = [];
        t = yi.DEFAULT_RESOLVER;
        null == t && (t = new mi, yi.DEFAULT_RESOLVER = t), this.resolver = t
    };
    (e["haxe.Unserializer"] = yi).__name__ = "haxe.Unserializer", yi.initCodes = function() {
        for (var t = [], e = 0, i = yi.BASE64.length; e < i;) {
            var s = e++;
            t[yi.BASE64.charCodeAt(s)] = s
        }
        return t
    }, yi.run = function(t) {
        return new yi(t).unserialize()
    }, yi.prototype = {
        readDigits: function() {
            for (var t = 0, e = !1, i = this.pos;;) {
                var s = this.buf.charCodeAt(this.pos);
                if (s != s) break;
                if (45 != s) {
                    if (s < 48 || 57 < s) break;
                    t = 10 * t + (s - 48), this.pos++
                } else {
                    if (this.pos != i) break;
                    e = !0, this.pos++
                }
            }
            return e && (t *= -1), t
        },
        readFloat: function() {
            for (var t = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (e != e) break;
                if (!(43 <= e && e < 58 || 101 == e || 69 == e)) break;
                this.pos++
            }
            return parseFloat(C.substr(this.buf, t, this.pos - t))
        },
        unserializeObject: function(t) {
            for (;;) {
                if (this.pos >= this.length) throw ui.thrown("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var e = this.unserialize();
                if ("string" != typeof e) throw ui.thrown("Invalid object key");
                var i = this.unserialize();
                t[e] = i
            }
            this.pos++
        },
        unserializeEnum: function(t, e) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw ui.thrown("Invalid enum format");
            var i = this.readDigits();
            if (0 == i) return I.createEnum(t, e);
            for (var s = []; 0 < i--;) s.push(this.unserialize());
            return I.createEnum(t, e, s)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw ui.thrown("Class not found " + t);
                    return u;
                case 66:
                    t = this.unserialize();
                    if (null == (d = this.resolver.resolveEnum(t))) throw ui.thrown("Enum not found " + t);
                    return d;
                case 67:
                    t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw ui.thrown("Class not found " + t);
                    var e = Object.create(u.prototype);
                    if (this.cache.push(e), e.hxUnserialize(this), 103 != this.buf.charCodeAt(this.pos++)) throw ui.thrown("Invalid custom data");
                    return e;
                case 77:
                    var i = new Ci;
                    this.cache.push(i);
                    for (var s = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize();
                        i.set(n, this.unserialize())
                    }
                    return this.pos++, i;
                case 82:
                    if ((m = this.readDigits()) < 0 || m >= this.scache.length) throw ui.thrown("Invalid string reference");
                    return this.scache[m];
                case 97:
                    var s = this.buf,
                        _ = [];
                    for (this.cache.push(_);;) {
                        if (104 == (g = this.buf.charCodeAt(this.pos))) {
                            this.pos++;
                            break
                        }
                        117 == g ? (this.pos++, m = this.readDigits(), _[_.length + m - 1] = null) : _.push(this.unserialize())
                    }
                    return _;
                case 98:
                    i = new Ii;
                    this.cache.push(i);
                    for (s = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize(),
                            a = this.unserialize();
                        i.h[n] = a
                    }
                    return this.pos++, i;
                case 99:
                    t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw ui.thrown("Class not found " + t);
                    e = Object.create(u.prototype);
                    return this.cache.push(e), this.unserializeObject(e), e;
                case 100:
                    return this.readFloat();
                case 102:
                    return !1;
                case 105:
                    return this.readDigits();
                case 106:
                    t = this.unserialize();
                    if (null == (R = this.resolver.resolveEnum(t))) throw ui.thrown("Enum not found " + t);
                    this.pos++;
                    for (var r = this.readDigits(), o = R.__constructs__, h = new Array(o.length), c = 0, l = o.length; c < l;) h[f = c++] = o[f]._hx_name;
                    var u = h[r];
                    if (null == u) throw ui.thrown("Unknown enum index " + t + "@" + r);
                    var d = this.unserializeEnum(R, u);
                    return this.cache.push(d), d;
                case 107:
                    return NaN;
                case 108:
                    var p = new Ui;
                    this.cache.push(p);
                    for (s = this.buf; 104 != this.buf.charCodeAt(this.pos);) p.add(this.unserialize());
                    return this.pos++, p;
                case 109:
                    return -1 / 0;
                case 110:
                    return null;
                case 111:
                    e = {};
                    return this.cache.push(e), this.unserializeObject(e), e;
                case 112:
                    return 1 / 0;
                case 113:
                    i = new Ai;
                    this.cache.push(i);
                    for (var s = this.buf, g = this.buf.charCodeAt(this.pos++); 58 == g;) {
                        var f = this.readDigits(),
                            a = this.unserialize();
                        i.h[f] = a, g = this.buf.charCodeAt(this.pos++)
                    }
                    if (104 != g) throw ui.thrown("Invalid IntMap format");
                    return i;
                case 114:
                    var m;
                    if ((m = this.readDigits()) < 0 || m >= this.cache.length) throw ui.thrown("Invalid reference");
                    return this.cache[m];
                case 115:
                    var y = this.readDigits(),
                        s = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < y) throw ui.thrown("Invalid bytes length");
                    var x = yi.CODES;
                    null == x && (x = yi.initCodes(), yi.CODES = x);
                    for (var e = 3 & y, E = (f = this.pos) + (y - e), w = new Ei(new ArrayBuffer(3 * (y >> 2) + (2 <= e ? e - 1 : 0))), S = 0; f < E;) {
                        var v = x[s.charCodeAt(f++)],
                            T = x[s.charCodeAt(f++)];
                        w.b[S++] = v << 2 | T >> 4;
                        var b = x[s.charCodeAt(f++)];
                        w.b[S++] = T << 4 | b >> 2;
                        var A = x[s.charCodeAt(f++)];
                        w.b[S++] = b << 6 | A
                    }
                    return 2 <= e && (v = x[s.charCodeAt(f++)], T = x[s.charCodeAt(f++)], w.b[S++] = v << 2 | T >> 4, 3 == e && (b = x[s.charCodeAt(f++)], w.b[S++] = T << 4 | b >> 2)), this.pos += y, this.cache.push(w), w;
                case 116:
                    return !0;
                case 118:
                    var U;
                    return 48 <= this.buf.charCodeAt(this.pos) && this.buf.charCodeAt(this.pos) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 1) && this.buf.charCodeAt(this.pos + 1) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 2) && this.buf.charCodeAt(this.pos + 2) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 3) && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4) ? (U = C.strDate(C.substr(this.buf, this.pos, 19)), this.pos += 19) : U = new Date(this.readFloat()), this.cache.push(U), U;
                case 119:
                    var R, t = this.unserialize();
                    if (null == (R = this.resolver.resolveEnum(t))) throw ui.thrown("Enum not found " + t);
                    d = this.unserializeEnum(R, this.unserialize());
                    return this.cache.push(d), d;
                case 120:
                    throw ui.thrown(this.unserialize());
                case 121:
                    y = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < y) throw ui.thrown("Invalid string length");
                    n = C.substr(this.buf, this.pos, y);
                    return this.pos += y, n = decodeURIComponent(n.split("+").join(" ")), this.scache.push(n), n;
                case 122:
                    return 0
            }
            throw this.pos--, ui.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
        },
        __class__: yi
    };
    var xi = function(t, e, i) {
        ui.call(this, String(t), e, i), this.value = t
    };
    (e["haxe.ValueException"] = xi).__name__ = "haxe.ValueException", xi.__super__ = ui, xi.prototype = t(ui.prototype, {
        unwrap: function() {
            return this.value
        },
        __class__: xi
    });
    var Ei = function(t) {
        this.length = t.byteLength, this.b = new Uint8Array(t), (this.b.bufferValue = t).hxBytes = this, t.bytes = this.b
    };
    (e["haxe.io.Bytes"] = Ei).__name__ = "haxe.io.Bytes", Ei.ofString = function(t, e) {
        if (e == wi.RawNative) {
            for (var i = new Uint8Array(t.length << 1), s = 0, n = t.length; s < n;) {
                var _ = s++,
                    a = t.charCodeAt(_);
                i[_ << 1] = 255 & a, i[_ << 1 | 1] = a >> 8
            }
            return new Ei(i.buffer)
        }
        for (var r = [], _ = 0; _ < t.length;) 55296 <= (a = t.charCodeAt(_++)) && a <= 56319 && (a = a - 55232 << 10 | 1023 & t.charCodeAt(_++)), a <= 127 ? r.push(a) : (a <= 2047 ? r.push(192 | a >> 6) : (a <= 65535 ? r.push(224 | a >> 12) : (r.push(240 | a >> 18), r.push(128 | a >> 12 & 63)), r.push(128 | a >> 6 & 63)), r.push(128 | 63 & a));
        return new Ei(new Uint8Array(r).buffer)
    }, Ei.ofData = function(t) {
        var e = t.hxBytes;
        return null != e ? e : new Ei(t)
    }, Ei.prototype = {
        getString: function(t, e, i) {
            if (t < 0 || e < 0 || t + e > this.length) throw ui.thrown(Mi.OutsideBounds);
            null == i && (i = wi.UTF8);
            var s = "",
                n = this.b,
                _ = t,
                a = t + e;
            switch (i._hx_index) {
                case 0:
                    for (var r, o; _ < a;)
                        if ((h = n[_++]) < 128) {
                            if (0 == h) break;
                            s += String.fromCodePoint(h)
                        } else h < 224 ? (r = (63 & h) << 6 | 127 & n[_++], s += String.fromCodePoint(r)) : h < 240 ? (o = (31 & h) << 12 | (127 & n[_++]) << 6 | 127 & n[_++], s += String.fromCodePoint(o)) : (o = (15 & h) << 18 | (127 & n[_++]) << 12 | (127 & n[_++]) << 6 | 127 & n[_++], s += String.fromCodePoint(o));
                    break;
                case 1:
                    for (; _ < a;) {
                        var h = n[_++] | n[_++] << 8;
                        s += String.fromCodePoint(h)
                    }
            }
            return s
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: Ei
    };
    var wi = A["haxe.io.Encoding"] = {
        __ename__: "haxe.io.Encoding",
        __constructs__: null,
        UTF8: {
            _hx_name: "UTF8",
            _hx_index: 0,
            __enum__: "haxe.io.Encoding",
            toString: i
        },
        RawNative: {
            _hx_name: "RawNative",
            _hx_index: 1,
            __enum__: "haxe.io.Encoding",
            toString: i
        }
    };
    wi.__constructs__ = [wi.UTF8, wi.RawNative];
    var Si = function() {};
    (e["haxe.crypto.Base64"] = Si).__name__ = "haxe.crypto.Base64", Si.decode = function(t, e) {
        if (null == e && (e = !0), e)
            for (; 61 == C.cca(t, t.length - 1);) t = C.substr(t, 0, -1);
        return new vi(Si.BYTES).decodeBytes(Ei.ofString(t))
    };
    var vi = function(t) {
        for (var e = t.length, i = 1; 1 << i < e;) ++i;
        if (8 < i || e != 1 << i) throw ui.thrown("BaseCode : base length must be a power of two.");
        this.base = t, this.nbits = i
    };
    (e["haxe.crypto.BaseCode"] = vi).__name__ = "haxe.crypto.BaseCode", vi.prototype = {
        initTable: function() {
            for (var t = [], e = 0; e < 256;) t[s = e++] = -1;
            for (var e = 0, i = this.base.length; e < i;) {
                var s = e++;
                t[this.base.b[s]] = s
            }
            this.tbl = t
        },
        decodeBytes: function(t) {
            var e = this.nbits;
            this.base;
            null == this.tbl && this.initTable();
            for (var i = this.tbl, s = t.length * e >> 3, n = new Ei(new ArrayBuffer(s)), _ = 0, a = 0, r = 0, o = 0; o < s;) {
                for (; a < 8;) {
                    a += e, _ <<= e;
                    var h = i[t.b[r++]];
                    if (-1 == h) throw ui.thrown("BaseCode : invalid encoded char");
                    _ |= h
                }
                a -= 8, n.b[o++] = _ >> a & 255
            }
            return n
        },
        __class__: vi
    };
    var Ti = function(t, e) {
        this.elt = t, this.next = e
    };
    (e["haxe.ds.GenericCell"] = Ti).__name__ = "haxe.ds.GenericCell", Ti.prototype = {
        __class__: Ti
    };
    var bi = function() {};
    (e["haxe.ds.GenericStack"] = bi).__name__ = "haxe.ds.GenericStack", bi.prototype = {
        remove: function(t) {
            for (var e = null, i = this.head; null != i;) {
                if (i.elt == t) {
                    null == e ? this.head = i.next : e.next = i.next;
                    break
                }
                i = (e = i).next
            }
            return null != i
        },
        iterator: function() {
            var e = this.head;
            return {
                hasNext: function() {
                    return null != e
                },
                next: function() {
                    var t = e;
                    return e = t.next, t.elt
                }
            }
        },
        __class__: bi
    };
    var Ai = function() {
        this.h = {}
    };
    (e["haxe.ds.IntMap"] = Ai).__name__ = "haxe.ds.IntMap", Ai.__interfaces__ = [g], Ai.prototype = {
        keys: function() {
            var t, e = [];
            for (t in this.h) this.h.hasOwnProperty(t) && e.push(+t);
            return new Di(e)
        },
        __class__: Ai
    };
    var Ui = function() {
        this.length = 0
    };
    (e["haxe.ds.List"] = Ui).__name__ = "haxe.ds.List", Ui.prototype = {
        add: function(t) {
            t = new Ri(t, null);
            null == this.h ? this.h = t : this.q.next = t, this.q = t, this.length++
        },
        push: function(t) {
            t = new Ri(t, this.h);
            this.h = t, null == this.q && (this.q = t), this.length++
        },
        remove: function(t) {
            for (var e = null, i = this.h; null != i;) {
                if (i.item == t) return null == e ? this.h = i.next : e.next = i.next, this.q == i && (this.q = e), this.length--, !0;
                i = (e = i).next
            }
            return !1
        },
        __class__: Ui
    };
    var Ri = function(t, e) {
        this.item = t, this.next = e
    };
    (e["haxe.ds._List.ListNode"] = Ri).__name__ = "haxe.ds._List.ListNode", Ri.prototype = {
        __class__: Ri
    };
    var Ci = function() {
        this.h = {
            __keys__: {}
        }
    };
    (e["haxe.ds.ObjectMap"] = Ci).__name__ = "haxe.ds.ObjectMap", Ci.__interfaces__ = [g], Ci.prototype = {
        set: function(t, e) {
            var i = t.__id__;
            null == i && (i = t.__id__ = u.$haxeUID++), this.h[i] = e, this.h.__keys__[i] = t
        },
        keys: function() {
            var t, e = [];
            for (t in this.h.__keys__) this.h.hasOwnProperty(t) && e.push(this.h.__keys__[t]);
            return new Di(e)
        },
        __class__: Ci
    };
    var Ii = function() {
        this.h = Object.create(null)
    };
    (e["haxe.ds.StringMap"] = Ii).__name__ = "haxe.ds.StringMap", Ii.__interfaces__ = [g], Ii.prototype = {
        __class__: Ii
    };
    var ki = function(t) {
        this.h = t, this.keys = Object.keys(t), this.length = this.keys.length, this.current = 0
    };

    function Pi(t) {
        this.url = t, this.headers = [], this.params = [], this.emptyOnData = ns(this, this.onData)
    }(e["haxe.ds._StringMap.StringMapKeyIterator"] = ki).__name__ = "haxe.ds._StringMap.StringMapKeyIterator", ki.prototype = {
        hasNext: function() {
            return this.current < this.length
        },
        next: function() {
            return this.keys[this.current++]
        },
        __class__: ki
    }, (e["haxe.http.HttpBase"] = Pi).__name__ = "haxe.http.HttpBase", Pi.prototype = {
        onData: function(t) {},
        onBytes: function(t) {},
        onError: function(t) {},
        onStatus: function(t) {},
        hasOnData: function() {
            return !U.compareMethods(ns(this, this.onData), this.emptyOnData)
        },
        success: function(t) {
            this.responseBytes = t, this.responseAsString = null, this.hasOnData() && this.onData(this.get_responseData()), this.onBytes(this.responseBytes)
        },
        get_responseData: function() {
            return null == this.responseAsString && null != this.responseBytes && (this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, wi.UTF8)), this.responseAsString
        },
        __class__: Pi
    };
    var Ni = function(t) {
        this.async = !0, this.withCredentials = !1, Pi.call(this, t)
    };
    (e["haxe.http.HttpJs"] = Ni).__name__ = "haxe.http.HttpJs", Ni.__super__ = Pi, Ni.prototype = t(Pi.prototype, {
        request: function(t) {
            var n = this;
            this.responseAsString = null, this.responseBytes = null;

            function e(t) {
                if (4 == _.readyState) {
                    var e, i;
                    try {
                        e = _.status
                    } catch (t) {
                        e = null
                    }
                    if (0 == e && Gi.get_supported() && null != u.location && (i = u.location.protocol.toLowerCase(), new d("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(i) && (e = null != _.response ? 200 : 404)), null == e && (e = null), null != e && n.onStatus(e), null != e && 200 <= e && e < 400) n.req = null, n.success(Ei.ofData(_.response));
                    else if (null == e || 0 == e && null == _.response) n.req = null, n.onError("Failed to connect or resolve host");
                    else if (null == e) {
                        var s = (n.req = null) != _.response ? Ei.ofData(_.response) : null;
                        n.responseBytes = s, n.onError("Http Error #" + _.status)
                    } else switch (e) {
                        case 12007:
                            n.req = null, n.onError("Unknown host");
                            break;
                        case 12029:
                            n.req = null, n.onError("Failed to connect to host");
                            break;
                        default:
                            s = (n.req = null) != _.response ? Ei.ofData(_.response) : null;
                            n.responseBytes = s, n.onError("Http Error #" + _.status)
                    }
                }
            }
            var _ = this.req = Gi.createXMLHttpRequest();
            this.async && (_.onreadystatechange = e);
            var i, s, a = this.postData,
                r = this.postBytes;
            if (null != (i = null == a ? null == r ? null : new Blob([r.b.bufferValue]) : null == r ? a : null)) t = !0;
            else
                for (a = 0, r = this.params; a < r.length;) {
                    var o = r[a];
                    ++a, i = null == i ? "" : (null == i ? "null" : R.string(i)) + "&";
                    var h = o.name,
                        h = (null == i ? "null" : R.string(i)) + encodeURIComponent(h) + "=",
                        o = o.value;
                    i = h + encodeURIComponent(o)
                }
            try {
                t ? _.open("POST", this.url, this.async) : null != i ? (s = this.url.split("?").length <= 1, _.open("GET", this.url + (s ? "?" : "&") + (null == i ? "null" : R.string(i)), this.async), i = null) : _.open("GET", this.url, this.async), _.responseType = "arraybuffer"
            } catch (a) {
                var c = ui.caught(a).unwrap();
                return this.req = null, void this.onError(c.toString())
            }
            _.withCredentials = this.withCredentials, !p.exists(this.headers, function(t) {
                return "Content-Type" == t.name
            }) && t && null == this.postData && _.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (a = 0, r = this.headers; a < r.length;) {
                var l = r[a];
                ++a, _.setRequestHeader(l.name, l.value)
            }
            _.send(i), this.async || e()
        },
        __class__: Ni
    });
    var Mi = A["haxe.io.Error"] = {
        __ename__: "haxe.io.Error",
        __constructs__: null,
        Blocked: {
            _hx_name: "Blocked",
            _hx_index: 0,
            __enum__: "haxe.io.Error",
            toString: i
        },
        Overflow: {
            _hx_name: "Overflow",
            _hx_index: 1,
            __enum__: "haxe.io.Error",
            toString: i
        },
        OutsideBounds: {
            _hx_name: "OutsideBounds",
            _hx_index: 2,
            __enum__: "haxe.io.Error",
            toString: i
        },
        Custom: ((h = function(t) {
            return {
                _hx_index: 3,
                e: t,
                __enum__: "haxe.io.Error",
                toString: i
            }
        })._hx_name = "Custom", h.__params__ = ["e"], h)
    };
    Mi.__constructs__ = [Mi.Blocked, Mi.Overflow, Mi.OutsideBounds, Mi.Custom];
    var Di = function(t) {
        this.current = 0, this.array = t
    };

    function Li(t, e, i) {
        this.xml = e, this.message = t, this.position = i, this.lineNumber = 1;
        for (var s = this.positionAtLine = 0, n = i; s < n;) {
            var _ = s++,
                _ = e.charCodeAt(_);
            10 == _ ? (this.lineNumber++, this.positionAtLine = 0) : 13 != _ && this.positionAtLine++
        }
    }(e["haxe.iterators.ArrayIterator"] = Di).__name__ = "haxe.iterators.ArrayIterator", Di.prototype = {
        hasNext: function() {
            return this.current < this.array.length
        },
        next: function() {
            return this.array[this.current++]
        },
        __class__: Di
    }, (e["haxe.xml.XmlParserException"] = Li).__name__ = "haxe.xml.XmlParserException", Li.prototype = {
        toString: function() {
            return Fi.getClass(this).__name__ + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
        },
        __class__: Li
    };
    var Bi = function() {};
    (e["haxe.xml.Parser"] = Bi).__name__ = "haxe.xml.Parser", Bi.parse = function(t, e) {
        null == e && (e = !1);
        var i = S.createDocument();
        return Bi.doParse(t, e, 0, i), i
    }, Bi.doParse = function(t, e, i, s) {
        null == i && (i = 0);
        for (var n = null, _ = 1, a = 1, r = null, o = 0, h = 0, c = 0, l = new w, u = 1, d = -1; i < t.length;) {
            var p, g, f = t.charCodeAt(i);
            switch (_) {
                case 0:
                    switch (f) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            break;
                        default:
                            _ = a;
                            continue
                    }
                    break;
                case 1:
                    if (60 != f) {
                        o = i, _ = 13;
                        continue
                    }
                    _ = 0, a = 2;
                    break;
                case 2:
                    switch (f) {
                        case 33:
                            if (91 == t.charCodeAt(i + 1)) {
                                if ("CDATA[" != C.substr(t, i += 2, 6).toUpperCase()) throw ui.thrown(new Li("Expected <![CDATA[", t, i));
                                _ = 17, o = (i += 5) + 1
                            } else if (68 == t.charCodeAt(i + 1) || 100 == t.charCodeAt(i + 1)) {
                                if ("OCTYPE" != C.substr(t, i + 2, 6).toUpperCase()) throw ui.thrown(new Li("Expected <!DOCTYPE", t, i));
                                _ = 16, o = (i += 8) + 1
                            } else {
                                if (45 != t.charCodeAt(i + 1) || 45 != t.charCodeAt(i + 2)) throw ui.thrown(new Li("Expected \x3c!--", t, i));
                                _ = 15, o = (i += 2) + 1
                            }
                            break;
                        case 47:
                            if (null == s) throw ui.thrown(new Li("Expected node name", t, i));
                            o = i + 1, _ = 0, a = 10;
                            break;
                        case 63:
                            _ = 14, o = i;
                            break;
                        default:
                            _ = 3, o = i;
                            continue
                    }
                    break;
                case 3:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (i == o) throw ui.thrown(new Li("Expected node name", t, i));
                    n = S.createElement(C.substr(t, o, i - o)), s.addChild(n), ++h, _ = 0, a = 4;
                    continue;
                case 4:
                    switch (f) {
                        case 47:
                            _ = 11;
                            break;
                        case 62:
                            _ = 9;
                            break;
                        default:
                            _ = 5, o = i;
                            continue
                    }
                    break;
                case 5:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (o == i) throw ui.thrown(new Li("Expected attribute name", t, i));
                    r = C.substr(t, o, i - o);
                    if (n.exists(r)) throw ui.thrown(new Li("Duplicate attribute [" + r + "]", t, i));
                    _ = 0, a = 6;
                    continue;
                case 6:
                    if (61 != f) throw ui.thrown(new Li("Expected =", t, i));
                    _ = 0, a = 7;
                    break;
                case 7:
                    switch (f) {
                        case 34:
                        case 39:
                            l = new w, _ = 8, o = i + 1, d = f;
                            break;
                        default:
                            throw ui.thrown(new Li('Expected "', t, i))
                    }
                    break;
                case 8:
                    switch (f) {
                        case 38:
                            var m = i - o;
                            l.b += C.substr(t, o, null == m ? null : m), _ = 18, u = 8, o = i + 1;
                            break;
                        case 60:
                        case 62:
                            if (e) throw ui.thrown(new Li("Invalid unescaped " + String.fromCodePoint(f) + " in attribute value", t, i));
                            f == d && (p = i - o, l.b += C.substr(t, o, null == p ? null : p), p = l.b, l = new w, n.set(r, p), _ = 0, a = 4);
                            break;
                        default:
                            f == d && (p = i - o, l.b += C.substr(t, o, null == p ? null : p), p = l.b, l = new w, n.set(r, p), _ = 0, a = 4)
                    }
                    break;
                case 9:
                    o = i = Bi.doParse(t, e, i, n), _ = 1;
                    break;
                case 10:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (o == i) throw ui.thrown(new Li("Expected node name", t, i));
                    var y = C.substr(t, o, i - o);
                    if (null == s || 0 != s.nodeType) throw ui.thrown(new Li("Unexpected </" + y + ">, tag is not open", t, i));
                    if (s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    if (y != s.nodeName) {
                        if (s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                        throw ui.thrown(new Li("Expected </" + s.nodeName + ">", t, i))
                    }
                    _ = 0, a = 12;
                    continue;
                case 11:
                    if (62 != f) throw ui.thrown(new Li("Expected >", t, i));
                    _ = 1;
                    break;
                case 12:
                    if (62 == f) return 0 == h && s.addChild(S.createPCData("")), i;
                    throw ui.thrown(new Li("Expected >", t, i));
                case 13:
                    60 == f ? (y = i - o, l.b += C.substr(t, o, null == y ? null : y), y = S.createPCData(l.b), l = new w, s.addChild(y), ++h, _ = 0, a = 2) : 38 == f && (g = i - o, l.b += C.substr(t, o, null == g ? null : g), _ = 18, u = 13, o = i + 1);
                    break;
                case 14:
                    63 == f && 62 == t.charCodeAt(i + 1) && (g = C.substr(t, o + 1, ++i - o - 2), s.addChild(S.createProcessingInstruction(g)), ++h, _ = 1);
                    break;
                case 15:
                    45 == f && 45 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2) && (s.addChild(S.createComment(C.substr(t, o, i - o))), ++h, i += 2, _ = 1);
                    break;
                case 16:
                    91 == f ? ++c : 93 == f ? --c : 62 == f && 0 == c && (s.addChild(S.createDocType(C.substr(t, o, i - o))), ++h, _ = 1);
                    break;
                case 17:
                    93 == f && 93 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2) && (E = S.createCData(C.substr(t, o, i - o)), s.addChild(E), ++h, i += 2, _ = 1);
                    break;
                case 18:
                    if (59 == f) {
                        var x = C.substr(t, o, i - o);
                        if (35 == x.charCodeAt(0)) {
                            var E = 120 == x.charCodeAt(1) ? R.parseInt("0" + C.substr(x, 1, x.length - 1)) : R.parseInt(C.substr(x, 1, x.length - 1));
                            l.b += String.fromCodePoint(E)
                        } else if (Object.prototype.hasOwnProperty.call(Bi.escapes.h, x)) l.b += R.string(Bi.escapes.h[x]);
                        else {
                            if (e) throw ui.thrown(new Li("Undefined entity: " + x, t, i));
                            l.b += R.string("&" + x + ";")
                        }
                        o = i + 1, _ = u
                    } else if (!(97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) && 35 != f) {
                        if (e) throw ui.thrown(new Li("Invalid character in entity: " + String.fromCodePoint(f), t, i));
                        l.b += String.fromCodePoint(38);
                        x = i - o;
                        l.b += C.substr(t, o, null == x ? null : x), o = --i + 1, _ = u
                    }
            }++i
        }
        if (1 == _ && (o = i, _ = 13), 13 == _) {
            if (0 != s.nodeType) return i == o && 0 != h || (m = i - o, l.b += C.substr(t, o, null == m ? null : m), s.addChild(S.createPCData(l.b)), ++h), i;
            if (s.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
            throw ui.thrown(new Li("Unclosed node <" + s.nodeName + ">", t, i))
        }
        if (e || 18 != _ || 13 != u) throw ui.thrown(new Li("Unexpected end", t, i));
        l.b += String.fromCodePoint(38);
        m = i - o;
        return l.b += C.substr(t, o, null == m ? null : m), s.addChild(S.createPCData(l.b)), ++h, i
    };
    var Oi = function(t) {
        this.output = new w, this.pretty = t
    };
    (e["haxe.xml.Printer"] = Oi).__name__ = "haxe.xml.Printer", Oi.print = function(t, e) {
        null == e && (e = !1);
        e = new Oi(e);
        return e.writeNode(t, ""), e.output.b
    }, Oi.prototype = {
        writeNode: function(t, e) {
            switch (t.nodeType) {
                case 0:
                    if (this.output.b += R.string(e + "<"), t.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    this.output.b += R.string(t.nodeName);
                    for (var i = t.attributes(); i.hasNext();) {
                        var s = i.next();
                        this.output.b += R.string(" " + s + '="');
                        var n = c.htmlEscape(t.get(s), !0);
                        this.output.b += R.string(n), this.output.b += '"'
                    }
                    if (this.hasChildren(t)) {
                        if (this.output.b += ">", this.pretty && (this.output.b += "\n"), t.nodeType != S.Document && t.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                        for (var _ = 0, a = t.children; _ < a.length;) {
                            var r = a[_++];
                            this.writeNode(r, this.pretty ? e + "\t" : e)
                        }
                        if (this.output.b += R.string(e + "</"), t.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                        this.output.b += R.string(t.nodeName), this.output.b += ">", this.pretty && (this.output.b += "\n")
                    } else this.output.b += "/>", this.pretty && (this.output.b += "\n");
                    break;
                case 1:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    var o = t.nodeValue;
                    0 != o.length && (n = e + c.htmlEscape(o), this.output.b += R.string(n), this.pretty && (this.output.b += "\n"));
                    break;
                case 2:
                    if (this.output.b += R.string(e + "<![CDATA["), t.nodeType == S.Document || t.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    this.output.b += R.string(t.nodeValue), this.output.b += "]]>", this.pretty && (this.output.b += "\n");
                    break;
                case 3:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    var h = t.nodeValue,
                        o = new RegExp("[\n\r\t]+", "g".split("u").join(""));
                    h = "\x3c!--" + (h = h.replace(o, "")) + "--\x3e", this.output.b += null == e ? "null" : "" + e;
                    n = c.trim(h);
                    this.output.b += R.string(n), this.pretty && (this.output.b += "\n");
                    break;
                case 4:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    this.output.b += R.string("<!DOCTYPE " + t.nodeValue + ">"), this.pretty && (this.output.b += "\n");
                    break;
                case 5:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    this.output.b += R.string("<?" + t.nodeValue + "?>"), this.pretty && (this.output.b += "\n");
                    break;
                case 6:
                    if (t.nodeType != S.Document && t.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    for (_ = 0, a = t.children; _ < a.length;) {
                        r = a[_++];
                        this.writeNode(r, e)
                    }
            }
        },
        hasChildren: function(t) {
            if (t.nodeType != S.Document && t.nodeType != S.Element) throw ui.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
            for (var e = 0, i = t.children; e < i.length;) {
                var s = i[e++];
                switch (s.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (s.nodeType == S.Document || s.nodeType == S.Element) throw ui.thrown("Bad node type, unexpected " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                        if (0 != c.ltrim(s.nodeValue).length) return !0
                }
            }
            return !1
        },
        __class__: Oi
    };
    var Fi = function() {};
    (e["js.Boot"] = Fi).__name__ = "js.Boot", Fi.getClass = function(t) {
        if (null == t) return null;
        if (t instanceof Array) return Array;
        var e = t.__class__;
        if (null != e) return e;
        t = Fi.__nativeClassName(t);
        return null != t ? Fi.__resolveNativeClass(t) : null
    }, Fi.__string_rec = function(n, _) {
        if (null == n) return "null";
        if (5 <= _.length) return "<...>";
        var t, e = typeof n;
        switch ("function" == e && (n.__name__ || n.__ename__) && (e = "object"), e) {
            case "function":
                return "<function>";
            case "object":
                if (n.__enum__) {
                    var a = A[n.__enum__].__constructs__[n._hx_index],
                        i = a._hx_name;
                    return a.__params__ ? (_ += "\t", i + "(" + function() {
                        for (var t = [], e = 0, i = a.__params__; e < i.length;) {
                            var s = i[e];
                            e += 1, t.push(Fi.__string_rec(n[s], _))
                        }
                        return t
                    }().join(",") + ")") : i
                }
                if (n instanceof Array) {
                    var s = "[";
                    _ += "\t";
                    for (var r = 0, o = n.length; r < o;) {
                        var h = r++;
                        s += (0 < h ? "," : "") + Fi.__string_rec(n[h], _)
                    }
                    return s += "]"
                }
                try {
                    t = n.toString
                } catch (r) {
                    return "???"
                }
                if (null != t && t != Object.toString && "function" == typeof t) {
                    i = n.toString();
                    if ("[object Object]" != i) return i
                }
                s = "{\n";
                _ += "\t";
                var c = null != n.hasOwnProperty,
                    l = null;
                for (l in n) c && !n.hasOwnProperty(l) || "prototype" != l && "__class__" != l && "__super__" != l && "__interfaces__" != l && "__properties__" != l && (2 != s.length && (s += ", \n"), s += _ + l + " : " + Fi.__string_rec(n[l], _));
                return s += "\n" + (_ = _.substring(1)) + "}";
            case "string":
                return n;
            default:
                return String(n)
        }
    }, Fi.__interfLoop = function(t, e) {
        if (null == t) return !1;
        if (t == e) return !0;
        var i = t.__interfaces__;
        if (null != i)
            for (var s = 0, n = i.length; s < n;) {
                var _ = i[s++];
                if (_ == e || Fi.__interfLoop(_, e)) return !0
            }
        return Fi.__interfLoop(t.__super__, e)
    }, Fi.__instanceof = function(t, e) {
        if (null == e) return !1;
        switch (e) {
            case Array:
                return t instanceof Array;
            case os:
                return "boolean" == typeof t;
            case as:
                return null != t;
            case rs:
                return "number" == typeof t;
            case _s:
                return "number" == typeof t && (0 | t) === t;
            case String:
                return "string" == typeof t;
            default:
                if (null == t) return !1;
                if ("function" == typeof e) {
                    if (Fi.__downcastCheck(t, e)) return !0
                } else if ("object" == typeof e && Fi.__isNativeObj(e) && t instanceof e) return !0;
                return e == hs && null != t.__name__ ? !0 : e == cs && null != t.__ename__ || null != t.__enum__ && A[t.__enum__] == e
        }
    }, Fi.__downcastCheck = function(t, e) {
        return t instanceof e || !!e.__isInterface__ && Fi.__interfLoop(Fi.getClass(t), e)
    }, Fi.__implements = function(t, e) {
        return Fi.__interfLoop(Fi.getClass(t), e)
    }, Fi.__cast = function(t, e) {
        if (null == t || Fi.__instanceof(t, e)) return t;
        throw ui.thrown("Cannot cast " + R.string(t) + " to " + R.string(e))
    }, Fi.__nativeClassName = function(t) {
        t = Fi.__toStr.call(t).slice(8, -1);
        return "Object" == t || "Function" == t || "Math" == t || "JSON" == t ? null : t
    }, Fi.__isNativeObj = function(t) {
        return null != Fi.__nativeClassName(t)
    }, Fi.__resolveNativeClass = function(t) {
        return u[t]
    };
    var Gi = function() {};
    (e["js.Browser"] = Gi).__name__ = "js.Browser", Gi.get_supported = function() {
        return "undefined" != typeof window && void 0 !== window.location && "string" == typeof window.location.protocol
    }, Gi.getLocalStorage = function() {
        try {
            var t, e = window.localStorage;
            return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
        } catch (t) {
            return null
        }
    }, Gi.getSessionStorage = function() {
        try {
            var t, e = window.sessionStorage;
            return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
        } catch (t) {
            return null
        }
    }, Gi.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw ui.thrown("Unable to create XMLHttpRequest object.")
    };
    var Vi = function() {};
    (e["js.Cookie"] = Vi).__name__ = "js.Cookie", Vi.set = function(t, e, i, s, n) {
        e = t + "=" + encodeURIComponent(e);
        null != i && (e += ";expires=" + new Date((new Date).getTime() + 1e3 * i).toGMTString()), null != s && (e += ";path=" + s), null != n && (e += ";domain=" + n), window.document.cookie = e
    }, Vi.all = function() {
        for (var t = new Ii, e = window.document.cookie.split(";"), i = 0; i < e.length;) {
            var s = e[i];
            ++i;
            var n = (s = c.ltrim(s)).split("=");
            n.length < 2 || (s = decodeURIComponent(n[1].split("+").join(" ")), t.h[n[0]] = s)
        }
        return t
    }, Vi.get = function(t) {
        return Vi.all().h[t]
    }, Vi.exists = function(t) {
        var e = Vi.all();
        return Object.prototype.hasOwnProperty.call(e.h, t)
    }, Vi.remove = function(t, e, i) {
        Vi.set(t, "", -10, e, i)
    };
    var Hi = A["tweezer.EEase"] = {
        __ename__: "tweezer.EEase",
        __constructs__: null,
        EASE_IN: {
            _hx_name: "EASE_IN",
            _hx_index: 0,
            __enum__: "tweezer.EEase",
            toString: i
        },
        EASE_IN_OUT: {
            _hx_name: "EASE_IN_OUT",
            _hx_index: 1,
            __enum__: "tweezer.EEase",
            toString: i
        },
        EASE_OUT: {
            _hx_name: "EASE_OUT",
            _hx_index: 2,
            __enum__: "tweezer.EEase",
            toString: i
        },
        EASE_OUT_IN: {
            _hx_name: "EASE_OUT_IN",
            _hx_index: 3,
            __enum__: "tweezer.EEase",
            toString: i
        }
    };
    Hi.__constructs__ = [Hi.EASE_IN, Hi.EASE_IN_OUT, Hi.EASE_OUT, Hi.EASE_OUT_IN];
    var Ji = A["tweezer.ETween"] = {
        __ename__: "tweezer.ETween",
        __constructs__: null,
        BACK: ((h = function(t) {
            return {
                _hx_index: 0,
                p_overshoot: t,
                __enum__: "tweezer.ETween",
                toString: i
            }
        })._hx_name = "BACK", h.__params__ = ["p_overshoot"], h),
        BOUNCE: {
            _hx_name: "BOUNCE",
            _hx_index: 1,
            __enum__: "tweezer.ETween",
            toString: i
        },
        CIRCULAR: {
            _hx_name: "CIRCULAR",
            _hx_index: 2,
            __enum__: "tweezer.ETween",
            toString: i
        },
        CUBIC: {
            _hx_name: "CUBIC",
            _hx_index: 3,
            __enum__: "tweezer.ETween",
            toString: i
        },
        ELASTIC: ((h = function(t, e) {
            return {
                _hx_index: 4,
                p_period: t,
                p_amplitude: e,
                __enum__: "tweezer.ETween",
                toString: i
            }
        })._hx_name = "ELASTIC", h.__params__ = ["p_period", "p_amplitude"], h),
        EXPONENTIAL: {
            _hx_name: "EXPONENTIAL",
            _hx_index: 5,
            __enum__: "tweezer.ETween",
            toString: i
        },
        LINEAR: {
            _hx_name: "LINEAR",
            _hx_index: 6,
            __enum__: "tweezer.ETween",
            toString: i
        },
        QUADRATIC: {
            _hx_name: "QUADRATIC",
            _hx_index: 7,
            __enum__: "tweezer.ETween",
            toString: i
        },
        QUARTIC: {
            _hx_name: "QUARTIC",
            _hx_index: 8,
            __enum__: "tweezer.ETween",
            toString: i
        },
        QUINTIC: {
            _hx_name: "QUINTIC",
            _hx_index: 9,
            __enum__: "tweezer.ETween",
            toString: i
        },
        SINE: {
            _hx_name: "SINE",
            _hx_index: 10,
            __enum__: "tweezer.ETween",
            toString: i
        }
    };

    function Ki() {}
    Ji.__constructs__ = [Ji.BACK, Ji.BOUNCE, Ji.CIRCULAR, Ji.CUBIC, Ji.ELASTIC, Ji.EXPONENTIAL, Ji.LINEAR, Ji.QUADRATIC, Ji.QUARTIC, Ji.QUINTIC, Ji.SINE], (e["tweezer.TweenFactory"] = Ki).__name__ = "tweezer.TweenFactory", Ki.createTweenFunction = function(e, i, s, t, n) {
        switch (null == t && (t = Hi.EASE_IN), null == n && (n = Ji.LINEAR), n._hx_index) {
            case 0:
                var _ = n.p_overshoot;
                switch (null == _ && (_ = 1.70158), t._hx_index) {
                    case 0:
                        return function(t) {
                            return zi.easeIn(t, e, i, s, _)
                        };
                    case 1:
                        return function(t) {
                            return zi.easeInOut(t, e, i, s, _)
                        };
                    case 2:
                        return function(t) {
                            return zi.easeOut(t, e, i, s, _)
                        };
                    case 3:
                        return function(t) {
                            return zi.easeOutIn(t, e, i, s, _)
                        }
                }
                break;
            case 1:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Wi.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return Wi.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return Wi.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return Wi.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 2:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Xi.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return Xi.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return Xi.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return Xi.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 3:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Qi.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return Qi.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return Qi.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return Qi.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 4:
                var a = n.p_period,
                    r = n.p_amplitude;
                switch (null == a && (a = .3 * s * (t == Hi.EASE_IN_OUT ? 1.5 : 1)), null == r && (r = 0), t._hx_index) {
                    case 0:
                        return function(t) {
                            return Yi.easeIn(t, e, i, s, a, r)
                        };
                    case 1:
                        return function(t) {
                            return Yi.easeInOut(t, e, i, s, a, r)
                        };
                    case 2:
                        return function(t) {
                            return Yi.easeOut(t, e, i, s, a, r)
                        };
                    case 3:
                        return function(t) {
                            return Yi.easeOutIn(t, e, i, s, a, r)
                        }
                }
                break;
            case 5:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Zi.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return Zi.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return Zi.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return Zi.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 6:
                return function(t) {
                    return qi.ease(t, e, i, s)
                };
            case 7:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return $i.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return $i.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return $i.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return $i.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 8:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return ts.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return ts.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return ts.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return ts.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 9:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return es.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return es.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return es.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return es.easeOutIn(t, e, i, s)
                        }
                }
                break;
            case 10:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return is.easeIn(t, e, i, s)
                        };
                    case 1:
                        return function(t) {
                            return is.easeInOut(t, e, i, s)
                        };
                    case 2:
                        return function(t) {
                            return is.easeOut(t, e, i, s)
                        };
                    case 3:
                        return function(t) {
                            return is.easeOutIn(t, e, i, s)
                        }
                }
        }
    };
    var ji = function(t, e, i, s, n, _, a, r, o, h, c) {
        null == a && (a = 0), null == _ && (_ = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = i, this._endValue = s, this._startDelay = n, this._duration = _, this._endDelay = a, this._easeType = r, this._tweenType = o, this._completeCallback = h, this._isSnap = c, y.call(this, t), this._updater(), this._updates = 0
    };
    (e["tweezer.Tweezer"] = ji).__name__ = "tweezer.Tweezer", ji.__super__ = y, ji.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this._tweenFunction = Ki.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), null != this._updateCallback && (t = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration)), this._updateCallback(this._isSnap ? Math.round(t) : t)), this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: ji
    });
    var zi = function() {};
    (e["tweezer.tweens.Back"] = zi).__name__ = "tweezer.tweens.Back", zi.easeIn = function(t, e, i, s, n) {
        return i * (t /= s) * t * ((n + 1) * t - n) + e
    }, zi.easeOut = function(t, e, i, s, n) {
        return i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
    }, zi.easeInOut = function(t, e, i, s, n) {
        return (t /= s / 2) < 1 ? i / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
    }, zi.easeOutIn = function(t, e, i, s, n) {
        return t < s / 2 ? zi.easeOut(2 * t, e, i / 2, s, n) : zi.easeIn(2 * t - s, e + i / 2, i / 2, s, n)
    };
    var Wi = function() {};
    (e["tweezer.tweens.Bounce"] = Wi).__name__ = "tweezer.tweens.Bounce", Wi.easeIn = function(t, e, i, s) {
        return i - Wi.easeOut(s - t, 0, i, s) + e
    }, Wi.easeOut = function(t, e, i, s) {
        return (t /= s) < .36363636363636365 ? i * (7.5625 * t * t) + e : t < .7272727272727273 ? i * (7.5625 * (t -= .5454545454545454) * t + .75) + e : t < .9090909090909091 ? i * (7.5625 * (t -= .8181818181818182) * t + .9375) + e : i * (7.5625 * (t -= .9545454545454546) * t + .984375) + e
    }, Wi.easeInOut = function(t, e, i, s) {
        return t < s / 2 ? .5 * Wi.easeIn(2 * t, 0, i, s) + e : .5 * Wi.easeOut(2 * t - s, 0, i, s) + .5 * i + e
    }, Wi.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? Wi.easeOut(2 * t, e, i / 2, s) : Wi.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var Xi = function() {};
    (e["tweezer.tweens.Circular"] = Xi).__name__ = "tweezer.tweens.Circular", Xi.easeIn = function(t, e, i, s) {
        return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
    }, Xi.easeOut = function(t, e, i, s) {
        return t = t / s - 1, i * Math.sqrt(1 - t * t) + e
    }, Xi.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }, Xi.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? Xi.easeOut(2 * t, e, i / 2, s) : Xi.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var Qi = function() {};
    (e["tweezer.tweens.Cubic"] = Qi).__name__ = "tweezer.tweens.Cubic", Qi.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t + e
    }, Qi.easeOut = function(t, e, i, s) {
        return i * ((t = t / s - 1) * t * t + 1) + e
    }, Qi.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
    }, Qi.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? Qi.easeOut(2 * t, e, i / 2, s) : Qi.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var Yi = function() {};
    (e["tweezer.tweens.Elastic"] = Yi).__name__ = "tweezer.tweens.Elastic", Yi.easeIn = function(t, e, i, s, n, _) {
        if (0 == t) return e;
        if (1 == (t /= s)) return e + i;
        i = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
        return -(_ * Math.pow(2, 10 * --t) * Math.sin((t * s - i) * (2 * Math.PI) / n)) + e
    }, Yi.easeOut = function(t, e, i, s, n, _) {
        if (0 == t) return e;
        if (1 == (t /= s)) return e + i;
        var a = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
        return _ * Math.pow(2, -10 * t) * Math.sin((t * s - a) * (2 * Math.PI) / n) + i + e
    }, Yi.easeInOut = function(t, e, i, s, n, _) {
        if (0 == t) return e;
        if (2 == (t /= s / 2)) return e + i;
        var a = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
        return t < 1 ? _ * Math.pow(2, 10 * --t) * Math.sin((t * s - a) * (2 * Math.PI) / n) * -.5 + e : _ * Math.pow(2, -10 * --t) * Math.sin((t * s - a) * (2 * Math.PI) / n) * .5 + i + e
    }, Yi.easeOutIn = function(t, e, i, s, n, _) {
        return t < s / 2 ? Yi.easeOut(2 * t, e, i / 2, s, n, _) : Yi.easeIn(2 * t - s, e + i / 2, i / 2, s, n, _)
    };
    var Zi = function() {};
    (e["tweezer.tweens.Exponential"] = Zi).__name__ = "tweezer.tweens.Exponential", Zi.easeIn = function(t, e, i, s) {
        return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
    }, Zi.easeOut = function(t, e, i, s) {
        return t == s ? e + i : 1.001 * i * (1 - Math.pow(2, -10 * t / s)) + e
    }, Zi.easeInOut = function(t, e, i, s) {
        return 0 == t ? e : t == s ? e + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * i : i / 2 * 1.0005 * (2 - Math.pow(2, -10 * --t)) + e
    }, Zi.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? Zi.easeOut(2 * t, e, i / 2, s) : Zi.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var qi = function() {};
    (e["tweezer.tweens.Linear"] = qi).__name__ = "tweezer.tweens.Linear", qi.ease = function(t, e, i, s) {
        return i * t / s + e
    };
    var $i = function() {};
    (e["tweezer.tweens.Quadratic"] = $i).__name__ = "tweezer.tweens.Quadratic", $i.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t + e
    }, $i.easeOut = function(t, e, i, s) {
        return -i * (t /= s) * (t - 2) + e
    }, $i.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
    }, $i.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? $i.easeOut(2 * t, e, i / 2, s) : $i.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var ts = function() {};
    (e["tweezer.tweens.Quartic"] = ts).__name__ = "tweezer.tweens.Quartic", ts.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t * t + e
    }, ts.easeOut = function(t, e, i, s) {
        return -i * ((t = t / s - 1) * t * t * t - 1) + e
    }, ts.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    }, ts.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? ts.easeOut(2 * t, e, i / 2, s) : ts.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var es = function() {};
    (e["tweezer.tweens.Quintic"] = es).__name__ = "tweezer.tweens.Quintic", es.easeIn = function(t, e, i, s) {
        return i * (t /= s) * t * t * t * t + e
    }, es.easeOut = function(t, e, i, s) {
        return i * ((t = t / s - 1) * t * t * t * t + 1) + e
    }, es.easeInOut = function(t, e, i, s) {
        return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }, es.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? es.easeOut(2 * t, e, i / 2, s) : es.easeIn(2 * t - s, e + i / 2, i / 2, s)
    };
    var is = function() {};

    function ss(t) {
        return t instanceof Array ? new Di(t) : t.iterator()
    }

    function ns(t, e) {
        return null == e ? null : (null == e.__id__ && (e.__id__ = u.$haxeUID++), null == t.hx__closures__ ? t.hx__closures__ = {} : i = t.hx__closures__[e.__id__], null == i && (i = e.bind(t), t.hx__closures__[e.__id__] = i), i);
        var i
    }(e["tweezer.tweens.Sine"] = is).__name__ = "tweezer.tweens.Sine", is.easeIn = function(t, e, i, s) {
        return -i * Math.cos(t / s * (Math.PI / 2)) + i + e
    }, is.easeOut = function(t, e, i, s) {
        return i * Math.sin(t / s * (Math.PI / 2)) + e
    }, is.easeInOut = function(t, e, i, s) {
        return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + e
    }, is.easeOutIn = function(t, e, i, s) {
        return t < s / 2 ? is.easeOut(2 * t, e, i / 2, s) : is.easeIn(2 * t - s, e + i / 2, i / 2, s)
    }, u.$haxeUID |= 0, "undefined" != typeof performance && "function" == typeof performance.now && (C.now = performance.now.bind(performance)), e.Math = Math, null == String.fromCodePoint && (String.fromCodePoint = function(t) {
        return t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55232 + (t >> 10)) + String.fromCharCode(56320 + (1023 & t))
    }), String.prototype.__class__ = e.String = String, String.__name__ = "String", e.Array = Array, Array.__name__ = "Array", Date.prototype.__class__ = e.Date = Date, Date.__name__ = "Date";
    var _s = {},
        as = {},
        rs = Number,
        os = Boolean,
        hs = {},
        cs = {};
    pi.content = [{
        name: "revision",
        data: "MTI2DQoyMDI0LzAzLzI2IDE3OjI2OjU2DQo"
    }, {
        name: "config",
        data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJleG8yLWV4dHJhYm9sZGl0YWxpYy13ZWJmb250IiAvPg0KCQk8YXNjaWlBcnQ+DQogICBfX18gX19fX19fX18gX19fXyAgIF9fX19fX19fX19fX19fX19fX19fX19fICBfXyBfX19fX19fX18gIF9fX18NCiAgLyBfIC9fICBfXy8gLy8gLyAvICAvIF9fL18gIF9fLyAgXy8gX19fLyBfXy8gLyAvLyAvIF9fLyBfIFwvIF9fIFwNCiAvIF9fIHwvIC8gLyBfICAvIC9fXy8gXy8gIC8gLyBfLyAvLyAvX19fXCBcICAvIF8gIC8gXy8vICwgXy8gL18vIC8NCi9fLyB8Xy9fLyAvXy8vXy9fX19fL19fXy8gL18vIC9fX18vXF9fXy9fX18vIC9fLy9fL19fXy9fL3xffFxfX19fLw0KDQoJCTwvYXNjaWlBcnQ+DQoJCTx1cmxzPg0KCQkJPHdlYnNpdGU+aHR0cHM6Ly93d3cuY2JjLmNhL2tpZHMvZ2FtZXM8L3dlYnNpdGU+DQoJCTwvdXJscz4NCgkJPGdvb2dsZUFuYWx5dGljcyBpZD0iVUEtMjI0MDYzMzctMzgiIGVuYWJsZWQ9InRydWUiIC8+DQoJCTxhdWRpb0hvbGREZWxheT41MDAwPC9hdWRpb0hvbGREZWxheT4NCgkJPG92ZXJyaWRlRGVmYXVsdFVuaXRTdGF0cyBzYWZldHk9InRydWUiIHZhbHVlPSIzIiAvPg0KCQk8b3ZlcnJpZGVEZWZhdWx0UXVpY2tzIHNhZmV0eT0icXRlcXVpY2tzIiB2YWx1ZVNwcmludD0iUiIgdmFsdWVUaHJvdz0iUiIgdmFsdWVKdW1wPSJMLFIiIHJhbmRvbT0iZmFsc2UiIC8+DQoJPC9zZXR0aW5ncz4NCgk8Z3VpPg0KCQk8YXVkaW9Ib2xkTWVzc2FnZT5QUkVTUyBUTyBDT05USU5VRTwvYXVkaW9Ib2xkTWVzc2FnZT4NCgkJPGJ1dHRvbnM+DQoJCQk8d2Vic2l0ZT5Nb3JlIGdhbWVzPC93ZWJzaXRlPg0KCQkJPGluc3RydWN0aW9ucz5Ib3cgdG8gcGxheTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPHBsYXk+UGxheSBub3c8L3BsYXk+DQoJCQk8YXZhdGFyPkNoYW5nZSBoZXJvPC9hdmF0YXI+DQoJCQk8c2VsZWN0TGV2ZWw+U3RhcnQgbWF0Y2g8L3NlbGVjdExldmVsPg0KCQkJPHJlcGxheT5QbGF5IGFnYWluPC9yZXBsYXk+DQoJCQk8Y29udGludWU+Q29udGludWU8L2NvbnRpbnVlPg0KCQkJPGZpbmlzaGVkPkdhbWUgb3ZlcjwvZmluaXNoZWQ+DQoJCQk8cmVzZXQ+UmVzZXQgSGVybzwvcmVzZXQ+DQoJCQk8YnV5PkJ1eTwvYnV5Pg0KCQkJPHVucGF1c2U+UmVzdW1lPC91bnBhdXNlPg0KCQkJPGF1ZGlvT24+U291bmQgT248L2F1ZGlvT24+DQoJCQk8YXVkaW9PZmY+U291bmQgT2ZmPC9hdWRpb09mZj4NCgkJCTxmdWxsU2NyZWVuT24+RnVsbCBzY3JlZW48L2Z1bGxTY3JlZW5Pbj4NCgkJCTxmdWxsU2NyZWVuT2ZmPkV4aXQgZnVsbCBzY3JlZW48L2Z1bGxTY3JlZW5PZmY+DQoJCQk8YmFjaz5NYWluIG1lbnU8L2JhY2s+DQoJCQk8dGVzdE1vZGU+DQoJCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCQk8c2lsdmVyPlNpbHZlcjwvc2lsdmVyPg0KCQkJCTxnb2xkPkdvbGQ8L2dvbGQ+DQoJCQk8L3Rlc3RNb2RlPg0KCQkJPGF2YXRhcnM+DQoJCQkJPHVuaXRBPk1lbjwvdW5pdEE+DQoJCQkJPHVuaXRCPldvbWVuPC91bml0Qj4NCgkJCTwvYXZhdGFycz4NCgkJCTxsZXZlbHM+DQoJCQkJPGxldmVsMT5CZWdpbm5lcjwvbGV2ZWwxPg0KCQkJCTxsZXZlbDI+Tm9ybWFsPC9sZXZlbDI+DQoJCQkJPGxldmVsMz5FeHBlcnQ8L2xldmVsMz4NCgkJCTwvbGV2ZWxzPg0KCQk8L2J1dHRvbnM+DQoJCTx1cGdyYWRlcz4NCgkJCTxtb3ZlbWVudD5TcGVlZDwvbW92ZW1lbnQ+DQoJCQk8dGltaW5nPlRpbWluZzwvdGltaW5nPg0KCQkJPHBvd2VyPlBvd2VyPC9wb3dlcj4NCgkJCTxzdGFtaW5hPlN0YW1pbmE8L3N0YW1pbmE+DQoJCTwvdXBncmFkZXM+DQoJCTxtZWRhbHM+DQoJCQk8bm9uZT5SZXNwZWN0PC9ub25lPg0KCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCTxzaWx2ZXI+U2lsdmVyPC9zaWx2ZXI+DQoJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQk8L21lZGFscz4NCgkJPGxldmVscz4NCgkJCTxsZXZlbDE+MTAwbSBTcHJpbnQ8L2xldmVsMT4NCgkJCTxsZXZlbDI+SmF2ZWxpbiBUaHJvdzwvbGV2ZWwyPg0KCQkJPGxldmVsMz5UcmlwbGUgSnVtcDwvbGV2ZWwzPg0KCQk8L2xldmVscz4NCgkJPHVuaXRzPg0KCQkJPHVuaXRBIHRpdGxlPSJNZW4iIHN1YnRpdGxlPSJUZWFtIiAvPg0KCQkJPHVuaXRCIHRpdGxlPSJXb21lbiIgc3VidGl0bGU9IlRlYW0iIC8+DQoJCTwvdW5pdHM+DQoJCTxzY2VuZXM+DQoJCQk8bWVudT4NCgkJCQk8dGl0bGU+QXRobGV0aWNzIEhlcm88L3RpdGxlPg0KCQkJCTxzdWJ0aXRsZT5TdW1tZXIgU3BvcnRzPC9zdWJ0aXRsZT4NCgkJCTwvbWVudT4NCgkJCTxpbnN0cnVjdGlvbnM+DQoJCQkJPHRpdGxlPkhvdyB0byBwbGF5PC90aXRsZT4NCgkJCQk8bWVzc2FnZT48IVtDREFUQVtDaG9vc2UgeW91ciBoZXJvIGFuZCBjb21wZXRlIGluIHRoZSAxMDBtLCBKYXZlbGluIGFuZCBUcmlwbGUgSnVtcC48YnIvPjxici8+VGFwIHRoZSBwcm9tcHRzIHRvIHRpbWUgeW91ciBtb3ZlcyB0byBwZXJmZWN0aW9uLiAgVGhyb3cgYW5kIGp1bXAgYnkgaG9sZGluZyBhbmQgcmVsZWFzaW5nIHdoZW4gdGhlIHBvd2VyIGJhciBpcyBtYXhlZCAtIGF2b2lkIG92ZXIgcG93ZXJpbmchPGJyLz48YnIvPldpbGwgeW91IHdpbiBhIEdvbGQgTWVkYWwgYWNyb3NzIGFsbCBldmVudHM/XV0+PC9tZXNzYWdlPg0KCQkJPC9pbnN0cnVjdGlvbnM+DQoJCQk8YXZhdGFyPg0KCQkJCTx0aXRsZT5TZWxlY3QgaGVybzwvdGl0bGU+DQoJCQk8L2F2YXRhcj4NCgkJCTxzZWxlY3RMZXZlbD4NCgkJCQk8dGl0bGU+U2VsZWN0IGF0aGxldGljcyBldmVudDwvdGl0bGU+DQoJCQkJPG1lc3NhZ2VOZXc+UGxheSB0byB3aW4gYSBtZWRhbDwvbWVzc2FnZU5ldz4NCgkJCQk8bWVzc2FnZUxvY2tlZD5QbGF5IF9fUFJFVklPVVNfTEVWRUxfXyB0byB1bmxvY2s8L21lc3NhZ2VMb2NrZWQ+DQoJCQkJPG5ldz5OZXc8L25ldz4NCgkJCQk8bG9ja2VkPkxvY2tlZDwvbG9ja2VkPg0KCQkJPC9zZWxlY3RMZXZlbD4NCgkJCTxnYW1lPg0KCQkJCTxodWQ+DQoJCQkJCTxjb2lucz5Db2luczwvY29pbnM+DQoJCQkJCTx0YXJnZXRzPg0KCQkJCQkJPGRpc3RhbmNlPkRpc3RhbmNlIHRvIGJlYXQ8L2Rpc3RhbmNlPg0KCQkJCQkJPHRpbWU+VGltZSB0byBiZWF0PC90aW1lPg0KCQkJCQk8L3RhcmdldHM+DQoJCQkJCTxjdXJyZW50Pg0KCQkJCQkJPGRpc3RhbmNlPkN1cnJlbnQgZGlzdGFuY2U8L2Rpc3RhbmNlPg0KCQkJCQkJPHRpbWU+Q3VycmVudCB0aW1lPC90aW1lPg0KCQkJCQk8L2N1cnJlbnQ+DQoJCQkJCTxhbGVydHM+DQoJCQkJCQk8c3ByaW50Pg0KCQkJCQkJCTxzZXQ+U2V0PC9zZXQ+DQoJCQkJCQkJPGdvPkdvITwvZ28+DQoJCQkJCQk8L3NwcmludD4NCgkJCQkJCTx0aHJvdz4NCgkJCQkJCQk8c3RhcnQ+U3RhcnQhPC9zdGFydD4NCgkJCQkJCTwvdGhyb3c+DQoJCQkJCQk8anVtcD4NCgkJCQkJCQk8c3RhcnQ+U3RhcnQhPC9zdGFydD4NCgkJCQkJCTwvanVtcD4NCgkJCQkJPC9hbGVydHM+DQoJCQkJCTxwcm9tcHRzPg0KCQkJCQkJPHF1aWNrPlRhcCBUbyBSdW48L3F1aWNrPg0KCQkJCQkJPHNraWxsPg0KCQkJCQkJCTxob2xkPkhvbGQgRm9yIFBvd2VyPC9ob2xkPg0KCQkJCQkJCTxyZWxlYXNlVGhyb3c+UmVsZWFzZSBUbyBUaHJvdzwvcmVsZWFzZVRocm93Pg0KCQkJCQkJCTxyZWxlYXNlSnVtcD5SZWxlYXNlIFRvIEp1bXA8L3JlbGVhc2VKdW1wPg0KCQkJCQkJPC9za2lsbD4NCgkJCQkJPC9wcm9tcHRzPg0KCQkJCTwvaHVkPg0KCQkJPC9nYW1lPg0KCQkJPHJlc3VsdHM+DQoJCQkJPHRpdGxlPlJlc3VsdHM8L3RpdGxlPg0KCQkJCTxtZXNzYWdlPllvdSB3b248L21lc3NhZ2U+DQoJCQk8L3Jlc3VsdHM+DQoJCQk8c2hvcD4NCgkJCQk8dGl0bGU+VHJhaW4geW91ciBoZXJvPC90aXRsZT4NCgkJCQk8bWF4ZWQ+TWF4ZWQ8L21heGVkPg0KCQkJPC9zaG9wPg0KCQk8L3NjZW5lcz4NCgk8L2d1aT4NCjwvZGF0YT4NCg"
    }], Ci.count = 0, Fi.__toStr = {}.toString, S.Element = 0, S.PCData = 1, S.CData = 2, S.Comment = 3, S.DocType = 4, S.ProcessingInstruction = 5, S.Document = 6, gi.USE_CACHE = !1, gi.USE_ENUM_INDEX = !1, gi.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", yi.DEFAULT_RESOLVER = new mi, yi.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", Si.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Si.BYTES = Ei.ofString(Si.CHARS), Bi.escapes = ((g = new Ii).h.lt = "<", g.h.gt = ">", g.h.amp = "&", g.h.quot = '"', g.h.apos = "'", g), jt.main()
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);