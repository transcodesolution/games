! function(u) {
    "use strict";

    function i() {
        return Di.__string_rec(this, "")
    }
    var h, e = {},
        R = R || {};

    function t(t, e) {
        var i, s = Object.create(t);
        for (i in e) s[i] = e[i];
        return e.toString !== Object.prototype.toString && (s.toString = e.toString), s
    }

    function d(t, e) {
        this.r = new RegExp(t, e.split("u").join(""))
    }

    function A() {}

    function g() {}

    function U() {}

    function T() {}

    function w() {
        this.b = ""
    }

    function l() {}(e.EReg = d).__name__ = "EReg", d.prototype = {
        match: function(t) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
        },
        matched: function(t) {
            if (null != this.r.m && 0 <= t && t < this.r.m.length) return this.r.m[t];
            throw ai.thrown("EReg::matched")
        },
        split: function(t) {
            var e = "#__delim__#";
            return t.replace(this.r, e).split(e)
        },
        __class__: d
    }, (e.HxOverrides = A).__name__ = "HxOverrides", A.strDate = function(t) {
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
                throw ai.thrown("Invalid date format : " + t)
        }
    }, A.cca = function(t, e) {
        e = t.charCodeAt(e);
        if (e == e) return e
    }, A.substr = function(t, e, i) {
        if (null == i) i = t.length;
        else if (i < 0) {
            if (0 != e) return "";
            i = t.length + i
        }
        return t.substr(e, i)
    }, A.remove = function(t, e) {
        e = t.indexOf(e);
        return -1 != e && (t.splice(e, 1), !0)
    }, A.now = function() {
        return Date.now()
    }, (e.Lambda = g).__name__ = "Lambda", g.has = function(t, e) {
        for (var i = Zi(t); i.hasNext();)
            if (i.next() == e) return !0;
        return !1
    }, g.exists = function(t, e) {
        for (var i = Zi(t); i.hasNext();)
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
    }, (e.Std = T).__name__ = "Std", T.string = function(t) {
        return Di.__string_rec(t, "")
    }, T.parseInt = function(t) {
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
    }, T.random = function(t) {
        return t <= 0 ? 0 : Math.floor(Math.random() * t)
    }, (e.StringBuf = w).__name__ = "StringBuf", w.prototype = {
        __class__: w
    }, (e.StringTools = l).__name__ = "StringTools", l.htmlEscape = function(t, e) {
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
    }, l.isSpace = function(t, e) {
        e = A.cca(t, e);
        return 8 < e && e < 14 || 32 == e
    }, l.ltrim = function(t) {
        for (var e = t.length, i = 0; i < e && l.isSpace(t, i);) ++i;
        return 0 < i ? A.substr(t, i, e - i) : t
    }, l.rtrim = function(t) {
        for (var e = t.length, i = 0; i < e && l.isSpace(t, e - i - 1);) ++i;
        return 0 < i ? A.substr(t, 0, e - i) : t
    }, l.trim = function(t) {
        return l.ltrim(l.rtrim(t))
    }, l.replace = function(t, e, i) {
        return t.split(e).join(i)
    }, l.hex = function(t, e) {
        for (var i = ""; i = "0123456789ABCDEF".charAt(15 & t) + i, 0 < (t >>>= 4););
        if (null != e)
            for (; i.length < e;) i = "0" + i;
        return i
    };
    var s = R.ValueType = {
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

    function C() {}

    function S(t) {
        this.nodeType = t, this.children = [], this.attributeMap = new bi
    }
    s.__constructs__ = [s.TNull, s.TInt, s.TFloat, s.TBool, s.TObject, s.TFunction, s.TClass, s.TEnum, s.TUnknown], (e.Type = C).__name__ = "Type", C.getEnum = function(t) {
        return null == t ? null : R[t.__enum__]
    }, C.createEnum = function(t, e, i) {
        var s = U.field(t, e);
        if (null == s) throw ai.thrown("No such constructor " + e);
        if (U.isFunction(s)) {
            if (null == i) throw ai.thrown("Constructor " + e + " need parameters");
            return s.apply(t, i)
        }
        if (null != i && 0 != i.length) throw ai.thrown("Constructor " + e + " does not need parameters");
        return s
    }, C.createEnumIndex = function(t, e, i) {
        var s = t.__constructs__[e];
        if (null == (s = null == s ? null : s._hx_name)) throw ai.thrown(e + " is not a valid enum constructor index");
        return C.createEnum(t, s, i)
    }, C.typeof = function(t) {
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
                if (null != e) return s.TEnum(R[e]);
                e = Di.getClass(t);
                return null != e ? s.TClass(e) : s.TObject;
            case "string":
                return s.TClass(String);
            case "undefined":
                return s.TNull;
            default:
                return s.TUnknown
        }
    }, C.enumEq = function(t, e) {
        if (t == e) return !0;
        try {
            var i = t.__enum__;
            if (null == i || i != e.__enum__) return !1;
            if (t._hx_index != e._hx_index) return !1;
            for (var s = R[i].__constructs__[t._hx_index].__params__, n = 0; n < s.length;) {
                var _ = s[n];
                if (++n, !C.enumEq(t[_], e[_])) return !1
            }
        } catch (n) {
            return !1
        }
        return !0
    }, C.enumParameters = function(t) {
        var e = R[t.__enum__].__constructs__[t._hx_index].__params__;
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
        return Ii.parse(t)
    }, S.createElement = function(t) {
        var e = new S(S.Element);
        if (e.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeName = t, e
    }, S.createPCData = function(t) {
        var e = new S(S.PCData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createCData = function(t) {
        var e = new S(S.CData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createComment = function(t) {
        var e = new S(S.Comment);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocType = function(t) {
        var e = new S(S.DocType);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createProcessingInstruction = function(t) {
        var e = new S(S.ProcessingInstruction);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : v.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocument = function() {
        return new S(S.Document)
    }, S.prototype = {
        get: function(t) {
            if (this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return this.attributeMap.h[t]
        },
        set: function(t, e) {
            if (this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            this.attributeMap.h[t] = e
        },
        exists: function(t) {
            if (this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return Object.prototype.hasOwnProperty.call(this.attributeMap.h, t)
        },
        attributes: function() {
            if (this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return new Pi(this.attributeMap.h)
        },
        elements: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            for (var t = [], e = 0, i = this.children; e < i.length;) {
                var s = i[e];
                ++e, s.nodeType == S.Element && t.push(s)
            }
            return new Ai(t)
        },
        firstElement: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            for (var t = 0, e = this.children; t < e.length;) {
                var i = e[t];
                if (++t, i.nodeType == S.Element) return i
            }
            return null
        },
        addChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
        },
        removeChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : v.toString(this.nodeType)));
            return !!A.remove(this.children, t) && !(t.parent = null)
        },
        toString: function() {
            return ki.print(this)
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
        this._kernel = t, this._tools = this._kernel.tools, this._isEntity = Di.__implements(this, E), this._init()
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
            return this.isDisposed ? this.isActive = !1 : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(It.RESUME, this, !0, !0, !0)) : this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(It.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(It.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(It.RESUME, this, !0, !0, !0))
        },
        _resumer: function() {},
        __class__: o
    };
    var c = function() {};
    (e["awe6.interfaces.IAgendaManager"] = c).__name__ = "awe6.interfaces.IAgendaManager", c.__isInterface__ = !0, c.prototype = {
        __class__: c
    };
    var p = function() {};

    function m() {}(e["awe6.interfaces.IEntityCollection"] = p).__name__ = "awe6.interfaces.IEntityCollection", p.__isInterface__ = !0, p.__interfaces__ = [c], p.prototype = {
        __class__: p
    }, (e["awe6.interfaces.IViewable"] = m).__name__ = "awe6.interfaces.IViewable", m.__isInterface__ = !0, m.prototype = {
        __class__: m
    };
    var E = function() {};

    function f(t, e, i) {
        null == this.get_view() && (this.view = new wt(t, i, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), o.call(this, t)
    }

    function y() {}

    function x(t, e, i, s, n, _, a, r, o, h, l) {
        null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 20), null == s && (s = 100), this._stateUp = new b(t, e), this._stateOver = new b(t, i), this.x = _, this.y = a, this.set_width(s), this.set_height(n), this._keyType = r, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = l, f.call(this, t)
    }(e["awe6.interfaces.IEntity"] = E).__name__ = "awe6.interfaces.IEntity", E.__isInterface__ = !0, E.__interfaces__ = [p, m, r], E.prototype = {
        __class__: E
    }, (e["awe6.core.Entity"] = f).__name__ = "awe6.core.Entity", f.__interfaces__ = [E], f.__super__ = o, f.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.agenda = Pt.ALWAYS, this._entityAgendaPairs = new yi, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), C.enumEq(this.get_agenda(), Pt.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(Pt.ALWAYS))), this._isAgendaDirty = !1);
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
            null == e && (e = Pt.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var _ = n.next();
                if (_.entity == t && C.enumEq(_.agenda, e)) return t
            }
            this._isAgendaDirty = !0, t.get_parent() != this && (t.remove(i), t instanceof f && t._setParent(this));
            var a = new D(t, e),
                r = this._entityAgendaPairs;
            return r.head = new fi(a, r.head), i && (C.enumEq(e, this.get_agenda()) || e == Pt.ALWAYS ? this.get_view().addChild(t.get_view(), s) : (t.get_view().set_priority(s), a.isAddedToView = !0)), t
        },
        removeEntity: function(t, e, i) {
            if (null == i && (i = !1), !this.isDisposed && null != t) {
                for (var s = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var _ = n.next();
                    _.entity != t || null != e && !C.enumEq(_.agenda, e) || (this._entityAgendaPairs.remove(_), s = !0)
                }
                s && (this._isAgendaDirty = !0, t instanceof f && t._setParent(null), i && t.get_view().remove())
            }
        },
        remove: function(t) {
            null == t && (t = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, t)
        },
        getEntities: function(t) {
            return this._getEntities(t)
        },
        _getEntities: function(t) {
            if (!this._isAgendaDirty && (null == t || C.enumEq(t, this.get_agenda()))) return this._cachedEntities;
            for (var e = [], i = this._entityAgendaPairs.iterator(); i.hasNext();) {
                var s = i.next();
                null != t && !C.enumEq(t, s.agenda) || e.push(s.entity)
            }
            return e.reverse(), e
        },
        getEntitiesByClass: function(t, e, i, s, n) {
            if (null == n && (n = !1), null == s && (s = !1), null == i && (i = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
            for (var _ = [], a = this._getEntities(e), r = 0; r < a.length;) {
                var o = a[r];
                ++r, Di.__instanceof(o, t) && _.push(o), i && (_ = _.concat(o.getEntitiesByClass(t, e, !0)))
            }
            return s && null != this.get_parent() && (_ = _.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), _
        },
        setAgenda: function(t) {
            if (null == t && (t = Pt.ALWAYS), C.enumEq(this.get_agenda(), t)) return !1;
            this._isAgendaDirty = !0;
            for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
                var i = e.next(),
                    s = C.enumEq(this.get_agenda(), i.agenda) && i.entity.get_view().get_parent() == this.get_view();
                s && i.entity.get_view().remove(), i.isAddedToView = i.isAddedToView || s
            }
            this.agenda = t;
            for (e = this._entityAgendaPairs.iterator(); e.hasNext();)(i = e.next()).isAddedToView && (C.enumEq(Pt.ALWAYS, i.agenda) || C.enumEq(this.get_agenda(), i.agenda)) && this.get_view().addChild(i.entity.get_view());
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
        __class__: f
    }), (e["awe6.interfaces.IPositionable"] = y).__name__ = "awe6.interfaces.IPositionable", y.__isInterface__ = !0, y.prototype = {
        __class__: y
    }, (e["awe6.core.BasicButton"] = x).__name__ = "awe6.core.BasicButton", x.__interfaces__ = [y], x.__super__ = f, x.prototype = t(f.prototype, {
        _init: function() {
            f.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, Pt.SUB_TYPE(P.UP), !0), this.addEntity(this._stateOver, Pt.SUB_TYPE(P.OVER), !0), this.setAgenda(Pt.SUB_TYPE(P.UP))
        },
        _updater: function(t) {
            null == t && (t = 0), f.prototype._updater.call(this, t);
            var e = this._kernel.inputs.mouse,
                t = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            t && e.set_cursorType(Dt.BUTTON), t && !this.isOver && this.onRollOver(), !t && this.isOver && (e.set_cursorType(Dt.AUTO), this.onRollOut()), this.isOver = t, this.isOver && e.getIsButtonDown() && this.setAgenda(Pt.SUB_TYPE(P.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(t, e, i, s, n, _) {
            return !(t < i) && (!(e < s) && (!(i + n < t) && !(s + _ < e)))
        },
        onClick: function() {
            this.setAgenda(Pt.SUB_TYPE(P.UP)), null != this.onClickCallback && this.onClickCallback()
        },
        onRollOver: function() {
            this.setAgenda(Pt.SUB_TYPE(P.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
        },
        onRollOut: function() {
            this.setAgenda(Pt.SUB_TYPE(P.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
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
        __class__: x
    });
    var b = function(t, e) {
        f.call(this, t), this.view = e
    };
    (e["awe6.core._BasicButton._HelperState"] = b).__name__ = "awe6.core._BasicButton._HelperState", b.__super__ = f, b.prototype = t(f.prototype, {
        __class__: b
    });
    var P = R["awe6.core._BasicButton._HelperEState"] = {
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
    P.__constructs__ = [P.UP, P.OVER];
    var I = function() {};

    function k(t) {
        this._defaultSecret = t
    }(e["awe6.interfaces.IEncrypter"] = I).__name__ = "awe6.interfaces.IEncrypter", I.__isInterface__ = !0, I.prototype = {
        __class__: I
    }, (e["awe6.core.Encrypter"] = k).__name__ = "awe6.core.Encrypter", k.__interfaces__ = [I], k.prototype = {
        decrypt: function(t, e) {
            null == e && (e = "");
            e = "" != e ? e : this._defaultSecret;
            return this._xor(t, e)
        },
        _xor: function(t, e) {
            for (var i = new gi(new ArrayBuffer(t.length)), s = 0, n = 0, _ = i.length; n < _;) {
                var a = n++;
                i.b[a] = t.b[a] ^ A.cca(e, s), ++s >= e.length && (s = 0)
            }
            return i
        },
        __class__: k
    };
    var D = function(t, e) {
        this.entity = t, this.agenda = e, this.isAddedToView = !1
    };
    (e["awe6.core._Entity._HelperEntityAgendaPair"] = D).__name__ = "awe6.core._Entity._HelperEntityAgendaPair", D.prototype = {
        __class__: D
    };
    var L = function() {};

    function N(t, e, i, s, n, _, a, r, o, h, l, c, u, d) {
        this._kernel = t, this._keyUp = null != e ? e : Ct.UP, this._keyRight = null != i ? i : Ct.RIGHT, this._keyDown = null != s ? s : Ct.DOWN, this._keyLeft = null != n ? n : Ct.LEFT, this._keyPrimary = null != _ ? _ : Ct.SPACE, this._keySecondary = null != a ? a : Ct.Z, this._keyUpAlt = null != r ? r : Ct.W, this._keyRightAlt = null != o ? o : Ct.D, this._keyDownAlt = null != h ? h : Ct.S, this._keyLeftAlt = null != l ? l : Ct.A, this._keyPrimaryAlt = null != c ? c : Ct.Q, this._keySecondaryAlt = null != u ? u : Ct.E, this._joypadTouchType = null != d ? d : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._joypadTouchType != At.DISABLED, this._joypadStateCache = {
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

    function O(t) {
        o.call(this, t)
    }

    function M(t) {
        o.call(this, t)
    }(e["awe6.interfaces.IInputJoypad"] = L).__name__ = "awe6.interfaces.IInputJoypad", L.__isInterface__ = !0, L.prototype = {
        __class__: L
    }, (e["awe6.core.InputJoypad"] = N).__name__ = "awe6.core.InputJoypad", N.__interfaces__ = [L], N.prototype = {
        _checkKeyboard: function(t, e) {
            switch (t._hx_index) {
                case 0:
                    return !!this._checkKeyboard(Tt.PRIMARY, e) || this._checkKeyboard(Tt.SECONDARY, e);
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
        getIsButtonPress: function(t) {
            return !!this._checkKeyboard(t, qi(h = this._kernel.inputs.keyboard, h.getIsKeyPress)) || !!this._isTouchEnabled && this._checkTouchIsPress(t)
        },
        getIsButtonRelease: function(t) {
            return !!this._checkKeyboard(t, qi(h = this._kernel.inputs.keyboard, h.getIsKeyRelease)) || !!this._isTouchEnabled && this._checkTouchIsRelease(t)
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
                s = Tt.FIRE,
                n = Tt.FIRE,
                _ = this._getTouchButtonPosition(n),
                a = this._kernel.tools.distance(t, e, _.x, _.y, !0);
            a < i && (i = a, s = n);
            n = Tt.UP, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Tt.RIGHT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Tt.DOWN, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Tt.LEFT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n);
            n = Tt.PRIMARY, _ = this._getTouchButtonPosition(n);
            return (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < i && (i = a, s = n), s
        },
        _getTouchState: function() {
            var t = null != this._mouse || this._kernel.inputs.mouse instanceof dt && (this._mouse = Di.__cast(this._kernel.inputs.mouse, dt), !0);
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
                    e.isFire = s == Tt.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (e.isUp = s == Tt.UP, e.isRight = s == Tt.RIGHT, e.isDown = s == Tt.DOWN, e.isLeft = s == Tt.LEFT);
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
        __class__: N
    }, c = function() {}, (e["awe6.interfaces.IResettable"] = c).__name__ = "awe6.interfaces.IResettable", c.__isInterface__ = !0, c.prototype = {
        __class__: c
    }, L = function() {}, (e["awe6.interfaces.IInputManager"] = L).__name__ = "awe6.interfaces.IInputManager", L.__isInterface__ = !0, L.__interfaces__ = [c], L.prototype = {
        __class__: L
    }, (e["awe6.core.InputManager"] = O).__name__ = "awe6.core.InputManager", O.__interfaces__ = [L], O.__super__ = o, O.prototype = t(o.prototype, {
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
        createJoypad: function(t, e, i, s, n, _, a, r, o, h, l, c, u) {
            return new N(this._kernel, t, e, i, s, n, _, a, r, o, h, l, c, u)
        },
        reset: function() {
            var t = this._inputKeyboard;
            return t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), (t = this._inputMouse).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._init(), !0
        },
        __class__: O
    }), L = function() {}, (e["awe6.interfaces.IMessageManager"] = L).__name__ = "awe6.interfaces.IMessageManager", L.__isInterface__ = !0, L.__interfaces__ = [c], L.prototype = {
        __class__: L
    }, (e["awe6.core.MessageManager"] = M).__name__ = "awe6.core.MessageManager", M.__interfaces__ = [L], M.__super__ = o, M.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new yi, this._messageQueue = new wi
        },
        removeSubscribers: function(t, e, i, s, n) {
            for (var _ = this._getSubscriptions(t, e, i, s, n, !0).iterator(); _.hasNext();) {
                var a = _.next();
                this._subscriptions.remove(a), this._isVerbose && ri.trace("Removing " + T.string(a.sender) + ":" + T.string(a.message), {
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
            return this.removeSubscribers(), this._messageQueue = new wi, !0
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
            if (null == _ && (_ = !1), null == n && (n = !1), null == s && (s = !1), this._isVerbose && ri.trace("Sending message: " + T.string(t) + " from " + e.id + "(" + T.string(Di.getClass(e)) + ") via " + i.id + " (" + T.string(Di.getClass(i)) + ")", {
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
                    for (var h = i.getEntities(), l = 0; l < h.length;) {
                        var c = h[l];
                        ++l, this._sendMessage(t, e, c, !0)
                    }
                n && null != i.get_parent() && Di.__implements(i.get_parent(), E) && this._sendMessage(t, e, i.get_parent(), !1, !0)
            } else this._messageQueue.push(new B(t, e, i, s, n, _))
        },
        _send: function(t, e, i) {
            i = t.handler.apply(t.subscriber, [e, i]);
            return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), i
        },
        _getSubscriptions: function(t, e, i, s, n, _) {
            null == _ && (_ = !1);
            for (var a = new yi, r = this._subscriptions.iterator(); r.hasNext();) {
                var o = r.next();
                if (null == t || t == o.subscriber || t == o.sender) {
                    if (null != e && !Di.__instanceof(e, o.messageClass)) {
                        var h = C.typeof(e);
                        if (7 == h._hx_index) {
                            h.e;
                            if (C.getEnum(e) != C.getEnum(o.message) || (h = o.message, R[e.__enum__].__constructs__[e._hx_index]._hx_name != R[h.__enum__].__constructs__[h._hx_index]._hx_name) || C.enumParameters(e).toString() != C.enumParameters(o.message).toString()) continue
                        } else if (e != o.message) continue
                    }
                    if (null == i || U.compareMethods(o.handler, i)) {
                        if (null != s) {
                            if (_) {
                                if (null != o.senderClassType) continue;
                                if (null == o.sender) continue
                            }
                            if (null != o.senderClassType && !Di.__instanceof(s, o.senderClassType)) continue;
                            if (null != o.sender && o.sender != s) continue
                        }
                        a.head = new fi(o, a.head)
                    }
                }
            }
            return a
        },
        __class__: M
    }), L = function(t, e, i, s, n, _) {
        null == _ && (_ = !1), this.subscriber = t, this.message = e, this.handler = i, this.sender = s, this.senderClassType = n, this.isRemovedAfterFirstSend = _, this.messageClass = Di.getClass(e)
    }, (e["awe6.core._MessageManager._HelperSubscription"] = L).__name__ = "awe6.core._MessageManager._HelperSubscription", L.prototype = {
        __class__: L
    };
    var B = function(t, e, i, s, n, _) {
        null == _ && (_ = !1), null == n && (n = !1), null == s && (s = !1), this.message = t, this.sender = e, this.target = i, this.isBubbleDown = s, this.isBubbleUp = n, this.isBubbleEverywhere = _
    };

    function F() {}

    function V(t, e, i, s, n) {
        null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), this.type = e, this.isPauseable = i, this.isMuteable = s, this.isSessionSavedOnNext = n, o.call(this, t)
    }

    function W(t) {
        o.call(this, t)
    }

    function G(t, e, i, s, n, _, a, r, o, h) {
        null == o && (o = 0), null == n && (n = !1), null == s && (s = !1), this.font = null != t ? t : "_sans", this.size = null != e ? e : 12, this.color = null != i ? i : 0, this.isBold = s, this.isItalic = n, this.align = null != _ ? _ : Ot.LEFT, this.spacingHorizontal = null != a ? a : 0, this.spacingVertical = null != r ? r : 0, this.thickness = o, this.filters = h
    }

    function z(t) {
        this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    }

    function H() {}

    function j(t) {
        o.call(this, t)
    }

    function Y(t) {
        o.call(this, t)
    }(e["awe6.core._MessageManager._HelperMessage"] = B).__name__ = "awe6.core._MessageManager._HelperMessage", B.prototype = {
        __class__: B
    }, (e["awe6.interfaces.IScene"] = F).__name__ = "awe6.interfaces.IScene", F.__isInterface__ = !0, F.__interfaces__ = [m, p, r], F.prototype = {
        __class__: F
    }, (e["awe6.core.Scene"] = V).__name__ = "awe6.core.Scene", V.__interfaces__ = [F], V.__super__ = o, V.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.isDisposable = !0, this._entity = new f(this._kernel), this.view = this._entity.get_view()
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
        __class__: V
    }), p = function() {}, (e["awe6.interfaces.ISceneManager"] = p).__name__ = "awe6.interfaces.ISceneManager", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, (e["awe6.core.SceneManager"] = W).__name__ = "awe6.core.SceneManager", W.__interfaces__ = [p], W.__super__ = o, W.prototype = t(o.prototype, {
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
            null != this.get_scene() && (e = this.get_scene().type, e = this._kernel.factory.createSceneTransition(t, e), null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = e, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null), this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(Lt.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(Lt.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(Lt.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(Lt.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(Lt.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
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
        get_scene: function() {
            return this.scene
        },
        __class__: W
    }), p = function() {}, (e["awe6.interfaces.ITextStyle"] = p).__name__ = "awe6.interfaces.ITextStyle", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, (e["awe6.core.TextStyle"] = G).__name__ = "awe6.core.TextStyle", G.__interfaces__ = [p], G.prototype = {
        toString: function() {
            return T.string(this.font + "," + this.size + "," + this.color + "," + T.string(this.isBold) + "," + T.string(this.isItalic) + "," + T.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + T.string(this.filters))
        },
        clone: function() {
            return new G(this.font, this.size, this.color, this.isBold, this.isItalic, this.align, this.spacingHorizontal, this.spacingVertical, this.thickness, this.filters)
        },
        __class__: G
    }, p = function() {}, (e["awe6.interfaces.ITools"] = p).__name__ = "awe6.interfaces.ITools", p.__isInterface__ = !0, p.__interfaces__ = [I], p.prototype = {
        __class__: p
    }, (e["awe6.core.Tools"] = z).__name__ = "awe6.core.Tools", z.__interfaces__ = [p], z.prototype = {
        createGuid: function(t, e) {
            return null == e && (e = ""), null == t && (t = !1), t ? e + A.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(), 0, 10) : e + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
        },
        _randomCharacter: function() {
            return A.substr(l.hex(65536 * (1 + Math.random()) | 0, 1), 1, null)
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
            return t = l.replace(t, "     ", " "), t = l.replace(t, "    ", " "), t = l.replace(t, "   ", " "), t = l.replace(t, "  ", " "), (t = l.replace(t, " ", "_")).toUpperCase()
        },
        fromConstCase: function(t) {
            if (null == t || "" == t) return "";
            for (var e = "", i = t.split("_"), s = "", n = 0; n < i.length;) {
                var _ = i[n];
                ++n, e += s + (_.charAt(0).toUpperCase() + A.substr(_, 1, null).toLowerCase()), s = " "
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
                var s = T.random(i),
                    n = e[--i];
                e[i] = e[s], e[s] = n
            }
            return e
        },
        serialize: function(t) {
            return hi.run(t)
        },
        unserialize: function(t) {
            return ui.run(t)
        },
        decrypt: function(t, e) {
            return null == e && (e = ""), this._encrypter.decrypt(t, e)
        },
        __class__: z
    }, I = function() {}, (e["awe6.interfaces.IAssetManager"] = I).__name__ = "awe6.interfaces.IAssetManager", I.__isInterface__ = !0, I.prototype = {
        __class__: I
    }, (e["awe6.interfaces.IAssetManagerProcess"] = H).__name__ = "awe6.interfaces.IAssetManagerProcess", H.__isInterface__ = !0, H.__interfaces__ = [r, I], (e["awe6.core.drivers.AAssetManager"] = j).__name__ = "awe6.core.drivers.AAssetManager", j.__interfaces__ = [H], j.__super__ = o, j.prototype = t(o.prototype, {
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
    }), p = function() {}, (e["awe6.interfaces.IAudioManager"] = p).__name__ = "awe6.interfaces.IAudioManager", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, (e["awe6.core.drivers.AAudioManager"] = Y).__name__ = "awe6.core.drivers.AAudioManager", Y.__interfaces__ = [p], Y.__super__ = o, Y.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = 0, i = this._sounds; e < i.length;) {
                var s = i[e];
                ++e, s.isDisposed && A.remove(this._sounds, s)
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
            if ((null == a && (a = !1), null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), null == e && (e = Rt.DEFAULT), a) && 0 != this._getSounds(t, e).length) return;
            this._sounds.push(this._driverSoundFactory(t, e, i, s, n, _, r))
        },
        _driverSoundFactory: function(t, e, i, s, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new K(this._kernel, t, this._packageId, e, i, s, n, _, a)
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
                        ++s, C.enumEq(_.audioChannelType, e) && i.push(_)
                    } else
                        for (s = 0, n = this._sounds; s < n.length;) {
                            _ = n[s];
                            ++s, _.id == t && C.enumEq(_.audioChannelType, e) && i.push(_)
                        }
            return i
        },
        __class__: Y
    });
    var K = function(t, e, i, s, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = i, this.audioChannelType = null != s ? s : Rt.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = _, this._volume = a, this._pan = r, this._onCompleteCallback = o, this._init()
    };

    function Q(t, e, i) {
        null == e && (e = !1), this._context = t, this.isDebug = e, this._config = i, this.config = new bi, null == (i = !0) && (i = !1), i && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ut.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = At.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Nt.GAME, this.keyPause = Ct.P, this.keyMute = Ct.M, this.keyNext = Ct.SPACE, this.keyBack = Ct.ESCAPE, this.keySpecial = Ct.CONTROL), this._configurer(i), this._driverInit()
    }

    function X(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AHelperSound"] = K).__name__ = "awe6.core.drivers._AHelperSound", K.__interfaces__ = [_], K.prototype = {
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
        __class__: K
    }, I = function() {}, (e["awe6.interfaces.IFactory"] = I).__name__ = "awe6.interfaces.IFactory", I.__isInterface__ = !0, I.prototype = {
        __class__: I
    }, (e["awe6.core.drivers.AFactory"] = Q).__name__ = "awe6.core.drivers.AFactory", Q.__interfaces__ = [_, I], Q.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == A.substr(this._config, 0, 5) && this._traverseElements(S.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(t, e) {
            0 != e.length && (e += ".");
            for (var i = t; i.hasNext();) {
                var s = i.next();
                if (s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                var n, _ = e + s.nodeName;
                if (s.elements().hasNext() && this._traverseElements(s.elements(), _), s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                if (null != s.children[0]) {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    n = "<![CDATA[" == A.substr(ki.print(s.children[0]), 0, 9)
                } else n = !1;
                if (n) {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    var a = s.children[0];
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    var r = ki.print(s.children[0]).split("<![CDATA[").join("").split("]]>").join("");
                    if (a.nodeType == S.Document || a.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : v.toString(a.nodeType)));
                    a.nodeValue = r
                }
                if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                if (null == s.children[0]) this.config.h[_] = "";
                else {
                    if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    a = s.children[0].nodeType;
                    if (a != S.Element && a != S.Document) {
                        var o, r = this.config;
                        if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                        if (null == s.children[0]) o = "";
                        else {
                            if (s.nodeType != S.Document && s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                            a = s.children[0];
                            if (a.nodeType == S.Document || a.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : v.toString(a.nodeType)));
                            o = a.nodeValue
                        }
                        r.h[_] = o
                    } else this.config.h[_] = ""
                }
                for (var h = s.attributes(); h.hasNext();) {
                    var l = h.next(),
                        c = _ + "." + l,
                        u = this.config,
                        l = s.get(l);
                    u.h[c] = l
                }
            }
        },
        _configurer: function(t) {
            null == t && (t = !1)
        },
        _launchKernel: function() {
            var t;
            null == this._concreteKernel && (null == (t = !1) && (t = !1), t && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ut.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = At.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Nt.GAME, this.keyPause = Ct.P, this.keyMute = Ct.M, this.keyNext = Ct.SPACE, this.keyBack = Ct.ESCAPE, this.keySpecial = Ct.CONTROL), this._configurer(t), this._concreteKernel = new gt(this, this._context))
        },
        _getAssetUrls: function() {
            for (var t = [], e = 0; e < 1e3;) {
                var i = "settings.assets.url" + e++;
                Object.prototype.hasOwnProperty.call(this.config.h, i) && t.push(T.string(this.config.h[i]))
            }
            return t
        },
        onInitComplete: function(t) {
            null == this._kernel && null != t && (this._kernel = t, this._tools = this._kernel.tools, this.id = A.substr(this._tools.toConstCase(l.trim(this.id)), 0, 16), this.version = A.substr(l.trim(this.version), 0, 16), this.author = A.substr(l.trim(this.author), 0, 16))
        },
        createAssetManager: function() {
            return Di.__implements(this._kernel.assets, H) ? Di.__cast(this._kernel.assets, H) : new ot(this._kernel)
        },
        createEncrypter: function() {
            return new k(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new pt(this._kernel)
        },
        createPreloader: function() {
            return new mt(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            return null == t && (t = this.startingSceneType), new V(this._kernel, t)
        },
        createSceneTransition: function(t, e) {
            return new ft(this._kernel)
        },
        createSession: function(t) {
            return new at(this._kernel, t)
        },
        createTextStyle: function(t) {
            return new G
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
        __class__: Q
    }, p = function() {}, (e["awe6.interfaces.IInputKeyboard"] = p).__name__ = "awe6.interfaces.IInputKeyboard", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, (e["awe6.core.drivers.AInputKeyboard"] = X).__name__ = "awe6.core.drivers.AInputKeyboard", X.__interfaces__ = [p], X.__super__ = o, X.prototype = t(o.prototype, {
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
                this._keys[i] = new J(this._kernel)
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
            for (var e = Ct.__constructs__, i = new Array(e.length), s = 0, n = e.length; s < n;) i[a = s++] = e[a]._hx_name;
            var _ = i;
            _.pop();
            for (s = 0; s < _.length;) {
                var a = _[s];
                ++s;
                var r = C.createEnum(Ct, a);
                if (this.getKeyCode(r) == t) return r
            }
            return Ct.SUB_TYPE(t)
        },
        __class__: X
    });
    var J = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    (e["awe6.core.drivers._AInputKeyboard._HelperKey"] = J).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKey", J.prototype = {
        __class__: J
    };
    var Z = function(t, e) {
        this.keyCode = t, this.isDown = e
    };

    function q(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = Z).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKeyEvent", Z.prototype = {
        __class__: Z
    }, I = function() {}, (e["awe6.interfaces.IInputMouse"] = I).__name__ = "awe6.interfaces.IInputMouse", I.__isInterface__ = !0, I.prototype = {
        __class__: I
    }, (e["awe6.core.drivers.AInputMouse"] = q).__name__ = "awe6.core.drivers.AInputMouse", q.__interfaces__ = [I], q.__super__ = o, q.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(Dt.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), this._deltaTimePrev = t, o.prototype._updater.call(this, t), this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._handleButton(kt.LEFT, 0 < this._buffer.length ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(kt.MIDDLE, this._isMiddleDown(), t), this._handleButton(kt.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
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
            switch (null == t && (t = kt.LEFT), t._hx_index) {
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
        this.factory = t, this._context = e, this.tools = this._tools = new z(this), o.call(this, this)
    }(e["awe6.core.drivers._AInputMouse._HelperButton"] = $).__name__ = "awe6.core.drivers._AInputMouse._HelperButton", $.prototype = {
        __class__: $
    }, p = function() {}, (e["awe6.interfaces.ILogger"] = p).__name__ = "awe6.interfaces.ILogger", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, I = function() {}, (e["awe6.interfaces.IKernel"] = I).__name__ = "awe6.interfaces.IKernel", I.__isInterface__ = !0, I.__interfaces__ = [p, n], I.prototype = {
        __class__: I
    }, (e["awe6.core.drivers.AKernel"] = tt).__name__ = "awe6.core.drivers.AKernel", tt.__interfaces__ = [I], tt.__super__ = o, tt.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._view = new wt(this, this._context, 0, this), this._processes = new wi, this._helperFramerate = new et(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new ot(this._kernel), this.audio = this._audioManager = new ht(this._kernel), this.inputs = this._inputManager = new O(this._kernel), this.scenes = this._sceneManager = new W(this._kernel), this.messenger = this._messageManager = new M(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function(t) {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var e = this.factory.createAssetManager();
            e != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = e, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new Et(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
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
            Di.__implements(this.factory, _) && Di.__cast(this.factory, _).dispose(), this.factory = null;
            var i = this._view;
            i.isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer()), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), o.prototype._disposer.call(this)
        },
        getConfig: function(t) {
            return Object.prototype.hasOwnProperty.call(this.factory.config.h, t) ? this.factory.config.h[t] : null
        },
        log: function(t) {
            null != this._logger ? this._logger.log(t) : this.isDebug && ri.trace("LOG: " + T.string(t), {
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
            return !this.factory.isFullScreenOptionEnabled || C.enumEq(this.factory.fullScreenType, Ut.DISABLED) ? this.isFullScreen = !1 : (this.isFullScreen = t, this._driverSetIsFullScreen(t)), this.isFullScreen
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
        this.framerate = t, this._timeAtLastUpdate = A.now() / 1e3 * 1e3 | 0
    };

    function it(t, e, i, s, n, _, a, r, o, h, l, c, u, d, g, p, m) {
        null == m && (m = .35), null == p && (p = 0), null == g && (g = 8), null == i && (i = 30), null == e && (e = 30), null == s && (s = new wt(t)), null == n && (n = new wt(t)), null == _ && (_ = new wt(t)), null == a && (a = new wt(t)), null == r && (r = new wt(t)), null == o && (o = new wt(t)), null == h && (h = new wt(t)), null == l && (l = new wt(t)), null == c && (c = new wt(t)), null == u && (u = new wt(t)), null == d && (d = new wt(t)), this._borderView = s, this._buttonBack = new x(t, n, _, e, i), this._buttonMute = new x(t, a, r, e, i), this._buttonUnmute = new x(t, o, h, e, i), this._buttonPause = new x(t, l, c, e, i), this._buttonUnpause = new x(t, u, d, e, i), this._pauseBlur = g, this._pauseColor = p, this._pauseAlpha = m, this._context = new createjs.Container, f.call(this, t, null, this._context)
    }

    function st(t, e, i) {
        null == i && (i = !1), this._assets = e, this._isDecached = i, o.call(this, t)
    }

    function nt(t) {
        this._context = new createjs.Container, f.call(this, t, null, this._context)
    }

    function _t(t, e) {
        null == e && (e = 500), this._duration = e, this._context = new createjs.Container, f.call(this, t, null, this._context)
    }(e["awe6.core.drivers._AKernel._HelperFramerate"] = et).__name__ = "awe6.core.drivers._AKernel._HelperFramerate", et.prototype = {
        update: function() {
            this.timeInterval = (A.now() / 1e3 * 1e3 | 0) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = A.now() / 1e3 * 1e3 | 0
        },
        __class__: et
    }, n = function() {}, (e["awe6.interfaces.IOverlay"] = n).__name__ = "awe6.interfaces.IOverlay", n.__isInterface__ = !0, n.prototype = {
        __class__: n
    }, I = function() {}, (e["awe6.interfaces.IOverlayProcess"] = I).__name__ = "awe6.interfaces.IOverlayProcess", I.__isInterface__ = !0, I.__interfaces__ = [m, r, n], (e["awe6.core.drivers.AOverlay"] = it).__name__ = "awe6.core.drivers.AOverlay", it.__interfaces__ = [I], it.__super__ = f, it.prototype = t(f.prototype, {
        _init: function() {
            f.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new wt(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new wt(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new wt(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100;
            var t = qi(this, this.activateButton),
                e = Lt.BACK,
                i = function() {
                    t(e)
                };
            this._buttonBack.onClickCallback = i;
            var s = qi(this, this.activateButton),
                n = Lt.MUTE,
                i = function() {
                    s(n)
                };
            this._buttonMute.onClickCallback = i;
            var _ = qi(this, this.activateButton),
                a = Lt.PAUSE,
                i = function() {
                    _(a)
                };
            this._buttonPause.onClickCallback = i;
            var r = qi(this, this.activateButton),
                o = Lt.UNMUTE,
                i = function() {
                    r(o)
                };
            this._buttonUnmute.onClickCallback = i;
            var h = qi(this, this.activateButton),
                l = Lt.UNPAUSE,
                i = function() {
                    h(l)
                };
            this._buttonUnpause.onClickCallback = i, this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var c = this._buttonBack.height,
                u = this._buttonBack.width,
                i = this._kernel.factory.width - 4 * u,
                c = c;
            this.positionButton(Lt.BACK, i, c), this.positionButton(Lt.MUTE, i += u, c), this.positionButton(Lt.UNMUTE, i, c), this.positionButton(Lt.PAUSE, i += u, c), this.positionButton(Lt.UNPAUSE, i, c)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), f.prototype._updater.call(this, t), 0 < this._flashDuration && (this._flashDuration -= this._flashAsTime ? t : 1, e = this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), this._flashAlpha = 1 < e ? 1 : e < 0 ? 0 : e), this._flashView.set_isVisible(0 < this._flashAlpha), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? Lt.BACK : Lt.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? Lt.PAUSE : Lt.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? Lt.UNMUTE : Lt.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t), this._pauseView.update(t))
        },
        _disposer: function() {
            null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), f.prototype._disposer.call(this)
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
            this.showButton(Lt.BACK, !1), this.showButton(Lt.MUTE, !1), this.showButton(Lt.UNMUTE, !1), this.showButton(Lt.PAUSE, !1), this.showButton(Lt.UNPAUSE, !1)
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < i ? 1 : i < 0 ? 0 : i
        },
        activateButton: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(Lt.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(Lt.MUTE, !1), this.showButton(Lt.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Lt.MUTE, !0), this.showButton(Lt.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(Lt.PAUSE, !1), this.showButton(Lt.UNPAUSE, !0), this.activateButton(Lt.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Lt.PAUSE, !0), this.showButton(Lt.UNPAUSE, !1), this.activateButton(this._wasMute ? Lt.MUTE : Lt.UNMUTE), this._kernel.resume(), this._drawPause(!1));
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
    }), n = function() {}, (e["awe6.interfaces.IProgress"] = n).__name__ = "awe6.interfaces.IProgress", n.__isInterface__ = !0, I = function() {}, (e["awe6.interfaces.IPreloader"] = I).__name__ = "awe6.interfaces.IPreloader", I.__isInterface__ = !0, I.__interfaces__ = [n, m, r], (e["awe6.core.drivers.APreloader"] = st).__name__ = "awe6.core.drivers.APreloader", st.__interfaces__ = [I], st.__super__ = o, st.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new wt(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, 0 < this._assets.length && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        var t = qi(h = this._kernel, h.onPreloaderComplete),
                            e = this;
                        li.delay(function() {
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
    }), (e["awe6.core.drivers.AProfiler"] = nt).__name__ = "awe6.core.drivers.AProfiler", nt.__super__ = f, nt.prototype = t(f.prototype, {
        _init: function() {
            f.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(t) {
            null == t && (t = 0), f.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: nt
    }), I = function() {}, (e["awe6.interfaces.ISceneTransition"] = I).__name__ = "awe6.interfaces.ISceneTransition", I.__isInterface__ = !0, I.__interfaces__ = [m, n, r], (e["awe6.core.drivers.ASceneTransition"] = _t).__name__ = "awe6.core.drivers.ASceneTransition", _t.__interfaces__ = [I], _t.__super__ = f, _t.prototype = t(f.prototype, {
        _init: function() {
            f.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), f.prototype._updater.call(this, t), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
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
    }, I = function() {}, (e["awe6.interfaces.IPriority"] = I).__name__ = "awe6.interfaces.IPriority", I.__isInterface__ = !0, I.prototype = {
        __class__: I
    }, r = function() {}, (e["awe6.interfaces.IView"] = r).__name__ = "awe6.interfaces.IView", r.__isInterface__ = !0, r.__interfaces__ = [a, _, y, I], r.prototype = {
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
                    A.remove(this._children, t), t._setParent(null)
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
            this.isDisposed || (this._children.sort(qi(h = this._tools, h.sortByPriority)), this._driverDraw(), this._isDirty = !1)
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
        Y.call(this, t)
    };
    (e["awe6.core.drivers.createjs.AudioManager"] = ht).__name__ = "awe6.core.drivers.createjs.AudioManager", ht.__super__ = Y, ht.prototype = t(Y.prototype, {
        _init: function() {
            Y.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", qi(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", qi(this, this._onVisibilityChange)), Y.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(t, e, i, s, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == s && (s = 0), null == i && (i = 1), new lt(this._kernel, t, this._packageId, e, i, s, n, _, a)
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
    var lt = function(t, e, i, s, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), K.call(this, t, e, i, s, 1 == n ? 0 : n, _, a, r, o)
    };

    function ct(t, e, i) {
        Q.call(this, t, e, i)
    }(e["awe6.core.drivers.createjs._HelperSound"] = lt).__name__ = "awe6.core.drivers.createjs._HelperSound", lt.__super__ = K, lt.prototype = t(K.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan), createjs.WebAudioPlugin.context && "suspended" == createjs.WebAudioPlugin.context.state && createjs.WebAudioPlugin.context.resume()
            } catch (t) {}
            null != this._sound ? (this._sound.addEventListener("complete", qi(this, this._onSoundComplete)), this._driverTransform()) : this.dispose()
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
        __class__: lt
    }), (e["awe6.core.drivers.createjs.Factory"] = ct).__name__ = "awe6.core.drivers.createjs.Factory", ct.__super__ = Q, ct.prototype = t(Q.prototype, {
        _driverInit: function() {
            this.isDebug || (ri.trace = function(t, e) {
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
            null != e && "" != e && (t = "true" == e), this.isNativeExperience = t, Q.prototype._launchKernel.call(this);
            var i = this._concreteKernel.system.isDesktop,
                e = "default";
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.fullScreen") && (e = this.config.h["settings.fullScreen"]);
            t = this._context.getStage().canvas.getAttribute("fullScreen");
            null != t && "" != t && (e = t), this._kernel.set_isFullScreen(i && ("desktop" == e || "all" == e) || !i && ("mobile" == e || "all" == e || "default" == e)), this._kernel.isFullScreen && this.isNativeExperience && !i && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            ri.trace(Object.prototype.hasOwnProperty.call(this.config.h, "settings.asciiArt") ? this.config.h["settings.asciiArt"] : "", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ri.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ri.trace("Powered by awe6 (http://awe6.org)", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 129,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), this.isDecached && ri.trace("Note: decaching is currently enabled", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 132,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ri.trace("", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 134,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(t) {
            if ("<?xml" == A.substr(t, 0, 5)) this._parseXml(t);
            else {
                this.isDecached && (t += "?dc=" + T.random(99999));
                try {
                    var e = new Ui(t);
                    e.onError = qi(this, this._onIOError), e.onData = qi(this, this._onComplete), e.request()
                } catch (t) {
                    var i = ai.caught(t).unwrap();
                    return void this._onIOError(T.string(i))
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
            ri.trace("IO Errors Occurred During Config Loading:" + t, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 188,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), ri.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 189,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == A.substr(this._config, 0, 5) ? (ri.trace("Embedded Config detected, using that to continue ...", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 192,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (ri.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 198,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), ri.trace("Unable to continue without Config.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 199,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(t) {
            var e;
            this._countConfigsLoaded++, "" != t ? ("<?xml" != A.substr(e = t, 0, 5) && (e = this.createEncrypter().decrypt(gi.ofString(e)).toString()), this._parseXml(e)) : this._onIOError(t)
        },
        _getAssetUrls: function() {
            for (var t = ["bin/assets/audio/Ambience.m4a", "bin/assets/audio/Ambience.ogg", "bin/assets/audio/BallBounce.m4a", "bin/assets/audio/BallBounce.ogg", "bin/assets/audio/BallCollide.m4a", "bin/assets/audio/BallCollide.ogg", "bin/assets/audio/BallHit1.m4a", "bin/assets/audio/BallHit1.ogg", "bin/assets/audio/BallHit2.m4a", "bin/assets/audio/BallHit2.ogg", "bin/assets/audio/BallHitMiss.m4a", "bin/assets/audio/BallHitMiss.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/CrowdScore.m4a", "bin/assets/audio/CrowdScore.ogg", "bin/assets/audio/GameStart.m4a", "bin/assets/audio/GameStart.ogg", "bin/assets/audio/Medal1.m4a", "bin/assets/audio/Medal1.ogg", "bin/assets/audio/Medal2.m4a", "bin/assets/audio/Medal2.ogg", "bin/assets/audio/Medal3.m4a", "bin/assets/audio/Medal3.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/Penalty.m4a", "bin/assets/audio/Penalty.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/UnitSqueak1.m4a", "bin/assets/audio/UnitSqueak1.ogg", "bin/assets/audio/UnitSqueak2.m4a", "bin/assets/audio/UnitSqueak2.ogg", "bin/assets/audio/UnitSqueak3.m4a", "bin/assets/audio/UnitSqueak3.ogg", "bin/assets/audio/VoiceAvatar.m4a", "bin/assets/audio/VoiceAvatar.ogg", "bin/assets/audio/VoiceInstructions.m4a", "bin/assets/audio/VoiceInstructions.ogg", "bin/assets/audio/VoiceResults0.m4a", "bin/assets/audio/VoiceResults0.ogg", "bin/assets/audio/VoiceResults1.m4a", "bin/assets/audio/VoiceResults1.ogg", "bin/assets/audio/VoiceResults2.m4a", "bin/assets/audio/VoiceResults2.ogg", "bin/assets/audio/VoiceResults3.m4a", "bin/assets/audio/VoiceResults3.ogg", "bin/assets/audio/VoiceSelectLevel.m4a", "bin/assets/audio/VoiceSelectLevel.ogg", "bin/assets/audio/VoiceShop.m4a", "bin/assets/audio/VoiceShop.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.eot", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.svg", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.ttf", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.woff", "bin/assets/game/Ball.png", "bin/assets/game/Coin.png", "bin/assets/game/LocationBackground.jpg", "bin/assets/game/LocationCourt.png", "bin/assets/game/Net.png", "bin/assets/game/UnitA.json", "bin/assets/game/UnitA.png", "bin/assets/game/UnitB.json", "bin/assets/game/UnitB.png", "bin/assets/game/UnitBeacon.png", "bin/assets/gui/Action.png", "bin/assets/gui/AvatarUnitA.png", "bin/assets/gui/AvatarUnitB.png", "bin/assets/gui/BgAbstract1.png", "bin/assets/gui/BgAbstract2.png", "bin/assets/gui/BgAbstract3.png", "bin/assets/gui/BgAbstract4.png", "bin/assets/gui/BgDetail.jpg", "bin/assets/gui/BgGradient1.png", "bin/assets/gui/BgGradient2.png", "bin/assets/gui/BgGradient3.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Buttons.png", "bin/assets/gui/HeroMedals.png", "bin/assets/gui/HeroUnitA.png", "bin/assets/gui/HeroUnitB.png", "bin/assets/gui/Hud.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/PanelBigBg.png", "bin/assets/gui/PanelBigFg.png", "bin/assets/gui/PanelLevel.png", "bin/assets/gui/PanelLevelBg.png", "bin/assets/gui/PanelResult.png", "bin/assets/gui/PanelShop.png", "bin/assets/gui/PanelSmallBg.png", "bin/assets/gui/PanelSmallFg.png", "bin/assets/gui/PanelUnit.png", "bin/assets/gui/SceneFgFooter1.png", "bin/assets/gui/SceneFgFooter2.png", "bin/assets/gui/SceneFgHeader1.png", "bin/assets/gui/SceneFgHeader2.png", "bin/assets/gui/Vignette.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png", "bin/assets/__Rotate.png"], e = [], i = 0, s = t.length; i < s;) t[n = i++] = A.substr(t[n], 4, null), ("__" == A.substr(t[n], 0, 2) || -1 < t[n].indexOf("/__")) && e.push(t[n]);
            for (i = 0; i < e.length;) {
                var n = e[i];
                ++i, A.remove(t, n)
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
        __class__: ct
    });
    var ut = function(t) {
        X.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputKeyboard"] = ut).__name__ = "awe6.core.drivers.createjs.InputKeyboard", ut.__super__ = X, ut.prototype = t(X.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", qi(this, this._onKeyDown)), this._document.addEventListener("keyup", qi(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", qi(this, this._onKeyDown)), this._document.removeEventListener("keyup", qi(this, this._onKeyUp)), X.prototype._disposer.call(this)
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
                    g.has(this._preventDefaultKeyCodes, i) || this._preventDefaultKeyCodes.push(i)
                }
        },
        allowDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
                    var i = this.getKey(this._preventDefaultKeyCodes[e]);
                    g.has(t, i) ? this._preventDefaultKeyCodes.splice(e, 1) : ++e
                }
        },
        __class__: ut
    });
    var dt = function(t) {
        q.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputMouse"] = dt).__name__ = "awe6.core.drivers.createjs.InputMouse", dt.__super__ = q, dt.prototype = t(q.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._system = this._kernel.system, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", qi(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", qi(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", qi(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", qi(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", qi(this, this._onMouseUp))), this._system.isDesktop && window.document.addEventListener("wheel", qi(this, this._onWheel)), window.focus()
        },
        _disposer: function() {
            this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", qi(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", qi(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", qi(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", qi(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", qi(this, this._onMouseUp))), this._system.isDesktop && window.document.removeEventListener("wheel", qi(this, this._onWheel)), q.prototype._disposer.call(this)
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
    var gt = function(t, e) {
        tt.call(this, t, e)
    };
    (e["awe6.core.drivers.createjs.Kernel"] = gt).__name__ = "awe6.core.drivers.createjs.Kernel", gt.__super__ = tt, gt.prototype = t(tt.prototype, {
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
            this.system = new xt(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + A.substr(l.hex(this.factory.bgColor, 8), 2, 6)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", qi(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", qi(this, this._onContextMenu), !1), window.addEventListener("unload", qi(this, this._onUnload))
        },
        _onUnload: function(t) {
            window.removeEventListener("unload", qi(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(t) {
            var e, i;
            t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay && (e = qi(h = this.overlay, h.activateButton), i = Lt.PAUSE, li.delay(function() {
                e(i)
            }, 100))
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", qi(this, this._onContextMenu))
        },
        _onEnterFrame: function(t) {
            null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
            t = T.string(window.innerWidth) + ":" + T.string(window.innerHeight);
            this._prevWindowSize != t && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function(t) {},
        _driverSetIsFullScreen: function(t) {
            this._prevWindowSize = T.string(window.innerWidth) + ":" + T.string(window.innerHeight), this._scaleX = this._scaleY = 1;
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
                        var h, l, c, u = o.value;
                        null != u.bleedWidth && null != u.bleedHeight && (c = e - 2 * T.parseInt(T.string(u.bleedWidth) + ""), l = i - 2 * T.parseInt(T.string(u.bleedHeight) + ""), h = Math.min(s / c, n / l), 1 == u.isBleedInternal && ((c = (u = e / i) / (l = Math.min(e / l, Math.max(c / i, s / n)))) < 1 && (c = l / u), h = Math.min(c * s / e, c * n / i)), this._scaleX = this._scaleY = h)
                }
                _ = Math.round((s - e * this._scaleX) / 2), a = Math.round((n - i * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(i * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", _ + "px", ""), this._stage.canvas.style.setProperty("margin-top", a + "px", "")
        },
        __class__: gt
    });
    var pt = function(t, e, i, s, n, _, a, r, o, h, l, c, u, d, g, p, m) {
        it.call(this, t, e, i, s, n, _, a, r, o, h, l, c, u, d, g, p, m)
    };
    (e["awe6.core.drivers.createjs.Overlay"] = pt).__name__ = "awe6.core.drivers.createjs.Overlay", pt.__super__ = it, pt.prototype = t(it.prototype, {
        _driverInit: function() {
            Di.__cast(this._borderView, wt).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + l.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(t) {
            null == t && (t = 0), it.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(t, e, i, s) {
            null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + l.hex(s, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < i ? 1 : i < 0 ? 0 : i
        },
        __class__: pt
    });
    var mt = function(t, e, i) {
        st.call(this, t, e, i)
    };
    (e["awe6.core.drivers.createjs.Preloader"] = mt).__name__ = "awe6.core.drivers.createjs.Preloader", mt.__super__ = st, mt.prototype = t(st.prototype, {
        _init: function() {
            this._context = new createjs.Container, this.view = new wt(this._kernel, this._context), st.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = 0, this._completedDelay = 0;
            var t = this._isDecached ? "?dc=" + T.random(999999) : "",
                e = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && g.has(e, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
            var i = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                this._audioHoldDelay = this._getAudioHoldDelay();
                var s = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var n = 0, _ = this._assets; n < _.length;) {
                    var a = _[n];
                    ++n;
                    var r = A.substr(a, -3, null);
                    g.has(e, r) && (i.push(a), s || r != this._validSoundFormat || (r = "assets.audio." + A.substr(a.split("/").pop(), 0, -4), this._isFastTestMode || this._manifest.push({
                        src: a + t,
                        id: r
                    })))
                }
            }
            for (n = 0; n < i.length;) {
                a = i[n];
                ++n, A.remove(this._assets, a)
            }
            for (n = 0, _ = this._assets; n < _.length;) {
                a = _[n];
                ++n, this._manifest.push({
                    src: a + t,
                    id: a
                })
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", qi(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", qi(this, this._onError)), this._loadQueue.addEventListener("error", qi(this, this._onError));
            var n = qi(h = this._loadQueue, h.loadManifest),
                o = this._manifest;
            li.delay(function() {
                n(o)
            }, 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function(t) {
            this._isComplete || (this._isComplete = !0, ot.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", qi(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", qi(this, this._onError)), this._loadQueue.removeEventListener("error", qi(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
        },
        _onError: function(t) {
            ri.trace([t, t.title, t.message, t.data], {
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
            Object.prototype.hasOwnProperty.call(this._kernel.factory.config.h, "settings.audioHoldDelay") && (t = T.parseInt(this._kernel.factory.config.h["settings.audioHoldDelay"]));
            try {
                var e = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != e && "" != e && (t = T.parseInt(e))
            } catch (t) {}
            return t
        },
        __class__: mt
    });
    var Et = function(t) {
        nt.call(this, t)
    };
    (e["awe6.core.drivers.createjs.Profiler"] = Et).__name__ = "awe6.core.drivers.createjs.Profiler", Et.__super__ = nt, Et.prototype = t(nt.prototype, {
        _init: function() {
            nt.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var t = new createjs.Shape;
            this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + l.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + l.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + l.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + l.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            var t, e = 0 | this._kernel.getFramerate(!0);
            Math.min(this._height, this._height / this._kernel.factory.targetFramerate * e);
            this._fpsTextField.text = this._fpsLabel + ": " + e + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0 && (t = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024), e = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024), this._memoryTextField.text = this._memoryLabel + ": " + t + " / " + e)
        },
        __class__: Et
    });
    var ft = function(t, e) {
        _t.call(this, t, e)
    };

    function yt(t, e) {
        at.call(this, t, e)
    }(e["awe6.core.drivers.createjs.SceneTransition"] = ft).__name__ = "awe6.core.drivers.createjs.SceneTransition", ft.__super__ = _t, ft.prototype = t(_t.prototype, {
        _init: function() {
            _t.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
        },
        _updater: function(t) {
            null == t && (t = 0), _t.prototype._updater.call(this, t), this.isDisposed || (t = this.get_progress(), this._context.alpha = 1 - t)
        },
        __class__: ft
    }), (e["awe6.core.drivers.createjs.Session"] = yt).__name__ = "awe6.core.drivers.createjs.Session", yt.__super__ = at, yt.prototype = t(at.prototype, {
        _init: function() {
            var t = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = t ? Li.getLocalStorage() : Li.getSessionStorage(), at.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && Ni.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(Ni.get(this._kernel.factory.id)), this._driverSave(), Ni.remove(this._kernel.factory.id)), null != this._storage) try {
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
        __class__: yt
    });
    var xt = function(t) {
        this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = u.navigator.userAgent, this.isSilk = new d("Silk", "").match(this.userAgent), this.isKaiOs = new d("KAIOS", "").match(this.userAgent), this.isCrosswalk = new d("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new d("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new d("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new d("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new d("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new d("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new d("Windows", "").match(this.userAgent) && (this.isWindows = !0, new d("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    (e["awe6.core.drivers.createjs.System"] = xt).__name__ = "awe6.core.drivers.createjs.System", xt.prototype = {
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
        __class__: xt
    };
    var wt = function(t, e, i, s) {
        rt.call(this, t, e, i, s)
    };

    function St(t, e, i, s) {
        null == s && (s = !0), null == i && (i = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = i, this._context = new createjs.Container, this.setPosition(0, 0), s && ((s = new createjs.Shape).graphics.beginFill("#FF0000"), s.graphics.drawRect(0, 0, this.width, this.height), s.graphics.endFill(), s.visible = !1, this._context.addChild(s), this._context.mask = s), f.call(this, t, null, this._context)
    }

    function vt(t, e, i, s, n, _, a) {
        null == a && (a = !1), null == _ && (_ = !1), null == s && (s = ""), this.textStyle = n, this._isMultiline = _, this._isCached = a, St.call(this, t, e, i, !1), this.set_text(s)
    }

    function bt(t, e, i) {
        null == i && (i = 1e3), this._callbackFunction = e, this._duration = i, f.call(this, t)
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
    }), (e["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = St).__name__ = "awe6.core.drivers.createjs.extras.gui.GuiEntity", St.__interfaces__ = [y], St.__super__ = f, St.prototype = t(f.prototype, {
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
                var t, e, i = l.hex(this.textStyle.color, 6);
                this._textField.color = "#" + i, this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters && ((t = this._textField).shadow = null, e = this.textStyle.filters.slice(), null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, 2 != e.length && 6 != e.length || (this._textFieldOutline = this._textField.clone(), i = l.hex(e.shift(), 6), this._textFieldOutline.color = "#" + i, i = e.shift(), this._textFieldOutline.outline = 2 * i, this._context.addChildAt(this._textFieldOutline, 0), t = this._textFieldOutline), 4 == e.length && (t.shadow = new createjs.Shadow("#" + l.hex(e[0], 6), e[1], e[2], e[3])))
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(t) {
            return null == t && (t = ""), this.text == t || (this.text = t, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0), this.text
        },
        __class__: vt
    }), (e["awe6.extras.Delay"] = bt).__name__ = "awe6.extras.Delay", bt.__super__ = f, bt.prototype = t(f.prototype, {
        _updater: function(t) {
            null == t && (t = 0), f.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: bt
    });
    var Pt = R["awe6.interfaces.EAgenda"] = {
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
    Pt.__constructs__ = [Pt.ALWAYS, Pt.BIRTH, Pt.DEATH, Pt.STANDARD, Pt.ATTACK, Pt.DEFEND, Pt.SUB_TYPE];
    var Rt = R["awe6.interfaces.EAudioChannel"] = {
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
    Rt.__constructs__ = [Rt.DEFAULT, Rt.EFFECTS, Rt.INTERFACE, Rt.MUSIC, Rt.SUB_TYPE];
    var Ut = R["awe6.interfaces.EFullScreen"] = {
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
    var Tt = R["awe6.interfaces.EJoypadButton"] = {
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
    Tt.__constructs__ = [Tt.FIRE, Tt.UP, Tt.RIGHT, Tt.DOWN, Tt.LEFT, Tt.PRIMARY, Tt.SECONDARY];
    var At = R["awe6.interfaces.EJoypadTouch"] = {
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
    At.__constructs__ = [At.DISABLED, At.DPAD, At.JOYSTICK, At.SWIPE];
    var Ct = R["awe6.interfaces.EKey"] = {
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
    Ct.__constructs__ = [Ct.NUM_LOCK, Ct.CLEAR, Ct.HELP, Ct.ALT, Ct.BACKSPACE, Ct.CAPS_LOCK, Ct.CONTROL, Ct.DELETE, Ct.DOWN, Ct.END, Ct.ENTER, Ct.ESCAPE, Ct.F1, Ct.F10, Ct.F11, Ct.F12, Ct.F13, Ct.F14, Ct.F15, Ct.F2, Ct.F3, Ct.F4, Ct.F5, Ct.F6, Ct.F7, Ct.F8, Ct.F9, Ct.HOME, Ct.INSERT, Ct.LEFT, Ct.NUMPAD_0, Ct.NUMPAD_1, Ct.NUMPAD_2, Ct.NUMPAD_3, Ct.NUMPAD_4, Ct.NUMPAD_5, Ct.NUMPAD_6, Ct.NUMPAD_7, Ct.NUMPAD_8, Ct.NUMPAD_9, Ct.NUMPAD_ADD, Ct.NUMPAD_DECIMAL, Ct.NUMPAD_DIVIDE, Ct.NUMPAD_ENTER, Ct.NUMPAD_MULTIPLY, Ct.NUMPAD_SUBTRACT, Ct.PAGE_DOWN, Ct.PAGE_UP, Ct.RIGHT, Ct.SHIFT, Ct.SPACE, Ct.TAB, Ct.UP, Ct.A, Ct.B, Ct.C, Ct.D, Ct.E, Ct.F, Ct.G, Ct.H, Ct.I, Ct.J, Ct.K, Ct.L, Ct.M, Ct.N, Ct.O, Ct.P, Ct.Q, Ct.R, Ct.S, Ct.T, Ct.U, Ct.V, Ct.W, Ct.X, Ct.Y, Ct.Z, Ct.NUMBER_0, Ct.NUMBER_1, Ct.NUMBER_2, Ct.NUMBER_3, Ct.NUMBER_4, Ct.NUMBER_5, Ct.NUMBER_6, Ct.NUMBER_7, Ct.NUMBER_8, Ct.NUMBER_9, Ct.COLON, Ct.EQUALS, Ct.HYPHEN, Ct.SLASH, Ct.TILDE, Ct.SQUARELEFT, Ct.SQUARERIGHT, Ct.BACKSLASH, Ct.APOSTROPHE, Ct.TOPLEFT, Ct.SUB_TYPE];
    var It = R["awe6.interfaces.EMessage"] = {
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
    It.__constructs__ = [It.DISPOSE, It.INIT, It.PAUSE, It.RESUME, It.SUB_TYPE];
    var kt = R["awe6.interfaces.EMouseButton"] = {
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
    kt.__constructs__ = [kt.LEFT, kt.MIDDLE, kt.RIGHT];
    var Dt = R["awe6.interfaces.EMouseCursor"] = {
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
    Dt.__constructs__ = [Dt.ARROW, Dt.AUTO, Dt.BUTTON, Dt.HAND, Dt.IBEAM, Dt.SUB_TYPE];
    var Lt = R["awe6.interfaces.EOverlayButton"] = {
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
    Lt.__constructs__ = [Lt.BACK, Lt.MUTE, Lt.UNMUTE, Lt.PAUSE, Lt.UNPAUSE, Lt.SUB_TYPE];
    var Nt = R["awe6.interfaces.EScene"] = {
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
    Nt.__constructs__ = [Nt.SPLASH, Nt.INTRO, Nt.SELECT_SESSION, Nt.SELECT_STORY, Nt.SELECT_LEVEL, Nt.INSTRUCTIONS, Nt.SETTINGS, Nt.MENU, Nt.AVATAR, Nt.SHOP, Nt.REWARDS, Nt.LEADERBOARD, Nt.GAME, Nt.INTERSTITIAL, Nt.CINEMATIC, Nt.RESULTS, Nt.EXIT, Nt.TEST, Nt.SUB_TYPE];
    var Ot = R["awe6.interfaces.ETextAlign"] = {
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
    Ot.__constructs__ = [Ot.JUSTIFY, Ot.LEFT, Ot.CENTER, Ot.RIGHT];
    var Mt = R["awe6.interfaces.ETextStyle"] = {
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

    function Bt(t) {
        this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, f.call(this, t, null, this._context)
    }

    function Ft(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
    }

    function Vt(t) {
        this._audio = t.audio, Bt.call(this, t)
    }

    function Wt(t) {
        ot.call(this, t)
    }
    Mt.__constructs__ = [Mt.BUTTON, Mt.BODY, Mt.HEADLINE, Mt.SUBHEAD, Mt.SMALLPRINT, Mt.OVERSIZED, Mt.SUB_TYPE], (e["cbcten.AEntity"] = Bt).__name__ = "cbcten.AEntity", Bt.__super__ = f, Bt.prototype = t(f.prototype, {
        __class__: Bt
    }), (e["cbcten.AVo"] = Ft).__name__ = "cbcten.AVo", Ft.prototype = {
        __class__: Ft
    }, (e["cbcten.AccessibilityManager"] = Vt).__name__ = "cbcten.AccessibilityManager", Vt.__super__ = Bt, Vt.prototype = t(Bt.prototype, {
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
                audioStart: qi(h = this._kernel.audio, h.start),
                audioTransform: qi(h = this._kernel.audio, h.transform)
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
                show: qi(this, this._onApiControlPanelShow),
                close: qi(this, this._onApiControlPanelClose),
                update: qi(this, this._onApiUpdate)
            }), this._api.update(), this._state.isFirstUpdate = !1), this._doOverrides(), Bt.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t), this._state.buttonActivateDelayDuration -= t, this._buttonsInputs()
        },
        _doOverrides: function() {
            this._kernel.audio.start = qi(this, this._overrideAudioStart), this._kernel.audio.transform = qi(this, this._overrideAudioTransform)
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
            t.dateUpdated = A.strDate(T.string(t.dateUpdated)), t.version <= this._state.data.version || (t.audioIsMute != this._state.data.audioIsMute && (ri.trace("Audio IsMute Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 283,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.wasMute = t.audioIsMute, this._state.isFirstUpdate && this._audio.set_isMute(t.audioIsMute)), t.audioEffectsVolume != this._state.data.audioEffectsVolume && (ri.trace("Audio Effects Volume Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 293,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = 0 == this._state.data.audioEffectsVolume, e = t.audioEffectsVolume * (i ? .5 : 1 / this._state.data.audioEffectsVolume), this._state.isSkip = !0, this._audio.transform(null, Rt.EFFECTS, e, null, !i), this._audio.transform(null, Rt.INTERFACE, e, null, !i), this._audio.transform(null, Rt.DEFAULT, e, null, !i), this._state.isSkip = !1), t.audioMusicVolume != this._state.data.audioMusicVolume && (ri.trace("Audio Music Volume Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 304,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = 0 == this._state.data.audioMusicVolume, e = t.audioMusicVolume * (i ? .5 : 1 / this._state.data.audioMusicVolume), this._state.isSkip = !0, this._audio.transform(null, Rt.MUSIC, e, null, !i), this._state.isSkip = !1), t.audioVoiceVolume != this._state.data.audioVoiceVolume && ri.trace("Audio Voice Volume Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 311,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesIsDisabled != this._state.data.subtitlesIsDisabled && ri.trace("Subtitles IsDisabled Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 312,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesSize != this._state.data.subtitlesSize && ri.trace("Subtitles Size Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 313,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsIntensity != this._state.data.visualsIntensity && ri.trace("Visuals Intensity Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 314,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsContrast != this._state.data.visualsContrast && (ri.trace("Visuals Contrast Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 317,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), i = this.getAdjustedVisualsContrast(t.visualsContrast), this._stageCanvas.style.filter = "contrast(" + i + ")"), t.gameplayChallenge != this._state.data.gameplayChallenge && ri.trace("Gameplay Challenge Changed", {
                fileName: "src/cbcten/AccessibilityManager.hx",
                lineNumber: 321,
                className: "cbcten.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.data = t)
        },
        buttonsRegister: function(i, s, t) {
            null == t && (t = 2e3);
            var n = this;
            this._state.buttonsCache = this._state.buttons, this._state.buttonActivateDelayDuration = t, null != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = null, this._state.buttons = [], null != i && li.delay(function() {
                var t = i,
                    e = i.get_agenda();
                n._state.buttons = t.getEntitiesByClass(we, e, !0), !Di.__implements(i, F) || null != (e = n._kernel.overlay._buttonPause) && n._state.buttons.push(e), n._state.buttons.sort(function(t, e) {
                    return Math.round(1e3 * (t.getAccessibilityPosition().y - e.getAccessibilityPosition().y))
                }), 0 < n._state.buttons.length && (n._state.buttonHighlighted = n._state.buttons[0]), null != s && 0 <= n._state.buttons.indexOf(s) && (n._state.buttonHighlighted = s)
            }, 1)
        },
        buttonsRevert: function() {
            null != this._state.buttonsCache && (this._state.buttons = this._state.buttonsCache), (this._state.buttonsCache = null) != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), 0 < this._state.buttons.length && (this._state.buttonHighlighted = this._state.buttons[0])
        },
        _buttonsInputs: function() {
            if (0 != this._state.buttons.length) {
                var t = this._kernel.inputs.keyboard.getIsKeyPress(Ct.UP) || this._kernel.inputs.keyboard.getIsKeyPress(Ct.W),
                    e = this._kernel.inputs.keyboard.getIsKeyPress(Ct.RIGHT) || this._kernel.inputs.keyboard.getIsKeyPress(Ct.D),
                    i = this._kernel.inputs.keyboard.getIsKeyPress(Ct.DOWN) || this._kernel.inputs.keyboard.getIsKeyPress(Ct.S),
                    s = this._kernel.inputs.keyboard.getIsKeyPress(Ct.LEFT) || this._kernel.inputs.keyboard.getIsKeyPress(Ct.A),
                    n = this._state.buttonActivateDelayDuration <= 0 && (this._kernel.inputs.keyboard.getIsKeyPress(Ct.ENTER) || this._kernel.inputs.keyboard.getIsKeyPress(Ct.SPACE));
                if (t || e || i || s) {
                    if (!this._state.buttonHighlighted.get_isHighlighted()) return void this._state.buttonHighlighted.highlight(!0);
                    if (this._state.buttons.length <= 1) return;
                    for (var _ = s ? .51 : i ? .26 : e ? .01 : t ? .76 : 0, a = this._state.buttonHighlighted.getAccessibilityPosition(), r = [], o = 0, h = this._state.buttons; o < h.length;) {
                        var l = h[o];
                        ++o, l != this._state.buttonHighlighted && l.get_isHighlightable() && r.push(l)
                    }
                    for (var c = r, u = new Array(c.length), r = 0, o = c.length; r < o;) {
                        var d = r++,
                            g = c[d],
                            p = g.getAccessibilityPosition(),
                            m = a.x - p.x,
                            E = a.y - p.y,
                            p = Math.sqrt(m * m + E * E),
                            m = (Math.atan2(E, m) / (2 * Math.PI) - _ + 10) % 1;
                        .5 < m && (m = 1 - m);
                        p = m - p / 1e4;
                        u[d] = {
                            button: g,
                            sort: p
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
        __class__: Vt
    }), (e["cbcten.AssetManager"] = Wt).__name__ = "cbcten.AssetManager", Wt.__super__ = ot, Wt.prototype = t(ot.prototype, {
        _init: function() {
            ot.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(Gt.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(Gt.OVERLAY_PAUSE_OVER)
        },
        get_buttonOver: function() {
            return this._createView(Gt.BUTTON_OVER)
        },
        get_buttonUp: function() {
            return this._createView(Gt.BUTTON_UP)
        },
        get_buttonSmallOver: function() {
            return this._createView(Gt.BUTTON_SMALL_OVER)
        },
        get_buttonSmallUp: function() {
            return this._createView(Gt.BUTTON_SMALL_UP)
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
        __class__: Wt
    });
    var Gt = R["cbcten.EAsset"] = {
        __ename__: "cbcten.EAsset",
        __constructs__: null,
        BUTTON_UP: {
            _hx_name: "BUTTON_UP",
            _hx_index: 0,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_OVER: {
            _hx_name: "BUTTON_OVER",
            _hx_index: 1,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_SMALL_UP: {
            _hx_name: "BUTTON_SMALL_UP",
            _hx_index: 2,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_SMALL_OVER: {
            _hx_name: "BUTTON_SMALL_OVER",
            _hx_index: 3,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_TWITTER_UP: {
            _hx_name: "BUTTON_TWITTER_UP",
            _hx_index: 4,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_TWITTER_OVER: {
            _hx_name: "BUTTON_TWITTER_OVER",
            _hx_index: 5,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_FACEBOOK_UP: {
            _hx_name: "BUTTON_FACEBOOK_UP",
            _hx_index: 6,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        BUTTON_FACEBOOK_OVER: {
            _hx_name: "BUTTON_FACEBOOK_OVER",
            _hx_index: 7,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        OVERLAY_PAUSE_UP: {
            _hx_name: "OVERLAY_PAUSE_UP",
            _hx_index: 8,
            __enum__: "cbcten.EAsset",
            toString: i
        },
        OVERLAY_PAUSE_OVER: {
            _hx_name: "OVERLAY_PAUSE_OVER",
            _hx_index: 9,
            __enum__: "cbcten.EAsset",
            toString: i
        }
    };

    function zt(t, e, i) {
        this.COLOR_YELLOW = 16776960, this.COLOR_GREY = 5789784, this.COLOR_BLACK = 0, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_PANEL_TITLE = Mt.SUB_TYPE("PANEL_TITLE"), this.TEXTSTYLE_PANEL_STATS = Mt.SUB_TYPE("PANEL_STATS"), this.TEXTSTYLE_PANEL_MESSAGE = Mt.SUB_TYPE("PANEL_MESSAGE"), this.TEXTSTYLE_HUD_TITLE = Mt.SUB_TYPE("HUD_TITLE"), this.TEXTSTYLE_HUD_TIMING = Mt.SUB_TYPE("HUD_TIMING"), this.TEXTSTYLE_HUD_SCORE = Mt.SUB_TYPE("HUD_SCORE"), this.TEXTSTYLE_HUD_PROMPT = Mt.SUB_TYPE("HUD_PROMPT"), this.TEXTSTYLE_HUD_COINS = Mt.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_ALERT = Mt.SUB_TYPE("HUD_ALERT"), ct.call(this, t, e, i)
    }
    Gt.__constructs__ = [Gt.BUTTON_UP, Gt.BUTTON_OVER, Gt.BUTTON_SMALL_UP, Gt.BUTTON_SMALL_OVER, Gt.BUTTON_TWITTER_UP, Gt.BUTTON_TWITTER_OVER, Gt.BUTTON_FACEBOOK_UP, Gt.BUTTON_FACEBOOK_OVER, Gt.OVERLAY_PAUSE_UP, Gt.OVERLAY_PAUSE_OVER], (e["cbcten.Factory"] = zt).__name__ = "cbcten.Factory", zt.__super__ = ct, zt.prototype = t(ct.prototype, {
        _configurer: function(t) {
            null == t && (t = !1), t && (this.id = "cbcten", t = "1", null != oi.getString("revision") && (t = oi.getString("revision").split("\r\n")[0]), this.version = "1.3." + t, this.author = "Hypersurge", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = At.DISABLED, this.bgColor = 0, this.startingSceneType = Nt.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0, this.keyNext = null)
        },
        _launchKernel: function() {
            ct.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId"))
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new Wt(this._kernel), this.accessibility = new Vt(this._kernel)), this._assets
        },
        createLogger: function() {
            var t = T.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != t ? new Ht(this._kernel, t) : ct.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            var t = new Fe(this._kernel);
            return t.addEntity(this.accessibility, null, !0, 90), t
        },
        createPreloader: function() {
            return new Yt(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            switch (this._kernel.log("scene: " + T.string(t)), t._hx_index) {
                case 1:
                    return new ti(this._kernel, t);
                case 4:
                    return new ni(this._kernel, t);
                case 5:
                    return new $e(this._kernel, t);
                case 7:
                    return new ei(this._kernel, t);
                case 8:
                    return new Ze(this._kernel, t);
                case 9:
                    return new _i(this._kernel, t);
                case 12:
                    return new qe(this._kernel, t);
                case 15:
                    return new ii(this._kernel, t)
            }
            return ct.prototype.createScene.call(this, t)
        },
        createSceneTransition: function(t, e) {
            return new si(this._kernel)
        },
        createSession: function(t) {
            return new Kt(this._kernel, t)
        },
        createTextStyle: function(t) {
            null == t && (t = Mt.BODY);
            var e, i = this._kernel.getConfig("settings.font.name");
            if (null == t) e = new G(i, 12, 8421504);
            else switch (t._hx_index) {
                case 0:
                    e = new G(i, 18, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, []);
                    break;
                case 1:
                    e = new G(i, 16, this.COLOR_BLACK, !1, !1, Ot.LEFT, 0, 18, 0, []);
                    break;
                case 2:
                    e = new G(i, 22, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, []);
                    break;
                case 3:
                    e = new G(i, 22, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                    break;
                case 4:
                    e = new G("Arial", 11, this.COLOR_GREY, !1, !1, Ot.CENTER, 0, 0, 0, []);
                    break;
                case 5:
                    e = new G(i, 44, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                    break;
                case 6:
                    switch (t.value) {
                        case "HUD_ALERT":
                            e = new G(i, 50, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, [0, 4]);
                            break;
                        case "HUD_COINS":
                            e = new G(i, 22, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                            break;
                        case "HUD_PROMPT":
                            e = new G(i, 18, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_SCORE":
                            e = new G(i, 22, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, []);
                            break;
                        case "HUD_SKILL":
                            e = new G(i, 18, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_TIMING":
                            e = new G(i, 14, this.COLOR_YELLOW, !1, !1, Ot.CENTER, 0, 0, 0, [0, 2]);
                            break;
                        case "HUD_TITLE":
                            e = new G(i, 12, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_MESSAGE":
                            e = new G(i, 12, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, []);
                            break;
                        case "PANEL_STATS":
                            e = new G(i, 12, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_TITLE":
                            e = new G(i, 19, this.COLOR_WHITE, !1, !1, Ot.RIGHT, 0, 0, 0, []);
                            break;
                        case "PRELOADER":
                            e = new G(i, 14, this.COLOR_WHITE, !1, !1, Ot.CENTER, 0, 0, 0, []);
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
                    return Nt.AVATAR;
                case 12:
                    return Nt.SELECT_LEVEL;
                case 5:
                case 8:
                case 9:
                case 13:
                case 15:
                    return Nt.MENU
            }
            return ct.prototype.getBackSceneType.call(this, t)
        },
        getNextSceneType: function(t) {
            switch (t._hx_index) {
                case 1:
                    return Nt.MENU;
                case 4:
                    return Nt.GAME;
                case 5:
                case 7:
                    return Nt.AVATAR;
                case 8:
                case 9:
                    return Nt.SELECT_LEVEL;
                case 12:
                    return Nt.RESULTS;
                case 13:
                case 15:
                    return Nt.SHOP
            }
            return ct.prototype.getNextSceneType.call(this, t)
        },
        __class__: zt
    });
    var Ht = function(t, e) {
        if (this._kernel = t, this._id = e, this._factory = this._kernel.factory, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
            this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), ri.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "src/cbcten/LoggerGoogleAnalytics.hx",
                lineNumber: 40,
                className: "cbcten.LoggerGoogleAnalytics",
                methodName: "new"
            })
        } catch (t) {
            this._isTrackerEnabled = !1, ri.trace("Google Analytics failed with property ID " + this._id, {
                fileName: "src/cbcten/LoggerGoogleAnalytics.hx",
                lineNumber: 45,
                className: "cbcten.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };

    function jt() {}(e["cbcten.LoggerGoogleAnalytics"] = Ht).__name__ = "cbcten.LoggerGoogleAnalytics", Ht.__interfaces__ = [p], Ht.prototype = {
        log: function(t) {
            A.substr(T.string(t), 0, 25);
            t = T.string(t).split(": ");
            this._isTrackerEnabled ? this._gaLib("send", {
                hitType: "event",
                eventCategory: t[0],
                eventAction: t[1],
                eventLabel: t[2]
            }) : ri.trace("Logger:" + T.string([t[0], t[1], t[2]]), {
                fileName: "src/cbcten/LoggerGoogleAnalytics.hx",
                lineNumber: 65,
                className: "cbcten.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: Ht
    }, (e["cbcten.Main"] = jt).__name__ = "cbcten.Main", jt.main = function() {
        var t = window.document.getElementById("gameCanvas"),
            e = jt.getParams().h.lang;
        null != e && (i = "assets/__Config_" + e + ".xml", t.setAttribute("config", i));
        var i = new createjs.Stage(t),
            t = new createjs.Container;
        i.addChild(t), jt.factory = new zt(t, !1, oi.getString("config"))
    }, jt.getParams = function() {
        for (var t = A.substr(u.location.search, 1, null), e = new bi, i = 0, s = new d("[&;]", "g").split(t); i < s.length;) {
            var n = s[i];
            ++i;
            var _ = n.split("=");
            _.length < 2 || (n = _.shift(), n = decodeURIComponent(n.split("+").join(" ")), _ = _.join("="), _ = decodeURIComponent(_.split("+").join(" ")), e.h[n] = _)
        }
        return e
    };
    var Yt = function(t, e, i) {
        mt.call(this, t, e, i)
    };
    (e["cbcten.Preloader"] = Yt).__name__ = "cbcten.Preloader", Yt.__super__ = mt, Yt.prototype = t(mt.prototype, {
        _init: function() {
            this._factory = this._kernel.factory, this._proprietaryAudioFormat = "m4a";
            var t = new createjs.Bitmap("assets/__PreloaderBg.png");
            mt.prototype._init.call(this);
            this._bg = new createjs.Shape, this._bg.graphics.beginFill("#404040"), this._bg.graphics.drawRoundRect(-2, -2, 204, 14, 4), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#ffffff"), this._fg.graphics.drawRoundRect(0, 0, 200, 10, 4), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - 200), this._bg.y = this._fg.y = this._kernel.factory.height - 20 - 10 - 2, this._context.addChild(t), this._context.addChild(this._bg), this._context.addChild(this._fg)
        },
        _updater: function(t) {
            null == t && (t = 0), mt.prototype._updater.call(this, t), this._fg.scaleX = this.get_progress()
        },
        _showAudioHoldMessage: function() {
            var t = new Ye(this._kernel, this._kernel.factory.width, 20, T.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(Mt.SUB_TYPE("PRELOADER")));
            t.setPosition(0, this._bg.y - 6), this.get_view().addChild(t.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        __class__: Yt
    });
    var Kt = function(t, e) {
        yt.call(this, t, e)
    };
    (e["cbcten.Session"] = Kt).__name__ = "cbcten.Session", Kt.__super__ = yt, Kt.prototype = t(yt.prototype, {
        _init: function() {
            this._version = 1, yt.prototype._init.call(this)
        },
        _getter: function() {
            yt.prototype._getter.call(this), this._upgradeMovementUnitA = this._getValidatedInteger(this._data.upgradeMovementUnitA), this._upgradeTimingUnitA = this._getValidatedInteger(this._data.upgradeTimingUnitA), this._upgradePowerUnitA = this._getValidatedInteger(this._data.upgradePowerUnitA), this._upgradeSpinUnitA = this._getValidatedInteger(this._data.upgradeSpinUnitA), this._medalLevel1UnitA = this._getValidatedInteger(this._data.medalLevel1UnitA), this._medalLevel2UnitA = this._getValidatedInteger(this._data.medalLevel2UnitA), this._medalLevel3UnitA = this._getValidatedInteger(this._data.medalLevel3UnitA), this._coinsUnitA = this._getValidatedInteger(this._data.coinsUnitA), this._upgradeMovementUnitB = this._getValidatedInteger(this._data.upgradeMovementUnitB), this._upgradeTimingUnitB = this._getValidatedInteger(this._data.upgradeTimingUnitB), this._upgradePowerUnitB = this._getValidatedInteger(this._data.upgradePowerUnitB), this._upgradeSpinUnitB = this._getValidatedInteger(this._data.upgradeSpinUnitB), this._medalLevel1UnitB = this._getValidatedInteger(this._data.medalLevel1UnitB), this._medalLevel2UnitB = this._getValidatedInteger(this._data.medalLevel2UnitB), this._medalLevel3UnitB = this._getValidatedInteger(this._data.medalLevel3UnitB), this._coinsUnitB = this._getValidatedInteger(this._data.coinsUnitB)
        },
        _getValidatedInteger: function(t) {
            return null == t || isNaN(t) ? 0 : t
        },
        _setter: function() {
            yt.prototype._setter.call(this), this._data.upgradeMovementUnitA = this._upgradeMovementUnitA, this._data.upgradeTimingUnitA = this._upgradeTimingUnitA, this._data.upgradePowerUnitA = this._upgradePowerUnitA, this._data.upgradeSpinUnitA = this._upgradeSpinUnitA, this._data.medalLevel1UnitA = this._medalLevel1UnitA, this._data.medalLevel2UnitA = this._medalLevel2UnitA, this._data.medalLevel3UnitA = this._medalLevel3UnitA, this._data.coinsUnitA = this._coinsUnitA, this._data.upgradeMovementUnitB = this._upgradeMovementUnitB, this._data.upgradeTimingUnitB = this._upgradeTimingUnitB, this._data.upgradePowerUnitB = this._upgradePowerUnitB, this._data.upgradeSpinUnitB = this._upgradeSpinUnitB, this._data.medalLevel1UnitB = this._medalLevel1UnitB, this._data.medalLevel2UnitB = this._medalLevel2UnitB, this._data.medalLevel3UnitB = this._medalLevel3UnitB, this._data.coinsUnitB = this._coinsUnitB
        },
        _resetter: function() {
            yt.prototype._resetter.call(this), this.cache = new Qt(this._kernel), this.resetUnit(he.UNIT_A), this.resetUnit(he.UNIT_B)
        },
        resetUnit: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._upgradeMovementUnitA = 0, this._upgradeTimingUnitA = 0, this._upgradePowerUnitA = 0, this._upgradeSpinUnitA = 0, this._medalLevel1UnitA = 0, this._medalLevel2UnitA = 0, this._medalLevel3UnitA = 0, this._coinsUnitA = 0;
                    break;
                case 1:
                    this._upgradeMovementUnitB = 0, this._upgradeTimingUnitB = 0, this._upgradePowerUnitB = 0, this._upgradeSpinUnitB = 0, this._medalLevel1UnitB = 0, this._medalLevel2UnitB = 0, this._medalLevel3UnitB = 0, this._coinsUnitB = 0
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
            return 0 | Math.min(99999, e)
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
                            return C.createEnumIndex(ae, this._medalLevel1UnitA, null);
                        case 1:
                            return C.createEnumIndex(ae, this._medalLevel2UnitA, null);
                        case 2:
                            return C.createEnumIndex(ae, this._medalLevel3UnitA, null)
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return C.createEnumIndex(ae, this._medalLevel1UnitB, null);
                        case 1:
                            return C.createEnumIndex(ae, this._medalLevel2UnitB, null);
                        case 2:
                            return C.createEnumIndex(ae, this._medalLevel3UnitB, null)
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
                            this._upgradeSpinUnitA = i
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
                            this._upgradeSpinUnitB = i
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
                            return this._upgradeSpinUnitA
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
                            return this._upgradeSpinUnitB
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
                    e = "gui.upgrades.spin"
            }
            return T.string(this._kernel.getConfig(e)).toUpperCase()
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
            return T.string(this._kernel.getConfig(e)).toUpperCase()
        },
        setIsTester: function(t) {
            this._isTester = t
        },
        get_isTester: function() {
            return !!this._kernel.isDebug || this._isTester
        },
        getIsNovice: function() {
            return this.getMedal(ne.LEVEL_1) == ae.MEDAL_NONE
        },
        __class__: Kt
    });
    var Qt = function(t) {
        this._kernel = t, this.totalPlays = 0, this.debugMessage = "", this.unitType = he.UNIT_A, this.levelType = ne.LEVEL_1, this.reset()
    };

    function Xt() {}

    function Jt(t, e, i, s, n) {
        this._animation = {
            orbit: 0,
            frameIndex: 0,
            alpha: 1,
            isAlive: !0
        }, this._counts = {
            bounces: 0,
            hits: 0
        }, this.isHittable = !1, this.isRendered = !0, this._location = e, this.position = this._location.court.createPositionFromRelative(i, s, n), Bt.call(this, t)
    }(e["cbcten._Session._HelperCache"] = Qt).__name__ = "cbcten._Session._HelperCache", Qt.prototype = {
        reset: function() {
            this.medalType = ae.MEDAL_NONE, this.score = {
                player: 0,
                opponent: 0
            }
        },
        __class__: Qt
    }, (e["cbcten.game.IRenderable"] = Xt).__name__ = "cbcten.game.IRenderable", Xt.__isInterface__ = !0, Xt.prototype = {
        __class__: Xt
    }, (e["cbcten.game.Ball"] = Jt).__name__ = "cbcten.game.Ball", Jt.__interfaces__ = [Xt], Jt.__super__ = Bt, Jt.prototype = t(Bt.prototype, {
        getTexture: function() {
            return {
                source: this._source,
                x: 32 * this._animation.frameIndex,
                y: 0,
                width: 32,
                height: 32,
                originX: .5,
                originY: 1,
                scale: 1.1,
                isFlip: !1,
                isAdd: !1,
                alpha: this._animation.alpha
            }
        },
        getCameraPosition: function() {
            return {
                x: null == this.hitter ? 0 : this.position.x,
                y: null == this.hitter ? 80 : .5 * this.position.y
            }
        },
        getSpeed: function() {
            return Math.sqrt(this._momentum.x * this._momentum.x + this._momentum.y * this._momentum.y)
        },
        getCourtSide: function() {
            return this._location.court.getSide(this.position.x, this.position.y)
        },
        getTarget: function(t) {
            var e = {
                x: this.target.x,
                y: this.target.y,
                z: this.target.z
            };
            if (Math.abs(this._momentum.y) < .1) return e;
            t = (Math.abs(e.y) - Math.abs(t)) / Math.abs(this._momentum.y);
            return e.x -= this._momentum.x * t, e.y -= this._momentum.y * t, e
        },
        setPosition: function(t) {
            this._animation.isAlive || this._createTrail(1, 0), this._assignPosition(this.position, t), this._animation.isAlive = !0
        },
        setMomentum: function(t) {
            this._multiplyMomentum(0), this._assignPosition(this._momentum, t)
        },
        _init: function() {
            Bt.prototype._init.call(this), this.target = {
                x: 0,
                y: 0,
                z: 0
            }, this._momentum = {
                x: 0,
                y: 0,
                z: 0
            }, this._spin = {
                x: 0,
                y: 0,
                z: 0
            }, this._source = this._assets.getAsset("assets/game/Ball.png"), this._location.addEntity(this._shadow = new Zt(this._kernel, this._source))
        },
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t), this._mover(), this._collider(), this._animator()
        },
        _disposer: function() {
            var t = this._shadow;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), Bt.prototype._disposer.call(this)
        },
        _mover: function() {
            var t, e;
            this._momentum.z -= 2, this._momentum.x += this._spin.x, this._momentum.y += this._spin.y, this._momentum.z += this._spin.z, this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z, this.position.z < 0 && (e = 50 < this.getSpeed(), 1 < ++this._counts.bounces && this._umpireDecision(!0), t = this.position.z / this._momentum.z, this.position.x -= this._momentum.x * t, this.position.y -= this._momentum.y * t, this.position.z = 0, e && this._createTrails(), this._momentum.z *= -.65, 3 < (e = Math.abs(this._momentum.z)) && this._kernel.audio.start("BallBounce", Rt.EFFECTS, 0, 0, e / 100, null, !0), e < .1 && (this._momentum.z = 0), this._multiplyMomentum(.95))
        },
        _collider: function() {
            this._location.court.applyWallBounceMomentum(this.position, this._momentum) && (this._umpireDecision(!0), this._kernel.audio.start("BallCollide", Rt.EFFECTS, 0, 0, this.getSpeed() / 200, null, !0)), this._location.court.applyNetCollide(this.position, this._momentum) && this._umpireDecision(!1);
            for (var t = 0, e = this.get_parent().getEntitiesByClass(fe); t < e.length;) {
                var i = e[t];
                ++t, i != this.hitter && i.applyBallCollide(this.position, this._momentum)
            }
            null != this.hitter && 0 == this.position.z && this._location.court.getIsOut(this.position.x, this.position.y) && this._umpireDecision(!0)
        },
        _animator: function() {
            var t = this.getSpeed();
            1 < t && (this._animation.orbit += t / 90), this._animation.frameIndex = Math.round(this._animation.orbit) % 12 + 1, this._shadow.setPosition(this.position.x, this.position.y, 0, this.isRendered, this._animation.alpha), 50 < this.getSpeed() && this._createTrails()
        },
        hit: function(t, e, i, s, n) {
            var _, a;
            this.hitter != n && (_ = (.65 * (1 - (1 < e ? 1 : e < 0 ? 0 : e)) + .35) * (35 - (15 < (a = this._counts.hits / 5) ? 15 : a < 0 ? 0 : a)), this.hitter = n, this._animation.isAlive = !0, this._counts.bounces = 0, this._counts.hits++, Math.random() < .5 && (a = (this._counts.hits - 4) / 20, this._location.addExcitement(.25 < a ? .25 : a < 0 ? 0 : a)), null != this.hitter && (this.hitter.setStrategy(ue.HEDGE), this._location.getOtherUnit(this.hitter).setStrategy(ue.RUSH)), this._assignPosition(this.target, t), null != i && (this.position.z = i), null == s && (s = {
                x: 0,
                y: 0,
                z: 0
            }), this._assignPosition(this._spin, s), 1 < this._spin.z && (this._spin.z = 1), t = this.target.x - this.position.x, i = this.target.y - this.position.y, s = this.target.z - this.position.z, this._momentum.x = t / _ - this._spin.x * _ * .5, this._momentum.y = i / _ - this._spin.y * _ * .5, this._momentum.z = 2 * _ * .5 + s / 2 / _ / .5 - this._spin.z * _ * .5, this._location.camera.setShake(e))
        },
        _umpireDecision: function(t) {
            var e, i;
            null != this.hitter && (this._location.awardScore(t ? this.hitter : this._location.getOtherUnit(this.hitter)) && (e = 1 == this._counts.hits ? 10 : (i = this._counts.hits / 4, Math.ceil(10 < i ? 10 : i < 2 ? 2 : i)), this._location.createCoins(this.position.x, this.position.y, this.position.z, e)), i = 1 == this._counts.hits ? 1 : this._counts.hits / 16, this._location.addExcitement(.5 < i ? .5 : i < .1 ? .1 : i), t && (i = 1 == this._counts.hits ? 1 : this._counts.hits / 16, this._kernel.audio.start("CrowdScore", Rt.EFFECTS, 0, 0, .5 < i ? .5 : i < .2 ? .2 : i))), this.isHittable = !1, this.hitter = null, this._animation.isAlive = !1, this._counts.hits = 0
        },
        _assignPosition: function(t, e) {
            t.x = e.x, t.y = e.y, t.z = e.z
        },
        _multiplyMomentum: function(t) {
            null == t && (t = 0), this._momentum.x *= t, this._momentum.y *= t, this._momentum.z *= t, this._spin.x *= t, this._spin.y *= t, this._spin.z *= t
        },
        _createTrails: function() {
            for (var t = Math.round(this.getSpeed() / 16), e = 0, i = t; e < i;) {
                var s = e++;
                this._createTrail(.07, s / t)
            }
        },
        _createTrail: function(t, e) {
            null == e && (e = 0);
            e = {
                x: this.position.x - this._momentum.x * e,
                y: this.position.y - this._momentum.y * e,
                z: this.position.z - this._momentum.z * e
            };
            e.z < 0 || this._location.addEntity(new qt(this._kernel, this._source, e, t, this._animation.frameIndex))
        },
        __class__: Jt
    });
    var Zt = function(t, e) {
        this._alpha = 1, this.isRendered = !0, this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this._source = e, Bt.call(this, t)
    };
    (e["cbcten.game._Ball._BallShadow"] = Zt).__name__ = "cbcten.game._Ball._BallShadow", Zt.__interfaces__ = [Xt], Zt.__super__ = Bt, Zt.prototype = t(Bt.prototype, {
        setPosition: function(t, e, i, s, n) {
            null == n && (n = 1), null == s && (s = !0), this.position.x = t, this.position.y = e, this.position.z = i, this.isRendered = s, this._alpha = n
        },
        getTexture: function() {
            return {
                source: this._source,
                x: 0,
                y: 0,
                width: 32,
                height: 32,
                originX: .5,
                originY: 1,
                scale: 1.1,
                isFlip: !1,
                isAdd: !1,
                alpha: this._alpha
            }
        },
        __class__: Zt
    });
    var qt = function(t, e, i, s, n) {
        this.isRendered = !0, this.position = i, this._source = e, this._life = s, this._frame = n, Bt.call(this, t)
    };

    function $t(t, e, i, s) {
        this._shake = {
            value: 0,
            resistance: .9,
            dx: 0,
            dy: 0
        }, this.x = e, this.y = i, this.z = s, Bt.call(this, t)
    }

    function te(t, e, i, s, n) {
        this.isRendered = !0, this._location = e, this.position = {
            x: i,
            y: s,
            z: n
        }, Bt.call(this, t)
    }(e["cbcten.game._Ball._BallTrail"] = qt).__name__ = "cbcten.game._Ball._BallTrail", qt.__interfaces__ = [Xt], qt.__super__ = Bt, qt.prototype = t(Bt.prototype, {
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t), this._life *= .9, this._life < .01 && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        getTexture: function() {
            return {
                source: this._source,
                x: 32 * this._frame,
                y: 0,
                width: 32,
                height: 32,
                originX: .5,
                originY: 1,
                scale: 1.1,
                isFlip: !1,
                isAdd: !0,
                alpha: this._life
            }
        },
        __class__: qt
    }), (e["cbcten.game.Camera"] = $t).__name__ = "cbcten.game.Camera", $t.__super__ = Bt, $t.prototype = t(Bt.prototype, {
        getPosition: function(t) {
            return null == t && (t = !1), {
                x: this.x + (t ? 5 * this._shake.dx : 0),
                y: this.y + (t ? 5 * this._shake.dy : 0),
                z: this.z
            }
        },
        setPosition: function(t, e, i) {
            this.x = .95 * this.x + .05 * t, this.y = .95 * this.y + .05 * e, null != i && (this.z = .95 * this.z + .05 * i)
        },
        setShake: function(t) {
            this._shake.value = Math.abs(1 < t ? 1 : t < 0 ? 0 : t)
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), Bt.prototype._updater.call(this, t), 0 < this._shake.value && (this._shake.value *= this._shake.resistance, this._shake.value < .1 ? (this._shake.value = 0, this._shake.dx = 0, this._shake.dy = 0) : (e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dx = e * t, e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dy = e * t))
        },
        createRenderableTransformFromWorldCoords: function(t, e, i, s) {
            e = -1265 / (e - 4200);
            return {
                x: t * e,
                y: (1525 - i) * e - 50,
                scale: s * e
            }
        },
        __class__: $t
    }), (e["cbcten.game.Coin"] = te).__name__ = "cbcten.game.Coin", te.__interfaces__ = [Xt], te.__super__ = Bt, te.prototype = t(Bt.prototype, {
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
                alpha: 1 - Math.pow(this._updates / 80, 15)
            }
        },
        _init: function() {
            Bt.prototype._init.call(this);
            this._momentum = {
                x: 15 * (2 * Math.random() - 1),
                y: 15 * (2 * Math.random() - 1),
                z: 5 * Math.random()
            }, this._frame = 0, this._seed = T.random(32), this._updates = this._seed, this._source = this._assets.getAsset("assets/game/Coin.png"), this._location.addEntity(this._shadow = new ee(this._kernel, this._source)), this._session.setCoins(null, this._session.getCoins() + 10)
        },
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t), this._mover(), this._location.court.applyWallBounceMomentum(this.position, this._momentum), this._location.court.applyNetCollide(this.position, this._momentum), this._frame = (this._seed + this._updates) % 32, this._shadow.setFrame(this.position.x, this.position.y, this._frame, 1 - Math.pow(this._updates / 80, 8)), 80 < this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        _disposer: function() {
            var t = this._shadow;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), Bt.prototype._disposer.call(this)
        },
        _mover: function() {
            this._momentum.x *= .975, this._momentum.y *= .975, this._momentum.z -= 2, this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z, this.position.z < 0 && (this.position.z = 0, this._momentum.z *= -.65)
        },
        __class__: te
    });
    var ee = function(t, e) {
        this._alpha = 1, this._frame = 1, this.isRendered = !0, this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this._source = e, Bt.call(this, t)
    };

    function ie(t, e) {
        this.isRendered = !0, this._location = e, this.position = {
            x: 0,
            y: 0,
            z: 0
        }, Bt.call(this, t)
    }(e["cbcten.game._Coin._CoinShadow"] = ee).__name__ = "cbcten.game._Coin._CoinShadow", ee.__interfaces__ = [Xt], ee.__super__ = Bt, ee.prototype = t(Bt.prototype, {
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
                alpha: this._alpha
            }
        },
        __class__: ee
    }), (e["cbcten.game.Court"] = ie).__name__ = "cbcten.game.Court", ie.__interfaces__ = [Xt], ie.__super__ = Bt, ie.prototype = t(Bt.prototype, {
        getTexture: function() {
            return {
                source: this._source,
                x: 0,
                y: 0,
                width: 400,
                height: 40,
                originX: .5,
                originY: 1,
                scale: 3.32,
                isFlip: !1,
                isAdd: !1,
                alpha: 1
            }
        },
        getSide: function(t, e) {
            return 0 < e ? se.LOWER : se.UPPER
        },
        getIsOut: function(t, e, i) {
            return null == i && (i = !0), !!this.getIsWide(t, e, i) || this.getIsLong(t, e, i)
        },
        getIsWide: function(t, e, i) {
            null == i && (i = !0);
            i = this.createRelativePosition(t, e, null, i);
            return 1 < Math.abs(i.x)
        },
        getIsLong: function(t, e, i) {
            null == i && (i = !0);
            i = this.createRelativePosition(t, e, null, i);
            return 1 < Math.abs(i.y)
        },
        _init: function() {
            Bt.prototype._init.call(this), this._source = this._assets.getAsset("assets/game/Net.png")
        },
        applyUnitConstraints: function(t, e) {
            var i = this.createRelativePosition(t.x, t.y, 0, !1);
            (Math.abs(i.y) < .05 || 1.7 < Math.abs(i.y)) && (t.y -= e.y, e.y = 0), 1.9 < Math.abs(i.x) && (t.x -= e.x, e.x = 0)
        },
        applyWallBounceMomentum: function(t, e) {
            var i, s, n = !1,
                _ = Math.sqrt(t.x * t.x + t.y * t.y);
            return 2420 < _ && (t.x -= e.x, t.y -= e.y, i = t.x / _, s = t.y / _, _ = e.x - 2 * (i * e.x + s * e.y) * i, s = e.y - 2 * (i * e.x + s * e.y) * s, e.x = _, e.y = s, n = !0), 1150 < t.x + e.x && (t.x = 1150, e.x *= -.5, n = !0), t.x + e.x < -1150 && (t.x = -1150, e.x *= -.5, n = !0), 2200 < t.y + e.y && (t.y = 2200, e.y *= -.5, n = !0), t.y + e.y < -2200 && (t.y = -2200, e.y *= -.5, n = !0), n
        },
        applyNetCollide: function(t, e) {
            var i = this._getNetCollidePosition(t, e);
            return null != i && (t.x = i.x, t.y = i.y, t.z = i.z, e.x *= .25, e.y *= -.15, !(e.z = 0))
        },
        createPositionFromRelative: function(t, e, i, s) {
            return null == s && (s = !0), null == i && (i = 0), {
                x: t * (550 * (s ? .749 : 1)),
                y: 1190 * e,
                z: 100 * i
            }
        },
        createRelativePosition: function(t, e, i, s) {
            return null == s && (s = !0), null == i && (i = 0), {
                x: t / (550 * (s ? .749 : 1)),
                y: e / 1190,
                z: i / 100
            }
        },
        createServiceRelativePosition: function(t, e, i) {
            return {
                x: (.55 + i * (.35 + .05 * Math.random()) * (Math.random() < .5 ? -1 : 1)) * (e ? 1 : -1),
                y: .538 * (t == se.UPPER ? 1 : -1) * (.75 + .25 * i)
            }
        },
        _getNetCollidePosition: function(t, e) {
            if (this.getSide(t.x, t.y) == this.getSide(t.x - e.x, t.y - e.y)) return null;
            if (650 < Math.abs(t.x)) return null;
            var i = t.x - e.x,
                s = t.y - e.y,
                n = t.z - e.z,
                t = Math.abs(s) / (Math.abs(s) + Math.abs(t.y));
            return 100 < n + e.z * t ? null : {
                x: i + e.x * t,
                y: s < 0 ? -10 : 10,
                z: n + e.z * t
            }
        },
        __class__: ie
    });
    var se = R["cbcten.game.ECourtSide"] = {
        __ename__: "cbcten.game.ECourtSide",
        __constructs__: null,
        UPPER: {
            _hx_name: "UPPER",
            _hx_index: 0,
            __enum__: "cbcten.game.ECourtSide",
            toString: i
        },
        LOWER: {
            _hx_name: "LOWER",
            _hx_index: 1,
            __enum__: "cbcten.game.ECourtSide",
            toString: i
        }
    };
    se.__constructs__ = [se.UPPER, se.LOWER];
    var ne = R["cbcten.game.ELevel"] = {
        __ename__: "cbcten.game.ELevel",
        __constructs__: null,
        LEVEL_1: {
            _hx_name: "LEVEL_1",
            _hx_index: 0,
            __enum__: "cbcten.game.ELevel",
            toString: i
        },
        LEVEL_2: {
            _hx_name: "LEVEL_2",
            _hx_index: 1,
            __enum__: "cbcten.game.ELevel",
            toString: i
        },
        LEVEL_3: {
            _hx_name: "LEVEL_3",
            _hx_index: 2,
            __enum__: "cbcten.game.ELevel",
            toString: i
        }
    };
    ne.__constructs__ = [ne.LEVEL_1, ne.LEVEL_2, ne.LEVEL_3];
    var _e = R["cbcten.game.ELocation"] = {
        __ename__: "cbcten.game.ELocation",
        __constructs__: null,
        LOCATION_A: {
            _hx_name: "LOCATION_A",
            _hx_index: 0,
            __enum__: "cbcten.game.ELocation",
            toString: i
        }
    };
    _e.__constructs__ = [_e.LOCATION_A];
    var ae = R["cbcten.game.EMedal"] = {
        __ename__: "cbcten.game.EMedal",
        __constructs__: null,
        MEDAL_NONE: {
            _hx_name: "MEDAL_NONE",
            _hx_index: 0,
            __enum__: "cbcten.game.EMedal",
            toString: i
        },
        MEDAL_BRONZE: {
            _hx_name: "MEDAL_BRONZE",
            _hx_index: 1,
            __enum__: "cbcten.game.EMedal",
            toString: i
        },
        MEDAL_SILVER: {
            _hx_name: "MEDAL_SILVER",
            _hx_index: 2,
            __enum__: "cbcten.game.EMedal",
            toString: i
        },
        MEDAL_GOLD: {
            _hx_name: "MEDAL_GOLD",
            _hx_index: 3,
            __enum__: "cbcten.game.EMedal",
            toString: i
        }
    };
    ae.__constructs__ = [ae.MEDAL_NONE, ae.MEDAL_BRONZE, ae.MEDAL_SILVER, ae.MEDAL_GOLD];
    var re = R["cbcten.game.EPose"] = {
        __ename__: "cbcten.game.EPose",
        __constructs__: null,
        DEFEAT: {
            _hx_name: "DEFEAT",
            _hx_index: 0,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        IDLE: {
            _hx_name: "IDLE",
            _hx_index: 1,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        RUN_LEFT: {
            _hx_name: "RUN_LEFT",
            _hx_index: 2,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        RUN_RIGHT: {
            _hx_name: "RUN_RIGHT",
            _hx_index: 3,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        SERVE_WAIT: {
            _hx_name: "SERVE_WAIT",
            _hx_index: 4,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        SERVE_SWING: {
            _hx_name: "SERVE_SWING",
            _hx_index: 5,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        SWING_LEFT: {
            _hx_name: "SWING_LEFT",
            _hx_index: 6,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        SWING_RIGHT: {
            _hx_name: "SWING_RIGHT",
            _hx_index: 7,
            __enum__: "cbcten.game.EPose",
            toString: i
        },
        VICTORY: {
            _hx_name: "VICTORY",
            _hx_index: 8,
            __enum__: "cbcten.game.EPose",
            toString: i
        }
    };
    re.__constructs__ = [re.DEFEAT, re.IDLE, re.RUN_LEFT, re.RUN_RIGHT, re.SERVE_WAIT, re.SERVE_SWING, re.SWING_LEFT, re.SWING_RIGHT, re.VICTORY];
    var oe = R["cbcten.game.ETiming"] = {
        __ename__: "cbcten.game.ETiming",
        __constructs__: null,
        TOO_EARLY: {
            _hx_name: "TOO_EARLY",
            _hx_index: 0,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        EARLY: {
            _hx_name: "EARLY",
            _hx_index: 1,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        GOOD: {
            _hx_name: "GOOD",
            _hx_index: 2,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        PERFECT: {
            _hx_name: "PERFECT",
            _hx_index: 3,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        GREAT: {
            _hx_name: "GREAT",
            _hx_index: 4,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        LATE: {
            _hx_name: "LATE",
            _hx_index: 5,
            __enum__: "cbcten.game.ETiming",
            toString: i
        },
        TOO_LATE: {
            _hx_name: "TOO_LATE",
            _hx_index: 6,
            __enum__: "cbcten.game.ETiming",
            toString: i
        }
    };
    oe.__constructs__ = [oe.TOO_EARLY, oe.EARLY, oe.GOOD, oe.PERFECT, oe.GREAT, oe.LATE, oe.TOO_LATE];
    var he = R["cbcten.game.EUnit"] = {
        __ename__: "cbcten.game.EUnit",
        __constructs__: null,
        UNIT_A: {
            _hx_name: "UNIT_A",
            _hx_index: 0,
            __enum__: "cbcten.game.EUnit",
            toString: i
        },
        UNIT_B: {
            _hx_name: "UNIT_B",
            _hx_index: 1,
            __enum__: "cbcten.game.EUnit",
            toString: i
        }
    };
    he.__constructs__ = [he.UNIT_A, he.UNIT_B];
    var le = R["cbcten.game.EUnitController"] = {
        __ename__: "cbcten.game.EUnitController",
        __constructs__: null,
        HUMAN: {
            _hx_name: "HUMAN",
            _hx_index: 0,
            __enum__: "cbcten.game.EUnitController",
            toString: i
        },
        BOT: ((h = function(t) {
            return {
                _hx_index: 1,
                p_skill: t,
                __enum__: "cbcten.game.EUnitController",
                toString: i
            }
        })._hx_name = "BOT", h.__params__ = ["p_skill"], h)
    };
    le.__constructs__ = [le.HUMAN, le.BOT];
    var ce = R["cbcten.game.EUnitFrame"] = {
        __ename__: "cbcten.game.EUnitFrame",
        __constructs__: null,
        LOWER_DEFEAT1: {
            _hx_name: "LOWER_DEFEAT1",
            _hx_index: 0,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_DEFEAT2: {
            _hx_name: "LOWER_DEFEAT2",
            _hx_index: 1,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_DEFEAT3: {
            _hx_name: "LOWER_DEFEAT3",
            _hx_index: 2,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_DEFEAT4: {
            _hx_name: "LOWER_DEFEAT4",
            _hx_index: 3,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_IDLE1: {
            _hx_name: "LOWER_IDLE1",
            _hx_index: 4,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_IDLE2: {
            _hx_name: "LOWER_IDLE2",
            _hx_index: 5,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_IDLE3: {
            _hx_name: "LOWER_IDLE3",
            _hx_index: 6,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_IDLE4: {
            _hx_name: "LOWER_IDLE4",
            _hx_index: 7,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_IDLE5: {
            _hx_name: "LOWER_IDLE5",
            _hx_index: 8,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN1: {
            _hx_name: "LOWER_RUN1",
            _hx_index: 9,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN2: {
            _hx_name: "LOWER_RUN2",
            _hx_index: 10,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN3: {
            _hx_name: "LOWER_RUN3",
            _hx_index: 11,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN4: {
            _hx_name: "LOWER_RUN4",
            _hx_index: 12,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN5: {
            _hx_name: "LOWER_RUN5",
            _hx_index: 13,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN6: {
            _hx_name: "LOWER_RUN6",
            _hx_index: 14,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN7: {
            _hx_name: "LOWER_RUN7",
            _hx_index: 15,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_RUN8: {
            _hx_name: "LOWER_RUN8",
            _hx_index: 16,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE1: {
            _hx_name: "LOWER_SERVE1",
            _hx_index: 17,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE2: {
            _hx_name: "LOWER_SERVE2",
            _hx_index: 18,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE3: {
            _hx_name: "LOWER_SERVE3",
            _hx_index: 19,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE4: {
            _hx_name: "LOWER_SERVE4",
            _hx_index: 20,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE5: {
            _hx_name: "LOWER_SERVE5",
            _hx_index: 21,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE6: {
            _hx_name: "LOWER_SERVE6",
            _hx_index: 22,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE7: {
            _hx_name: "LOWER_SERVE7",
            _hx_index: 23,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SERVE8: {
            _hx_name: "LOWER_SERVE8",
            _hx_index: 24,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SWING1: {
            _hx_name: "LOWER_SWING1",
            _hx_index: 25,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SWING2: {
            _hx_name: "LOWER_SWING2",
            _hx_index: 26,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SWING3: {
            _hx_name: "LOWER_SWING3",
            _hx_index: 27,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SWING4: {
            _hx_name: "LOWER_SWING4",
            _hx_index: 28,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_SWING5: {
            _hx_name: "LOWER_SWING5",
            _hx_index: 29,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_VICTORY1: {
            _hx_name: "LOWER_VICTORY1",
            _hx_index: 30,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_VICTORY2: {
            _hx_name: "LOWER_VICTORY2",
            _hx_index: 31,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_VICTORY3: {
            _hx_name: "LOWER_VICTORY3",
            _hx_index: 32,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        LOWER_VICTORY4: {
            _hx_name: "LOWER_VICTORY4",
            _hx_index: 33,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_DEFEAT1: {
            _hx_name: "UPPER_1_DEFEAT1",
            _hx_index: 34,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_DEFEAT2: {
            _hx_name: "UPPER_1_DEFEAT2",
            _hx_index: 35,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_DEFEAT3: {
            _hx_name: "UPPER_1_DEFEAT3",
            _hx_index: 36,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_DEFEAT4: {
            _hx_name: "UPPER_1_DEFEAT4",
            _hx_index: 37,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_IDLE1: {
            _hx_name: "UPPER_1_IDLE1",
            _hx_index: 38,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_IDLE2: {
            _hx_name: "UPPER_1_IDLE2",
            _hx_index: 39,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_IDLE3: {
            _hx_name: "UPPER_1_IDLE3",
            _hx_index: 40,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_IDLE4: {
            _hx_name: "UPPER_1_IDLE4",
            _hx_index: 41,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_IDLE5: {
            _hx_name: "UPPER_1_IDLE5",
            _hx_index: 42,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN1: {
            _hx_name: "UPPER_1_RUN1",
            _hx_index: 43,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN2: {
            _hx_name: "UPPER_1_RUN2",
            _hx_index: 44,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN3: {
            _hx_name: "UPPER_1_RUN3",
            _hx_index: 45,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN4: {
            _hx_name: "UPPER_1_RUN4",
            _hx_index: 46,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN5: {
            _hx_name: "UPPER_1_RUN5",
            _hx_index: 47,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN6: {
            _hx_name: "UPPER_1_RUN6",
            _hx_index: 48,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN7: {
            _hx_name: "UPPER_1_RUN7",
            _hx_index: 49,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_RUN8: {
            _hx_name: "UPPER_1_RUN8",
            _hx_index: 50,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE1: {
            _hx_name: "UPPER_1_SERVE1",
            _hx_index: 51,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE2: {
            _hx_name: "UPPER_1_SERVE2",
            _hx_index: 52,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE3: {
            _hx_name: "UPPER_1_SERVE3",
            _hx_index: 53,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE4: {
            _hx_name: "UPPER_1_SERVE4",
            _hx_index: 54,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE5: {
            _hx_name: "UPPER_1_SERVE5",
            _hx_index: 55,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE6: {
            _hx_name: "UPPER_1_SERVE6",
            _hx_index: 56,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE7: {
            _hx_name: "UPPER_1_SERVE7",
            _hx_index: 57,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SERVE8: {
            _hx_name: "UPPER_1_SERVE8",
            _hx_index: 58,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SWING1: {
            _hx_name: "UPPER_1_SWING1",
            _hx_index: 59,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SWING2: {
            _hx_name: "UPPER_1_SWING2",
            _hx_index: 60,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SWING3: {
            _hx_name: "UPPER_1_SWING3",
            _hx_index: 61,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SWING4: {
            _hx_name: "UPPER_1_SWING4",
            _hx_index: 62,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_SWING5: {
            _hx_name: "UPPER_1_SWING5",
            _hx_index: 63,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_VICTORY1: {
            _hx_name: "UPPER_1_VICTORY1",
            _hx_index: 64,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_VICTORY2: {
            _hx_name: "UPPER_1_VICTORY2",
            _hx_index: 65,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_VICTORY3: {
            _hx_name: "UPPER_1_VICTORY3",
            _hx_index: 66,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_1_VICTORY4: {
            _hx_name: "UPPER_1_VICTORY4",
            _hx_index: 67,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_DEFEAT1: {
            _hx_name: "UPPER_2_DEFEAT1",
            _hx_index: 68,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_DEFEAT2: {
            _hx_name: "UPPER_2_DEFEAT2",
            _hx_index: 69,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_DEFEAT3: {
            _hx_name: "UPPER_2_DEFEAT3",
            _hx_index: 70,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_DEFEAT4: {
            _hx_name: "UPPER_2_DEFEAT4",
            _hx_index: 71,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_IDLE1: {
            _hx_name: "UPPER_2_IDLE1",
            _hx_index: 72,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_IDLE2: {
            _hx_name: "UPPER_2_IDLE2",
            _hx_index: 73,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_IDLE3: {
            _hx_name: "UPPER_2_IDLE3",
            _hx_index: 74,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_IDLE4: {
            _hx_name: "UPPER_2_IDLE4",
            _hx_index: 75,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_IDLE5: {
            _hx_name: "UPPER_2_IDLE5",
            _hx_index: 76,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN1: {
            _hx_name: "UPPER_2_RUN1",
            _hx_index: 77,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN2: {
            _hx_name: "UPPER_2_RUN2",
            _hx_index: 78,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN3: {
            _hx_name: "UPPER_2_RUN3",
            _hx_index: 79,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN4: {
            _hx_name: "UPPER_2_RUN4",
            _hx_index: 80,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN5: {
            _hx_name: "UPPER_2_RUN5",
            _hx_index: 81,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN6: {
            _hx_name: "UPPER_2_RUN6",
            _hx_index: 82,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN7: {
            _hx_name: "UPPER_2_RUN7",
            _hx_index: 83,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_RUN8: {
            _hx_name: "UPPER_2_RUN8",
            _hx_index: 84,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE1: {
            _hx_name: "UPPER_2_SERVE1",
            _hx_index: 85,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE2: {
            _hx_name: "UPPER_2_SERVE2",
            _hx_index: 86,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE3: {
            _hx_name: "UPPER_2_SERVE3",
            _hx_index: 87,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE4: {
            _hx_name: "UPPER_2_SERVE4",
            _hx_index: 88,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE5: {
            _hx_name: "UPPER_2_SERVE5",
            _hx_index: 89,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE6: {
            _hx_name: "UPPER_2_SERVE6",
            _hx_index: 90,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE7: {
            _hx_name: "UPPER_2_SERVE7",
            _hx_index: 91,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SERVE8: {
            _hx_name: "UPPER_2_SERVE8",
            _hx_index: 92,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SWING1: {
            _hx_name: "UPPER_2_SWING1",
            _hx_index: 93,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SWING2: {
            _hx_name: "UPPER_2_SWING2",
            _hx_index: 94,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SWING3: {
            _hx_name: "UPPER_2_SWING3",
            _hx_index: 95,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SWING4: {
            _hx_name: "UPPER_2_SWING4",
            _hx_index: 96,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_SWING5: {
            _hx_name: "UPPER_2_SWING5",
            _hx_index: 97,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_VICTORY1: {
            _hx_name: "UPPER_2_VICTORY1",
            _hx_index: 98,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_VICTORY2: {
            _hx_name: "UPPER_2_VICTORY2",
            _hx_index: 99,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_VICTORY3: {
            _hx_name: "UPPER_2_VICTORY3",
            _hx_index: 100,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_2_VICTORY4: {
            _hx_name: "UPPER_2_VICTORY4",
            _hx_index: 101,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_DEFEAT1: {
            _hx_name: "UPPER_3_DEFEAT1",
            _hx_index: 102,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_DEFEAT2: {
            _hx_name: "UPPER_3_DEFEAT2",
            _hx_index: 103,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_DEFEAT3: {
            _hx_name: "UPPER_3_DEFEAT3",
            _hx_index: 104,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_DEFEAT4: {
            _hx_name: "UPPER_3_DEFEAT4",
            _hx_index: 105,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_IDLE1: {
            _hx_name: "UPPER_3_IDLE1",
            _hx_index: 106,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_IDLE2: {
            _hx_name: "UPPER_3_IDLE2",
            _hx_index: 107,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_IDLE3: {
            _hx_name: "UPPER_3_IDLE3",
            _hx_index: 108,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_IDLE4: {
            _hx_name: "UPPER_3_IDLE4",
            _hx_index: 109,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_IDLE5: {
            _hx_name: "UPPER_3_IDLE5",
            _hx_index: 110,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN1: {
            _hx_name: "UPPER_3_RUN1",
            _hx_index: 111,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN2: {
            _hx_name: "UPPER_3_RUN2",
            _hx_index: 112,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN3: {
            _hx_name: "UPPER_3_RUN3",
            _hx_index: 113,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN4: {
            _hx_name: "UPPER_3_RUN4",
            _hx_index: 114,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN5: {
            _hx_name: "UPPER_3_RUN5",
            _hx_index: 115,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN6: {
            _hx_name: "UPPER_3_RUN6",
            _hx_index: 116,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN7: {
            _hx_name: "UPPER_3_RUN7",
            _hx_index: 117,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_RUN8: {
            _hx_name: "UPPER_3_RUN8",
            _hx_index: 118,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE1: {
            _hx_name: "UPPER_3_SERVE1",
            _hx_index: 119,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE2: {
            _hx_name: "UPPER_3_SERVE2",
            _hx_index: 120,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE3: {
            _hx_name: "UPPER_3_SERVE3",
            _hx_index: 121,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE4: {
            _hx_name: "UPPER_3_SERVE4",
            _hx_index: 122,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE5: {
            _hx_name: "UPPER_3_SERVE5",
            _hx_index: 123,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE6: {
            _hx_name: "UPPER_3_SERVE6",
            _hx_index: 124,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE7: {
            _hx_name: "UPPER_3_SERVE7",
            _hx_index: 125,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SERVE8: {
            _hx_name: "UPPER_3_SERVE8",
            _hx_index: 126,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SWING1: {
            _hx_name: "UPPER_3_SWING1",
            _hx_index: 127,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SWING2: {
            _hx_name: "UPPER_3_SWING2",
            _hx_index: 128,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SWING3: {
            _hx_name: "UPPER_3_SWING3",
            _hx_index: 129,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SWING4: {
            _hx_name: "UPPER_3_SWING4",
            _hx_index: 130,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_SWING5: {
            _hx_name: "UPPER_3_SWING5",
            _hx_index: 131,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_VICTORY1: {
            _hx_name: "UPPER_3_VICTORY1",
            _hx_index: 132,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_VICTORY2: {
            _hx_name: "UPPER_3_VICTORY2",
            _hx_index: 133,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_VICTORY3: {
            _hx_name: "UPPER_3_VICTORY3",
            _hx_index: 134,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        },
        UPPER_3_VICTORY4: {
            _hx_name: "UPPER_3_VICTORY4",
            _hx_index: 135,
            __enum__: "cbcten.game.EUnitFrame",
            toString: i
        }
    };
    ce.__constructs__ = [ce.LOWER_DEFEAT1, ce.LOWER_DEFEAT2, ce.LOWER_DEFEAT3, ce.LOWER_DEFEAT4, ce.LOWER_IDLE1, ce.LOWER_IDLE2, ce.LOWER_IDLE3, ce.LOWER_IDLE4, ce.LOWER_IDLE5, ce.LOWER_RUN1, ce.LOWER_RUN2, ce.LOWER_RUN3, ce.LOWER_RUN4, ce.LOWER_RUN5, ce.LOWER_RUN6, ce.LOWER_RUN7, ce.LOWER_RUN8, ce.LOWER_SERVE1, ce.LOWER_SERVE2, ce.LOWER_SERVE3, ce.LOWER_SERVE4, ce.LOWER_SERVE5, ce.LOWER_SERVE6, ce.LOWER_SERVE7, ce.LOWER_SERVE8, ce.LOWER_SWING1, ce.LOWER_SWING2, ce.LOWER_SWING3, ce.LOWER_SWING4, ce.LOWER_SWING5, ce.LOWER_VICTORY1, ce.LOWER_VICTORY2, ce.LOWER_VICTORY3, ce.LOWER_VICTORY4, ce.UPPER_1_DEFEAT1, ce.UPPER_1_DEFEAT2, ce.UPPER_1_DEFEAT3, ce.UPPER_1_DEFEAT4, ce.UPPER_1_IDLE1, ce.UPPER_1_IDLE2, ce.UPPER_1_IDLE3, ce.UPPER_1_IDLE4, ce.UPPER_1_IDLE5, ce.UPPER_1_RUN1, ce.UPPER_1_RUN2, ce.UPPER_1_RUN3, ce.UPPER_1_RUN4, ce.UPPER_1_RUN5, ce.UPPER_1_RUN6, ce.UPPER_1_RUN7, ce.UPPER_1_RUN8, ce.UPPER_1_SERVE1, ce.UPPER_1_SERVE2, ce.UPPER_1_SERVE3, ce.UPPER_1_SERVE4, ce.UPPER_1_SERVE5, ce.UPPER_1_SERVE6, ce.UPPER_1_SERVE7, ce.UPPER_1_SERVE8, ce.UPPER_1_SWING1, ce.UPPER_1_SWING2, ce.UPPER_1_SWING3, ce.UPPER_1_SWING4, ce.UPPER_1_SWING5, ce.UPPER_1_VICTORY1, ce.UPPER_1_VICTORY2, ce.UPPER_1_VICTORY3, ce.UPPER_1_VICTORY4, ce.UPPER_2_DEFEAT1, ce.UPPER_2_DEFEAT2, ce.UPPER_2_DEFEAT3, ce.UPPER_2_DEFEAT4, ce.UPPER_2_IDLE1, ce.UPPER_2_IDLE2, ce.UPPER_2_IDLE3, ce.UPPER_2_IDLE4, ce.UPPER_2_IDLE5, ce.UPPER_2_RUN1, ce.UPPER_2_RUN2, ce.UPPER_2_RUN3, ce.UPPER_2_RUN4, ce.UPPER_2_RUN5, ce.UPPER_2_RUN6, ce.UPPER_2_RUN7, ce.UPPER_2_RUN8, ce.UPPER_2_SERVE1, ce.UPPER_2_SERVE2, ce.UPPER_2_SERVE3, ce.UPPER_2_SERVE4, ce.UPPER_2_SERVE5, ce.UPPER_2_SERVE6, ce.UPPER_2_SERVE7, ce.UPPER_2_SERVE8, ce.UPPER_2_SWING1, ce.UPPER_2_SWING2, ce.UPPER_2_SWING3, ce.UPPER_2_SWING4, ce.UPPER_2_SWING5, ce.UPPER_2_VICTORY1, ce.UPPER_2_VICTORY2, ce.UPPER_2_VICTORY3, ce.UPPER_2_VICTORY4, ce.UPPER_3_DEFEAT1, ce.UPPER_3_DEFEAT2, ce.UPPER_3_DEFEAT3, ce.UPPER_3_DEFEAT4, ce.UPPER_3_IDLE1, ce.UPPER_3_IDLE2, ce.UPPER_3_IDLE3, ce.UPPER_3_IDLE4, ce.UPPER_3_IDLE5, ce.UPPER_3_RUN1, ce.UPPER_3_RUN2, ce.UPPER_3_RUN3, ce.UPPER_3_RUN4, ce.UPPER_3_RUN5, ce.UPPER_3_RUN6, ce.UPPER_3_RUN7, ce.UPPER_3_RUN8, ce.UPPER_3_SERVE1, ce.UPPER_3_SERVE2, ce.UPPER_3_SERVE3, ce.UPPER_3_SERVE4, ce.UPPER_3_SERVE5, ce.UPPER_3_SERVE6, ce.UPPER_3_SERVE7, ce.UPPER_3_SERVE8, ce.UPPER_3_SWING1, ce.UPPER_3_SWING2, ce.UPPER_3_SWING3, ce.UPPER_3_SWING4, ce.UPPER_3_SWING5, ce.UPPER_3_VICTORY1, ce.UPPER_3_VICTORY2, ce.UPPER_3_VICTORY3, ce.UPPER_3_VICTORY4];
    var ue = R["cbcten.game.EUnitStrategy"] = {
        __ename__: "cbcten.game.EUnitStrategy",
        __constructs__: null,
        CHILL: {
            _hx_name: "CHILL",
            _hx_index: 0,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        HEDGE: {
            _hx_name: "HEDGE",
            _hx_index: 1,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        RECEIVE: {
            _hx_name: "RECEIVE",
            _hx_index: 2,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        RUSH: {
            _hx_name: "RUSH",
            _hx_index: 3,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        SERVICE_PREPARE: {
            _hx_name: "SERVICE_PREPARE",
            _hx_index: 4,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        SERVICE_WAIT: {
            _hx_name: "SERVICE_WAIT",
            _hx_index: 5,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        },
        SERVICE_SWING: {
            _hx_name: "SERVICE_SWING",
            _hx_index: 6,
            __enum__: "cbcten.game.EUnitStrategy",
            toString: i
        }
    };
    ue.__constructs__ = [ue.CHILL, ue.HEDGE, ue.RECEIVE, ue.RUSH, ue.SERVICE_PREPARE, ue.SERVICE_WAIT, ue.SERVICE_SWING];
    var de = R["cbcten.game.EUpgrade"] = {
        __ename__: "cbcten.game.EUpgrade",
        __constructs__: null,
        UPGRADE_MOVEMENT: {
            _hx_name: "UPGRADE_MOVEMENT",
            _hx_index: 0,
            __enum__: "cbcten.game.EUpgrade",
            toString: i
        },
        UPGRADE_TIMING: {
            _hx_name: "UPGRADE_TIMING",
            _hx_index: 1,
            __enum__: "cbcten.game.EUpgrade",
            toString: i
        },
        UPGRADE_POWER: {
            _hx_name: "UPGRADE_POWER",
            _hx_index: 2,
            __enum__: "cbcten.game.EUpgrade",
            toString: i
        },
        UPGRADE_SPIN: {
            _hx_name: "UPGRADE_SPIN",
            _hx_index: 3,
            __enum__: "cbcten.game.EUpgrade",
            toString: i
        }
    };

    function ge(t, e, i) {
        Ft.call(this, t), this.type = e, this.title = this._getTitle(), this.locationType = _e.LOCATION_A, this.medalType = this._session.getMedal(this.type, i), this.isLocked = this._getIsLocked(i), this.isNew = this.medalType == ae.MEDAL_NONE && !this.isLocked, this.message = this._getMessage(), this.opponentSkill = this._getOpponentSkill()
    }

    function pe(t, e, i, s) {
        this._excitement = 0, this.levelVo = e, this.hud = i, this._callbackScore = s, this.vo = new me(t, this.levelVo.locationType), Bt.call(this, t)
    }
    de.__constructs__ = [de.UPGRADE_MOVEMENT, de.UPGRADE_TIMING, de.UPGRADE_POWER, de.UPGRADE_SPIN], p = function() {}, (e["cbcten.game.IHud"] = p).__name__ = "cbcten.game.IHud", p.__isInterface__ = !0, p.prototype = {
        __class__: p
    }, (e["cbcten.game.LevelVo"] = ge).__name__ = "cbcten.game.LevelVo", ge.__super__ = Ft, ge.prototype = t(Ft.prototype, {
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
                    return this._session.getMedal(ne.LEVEL_1, t)._hx_index <= ae.MEDAL_NONE._hx_index;
                case 2:
                    return this._session.getMedal(ne.LEVEL_2, t)._hx_index <= ae.MEDAL_NONE._hx_index
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
            var i = this._kernel.getConfig(t);
            return l.replace(e, "__PREVIOUS_LEVEL__", i)
        },
        _getOpponentSkill: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .5;
                case 1:
                    return .75;
                case 2:
                    return 1
            }
        },
        __class__: ge
    }), (e["cbcten.game.Location"] = pe).__name__ = "cbcten.game.Location", pe.__super__ = Bt, pe.prototype = t(Bt.prototype, {
        getScoreTotal: function() {
            return this._session.cache.score.player + this._session.cache.score.opponent
        },
        getServingUnit: function() {
            this._tools;
            return Math.round(this.getScoreTotal() / 2) % 2 != 0 ? this._player : this._opponent
        },
        getOtherUnit: function(t) {
            return t == this._player ? this._opponent : this._player
        },
        _getRenderables: function() {
            for (var t = [], e = 0, i = this.getEntitiesByClass(Xt); e < i.length;) {
                var s = i[e];
                ++e, s.isRendered && t.push(s)
            }
            return t
        },
        _init: function() {
            Bt.prototype._init.call(this), this.addEntity(this.camera = new $t(this._kernel, 0, 0, 3e3)), this.addEntity(this.court = new ie(this._kernel, this)), this.addEntity(this.ball = new Jt(this._kernel, this, 0, 0, 0)), this.addEntity(this._opponent = new fe(this._kernel, this, le.BOT(this.levelVo.opponentSkill), se.UPPER)), this.addEntity(this._player = new fe(this._kernel, this, le.HUMAN, se.LOWER)), this.addEntity(this._renderer = new Ee(this._kernel, this, this._kernel.factory.width, this._kernel.factory.height, qi(this, this._getRenderables)), null, !0), this._kernel.audio.start("Ambience", Rt.EFFECTS, -1, 0, 0), this._kernel.audio.start("GameStart", Rt.EFFECTS, 1, 0, .5), this._servicePrepare()
        },
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t);
            t = this.ball.getCameraPosition();
            this.camera.setPosition(t.x, t.y, 0), this._excitement = .98 * Math.pow(this._excitement, 1.001);
            t = this._excitement;
            this._kernel.audio.transform("Ambience", Rt.EFFECTS, 1 < t ? 1 : t < 0 ? 0 : t)
        },
        _disposer: function() {
            this._kernel.audio.stop("Ambience", Rt.EFFECTS), Bt.prototype._disposer.call(this)
        },
        awardScore: function(t) {
            var e = t == this._player;
            return e ? this._session.cache.score.player++ : this._session.cache.score.opponent++, this._callbackScore() ? (t = this._session.cache.score.player > this._session.cache.score.opponent, this._kernel.audio.start("CrowdScore", Rt.EFFECTS, 0, 0, 1), this._player.setAnimation(t ? re.VICTORY : re.DEFEAT, !0), this._opponent.setAnimation(t ? re.DEFEAT : re.VICTORY, !0), this._player.setStrategy(ue.CHILL), this._opponent.setStrategy(ue.CHILL)) : this._servicePrepare(), e
        },
        addExcitement: function(t) {
            this._excitement += t
        },
        createCoins: function(t, e, i, s) {
            for (var n = 0, _ = s; n < _;) {
                n++;
                this.addEntity(new te(this._kernel, this, t, e, i))
            }
        },
        _servicePrepare: function() {
            var t = this.getServingUnit();
            t.setStrategy(ue.SERVICE_PREPARE), this.getOtherUnit(t).setStrategy(ue.RECEIVE)
        },
        __class__: pe
    });
    var me = function(t, e) {
        Ft.call(this, t), this.type = e, this.textureLocationBackground = this._assets.getAsset("assets/game/LocationBackground.jpg"), this.textureLocationCourt = this._assets.getAsset("assets/game/LocationCourt.png"), this.offsetY = 802
    };
    (e["cbcten.game.LocationVo"] = me).__name__ = "cbcten.game.LocationVo", me.__super__ = Ft, me.prototype = t(Ft.prototype, {
        __class__: me
    });
    var Ee = function(t, e, i, s, n) {
        this._location = e, this._width = i, this._height = s, this._getRenderables = n, Bt.call(this, t)
    };
    (e["cbcten.game.Renderer"] = Ee).__name__ = "cbcten.game.Renderer", Ee.__super__ = Bt, Ee.prototype = t(Bt.prototype, {
        _init: function() {
            Bt.prototype._init.call(this), this._context.cache(0, 0, this._width, this._height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null)
        },
        _updater: function(t) {
            null == t && (t = 0), Bt.prototype._updater.call(this, t);
            var e = this._location.camera.getPosition(),
                i = this._location.camera.createRenderableTransformFromWorldCoords(e.x, e.y, e.z, 1),
                t = -i.x,
                e = (150 < t ? 150 : t < -150 ? -150 : t) + .5 * this._width,
                t = (190 < (t = -i.y) ? 190 : t < -420 ? -420 : t) + .5 * this._height;
            this._context2d.clearRect(0, 0, this._width, this._height), this._drawLocation(e, t), this._drawRenderables(e, t)
        },
        _drawLocation: function(t, e) {
            this._context2d.save();
            var i = this._location.vo.textureLocationBackground;
            this._context2d.translate(t - .5 * i.width, e - this._location.vo.offsetY + this._height), this._context2d.drawImage(i, 0, 0);
            i = this._location.vo.textureLocationCourt;
            this._context2d.translate(0, i.height), this._context2d.drawImage(i, 0, 0), this._context2d.restore()
        },
        _drawRenderables: function(t, e) {
            var i = this._getRenderables();
            i.sort(qi(this, this._sortRenderable));
            for (var s = 0; s < i.length;) {
                var n = i[s];
                ++s;
                var _ = n.getTexture(),
                    a = this._location.camera.createRenderableTransformFromWorldCoords(n.position.x, n.position.y, n.position.z, _.scale),
                    r = a.x + t,
                    o = a.y + e;
                this._context2d.save(), _.isFlip && (this._context2d.translate(r, 0), this._context2d.scale(_.isFlip ? -1 : 1, 1), this._context2d.translate(-r, 0)), this._context2d.scale(a.scale, a.scale), this._context2d.translate(-(_.width * _.originX), -(_.height * _.originY)), this._context2d.translate(r / a.scale, o / a.scale), this._context2d.globalAlpha = _.alpha, this._context2d.globalCompositeOperation = _.isAdd ? "lighter" : "source-over", this._context2d.drawImage(_.source, _.x, _.y, _.width, _.height, 0, 0, _.width, _.height), n instanceof fe && this._location.hud.positionTiming(a.x + t, a.y + e - 55), this._context2d.restore()
            }
        },
        _sortRenderable: function(t, e) {
            return t.position.y - e.position.y | 0
        },
        __class__: Ee
    });
    var fe = function(t, e, i, s) {
        this._service = {
            updates: 0,
            skill: 1
        }, this._ballCollide = {
            isWithinRange: !1,
            delta: {
                x: 0,
                y: 0,
                z: 0
            },
            distance: 0
        }, this._animation = {
            pose: re.IDLE,
            nextPose: re.IDLE,
            frameIndex: 0,
            isLeft: !1,
            squeakUpdates: 0
        }, this._bias = {
            movement: .5,
            timing: .5,
            power: .5,
            spin: .5
        }, this.isRendered = !0, this._TIMINGS = [oe.TOO_EARLY, oe.EARLY, oe.GOOD, oe.PERFECT, oe.GREAT, oe.LATE, oe.TOO_LATE], this._location = e, this._controller = i, this.courtSide = s, Bt.call(this, t)
    };
    (e["cbcten.game.Unit"] = fe).__name__ = "cbcten.game.Unit", fe.__interfaces__ = [Xt], fe.__super__ = Bt, fe.prototype = t(Bt.prototype, {
            getTexture: function() {
                this._animation.frameIndex++, this._getIsAnimationComplete() && this._nextAnimation();
                var t, e = this._unitVo.getFrameTypes(this.courtSide, this._animation.pose),
                    e = e[this._animation.frameIndex % e.length],
                    e = this._unitVo.getFrame(e);
                switch (this._animation.pose._hx_index) {
                    case 2:
                    case 6:
                        t = !0;
                        break;
                    case 3:
                    case 7:
                        t = !1;
                        break;
                    default:
                        t = this.courtSide == se.UPPER
                }
                return {
                    source: e.image,
                    x: e.rect.x,
                    y: e.rect.y,
                    width: e.rect.width,
                    height: e.rect.height,
                    originX: (64 + e.regX) / e.rect.width,
                    originY: (124.8 + e.regY) / e.rect.height,
                    scale: 2.2,
                    isFlip: t,
                    isAdd: !1,
                    alpha: 1
                }
            },
            getSpeed: function() {
                return Math.sqrt(this._momentum.x * this._momentum.x + this._momentum.y * this._momentum.y)
            },
            _getColliderReach: function() {
                return {
                    x: 125,
                    y: 300 * (this._isHuman ? 1 : .5),
                    z: 250
                }
            },
            setStrategy: function(t) {
                this._strategy = t
            },
            setAnimation: function(t, e) {
                null == e && (e = !1), this._animation.pose == re.IDLE && t != re.IDLE && (e = !0), this._animation.nextPose = t, e && this._nextAnimation()
            },
            _init: function() {
                Bt.prototype._init.call(this), this._isHuman = this._controller == le.HUMAN, this._unitVo = new xe(this._kernel, this._session.cache.unitType, this._session.cache.levelType._hx_index + 1), this._strategy = ue.SERVICE_PREPARE, this.position = this._getTargetPosition(), this._seed = T.random(10) + 20, this._momentum = {
                    x: 0,
                    y: 0,
                    z: 0
                };
                var t = this._controller;
                switch (t._hx_index) {
                    case 0:
                        this._bias.movement = this._unitVo.getBias(1.1, 2, de.UPGRADE_MOVEMENT), this._bias.timing = this._unitVo.getBias(3, 2, de.UPGRADE_TIMING), this._bias.power = this._unitVo.getBias(.5, 1, de.UPGRADE_POWER), this._bias.spin = this._unitVo.getBias(0, 1, de.UPGRADE_SPIN);
                        break;
                    case 1:
                        var e = t.p_skill;
                        this._bias.movement = this._unitVo.getBias(1.25, 2.25, null, e), this._bias.timing = this._unitVo.getBias(2.5, .95, null, e), this._bias.power = this._unitVo.getBias(.5, 1, null, e), this._bias.spin = this._unitVo.getBias(0, 1, null, e)
                }
                this._timingDistribution = this._createDistribution(this._TIMINGS.length, this._bias.timing), this.courtSide == se.UPPER && (this._service.updates = -100), this._isHuman && this._location.addEntity(this._beacon = new ye(this._kernel, this.position))
            },
            _updater: function(t) {
                null == t && (t = 0), Bt.prototype._updater.call(this, t), this._mover(), this._collider(), this._animator(), this._servicer(), this._isHuman && this._beacon.setIsVisible(this._ballCollide.isWithinRange);
                var e = this._controller;
                switch (e._hx_index) {
                    case 0:
                        i = this._kernel.inputs.joypad.getIsButtonPress(Tt.FIRE) || this._kernel.inputs.mouse.getIsButtonPress();
                        break;
                    case 1:
                        e.p_skill;
                        var i = !0
                }
                if (i && this._ballCollide.isWithinRange && this._location.ball.isHittable) {
                    switch ((e = this._controller)._hx_index) {
                        case 0:
                            var s = this._getColliderReach(),
                                n = this._ballCollide.delta.y / s.y * (this.courtSide == se.UPPER ? 1 : -1),
                                s = this._calculateTiming(n);
                            this._location.hud.configureTiming(s), _ = s;
                            break;
                        case 1:
                            e.p_skill;
                            var n = Math.random() * (Math.random() < .5 ? -1 : 1),
                                _ = s = this._calculateTiming(n)
                    }
                    this._hitBall(_), this._ballCollide.isWithinRange = !1
                }
                this._isHuman && this._session.getIsNovice() && this._location.ball.isHittable && this._location.ball.hitter != this && this._location.ball.getCourtSide() == this.courtSide && this._location.hud.configurePrompt(this._kernel.getConfig("gui.scenes.game.hud.prompts.return"), !0)
            },
            _mover: function() {
                var t = this._getTargetPosition(),
                    e = (this._tools, t.x - this.position.x),
                    i = t.y - this.position.y,
                    s = e * e + i * i;
                25 < Math.sqrt(s) ? (e = this.position.x + 10 * this._momentum.x > t.x, i = this.position.x + 10 * this._momentum.x < t.x, s = this.position.y + 10 * this._momentum.y > t.y, t = this.position.y + 10 * this._momentum.y < t.y, e && (this._momentum.x -= this._bias.movement), i && (this._momentum.x += this._bias.movement), s && (this._momentum.y -= this._bias.movement * (this._strategy == ue.SERVICE_PREPARE ? 2 : .5)), t && (this._momentum.y += this._bias.movement * (this._strategy == ue.SERVICE_PREPARE ? 2 : .5))) : this._resolveStrategy(), this._momentum.x *= .9, this._momentum.y *= .9, this._momentum.z *= .9, this.position.x += this._momentum.x, this.position.y += this._momentum.y, this.position.z += this._momentum.z
            },
            _collider: function() {
                this._location.court.applyUnitConstraints(this.position, this._momentum)
            },
            _animator: function() {
                var t = this._animation.isLeft;
                this._animation.isLeft = this._momentum.x < 0;
                var e = this.getSpeed();
                7 < e && this._animation.isLeft != t && this._location.ball.isHittable && this._strategy != ue.SERVICE_SWING && 20 < this._updates - this._animation.squeakUpdates && (this._kernel.audio.start("UnitSqueak" + (T.random(3) + 1), Rt.EFFECTS, 0, 0, e / 50, null, !0), this._animation.squeakUpdates = this._updates), this.setAnimation(7 < e ? this._animation.isLeft ? re.RUN_LEFT : re.RUN_RIGHT : re.IDLE), this._strategy == ue.SERVICE_WAIT && this.setAnimation(re.SERVE_WAIT, !0)
            },
            _servicer: function() {
                if (this._strategy == ue.SERVICE_WAIT) {
                    switch (this._service.updates++, (i = this._controller)._hx_index) {
                        case 0:
                            e = this._kernel.inputs.joypad.getIsButtonPress(Tt.FIRE) || this._kernel.inputs.mouse.getIsButtonPress();
                            break;
                        case 1:
                            var t = i.p_skill;
                            e = this._service.updates >= .5 * this._kernel.factory.targetFramerate
                    }
                    e && (this._location.ball.setMomentum({
                        x: this.courtSide == se.UPPER ? 2 : -2,
                        y: 0,
                        z: 35
                    }), this.setStrategy(ue.SERVICE_SWING), this.setAnimation(re.SERVE_SWING, !0), this._service.updates = 0, this._service.skill = -1), this._isHuman && (this._session.getIsNovice() && this._location.hud.configurePrompt(this._kernel.getConfig("gui.scenes.game.hud.prompts.serviceWait"), !0), this._location.hud.configureSkill(0))
                } else if (this._strategy == ue.SERVICE_SWING) {
                    this._service.updates++;
                    var e, i, s, n = 1 < (a = (this._service.updates + 1) / 20) ? 1 : a < 0 ? 0 : a,
                        _ = this._isHuman && -1 == this._service.skill;
                    switch ((i = this._controller)._hx_index) {
                        case 0:
                            e = -1 == this._service.skill && (this._kernel.inputs.joypad.getIsButtonRelease(Tt.FIRE) || this._kernel.inputs.mouse.getIsButtonRelease());
                            break;
                        case 1:
                            t = i.p_skill;
                            e = 20 <= this._service.updates
                    }
                    if (e) {
                        switch ((i = this._controller)._hx_index) {
                            case 0:
                                r = n;
                                break;
                            case 1:
                                var a, t = i.p_skill,
                                    r = (this._tools, 1 < (a = t + .4 * (Math.random() - .5)) ? 1 : a < .5 ? .5 : a)
                        }
                        this._service.skill = r
                    }
                    20 <= this._service.updates && (n = this._service.skill, this._location.ball.isHittable = !0, s = this._calculateTiming(0 < this._service.skill ? this._service.skill - 1 : -this._service.skill), this._hitBall(s, !0), this._service.updates = 0, this._service.skill = 0), _ && (this._session.getIsNovice() && this._location.hud.configurePrompt(this._kernel.getConfig("gui.scenes.game.hud.prompts.serviceSwing"), !0), this._location.hud.configureSkill(n))
                }
            },
            applyBallCollide: function(t, e) {
                if (this._ballCollide.isWithinRange = !1, this._ballCollide.delta = {
                        x: this.position.x - t.x,
                        y: this.position.y - t.y,
                        z: this.position.z - t.z
                    }, this._ballCollide.distance = Math.abs(this._ballCollide.delta.y), !this._location.ball.isHittable) return !1;
                for (var i = this._getColliderReach(), s = 0; s < 10;) {
                    var n = s++/10,_=t.x-e.x*n,a=t.y-e.y*n,n=t.z-e.z*n,a={x:this.position.x-_,y:this.position.y-a,z:this.position.z-n};Math.abs(a.x)<i.x&&Math.abs(a.z)<i.z&&((n=Math.abs(a.y))<=i.y&&n<=this._ballCollide.distance&&(this._ballCollide.isWithinRange=!0,this._ballCollide.delta=a,this._ballCollide.distance=n))}return this._ballCollide.isWithinRange},_hitBall:function(t,e){var i,s,n,_,a,r,o,h,l;null==e&&(e=!1),this._location.ball.isHittable&&(s=(i=this._calculateSkill(t))*(e?1:.5),h={x:0,y:.5*(n=this.courtSide==se.UPPER?1:-1)},_=this._location.court.createRelativePosition(this.position.x,this.position.y),l=0,e?(h=this._location.court.createServiceRelativePosition(this.courtSide,this.position.x<0,i),this._momentum.y+=n*this._bias.movement*20):(a=this._calculateSkill(t,!1),r=Math.random()<.5?-1:1,this._tools,t=(t=(o=a+.25*Math.random()+1)- -1)-2*Math.floor(t/
                    2) - 1, h.x = r * t, this._tools, o = .8 * (.5 * a + .5) + .1 + .2 * Math.random(), h.y = (1 < o ? 1 : o < 0 ? 0 : o) * n, -1 == a && (s = .75), 1 == a && (h.y = .1 * Math.random() * n), (r = 0 == a && Math.random() < .5 && (0 < (o = h.x) ? 1 : 0 == o ? 0 : -1) == (0 < (t = _.x) ? 1 : 0 == t ? 0 : -1)) && (h.y = n), .6 < Math.abs(_.y) && (this._momentum.y += n * this._bias.movement * 20 * -a), l = (1 - (1 < (o = Math.abs(this._momentum.x) / 3) ? 1 : o < -1 ? -1 : o)) * this._bias.spin * (Math.random() < .5 ? -1 : 1)),
            o = h.x,
            h = this._location.court.createPositionFromRelative(.95 < o ? .95 : o < -.95 ? -.95 : o, h.y, 0),
            l = {
                x: l,
                y: 0,
                z: 0
            },
            e || this.setAnimation(0 < this._ballCollide.delta.x ? re.SWING_LEFT : re.SWING_RIGHT, !0),
            this._location.ball.hit(h, s * this._bias.power, null, l, this),
            this._kernel.audio.start(0 == i ? "BallHitMiss" : "BallHit" + (T.random(2) + 1), Rt.EFFECTS, 0, 0, 1.5 * s + .25))
    }, _getTargetPosition: function() {
        switch (this._strategy._hx_index) {
            case 0:
                return this.position;
            case 1:
                return this._location.court.createPositionFromRelative(0, .65 * ((this.courtSide == se.UPPER ? -1 : 1) + .4 * Math.sin(this._updates / this._seed)), 0);
            case 2:
                this._tools;
                return this._location.court.createPositionFromRelative((this._location.getScoreTotal() + this.courtSide._hx_index) % 2 == 0 ? -.6 : .6, this.courtSide == se.UPPER ? -.9 : .9, 0);
            case 3:
                return this._location.ball.getTarget(this.position.y);
            case 4:
                this._tools;
                return this._location.court.createPositionFromRelative((this._location.getScoreTotal() + this.courtSide._hx_index) % 2 == 0 ? -.36 : .36, this.courtSide == se.UPPER ? -1.065 : 1.065, 0);
            case 5:
            case 6:
                return this.position
        }
    }, _resolveStrategy: function() {
        switch (this._strategy._hx_index) {
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            case 4:
                this.setStrategy(ue.SERVICE_WAIT);
                break;
            case 5:
                this._location.ball.setPosition({
                    x: this.position.x + (this.courtSide == se.UPPER ? -55 : 55),
                    y: this.position.y + (this.courtSide == se.UPPER ? 15 : -15),
                    z: 65
                }), this._location.ball.setMomentum({
                    x: 0,
                    y: 0,
                    z: 0
                })
        }
    }, _nextAnimation: function() {
        this._animation.pose = this._animation.nextPose, this._animation.nextPose = re.IDLE, this._animation.frameIndex = 0
    }, _getIsAnimationComplete: function() {
        var t, e = this._unitVo.getFrameTypes(this.courtSide, this._animation.pose);
        switch (this._animation.pose._hx_index) {
            case 0:
            case 4:
            case 8:
                t = !0;
                break;
            default:
                t = !1
        }
        return t ? (this._animation.frameIndex >= e.length && (this._animation.frameIndex = e.length - 1), !1) : this._animation.frameIndex >= e.length
    }, _calculateTiming: function(t) {
        t = this._calculateIndexFromDistribution(this._timingDistribution, .5 * t + .5);
        return this._TIMINGS[t]
    }, _calculateSkill: function(t, e) {
        null == e && (e = !0);
        t = 2 * (this._TIMINGS.indexOf(t) / (this._TIMINGS.length - 1) - .5);
        return e ? 1 - Math.abs(t) : t
    }, _createDistribution: function(t, e) {
        for (var i = [], s = 0, n = t; s < n;) {
            var _ = s++;
            i.push(0)
        }
        for (s = 0; s < 1e3;) {
            var _ = s++,
                a = Math.random(),
                r = Math.random(),
                a = (Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r) / Math.PI * e / 2 + .5) * t,
                r = t - 1;
            i[0 | (r < a ? r : a < 0 ? 0 : a)]++
        }
        for (var o = 0, s = 0, n = i.length; s < n;) o += i[_ = s++], i[_] = o / 1e3;
        return i
    }, _calculateIndexFromDistribution: function(t, e) {
        for (var i = -1, s = 0; s < t.length;) {
            var n = t[s];
            if (++s, ++i, e < n) return i
        }
        return i
    }, __class__: fe
});
var ye = function(t, e) {
    this._alpha = 0, this.isRendered = !0, this.position = e, Bt.call(this, t)
};
(e["cbcten.game._Unit._UnitBeacon"] = ye).__name__ = "cbcten.game._Unit._UnitBeacon", ye.__interfaces__ = [Xt], ye.__super__ = Bt, ye.prototype = t(Bt.prototype, {
    _init: function() {
        Bt.prototype._init.call(this), this._source = this._kernel.assets.getAsset("assets/game/UnitBeacon.png")
    },
    setIsVisible: function(t) {
        this._alpha = .6 * this._alpha + .4 * (t ? 1 : 0)
    },
    getTexture: function() {
        return {
            source: this._source,
            x: 0,
            y: 0,
            width: this._source.width,
            height: this._source.height,
            originX: .5,
            originY: .5,
            scale: .5 * this._alpha + .5,
            isFlip: !1,
            isAdd: !0,
            alpha: .35 * this._alpha
        }
    },
    __class__: ye
});
var xe = function(t, e, i) {
    var s;
    switch (null == i && (i = 1), this._MAX_UPGRADES = 8, Ft.call(this, t), this.type = e, this.title = this._getTitle(), this.subtitle = this._getSubtitle(), this.variant = i, this.type._hx_index) {
        case 0:
            s = "assets/game/UnitA.json";
            break;
        case 1:
            s = "assets/game/UnitB.json"
    }
    switch (this._spriteSheet = new createjs.SpriteSheet(this._assets.getAsset(s)), this.type._hx_index) {
        case 0:
            s = "assets/game/UnitA.png";
            break;
        case 1:
            s = "assets/game/UnitB.png"
    }
    this._source = this._assets.getAsset(s)
};
(e["cbcten.game.UnitVo"] = xe).__name__ = "cbcten.game.UnitVo", xe.__super__ = Ft, xe.prototype = t(Ft.prototype, {
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
    getDefault: function(t) {
        if ("hypersurge" == this._kernel.getConfig("settings.overrideDefaultUnitStats.safety")) return 0 | this._tools.limit(T.parseInt(this._kernel.getConfig("settings.overrideDefaultUnitStats.value")), 3, 5);
        switch (this.type._hx_index) {
            case 0:
                switch (t._hx_index) {
                    case 0:
                        return 4;
                    case 1:
                        return 2;
                    case 2:
                        return 5;
                    case 3:
                        return 3
                }
                break;
            case 1:
                switch (t._hx_index) {
                    case 0:
                        return 3;
                    case 1:
                        return 5;
                    case 2:
                        return 2;
                    case 3:
                        return 4
                }
        }
    },
    getUpgrade: function(t) {
        switch (t._hx_index) {
            case 0:
                return this._session.getUpgrade(de.UPGRADE_MOVEMENT, this.type);
            case 1:
                return this._session.getUpgrade(de.UPGRADE_TIMING, this.type);
            case 2:
                return this._session.getUpgrade(de.UPGRADE_POWER, this.type);
            case 3:
                return this._session.getUpgrade(de.UPGRADE_SPIN, this.type)
        }
    },
    getTotal: function(t) {
        var e, i = this._MAX_UPGRADES;
        switch (t._hx_index) {
            case 0:
                e = this.getDefault(de.UPGRADE_MOVEMENT) + this.getUpgrade(de.UPGRADE_MOVEMENT);
                break;
            case 1:
                e = this.getDefault(de.UPGRADE_TIMING) + this.getUpgrade(de.UPGRADE_TIMING);
                break;
            case 2:
                e = this.getDefault(de.UPGRADE_POWER) + this.getUpgrade(de.UPGRADE_POWER);
                break;
            case 3:
                e = this.getDefault(de.UPGRADE_SPIN) + this.getUpgrade(de.UPGRADE_SPIN)
        }
        return 0 | Math.min(i, e)
    },
    getAvailable: function(t) {
        switch (t._hx_index) {
            case 0:
                return this._MAX_UPGRADES - this.getTotal(de.UPGRADE_MOVEMENT);
            case 1:
                return this._MAX_UPGRADES - this.getTotal(de.UPGRADE_TIMING);
            case 2:
                return this._MAX_UPGRADES - this.getTotal(de.UPGRADE_POWER);
            case 3:
                return this._MAX_UPGRADES - this.getTotal(de.UPGRADE_SPIN)
        }
    },
    getBias: function(t, e, i, s) {
        null == s && (s = 0);
        null != i && ((i = this.getTotal(i)) < 0 && (i = 0), i > this._MAX_UPGRADES && (i = this._MAX_UPGRADES), s = i / this._MAX_UPGRADES);
        e -= t;
        return t + Math.pow(s, this._factory.accessibility.getAdjustedGameplayChallenge()) * e
    },
    getPercentageComplete: function() {
        return (this.getTotal(de.UPGRADE_MOVEMENT) + this.getTotal(de.UPGRADE_TIMING) + this.getTotal(de.UPGRADE_POWER) + this.getTotal(de.UPGRADE_SPIN)) / (4 * this._MAX_UPGRADES)
    },
    getFrame: function(t) {
        var e = l.replace(this._tools.toWords(R[t.__enum__].__constructs__[t._hx_index]._hx_name), " ", "_"),
            t = this._spriteSheet.getAnimation(e),
            e = null;
        return null != t && ((e = this._spriteSheet.getFrame(t.frames[0])).image = this._source), e
    },
    getFrameTypes: function(i, s) {
        function t(t, e) {
            return null == e && (e = 1), n._createFrameTypes(i, n.variant, s, t, e)
        }
        var n = this;
        switch (s._hx_index) {
            case 0:
                return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 1)]);
            case 1:
                return this._joinArrays([t(1, 5), t(2, 5), t(3, 5), t(2, 3), t(1, 5), t(4, 5), t(5, 5), t(4, 3)]);
            case 2:
            case 3:
                return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 3), t(5, 3), t(6, 3), t(7, 3), t(8, 3)]);
            case 4:
                return this._joinArrays([t(1, 1)]);
            case 5:
                return this._joinArrays([t(1, 4), t(2, 4), t(3, 8), t(4, 3), t(5, 2), t(6, 2), t(7, 2), t(8, 3)]);
            case 6:
            case 7:
                return this._joinArrays([t(1, 2), t(2, 2), t(3, 4), t(4, 2), t(5, 4)]);
            case 8:
                return this._joinArrays([t(1, 3), t(2, 3), t(3, 3), t(4, 1)])
        }
    },
    _createFrameTypes: function(t, e, i, s, n) {
        var _;
        switch (null == n && (n = 1), null == e && (e = 1), e < 1 && (e = 1), 3 < e && (e = 3), n < 1 && (n = 1), --e, --s, i._hx_index) {
            case 0:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_DEFEAT1, ce.UPPER_1_DEFEAT2, ce.UPPER_1_DEFEAT3, ce.UPPER_1_DEFEAT4],
                            [ce.UPPER_2_DEFEAT1, ce.UPPER_2_DEFEAT2, ce.UPPER_2_DEFEAT3, ce.UPPER_2_DEFEAT4],
                            [ce.UPPER_3_DEFEAT1, ce.UPPER_3_DEFEAT2, ce.UPPER_3_DEFEAT3, ce.UPPER_3_DEFEAT4]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_DEFEAT1, ce.LOWER_DEFEAT2, ce.LOWER_DEFEAT3, ce.LOWER_DEFEAT4][s]
                }
                break;
            case 1:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_IDLE1, ce.UPPER_1_IDLE2, ce.UPPER_1_IDLE3, ce.UPPER_1_IDLE4, ce.UPPER_1_IDLE5],
                            [ce.UPPER_2_IDLE1, ce.UPPER_2_IDLE2, ce.UPPER_2_IDLE3, ce.UPPER_2_IDLE4, ce.UPPER_2_IDLE5],
                            [ce.UPPER_3_IDLE1, ce.UPPER_3_IDLE2, ce.UPPER_3_IDLE3, ce.UPPER_3_IDLE4, ce.UPPER_3_IDLE5]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_IDLE1, ce.LOWER_IDLE2, ce.LOWER_IDLE3, ce.LOWER_IDLE4, ce.LOWER_IDLE5][s]
                }
                break;
            case 2:
            case 3:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_RUN1, ce.UPPER_1_RUN2, ce.UPPER_1_RUN3, ce.UPPER_1_RUN4, ce.UPPER_1_RUN5, ce.UPPER_1_RUN6, ce.UPPER_1_RUN7, ce.UPPER_1_RUN8],
                            [ce.UPPER_2_RUN1, ce.UPPER_2_RUN2, ce.UPPER_2_RUN3, ce.UPPER_2_RUN4, ce.UPPER_2_RUN5, ce.UPPER_2_RUN6, ce.UPPER_2_RUN7, ce.UPPER_2_RUN8],
                            [ce.UPPER_3_RUN1, ce.UPPER_3_RUN2, ce.UPPER_3_RUN3, ce.UPPER_3_RUN4, ce.UPPER_3_RUN5, ce.UPPER_3_RUN6, ce.UPPER_3_RUN7, ce.UPPER_3_RUN8]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_RUN1, ce.LOWER_RUN2, ce.LOWER_RUN3, ce.LOWER_RUN4, ce.LOWER_RUN5, ce.LOWER_RUN6, ce.LOWER_RUN7, ce.LOWER_RUN8][s]
                }
                break;
            case 4:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_SERVE1],
                            [ce.UPPER_2_SERVE1],
                            [ce.UPPER_3_SERVE1]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_SERVE1][s]
                }
                break;
            case 5:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_SERVE1, ce.UPPER_1_SERVE2, ce.UPPER_1_SERVE3, ce.UPPER_1_SERVE4, ce.UPPER_1_SERVE5, ce.UPPER_1_SERVE6, ce.UPPER_1_SERVE7, ce.UPPER_1_SERVE8],
                            [ce.UPPER_2_SERVE1, ce.UPPER_2_SERVE2, ce.UPPER_2_SERVE3, ce.UPPER_2_SERVE4, ce.UPPER_2_SERVE5, ce.UPPER_2_SERVE6, ce.UPPER_2_SERVE7, ce.UPPER_2_SERVE8],
                            [ce.UPPER_3_SERVE1, ce.UPPER_3_SERVE2, ce.UPPER_3_SERVE3, ce.UPPER_3_SERVE4, ce.UPPER_3_SERVE5, ce.UPPER_3_SERVE6, ce.UPPER_3_SERVE7, ce.UPPER_3_SERVE8]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_SERVE1, ce.LOWER_SERVE2, ce.LOWER_SERVE3, ce.LOWER_SERVE4, ce.LOWER_SERVE5, ce.LOWER_SERVE6, ce.LOWER_SERVE7, ce.LOWER_SERVE8][s]
                }
                break;
            case 6:
            case 7:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_SWING1, ce.UPPER_1_SWING2, ce.UPPER_1_SWING3, ce.UPPER_1_SWING4, ce.UPPER_1_SWING5],
                            [ce.UPPER_2_SWING1, ce.UPPER_2_SWING2, ce.UPPER_2_SWING3, ce.UPPER_2_SWING4, ce.UPPER_2_SWING5],
                            [ce.UPPER_3_SWING1, ce.UPPER_3_SWING2, ce.UPPER_3_SWING3, ce.UPPER_3_SWING4, ce.UPPER_3_SWING5]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_SWING1, ce.LOWER_SWING2, ce.LOWER_SWING3, ce.LOWER_SWING4, ce.LOWER_SWING5][s]
                }
                break;
            case 8:
                switch (t._hx_index) {
                    case 0:
                        _ = [
                            [ce.UPPER_1_VICTORY1, ce.UPPER_1_VICTORY2, ce.UPPER_1_VICTORY3, ce.UPPER_1_VICTORY4],
                            [ce.UPPER_2_VICTORY1, ce.UPPER_2_VICTORY2, ce.UPPER_2_VICTORY3, ce.UPPER_2_VICTORY4],
                            [ce.UPPER_3_VICTORY1, ce.UPPER_3_VICTORY2, ce.UPPER_3_VICTORY3, ce.UPPER_3_VICTORY4]
                        ][e][s];
                        break;
                    case 1:
                        _ = [ce.LOWER_VICTORY1, ce.LOWER_VICTORY2, ce.LOWER_VICTORY3, ce.LOWER_VICTORY4][s]
                }
        }
        for (var a = [], r = 0, o = n; r < o;) {
            r++;
            null != _ && a.push(_)
        }
        return a
    },
    _joinArrays: function(t) {
        for (var e = [], i = 0; i < t.length;) {
            var s = t[i];
            ++i, e = e.concat(s)
        }
        return e
    },
    __class__: xe
});
var we = function(t, e, i, s, n, _, a, r, o, h, l) {
    x.call(this, t, e, i, s, n, _, a, r, o, h, l)
};

function Se(t, e, i, s) {
    null == s && (s = !1), null == i && (i = 100), null == e && (e = 100), this._assets = Di.__cast(t.assets, Wt), this._factory = Di.__cast(t.factory, zt), this._session = Di.__cast(t.get_session(), Kt), this._system = t.system, St.call(this, t, e, i, s)
}

function ve(t) {
    Se.call(this, t, 720, 405, !1)
}

function be(t, e) {
    this._sceneType = e, Se.call(this, t, t.factory.width, t.factory.height, !1)
}

function Pe(t, e, i, s, n, _, a, r, o) {
    null == n && (n = 0), null == s && (s = 0);
    var h = new wt(t),
        l = new wt(t);
    x.call(this, t, h, l, e, i, s, n, _, a, r, o)
}

function Re(t, e, i, s) {
    null == e && (e = 1), this._scale = e, Se.call(this, t, 192, 192, !1), this.setPosition(0 | i, 0 | s)
}

function Ue(t, e, i, s, n, _, a, r) {
    null == s && (s = 0), null == i && (i = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._title = e.toUpperCase(), this._buttonType = "TEXT", we.call(this, t, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, Math.round(i), Math.round(s), n, _, a, r)
}

function Te(t, e, i, s, n, _, a) {
    null == i && (i = 0), null == e && (e = 0), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SETTINGS", we.call(this, t, this._assets.overlayPauseUp, this._assets.overlayPauseOver, 50, 50, e, i, s, n, _, a)
}

function Ae(t, e, i, s, n, _, a, r) {
    null == s && (s = 0), null == i && (i = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SMALL", we.call(this, t, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, i, s, n, _, a, r), this.setTitle(e)
}

function Ce(t, e) {
    null == e && (e = !0), this._isAnimated = e, Se.call(this, t, 120, 32, !1)
}

function Ie(t, e, i) {
    this._MEDAL_WIDTH = 100, this._unitType = e, this._medalType = i, Se.call(this, t, 720, 405, !1)
}

function ke(t, e) {
    this._isCoinsVisible = e, this._isCoinsVisible = !0, Se.call(this, t, t.factory.width, t.factory.height, !1)
}(e["cbcten.gui.AButton"] = we).__name__ = "cbcten.gui.AButton", we.__super__ = x, we.prototype = t(x.prototype, {
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
        x.prototype._init.call(this), this._createHighlightView()
    },
    _updater: function(t) {
        null == t && (t = 0), x.prototype._updater.call(this, t), this._highlightBitmap.alpha = Math.sin(this._age / 200) / 8 + .5
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
    __class__: we
}), (e["cbcten.gui.AGuiEntity"] = Se).__name__ = "cbcten.gui.AGuiEntity", Se.__super__ = St, Se.prototype = t(St.prototype, {
    __class__: Se
}), (e["cbcten.gui.Action"] = ve).__name__ = "cbcten.gui.Action", ve.__super__ = Se, ve.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._context.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Action.png")))
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._bitmap.x = 30 * Math.sin(this._updates / 50) - 20
    },
    __class__: ve
}), (e["cbcten.gui.Bg"] = be).__name__ = "cbcten.gui.Bg", be.__super__ = Se, be.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._texture = this._assets.getAsset("assets/gui/BgDetail.jpg"), this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getAbstract())), this._bitmap.cache(0, 0, this.width, this.height), this._context.addChild(this._bitmap), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getAbstract()))), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getGradient()))), this._canvas = this._bitmap.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._pattern = this._context2d.createPattern(this._texture, "repeat"), this._context2d.fillStyle = this._pattern
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._draw()
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
    __class__: be
}), (e["cbcten.gui.BlankButton"] = Pe).__name__ = "cbcten.gui.BlankButton", Pe.__super__ = x, Pe.prototype = t(x.prototype, {
    _updater: function(t) {
        null == t && (t = 0);
        var e = this.get_view().context.localToGlobal(0, 0);
        this.get_view().globalX = e.x, this.get_view().globalY = e.y, x.prototype._updater.call(this, t)
    },
    __class__: Pe
}), (e["cbcten.gui.Burst"] = Re).__name__ = "cbcten.gui.Burst", Re.__super__ = Se, Re.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this);
        var t = this._scale,
            e = Math.random() < .5 ? -1 : 1;
        this._context.scaleX = t * e;
        t = this._scale, e = Math.random() < .5 ? -1 : 1;
        this._context.scaleY = t * e, this._context.compositeOperation = "lighter", this._context.mouseEnabled = !1, this._context.mouseChildren = !1, this._sprite = new createjs.Sprite(this._createSpriteSheet(), 0), this._context.addChild(this._sprite), this._drop = 0, this._context.alpha *= this._factory.accessibility.getAdjustedVisualsIntensity()
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._sprite.gotoAndStop(this._updates - 1), 16 <= this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())), this._drop += Math.random(), this._context.y += this._drop
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
    __class__: Re
}), (e["cbcten.gui.Button"] = Ue).__name__ = "cbcten.gui.Button", Ue.__super__ = we, Ue.prototype = t(we.prototype, {
    _init: function() {
        we.prototype._init.call(this);
        var t = 19;
        new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
        var e = this.width - 10,
            i = this.height - t,
            s = this._kernel.factory.createTextStyle(Mt.BUTTON);
        this._textUp = new Ye(this._kernel, e, i, this._title, s), this._textOver = new Ye(this._kernel, e, i, this._title, s), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
    },
    setTitle: function(t) {
        this._title != t && (this._title = t.toUpperCase(), this._textUp.set_text(this._textOver.set_text(this._title)))
    },
    onRollOver: function() {
        we.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Rt.INTERFACE, 0, 0, .25)
    },
    __class__: Ue
}), (e["cbcten.gui.ButtonSettings"] = Te).__name__ = "cbcten.gui.ButtonSettings", Te.__super__ = we, Te.prototype = t(we.prototype, {
    __class__: Te
}), (e["cbcten.gui.ButtonSmall"] = Ae).__name__ = "cbcten.gui.ButtonSmall", Ae.__super__ = we, Ae.prototype = t(we.prototype, {
    _init: function() {
        we.prototype._init.call(this);
        var t = 5;
        new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
        var e = this.width - 10,
            i = this.height - t,
            s = this._kernel.factory.createTextStyle(Mt.BUTTON);
        s.size = 12, this._textUp = new Ye(this._kernel, e, i, this._title, s), (s = this._kernel.factory.createTextStyle(Mt.BUTTON)).size = 12, this._textOver = new Ye(this._kernel, e, i, this._title, s), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
    },
    _updater: function(t) {
        null == t && (t = 0);
        var e = this.get_view().context.localToGlobal(0, 0);
        this.get_view().globalX = e.x, this.get_view().globalY = e.y, we.prototype._updater.call(this, t)
    },
    setTitle: function(t) {
        this._title = t, this._title = this._title.toUpperCase(), this._textUp.set_text(this._title), this._textOver.set_text(this._title)
    },
    onRollOver: function() {
        we.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Rt.INTERFACE, 0, 0, .25)
    },
    onClick: function() {
        we.prototype.onClick.call(this), this.isOver = !1
    },
    __class__: Ae
}), (e["cbcten.gui.Coins"] = Ce).__name__ = "cbcten.gui.Coins", Ce.__super__ = Se, Ce.prototype = t(Se.prototype, {
    _init: function() {
        var t = this;
        Se.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.getCoins(), this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/game/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 0, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/game/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(320, 0, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._bitmap.y = 3, this._context.addChild(this._bitmap);
        var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
        this._title = new Ye(this._kernel, this._bitmap.x - 5, 20, T.string(this._kernel.getConfig("gui.scenes.game.hud.coins")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new Ye(this._kernel, this._bitmap.x - 5, 35, T.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._message.setPosition(.85 * this._message.width - 1, .5 * this._message.height + 5), this._message._context.regX = .85 * this._message.width, this._message._context.regY = .5 * this._message.height, this._session.get_isTester() && this.addEntity(new Pe(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
            t._session.setCoins(null, t._session.getCoins() + 100)
        }), null, !0, 10), this.addEntity(this._message, null, !0, 1)
    },
    _updater: function(t) {
        null == t && (t = 0);
        var e, i = this;
        Se.prototype._updater.call(this, t), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), this._age < 3e3 || (this._prevCoins != this._session.getCoins() && (this._kernel.audio.start("Coin", Rt.INTERFACE, 0, 0, .65, null, !1), null != this._tweezer && ((e = this._tweezer).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())), this.addEntity(this._tweezer = new Fi(this._kernel, function(t) {
            i._message._context.scaleX = i._message._context.scaleY = t
        }, 1.75, 1, 0, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC))), this._prevCoins = this._session.getCoins(), this._displayValue != this._session.getCoins() && (e = this._tools, this._displayValue = Math.round(.9 * this._displayValue + .1 * this._session.getCoins()), Math.abs(this._displayValue - this._session.getCoins()) < 5 && (this._displayValue = this._session.getCoins()), this._message.set_text(T.string(this._displayValue))))
    },
    __class__: Ce
}), (e["cbcten.gui.Hero"] = Ie).__name__ = "cbcten.gui.Hero", Ie.__super__ = Se, Ie.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._container = new createjs.Container, this._context.addChild(this._container), this._container.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getImage()))), this._medalBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HeroMedals.png"));
        var t = this._getMedalCol() * this._MEDAL_WIDTH;
        this._medalBitmap.sourceRect = new createjs.Rectangle(t, 0, this._MEDAL_WIDTH, this.height), this._medalBitmap.x = .5 * (this.width - this._MEDAL_WIDTH), this._medalType != ae.MEDAL_NONE && this._container.addChild(this._medalBitmap)
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._container.x = 10 * Math.sin(this._updates / 50)
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
    __class__: Ie
}), (e["cbcten.gui.Hud"] = ke).__name__ = "cbcten.gui.Hud", ke.__interfaces__ = [p], ke.__super__ = Se, ke.prototype = t(Se.prototype, {
    _init: function() {
        var e = this;
        Se.prototype._init.call(this);
        var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
        t.sourceRect = new createjs.Rectangle(0, 0, this.width, 80), this._context.addChild(t), this._coins = new Ce(this._kernel, !1), this.addEntity(this._coins, null, this._isCoinsVisible, 100), this._coins.setPosition(540, 12), this._score = new Ne(this._kernel), this.addEntity(this._score, null, !0, 100), this._score.setPosition(15, 12), this._alert = new De(this._kernel), this.addEntity(this._alert, null, !0, 90), this._alert.setPosition(.5 * (this.width - this._alert.width), .5 * (this.height - this._alert.height)), this._timing = new Me(this._kernel), this.addEntity(this._timing, null, !0, 15), this._timing.setPosition(.5 * this.width, .85 * (this.height - this._timing.height)), this._prompt = new Le(this._kernel), this.addEntity(this._prompt, null, !0, 20), this._prompt.setPosition(.5 * (this.width - this._prompt.width), .6 * (this.height - this._prompt.height)), this._skill = new Oe(this._kernel), this.addEntity(this._skill, null, !0, 50), this._skill.setPosition(.5 * (this.width - this._skill.width), this.height - this._skill.height - 30), this.addEntity(new Fi(this._kernel, function(t) {
            e._score.set_y(t)
        }, -100, this._score.y, 1e3, 1e3, 0, Oi.EASE_OUT, Mi.QUARTIC)), this.addEntity(new Fi(this._kernel, function(t) {
            e._coins.set_y(t)
        }, -100, this._coins.y, 3e3, 1e3, 0, Oi.EASE_OUT, Mi.QUARTIC))
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t)
    },
    configureScore: function(t, e) {
        this._score.configure(t, e)
    },
    configureAlert: function(t) {
        this._alert.configure(t)
    },
    configurePrompt: function(t, e) {
        null == e && (e = !1), this._prompt.configure(t, e)
    },
    configureTiming: function(t) {
        this._timing.configure(t)
    },
    positionTiming: function(t, e) {
        this._timing.setPosition(t, e)
    },
    configureSkill: function(t) {
        this._skill.configure(t)
    },
    __class__: ke
});
var De = function(t) {
    Se.call(this, t, 500, 80, !1)
};
(e["cbcten.gui.HudAlert"] = De).__name__ = "cbcten.gui.HudAlert", De.__super__ = Se, De.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this);
        var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_ALERT);
        this._title = new Ye(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10)
    },
    configure: function(t) {
        var e, i, s, n = this;
        "___" != t && (this._value = t, this._title.set_text(t.toUpperCase()), this._context.alpha = 1, this._context.uncache(), e = qi(h = this._context, h.cache), i = this.width, s = this.height, li.delay(function() {
            e(0, 0, i, s)
        }, 100), null != this._tweezer && ((t = this._tweezer).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezer = new Fi(this._kernel, function(t) {
            n._context.alpha = t
        }, 1, 0, 1e3, 500, 0, Oi.EASE_OUT, Mi.QUARTIC)))
    },
    __class__: De
});
var Le = function(t) {
    Se.call(this, t, 300, 30, !1)
};
(e["cbcten.gui.HudPrompt"] = Le).__name__ = "cbcten.gui.HudPrompt", Le.__super__ = Se, Le.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this);
        var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_PROMPT);
        this._title = new Ye(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10)
    },
    configure: function(t, e) {
        var i, s, n;
        null == e && (e = !1), "___" != t && (e && this._value == t || (this._value = t, this._title.set_text(t.toUpperCase()), this._context.alpha = 1, this._context.uncache(), i = qi(h = this._context, h.cache), s = this.width, n = this.height, li.delay(function() {
            i(0, 0, s, n)
        }, 100), this._transitionIn()))
    },
    _transitionIn: function() {
        var t, e = this;
        null != this._tweezerIn && ((t = this._tweezerIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezerOut && ((t = this._tweezerOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezerIn = new Fi(this._kernel, function(t) {
            e._context.alpha = t
        }, 0, 1, 0, 250, 0, Oi.EASE_IN, Mi.QUARTIC, qi(this, this._transitionOut)))
    },
    _transitionOut: function() {
        var t, e = this;
        null != this._tweezerIn && ((t = this._tweezerIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), null != this._tweezerOut && ((t = this._tweezerOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezerOut = new Fi(this._kernel, function(t) {
            e._context.alpha = t
        }, 1, 0, 750, 250, 0, Oi.EASE_OUT, Mi.QUARTIC, function() {
            e._value = ""
        }))
    },
    __class__: Le
});
var Ne = function(t, e) {
    null == e && (e = !0), this._isAnimated = e, Se.call(this, t, 210, 60, !1)
};
(e["cbcten.gui.HudScore"] = Ne).__name__ = "cbcten.gui.HudScore", Ne.__super__ = Se, Ne.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._flag1 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._flag1.sourceRect = this._getFlagRectangle(null), this._flag1.x = 0, this._flag1.y = -5, this._context.addChild(this._flag1), this._flag2 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._flag2.sourceRect = this._getFlagRectangle(this._session.cache.levelType), this._flag2.x = this.width - 70, this._flag2.y = -5, this._context.addChild(this._flag2);
        var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
        t.align = Ot.CENTER, this._title = new Ye(this._kernel, this.width, 20, T.string(this._kernel.getConfig("gui.scenes.game.hud.score")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new Ye(this._kernel, this.width, 200, "-", this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_SCORE)), this._message.setPosition(0, 5), this.addEntity(this._message, null, !0, 10), this._playerScore = {
            value: 0,
            message: null,
            tweezer: null
        }, this._opponentScore = {
            value: 0,
            message: null,
            tweezer: null
        };
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_SCORE);
        t.align = Ot.RIGHT, this._playerScore.message = new Ye(this._kernel, 30, 35, "0", t), this._playerScore.message.setPosition(.5 * this.width - 10 - .25 * this._playerScore.message.width, .5 * this._playerScore.message.height + 5), this._playerScore.message._context.regX = .75 * this._playerScore.message.width, this._playerScore.message._context.regY = .5 * this._playerScore.message.height, this.addEntity(this._playerScore.message, null, !0, 10), (t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)).align = Ot.LEFT, this._opponentScore.message = new Ye(this._kernel, 30, 35, "0", t), this._opponentScore.message.setPosition(.5 * this.width + 10 + .25 * this._playerScore.message.width, .5 * this._opponentScore.message.height + 5), this._opponentScore.message._context.regX = .25 * this._opponentScore.message.width, this._opponentScore.message._context.regY = .5 * this._opponentScore.message.height, this.addEntity(this._opponentScore.message, null, !0, 10)
    },
    configure: function(t, e) {
        var i, s = this;
        this._playerScore.value != t && (this._playerScore.value = t, this._playerScore.message.set_text(T.string(this._playerScore.value)), null != this._playerScore.tweezer && ((i = this._playerScore.tweezer).isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())), this.addEntity(this._playerScore.tweezer = new Fi(this._kernel, function(t) {
            s._playerScore.message._context.scaleX = s._playerScore.message._context.scaleY = t
        }, 1.75, 1, 0, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC))), this._opponentScore.value != e && (this._opponentScore.value = e, this._opponentScore.message.set_text(T.string(this._opponentScore.value)), null != this._opponentScore.tweezer && ((i = this._opponentScore.tweezer).isDisposed || (i.isDisposed = !0, i.set_isActive(!1), i._disposer())), this.addEntity(this._opponentScore.tweezer = new Fi(this._kernel, function(t) {
            s._opponentScore.message._context.scaleX = s._opponentScore.message._context.scaleY = t
        }, 1.75, 1, 0, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC)))
    },
    _getFlagRectangle: function(t) {
        if (null == t) return new createjs.Rectangle(720, 0, 70, 46);
        switch (t._hx_index) {
            case 0:
                return new createjs.Rectangle(790, 0, 70, 46);
            case 1:
                return new createjs.Rectangle(860, 0, 70, 46);
            case 2:
                return new createjs.Rectangle(930, 0, 70, 46)
        }
    },
    __class__: Ne
});
var Oe = function(t) {
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
    }, Se.call(this, t, 100, 100, !1)
};
(e["cbcten.gui.HudSkill"] = Oe).__name__ = "cbcten.gui.HudSkill", Oe.__super__ = Se, Oe.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._source = this._assets.getAsset("assets/gui/Hud.png"), this._bitmaps = {
            up: new createjs.Bitmap(this._source),
            over: new createjs.Bitmap(this._source),
            arrowFill: new createjs.Bitmap(this._source),
            arrowBorder: new createjs.Bitmap(this._source),
            gradient: new createjs.Bitmap(this._source)
        };
        this._bitmaps.up.sourceRect = new createjs.Rectangle(0 * this.width, 80, this.width, this.height), this._bitmaps.over.sourceRect = new createjs.Rectangle(this.width, 80, this.width, this.height), this._bitmaps.arrowFill.sourceRect = new createjs.Rectangle(2 * this.width, 80, this.width, this.height), this._bitmaps.arrowBorder.sourceRect = new createjs.Rectangle(3 * this.width, 80, this.width, this.height), this._bitmaps.gradient.sourceRect = new createjs.Rectangle(4 * this.width, 80, this.width, this.height), this._bitmaps.gradient.cache(0, 0, this.width, this.height), this._mask = new createjs.Shape, this._mask.x = this._mask.regX = .5 * this.width, this._mask.y = this._mask.regY = .5 * this.height, this._mask.rotation = -90, this._mask.visible = !1, this._bitmaps.gradient.mask = this._mask, this._arrowTint = new createjs.Shape, this._arrow = new createjs.Container, this._arrow.addChild(this._bitmaps.arrowFill), this._arrow.addChild(this._arrowTint), this._arrow.addChild(this._bitmaps.arrowBorder), this._arrow.x = this._arrow.regX = .5 * this.width, this._arrow.y = this._arrow.regY = .5 * this.height, this._container = new createjs.Container, this._container.addChild(this._mask), this._context.addChild(this._container), this._container.addChild(this._bitmaps.gradient), this._container.addChild(this._arrow), this._container.addChild(this._bitmaps.up), this._container.addChild(this._bitmaps.over), this._reset()
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._values.isConfigured && (this._container.alpha = .75 * this._container.alpha + .25, this._values.isDirty ? (this._bitmaps.up.visible = !this._values.isChanged, this._bitmaps.over.visible = this._values.isChanged, this._rotate(this._values.actual)) : (this._createBurst(.25, this._values.isPenalty ? 0 : this._values.actual), this._bitmaps.up.visible = !1, this._bitmaps.over.visible = !1, this._arrowTint.visible = !0, this._rotate(this._values.actual), this._tint(this._values.actual), 1 == this._values.actual ? (this._createTweezerSpin(), this._createTweezerTransitionOut()) : (this._values.isPenalty && this._kernel.audio.start("Penalty", Rt.INTERFACE, 0, 0, .1, null, !1), this._createTweezerShake()), this._values.isConfigured = !1)), this._values.isDirty = !1, this._values.isChanged = !1
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
        return "#" + l.hex(i[0] << 16 | i[1] << 8 | i[2])
    },
    _createTweezerShake: function() {
        var t, e = this;
        null != this._tweezers.shake && ((t = this._tweezers.shake).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.shake = new Fi(this._kernel, function(t) {
            e._rotate(e._values.actual + .2 * t * (1.2 - e._values.actual) * (e._values.isPenalty ? 1 : -1))
        }, 1, 0, 0, 150 * (this._values.isPenalty ? 2 : 1), 0, Oi.EASE_OUT, Mi.BOUNCE, qi(this, this._createTweezerTransitionOut)))
    },
    _createTweezerSpin: function() {
        var t, e = this;
        null != this._tweezers.spin && ((t = this._tweezers.spin).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.spin = new Fi(this._kernel, function(t) {
            e._createBurst(.25, t)
        }, 0, 1, 0, 400, 0, Oi.EASE_OUT, Mi.LINEAR))
    },
    _createTweezerTransitionIn: function() {
        var t, e = this;
        null != this._tweezers.transitionIn && ((t = this._tweezers.transitionIn).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezers.transitionIn = new Fi(this._kernel, function(t) {
            e._container.alpha = t
        }, 0, 1, 0, 250, 0, Oi.EASE_IN, Mi.QUARTIC))
    },
    _createTweezerTransitionOut: function() {
        var t, e = this;
        null != this._tweezers.transitionOut && ((t = this._tweezers.transitionOut).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this._container.cache(0, 0, this.width, this.height), this.addEntity(this._tweezers.transitionOut = new Fi(this._kernel, function(t) {
            e._container.alpha = t
        }, 1, 0, 150, 250, 0, Oi.EASE_OUT, Mi.QUARTIC, qi(this, this._reset)))
    },
    _reset: function() {
        this._container.uncache(), this._container.alpha = 0, this._arrowTint.visible = !1, this._bitmaps.up.visible = !0, this._bitmaps.over.visible = !1, this._values.actual = 0, this._values.isConfigured = !1, this._values.isDirty = !1, this._values.isPenalty = !1
    },
    _createBurst: function(t, e) {
        var i = Math.round(Math.cos((e - .25) * Math.PI * 2) * (.35 * this.width) + .5 * this.width),
            e = Math.round(Math.sin((e - .25) * Math.PI * 2) * (.35 * this.width) + .5 * this.height),
            e = new Re(this._kernel, t, i, e);
        return this.addEntity(e, null, !0, 10), e
    },
    configure: function(t) {
        t < 0 && (t = .5, this._values.isPenalty = !0), this._values.isConfigured || this._createTweezerTransitionIn(), 1 < t ? t = 1 : t < 0 && (t = 0), this._values.isChanged = t != this._values.actual, this._values.actual = t, this._values.isConfigured = !0, this._values.isDirty = !0
    },
    __class__: Oe
});
var Me = function(t) {
    this._nextPosition = {
        x: 0,
        y: 0
    }, Se.call(this, t, 200, 35, !1)
};

function Be(t, e, i, s) {
    null == s && (s = 1), null == i && (i = !1), this._imageElement = e, this._isAdd = i, Se.call(this, t, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(s)
}(e["cbcten.gui.HudTiming"] = Me).__name__ = "cbcten.gui.HudTiming", Me.__super__ = Se, Me.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this);
        var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TIMING);
        this._title = new Ye(this._kernel, this.width, 20, "", t), this.addEntity(this._title, null, !0, 10), this._title.set_x(.5 * -this.width)
    },
    configure: function(t) {
        var e, i = this;
        switch (Se.prototype.setPosition.call(this, this._nextPosition.x, this._nextPosition.y), t._hx_index) {
            case 0:
                e = "gui.scenes.game.hud.timing.tooEarly";
                break;
            case 1:
                e = "gui.scenes.game.hud.timing.early";
                break;
            case 2:
                e = "gui.scenes.game.hud.timing.good";
                break;
            case 3:
                e = "gui.scenes.game.hud.timing.perfect";
                break;
            case 4:
                e = "gui.scenes.game.hud.timing.great";
                break;
            case 5:
                e = "gui.scenes.game.hud.timing.late";
                break;
            case 6:
                e = "gui.scenes.game.hud.timing.tooLate"
        }
        t = T.string(this._kernel.getConfig(e)).toUpperCase();
        this._title.set_text(t), null != this._tweezer && ((t = this._tweezer).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezer = new Fi(this._kernel, function(t) {
            i._context.alpha = 1 - t, i._title.set_y(10 - 100 * t)
        }, 0, 1, 100, 500, 0, Oi.EASE_IN, Mi.QUARTIC))
    },
    setPosition: function(t, e) {
        this._nextPosition.x = t, this._nextPosition.y = e
    },
    __class__: Me
}), (e["cbcten.gui.Image"] = Be).__name__ = "cbcten.gui.Image", Be.__super__ = Se, Be.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
    },
    set_alpha: function(t) {
        return this._bitmap.alpha = t
    },
    __class__: Be
});
var Fe = function(t) {
    this._assetManager = Di.__cast(t.assets, Wt), this._factory = Di.__cast(t.factory, zt), this._buttonSize = 50, pt.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
};

function Ve(t, e) {
    this._isSmall = e, Se.call(this, t, this._isSmall ? 230 : 380, this._isSmall ? 190 : 240, !1)
}

function We(t, e) {
    this._type = e, Ve.call(this, t, !0)
}

function Ge(t, e) {
    this._medalType = e, this._delayInitial = 1500, this._delayMedal = 750, Ve.call(this, t, !0)
}

function ze(t, e) {
    this._type = e, Ve.call(this, t, !1)
}

function He(t, e) {
    this._statHeight = 12, this._statWidth = 8, this._type = e, Ve.call(this, t, !0)
}(e["cbcten.gui.Overlay"] = Fe).__name__ = "cbcten.gui.Overlay", Fe.__super__ = pt, Fe.prototype = t(pt.prototype, {
    _init: function() {
        pt.prototype._init.call(this), this._buttonPause.remove(!0), this._buttonPause = new Te(this._kernel, null, null, null, this._buttonPause.onClickCallback, this._buttonPause.onRollOverCallback, this._buttonPause.onRollOutCallback), this.addEntity(this._buttonPause, null, !0, 25);
        var t = this._kernel.factory.width - this._buttonSize - 5;
        this.positionButton(Lt.PAUSE, t, 4), this.positionButton(Lt.UNPAUSE, -this._buttonSize - 10, 4), this.positionButton(Lt.BACK, -this._buttonSize - 10, 4), this.positionButton(Lt.MUTE, -this._buttonSize - 10, 4), this.positionButton(Lt.UNMUTE, -this._buttonSize - 10, 4), this._flashView.set_isVisible(!0), this._pauseMenu = new je(this._kernel), this.set_pauseEntity(this._pauseMenu)
    },
    flash: function(t, e, i, s) {
        null == s && (s = 16777215), null == i && (i = 1), null == e && (e = !0), i *= this._factory.accessibility.getAdjustedVisualsIntensity(), this._flashContext.compositeOperation = 0 == s ? "source-over" : "lighter", pt.prototype.flash.call(this, t, e, i, s)
    },
    _drawPause: function(t) {
        null == t && (t = !0), pt.prototype._drawPause.call(this, t), this._pauseMenu.pauseHandler(t)
    },
    __class__: Fe
}), (e["cbcten.gui.Panel"] = Ve).__name__ = "cbcten.gui.Panel", Ve.__super__ = Se, Ve.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this.set_y(Math.round(.5 * (this._factory.height - this.height))), this.addEntity(new f(this._kernel, null, this._bgContext = new createjs.Container), null, !0, 1), this._bgContext.alpha = .5, this.addEntity(new Be(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallBg.png" : "assets/gui/PanelBigBg.png")), null, !0, 2), this.addEntity(new f(this._kernel, null, this._fgContext = new createjs.Container), null, !0, 999), this.addEntity(new Be(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallFg.png" : "assets/gui/PanelBigFg.png")), null, !0, 1e3)
    },
    __class__: Ve
}), (e["cbcten.gui.PanelLevel"] = We).__name__ = "cbcten.gui.PanelLevel", We.__super__ = Ve, We.prototype = t(Ve.prototype, {
    _init: function() {
        Ve.prototype._init.call(this), this.vo = new ge(this._kernel, this._type), this._bgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevelBg.png"));
        var t = this._getBgCol() * this.width;
        this._bgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._bgContext.addChild(this._bgBitmap), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevel.png"));
        t = this._getFgCol() * this.width;
        this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
        t.spacingVertical = 16, this._title = new Ye(this._kernel, 125, this.height - 60, this._getTitle().toUpperCase(), t), this._title.setPosition(0, 72), this.addEntity(this._title, null, !0, 10);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
        this._message = new Ye(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10)
    },
    _getTitle: function() {
        var t = "";
        return t += this.vo.title, this.vo.isLocked || this.vo.isNew ? this.vo.isNew ? t += "\n" + T.string(this._kernel.getConfig("gui.scenes.selectLevel.new")).toUpperCase() : this.vo.isLocked && (t += "\n" + T.string(this._kernel.getConfig("gui.scenes.selectLevel.locked")).toUpperCase()) : t += "\n" + this._session.getMedalTitle(this.vo.medalType), t
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
    __class__: We
}), (e["cbcten.gui.PanelResult"] = Ge).__name__ = "cbcten.gui.PanelResult", Ge.__super__ = Ve, Ge.prototype = t(Ve.prototype, {
    _init: function() {
        Ve.prototype._init.call(this), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelResult.png")), this._fgBitmap.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
        var t, e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
        switch (this._message = new Ye(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), e), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10), this._medalType._hx_index) {
            case 0:
                t = [];
                break;
            case 1:
                t = [ae.MEDAL_BRONZE];
                break;
            case 2:
                t = [ae.MEDAL_BRONZE, ae.MEDAL_SILVER];
                break;
            case 3:
                t = [ae.MEDAL_BRONZE, ae.MEDAL_SILVER, ae.MEDAL_GOLD]
        }
        for (var i = this._delayInitial, s = 0; s < t.length;) {
            var n = t[s];
            ++s, i += this._delayMedal, this.addEntity(new bt(this._kernel, function(t, e) {
                return function() {
                    t[0](e[0])
                }
            }([qi(this, this._showMedal)], [n]), i))
        }
    },
    _showMedal: function(t) {
        var e = this._getFgCol(t);
        this._fgBitmap.sourceRect.x = e * this.width;
        t = t._hx_index;
        this.addEntity(new Re(this._kernel, 1, 40 * (t + 1), 70), null, !0, 1e3), this._kernel.overlay.flash(100 * t + 100, !0, .3 * t), 0 < t && (this._kernel.audio.start("CrowdScore", Rt.INTERFACE, 1, 0, .5 * t), this._kernel.audio.start("Medal" + t, Rt.INTERFACE, 1, 0, .5 * t))
    },
    _getMessage: function() {
        var t = "";
        return t += T.string(this._kernel.getConfig("gui.scenes.results.message")) + " ", t += this._session.getMedalTitle(this._medalType) + "\n"
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
    __class__: Ge
}), (e["cbcten.gui.PanelShop"] = ze).__name__ = "cbcten.gui.PanelShop", ze.__super__ = Ve, ze.prototype = t(Ve.prototype, {
    _init: function() {
        Ve.prototype._init.call(this), this.vo = new xe(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
        var t = this._getFgCol() * this.width;
        this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
        t = new Ce(this._kernel);
        t.setPosition(215, 43), this.addEntity(t, null, !0, 30);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
        this._message = new Ye(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
        this._title = new Ye(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
        for (var e = 86, i = [de.UPGRADE_MOVEMENT, de.UPGRADE_TIMING, de.UPGRADE_POWER, de.UPGRADE_SPIN], s = 0; s < i.length;) {
            var n = i[s];
            ++s;
            n = this._createUpgrade(n, this._type, 0, e);
            this.addEntity(n, null, !0, 15), e += 0 | n.height
        }
    },
    _createUpgrade: function(t, e, i, s) {
        t = new Xe(this._kernel, t, this.vo);
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
    __class__: ze
}), (e["cbcten.gui.PanelUnit"] = He).__name__ = "cbcten.gui.PanelUnit", He.__super__ = Ve, He.prototype = t(Ve.prototype, {
    _init: function() {
        Ve.prototype._init.call(this), this.vo = new xe(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
        var t = this._getFgCol() * this.width;
        this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
        this._message = new Ye(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
        t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
        this._title = new Ye(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
        for (var e = 80, i = [de.UPGRADE_MOVEMENT, de.UPGRADE_TIMING, de.UPGRADE_POWER, de.UPGRADE_SPIN], s = 0; s < i.length;) {
            var n = i[s];
            ++s;
            n = this._createBar(n);
            n.set_y(e), e += n.height, this.addEntity(n, null, !0, 15)
        }
    },
    _createBar: function(t) {
        var e = new Se(this._kernel, this.width, this._statHeight + 2, !1),
            i = this._title.textStyle.clone();
        i.size = 16;
        i = new Ye(this._kernel, this._message.width, e.height, this._session.getUpgradeTitle(t).toUpperCase(), i);
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
    __class__: He
});
var je = function(t) {
    Bt.call(this, t)
};
(e["cbcten.gui.PauseMenu"] = je).__name__ = "cbcten.gui.PauseMenu", je.__super__ = Bt, je.prototype = t(Bt.prototype, {
    _init: function() {
        var t = this;
        Bt.prototype._init.call(this), this.addEntity(this._debugText = new Ye(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(Mt.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
        var e = Math.round((this._kernel.factory.width - 200) / 2),
            i = Math.round((this._kernel.factory.height - 65 * (this._isFullScreenSupported() ? 4 : 3)) / 2);
        this.addEntity(new Ue(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), e, i, null, function() {
            t._kernel.overlay.activateButton(Lt.UNPAUSE)
        }), Pt.ALWAYS, !0, 1), this.addEntity(this._audioButton = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.audioOff"), e, i += 65, null, function() {
            t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._factory.accessibility.setAudioIsMute(t._kernel.overlay._wasMute), t._kernel.overlay.activateButton(Lt.UNPAUSE)
        }), Pt.ALWAYS, !0, 1), this._isFullScreenSupported() && this.addEntity(this._fullScreenButton = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.fullScreenOn"), e, i += 65, null, function() {
            t._stageClick(), t._kernel.overlay.activateButton(Lt.UNPAUSE)
        }), Pt.ALWAYS, !0, 1), this.addEntity(new Ue(this._kernel, this._kernel.getConfig("gui.buttons.back"), e, i += 65, null, function() {
            t._kernel.overlay.activateButton(Lt.UNPAUSE), t._kernel.scenes.back()
        }), Pt.DEFEND, !0, 1), this.addEntity(new Ue(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), e, i, null, function() {
            t._kernel.overlay.activateButton(Lt.UNPAUSE), t._pressInstructions()
        }), Pt.STANDARD, !0, 1)
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
        this._kernel._stage.removeEventListener("click", qi(this, this._stageClick), !0), Bt.prototype._disposer.call(this)
    },
    _pressInstructions: function() {
        try {
            this._kernel.scenes.get_scene()._pressInstructions()
        } catch (t) {
            this._kernel.scenes.setScene(Nt.INSTRUCTIONS)
        }
    },
    _updater: function(t) {
        null == t && (t = 0), Bt.prototype._updater.call(this, t), this._isFullScreenClicked = !1
    },
    pauseHandler: function(t) {
        var e = this;
        t ? (this._audioButton.setTitle(this._kernel.getConfig(this._kernel.audio.isMute ? "gui.buttons.audioOn" : "gui.buttons.audioOff")), null != this._fullScreenButton && this._fullScreenButton.setTitle(this._kernel.getConfig(this._isFullScreenEnabled() ? "gui.buttons.fullScreenOff" : "gui.buttons.fullScreenOn")), this._kernel._stage.addEventListener("click", qi(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new Fi(this._kernel, function(t) {
            e._context.y = t
        }, this._factory.height, 0, 0, 500, null, Oi.EASE_OUT, Mi.QUARTIC)), this._factory.accessibility.buttonsRegister(this, null, 500)) : (this._kernel._stage.removeEventListener("click", qi(this, this._stageClick), !0), this._factory.accessibility.buttonsRevert())
    },
    _stageClick: function(t) {
        this._kernel.isActive || null != this._fullScreenButton && (this._isFullScreenClicked || this._fullScreenButton.isOver && (this._isFullScreenEnabled() ? this._kernel.system.requestExitFullScreen() : (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()), this._isFullScreenClicked = !0, null != t && t.stopPropagation(), this._kernel.overlay.activateButton(Lt.UNPAUSE)))
    },
    __class__: je
});
var Ye = function(t, e, i, s, n, _, a, r) {
    null == r && (r = 1), null == a && (a = !1), null == _ && (_ = !1), null == s && (s = ""), s = l.replace(s, "<BR/>", "\n"), s = l.replace(s, "<br/>", "\n"), vt.call(this, t, e, i, s, n, _, a), this.set_alpha(r)
};

function Ke(t, e, i) {
    this._big = e, this._small = i, Se.call(this, t, 360, 200, !1)
}

function Qe(t, e) {
    this._title = e, Se.call(this, t, 350, 40, !1)
}(e["cbcten.gui.Text"] = Ye).__name__ = "cbcten.gui.Text", Ye.__super__ = vt, Ye.prototype = t(vt.prototype, {
    _init: function() {
        vt.prototype._init.call(this), this._textField.textBaseline = "alphabetic", this._textField.y += 1.15 * this.textStyle.size, this._prevTextStyle = "invalidated"
    },
    set_alpha: function(t) {
        return this._context.alpha = t
    },
    __class__: Ye
}), (e["cbcten.gui.TitleBig"] = Ke).__name__ = "cbcten.gui.TitleBig", Ke.__super__ = Se, Ke.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this);
        this._textBig = new Ye(this._kernel, this.width, 30, "", this._factory.createTextStyle(Mt.OVERSIZED), !1, !1, 1), this._textBig.setPosition(-1, 20), this.addEntity(this._textBig, null, !0, 1), this._textSmall = new Ye(this._kernel, this.width, 30, "", this._factory.createTextStyle(Mt.SUBHEAD), !1, !1, .5), this._textSmall.setPosition(0, 10), this.addEntity(this._textSmall, null, !0, 1), this.configure(this._big, this._small)
    },
    configure: function(t, e) {
        this._big = t, this._small = e, this._textBig.set_text(this._big.toUpperCase()), this._textSmall.set_text(this._small.toUpperCase())
    },
    __class__: Ke
}), (e["cbcten.gui.TitleSmall"] = Qe).__name__ = "cbcten.gui.TitleSmall", Qe.__super__ = Se, Qe.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._text = new Ye(this._kernel, this.width, 30, "", this._factory.createTextStyle(Mt.HEADLINE), !1, !1, 1), this._text.setPosition(0, 7), this.addEntity(this._text, null, !0, 1), this.set_x((this._factory.width - this.width) / 2), this.configure(this._title)
    },
    configure: function(t) {
        this._title = t, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
    },
    __class__: Qe
});
var Xe = function(t, e, i) {
    this._statHeight = 24, this._statWidth = 16, this._MAX_STATS = 8, this._type = e, this._unitVo = i, Se.call(this, t, 380, 28, !1)
};

function Je(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, V.call(this, t, e, i = !0, s, n)
}(e["cbcten.gui.Upgrade"] = Xe).__name__ = "cbcten.gui.Upgrade", Xe.__super__ = Se, Xe.prototype = t(Se.prototype, {
    _init: function() {
        Se.prototype._init.call(this), this._prevCoins = this._session.getCoins(), (e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE)).size -= 4;
        var t = new Ye(this._kernel, 112, this.height, this._session.getUpgradeTitle(this._type).toUpperCase(), e);
        t.set_y(1), this.addEntity(t, null, !0, 1), this._bars = new createjs.Container, this._bars.x = 123, this._context.addChild(this._bars), this._button = new Ae(this._kernel, "", 245, -2, null, qi(this, this.buy)), this._session.get_isTester() && this.addEntity(new Pe(this._kernel, this._statWidth * this._MAX_STATS, this._statHeight, this._bars.x, 0, null, qi(this, this._reduce)), null, !0, 1);
        var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
        this._message = new Ye(this._kernel, 100, 20, "", e, null, null, .5), this._message.setPosition(244, 4), this.addEntity(this._message, null, !0, 29), this.configure()
    },
    _updater: function(t) {
        null == t && (t = 0), Se.prototype._updater.call(this, t), this._prevCoins != this._session.getCoins() && (this._prevCoins = this._session.getCoins(), this.configure())
    },
    configure: function() {
        this._bars.removeAllChildren();
        var t = this._unitVo.getTotal(this._type),
            e = this._getPrice(t + 1),
            i = e <= this._session.getCoins();
        this._button.setTitle(T.string(this._kernel.getConfig("gui.buttons.buy")) + " " + e), t == this._MAX_STATS ? (this._button.remove(!0), this._message.set_text(T.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : i ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == e ? "null" : "" + e));
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
        t <= this._session.getCoins() && (this._session.setCoins(null, this._session.getCoins() - t), this._session.setUpgrade(this._type, this._unitType, this._unitVo.getUpgrade(this._type) + 1), this.configure(), this._kernel.audio.start("Coin", Rt.INTERFACE, 0, 0, .5))
    },
    _reduce: function() {
        this._session.setUpgrade(this._type, this._unitType, this._session.getUpgrade(this._type, this._unitType) - 1), this.configure()
    },
    __class__: Xe
}), (e["cbcten.scenes.AScene"] = Je).__name__ = "cbcten.scenes.AScene", Je.__super__ = V, Je.prototype = t(V.prototype, {
    _init: function() {
        V.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(Pt.STANDARD), this._factory.preventDefaultForKeys([Ct.SPACE]), this._kernel.audio.start("MusicMenu", Rt.MUSIC, -1, 0, .5, null, !0)
    },
    _disposer: function() {
        this._factory.allowDefaultForKeys([Ct.SPACE]), this._factory.accessibility.buttonsRegister(), V.prototype._disposer.call(this)
    },
    _pressContinue: function() {
        this._kernel.log("button: continue: " + T.string(this.type)), this._kernel.inputs.keyboard.getIsKeyDown(Ct.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(Ct.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester());
        var t = this._factory.getNextSceneType(this.type);
        t == Nt.SELECT_LEVEL && this._session.getMedal(ne.LEVEL_1) == ae.MEDAL_NONE && (t = Nt.GAME);
        var e = qi(h = this._kernel.scenes, h.setScene),
            i = t;
        this._outro(function() {
            e(i)
        })
    },
    _pressInstructions: function() {
        this._kernel.log("button: instructions");
        var t = qi(h = this._kernel.scenes, h.setScene),
            e = Nt.INSTRUCTIONS;
        this._outro(function() {
            t(e)
        })
    },
    _outro: function(t) {
        this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
    },
    _addBg: function() {
        this.addEntity(new be(this._kernel, this.type), null, !0, 1)
    },
    _addFg: function(t, e, i, s) {
        null == s && (s = 0), null == i && (i = ""), null == e && (e = "");
        var n = this;
        this._fgHeader = new Be(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgHeader2.png" : "assets/gui/SceneFgHeader1.png"));
        var _ = this._fgHeader;
        _.set_x(_.x - s), this.addEntity(this._fgHeader, null, !0, 110), t ? this._fgHeader.addEntity(new Qe(this._kernel, e), null, !0, 1) : this._fgHeader.addEntity(new Ke(this._kernel, e, i), null, !0, 1), this._fgFooter = new Be(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgFooter2.png" : "assets/gui/SceneFgFooter1.png")), this.addEntity(this._fgFooter, null, !0, 100), this.addEntity(new Fi(this._kernel, function(t) {
            n._fgHeader.set_y(t)
        }, -this._factory.height, this._fgHeader.y, 500, 1e3, null, Oi.EASE_OUT, Mi.EXPONENTIAL)), this.addEntity(new Fi(this._kernel, function(t) {
            n._fgFooter.set_y(t)
        }, this._factory.height, this._fgFooter.y, t ? 0 : 750, 1e3, null, Oi.EASE_OUT, Mi.EXPONENTIAL))
    },
    _addButtons: function(t, e, i, s, n, _, a) {
        null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 0), null == t && (t = 1e3);
        var r = this;
        this._buttonRight = e, this._buttonLeft = i, this._buttonCenter = s, null != this._buttonRight && (this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 13), this.addEntity(this._buttonRight, null, !0, t), this.addEntity(new Fi(this._kernel, function(t) {
            r._buttonRight.set_y(t)
        }, this._factory.height + 60, this._buttonRight.y, n + 1200, 2e3, null, Oi.EASE_OUT, Mi.ELASTIC()))), null != this._buttonCenter && (this._buttonCenter.setPosition(.5 * (this._factory.width - 200), this._factory.height - 65 - 13), this.addEntity(this._buttonCenter, null, !0, t + 1), this.addEntity(new Fi(this._kernel, function(t) {
            r._buttonCenter.set_y(t)
        }, this._factory.height + 60, this._buttonCenter.y, a + 1300, 2e3, null, Oi.EASE_OUT, Mi.ELASTIC()))), null != this._buttonLeft && (this._buttonLeft.setPosition(30, this._factory.height - 65 - 13), this.addEntity(this._buttonLeft, null, !0, t + 2), this.addEntity(new Fi(this._kernel, function(t) {
            r._buttonLeft.set_y(t)
        }, this._factory.height + 60, this._buttonLeft.y, _ + 1400, 2e3, null, Oi.EASE_OUT, Mi.ELASTIC())))
    },
    _defaultOutro: function(t) {
        var e = this;
        if (!this._isOutroCalled) {
            this._isOutroCalled = !0;
            for (var i = 0, s = this.getEntitiesByClass(Fi); i < s.length;) {
                var n = s[i];
                ++i, n.remove()
            }
            this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new Fi(this._kernel, function(t) {
                e._buttonLeft.set_y(t)
            }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, Oi.EASE_IN, Mi.BACK())), null != this._buttonCenter && this.addEntity(new Fi(this._kernel, function(t) {
                e._buttonCenter.set_y(t)
            }, this._buttonCenter.y, this._factory.height, 50, 1e3, null, Oi.EASE_IN, Mi.BACK())), null != this._buttonRight && this.addEntity(new Fi(this._kernel, function(t) {
                e._buttonRight.set_y(t)
            }, this._buttonRight.y, this._factory.height, 100, 1e3, null, Oi.EASE_IN, Mi.BACK())), this.addEntity(new Fi(this._kernel, function(t) {
                e._fgHeader.set_y(t)
            }, this._fgHeader.y, -this._factory.height, 250, 500, null, Oi.EASE_IN, Mi.EXPONENTIAL)), this.addEntity(new Fi(this._kernel, function(t) {
                e._fgFooter.set_y(t)
            }, this._fgFooter.y, this._factory.height, 500, 500, null, Oi.EASE_IN, Mi.EXPONENTIAL)), this.addEntity(new Fi(this._kernel, function(t) {}, 0, 0, 100, 1e3, null, Oi.EASE_IN, Mi.BACK(), t)), this._kernel.audio.start("Transition", Rt.INTERFACE, 0, 0, .25), this._kernel.isDebug && t()
        }
    },
    _easyTweez: function(t) {
        null == t && (t = !0);
        for (var e = 0, i = this._easyTweezers; e < i.length;) {
            var s = [i[e]];
            ++e, t ? s[0].isVerticalIn ? this.addEntity(new Fi(this._kernel, function(e) {
                return function(t) {
                    e[0].guiEntity.set_y(t)
                }
            }(s), -this._factory.height + s[0].guiEntity.y, s[0].guiEntity.y, 500 + 100 * s[0].sequence, 2e3, null, Oi.EASE_OUT, Mi.QUARTIC)) : this.addEntity(new Fi(this._kernel, function(e) {
                return function(t) {
                    e[0].guiEntity.set_x(t)
                }
            }(s), this._factory.width + s[0].guiEntity.x, s[0].guiEntity.x, 500 + 100 * s[0].sequence, 2e3, null, Oi.EASE_OUT, Mi.QUARTIC)) : this.addEntity(new Fi(this._kernel, function(e) {
                return function(t) {
                    e[0].guiEntity.set_x(t)
                }
            }(s), s[0].guiEntity.x, -1.5 * this._factory.width + s[0].guiEntity.x, 50 * s[0].sequence, 500, null, Oi.EASE_IN, Mi.BACK()))
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
        i = new Re(this._kernel, t, e, i);
        return this.addEntity(i, null, !0, s), i
    },
    __class__: Je
});
var Ze = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Avatar"] = Ze).__name__ = "cbcten.scenes.Avatar", Ze.__super__ = Je, Ze.prototype = t(Je.prototype, {
    _init: function() {
        var e = this;
        Je.prototype._init.call(this), this._session.cache.levelType = ne.LEVEL_1, this._kernel.audio.start("MusicMenu", Rt.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new bt(this._kernel, function() {
            e._kernel.audio.start("VoiceAvatar", Rt.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
        }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.avatar.title")), this._panelUnitA = new He(this._kernel, he.UNIT_A), this._panelUnitA.set_x(15), this.addEntity(this._panelUnitA, null, !0, 1e3), this._panelUnitB = new He(this._kernel, he.UNIT_B), this._panelUnitB.set_x(this._factory.width - this._panelUnitB.width - 15), this.addEntity(this._panelUnitB, null, !0, 1e3), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelUnitA.set_x(t)
        }, -(this._panelUnitA.width + this._panelUnitA.x), this._panelUnitA.x, 1500, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC)), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelUnitB.set_x(t)
        }, this._factory.width, this._panelUnitB.x, 1500, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC)), this._avatarUnitA = new Be(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitA.png")), this._avatarUnitB = new Be(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitB.png")), this.addEntity(this._avatarUnitA, null, !0, 300), this.addEntity(this._avatarUnitB, null, !0, 300), this.addEntity(new Fi(this._kernel, function(t) {
            e._avatarUnitA.set_x(t)
        }, -this._factory.width, this._avatarUnitA.x, 100, 2e3, null, Oi.EASE_OUT, Mi.QUARTIC)), this.addEntity(new Fi(this._kernel, function(t) {
            e._avatarUnitB.set_x(t)
        }, this._factory.width, this._avatarUnitB.x, 100, 2e3, null, Oi.EASE_OUT, Mi.QUARTIC));
        var t = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitA"), 0, 0, null, qi(this, this._pressUnitA)),
            i = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitB"), 0, 0, null, qi(this, this._pressUnitB));
        this._addButtons(null, i, t), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
    },
    _updater: function(t) {
        null == t && (t = 0), Je.prototype._updater.call(this, t)
    },
    _outro: function(t) {
        var e = this;
        this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("CrowdScore", Rt.INTERFACE, 1, 0, .5), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelUnitA.set_x(t)
        }, this._panelUnitA.x, -this._factory.width, 0, 800, null, Oi.EASE_IN, Mi.BACK())), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelUnitB.set_x(t)
        }, this._panelUnitB.x, this._factory.width, 0, 800, null, Oi.EASE_IN, Mi.BACK())), this.addEntity(new Fi(this._kernel, function(t) {
            e._avatarUnitA.set_x(t)
        }, this._avatarUnitA.x, -this._factory.width, 0, 1e3, null, Oi.EASE_IN, Mi.BACK(.75))), this.addEntity(new Fi(this._kernel, function(t) {
            e._avatarUnitB.set_x(t)
        }, this._avatarUnitB.x, this._factory.width, 0, 1e3, null, Oi.EASE_IN, Mi.BACK(.75))))
    },
    _pressUnitA: function() {
        this._session.cache.unitType = he.UNIT_A, this._pressContinue()
    },
    _pressUnitB: function() {
        this._session.cache.unitType = he.UNIT_B, this._pressContinue()
    },
    __class__: Ze
});
var qe = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Game"] = qe).__name__ = "cbcten.scenes.Game", qe.__super__ = Je, qe.prototype = t(Je.prototype, {
    _init: function() {
        var t, e, i, s, n, _, a, r, o;
        Je.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(Pt.DEFEND), this._session.cache.totalPlays++, this._session.cache.reset(), this._levelVo = new ge(this._kernel, this._session.cache.levelType), this._hud = new ke(this._kernel, !this._levelVo.isNew), this.addEntity(this._location = new pe(this._kernel, this._levelVo, this._hud, qi(this, this._handleScore)), null, !0, 10), this.addEntity(this._hud, null, !0, 100), this._session.get_isTester() && (t = qi(this, this._winMedal), e = ae.MEDAL_BRONZE, i = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.testMode.bronze"), 0, 0, null, function() {
            t(e, !0)
        }), s = qi(this, this._winMedal), n = ae.MEDAL_SILVER, _ = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.testMode.silver"), 0, 0, null, function() {
            s(n, !0)
        }), a = qi(this, this._winMedal), r = ae.MEDAL_GOLD, o = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.testMode.gold"), 0, 0, null, function() {
            a(r, !0)
        }), this._addButtons(null, o, i, _, 1e3, 1e3, 1e3)), this._kernel.audio.stop(null, Rt.MUSIC), this._kernel.log("play: " + T.string(this._levelVo.type)), this._factory.preventDefaultForKeys([Ct.UP, Ct.RIGHT, Ct.DOWN, Ct.LEFT, Ct.SPACE]), this._hud.configureAlert(this._kernel.getConfig("gui.scenes.game.hud.alerts.start"))
    },
    _createDelay: function(t, e) {
        null == e && (e = 1e3), this.addEntity(new bt(this._kernel, t, e))
    },
    _handleScore: function() {
        var t = this._session.cache.score,
            e = 2 <= Math.abs(t.player - t.opponent) && (6 <= t.player || 6 <= t.opponent);
        if (!e && 6 <= Math.max(t.player, t.opponent) + 1 && 2 <= Math.max(t.player, t.opponent) + 1 - Math.min(t.player, t.opponent) && (this._hud.configureAlert(this._kernel.getConfig("gui.scenes.game.hud.alerts.matchPoint")), this._kernel.audio.start("GameStart", Rt.EFFECTS, 1, 0, .5), this._location.addExcitement(2)), !e) return !1;
        e = ae.MEDAL_NONE;
        1 <= t.player && (e = ae.MEDAL_BRONZE), t.player > t.opponent ? e = ae.MEDAL_GOLD : 6 < t.opponent && (e = ae.MEDAL_SILVER);
        for (var i = 0, s = this.getEntitiesByClass(Ue); i < s.length;) {
            var n = s[i];
            ++i, n.isDisposed || (n.isDisposed = !0, n.set_isActive(!1), n._disposer())
        }
        return this._winMedal(e), this._createDelay(qi(this, this._gameOver), 2500), this._flashPhotography(10, 250), !0
    },
    _winMedal: function(t, e) {
        null == e && (e = !1), this._session.cache.medalType = t, this._session.setMedal(this._levelVo.type, null, t), this._session.setCoins(null, this._session.getCoins() + this._getScore(t)), this._kernel.log("medal: " + T.string(t) + ": " + T.string(this._levelVo.type)), e && this._gameOver()
    },
    _flashPhotography: function(t, e) {
        var i, s, n;
        0 <= --t && (this._kernel.overlay.flash(100, !0, .25 * Math.random() + .25), i = qi(this, this._flashPhotography), s = t, n = e, this._createDelay(function() {
            i(s, n)
        }, T.random(e)))
    },
    _gameOver: function() {
        this._kernel.scenes.next()
    },
    _updater: function(t) {
        null == t && (t = 0), Je.prototype._updater.call(this, t), this._hud.configureScore(this._session.cache.score.player, this._session.cache.score.opponent)
    },
    _disposer: function() {
        this._factory.allowDefaultForKeys([Ct.UP, Ct.RIGHT, Ct.DOWN, Ct.LEFT, Ct.SPACE]), this._kernel.audio.stop(null, Rt.MUSIC);
        var t = this._session;
        t.saveCount++, t._setter(), t._savedData._____VERSION = t._version, t._savedData[t.id] = t._data, t._driverSave(), Je.prototype._disposer.call(this)
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
    __class__: qe
});
var $e = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Instructions"] = $e).__name__ = "cbcten.scenes.Instructions", $e.__super__ = Je, $e.prototype = t(Je.prototype, {
    _init: function() {
        var t = this;
        Je.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Pt.DEFEND), this._kernel.audio.start("MusicMenu", Rt.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new bt(this._kernel, function() {
            t._kernel.audio.start("VoiceInstructions", Rt.INTERFACE, 1, 0, t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
        }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.instructions.title"));
        var e = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, qi(this, this._pressContinue));
        this._addButtons(null, e);
        var i = new Be(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
        this.addEntity(i, null, !0, 20), i.setPosition((this._factory.width - i.width) / 7, (this._factory.height - i.height) / 2);
        var s = new Ye(this._kernel, 300, 300, T.string(this._kernel.getConfig("gui.scenes.instructions.message")).toUpperCase(), this._factory.createTextStyle(Mt.BODY), !0, !1);
        s.setPosition(this._kernel.factory.width - s.width - 40, 90), this.addEntity(s, null, !0, 21), this._addEasyTweez(i, 1, !1), this._addEasyTweez(s, 2, !1), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, e)
    },
    _outro: function(t) {
        this._isOutroCalled || this._defaultOutro(t)
    },
    __class__: $e
});
var ti = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Intro"] = ti).__name__ = "cbcten.scenes.Intro", ti.__super__ = Je, ti.prototype = t(Je.prototype, {
    _updater: function(t) {
        null == t && (t = 0), Je.prototype._updater.call(this, t), this._kernel.scenes.next()
    },
    __class__: ti
});
var ei = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Menu"] = ei).__name__ = "cbcten.scenes.Menu", ei.__super__ = Je, ei.prototype = t(Je.prototype, {
    _init: function() {
        var e = this;
        Je.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Rt.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("GameStart", Rt.EFFECTS, 1, 0, .75, 0, !0), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.menu.title"), this._kernel.getConfig("gui.scenes.menu.subtitle")), this.addEntity(this._action = new ve(this._kernel), null, !0, 200), this.addEntity(new Fi(this._kernel, function(t) {
            e._action.set_x(t)
        }, -this._factory.width, this._action.x, 500, 2e3, null, Oi.EASE_OUT, Mi.ELASTIC()));
        var t = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, qi(this, this._pressContinue)),
            i = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, qi(this, this._pressInstructions));
        this._addButtons(null, t, i), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
    },
    _outro: function(t) {
        var e = this;
        this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Fi(this._kernel, function(t) {
            e._action.set_x(t)
        }, this._action.x, this._factory.width, 0, 1e3, null, Oi.EASE_IN, Mi.BACK())))
    },
    __class__: ei
});
var ii = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Results"] = ii).__name__ = "cbcten.scenes.Results", ii.__super__ = Je, ii.prototype = t(Je.prototype, {
    _init: function() {
        var e = this;
        Je.prototype._init.call(this), this._levelVo = new ge(this._kernel, this._session.cache.levelType, this._session.cache.unitType), this._kernel.audio.start("GameStart", Rt.INTERFACE, 1, 0, .5), this.addEntity(new bt(this._kernel, function() {
            e._kernel.audio.start(["VoiceResults0", "VoiceResults1", "VoiceResults2", "VoiceResults3"][e._session.cache.medalType._hx_index], Rt.INTERFACE, 1, 0, e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
        }, 3500 + 750 * this._session.cache.medalType._hx_index)), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.results.title"), this._levelVo.title, 120), this.addEntity(this._hero = new Ie(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-20), this.addEntity(new Fi(this._kernel, function(t) {
            e._hero.set_x(t)
        }, -this._factory.width, this._hero.x, 500, 2e3, null, Oi.EASE_OUT, Mi.ELASTIC())), this._panelResult = new Ge(this._kernel, this._session.cache.medalType), this._panelResult.set_x(this._factory.width - this._panelResult.width - 15), this.addEntity(this._panelResult, null, !0, 1e3), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelResult.set_x(t)
        }, this._factory.width, this._panelResult.x, 1500, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC));
        var t = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, qi(this, this._pressContinue));
        this._addButtons(null, t), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
    },
    _updater: function(t) {
        null == t && (t = 0), Je.prototype._updater.call(this, t), 2e3 < this._age && Math.random() < this._session.cache.medalType._hx_index / 3 && this._createBurst(.5 * Math.random() + .5, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .5) * this._factory.width, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .25) * this._factory.height, 299)
    },
    _outro: function(t) {
        var e = this;
        this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Fi(this._kernel, function(t) {
            e._hero.set_x(t)
        }, this._hero.x, this._factory.width, 0, 1e3, null, Oi.EASE_IN, Mi.BACK())), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelResult.set_x(t)
        }, this._panelResult.x, this._factory.width, 0, 800, null, Oi.EASE_IN, Mi.BACK())))
    },
    __class__: ii
});
var si = function(t) {
    ft.call(this, t, 1e3)
};
(e["cbcten.scenes.SceneTransition"] = si).__name__ = "cbcten.scenes.SceneTransition", si.__super__ = ft, si.prototype = t(ft.prototype, {
    _init: function() {
        ft.prototype._init.call(this)
    },
    __class__: si
});
var ni = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.SelectLevel"] = ni).__name__ = "cbcten.scenes.SelectLevel", ni.__super__ = Je, ni.prototype = t(Je.prototype, {
    _init: function() {
        var t = this;
        Je.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Rt.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new bt(this._kernel, function() {
            t._kernel.audio.start("VoiceSelectLevel", Rt.INTERFACE, 1, 0, .85 * t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
        }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.selectLevel.title")), this._panelLevel1 = new We(this._kernel, ne.LEVEL_1), this._panelLevel1.set_x(15), this.addEntity(this._panelLevel1, null, !0, 200), this._panelLevel2 = new We(this._kernel, ne.LEVEL_2), this._panelLevel2.set_x(.5 * (this._factory.width - this._panelLevel2.width)), this.addEntity(this._panelLevel2, null, !0, 200), this._panelLevel3 = new We(this._kernel, ne.LEVEL_3), this._panelLevel3.set_x(this._factory.width - this._panelLevel3.width - 15), this.addEntity(this._panelLevel3, null, !0, 200);
        var e = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.levels.level1"), 0, 0, null, qi(this, this._pressLevel1)),
            i = this._panelLevel2.vo.isLocked ? null : new Ue(this._kernel, this._kernel.getConfig("gui.buttons.levels.level2"), 0, 0, null, qi(this, this._pressLevel2)),
            s = this._panelLevel3.vo.isLocked ? null : new Ue(this._kernel, this._kernel.getConfig("gui.buttons.levels.level3"), 0, 0, null, qi(this, this._pressLevel3));
        this._addButtons(null, s, e, i), this._addEasyTweez(this._panelLevel1, 1, !1), this._addEasyTweez(this._panelLevel2, 2, !1), this._addEasyTweez(this._panelLevel3, 3, !1), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, this._panelLevel2.vo.isLocked ? e : this._panelLevel3.vo.isLocked ? i : s)
    },
    _updater: function(t) {
        null == t && (t = 0), Je.prototype._updater.call(this, t)
    },
    _outro: function(t) {
        var e = this;
        this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("CrowdScore", Rt.INTERFACE, 1, 0, .5), this.addEntity(new Fi(this._kernel, function(t) {
            e._kernel.audio.transform("MusicMenu", Rt.MUSIC, t)
        }, .5, 0, 0, 2e3)))
    },
    _pressLevel1: function() {
        this._session.cache.levelType = ne.LEVEL_1, this._pressContinue()
    },
    _pressLevel2: function() {
        this._session.cache.levelType = ne.LEVEL_2, this._pressContinue()
    },
    _pressLevel3: function() {
        this._session.cache.levelType = ne.LEVEL_3, this._pressContinue()
    },
    __class__: ni
});
var _i = function(t, e, i, s, n) {
    null == n && (n = !1), null == s && (s = !0), null == i && (i = !1), Je.call(this, t, e, i, s, n)
};
(e["cbcten.scenes.Shop"] = _i).__name__ = "cbcten.scenes.Shop", _i.__super__ = Je, _i.prototype = t(Je.prototype, {
    _init: function() {
        var e = this;
        Je.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Rt.MUSIC, 0, 0, .15, 0, !0), this.addEntity(new bt(this._kernel, function() {
            e._kernel.audio.start("VoiceShop", Rt.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
        }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.shop.title")), this.addEntity(this._hero = new Ie(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-160), this._hero.set_isFlippedX(!0), this.addEntity(new Fi(this._kernel, function(t) {
            e._hero.set_x(t)
        }, -this._factory.width, this._hero.x, 500, 2e3, null, Oi.EASE_OUT, Mi.QUARTIC)), this._panelShop = new ze(this._kernel, this._session.cache.unitType), this._panelShop.set_x(this._factory.width - this._panelShop.width - 15), this.addEntity(this._panelShop, null, !0, 1e3), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelShop.set_x(t)
        }, this._factory.width, this._panelShop.x, 1500, 1e3, null, Oi.EASE_OUT, Mi.QUARTIC));
        var t = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, qi(this, this._pressContinue)),
            i = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.avatar"), 0, 0, null, qi(this, this._pressAvatar)),
            s = new Ue(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, qi(this, this._pressReset));
        this._addButtons(null, t, i, 1 == this._panelShop.vo.getPercentageComplete() ? s : null), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
    },
    _outro: function(t) {
        var e = this;
        this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Fi(this._kernel, function(t) {
            e._hero.set_x(t)
        }, this._hero.x, -this._factory.width, 0, 1e3, null, Oi.EASE_IN, Mi.BACK())), this.addEntity(new Fi(this._kernel, function(t) {
            e._panelShop.set_x(t)
        }, this._panelShop.x, this._factory.width, 0, 800, null, Oi.EASE_IN, Mi.BACK())))
    },
    _pressReset: function() {
        this._kernel.log("button: reset: "), this._session.resetUnit(this._session.cache.unitType);
        var t = qi(h = this._kernel.scenes, h.setScene),
            e = Nt.MENU;
        this._outro(function() {
            t(e)
        })
    },
    _pressAvatar: function() {
        this._kernel.log("button: avatar: ");
        var t = qi(h = this._kernel.scenes, h.setScene),
            e = Nt.AVATAR;
        this._outro(function() {
            t(e)
        })
    },
    __class__: _i
}), p = function() {}, (e["haxe.IMap"] = p).__name__ = "haxe.IMap", p.__isInterface__ = !0;
var ai = function(t, e, i) {
    Error.call(this, t), this.message = t, this.__previousException = e, this.__nativeException = null != i ? i : this
};
(e["haxe.Exception"] = ai).__name__ = "haxe.Exception", ai.caught = function(t) {
    return t instanceof ai ? t : t instanceof Error ? new ai(t.message, null, t) : new di(t, null, t)
}, ai.thrown = function(t) {
    return t instanceof ai ? t.get_native() : t instanceof Error ? t : new di(t)
}, ai.__super__ = Error, ai.prototype = t(Error.prototype, {
    unwrap: function() {
        return this.__nativeException
    },
    get_native: function() {
        return this.__nativeException
    },
    __class__: ai
});
var ri = function() {};
(e["haxe.Log"] = ri).__name__ = "haxe.Log", ri.formatOutput = function(t, e) {
    var i = T.string(t);
    if (null == e) return i;
    var s = e.fileName + ":" + e.lineNumber;
    if (null != e.customParams)
        for (var n = 0, _ = e.customParams; n < _.length;) {
            t = _[n];
            ++n, i += ", " + T.string(t)
        }
    return s + ": " + i
}, ri.trace = function(t, e) {
    e = ri.formatOutput(t, e);
    "undefined" != typeof console && null != console.log && console.log(e)
};
var oi = function() {};
(e["haxe.Resource"] = oi).__name__ = "haxe.Resource", oi.getString = function(t) {
    for (var e = 0, i = oi.content; e < i.length;) {
        var s = i[e];
        if (++e, s.name == t) return null != s.str ? s.str : mi.decode(s.data).toString()
    }
    return null
};
var hi = function() {
    this.buf = new w, this.cache = [], this.useCache = hi.USE_CACHE, this.useEnumIndex = hi.USE_ENUM_INDEX, this.shash = new bi, this.scount = 0
};
(e["haxe.Serializer"] = hi).__name__ = "haxe.Serializer", hi.run = function(t) {
    var e = new hi;
    return e.serialize(t), e.toString()
}, hi.prototype = {
    toString: function() {
        return this.buf.b
    },
    serializeString: function(t) {
        var e = this.shash.h[t];
        if (null != e) return this.buf.b += "R", void(this.buf.b += null == e ? "null" : "" + e);
        this.shash.h[t] = this.scount++, this.buf.b += "y", t = encodeURIComponent(t), this.buf.b += T.string(t.length), this.buf.b += ":", this.buf.b += null == t ? "null" : "" + t
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
        switch ((b = C.typeof(t))._hx_index) {
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
                if (Di.__instanceof(t, ss)) {
                    var i = t.__name__;
                    this.buf.b += "A", this.serializeString(i)
                } else if (Di.__instanceof(t, ns)) this.buf.b += "B", this.serializeString(t.__ename__);
                else {
                    if (this.useCache && this.serializeRef(t)) return;
                    this.buf.b += "o", this.serializeFields(t)
                }
                break;
            case 5:
                throw ai.thrown("Cannot serialize function");
            case 6:
                var s = b.c;
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
                        this.buf.b += "v", this.buf.b += T.string(r.getTime());
                        break;
                    case xi:
                        this.buf.b += "q";
                        for (var o = (e = t).keys(); o.hasNext();) {
                            var h = o.next();
                            this.buf.b += ":", this.buf.b += null == h ? "null" : "" + h, this.serialize(e.h[h])
                        }
                        this.buf.b += "h";
                        break;
                    case wi:
                        this.buf.b += "l";
                        for (var l = (e = t).h; null != l;) {
                            var c = l.item,
                                l = l.next,
                                u = c;
                            this.serialize(u)
                        }
                        this.buf.b += "h";
                        break;
                    case vi:
                        this.buf.b += "M";
                        for (o = (e = t).keys(); o.hasNext();) {
                            var h = o.next(),
                                d = U.field(h, "__id__");
                            U.deleteField(h, "__id__"), this.serialize(h), h.__id__ = d, this.serialize(e.h[h.__id__])
                        }
                        this.buf.b += "h";
                        break;
                    case bi:
                        this.buf.b += "b";
                        for (var r = (e = t).h, g = Object.keys(r), p = g.length, m = 0; m < p;) {
                            o = g[m++];
                            this.serializeString(o), this.serialize(e.h[o])
                        }
                        this.buf.b += "h";
                        break;
                    case gi:
                        e = t;
                        this.buf.b += "s", this.buf.b += T.string(Math.ceil(8 * e.length / 6)), this.buf.b += ":";
                        var u = 0,
                            E = e.length - 2;
                        if (null == (f = hi.BASE64_CODES)) {
                            for (var f = new Array(hi.BASE64.length), _ = 0, a = hi.BASE64.length; _ < a;) {
                                var y = _++;
                                f[y] = A.cca(hi.BASE64, y)
                            }
                            hi.BASE64_CODES = f
                        }
                        for (; u < E;) {
                            var x = e.b[u++],
                                w = e.b[u++],
                                S = e.b[u++];
                            this.buf.b += String.fromCodePoint(f[x >> 2]), this.buf.b += String.fromCodePoint(f[63 & (x << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(f[63 & (w << 2 | S >> 6)]), this.buf.b += String.fromCodePoint(f[63 & S])
                        }
                        u == E ? (x = e.b[u++], w = e.b[u++], this.buf.b += String.fromCodePoint(f[x >> 2]), this.buf.b += String.fromCodePoint(f[63 & (x << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(f[w << 2 & 63])) : u == 1 + E && (x = e.b[u++], this.buf.b += String.fromCodePoint(f[x >> 2]), this.buf.b += String.fromCodePoint(f[x << 4 & 63]));
                        break;
                    default:
                        this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(s.__name__), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(s.__name__), this.useCache && this.cache.push(t), this.serializeFields(t))
                }
                break;
            case 7:
                i = b.e;
                if (this.useCache) {
                    if (this.serializeRef(t)) return;
                    this.cache.pop()
                }
                this.buf.b += T.string(this.useEnumIndex ? "j" : "w"), this.serializeString(i.__ename__), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += T.string(t._hx_index)) : (i = t, this.serializeString(R[i.__enum__].__constructs__[i._hx_index]._hx_name)), this.buf.b += ":";
                var v = C.enumParameters(t);
                this.buf.b += T.string(v.length);
                for (var b = 0; b < v.length;) {
                    var P = v[b];
                    ++b, this.serialize(P)
                }
                this.useCache && this.cache.push(t);
                break;
            default:
                throw ai.thrown("Cannot serialize " + T.string(t))
        }
    },
    __class__: hi
};
var li = function(t) {
    var e = this;
    this.id = setInterval(function() {
        e.run()
    }, t)
};

function ci() {}(e["haxe.Timer"] = li).__name__ = "haxe.Timer", li.delay = function(t, e) {
    var i = new li(e);
    return i.run = function() {
        i.stop(), t()
    }, i
}, li.prototype = {
    stop: function() {
        null != this.id && (clearInterval(this.id), this.id = null)
    },
    run: function() {},
    __class__: li
}, (e["haxe._Unserializer.DefaultResolver"] = ci).__name__ = "haxe._Unserializer.DefaultResolver", ci.prototype = {
    resolveClass: function(t) {
        return e[t]
    },
    resolveEnum: function(t) {
        return R[t]
    },
    __class__: ci
};
var ui = function(t) {
    this.buf = t, this.length = this.buf.length, this.pos = 0, this.scache = [], this.cache = [];
    t = ui.DEFAULT_RESOLVER;
    null == t && (t = new ci, ui.DEFAULT_RESOLVER = t), this.resolver = t
};
(e["haxe.Unserializer"] = ui).__name__ = "haxe.Unserializer", ui.initCodes = function() {
    for (var t = [], e = 0, i = ui.BASE64.length; e < i;) {
        var s = e++;
        t[ui.BASE64.charCodeAt(s)] = s
    }
    return t
}, ui.run = function(t) {
    return new ui(t).unserialize()
}, ui.prototype = {
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
        return parseFloat(A.substr(this.buf, t, this.pos - t))
    },
    unserializeObject: function(t) {
        for (;;) {
            if (this.pos >= this.length) throw ai.thrown("Invalid object");
            if (103 == this.buf.charCodeAt(this.pos)) break;
            var e = this.unserialize();
            if ("string" != typeof e) throw ai.thrown("Invalid object key");
            var i = this.unserialize();
            t[e] = i
        }
        this.pos++
    },
    unserializeEnum: function(t, e) {
        if (58 != this.buf.charCodeAt(this.pos++)) throw ai.thrown("Invalid enum format");
        var i = this.readDigits();
        if (0 == i) return C.createEnum(t, e);
        for (var s = []; 0 < i--;) s.push(this.unserialize());
        return C.createEnum(t, e, s)
    },
    unserialize: function() {
        switch (this.buf.charCodeAt(this.pos++)) {
            case 65:
                var t = this.unserialize();
                if (null == (u = this.resolver.resolveClass(t))) throw ai.thrown("Class not found " + t);
                return u;
            case 66:
                t = this.unserialize();
                if (null == (d = this.resolver.resolveEnum(t))) throw ai.thrown("Enum not found " + t);
                return d;
            case 67:
                t = this.unserialize();
                if (null == (u = this.resolver.resolveClass(t))) throw ai.thrown("Class not found " + t);
                var e = Object.create(u.prototype);
                if (this.cache.push(e), e.hxUnserialize(this), 103 != this.buf.charCodeAt(this.pos++)) throw ai.thrown("Invalid custom data");
                return e;
            case 77:
                var i = new vi;
                this.cache.push(i);
                for (var s = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                    var n = this.unserialize();
                    i.set(n, this.unserialize())
                }
                return this.pos++, i;
            case 82:
                if ((E = this.readDigits()) < 0 || E >= this.scache.length) throw ai.thrown("Invalid string reference");
                return this.scache[E];
            case 97:
                var s = this.buf,
                    _ = [];
                for (this.cache.push(_);;) {
                    if (104 == (p = this.buf.charCodeAt(this.pos))) {
                        this.pos++;
                        break
                    }
                    117 == p ? (this.pos++, E = this.readDigits(), _[_.length + E - 1] = null) : _.push(this.unserialize())
                }
                return _;
            case 98:
                i = new bi;
                this.cache.push(i);
                for (s = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                    var n = this.unserialize(),
                        a = this.unserialize();
                    i.h[n] = a
                }
                return this.pos++, i;
            case 99:
                t = this.unserialize();
                if (null == (u = this.resolver.resolveClass(t))) throw ai.thrown("Class not found " + t);
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
                if (null == (T = this.resolver.resolveEnum(t))) throw ai.thrown("Enum not found " + t);
                this.pos++;
                for (var r = this.readDigits(), o = T.__constructs__, h = new Array(o.length), l = 0, c = o.length; l < c;) h[m = l++] = o[m]._hx_name;
                var u = h[r];
                if (null == u) throw ai.thrown("Unknown enum index " + t + "@" + r);
                var d = this.unserializeEnum(T, u);
                return this.cache.push(d), d;
            case 107:
                return NaN;
            case 108:
                var g = new wi;
                this.cache.push(g);
                for (s = this.buf; 104 != this.buf.charCodeAt(this.pos);) g.add(this.unserialize());
                return this.pos++, g;
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
                i = new xi;
                this.cache.push(i);
                for (var s = this.buf, p = this.buf.charCodeAt(this.pos++); 58 == p;) {
                    var m = this.readDigits(),
                        a = this.unserialize();
                    i.h[m] = a, p = this.buf.charCodeAt(this.pos++)
                }
                if (104 != p) throw ai.thrown("Invalid IntMap format");
                return i;
            case 114:
                var E;
                if ((E = this.readDigits()) < 0 || E >= this.cache.length) throw ai.thrown("Invalid reference");
                return this.cache[E];
            case 115:
                var f = this.readDigits(),
                    s = this.buf;
                if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < f) throw ai.thrown("Invalid bytes length");
                var y = ui.CODES;
                null == y && (y = ui.initCodes(), ui.CODES = y);
                for (var e = 3 & f, x = (m = this.pos) + (f - e), w = new gi(new ArrayBuffer(3 * (f >> 2) + (2 <= e ? e - 1 : 0))), S = 0; m < x;) {
                    var v = y[s.charCodeAt(m++)],
                        b = y[s.charCodeAt(m++)];
                    w.b[S++] = v << 2 | b >> 4;
                    var P = y[s.charCodeAt(m++)];
                    w.b[S++] = b << 4 | P >> 2;
                    var R = y[s.charCodeAt(m++)];
                    w.b[S++] = P << 6 | R
                }
                return 2 <= e && (v = y[s.charCodeAt(m++)], b = y[s.charCodeAt(m++)], w.b[S++] = v << 2 | b >> 4, 3 == e && (P = y[s.charCodeAt(m++)], w.b[S++] = b << 4 | P >> 2)), this.pos += f, this.cache.push(w), w;
            case 116:
                return !0;
            case 118:
                var U;
                return 48 <= this.buf.charCodeAt(this.pos) && this.buf.charCodeAt(this.pos) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 1) && this.buf.charCodeAt(this.pos + 1) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 2) && this.buf.charCodeAt(this.pos + 2) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 3) && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4) ? (U = A.strDate(A.substr(this.buf, this.pos, 19)), this.pos += 19) : U = new Date(this.readFloat()), this.cache.push(U), U;
            case 119:
                var T, t = this.unserialize();
                if (null == (T = this.resolver.resolveEnum(t))) throw ai.thrown("Enum not found " + t);
                d = this.unserializeEnum(T, this.unserialize());
                return this.cache.push(d), d;
            case 120:
                throw ai.thrown(this.unserialize());
            case 121:
                f = this.readDigits();
                if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < f) throw ai.thrown("Invalid string length");
                n = A.substr(this.buf, this.pos, f);
                return this.pos += f, n = decodeURIComponent(n.split("+").join(" ")), this.scache.push(n), n;
            case 122:
                return 0
        }
        throw this.pos--, ai.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
    },
    __class__: ui
};
var di = function(t, e, i) {
    ai.call(this, String(t), e, i), this.value = t
};
(e["haxe.ValueException"] = di).__name__ = "haxe.ValueException", di.__super__ = ai, di.prototype = t(ai.prototype, {
    unwrap: function() {
        return this.value
    },
    __class__: di
});
var gi = function(t) {
    this.length = t.byteLength, this.b = new Uint8Array(t), (this.b.bufferValue = t).hxBytes = this, t.bytes = this.b
};
(e["haxe.io.Bytes"] = gi).__name__ = "haxe.io.Bytes", gi.ofString = function(t, e) {
    if (e == pi.RawNative) {
        for (var i = new Uint8Array(t.length << 1), s = 0, n = t.length; s < n;) {
            var _ = s++,
                a = t.charCodeAt(_);
            i[_ << 1] = 255 & a, i[_ << 1 | 1] = a >> 8
        }
        return new gi(i.buffer)
    }
    for (var r = [], _ = 0; _ < t.length;) 55296 <= (a = t.charCodeAt(_++)) && a <= 56319 && (a = a - 55232 << 10 | 1023 & t.charCodeAt(_++)), a <= 127 ? r.push(a) : (a <= 2047 ? r.push(192 | a >> 6) : (a <= 65535 ? r.push(224 | a >> 12) : (r.push(240 | a >> 18), r.push(128 | a >> 12 & 63)), r.push(128 | a >> 6 & 63)), r.push(128 | 63 & a));
    return new gi(new Uint8Array(r).buffer)
}, gi.ofData = function(t) {
    var e = t.hxBytes;
    return null != e ? e : new gi(t)
}, gi.prototype = {
    getString: function(t, e, i) {
        if (t < 0 || e < 0 || t + e > this.length) throw ai.thrown(Ti.OutsideBounds);
        null == i && (i = pi.UTF8);
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
    __class__: gi
};
var pi = R["haxe.io.Encoding"] = {
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
pi.__constructs__ = [pi.UTF8, pi.RawNative];
var mi = function() {};
(e["haxe.crypto.Base64"] = mi).__name__ = "haxe.crypto.Base64", mi.decode = function(t, e) {
    if (null == e && (e = !0), e)
        for (; 61 == A.cca(t, t.length - 1);) t = A.substr(t, 0, -1);
    return new Ei(mi.BYTES).decodeBytes(gi.ofString(t))
};
var Ei = function(t) {
    for (var e = t.length, i = 1; 1 << i < e;) ++i;
    if (8 < i || e != 1 << i) throw ai.thrown("BaseCode : base length must be a power of two.");
    this.base = t, this.nbits = i
};
(e["haxe.crypto.BaseCode"] = Ei).__name__ = "haxe.crypto.BaseCode", Ei.prototype = {
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
        for (var i = this.tbl, s = t.length * e >> 3, n = new gi(new ArrayBuffer(s)), _ = 0, a = 0, r = 0, o = 0; o < s;) {
            for (; a < 8;) {
                a += e, _ <<= e;
                var h = i[t.b[r++]];
                if (-1 == h) throw ai.thrown("BaseCode : invalid encoded char");
                _ |= h
            }
            a -= 8, n.b[o++] = _ >> a & 255
        }
        return n
    },
    __class__: Ei
};
var fi = function(t, e) {
    this.elt = t, this.next = e
};
(e["haxe.ds.GenericCell"] = fi).__name__ = "haxe.ds.GenericCell", fi.prototype = {
    __class__: fi
};
var yi = function() {};
(e["haxe.ds.GenericStack"] = yi).__name__ = "haxe.ds.GenericStack", yi.prototype = {
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
    __class__: yi
};
var xi = function() {
    this.h = {}
};
(e["haxe.ds.IntMap"] = xi).__name__ = "haxe.ds.IntMap", xi.__interfaces__ = [p], xi.prototype = {
    keys: function() {
        var t, e = [];
        for (t in this.h) this.h.hasOwnProperty(t) && e.push(+t);
        return new Ai(e)
    },
    __class__: xi
};
var wi = function() {
    this.length = 0
};
(e["haxe.ds.List"] = wi).__name__ = "haxe.ds.List", wi.prototype = {
    add: function(t) {
        t = new Si(t, null);
        null == this.h ? this.h = t : this.q.next = t, this.q = t, this.length++
    },
    push: function(t) {
        t = new Si(t, this.h);
        this.h = t, null == this.q && (this.q = t), this.length++
    },
    remove: function(t) {
        for (var e = null, i = this.h; null != i;) {
            if (i.item == t) return null == e ? this.h = i.next : e.next = i.next, this.q == i && (this.q = e), this.length--, !0;
            i = (e = i).next
        }
        return !1
    },
    __class__: wi
};
var Si = function(t, e) {
    this.item = t, this.next = e
};
(e["haxe.ds._List.ListNode"] = Si).__name__ = "haxe.ds._List.ListNode", Si.prototype = {
    __class__: Si
};
var vi = function() {
    this.h = {
        __keys__: {}
    }
};
(e["haxe.ds.ObjectMap"] = vi).__name__ = "haxe.ds.ObjectMap", vi.__interfaces__ = [p], vi.prototype = {
    set: function(t, e) {
        var i = t.__id__;
        null == i && (i = t.__id__ = u.$haxeUID++), this.h[i] = e, this.h.__keys__[i] = t
    },
    keys: function() {
        var t, e = [];
        for (t in this.h.__keys__) this.h.hasOwnProperty(t) && e.push(this.h.__keys__[t]);
        return new Ai(e)
    },
    __class__: vi
};
var bi = function() {
    this.h = Object.create(null)
};
(e["haxe.ds.StringMap"] = bi).__name__ = "haxe.ds.StringMap", bi.__interfaces__ = [p], bi.prototype = {
    __class__: bi
};
var Pi = function(t) {
    this.h = t, this.keys = Object.keys(t), this.length = this.keys.length, this.current = 0
};

function Ri(t) {
    this.url = t, this.headers = [], this.params = [], this.emptyOnData = qi(this, this.onData)
}(e["haxe.ds._StringMap.StringMapKeyIterator"] = Pi).__name__ = "haxe.ds._StringMap.StringMapKeyIterator", Pi.prototype = {
    hasNext: function() {
        return this.current < this.length
    },
    next: function() {
        return this.keys[this.current++]
    },
    __class__: Pi
}, (e["haxe.http.HttpBase"] = Ri).__name__ = "haxe.http.HttpBase", Ri.prototype = {
    onData: function(t) {},
    onBytes: function(t) {},
    onError: function(t) {},
    onStatus: function(t) {},
    hasOnData: function() {
        return !U.compareMethods(qi(this, this.onData), this.emptyOnData)
    },
    success: function(t) {
        this.responseBytes = t, this.responseAsString = null, this.hasOnData() && this.onData(this.get_responseData()), this.onBytes(this.responseBytes)
    },
    get_responseData: function() {
        return null == this.responseAsString && null != this.responseBytes && (this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, pi.UTF8)), this.responseAsString
    },
    __class__: Ri
};
var Ui = function(t) {
    this.async = !0, this.withCredentials = !1, Ri.call(this, t)
};
(e["haxe.http.HttpJs"] = Ui).__name__ = "haxe.http.HttpJs", Ui.__super__ = Ri, Ui.prototype = t(Ri.prototype, {
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
                if (0 == e && Li.get_supported() && null != u.location && (i = u.location.protocol.toLowerCase(), new d("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(i) && (e = null != _.response ? 200 : 404)), null == e && (e = null), null != e && n.onStatus(e), null != e && 200 <= e && e < 400) n.req = null, n.success(gi.ofData(_.response));
                else if (null == e || 0 == e && null == _.response) n.req = null, n.onError("Failed to connect or resolve host");
                else if (null == e) {
                    var s = (n.req = null) != _.response ? gi.ofData(_.response) : null;
                    n.responseBytes = s, n.onError("Http Error #" + _.status)
                } else switch (e) {
                    case 12007:
                        n.req = null, n.onError("Unknown host");
                        break;
                    case 12029:
                        n.req = null, n.onError("Failed to connect to host");
                        break;
                    default:
                        s = (n.req = null) != _.response ? gi.ofData(_.response) : null;
                        n.responseBytes = s, n.onError("Http Error #" + _.status)
                }
            }
        }
        var _ = this.req = Li.createXMLHttpRequest();
        this.async && (_.onreadystatechange = e);
        var i, s, a = this.postData,
            r = this.postBytes;
        if (null != (i = null == a ? null == r ? null : new Blob([r.b.bufferValue]) : null == r ? a : null)) t = !0;
        else
            for (a = 0, r = this.params; a < r.length;) {
                var o = r[a];
                ++a, i = null == i ? "" : (null == i ? "null" : T.string(i)) + "&";
                var h = o.name,
                    h = (null == i ? "null" : T.string(i)) + encodeURIComponent(h) + "=",
                    o = o.value;
                i = h + encodeURIComponent(o)
            }
        try {
            t ? _.open("POST", this.url, this.async) : null != i ? (s = this.url.split("?").length <= 1, _.open("GET", this.url + (s ? "?" : "&") + (null == i ? "null" : T.string(i)), this.async), i = null) : _.open("GET", this.url, this.async), _.responseType = "arraybuffer"
        } catch (a) {
            var l = ai.caught(a).unwrap();
            return this.req = null, void this.onError(l.toString())
        }
        _.withCredentials = this.withCredentials, !g.exists(this.headers, function(t) {
            return "Content-Type" == t.name
        }) && t && null == this.postData && _.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        for (a = 0, r = this.headers; a < r.length;) {
            var c = r[a];
            ++a, _.setRequestHeader(c.name, c.value)
        }
        _.send(i), this.async || e()
    },
    __class__: Ui
});
var Ti = R["haxe.io.Error"] = {
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
Ti.__constructs__ = [Ti.Blocked, Ti.Overflow, Ti.OutsideBounds, Ti.Custom];
var Ai = function(t) {
    this.current = 0, this.array = t
};

function Ci(t, e, i) {
    this.xml = e, this.message = t, this.position = i, this.lineNumber = 1;
    for (var s = this.positionAtLine = 0, n = i; s < n;) {
        var _ = s++,
            _ = e.charCodeAt(_);
        10 == _ ? (this.lineNumber++, this.positionAtLine = 0) : 13 != _ && this.positionAtLine++
    }
}(e["haxe.iterators.ArrayIterator"] = Ai).__name__ = "haxe.iterators.ArrayIterator", Ai.prototype = {
    hasNext: function() {
        return this.current < this.array.length
    },
    next: function() {
        return this.array[this.current++]
    },
    __class__: Ai
}, (e["haxe.xml.XmlParserException"] = Ci).__name__ = "haxe.xml.XmlParserException", Ci.prototype = {
    toString: function() {
        return Di.getClass(this).__name__ + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
    },
    __class__: Ci
};
var Ii = function() {};
(e["haxe.xml.Parser"] = Ii).__name__ = "haxe.xml.Parser", Ii.parse = function(t, e) {
    null == e && (e = !1);
    var i = S.createDocument();
    return Ii.doParse(t, e, 0, i), i
}, Ii.doParse = function(t, e, i, s) {
    null == i && (i = 0);
    for (var n = null, _ = 1, a = 1, r = null, o = 0, h = 0, l = 0, c = new w, u = 1, d = -1; i < t.length;) {
        var g, p, m = t.charCodeAt(i);
        switch (_) {
            case 0:
                switch (m) {
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
                if (60 != m) {
                    o = i, _ = 13;
                    continue
                }
                _ = 0, a = 2;
                break;
            case 2:
                switch (m) {
                    case 33:
                        if (91 == t.charCodeAt(i + 1)) {
                            if ("CDATA[" != A.substr(t, i += 2, 6).toUpperCase()) throw ai.thrown(new Ci("Expected <![CDATA[", t, i));
                            _ = 17, o = (i += 5) + 1
                        } else if (68 == t.charCodeAt(i + 1) || 100 == t.charCodeAt(i + 1)) {
                            if ("OCTYPE" != A.substr(t, i + 2, 6).toUpperCase()) throw ai.thrown(new Ci("Expected <!DOCTYPE", t, i));
                            _ = 16, o = (i += 8) + 1
                        } else {
                            if (45 != t.charCodeAt(i + 1) || 45 != t.charCodeAt(i + 2)) throw ai.thrown(new Ci("Expected \x3c!--", t, i));
                            _ = 15, o = (i += 2) + 1
                        }
                        break;
                    case 47:
                        if (null == s) throw ai.thrown(new Ci("Expected node name", t, i));
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
                if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                if (i == o) throw ai.thrown(new Ci("Expected node name", t, i));
                n = S.createElement(A.substr(t, o, i - o)), s.addChild(n), ++h, _ = 0, a = 4;
                continue;
            case 4:
                switch (m) {
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
                if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                if (o == i) throw ai.thrown(new Ci("Expected attribute name", t, i));
                r = A.substr(t, o, i - o);
                if (n.exists(r)) throw ai.thrown(new Ci("Duplicate attribute [" + r + "]", t, i));
                _ = 0, a = 6;
                continue;
            case 6:
                if (61 != m) throw ai.thrown(new Ci("Expected =", t, i));
                _ = 0, a = 7;
                break;
            case 7:
                switch (m) {
                    case 34:
                    case 39:
                        c = new w, _ = 8, o = i + 1, d = m;
                        break;
                    default:
                        throw ai.thrown(new Ci('Expected "', t, i))
                }
                break;
            case 8:
                switch (m) {
                    case 38:
                        var E = i - o;
                        c.b += A.substr(t, o, null == E ? null : E), _ = 18, u = 8, o = i + 1;
                        break;
                    case 60:
                    case 62:
                        if (e) throw ai.thrown(new Ci("Invalid unescaped " + String.fromCodePoint(m) + " in attribute value", t, i));
                        m == d && (g = i - o, c.b += A.substr(t, o, null == g ? null : g), g = c.b, c = new w, n.set(r, g), _ = 0, a = 4);
                        break;
                    default:
                        m == d && (g = i - o, c.b += A.substr(t, o, null == g ? null : g), g = c.b, c = new w, n.set(r, g), _ = 0, a = 4)
                }
                break;
            case 9:
                o = i = Ii.doParse(t, e, i, n), _ = 1;
                break;
            case 10:
                if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                if (o == i) throw ai.thrown(new Ci("Expected node name", t, i));
                var f = A.substr(t, o, i - o);
                if (null == s || 0 != s.nodeType) throw ai.thrown(new Ci("Unexpected </" + f + ">, tag is not open", t, i));
                if (s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                if (f != s.nodeName) {
                    if (s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    throw ai.thrown(new Ci("Expected </" + s.nodeName + ">", t, i))
                }
                _ = 0, a = 12;
                continue;
            case 11:
                if (62 != m) throw ai.thrown(new Ci("Expected >", t, i));
                _ = 1;
                break;
            case 12:
                if (62 == m) return 0 == h && s.addChild(S.createPCData("")), i;
                throw ai.thrown(new Ci("Expected >", t, i));
            case 13:
                60 == m ? (f = i - o, c.b += A.substr(t, o, null == f ? null : f), f = S.createPCData(c.b), c = new w, s.addChild(f), ++h, _ = 0, a = 2) : 38 == m && (p = i - o, c.b += A.substr(t, o, null == p ? null : p), _ = 18, u = 13, o = i + 1);
                break;
            case 14:
                63 == m && 62 == t.charCodeAt(i + 1) && (p = A.substr(t, o + 1, ++i - o - 2), s.addChild(S.createProcessingInstruction(p)), ++h, _ = 1);
                break;
            case 15:
                45 == m && 45 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2) && (s.addChild(S.createComment(A.substr(t, o, i - o))), ++h, i += 2, _ = 1);
                break;
            case 16:
                91 == m ? ++l : 93 == m ? --l : 62 == m && 0 == l && (s.addChild(S.createDocType(A.substr(t, o, i - o))), ++h, _ = 1);
                break;
            case 17:
                93 == m && 93 == t.charCodeAt(i + 1) && 62 == t.charCodeAt(i + 2) && (x = S.createCData(A.substr(t, o, i - o)), s.addChild(x), ++h, i += 2, _ = 1);
                break;
            case 18:
                if (59 == m) {
                    var y = A.substr(t, o, i - o);
                    if (35 == y.charCodeAt(0)) {
                        var x = 120 == y.charCodeAt(1) ? T.parseInt("0" + A.substr(y, 1, y.length - 1)) : T.parseInt(A.substr(y, 1, y.length - 1));
                        c.b += String.fromCodePoint(x)
                    } else if (Object.prototype.hasOwnProperty.call(Ii.escapes.h, y)) c.b += T.string(Ii.escapes.h[y]);
                    else {
                        if (e) throw ai.thrown(new Ci("Undefined entity: " + y, t, i));
                        c.b += T.string("&" + y + ";")
                    }
                    o = i + 1, _ = u
                } else if (!(97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) && 35 != m) {
                    if (e) throw ai.thrown(new Ci("Invalid character in entity: " + String.fromCodePoint(m), t, i));
                    c.b += String.fromCodePoint(38);
                    y = i - o;
                    c.b += A.substr(t, o, null == y ? null : y), o = --i + 1, _ = u
                }
        }++i
    }
    if (1 == _ && (o = i, _ = 13), 13 == _) {
        if (0 != s.nodeType) return i == o && 0 != h || (E = i - o, c.b += A.substr(t, o, null == E ? null : E), s.addChild(S.createPCData(c.b)), ++h), i;
        if (s.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
        throw ai.thrown(new Ci("Unclosed node <" + s.nodeName + ">", t, i))
    }
    if (e || 18 != _ || 13 != u) throw ai.thrown(new Ci("Unexpected end", t, i));
    c.b += String.fromCodePoint(38);
    E = i - o;
    return c.b += A.substr(t, o, null == E ? null : E), s.addChild(S.createPCData(c.b)), ++h, i
};
var ki = function(t) {
    this.output = new w, this.pretty = t
};
(e["haxe.xml.Printer"] = ki).__name__ = "haxe.xml.Printer", ki.print = function(t, e) {
    null == e && (e = !1);
    e = new ki(e);
    return e.writeNode(t, ""), e.output.b
}, ki.prototype = {
    writeNode: function(t, e) {
        switch (t.nodeType) {
            case 0:
                if (this.output.b += T.string(e + "<"), t.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                this.output.b += T.string(t.nodeName);
                for (var i = t.attributes(); i.hasNext();) {
                    var s = i.next();
                    this.output.b += T.string(" " + s + '="');
                    var n = l.htmlEscape(t.get(s), !0);
                    this.output.b += T.string(n), this.output.b += '"'
                }
                if (this.hasChildren(t)) {
                    if (this.output.b += ">", this.pretty && (this.output.b += "\n"), t.nodeType != S.Document && t.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    for (var _ = 0, a = t.children; _ < a.length;) {
                        var r = a[_++];
                        this.writeNode(r, this.pretty ? e + "\t" : e)
                    }
                    if (this.output.b += T.string(e + "</"), t.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                    this.output.b += T.string(t.nodeName), this.output.b += ">", this.pretty && (this.output.b += "\n")
                } else this.output.b += "/>", this.pretty && (this.output.b += "\n");
                break;
            case 1:
                if (t.nodeType == S.Document || t.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                var o = t.nodeValue;
                0 != o.length && (n = e + l.htmlEscape(o), this.output.b += T.string(n), this.pretty && (this.output.b += "\n"));
                break;
            case 2:
                if (this.output.b += T.string(e + "<![CDATA["), t.nodeType == S.Document || t.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                this.output.b += T.string(t.nodeValue), this.output.b += "]]>", this.pretty && (this.output.b += "\n");
                break;
            case 3:
                if (t.nodeType == S.Document || t.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                var h = t.nodeValue,
                    o = new RegExp("[\n\r\t]+", "g".split("u").join(""));
                h = "\x3c!--" + (h = h.replace(o, "")) + "--\x3e", this.output.b += null == e ? "null" : "" + e;
                n = l.trim(h);
                this.output.b += T.string(n), this.pretty && (this.output.b += "\n");
                break;
            case 4:
                if (t.nodeType == S.Document || t.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                this.output.b += T.string("<!DOCTYPE " + t.nodeValue + ">"), this.pretty && (this.output.b += "\n");
                break;
            case 5:
                if (t.nodeType == S.Document || t.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                this.output.b += T.string("<?" + t.nodeValue + "?>"), this.pretty && (this.output.b += "\n");
                break;
            case 6:
                if (t.nodeType != S.Document && t.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
                for (_ = 0, a = t.children; _ < a.length;) {
                    r = a[_++];
                    this.writeNode(r, e)
                }
        }
    },
    hasChildren: function(t) {
        if (t.nodeType != S.Document && t.nodeType != S.Element) throw ai.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : v.toString(t.nodeType)));
        for (var e = 0, i = t.children; e < i.length;) {
            var s = i[e++];
            switch (s.nodeType) {
                case 0:
                case 1:
                    return !0;
                case 2:
                case 3:
                    if (s.nodeType == S.Document || s.nodeType == S.Element) throw ai.thrown("Bad node type, unexpected " + (null == s.nodeType ? "null" : v.toString(s.nodeType)));
                    if (0 != l.ltrim(s.nodeValue).length) return !0
            }
        }
        return !1
    },
    __class__: ki
};
var Di = function() {};
(e["js.Boot"] = Di).__name__ = "js.Boot", Di.getClass = function(t) {
    if (null == t) return null;
    if (t instanceof Array) return Array;
    var e = t.__class__;
    if (null != e) return e;
    t = Di.__nativeClassName(t);
    return null != t ? Di.__resolveNativeClass(t) : null
}, Di.__string_rec = function(n, _) {
    if (null == n) return "null";
    if (5 <= _.length) return "<...>";
    var t, e = typeof n;
    switch ("function" == e && (n.__name__ || n.__ename__) && (e = "object"), e) {
        case "function":
            return "<function>";
        case "object":
            if (n.__enum__) {
                var a = R[n.__enum__].__constructs__[n._hx_index],
                    i = a._hx_name;
                return a.__params__ ? (_ += "\t", i + "(" + function() {
                    for (var t = [], e = 0, i = a.__params__; e < i.length;) {
                        var s = i[e];
                        e += 1, t.push(Di.__string_rec(n[s], _))
                    }
                    return t
                }().join(",") + ")") : i
            }
            if (n instanceof Array) {
                var s = "[";
                _ += "\t";
                for (var r = 0, o = n.length; r < o;) {
                    var h = r++;
                    s += (0 < h ? "," : "") + Di.__string_rec(n[h], _)
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
            var l = null != n.hasOwnProperty,
                c = null;
            for (c in n) l && !n.hasOwnProperty(c) || "prototype" != c && "__class__" != c && "__super__" != c && "__interfaces__" != c && "__properties__" != c && (2 != s.length && (s += ", \n"), s += _ + c + " : " + Di.__string_rec(n[c], _));
            return s += "\n" + (_ = _.substring(1)) + "}";
        case "string":
            return n;
        default:
            return String(n)
    }
}, Di.__interfLoop = function(t, e) {
    if (null == t) return !1;
    if (t == e) return !0;
    var i = t.__interfaces__;
    if (null != i)
        for (var s = 0, n = i.length; s < n;) {
            var _ = i[s++];
            if (_ == e || Di.__interfLoop(_, e)) return !0
        }
    return Di.__interfLoop(t.__super__, e)
}, Di.__instanceof = function(t, e) {
    if (null == e) return !1;
    switch (e) {
        case Array:
            return t instanceof Array;
        case is:
            return "boolean" == typeof t;
        case ts:
            return null != t;
        case es:
            return "number" == typeof t;
        case $i:
            return "number" == typeof t && (0 | t) === t;
        case String:
            return "string" == typeof t;
        default:
            if (null == t) return !1;
            if ("function" == typeof e) {
                if (Di.__downcastCheck(t, e)) return !0
            } else if ("object" == typeof e && Di.__isNativeObj(e) && t instanceof e) return !0;
            return e == ss && null != t.__name__ ? !0 : e == ns && null != t.__ename__ || null != t.__enum__ && R[t.__enum__] == e
    }
}, Di.__downcastCheck = function(t, e) {
    return t instanceof e || !!e.__isInterface__ && Di.__interfLoop(Di.getClass(t), e)
}, Di.__implements = function(t, e) {
    return Di.__interfLoop(Di.getClass(t), e)
}, Di.__cast = function(t, e) {
    if (null == t || Di.__instanceof(t, e)) return t;
    throw ai.thrown("Cannot cast " + T.string(t) + " to " + T.string(e))
}, Di.__nativeClassName = function(t) {
    t = Di.__toStr.call(t).slice(8, -1);
    return "Object" == t || "Function" == t || "Math" == t || "JSON" == t ? null : t
}, Di.__isNativeObj = function(t) {
    return null != Di.__nativeClassName(t)
}, Di.__resolveNativeClass = function(t) {
    return u[t]
};
var Li = function() {};
(e["js.Browser"] = Li).__name__ = "js.Browser", Li.get_supported = function() {
    return "undefined" != typeof window && void 0 !== window.location && "string" == typeof window.location.protocol
}, Li.getLocalStorage = function() {
    try {
        var t, e = window.localStorage;
        return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
    } catch (t) {
        return null
    }
}, Li.getSessionStorage = function() {
    try {
        var t, e = window.sessionStorage;
        return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
    } catch (t) {
        return null
    }
}, Li.createXMLHttpRequest = function() {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
    if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
    throw ai.thrown("Unable to create XMLHttpRequest object.")
};
var Ni = function() {};
(e["js.Cookie"] = Ni).__name__ = "js.Cookie", Ni.set = function(t, e, i, s, n) {
    e = t + "=" + encodeURIComponent(e);
    null != i && (e += ";expires=" + new Date((new Date).getTime() + 1e3 * i).toGMTString()), null != s && (e += ";path=" + s), null != n && (e += ";domain=" + n), window.document.cookie = e
}, Ni.all = function() {
    for (var t = new bi, e = window.document.cookie.split(";"), i = 0; i < e.length;) {
        var s = e[i];
        ++i;
        var n = (s = l.ltrim(s)).split("=");
        n.length < 2 || (s = decodeURIComponent(n[1].split("+").join(" ")), t.h[n[0]] = s)
    }
    return t
}, Ni.get = function(t) {
    return Ni.all().h[t]
}, Ni.exists = function(t) {
    var e = Ni.all();
    return Object.prototype.hasOwnProperty.call(e.h, t)
}, Ni.remove = function(t, e, i) {
    Ni.set(t, "", -10, e, i)
};
var Oi = R["tweezer.EEase"] = {
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
Oi.__constructs__ = [Oi.EASE_IN, Oi.EASE_IN_OUT, Oi.EASE_OUT, Oi.EASE_OUT_IN];
var Mi = R["tweezer.ETween"] = {
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

function Bi() {}
Mi.__constructs__ = [Mi.BACK, Mi.BOUNCE, Mi.CIRCULAR, Mi.CUBIC, Mi.ELASTIC, Mi.EXPONENTIAL, Mi.LINEAR, Mi.QUADRATIC, Mi.QUARTIC, Mi.QUINTIC, Mi.SINE], (e["tweezer.TweenFactory"] = Bi).__name__ = "tweezer.TweenFactory", Bi.createTweenFunction = function(e, i, s, t, n) {
    switch (null == t && (t = Oi.EASE_IN), null == n && (n = Mi.LINEAR), n._hx_index) {
        case 0:
            var _ = n.p_overshoot;
            switch (null == _ && (_ = 1.70158), t._hx_index) {
                case 0:
                    return function(t) {
                        return Vi.easeIn(t, e, i, s, _)
                    };
                case 1:
                    return function(t) {
                        return Vi.easeInOut(t, e, i, s, _)
                    };
                case 2:
                    return function(t) {
                        return Vi.easeOut(t, e, i, s, _)
                    };
                case 3:
                    return function(t) {
                        return Vi.easeOutIn(t, e, i, s, _)
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
                        return Gi.easeIn(t, e, i, s)
                    };
                case 1:
                    return function(t) {
                        return Gi.easeInOut(t, e, i, s)
                    };
                case 2:
                    return function(t) {
                        return Gi.easeOut(t, e, i, s)
                    };
                case 3:
                    return function(t) {
                        return Gi.easeOutIn(t, e, i, s)
                    }
            }
            break;
        case 3:
            switch (t._hx_index) {
                case 0:
                    return function(t) {
                        return zi.easeIn(t, e, i, s)
                    };
                case 1:
                    return function(t) {
                        return zi.easeInOut(t, e, i, s)
                    };
                case 2:
                    return function(t) {
                        return zi.easeOut(t, e, i, s)
                    };
                case 3:
                    return function(t) {
                        return zi.easeOutIn(t, e, i, s)
                    }
            }
            break;
        case 4:
            var a = n.p_period,
                r = n.p_amplitude;
            switch (null == a && (a = .3 * s * (t == Oi.EASE_IN_OUT ? 1.5 : 1)), null == r && (r = 0), t._hx_index) {
                case 0:
                    return function(t) {
                        return Hi.easeIn(t, e, i, s, a, r)
                    };
                case 1:
                    return function(t) {
                        return Hi.easeInOut(t, e, i, s, a, r)
                    };
                case 2:
                    return function(t) {
                        return Hi.easeOut(t, e, i, s, a, r)
                    };
                case 3:
                    return function(t) {
                        return Hi.easeOutIn(t, e, i, s, a, r)
                    }
            }
            break;
        case 5:
            switch (t._hx_index) {
                case 0:
                    return function(t) {
                        return ji.easeIn(t, e, i, s)
                    };
                case 1:
                    return function(t) {
                        return ji.easeInOut(t, e, i, s)
                    };
                case 2:
                    return function(t) {
                        return ji.easeOut(t, e, i, s)
                    };
                case 3:
                    return function(t) {
                        return ji.easeOutIn(t, e, i, s)
                    }
            }
            break;
        case 6:
            return function(t) {
                return Yi.ease(t, e, i, s)
            };
        case 7:
            switch (t._hx_index) {
                case 0:
                    return function(t) {
                        return Ki.easeIn(t, e, i, s)
                    };
                case 1:
                    return function(t) {
                        return Ki.easeInOut(t, e, i, s)
                    };
                case 2:
                    return function(t) {
                        return Ki.easeOut(t, e, i, s)
                    };
                case 3:
                    return function(t) {
                        return Ki.easeOutIn(t, e, i, s)
                    }
            }
            break;
        case 8:
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
        case 9:
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
        case 10:
            switch (t._hx_index) {
                case 0:
                    return function(t) {
                        return Ji.easeIn(t, e, i, s)
                    };
                case 1:
                    return function(t) {
                        return Ji.easeInOut(t, e, i, s)
                    };
                case 2:
                    return function(t) {
                        return Ji.easeOut(t, e, i, s)
                    };
                case 3:
                    return function(t) {
                        return Ji.easeOutIn(t, e, i, s)
                    }
            }
    }
};
var Fi = function(t, e, i, s, n, _, a, r, o, h, l) {
    null == a && (a = 0), null == _ && (_ = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = i, this._endValue = s, this._startDelay = n, this._duration = _, this._endDelay = a, this._easeType = r, this._tweenType = o, this._completeCallback = h, this._isSnap = l, f.call(this, t), this._updater(), this._updates = 0
};
(e["tweezer.Tweezer"] = Fi).__name__ = "tweezer.Tweezer", Fi.__super__ = f, Fi.prototype = t(f.prototype, {
    _init: function() {
        f.prototype._init.call(this), this._tweenFunction = Bi.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
    },
    _updater: function(t) {
        null == t && (t = 0), f.prototype._updater.call(this, t), null != this._updateCallback && (t = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration)), this._updateCallback(this._isSnap ? Math.round(t) : t)), this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
    },
    __class__: Fi
});
var Vi = function() {};
(e["tweezer.tweens.Back"] = Vi).__name__ = "tweezer.tweens.Back", Vi.easeIn = function(t, e, i, s, n) {
    return i * (t /= s) * t * ((n + 1) * t - n) + e
}, Vi.easeOut = function(t, e, i, s, n) {
    return i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e
}, Vi.easeInOut = function(t, e, i, s, n) {
    return (t /= s / 2) < 1 ? i / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
}, Vi.easeOutIn = function(t, e, i, s, n) {
    return t < s / 2 ? Vi.easeOut(2 * t, e, i / 2, s, n) : Vi.easeIn(2 * t - s, e + i / 2, i / 2, s, n)
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
var Gi = function() {};
(e["tweezer.tweens.Circular"] = Gi).__name__ = "tweezer.tweens.Circular", Gi.easeIn = function(t, e, i, s) {
    return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
}, Gi.easeOut = function(t, e, i, s) {
    return t = t / s - 1, i * Math.sqrt(1 - t * t) + e
}, Gi.easeInOut = function(t, e, i, s) {
    return (t /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
}, Gi.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? Gi.easeOut(2 * t, e, i / 2, s) : Gi.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var zi = function() {};
(e["tweezer.tweens.Cubic"] = zi).__name__ = "tweezer.tweens.Cubic", zi.easeIn = function(t, e, i, s) {
    return i * (t /= s) * t * t + e
}, zi.easeOut = function(t, e, i, s) {
    return i * ((t = t / s - 1) * t * t + 1) + e
}, zi.easeInOut = function(t, e, i, s) {
    return (t /= s / 2) < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
}, zi.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? zi.easeOut(2 * t, e, i / 2, s) : zi.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var Hi = function() {};
(e["tweezer.tweens.Elastic"] = Hi).__name__ = "tweezer.tweens.Elastic", Hi.easeIn = function(t, e, i, s, n, _) {
    if (0 == t) return e;
    if (1 == (t /= s)) return e + i;
    i = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
    return -(_ * Math.pow(2, 10 * --t) * Math.sin((t * s - i) * (2 * Math.PI) / n)) + e
}, Hi.easeOut = function(t, e, i, s, n, _) {
    if (0 == t) return e;
    if (1 == (t /= s)) return e + i;
    var a = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
    return _ * Math.pow(2, -10 * t) * Math.sin((t * s - a) * (2 * Math.PI) / n) + i + e
}, Hi.easeInOut = function(t, e, i, s, n, _) {
    if (0 == t) return e;
    if (2 == (t /= s / 2)) return e + i;
    var a = 0 == _ || _ < Math.abs(i) ? (_ = i, n / 4) : n / (2 * Math.PI) * Math.asin(i / _);
    return t < 1 ? _ * Math.pow(2, 10 * --t) * Math.sin((t * s - a) * (2 * Math.PI) / n) * -.5 + e : _ * Math.pow(2, -10 * --t) * Math.sin((t * s - a) * (2 * Math.PI) / n) * .5 + i + e
}, Hi.easeOutIn = function(t, e, i, s, n, _) {
    return t < s / 2 ? Hi.easeOut(2 * t, e, i / 2, s, n, _) : Hi.easeIn(2 * t - s, e + i / 2, i / 2, s, n, _)
};
var ji = function() {};
(e["tweezer.tweens.Exponential"] = ji).__name__ = "tweezer.tweens.Exponential", ji.easeIn = function(t, e, i, s) {
    return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i
}, ji.easeOut = function(t, e, i, s) {
    return t == s ? e + i : 1.001 * i * (1 - Math.pow(2, -10 * t / s)) + e
}, ji.easeInOut = function(t, e, i, s) {
    return 0 == t ? e : t == s ? e + i : (t /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * i : i / 2 * 1.0005 * (2 - Math.pow(2, -10 * --t)) + e
}, ji.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? ji.easeOut(2 * t, e, i / 2, s) : ji.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var Yi = function() {};
(e["tweezer.tweens.Linear"] = Yi).__name__ = "tweezer.tweens.Linear", Yi.ease = function(t, e, i, s) {
    return i * t / s + e
};
var Ki = function() {};
(e["tweezer.tweens.Quadratic"] = Ki).__name__ = "tweezer.tweens.Quadratic", Ki.easeIn = function(t, e, i, s) {
    return i * (t /= s) * t + e
}, Ki.easeOut = function(t, e, i, s) {
    return -i * (t /= s) * (t - 2) + e
}, Ki.easeInOut = function(t, e, i, s) {
    return (t /= s / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
}, Ki.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? Ki.easeOut(2 * t, e, i / 2, s) : Ki.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var Qi = function() {};
(e["tweezer.tweens.Quartic"] = Qi).__name__ = "tweezer.tweens.Quartic", Qi.easeIn = function(t, e, i, s) {
    return i * (t /= s) * t * t * t + e
}, Qi.easeOut = function(t, e, i, s) {
    return -i * ((t = t / s - 1) * t * t * t - 1) + e
}, Qi.easeInOut = function(t, e, i, s) {
    return (t /= s / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
}, Qi.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? Qi.easeOut(2 * t, e, i / 2, s) : Qi.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var Xi = function() {};
(e["tweezer.tweens.Quintic"] = Xi).__name__ = "tweezer.tweens.Quintic", Xi.easeIn = function(t, e, i, s) {
    return i * (t /= s) * t * t * t * t + e
}, Xi.easeOut = function(t, e, i, s) {
    return i * ((t = t / s - 1) * t * t * t * t + 1) + e
}, Xi.easeInOut = function(t, e, i, s) {
    return (t /= s / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
}, Xi.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? Xi.easeOut(2 * t, e, i / 2, s) : Xi.easeIn(2 * t - s, e + i / 2, i / 2, s)
};
var Ji = function() {};

function Zi(t) {
    return t instanceof Array ? new Ai(t) : t.iterator()
}

function qi(t, e) {
    return null == e ? null : (null == e.__id__ && (e.__id__ = u.$haxeUID++), null == t.hx__closures__ ? t.hx__closures__ = {} : i = t.hx__closures__[e.__id__], null == i && (i = e.bind(t), t.hx__closures__[e.__id__] = i), i);
    var i
}(e["tweezer.tweens.Sine"] = Ji).__name__ = "tweezer.tweens.Sine", Ji.easeIn = function(t, e, i, s) {
    return -i * Math.cos(t / s * (Math.PI / 2)) + i + e
}, Ji.easeOut = function(t, e, i, s) {
    return i * Math.sin(t / s * (Math.PI / 2)) + e
}, Ji.easeInOut = function(t, e, i, s) {
    return -i / 2 * (Math.cos(Math.PI * t / s) - 1) + e
}, Ji.easeOutIn = function(t, e, i, s) {
    return t < s / 2 ? Ji.easeOut(2 * t, e, i / 2, s) : Ji.easeIn(2 * t - s, e + i / 2, i / 2, s)
}, u.$haxeUID |= 0, "undefined" != typeof performance && "function" == typeof performance.now && (A.now = performance.now.bind(performance)), e.Math = Math, null == String.fromCodePoint && (String.fromCodePoint = function(t) {
    return t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55232 + (t >> 10)) + String.fromCharCode(56320 + (1023 & t))
}), String.prototype.__class__ = e.String = String, String.__name__ = "String", e.Array = Array, Array.__name__ = "Array", Date.prototype.__class__ = e.Date = Date, Date.__name__ = "Date";
var $i = {},
    ts = {},
    es = Number,
    is = Boolean,
    ss = {},
    ns = {};
oi.content = [{
    name: "revision",
    data: "MTYyDQoyMDI0LzAzLzI2IDIxOjIzOjQxDQo"
}, {
    name: "config",
    data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJleG8yLWV4dHJhYm9sZGl0YWxpYy13ZWJmb250IiAvPg0KCQk8YXNjaWlBcnQ+DQogX19fX19fX19fX18gIF9fXyAgX19fX19fX19fXyAgX18gX19fX19fX19fICBfX19fDQovXyAgX18vIF9fLyB8LyAvIHwvIC8gIF8vIF9fLyAvIC8vIC8gX18vIF8gXC8gX18gXA0KIC8gLyAvIF8vLyAgICAvICAgIC8vIC9fXCBcICAvIF8gIC8gXy8vICwgXy8gL18vIC8NCi9fLyAvX19fL18vfF8vXy98Xy9fX18vX19fLyAvXy8vXy9fX18vXy98X3xcX19fXy8NCg0KCQk8L2FzY2lpQXJ0Pg0KCQk8dXJscz4NCgkJCTx3ZWJzaXRlPmh0dHBzOi8vd3d3LmNiYy5jYS9raWRzY2JjMi9nYW1lczwvd2Vic2l0ZT4NCgkJPC91cmxzPg0KCQk8Z29vZ2xlQW5hbHl0aWNzIGlkPSJVQS0yMjQwNjMzNy0zNyIgZW5hYmxlZD0idHJ1ZSIgLz4NCgkJPGF1ZGlvSG9sZERlbGF5PjUwMDA8L2F1ZGlvSG9sZERlbGF5Pg0KCQk8b3ZlcnJpZGVEZWZhdWx0VW5pdFN0YXRzIHNhZmV0eT0idHJ1ZSIgdmFsdWU9IjMiIC8+DQoJPC9zZXR0aW5ncz4NCgk8Z3VpPg0KCQk8YXVkaW9Ib2xkTWVzc2FnZT5QUkVTUyBUTyBDT05USU5VRTwvYXVkaW9Ib2xkTWVzc2FnZT4NCgkJPGJ1dHRvbnM+DQoJCQk8d2Vic2l0ZT5Nb3JlIGdhbWVzPC93ZWJzaXRlPg0KCQkJPGluc3RydWN0aW9ucz5Ib3cgdG8gcGxheTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPHBsYXk+UGxheSBub3c8L3BsYXk+DQoJCQk8YXZhdGFyPkNoYW5nZSBoZXJvPC9hdmF0YXI+DQoJCQk8c2VsZWN0TGV2ZWw+U3RhcnQgbWF0Y2g8L3NlbGVjdExldmVsPg0KCQkJPHJlcGxheT5QbGF5IGFnYWluPC9yZXBsYXk+DQoJCQk8Y29udGludWU+Q29udGludWU8L2NvbnRpbnVlPg0KCQkJPGZpbmlzaGVkPkdhbWUgb3ZlcjwvZmluaXNoZWQ+DQoJCQk8cmVzZXQ+UmVzZXQgSGVybzwvcmVzZXQ+DQoJCQk8YnV5PkJ1eTwvYnV5Pg0KCQkJPHVucGF1c2U+UmVzdW1lPC91bnBhdXNlPg0KCQkJPGF1ZGlvT24+U291bmQgT248L2F1ZGlvT24+DQoJCQk8YXVkaW9PZmY+U291bmQgT2ZmPC9hdWRpb09mZj4NCgkJCTxmdWxsU2NyZWVuT24+RnVsbCBzY3JlZW48L2Z1bGxTY3JlZW5Pbj4NCgkJCTxmdWxsU2NyZWVuT2ZmPkV4aXQgZnVsbCBzY3JlZW48L2Z1bGxTY3JlZW5PZmY+DQoJCQk8YmFjaz5NYWluIG1lbnU8L2JhY2s+DQoJCQk8dGVzdE1vZGU+DQoJCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCQk8c2lsdmVyPlNpbHZlcjwvc2lsdmVyPg0KCQkJCTxnb2xkPkdvbGQ8L2dvbGQ+DQoJCQk8L3Rlc3RNb2RlPg0KCQkJPGF2YXRhcnM+DQoJCQkJPHVuaXRBPk1lbjwvdW5pdEE+DQoJCQkJPHVuaXRCPldvbWVuPC91bml0Qj4NCgkJCTwvYXZhdGFycz4NCgkJCTxsZXZlbHM+DQoJCQkJPGxldmVsMT5CZWdpbm5lcjwvbGV2ZWwxPg0KCQkJCTxsZXZlbDI+Tm9ybWFsPC9sZXZlbDI+DQoJCQkJPGxldmVsMz5FeHBlcnQ8L2xldmVsMz4NCgkJCTwvbGV2ZWxzPg0KCQk8L2J1dHRvbnM+DQoJCTx1cGdyYWRlcz4NCgkJCTxtb3ZlbWVudD5TcGVlZDwvbW92ZW1lbnQ+DQoJCQk8dGltaW5nPlRpbWluZzwvdGltaW5nPg0KCQkJPHBvd2VyPlBvd2VyPC9wb3dlcj4NCgkJCTxzcGluPlNwaW48L3NwaW4+DQoJCTwvdXBncmFkZXM+DQoJCTxtZWRhbHM+DQoJCQk8bm9uZT5SZXNwZWN0PC9ub25lPg0KCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCTxzaWx2ZXI+U2lsdmVyPC9zaWx2ZXI+DQoJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQk8L21lZGFscz4NCgkJPGxldmVscz4NCgkJCTxsZXZlbDE+TGV2ZWwgMTwvbGV2ZWwxPg0KCQkJPGxldmVsMj5MZXZlbCAyPC9sZXZlbDI+DQoJCQk8bGV2ZWwzPkxldmVsIDM8L2xldmVsMz4NCgkJPC9sZXZlbHM+DQoJCTx1bml0cz4NCgkJCTx1bml0QSB0aXRsZT0iTWVuIiBzdWJ0aXRsZT0iVGVhbSIgLz4NCgkJCTx1bml0QiB0aXRsZT0iV29tZW4iIHN1YnRpdGxlPSJUZWFtIiAvPg0KCQk8L3VuaXRzPg0KCQk8c2NlbmVzPg0KCQkJPG1lbnU+DQoJCQkJPHRpdGxlPlRlbm5pcyBIZXJvPC90aXRsZT4NCgkJCQk8c3VidGl0bGU+U3VtbWVyIFNwb3J0czwvc3VidGl0bGU+DQoJCQk8L21lbnU+DQoJCQk8aW5zdHJ1Y3Rpb25zPg0KCQkJCTx0aXRsZT5Ib3cgdG8gcGxheTwvdGl0bGU+DQoJCQkJPG1lc3NhZ2U+PCFbQ0RBVEFbQ2hvb3NlIHlvdXIgaGVybyBhbmQgY29tcGV0ZSBhZ2FpbnN0IDMgb3Bwb25lbnRzIGluIHRoZSBUZW5uaXMgZXZlbnQuPGJyLz48YnIvPlRhcCB0byB0aW1lIHlvdXIgc2hvdHMgdG8gcGVyZmVjdGlvbi4gIFNlcnZlIGJ5IGhvbGRpbmcgYW5kIHJlbGVhc2luZyB3aGVuIHRoZSBwb3dlciBiYXIgaXMgbWF4ZWQgLSBhdm9pZCBvdmVyIHBvd2VyaW5nITxici8+PGJyLz5XaWxsIHlvdSB3aW4gYSBHb2xkIE1lZGFsIGFjcm9zcyBhbGwgb3Bwb25lbnRzP11dPjwvbWVzc2FnZT4NCgkJCTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPGF2YXRhcj4NCgkJCQk8dGl0bGU+U2VsZWN0IGhlcm88L3RpdGxlPg0KCQkJPC9hdmF0YXI+DQoJCQk8c2VsZWN0TGV2ZWw+DQoJCQkJPHRpdGxlPlNlbGVjdCBUZW5uaXMgZXZlbnQ8L3RpdGxlPg0KCQkJCTxtZXNzYWdlTmV3PlBsYXkgdG8gd2luIGEgbWVkYWw8L21lc3NhZ2VOZXc+DQoJCQkJPG1lc3NhZ2VMb2NrZWQ+UGxheSBfX1BSRVZJT1VTX0xFVkVMX18gdG8gdW5sb2NrPC9tZXNzYWdlTG9ja2VkPg0KCQkJCTxuZXc+TmV3PC9uZXc+DQoJCQkJPGxvY2tlZD5Mb2NrZWQ8L2xvY2tlZD4NCgkJCTwvc2VsZWN0TGV2ZWw+DQoJCQk8Z2FtZT4NCgkJCQk8aHVkPg0KCQkJCQk8Y29pbnM+Q29pbnM8L2NvaW5zPg0KCQkJCQk8c2NvcmU+U2NvcmU8L3Njb3JlPg0KCQkJCQk8YWxlcnRzPg0KCQkJCQkJPHN0YXJ0PlRpZS1CcmVhazwvc3RhcnQ+DQoJCQkJCQk8bWF0Y2hQb2ludD5NYXRjaC1Qb2ludDwvbWF0Y2hQb2ludD4NCgkJCQkJPC9hbGVydHM+DQoJCQkJCTxwcm9tcHRzPg0KCQkJCQkJPHJldHVybj5UYXAgV2hlbiBOZWFyPC9yZXR1cm4+DQoJCQkJCQk8c2VydmljZVdhaXQ+SG9sZCBUbyBTZXJ2ZTwvc2VydmljZVdhaXQ+DQoJCQkJCQk8c2VydmljZVN3aW5nPlJlbGVhc2UgVG8gU3dpbmc8L3NlcnZpY2VTd2luZz4NCgkJCQkJPC9wcm9tcHRzPg0KCQkJCQk8dGltaW5nPg0KCQkJCQkJPHRvb0Vhcmx5PlZlcnkgRWFybHk8L3Rvb0Vhcmx5Pg0KCQkJCQkJPGVhcmx5PkVhcmx5PC9lYXJseT4NCgkJCQkJCTxnb29kPkdvb2Q8L2dvb2Q+DQoJCQkJCQk8cGVyZmVjdD5QZXJmZWN0PC9wZXJmZWN0Pg0KCQkJCQkJPGdyZWF0PkdyZWF0PC9ncmVhdD4NCgkJCQkJCTxsYXRlPkxhdGU8L2xhdGU+DQoJCQkJCQk8dG9vTGF0ZT5WZXJ5IExhdGU8L3Rvb0xhdGU+DQoJCQkJCTwvdGltaW5nPg0KCQkJCTwvaHVkPg0KCQkJPC9nYW1lPg0KCQkJPHJlc3VsdHM+DQoJCQkJPHRpdGxlPlJlc3VsdHM8L3RpdGxlPg0KCQkJCTxtZXNzYWdlPllvdSB3b248L21lc3NhZ2U+DQoJCQk8L3Jlc3VsdHM+DQoJCQk8c2hvcD4NCgkJCQk8dGl0bGU+VHJhaW4geW91ciBoZXJvPC90aXRsZT4NCgkJCQk8bWF4ZWQ+TWF4ZWQ8L21heGVkPg0KCQkJPC9zaG9wPg0KCQk8L3NjZW5lcz4NCgk8L2d1aT4NCjwvZGF0YT4NCg"
}], vi.count = 0, Di.__toStr = {}.toString, S.Element = 0, S.PCData = 1, S.CData = 2, S.Comment = 3, S.DocType = 4, S.ProcessingInstruction = 5, S.Document = 6, hi.USE_CACHE = !1, hi.USE_ENUM_INDEX = !1, hi.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", ui.DEFAULT_RESOLVER = new ci, ui.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", mi.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mi.BYTES = gi.ofString(mi.CHARS), Ii.escapes = ((p = new bi).h.lt = "<", p.h.gt = ">", p.h.amp = "&", p.h.quot = '"', p.h.apos = "'", p), jt.main()
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);