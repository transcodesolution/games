! function(u) {
    "use strict";

    function s() {
        return ks.__string_rec(this, "")
    }
    var h, t = {},
        A = A || {};

    function e(e, t) {
        var s, i = Object.create(e);
        for (s in t) i[s] = t[s];
        return t.toString !== Object.prototype.toString && (i.toString = t.toString), i
    }

    function d(e, t) {
        this.r = new RegExp(e, t.split("u").join(""))
    }

    function I() {}

    function p() {}

    function C() {}

    function k() {}

    function E() {
        this.b = ""
    }

    function l() {}(t.EReg = d).__name__ = "EReg", d.prototype = {
        match: function(e) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(e), this.r.s = e, null != this.r.m
        },
        matched: function(e) {
            if (null != this.r.m && 0 <= e && e < this.r.m.length) return this.r.m[e];
            throw ts.thrown("EReg::matched")
        },
        split: function(e) {
            var t = "#__delim__#";
            return e.replace(this.r, t).split(t)
        },
        __class__: d
    }, (t.HxOverrides = I).__name__ = "HxOverrides", I.strDate = function(e) {
        switch (e.length) {
            case 8:
                var t = e.split(":"),
                    s = new Date;
                return s.setTime(0), s.setUTCHours(t[0]), s.setUTCMinutes(t[1]), s.setUTCSeconds(t[2]), s;
            case 10:
                t = e.split("-");
                return new Date(t[0], t[1] - 1, t[2], 0, 0, 0);
            case 19:
                s = (t = e.split(" "))[0].split("-"), t = t[1].split(":");
                return new Date(s[0], s[1] - 1, s[2], t[0], t[1], t[2]);
            default:
                throw ts.thrown("Invalid date format : " + e)
        }
    }, I.cca = function(e, t) {
        t = e.charCodeAt(t);
        if (t == t) return t
    }, I.substr = function(e, t, s) {
        if (null == s) s = e.length;
        else if (s < 0) {
            if (0 != t) return "";
            s = e.length + s
        }
        return e.substr(t, s)
    }, I.remove = function(e, t) {
        t = e.indexOf(t);
        return -1 != t && (e.splice(t, 1), !0)
    }, I.now = function() {
        return Date.now()
    }, (t.Lambda = p).__name__ = "Lambda", p.has = function(e, t) {
        for (var s = zs(e); s.hasNext();)
            if (s.next() == t) return !0;
        return !1
    }, p.exists = function(e, t) {
        for (var s = zs(e); s.hasNext();)
            if (t(s.next())) return !0;
        return !1
    }, Math.__name__ = "Math", (t.Reflect = C).__name__ = "Reflect", C.field = function(e, t) {
        try {
            return e[t]
        } catch (e) {
            return null
        }
    }, C.fields = function(e) {
        var t = [];
        if (null != e) {
            var s, i = Object.prototype.hasOwnProperty;
            for (s in e) "__id__" != s && "hx__closures__" != s && i.call(e, s) && t.push(s)
        }
        return t
    }, C.isFunction = function(e) {
        return "function" == typeof e && !(e.__name__ || e.__ename__)
    }, C.compareMethods = function(e, t) {
        return e == t || !(!C.isFunction(e) || !C.isFunction(t)) && (e.scope == t.scope && e.method == t.method && null != e.method)
    }, C.deleteField = function(e, t) {
        return !!Object.prototype.hasOwnProperty.call(e, t) && (delete e[t], !0)
    }, (t.Std = k).__name__ = "Std", k.string = function(e) {
        return ks.__string_rec(e, "")
    }, k.parseInt = function(e) {
        if (null != e)
            for (var t = 0, s = e.length; t < s;) {
                var i = t++,
                    n = e.charCodeAt(i);
                if (n <= 8 || 14 <= n && 32 != n && 45 != n) {
                    i = e.charCodeAt(1 + i), i = parseInt(e, 120 == i || 88 == i ? 16 : 10);
                    return isNaN(i) ? null : i
                }
            }
        return null
    }, k.random = function(e) {
        return e <= 0 ? 0 : Math.floor(Math.random() * e)
    }, (t.StringBuf = E).__name__ = "StringBuf", E.prototype = {
        __class__: E
    }, (t.StringTools = l).__name__ = "StringTools", l.htmlEscape = function(e, t) {
        for (var s = "", i = 0, n = e; i < n.length;) {
            var a = i++,
                _ = (e = n).charCodeAt(a);
            55296 <= _ && _ <= 56319 && (_ = _ - 55232 << 10 | 1023 & e.charCodeAt(1 + a)), 65536 <= _ && ++i;
            var r = _;
            switch (r) {
                case 34:
                    s += t ? "&quot;" : String.fromCodePoint(r);
                    break;
                case 38:
                    s += "&amp;";
                    break;
                case 39:
                    s += t ? "&#039;" : String.fromCodePoint(r);
                    break;
                case 60:
                    s += "&lt;";
                    break;
                case 62:
                    s += "&gt;";
                    break;
                default:
                    s += String.fromCodePoint(r)
            }
        }
        return s
    }, l.isSpace = function(e, t) {
        t = I.cca(e, t);
        return 8 < t && t < 14 || 32 == t
    }, l.ltrim = function(e) {
        for (var t = e.length, s = 0; s < t && l.isSpace(e, s);) ++s;
        return 0 < s ? I.substr(e, s, t - s) : e
    }, l.rtrim = function(e) {
        for (var t = e.length, s = 0; s < t && l.isSpace(e, t - s - 1);) ++s;
        return 0 < s ? I.substr(e, 0, t - s) : e
    }, l.trim = function(e) {
        return l.ltrim(l.rtrim(e))
    }, l.replace = function(e, t, s) {
        return e.split(t).join(s)
    }, l.hex = function(e, t) {
        for (var s = ""; s = "0123456789ABCDEF".charAt(15 & e) + s, 0 < (e >>>= 4););
        if (null != t)
            for (; s.length < t;) s = "0" + s;
        return s
    };
    var i = A.ValueType = {
        __ename__: "ValueType",
        __constructs__: null,
        TNull: {
            _hx_name: "TNull",
            _hx_index: 0,
            __enum__: "ValueType",
            toString: s
        },
        TInt: {
            _hx_name: "TInt",
            _hx_index: 1,
            __enum__: "ValueType",
            toString: s
        },
        TFloat: {
            _hx_name: "TFloat",
            _hx_index: 2,
            __enum__: "ValueType",
            toString: s
        },
        TBool: {
            _hx_name: "TBool",
            _hx_index: 3,
            __enum__: "ValueType",
            toString: s
        },
        TObject: {
            _hx_name: "TObject",
            _hx_index: 4,
            __enum__: "ValueType",
            toString: s
        },
        TFunction: {
            _hx_name: "TFunction",
            _hx_index: 5,
            __enum__: "ValueType",
            toString: s
        },
        TClass: ((h = function(e) {
            return {
                _hx_index: 6,
                c: e,
                __enum__: "ValueType",
                toString: s
            }
        })._hx_name = "TClass", h.__params__ = ["c"], h),
        TEnum: ((h = function(e) {
            return {
                _hx_index: 7,
                e: e,
                __enum__: "ValueType",
                toString: s
            }
        })._hx_name = "TEnum", h.__params__ = ["e"], h),
        TUnknown: {
            _hx_name: "TUnknown",
            _hx_index: 8,
            __enum__: "ValueType",
            toString: s
        }
    };

    function U() {}

    function v(e) {
        this.nodeType = e, this.children = [], this.attributeMap = new ws
    }
    i.__constructs__ = [i.TNull, i.TInt, i.TFloat, i.TBool, i.TObject, i.TFunction, i.TClass, i.TEnum, i.TUnknown], (t.Type = U).__name__ = "Type", U.getEnum = function(e) {
        return null == e ? null : A[e.__enum__]
    }, U.createEnum = function(e, t, s) {
        var i = C.field(e, t);
        if (null == i) throw ts.thrown("No such constructor " + t);
        if (C.isFunction(i)) {
            if (null == s) throw ts.thrown("Constructor " + t + " need parameters");
            return i.apply(e, s)
        }
        if (null != s && 0 != s.length) throw ts.thrown("Constructor " + t + " does not need parameters");
        return i
    }, U.createEnumIndex = function(e, t, s) {
        var i = e.__constructs__[t];
        if (null == (i = null == i ? null : i._hx_name)) throw ts.thrown(t + " is not a valid enum constructor index");
        return U.createEnum(e, i, s)
    }, U.typeof = function(e) {
        switch (typeof e) {
            case "boolean":
                return i.TBool;
            case "function":
                return e.__name__ || e.__ename__ ? i.TObject : i.TFunction;
            case "number":
                return Math.ceil(e) == e % 2147483648 ? i.TInt : i.TFloat;
            case "object":
                if (null == e) return i.TNull;
                var t = e.__enum__;
                if (null != t) return i.TEnum(A[t]);
                t = ks.getClass(e);
                return null != t ? i.TClass(t) : i.TObject;
            case "string":
                return i.TClass(String);
            case "undefined":
                return i.TNull;
            default:
                return i.TUnknown
        }
    }, U.enumEq = function(e, t) {
        if (e == t) return !0;
        try {
            var s = e.__enum__;
            if (null == s || s != t.__enum__) return !1;
            if (e._hx_index != t._hx_index) return !1;
            for (var i = A[s].__constructs__[e._hx_index].__params__, n = 0; n < i.length;) {
                var a = i[n];
                if (++n, !U.enumEq(e[a], t[a])) return !1
            }
        } catch (n) {
            return !1
        }
        return !0
    }, U.enumParameters = function(e) {
        var t = A[e.__enum__].__constructs__[e._hx_index].__params__;
        if (null == t) return [];
        for (var s = [], i = 0; i < t.length;) {
            var n = t[i];
            ++i, s.push(e[n])
        }
        return s
    };
    var b = {
        toString: function(e) {
            switch (e) {
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
    (t.Xml = v).__name__ = "Xml", v.parse = function(e) {
        return As.parse(e)
    }, v.createElement = function(e) {
        var t = new v(v.Element);
        if (t.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeName = e, t
    }, v.createPCData = function(e) {
        var t = new v(v.PCData);
        if (t.nodeType == v.Document || t.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeValue = e, t
    }, v.createCData = function(e) {
        var t = new v(v.CData);
        if (t.nodeType == v.Document || t.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeValue = e, t
    }, v.createComment = function(e) {
        var t = new v(v.Comment);
        if (t.nodeType == v.Document || t.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeValue = e, t
    }, v.createDocType = function(e) {
        var t = new v(v.DocType);
        if (t.nodeType == v.Document || t.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeValue = e, t
    }, v.createProcessingInstruction = function(e) {
        var t = new v(v.ProcessingInstruction);
        if (t.nodeType == v.Document || t.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
        return t.nodeValue = e, t
    }, v.createDocument = function() {
        return new v(v.Document)
    }, v.prototype = {
        get: function(e) {
            if (this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return this.attributeMap.h[e]
        },
        set: function(e, t) {
            if (this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            this.attributeMap.h[e] = t
        },
        exists: function(e) {
            if (this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return Object.prototype.hasOwnProperty.call(this.attributeMap.h, e)
        },
        attributes: function() {
            if (this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return new xs(this.attributeMap.h)
        },
        elements: function() {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            for (var e = [], t = 0, s = this.children; t < s.length;) {
                var i = s[t];
                ++t, i.nodeType == v.Element && e.push(i)
            }
            return new Ss(e)
        },
        firstElement: function() {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            for (var e = 0, t = this.children; e < t.length;) {
                var s = t[e];
                if (++e, s.nodeType == v.Element) return s
            }
            return null
        },
        addChild: function(e) {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            null != e.parent && e.parent.removeChild(e), this.children.push(e), e.parent = this
        },
        removeChild: function(e) {
            if (this.nodeType != v.Document && this.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return !!I.remove(this.children, e) && !(e.parent = null)
        },
        toString: function() {
            return Cs.print(this)
        },
        __class__: v
    };
    var n = function() {};

    function a() {}

    function _() {}(t["awe6.interfaces.IPauseable"] = n).__name__ = "awe6.interfaces.IPauseable", n.__isInterface__ = !0, n.prototype = {
        __class__: n
    }, (t["awe6.interfaces.IDisposable"] = a).__name__ = "awe6.interfaces.IDisposable", a.__isInterface__ = !0, a.prototype = {
        __class__: a
    }, (t["awe6.interfaces.IUpdateable"] = _).__name__ = "awe6.interfaces.IUpdateable", _.__isInterface__ = !0, _.prototype = {
        __class__: _
    };
    var r = function() {};

    function o(e) {
        this._kernel = e, this._tools = this._kernel.tools, this._isEntity = ks.__implements(this, y), this._init()
    }(t["awe6.interfaces.IProcess"] = r).__name__ = "awe6.interfaces.IProcess", r.__isInterface__ = !0, r.__interfaces__ = [n, a, _], (t["awe6.core.Process"] = o).__name__ = "awe6.core.Process", o.__interfaces__ = [r], o.prototype = {
        _init: function() {
            this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this.isDisposed = !1, this._age = 0, this._updates = 0
        },
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())
        },
        _disposer: function() {},
        getAge: function(e) {
            return null == e && (e = !0), e ? this._age : this._updates
        },
        update: function(e) {
            null == e && (e = 0), !this.isActive || this.isDisposed || (this._age += e, this._updates++, this._updater(e))
        },
        _updater: function(e) {
            null == e && (e = 0)
        },
        set_isActive: function(e) {
            return this.isDisposed ? this.isActive = !1 : (e != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = e : e ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(De.RESUME, this, !0, !0, !0)) : this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(De.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(De.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(De.RESUME, this, !0, !0, !0))
        },
        _resumer: function() {},
        __class__: o
    };
    var c = function() {};
    (t["awe6.interfaces.IAgendaManager"] = c).__name__ = "awe6.interfaces.IAgendaManager", c.__isInterface__ = !0, c.prototype = {
        __class__: c
    };
    var g = function() {};

    function f() {}(t["awe6.interfaces.IEntityCollection"] = g).__name__ = "awe6.interfaces.IEntityCollection", g.__isInterface__ = !0, g.__interfaces__ = [c], g.prototype = {
        __class__: g
    }, (t["awe6.interfaces.IViewable"] = f).__name__ = "awe6.interfaces.IViewable", f.__isInterface__ = !0, f.prototype = {
        __class__: f
    };
    var y = function() {};

    function m(e, t, s) {
        null == this.get_view() && (this.view = new Ee(e, s, 0, this)), this.set_id(null == t ? e.tools.createGuid() : t), o.call(this, e)
    }

    function w() {}

    function x(e, t, s, i, n, a, _, r, o, h, l) {
        null == _ && (_ = 0), null == a && (a = 0), null == n && (n = 20), null == i && (i = 100), this._stateUp = new S(e, t), this._stateOver = new S(e, s), this.x = a, this.y = _, this.set_width(i), this.set_height(n), this._keyType = r, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = l, m.call(this, e)
    }(t["awe6.interfaces.IEntity"] = y).__name__ = "awe6.interfaces.IEntity", y.__isInterface__ = !0, y.__interfaces__ = [g, f, r], y.prototype = {
        __class__: y
    }, (t["awe6.core.Entity"] = m).__name__ = "awe6.core.Entity", m.__interfaces__ = [y], m.__super__ = o, m.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.agenda = Te.ALWAYS, this._entityAgendaPairs = new ps, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), U.enumEq(this.get_agenda(), Te.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(Te.ALWAYS))), this._isAgendaDirty = !1);
            for (var t = 0, s = this._cachedEntities; t < s.length;) {
                var i = s[t];
                ++t, i.update(e)
            }
        },
        _disposer: function() {
            this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
            var e = this._getEntities();
            e.reverse();
            for (var t = 0; t < e.length;) {
                var s = e[t];
                ++t, s.dispose()
            }
            for (s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var i = s.next();
                this._entityAgendaPairs.remove(i)
            }
            this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(e, t, s, i) {
            if (null == i && (i = 0), null == s && (s = !1), this.isDisposed || null == e) return null;
            null == t && (t = Te.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var a = n.next();
                if (a.entity == e && U.enumEq(a.agenda, t)) return e
            }
            this._isAgendaDirty = !0, e.get_parent() != this && (e.remove(s), e instanceof m && e._setParent(this));
            var _ = new R(e, t),
                r = this._entityAgendaPairs;
            return r.head = new ds(_, r.head), s && (U.enumEq(t, this.get_agenda()) || t == Te.ALWAYS ? this.get_view().addChild(e.get_view(), i) : (e.get_view().set_priority(i), _.isAddedToView = !0)), e
        },
        removeEntity: function(e, t, s) {
            if (null == s && (s = !1), !this.isDisposed && null != e) {
                for (var i = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var a = n.next();
                    a.entity != e || null != t && !U.enumEq(a.agenda, t) || (this._entityAgendaPairs.remove(a), i = !0)
                }
                i && (this._isAgendaDirty = !0, e instanceof m && e._setParent(null), s && e.get_view().remove())
            }
        },
        remove: function(e) {
            null == e && (e = !1), null != this.get_parent() && this.get_parent().removeEntity(this, null, e)
        },
        getEntities: function(e) {
            return this._getEntities(e)
        },
        _getEntities: function(e) {
            if (!this._isAgendaDirty && (null == e || U.enumEq(e, this.get_agenda()))) return this._cachedEntities;
            for (var t = [], s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var i = s.next();
                null != e && !U.enumEq(e, i.agenda) || t.push(i.entity)
            }
            return t.reverse(), t
        },
        getEntitiesByClass: function(e, t, s, i, n) {
            if (null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(e, t, !0);
            for (var a = [], _ = this._getEntities(t), r = 0; r < _.length;) {
                var o = _[r];
                ++r, ks.__instanceof(o, e) && a.push(o), s && (a = a.concat(o.getEntitiesByClass(e, t, !0)))
            }
            return i && null != this.get_parent() && (a = a.concat(this.get_parent().getEntitiesByClass(e, t, !1, !0))), a
        },
        setAgenda: function(e) {
            if (null == e && (e = Te.ALWAYS), U.enumEq(this.get_agenda(), e)) return !1;
            this._isAgendaDirty = !0;
            for (var t = this._entityAgendaPairs.iterator(); t.hasNext();) {
                var s = t.next(),
                    i = U.enumEq(this.get_agenda(), s.agenda) && s.entity.get_view().get_parent() == this.get_view();
                i && s.entity.get_view().remove(), s.isAddedToView = s.isAddedToView || i
            }
            this.agenda = e;
            for (t = this._entityAgendaPairs.iterator(); t.hasNext();)(s = t.next()).isAddedToView && (U.enumEq(Te.ALWAYS, s.agenda) || U.enumEq(this.get_agenda(), s.agenda)) && this.get_view().addChild(s.entity.get_view());
            return !0
        },
        _setParent: function(e) {
            this.parent = e
        },
        set_id: function(e) {
            return this.id = e, this.id
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
        __class__: m
    }), (t["awe6.interfaces.IPositionable"] = w).__name__ = "awe6.interfaces.IPositionable", w.__isInterface__ = !0, w.prototype = {
        __class__: w
    }, (t["awe6.core.BasicButton"] = x).__name__ = "awe6.core.BasicButton", x.__interfaces__ = [w], x.__super__ = m, x.prototype = e(m.prototype, {
        _init: function() {
            m.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, Te.SUB_TYPE(T.UP), !0), this.addEntity(this._stateOver, Te.SUB_TYPE(T.OVER), !0), this.setAgenda(Te.SUB_TYPE(T.UP))
        },
        _updater: function(e) {
            null == e && (e = 0), m.prototype._updater.call(this, e);
            var t = this._kernel.inputs.mouse,
                e = this._isPointInsideRectangle(t.x + this.get_view().x - this.get_view().globalX, t.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            e && t.set_cursorType(Re.BUTTON), e && !this.isOver && this.onRollOver(), !e && this.isOver && (t.set_cursorType(Re.AUTO), this.onRollOut()), this.isOver = e, this.isOver && t.getIsButtonDown() && this.setAgenda(Te.SUB_TYPE(T.OVER)), this.isOver && t.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(e, t, s, i, n, a) {
            return !(e < s) && (!(t < i) && (!(s + n < e) && !(i + a < t)))
        },
        onClick: function() {
            this.setAgenda(Te.SUB_TYPE(T.UP)), null != this.onClickCallback && this.onClickCallback()
        },
        onRollOver: function() {
            this.setAgenda(Te.SUB_TYPE(T.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
        },
        onRollOut: function() {
            this.setAgenda(Te.SUB_TYPE(T.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
        },
        setPosition: function(e, t) {
            this.set_x(e), this.set_y(t)
        },
        set_x: function(e) {
            return this.x = e, null != this.get_view() && this.get_view().set_x(this.x), this.x
        },
        set_y: function(e) {
            return this.y = e, null != this.get_view() && this.get_view().set_y(this.y), this.y
        },
        set_width: function(e) {
            return this.width = e, this.width
        },
        set_height: function(e) {
            return this.height = e, this.height
        },
        __class__: x
    });
    var S = function(e, t) {
        m.call(this, e), this.view = t
    };
    (t["awe6.core._BasicButton._HelperState"] = S).__name__ = "awe6.core._BasicButton._HelperState", S.__super__ = m, S.prototype = e(m.prototype, {
        __class__: S
    });
    var T = A["awe6.core._BasicButton._HelperEState"] = {
        __ename__: "awe6.core._BasicButton._HelperEState",
        __constructs__: null,
        UP: {
            _hx_name: "UP",
            _hx_index: 0,
            __enum__: "awe6.core._BasicButton._HelperEState",
            toString: s
        },
        OVER: {
            _hx_name: "OVER",
            _hx_index: 1,
            __enum__: "awe6.core._BasicButton._HelperEState",
            toString: s
        }
    };
    T.__constructs__ = [T.UP, T.OVER];
    var D = function() {};

    function P(e) {
        this._defaultSecret = e
    }(t["awe6.interfaces.IEncrypter"] = D).__name__ = "awe6.interfaces.IEncrypter", D.__isInterface__ = !0, D.prototype = {
        __class__: D
    }, (t["awe6.core.Encrypter"] = P).__name__ = "awe6.core.Encrypter", P.__interfaces__ = [D], P.prototype = {
        decrypt: function(e, t) {
            null == t && (t = "");
            t = "" != t ? t : this._defaultSecret;
            return this._xor(e, t)
        },
        _xor: function(e, t) {
            for (var s = new hs(new ArrayBuffer(e.length)), i = 0, n = 0, a = s.length; n < a;) {
                var _ = n++;
                s.b[_] = e.b[_] ^ I.cca(t, i), ++i >= t.length && (i = 0)
            }
            return s
        },
        __class__: P
    };
    var R = function(e, t) {
        this.entity = e, this.agenda = t, this.isAddedToView = !1
    };
    (t["awe6.core._Entity._HelperEntityAgendaPair"] = R).__name__ = "awe6.core._Entity._HelperEntityAgendaPair", R.prototype = {
        __class__: R
    };
    var B = function() {};

    function M(e, t, s, i, n, a, _, r, o, h, l, c, u, d) {
        this._kernel = e, this._keyUp = null != t ? t : Ue.UP, this._keyRight = null != s ? s : Ue.RIGHT, this._keyDown = null != i ? i : Ue.DOWN, this._keyLeft = null != n ? n : Ue.LEFT, this._keyPrimary = null != a ? a : Ue.SPACE, this._keySecondary = null != _ ? _ : Ue.Z, this._keyUpAlt = null != r ? r : Ue.W, this._keyRightAlt = null != o ? o : Ue.D, this._keyDownAlt = null != h ? h : Ue.S, this._keyLeftAlt = null != l ? l : Ue.A, this._keyPrimaryAlt = null != c ? c : Ue.Q, this._keySecondaryAlt = null != u ? u : Ue.E, this._joypadTouchType = null != d ? d : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._joypadTouchType != Ie.DISABLED, this._joypadStateCache = {
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

    function N(e) {
        o.call(this, e)
    }

    function O(e) {
        o.call(this, e)
    }(t["awe6.interfaces.IInputJoypad"] = B).__name__ = "awe6.interfaces.IInputJoypad", B.__isInterface__ = !0, B.prototype = {
        __class__: B
    }, (t["awe6.core.InputJoypad"] = M).__name__ = "awe6.core.InputJoypad", M.__interfaces__ = [B], M.prototype = {
        _checkKeyboard: function(e, t) {
            switch (e._hx_index) {
                case 0:
                    return !!this._checkKeyboard(ke.PRIMARY, t) || this._checkKeyboard(ke.SECONDARY, t);
                case 1:
                    return !!t(this._keyUp) || t(this._keyUpAlt);
                case 2:
                    return !!t(this._keyRight) || t(this._keyRightAlt);
                case 3:
                    return !!t(this._keyDown) || t(this._keyDownAlt);
                case 4:
                    return !!t(this._keyLeft) || t(this._keyLeftAlt);
                case 5:
                    return !!t(this._keyPrimary) || t(this._keyPrimaryAlt);
                case 6:
                    return !!t(this._keySecondary) || t(this._keySecondaryAlt)
            }
        },
        getIsButtonDown: function(e) {
            return !!this._checkKeyboard(e, Ys(h = this._kernel.inputs.keyboard, h.getIsKeyDown)) || !!this._isTouchEnabled && this._checkTouchIsDown(e)
        },
        getIsButtonPress: function(e) {
            return !!this._checkKeyboard(e, Ys(h = this._kernel.inputs.keyboard, h.getIsKeyPress)) || !!this._isTouchEnabled && this._checkTouchIsPress(e)
        },
        _getTouchButtonPosition: function(e) {
            switch (e._hx_index) {
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
        _getClosestTouchButton: function(e, t) {
            null == e && (e = this._mouse.x), null == t && (t = this._mouse.y);
            var s = 99999999,
                i = ke.FIRE,
                n = ke.FIRE,
                a = this._getTouchButtonPosition(n),
                _ = this._kernel.tools.distance(e, t, a.x, a.y, !0);
            _ < s && (s = _, i = n);
            n = ke.UP, a = this._getTouchButtonPosition(n);
            (_ = this._kernel.tools.distance(e, t, a.x, a.y, !0)) < s && (s = _, i = n);
            n = ke.RIGHT, a = this._getTouchButtonPosition(n);
            (_ = this._kernel.tools.distance(e, t, a.x, a.y, !0)) < s && (s = _, i = n);
            n = ke.DOWN, a = this._getTouchButtonPosition(n);
            (_ = this._kernel.tools.distance(e, t, a.x, a.y, !0)) < s && (s = _, i = n);
            n = ke.LEFT, a = this._getTouchButtonPosition(n);
            (_ = this._kernel.tools.distance(e, t, a.x, a.y, !0)) < s && (s = _, i = n);
            n = ke.PRIMARY, a = this._getTouchButtonPosition(n);
            return (_ = this._kernel.tools.distance(e, t, a.x, a.y, !0)) < s && (s = _, i = n), i
        },
        _getTouchState: function() {
            var e = null != this._mouse || this._kernel.inputs.mouse instanceof de && (this._mouse = ks.__cast(this._kernel.inputs.mouse, de), !0);
            if (!e || this._mouse.getAge() == this._joypadStateCache.age) return this._joypadStateCache;
            var t = {
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
                s = this._joypadTouchType;
            switch (s._hx_index) {
                case 1:
                    var i = this._getClosestTouchButton();
                    t.isFire = i == ke.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (t.isUp = i == ke.UP, t.isRight = i == ke.RIGHT, t.isDown = i == ke.DOWN, t.isLeft = i == ke.LEFT);
                    break;
                case 2:
                    var n = s.distance;
                    null == n && (n = 20), t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, t.isUp = this._mouse.getButtonDragHeight() < -n, t.isRight = this._mouse.getButtonDragWidth() > n, t.isDown = this._mouse.getButtonDragHeight() > n, t.isLeft = this._mouse.getButtonDragWidth() < -n;
                    break;
                case 3:
                    var a = s.speed;
                    t.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown() && (null == a && (a = 100), i = this._mouse.getDeltaX(), n = this._mouse.getDeltaY(), t.isUp = n < -a, t.isRight = a < i, t.isDown = a < n, t.isLeft = i < -a)
            }
            return this._joypadStateCache = t, this._joypadStateCache
        },
        _checkTouchIsDown: function(e) {
            var t = this._getTouchState();
            switch (e._hx_index) {
                case 1:
                    return t.isUp;
                case 2:
                    return t.isRight;
                case 3:
                    return t.isDown;
                case 4:
                    return t.isLeft;
                case 0:
                case 5:
                case 6:
                    return t.isFire
            }
        },
        _checkTouchIsPress: function(e) {
            var t = this._getTouchState();
            switch (e._hx_index) {
                case 1:
                    return !!t.isUp && !t.isPrevUp;
                case 2:
                    return !!t.isRight && !t.isPrevRight;
                case 3:
                    return !!t.isDown && !t.isPrevDown;
                case 4:
                    return !!t.isLeft && !t.isPrevLeft;
                case 0:
                case 5:
                case 6:
                    return !!t.isFire && !t.isPrevFire
            }
        },
        __class__: M
    }, c = function() {}, (t["awe6.interfaces.IResettable"] = c).__name__ = "awe6.interfaces.IResettable", c.__isInterface__ = !0, c.prototype = {
        __class__: c
    }, B = function() {}, (t["awe6.interfaces.IInputManager"] = B).__name__ = "awe6.interfaces.IInputManager", B.__isInterface__ = !0, B.__interfaces__ = [c], B.prototype = {
        __class__: B
    }, (t["awe6.core.InputManager"] = N).__name__ = "awe6.core.InputManager", N.__interfaces__ = [B], N.__super__ = o, N.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new ue(this._kernel), this.mouse = this._inputMouse = new de(this._kernel)
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e);
            var t = this._inputKeyboard,
                s = e;
            null == s && (s = 0), t.isActive && !t.isDisposed && (t._age += s, t._updates++, t._updater(s)), null == (s = e) && (s = 0), (t = this._inputMouse).isActive && !t.isDisposed && (t._age += s, t._updates++, t._updater(s))
        },
        _disposer: function() {
            var e = this._inputKeyboard;
            e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), (e = this._inputMouse).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), o.prototype._disposer.call(this)
        },
        createJoypad: function(e, t, s, i, n, a, _, r, o, h, l, c, u) {
            return new M(this._kernel, e, t, s, i, n, a, _, r, o, h, l, c, u)
        },
        reset: function() {
            var e = this._inputKeyboard;
            return e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), (e = this._inputMouse).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._init(), !0
        },
        __class__: N
    }), B = function() {}, (t["awe6.interfaces.IMessageManager"] = B).__name__ = "awe6.interfaces.IMessageManager", B.__isInterface__ = !0, B.__interfaces__ = [c], B.prototype = {
        __class__: B
    }, (t["awe6.core.MessageManager"] = O).__name__ = "awe6.core.MessageManager", O.__interfaces__ = [B], O.__super__ = o, O.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new ps, this._messageQueue = new fs
        },
        removeSubscribers: function(e, t, s, i, n) {
            for (var a = this._getSubscriptions(e, t, s, i, n, !0).iterator(); a.hasNext();) {
                var _ = a.next();
                this._subscriptions.remove(_), this._isVerbose && ss.trace("Removing " + k.string(_.sender) + ":" + k.string(_.message), {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 80,
                    className: "awe6.core.MessageManager",
                    methodName: "removeSubscribers"
                })
            }
        },
        sendMessage: function(e, t, s, i, n) {
            null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._sendMessage(e, t, t, s, i, n)
        },
        reset: function() {
            return this.removeSubscribers(), this._messageQueue = new fs, !0
        },
        _updater: function(e) {
            if (null == e && (e = 0), o.prototype._updater.call(this, e), this._isOkToSendMessage())
                for (var t = this._messageQueue.h; null != t;) {
                    var s = t.item,
                        t = t.next,
                        s = s;
                    this._sendMessage(s.message, s.sender, s.target, s.isBubbleDown, s.isBubbleUp, s.isBubbleEverywhere), this._messageQueue.remove(s)
                }
        },
        _isOkToSendMessage: function() {
            return null != this._kernel.scenes.get_scene()
        },
        _sendMessage: function(e, t, s, i, n, a) {
            if (null == a && (a = !1), null == n && (n = !1), null == i && (i = !1), this._isVerbose && ss.trace("Sending message: " + k.string(e) + " from " + t.id + "(" + k.string(ks.getClass(t)) + ") via " + s.id + " (" + k.string(ks.getClass(s)) + ")", {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 119,
                    className: "awe6.core.MessageManager",
                    methodName: "_sendMessage"
                }), this._isOkToSendMessage()) {
                if (a) {
                    var _ = this._kernel.scenes.get_scene().getEntities()[0];
                    if (null != _ && null != _.get_parent()) return void this._sendMessage(e, t, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
                }
                for (var r = this._getSubscriptions(s, e, null, t).iterator(); r.hasNext();) {
                    var o = r.next();
                    if (!this._send(o, e, t)) return
                }
                if (i)
                    for (var h = s.getEntities(), l = 0; l < h.length;) {
                        var c = h[l];
                        ++l, this._sendMessage(e, t, c, !0)
                    }
                n && null != s.get_parent() && ks.__implements(s.get_parent(), y) && this._sendMessage(e, t, s.get_parent(), !1, !0)
            } else this._messageQueue.push(new L(e, t, s, i, n, a))
        },
        _send: function(e, t, s) {
            s = e.handler.apply(e.subscriber, [t, s]);
            return e.isRemovedAfterFirstSend && this._subscriptions.remove(e), s
        },
        _getSubscriptions: function(e, t, s, i, n, a) {
            null == a && (a = !1);
            for (var _ = new ps, r = this._subscriptions.iterator(); r.hasNext();) {
                var o = r.next();
                if (null == e || e == o.subscriber || e == o.sender) {
                    if (null != t && !ks.__instanceof(t, o.messageClass)) {
                        var h = U.typeof(t);
                        if (7 == h._hx_index) {
                            h.e;
                            if (U.getEnum(t) != U.getEnum(o.message) || (h = o.message, A[t.__enum__].__constructs__[t._hx_index]._hx_name != A[h.__enum__].__constructs__[h._hx_index]._hx_name) || U.enumParameters(t).toString() != U.enumParameters(o.message).toString()) continue
                        } else if (t != o.message) continue
                    }
                    if (null == s || C.compareMethods(o.handler, s)) {
                        if (null != i) {
                            if (a) {
                                if (null != o.senderClassType) continue;
                                if (null == o.sender) continue
                            }
                            if (null != o.senderClassType && !ks.__instanceof(i, o.senderClassType)) continue;
                            if (null != o.sender && o.sender != i) continue
                        }
                        _.head = new ds(o, _.head)
                    }
                }
            }
            return _
        },
        __class__: O
    }), B = function(e, t, s, i, n, a) {
        null == a && (a = !1), this.subscriber = e, this.message = t, this.handler = s, this.sender = i, this.senderClassType = n, this.isRemovedAfterFirstSend = a, this.messageClass = ks.getClass(t)
    }, (t["awe6.core._MessageManager._HelperSubscription"] = B).__name__ = "awe6.core._MessageManager._HelperSubscription", B.prototype = {
        __class__: B
    };
    var L = function(e, t, s, i, n, a) {
        null == a && (a = !1), null == n && (n = !1), null == i && (i = !1), this.message = e, this.sender = t, this.target = s, this.isBubbleDown = i, this.isBubbleUp = n, this.isBubbleEverywhere = a
    };

    function F() {}

    function V(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this.type = t, this.isPauseable = s, this.isMuteable = i, this.isSessionSavedOnNext = n, o.call(this, e)
    }

    function H(e) {
        o.call(this, e)
    }

    function G(e, t, s, i, n, a, _, r, o, h) {
        null == o && (o = 0), null == n && (n = !1), null == i && (i = !1), this.font = null != e ? e : "_sans", this.size = null != t ? t : 12, this.color = null != s ? s : 0, this.isBold = i, this.isItalic = n, this.align = null != a ? a : Ne.LEFT, this.spacingHorizontal = null != _ ? _ : 0, this.spacingVertical = null != r ? r : 0, this.thickness = o, this.filters = h
    }

    function j(e) {
        this._kernel = e, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    }

    function K() {}

    function W(e) {
        o.call(this, e)
    }

    function z(e) {
        o.call(this, e)
    }(t["awe6.core._MessageManager._HelperMessage"] = L).__name__ = "awe6.core._MessageManager._HelperMessage", L.prototype = {
        __class__: L
    }, (t["awe6.interfaces.IScene"] = F).__name__ = "awe6.interfaces.IScene", F.__isInterface__ = !0, F.__interfaces__ = [f, g, r], F.prototype = {
        __class__: F
    }, (t["awe6.core.Scene"] = V).__name__ = "awe6.core.Scene", V.__interfaces__ = [F], V.__super__ = o, V.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.isDisposable = !0, this._entity = new m(this._kernel), this.view = this._entity.get_view()
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e), this._entity.update(e)
        },
        _disposer: function() {
            this._entity.dispose(), this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(e, t, s, i) {
            return null == i && (i = 0), null == s && (s = !1), this._entity.addEntity(e, t, s, i)
        },
        removeEntity: function(e, t, s) {
            null == s && (s = !1), this._entity.removeEntity(e, t, s)
        },
        getEntities: function(e) {
            return this._entity.getEntities(e)
        },
        getEntitiesByClass: function(e, t, s, i, n) {
            return null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._entity.getEntitiesByClass(e, t, s, i, !1)
        },
        get_view: function() {
            return this.view
        },
        get_agenda: function() {
            return this._entity.get_agenda()
        },
        setAgenda: function(e) {
            return this._entity.setAgenda(e)
        },
        __class__: V
    }), g = function() {}, (t["awe6.interfaces.ISceneManager"] = g).__name__ = "awe6.interfaces.ISceneManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (t["awe6.core.SceneManager"] = H).__name__ = "awe6.core.SceneManager", H.__interfaces__ = [g], H.__super__ = o, H.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.view = new Ee(this._kernel)
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e), null != this.get_scene() && this.get_scene().update(e), null != this._sceneTransition && this._sceneTransition.update(e)
        },
        _disposer: function() {
            null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), o.prototype._disposer.call(this)
        },
        setScene: function(e) {
            var t = null;
            null != this.get_scene() && (t = this.get_scene().type, t = this._kernel.factory.createSceneTransition(e, t), null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = t, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null), this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(e), this._kernel.overlay.showButton(Be.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(Be.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(Be.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(Be.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(Be.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
        },
        back: function() {
            var e = this._kernel.factory.getBackSceneType(this.get_scene().type);
            null != e && this.setScene(e)
        },
        next: function() {
            this.get_scene().isSessionSavedOnNext && null != this._kernel.get_session() && this._kernel.get_session().save();
            var e = this._kernel.factory.getNextSceneType(this.get_scene().type);
            null != e && this.setScene(e)
        },
        get_scene: function() {
            return this.scene
        },
        __class__: H
    }), g = function() {}, (t["awe6.interfaces.ITextStyle"] = g).__name__ = "awe6.interfaces.ITextStyle", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (t["awe6.core.TextStyle"] = G).__name__ = "awe6.core.TextStyle", G.__interfaces__ = [g], G.prototype = {
        toString: function() {
            return k.string(this.font + "," + this.size + "," + this.color + "," + k.string(this.isBold) + "," + k.string(this.isItalic) + "," + k.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + k.string(this.filters))
        },
        clone: function() {
            return new G(this.font, this.size, this.color, this.isBold, this.isItalic, this.align, this.spacingHorizontal, this.spacingVertical, this.thickness, this.filters)
        },
        __class__: G
    }, g = function() {}, (t["awe6.interfaces.ITools"] = g).__name__ = "awe6.interfaces.ITools", g.__isInterface__ = !0, g.__interfaces__ = [D], g.prototype = {
        __class__: g
    }, (t["awe6.core.Tools"] = j).__name__ = "awe6.core.Tools", j.__interfaces__ = [g], j.prototype = {
        createGuid: function(e, t) {
            return null == t && (t = ""), null == e && (e = !1), e ? t + I.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(), 0, 10) : t + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
        },
        _randomCharacter: function() {
            return I.substr(l.hex(65536 * (1 + Math.random()) | 0, 1), 1, null)
        },
        sortByPriority: function(e, t) {
            e = e.get_priority(), t = t.get_priority();
            return e < t ? -1 : t < e ? 1 : 0
        },
        _isCamelCase: function(e) {
            return e.toUpperCase() != e && (!(-1 < e.indexOf(" ")) && !(-1 < e.indexOf("_")))
        },
        _isConstCase: function(e) {
            return e.toUpperCase() == e && !(-1 < e.indexOf(" "))
        },
        fromCamelCase: function(e) {
            if (null == e || "" == e) return "";
            for (var t = "", s = e.split(""), i = "", n = 0; n < s.length;) {
                var a = s[n];
                ++n, a.toLowerCase() != a && (t += i), t += a, i = " "
            }
            return t
        },
        toConstCase: function(e) {
            if (null == e || "" == e) return "";
            if (this._isConstCase(e)) return e;
            this._isCamelCase(e) && (e = this.fromCamelCase(e));
            return e = l.replace(e, "     ", " "), e = l.replace(e, "    ", " "), e = l.replace(e, "   ", " "), e = l.replace(e, "  ", " "), (e = l.replace(e, " ", "_")).toUpperCase()
        },
        limit: function(e, t, s) {
            return s < e ? s : e < t ? t : e
        },
        distance: function(e, t, s, i, n) {
            null == n && (n = !1);
            e = s - e, t = i - t, t = e * e + t * t;
            return n ? t : Math.sqrt(t)
        },
        shuffle: function(e) {
            for (var t = e.slice(), s = t.length; 1 < s;) {
                var i = k.random(s),
                    n = t[--s];
                t[s] = t[i], t[i] = n
            }
            return t
        },
        serialize: function(e) {
            return ns.run(e)
        },
        unserialize: function(e) {
            return rs.run(e)
        },
        decrypt: function(e, t) {
            return null == t && (t = ""), this._encrypter.decrypt(e, t)
        },
        __class__: j
    }, D = function() {}, (t["awe6.interfaces.IAssetManager"] = D).__name__ = "awe6.interfaces.IAssetManager", D.__isInterface__ = !0, D.prototype = {
        __class__: D
    }, (t["awe6.interfaces.IAssetManagerProcess"] = K).__name__ = "awe6.interfaces.IAssetManagerProcess", K.__isInterface__ = !0, K.__interfaces__ = [r, D], (t["awe6.core.drivers.AAssetManager"] = W).__name__ = "awe6.core.drivers.AAssetManager", W.__interfaces__ = [K], W.__super__ = o, W.prototype = e(o.prototype, {
        _init: function() {
            this._packageId = this._kernel.getConfig("settings.assets.packages.default"), null == this._packageId && (this._packageId = "assets"), o.prototype._init.call(this)
        },
        getAsset: function(e, t, s) {
            return null == t && (t = this._packageId), this._driverGetAsset(e, t, s)
        },
        _driverGetAsset: function(e, t, s) {
            return null
        },
        __class__: W
    }), g = function() {}, (t["awe6.interfaces.IAudioManager"] = g).__name__ = "awe6.interfaces.IAudioManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (t["awe6.core.drivers.AAudioManager"] = z).__name__ = "awe6.core.drivers.AAudioManager", z.__interfaces__ = [g], z.__super__ = o, z.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e);
            for (var t = 0, s = this._sounds; t < s.length;) {
                var i = s[t];
                ++t, i.isDisposed && I.remove(this._sounds, i)
            }
        },
        _disposer: function() {
            for (var e = 0, t = this._sounds; e < t.length;) {
                var s = t[e];
                ++e, s.dispose()
            }
            this.set_isMute(!1), o.prototype._disposer.call(this)
        },
        start: function(e, t, s, i, n, a, _, r) {
            if ((null == _ && (_ = !1), null == a && (a = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null == t && (t = Ae.DEFAULT), _) && 0 != this._getSounds(e, t).length) return;
            this._sounds.push(this._driverSoundFactory(e, t, s, i, n, a, r))
        },
        _driverSoundFactory: function(e, t, s, i, n, a, _) {
            return null == a && (a = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new Y(this._kernel, e, this._packageId, t, s, i, n, a, _)
        },
        stop: function(e, t) {
            for (var s = this._getSounds(e, t), i = 0; i < s.length;) {
                var n = s[i];
                ++i, n.stop()
            }
        },
        transform: function(e, t, s, i, n) {
            null == n && (n = !1), null == i && (i = 0), null == s && (s = 1);
            for (var a = this._getSounds(e, t), _ = 0; _ < a.length;) {
                var r = a[_];
                ++_, r.transform(s, i, n)
            }
        },
        set_isMute: function(e) {
            return this.isMute = e, this._driverSetIsMute(e), this.isMute
        },
        _driverSetIsMute: function(e) {},
        _getSounds: function(e, t) {
            var s = [];
            if (null == e && null == t) s = this._sounds.slice();
            else if (null == t)
                for (var i = 0, n = this._sounds; i < n.length;) {
                    var a = n[i];
                    ++i, a.id == e && s.push(a)
                } else if (null == e)
                    for (i = 0, n = this._sounds; i < n.length;) {
                        a = n[i];
                        ++i, U.enumEq(a.audioChannelType, t) && s.push(a)
                    } else
                        for (i = 0, n = this._sounds; i < n.length;) {
                            a = n[i];
                            ++i, a.id == e && U.enumEq(a.audioChannelType, t) && s.push(a)
                        }
            return s
        },
        __class__: z
    });
    var Y = function(e, t, s, i, n, a, _, r, o) {
        null == r && (r = 0), null == _ && (_ = 1), null == a && (a = 0), null == n && (n = 1), this._kernel = e, this.isDisposed = !1, this.id = t, this._packageId = s, this.audioChannelType = null != i ? i : Ae.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = a, this._volume = _, this._pan = r, this._onCompleteCallback = o, this._init()
    };

    function X(e, t, s) {
        null == t && (t = !1), this._context = e, this.isDebug = t, this._config = s, this.config = new ws, null == (s = !0) && (s = !1), s && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ce.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = Ie.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Me.GAME, this.keyPause = Ue.P, this.keyMute = Ue.M, this.keyNext = Ue.SPACE, this.keyBack = Ue.ESCAPE, this.keySpecial = Ue.CONTROL), this._configurer(s), this._driverInit()
    }

    function Q(e) {
        o.call(this, e)
    }(t["awe6.core.drivers._AHelperSound"] = Y).__name__ = "awe6.core.drivers._AHelperSound", Y.__interfaces__ = [a], Y.prototype = {
        _init: function() {
            this._driverInit()
        },
        _driverInit: function() {},
        transform: function(e, t, s) {
            null == s && (s = !1), null == t && (t = 0), null == e && (e = 1), this.isDisposed || (s ? (this._volume = e, this._pan = t) : (this._volume = this._kernel.tools.limit(e, 0, 1), this._pan = this._kernel.tools.limit(t, -1, 1)), this._driverTransform(s))
        },
        _driverTransform: function(e) {
            null == e && (e = !1)
        },
        stop: function() {
            this._driverStop(), this.dispose()
        },
        _driverStop: function() {},
        dispose: function() {
            this.isDisposed || (this.isDisposed = !0, this._driverStop())
        },
        __class__: Y
    }, D = function() {}, (t["awe6.interfaces.IFactory"] = D).__name__ = "awe6.interfaces.IFactory", D.__isInterface__ = !0, D.prototype = {
        __class__: D
    }, (t["awe6.core.drivers.AFactory"] = X).__name__ = "awe6.core.drivers.AFactory", X.__interfaces__ = [a, D], X.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == I.substr(this._config, 0, 5) && this._traverseElements(v.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(e, t) {
            0 != t.length && (t += ".");
            for (var s = e; s.hasNext();) {
                var i = s.next();
                if (i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                var n, a = t + i.nodeName;
                if (i.elements().hasNext() && this._traverseElements(i.elements(), a), i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                if (null != i.children[0]) {
                    if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    n = "<![CDATA[" == I.substr(Cs.print(i.children[0]), 0, 9)
                } else n = !1;
                if (n) {
                    if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    var _ = i.children[0];
                    if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    var r = Cs.print(i.children[0]).split("<![CDATA[").join("").split("]]>").join("");
                    if (_.nodeType == v.Document || _.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == _.nodeType ? "null" : b.toString(_.nodeType)));
                    _.nodeValue = r
                }
                if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                if (null == i.children[0]) this.config.h[a] = "";
                else {
                    if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    _ = i.children[0].nodeType;
                    if (_ != v.Element && _ != v.Document) {
                        var o, r = this.config;
                        if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        if (null == i.children[0]) o = "";
                        else {
                            if (i.nodeType != v.Document && i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                            _ = i.children[0];
                            if (_.nodeType == v.Document || _.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == _.nodeType ? "null" : b.toString(_.nodeType)));
                            o = _.nodeValue
                        }
                        r.h[a] = o
                    } else this.config.h[a] = ""
                }
                for (var h = i.attributes(); h.hasNext();) {
                    var l = h.next(),
                        c = a + "." + l,
                        u = this.config,
                        l = i.get(l);
                    u.h[c] = l
                }
            }
        },
        _configurer: function(e) {
            null == e && (e = !1)
        },
        _launchKernel: function() {
            var e;
            null == this._concreteKernel && (null == (e = !1) && (e = !1), e && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = Ce.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = Ie.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Me.GAME, this.keyPause = Ue.P, this.keyMute = Ue.M, this.keyNext = Ue.SPACE, this.keyBack = Ue.ESCAPE, this.keySpecial = Ue.CONTROL), this._configurer(e), this._concreteKernel = new pe(this, this._context))
        },
        _getAssetUrls: function() {
            for (var e = [], t = 0; t < 1e3;) {
                var s = "settings.assets.url" + t++;
                Object.prototype.hasOwnProperty.call(this.config.h, s) && e.push(k.string(this.config.h[s]))
            }
            return e
        },
        onInitComplete: function(e) {
            null == this._kernel && null != e && (this._kernel = e, this._tools = this._kernel.tools, this.id = I.substr(this._tools.toConstCase(l.trim(this.id)), 0, 16), this.version = I.substr(l.trim(this.version), 0, 16), this.author = I.substr(l.trim(this.author), 0, 16))
        },
        createAssetManager: function() {
            return ks.__implements(this._kernel.assets, K) ? ks.__cast(this._kernel.assets, K) : new oe(this._kernel)
        },
        createEncrypter: function() {
            return new P(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new ge(this._kernel)
        },
        createPreloader: function() {
            return new fe(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(e) {
            return null == e && (e = this.startingSceneType), new V(this._kernel, e)
        },
        createSceneTransition: function(e, t) {
            return new me(this._kernel)
        },
        createSession: function(e) {
            return new _e(this._kernel, e)
        },
        createTextStyle: function(e) {
            return new G
        },
        getBackSceneType: function(e) {
            return null
        },
        getNextSceneType: function(e) {
            return null
        },
        dispose: function() {
            var e;
            this.isDisposed || null == this._concreteKernel || (this.isDisposed = !0, this._driverDisposer(), (e = this._concreteKernel).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._concreteKernel = null, this._kernel = null, this.config = null)
        },
        _driverDisposer: function() {},
        __class__: X
    }, g = function() {}, (t["awe6.interfaces.IInputKeyboard"] = g).__name__ = "awe6.interfaces.IInputKeyboard", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (t["awe6.core.drivers.AInputKeyboard"] = Q).__name__ = "awe6.core.drivers.AInputKeyboard", Q.__interfaces__ = [g], Q.__super__ = o, Q.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this._reset()
        },
        _driverInit: function() {},
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e);
            for (var t = Object.create(null), s = [], i = 0, n = this._buffer; i < n.length;) {
                var a = n[i];
                ++i;
                var _ = null == a.keyCode ? "null" : "" + a.keyCode;
                Object.prototype.hasOwnProperty.call(t, _) ? s.push(a) : a.isDown ? this._keys[a.keyCode].isDown || (this._onDown(a.keyCode), t[_] = !0) : this._keys[a.keyCode].isDown && (this._onUp(a.keyCode), t[_] = !0)
            }
            this._buffer = s.slice();
            for (i = 0, n = this._keys; i < n.length;) {
                a = n[i];
                ++i, a.isDown ? a.updatesDown++ : a.updatesUp++, a.isDown ? a.timeDown += e : a.timeUp += e
            }
        },
        _disposer: function() {
            this._keys = null, o.prototype._disposer.call(this)
        },
        _addEvent: function(e, t) {
            this._buffer.push(new Z(e, t))
        },
        _onDown: function(e) {
            e = this._keys[e];
            e.isUsed = !0, e.isDown = !0, e.timeUpPrevious = e.timeUp, e.updatesUpPrevious = e.updatesUp, e.updatesUp = 0, e.timeUp = 0
        },
        _onUp: function(e) {
            e = this._keys[e];
            e.isDown = !1, e.timeDownPrevious = e.timeDown, e.updatesDownPrevious = e.updatesDown, e.updatesDown = 0, e.timeDown = 0
        },
        _reset: function(e) {
            this._buffer = [], this._keys = [];
            for (var t = 0; t < 256;) {
                var s = t++;
                this._keys[s] = new J(this._kernel)
            }
        },
        getIsKeyDown: function(e) {
            if (null == e) return !1;
            e = this.getKeyCode(e);
            return this._keys[e].isDown
        },
        getIsKeyPress: function(e) {
            if (null == e) return !1;
            e = this.getKeyCode(e);
            return 1 == this._keys[e].updatesDown
        },
        getIsKeyRelease: function(e) {
            if (null == e) return !1;
            e = this.getKeyCode(e);
            return !!this._keys[e].isUsed && 1 == this._keys[e].updatesUp
        },
        getKeyCode: function(e) {
            switch (e._hx_index) {
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
                    return 0 | e.value
            }
        },
        getKey: function(e) {
            for (var t = Ue.__constructs__, s = new Array(t.length), i = 0, n = t.length; i < n;) s[_ = i++] = t[_]._hx_name;
            var a = s;
            a.pop();
            for (i = 0; i < a.length;) {
                var _ = a[i];
                ++i;
                var r = U.createEnum(Ue, _);
                if (this.getKeyCode(r) == e) return r
            }
            return Ue.SUB_TYPE(e)
        },
        __class__: Q
    });
    var J = function(e) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = e.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = e.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = e.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = e.tools.BIG_NUMBER
    };
    (t["awe6.core.drivers._AInputKeyboard._HelperKey"] = J).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKey", J.prototype = {
        __class__: J
    };
    var Z = function(e, t) {
        this.keyCode = e, this.isDown = t
    };

    function q(e) {
        o.call(this, e)
    }(t["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = Z).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKeyEvent", Z.prototype = {
        __class__: Z
    }, D = function() {}, (t["awe6.interfaces.IInputMouse"] = D).__name__ = "awe6.interfaces.IInputMouse", D.__isInterface__ = !0, D.prototype = {
        __class__: D
    }, (t["awe6.core.drivers.AInputMouse"] = q).__name__ = "awe6.core.drivers.AInputMouse", q.__interfaces__ = [D], q.__super__ = o, q.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(Re.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(e) {
            null == e && (e = 0), this._deltaTimePrev = e, o.prototype._updater.call(this, e), this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._handleButton(Pe.LEFT, 0 < this._buffer.length ? this._buffer.shift() : this._buttonLeft.isDown, e), this._handleButton(Pe.MIDDLE, this._isMiddleDown(), e), this._handleButton(Pe.RIGHT, this._isRightDown(), e), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += e), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
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
        _handleButton: function(e, t, s) {
            null == s && (s = 0);
            e = this._getButton(e);
            t ? (e.isDown || (e.timeUpPrevious = e.timeUp, e.updatesUpPrevious = e.updatesUp, e.timeUp = e.updatesUp = 0, e.clickX = this.x, e.clickY = this.y), e.timeDown += s, e.updatesDown++, e.isDown = !0) : (e.isDown && (e.timeDownPrevious = e.timeDown, e.updatesDownPrevious = e.updatesDown, e.timeDown = e.updatesDown = 0), e.timeUp += s, e.updatesUp++, e.isDown = !1)
        },
        _disposer: function() {
            o.prototype._disposer.call(this)
        },
        _reset: function(e) {
            this._buffer = [], this._buttonLeft = new $(this._kernel), this._buttonMiddle = new $(this._kernel), this._buttonRight = new $(this._kernel)
        },
        _getButton: function(e) {
            switch (null == e && (e = Pe.LEFT), e._hx_index) {
                case 0:
                    return this._buttonLeft;
                case 1:
                    return this._buttonMiddle;
                case 2:
                    return this._buttonRight
            }
        },
        getDeltaX: function(e) {
            null == e && (e = !0);
            var t = this._deltaX;
            return e && (t *= 1e3 / this._deltaTimePrev), Math.round(t)
        },
        getDeltaY: function(e) {
            null == e && (e = !0);
            var t = this._deltaY;
            return e && (t *= 1e3 / this._deltaTimePrev), Math.round(t)
        },
        getIsButtonDown: function(e) {
            return this._getButton(e).isDown
        },
        getIsButtonRelease: function(e) {
            return 1 == this._getButton(e).updatesUp
        },
        getButtonDownDuration: function(e, t, s) {
            null == s && (s = !1), null == t && (t = !0);
            e = this._getButton(e);
            return s ? t ? e.timeDownPrevious : e.updatesDownPrevious : t ? e.timeDown : e.updatesDown
        },
        getButtonDragWidth: function(e) {
            e = this._getButton(e);
            return e.isDown ? this.x - e.clickX : 0
        },
        getButtonDragHeight: function(e) {
            e = this._getButton(e);
            return e.isDown ? this.y - e.clickY : 0
        },
        set_isVisible: function(e) {
            return this.isVisible = e, this.isVisible
        },
        set_cursorType: function(e) {
            return this.cursorType = e, this.cursorType
        },
        __class__: q
    });
    var $ = function(e) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = e.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = e.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = e.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = e.tools.BIG_NUMBER
    };

    function ee(e, t) {
        this.factory = e, this._context = t, this.tools = this._tools = new j(this), o.call(this, this)
    }(t["awe6.core.drivers._AInputMouse._HelperButton"] = $).__name__ = "awe6.core.drivers._AInputMouse._HelperButton", $.prototype = {
        __class__: $
    }, g = function() {}, (t["awe6.interfaces.ILogger"] = g).__name__ = "awe6.interfaces.ILogger", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, D = function() {}, (t["awe6.interfaces.IKernel"] = D).__name__ = "awe6.interfaces.IKernel", D.__isInterface__ = !0, D.__interfaces__ = [g, n], D.prototype = {
        __class__: D
    }, (t["awe6.core.drivers.AKernel"] = ee).__name__ = "awe6.core.drivers.AKernel", ee.__interfaces__ = [D], ee.__super__ = o, ee.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._view = new Ee(this, this._context, 0, this), this._processes = new fs, this._helperFramerate = new te(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new oe(this._kernel), this.audio = this._audioManager = new he(this._kernel), this.inputs = this._inputManager = new N(this._kernel), this.scenes = this._sceneManager = new H(this._kernel), this.messenger = this._messageManager = new O(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function(e) {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var t = this.factory.createAssetManager();
            t != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = t, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new ye(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
        },
        _updater: function(e) {
            null == e && (e = 0), this._helperFramerate.update();
            var t = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval;
            o.prototype._updater.call(this, t);
            for (var s = this._processes.h; null != s;) {
                var i = s.item,
                    s = s.next;
                i.update(t)
            }
            var n = this._view;
            null == (e = t) && (e = 0), n.isActive && !n.isDisposed && (n._age += e, n._updates++, n._updater(e))
        },
        _disposer: function() {
            for (var e = this._processes.h; null != e;) {
                var t = e.item,
                    e = e.next;
                this._removeProcess(t)
            }
            ks.__implements(this.factory, a) && ks.__cast(this.factory, a).dispose(), this.factory = null;
            var s = this._view;
            s.isDisposed || (s.isDisposed = !0, s.set_isActive(!1), s._disposer()), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), o.prototype._disposer.call(this)
        },
        getConfig: function(e) {
            return Object.prototype.hasOwnProperty.call(this.factory.config.h, e) ? this.factory.config.h[e] : null
        },
        log: function(e) {
            null != this._logger ? this._logger.log(e) : this.isDebug && ss.trace("LOG: " + k.string(e), {
                fileName: "awe6/core/drivers/AKernel.hx",
                lineNumber: 248,
                className: "awe6.core.drivers.AKernel",
                methodName: "log"
            })
        },
        getFramerate: function(e) {
            return null == e && (e = !0), e ? this._helperFramerate.framerate : this.factory.targetFramerate
        },
        _addProcess: function(e, t) {
            null == t && (t = !0), null != e && (t ? this._processes.add(e) : this._processes.push(e))
        },
        _removeProcess: function(e) {
            return null != e && (e.dispose(), this._processes.remove(e))
        },
        set_isEyeCandy: function(e) {
            return this.factory.isEyeCandyOptionEnabled ? (this.isEyeCandy = e, this._driverSetIsEyeCandy(e)) : this.isEyeCandy = !0, this.isEyeCandy
        },
        _driverSetIsEyeCandy: function(e) {},
        set_isFullScreen: function(e) {
            return !this.factory.isFullScreenOptionEnabled || U.enumEq(this.factory.fullScreenType, Ce.DISABLED) ? this.isFullScreen = !1 : (this.isFullScreen = e, this._driverSetIsFullScreen(e)), this.isFullScreen
        },
        _driverSetIsFullScreen: function(e) {},
        _pauser: function() {
            o.prototype._pauser.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().pause()
        },
        _resumer: function() {
            o.prototype._resumer.call(this), null != this.scenes.get_scene() && this.scenes.get_scene().resume()
        },
        get_session: function() {
            return this.session
        },
        set_session: function(e) {
            return this.session = e, this.get_session()
        },
        __class__: ee
    });
    var te = function(e) {
        this.framerate = e, this._timeAtLastUpdate = I.now() / 1e3 * 1e3 | 0
    };

    function se(e, t, s, i, n, a, _, r, o, h, l, c, u, d, p, g, f) {
        null == f && (f = .35), null == g && (g = 0), null == p && (p = 8), null == s && (s = 30), null == t && (t = 30), null == i && (i = new Ee(e)), null == n && (n = new Ee(e)), null == a && (a = new Ee(e)), null == _ && (_ = new Ee(e)), null == r && (r = new Ee(e)), null == o && (o = new Ee(e)), null == h && (h = new Ee(e)), null == l && (l = new Ee(e)), null == c && (c = new Ee(e)), null == u && (u = new Ee(e)), null == d && (d = new Ee(e)), this._borderView = i, this._buttonBack = new x(e, n, a, t, s), this._buttonMute = new x(e, _, r, t, s), this._buttonUnmute = new x(e, o, h, t, s), this._buttonPause = new x(e, l, c, t, s), this._buttonUnpause = new x(e, u, d, t, s), this._pauseBlur = p, this._pauseColor = g, this._pauseAlpha = f, this._context = new createjs.Container, m.call(this, e, null, this._context)
    }

    function ie(e, t, s) {
        null == s && (s = !1), this._assets = t, this._isDecached = s, o.call(this, e)
    }

    function ne(e) {
        this._context = new createjs.Container, m.call(this, e, null, this._context)
    }

    function ae(e, t) {
        null == t && (t = 500), this._duration = t, this._context = new createjs.Container, m.call(this, e, null, this._context)
    }(t["awe6.core.drivers._AKernel._HelperFramerate"] = te).__name__ = "awe6.core.drivers._AKernel._HelperFramerate", te.prototype = {
        update: function() {
            this.timeInterval = (I.now() / 1e3 * 1e3 | 0) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = I.now() / 1e3 * 1e3 | 0
        },
        __class__: te
    }, n = function() {}, (t["awe6.interfaces.IOverlay"] = n).__name__ = "awe6.interfaces.IOverlay", n.__isInterface__ = !0, n.prototype = {
        __class__: n
    }, D = function() {}, (t["awe6.interfaces.IOverlayProcess"] = D).__name__ = "awe6.interfaces.IOverlayProcess", D.__isInterface__ = !0, D.__interfaces__ = [f, r, n], (t["awe6.core.drivers.AOverlay"] = se).__name__ = "awe6.core.drivers.AOverlay", se.__interfaces__ = [D], se.__super__ = m, se.prototype = e(m.prototype, {
        _init: function() {
            m.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new Ee(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new Ee(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new Ee(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100;
            var e = Ys(this, this.activateButton),
                t = Be.BACK,
                s = function() {
                    e(t)
                };
            this._buttonBack.onClickCallback = s;
            var i = Ys(this, this.activateButton),
                n = Be.MUTE,
                s = function() {
                    i(n)
                };
            this._buttonMute.onClickCallback = s;
            var a = Ys(this, this.activateButton),
                _ = Be.PAUSE,
                s = function() {
                    a(_)
                };
            this._buttonPause.onClickCallback = s;
            var r = Ys(this, this.activateButton),
                o = Be.UNMUTE,
                s = function() {
                    r(o)
                };
            this._buttonUnmute.onClickCallback = s;
            var h = Ys(this, this.activateButton),
                l = Be.UNPAUSE,
                s = function() {
                    h(l)
                };
            this._buttonUnpause.onClickCallback = s, this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var c = this._buttonBack.height,
                u = this._buttonBack.width,
                s = this._kernel.factory.width - 4 * u,
                c = c;
            this.positionButton(Be.BACK, s, c), this.positionButton(Be.MUTE, s += u, c), this.positionButton(Be.UNMUTE, s, c), this.positionButton(Be.PAUSE, s += u, c), this.positionButton(Be.UNPAUSE, s, c)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(e) {
            var t;
            null == e && (e = 0), m.prototype._updater.call(this, e), 0 < this._flashDuration && (this._flashDuration -= this._flashAsTime ? e : 1, t = this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), this._flashAlpha = 1 < t ? 1 : t < 0 ? 0 : t), this._flashView.set_isVisible(0 < this._flashAlpha), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? Be.BACK : Be.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? Be.PAUSE : Be.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? Be.UNMUTE : Be.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(e), this._pauseView.update(e))
        },
        _disposer: function() {
            null != this.get_pauseEntity() && this.get_pauseEntity().dispose(), this.get_view().dispose(), m.prototype._disposer.call(this)
        },
        _getButton: function(e) {
            switch (e._hx_index) {
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
                    e.value;
                    return null
            }
        },
        showButton: function(e, t) {
            null == t && (t = !0);
            e = this._getButton(e);
            null != e && (t ? this.addEntity(e, null, !0) : this.removeEntity(e, null, !0))
        },
        positionButton: function(e, t, s, i, n) {
            e = this._getButton(e);
            null != e && (e.set_x(t), e.set_y(s), null != i && e.set_width(i), null != n && e.set_height(n))
        },
        hideButtons: function() {
            this.showButton(Be.BACK, !1), this.showButton(Be.MUTE, !1), this.showButton(Be.UNMUTE, !1), this.showButton(Be.PAUSE, !1), this.showButton(Be.UNPAUSE, !1)
        },
        flash: function(e, t, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == t && (t = !0), null == e && (e = t ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = e, this._flashAsTime = t, this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        activateButton: function(e) {
            switch (e._hx_index) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(Be.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(Be.MUTE, !1), this.showButton(Be.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Be.MUTE, !0), this.showButton(Be.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(Be.PAUSE, !1), this.showButton(Be.UNPAUSE, !0), this.activateButton(Be.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Be.PAUSE, !0), this.showButton(Be.UNPAUSE, !1), this.activateButton(this._wasMute ? Be.MUTE : Be.UNMUTE), this._kernel.resume(), this._drawPause(!1));
                    break;
                case 5:
                    e.value
            }
        },
        _drawPause: function(e) {
            null == e && (e = !0), this._pauseView.set_isVisible(e)
        },
        get_pauseEntity: function() {
            return this.pauseEntity
        },
        set_pauseEntity: function(e) {
            return null != this.get_pauseEntity() && this.get_pauseEntity().get_view().remove(), this.pauseEntity = e, this._pauseView.addChild(this.get_pauseEntity().get_view()), this.get_pauseEntity()
        },
        __class__: se
    }), n = function() {}, (t["awe6.interfaces.IProgress"] = n).__name__ = "awe6.interfaces.IProgress", n.__isInterface__ = !0, D = function() {}, (t["awe6.interfaces.IPreloader"] = D).__name__ = "awe6.interfaces.IPreloader", D.__isInterface__ = !0, D.__interfaces__ = [n, f, r], (t["awe6.core.drivers.APreloader"] = ie).__name__ = "awe6.core.drivers.APreloader", ie.__interfaces__ = [D], ie.__super__ = o, ie.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new Ee(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, 0 < this._assets.length && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        var e = Ys(h = this._kernel, h.onPreloaderComplete),
                            t = this;
                        as.delay(function() {
                            e(t)
                        }, 100)
                    } catch (e) {}
                    this._isComplete = !0
                }
            } else this._driverLoad(this._assets[this._currentAsset - 1]), this._currentProgress = 0
        },
        _driverLoad: function(e) {},
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e), 0 == this._assets.length && this._kernel.onPreloaderComplete(this), this.get_view().set_isVisible(100 < this._age)
        },
        _disposer: function() {
            this.get_view().dispose(), this._driverDisposer(), o.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        get_view: function() {
            return this.view
        },
        __class__: ie
    }), (t["awe6.core.drivers.AProfiler"] = ne).__name__ = "awe6.core.drivers.AProfiler", ne.__super__ = m, ne.prototype = e(m.prototype, {
        _init: function() {
            m.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(e) {
            null == e && (e = 0), m.prototype._updater.call(this, e), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: ne
    }), D = function() {}, (t["awe6.interfaces.ISceneTransition"] = D).__name__ = "awe6.interfaces.ISceneTransition", D.__isInterface__ = !0, D.__interfaces__ = [f, n, r], (t["awe6.core.drivers.ASceneTransition"] = ae).__name__ = "awe6.core.drivers.ASceneTransition", ae.__interfaces__ = [D], ae.__super__ = m, ae.prototype = e(m.prototype, {
        _init: function() {
            m.prototype._init.call(this)
        },
        _updater: function(e) {
            null == e && (e = 0), m.prototype._updater.call(this, e), this._age > this._duration && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        get_progress: function() {
            var e = this._age / this._duration;
            return 1 < e ? 1 : e < 0 ? 0 : e
        },
        __class__: ae
    }), r = function() {}, (t["awe6.interfaces.ISession"] = r).__name__ = "awe6.interfaces.ISession", r.__isInterface__ = !0, r.prototype = {
        __class__: r
    };
    var _e = function(e, t) {
        null == t && (t = ""), this._kernel = e, "" == t && (t = "DEBUG_AWE6"), this.id = t, this._tools = this._kernel.tools, this._version = 1, this._init()
    };

    function re(e, t, s, i) {
        null == s && (s = 0), this.context = t, this.set_priority(s), this.owner = i, o.call(this, e)
    }(t["awe6.core.drivers.ASession"] = _e).__name__ = "awe6.core.drivers.ASession", _e.__interfaces__ = [r], _e.prototype = {
        _init: function() {
            this._driverLoad(), C.field(this._savedData, "_____VERSION") != this._version && this._driverReset();
            var e = null != C.field(this._savedData, this.id);
            this._data = {}, this._resetter(), this._setter(), e && (this._data = C.field(this._savedData, this.id), this._getter(), this.loadCount++)
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
        reset: function(e) {
            null == e && (e = !1), this._data = {}, this._resetter(), this._setter(), e && (this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave())
        },
        save: function() {
            this.saveCount++, this._setter(), this._savedData._____VERSION = this._version, this._savedData[this.id] = this._data, this._driverSave()
        },
        __class__: _e
    }, D = function() {}, (t["awe6.interfaces.IPriority"] = D).__name__ = "awe6.interfaces.IPriority", D.__isInterface__ = !0, D.prototype = {
        __class__: D
    }, r = function() {}, (t["awe6.interfaces.IView"] = r).__name__ = "awe6.interfaces.IView", r.__isInterface__ = !0, r.__interfaces__ = [_, a, w, D], r.prototype = {
        __class__: r
    }, (t["awe6.core.drivers.AView"] = re).__name__ = "awe6.core.drivers.AView", re.__interfaces__ = [r], re.__super__ = o, re.prototype = e(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
        },
        addChild: function(e, t) {
            return null == t && (t = 0), this.isDisposed || null == e ? null : (e.get_parent() != this && (e.remove(), e instanceof re && (s = e, this._children.push(s), s._setParent(this))), 0 != t && e.set_priority(t), this._isDirty = !0, e);
            var s
        },
        removeChild: function(e) {
            if (!this.isDisposed && null != e) {
                if (e instanceof re) {
                    e = e;
                    if (e.get_parent() != this) return;
                    I.remove(this._children, e), e._setParent(null)
                }
                this._isDirty = !0
            }
        },
        remove: function() {
            null != this.get_parent() && this.get_parent().removeChild(this)
        },
        clear: function() {
            for (var e = 0, t = this._children; e < t.length;) {
                var s = t[e];
                ++e, this.removeChild(s)
            }
        },
        _updater: function(e) {
            null == e && (e = 0), o.prototype._updater.call(this, e);
            for (var t = 0, s = this._children; t < s.length;) {
                var i = s[t];
                ++t;
                var n = e;
                null == n && (n = 0), i.isActive && !i.isDisposed && (i._age += n, i._updates++, i._updater(n))
            }
            this._isDirty && this._draw(), this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY
        },
        _disposer: function() {
            this.remove(), this._driverDisposer(), this.clear(), o.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        _draw: function() {
            this.isDisposed || (this._children.sort(Ys(h = this._tools, h.sortByPriority)), this._driverDraw(), this._isDirty = !1)
        },
        _driverDraw: function() {},
        _setParent: function(e) {
            this.parent = e
        },
        get_priority: function() {
            return this.priority
        },
        set_priority: function(e) {
            return e == this.get_priority() || (this.priority = e, this.get_parent() instanceof re && (null != (e = this.get_parent()) && (e._isDirty = !0))), this.get_priority()
        },
        set_isVisible: function(e) {
            return e == this.isVisible || (this.isVisible = e, this.get_parent() instanceof re && (null != (e = this.get_parent()) && e._draw())), this.isVisible
        },
        get_parent: function() {
            return this.parent
        },
        get_isInViewStack: function() {
            return !!this.isVisible && (this.owner == this._kernel || null != this.get_parent() && this.get_parent().get_isInViewStack())
        },
        set_x: function(e) {
            return this.x = e, this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.x
        },
        set_y: function(e) {
            return this.y = e, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY, this.y
        },
        __class__: re
    });
    var oe = function(e) {
        W.call(this, e)
    };
    (t["awe6.core.drivers.createjs.AssetManager"] = oe).__name__ = "awe6.core.drivers.createjs.AssetManager", oe.__super__ = W, oe.prototype = e(W.prototype, {
        _driverGetAsset: function(e, t, s) {
            var i = null;
            return null != oe.loadQueue && (i = oe.loadQueue.getResult(e)), i
        },
        __class__: oe
    });
    var he = function(e) {
        z.call(this, e)
    };
    (t["awe6.core.drivers.createjs.AudioManager"] = he).__name__ = "awe6.core.drivers.createjs.AudioManager", he.__super__ = z, he.prototype = e(z.prototype, {
        _init: function() {
            z.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", Ys(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", Ys(this, this._onVisibilityChange)), z.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(e, t, s, i, n, a, _) {
            return null == a && (a = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new le(this._kernel, e, this._packageId, t, s, i, n, a, _)
        },
        _driverSetIsMute: function(e) {
            try {
                createjs.Sound.muted = e
            } catch (e) {}
            try {
                createjs.Sound.setMute(e)
            } catch (e) {}
        },
        _onVisibilityChange: function(e) {
            this._getVisibilityPropery() ? (this._visibilityWasMute = this.isMute, this.set_isMute(!0)) : this.set_isMute(this._visibilityWasMute)
        },
        _getVisibilityPropery: function() {
            for (var e = ["hidden", "mozHidden", "msHidden", "oHidden", "webkitHidden"], t = 0; t < e.length;) {
                var s = e[t];
                ++t;
                var i = window.document;
                if (Object.prototype.hasOwnProperty.call(i, s)) return C.field(window.document, s)
            }
            return window.document.hidden
        },
        __class__: he
    });
    var le = function(e, t, s, i, n, a, _, r, o) {
        null == r && (r = 0), null == _ && (_ = 1), null == a && (a = 0), null == n && (n = 1), Y.call(this, e, t, s, i, 1 == n ? 0 : n, a, _, r, o)
    };

    function ce(e, t, s) {
        X.call(this, e, t, s)
    }(t["awe6.core.drivers.createjs._HelperSound"] = le).__name__ = "awe6.core.drivers.createjs._HelperSound", le.__super__ = Y, le.prototype = e(Y.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan), createjs.WebAudioPlugin.context && "suspended" == createjs.WebAudioPlugin.context.state && createjs.WebAudioPlugin.context.resume()
            } catch (e) {}
            null != this._sound ? (this._sound.addEventListener("complete", Ys(this, this._onSoundComplete)), this._driverTransform()) : this.dispose()
        },
        _driverTransform: function(e) {
            null == e && (e = !1), null != this._sound && (e && (this._volume *= this._sound.volume, this._pan *= this._sound.pan), this._sound.volume = this._volume, this._sound.pan = this._pan)
        },
        _driverStop: function() {
            if (null != this._sound) try {
                this._sound.stop()
            } catch (e) {}
        },
        _onSoundComplete: function(e) {
            null != this._onCompleteCallback && this._onCompleteCallback.apply(this, []), this.dispose()
        },
        __class__: le
    }), (t["awe6.core.drivers.createjs.Factory"] = ce).__name__ = "awe6.core.drivers.createjs.Factory", ce.__super__ = X, ce.prototype = e(X.prototype, {
        _driverInit: function() {
            this.isDebug || (ss.trace = function(e, t) {
                window.console.log(e)
            });
            var e, t = new createjs.Container;
            this._context.addChild(t), this._context = t, this._countConfigsLoaded = 0, this._countConfigsToLoad = 0, "" != this._config ? (e = null != this._config ? this._config : "assets/__Config.xml", null != (t = this._context.getStage().canvas.getAttribute("config")) && "" != t && (e = t), this._loadConfig(e)) : this._launchKernel()
        },
        _launchKernel: function() {
            this._displayCredits();
            var e = !0;
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.nativeExperience") && (e = "true" == this.config.h["settings.nativeExperience"]);
            var t = this._context.getStage().canvas.getAttribute("nativeExperience");
            null != t && "" != t && (e = "true" == t), this.isNativeExperience = e, X.prototype._launchKernel.call(this);
            var s = this._concreteKernel.system.isDesktop,
                t = "default";
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.fullScreen") && (t = this.config.h["settings.fullScreen"]);
            e = this._context.getStage().canvas.getAttribute("fullScreen");
            null != e && "" != e && (t = e), this._kernel.set_isFullScreen(s && ("desktop" == t || "all" == t) || !s && ("mobile" == t || "all" == t || "default" == t)), this._kernel.isFullScreen && this.isNativeExperience && !s && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            ss.trace(Object.prototype.hasOwnProperty.call(this.config.h, "settings.asciiArt") ? this.config.h["settings.asciiArt"] : "", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ss.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ss.trace("Powered by awe6 (http://awe6.org)", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 129,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), this.isDecached && ss.trace("Note: decaching is currently enabled", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 132,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), ss.trace("", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 134,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(e) {
            if ("<?xml" == I.substr(e, 0, 5)) this._parseXml(e);
            else {
                this.isDecached && (e += "?dc=" + k.random(99999));
                try {
                    var t = new vs(e);
                    t.onError = Ys(this, this._onIOError), t.onData = Ys(this, this._onComplete), t.request()
                } catch (e) {
                    var s = ts.caught(e).unwrap();
                    return void this._onIOError(k.string(s))
                }
                this._countConfigsToLoad++
            }
        },
        _parseXml: function(e) {
            if (this._traverseElements(v.parse(e).firstElement().elements(), ""), Object.prototype.hasOwnProperty.call(this.config.h, "settings.joinXml") && this._countConfigsLoaded < 100) {
                var t = this.config.h["settings.joinXml"],
                    e = this.config;
                Object.prototype.hasOwnProperty.call(e.h, "settings.joinXml") && delete e.h["settings.joinXml"];
                for (var s = t.split(","), i = 0; i < s.length;) {
                    var n = s[i];
                    ++i, this._loadConfig(n)
                }
            }
            this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
        },
        _onIOError: function(e) {
            ss.trace("IO Errors Occurred During Config Loading:" + e, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 188,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), ss.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 189,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == I.substr(this._config, 0, 5) ? (ss.trace("Embedded Config detected, using that to continue ...", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 192,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (ss.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 198,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), ss.trace("Unable to continue without Config.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 199,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(e) {
            var t;
            this._countConfigsLoaded++, "" != e ? ("<?xml" != I.substr(t = e, 0, 5) && (t = this.createEncrypter().decrypt(hs.ofString(t)).toString()), this._parseXml(t)) : this._onIOError(e)
        },
        _getAssetUrls: function() {
            for (var e = ["bin/assets/audio/Applause.m4a", "bin/assets/audio/Applause.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Carve1.m4a", "bin/assets/audio/Carve1.ogg", "bin/assets/audio/Carve2.m4a", "bin/assets/audio/Carve2.ogg", "bin/assets/audio/Carve3.m4a", "bin/assets/audio/Carve3.ogg", "bin/assets/audio/Carve4.m4a", "bin/assets/audio/Carve4.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/CrowdMiss.m4a", "bin/assets/audio/CrowdMiss.ogg", "bin/assets/audio/CrowdScore.m4a", "bin/assets/audio/CrowdScore.ogg", "bin/assets/audio/Horn.m4a", "bin/assets/audio/Horn.ogg", "bin/assets/audio/Medal1.m4a", "bin/assets/audio/Medal1.ogg", "bin/assets/audio/Medal2.m4a", "bin/assets/audio/Medal2.ogg", "bin/assets/audio/Medal3.m4a", "bin/assets/audio/Medal3.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/OrganDefeated.m4a", "bin/assets/audio/OrganDefeated.ogg", "bin/assets/audio/Player.m4a", "bin/assets/audio/Player.ogg", "bin/assets/audio/Shot.m4a", "bin/assets/audio/Shot.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Tackle1.m4a", "bin/assets/audio/Tackle1.ogg", "bin/assets/audio/Tackle2.m4a", "bin/assets/audio/Tackle2.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/VoiceAvatar.m4a", "bin/assets/audio/VoiceAvatar.ogg", "bin/assets/audio/VoiceInstructions.m4a", "bin/assets/audio/VoiceInstructions.ogg", "bin/assets/audio/VoiceResults0.m4a", "bin/assets/audio/VoiceResults0.ogg", "bin/assets/audio/VoiceResults1.m4a", "bin/assets/audio/VoiceResults1.ogg", "bin/assets/audio/VoiceResults2.m4a", "bin/assets/audio/VoiceResults2.ogg", "bin/assets/audio/VoiceResults3.m4a", "bin/assets/audio/VoiceResults3.ogg", "bin/assets/audio/VoiceSelectLevel.m4a", "bin/assets/audio/VoiceSelectLevel.ogg", "bin/assets/audio/VoiceShop.m4a", "bin/assets/audio/VoiceShop.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.eot", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.svg", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.ttf", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.woff", "bin/assets/gui/Action.png", "bin/assets/gui/AvatarUnitA.png", "bin/assets/gui/AvatarUnitB.png", "bin/assets/gui/BgAbstract1.png", "bin/assets/gui/BgAbstract2.png", "bin/assets/gui/BgAbstract3.png", "bin/assets/gui/BgAbstract4.png", "bin/assets/gui/BgDetail.jpg", "bin/assets/gui/BgGradient1.png", "bin/assets/gui/BgGradient2.png", "bin/assets/gui/BgGradient3.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Buttons.png", "bin/assets/gui/HeroMedals.png", "bin/assets/gui/HeroUnitA.png", "bin/assets/gui/HeroUnitB.png", "bin/assets/gui/Hud.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/PanelBigBg.png", "bin/assets/gui/PanelBigFg.png", "bin/assets/gui/PanelLevel.png", "bin/assets/gui/PanelLevelBg.png", "bin/assets/gui/PanelResult.png", "bin/assets/gui/PanelShop.png", "bin/assets/gui/PanelSmallBg.png", "bin/assets/gui/PanelSmallFg.png", "bin/assets/gui/PanelUnit.png", "bin/assets/gui/SceneFgFooter1.png", "bin/assets/gui/SceneFgFooter2.png", "bin/assets/gui/SceneFgHeader1.png", "bin/assets/gui/SceneFgHeader2.png", "bin/assets/gui/Vignette.png", "bin/assets/location/BoardsBg.png", "bin/assets/location/BoardsFg.png", "bin/assets/location/Coin.png", "bin/assets/location/CrowdBg.png", "bin/assets/location/CrowdFg.png", "bin/assets/location/Goal.png", "bin/assets/location/Goalies.png", "bin/assets/location/Ground.png", "bin/assets/location/Puck.png", "bin/assets/location/Units.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png", "bin/assets/__Rotate.png"], t = [], s = 0, i = e.length; s < i;) e[n = s++] = I.substr(e[n], 4, null), ("__" == I.substr(e[n], 0, 2) || -1 < e[n].indexOf("/__")) && t.push(e[n]);
            for (s = 0; s < t.length;) {
                var n = t[s];
                ++s, I.remove(e, n)
            }
            return e
        },
        _driverDisposer: function() {
            null != this._context.parent && this._context.parent.removeChild(this._context)
        },
        preventDefaultForKeys: function(e) {
            this._kernel.inputs.keyboard.preventDefaultForKeys(e)
        },
        allowDefaultForKeys: function(e) {
            this._kernel.inputs.keyboard.allowDefaultForKeys(e)
        },
        __class__: ce
    });
    var ue = function(e) {
        Q.call(this, e)
    };
    (t["awe6.core.drivers.createjs.InputKeyboard"] = ue).__name__ = "awe6.core.drivers.createjs.InputKeyboard", ue.__super__ = Q, ue.prototype = e(Q.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", Ys(this, this._onKeyDown)), this._document.addEventListener("keyup", Ys(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", Ys(this, this._onKeyDown)), this._document.removeEventListener("keyup", Ys(this, this._onKeyUp)), Q.prototype._disposer.call(this)
        },
        _onKeyDown: function(e) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(e.keyCode) && e.preventDefault(), this._addEvent(e.keyCode, !0))
        },
        _onKeyUp: function(e) {
            this.isActive && (-1 != this._preventDefaultKeyCodes.indexOf(e.keyCode) && e.preventDefault(), this._addEvent(e.keyCode, !1))
        },
        preventDefaultForKeys: function(e) {
            if (null != e)
                for (var t = 0; t < e.length;) {
                    var s = e[t];
                    ++t;
                    s = this.getKeyCode(s);
                    p.has(this._preventDefaultKeyCodes, s) || this._preventDefaultKeyCodes.push(s)
                }
        },
        allowDefaultForKeys: function(e) {
            if (null != e)
                for (var t = 0; t < this._preventDefaultKeyCodes.length;) {
                    var s = this.getKey(this._preventDefaultKeyCodes[t]);
                    p.has(e, s) ? this._preventDefaultKeyCodes.splice(t, 1) : ++t
                }
        },
        __class__: ue
    });
    var de = function(e) {
        q.call(this, e)
    };
    (t["awe6.core.drivers.createjs.InputMouse"] = de).__name__ = "awe6.core.drivers.createjs.InputMouse", de.__super__ = q, de.prototype = e(q.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._system = this._kernel.system, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", Ys(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", Ys(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", Ys(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", Ys(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", Ys(this, this._onMouseUp))), this._system.isDesktop && window.document.addEventListener("wheel", Ys(this, this._onWheel)), window.focus()
        },
        _disposer: function() {
            this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", Ys(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", Ys(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", Ys(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", Ys(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", Ys(this, this._onMouseUp))), this._system.isDesktop && window.document.removeEventListener("wheel", Ys(this, this._onWheel)), q.prototype._disposer.call(this)
        },
        _isWithinBounds: function() {
            return this._stage.mouseInBounds
        },
        _getPosition: function() {
            var e, t;
            this._isTouch ? (this.x = this._touchX, this.y = this._touchY) : (e = this._stage.mouseX / this._stage.scaleX, t = this._kernel.factory.width, this.x = 0 | (t < e ? t : e < 0 ? 0 : e), e = this._stage.mouseY / this._stage.scaleY, t = this._kernel.factory.height, this.y = 0 | (t < e ? t : e < 0 ? 0 : e)), this.x = this.x == this._kernel.factory.width ? this._xPrev : this.x, this.y = this.y == this._kernel.factory.height ? this._yPrev : this.y
        },
        _onTouchStart: function(e) {
            this._onMouseDown(e), this._onTouch(e), this.x = this._touchX, this.y = this._touchY
        },
        _onTouchEnd: function(e) {
            this._onMouseUp(e), this._onTouch(e), de._isSoundTriggered || (this._kernel.audio.start("Silence"), de._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
        },
        _onTouch: function(e) {
            try {
                var t = (e.targetTouches[0].pageX - (0 | this._stage.canvas.offsetLeft)) / this._kernel._scaleX,
                    s = this._kernel.factory.width;
                this._touchX = 0 | (s < t ? s : t < 0 ? 0 : t);
                t = (e.targetTouches[0].pageY - (0 | this._stage.canvas.offsetTop)) / this._kernel._scaleY, s = this._kernel.factory.height;
                this._touchY = 0 | (s < t ? s : t < 0 ? 0 : t)
            } catch (e) {}
            this._stage.mouseInBounds && e.preventDefault()
        },
        _onMouseDown: function(e) {
            window.focus(), this.isActive && (!this._isTouch && 2 == e.nativeEvent.button || this._buffer.push(!0))
        },
        _onMouseUp: function(e) {
            this.isActive && (!this._isTouch && 2 == e.nativeEvent.button || this._buffer.push(!1))
        },
        _onWheel: function(e) {
            this.isActive && (this.scroll += Math.round(e.deltaY))
        },
        set_isVisible: function(e) {
            return this._stage.cursor = e ? "none" : "auto", q.prototype.set_isVisible.call(this, e)
        },
        set_cursorType: function(e) {
            switch (e._hx_index) {
                case 0:
                    t = "crosshair";
                    break;
                case 1:
                    t = "auto";
                    break;
                case 2:
                case 3:
                    t = "pointer";
                    break;
                case 4:
                    t = "text";
                    break;
                case 5:
                    var t = e.value
            }
            return this._stage.canvas.style.cursor = t, q.prototype.set_cursorType.call(this, e)
        },
        __class__: de
    });
    var pe = function(e, t) {
        ee.call(this, e, t)
    };
    (t["awe6.core.drivers.createjs.Kernel"] = pe).__name__ = "awe6.core.drivers.createjs.Kernel", pe.__super__ = ee, pe.prototype = e(ee.prototype, {
        _driverGetIsLocal: function() {
            var e;
            switch (window.location.protocol) {
                case "http:":
                case "https:":
                    e = !1;
                    break;
                default:
                    e = !0
            }
            return e
        },
        _driverInit: function() {
            this.system = new xe(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var e = new createjs.Shape;
            e.graphics.beginFill("#" + I.substr(l.hex(this.factory.bgColor, 8), 2, 6)), e.graphics.drawRect(0, 0, this.factory.width, this.factory.height), e.graphics.endFill(), this._stage.addChildAt(e, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", Ys(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", Ys(this, this._onContextMenu), !1), window.addEventListener("unload", Ys(this, this._onUnload))
        },
        _onUnload: function(e) {
            window.removeEventListener("unload", Ys(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(e) {
            var t, s;
            e.preventDefault(), e.stopImmediatePropagation(), null != this.overlay && (t = Ys(h = this.overlay, h.activateButton), s = Be.PAUSE, as.delay(function() {
                t(s)
            }, 100))
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", Ys(this, this._onContextMenu))
        },
        _onEnterFrame: function(e) {
            null != e.paused && 1 == e.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(e));
            e = k.string(window.innerWidth) + ":" + k.string(window.innerHeight);
            this._prevWindowSize != e && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function(e) {},
        _driverSetIsFullScreen: function(e) {
            this._prevWindowSize = k.string(window.innerWidth) + ":" + k.string(window.innerHeight), this._scaleX = this._scaleY = 1;
            var t = this.factory.width,
                s = this.factory.height,
                i = window.innerWidth,
                n = window.innerHeight,
                a = t < s,
                _ = i < n;
            this.system.isRotated = !this.system.isDesktop && a != _;
            a = 0, _ = 0;
            if (e) {
                var r = Math.min(i / t, n / s),
                    o = this.factory.fullScreenType;
                switch (o._hx_index) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this._scaleX = i / t, this._scaleY = n / s;
                        break;
                    case 3:
                        this._scaleX = this._scaleY = r;
                        break;
                    case 4:
                        r = r < .5 ? .25 : r < 1 ? .5 : Math.floor(r), this._scaleX = this._scaleY = r;
                        break;
                    case 5:
                        var h, l, c, u = o.value;
                        null != u.bleedWidth && null != u.bleedHeight && (c = t - 2 * k.parseInt(k.string(u.bleedWidth) + ""), l = s - 2 * k.parseInt(k.string(u.bleedHeight) + ""), h = Math.min(i / c, n / l), 1 == u.isBleedInternal && ((c = (u = t / s) / (l = Math.min(t / l, Math.max(c / s, i / n)))) < 1 && (c = l / u), h = Math.min(c * i / t, c * n / s)), this._scaleX = this._scaleY = h)
                }
                a = Math.round((i - t * this._scaleX) / 2), _ = Math.round((n - s * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(t * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(s * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", a + "px", ""), this._stage.canvas.style.setProperty("margin-top", _ + "px", "")
        },
        __class__: pe
    });
    var ge = function(e, t, s, i, n, a, _, r, o, h, l, c, u, d, p, g, f) {
        se.call(this, e, t, s, i, n, a, _, r, o, h, l, c, u, d, p, g, f)
    };
    (t["awe6.core.drivers.createjs.Overlay"] = ge).__name__ = "awe6.core.drivers.createjs.Overlay", ge.__super__ = se, ge.prototype = e(se.prototype, {
        _driverInit: function() {
            ks.__cast(this._borderView, Ee).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var e = new createjs.Shape;
            e.graphics.beginFill("#" + l.hex(this._pauseColor, 6)), e.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), e.alpha = this._pauseAlpha, this._pauseContext.addChild(e), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(e) {
            null == e && (e = 0), se.prototype._updater.call(this, e), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(e, t, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == t && (t = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + l.hex(i, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), null == e && (e = t ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = e, this._flashAsTime = t, this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        __class__: ge
    });
    var fe = function(e, t, s) {
        ie.call(this, e, t, s)
    };
    (t["awe6.core.drivers.createjs.Preloader"] = fe).__name__ = "awe6.core.drivers.createjs.Preloader", fe.__super__ = ie, fe.prototype = e(ie.prototype, {
        _init: function() {
            this._context = new createjs.Container, this.view = new Ee(this._kernel, this._context), ie.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = 0, this._completedDelay = 0;
            var e = this._isDecached ? "?dc=" + k.random(999999) : "",
                t = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && p.has(t, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
            var s = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                this._audioHoldDelay = this._getAudioHoldDelay();
                var i = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var n = 0, a = this._assets; n < a.length;) {
                    var _ = a[n];
                    ++n;
                    var r = I.substr(_, -3, null);
                    p.has(t, r) && (s.push(_), i || r != this._validSoundFormat || (r = "assets.audio." + I.substr(_.split("/").pop(), 0, -4), this._isFastTestMode || this._manifest.push({
                        src: _ + e,
                        id: r
                    })))
                }
            }
            for (n = 0; n < s.length;) {
                _ = s[n];
                ++n, I.remove(this._assets, _)
            }
            for (n = 0, a = this._assets; n < a.length;) {
                _ = a[n];
                ++n, this._manifest.push({
                    src: _ + e,
                    id: _
                })
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", Ys(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", Ys(this, this._onError)), this._loadQueue.addEventListener("error", Ys(this, this._onError));
            var n = Ys(h = this._loadQueue, h.loadManifest),
                o = this._manifest;
            as.delay(function() {
                n(o)
            }, 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function(e) {
            this._isComplete || (this._isComplete = !0, oe.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", Ys(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", Ys(this, this._onError)), this._loadQueue.removeEventListener("error", Ys(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
        },
        _onError: function(e) {
            ss.trace([e, e.title, e.message, e.data], {
                fileName: "awe6/core/drivers/createjs/Preloader.hx",
                lineNumber: 148,
                className: "awe6.core.drivers.createjs.Preloader",
                methodName: "_onError"
            })
        },
        _showAudioHoldMessage: function() {},
        _updater: function(e) {
            null == e && (e = 0), ie.prototype._updater.call(this, e), this._isComplete && (this._completedDelay -= e, (0 <= this._audioHoldDelay && this._completedDelay <= 0 || this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease()) && (this._assets = []))
        },
        _getIsStockAndroidBrowser: function() {
            var e = -1 < this._system.userAgent.indexOf("Android") && -1 < this._system.userAgent.indexOf("Mozilla/5.0") && -1 < this._system.userAgent.indexOf("AppleWebKit"),
                t = new d("AppleWebKit/([\\d.]+)", ""),
                s = t.match(this._system.userAgent),
                i = s ? parseFloat(t.matched(1)) : 0,
                n = new d("Chrome/([\\d.]+)", ""),
                t = n.match(this._system.userAgent),
                n = t ? parseFloat(n.matched(1)) : 0;
            return e && (!!(s && i < 537) || !!t && n < 37)
        },
        _getAudioHoldDelay: function() {
            if (this._isSoundDisabled) return 0;
            try {
                if ("[WebAudioPlugin]" != createjs.Sound.activePlugin || "suspended" != createjs.Sound.activePlugin.context.state) return 0
            } catch (e) {}
            var e = -1;
            Object.prototype.hasOwnProperty.call(this._kernel.factory.config.h, "settings.audioHoldDelay") && (e = k.parseInt(this._kernel.factory.config.h["settings.audioHoldDelay"]));
            try {
                var t = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != t && "" != t && (e = k.parseInt(t))
            } catch (e) {}
            return e
        },
        __class__: fe
    });
    var ye = function(e) {
        ne.call(this, e)
    };
    (t["awe6.core.drivers.createjs.Profiler"] = ye).__name__ = "awe6.core.drivers.createjs.Profiler", ye.__super__ = ne, ye.prototype = e(ne.prototype, {
        _init: function() {
            ne.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var e = new createjs.Shape;
            this._context.addChild(e), e.alpha = .25, this._isMemoryEnabled && (e.graphics.beginFill("#" + l.hex(this._backgroundColor, 6)), e.graphics.drawRect(0, 0, this._width, this._height), e.graphics.endFill()), e.graphics.beginFill("#" + l.hex(this._marginColor, 6)), e.graphics.drawRect(0, 0, this._width, this._marginHeight), e.graphics.endFill(), e.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + l.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + l.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            var e, t = 0 | this._kernel.getFramerate(!0);
            Math.min(this._height, this._height / this._kernel.factory.targetFramerate * t);
            this._fpsTextField.text = this._fpsLabel + ": " + t + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0 && (e = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024), t = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024), this._memoryTextField.text = this._memoryLabel + ": " + e + " / " + t)
        },
        __class__: ye
    });
    var me = function(e, t) {
        ae.call(this, e, t)
    };

    function we(e, t) {
        _e.call(this, e, t)
    }(t["awe6.core.drivers.createjs.SceneTransition"] = me).__name__ = "awe6.core.drivers.createjs.SceneTransition", me.__super__ = ae, me.prototype = e(ae.prototype, {
        _init: function() {
            ae.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var e = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(e)
        },
        _updater: function(e) {
            null == e && (e = 0), ae.prototype._updater.call(this, e), this.isDisposed || (e = this.get_progress(), this._context.alpha = 1 - e)
        },
        __class__: me
    }), (t["awe6.core.drivers.createjs.Session"] = we).__name__ = "awe6.core.drivers.createjs.Session", we.__super__ = _e, we.prototype = e(_e.prototype, {
        _init: function() {
            var e = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (e = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = e ? Is.getLocalStorage() : Is.getSessionStorage(), _e.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && Us.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(Us.get(this._kernel.factory.id)), this._driverSave(), Us.remove(this._kernel.factory.id)), null != this._storage) try {
                var e = this._storage.getItem(this._kernel.factory.id);
                null != e && (this._savedData = this._tools.unserialize(e))
            } catch (e) {}
        },
        _driverReset: function() {
            if (null != this._storage) try {
                this._storage.removeItem(this._kernel.factory.id)
            } catch (e) {}
            this._savedData = {}
        },
        _driverSave: function() {
            if (null != this._storage) try {
                this._storage.setItem(this._kernel.factory.id, this._tools.serialize(this._savedData))
            } catch (e) {}
        },
        __class__: we
    });
    var xe = function(e) {
        this._kernel = e, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = u.navigator.userAgent, this.isSilk = new d("Silk", "").match(this.userAgent), this.isKaiOs = new d("KAIOS", "").match(this.userAgent), this.isCrosswalk = new d("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new d("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new d("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new d("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new d("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new d("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new d("Windows", "").match(this.userAgent) && (this.isWindows = !0, new d("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    (t["awe6.core.drivers.createjs.System"] = xe).__name__ = "awe6.core.drivers.createjs.System", xe.prototype = {
        get_isWebGL: function() {
            return !1
        },
        get_isFullScreenSupported: function() {
            try {
                var e = window.document.documentElement;
                if (null != e.requestFullscreen) return !0;
                if (null != e.msRequestFullscreen) return !0;
                if (null != e.mozRequestFullScreen) return !0;
                if (null != e.webkitRequestFullscreen) return !0
            } catch (e) {}
            return !1
        },
        requestFullScreen: function() {
            try {
                var e = window.document.documentElement;
                null != e.requestFullscreen ? e.requestFullscreen() : null != e.msRequestFullscreen ? e.msRequestFullscreen() : null != e.mozRequestFullScreen ? e.mozRequestFullScreen() : null != e.webkitRequestFullscreen && e.webkitRequestFullscreen()
            } catch (e) {}
        },
        requestExitFullScreen: function() {
            try {
                var e = window.document;
                null != e.exitFullscreen ? e.exitFullscreen() : null != e.msExitFullscreen ? e.msExitFullscreen() : null != e.mozCancelFullScreen ? e.mozCancelFullScreen() : null != e.webkitExitFullscreen && e.webkitExitFullscreen()
            } catch (e) {}
        },
        requestLockScreen: function() {
            if (!this.isDesktop) try {
                var e = this._kernel.factory.width < this._kernel.factory.height ? "portrait-primary" : "landscape-primary",
                    t = window.screen;
                null != t.orientation ? null != t.orientation.lock ? t.orientation.lock(e) : null != t.orientation.lockOrientation && t.orientation.lockOrientation(e) : null != t.mozOrientation ? t.mozLockOrientation(e) : null != t.msOrientation && t.msLockOrientation(e)
            } catch (e) {}
        },
        requestDeviceOrientation: function() {
            if (!this.isDesktop) try {
                null != window.DeviceMotionEvent && null != window.DeviceMotionEvent.requestPermission && window.DeviceMotionEvent.requestPermission()
            } catch (e) {}
        },
        __class__: xe
    };
    var Ee = function(e, t, s, i) {
        re.call(this, e, t, s, i)
    };

    function ve(e, t, s, i) {
        null == i && (i = !0), null == s && (s = 100), null == t && (t = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = t, this.height = s, this._context = new createjs.Container, this.setPosition(0, 0), i && ((i = new createjs.Shape).graphics.beginFill("#FF0000"), i.graphics.drawRect(0, 0, this.width, this.height), i.graphics.endFill(), i.visible = !1, this._context.addChild(i), this._context.mask = i), m.call(this, e, null, this._context)
    }

    function be(e, t, s, i, n, a, _) {
        null == _ && (_ = !1), null == a && (a = !1), null == i && (i = ""), this.textStyle = n, this._isMultiline = a, this._isCached = _, ve.call(this, e, t, s, !1), this.set_text(i)
    }

    function Se(e, t, s) {
        null == s && (s = 1e3), this._callbackFunction = t, this._duration = s, m.call(this, e)
    }(t["awe6.core.drivers.createjs.View"] = Ee).__name__ = "awe6.core.drivers.createjs.View", Ee.__super__ = re, Ee.prototype = e(re.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), re.prototype._init.call(this)
        },
        _driverDisposer: function() {
            if (null != this.context && null != this.context.parent) try {
                this.context.parent.removeChild(this.context)
            } catch (e) {}
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var e = this._children, t = 0; t < e.length;) {
                var s = e[t];
                ++t, s.isVisible && this._container.addChild(s.context)
            }
        },
        set_x: function(e) {
            return this.context.x = e, re.prototype.set_x.call(this, e)
        },
        set_y: function(e) {
            return this.context.y = e, re.prototype.set_y.call(this, e)
        },
        __class__: Ee
    }), (t["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = ve).__name__ = "awe6.core.drivers.createjs.extras.gui.GuiEntity", ve.__interfaces__ = [w], ve.__super__ = m, ve.prototype = e(m.prototype, {
        setPosition: function(e, t) {
            this.set_x(e), this.set_y(t)
        },
        set_x: function(e) {
            return this.x = e, this._context.x = this.x, this.x
        },
        set_y: function(e) {
            return this.y = e, this._context.y = this.y, this.y
        },
        __class__: ve
    }), (t["awe6.core.drivers.createjs.extras.gui.Text"] = be).__name__ = "awe6.core.drivers.createjs.extras.gui.Text", be.__super__ = ve, be.prototype = e(ve.prototype, {
        _init: function() {
            ve.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text, this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
        },
        _updater: function(e) {
            null == e && (e = 0), ve.prototype._updater.call(this, e), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
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
                var e, t, s = l.hex(this.textStyle.color, 6);
                this._textField.color = "#" + s, this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters && ((e = this._textField).shadow = null, t = this.textStyle.filters.slice(), null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, 2 != t.length && 6 != t.length || (this._textFieldOutline = this._textField.clone(), s = l.hex(t.shift(), 6), this._textFieldOutline.color = "#" + s, s = t.shift(), this._textFieldOutline.outline = 2 * s, this._context.addChildAt(this._textFieldOutline, 0), e = this._textFieldOutline), 4 == t.length && (e.shadow = new createjs.Shadow("#" + l.hex(t[0], 6), t[1], t[2], t[3])))
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(e) {
            return null == e && (e = ""), this.text == e || (this.text = e, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0), this.text
        },
        __class__: be
    }), (t["awe6.extras.Delay"] = Se).__name__ = "awe6.extras.Delay", Se.__super__ = m, Se.prototype = e(m.prototype, {
        _updater: function(e) {
            null == e && (e = 0), m.prototype._updater.call(this, e), this._duration -= e, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Se
    });
    var Te = A["awe6.interfaces.EAgenda"] = {
        __ename__: "awe6.interfaces.EAgenda",
        __constructs__: null,
        ALWAYS: {
            _hx_name: "ALWAYS",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        BIRTH: {
            _hx_name: "BIRTH",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        DEATH: {
            _hx_name: "DEATH",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        STANDARD: {
            _hx_name: "STANDARD",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        ATTACK: {
            _hx_name: "ATTACK",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        DEFEND: {
            _hx_name: "DEFEND",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EAgenda",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 6,
                value: e,
                __enum__: "awe6.interfaces.EAgenda",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Te.__constructs__ = [Te.ALWAYS, Te.BIRTH, Te.DEATH, Te.STANDARD, Te.ATTACK, Te.DEFEND, Te.SUB_TYPE];
    var Ae = A["awe6.interfaces.EAudioChannel"] = {
        __ename__: "awe6.interfaces.EAudioChannel",
        __constructs__: null,
        DEFAULT: {
            _hx_name: "DEFAULT",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: s
        },
        EFFECTS: {
            _hx_name: "EFFECTS",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: s
        },
        INTERFACE: {
            _hx_name: "INTERFACE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: s
        },
        MUSIC: {
            _hx_name: "MUSIC",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EAudioChannel",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 4,
                value: e,
                __enum__: "awe6.interfaces.EAudioChannel",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ae.__constructs__ = [Ae.DEFAULT, Ae.EFFECTS, Ae.INTERFACE, Ae.MUSIC, Ae.SUB_TYPE];
    var Ce = A["awe6.interfaces.EFullScreen"] = {
        __ename__: "awe6.interfaces.EFullScreen",
        __constructs__: null,
        DISABLED: {
            _hx_name: "DISABLED",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: s
        },
        NO_SCALE: {
            _hx_name: "NO_SCALE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: s
        },
        SCALE_ASPECT_RATIO_IGNORE: {
            _hx_name: "SCALE_ASPECT_RATIO_IGNORE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: s
        },
        SCALE_ASPECT_RATIO_PRESERVE: {
            _hx_name: "SCALE_ASPECT_RATIO_PRESERVE",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: s
        },
        SCALE_NEAREST_MULTIPLE: {
            _hx_name: "SCALE_NEAREST_MULTIPLE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EFullScreen",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 5,
                value: e,
                __enum__: "awe6.interfaces.EFullScreen",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ce.__constructs__ = [Ce.DISABLED, Ce.NO_SCALE, Ce.SCALE_ASPECT_RATIO_IGNORE, Ce.SCALE_ASPECT_RATIO_PRESERVE, Ce.SCALE_NEAREST_MULTIPLE, Ce.SUB_TYPE];
    var ke = A["awe6.interfaces.EJoypadButton"] = {
        __ename__: "awe6.interfaces.EJoypadButton",
        __constructs__: null,
        FIRE: {
            _hx_name: "FIRE",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        UP: {
            _hx_name: "UP",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        DOWN: {
            _hx_name: "DOWN",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        PRIMARY: {
            _hx_name: "PRIMARY",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        },
        SECONDARY: {
            _hx_name: "SECONDARY",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EJoypadButton",
            toString: s
        }
    };
    ke.__constructs__ = [ke.FIRE, ke.UP, ke.RIGHT, ke.DOWN, ke.LEFT, ke.PRIMARY, ke.SECONDARY];
    var Ie = A["awe6.interfaces.EJoypadTouch"] = {
        __ename__: "awe6.interfaces.EJoypadTouch",
        __constructs__: null,
        DISABLED: {
            _hx_name: "DISABLED",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EJoypadTouch",
            toString: s
        },
        DPAD: {
            _hx_name: "DPAD",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EJoypadTouch",
            toString: s
        },
        JOYSTICK: ((h = function(e) {
            return {
                _hx_index: 2,
                distance: e,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: s
            }
        })._hx_name = "JOYSTICK", h.__params__ = ["distance"], h),
        SWIPE: ((h = function(e) {
            return {
                _hx_index: 3,
                speed: e,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: s
            }
        })._hx_name = "SWIPE", h.__params__ = ["speed"], h)
    };
    Ie.__constructs__ = [Ie.DISABLED, Ie.DPAD, Ie.JOYSTICK, Ie.SWIPE];
    var Ue = A["awe6.interfaces.EKey"] = {
        __ename__: "awe6.interfaces.EKey",
        __constructs__: null,
        NUM_LOCK: {
            _hx_name: "NUM_LOCK",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        CLEAR: {
            _hx_name: "CLEAR",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        HELP: {
            _hx_name: "HELP",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        ALT: {
            _hx_name: "ALT",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        BACKSPACE: {
            _hx_name: "BACKSPACE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        CAPS_LOCK: {
            _hx_name: "CAPS_LOCK",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        CONTROL: {
            _hx_name: "CONTROL",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        DELETE: {
            _hx_name: "DELETE",
            _hx_index: 7,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        DOWN: {
            _hx_name: "DOWN",
            _hx_index: 8,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        END: {
            _hx_name: "END",
            _hx_index: 9,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        ENTER: {
            _hx_name: "ENTER",
            _hx_index: 10,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        ESCAPE: {
            _hx_name: "ESCAPE",
            _hx_index: 11,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F1: {
            _hx_name: "F1",
            _hx_index: 12,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F10: {
            _hx_name: "F10",
            _hx_index: 13,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F11: {
            _hx_name: "F11",
            _hx_index: 14,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F12: {
            _hx_name: "F12",
            _hx_index: 15,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F13: {
            _hx_name: "F13",
            _hx_index: 16,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F14: {
            _hx_name: "F14",
            _hx_index: 17,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F15: {
            _hx_name: "F15",
            _hx_index: 18,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F2: {
            _hx_name: "F2",
            _hx_index: 19,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F3: {
            _hx_name: "F3",
            _hx_index: 20,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F4: {
            _hx_name: "F4",
            _hx_index: 21,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F5: {
            _hx_name: "F5",
            _hx_index: 22,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F6: {
            _hx_name: "F6",
            _hx_index: 23,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F7: {
            _hx_name: "F7",
            _hx_index: 24,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F8: {
            _hx_name: "F8",
            _hx_index: 25,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F9: {
            _hx_name: "F9",
            _hx_index: 26,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        HOME: {
            _hx_name: "HOME",
            _hx_index: 27,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        INSERT: {
            _hx_name: "INSERT",
            _hx_index: 28,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 29,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_0: {
            _hx_name: "NUMPAD_0",
            _hx_index: 30,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_1: {
            _hx_name: "NUMPAD_1",
            _hx_index: 31,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_2: {
            _hx_name: "NUMPAD_2",
            _hx_index: 32,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_3: {
            _hx_name: "NUMPAD_3",
            _hx_index: 33,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_4: {
            _hx_name: "NUMPAD_4",
            _hx_index: 34,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_5: {
            _hx_name: "NUMPAD_5",
            _hx_index: 35,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_6: {
            _hx_name: "NUMPAD_6",
            _hx_index: 36,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_7: {
            _hx_name: "NUMPAD_7",
            _hx_index: 37,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_8: {
            _hx_name: "NUMPAD_8",
            _hx_index: 38,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_9: {
            _hx_name: "NUMPAD_9",
            _hx_index: 39,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_ADD: {
            _hx_name: "NUMPAD_ADD",
            _hx_index: 40,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_DECIMAL: {
            _hx_name: "NUMPAD_DECIMAL",
            _hx_index: 41,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_DIVIDE: {
            _hx_name: "NUMPAD_DIVIDE",
            _hx_index: 42,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_ENTER: {
            _hx_name: "NUMPAD_ENTER",
            _hx_index: 43,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_MULTIPLY: {
            _hx_name: "NUMPAD_MULTIPLY",
            _hx_index: 44,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMPAD_SUBTRACT: {
            _hx_name: "NUMPAD_SUBTRACT",
            _hx_index: 45,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        PAGE_DOWN: {
            _hx_name: "PAGE_DOWN",
            _hx_index: 46,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        PAGE_UP: {
            _hx_name: "PAGE_UP",
            _hx_index: 47,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 48,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SHIFT: {
            _hx_name: "SHIFT",
            _hx_index: 49,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SPACE: {
            _hx_name: "SPACE",
            _hx_index: 50,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        TAB: {
            _hx_name: "TAB",
            _hx_index: 51,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        UP: {
            _hx_name: "UP",
            _hx_index: 52,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        A: {
            _hx_name: "A",
            _hx_index: 53,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        B: {
            _hx_name: "B",
            _hx_index: 54,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        C: {
            _hx_name: "C",
            _hx_index: 55,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        D: {
            _hx_name: "D",
            _hx_index: 56,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        E: {
            _hx_name: "E",
            _hx_index: 57,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        F: {
            _hx_name: "F",
            _hx_index: 58,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        G: {
            _hx_name: "G",
            _hx_index: 59,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        H: {
            _hx_name: "H",
            _hx_index: 60,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        I: {
            _hx_name: "I",
            _hx_index: 61,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        J: {
            _hx_name: "J",
            _hx_index: 62,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        K: {
            _hx_name: "K",
            _hx_index: 63,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        L: {
            _hx_name: "L",
            _hx_index: 64,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        M: {
            _hx_name: "M",
            _hx_index: 65,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        N: {
            _hx_name: "N",
            _hx_index: 66,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        O: {
            _hx_name: "O",
            _hx_index: 67,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        P: {
            _hx_name: "P",
            _hx_index: 68,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        Q: {
            _hx_name: "Q",
            _hx_index: 69,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        R: {
            _hx_name: "R",
            _hx_index: 70,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        S: {
            _hx_name: "S",
            _hx_index: 71,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        T: {
            _hx_name: "T",
            _hx_index: 72,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        U: {
            _hx_name: "U",
            _hx_index: 73,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        V: {
            _hx_name: "V",
            _hx_index: 74,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        W: {
            _hx_name: "W",
            _hx_index: 75,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        X: {
            _hx_name: "X",
            _hx_index: 76,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        Y: {
            _hx_name: "Y",
            _hx_index: 77,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        Z: {
            _hx_name: "Z",
            _hx_index: 78,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_0: {
            _hx_name: "NUMBER_0",
            _hx_index: 79,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_1: {
            _hx_name: "NUMBER_1",
            _hx_index: 80,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_2: {
            _hx_name: "NUMBER_2",
            _hx_index: 81,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_3: {
            _hx_name: "NUMBER_3",
            _hx_index: 82,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_4: {
            _hx_name: "NUMBER_4",
            _hx_index: 83,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_5: {
            _hx_name: "NUMBER_5",
            _hx_index: 84,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_6: {
            _hx_name: "NUMBER_6",
            _hx_index: 85,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_7: {
            _hx_name: "NUMBER_7",
            _hx_index: 86,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_8: {
            _hx_name: "NUMBER_8",
            _hx_index: 87,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        NUMBER_9: {
            _hx_name: "NUMBER_9",
            _hx_index: 88,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        COLON: {
            _hx_name: "COLON",
            _hx_index: 89,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        EQUALS: {
            _hx_name: "EQUALS",
            _hx_index: 90,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        HYPHEN: {
            _hx_name: "HYPHEN",
            _hx_index: 91,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SLASH: {
            _hx_name: "SLASH",
            _hx_index: 92,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        TILDE: {
            _hx_name: "TILDE",
            _hx_index: 93,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SQUARELEFT: {
            _hx_name: "SQUARELEFT",
            _hx_index: 94,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SQUARERIGHT: {
            _hx_name: "SQUARERIGHT",
            _hx_index: 95,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        BACKSLASH: {
            _hx_name: "BACKSLASH",
            _hx_index: 96,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        APOSTROPHE: {
            _hx_name: "APOSTROPHE",
            _hx_index: 97,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        TOPLEFT: {
            _hx_name: "TOPLEFT",
            _hx_index: 98,
            __enum__: "awe6.interfaces.EKey",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 99,
                value: e,
                __enum__: "awe6.interfaces.EKey",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ue.__constructs__ = [Ue.NUM_LOCK, Ue.CLEAR, Ue.HELP, Ue.ALT, Ue.BACKSPACE, Ue.CAPS_LOCK, Ue.CONTROL, Ue.DELETE, Ue.DOWN, Ue.END, Ue.ENTER, Ue.ESCAPE, Ue.F1, Ue.F10, Ue.F11, Ue.F12, Ue.F13, Ue.F14, Ue.F15, Ue.F2, Ue.F3, Ue.F4, Ue.F5, Ue.F6, Ue.F7, Ue.F8, Ue.F9, Ue.HOME, Ue.INSERT, Ue.LEFT, Ue.NUMPAD_0, Ue.NUMPAD_1, Ue.NUMPAD_2, Ue.NUMPAD_3, Ue.NUMPAD_4, Ue.NUMPAD_5, Ue.NUMPAD_6, Ue.NUMPAD_7, Ue.NUMPAD_8, Ue.NUMPAD_9, Ue.NUMPAD_ADD, Ue.NUMPAD_DECIMAL, Ue.NUMPAD_DIVIDE, Ue.NUMPAD_ENTER, Ue.NUMPAD_MULTIPLY, Ue.NUMPAD_SUBTRACT, Ue.PAGE_DOWN, Ue.PAGE_UP, Ue.RIGHT, Ue.SHIFT, Ue.SPACE, Ue.TAB, Ue.UP, Ue.A, Ue.B, Ue.C, Ue.D, Ue.E, Ue.F, Ue.G, Ue.H, Ue.I, Ue.J, Ue.K, Ue.L, Ue.M, Ue.N, Ue.O, Ue.P, Ue.Q, Ue.R, Ue.S, Ue.T, Ue.U, Ue.V, Ue.W, Ue.X, Ue.Y, Ue.Z, Ue.NUMBER_0, Ue.NUMBER_1, Ue.NUMBER_2, Ue.NUMBER_3, Ue.NUMBER_4, Ue.NUMBER_5, Ue.NUMBER_6, Ue.NUMBER_7, Ue.NUMBER_8, Ue.NUMBER_9, Ue.COLON, Ue.EQUALS, Ue.HYPHEN, Ue.SLASH, Ue.TILDE, Ue.SQUARELEFT, Ue.SQUARERIGHT, Ue.BACKSLASH, Ue.APOSTROPHE, Ue.TOPLEFT, Ue.SUB_TYPE];
    var De = A["awe6.interfaces.EMessage"] = {
        __ename__: "awe6.interfaces.EMessage",
        __constructs__: null,
        DISPOSE: {
            _hx_name: "DISPOSE",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMessage",
            toString: s
        },
        INIT: {
            _hx_name: "INIT",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMessage",
            toString: s
        },
        PAUSE: {
            _hx_name: "PAUSE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMessage",
            toString: s
        },
        RESUME: {
            _hx_name: "RESUME",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EMessage",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 4,
                value: e,
                __enum__: "awe6.interfaces.EMessage",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    De.__constructs__ = [De.DISPOSE, De.INIT, De.PAUSE, De.RESUME, De.SUB_TYPE];
    var Pe = A["awe6.interfaces.EMouseButton"] = {
        __ename__: "awe6.interfaces.EMouseButton",
        __constructs__: null,
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: s
        },
        MIDDLE: {
            _hx_name: "MIDDLE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: s
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMouseButton",
            toString: s
        }
    };
    Pe.__constructs__ = [Pe.LEFT, Pe.MIDDLE, Pe.RIGHT];
    var Re = A["awe6.interfaces.EMouseCursor"] = {
        __ename__: "awe6.interfaces.EMouseCursor",
        __constructs__: null,
        ARROW: {
            _hx_name: "ARROW",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: s
        },
        AUTO: {
            _hx_name: "AUTO",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: s
        },
        BUTTON: {
            _hx_name: "BUTTON",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: s
        },
        HAND: {
            _hx_name: "HAND",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: s
        },
        IBEAM: {
            _hx_name: "IBEAM",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EMouseCursor",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 5,
                value: e,
                __enum__: "awe6.interfaces.EMouseCursor",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Re.__constructs__ = [Re.ARROW, Re.AUTO, Re.BUTTON, Re.HAND, Re.IBEAM, Re.SUB_TYPE];
    var Be = A["awe6.interfaces.EOverlayButton"] = {
        __ename__: "awe6.interfaces.EOverlayButton",
        __constructs__: null,
        BACK: {
            _hx_name: "BACK",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: s
        },
        MUTE: {
            _hx_name: "MUTE",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: s
        },
        UNMUTE: {
            _hx_name: "UNMUTE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: s
        },
        PAUSE: {
            _hx_name: "PAUSE",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: s
        },
        UNPAUSE: {
            _hx_name: "UNPAUSE",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EOverlayButton",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 5,
                value: e,
                __enum__: "awe6.interfaces.EOverlayButton",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Be.__constructs__ = [Be.BACK, Be.MUTE, Be.UNMUTE, Be.PAUSE, Be.UNPAUSE, Be.SUB_TYPE];
    var Me = A["awe6.interfaces.EScene"] = {
        __ename__: "awe6.interfaces.EScene",
        __constructs__: null,
        SPLASH: {
            _hx_name: "SPLASH",
            _hx_index: 0,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        INTRO: {
            _hx_name: "INTRO",
            _hx_index: 1,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SELECT_SESSION: {
            _hx_name: "SELECT_SESSION",
            _hx_index: 2,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SELECT_STORY: {
            _hx_name: "SELECT_STORY",
            _hx_index: 3,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SELECT_LEVEL: {
            _hx_name: "SELECT_LEVEL",
            _hx_index: 4,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        INSTRUCTIONS: {
            _hx_name: "INSTRUCTIONS",
            _hx_index: 5,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SETTINGS: {
            _hx_name: "SETTINGS",
            _hx_index: 6,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        MENU: {
            _hx_name: "MENU",
            _hx_index: 7,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        AVATAR: {
            _hx_name: "AVATAR",
            _hx_index: 8,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SHOP: {
            _hx_name: "SHOP",
            _hx_index: 9,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        REWARDS: {
            _hx_name: "REWARDS",
            _hx_index: 10,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        LEADERBOARD: {
            _hx_name: "LEADERBOARD",
            _hx_index: 11,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        GAME: {
            _hx_name: "GAME",
            _hx_index: 12,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        INTERSTITIAL: {
            _hx_name: "INTERSTITIAL",
            _hx_index: 13,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        CINEMATIC: {
            _hx_name: "CINEMATIC",
            _hx_index: 14,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        RESULTS: {
            _hx_name: "RESULTS",
            _hx_index: 15,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        EXIT: {
            _hx_name: "EXIT",
            _hx_index: 16,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        TEST: {
            _hx_name: "TEST",
            _hx_index: 17,
            __enum__: "awe6.interfaces.EScene",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 18,
                value: e,
                __enum__: "awe6.interfaces.EScene",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Me.__constructs__ = [Me.SPLASH, Me.INTRO, Me.SELECT_SESSION, Me.SELECT_STORY, Me.SELECT_LEVEL, Me.INSTRUCTIONS, Me.SETTINGS, Me.MENU, Me.AVATAR, Me.SHOP, Me.REWARDS, Me.LEADERBOARD, Me.GAME, Me.INTERSTITIAL, Me.CINEMATIC, Me.RESULTS, Me.EXIT, Me.TEST, Me.SUB_TYPE];
    var Ne = A["awe6.interfaces.ETextAlign"] = {
        __ename__: "awe6.interfaces.ETextAlign",
        __constructs__: null,
        JUSTIFY: {
            _hx_name: "JUSTIFY",
            _hx_index: 0,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: s
        },
        LEFT: {
            _hx_name: "LEFT",
            _hx_index: 1,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: s
        },
        CENTER: {
            _hx_name: "CENTER",
            _hx_index: 2,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: s
        },
        RIGHT: {
            _hx_name: "RIGHT",
            _hx_index: 3,
            __enum__: "awe6.interfaces.ETextAlign",
            toString: s
        }
    };
    Ne.__constructs__ = [Ne.JUSTIFY, Ne.LEFT, Ne.CENTER, Ne.RIGHT];
    var Oe = A["awe6.interfaces.ETextStyle"] = {
        __ename__: "awe6.interfaces.ETextStyle",
        __constructs__: null,
        BUTTON: {
            _hx_name: "BUTTON",
            _hx_index: 0,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        BODY: {
            _hx_name: "BODY",
            _hx_index: 1,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        HEADLINE: {
            _hx_name: "HEADLINE",
            _hx_index: 2,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        SUBHEAD: {
            _hx_name: "SUBHEAD",
            _hx_index: 3,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        SMALLPRINT: {
            _hx_name: "SMALLPRINT",
            _hx_index: 4,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        OVERSIZED: {
            _hx_name: "OVERSIZED",
            _hx_index: 5,
            __enum__: "awe6.interfaces.ETextStyle",
            toString: s
        },
        SUB_TYPE: ((h = function(e) {
            return {
                _hx_index: 6,
                value: e,
                __enum__: "awe6.interfaces.ETextStyle",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };

    function Le(e) {
        this._context = new createjs.Container, this._session = e.get_session(), this._assets = e.assets, this._factory = e.factory, this._system = e.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, m.call(this, e, null, this._context)
    }

    function Fe(e) {
        this._kernel = e, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = e.factory
    }

    function Ve(e) {
        this._audio = e.audio, Le.call(this, e)
    }

    function He(e) {
        oe.call(this, e)
    }
    Oe.__constructs__ = [Oe.BUTTON, Oe.BODY, Oe.HEADLINE, Oe.SUBHEAD, Oe.SMALLPRINT, Oe.OVERSIZED, Oe.SUB_TYPE], (t["cbchoc.AEntity"] = Le).__name__ = "cbchoc.AEntity", Le.__super__ = m, Le.prototype = e(m.prototype, {
        __class__: Le
    }), (t["cbchoc.AVo"] = Fe).__name__ = "cbchoc.AVo", Fe.prototype = {
        __class__: Fe
    }, (t["cbchoc.AccessibilityManager"] = Ve).__name__ = "cbchoc.AccessibilityManager", Ve.__super__ = Le, Ve.prototype = e(Le.prototype, {
        get__isApi: function() {
            return null != this._api
        },
        setAudioIsMute: function(e) {
            this.get__isApi() && this._api.setAudioIsMute(e)
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
        getAdjustedVisualsContrast: function(e) {
            null == e && (e = this._state.data.visualsContrast);
            e -= .5;
            return e < .5 && (e *= .5), 1 + e
        },
        getAdjustedGameplayChallenge: function() {
            return (this._state.data.gameplayChallenge / .8 + 1) / 2
        },
        _init: function() {
            this._stageCanvas = this._factory._context.getStage().canvas, this._supers = {
                audioStart: Ys(h = this._kernel.audio, h.start),
                audioTransform: Ys(h = this._kernel.audio, h.transform)
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
                show: Ys(this, this._onApiControlPanelShow),
                close: Ys(this, this._onApiControlPanelClose),
                update: Ys(this, this._onApiUpdate)
            }), this._api.update(), this._state.isFirstUpdate = !1), this._doOverrides(), Le.prototype._init.call(this)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._state.buttonActivateDelayDuration -= e, this._buttonsInputs()
        },
        _doOverrides: function() {
            this._kernel.audio.start = Ys(this, this._overrideAudioStart), this._kernel.audio.transform = Ys(this, this._overrideAudioTransform)
        },
        _overrideAudioStart: function(e, t, s, i, n, a, _, r) {
            if (null == _ && (_ = !1), null == a && (a = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null != t) switch (t._hx_index) {
                case 0:
                case 1:
                case 2:
                    n *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    n *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioStart(e, t, s, i, n, a, _, r)
        },
        _overrideAudioTransform: function(e, t, s, i, n) {
            if (null == n && (n = !1), null == i && (i = 0), null == s && (s = 1), !this._state.isSkip && null != t) switch (t._hx_index) {
                case 0:
                case 1:
                case 2:
                    s *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    s *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioTransform(e, t, s, i, n)
        },
        _onApiControlPanelShow: function() {
            this._state.isModalVisible = !0, createjs.Ticker.setPaused(!0), this._state.wasMute = this._audio.isMute, this._audio.set_isMute(!0)
        },
        _onApiControlPanelClose: function() {
            this._state.isModalVisible = !1, createjs.Ticker.setPaused(!1), this._audio.set_isMute(this._state.wasMute)
        },
        _onApiUpdate: function(e) {
            var t, s;
            e.dateUpdated = I.strDate(k.string(e.dateUpdated)), e.version <= this._state.data.version || (e.audioIsMute != this._state.data.audioIsMute && (ss.trace("Audio IsMute Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 283,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.wasMute = e.audioIsMute, this._state.isFirstUpdate && this._audio.set_isMute(e.audioIsMute)), e.audioEffectsVolume != this._state.data.audioEffectsVolume && (ss.trace("Audio Effects Volume Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 293,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = 0 == this._state.data.audioEffectsVolume, t = e.audioEffectsVolume * (s ? .5 : 1 / this._state.data.audioEffectsVolume), this._state.isSkip = !0, this._audio.transform(null, Ae.EFFECTS, t, null, !s), this._audio.transform(null, Ae.INTERFACE, t, null, !s), this._audio.transform(null, Ae.DEFAULT, t, null, !s), this._state.isSkip = !1), e.audioMusicVolume != this._state.data.audioMusicVolume && (ss.trace("Audio Music Volume Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 304,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = 0 == this._state.data.audioMusicVolume, t = e.audioMusicVolume * (s ? .5 : 1 / this._state.data.audioMusicVolume), this._state.isSkip = !0, this._audio.transform(null, Ae.MUSIC, t, null, !s), this._state.isSkip = !1), e.audioVoiceVolume != this._state.data.audioVoiceVolume && ss.trace("Audio Voice Volume Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 311,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), e.subtitlesIsDisabled != this._state.data.subtitlesIsDisabled && ss.trace("Subtitles IsDisabled Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 312,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), e.subtitlesSize != this._state.data.subtitlesSize && ss.trace("Subtitles Size Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 313,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), e.visualsIntensity != this._state.data.visualsIntensity && ss.trace("Visuals Intensity Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 314,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), e.visualsContrast != this._state.data.visualsContrast && (ss.trace("Visuals Contrast Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 317,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = this.getAdjustedVisualsContrast(e.visualsContrast), this._stageCanvas.style.filter = "contrast(" + s + ")"), e.gameplayChallenge != this._state.data.gameplayChallenge && ss.trace("Gameplay Challenge Changed", {
                fileName: "src/cbchoc/AccessibilityManager.hx",
                lineNumber: 321,
                className: "cbchoc.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.data = e)
        },
        buttonsRegister: function(s, i, e) {
            null == e && (e = 2e3);
            var n = this;
            this._state.buttonsCache = this._state.buttons, this._state.buttonActivateDelayDuration = e, null != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = null, this._state.buttons = [], null != s && as.delay(function() {
                var e = s,
                    t = s.get_agenda();
                n._state.buttons = e.getEntitiesByClass(gt, t, !0), !ks.__implements(s, F) || null != (t = n._kernel.overlay._buttonPause) && n._state.buttons.push(t), n._state.buttons.sort(function(e, t) {
                    return Math.round(1e3 * (e.getAccessibilityPosition().y - t.getAccessibilityPosition().y))
                }), 0 < n._state.buttons.length && (n._state.buttonHighlighted = n._state.buttons[0]), null != i && 0 <= n._state.buttons.indexOf(i) && (n._state.buttonHighlighted = i)
            }, 1)
        },
        buttonsRevert: function() {
            null != this._state.buttonsCache && (this._state.buttons = this._state.buttonsCache), (this._state.buttonsCache = null) != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), 0 < this._state.buttons.length && (this._state.buttonHighlighted = this._state.buttons[0])
        },
        _buttonsInputs: function() {
            if (0 != this._state.buttons.length) {
                var e = this._kernel.inputs.keyboard.getIsKeyPress(Ue.UP) || this._kernel.inputs.keyboard.getIsKeyPress(Ue.W),
                    t = this._kernel.inputs.keyboard.getIsKeyPress(Ue.RIGHT) || this._kernel.inputs.keyboard.getIsKeyPress(Ue.D),
                    s = this._kernel.inputs.keyboard.getIsKeyPress(Ue.DOWN) || this._kernel.inputs.keyboard.getIsKeyPress(Ue.S),
                    i = this._kernel.inputs.keyboard.getIsKeyPress(Ue.LEFT) || this._kernel.inputs.keyboard.getIsKeyPress(Ue.A),
                    n = this._state.buttonActivateDelayDuration <= 0 && (this._kernel.inputs.keyboard.getIsKeyPress(Ue.ENTER) || this._kernel.inputs.keyboard.getIsKeyPress(Ue.SPACE));
                if (e || t || s || i) {
                    if (!this._state.buttonHighlighted.get_isHighlighted()) return void this._state.buttonHighlighted.highlight(!0);
                    if (this._state.buttons.length <= 1) return;
                    for (var a = i ? .51 : s ? .26 : t ? .01 : e ? .76 : 0, _ = this._state.buttonHighlighted.getAccessibilityPosition(), r = [], o = 0, h = this._state.buttons; o < h.length;) {
                        var l = h[o];
                        ++o, l != this._state.buttonHighlighted && l.get_isHighlightable() && r.push(l)
                    }
                    for (var c = r, u = new Array(c.length), r = 0, o = c.length; r < o;) {
                        var d = r++,
                            p = c[d],
                            g = p.getAccessibilityPosition(),
                            f = _.x - g.x,
                            y = _.y - g.y,
                            g = Math.sqrt(f * f + y * y),
                            f = (Math.atan2(y, f) / (2 * Math.PI) - a + 10) % 1;
                        .5 < f && (f = 1 - f);
                        g = f - g / 1e4;
                        u[d] = {
                            button: p,
                            sort: g
                        }
                    }
                    e = u;
                    e.sort(function(e, t) {
                        return Math.round(1e4 * (t.sort - e.sort))
                    }), .25 < e[0].sort && (this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = e[0].button), this._state.buttonHighlighted.highlight(!0)
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
        __class__: Ve
    }), (t["cbchoc.AssetManager"] = He).__name__ = "cbchoc.AssetManager", He.__super__ = oe, He.prototype = e(oe.prototype, {
        _init: function() {
            oe.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(Ge.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(Ge.OVERLAY_PAUSE_OVER)
        },
        get_buttonOver: function() {
            return this._createView(Ge.BUTTON_OVER)
        },
        get_buttonUp: function() {
            return this._createView(Ge.BUTTON_UP)
        },
        get_buttonSmallOver: function() {
            return this._createView(Ge.BUTTON_SMALL_OVER)
        },
        get_buttonSmallUp: function() {
            return this._createView(Ge.BUTTON_SMALL_UP)
        },
        _createView: function(e) {
            var t, s = new createjs.Container,
                i = new createjs.Bitmap(this.getAsset("assets/gui/Buttons.png"));
            switch (e._hx_index) {
                case 0:
                    t = new createjs.Rectangle(0, 0, 200, 65);
                    break;
                case 1:
                    t = new createjs.Rectangle(200, 0, 200, 65);
                    break;
                case 2:
                    t = new createjs.Rectangle(400, 65, 100, 30);
                    break;
                case 3:
                    t = new createjs.Rectangle(400, 95, 100, 30);
                    break;
                case 4:
                    t = new createjs.Rectangle(0, 65, 65, 65);
                    break;
                case 5:
                    t = new createjs.Rectangle(65, 65, 65, 65);
                    break;
                case 6:
                    t = new createjs.Rectangle(130, 65, 65, 65);
                    break;
                case 7:
                    t = new createjs.Rectangle(195, 65, 65, 65);
                    break;
                case 8:
                    t = new createjs.Rectangle(400, 0, 50, 50);
                    break;
                case 9:
                    t = new createjs.Rectangle(450, 0, 50, 50)
            }
            return i.sourceRect = t, i.cache(0, 0, i.sourceRect.width, i.sourceRect.height), s.addChild(i), new Ee(this._kernel, s)
        },
        __class__: He
    });
    var Ge = A["cbchoc.EAsset"] = {
        __ename__: "cbchoc.EAsset",
        __constructs__: null,
        BUTTON_UP: {
            _hx_name: "BUTTON_UP",
            _hx_index: 0,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_OVER: {
            _hx_name: "BUTTON_OVER",
            _hx_index: 1,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_SMALL_UP: {
            _hx_name: "BUTTON_SMALL_UP",
            _hx_index: 2,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_SMALL_OVER: {
            _hx_name: "BUTTON_SMALL_OVER",
            _hx_index: 3,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_TWITTER_UP: {
            _hx_name: "BUTTON_TWITTER_UP",
            _hx_index: 4,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_TWITTER_OVER: {
            _hx_name: "BUTTON_TWITTER_OVER",
            _hx_index: 5,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_FACEBOOK_UP: {
            _hx_name: "BUTTON_FACEBOOK_UP",
            _hx_index: 6,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        BUTTON_FACEBOOK_OVER: {
            _hx_name: "BUTTON_FACEBOOK_OVER",
            _hx_index: 7,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        OVERLAY_PAUSE_UP: {
            _hx_name: "OVERLAY_PAUSE_UP",
            _hx_index: 8,
            __enum__: "cbchoc.EAsset",
            toString: s
        },
        OVERLAY_PAUSE_OVER: {
            _hx_name: "OVERLAY_PAUSE_OVER",
            _hx_index: 9,
            __enum__: "cbchoc.EAsset",
            toString: s
        }
    };

    function je(e, t, s) {
        this.COLOR_GREY = 5789784, this.COLOR_BLACK = 0, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_HUD_ALERT = Oe.SUB_TYPE("HUD_ALERT"), this.TEXTSTYLE_HUD_COINS = Oe.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_DISTANCE = Oe.SUB_TYPE("HUD_DISTANCE"), this.TEXTSTYLE_HUD_TITLE = Oe.SUB_TYPE("HUD_TITLE"), this.TEXTSTYLE_PANEL_STATS = Oe.SUB_TYPE("PANEL_STATS"), this.TEXTSTYLE_PANEL_MESSAGE = Oe.SUB_TYPE("PANEL_MESSAGE"), this.TEXTSTYLE_PANEL_TITLE = Oe.SUB_TYPE("PANEL_TITLE"), ce.call(this, e, t, s)
    }
    Ge.__constructs__ = [Ge.BUTTON_UP, Ge.BUTTON_OVER, Ge.BUTTON_SMALL_UP, Ge.BUTTON_SMALL_OVER, Ge.BUTTON_TWITTER_UP, Ge.BUTTON_TWITTER_OVER, Ge.BUTTON_FACEBOOK_UP, Ge.BUTTON_FACEBOOK_OVER, Ge.OVERLAY_PAUSE_UP, Ge.OVERLAY_PAUSE_OVER], (t["cbchoc.Factory"] = je).__name__ = "cbchoc.Factory", je.__super__ = ce, je.prototype = e(ce.prototype, {
        _configurer: function(e) {
            null == e && (e = !1), e && (this.id = "cbchoc", e = "1", null != is.getString("revision") && (e = is.getString("revision").split("\n")[0]), this.version = "1.1." + e, this.author = "Hypersurge", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = Ie.DISABLED, this.bgColor = 0, this.startingSceneType = Me.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0, this.keyNext = null)
        },
        _launchKernel: function() {
            ce.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId")), "true" == this._kernel.getConfig("settings.disableEyeCandy") && this._kernel.set_isEyeCandy(!1)
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new He(this._kernel), this.accessibility = new Ve(this._kernel)), this._assets
        },
        createLogger: function() {
            var e = k.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != e ? new Ke(this._kernel, e) : ce.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            var e = new Rt(this._kernel);
            return e.addEntity(this.accessibility, null, !0, 90), e
        },
        createPreloader: function() {
            return new ze(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(e) {
            switch (this._kernel.log("scene: " + k.string(e)), e._hx_index) {
                case 1:
                    return new Qt(this._kernel, e);
                case 4:
                    return new $t(this._kernel, e);
                case 5:
                    return new Xt(this._kernel, e);
                case 7:
                    return new Jt(this._kernel, e);
                case 8:
                    return new zt(this._kernel, e);
                case 9:
                    return new es(this._kernel, e);
                case 12:
                    return new Yt(this._kernel, e);
                case 15:
                    return new Zt(this._kernel, e)
            }
            return ce.prototype.createScene.call(this, e)
        },
        createSceneTransition: function(e, t) {
            return new qt(this._kernel)
        },
        createSession: function(e) {
            return new Ye(this._kernel, e)
        },
        createTextStyle: function(e) {
            null == e && (e = Oe.BODY);
            var t, s = this._kernel.getConfig("settings.font.name");
            if (null == e) t = new G(s, 12, 8421504);
            else switch (e._hx_index) {
                case 0:
                    t = new G(s, 18, this.COLOR_WHITE, !1, !1, Ne.CENTER, 0, 0, 0, []);
                    break;
                case 1:
                    t = new G(s, 16, this.COLOR_BLACK, !1, !1, Ne.LEFT, 0, 18, 0, []);
                    break;
                case 2:
                    t = new G(s, 22, this.COLOR_WHITE, !1, !1, Ne.CENTER, 0, 0, 0, []);
                    break;
                case 3:
                    t = new G(s, 22, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                    break;
                case 4:
                    t = new G("Arial", 11, this.COLOR_GREY, !1, !1, Ne.CENTER, 0, 0, 0, []);
                    break;
                case 5:
                    t = new G(s, 44, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                    break;
                case 6:
                    switch (e.value) {
                        case "HUD_ALERT":
                            t = new G(s, 60, this.COLOR_WHITE, !1, !1, Ne.CENTER, 0, 0, 0, [0, 4]);
                            break;
                        case "HUD_COINS":
                            t = new G(s, 22, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                            break;
                        case "HUD_DISTANCE":
                            t = new G(s, 22, this.COLOR_WHITE, !1, !1, Ne.LEFT, 0, 0, 0, []);
                            break;
                        case "HUD_TITLE":
                            t = new G(s, 12, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_MESSAGE":
                            t = new G(s, 12, this.COLOR_WHITE, !1, !1, Ne.CENTER, 0, 0, 0, []);
                            break;
                        case "PANEL_STATS":
                            t = new G(s, 12, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_TITLE":
                            t = new G(s, 19, this.COLOR_WHITE, !1, !1, Ne.RIGHT, 0, 0, 0, []);
                            break;
                        case "PRELOADER":
                            t = new G(s, 14, this.COLOR_WHITE, !1, !1, Ne.CENTER, 0, 0, 0, []);
                            break;
                        default:
                            t = null
                    }
            }
            return t
        },
        getBackSceneType: function(e) {
            switch (e._hx_index) {
                case 4:
                    return Me.AVATAR;
                case 12:
                    return Me.SELECT_LEVEL;
                case 5:
                case 8:
                case 9:
                case 13:
                case 15:
                    return Me.MENU
            }
            return ce.prototype.getBackSceneType.call(this, e)
        },
        getNextSceneType: function(e) {
            switch (e._hx_index) {
                case 1:
                    return Me.MENU;
                case 4:
                    return Me.GAME;
                case 5:
                case 7:
                    return Me.AVATAR;
                case 8:
                case 9:
                    return Me.SELECT_LEVEL;
                case 12:
                    return Me.RESULTS;
                case 13:
                case 15:
                    return Me.SHOP
            }
            return ce.prototype.getNextSceneType.call(this, e)
        },
        __class__: je
    });
    var Ke = function(e, t) {
        if (this._kernel = e, this._id = t, this._factory = this._kernel.factory, this._isTrackerEnabled = !e.isLocal && "true" == e.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
            this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), ss.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "src/cbchoc/LoggerGoogleAnalytics.hx",
                lineNumber: 40,
                className: "cbchoc.LoggerGoogleAnalytics",
                methodName: "new"
            })
        } catch (e) {
            this._isTrackerEnabled = !1, ss.trace("Google Analytics failed with property ID " + this._id, {
                fileName: "src/cbchoc/LoggerGoogleAnalytics.hx",
                lineNumber: 45,
                className: "cbchoc.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };

    function We() {}(t["cbchoc.LoggerGoogleAnalytics"] = Ke).__name__ = "cbchoc.LoggerGoogleAnalytics", Ke.__interfaces__ = [g], Ke.prototype = {
        log: function(e) {
            I.substr(k.string(e), 0, 25);
            e = k.string(e).split(": ");
            this._isTrackerEnabled ? this._gaLib("send", {
                hitType: "event",
                eventCategory: e[0],
                eventAction: e[1],
                eventLabel: e[2]
            }) : ss.trace("Logger:" + k.string([e[0], e[1], e[2]]), {
                fileName: "src/cbchoc/LoggerGoogleAnalytics.hx",
                lineNumber: 65,
                className: "cbchoc.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: Ke
    }, (t["cbchoc.Main"] = We).__name__ = "cbchoc.Main", We.main = function() {
        var e = window.document.getElementById("gameCanvas"),
            t = We.getParams().h.lang;
        null != t && (s = "assets/__Config_" + t + ".xml", e.setAttribute("config", s));
        var s = new createjs.Stage(e),
            e = new createjs.Container;
        s.addChild(e), We.factory = new je(e, !1, is.getString("config"))
    }, We.getParams = function() {
        for (var e = I.substr(u.location.search, 1, null), t = new ws, s = 0, i = new d("[&;]", "g").split(e); s < i.length;) {
            var n = i[s];
            ++s;
            var a = n.split("=");
            a.length < 2 || (n = a.shift(), n = decodeURIComponent(n.split("+").join(" ")), a = a.join("="), a = decodeURIComponent(a.split("+").join(" ")), t.h[n] = a)
        }
        return t
    };
    var ze = function(e, t, s) {
        fe.call(this, e, t, s)
    };
    (t["cbchoc.Preloader"] = ze).__name__ = "cbchoc.Preloader", ze.__super__ = fe, ze.prototype = e(fe.prototype, {
        _init: function() {
            this._factory = this._kernel.factory, this._proprietaryAudioFormat = "m4a";
            var e = new createjs.Bitmap("assets/__PreloaderBg.png");
            fe.prototype._init.call(this);
            this._bg = new createjs.Shape, this._bg.graphics.beginFill("#404040"), this._bg.graphics.drawRoundRect(-2, -2, 204, 14, 4), this._bg.graphics.endFill(), this._fg = new createjs.Shape, this._fg.graphics.beginFill("#ffffff"), this._fg.graphics.drawRoundRect(0, 0, 200, 10, 4), this._fg.graphics.endFill(), this._bg.x = this._fg.x = .5 * (this._kernel.factory.width - 200), this._bg.y = this._fg.y = this._kernel.factory.height - 20 - 10 - 2, this._context.addChild(e), this._context.addChild(this._bg), this._context.addChild(this._fg)
        },
        _updater: function(e) {
            null == e && (e = 0), fe.prototype._updater.call(this, e), this._fg.scaleX = this.get_progress()
        },
        _showAudioHoldMessage: function() {
            var e = new Vt(this._kernel, this._kernel.factory.width, 20, k.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(Oe.SUB_TYPE("PRELOADER")));
            e.setPosition(0, this._bg.y - 6), this.get_view().addChild(e.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        __class__: ze
    });
    var Ye = function(e, t) {
        we.call(this, e, t)
    };
    (t["cbchoc.Session"] = Ye).__name__ = "cbchoc.Session", Ye.__super__ = we, Ye.prototype = e(we.prototype, {
        _init: function() {
            this._version = 1, we.prototype._init.call(this)
        },
        _getter: function() {
            we.prototype._getter.call(this), this._upgradeMovementUnitA = this._getValidatedInteger(this._data.upgradeMovementUnitA), this._upgradeShootingUnitA = this._getValidatedInteger(this._data.upgradeShootingUnitA), this._upgradeDefenseUnitA = this._getValidatedInteger(this._data.upgradeDefenseUnitA), this._upgradeMagnetUnitA = this._getValidatedInteger(this._data.upgradeMagnetUnitA), this._medalLevel1UnitA = this._getValidatedInteger(this._data.medalLevel1UnitA), this._medalLevel2UnitA = this._getValidatedInteger(this._data.medalLevel2UnitA), this._medalLevel3UnitA = this._getValidatedInteger(this._data.medalLevel3UnitA), this._coinsUnitA = this._getValidatedInteger(this._data.coinsUnitA), this._upgradeMovementUnitB = this._getValidatedInteger(this._data.upgradeMovementUnitB), this._upgradeShootingUnitB = this._getValidatedInteger(this._data.upgradeShootingUnitB), this._upgradeDefenseUnitB = this._getValidatedInteger(this._data.upgradeDefenseUnitB), this._upgradeMagnetUnitB = this._getValidatedInteger(this._data.upgradeMagnetUnitB), this._medalLevel1UnitB = this._getValidatedInteger(this._data.medalLevel1UnitB), this._medalLevel2UnitB = this._getValidatedInteger(this._data.medalLevel2UnitB), this._medalLevel3UnitB = this._getValidatedInteger(this._data.medalLevel3UnitB), this._coinsUnitB = this._getValidatedInteger(this._data.coinsUnitB)
        },
        _getValidatedInteger: function(e) {
            return null == e || isNaN(e) ? 0 : e
        },
        _setter: function() {
            we.prototype._setter.call(this), this._data.upgradeMovementUnitA = this._upgradeMovementUnitA, this._data.upgradeShootingUnitA = this._upgradeShootingUnitA, this._data.upgradeDefenseUnitA = this._upgradeDefenseUnitA, this._data.upgradeMagnetUnitA = this._upgradeMagnetUnitA, this._data.medalLevel1UnitA = this._medalLevel1UnitA, this._data.medalLevel2UnitA = this._medalLevel2UnitA, this._data.medalLevel3UnitA = this._medalLevel3UnitA, this._data.coinsUnitA = this._coinsUnitA, this._data.upgradeMovementUnitB = this._upgradeMovementUnitB, this._data.upgradeShootingUnitB = this._upgradeShootingUnitB, this._data.upgradeDefenseUnitB = this._upgradeDefenseUnitB, this._data.upgradeMagnetUnitB = this._upgradeMagnetUnitB, this._data.medalLevel1UnitB = this._medalLevel1UnitB, this._data.medalLevel2UnitB = this._medalLevel2UnitB, this._data.medalLevel3UnitB = this._medalLevel3UnitB, this._data.coinsUnitB = this._coinsUnitB
        },
        _resetter: function() {
            we.prototype._resetter.call(this), this.cache = new Xe(this._kernel), this.resetUnit(nt.UNIT_A), this.resetUnit(nt.UNIT_B)
        },
        resetUnit: function(e) {
            switch (e._hx_index) {
                case 0:
                    this._upgradeMovementUnitA = 0, this._upgradeShootingUnitA = 0, this._upgradeDefenseUnitA = 0, this._upgradeMagnetUnitA = 0, this._medalLevel1UnitA = 0, this._medalLevel2UnitA = 0, this._medalLevel3UnitA = 0, this._coinsUnitA = 0;
                    break;
                case 1:
                    this._upgradeMovementUnitB = 0, this._upgradeShootingUnitB = 0, this._upgradeDefenseUnitB = 0, this._upgradeMagnetUnitB = 0, this._medalLevel1UnitB = 0, this._medalLevel2UnitB = 0, this._medalLevel3UnitB = 0, this._coinsUnitB = 0
            }
        },
        setCoins: function(e, t) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    return this._coinsUnitA = t;
                case 1:
                    return this._coinsUnitB = t
            }
        },
        getCoins: function(e) {
            var t;
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    t = this._coinsUnitA;
                    break;
                case 1:
                    t = this._coinsUnitB
            }
            return 0 | Math.min(99999, t)
        },
        setMedal: function(e, t, s) {
            switch (null == t && (t = this.cache.unitType), t._hx_index) {
                case 0:
                    switch (e._hx_index) {
                        case 0:
                            this._medalLevel1UnitA = 0 | Math.max(this._medalLevel1UnitA, s._hx_index);
                            break;
                        case 1:
                            this._medalLevel2UnitA = 0 | Math.max(this._medalLevel2UnitA, s._hx_index);
                            break;
                        case 2:
                            this._medalLevel3UnitA = 0 | Math.max(this._medalLevel3UnitA, s._hx_index)
                    }
                    break;
                case 1:
                    switch (e._hx_index) {
                        case 0:
                            this._medalLevel1UnitB = 0 | Math.max(this._medalLevel1UnitB, s._hx_index);
                            break;
                        case 1:
                            this._medalLevel2UnitB = 0 | Math.max(this._medalLevel2UnitB, s._hx_index);
                            break;
                        case 2:
                            this._medalLevel3UnitB = 0 | Math.max(this._medalLevel3UnitB, s._hx_index)
                    }
            }
        },
        getMedal: function(e, t) {
            switch (null == t && (t = this.cache.unitType), t._hx_index) {
                case 0:
                    switch (e._hx_index) {
                        case 0:
                            return U.createEnumIndex(et, this._medalLevel1UnitA, null);
                        case 1:
                            return U.createEnumIndex(et, this._medalLevel2UnitA, null);
                        case 2:
                            return U.createEnumIndex(et, this._medalLevel3UnitA, null)
                    }
                    break;
                case 1:
                    switch (e._hx_index) {
                        case 0:
                            return U.createEnumIndex(et, this._medalLevel1UnitB, null);
                        case 1:
                            return U.createEnumIndex(et, this._medalLevel2UnitB, null);
                        case 2:
                            return U.createEnumIndex(et, this._medalLevel3UnitB, null)
                    }
            }
        },
        setUpgrade: function(e, t, s) {
            switch (null == t && (t = this.cache.unitType), s < 0 && (s = 0), 8 < s && (s = 8), t._hx_index) {
                case 0:
                    switch (e._hx_index) {
                        case 0:
                            this._upgradeMovementUnitA = s;
                            break;
                        case 1:
                            this._upgradeShootingUnitA = s;
                            break;
                        case 2:
                            this._upgradeDefenseUnitA = s;
                            break;
                        case 3:
                            this._upgradeMagnetUnitA = s
                    }
                    break;
                case 1:
                    switch (e._hx_index) {
                        case 0:
                            this._upgradeMovementUnitB = s;
                            break;
                        case 1:
                            this._upgradeShootingUnitB = s;
                            break;
                        case 2:
                            this._upgradeDefenseUnitB = s;
                            break;
                        case 3:
                            this._upgradeMagnetUnitB = s
                    }
            }
        },
        getUpgrade: function(e, t) {
            switch (null == t && (t = this.cache.unitType), t._hx_index) {
                case 0:
                    switch (e._hx_index) {
                        case 0:
                            return this._upgradeMovementUnitA;
                        case 1:
                            return this._upgradeShootingUnitA;
                        case 2:
                            return this._upgradeDefenseUnitA;
                        case 3:
                            return this._upgradeMagnetUnitA
                    }
                    break;
                case 1:
                    switch (e._hx_index) {
                        case 0:
                            return this._upgradeMovementUnitB;
                        case 1:
                            return this._upgradeShootingUnitB;
                        case 2:
                            return this._upgradeDefenseUnitB;
                        case 3:
                            return this._upgradeMagnetUnitB
                    }
            }
        },
        getUpgradeTitle: function(e) {
            var t;
            switch (e._hx_index) {
                case 0:
                    t = "gui.upgrades.movement";
                    break;
                case 1:
                    t = "gui.upgrades.shooting";
                    break;
                case 2:
                    t = "gui.upgrades.defense";
                    break;
                case 3:
                    t = "gui.upgrades.magnet"
            }
            return k.string(this._kernel.getConfig(t)).toUpperCase()
        },
        getMedalTitle: function(e) {
            var t;
            switch (e._hx_index) {
                case 0:
                    t = "gui.medals.none";
                    break;
                case 1:
                    t = "gui.medals.bronze";
                    break;
                case 2:
                    t = "gui.medals.silver";
                    break;
                case 3:
                    t = "gui.medals.gold"
            }
            return k.string(this._kernel.getConfig(t)).toUpperCase()
        },
        setIsTester: function(e) {
            this._isTester = e
        },
        get_isTester: function() {
            return !!this._kernel.isDebug || this._isTester
        },
        getMedalFromCachedOutcomes: function() {
            if (this.cache.currentPeriod != st.GAME_OVER) return et.MEDAL_NONE;
            var e = 0;
            return e += this.cache.getOutcome(st.PERIOD_1) == tt.WIN ? 1 : 0, e += this.cache.getOutcome(st.PERIOD_2) == tt.WIN ? 1 : 0, e += this.cache.getOutcome(st.PERIOD_3) == tt.WIN ? 1 : 0, U.createEnumIndex(et, e, null)
        },
        __class__: Ye
    });
    var Xe = function(e) {
        this._kernel = e, this.totalPlays = 0, this.debugMessage = "", this.unitType = nt.UNIT_B, this.levelType = qe.LEVEL_1, this.reset()
    };

    function Qe(e, t, s, i) {
        this._ease = .15, this._shake = {
            value: 0,
            resistance: .9,
            dx: 0,
            dy: 0
        }, this.x = t, this.y = s, this.altitude = i, Le.call(this, e)
    }

    function Je() {}

    function Ze(e, t, s) {
        this.radius = 32, this.x = t, this.y = s, Le.call(this, e)
    }(t["cbchoc._Session._HelperCache"] = Xe).__name__ = "cbchoc._Session._HelperCache", Xe.prototype = {
        reset: function() {
            this.medalType = et.MEDAL_NONE, this.currentPeriod = st.PERIOD_1, this._period1Outcome = tt.FUTURE, this._period2Outcome = tt.FUTURE, this._period3Outcome = tt.FUTURE
        },
        getOutcome: function(e) {
            if (e == this.currentPeriod) return tt.ACTIVE;
            switch (e._hx_index) {
                case 0:
                    return null;
                case 1:
                    return this._period1Outcome;
                case 2:
                    return this._period2Outcome;
                case 3:
                    return this._period3Outcome
            }
        },
        setOutcome: function(e, t) {
            switch (null == e && (e = this.currentPeriod), e._hx_index) {
                case 0:
                    break;
                case 1:
                    this._period1Outcome = t;
                    break;
                case 2:
                    this._period2Outcome = t;
                    break;
                case 3:
                    this._period3Outcome = t
            }
        },
        __class__: Xe
    }, (t["cbchoc.game.Camera"] = Qe).__name__ = "cbchoc.game.Camera", Qe.__super__ = Le, Qe.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this.yScaler = .5
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e);
            this._tools;
            var t = this.altitude *= .95;
            this.altitude = 500 < t ? 500 : t < 0 ? 0 : t, 0 < this._shake.value && (this._shake.value *= this._shake.resistance, this._shake.value < .1 ? (this._shake.value = 0, this._shake.dx = 0, this._shake.dy = 0) : (e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dx = e * t, e = Math.random() * this._shake.value * 20, t = Math.random() < .5 ? -1 : 1, this._shake.dy = e * t))
        },
        setShake: function(e) {
            this._shake.value = Math.abs(1 < e ? 1 : e < 0 ? 0 : e)
        },
        setPosition: function(e, t, s) {
            var i = this._ease;
            this.x = this.x * (1 - i) + e * i;
            i = this._ease;
            this.y = this.y * (1 - i) + t * i, null != s && (this.altitude = s)
        },
        getCoords: function(e) {
            null == e && (e = !1);
            var t = this.x,
                s = this.y;
            t += 10 * Math.sin(this._updates / 100), (s += 15 * Math.sin(this._updates / 40)) < this._getMinY() && (s = this._getMinY()), s > this._getMaxY() && (s = this._getMaxY());
            s = {
                x: t + this._getSkewX(this.y),
                y: s * this.yScaler + this.altitude
            };
            return e && (s.x += this._shake.dx, s.y += this._shake.dy), s
        },
        _getMinY: function() {
            return (-350 - this.altitude) / this.yScaler
        },
        _getMaxY: function() {
            return (258 - this.altitude) / this.yScaler
        },
        getRenderableCoordsFromWorldCoords: function(e, t) {
            return {
                x: e + this._getSkewX(t),
                y: t * this.yScaler
            }
        },
        getWorldCoordsFromScreenCoords: function(e, t) {
            e = {
                x: -this.x + (e - this._getSkewX(t / this.yScaler)),
                y: -this.y + t / this.yScaler
            };
            return this.y < this._getMinY() && (t = this.y - this._getMinY(), e.x -= this._getSkewX(t), e.y += t), e
        },
        _getSkewX: function(e) {
            return .21 * e
        },
        __class__: Qe
    }), (t["cbchoc.game.IRenderable"] = Je).__name__ = "cbchoc.game.IRenderable", Je.__isInterface__ = !0, Je.prototype = {
        __class__: Je
    }, (t["cbchoc.game.Coin"] = Ze).__name__ = "cbchoc.game.Coin", Ze.__interfaces__ = [Je], Ze.__super__ = Le, Ze.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._frame = 0, this._seed = k.random(32), this._source = this._assets.getAsset("assets/location/Coin.png"), this.offsetY = 30
        },
        _disposer: function() {
            Le.prototype._disposer.call(this)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._frame = (this._seed + this._updates) % 32
        },
        getSprite: function() {
            return {
                source: this._source,
                x: 32 * this._frame,
                y: 0,
                width: 32,
                height: 32,
                isFlip: !0
            }
        },
        isCollision: function(e, t, s) {
            var i = e - this.x,
                e = t - this.y,
                t = Math.sqrt(i * i + e * e),
                s = t / (200 * s),
                s = 1 < s ? 1 : s < 0 ? 0 : s;
            return !(1 < s) && (t < this.radius || (this.x += i / t * (1 - s) * 25, this.y += e / t * (1 - s) * 25, !1))
        },
        getSpriteHelmet: function() {
            return null
        },
        getSpriteHead: function() {
            return null
        },
        __class__: Ze
    });
    var qe = A["cbchoc.game.ELevel"] = {
        __ename__: "cbchoc.game.ELevel",
        __constructs__: null,
        LEVEL_1: {
            _hx_name: "LEVEL_1",
            _hx_index: 0,
            __enum__: "cbchoc.game.ELevel",
            toString: s
        },
        LEVEL_2: {
            _hx_name: "LEVEL_2",
            _hx_index: 1,
            __enum__: "cbchoc.game.ELevel",
            toString: s
        },
        LEVEL_3: {
            _hx_name: "LEVEL_3",
            _hx_index: 2,
            __enum__: "cbchoc.game.ELevel",
            toString: s
        }
    };
    qe.__constructs__ = [qe.LEVEL_1, qe.LEVEL_2, qe.LEVEL_3];
    var $e = A["cbchoc.game.ELocation"] = {
        __ename__: "cbchoc.game.ELocation",
        __constructs__: null,
        LOCATION_A: {
            _hx_name: "LOCATION_A",
            _hx_index: 0,
            __enum__: "cbchoc.game.ELocation",
            toString: s
        }
    };
    $e.__constructs__ = [$e.LOCATION_A];
    var et = A["cbchoc.game.EMedal"] = {
        __ename__: "cbchoc.game.EMedal",
        __constructs__: null,
        MEDAL_NONE: {
            _hx_name: "MEDAL_NONE",
            _hx_index: 0,
            __enum__: "cbchoc.game.EMedal",
            toString: s
        },
        MEDAL_BRONZE: {
            _hx_name: "MEDAL_BRONZE",
            _hx_index: 1,
            __enum__: "cbchoc.game.EMedal",
            toString: s
        },
        MEDAL_SILVER: {
            _hx_name: "MEDAL_SILVER",
            _hx_index: 2,
            __enum__: "cbchoc.game.EMedal",
            toString: s
        },
        MEDAL_GOLD: {
            _hx_name: "MEDAL_GOLD",
            _hx_index: 3,
            __enum__: "cbchoc.game.EMedal",
            toString: s
        }
    };
    et.__constructs__ = [et.MEDAL_NONE, et.MEDAL_BRONZE, et.MEDAL_SILVER, et.MEDAL_GOLD];
    var tt = A["cbchoc.game.EOutcome"] = {
        __ename__: "cbchoc.game.EOutcome",
        __constructs__: null,
        FUTURE: {
            _hx_name: "FUTURE",
            _hx_index: 0,
            __enum__: "cbchoc.game.EOutcome",
            toString: s
        },
        ACTIVE: {
            _hx_name: "ACTIVE",
            _hx_index: 1,
            __enum__: "cbchoc.game.EOutcome",
            toString: s
        },
        WIN: {
            _hx_name: "WIN",
            _hx_index: 2,
            __enum__: "cbchoc.game.EOutcome",
            toString: s
        },
        LOSS: {
            _hx_name: "LOSS",
            _hx_index: 3,
            __enum__: "cbchoc.game.EOutcome",
            toString: s
        }
    };
    tt.__constructs__ = [tt.FUTURE, tt.ACTIVE, tt.WIN, tt.LOSS];
    var st = A["cbchoc.game.EPeriod"] = {
        __ename__: "cbchoc.game.EPeriod",
        __constructs__: null,
        GAME_OVER: {
            _hx_name: "GAME_OVER",
            _hx_index: 0,
            __enum__: "cbchoc.game.EPeriod",
            toString: s
        },
        PERIOD_1: {
            _hx_name: "PERIOD_1",
            _hx_index: 1,
            __enum__: "cbchoc.game.EPeriod",
            toString: s
        },
        PERIOD_2: {
            _hx_name: "PERIOD_2",
            _hx_index: 2,
            __enum__: "cbchoc.game.EPeriod",
            toString: s
        },
        PERIOD_3: {
            _hx_name: "PERIOD_3",
            _hx_index: 3,
            __enum__: "cbchoc.game.EPeriod",
            toString: s
        }
    };
    st.__constructs__ = [st.GAME_OVER, st.PERIOD_1, st.PERIOD_2, st.PERIOD_3];
    var it = A["cbchoc.game.EPose"] = {
        __ename__: "cbchoc.game.EPose",
        __constructs__: null,
        LOSER: {
            _hx_name: "LOSER",
            _hx_index: 0,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_1: {
            _hx_name: "RUN_1",
            _hx_index: 1,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_2: {
            _hx_name: "RUN_2",
            _hx_index: 2,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_3: {
            _hx_name: "RUN_3",
            _hx_index: 3,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_4: {
            _hx_name: "RUN_4",
            _hx_index: 4,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_5: {
            _hx_name: "RUN_5",
            _hx_index: 5,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_6: {
            _hx_name: "RUN_6",
            _hx_index: 6,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_7: {
            _hx_name: "RUN_7",
            _hx_index: 7,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_8: {
            _hx_name: "RUN_8",
            _hx_index: 8,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_9: {
            _hx_name: "RUN_9",
            _hx_index: 9,
            __enum__: "cbchoc.game.EPose",
            toString: s
        },
        RUN_10: {
            _hx_name: "RUN_10",
            _hx_index: 10,
            __enum__: "cbchoc.game.EPose",
            toString: s
        }
    };
    it.__constructs__ = [it.LOSER, it.RUN_1, it.RUN_2, it.RUN_3, it.RUN_4, it.RUN_5, it.RUN_6, it.RUN_7, it.RUN_8, it.RUN_9, it.RUN_10];
    var nt = A["cbchoc.game.EUnit"] = {
        __ename__: "cbchoc.game.EUnit",
        __constructs__: null,
        UNIT_A: {
            _hx_name: "UNIT_A",
            _hx_index: 0,
            __enum__: "cbchoc.game.EUnit",
            toString: s
        },
        UNIT_B: {
            _hx_name: "UNIT_B",
            _hx_index: 1,
            __enum__: "cbchoc.game.EUnit",
            toString: s
        }
    };
    nt.__constructs__ = [nt.UNIT_A, nt.UNIT_B];
    var at = A["cbchoc.game.EUpgrade"] = {
        __ename__: "cbchoc.game.EUpgrade",
        __constructs__: null,
        UPGRADE_MOVEMENT: {
            _hx_name: "UPGRADE_MOVEMENT",
            _hx_index: 0,
            __enum__: "cbchoc.game.EUpgrade",
            toString: s
        },
        UPGRADE_SHOOTING: {
            _hx_name: "UPGRADE_SHOOTING",
            _hx_index: 1,
            __enum__: "cbchoc.game.EUpgrade",
            toString: s
        },
        UPGRADE_DEFENSE: {
            _hx_name: "UPGRADE_DEFENSE",
            _hx_index: 2,
            __enum__: "cbchoc.game.EUpgrade",
            toString: s
        },
        UPGRADE_MAGNET: {
            _hx_name: "UPGRADE_MAGNET",
            _hx_index: 3,
            __enum__: "cbchoc.game.EUpgrade",
            toString: s
        }
    };

    function _t(e, t, s, i, n) {
        this._isShot = !1, this._levelVo = t, this._unitVo = s, this._hud = i, this._callback = n, Le.call(this, e)
    }
    at.__constructs__ = [at.UPGRADE_MOVEMENT, at.UPGRADE_SHOOTING, at.UPGRADE_DEFENSE, at.UPGRADE_MAGNET], (t["cbchoc.game.Goal"] = _t).__name__ = "cbchoc.game.Goal", _t.__super__ = Le, _t.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this.addEntity(new Pt(this._kernel, this._assets.getAsset("assets/location/Goal.png")), null, !0, 1), this.addEntity(this._goalie = new rt(this._kernel, this._levelVo), null, !0, 3);
            var e = Ys(this, this._shoot);
            this.addEntity(this._tweezer = new Bs(this._kernel, Ys(h = this._hud, h.configureTimer), this._levelVo.goalTime, 0, 0, 1e3 * this._levelVo.goalTime | 0, 0, null, null, function() {
                e(!1)
            })), this._hud.goalTransition(!1), this._biasShooting = this._unitVo.getBias(at.UPGRADE_SHOOTING, .8, 1.2), this._kernel.audio.start("CrowdScore", Ae.EFFECTS, 1, 0, 1), this._kernel.audio.start("Applause", Ae.EFFECTS, -1, 0, 1)
        },
        _updater: function(e) {
            var t;
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._isShot || (t = Math.round(12 * (1 - Math.abs(Math.sin(this._updates / (1.2 * this._levelVo.goalTime))))) / 12, e = Math.round(12 * this._levelVo.goalScoreZone / this._biasShooting) / 12, this._hud.configurePower(t, e), 20 < this._updates && (this._kernel.inputs.joypad.getIsButtonPress(ke.FIRE) || this._kernel.inputs.joypad.getIsButtonPress(ke.UP) || this._kernel.inputs.joypad.getIsButtonPress(ke.LEFT) || this._kernel.inputs.joypad.getIsButtonPress(ke.RIGHT) || this._kernel.inputs.joypad.getIsButtonPress(ke.DOWN) || this._kernel.inputs.mouse.getIsButtonDown() && this._kernel.inputs.mouse.getButtonDownDuration() < 100) && (this._shoot(e < t), this._isShot = !0))
        },
        _disposer: function() {
            this._hud.goalTransition(!0), Le.prototype._disposer.call(this)
        },
        _shoot: function(e) {
            var t;
            this._isShot || (this._isShot = !0, this._kernel.overlay.flash(500, !0, 1, e ? 65280 : 16711680), this._kernel.audio.stop("Applause", Ae.EFFECTS), this._kernel.audio.start(e ? "CrowdScore" : "CrowdMiss", Ae.EFFECTS, 1, 0, 1), e && this._kernel.audio.start("Horn", Ae.EFFECTS, 1, 0, 1), this._kernel.audio.start("Shot", Ae.EFFECTS, 1, 0, 1), (t = this._tweezer).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), this._goalie.configure(e ? tt.WIN : tt.LOSS), null != this._callback && (this._callback(e), this._callback = null))
        },
        __class__: _t
    });
    var rt = function(e, t) {
        this._isPosed = !1, this._HEIGHT = 256, this._WIDTH = 256, this._levelVo = t, Le.call(this, e)
    };

    function ot(e, t, s) {
        Fe.call(this, e), this.type = t, this.title = this._getTitle(), this.locationType = $e.LOCATION_A, this.medalType = this._session.getMedal(this.type, s), this.isLocked = this._getIsLocked(s), this.isNew = this.medalType == et.MEDAL_NONE && !this.isLocked, this.message = this._getMessage(), this.goalDistance = this._getGoalDistance(), this.goalTime = this._getGoalTime(), this.goalScoreZone = this._getGoalScoreZone(), this.opponentStrength = this._getOpponentStrength(), this.opponentSpeed = this._getOpponentSpeed(), this.opponentReleaseDistance = this._getOpponentReleaseDistance()
    }

    function ht(e, t, s) {
        this.levelVo = t, this._unitVo = s, this.vo = new lt(e, this.levelVo.locationType), Le.call(this, e)
    }(t["cbchoc.game.Goalie"] = rt).__name__ = "cbchoc.game.Goalie", rt.__super__ = Le, rt.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Goalies.png")), this._bitmap.x = .5 * (this._factory.width - this._WIDTH), this._bitmap.y = 50, this._puck = new createjs.Bitmap(this._assets.getAsset("assets/location/Puck.png")), this._puck.x = .5 * (this._factory.width - 100), this._puck.y = 310, this.configure(tt.ACTIVE), this._context.addChild(this._bitmap), this._context.addChild(this._puck)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._puck.visible = !this._isPosed, this._isPosed || (this._bitmap.x = .5 * (this._factory.width - this._WIDTH) + 10 * Math.sin(this._updates / 20), e = Math.random(), this._bitmap.y = 50 + e)
        },
        configure: function(e) {
            this._bitmap.sourceRect = this._getRectangle(this._levelVo.type, e)
        },
        _disposer: function() {
            Le.prototype._disposer.call(this)
        },
        _getRectangle: function(e, t) {
            switch (t._hx_index) {
                case 2:
                    switch (this._isPosed = !0, e._hx_index) {
                        case 0:
                            return new createjs.Rectangle(0, 2 * this._HEIGHT, this._WIDTH, this._HEIGHT);
                        case 1:
                            return new createjs.Rectangle(this._WIDTH, 2 * this._HEIGHT, this._WIDTH, this._HEIGHT);
                        case 2:
                            return new createjs.Rectangle(2 * this._WIDTH, 2 * this._HEIGHT, this._WIDTH, this._HEIGHT)
                    }
                    break;
                case 3:
                    switch (this._isPosed = !0, e._hx_index) {
                        case 0:
                            return new createjs.Rectangle(0, this._HEIGHT, this._WIDTH, this._HEIGHT);
                        case 1:
                            return new createjs.Rectangle(this._WIDTH, this._HEIGHT, this._WIDTH, this._HEIGHT);
                        case 2:
                            return new createjs.Rectangle(2 * this._WIDTH, this._HEIGHT, this._WIDTH, this._HEIGHT)
                    }
                    break;
                default:
                    switch (e._hx_index) {
                        case 0:
                            return new createjs.Rectangle(0, 0, this._WIDTH, this._HEIGHT);
                        case 1:
                            return new createjs.Rectangle(this._WIDTH, 0, this._WIDTH, this._HEIGHT);
                        case 2:
                            return new createjs.Rectangle(2 * this._WIDTH, 0, this._WIDTH, this._HEIGHT)
                    }
            }
        },
        __class__: rt
    }), g = function() {}, (t["cbchoc.game.ICollidable"] = g).__name__ = "cbchoc.game.ICollidable", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (t["cbchoc.game.LevelVo"] = ot).__name__ = "cbchoc.game.LevelVo", ot.__super__ = Fe, ot.prototype = e(Fe.prototype, {
        _getTitle: function() {
            var e;
            switch (this.type._hx_index) {
                case 0:
                    e = "gui.levels.level1";
                    break;
                case 1:
                    e = "gui.levels.level2";
                    break;
                case 2:
                    e = "gui.levels.level3"
            }
            return this._kernel.getConfig(e)
        },
        _getIsLocked: function(e) {
            switch (this.type._hx_index) {
                case 0:
                    return !1;
                case 1:
                    return this._session.getMedal(qe.LEVEL_1, e)._hx_index <= et.MEDAL_NONE._hx_index;
                case 2:
                    return this._session.getMedal(qe.LEVEL_2, e)._hx_index <= et.MEDAL_NONE._hx_index
            }
        },
        _getMessage: function() {
            var e, t = this._kernel.getConfig(this.isLocked ? "gui.scenes.selectLevel.messageLocked" : "gui.scenes.selectLevel.messageNew");
            switch (this.type._hx_index) {
                case 0:
                    e = "";
                    break;
                case 1:
                    e = "gui.levels.level1";
                    break;
                case 2:
                    e = "gui.levels.level2"
            }
            var s = this._kernel.getConfig(e);
            return l.replace(t, "__PREVIOUS_LEVEL__", s)
        },
        _getGoalDistance: function() {
            var e;
            switch (this.type._hx_index) {
                case 0:
                    e = 4;
                    break;
                case 1:
                    e = 6;
                    break;
                case 2:
                    e = 8
            }
            return 1024 * e
        },
        _getGoalTime: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 10;
                case 1:
                    return 8;
                case 2:
                    return 6
            }
        },
        _getGoalScoreZone: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .2;
                case 1:
                    return .5;
                case 2:
                    return .75
            }
        },
        _getOpponentStrength: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .1;
                case 1:
                    return .2;
                case 2:
                    return .3
            }
        },
        _getOpponentSpeed: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .9;
                case 1:
                    return .95;
                case 2:
                    return 1
            }
        },
        _getOpponentReleaseDistance: function() {
            var e;
            switch (this.type._hx_index) {
                case 0:
                    e = 1.5;
                    break;
                case 1:
                    e = 1.25;
                    break;
                case 2:
                    e = 1.125
            }
            return 256 * Math.round(e)
        },
        __class__: ot
    }), (t["cbchoc.game.Location"] = ht).__name__ = "cbchoc.game.Location", ht.__super__ = Le, ht.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._createCoinReleases(), this._createOpponentReleases(), this.addEntity(this.player = new ut(this._kernel, this._unitVo, this)), this.addEntity(this.camera = new Qe(this._kernel, -.25 * this._factory.width, -this.player.y, 600)), this.addEntity(this._renderer = new dt(this._kernel, this, this._kernel.factory.width, this._kernel.factory.height), null, !0), this._kernel.audio.start("Applause", Ae.EFFECTS, -1, 0, 0), this._kernel.audio.start("CrowdScore", Ae.EFFECTS, 1, 0, .5)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e);
            for (var t = this.player.x + this._factory.width + 200; 0 < this._coinReleases.length && t > this._coinReleases[0].x;) {
                var s = this._coinReleases.shift();
                this._createCoin(s.x, s.y)
            }
            for (; 0 < this._opponentReleases.length && t > this._opponentReleases[0].x;) {
                var i = this._opponentReleases.shift();
                this._createOpponent(i.x, i.y)
            }
            this._updates % 10 == 0 && this._kernel.audio.transform("Applause", Ae.EFFECTS, .5 + .5 * this.player.x / this.levelVo.goalDistance)
        },
        _disposer: function() {
            this._kernel.audio.stop("Applause", Ae.EFFECTS), Le.prototype._disposer.call(this)
        },
        _createCoinReleases: function() {
            this._coinReleases = [];
            var e = 0,
                e = 128;
            for (this._coinReleases.push({
                    x: e,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .625 * this.vo.floorHeight
                }), e += 32, this._coinReleases.push({
                    x: e,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .5625 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .625 * this.vo.floorHeight
                }), e += 32, this._coinReleases.push({
                    x: e,
                    y: .375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .5 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .5625 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .625 * this.vo.floorHeight
                }), e += 32, this._coinReleases.push({
                    x: e,
                    y: .4375 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .5 * this.vo.floorHeight
                }), this._coinReleases.push({
                    x: e,
                    y: .5625 * this.vo.floorHeight
                }), e += 32, this._coinReleases.push({
                    x: e,
                    y: .5 * this.vo.floorHeight
                }), e = 512; e < this.levelVo.goalDistance - 256;) e += 128, this._coinReleases.push({
                x: e + 256 * (Math.random() - .5),
                y: Math.random() * this.vo.floorHeight
            });
            this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: 0 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .1 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .2 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .3 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .4 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .5 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .6 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .7 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .8 * this.vo.floorHeight
            }), this._coinReleases.push({
                x: this.levelVo.goalDistance,
                y: .9 * this.vo.floorHeight
            })
        },
        _createOpponentReleases: function() {
            this._opponentReleases = [];
            for (var e = 512; e < this.levelVo.goalDistance;) e += this.levelVo.opponentReleaseDistance, this._opponentReleases.push({
                x: e,
                y: Math.random() * this.vo.floorHeight
            })
        },
        _createCoin: function(e, t) {
            t = new Ze(this._kernel, e, t);
            return this.addEntity(t), t
        },
        _createOpponent: function(e, t) {
            t = new ct(this._kernel, e, t, this);
            return this.addEntity(t), t
        },
        getRenderables: function() {
            return this.getEntitiesByClass(Je)
        },
        getDistanceToGoal: function() {
            return 0 | Math.max(this.levelVo.goalDistance - this.player.x, 0)
        },
        collide: function(e, t) {
            if (e == t) return null;
            if (e.isDefeated || t.isDefeated) return null;
            var s = e.x - t.x,
                i = e.y - t.y;
            if (Math.sqrt(s * s + i * i) > e.radius + t.radius) return null;
            var n = e,
                a = t,
                _ = (n.x * a.radius + a.x * n.radius) / (n.radius + a.radius),
                r = (n.y * a.radius + a.y * n.radius) / (n.radius + a.radius),
                s = (n.speed.x * (n.mass - a.mass) + 2 * a.mass * a.speed.x) / (n.mass + a.mass),
                i = (n.speed.y * (n.mass - a.mass) + 2 * a.mass * a.speed.y) / (n.mass + a.mass),
                e = (a.speed.x * (a.mass - n.mass) + 2 * n.mass * n.speed.x) / (n.mass + a.mass),
                t = (a.speed.y * (a.mass - n.mass) + 2 * n.mass * n.speed.y) / (n.mass + a.mass);
            return n.speed.x = s, n.speed.y = i, a.speed.x = e, a.speed.y = t, n.x = n.prevPosition.x, n.y = n.prevPosition.y, a.x = a.prevPosition.x, a.y = a.prevPosition.y, {
                x: _,
                y: r
            }
        },
        isCollidingWithBoards: function(e, t) {
            var s = !1;
            return e.x < -256 && (e.x = -256, e.speed.x *= -t, s = !0), e.y < 0 && (e.y = 0, e.speed.y *= -t, s = !0), 1024 < e.y && (e.y = 1024, e.speed.y *= -t, s = !0), s
        },
        __class__: ht
    });
    var lt = function(e, t) {
        Fe.call(this, e), this.type = t, this.floorWidth = 2048, this.floorHeight = 1024, this.imageBoardsBg = this._assets.getAsset("assets/location/BoardsBg.png"), this.imageBoardsFg = this._assets.getAsset("assets/location/BoardsFg.png"), this.imageCrowdBg = this._assets.getAsset("assets/location/CrowdBg.png"), this.imageCrowdFg = this._assets.getAsset("assets/location/CrowdFg.png"), this.imageGround = this._assets.getAsset("assets/location/Ground.png"), this.parallaxCrowdBg = .5, this.parallaxCrowdFg = 2
    };
    (t["cbchoc.game.LocationVo"] = lt).__name__ = "cbchoc.game.LocationVo", lt.__super__ = Fe, lt.prototype = e(Fe.prototype, {
        __class__: lt
    });
    var ct = function(e, t, s, i) {
        this._lastFlip = 0, this._isFlip = !0, this.isDefeated = !1, this.mass = 1, this.radius = 15, this.x = t, this.y = s, this._location = i, Le.call(this, e)
    };
    (t["cbchoc.game.Opponent"] = ct).__name__ = "cbchoc.game.Opponent", ct.__interfaces__ = [g, Je], ct.__super__ = Le, ct.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._source = this._assets.getAsset("assets/location/Units.png"), this.offsetY = 102, this._levelNumber = this._location.levelVo.type._hx_index + 1, this._genderNumber = this._session.cache.unitType._hx_index, this.prevPosition = {
                x: this.x,
                y: this.y
            }, this.speed = {
                x: 0,
                y: 0
            }, this._velocity = (.2 * Math.random() + .8) * this._location.levelVo.opponentSpeed, this._seed = k.random(32), this._isForward = Math.random() < (this._session.cache.currentPeriod._hx_index - 1) / 30
        },
        _disposer: function() {
            Le.prototype._disposer.call(this)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this.prevPosition.x = this.x, this.prevPosition.y = this.y, this.isDefeated ? (this.speed.x *= .975, this.speed.y *= .975) : this._aimTowards(this._location.player.isDefeated || 8e3 < this._age ? null : this._location.player), this.x += this.speed.x, this.y += this.speed.y, this.y += (Math.random() - .5) * this.speed.x * .5, this._location.isCollidingWithBoards(this, 1);
            for (var t = 0, s = this._location.getEntitiesByClass(ct); t < s.length;) {
                var i = s[t];
                ++t, this._location.collide(this, i)
            }
        },
        _aimTowards: function(e) {
            var t = this._isForward ? 1 : -1,
                s = 0;
            null != e && (t = e.x - this.x + (this._isForward ? 32 * Math.abs(this._location.player.speed.x) : 0), s = e.y - this.y), this.speed.x += (0 < t ? 1 : -1) * this._velocity, this.speed.y += (0 < s ? 1 : -1) * this._velocity, null != e ? (this.speed.x *= .9075, this.speed.y *= .9075) : (this.speed.x *= .975, this.speed.y *= .975)
        },
        getSprite: function() {
            var e, t, s, i = it.LOSER;
            switch (this.isDefeated || (i = it.RUN_4, e = [it.RUN_1, it.RUN_1, it.RUN_1, it.RUN_2, it.RUN_3, it.RUN_4, it.RUN_5, it.RUN_6, it.RUN_6, it.RUN_6, it.RUN_7, it.RUN_8, it.RUN_9, it.RUN_10], Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y) < 3 || (i = e[((this._updates + this._seed) / 2 | 0) % e.length])), i._hx_index) {
                case 2:
                case 8:
                    t = 2;
                    break;
                case 5:
                    t = 5;
                    break;
                case 0:
                case 6:
                    t = 0;
                    break;
                case 1:
                case 7:
                    t = 1;
                    break;
                case 3:
                case 9:
                    t = 3;
                    break;
                case 4:
                case 10:
                    t = 4
            }
            switch (i._hx_index) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    s = 0;
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    s = 1
            }
            return s += 2 * this._levelNumber, {
                source: this._source,
                x: 160 * t,
                y: 110 * s,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHelmet: function() {
            if (this.isDefeated) return null;
            var e = this._levelNumber;
            return {
                source: this._source,
                x: 40 * e,
                y: 880,
                width: 40,
                height: 50,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHead: function() {
            if (this.isDefeated) return null;
            var e = this._seed % 5 + 5 * this._genderNumber * 2;
            return {
                source: this._source,
                x: 40 * e,
                y: 930,
                width: 40,
                height: 50,
                isFlip: this._getIsFlip()
            }
        },
        _getIsFlip: function() {
            var e = this.speed.x < 0;
            return e != this._isFlip && this._updates - this._lastFlip > this._factory.targetFramerate && (this._lastFlip = this._updates, this._isFlip = e), this._isFlip
        },
        defeat: function() {
            this.isDefeated = !0
        },
        __class__: ct
    });
    var ut = function(e, t, s) {
        this._tackleCooldown = 0, this._shovel = -1e3, this._life = 1, this._lastFlip = 0, this._isFlip = !1, this.isDefeated = !1, this.mass = 1, this.radius = 25, this.unitVo = t, this._location = s, Le.call(this, e)
    };
    (t["cbchoc.game.Player"] = ut).__name__ = "cbchoc.game.Player", ut.__interfaces__ = [g, Je], ut.__super__ = Le, ut.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._biasMovement = this.unitVo.getBias(at.UPGRADE_MOVEMENT, .65, 1), this._biasDefense = this.unitVo.getBias(at.UPGRADE_DEFENSE, .8, 2), this._biasMagnet = this.unitVo.getBias(at.UPGRADE_MAGNET, 0, 1), this.x = -256, this.y = 512, this.prevPosition = {
                x: this.x,
                y: this.y
            }, this.speed = {
                x: 4.85 / this._biasMovement,
                y: 0
            }, this.offsetY = 102, this._genderNumber = this.unitVo.type._hx_index, this._source = this._assets.getAsset("assets/location/Units.png"), this._kernel.audio.start("Player", Ae.EFFECTS, -1, 0, 0, 0, !0)
        },
        _disposer: function() {
            Le.prototype._disposer.call(this), this._kernel.audio.stop("Player", Ae.EFFECTS)
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._tackleCooldown--, this.prevPosition.x = this.x, this.prevPosition.y = this.y, this._move(e), this._shovel += 3;
            var t = Math.max(this._shovel, -.25 * this._factory.width),
                e = -this.x - 3 * this.speed.x - this._factory.width * (this.isDefeated ? 0 : .25);
            e > -t - .5 * this._factory.width && (e = -t - .5 * this._factory.width), e < 300 - this._location.levelVo.goalDistance && (e = 300 - this._location.levelVo.goalDistance), this._location.camera.setPosition(e, -this.y), this._updates % 10 == 0 && this._kernel.audio.transform("Player", Ae.EFFECTS, this._getSpeed() / 15)
        },
        _move: function(e) {
            var t, s;
            null == e && (e = 0), this.isDefeated || (i = this.speed.x, t = this.speed.y, e = (s = this._location.camera.getWorldCoordsFromScreenCoords(this._kernel.inputs.mouse.x - .5 * this._factory.width, this._kernel.inputs.mouse.y - .5 * this._factory.height)).x - this.x, s = s.y - this.y, this._kernel.inputs.mouse.getIsButtonDown() && (Math.abs(e) < 50 && (e = 0), Math.abs(s) < 50 && (s = 0), this.speed.x += e / 200, this.speed.y += s / 200), (s = this._kernel.inputs.joypad).getIsButtonDown(ke.LEFT) && --this.speed.x, s.getIsButtonDown(ke.RIGHT) && (this.speed.x += 1), s.getIsButtonDown(ke.UP) && --this.speed.y, s.getIsButtonDown(ke.DOWN) && (this.speed.y += 1), s = i, (0 < (i = this.speed.x) ? 1 : 0 == i ? 0 : -1) == (0 < s ? 1 : 0 == s ? 0 : -1) && (0 < (i = this.speed.y) ? 1 : 0 == i ? 0 : -1) == (0 < (s = t) ? 1 : 0 == s ? 0 : -1) || this._kernel.audio.start("Carve" + (k.random(4) + 1), Ae.EFFECTS, 1, 0, .5, 0, !0));
            var i = this.speed.x;
            this.speed.x = 12 < i ? 12 : i < -5 ? -5 : i;
            i = this.speed.y;
            this.speed.y = 12 < i ? 12 : i < -15 ? -15 : i, this.x < this._shovel && (this.x = this._shovel, this.speed.x = Math.max(this.speed.x, 9)), this.x += this.speed.x * this._biasMovement, this.y += this.speed.y * this._biasMovement, this.speed.x *= .975, this.speed.y *= .975, this.y += (Math.random() - .5) * this.speed.x * .25, this._location.isCollidingWithBoards(this, .1);
            for (var n = this._location.camera.getCoords(), a = 0, _ = this._location.getEntitiesByClass(Ze); a < _.length;) {
                var r = _[a];
                ++a, r.isCollision(this.x, this.y, this._biasMagnet) && this._activateCoin(r), r.x + n.x < -800 && (r.isDisposed || (r.isDisposed = !0, r.set_isActive(!1), r._disposer()))
            }
            if (!this.isDefeated)
                for (a = 0, _ = this._location.getEntitiesByClass(ct); a < _.length;) {
                    r = _[a];
                    ++a, null != this._location.collide(this, r) && (this._activateOpponent(), Math.random() < .2 && r.defeat()), r.x + n.x < -800 && (r.isDisposed || (r.isDisposed = !0, r.set_isActive(!1), r._disposer()))
                }
        },
        _getSpeed: function() {
            return Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y)
        },
        getSprite: function() {
            var e, t, s, i = it.LOSER;
            switch (this.isDefeated || (i = it.RUN_4, e = [it.RUN_1, it.RUN_1, it.RUN_1, it.RUN_2, it.RUN_3, it.RUN_4, it.RUN_5, it.RUN_6, it.RUN_6, it.RUN_6, it.RUN_7, it.RUN_8, it.RUN_9, it.RUN_10], this._getSpeed() < 3 && -100 < this.x || (i = e[(this._updates / 2 | 0) % e.length])), i._hx_index) {
                case 2:
                case 8:
                    t = 2;
                    break;
                case 5:
                    t = 5;
                    break;
                case 0:
                case 6:
                    t = 0;
                    break;
                case 1:
                case 7:
                    t = 1;
                    break;
                case 3:
                case 9:
                    t = 3;
                    break;
                case 4:
                case 10:
                    t = 4
            }
            switch (i._hx_index) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    s = 0;
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    s = 1
            }
            return {
                source: this._source,
                x: 160 * t,
                y: 110 * s,
                width: 160,
                height: 110,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHelmet: function() {
            if (this.isDefeated) return null;
            return {
                source: this._source,
                x: 0,
                y: 880,
                width: 40,
                height: 50,
                isFlip: this._getIsFlip()
            }
        },
        getSpriteHead: function() {
            if (this.isDefeated) return null;
            var e = 5 * this._genderNumber * 2;
            return {
                source: this._source,
                x: 40 * e,
                y: 930,
                width: 40,
                height: 50,
                isFlip: this._getIsFlip()
            }
        },
        _getIsFlip: function() {
            var e = this.speed.x < 0;
            return e != this._isFlip && this._updates - this._lastFlip > this._factory.targetFramerate && (this._lastFlip = this._updates, this._isFlip = e), this._isFlip
        },
        _activateCoin: function(e) {
            this._session.setCoins(null, this._session.getCoins() + 20), e.isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())
        },
        _activateOpponent: function() {
            this._kernel.audio.start("Tackle" + (k.random(2) + 1), Ae.EFFECTS, 1, 0, 1, null, !0), 0 < this._tackleCooldown || (this._tackleCooldown = 10, this._life -= this._location.levelVo.opponentStrength / this._biasDefense, this._location.camera.setShake(2 * this._location.levelVo.opponentStrength / this._biasDefense), this._life <= 0 && (this.isDefeated = !0, this._location.camera.setShake(1)), this._kernel.overlay.flash(500, !0, .5, 16711680))
        },
        __class__: ut
    });
    var dt = function(e, t, s, i) {
        this._location = t, this._width = s, this._height = i, Le.call(this, e)
    };

    function pt(e, t) {
        this._MAX_UPGRADES = 8, Fe.call(this, e), this.type = t, this.title = this._getTitle(), this.subtitle = this._getSubtitle()
    }(t["cbchoc.game.Renderer"] = dt).__name__ = "cbchoc.game.Renderer", dt.__super__ = Le, dt.prototype = e(Le.prototype, {
        _init: function() {
            Le.prototype._init.call(this), this._context.cache(0, 0, this._width, this._height), this._canvas = this._context.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._patternGround = this._context2d.createPattern(this._location.vo.imageGround, "repeat"), this._patternBoardsBg = this._context2d.createPattern(this._location.vo.imageBoardsBg, "repeat"), this._patternBoardsFg = this._context2d.createPattern(this._location.vo.imageBoardsFg, "repeat"), this._patternCrowdBg = this._context2d.createPattern(this._location.vo.imageCrowdBg, "repeat"), this._patternCrowdFg = this._context2d.createPattern(this._location.vo.imageCrowdFg, "repeat")
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e);
            var t = this._location.camera.getCoords(!0),
                e = t.x + .5 * this._width,
                t = t.y + .5 * this._height;
            this._context2d.clearRect(0, 0, this._width, this._height), e -= 2048, this._drawCrowdBg(e, t), this._drawGround(e, t), this._drawBoardsBg(e, t), this._drawRenderables(2048 + e, t), this._drawBoardsFg(e, t), this._drawCrowdFg(e, t)
        },
        _drawRenderables: function(e, t) {
            var s = this._location.getRenderables();
            s.sort(Ys(this, this._sortRenderable));
            for (var i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                var a = n.getSprite(),
                    _ = n.getSpriteHelmet(),
                    r = n.getSpriteHead(),
                    o = this._location.camera.getRenderableCoordsFromWorldCoords(n.x, n.y),
                    h = o.x + e,
                    o = o.y + t;
                this._context2d.save(), a.isFlip && (this._context2d.translate(h, 0), this._context2d.scale(a.isFlip ? -1 : 1, 1), this._context2d.translate(-h, 0)), this._context2d.save(), this._context2d.translate(h, o), this._context2d.scale(1, -1), this._context2d.translate(-h, 4 - o), this._context2d.globalAlpha = .25, this._context2d.drawImage(a.source, a.x, a.y, a.width, a.height, h - .5 * a.width, o - n.offsetY, a.width, a.height), null != _ && this._context2d.drawImage(_.source, _.x + 160, _.y, _.width, _.height, h, o - n.offsetY, _.width, _.height), this._context2d.restore(), this._context2d.drawImage(a.source, a.x, a.y, a.width, a.height, h - .5 * a.width, o - n.offsetY, a.width, a.height), null != r && this._context2d.drawImage(r.source, r.x, r.y, r.width, r.height, h, o - n.offsetY, r.width, r.height), null != _ && this._context2d.drawImage(_.source, _.x, _.y, _.width, _.height, h, o - n.offsetY, _.width, _.height), this._context2d.restore()
            }
        },
        _sortRenderable: function(e, t) {
            return e.y - t.y | 0
        },
        _drawCrowdBg: function(e, t) {
            t += -480, e *= .9, this._context2d.fillStyle = this._patternCrowdBg, this._context2d.save(), this._context2d.translate(e, t), this._context2d.fillRect(-e, 0, this._width, this._location.vo.imageCrowdBg.height), this._context2d.restore()
        },
        _drawCrowdFg: function(e, t) {
            t += 464, e *= 1.25, this._context2d.fillStyle = this._patternCrowdFg, this._context2d.save(), this._context2d.translate(e, t), this._context2d.fillRect(-e, 1, this._width, this._location.vo.imageCrowdFg.height), this._context2d.restore()
        },
        _drawGround: function(e, t) {
            e -= 105, this._context2d.fillStyle = this._patternGround, this._context2d.save(), this._context2d.translate(e, t), this._context2d.fillRect(-e, 0, this._width, this._location.vo.imageGround.height), this._context2d.restore()
        },
        _drawBoardsBg: function(e, t) {
            t += -160, this._context2d.fillStyle = this._patternBoardsBg, this._context2d.save(), this._context2d.translate(e, t), this._context2d.fillRect(-e, 0, this._width, this._location.vo.imageBoardsBg.height), this._context2d.restore()
        },
        _drawBoardsFg: function(e, t) {
            t += 400, this._context2d.fillStyle = this._patternBoardsFg, this._context2d.save(), this._context2d.translate(e, t), this._context2d.fillRect(-e, 0, this._width, this._location.vo.imageBoardsFg.height), this._context2d.restore()
        },
        __class__: dt
    }), (t["cbchoc.game.UnitVo"] = pt).__name__ = "cbchoc.game.UnitVo", pt.__super__ = Fe, pt.prototype = e(Fe.prototype, {
        _getTitle: function() {
            var e;
            switch (this.type._hx_index) {
                case 0:
                    e = "gui.units.unitA.title";
                    break;
                case 1:
                    e = "gui.units.unitB.title"
            }
            return this._kernel.getConfig(e)
        },
        _getSubtitle: function() {
            var e;
            switch (this.type._hx_index) {
                case 0:
                    e = "gui.units.unitA.subtitle";
                    break;
                case 1:
                    e = "gui.units.unitB.subtitle"
            }
            return this._kernel.getConfig(e)
        },
        getDefault: function(e) {
            switch (this.type._hx_index) {
                case 0:
                    switch (e._hx_index) {
                        case 0:
                            return 2;
                        case 1:
                            return 5;
                        case 2:
                            return 4;
                        case 3:
                            return 3
                    }
                    break;
                case 1:
                    switch (e._hx_index) {
                        case 0:
                            return 5;
                        case 1:
                            return 3;
                        case 2:
                            return 2;
                        case 3:
                            return 4
                    }
            }
        },
        getUpgrade: function(e) {
            switch (e._hx_index) {
                case 0:
                    return this._session.getUpgrade(at.UPGRADE_MOVEMENT, this.type);
                case 1:
                    return this._session.getUpgrade(at.UPGRADE_SHOOTING, this.type);
                case 2:
                    return this._session.getUpgrade(at.UPGRADE_DEFENSE, this.type);
                case 3:
                    return this._session.getUpgrade(at.UPGRADE_MAGNET, this.type)
            }
        },
        getTotal: function(e) {
            var t, s = this._MAX_UPGRADES;
            switch (e._hx_index) {
                case 0:
                    t = this.getDefault(at.UPGRADE_MOVEMENT) + this.getUpgrade(at.UPGRADE_MOVEMENT);
                    break;
                case 1:
                    t = this.getDefault(at.UPGRADE_SHOOTING) + this.getUpgrade(at.UPGRADE_SHOOTING);
                    break;
                case 2:
                    t = this.getDefault(at.UPGRADE_DEFENSE) + this.getUpgrade(at.UPGRADE_DEFENSE);
                    break;
                case 3:
                    t = this.getDefault(at.UPGRADE_MAGNET) + this.getUpgrade(at.UPGRADE_MAGNET)
            }
            return 0 | Math.min(s, t)
        },
        getAvailable: function(e) {
            switch (e._hx_index) {
                case 0:
                    return this._MAX_UPGRADES - this.getTotal(at.UPGRADE_MOVEMENT);
                case 1:
                    return this._MAX_UPGRADES - this.getTotal(at.UPGRADE_SHOOTING);
                case 2:
                    return this._MAX_UPGRADES - this.getTotal(at.UPGRADE_DEFENSE);
                case 3:
                    return this._MAX_UPGRADES - this.getTotal(at.UPGRADE_MAGNET)
            }
        },
        getBias: function(e, t, s) {
            e = this.getTotal(e);
            e < 0 && (e = 0), e > this._MAX_UPGRADES && (e = this._MAX_UPGRADES);
            s -= t;
            return t + Math.pow(e / this._MAX_UPGRADES, this._factory.accessibility.getAdjustedGameplayChallenge()) * s
        },
        getPercentageComplete: function() {
            return (this.getTotal(at.UPGRADE_MOVEMENT) + this.getTotal(at.UPGRADE_SHOOTING) + this.getTotal(at.UPGRADE_DEFENSE) + this.getTotal(at.UPGRADE_MAGNET)) / (4 * this._MAX_UPGRADES)
        },
        __class__: pt
    });
    var gt = function(e, t, s, i, n, a, _, r, o, h, l) {
        x.call(this, e, t, s, i, n, a, _, r, o, h, l)
    };

    function ft(e, t, s, i) {
        null == i && (i = !1), null == s && (s = 100), null == t && (t = 100), this._assets = ks.__cast(e.assets, He), this._factory = ks.__cast(e.factory, je), this._session = ks.__cast(e.get_session(), Ye), this._system = e.system, ve.call(this, e, t, s, i)
    }

    function yt(e) {
        ft.call(this, e, 720, 405, !1)
    }

    function mt(e, t) {
        this._sceneType = t, ft.call(this, e, e.factory.width, e.factory.height, !1)
    }

    function wt(e, t, s, i, n, a, _, r, o) {
        null == n && (n = 0), null == i && (i = 0);
        var h = new Ee(e),
            l = new Ee(e);
        x.call(this, e, h, l, t, s, i, n, a, _, r, o)
    }

    function xt(e, t, s, i) {
        null == t && (t = 1), this._scale = t, ft.call(this, e, 192, 192, !1), this.setPosition(0 | s, 0 | i)
    }

    function Et(e, t, s, i, n, a, _, r) {
        null == i && (i = 0), null == s && (s = 0), null == t && (t = ""), this._assets = e.assets, this._factory = e.factory, this._title = t.toUpperCase(), this._buttonType = "TEXT", gt.call(this, e, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, Math.round(s), Math.round(i), n, a, _, r)
    }

    function vt(e, t, s, i, n, a, _) {
        null == s && (s = 0), null == t && (t = 0), this._assets = e.assets, this._factory = e.factory, this._buttonType = "SETTINGS", gt.call(this, e, this._assets.overlayPauseUp, this._assets.overlayPauseOver, 50, 50, t, s, i, n, a, _)
    }

    function bt(e, t, s, i, n, a, _, r) {
        null == i && (i = 0), null == s && (s = 0), null == t && (t = ""), this._assets = e.assets, this._factory = e.factory, this._buttonType = "SMALL", gt.call(this, e, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, s, i, n, a, _, r), this.setTitle(t)
    }

    function St(e, t) {
        null == t && (t = !0), this._isAnimated = t, ft.call(this, e, 120, 32, !1)
    }

    function Tt(e, t, s) {
        this._MEDAL_WIDTH = 100, this._unitType = t, this._medalType = s, ft.call(this, e, 720, 405, !1)
    }

    function At(e, t) {
        this._isCoinsVisible = t, this._isCoinsVisible = !0, ft.call(this, e, e.factory.width, e.factory.height, !1)
    }(t["cbchoc.gui.AButton"] = gt).__name__ = "cbchoc.gui.AButton", gt.__super__ = x, gt.prototype = e(x.prototype, {
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
        _updater: function(e) {
            null == e && (e = 0), x.prototype._updater.call(this, e), this._highlightBitmap.alpha = Math.sin(this._age / 200) / 8 + .5
        },
        highlight: function(e) {
            null == e && (e = !0), e ? this.onRollOver() : this.onRollOut(), this.isHighlighted = e, this._highlightView.set_isVisible(e)
        },
        _createHighlightView: function() {
            var e, t = new createjs.Container,
                s = new createjs.Bitmap(this._kernel.assets.getAsset("assets/gui/Buttons.png"));
            switch (this._buttonType) {
                case "ARROW_DOWN":
                    e = new createjs.Rectangle(400, 190, 86, 50);
                    break;
                case "ARROW_UP":
                    e = new createjs.Rectangle(305, 190, 86, 50);
                    break;
                case "ICON":
                    e = new createjs.Rectangle(220, 130, 85, 85);
                    break;
                case "SETTINGS":
                    e = new createjs.Rectangle(420, 120, 70, 70);
                    break;
                case "SMALL":
                    e = new createjs.Rectangle(305, 130, 120, 50);
                    break;
                case "TEXT":
                    e = new createjs.Rectangle(0, 130, 220, 85);
                    break;
                default:
                    e = new createjs.Rectangle(0, 0, 1, 1)
            }
            s.sourceRect = e, s.cache(0, 0, s.sourceRect.width, s.sourceRect.height), s.x = s.y = -10, t.addChild(s), this._highlightBitmap = s, this._highlightView = new Ee(this._kernel, t), this._highlightView.set_isVisible(!1), this.get_view().addChild(this._highlightView, 100)
        },
        __class__: gt
    }), (t["cbchoc.gui.AGuiEntity"] = ft).__name__ = "cbchoc.gui.AGuiEntity", ft.__super__ = ve, ft.prototype = e(ve.prototype, {
        __class__: ft
    }), (t["cbchoc.gui.Action"] = yt).__name__ = "cbchoc.gui.Action", yt.__super__ = ft, yt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._context.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Action.png")))
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._bitmap.x = 30 * Math.sin(this._updates / 50)
        },
        __class__: yt
    }), (t["cbchoc.gui.Bg"] = mt).__name__ = "cbchoc.gui.Bg", mt.__super__ = ft, mt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._texture = this._assets.getAsset("assets/gui/BgDetail.jpg"), this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getAbstract())), this._bitmap.cache(0, 0, this.width, this.height), this._context.addChild(this._bitmap), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getAbstract()))), this._context.addChild(new createjs.Bitmap(this._assets.getAsset(this._getGradient()))), this._canvas = this._bitmap.cacheCanvas, this._context2d = this._canvas.getContext("2d", null), this._pattern = this._context2d.createPattern(this._texture, "repeat"), this._context2d.fillStyle = this._pattern
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._draw()
        },
        _draw: function() {
            var e = -2 * this._kernel._updates % this._texture.width,
                t = 10 * Math.sin(this._kernel._updates / 30) - 10;
            this._context2d.translate(e, t), this._context2d.fillRect(-e, -t, this.width, this.height), this._context2d.translate(-e, -t)
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
        __class__: mt
    }), (t["cbchoc.gui.BlankButton"] = wt).__name__ = "cbchoc.gui.BlankButton", wt.__super__ = x, wt.prototype = e(x.prototype, {
        _updater: function(e) {
            null == e && (e = 0);
            var t = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = t.x, this.get_view().globalY = t.y, x.prototype._updater.call(this, e)
        },
        __class__: wt
    }), (t["cbchoc.gui.Burst"] = xt).__name__ = "cbchoc.gui.Burst", xt.__super__ = ft, xt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this);
            var e = this._scale,
                t = Math.random() < .5 ? -1 : 1;
            this._context.scaleX = e * t;
            e = this._scale, t = Math.random() < .5 ? -1 : 1;
            this._context.scaleY = e * t, this._context.compositeOperation = "lighter", this._context.mouseEnabled = !1, this._context.mouseChildren = !1, this._sprite = new createjs.Sprite(this._createSpriteSheet(), 0), this._context.addChild(this._sprite), this._drop = 0, this._context.alpha *= this._factory.accessibility.getAdjustedVisualsIntensity()
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._sprite.gotoAndStop(this._updates - 1), 16 <= this._updates && (this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer())), this._drop += Math.random(), this._context.y += this._drop
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
        __class__: xt
    }), (t["cbchoc.gui.Button"] = Et).__name__ = "cbchoc.gui.Button", Et.__super__ = gt, Et.prototype = e(gt.prototype, {
        _init: function() {
            gt.prototype._init.call(this);
            var e = 19;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (e -= 2);
            var t = this.width - 10,
                s = this.height - e,
                i = this._kernel.factory.createTextStyle(Oe.BUTTON);
            this._textUp = new Vt(this._kernel, t, s, this._title, i), this._textOver = new Vt(this._kernel, t, s, this._title, i), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(e)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        setTitle: function(e) {
            this._title != e && (this._title = e.toUpperCase(), this._textUp.set_text(this._textOver.set_text(this._title)))
        },
        onRollOver: function() {
            gt.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Ae.INTERFACE, 0, 0, .25)
        },
        __class__: Et
    }), (t["cbchoc.gui.ButtonSettings"] = vt).__name__ = "cbchoc.gui.ButtonSettings", vt.__super__ = gt, vt.prototype = e(gt.prototype, {
        __class__: vt
    }), (t["cbchoc.gui.ButtonSmall"] = bt).__name__ = "cbchoc.gui.ButtonSmall", bt.__super__ = gt, bt.prototype = e(gt.prototype, {
        _init: function() {
            gt.prototype._init.call(this);
            var e = 5;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (e -= 2);
            var t = this.width - 10,
                s = this.height - e,
                i = this._kernel.factory.createTextStyle(Oe.BUTTON);
            i.size = 12, this._textUp = new Vt(this._kernel, t, s, this._title, i), (i = this._kernel.factory.createTextStyle(Oe.BUTTON)).size = 12, this._textOver = new Vt(this._kernel, t, s, this._title, i), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(e)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        _updater: function(e) {
            null == e && (e = 0);
            var t = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = t.x, this.get_view().globalY = t.y, gt.prototype._updater.call(this, e)
        },
        setTitle: function(e) {
            this._title = e, this._title = this._title.toUpperCase(), this._textUp.set_text(this._title), this._textOver.set_text(this._title)
        },
        onRollOver: function() {
            gt.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Ae.INTERFACE, 0, 0, .25)
        },
        onClick: function() {
            gt.prototype.onClick.call(this), this.isOver = !1
        },
        __class__: bt
    }), (t["cbchoc.gui.Coins"] = St).__name__ = "cbchoc.gui.Coins", St.__super__ = ft, St.prototype = e(ft.prototype, {
        _init: function() {
            var e = this;
            ft.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.getCoins(), this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 0, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Coin.png")), this._bitmap.sourceRect = new createjs.Rectangle(320, 0, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._bitmap.y = 3, this._context.addChild(this._bitmap);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Vt(this._kernel, this._bitmap.x - 5, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.coins")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new Vt(this._kernel, this._bitmap.x - 5, 35, k.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._message.setPosition(.85 * this._message.width - 1, .5 * this._message.height + 5), this._message._context.regX = .85 * this._message.width, this._message._context.regY = .5 * this._message.height, this._session.get_isTester() && this.addEntity(new wt(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
                e._session.setCoins(null, e._session.getCoins() + 100)
            }), null, !0, 10), this.addEntity(this._message, null, !0, 1)
        },
        _updater: function(e) {
            null == e && (e = 0);
            var t, s = this;
            ft.prototype._updater.call(this, e), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), this._age < 3e3 || (this._prevCoins != this._session.getCoins() && (this._kernel.audio.start("Coin", Ae.INTERFACE, 0, 0, .65, null, !1), null != this._tweezer && ((t = this._tweezer).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer())), this.addEntity(this._tweezer = new Bs(this._kernel, function(e) {
                s._message._context.scaleX = s._message._context.scaleY = e
            }, 1.75, 1, 0, 1e3, null, Ds.EASE_OUT, Ps.QUARTIC))), this._prevCoins = this._session.getCoins(), this._displayValue != this._session.getCoins() && (t = this._tools, this._displayValue = Math.round(.9 * this._displayValue + .1 * this._session.getCoins()), Math.abs(this._displayValue - this._session.getCoins()) < 5 && (this._displayValue = this._session.getCoins()), this._message.set_text(k.string(this._displayValue))))
        },
        __class__: St
    }), (t["cbchoc.gui.Hero"] = Tt).__name__ = "cbchoc.gui.Hero", Tt.__super__ = ft, Tt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._container = new createjs.Container, this._context.addChild(this._container), this._container.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getImage()))), this._medalBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HeroMedals.png"));
            var e = this._getMedalCol() * this._MEDAL_WIDTH;
            this._medalBitmap.sourceRect = new createjs.Rectangle(e, 0, this._MEDAL_WIDTH, this.height), this._medalBitmap.x = .5 * (this.width - this._MEDAL_WIDTH), this._medalType != et.MEDAL_NONE && this._container.addChild(this._medalBitmap)
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._container.x = 10 * Math.sin(this._updates / 50)
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
        __class__: Tt
    }), (t["cbchoc.gui.Hud"] = At).__name__ = "cbchoc.gui.Hud", At.__super__ = ft, At.prototype = e(ft.prototype, {
        _init: function() {
            var t = this;
            ft.prototype._init.call(this);
            var e = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
            e.sourceRect = new createjs.Rectangle(0, 0, this.width, 80), this._context.addChild(e), this._coins = new St(this._kernel, !1), this.addEntity(this._coins, null, this._isCoinsVisible, 10), this._coins.setPosition(52, 12), this._periods = new It(this._kernel), this.addEntity(this._periods, null, !0, 10), this._periods.setPosition((this.width - this._periods.width) / 2, 12), this._distance = new kt(this._kernel), this.addEntity(this._distance, null, !0, 10), this._distance.setPosition(411, 12), this._timer = new Dt(this._kernel), this.addEntity(this._timer, null, !0, 10), this._timer.setPosition(411, 12), this._timer.get_view().set_isVisible(!1), this._alert = new Ct(this._kernel), this.addEntity(this._alert, null, !0, 20), this._alert.setPosition((this.width - this._alert.width) / 2, (this.height - this._alert.height) / 2), this._power = new Ut(this._kernel), this.addEntity(this._power, null, !0, 20), this._power.get_view().set_isVisible(!1), this.addEntity(new Bs(this._kernel, function(e) {
                t._periods.set_y(e)
            }, -100, this._periods.y, 1e3, 1e3, 0, Ds.EASE_OUT, Ps.QUARTIC)), this.addEntity(new Bs(this._kernel, function(e) {
                t._distance.set_y(e)
            }, -100, this._distance.y, 2e3, 1e3, 0, Ds.EASE_OUT, Ps.QUARTIC)), this.addEntity(new Bs(this._kernel, function(e) {
                t._coins.set_y(e)
            }, -100, this._coins.y, 3e3, 1e3, 0, Ds.EASE_OUT, Ps.QUARTIC))
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e)
        },
        configureDistance: function(e) {
            this._distance.configure(e)
        },
        configureTimer: function(e) {
            this._timer.configure(e)
        },
        configurePeriods: function(e, t, s, i, n) {
            this._periods.configure(e, t, s, i, n)
        },
        configureAlert: function(e) {
            this._alert.configure(e)
        },
        configurePower: function(e, t) {
            this._power.configure(e, t)
        },
        goalTransition: function(e) {
            this._distance.get_view().set_isVisible(e), this._timer.get_view().set_isVisible(!e), this._power.get_view().set_isVisible(!e)
        },
        __class__: At
    });
    var Ct = function(e) {
        ft.call(this, e, 500, 90, !1)
    };
    (t["cbchoc.gui.HudAlert"] = Ct).__name__ = "cbchoc.gui.HudAlert", Ct.__super__ = ft, Ct.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_ALERT);
            this._title = new Vt(this._kernel, this.width, 20, "", e), this.addEntity(this._title, null, !0, 10)
        },
        configure: function(e) {
            var t, s, i, n = this;
            "___" != e && (this._value = e, this._title.set_text(e.toUpperCase()), this._context.alpha = 1, this._context.uncache(), t = Ys(h = this._context, h.cache), s = this.width, i = this.height, as.delay(function() {
                t(0, 0, s, i)
            }, 100), null != this._tweezer && ((e = this._tweezer).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())), this.addEntity(this._tweezer = new Bs(this._kernel, function(e) {
                n._context.alpha = e
            }, 1, 0, 1e3, 500, 0, Ds.EASE_OUT, Ps.QUARTIC)))
        },
        __class__: Ct
    });
    var kt = function(e) {
        ft.call(this, e, 220, 60, !1)
    };
    (t["cbchoc.gui.HudDistance"] = kt).__name__ = "cbchoc.gui.HudDistance", kt.__super__ = ft, kt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Vt(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.distance")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var t = 120, s = 0, i = this._convertDistanceToFormattedDistance(0).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var a = this._createDigit(n, t, 5);
                this._digits.push(a), this.addEntity(a, null, !0, 10), t += "." == n ? 8 : 14
            }
        },
        configure: function(e) {
            if (this._value != e) {
                this._value = e;
                for (var t = 0, s = 0, i = this._convertDistanceToFormattedDistance(this._value).split(""); s < i.length;) {
                    var n = i[s];
                    ++s, this._digits[t].set_text(n), ++t
                }
            }
        },
        _convertDistanceToFormattedDistance: function(e) {
            var t = e / 64;
            9999 < t && (t = 9999);
            for (var e = Math.floor(t), t = t - e, s = null == e ? "null" : "" + e, i = I.substr((null == t ? "null" : "" + t).split(".").pop(), 0, 1); s.length < 4;) s = " " + s;
            for (; i.length < 1;) i += "0";
            return s + "." + i + "M"
        },
        _createDigit: function(e, t, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_DISTANCE),
                i = new Vt(this._kernel, 20, 24, e, i);
            return i.setPosition(t, s), i
        },
        __class__: kt
    });
    var It = function(e) {
        ft.call(this, e, 246, 60, !1)
    };
    (t["cbchoc.gui.HudPeriods"] = It).__name__ = "cbchoc.gui.HudPeriods", It.__super__ = ft, It.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._flag1 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._flag1.sourceRect = this._getFlagRectangle(null), this._flag1.x = 0, this._flag1.y = -1, this._context.addChild(this._flag1), this._flag2 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._flag2.sourceRect = this._getFlagRectangle(this._session.cache.levelType), this._flag2.x = this.width - 76, this._flag2.y = -1, this._context.addChild(this._flag2), this._outlines = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._outlines.sourceRect = new createjs.Rectangle(720, 48, 90, 32), this._outlines.x = (this.width - 90) / 2, this._outlines.y = 14, this._context.addChild(this._outlines), this._active = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._active.sourceRect = new createjs.Rectangle(930, 48, 30, 30), this._active.x = this._outlines.x, this._active.y = this._outlines.y, this._active.alpha = .15, this._context.addChild(this._active), this._period1 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period1.sourceRect = new createjs.Rectangle(810, 48, 1, 1), this._period1.x = this._outlines.x, this._period1.y = this._outlines.y, this._context.addChild(this._period1), this._period2 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period2.sourceRect = new createjs.Rectangle(810, 48, 1, 1), this._period2.x = this._outlines.x + 30, this._period2.y = this._outlines.y, this._context.addChild(this._period2), this._period3 = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png")), this._period3.sourceRect = new createjs.Rectangle(810, 48, 30, 32), this._period3.x = this._outlines.x + 60, this._period3.y = this._outlines.y, this._context.addChild(this._period3);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            e.align = Ne.CENTER, this._title = new Vt(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.periods")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10)
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._active.sourceRect = new createjs.Rectangle(930 + (this._updates / 2 | 0) % 3 * 30, 48, 30, 32)
        },
        configure: function(e, t, s, i, n) {
            null == t && (t = this._session.cache.currentPeriod), null == s && (s = this._session.cache.getOutcome(st.PERIOD_1)), null == i && (i = this._session.cache.getOutcome(st.PERIOD_2)), null == n && (n = this._session.cache.getOutcome(st.PERIOD_3)), this._active.visible = e, this._active.x = this._outlines.x - 1 + 30 * (t._hx_index - 1), this._period1Outcome == s && this._period2Outcome == i && this._period3Outcome == n || (this._period1Outcome = s, this._period2Outcome = i, this._period3Outcome = n, this._period1.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period1Outcome), this._period2.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period2Outcome), this._period3.sourceRect = this._getOutcomeRectangle(this._session.cache.levelType, this._period3Outcome))
        },
        _getFlagRectangle: function(e) {
            if (null == e) return new createjs.Rectangle(720, 0, 76, 48);
            switch (e._hx_index) {
                case 0:
                    return new createjs.Rectangle(796, 0, 76, 48);
                case 1:
                    return new createjs.Rectangle(872, 0, 76, 48);
                case 2:
                    return new createjs.Rectangle(948, 0, 76, 48)
            }
        },
        _getOutcomeRectangle: function(e, t) {
            switch (t._hx_index) {
                case 2:
                    switch (e._hx_index) {
                        case 0:
                        case 1:
                        case 2:
                            return new createjs.Rectangle(810, 48, 30, 32)
                    }
                    break;
                case 3:
                    switch (e._hx_index) {
                        case 0:
                            return new createjs.Rectangle(840, 48, 30, 32);
                        case 1:
                            return new createjs.Rectangle(870, 48, 30, 32);
                        case 2:
                            return new createjs.Rectangle(900, 48, 30, 32)
                    }
                    break;
                default:
                    return new createjs.Rectangle(810, 48, 1, 1)
            }
        },
        __class__: It
    });
    var Ut = function(e) {
        this._BARS_TOTAL = 12, this._BAR_HEIGHT = 24, this._BAR_WIDTH = 8, this._BARS_HEIGHT = 24, this._BARS_WIDTH = 204, ft.call(this, e, e.factory.width, 50, !1)
    };
    (t["cbchoc.gui.HudPower"] = Ut).__name__ = "cbchoc.gui.HudPower", Ut.__super__ = ft, Ut.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this.set_y(this._factory.height - this.height), this._value = this._scoreZone = 1, this._source = this._assets.getAsset("assets/gui/Hud.png");
            var e = new createjs.Bitmap(this._source);
            e.sourceRect = new createjs.Rectangle(0, 80, this.width, 50), this._context.addChild(e), this._under = new createjs.Bitmap(this._source), this._under.sourceRect = new createjs.Rectangle(720, 80 + this._BARS_HEIGHT, this._BARS_WIDTH, this._BARS_HEIGHT), this._under.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._under), this._bars = new createjs.Bitmap(this._source), this._bars.sourceRect = new createjs.Rectangle(720, 80, this._BARS_WIDTH, this._BARS_HEIGHT), this._bars.cache(0, 0, this._BARS_WIDTH, this._BARS_HEIGHT), this._context2d = ks.__cast(this._bars.cacheCanvas, HTMLCanvasElement).getContext("2d", null), this._bars.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._bars), this._outlines = new createjs.Bitmap(this._source), this._outlines.sourceRect = new createjs.Rectangle(720, 80, this._BARS_WIDTH, this._BARS_HEIGHT), this._outlines.x = (this.width - this._BARS_WIDTH) / 2, this._context.addChild(this._outlines);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            e.align = Ne.CENTER, this._title = new Vt(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.power")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 22), this.addEntity(this._title, null, !0, 10)
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._value < .1 && (this._value = 0), this._draw()
        },
        configure: function(e, t) {
            this._value = e, this._scoreZone = t
        },
        _draw: function() {
            if (this._context2d.clearRect(0, 0, this._BARS_WIDTH, this._BARS_HEIGHT), 0 != this._value)
                for (var e = 6, t = Math.round(this._BARS_TOTAL * this._value), s = this._BARS_WIDTH / 2 + 2, i = 0, n = t; i < n;) {
                    var a = i++,
                        a = this._getBarRectangle(a / this._BARS_TOTAL >= this._scoreZone);
                    this._context2d.drawImage(this._source, a.x, a.y, a.width, a.height, s + e - this._BAR_WIDTH, 0, this._BAR_WIDTH, this._BAR_HEIGHT), this._context2d.drawImage(this._source, a.x, a.y, a.width, a.height, this._BARS_WIDTH - e - s, 0, this._BAR_WIDTH, this._BAR_HEIGHT), e += this._BAR_WIDTH
                }
        },
        _getBarRectangle: function(e) {
            return new createjs.Rectangle(this.width + this._BARS_WIDTH + (e ? this._BAR_WIDTH : 0), 80, this._BAR_WIDTH, this._BAR_HEIGHT)
        },
        __class__: Ut
    });
    var Dt = function(e) {
        ft.call(this, e, 220, 60, !1)
    };
    (t["cbchoc.gui.HudTimer"] = Dt).__name__ = "cbchoc.gui.HudTimer", Dt.__super__ = ft, Dt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new Vt(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.timer")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var t = 155, s = 0, i = this._convertAgeToFormattedTime(0).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var a = this._createDigit(n, t, 5);
                this._digits.push(a), this.addEntity(a, null, !0, 10), t += "." == n ? 8 : 14
            }
        },
        configure: function(e) {
            if (this._value != e) {
                this._value = e;
                for (var t = 0, s = 0, i = this._convertAgeToFormattedTime(this._value).split(""); s < i.length;) {
                    var n = i[s];
                    ++s, this._digits[t].set_text(n), ++t
                }
            }
        },
        _convertAgeToFormattedTime: function(e) {
            var t = e;
            9.9 < t && (t = 9.9);
            for (var e = Math.floor(t), t = t - e, s = null == e ? "null" : "" + e, i = I.substr((null == t ? "null" : "" + t).split(".").pop(), 0, 1); s.length < 2;) s = " " + s;
            for (; i.length < 1;) i += "0";
            return s + "." + i + "S"
        },
        _createDigit: function(e, t, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_DISTANCE),
                i = new Vt(this._kernel, 20, 24, e, i);
            return i.setPosition(t, s), i
        },
        __class__: Dt
    });
    var Pt = function(e, t, s, i) {
        null == i && (i = 1), null == s && (s = !1), this._imageElement = t, this._isAdd = s, ft.call(this, e, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(i)
    };
    (t["cbchoc.gui.Image"] = Pt).__name__ = "cbchoc.gui.Image", Pt.__super__ = ft, Pt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        set_alpha: function(e) {
            return this._bitmap.alpha = e
        },
        __class__: Pt
    });
    var Rt = function(e) {
        this._assetManager = ks.__cast(e.assets, He), this._factory = ks.__cast(e.factory, je), this._buttonSize = 50, ge.call(this, e, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
    };

    function Bt(e, t) {
        this._isSmall = t, ft.call(this, e, this._isSmall ? 230 : 380, this._isSmall ? 190 : 240, !1)
    }

    function Mt(e, t) {
        this._type = t, Bt.call(this, e, !0)
    }

    function Nt(e, t) {
        this._medalType = t, this._delayInitial = 1500, this._delayMedal = 750, Bt.call(this, e, !0)
    }

    function Ot(e, t) {
        this._type = t, Bt.call(this, e, !1)
    }

    function Lt(e, t) {
        this._statHeight = 12, this._statWidth = 8, this._type = t, Bt.call(this, e, !0)
    }(t["cbchoc.gui.Overlay"] = Rt).__name__ = "cbchoc.gui.Overlay", Rt.__super__ = ge, Rt.prototype = e(ge.prototype, {
        _init: function() {
            ge.prototype._init.call(this), this._buttonPause.remove(!0), this._buttonPause = new vt(this._kernel, null, null, null, this._buttonPause.onClickCallback, this._buttonPause.onRollOverCallback, this._buttonPause.onRollOutCallback), this.addEntity(this._buttonPause, null, !0, 25);
            var e = this._kernel.factory.width - this._buttonSize - 5;
            this.positionButton(Be.PAUSE, e, 4), this.positionButton(Be.UNPAUSE, -this._buttonSize - 10, 4), this.positionButton(Be.BACK, -this._buttonSize - 10, 4), this.positionButton(Be.MUTE, -this._buttonSize - 10, 4), this.positionButton(Be.UNMUTE, -this._buttonSize - 10, 4), this._flashView.set_isVisible(!0), this._pauseMenu = new Ft(this._kernel), this.set_pauseEntity(this._pauseMenu)
        },
        flash: function(e, t, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == t && (t = !0), s *= this._factory.accessibility.getAdjustedVisualsIntensity(), this._flashContext.compositeOperation = 0 == i ? "source-over" : "lighter", ge.prototype.flash.call(this, e, t, s, i)
        },
        _drawPause: function(e) {
            null == e && (e = !0), ge.prototype._drawPause.call(this, e), this._pauseMenu.pauseHandler(e)
        },
        __class__: Rt
    }), (t["cbchoc.gui.Panel"] = Bt).__name__ = "cbchoc.gui.Panel", Bt.__super__ = ft, Bt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this.set_y(Math.round(.5 * (this._factory.height - this.height))), this.addEntity(new m(this._kernel, null, this._bgContext = new createjs.Container), null, !0, 1), this._bgContext.alpha = .5, this.addEntity(new Pt(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallBg.png" : "assets/gui/PanelBigBg.png")), null, !0, 2), this.addEntity(new m(this._kernel, null, this._fgContext = new createjs.Container), null, !0, 999), this.addEntity(new Pt(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallFg.png" : "assets/gui/PanelBigFg.png")), null, !0, 1e3)
        },
        __class__: Bt
    }), (t["cbchoc.gui.PanelLevel"] = Mt).__name__ = "cbchoc.gui.PanelLevel", Mt.__super__ = Bt, Mt.prototype = e(Bt.prototype, {
        _init: function() {
            Bt.prototype._init.call(this), this.vo = new ot(this._kernel, this._type), this._bgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevelBg.png"));
            var e = this._getBgCol() * this.width;
            this._bgBitmap.sourceRect = new createjs.Rectangle(e, 0, this.width, this.height), this._bgContext.addChild(this._bgBitmap), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevel.png"));
            e = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(e, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            e.spacingVertical = 16, this._title = new Vt(this._kernel, 125, this.height - 60, this._getTitle().toUpperCase(), e), this._title.setPosition(0, 72), this.addEntity(this._title, null, !0, 10);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new Vt(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), e, null, null, .5), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10)
        },
        _getTitle: function() {
            var e = "";
            return e += this.vo.title, this.vo.isLocked || this.vo.isNew ? this.vo.isNew ? e += "\n" + k.string(this._kernel.getConfig("gui.scenes.selectLevel.new")).toUpperCase() : this.vo.isLocked && (e += "\n" + k.string(this._kernel.getConfig("gui.scenes.selectLevel.locked")).toUpperCase()) : e += "\n" + this._session.getMedalTitle(this.vo.medalType), e
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
        __class__: Mt
    }), (t["cbchoc.gui.PanelResult"] = Nt).__name__ = "cbchoc.gui.PanelResult", Nt.__super__ = Bt, Nt.prototype = e(Bt.prototype, {
        _init: function() {
            Bt.prototype._init.call(this), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelResult.png")), this._fgBitmap.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var e, t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            switch (this._message = new Vt(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), t), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10), this._medalType._hx_index) {
                case 0:
                    e = [];
                    break;
                case 1:
                    e = [et.MEDAL_BRONZE];
                    break;
                case 2:
                    e = [et.MEDAL_BRONZE, et.MEDAL_SILVER];
                    break;
                case 3:
                    e = [et.MEDAL_BRONZE, et.MEDAL_SILVER, et.MEDAL_GOLD]
            }
            for (var s = this._delayInitial, i = 0; i < e.length;) {
                var n = e[i];
                ++i, s += this._delayMedal, this.addEntity(new Se(this._kernel, function(e, t) {
                    return function() {
                        e[0](t[0])
                    }
                }([Ys(this, this._showMedal)], [n]), s))
            }
        },
        _showMedal: function(e) {
            var t = this._getFgCol(e);
            this._fgBitmap.sourceRect.x = t * this.width;
            e = e._hx_index;
            this.addEntity(new xt(this._kernel, 1, 40 * (e + 1), 70), null, !0, 1e3), this._kernel.overlay.flash(100 * e + 100, !0, .3 * e), 0 < e && (this._kernel.audio.start("CrowdScore", Ae.INTERFACE, 1, 0, .5 * e), this._kernel.audio.start("Medal" + e, Ae.INTERFACE, 1, 0, .5 * e))
        },
        _getMessage: function() {
            var e = "";
            return e += k.string(this._kernel.getConfig("gui.scenes.results.message")) + " ", e += this._session.getMedalTitle(this._medalType) + "\n"
        },
        _getFgCol: function(e) {
            switch (e._hx_index) {
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
        __class__: Nt
    }), (t["cbchoc.gui.PanelShop"] = Ot).__name__ = "cbchoc.gui.PanelShop", Ot.__super__ = Bt, Ot.prototype = e(Bt.prototype, {
        _init: function() {
            Bt.prototype._init.call(this), this.vo = new pt(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
            var e = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(e, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            e = new St(this._kernel);
            e.setPosition(215, 43), this.addEntity(e, null, !0, 30);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new Vt(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), e, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new Vt(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), e, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var t = 86, s = [at.UPGRADE_MOVEMENT, at.UPGRADE_SHOOTING, at.UPGRADE_DEFENSE, at.UPGRADE_MAGNET], i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                n = this._createUpgrade(n, this._type, 0, t);
                this.addEntity(n, null, !0, 15), t += 0 | n.height
            }
        },
        _createUpgrade: function(e, t, s, i) {
            e = new jt(this._kernel, e, this.vo);
            return e.setPosition(s, i), e
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
        __class__: Ot
    }), (t["cbchoc.gui.PanelUnit"] = Lt).__name__ = "cbchoc.gui.PanelUnit", Lt.__super__ = Bt, Lt.prototype = e(Bt.prototype, {
        _init: function() {
            Bt.prototype._init.call(this), this.vo = new pt(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
            var e = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(e, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new Vt(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), e, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new Vt(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), e, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var t = 80, s = [at.UPGRADE_MOVEMENT, at.UPGRADE_SHOOTING, at.UPGRADE_DEFENSE, at.UPGRADE_MAGNET], i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                n = this._createBar(n);
                n.set_y(t), t += n.height, this.addEntity(n, null, !0, 15)
            }
        },
        _createBar: function(e) {
            var t = new ft(this._kernel, this.width, this._statHeight + 2, !1),
                s = this._title.textStyle.clone();
            s.size = 16;
            s = new Vt(this._kernel, this._message.width, t.height, this._session.getUpgradeTitle(e).toUpperCase(), s);
            t.addEntity(s, null, !0, 1);
            for (var i = [], n = 0, a = this.vo.getDefault(e); n < a;) {
                n++;
                i.push(0)
            }
            for (n = 0, a = this.vo.getUpgrade(e); n < a;) {
                n++;
                i.push(1)
            }
            for (n = 0, a = this.vo.getAvailable(e); n < a;) {
                n++;
                i.push(2)
            }
            for (; 8 < i.length;) i.shift();
            for (var _ = 123, n = 0; n < i.length;) {
                var r = i[n];
                ++n;
                var o = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
                o.sourceRect = new createjs.Rectangle(2 * this.width + r * this._statWidth, 0, this._statWidth, this._statHeight), t._context.addChild(o), o.x = _, o.y = 7, _ += this._statWidth
            }
            return t
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
        __class__: Lt
    });
    var Ft = function(e) {
        Le.call(this, e)
    };
    (t["cbchoc.gui.PauseMenu"] = Ft).__name__ = "cbchoc.gui.PauseMenu", Ft.__super__ = Le, Ft.prototype = e(Le.prototype, {
        _init: function() {
            var e = this;
            Le.prototype._init.call(this), this.addEntity(this._debugText = new Vt(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(Oe.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
            var t = Math.round((this._kernel.factory.width - 200) / 2),
                s = Math.round((this._kernel.factory.height - 65 * (this._isFullScreenSupported() ? 4 : 3)) / 2);
            this.addEntity(new Et(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), t, s, null, function() {
                e._kernel.overlay.activateButton(Be.UNPAUSE)
            }), Te.ALWAYS, !0, 1), this.addEntity(this._audioButton = new Et(this._kernel, this._kernel.getConfig("gui.buttons.audioOff"), t, s += 65, null, function() {
                e._kernel.overlay._wasMute = !e._kernel.overlay._wasMute, e._factory.accessibility.setAudioIsMute(e._kernel.overlay._wasMute), e._kernel.overlay.activateButton(Be.UNPAUSE)
            }), Te.ALWAYS, !0, 1), this._isFullScreenSupported() && this.addEntity(this._fullScreenButton = new Et(this._kernel, this._kernel.getConfig("gui.buttons.fullScreenOn"), t, s += 65, null, function() {
                e._stageClick(), e._kernel.overlay.activateButton(Be.UNPAUSE)
            }), Te.ALWAYS, !0, 1), this.addEntity(new Et(this._kernel, this._kernel.getConfig("gui.buttons.back"), t, s += 65, null, function() {
                e._kernel.overlay.activateButton(Be.UNPAUSE), e._kernel.scenes.back()
            }), Te.DEFEND, !0, 1), this.addEntity(new Et(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), t, s, null, function() {
                e._kernel.overlay.activateButton(Be.UNPAUSE), e._pressInstructions()
            }), Te.STANDARD, !0, 1)
        },
        _isFullScreenSupported: function() {
            try {
                var e = window.document.documentElement;
                if (null != e.requestFullscreen) return !0;
                if (null != e.msRequestFullscreen) return !0;
                if (null != e.mozRequestFullScreen) return !0;
                if (null != e.webkitRequestFullscreen) return !0
            } catch (e) {}
            return !1
        },
        _isFullScreenEnabled: function() {
            try {
                var e = window.document;
                return !!e.fullscreenElement || (!!e.mozFullScreenElement || (!!e.webkitFullscreenElement || e.msFullscreenElement))
            } catch (e) {}
            return !1
        },
        _disposer: function() {
            this._kernel._stage.removeEventListener("click", Ys(this, this._stageClick), !0), Le.prototype._disposer.call(this)
        },
        _pressInstructions: function() {
            try {
                this._kernel.scenes.get_scene()._pressInstructions()
            } catch (e) {
                this._kernel.scenes.setScene(Me.INSTRUCTIONS)
            }
        },
        _updater: function(e) {
            null == e && (e = 0), Le.prototype._updater.call(this, e), this._isFullScreenClicked = !1
        },
        pauseHandler: function(e) {
            var t = this;
            e ? (this._audioButton.setTitle(this._kernel.getConfig(this._kernel.audio.isMute ? "gui.buttons.audioOn" : "gui.buttons.audioOff")), null != this._fullScreenButton && this._fullScreenButton.setTitle(this._kernel.getConfig(this._isFullScreenEnabled() ? "gui.buttons.fullScreenOff" : "gui.buttons.fullScreenOn")), this._kernel._stage.addEventListener("click", Ys(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new Bs(this._kernel, function(e) {
                t._context.y = e
            }, this._factory.height, 0, 0, 500, null, Ds.EASE_OUT, Ps.QUARTIC)), this._factory.accessibility.buttonsRegister(this, null, 500)) : (this._kernel._stage.removeEventListener("click", Ys(this, this._stageClick), !0), this._factory.accessibility.buttonsRevert())
        },
        _stageClick: function(e) {
            this._kernel.isActive || null != this._fullScreenButton && (this._isFullScreenClicked || this._fullScreenButton.isOver && (this._isFullScreenEnabled() ? this._kernel.system.requestExitFullScreen() : (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()), this._isFullScreenClicked = !0, null != e && e.stopPropagation(), this._kernel.overlay.activateButton(Be.UNPAUSE)))
        },
        __class__: Ft
    });
    var Vt = function(e, t, s, i, n, a, _, r) {
        null == r && (r = 1), null == _ && (_ = !1), null == a && (a = !1), null == i && (i = ""), i = l.replace(i, "<BR/>", "\n"), i = l.replace(i, "<br/>", "\n"), be.call(this, e, t, s, i, n, a, _), this.set_alpha(r)
    };

    function Ht(e, t, s) {
        this._big = t, this._small = s, ft.call(this, e, 360, 200, !1)
    }

    function Gt(e, t) {
        this._title = t, ft.call(this, e, 350, 40, !1)
    }(t["cbchoc.gui.Text"] = Vt).__name__ = "cbchoc.gui.Text", Vt.__super__ = be, Vt.prototype = e(be.prototype, {
        _init: function() {
            be.prototype._init.call(this), this._textField.textBaseline = "alphabetic", this._textField.y += 1.15 * this.textStyle.size, this._prevTextStyle = "invalidated"
        },
        set_alpha: function(e) {
            return this._context.alpha = e
        },
        __class__: Vt
    }), (t["cbchoc.gui.TitleBig"] = Ht).__name__ = "cbchoc.gui.TitleBig", Ht.__super__ = ft, Ht.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this);
            this._textBig = new Vt(this._kernel, this.width, 30, "", this._factory.createTextStyle(Oe.OVERSIZED), !1, !1, 1), this._textBig.setPosition(-1, 20), this.addEntity(this._textBig, null, !0, 1), this._textSmall = new Vt(this._kernel, this.width, 30, "", this._factory.createTextStyle(Oe.SUBHEAD), !1, !1, .5), this._textSmall.setPosition(0, 10), this.addEntity(this._textSmall, null, !0, 1), this.configure(this._big, this._small)
        },
        configure: function(e, t) {
            this._big = e, this._small = t, this._textBig.set_text(this._big.toUpperCase()), this._textSmall.set_text(this._small.toUpperCase())
        },
        __class__: Ht
    }), (t["cbchoc.gui.TitleSmall"] = Gt).__name__ = "cbchoc.gui.TitleSmall", Gt.__super__ = ft, Gt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._text = new Vt(this._kernel, this.width, 30, "", this._factory.createTextStyle(Oe.HEADLINE), !1, !1, 1), this._text.setPosition(0, 7), this.addEntity(this._text, null, !0, 1), this.set_x((this._factory.width - this.width) / 2), this.configure(this._title)
        },
        configure: function(e) {
            this._title = e, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
        },
        __class__: Gt
    });
    var jt = function(e, t, s) {
        this._statHeight = 24, this._statWidth = 16, this._MAX_STATS = 8, this._type = t, this._unitVo = s, ft.call(this, e, 380, 28, !1)
    };

    function Kt(e, t) {
        null == t && (t = 1), ft.call(this, e, null, null, !1), this.set_alpha(t)
    }

    function Wt(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this._session = e.get_session(), this._assets = e.assets, this._factory = e.factory, this._system = e.system, V.call(this, e, t, s = !0, i, n)
    }(t["cbchoc.gui.Upgrade"] = jt).__name__ = "cbchoc.gui.Upgrade", jt.__super__ = ft, jt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._prevCoins = this._session.getCoins(), (t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE)).size -= 4;
            var e = new Vt(this._kernel, 112, this.height, this._session.getUpgradeTitle(this._type).toUpperCase(), t);
            e.set_y(1), this.addEntity(e, null, !0, 1), this._bars = new createjs.Container, this._bars.x = 123, this._context.addChild(this._bars), this._button = new bt(this._kernel, "", 245, -2, null, Ys(this, this.buy)), this._session.get_isTester() && this.addEntity(new wt(this._kernel, this._statWidth * this._MAX_STATS, this._statHeight, this._bars.x, 0, null, Ys(this, this._reduce)), null, !0, 1);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new Vt(this._kernel, 100, 20, "", t, null, null, .5), this._message.setPosition(244, 4), this.addEntity(this._message, null, !0, 29), this.configure()
        },
        _updater: function(e) {
            null == e && (e = 0), ft.prototype._updater.call(this, e), this._prevCoins != this._session.getCoins() && (this._prevCoins = this._session.getCoins(), this.configure())
        },
        configure: function() {
            this._bars.removeAllChildren();
            var e = this._unitVo.getTotal(this._type),
                t = this._getPrice(e + 1),
                s = t <= this._session.getCoins();
            this._button.setTitle(k.string(this._kernel.getConfig("gui.buttons.buy")) + " " + t), e == this._MAX_STATS ? (this._button.remove(!0), this._message.set_text(k.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : s ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == t ? "null" : "" + t));
            for (var i = [], n = 0, a = this._unitVo.getDefault(this._type); n < a;) {
                n++;
                i.push(0)
            }
            for (n = 0, a = this._unitVo.getUpgrade(this._type); n < a;) {
                n++;
                i.push(1)
            }
            for (n = 0, a = this._unitVo.getAvailable(this._type); n < a;) {
                n++;
                i.push(2)
            }
            for (; 8 < i.length;) i.shift();
            for (var _ = 0, n = 0; n < i.length;) {
                var r = i[n];
                ++n;
                var o = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
                o.sourceRect = new createjs.Rectangle(2 * this.width + r * this._statWidth, 0, this._statWidth, this._statHeight), this._bars.addChild(o), o.x = _, _ += this._statWidth
            }
        },
        _getPrice: function(e) {
            e < 0 && (e = 0), e > this._MAX_STATS && (e = this._MAX_STATS);
            return [0, 100, 300, 500, 800, 1300, 2100, 3400, 5500][e]
        },
        buy: function() {
            var e = this._unitVo.getTotal(this._type),
                e = this._getPrice(e + 1);
            e <= this._session.getCoins() && (this._session.setCoins(null, this._session.getCoins() - e), this._session.setUpgrade(this._type, this._unitType, this._unitVo.getUpgrade(this._type) + 1), this.configure(), this._kernel.audio.start("Coin", Ae.INTERFACE, 0, 0, .5))
        },
        _reduce: function() {
            this._session.setUpgrade(this._type, this._unitType, this._session.getUpgrade(this._type, this._unitType) - 1), this.configure()
        },
        __class__: jt
    }), (t["cbchoc.gui.Vignette"] = Kt).__name__ = "cbchoc.gui.Vignette", Kt.__super__ = ft, Kt.prototype = e(ft.prototype, {
        _init: function() {
            ft.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Vignette.png")), this._context.addChild(this._bitmap)
        },
        set_alpha: function(e) {
            return this._bitmap.alpha = e
        },
        __class__: Kt
    }), (t["cbchoc.scenes.AScene"] = Wt).__name__ = "cbchoc.scenes.AScene", Wt.__super__ = V, Wt.prototype = e(V.prototype, {
        _init: function() {
            V.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(Te.STANDARD), this._factory.preventDefaultForKeys([Ue.SPACE]), this._kernel.audio.start("MusicMenu", Ae.MUSIC, -1, 7111, .5, null, !0)
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([Ue.SPACE]), this._factory.accessibility.buttonsRegister(), V.prototype._disposer.call(this)
        },
        _pressContinue: function() {
            this._kernel.log("button: continue: " + k.string(this.type)), this._kernel.inputs.keyboard.getIsKeyDown(Ue.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(Ue.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester());
            var e = this._factory.getNextSceneType(this.type);
            e == Me.SELECT_LEVEL && this._session.getMedal(qe.LEVEL_1) == et.MEDAL_NONE && (e = Me.GAME);
            var t = Ys(h = this._kernel.scenes, h.setScene),
                s = e;
            this._outro(function() {
                t(s)
            })
        },
        _pressInstructions: function() {
            this._kernel.log("button: instructions");
            var e = Ys(h = this._kernel.scenes, h.setScene),
                t = Me.INSTRUCTIONS;
            this._outro(function() {
                e(t)
            })
        },
        _outro: function(e) {
            this._isOutroCalled || (this._isOutroCalled = !0, null != e && e())
        },
        _addBg: function() {
            this.addEntity(new mt(this._kernel, this.type), null, !0, 1)
        },
        _addFg: function(e, t, s, i) {
            null == i && (i = 0), null == s && (s = ""), null == t && (t = "");
            var n = this;
            this._fgHeader = new Pt(this._kernel, this._assets.getAsset(e ? "assets/gui/SceneFgHeader2.png" : "assets/gui/SceneFgHeader1.png"));
            var a = this._fgHeader;
            a.set_x(a.x - i), this.addEntity(this._fgHeader, null, !0, 110), e ? this._fgHeader.addEntity(new Gt(this._kernel, t), null, !0, 1) : this._fgHeader.addEntity(new Ht(this._kernel, t, s), null, !0, 1), this._fgFooter = new Pt(this._kernel, this._assets.getAsset(e ? "assets/gui/SceneFgFooter2.png" : "assets/gui/SceneFgFooter1.png")), this.addEntity(this._fgFooter, null, !0, 100), this.addEntity(new Bs(this._kernel, function(e) {
                n._fgHeader.set_y(e)
            }, -this._factory.height, this._fgHeader.y, 500, 1e3, null, Ds.EASE_OUT, Ps.EXPONENTIAL)), this.addEntity(new Bs(this._kernel, function(e) {
                n._fgFooter.set_y(e)
            }, this._factory.height, this._fgFooter.y, e ? 0 : 750, 1e3, null, Ds.EASE_OUT, Ps.EXPONENTIAL))
        },
        _addButtons: function(e, t, s, i, n, a, _) {
            null == _ && (_ = 0), null == a && (a = 0), null == n && (n = 0), null == e && (e = 1e3);
            var r = this;
            this._buttonRight = t, this._buttonLeft = s, this._buttonCenter = i, null != this._buttonRight && (this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 13), this.addEntity(this._buttonRight, null, !0, e), this.addEntity(new Bs(this._kernel, function(e) {
                r._buttonRight.set_y(e)
            }, this._factory.height + 60, this._buttonRight.y, n + 1200, 2e3, null, Ds.EASE_OUT, Ps.ELASTIC()))), null != this._buttonCenter && (this._buttonCenter.setPosition(.5 * (this._factory.width - 200), this._factory.height - 65 - 13), this.addEntity(this._buttonCenter, null, !0, e + 1), this.addEntity(new Bs(this._kernel, function(e) {
                r._buttonCenter.set_y(e)
            }, this._factory.height + 60, this._buttonCenter.y, _ + 1300, 2e3, null, Ds.EASE_OUT, Ps.ELASTIC()))), null != this._buttonLeft && (this._buttonLeft.setPosition(30, this._factory.height - 65 - 13), this.addEntity(this._buttonLeft, null, !0, e + 2), this.addEntity(new Bs(this._kernel, function(e) {
                r._buttonLeft.set_y(e)
            }, this._factory.height + 60, this._buttonLeft.y, a + 1400, 2e3, null, Ds.EASE_OUT, Ps.ELASTIC())))
        },
        _defaultOutro: function(e) {
            var t = this;
            if (!this._isOutroCalled) {
                this._isOutroCalled = !0;
                for (var s = 0, i = this.getEntitiesByClass(Bs); s < i.length;) {
                    var n = i[s];
                    ++s, n.remove()
                }
                this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new Bs(this._kernel, function(e) {
                    t._buttonLeft.set_y(e)
                }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, Ds.EASE_IN, Ps.BACK())), null != this._buttonCenter && this.addEntity(new Bs(this._kernel, function(e) {
                    t._buttonCenter.set_y(e)
                }, this._buttonCenter.y, this._factory.height, 50, 1e3, null, Ds.EASE_IN, Ps.BACK())), null != this._buttonRight && this.addEntity(new Bs(this._kernel, function(e) {
                    t._buttonRight.set_y(e)
                }, this._buttonRight.y, this._factory.height, 100, 1e3, null, Ds.EASE_IN, Ps.BACK())), this.addEntity(new Bs(this._kernel, function(e) {
                    t._fgHeader.set_y(e)
                }, this._fgHeader.y, -this._factory.height, 250, 500, null, Ds.EASE_IN, Ps.EXPONENTIAL)), this.addEntity(new Bs(this._kernel, function(e) {
                    t._fgFooter.set_y(e)
                }, this._fgFooter.y, this._factory.height, 500, 500, null, Ds.EASE_IN, Ps.EXPONENTIAL)), this.addEntity(new Bs(this._kernel, function(e) {}, 0, 0, 100, 1e3, null, Ds.EASE_IN, Ps.BACK(), e)), this._kernel.audio.start("Transition", Ae.INTERFACE, 0, 0, .25), this._kernel.isDebug && e()
            }
        },
        _easyTweez: function(e) {
            null == e && (e = !0);
            for (var t = 0, s = this._easyTweezers; t < s.length;) {
                var i = [s[t]];
                ++t, e ? i[0].isVerticalIn ? this.addEntity(new Bs(this._kernel, function(t) {
                    return function(e) {
                        t[0].guiEntity.set_y(e)
                    }
                }(i), -this._factory.height + i[0].guiEntity.y, i[0].guiEntity.y, 500 + 100 * i[0].sequence, 2e3, null, Ds.EASE_OUT, Ps.QUARTIC)) : this.addEntity(new Bs(this._kernel, function(t) {
                    return function(e) {
                        t[0].guiEntity.set_x(e)
                    }
                }(i), this._factory.width + i[0].guiEntity.x, i[0].guiEntity.x, 500 + 100 * i[0].sequence, 2e3, null, Ds.EASE_OUT, Ps.QUARTIC)) : this.addEntity(new Bs(this._kernel, function(t) {
                    return function(e) {
                        t[0].guiEntity.set_x(e)
                    }
                }(i), i[0].guiEntity.x, -1.5 * this._factory.width + i[0].guiEntity.x, 50 * i[0].sequence, 500, null, Ds.EASE_IN, Ps.BACK()))
            }
        },
        _addEasyTweez: function(e, t, s) {
            null == s && (s = !0), null != e && this._easyTweezers.push({
                guiEntity: e,
                sequence: t,
                isVerticalIn: s
            })
        },
        _createBurst: function(e, t, s, i) {
            null == i && (i = 1e4);
            s = new xt(this._kernel, e, t, s);
            return this.addEntity(s, null, !0, i), s
        },
        __class__: Wt
    });
    var zt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Avatar"] = zt).__name__ = "cbchoc.scenes.Avatar", zt.__super__ = Wt, zt.prototype = e(Wt.prototype, {
        _init: function() {
            var t = this;
            Wt.prototype._init.call(this), this._session.cache.levelType = qe.LEVEL_1, this._kernel.audio.start("MusicMenu", Ae.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Se(this._kernel, function() {
                t._kernel.audio.start("VoiceAvatar", Ae.INTERFACE, 1, 0, .85 * t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.avatar.title")), this._panelUnitA = new Lt(this._kernel, nt.UNIT_A), this._panelUnitA.set_x(15), this.addEntity(this._panelUnitA, null, !0, 1e3), this._panelUnitB = new Lt(this._kernel, nt.UNIT_B), this._panelUnitB.set_x(this._factory.width - this._panelUnitB.width - 15), this.addEntity(this._panelUnitB, null, !0, 1e3), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelUnitA.set_x(e)
            }, -(this._panelUnitA.width + this._panelUnitA.x), this._panelUnitA.x, 1500, 1e3, null, Ds.EASE_OUT, Ps.QUARTIC)), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelUnitB.set_x(e)
            }, this._factory.width, this._panelUnitB.x, 1500, 1e3, null, Ds.EASE_OUT, Ps.QUARTIC)), this._avatarUnitA = new Pt(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitA.png")), this._avatarUnitB = new Pt(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitB.png")), this.addEntity(this._avatarUnitA, null, !0, 300), this.addEntity(this._avatarUnitB, null, !0, 300), this.addEntity(new Bs(this._kernel, function(e) {
                t._avatarUnitA.set_x(e)
            }, -this._factory.width, this._avatarUnitA.x, 100, 2e3, null, Ds.EASE_OUT, Ps.QUARTIC)), this.addEntity(new Bs(this._kernel, function(e) {
                t._avatarUnitB.set_x(e)
            }, this._factory.width, this._avatarUnitB.x, 100, 2e3, null, Ds.EASE_OUT, Ps.QUARTIC));
            var e = new Et(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitA"), 0, 0, null, Ys(this, this._pressUnitA)),
                s = new Et(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitB"), 0, 0, null, Ys(this, this._pressUnitB));
            this._addButtons(null, s, e), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, e)
        },
        _updater: function(e) {
            null == e && (e = 0), Wt.prototype._updater.call(this, e)
        },
        _outro: function(e) {
            var t = this;
            this._isOutroCalled || (this._defaultOutro(e), this._kernel.audio.start("CrowdScore", Ae.INTERFACE, 1, 0, .5), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelUnitA.set_x(e)
            }, this._panelUnitA.x, -this._factory.width, 0, 800, null, Ds.EASE_IN, Ps.BACK())), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelUnitB.set_x(e)
            }, this._panelUnitB.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ps.BACK())), this.addEntity(new Bs(this._kernel, function(e) {
                t._avatarUnitA.set_x(e)
            }, this._avatarUnitA.x, -this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ps.BACK(.75))), this.addEntity(new Bs(this._kernel, function(e) {
                t._avatarUnitB.set_x(e)
            }, this._avatarUnitB.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ps.BACK(.75))))
        },
        _pressUnitA: function() {
            this._session.cache.unitType = nt.UNIT_A, this._pressContinue()
        },
        _pressUnitB: function() {
            this._session.cache.unitType = nt.UNIT_B, this._pressContinue()
        },
        __class__: zt
    });
    var Yt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Game"] = Yt).__name__ = "cbchoc.scenes.Game", Yt.__super__ = Wt, Yt.prototype = e(Wt.prototype, {
        _init: function() {
            var e, t, s, i, n, a, _, r, o;
            Wt.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(Te.DEFEND), this._session.cache.totalPlays++, this._session.cache.reset(), this._levelVo = new ot(this._kernel, this._session.cache.levelType), this._unitVo = new pt(this._kernel, this._session.cache.unitType), this.addEntity(this._hud = new At(this._kernel, !this._levelVo.isNew), null, !0, 100), this.addEntity(this._vignette = new Kt(this._kernel, 1), null, !0, 20), this._createLocation(), this._session.get_isTester() && (e = Ys(this, this._winMedal), t = et.MEDAL_BRONZE, s = new Et(this._kernel, this._kernel.getConfig("gui.buttons.testMode.bronze"), 0, 0, null, function() {
                e(t)
            }), i = Ys(this, this._winMedal), n = et.MEDAL_SILVER, a = new Et(this._kernel, this._kernel.getConfig("gui.buttons.testMode.silver"), 0, 0, null, function() {
                i(n)
            }), _ = Ys(this, this._winMedal), r = et.MEDAL_GOLD, o = new Et(this._kernel, this._kernel.getConfig("gui.buttons.testMode.gold"), 0, 0, null, function() {
                _(r)
            }), this._addButtons(null, o, s, a, 1e3, 1e3, 1e3)), this._kernel.audio.stop(null, Ae.MUSIC), this._kernel.log("play: " + k.string(this._levelVo.type)), this._factory.preventDefaultForKeys([Ue.UP, Ue.RIGHT, Ue.DOWN, Ue.LEFT, Ue.SPACE])
        },
        _createDelay: function(e, t) {
            null == t && (t = 1e3), this.addEntity(new Se(this._kernel, e, t))
        },
        _removeLocationAndGoal: function() {
            var e;
            null != this._location && ((e = this._location).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._location = null), null != this._goal && ((e = this._goal).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer()), this._goal = null), this._isTransitioning = !1
        },
        _createLocation: function() {
            this._removeLocationAndGoal(), this._session.cache.currentPeriod != st.PERIOD_1 && this._kernel.overlay.flash(1e3, !0, 1, 16777215), this._vignette.get_view().set_isVisible(!1), this.addEntity(this._location = new ht(this._kernel, this._levelVo, this._unitVo), null, !0, 10), this._hud.configurePeriods(!0);
            var e, t = this._hud;
            switch (this._session.cache.currentPeriod._hx_index) {
                case 0:
                    e = null;
                    break;
                case 1:
                    e = "gui.scenes.game.hud.startPeriod1";
                    break;
                case 2:
                    e = "gui.scenes.game.hud.startPeriod2";
                    break;
                case 3:
                    e = "gui.scenes.game.hud.startPeriod3"
            }
            t.configureAlert(this._kernel.getConfig(e))
        },
        _createGoal: function() {
            this._removeLocationAndGoal(), this._kernel.overlay.flash(1e3, !0, 1, 16777215), this.addEntity(this._goal = new _t(this._kernel, this._levelVo, this._unitVo, this._hud, Ys(this, this._goalCallback)), null, !0, 10)
        },
        _winMedal: function(e) {
            this._session.cache.medalType = e, this._session.setMedal(this._levelVo.type, this._unitVo.type, e), this._session.setCoins(null, this._session.getCoins() + this._getScore(e)), this._kernel.log("medal: " + k.string(e) + ": " + k.string(this._levelVo.type)), this._gameOver()
        },
        _gameOver: function() {
            this._kernel.scenes.next()
        },
        _updater: function(e) {
            null == e && (e = 0), Wt.prototype._updater.call(this, e), null != this._location && (this._hud.configureDistance(this._location.getDistanceToGoal()), this._isTransitioning || (0 == this._location.getDistanceToGoal() ? (this._isTransitioning = !0, this._kernel.overlay.flash(500, !0, 1, 16777215), this._createGoal()) : this._location.player.isDefeated && (this._isTransitioning = !0, this._kernel.overlay.flash(500, !0, 1, 0), this._kernel.audio.start("CrowdMiss", Ae.EFFECTS, 1, 0, 1), this._kernel.audio.start("OrganDefeated", Ae.EFFECTS, 1, 0, 1), this._vignette.get_view().set_isVisible(!0), this._session.cache.setOutcome(null, tt.LOSS), this._hud.configureAlert(this._kernel.getConfig("gui.scenes.game.hud.defeated")), this._nextPeriod(), this._whatNext(2e3))));
            this._goal
        },
        _goalCallback: function(e) {
            this._vignette.get_view().set_isVisible(!e), this._session.cache.setOutcome(null, e ? tt.WIN : tt.LOSS), this._hud.configureAlert(this._kernel.getConfig(e ? "gui.scenes.game.hud.score" : "gui.scenes.game.hud.miss")), this._nextPeriod(), this._whatNext()
        },
        _nextPeriod: function() {
            switch (this._session.cache.currentPeriod._hx_index) {
                case 0:
                    break;
                case 1:
                    this._session.cache.currentPeriod = st.PERIOD_2;
                    break;
                case 2:
                    this._session.cache.currentPeriod = st.PERIOD_3;
                    break;
                case 3:
                    this._session.cache.currentPeriod = st.GAME_OVER
            }
            this._hud.configurePeriods(!1)
        },
        _whatNext: function(e) {
            switch (null == e && (e = 1500), this._session.cache.currentPeriod._hx_index) {
                case 0:
                    var t = Ys(this, this._winMedal),
                        s = this._session.getMedalFromCachedOutcomes();
                    this._createDelay(function() {
                        t(s)
                    }, e);
                    break;
                case 1:
                case 2:
                case 3:
                    this._createDelay(Ys(this, this._createLocation), e)
            }
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([Ue.UP, Ue.RIGHT, Ue.DOWN, Ue.LEFT, Ue.SPACE]), this._kernel.audio.stop(null, Ae.MUSIC);
            var e = this._session;
            e.saveCount++, e._setter(), e._savedData._____VERSION = e._version, e._savedData[e.id] = e._data, e._driverSave(), Wt.prototype._disposer.call(this)
        },
        _getScore: function(e) {
            switch (e._hx_index) {
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
        __class__: Yt
    });
    var Xt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Instructions"] = Xt).__name__ = "cbchoc.scenes.Instructions", Xt.__super__ = Wt, Xt.prototype = e(Wt.prototype, {
        _init: function() {
            var e = this;
            Wt.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(Te.DEFEND), this._kernel.audio.start("MusicMenu", Ae.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Se(this._kernel, function() {
                e._kernel.audio.start("VoiceInstructions", Ae.INTERFACE, 1, 0, e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.instructions.title"));
            var t = new Et(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, Ys(this, this._pressContinue));
            this._addButtons(null, t);
            var s = new Pt(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
            this.addEntity(s, null, !0, 20), s.setPosition((this._factory.width - s.width) / 7, (this._factory.height - s.height) / 2);
            var i = new Vt(this._kernel, 300, 300, k.string(this._kernel.getConfig("gui.scenes.instructions.message")).toUpperCase(), this._factory.createTextStyle(Oe.BODY), !0, !1);
            i.setPosition(this._kernel.factory.width - i.width - 40, 90), this.addEntity(i, null, !0, 21), this._addEasyTweez(s, 1, !1), this._addEasyTweez(i, 2, !1), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
        },
        _outro: function(e) {
            this._isOutroCalled || this._defaultOutro(e)
        },
        __class__: Xt
    });
    var Qt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Intro"] = Qt).__name__ = "cbchoc.scenes.Intro", Qt.__super__ = Wt, Qt.prototype = e(Wt.prototype, {
        _updater: function(e) {
            null == e && (e = 0), Wt.prototype._updater.call(this, e), this._kernel.scenes.next()
        },
        __class__: Qt
    });
    var Jt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Menu"] = Jt).__name__ = "cbchoc.scenes.Menu", Jt.__super__ = Wt, Jt.prototype = e(Wt.prototype, {
        _init: function() {
            var t = this;
            Wt.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ae.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("CrowdScore", Ae.EFFECTS, 0, 0, .5), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.menu.title"), this._kernel.getConfig("gui.scenes.menu.subtitle")), this.addEntity(this._action = new yt(this._kernel), null, !0, 200), this.addEntity(new Bs(this._kernel, function(e) {
                t._action.set_x(e)
            }, -this._factory.width, this._action.x, 500, 2e3, null, Ds.EASE_OUT, Ps.ELASTIC()));
            var e = new Et(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, Ys(this, this._pressContinue)),
                s = new Et(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, Ys(this, this._pressInstructions));
            this._addButtons(null, e, s), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, e)
        },
        _outro: function(e) {
            var t = this;
            this._isOutroCalled || (this._defaultOutro(e), this.addEntity(new Bs(this._kernel, function(e) {
                t._action.set_x(e)
            }, this._action.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ps.BACK())))
        },
        __class__: Jt
    });
    var Zt = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Results"] = Zt).__name__ = "cbchoc.scenes.Results", Zt.__super__ = Wt, Zt.prototype = e(Wt.prototype, {
        _init: function() {
            var t = this;
            Wt.prototype._init.call(this), this._levelVo = new ot(this._kernel, this._session.cache.levelType, this._session.cache.unitType), this._kernel.audio.start("GameStart", Ae.INTERFACE, 1, 0, .5), this.addEntity(new Se(this._kernel, function() {
                t._kernel.audio.start(["VoiceResults0", "VoiceResults1", "VoiceResults2", "VoiceResults3"][t._session.cache.medalType._hx_index], Ae.INTERFACE, 1, 0, t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 3500 + 750 * this._session.cache.medalType._hx_index)), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.results.title"), this._levelVo.title, 120), this.addEntity(this._hero = new Tt(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this.addEntity(new Bs(this._kernel, function(e) {
                t._hero.set_x(e)
            }, -this._factory.width, this._hero.x, 500, 2e3, null, Ds.EASE_OUT, Ps.ELASTIC())), this._panelResult = new Nt(this._kernel, this._session.cache.medalType), this._panelResult.set_x(this._factory.width - this._panelResult.width - 15), this.addEntity(this._panelResult, null, !0, 1e3), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelResult.set_x(e)
            }, this._factory.width, this._panelResult.x, 1500, 1e3, null, Ds.EASE_OUT, Ps.QUARTIC));
            var e = new Et(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, Ys(this, this._pressContinue));
            this._addButtons(null, e), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, e)
        },
        _updater: function(e) {
            null == e && (e = 0), Wt.prototype._updater.call(this, e), 2e3 < this._age && Math.random() < this._session.cache.medalType._hx_index / 3 && this._createBurst(.5 * Math.random() + .5, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .5) * this._factory.width, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .25) * this._factory.height, 299)
        },
        _outro: function(e) {
            var t = this;
            this._isOutroCalled || (this._defaultOutro(e), this.addEntity(new Bs(this._kernel, function(e) {
                t._hero.set_x(e)
            }, this._hero.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ps.BACK())), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelResult.set_x(e)
            }, this._panelResult.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ps.BACK())))
        },
        __class__: Zt
    });
    var qt = function(e) {
        me.call(this, e, 1e3)
    };
    (t["cbchoc.scenes.SceneTransition"] = qt).__name__ = "cbchoc.scenes.SceneTransition", qt.__super__ = me, qt.prototype = e(me.prototype, {
        _init: function() {
            me.prototype._init.call(this)
        },
        __class__: qt
    });
    var $t = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.SelectLevel"] = $t).__name__ = "cbchoc.scenes.SelectLevel", $t.__super__ = Wt, $t.prototype = e(Wt.prototype, {
        _init: function() {
            var e = this;
            Wt.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ae.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Se(this._kernel, function() {
                e._kernel.audio.start("VoiceSelectLevel", Ae.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.selectLevel.title")), this._panelLevel1 = new Mt(this._kernel, qe.LEVEL_1), this._panelLevel1.set_x(15), this.addEntity(this._panelLevel1, null, !0, 200), this._panelLevel2 = new Mt(this._kernel, qe.LEVEL_2), this._panelLevel2.set_x(.5 * (this._factory.width - this._panelLevel2.width)), this.addEntity(this._panelLevel2, null, !0, 200), this._panelLevel3 = new Mt(this._kernel, qe.LEVEL_3), this._panelLevel3.set_x(this._factory.width - this._panelLevel3.width - 15), this.addEntity(this._panelLevel3, null, !0, 200);
            var t = new Et(this._kernel, this._kernel.getConfig("gui.buttons.levels.level1"), 0, 0, null, Ys(this, this._pressLevel1)),
                s = this._panelLevel2.vo.isLocked ? null : new Et(this._kernel, this._kernel.getConfig("gui.buttons.levels.level2"), 0, 0, null, Ys(this, this._pressLevel2)),
                i = this._panelLevel3.vo.isLocked ? null : new Et(this._kernel, this._kernel.getConfig("gui.buttons.levels.level3"), 0, 0, null, Ys(this, this._pressLevel3));
            this._addButtons(null, i, t, s), this._addEasyTweez(this._panelLevel1, 1, !1), this._addEasyTweez(this._panelLevel2, 2, !1), this._addEasyTweez(this._panelLevel3, 3, !1), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, this._panelLevel2.vo.isLocked ? t : this._panelLevel3.vo.isLocked ? s : i)
        },
        _updater: function(e) {
            null == e && (e = 0), Wt.prototype._updater.call(this, e)
        },
        _outro: function(e) {
            var t = this;
            this._isOutroCalled || (this._defaultOutro(e), this._kernel.audio.start("CrowdScore", Ae.INTERFACE, 1, 0, .5), this.addEntity(new Bs(this._kernel, function(e) {
                t._kernel.audio.transform("MusicMenu", Ae.MUSIC, e)
            }, .5, 0, 0, 2e3)))
        },
        _pressLevel1: function() {
            this._session.cache.levelType = qe.LEVEL_1, this._pressContinue()
        },
        _pressLevel2: function() {
            this._session.cache.levelType = qe.LEVEL_2, this._pressContinue()
        },
        _pressLevel3: function() {
            this._session.cache.levelType = qe.LEVEL_3, this._pressContinue()
        },
        __class__: $t
    });
    var es = function(e, t, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Wt.call(this, e, t, s, i, n)
    };
    (t["cbchoc.scenes.Shop"] = es).__name__ = "cbchoc.scenes.Shop", es.__super__ = Wt, es.prototype = e(Wt.prototype, {
        _init: function() {
            var t = this;
            Wt.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ae.MUSIC, 0, 0, .15, 0, !0), this.addEntity(new Se(this._kernel, function() {
                t._kernel.audio.start("VoiceShop", Ae.INTERFACE, 1, 0, .85 * t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.shop.title")), this.addEntity(this._hero = new Tt(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-160), this.addEntity(new Bs(this._kernel, function(e) {
                t._hero.set_x(e)
            }, this._factory.width, this._hero.x, 500, 2e3, null, Ds.EASE_OUT, Ps.QUARTIC)), this._panelShop = new Ot(this._kernel, this._session.cache.unitType), this._panelShop.set_x(this._factory.width - this._panelShop.width - 15), this.addEntity(this._panelShop, null, !0, 1e3), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelShop.set_x(e)
            }, this._factory.width, this._panelShop.x, 1500, 1e3, null, Ds.EASE_OUT, Ps.QUARTIC));
            var e = new Et(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, Ys(this, this._pressContinue)),
                s = new Et(this._kernel, this._kernel.getConfig("gui.buttons.avatar"), 0, 0, null, Ys(this, this._pressAvatar)),
                i = new Et(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, Ys(this, this._pressReset));
            this._addButtons(null, e, s, 1 == this._panelShop.vo.getPercentageComplete() ? i : null), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, e)
        },
        _outro: function(e) {
            var t = this;
            this._isOutroCalled || (this._defaultOutro(e), this.addEntity(new Bs(this._kernel, function(e) {
                t._hero.set_x(e)
            }, this._hero.x, -this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ps.BACK())), this.addEntity(new Bs(this._kernel, function(e) {
                t._panelShop.set_x(e)
            }, this._panelShop.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ps.BACK())))
        },
        _pressReset: function() {
            this._kernel.log("button: reset: "), this._session.resetUnit(this._session.cache.unitType);
            var e = Ys(h = this._kernel.scenes, h.setScene),
                t = Me.MENU;
            this._outro(function() {
                e(t)
            })
        },
        _pressAvatar: function() {
            this._kernel.log("button: avatar: ");
            var e = Ys(h = this._kernel.scenes, h.setScene),
                t = Me.AVATAR;
            this._outro(function() {
                e(t)
            })
        },
        __class__: es
    }), g = function() {}, (t["haxe.IMap"] = g).__name__ = "haxe.IMap", g.__isInterface__ = !0;
    var ts = function(e, t, s) {
        Error.call(this, e), this.message = e, this.__previousException = t, this.__nativeException = null != s ? s : this
    };
    (t["haxe.Exception"] = ts).__name__ = "haxe.Exception", ts.caught = function(e) {
        return e instanceof ts ? e : e instanceof Error ? new ts(e.message, null, e) : new os(e, null, e)
    }, ts.thrown = function(e) {
        return e instanceof ts ? e.get_native() : e instanceof Error ? e : new os(e)
    }, ts.__super__ = Error, ts.prototype = e(Error.prototype, {
        unwrap: function() {
            return this.__nativeException
        },
        get_native: function() {
            return this.__nativeException
        },
        __class__: ts
    });
    var ss = function() {};
    (t["haxe.Log"] = ss).__name__ = "haxe.Log", ss.formatOutput = function(e, t) {
        var s = k.string(e);
        if (null == t) return s;
        var i = t.fileName + ":" + t.lineNumber;
        if (null != t.customParams)
            for (var n = 0, a = t.customParams; n < a.length;) {
                e = a[n];
                ++n, s += ", " + k.string(e)
            }
        return i + ": " + s
    }, ss.trace = function(e, t) {
        t = ss.formatOutput(e, t);
        "undefined" != typeof console && null != console.log && console.log(t)
    };
    var is = function() {};
    (t["haxe.Resource"] = is).__name__ = "haxe.Resource", is.getString = function(e) {
        for (var t = 0, s = is.content; t < s.length;) {
            var i = s[t];
            if (++t, i.name == e) return null != i.str ? i.str : cs.decode(i.data).toString()
        }
        return null
    };
    var ns = function() {
        this.buf = new E, this.cache = [], this.useCache = ns.USE_CACHE, this.useEnumIndex = ns.USE_ENUM_INDEX, this.shash = new ws, this.scount = 0
    };
    (t["haxe.Serializer"] = ns).__name__ = "haxe.Serializer", ns.run = function(e) {
        var t = new ns;
        return t.serialize(e), t.toString()
    }, ns.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(e) {
            var t = this.shash.h[e];
            if (null != t) return this.buf.b += "R", void(this.buf.b += null == t ? "null" : "" + t);
            this.shash.h[e] = this.scount++, this.buf.b += "y", e = encodeURIComponent(e), this.buf.b += k.string(e.length), this.buf.b += ":", this.buf.b += null == e ? "null" : "" + e
        },
        serializeRef: function(e) {
            for (var t = typeof e, s = 0, i = this.cache.length; s < i;) {
                var n = s++,
                    a = this.cache[n];
                if (typeof a == t && a == e) return this.buf.b += "r", this.buf.b += null == n ? "null" : "" + n, !0
            }
            return this.cache.push(e), !1
        },
        serializeFields: function(e) {
            for (var t = 0, s = C.fields(e); t < s.length;) {
                var i = s[t];
                ++t, this.serializeString(i), this.serialize(C.field(e, i))
            }
            this.buf.b += "g"
        },
        serialize: function(e) {
            switch ((S = U.typeof(e))._hx_index) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == (t = e)) return void(this.buf.b += "z");
                    this.buf.b += "i", this.buf.b += null == t ? "null" : "" + t;
                    break;
                case 2:
                    var t = e;
                    isNaN(t) ? this.buf.b += "k" : isFinite(t) ? (this.buf.b += "d", this.buf.b += null == t ? "null" : "" + t) : this.buf.b += t < 0 ? "m" : "p";
                    break;
                case 3:
                    this.buf.b += e ? "t" : "f";
                    break;
                case 4:
                    if (ks.__instanceof(e, qs)) {
                        var s = e.__name__;
                        this.buf.b += "A", this.serializeString(s)
                    } else if (ks.__instanceof(e, $s)) this.buf.b += "B", this.serializeString(e.__ename__);
                    else {
                        if (this.useCache && this.serializeRef(e)) return;
                        this.buf.b += "o", this.serializeFields(e)
                    }
                    break;
                case 5:
                    throw ts.thrown("Cannot serialize function");
                case 6:
                    var i = S.c;
                    if (i == String) return void this.serializeString(e);
                    if (this.useCache && this.serializeRef(e)) return;
                    switch (i) {
                        case Array:
                            var n = 0;
                            this.buf.b += "a";
                            for (var a = 0, _ = e.length; a < _;) null == e[u = a++] ? ++n : (0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n), n = 0), this.serialize(e[u]));
                            0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n)), this.buf.b += "h";
                            break;
                        case Date:
                            var r = e;
                            this.buf.b += "v", this.buf.b += k.string(r.getTime());
                            break;
                        case gs:
                            this.buf.b += "q";
                            for (var o = (t = e).keys(); o.hasNext();) {
                                var h = o.next();
                                this.buf.b += ":", this.buf.b += null == h ? "null" : "" + h, this.serialize(t.h[h])
                            }
                            this.buf.b += "h";
                            break;
                        case fs:
                            this.buf.b += "l";
                            for (var l = (t = e).h; null != l;) {
                                var c = l.item,
                                    l = l.next,
                                    u = c;
                                this.serialize(u)
                            }
                            this.buf.b += "h";
                            break;
                        case ms:
                            this.buf.b += "M";
                            for (o = (t = e).keys(); o.hasNext();) {
                                var h = o.next(),
                                    d = C.field(h, "__id__");
                                C.deleteField(h, "__id__"), this.serialize(h), h.__id__ = d, this.serialize(t.h[h.__id__])
                            }
                            this.buf.b += "h";
                            break;
                        case ws:
                            this.buf.b += "b";
                            for (var r = (t = e).h, p = Object.keys(r), g = p.length, f = 0; f < g;) {
                                o = p[f++];
                                this.serializeString(o), this.serialize(t.h[o])
                            }
                            this.buf.b += "h";
                            break;
                        case hs:
                            t = e;
                            this.buf.b += "s", this.buf.b += k.string(Math.ceil(8 * t.length / 6)), this.buf.b += ":";
                            var u = 0,
                                y = t.length - 2;
                            if (null == (m = ns.BASE64_CODES)) {
                                for (var m = new Array(ns.BASE64.length), a = 0, _ = ns.BASE64.length; a < _;) {
                                    var w = a++;
                                    m[w] = I.cca(ns.BASE64, w)
                                }
                                ns.BASE64_CODES = m
                            }
                            for (; u < y;) {
                                var x = t.b[u++],
                                    E = t.b[u++],
                                    v = t.b[u++];
                                this.buf.b += String.fromCodePoint(m[x >> 2]), this.buf.b += String.fromCodePoint(m[63 & (x << 4 | E >> 4)]), this.buf.b += String.fromCodePoint(m[63 & (E << 2 | v >> 6)]), this.buf.b += String.fromCodePoint(m[63 & v])
                            }
                            u == y ? (x = t.b[u++], E = t.b[u++], this.buf.b += String.fromCodePoint(m[x >> 2]), this.buf.b += String.fromCodePoint(m[63 & (x << 4 | E >> 4)]), this.buf.b += String.fromCodePoint(m[E << 2 & 63])) : u == 1 + y && (x = t.b[u++], this.buf.b += String.fromCodePoint(m[x >> 2]), this.buf.b += String.fromCodePoint(m[x << 4 & 63]));
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != e.hxSerialize ? (this.buf.b += "C", this.serializeString(i.__name__), this.useCache && this.cache.push(e), e.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(i.__name__), this.useCache && this.cache.push(e), this.serializeFields(e))
                    }
                    break;
                case 7:
                    s = S.e;
                    if (this.useCache) {
                        if (this.serializeRef(e)) return;
                        this.cache.pop()
                    }
                    this.buf.b += k.string(this.useEnumIndex ? "j" : "w"), this.serializeString(s.__ename__), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += k.string(e._hx_index)) : (s = e, this.serializeString(A[s.__enum__].__constructs__[s._hx_index]._hx_name)), this.buf.b += ":";
                    var b = U.enumParameters(e);
                    this.buf.b += k.string(b.length);
                    for (var S = 0; S < b.length;) {
                        var T = b[S];
                        ++S, this.serialize(T)
                    }
                    this.useCache && this.cache.push(e);
                    break;
                default:
                    throw ts.thrown("Cannot serialize " + k.string(e))
            }
        },
        __class__: ns
    };
    var as = function(e) {
        var t = this;
        this.id = setInterval(function() {
            t.run()
        }, e)
    };

    function _s() {}(t["haxe.Timer"] = as).__name__ = "haxe.Timer", as.delay = function(e, t) {
        var s = new as(t);
        return s.run = function() {
            s.stop(), e()
        }, s
    }, as.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: as
    }, (t["haxe._Unserializer.DefaultResolver"] = _s).__name__ = "haxe._Unserializer.DefaultResolver", _s.prototype = {
        resolveClass: function(e) {
            return t[e]
        },
        resolveEnum: function(e) {
            return A[e]
        },
        __class__: _s
    };
    var rs = function(e) {
        this.buf = e, this.length = this.buf.length, this.pos = 0, this.scache = [], this.cache = [];
        e = rs.DEFAULT_RESOLVER;
        null == e && (e = new _s, rs.DEFAULT_RESOLVER = e), this.resolver = e
    };
    (t["haxe.Unserializer"] = rs).__name__ = "haxe.Unserializer", rs.initCodes = function() {
        for (var e = [], t = 0, s = rs.BASE64.length; t < s;) {
            var i = t++;
            e[rs.BASE64.charCodeAt(i)] = i
        }
        return e
    }, rs.run = function(e) {
        return new rs(e).unserialize()
    }, rs.prototype = {
        readDigits: function() {
            for (var e = 0, t = !1, s = this.pos;;) {
                var i = this.buf.charCodeAt(this.pos);
                if (i != i) break;
                if (45 != i) {
                    if (i < 48 || 57 < i) break;
                    e = 10 * e + (i - 48), this.pos++
                } else {
                    if (this.pos != s) break;
                    t = !0, this.pos++
                }
            }
            return t && (e *= -1), e
        },
        readFloat: function() {
            for (var e = this.pos;;) {
                var t = this.buf.charCodeAt(this.pos);
                if (t != t) break;
                if (!(43 <= t && t < 58 || 101 == t || 69 == t)) break;
                this.pos++
            }
            return parseFloat(I.substr(this.buf, e, this.pos - e))
        },
        unserializeObject: function(e) {
            for (;;) {
                if (this.pos >= this.length) throw ts.thrown("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var t = this.unserialize();
                if ("string" != typeof t) throw ts.thrown("Invalid object key");
                var s = this.unserialize();
                e[t] = s
            }
            this.pos++
        },
        unserializeEnum: function(e, t) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw ts.thrown("Invalid enum format");
            var s = this.readDigits();
            if (0 == s) return U.createEnum(e, t);
            for (var i = []; 0 < s--;) i.push(this.unserialize());
            return U.createEnum(e, t, i)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var e = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(e))) throw ts.thrown("Class not found " + e);
                    return u;
                case 66:
                    e = this.unserialize();
                    if (null == (d = this.resolver.resolveEnum(e))) throw ts.thrown("Enum not found " + e);
                    return d;
                case 67:
                    e = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(e))) throw ts.thrown("Class not found " + e);
                    var t = Object.create(u.prototype);
                    if (this.cache.push(t), t.hxUnserialize(this), 103 != this.buf.charCodeAt(this.pos++)) throw ts.thrown("Invalid custom data");
                    return t;
                case 77:
                    var s = new ms;
                    this.cache.push(s);
                    for (var i = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize();
                        s.set(n, this.unserialize())
                    }
                    return this.pos++, s;
                case 82:
                    if ((y = this.readDigits()) < 0 || y >= this.scache.length) throw ts.thrown("Invalid string reference");
                    return this.scache[y];
                case 97:
                    var i = this.buf,
                        a = [];
                    for (this.cache.push(a);;) {
                        if (104 == (g = this.buf.charCodeAt(this.pos))) {
                            this.pos++;
                            break
                        }
                        117 == g ? (this.pos++, y = this.readDigits(), a[a.length + y - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 98:
                    s = new ws;
                    this.cache.push(s);
                    for (i = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize(),
                            _ = this.unserialize();
                        s.h[n] = _
                    }
                    return this.pos++, s;
                case 99:
                    e = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(e))) throw ts.thrown("Class not found " + e);
                    t = Object.create(u.prototype);
                    return this.cache.push(t), this.unserializeObject(t), t;
                case 100:
                    return this.readFloat();
                case 102:
                    return !1;
                case 105:
                    return this.readDigits();
                case 106:
                    e = this.unserialize();
                    if (null == (k = this.resolver.resolveEnum(e))) throw ts.thrown("Enum not found " + e);
                    this.pos++;
                    for (var r = this.readDigits(), o = k.__constructs__, h = new Array(o.length), l = 0, c = o.length; l < c;) h[f = l++] = o[f]._hx_name;
                    var u = h[r];
                    if (null == u) throw ts.thrown("Unknown enum index " + e + "@" + r);
                    var d = this.unserializeEnum(k, u);
                    return this.cache.push(d), d;
                case 107:
                    return NaN;
                case 108:
                    var p = new fs;
                    this.cache.push(p);
                    for (i = this.buf; 104 != this.buf.charCodeAt(this.pos);) p.add(this.unserialize());
                    return this.pos++, p;
                case 109:
                    return -1 / 0;
                case 110:
                    return null;
                case 111:
                    t = {};
                    return this.cache.push(t), this.unserializeObject(t), t;
                case 112:
                    return 1 / 0;
                case 113:
                    s = new gs;
                    this.cache.push(s);
                    for (var i = this.buf, g = this.buf.charCodeAt(this.pos++); 58 == g;) {
                        var f = this.readDigits(),
                            _ = this.unserialize();
                        s.h[f] = _, g = this.buf.charCodeAt(this.pos++)
                    }
                    if (104 != g) throw ts.thrown("Invalid IntMap format");
                    return s;
                case 114:
                    var y;
                    if ((y = this.readDigits()) < 0 || y >= this.cache.length) throw ts.thrown("Invalid reference");
                    return this.cache[y];
                case 115:
                    var m = this.readDigits(),
                        i = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < m) throw ts.thrown("Invalid bytes length");
                    var w = rs.CODES;
                    null == w && (w = rs.initCodes(), rs.CODES = w);
                    for (var t = 3 & m, x = (f = this.pos) + (m - t), E = new hs(new ArrayBuffer(3 * (m >> 2) + (2 <= t ? t - 1 : 0))), v = 0; f < x;) {
                        var b = w[i.charCodeAt(f++)],
                            S = w[i.charCodeAt(f++)];
                        E.b[v++] = b << 2 | S >> 4;
                        var T = w[i.charCodeAt(f++)];
                        E.b[v++] = S << 4 | T >> 2;
                        var A = w[i.charCodeAt(f++)];
                        E.b[v++] = T << 6 | A
                    }
                    return 2 <= t && (b = w[i.charCodeAt(f++)], S = w[i.charCodeAt(f++)], E.b[v++] = b << 2 | S >> 4, 3 == t && (T = w[i.charCodeAt(f++)], E.b[v++] = S << 4 | T >> 2)), this.pos += m, this.cache.push(E), E;
                case 116:
                    return !0;
                case 118:
                    var C;
                    return 48 <= this.buf.charCodeAt(this.pos) && this.buf.charCodeAt(this.pos) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 1) && this.buf.charCodeAt(this.pos + 1) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 2) && this.buf.charCodeAt(this.pos + 2) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 3) && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4) ? (C = I.strDate(I.substr(this.buf, this.pos, 19)), this.pos += 19) : C = new Date(this.readFloat()), this.cache.push(C), C;
                case 119:
                    var k, e = this.unserialize();
                    if (null == (k = this.resolver.resolveEnum(e))) throw ts.thrown("Enum not found " + e);
                    d = this.unserializeEnum(k, this.unserialize());
                    return this.cache.push(d), d;
                case 120:
                    throw ts.thrown(this.unserialize());
                case 121:
                    m = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < m) throw ts.thrown("Invalid string length");
                    n = I.substr(this.buf, this.pos, m);
                    return this.pos += m, n = decodeURIComponent(n.split("+").join(" ")), this.scache.push(n), n;
                case 122:
                    return 0
            }
            throw this.pos--, ts.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
        },
        __class__: rs
    };
    var os = function(e, t, s) {
        ts.call(this, String(e), t, s), this.value = e
    };
    (t["haxe.ValueException"] = os).__name__ = "haxe.ValueException", os.__super__ = ts, os.prototype = e(ts.prototype, {
        unwrap: function() {
            return this.value
        },
        __class__: os
    });
    var hs = function(e) {
        this.length = e.byteLength, this.b = new Uint8Array(e), (this.b.bufferValue = e).hxBytes = this, e.bytes = this.b
    };
    (t["haxe.io.Bytes"] = hs).__name__ = "haxe.io.Bytes", hs.ofString = function(e, t) {
        if (t == ls.RawNative) {
            for (var s = new Uint8Array(e.length << 1), i = 0, n = e.length; i < n;) {
                var a = i++,
                    _ = e.charCodeAt(a);
                s[a << 1] = 255 & _, s[a << 1 | 1] = _ >> 8
            }
            return new hs(s.buffer)
        }
        for (var r = [], a = 0; a < e.length;) 55296 <= (_ = e.charCodeAt(a++)) && _ <= 56319 && (_ = _ - 55232 << 10 | 1023 & e.charCodeAt(a++)), _ <= 127 ? r.push(_) : (_ <= 2047 ? r.push(192 | _ >> 6) : (_ <= 65535 ? r.push(224 | _ >> 12) : (r.push(240 | _ >> 18), r.push(128 | _ >> 12 & 63)), r.push(128 | _ >> 6 & 63)), r.push(128 | 63 & _));
        return new hs(new Uint8Array(r).buffer)
    }, hs.ofData = function(e) {
        var t = e.hxBytes;
        return null != t ? t : new hs(e)
    }, hs.prototype = {
        getString: function(e, t, s) {
            if (e < 0 || t < 0 || e + t > this.length) throw ts.thrown(bs.OutsideBounds);
            null == s && (s = ls.UTF8);
            var i = "",
                n = this.b,
                a = e,
                _ = e + t;
            switch (s._hx_index) {
                case 0:
                    for (var r, o; a < _;)
                        if ((h = n[a++]) < 128) {
                            if (0 == h) break;
                            i += String.fromCodePoint(h)
                        } else h < 224 ? (r = (63 & h) << 6 | 127 & n[a++], i += String.fromCodePoint(r)) : h < 240 ? (o = (31 & h) << 12 | (127 & n[a++]) << 6 | 127 & n[a++], i += String.fromCodePoint(o)) : (o = (15 & h) << 18 | (127 & n[a++]) << 12 | (127 & n[a++]) << 6 | 127 & n[a++], i += String.fromCodePoint(o));
                    break;
                case 1:
                    for (; a < _;) {
                        var h = n[a++] | n[a++] << 8;
                        i += String.fromCodePoint(h)
                    }
            }
            return i
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: hs
    };
    var ls = A["haxe.io.Encoding"] = {
        __ename__: "haxe.io.Encoding",
        __constructs__: null,
        UTF8: {
            _hx_name: "UTF8",
            _hx_index: 0,
            __enum__: "haxe.io.Encoding",
            toString: s
        },
        RawNative: {
            _hx_name: "RawNative",
            _hx_index: 1,
            __enum__: "haxe.io.Encoding",
            toString: s
        }
    };
    ls.__constructs__ = [ls.UTF8, ls.RawNative];
    var cs = function() {};
    (t["haxe.crypto.Base64"] = cs).__name__ = "haxe.crypto.Base64", cs.decode = function(e, t) {
        if (null == t && (t = !0), t)
            for (; 61 == I.cca(e, e.length - 1);) e = I.substr(e, 0, -1);
        return new us(cs.BYTES).decodeBytes(hs.ofString(e))
    };
    var us = function(e) {
        for (var t = e.length, s = 1; 1 << s < t;) ++s;
        if (8 < s || t != 1 << s) throw ts.thrown("BaseCode : base length must be a power of two.");
        this.base = e, this.nbits = s
    };
    (t["haxe.crypto.BaseCode"] = us).__name__ = "haxe.crypto.BaseCode", us.prototype = {
        initTable: function() {
            for (var e = [], t = 0; t < 256;) e[i = t++] = -1;
            for (var t = 0, s = this.base.length; t < s;) {
                var i = t++;
                e[this.base.b[i]] = i
            }
            this.tbl = e
        },
        decodeBytes: function(e) {
            var t = this.nbits;
            this.base;
            null == this.tbl && this.initTable();
            for (var s = this.tbl, i = e.length * t >> 3, n = new hs(new ArrayBuffer(i)), a = 0, _ = 0, r = 0, o = 0; o < i;) {
                for (; _ < 8;) {
                    _ += t, a <<= t;
                    var h = s[e.b[r++]];
                    if (-1 == h) throw ts.thrown("BaseCode : invalid encoded char");
                    a |= h
                }
                _ -= 8, n.b[o++] = a >> _ & 255
            }
            return n
        },
        __class__: us
    };
    var ds = function(e, t) {
        this.elt = e, this.next = t
    };
    (t["haxe.ds.GenericCell"] = ds).__name__ = "haxe.ds.GenericCell", ds.prototype = {
        __class__: ds
    };
    var ps = function() {};
    (t["haxe.ds.GenericStack"] = ps).__name__ = "haxe.ds.GenericStack", ps.prototype = {
        remove: function(e) {
            for (var t = null, s = this.head; null != s;) {
                if (s.elt == e) {
                    null == t ? this.head = s.next : t.next = s.next;
                    break
                }
                s = (t = s).next
            }
            return null != s
        },
        iterator: function() {
            var t = this.head;
            return {
                hasNext: function() {
                    return null != t
                },
                next: function() {
                    var e = t;
                    return t = e.next, e.elt
                }
            }
        },
        __class__: ps
    };
    var gs = function() {
        this.h = {}
    };
    (t["haxe.ds.IntMap"] = gs).__name__ = "haxe.ds.IntMap", gs.__interfaces__ = [g], gs.prototype = {
        keys: function() {
            var e, t = [];
            for (e in this.h) this.h.hasOwnProperty(e) && t.push(+e);
            return new Ss(t)
        },
        __class__: gs
    };
    var fs = function() {
        this.length = 0
    };
    (t["haxe.ds.List"] = fs).__name__ = "haxe.ds.List", fs.prototype = {
        add: function(e) {
            e = new ys(e, null);
            null == this.h ? this.h = e : this.q.next = e, this.q = e, this.length++
        },
        push: function(e) {
            e = new ys(e, this.h);
            this.h = e, null == this.q && (this.q = e), this.length++
        },
        remove: function(e) {
            for (var t = null, s = this.h; null != s;) {
                if (s.item == e) return null == t ? this.h = s.next : t.next = s.next, this.q == s && (this.q = t), this.length--, !0;
                s = (t = s).next
            }
            return !1
        },
        __class__: fs
    };
    var ys = function(e, t) {
        this.item = e, this.next = t
    };
    (t["haxe.ds._List.ListNode"] = ys).__name__ = "haxe.ds._List.ListNode", ys.prototype = {
        __class__: ys
    };
    var ms = function() {
        this.h = {
            __keys__: {}
        }
    };
    (t["haxe.ds.ObjectMap"] = ms).__name__ = "haxe.ds.ObjectMap", ms.__interfaces__ = [g], ms.prototype = {
        set: function(e, t) {
            var s = e.__id__;
            null == s && (s = e.__id__ = u.$haxeUID++), this.h[s] = t, this.h.__keys__[s] = e
        },
        keys: function() {
            var e, t = [];
            for (e in this.h.__keys__) this.h.hasOwnProperty(e) && t.push(this.h.__keys__[e]);
            return new Ss(t)
        },
        __class__: ms
    };
    var ws = function() {
        this.h = Object.create(null)
    };
    (t["haxe.ds.StringMap"] = ws).__name__ = "haxe.ds.StringMap", ws.__interfaces__ = [g], ws.prototype = {
        __class__: ws
    };
    var xs = function(e) {
        this.h = e, this.keys = Object.keys(e), this.length = this.keys.length, this.current = 0
    };

    function Es(e) {
        this.url = e, this.headers = [], this.params = [], this.emptyOnData = Ys(this, this.onData)
    }(t["haxe.ds._StringMap.StringMapKeyIterator"] = xs).__name__ = "haxe.ds._StringMap.StringMapKeyIterator", xs.prototype = {
        hasNext: function() {
            return this.current < this.length
        },
        next: function() {
            return this.keys[this.current++]
        },
        __class__: xs
    }, (t["haxe.http.HttpBase"] = Es).__name__ = "haxe.http.HttpBase", Es.prototype = {
        onData: function(e) {},
        onBytes: function(e) {},
        onError: function(e) {},
        onStatus: function(e) {},
        hasOnData: function() {
            return !C.compareMethods(Ys(this, this.onData), this.emptyOnData)
        },
        success: function(e) {
            this.responseBytes = e, this.responseAsString = null, this.hasOnData() && this.onData(this.get_responseData()), this.onBytes(this.responseBytes)
        },
        get_responseData: function() {
            return null == this.responseAsString && null != this.responseBytes && (this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, ls.UTF8)), this.responseAsString
        },
        __class__: Es
    };
    var vs = function(e) {
        this.async = !0, this.withCredentials = !1, Es.call(this, e)
    };
    (t["haxe.http.HttpJs"] = vs).__name__ = "haxe.http.HttpJs", vs.__super__ = Es, vs.prototype = e(Es.prototype, {
        request: function(e) {
            var n = this;
            this.responseAsString = null, this.responseBytes = null;

            function t(e) {
                if (4 == a.readyState) {
                    var t, s;
                    try {
                        t = a.status
                    } catch (e) {
                        t = null
                    }
                    if (0 == t && Is.get_supported() && null != u.location && (s = u.location.protocol.toLowerCase(), new d("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(s) && (t = null != a.response ? 200 : 404)), null == t && (t = null), null != t && n.onStatus(t), null != t && 200 <= t && t < 400) n.req = null, n.success(hs.ofData(a.response));
                    else if (null == t || 0 == t && null == a.response) n.req = null, n.onError("Failed to connect or resolve host");
                    else if (null == t) {
                        var i = (n.req = null) != a.response ? hs.ofData(a.response) : null;
                        n.responseBytes = i, n.onError("Http Error #" + a.status)
                    } else switch (t) {
                        case 12007:
                            n.req = null, n.onError("Unknown host");
                            break;
                        case 12029:
                            n.req = null, n.onError("Failed to connect to host");
                            break;
                        default:
                            i = (n.req = null) != a.response ? hs.ofData(a.response) : null;
                            n.responseBytes = i, n.onError("Http Error #" + a.status)
                    }
                }
            }
            var a = this.req = Is.createXMLHttpRequest();
            this.async && (a.onreadystatechange = t);
            var s, i, _ = this.postData,
                r = this.postBytes;
            if (null != (s = null == _ ? null == r ? null : new Blob([r.b.bufferValue]) : null == r ? _ : null)) e = !0;
            else
                for (_ = 0, r = this.params; _ < r.length;) {
                    var o = r[_];
                    ++_, s = null == s ? "" : (null == s ? "null" : k.string(s)) + "&";
                    var h = o.name,
                        h = (null == s ? "null" : k.string(s)) + encodeURIComponent(h) + "=",
                        o = o.value;
                    s = h + encodeURIComponent(o)
                }
            try {
                e ? a.open("POST", this.url, this.async) : null != s ? (i = this.url.split("?").length <= 1, a.open("GET", this.url + (i ? "?" : "&") + (null == s ? "null" : k.string(s)), this.async), s = null) : a.open("GET", this.url, this.async), a.responseType = "arraybuffer"
            } catch (_) {
                var l = ts.caught(_).unwrap();
                return this.req = null, void this.onError(l.toString())
            }
            a.withCredentials = this.withCredentials, !p.exists(this.headers, function(e) {
                return "Content-Type" == e.name
            }) && e && null == this.postData && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (_ = 0, r = this.headers; _ < r.length;) {
                var c = r[_];
                ++_, a.setRequestHeader(c.name, c.value)
            }
            a.send(s), this.async || t()
        },
        __class__: vs
    });
    var bs = A["haxe.io.Error"] = {
        __ename__: "haxe.io.Error",
        __constructs__: null,
        Blocked: {
            _hx_name: "Blocked",
            _hx_index: 0,
            __enum__: "haxe.io.Error",
            toString: s
        },
        Overflow: {
            _hx_name: "Overflow",
            _hx_index: 1,
            __enum__: "haxe.io.Error",
            toString: s
        },
        OutsideBounds: {
            _hx_name: "OutsideBounds",
            _hx_index: 2,
            __enum__: "haxe.io.Error",
            toString: s
        },
        Custom: ((h = function(e) {
            return {
                _hx_index: 3,
                e: e,
                __enum__: "haxe.io.Error",
                toString: s
            }
        })._hx_name = "Custom", h.__params__ = ["e"], h)
    };
    bs.__constructs__ = [bs.Blocked, bs.Overflow, bs.OutsideBounds, bs.Custom];
    var Ss = function(e) {
        this.current = 0, this.array = e
    };

    function Ts(e, t, s) {
        this.xml = t, this.message = e, this.position = s, this.lineNumber = 1;
        for (var i = this.positionAtLine = 0, n = s; i < n;) {
            var a = i++,
                a = t.charCodeAt(a);
            10 == a ? (this.lineNumber++, this.positionAtLine = 0) : 13 != a && this.positionAtLine++
        }
    }(t["haxe.iterators.ArrayIterator"] = Ss).__name__ = "haxe.iterators.ArrayIterator", Ss.prototype = {
        hasNext: function() {
            return this.current < this.array.length
        },
        next: function() {
            return this.array[this.current++]
        },
        __class__: Ss
    }, (t["haxe.xml.XmlParserException"] = Ts).__name__ = "haxe.xml.XmlParserException", Ts.prototype = {
        toString: function() {
            return ks.getClass(this).__name__ + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
        },
        __class__: Ts
    };
    var As = function() {};
    (t["haxe.xml.Parser"] = As).__name__ = "haxe.xml.Parser", As.parse = function(e, t) {
        null == t && (t = !1);
        var s = v.createDocument();
        return As.doParse(e, t, 0, s), s
    }, As.doParse = function(e, t, s, i) {
        null == s && (s = 0);
        for (var n = null, a = 1, _ = 1, r = null, o = 0, h = 0, l = 0, c = new E, u = 1, d = -1; s < e.length;) {
            var p, g, f = e.charCodeAt(s);
            switch (a) {
                case 0:
                    switch (f) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            break;
                        default:
                            a = _;
                            continue
                    }
                    break;
                case 1:
                    if (60 != f) {
                        o = s, a = 13;
                        continue
                    }
                    a = 0, _ = 2;
                    break;
                case 2:
                    switch (f) {
                        case 33:
                            if (91 == e.charCodeAt(s + 1)) {
                                if ("CDATA[" != I.substr(e, s += 2, 6).toUpperCase()) throw ts.thrown(new Ts("Expected <![CDATA[", e, s));
                                a = 17, o = (s += 5) + 1
                            } else if (68 == e.charCodeAt(s + 1) || 100 == e.charCodeAt(s + 1)) {
                                if ("OCTYPE" != I.substr(e, s + 2, 6).toUpperCase()) throw ts.thrown(new Ts("Expected <!DOCTYPE", e, s));
                                a = 16, o = (s += 8) + 1
                            } else {
                                if (45 != e.charCodeAt(s + 1) || 45 != e.charCodeAt(s + 2)) throw ts.thrown(new Ts("Expected \x3c!--", e, s));
                                a = 15, o = (s += 2) + 1
                            }
                            break;
                        case 47:
                            if (null == i) throw ts.thrown(new Ts("Expected node name", e, s));
                            o = s + 1, a = 0, _ = 10;
                            break;
                        case 63:
                            a = 14, o = s;
                            break;
                        default:
                            a = 3, o = s;
                            continue
                    }
                    break;
                case 3:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (s == o) throw ts.thrown(new Ts("Expected node name", e, s));
                    n = v.createElement(I.substr(e, o, s - o)), i.addChild(n), ++h, a = 0, _ = 4;
                    continue;
                case 4:
                    switch (f) {
                        case 47:
                            a = 11;
                            break;
                        case 62:
                            a = 9;
                            break;
                        default:
                            a = 5, o = s;
                            continue
                    }
                    break;
                case 5:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (o == s) throw ts.thrown(new Ts("Expected attribute name", e, s));
                    r = I.substr(e, o, s - o);
                    if (n.exists(r)) throw ts.thrown(new Ts("Duplicate attribute [" + r + "]", e, s));
                    a = 0, _ = 6;
                    continue;
                case 6:
                    if (61 != f) throw ts.thrown(new Ts("Expected =", e, s));
                    a = 0, _ = 7;
                    break;
                case 7:
                    switch (f) {
                        case 34:
                        case 39:
                            c = new E, a = 8, o = s + 1, d = f;
                            break;
                        default:
                            throw ts.thrown(new Ts('Expected "', e, s))
                    }
                    break;
                case 8:
                    switch (f) {
                        case 38:
                            var y = s - o;
                            c.b += I.substr(e, o, null == y ? null : y), a = 18, u = 8, o = s + 1;
                            break;
                        case 60:
                        case 62:
                            if (t) throw ts.thrown(new Ts("Invalid unescaped " + String.fromCodePoint(f) + " in attribute value", e, s));
                            f == d && (p = s - o, c.b += I.substr(e, o, null == p ? null : p), p = c.b, c = new E, n.set(r, p), a = 0, _ = 4);
                            break;
                        default:
                            f == d && (p = s - o, c.b += I.substr(e, o, null == p ? null : p), p = c.b, c = new E, n.set(r, p), a = 0, _ = 4)
                    }
                    break;
                case 9:
                    o = s = As.doParse(e, t, s, n), a = 1;
                    break;
                case 10:
                    if (97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) break;
                    if (o == s) throw ts.thrown(new Ts("Expected node name", e, s));
                    var m = I.substr(e, o, s - o);
                    if (null == i || 0 != i.nodeType) throw ts.thrown(new Ts("Unexpected </" + m + ">, tag is not open", e, s));
                    if (i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    if (m != i.nodeName) {
                        if (i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        throw ts.thrown(new Ts("Expected </" + i.nodeName + ">", e, s))
                    }
                    a = 0, _ = 12;
                    continue;
                case 11:
                    if (62 != f) throw ts.thrown(new Ts("Expected >", e, s));
                    a = 1;
                    break;
                case 12:
                    if (62 == f) return 0 == h && i.addChild(v.createPCData("")), s;
                    throw ts.thrown(new Ts("Expected >", e, s));
                case 13:
                    60 == f ? (m = s - o, c.b += I.substr(e, o, null == m ? null : m), m = v.createPCData(c.b), c = new E, i.addChild(m), ++h, a = 0, _ = 2) : 38 == f && (g = s - o, c.b += I.substr(e, o, null == g ? null : g), a = 18, u = 13, o = s + 1);
                    break;
                case 14:
                    63 == f && 62 == e.charCodeAt(s + 1) && (g = I.substr(e, o + 1, ++s - o - 2), i.addChild(v.createProcessingInstruction(g)), ++h, a = 1);
                    break;
                case 15:
                    45 == f && 45 == e.charCodeAt(s + 1) && 62 == e.charCodeAt(s + 2) && (i.addChild(v.createComment(I.substr(e, o, s - o))), ++h, s += 2, a = 1);
                    break;
                case 16:
                    91 == f ? ++l : 93 == f ? --l : 62 == f && 0 == l && (i.addChild(v.createDocType(I.substr(e, o, s - o))), ++h, a = 1);
                    break;
                case 17:
                    93 == f && 93 == e.charCodeAt(s + 1) && 62 == e.charCodeAt(s + 2) && (x = v.createCData(I.substr(e, o, s - o)), i.addChild(x), ++h, s += 2, a = 1);
                    break;
                case 18:
                    if (59 == f) {
                        var w = I.substr(e, o, s - o);
                        if (35 == w.charCodeAt(0)) {
                            var x = 120 == w.charCodeAt(1) ? k.parseInt("0" + I.substr(w, 1, w.length - 1)) : k.parseInt(I.substr(w, 1, w.length - 1));
                            c.b += String.fromCodePoint(x)
                        } else if (Object.prototype.hasOwnProperty.call(As.escapes.h, w)) c.b += k.string(As.escapes.h[w]);
                        else {
                            if (t) throw ts.thrown(new Ts("Undefined entity: " + w, e, s));
                            c.b += k.string("&" + w + ";")
                        }
                        o = s + 1, a = u
                    } else if (!(97 <= f && f <= 122 || 65 <= f && f <= 90 || 48 <= f && f <= 57 || 58 == f || 46 == f || 95 == f || 45 == f) && 35 != f) {
                        if (t) throw ts.thrown(new Ts("Invalid character in entity: " + String.fromCodePoint(f), e, s));
                        c.b += String.fromCodePoint(38);
                        w = s - o;
                        c.b += I.substr(e, o, null == w ? null : w), o = --s + 1, a = u
                    }
            }++s
        }
        if (1 == a && (o = s, a = 13), 13 == a) {
            if (0 != i.nodeType) return s == o && 0 != h || (y = s - o, c.b += I.substr(e, o, null == y ? null : y), i.addChild(v.createPCData(c.b)), ++h), s;
            if (i.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
            throw ts.thrown(new Ts("Unclosed node <" + i.nodeName + ">", e, s))
        }
        if (t || 18 != a || 13 != u) throw ts.thrown(new Ts("Unexpected end", e, s));
        c.b += String.fromCodePoint(38);
        y = s - o;
        return c.b += I.substr(e, o, null == y ? null : y), i.addChild(v.createPCData(c.b)), ++h, s
    };
    var Cs = function(e) {
        this.output = new E, this.pretty = e
    };
    (t["haxe.xml.Printer"] = Cs).__name__ = "haxe.xml.Printer", Cs.print = function(e, t) {
        null == t && (t = !1);
        t = new Cs(t);
        return t.writeNode(e, ""), t.output.b
    }, Cs.prototype = {
        writeNode: function(e, t) {
            switch (e.nodeType) {
                case 0:
                    if (this.output.b += k.string(t + "<"), e.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    this.output.b += k.string(e.nodeName);
                    for (var s = e.attributes(); s.hasNext();) {
                        var i = s.next();
                        this.output.b += k.string(" " + i + '="');
                        var n = l.htmlEscape(e.get(i), !0);
                        this.output.b += k.string(n), this.output.b += '"'
                    }
                    if (this.hasChildren(e)) {
                        if (this.output.b += ">", this.pretty && (this.output.b += "\n"), e.nodeType != v.Document && e.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                        for (var a = 0, _ = e.children; a < _.length;) {
                            var r = _[a++];
                            this.writeNode(r, this.pretty ? t + "\t" : t)
                        }
                        if (this.output.b += k.string(t + "</"), e.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                        this.output.b += k.string(e.nodeName), this.output.b += ">", this.pretty && (this.output.b += "\n")
                    } else this.output.b += "/>", this.pretty && (this.output.b += "\n");
                    break;
                case 1:
                    if (e.nodeType == v.Document || e.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    var o = e.nodeValue;
                    0 != o.length && (n = t + l.htmlEscape(o), this.output.b += k.string(n), this.pretty && (this.output.b += "\n"));
                    break;
                case 2:
                    if (this.output.b += k.string(t + "<![CDATA["), e.nodeType == v.Document || e.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    this.output.b += k.string(e.nodeValue), this.output.b += "]]>", this.pretty && (this.output.b += "\n");
                    break;
                case 3:
                    if (e.nodeType == v.Document || e.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    var h = e.nodeValue,
                        o = new RegExp("[\n\r\t]+", "g".split("u").join(""));
                    h = "\x3c!--" + (h = h.replace(o, "")) + "--\x3e", this.output.b += null == t ? "null" : "" + t;
                    n = l.trim(h);
                    this.output.b += k.string(n), this.pretty && (this.output.b += "\n");
                    break;
                case 4:
                    if (e.nodeType == v.Document || e.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    this.output.b += k.string("<!DOCTYPE " + e.nodeValue + ">"), this.pretty && (this.output.b += "\n");
                    break;
                case 5:
                    if (e.nodeType == v.Document || e.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    this.output.b += k.string("<?" + e.nodeValue + "?>"), this.pretty && (this.output.b += "\n");
                    break;
                case 6:
                    if (e.nodeType != v.Document && e.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
                    for (a = 0, _ = e.children; a < _.length;) {
                        r = _[a++];
                        this.writeNode(r, t)
                    }
            }
        },
        hasChildren: function(e) {
            if (e.nodeType != v.Document && e.nodeType != v.Element) throw ts.thrown("Bad node type, expected Element or Document but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
            for (var t = 0, s = e.children; t < s.length;) {
                var i = s[t++];
                switch (i.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (i.nodeType == v.Document || i.nodeType == v.Element) throw ts.thrown("Bad node type, unexpected " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        if (0 != l.ltrim(i.nodeValue).length) return !0
                }
            }
            return !1
        },
        __class__: Cs
    };
    var ks = function() {};
    (t["js.Boot"] = ks).__name__ = "js.Boot", ks.getClass = function(e) {
        if (null == e) return null;
        if (e instanceof Array) return Array;
        var t = e.__class__;
        if (null != t) return t;
        e = ks.__nativeClassName(e);
        return null != e ? ks.__resolveNativeClass(e) : null
    }, ks.__string_rec = function(n, a) {
        if (null == n) return "null";
        if (5 <= a.length) return "<...>";
        var e, t = typeof n;
        switch ("function" == t && (n.__name__ || n.__ename__) && (t = "object"), t) {
            case "function":
                return "<function>";
            case "object":
                if (n.__enum__) {
                    var _ = A[n.__enum__].__constructs__[n._hx_index],
                        s = _._hx_name;
                    return _.__params__ ? (a += "\t", s + "(" + function() {
                        for (var e = [], t = 0, s = _.__params__; t < s.length;) {
                            var i = s[t];
                            t += 1, e.push(ks.__string_rec(n[i], a))
                        }
                        return e
                    }().join(",") + ")") : s
                }
                if (n instanceof Array) {
                    var i = "[";
                    a += "\t";
                    for (var r = 0, o = n.length; r < o;) {
                        var h = r++;
                        i += (0 < h ? "," : "") + ks.__string_rec(n[h], a)
                    }
                    return i += "]"
                }
                try {
                    e = n.toString
                } catch (r) {
                    return "???"
                }
                if (null != e && e != Object.toString && "function" == typeof e) {
                    s = n.toString();
                    if ("[object Object]" != s) return s
                }
                i = "{\n";
                a += "\t";
                var l = null != n.hasOwnProperty,
                    c = null;
                for (c in n) l && !n.hasOwnProperty(c) || "prototype" != c && "__class__" != c && "__super__" != c && "__interfaces__" != c && "__properties__" != c && (2 != i.length && (i += ", \n"), i += a + c + " : " + ks.__string_rec(n[c], a));
                return i += "\n" + (a = a.substring(1)) + "}";
            case "string":
                return n;
            default:
                return String(n)
        }
    }, ks.__interfLoop = function(e, t) {
        if (null == e) return !1;
        if (e == t) return !0;
        var s = e.__interfaces__;
        if (null != s)
            for (var i = 0, n = s.length; i < n;) {
                var a = s[i++];
                if (a == t || ks.__interfLoop(a, t)) return !0
            }
        return ks.__interfLoop(e.__super__, t)
    }, ks.__instanceof = function(e, t) {
        if (null == t) return !1;
        switch (t) {
            case Array:
                return e instanceof Array;
            case Zs:
                return "boolean" == typeof e;
            case Qs:
                return null != e;
            case Js:
                return "number" == typeof e;
            case Xs:
                return "number" == typeof e && (0 | e) === e;
            case String:
                return "string" == typeof e;
            default:
                if (null == e) return !1;
                if ("function" == typeof t) {
                    if (ks.__downcastCheck(e, t)) return !0
                } else if ("object" == typeof t && ks.__isNativeObj(t) && e instanceof t) return !0;
                return t == qs && null != e.__name__ ? !0 : t == $s && null != e.__ename__ || null != e.__enum__ && A[e.__enum__] == t
        }
    }, ks.__downcastCheck = function(e, t) {
        return e instanceof t || !!t.__isInterface__ && ks.__interfLoop(ks.getClass(e), t)
    }, ks.__implements = function(e, t) {
        return ks.__interfLoop(ks.getClass(e), t)
    }, ks.__cast = function(e, t) {
        if (null == e || ks.__instanceof(e, t)) return e;
        throw ts.thrown("Cannot cast " + k.string(e) + " to " + k.string(t))
    }, ks.__nativeClassName = function(e) {
        e = ks.__toStr.call(e).slice(8, -1);
        return "Object" == e || "Function" == e || "Math" == e || "JSON" == e ? null : e
    }, ks.__isNativeObj = function(e) {
        return null != ks.__nativeClassName(e)
    }, ks.__resolveNativeClass = function(e) {
        return u[e]
    };
    var Is = function() {};
    (t["js.Browser"] = Is).__name__ = "js.Browser", Is.get_supported = function() {
        return "undefined" != typeof window && void 0 !== window.location && "string" == typeof window.location.protocol
    }, Is.getLocalStorage = function() {
        try {
            var e, t = window.localStorage;
            return t.getItem(""), 0 == t.length && (e = "_hx_" + Math.random(), t.setItem(e, e), t.removeItem(e)), t
        } catch (e) {
            return null
        }
    }, Is.getSessionStorage = function() {
        try {
            var e, t = window.sessionStorage;
            return t.getItem(""), 0 == t.length && (e = "_hx_" + Math.random(), t.setItem(e, e), t.removeItem(e)), t
        } catch (e) {
            return null
        }
    }, Is.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw ts.thrown("Unable to create XMLHttpRequest object.")
    };
    var Us = function() {};
    (t["js.Cookie"] = Us).__name__ = "js.Cookie", Us.set = function(e, t, s, i, n) {
        t = e + "=" + encodeURIComponent(t);
        null != s && (t += ";expires=" + new Date((new Date).getTime() + 1e3 * s).toGMTString()), null != i && (t += ";path=" + i), null != n && (t += ";domain=" + n), window.document.cookie = t
    }, Us.all = function() {
        for (var e = new ws, t = window.document.cookie.split(";"), s = 0; s < t.length;) {
            var i = t[s];
            ++s;
            var n = (i = l.ltrim(i)).split("=");
            n.length < 2 || (i = decodeURIComponent(n[1].split("+").join(" ")), e.h[n[0]] = i)
        }
        return e
    }, Us.get = function(e) {
        return Us.all().h[e]
    }, Us.exists = function(e) {
        var t = Us.all();
        return Object.prototype.hasOwnProperty.call(t.h, e)
    }, Us.remove = function(e, t, s) {
        Us.set(e, "", -10, t, s)
    };
    var Ds = A["tweezer.EEase"] = {
        __ename__: "tweezer.EEase",
        __constructs__: null,
        EASE_IN: {
            _hx_name: "EASE_IN",
            _hx_index: 0,
            __enum__: "tweezer.EEase",
            toString: s
        },
        EASE_IN_OUT: {
            _hx_name: "EASE_IN_OUT",
            _hx_index: 1,
            __enum__: "tweezer.EEase",
            toString: s
        },
        EASE_OUT: {
            _hx_name: "EASE_OUT",
            _hx_index: 2,
            __enum__: "tweezer.EEase",
            toString: s
        },
        EASE_OUT_IN: {
            _hx_name: "EASE_OUT_IN",
            _hx_index: 3,
            __enum__: "tweezer.EEase",
            toString: s
        }
    };
    Ds.__constructs__ = [Ds.EASE_IN, Ds.EASE_IN_OUT, Ds.EASE_OUT, Ds.EASE_OUT_IN];
    var Ps = A["tweezer.ETween"] = {
        __ename__: "tweezer.ETween",
        __constructs__: null,
        BACK: ((h = function(e) {
            return {
                _hx_index: 0,
                p_overshoot: e,
                __enum__: "tweezer.ETween",
                toString: s
            }
        })._hx_name = "BACK", h.__params__ = ["p_overshoot"], h),
        BOUNCE: {
            _hx_name: "BOUNCE",
            _hx_index: 1,
            __enum__: "tweezer.ETween",
            toString: s
        },
        CIRCULAR: {
            _hx_name: "CIRCULAR",
            _hx_index: 2,
            __enum__: "tweezer.ETween",
            toString: s
        },
        CUBIC: {
            _hx_name: "CUBIC",
            _hx_index: 3,
            __enum__: "tweezer.ETween",
            toString: s
        },
        ELASTIC: ((h = function(e, t) {
            return {
                _hx_index: 4,
                p_period: e,
                p_amplitude: t,
                __enum__: "tweezer.ETween",
                toString: s
            }
        })._hx_name = "ELASTIC", h.__params__ = ["p_period", "p_amplitude"], h),
        EXPONENTIAL: {
            _hx_name: "EXPONENTIAL",
            _hx_index: 5,
            __enum__: "tweezer.ETween",
            toString: s
        },
        LINEAR: {
            _hx_name: "LINEAR",
            _hx_index: 6,
            __enum__: "tweezer.ETween",
            toString: s
        },
        QUADRATIC: {
            _hx_name: "QUADRATIC",
            _hx_index: 7,
            __enum__: "tweezer.ETween",
            toString: s
        },
        QUARTIC: {
            _hx_name: "QUARTIC",
            _hx_index: 8,
            __enum__: "tweezer.ETween",
            toString: s
        },
        QUINTIC: {
            _hx_name: "QUINTIC",
            _hx_index: 9,
            __enum__: "tweezer.ETween",
            toString: s
        },
        SINE: {
            _hx_name: "SINE",
            _hx_index: 10,
            __enum__: "tweezer.ETween",
            toString: s
        }
    };

    function Rs() {}
    Ps.__constructs__ = [Ps.BACK, Ps.BOUNCE, Ps.CIRCULAR, Ps.CUBIC, Ps.ELASTIC, Ps.EXPONENTIAL, Ps.LINEAR, Ps.QUADRATIC, Ps.QUARTIC, Ps.QUINTIC, Ps.SINE], (t["tweezer.TweenFactory"] = Rs).__name__ = "tweezer.TweenFactory", Rs.createTweenFunction = function(t, s, i, e, n) {
        switch (null == e && (e = Ds.EASE_IN), null == n && (n = Ps.LINEAR), n._hx_index) {
            case 0:
                var a = n.p_overshoot;
                switch (null == a && (a = 1.70158), e._hx_index) {
                    case 0:
                        return function(e) {
                            return Ms.easeIn(e, t, s, i, a)
                        };
                    case 1:
                        return function(e) {
                            return Ms.easeInOut(e, t, s, i, a)
                        };
                    case 2:
                        return function(e) {
                            return Ms.easeOut(e, t, s, i, a)
                        };
                    case 3:
                        return function(e) {
                            return Ms.easeOutIn(e, t, s, i, a)
                        }
                }
                break;
            case 1:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Ns.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Ns.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Ns.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Ns.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 2:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Os.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Os.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Os.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Os.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 3:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Ls.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Ls.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Ls.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Ls.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 4:
                var _ = n.p_period,
                    r = n.p_amplitude;
                switch (null == _ && (_ = .3 * i * (e == Ds.EASE_IN_OUT ? 1.5 : 1)), null == r && (r = 0), e._hx_index) {
                    case 0:
                        return function(e) {
                            return Fs.easeIn(e, t, s, i, _, r)
                        };
                    case 1:
                        return function(e) {
                            return Fs.easeInOut(e, t, s, i, _, r)
                        };
                    case 2:
                        return function(e) {
                            return Fs.easeOut(e, t, s, i, _, r)
                        };
                    case 3:
                        return function(e) {
                            return Fs.easeOutIn(e, t, s, i, _, r)
                        }
                }
                break;
            case 5:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Vs.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Vs.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Vs.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Vs.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 6:
                return function(e) {
                    return Hs.ease(e, t, s, i)
                };
            case 7:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Gs.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Gs.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Gs.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Gs.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 8:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return js.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return js.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return js.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return js.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 9:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Ks.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Ks.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Ks.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Ks.easeOutIn(e, t, s, i)
                        }
                }
                break;
            case 10:
                switch (e._hx_index) {
                    case 0:
                        return function(e) {
                            return Ws.easeIn(e, t, s, i)
                        };
                    case 1:
                        return function(e) {
                            return Ws.easeInOut(e, t, s, i)
                        };
                    case 2:
                        return function(e) {
                            return Ws.easeOut(e, t, s, i)
                        };
                    case 3:
                        return function(e) {
                            return Ws.easeOutIn(e, t, s, i)
                        }
                }
        }
    };
    var Bs = function(e, t, s, i, n, a, _, r, o, h, l) {
        null == _ && (_ = 0), null == a && (a = 1e3), null == n && (n = 0), this._updateCallback = t, this._startValue = s, this._endValue = i, this._startDelay = n, this._duration = a, this._endDelay = _, this._easeType = r, this._tweenType = o, this._completeCallback = h, this._isSnap = l, m.call(this, e), this._updater(), this._updates = 0
    };
    (t["tweezer.Tweezer"] = Bs).__name__ = "tweezer.Tweezer", Bs.__super__ = m, Bs.prototype = e(m.prototype, {
        _init: function() {
            m.prototype._init.call(this), this._tweenFunction = Rs.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
        },
        _updater: function(e) {
            null == e && (e = 0), m.prototype._updater.call(this, e), null != this._updateCallback && (e = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration)), this._updateCallback(this._isSnap ? Math.round(e) : e)), this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Bs
    });
    var Ms = function() {};
    (t["tweezer.tweens.Back"] = Ms).__name__ = "tweezer.tweens.Back", Ms.easeIn = function(e, t, s, i, n) {
        return s * (e /= i) * e * ((n + 1) * e - n) + t
    }, Ms.easeOut = function(e, t, s, i, n) {
        return s * ((e = e / i - 1) * e * ((n + 1) * e + n) + 1) + t
    }, Ms.easeInOut = function(e, t, s, i, n) {
        return (e /= i / 2) < 1 ? s / 2 * (e * e * ((1 + (n *= 1.525)) * e - n)) + t : s / 2 * ((e -= 2) * e * ((1 + (n *= 1.525)) * e + n) + 2) + t
    }, Ms.easeOutIn = function(e, t, s, i, n) {
        return e < i / 2 ? Ms.easeOut(2 * e, t, s / 2, i, n) : Ms.easeIn(2 * e - i, t + s / 2, s / 2, i, n)
    };
    var Ns = function() {};
    (t["tweezer.tweens.Bounce"] = Ns).__name__ = "tweezer.tweens.Bounce", Ns.easeIn = function(e, t, s, i) {
        return s - Ns.easeOut(i - e, 0, s, i) + t
    }, Ns.easeOut = function(e, t, s, i) {
        return (e /= i) < .36363636363636365 ? s * (7.5625 * e * e) + t : e < .7272727272727273 ? s * (7.5625 * (e -= .5454545454545454) * e + .75) + t : e < .9090909090909091 ? s * (7.5625 * (e -= .8181818181818182) * e + .9375) + t : s * (7.5625 * (e -= .9545454545454546) * e + .984375) + t
    }, Ns.easeInOut = function(e, t, s, i) {
        return e < i / 2 ? .5 * Ns.easeIn(2 * e, 0, s, i) + t : .5 * Ns.easeOut(2 * e - i, 0, s, i) + .5 * s + t
    }, Ns.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Ns.easeOut(2 * e, t, s / 2, i) : Ns.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Os = function() {};
    (t["tweezer.tweens.Circular"] = Os).__name__ = "tweezer.tweens.Circular", Os.easeIn = function(e, t, s, i) {
        return -s * (Math.sqrt(1 - (e /= i) * e) - 1) + t
    }, Os.easeOut = function(e, t, s, i) {
        return e = e / i - 1, s * Math.sqrt(1 - e * e) + t
    }, Os.easeInOut = function(e, t, s, i) {
        return (e /= i / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + t : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    }, Os.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Os.easeOut(2 * e, t, s / 2, i) : Os.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Ls = function() {};
    (t["tweezer.tweens.Cubic"] = Ls).__name__ = "tweezer.tweens.Cubic", Ls.easeIn = function(e, t, s, i) {
        return s * (e /= i) * e * e + t
    }, Ls.easeOut = function(e, t, s, i) {
        return s * ((e = e / i - 1) * e * e + 1) + t
    }, Ls.easeInOut = function(e, t, s, i) {
        return (e /= i / 2) < 1 ? s / 2 * e * e * e + t : s / 2 * ((e -= 2) * e * e + 2) + t
    }, Ls.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Ls.easeOut(2 * e, t, s / 2, i) : Ls.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Fs = function() {};
    (t["tweezer.tweens.Elastic"] = Fs).__name__ = "tweezer.tweens.Elastic", Fs.easeIn = function(e, t, s, i, n, a) {
        if (0 == e) return t;
        if (1 == (e /= i)) return t + s;
        s = 0 == a || a < Math.abs(s) ? (a = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / a);
        return -(a * Math.pow(2, 10 * --e) * Math.sin((e * i - s) * (2 * Math.PI) / n)) + t
    }, Fs.easeOut = function(e, t, s, i, n, a) {
        if (0 == e) return t;
        if (1 == (e /= i)) return t + s;
        var _ = 0 == a || a < Math.abs(s) ? (a = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * i - _) * (2 * Math.PI) / n) + s + t
    }, Fs.easeInOut = function(e, t, s, i, n, a) {
        if (0 == e) return t;
        if (2 == (e /= i / 2)) return t + s;
        var _ = 0 == a || a < Math.abs(s) ? (a = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / a);
        return e < 1 ? a * Math.pow(2, 10 * --e) * Math.sin((e * i - _) * (2 * Math.PI) / n) * -.5 + t : a * Math.pow(2, -10 * --e) * Math.sin((e * i - _) * (2 * Math.PI) / n) * .5 + s + t
    }, Fs.easeOutIn = function(e, t, s, i, n, a) {
        return e < i / 2 ? Fs.easeOut(2 * e, t, s / 2, i, n, a) : Fs.easeIn(2 * e - i, t + s / 2, s / 2, i, n, a)
    };
    var Vs = function() {};
    (t["tweezer.tweens.Exponential"] = Vs).__name__ = "tweezer.tweens.Exponential", Vs.easeIn = function(e, t, s, i) {
        return 0 == e ? t : s * Math.pow(2, 10 * (e / i - 1)) + t - .001 * s
    }, Vs.easeOut = function(e, t, s, i) {
        return e == i ? t + s : 1.001 * s * (1 - Math.pow(2, -10 * e / i)) + t
    }, Vs.easeInOut = function(e, t, s, i) {
        return 0 == e ? t : e == i ? t + s : (e /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + t - 5e-4 * s : s / 2 * 1.0005 * (2 - Math.pow(2, -10 * --e)) + t
    }, Vs.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Vs.easeOut(2 * e, t, s / 2, i) : Vs.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Hs = function() {};
    (t["tweezer.tweens.Linear"] = Hs).__name__ = "tweezer.tweens.Linear", Hs.ease = function(e, t, s, i) {
        return s * e / i + t
    };
    var Gs = function() {};
    (t["tweezer.tweens.Quadratic"] = Gs).__name__ = "tweezer.tweens.Quadratic", Gs.easeIn = function(e, t, s, i) {
        return s * (e /= i) * e + t
    }, Gs.easeOut = function(e, t, s, i) {
        return -s * (e /= i) * (e - 2) + t
    }, Gs.easeInOut = function(e, t, s, i) {
        return (e /= i / 2) < 1 ? s / 2 * e * e + t : -s / 2 * (--e * (e - 2) - 1) + t
    }, Gs.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Gs.easeOut(2 * e, t, s / 2, i) : Gs.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var js = function() {};
    (t["tweezer.tweens.Quartic"] = js).__name__ = "tweezer.tweens.Quartic", js.easeIn = function(e, t, s, i) {
        return s * (e /= i) * e * e * e + t
    }, js.easeOut = function(e, t, s, i) {
        return -s * ((e = e / i - 1) * e * e * e - 1) + t
    }, js.easeInOut = function(e, t, s, i) {
        return (e /= i / 2) < 1 ? s / 2 * e * e * e * e + t : -s / 2 * ((e -= 2) * e * e * e - 2) + t
    }, js.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? js.easeOut(2 * e, t, s / 2, i) : js.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Ks = function() {};
    (t["tweezer.tweens.Quintic"] = Ks).__name__ = "tweezer.tweens.Quintic", Ks.easeIn = function(e, t, s, i) {
        return s * (e /= i) * e * e * e * e + t
    }, Ks.easeOut = function(e, t, s, i) {
        return s * ((e = e / i - 1) * e * e * e * e + 1) + t
    }, Ks.easeInOut = function(e, t, s, i) {
        return (e /= i / 2) < 1 ? s / 2 * e * e * e * e * e + t : s / 2 * ((e -= 2) * e * e * e * e + 2) + t
    }, Ks.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Ks.easeOut(2 * e, t, s / 2, i) : Ks.easeIn(2 * e - i, t + s / 2, s / 2, i)
    };
    var Ws = function() {};

    function zs(e) {
        return e instanceof Array ? new Ss(e) : e.iterator()
    }

    function Ys(e, t) {
        return null == t ? null : (null == t.__id__ && (t.__id__ = u.$haxeUID++), null == e.hx__closures__ ? e.hx__closures__ = {} : s = e.hx__closures__[t.__id__], null == s && (s = t.bind(e), e.hx__closures__[t.__id__] = s), s);
        var s
    }(t["tweezer.tweens.Sine"] = Ws).__name__ = "tweezer.tweens.Sine", Ws.easeIn = function(e, t, s, i) {
        return -s * Math.cos(e / i * (Math.PI / 2)) + s + t
    }, Ws.easeOut = function(e, t, s, i) {
        return s * Math.sin(e / i * (Math.PI / 2)) + t
    }, Ws.easeInOut = function(e, t, s, i) {
        return -s / 2 * (Math.cos(Math.PI * e / i) - 1) + t
    }, Ws.easeOutIn = function(e, t, s, i) {
        return e < i / 2 ? Ws.easeOut(2 * e, t, s / 2, i) : Ws.easeIn(2 * e - i, t + s / 2, s / 2, i)
    }, u.$haxeUID |= 0, "undefined" != typeof performance && "function" == typeof performance.now && (I.now = performance.now.bind(performance)), t.Math = Math, null == String.fromCodePoint && (String.fromCodePoint = function(e) {
        return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55232 + (e >> 10)) + String.fromCharCode(56320 + (1023 & e))
    }), String.prototype.__class__ = t.String = String, String.__name__ = "String", t.Array = Array, Array.__name__ = "Array", Date.prototype.__class__ = t.Date = Date, Date.__name__ = "Date";
    var Xs = {},
        Qs = {},
        Js = Number,
        Zs = Boolean,
        qs = {},
        $s = {};
    is.content = [{
        name: "revision",
        data: "MTIwDQoyMDI0LzAzLzI2IDIxOjE4OjI1DQo"
    }, {
        name: "config",
        data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJleG8yLWV4dHJhYm9sZGl0YWxpYy13ZWJmb250IiAvPg0KCQk8YXNjaWlBcnQ+DQogICBfXyBfX19fX18gIF9fX19fX18gX19fX19fX18gIF9fX18gX19fX19fX19fICBfX19fIA0KICAvIC8vIC8gX18gXC8gX19fLyAvL18vIF9fL1wgXC8gLyAvLyAvIF9fLyBfIFwvIF9fIFwNCiAvIF8gIC8gL18vIC8gL19fLyAgICAvIF8vICAvIC8gLyBfICAvIF8vLyAsIF8vIC9fLyAvDQovXy8vXy9cX19fXy9cX19fL18vfF8vX19fLyAvXy8gL18vL18vX19fL18vfF98XF9fX18vIA0KDQoJCTwvYXNjaWlBcnQ+DQoJCTx1cmxzPg0KCQkJPHdlYnNpdGU+aHR0cDovL2NiY2tpZHMuY2E8L3dlYnNpdGU+DQoJCTwvdXJscz4NCgkJPGdvb2dsZUFuYWx5dGljcyBpZD0iVUEtMjI0MDYzMzctMjciIGVuYWJsZWQ9InRydWUiIC8+DQoJCTxhdWRpb0hvbGREZWxheT41MDAwPC9hdWRpb0hvbGREZWxheT4NCgkJPGRpc2FibGVFeWVDYW5keT5mYWxzZTwvZGlzYWJsZUV5ZUNhbmR5Pg0KCTwvc2V0dGluZ3M+DQoJPGd1aT4NCgkJPGF1ZGlvSG9sZE1lc3NhZ2U+UFJFU1MgVE8gQ09OVElOVUU8L2F1ZGlvSG9sZE1lc3NhZ2U+DQoJCTxidXR0b25zPg0KCQkJPHdlYnNpdGU+TW9yZSBnYW1lczwvd2Vic2l0ZT4NCgkJCTxpbnN0cnVjdGlvbnM+SG93IHRvIHBsYXk8L2luc3RydWN0aW9ucz4NCgkJCTxwbGF5PlBsYXkgbm93PC9wbGF5Pg0KCQkJPGF2YXRhcj5DaGFuZ2UgaGVybzwvYXZhdGFyPg0KCQkJPHNlbGVjdExldmVsPlN0YXJ0IG1hdGNoPC9zZWxlY3RMZXZlbD4NCgkJCTxyZXBsYXk+UGxheSBhZ2FpbjwvcmVwbGF5Pg0KCQkJPGNvbnRpbnVlPkNvbnRpbnVlPC9jb250aW51ZT4NCgkJCTxmaW5pc2hlZD5HYW1lIG92ZXI8L2ZpbmlzaGVkPg0KCQkJPHJlc2V0PlJlc2V0IEhlcm88L3Jlc2V0Pg0KCQkJPGJ1eT5CdXk8L2J1eT4NCgkJCTx1bnBhdXNlPlJlc3VtZTwvdW5wYXVzZT4NCgkJCTxhdWRpb09uPlNvdW5kIE9uPC9hdWRpb09uPg0KCQkJPGF1ZGlvT2ZmPlNvdW5kIE9mZjwvYXVkaW9PZmY+DQoJCQk8ZnVsbFNjcmVlbk9uPkZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT24+DQoJCQk8ZnVsbFNjcmVlbk9mZj5FeGl0IGZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT2ZmPg0KCQkJPGJhY2s+TWFpbiBtZW51PC9iYWNrPg0KCQkJPHRlc3RNb2RlPg0KCQkJCTxicm9uemU+QnJvbnplPC9icm9uemU+DQoJCQkJPHNpbHZlcj5TaWx2ZXI8L3NpbHZlcj4NCgkJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQkJPC90ZXN0TW9kZT4NCgkJCTxhdmF0YXJzPg0KCQkJCTx1bml0QT5NZW48L3VuaXRBPg0KCQkJCTx1bml0Qj5Xb21lbjwvdW5pdEI+DQoJCQk8L2F2YXRhcnM+DQoJCQk8bGV2ZWxzPg0KCQkJCTxsZXZlbDE+QmVnaW5uZXI8L2xldmVsMT4NCgkJCQk8bGV2ZWwyPk5vcm1hbDwvbGV2ZWwyPg0KCQkJCTxsZXZlbDM+RXhwZXJ0PC9sZXZlbDM+DQoJCQk8L2xldmVscz4NCgkJPC9idXR0b25zPg0KCQk8dXBncmFkZXM+DQoJCQk8bW92ZW1lbnQ+U2thdGluZzwvbW92ZW1lbnQ+DQoJCQk8c2hvb3Rpbmc+U2hvb3Rpbmc8L3Nob290aW5nPg0KCQkJPGRlZmVuc2U+RGVmZW5zZTwvZGVmZW5zZT4NCgkJCTxtYWduZXQ+TWFnbmV0PC9tYWduZXQ+DQoJCTwvdXBncmFkZXM+DQoJCTxtZWRhbHM+DQoJCQk8bm9uZT5SZXNwZWN0PC9ub25lPg0KCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCTxzaWx2ZXI+U2lsdmVyPC9zaWx2ZXI+DQoJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQk8L21lZGFscz4NCgkJPGxldmVscz4NCgkJCTxsZXZlbDE+TGV2ZWwgMTwvbGV2ZWwxPg0KCQkJPGxldmVsMj5MZXZlbCAyPC9sZXZlbDI+DQoJCQk8bGV2ZWwzPkxldmVsIDM8L2xldmVsMz4NCgkJPC9sZXZlbHM+DQoJCTx1bml0cz4NCgkJCTx1bml0QSB0aXRsZT0iTWVuIiBzdWJ0aXRsZT0iVGVhbSIgLz4NCgkJCTx1bml0QiB0aXRsZT0iV29tZW4iIHN1YnRpdGxlPSJUZWFtIiAvPg0KCQk8L3VuaXRzPg0KCQk8c2NlbmVzPg0KCQkJPG1lbnU+DQoJCQkJPHRpdGxlPkhvY2tleSBIZXJvPC90aXRsZT4NCgkJCQk8c3VidGl0bGU+V2ludGVyIFNwb3J0czwvc3VidGl0bGU+DQoJCQk8L21lbnU+DQoJCQk8aW5zdHJ1Y3Rpb25zPg0KCQkJCTx0aXRsZT5Ib3cgdG8gcGxheTwvdGl0bGU+DQoJCQkJPG1lc3NhZ2U+PCFbQ0RBVEFbQ2hvb3NlIHlvdXIgaGVybyBhbmQgY29tcGV0ZSBhZ2FpbnN0IDMgZmllcmNlIG9wcG9uZW50cyBpbiB0aGUgSWNlIEhvY2tleSBldmVudC48YnIvPjxici8+QXZvaWQgdGhlIGF0dGFja2luZyBwbGF5ZXJzIHRvIGFwcHJvYWNoIHRoZSBnb2FsIGxpbmUuICBPbmNlIGluIGZyb250IG9mIHRoZSBnb2FsIHRpbWUgeW91ciBzaG90IHRvIHNjb3JlITxici8+PGJyLz5XaWxsIHlvdSB3aW4gYSBHb2xkIE1lZGFsIGJ5IHNjb3JpbmcgaW4gYWxsIDMgcGVyaW9kcz9dXT48L21lc3NhZ2U+DQoJCQk8L2luc3RydWN0aW9ucz4NCgkJCTxhdmF0YXI+DQoJCQkJPHRpdGxlPlNlbGVjdCBoZXJvPC90aXRsZT4NCgkJCTwvYXZhdGFyPg0KCQkJPHNlbGVjdExldmVsPg0KCQkJCTx0aXRsZT5TZWxlY3QgSG9ja2V5IGV2ZW50PC90aXRsZT4NCgkJCQk8bWVzc2FnZU5ldz5QbGF5IHRvIHdpbiBhIG1lZGFsPC9tZXNzYWdlTmV3Pg0KCQkJCTxtZXNzYWdlTG9ja2VkPlBsYXkgX19QUkVWSU9VU19MRVZFTF9fIHRvIHVubG9jazwvbWVzc2FnZUxvY2tlZD4NCgkJCQk8bmV3Pk5ldzwvbmV3Pg0KCQkJCTxsb2NrZWQ+TG9ja2VkPC9sb2NrZWQ+DQoJCQk8L3NlbGVjdExldmVsPg0KCQkJPGdhbWU+DQoJCQkJPGh1ZD4NCgkJCQkJPHBlcmlvZHM+UGVyaW9kczwvcGVyaW9kcz4NCgkJCQkJPGRpc3RhbmNlPkRpc3RhbmNlIHRvIGdvYWw8L2Rpc3RhbmNlPg0KCQkJCQk8dGltZXI+VGltZSB0byBzaG9vdDwvdGltZXI+DQoJCQkJCTxjb2lucz5Db2luczwvY29pbnM+DQoJCQkJCTxwb3dlcj5TaG90IHBvd2VyPC9wb3dlcj4NCgkJCQkJPGRlZmVhdGVkPkNoZWNrZWQhPC9kZWZlYXRlZD4NCgkJCQkJPHNjb3JlPkdvYWwhPC9zY29yZT4NCgkJCQkJPG1pc3M+TWlzc2VkITwvbWlzcz4NCgkJCQkJPHN0YXJ0UGVyaW9kMT5fX188L3N0YXJ0UGVyaW9kMT4NCgkJCQkJPHN0YXJ0UGVyaW9kMj4ybmQgUGVyaW9kPC9zdGFydFBlcmlvZDI+DQoJCQkJCTxzdGFydFBlcmlvZDM+RmluYWwgUGVyaW9kPC9zdGFydFBlcmlvZDM+DQoJCQkJPC9odWQ+DQoJCQk8L2dhbWU+DQoJCQk8cmVzdWx0cz4NCgkJCQk8dGl0bGU+UmVzdWx0czwvdGl0bGU+DQoJCQkJPG1lc3NhZ2U+WW91IHdvbjwvbWVzc2FnZT4NCgkJCTwvcmVzdWx0cz4NCgkJCTxzaG9wPg0KCQkJCTx0aXRsZT5UcmFpbiB5b3VyIGhlcm88L3RpdGxlPg0KCQkJCTxtYXhlZD5NYXhlZDwvbWF4ZWQ+DQoJCQk8L3Nob3A+DQoJCTwvc2NlbmVzPg0KCTwvZ3VpPg0KPC9kYXRhPg0K"
    }], ms.count = 0, ks.__toStr = {}.toString, v.Element = 0, v.PCData = 1, v.CData = 2, v.Comment = 3, v.DocType = 4, v.ProcessingInstruction = 5, v.Document = 6, ns.USE_CACHE = !1, ns.USE_ENUM_INDEX = !1, ns.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", rs.DEFAULT_RESOLVER = new _s, rs.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", cs.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cs.BYTES = hs.ofString(cs.CHARS), As.escapes = ((g = new ws).h.lt = "<", g.h.gt = ">", g.h.amp = "&", g.h.quot = '"', g.h.apos = "'", g), We.main()
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);