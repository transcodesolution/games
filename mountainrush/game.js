! function(u) {
    "use strict";

    function s() {
        return Ps.__string_rec(this, "")
    }
    var h, e = {},
        A = A || {};

    function t(t, e) {
        var s, i = Object.create(t);
        for (s in e) i[s] = e[s];
        return e.toString !== Object.prototype.toString && (i.toString = e.toString), i
    }

    function d(t, e) {
        this.r = new RegExp(t, e.split("u").join(""))
    }

    function R() {}

    function p() {}

    function C() {}

    function k() {}

    function w() {
        this.b = ""
    }

    function c() {}(e.EReg = d).__name__ = "EReg", d.prototype = {
        match: function(t) {
            return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(t), this.r.s = t, null != this.r.m
        },
        matched: function(t) {
            if (null != this.r.m && 0 <= t && t < this.r.m.length) return this.r.m[t];
            throw _s.thrown("EReg::matched")
        },
        split: function(t) {
            var e = "#__delim__#";
            return t.replace(this.r, e).split(e)
        },
        __class__: d
    }, (e.HxOverrides = R).__name__ = "HxOverrides", R.strDate = function(t) {
        switch (t.length) {
            case 8:
                var e = t.split(":"),
                    s = new Date;
                return s.setTime(0), s.setUTCHours(e[0]), s.setUTCMinutes(e[1]), s.setUTCSeconds(e[2]), s;
            case 10:
                e = t.split("-");
                return new Date(e[0], e[1] - 1, e[2], 0, 0, 0);
            case 19:
                s = (e = t.split(" "))[0].split("-"), e = e[1].split(":");
                return new Date(s[0], s[1] - 1, s[2], e[0], e[1], e[2]);
            default:
                throw _s.thrown("Invalid date format : " + t)
        }
    }, R.cca = function(t, e) {
        e = t.charCodeAt(e);
        if (e == e) return e
    }, R.substr = function(t, e, s) {
        if (null == s) s = t.length;
        else if (s < 0) {
            if (0 != e) return "";
            s = t.length + s
        }
        return t.substr(e, s)
    }, R.remove = function(t, e) {
        e = t.indexOf(e);
        return -1 != e && (t.splice(e, 1), !0)
    }, R.now = function() {
        return Date.now()
    }, (e.Lambda = p).__name__ = "Lambda", p.has = function(t, e) {
        for (var s = Zs(t); s.hasNext();)
            if (s.next() == e) return !0;
        return !1
    }, p.exists = function(t, e) {
        for (var s = Zs(t); s.hasNext();)
            if (e(s.next())) return !0;
        return !1
    }, Math.__name__ = "Math", (e.Reflect = C).__name__ = "Reflect", C.field = function(t, e) {
        try {
            return t[e]
        } catch (t) {
            return null
        }
    }, C.getProperty = function(t, e) {
        var s;
        if (null == t) return null;
        var i = !!t.__properties__ && (s = t.__properties__["get_" + e]);
        return i ? t[s]() : t[e]
    }, C.setProperty = function(t, e, s) {
        var i, n = !!t.__properties__ && (i = t.__properties__["set_" + e]);
        n ? t[i](s) : t[e] = s
    }, C.fields = function(t) {
        var e = [];
        if (null != t) {
            var s, i = Object.prototype.hasOwnProperty;
            for (s in t) "__id__" != s && "hx__closures__" != s && i.call(t, s) && e.push(s)
        }
        return e
    }, C.isFunction = function(t) {
        return "function" == typeof t && !(t.__name__ || t.__ename__)
    }, C.compareMethods = function(t, e) {
        return t == e || !(!C.isFunction(t) || !C.isFunction(e)) && (t.scope == e.scope && t.method == e.method && null != t.method)
    }, C.deleteField = function(t, e) {
        return !!Object.prototype.hasOwnProperty.call(t, e) && (delete t[e], !0)
    }, (e.Std = k).__name__ = "Std", k.string = function(t) {
        return Ps.__string_rec(t, "")
    }, k.parseInt = function(t) {
        if (null != t)
            for (var e = 0, s = t.length; e < s;) {
                var i = e++,
                    n = t.charCodeAt(i);
                if (n <= 8 || 14 <= n && 32 != n && 45 != n) {
                    i = t.charCodeAt(1 + i), i = parseInt(t, 120 == i || 88 == i ? 16 : 10);
                    return isNaN(i) ? null : i
                }
            }
        return null
    }, k.random = function(t) {
        return t <= 0 ? 0 : Math.floor(Math.random() * t)
    }, (e.StringBuf = w).__name__ = "StringBuf", w.prototype = {
        __class__: w
    }, (e.StringTools = c).__name__ = "StringTools", c.htmlEscape = function(t, e) {
        for (var s = "", i = 0, n = t; i < n.length;) {
            var _ = i++,
                a = (t = n).charCodeAt(_);
            55296 <= a && a <= 56319 && (a = a - 55232 << 10 | 1023 & t.charCodeAt(1 + _)), 65536 <= a && ++i;
            var r = a;
            switch (r) {
                case 34:
                    s += e ? "&quot;" : String.fromCodePoint(r);
                    break;
                case 38:
                    s += "&amp;";
                    break;
                case 39:
                    s += e ? "&#039;" : String.fromCodePoint(r);
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
    }, c.isSpace = function(t, e) {
        e = R.cca(t, e);
        return 8 < e && e < 14 || 32 == e
    }, c.ltrim = function(t) {
        for (var e = t.length, s = 0; s < e && c.isSpace(t, s);) ++s;
        return 0 < s ? R.substr(t, s, e - s) : t
    }, c.rtrim = function(t) {
        for (var e = t.length, s = 0; s < e && c.isSpace(t, e - s - 1);) ++s;
        return 0 < s ? R.substr(t, 0, e - s) : t
    }, c.trim = function(t) {
        return c.ltrim(c.rtrim(t))
    }, c.replace = function(t, e, s) {
        return t.split(e).join(s)
    }, c.hex = function(t, e) {
        for (var s = ""; s = "0123456789ABCDEF".charAt(15 & t) + s, 0 < (t >>>= 4););
        if (null != e)
            for (; s.length < e;) s = "0" + s;
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
        TClass: ((h = function(t) {
            return {
                _hx_index: 6,
                c: t,
                __enum__: "ValueType",
                toString: s
            }
        })._hx_name = "TClass", h.__params__ = ["c"], h),
        TEnum: ((h = function(t) {
            return {
                _hx_index: 7,
                e: t,
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

    function I() {}

    function S(t) {
        this.nodeType = t, this.children = [], this.attributeMap = new bs
    }
    i.__constructs__ = [i.TNull, i.TInt, i.TFloat, i.TBool, i.TObject, i.TFunction, i.TClass, i.TEnum, i.TUnknown], (e.Type = I).__name__ = "Type", I.getEnum = function(t) {
        return null == t ? null : A[t.__enum__]
    }, I.createEnum = function(t, e, s) {
        var i = C.field(t, e);
        if (null == i) throw _s.thrown("No such constructor " + e);
        if (C.isFunction(i)) {
            if (null == s) throw _s.thrown("Constructor " + e + " need parameters");
            return i.apply(t, s)
        }
        if (null != s && 0 != s.length) throw _s.thrown("Constructor " + e + " does not need parameters");
        return i
    }, I.createEnumIndex = function(t, e, s) {
        var i = t.__constructs__[e];
        if (null == (i = null == i ? null : i._hx_name)) throw _s.thrown(e + " is not a valid enum constructor index");
        return I.createEnum(t, i, s)
    }, I.typeof = function(t) {
        switch (typeof t) {
            case "boolean":
                return i.TBool;
            case "function":
                return t.__name__ || t.__ename__ ? i.TObject : i.TFunction;
            case "number":
                return Math.ceil(t) == t % 2147483648 ? i.TInt : i.TFloat;
            case "object":
                if (null == t) return i.TNull;
                var e = t.__enum__;
                if (null != e) return i.TEnum(A[e]);
                e = Ps.getClass(t);
                return null != e ? i.TClass(e) : i.TObject;
            case "string":
                return i.TClass(String);
            case "undefined":
                return i.TNull;
            default:
                return i.TUnknown
        }
    }, I.enumEq = function(t, e) {
        if (t == e) return !0;
        try {
            var s = t.__enum__;
            if (null == s || s != e.__enum__) return !1;
            if (t._hx_index != e._hx_index) return !1;
            for (var i = A[s].__constructs__[t._hx_index].__params__, n = 0; n < i.length;) {
                var _ = i[n];
                if (++n, !I.enumEq(t[_], e[_])) return !1
            }
        } catch (n) {
            return !1
        }
        return !0
    }, I.enumParameters = function(t) {
        var e = A[t.__enum__].__constructs__[t._hx_index].__params__;
        if (null == e) return [];
        for (var s = [], i = 0; i < e.length;) {
            var n = e[i];
            ++i, s.push(t[n])
        }
        return s
    };
    var b = {
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
        return Is.parse(t)
    }, S.createElement = function(t) {
        var e = new S(S.Element);
        if (e.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeName = t, e
    }, S.createPCData = function(t) {
        var e = new S(S.PCData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createCData = function(t) {
        var e = new S(S.CData);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createComment = function(t) {
        var e = new S(S.Comment);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocType = function(t) {
        var e = new S(S.DocType);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createProcessingInstruction = function(t) {
        var e = new S(S.ProcessingInstruction);
        if (e.nodeType == S.Document || e.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == e.nodeType ? "null" : b.toString(e.nodeType)));
        return e.nodeValue = t, e
    }, S.createDocument = function() {
        return new S(S.Document)
    }, S.prototype = {
        get: function(t) {
            if (this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return this.attributeMap.h[t]
        },
        set: function(t, e) {
            if (this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            this.attributeMap.h[t] = e
        },
        exists: function(t) {
            if (this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return Object.prototype.hasOwnProperty.call(this.attributeMap.h, t)
        },
        attributes: function() {
            if (this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return new vs(this.attributeMap.h)
        },
        elements: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            for (var t = [], e = 0, s = this.children; e < s.length;) {
                var i = s[e];
                ++e, i.nodeType == S.Element && t.push(i)
            }
            return new ks(t)
        },
        firstElement: function() {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            for (var t = 0, e = this.children; t < e.length;) {
                var s = e[t];
                if (++t, s.nodeType == S.Element) return s
            }
            return null
        },
        addChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            null != t.parent && t.parent.removeChild(t), this.children.push(t), t.parent = this
        },
        removeChild: function(t) {
            if (this.nodeType != S.Document && this.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == this.nodeType ? "null" : b.toString(this.nodeType)));
            return !!R.remove(this.children, t) && !(t.parent = null)
        },
        toString: function() {
            return Us.print(this)
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
        this._kernel = t, this._tools = this._kernel.tools, this._isEntity = Ps.__implements(this, f), this._init()
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
            return this.isDisposed ? this.isActive = !1 : (t != this.isActive && (this._isIsActiveSetterBypassed ? this.isActive = t : t ? this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(Pt.RESUME, this, !0, !0, !0)) : this.isActive && !this.isDisposed && (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(Pt.PAUSE, this, !0, !0, !0))), this._isIsActiveSetterBypassed = !1, this.isActive)
        },
        pause: function() {
            !this.isActive || this.isDisposed || (this._pauser(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!1), this._isEntity && this._kernel.messenger.sendMessage(Pt.PAUSE, this, !0, !0, !0))
        },
        _pauser: function() {},
        resume: function() {
            this.isActive || this.isDisposed || (this._resumer(), this._isIsActiveSetterBypassed = !0, this.set_isActive(!0), this._isEntity && this._kernel.messenger.sendMessage(Pt.RESUME, this, !0, !0, !0))
        },
        _resumer: function() {},
        __class__: o,
        __properties__: {
            set_isActive: "set_isActive"
        }
    };
    var l = function() {};
    (e["awe6.interfaces.IAgendaManager"] = l).__name__ = "awe6.interfaces.IAgendaManager", l.__isInterface__ = !0, l.prototype = {
        __class__: l,
        __properties__: {
            get_agenda: "get_agenda"
        }
    };
    var g = function() {};

    function m() {}(e["awe6.interfaces.IEntityCollection"] = g).__name__ = "awe6.interfaces.IEntityCollection", g.__isInterface__ = !0, g.__interfaces__ = [l], g.prototype = {
        __class__: g
    }, (e["awe6.interfaces.IViewable"] = m).__name__ = "awe6.interfaces.IViewable", m.__isInterface__ = !0, m.prototype = {
        __class__: m,
        __properties__: {
            get_view: "get_view"
        }
    };
    var f = function() {};

    function y(t, e, s) {
        null == this.get_view() && (this.view = new St(t, s, 0, this)), this.set_id(null == e ? t.tools.createGuid() : e), o.call(this, t)
    }(e["awe6.interfaces.IEntity"] = f).__name__ = "awe6.interfaces.IEntity", f.__isInterface__ = !0, f.__interfaces__ = [g, m, r], f.prototype = {
        __class__: f,
        __properties__: {
            get_parent: "get_parent"
        }
    }, (e["awe6.core.Entity"] = y).__name__ = "awe6.core.Entity", y.__interfaces__ = [f], y.__super__ = o, y.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.agenda = At.ALWAYS, this._entityAgendaPairs = new ys, this._isAgendaDirty = !0, this._cachedEntities = []
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), this._isAgendaDirty && (this._cachedEntities = this._getEntities(this.get_agenda()), I.enumEq(this.get_agenda(), At.ALWAYS) || (this._cachedEntities = this._cachedEntities.concat(this._getEntities(At.ALWAYS))), this._isAgendaDirty = !1);
            for (var e = 0, s = this._cachedEntities; e < s.length;) {
                var i = s[e];
                ++e, i.update(t)
            }
        },
        _disposer: function() {
            this.remove(), this._kernel.messenger.removeSubscribers(this), this._kernel.messenger.removeSubscribers(null, null, null, this, null);
            var t = this._getEntities();
            t.reverse();
            for (var e = 0; e < t.length;) {
                var s = t[e];
                ++e, s.dispose()
            }
            for (s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var i = s.next();
                this._entityAgendaPairs.remove(i)
            }
            this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(t, e, s, i) {
            if (null == i && (i = 0), null == s && (s = !1), this.isDisposed || null == t) return null;
            null == e && (e = At.ALWAYS);
            for (var n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                var _ = n.next();
                if (_.entity == t && I.enumEq(_.agenda, e)) return t
            }
            this._isAgendaDirty = !0, t.get_parent() != this && (t.remove(s), t instanceof y && t._setParent(this));
            var a = new N(t, e),
                r = this._entityAgendaPairs;
            return r.head = new fs(a, r.head), s && (I.enumEq(e, this.get_agenda()) || e == At.ALWAYS ? this.get_view().addChild(t.get_view(), i) : (t.get_view().set_priority(i), a.isAddedToView = !0)), t
        },
        removeEntity: function(t, e, s) {
            if (null == s && (s = !1), !this.isDisposed && null != t) {
                for (var i = !1, n = this._entityAgendaPairs.iterator(); n.hasNext();) {
                    var _ = n.next();
                    _.entity != t || null != e && !I.enumEq(_.agenda, e) || (this._entityAgendaPairs.remove(_), i = !0)
                }
                i && (this._isAgendaDirty = !0, t instanceof y && t._setParent(null), s && t.get_view().remove())
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
            for (var e = [], s = this._entityAgendaPairs.iterator(); s.hasNext();) {
                var i = s.next();
                null != t && !I.enumEq(t, i.agenda) || e.push(i.entity)
            }
            return e.reverse(), e
        },
        getEntitiesByClass: function(t, e, s, i, n) {
            if (null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), n && null != this._kernel.scenes.get_scene()) return this._kernel.scenes.get_scene().getEntitiesByClass(t, e, !0);
            for (var _ = [], a = this._getEntities(e), r = 0; r < a.length;) {
                var o = a[r];
                ++r, Ps.__instanceof(o, t) && _.push(o), s && (_ = _.concat(o.getEntitiesByClass(t, e, !0)))
            }
            return i && null != this.get_parent() && (_ = _.concat(this.get_parent().getEntitiesByClass(t, e, !1, !0))), _
        },
        setAgenda: function(t) {
            if (null == t && (t = At.ALWAYS), I.enumEq(this.get_agenda(), t)) return !1;
            this._isAgendaDirty = !0;
            for (var e = this._entityAgendaPairs.iterator(); e.hasNext();) {
                var s = e.next(),
                    i = I.enumEq(this.get_agenda(), s.agenda) && s.entity.get_view().get_parent() == this.get_view();
                i && s.entity.get_view().remove(), s.isAddedToView = s.isAddedToView || i
            }
            this.agenda = t;
            for (e = this._entityAgendaPairs.iterator(); e.hasNext();)(s = e.next()).isAddedToView && (I.enumEq(At.ALWAYS, s.agenda) || I.enumEq(this.get_agenda(), s.agenda)) && this.get_view().addChild(s.entity.get_view());
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
        __class__: y,
        __properties__: t(o.prototype.__properties__, {
            get_view: "get_view",
            get_parent: "get_parent",
            get_agenda: "get_agenda",
            set_id: "set_id"
        })
    });
    var E = function() {};

    function x(t, e, s, i, n, _, a, r, o, h, c) {
        null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 20), null == i && (i = 100), this._stateUp = new v(t, e), this._stateOver = new v(t, s), this.x = _, this.y = a, this.set_width(i), this.set_height(n), this._keyType = r, this.onClickCallback = o, this.onRollOverCallback = h, this.onRollOutCallback = c, y.call(this, t)
    }(e["awe6.interfaces.IPositionable"] = E).__name__ = "awe6.interfaces.IPositionable", E.__isInterface__ = !0, E.prototype = {
        __class__: E,
        __properties__: {
            set_y: "set_y",
            set_x: "set_x"
        }
    }, (e["awe6.core.BasicButton"] = x).__name__ = "awe6.core.BasicButton", x.__interfaces__ = [E], x.__super__ = y, x.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this.get_view().set_x(this.x), this.get_view().set_y(this.y), this.isOver = !1, this.addEntity(this._stateUp, At.SUB_TYPE(T.UP), !0), this.addEntity(this._stateOver, At.SUB_TYPE(T.OVER), !0), this.setAgenda(At.SUB_TYPE(T.UP))
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t);
            var e = this._kernel.inputs.mouse,
                t = this._isPointInsideRectangle(e.x + this.get_view().x - this.get_view().globalX, e.y + this.get_view().y - this.get_view().globalY, this.x, this.y, this.width, this.height);
            t && e.set_cursorType(Mt.BUTTON), t && !this.isOver && this.onRollOver(), !t && this.isOver && (e.set_cursorType(Mt.AUTO), this.onRollOut()), this.isOver = t, this.isOver && e.getIsButtonDown() && this.setAgenda(At.SUB_TYPE(T.OVER)), this.isOver && e.getIsButtonRelease() && this.onClick(), null != this._keyType && this._kernel.inputs.keyboard.getIsKeyRelease(this._keyType) && this.onClick()
        },
        _isPointInsideRectangle: function(t, e, s, i, n, _) {
            return !(t < s) && (!(e < i) && (!(s + n < t) && !(i + _ < e)))
        },
        onClick: function() {
            this.setAgenda(At.SUB_TYPE(T.UP)), null != this.onClickCallback && this.onClickCallback()
        },
        onRollOver: function() {
            this.setAgenda(At.SUB_TYPE(T.OVER)), null != this.onRollOverCallback && this.onRollOverCallback()
        },
        onRollOut: function() {
            this.setAgenda(At.SUB_TYPE(T.UP)), null != this.onRollOutCallback && this.onRollOutCallback()
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
        __class__: x,
        __properties__: t(y.prototype.__properties__, {
            set_height: "set_height",
            set_width: "set_width",
            set_y: "set_y",
            set_x: "set_x"
        })
    });
    var v = function(t, e) {
        y.call(this, t), this.view = e
    };
    (e["awe6.core._BasicButton._HelperState"] = v).__name__ = "awe6.core._BasicButton._HelperState", v.__super__ = y, v.prototype = t(y.prototype, {
        __class__: v
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
    var U = function() {};

    function P(t) {
        this._defaultSecret = t
    }(e["awe6.interfaces.IEncrypter"] = U).__name__ = "awe6.interfaces.IEncrypter", U.__isInterface__ = !0, U.prototype = {
        __class__: U
    }, (e["awe6.core.Encrypter"] = P).__name__ = "awe6.core.Encrypter", P.__interfaces__ = [U], P.prototype = {
        decrypt: function(t, e) {
            null == e && (e = "");
            e = "" != e ? e : this._defaultSecret;
            return this._xor(t, e)
        },
        _xor: function(t, e) {
            for (var s = new ds(new ArrayBuffer(t.length)), i = 0, n = 0, _ = s.length; n < _;) {
                var a = n++;
                s.b[a] = t.b[a] ^ R.cca(e, i), ++i >= e.length && (i = 0)
            }
            return s
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

    function D(t, e, s, i, n, _, a, r, o, h, c, l, u, d) {
        this._kernel = t, this._keyUp = null != e ? e : Ut.UP, this._keyRight = null != s ? s : Ut.RIGHT, this._keyDown = null != i ? i : Ut.DOWN, this._keyLeft = null != n ? n : Ut.LEFT, this._keyPrimary = null != _ ? _ : Ut.SPACE, this._keySecondary = null != a ? a : Ut.Z, this._keyUpAlt = null != r ? r : Ut.W, this._keyRightAlt = null != o ? o : Ut.D, this._keyDownAlt = null != h ? h : Ut.S, this._keyLeftAlt = null != c ? c : Ut.A, this._keyPrimaryAlt = null != l ? l : Ut.Q, this._keySecondaryAlt = null != u ? u : Ut.E, this._joypadTouchType = null != d ? d : this._kernel.factory.joypadTouchType, this._isTouchEnabled = this._joypadTouchType != It.DISABLED, this._joypadStateCache = {
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
            return !!this._checkKeyboard(t, Js(h = this._kernel.inputs.keyboard, h.getIsKeyDown)) || !!this._isTouchEnabled && this._checkTouchIsDown(t)
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
            var s = 99999999,
                i = Rt.FIRE,
                n = Rt.FIRE,
                _ = this._getTouchButtonPosition(n),
                a = this._kernel.tools.distance(t, e, _.x, _.y, !0);
            a < s && (s = a, i = n);
            n = Rt.UP, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < s && (s = a, i = n);
            n = Rt.RIGHT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < s && (s = a, i = n);
            n = Rt.DOWN, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < s && (s = a, i = n);
            n = Rt.LEFT, _ = this._getTouchButtonPosition(n);
            (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < s && (s = a, i = n);
            n = Rt.PRIMARY, _ = this._getTouchButtonPosition(n);
            return (a = this._kernel.tools.distance(t, e, _.x, _.y, !0)) < s && (s = a, i = n), i
        },
        _getTouchState: function() {
            var t = null != this._mouse || this._kernel.inputs.mouse instanceof pt && (this._mouse = Ps.__cast(this._kernel.inputs.mouse, pt), !0);
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
                s = this._joypadTouchType;
            switch (s._hx_index) {
                case 1:
                    var i = this._getClosestTouchButton();
                    e.isFire = i == Rt.FIRE && this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._mouse.getIsButtonDown() && (e.isUp = i == Rt.UP, e.isRight = i == Rt.RIGHT, e.isDown = i == Rt.DOWN, e.isLeft = i == Rt.LEFT);
                    break;
                case 2:
                    var n = s.distance;
                    null == n && (n = 20), e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, e.isUp = this._mouse.getButtonDragHeight() < -n, e.isRight = this._mouse.getButtonDragWidth() > n, e.isDown = this._mouse.getButtonDragHeight() > n, e.isLeft = this._mouse.getButtonDragWidth() < -n;
                    break;
                case 3:
                    var _ = s.speed;
                    e.isFire = this._mouse.getIsButtonRelease() && this._mouse.getButtonDownDuration(null, !0, !0) < 200, this._kernel.inputs.mouse.getIsButtonDown() && (null == _ && (_ = 100), i = this._mouse.getDeltaX(), n = this._mouse.getDeltaY(), e.isUp = n < -_, e.isRight = _ < i, e.isDown = _ < n, e.isLeft = i < -_)
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
        __class__: D
    }, l = function() {}, (e["awe6.interfaces.IResettable"] = l).__name__ = "awe6.interfaces.IResettable", l.__isInterface__ = !0, l.prototype = {
        __class__: l
    }, M = function() {}, (e["awe6.interfaces.IInputManager"] = M).__name__ = "awe6.interfaces.IInputManager", M.__isInterface__ = !0, M.__interfaces__ = [l], M.prototype = {
        __class__: M
    }, (e["awe6.core.InputManager"] = L).__name__ = "awe6.core.InputManager", L.__interfaces__ = [M], L.__super__ = o, L.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.joypad = this.createJoypad(), this.keyboard = this._inputKeyboard = new dt(this._kernel), this.mouse = this._inputMouse = new pt(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            var e = this._inputKeyboard,
                s = t;
            null == s && (s = 0), e.isActive && !e.isDisposed && (e._age += s, e._updates++, e._updater(s)), null == (s = t) && (s = 0), (e = this._inputMouse).isActive && !e.isDisposed && (e._age += s, e._updates++, e._updater(s))
        },
        _disposer: function() {
            var t = this._inputKeyboard;
            t.isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), (t = this._inputMouse).isDisposed || (t.isDisposed = !0, t.set_isActive(!1), t._disposer()), o.prototype._disposer.call(this)
        },
        createJoypad: function(t, e, s, i, n, _, a, r, o, h, c, l, u) {
            return new D(this._kernel, t, e, s, i, n, _, a, r, o, h, c, l, u)
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
            o.prototype._init.call(this), this._isVerbose = !1, this._subscriptions = new ys, this._messageQueue = new xs
        },
        addSubscriber: function(t, e, s, i, n, _) {
            null == _ && (_ = !1);
            n = new O(t, e, s, i, n, _), _ = this._subscriptions;
            _.head = new fs(n, _.head)
        },
        removeSubscribers: function(t, e, s, i, n) {
            for (var _ = this._getSubscriptions(t, e, s, i, n, !0).iterator(); _.hasNext();) {
                var a = _.next();
                this._subscriptions.remove(a), this._isVerbose && as.trace("Removing " + k.string(a.sender) + ":" + k.string(a.message), {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 80,
                    className: "awe6.core.MessageManager",
                    methodName: "removeSubscribers"
                })
            }
        },
        sendMessage: function(t, e, s, i, n) {
            null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._sendMessage(t, e, e, s, i, n)
        },
        reset: function() {
            return this.removeSubscribers(), this._messageQueue = new xs, !0
        },
        _updater: function(t) {
            if (null == t && (t = 0), o.prototype._updater.call(this, t), this._isOkToSendMessage())
                for (var e = this._messageQueue.h; null != e;) {
                    var s = e.item,
                        e = e.next,
                        s = s;
                    this._sendMessage(s.message, s.sender, s.target, s.isBubbleDown, s.isBubbleUp, s.isBubbleEverywhere), this._messageQueue.remove(s)
                }
        },
        _isOkToSendMessage: function() {
            return null != this._kernel.scenes.get_scene()
        },
        _sendMessage: function(t, e, s, i, n, _) {
            if (null == _ && (_ = !1), null == n && (n = !1), null == i && (i = !1), this._isVerbose && as.trace("Sending message: " + k.string(t) + " from " + e.id + "(" + k.string(Ps.getClass(e)) + ") via " + s.id + " (" + k.string(Ps.getClass(s)) + ")", {
                    fileName: "awe6/core/MessageManager.hx",
                    lineNumber: 119,
                    className: "awe6.core.MessageManager",
                    methodName: "_sendMessage"
                }), this._isOkToSendMessage()) {
                if (_) {
                    var a = this._kernel.scenes.get_scene().getEntities()[0];
                    if (null != a && null != a.get_parent()) return void this._sendMessage(t, e, this._kernel.scenes.get_scene().getEntities()[0].get_parent(), !0)
                }
                for (var r = this._getSubscriptions(s, t, null, e).iterator(); r.hasNext();) {
                    var o = r.next();
                    if (!this._send(o, t, e)) return
                }
                if (i)
                    for (var h = s.getEntities(), c = 0; c < h.length;) {
                        var l = h[c];
                        ++c, this._sendMessage(t, e, l, !0)
                    }
                n && null != s.get_parent() && Ps.__implements(s.get_parent(), f) && this._sendMessage(t, e, s.get_parent(), !1, !0)
            } else this._messageQueue.push(new F(t, e, s, i, n, _))
        },
        _send: function(t, e, s) {
            s = t.handler.apply(t.subscriber, [e, s]);
            return t.isRemovedAfterFirstSend && this._subscriptions.remove(t), s
        },
        _getSubscriptions: function(t, e, s, i, n, _) {
            null == _ && (_ = !1);
            for (var a = new ys, r = this._subscriptions.iterator(); r.hasNext();) {
                var o = r.next();
                if (null == t || t == o.subscriber || t == o.sender) {
                    if (null != e && !Ps.__instanceof(e, o.messageClass)) {
                        var h = I.typeof(e);
                        if (7 == h._hx_index) {
                            h.e;
                            if (I.getEnum(e) != I.getEnum(o.message) || (h = o.message, A[e.__enum__].__constructs__[e._hx_index]._hx_name != A[h.__enum__].__constructs__[h._hx_index]._hx_name) || I.enumParameters(e).toString() != I.enumParameters(o.message).toString()) continue
                        } else if (e != o.message) continue
                    }
                    if (null == s || C.compareMethods(o.handler, s)) {
                        if (null != i) {
                            if (_) {
                                if (null != o.senderClassType) continue;
                                if (null == o.sender) continue
                            }
                            if (null != o.senderClassType && !Ps.__instanceof(i, o.senderClassType)) continue;
                            if (null != o.sender && o.sender != i) continue
                        }
                        a.head = new fs(o, a.head)
                    }
                }
            }
            return a
        },
        __class__: B
    });
    var O = function(t, e, s, i, n, _) {
        null == _ && (_ = !1), this.subscriber = t, this.message = e, this.handler = s, this.sender = i, this.senderClassType = n, this.isRemovedAfterFirstSend = _, this.messageClass = Ps.getClass(e)
    };
    (e["awe6.core._MessageManager._HelperSubscription"] = O).__name__ = "awe6.core._MessageManager._HelperSubscription", O.prototype = {
        __class__: O
    };
    var F = function(t, e, s, i, n, _) {
        null == _ && (_ = !1), null == n && (n = !1), null == i && (i = !1), this.message = t, this.sender = e, this.target = s, this.isBubbleDown = i, this.isBubbleUp = n, this.isBubbleEverywhere = _
    };

    function V() {}

    function H(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this.type = e, this.isPauseable = s, this.isMuteable = i, this.isSessionSavedOnNext = n, o.call(this, t)
    }

    function Y(t) {
        o.call(this, t)
    }

    function G(t, e, s, i, n, _, a, r, o, h) {
        null == o && (o = 0), null == n && (n = !1), null == i && (i = !1), this.font = null != t ? t : "_sans", this.size = null != e ? e : 12, this.color = null != s ? s : 0, this.isBold = i, this.isItalic = n, this.align = null != _ ? _ : Bt.LEFT, this.spacingHorizontal = null != a ? a : 0, this.spacingVertical = null != r ? r : 0, this.thickness = o, this.filters = h
    }

    function j(t) {
        this._kernel = t, this.BIG_NUMBER = 9999998, this._encrypter = this._kernel.factory.createEncrypter()
    }

    function z() {}

    function K(t) {
        o.call(this, t)
    }

    function W(t) {
        o.call(this, t)
    }(e["awe6.core._MessageManager._HelperMessage"] = F).__name__ = "awe6.core._MessageManager._HelperMessage", F.prototype = {
        __class__: F
    }, (e["awe6.interfaces.IScene"] = V).__name__ = "awe6.interfaces.IScene", V.__isInterface__ = !0, V.__interfaces__ = [m, g, r], V.prototype = {
        __class__: V
    }, (e["awe6.core.Scene"] = H).__name__ = "awe6.core.Scene", H.__interfaces__ = [V], H.__super__ = o, H.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.isDisposable = !0, this._entity = new y(this._kernel), this.view = this._entity.get_view()
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), this._entity.update(t)
        },
        _disposer: function() {
            this._entity.dispose(), this.get_view().dispose(), o.prototype._disposer.call(this)
        },
        addEntity: function(t, e, s, i) {
            return null == i && (i = 0), null == s && (s = !1), this._entity.addEntity(t, e, s, i)
        },
        removeEntity: function(t, e, s) {
            null == s && (s = !1), this._entity.removeEntity(t, e, s)
        },
        getEntities: function(t) {
            return this._entity.getEntities(t)
        },
        getEntitiesByClass: function(t, e, s, i, n) {
            return null == n && (n = !1), null == i && (i = !1), null == s && (s = !1), this._entity.getEntitiesByClass(t, e, s, i, !1)
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
        __class__: H,
        __properties__: t(o.prototype.__properties__, {
            get_agenda: "get_agenda",
            get_view: "get_view"
        })
    }), g = function() {}, (e["awe6.interfaces.ISceneManager"] = g).__name__ = "awe6.interfaces.ISceneManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g,
        __properties__: {
            get_scene: "get_scene"
        }
    }, (e["awe6.core.SceneManager"] = Y).__name__ = "awe6.core.SceneManager", Y.__interfaces__ = [g], Y.__super__ = o, Y.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.view = new St(this._kernel)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t), null != this.get_scene() && this.get_scene().update(t), null != this._sceneTransition && this._sceneTransition.update(t)
        },
        _disposer: function() {
            null != this.get_scene() && this.get_scene().dispose(), null != this._sceneTransition && this._sceneTransition.dispose(), this.view.dispose(), o.prototype._disposer.call(this)
        },
        setScene: function(t) {
            var e = null;
            null != this.get_scene() && (e = this.get_scene().type, e = this._kernel.factory.createSceneTransition(t, e), null != this._sceneTransition && this._sceneTransition.dispose(), this._sceneTransition = e, this._kernel.inputs.reset(), this.get_scene().isDisposable && (this.get_scene().dispose(), this._kernel.messenger.reset()), this.scene = null), this._kernel.overlay.hideButtons(), this.scene = this._kernel.factory.createScene(t), this._kernel.overlay.showButton(Dt.BACK, null != this._kernel.factory.getBackSceneType(this.get_scene().type)), this._kernel.overlay.showButton(Dt.MUTE, this.get_scene().isMuteable && !this._kernel.audio.isMute), this._kernel.overlay.showButton(Dt.UNMUTE, this.get_scene().isMuteable && this._kernel.audio.isMute), this._kernel.overlay.showButton(Dt.PAUSE, this.get_scene().isPauseable && this._kernel.isActive), this._kernel.overlay.showButton(Dt.UNPAUSE, this.get_scene().isPauseable && !this._kernel.isActive), this.view.addChild(this.get_scene().get_view()), null != this._sceneTransition && this.get_scene().get_view().addChild(this._sceneTransition.get_view(), this._tools.BIG_NUMBER + 1)
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
        __class__: Y,
        __properties__: t(o.prototype.__properties__, {
            get_scene: "get_scene"
        })
    }), g = function() {}, (e["awe6.interfaces.ITextStyle"] = g).__name__ = "awe6.interfaces.ITextStyle", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.TextStyle"] = G).__name__ = "awe6.core.TextStyle", G.__interfaces__ = [g], G.prototype = {
        toString: function() {
            return k.string(this.font + "," + this.size + "," + this.color + "," + k.string(this.isBold) + "," + k.string(this.isItalic) + "," + k.string(this.align) + "," + this.spacingHorizontal + "," + this.spacingVertical + "," + this.thickness + "," + k.string(this.filters))
        },
        clone: function() {
            return new G(this.font, this.size, this.color, this.isBold, this.isItalic, this.align, this.spacingHorizontal, this.spacingVertical, this.thickness, this.filters)
        },
        __class__: G
    }, g = function() {}, (e["awe6.interfaces.ITools"] = g).__name__ = "awe6.interfaces.ITools", g.__isInterface__ = !0, g.__interfaces__ = [U], g.prototype = {
        __class__: g
    }, (e["awe6.core.Tools"] = j).__name__ = "awe6.core.Tools", j.__interfaces__ = [g], j.prototype = {
        createGuid: function(t, e) {
            return null == e && (e = ""), null == t && (t = !1), t ? e + R.substr(this._randomCharacter() + this._randomCharacter() + this._randomCharacter(), 0, 10) : e + (this._randomCharacter() + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + "-" + this._randomCharacter() + this._randomCharacter() + this._randomCharacter())
        },
        _randomCharacter: function() {
            return R.substr(c.hex(65536 * (1 + Math.random()) | 0, 1), 1, null)
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
            for (var e = "", s = t.split(""), i = "", n = 0; n < s.length;) {
                var _ = s[n];
                ++n, _.toLowerCase() != _ && (e += i), e += _, i = " "
            }
            return e
        },
        toConstCase: function(t) {
            if (null == t || "" == t) return "";
            if (this._isConstCase(t)) return t;
            this._isCamelCase(t) && (t = this.fromCamelCase(t));
            return t = c.replace(t, "     ", " "), t = c.replace(t, "    ", " "), t = c.replace(t, "   ", " "), t = c.replace(t, "  ", " "), (t = c.replace(t, " ", "_")).toUpperCase()
        },
        limit: function(t, e, s) {
            return s < t ? s : t < e ? e : t
        },
        getRandomType: function(t) {
            for (var e = t.__constructs__, s = new Array(e.length), i = 0, n = e.length; i < n;) {
                var _ = i++;
                s[_] = e[_]._hx_name
            }
            return I.createEnumIndex(t, k.random(s.length))
        },
        distance: function(t, e, s, i, n) {
            null == n && (n = !1);
            t = s - t, e = i - e, e = t * t + e * e;
            return n ? e : Math.sqrt(e)
        },
        shuffle: function(t) {
            for (var e = t.slice(), s = e.length; 1 < s;) {
                var i = k.random(s),
                    n = e[--s];
                e[s] = e[i], e[i] = n
            }
            return e
        },
        convertUpdatesToFormattedTime: function(t, e) {
            t = Math.round(1e3 * t / this._kernel.factory.targetFramerate);
            return this.convertAgeToFormattedTime(t, e)
        },
        convertAgeToFormattedTime: function(t, e) {
            if (null == e && (e = "'"), t < 0) return "99" + e + "99" + e + "99";
            for (var s = t / 1e3, i = Math.floor(s), n = k.string(Math.floor(100 * (s - i))), _ = 0; 59 < i;) ++_, i -= 60;
            for (99 < _ && (_ = 99); n.length < 2;) n = "0" + n;
            t = null == i ? "null" : "" + i;
            i < 10 && (t = "0" + t);
            s = null == _ ? "null" : "" + _;
            return _ < 10 && (s = "0" + s), 0 == i && (t = "00"), 0 == _ && (s = "00"), k.string(s + e + t + e + n)
        },
        serialize: function(t) {
            return os.run(t)
        },
        unserialize: function(t) {
            return ls.run(t)
        },
        decrypt: function(t, e) {
            return null == e && (e = ""), this._encrypter.decrypt(t, e)
        },
        __class__: j
    }, U = function() {}, (e["awe6.interfaces.IAssetManager"] = U).__name__ = "awe6.interfaces.IAssetManager", U.__isInterface__ = !0, U.prototype = {
        __class__: U
    }, (e["awe6.interfaces.IAssetManagerProcess"] = z).__name__ = "awe6.interfaces.IAssetManagerProcess", z.__isInterface__ = !0, z.__interfaces__ = [r, U], (e["awe6.core.drivers.AAssetManager"] = K).__name__ = "awe6.core.drivers.AAssetManager", K.__interfaces__ = [z], K.__super__ = o, K.prototype = t(o.prototype, {
        _init: function() {
            this._packageId = this._kernel.getConfig("settings.assets.packages.default"), null == this._packageId && (this._packageId = "assets"), o.prototype._init.call(this)
        },
        getAsset: function(t, e, s) {
            return null == e && (e = this._packageId), this._driverGetAsset(t, e, s)
        },
        _driverGetAsset: function(t, e, s) {
            return null
        },
        __class__: K
    }), g = function() {}, (e["awe6.interfaces.IAudioManager"] = g).__name__ = "awe6.interfaces.IAudioManager", g.__isInterface__ = !0, g.prototype = {
        __class__: g,
        __properties__: {
            set_isMute: "set_isMute"
        }
    }, (e["awe6.core.drivers.AAudioManager"] = W).__name__ = "awe6.core.drivers.AAudioManager", W.__interfaces__ = [g], W.__super__ = o, W.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._sounds = [], this._packageId = this._kernel.getConfig("settings.assets.packages.audio"), null == this._packageId && (this._packageId = this._kernel.getConfig("settings.assets.packages.default")), null == this._packageId && (this._packageId = "assets.audio"), this.set_isMute(!1)
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = 0, s = this._sounds; e < s.length;) {
                var i = s[e];
                ++e, i.isDisposed && R.remove(this._sounds, i)
            }
        },
        _disposer: function() {
            for (var t = 0, e = this._sounds; t < e.length;) {
                var s = e[t];
                ++t, s.dispose()
            }
            this.set_isMute(!1), o.prototype._disposer.call(this)
        },
        start: function(t, e, s, i, n, _, a, r) {
            if ((null == a && (a = !1), null == _ && (_ = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null == e && (e = Ct.DEFAULT), a) && 0 != this._getSounds(t, e).length) return;
            this._sounds.push(this._driverSoundFactory(t, e, s, i, n, _, r))
        },
        _driverSoundFactory: function(t, e, s, i, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new X(this._kernel, t, this._packageId, e, s, i, n, _, a)
        },
        stop: function(t, e) {
            for (var s = this._getSounds(t, e), i = 0; i < s.length;) {
                var n = s[i];
                ++i, n.stop()
            }
        },
        transform: function(t, e, s, i, n) {
            null == n && (n = !1), null == i && (i = 0), null == s && (s = 1);
            for (var _ = this._getSounds(t, e), a = 0; a < _.length;) {
                var r = _[a];
                ++a, r.transform(s, i, n)
            }
        },
        set_isMute: function(t) {
            return this.isMute = t, this._driverSetIsMute(t), this.isMute
        },
        _driverSetIsMute: function(t) {},
        _getSounds: function(t, e) {
            var s = [];
            if (null == t && null == e) s = this._sounds.slice();
            else if (null == e)
                for (var i = 0, n = this._sounds; i < n.length;) {
                    var _ = n[i];
                    ++i, _.id == t && s.push(_)
                } else if (null == t)
                    for (i = 0, n = this._sounds; i < n.length;) {
                        _ = n[i];
                        ++i, I.enumEq(_.audioChannelType, e) && s.push(_)
                    } else
                        for (i = 0, n = this._sounds; i < n.length;) {
                            _ = n[i];
                            ++i, _.id == t && I.enumEq(_.audioChannelType, e) && s.push(_)
                        }
            return s
        },
        __class__: W,
        __properties__: t(o.prototype.__properties__, {
            set_isMute: "set_isMute"
        })
    });
    var X = function(t, e, s, i, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), this._kernel = t, this.isDisposed = !1, this.id = e, this._packageId = s, this.audioChannelType = null != i ? i : Ct.DEFAULT, -1 == n && (n = this._kernel.tools.BIG_NUMBER), this._loops = n, this._startTime = _, this._volume = a, this._pan = r, this._onCompleteCallback = o, this._init()
    };

    function Q(t, e, s) {
        null == e && (e = !1), this._context = t, this.isDebug = e, this._config = s, this.config = new bs, null == (s = !0) && (s = !1), s && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = kt.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = It.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Lt.GAME, this.keyPause = Ut.P, this.keyMute = Ut.M, this.keyNext = Ut.SPACE, this.keyBack = Ut.ESCAPE, this.keySpecial = Ut.CONTROL), this._configurer(s), this._driverInit()
    }

    function Z(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AHelperSound"] = X).__name__ = "awe6.core.drivers._AHelperSound", X.__interfaces__ = [_], X.prototype = {
        _init: function() {
            this._driverInit()
        },
        _driverInit: function() {},
        transform: function(t, e, s) {
            null == s && (s = !1), null == e && (e = 0), null == t && (t = 1), this.isDisposed || (s ? (this._volume = t, this._pan = e) : (this._volume = this._kernel.tools.limit(t, 0, 1), this._pan = this._kernel.tools.limit(e, -1, 1)), this._driverTransform(s))
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
        __class__: X
    }, U = function() {}, (e["awe6.interfaces.IFactory"] = U).__name__ = "awe6.interfaces.IFactory", U.__isInterface__ = !0, U.prototype = {
        __class__: U
    }, (e["awe6.core.drivers.AFactory"] = Q).__name__ = "awe6.core.drivers.AFactory", Q.__interfaces__ = [_, U], Q.prototype = {
        _driverInit: function() {
            null != this._config && "<?xml" == R.substr(this._config, 0, 5) && this._traverseElements(S.parse(this._config).firstElement().elements(), ""), this._launchKernel()
        },
        _traverseElements: function(t, e) {
            0 != e.length && (e += ".");
            for (var s = t; s.hasNext();) {
                var i = s.next();
                if (i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                var n, _ = e + i.nodeName;
                if (i.elements().hasNext() && this._traverseElements(i.elements(), _), i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                if (null != i.children[0]) {
                    if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    n = "<![CDATA[" == R.substr(Us.print(i.children[0]), 0, 9)
                } else n = !1;
                if (n) {
                    if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    var a = i.children[0];
                    if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    var r = Us.print(i.children[0]).split("<![CDATA[").join("").split("]]>").join("");
                    if (a.nodeType == S.Document || a.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : b.toString(a.nodeType)));
                    a.nodeValue = r
                }
                if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                if (null == i.children[0]) this.config.h[_] = "";
                else {
                    if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    a = i.children[0].nodeType;
                    if (a != S.Element && a != S.Document) {
                        var o, r = this.config;
                        if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        if (null == i.children[0]) o = "";
                        else {
                            if (i.nodeType != S.Document && i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                            a = i.children[0];
                            if (a.nodeType == S.Document || a.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == a.nodeType ? "null" : b.toString(a.nodeType)));
                            o = a.nodeValue
                        }
                        r.h[_] = o
                    } else this.config.h[_] = ""
                }
                for (var h = i.attributes(); h.hasNext();) {
                    var c = h.next(),
                        l = _ + "." + c,
                        u = this.config,
                        c = i.get(c);
                    u.h[l] = c
                }
            }
        },
        _configurer: function(t) {
            null == t && (t = !1)
        },
        _launchKernel: function() {
            var t;
            null == this._concreteKernel && (null == (t = !1) && (t = !1), t && (this.id = "awe6", this.version = "0.0.1", this.author = "unknown", this.isDecached = !1, this.isEyeCandyOptionEnabled = !0, this.isFullScreenOptionEnabled = !0, this.isResetSessionsOptionEnabled = !0, this.width = 600, this.height = 400, this.bgColor = 16711680, this.fullScreenType = kt.SCALE_ASPECT_RATIO_PRESERVE, this.joypadTouchType = It.DISABLED, this.secret = "YouMustOverrideThis", this.targetFramerate = 25, this.isFixedUpdates = !0, this.startingSceneType = Lt.GAME, this.keyPause = Ut.P, this.keyMute = Ut.M, this.keyNext = Ut.SPACE, this.keyBack = Ut.ESCAPE, this.keySpecial = Ut.CONTROL), this._configurer(t), this._concreteKernel = new gt(this, this._context))
        },
        _getAssetUrls: function() {
            for (var t = [], e = 0; e < 1e3;) {
                var s = "settings.assets.url" + e++;
                Object.prototype.hasOwnProperty.call(this.config.h, s) && t.push(k.string(this.config.h[s]))
            }
            return t
        },
        onInitComplete: function(t) {
            null == this._kernel && null != t && (this._kernel = t, this._tools = this._kernel.tools, this.id = R.substr(this._tools.toConstCase(c.trim(this.id)), 0, 16), this.version = R.substr(c.trim(this.version), 0, 16), this.author = R.substr(c.trim(this.author), 0, 16))
        },
        createAssetManager: function() {
            return Ps.__implements(this._kernel.assets, z) ? Ps.__cast(this._kernel.assets, z) : new ht(this._kernel)
        },
        createEncrypter: function() {
            return new P(this.secret)
        },
        createLogger: function() {
            return null
        },
        createOverlay: function() {
            return new mt(this._kernel)
        },
        createPreloader: function() {
            return new ft(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            return null == t && (t = this.startingSceneType), new H(this._kernel, t)
        },
        createSceneTransition: function(t, e) {
            return new Et(this._kernel)
        },
        createSession: function(t) {
            return new rt(this._kernel, t)
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
    }, g = function() {}, (e["awe6.interfaces.IInputKeyboard"] = g).__name__ = "awe6.interfaces.IInputKeyboard", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, (e["awe6.core.drivers.AInputKeyboard"] = Z).__name__ = "awe6.core.drivers.AInputKeyboard", Z.__interfaces__ = [g], Z.__super__ = o, Z.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = Object.create(null), s = [], i = 0, n = this._buffer; i < n.length;) {
                var _ = n[i];
                ++i;
                var a = null == _.keyCode ? "null" : "" + _.keyCode;
                Object.prototype.hasOwnProperty.call(e, a) ? s.push(_) : _.isDown ? this._keys[_.keyCode].isDown || (this._onDown(_.keyCode), e[a] = !0) : this._keys[_.keyCode].isDown && (this._onUp(_.keyCode), e[a] = !0)
            }
            this._buffer = s.slice();
            for (i = 0, n = this._keys; i < n.length;) {
                _ = n[i];
                ++i, _.isDown ? _.updatesDown++ : _.updatesUp++, _.isDown ? _.timeDown += t : _.timeUp += t
            }
        },
        _disposer: function() {
            this._keys = null, o.prototype._disposer.call(this)
        },
        _addEvent: function(t, e) {
            this._buffer.push(new q(t, e))
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
                var s = e++;
                this._keys[s] = new J(this._kernel)
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
            for (var e = Ut.__constructs__, s = new Array(e.length), i = 0, n = e.length; i < n;) s[a = i++] = e[a]._hx_name;
            var _ = s;
            _.pop();
            for (i = 0; i < _.length;) {
                var a = _[i];
                ++i;
                var r = I.createEnum(Ut, a);
                if (this.getKeyCode(r) == t) return r
            }
            return Ut.SUB_TYPE(t)
        },
        __class__: Z
    });
    var J = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };
    (e["awe6.core.drivers._AInputKeyboard._HelperKey"] = J).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKey", J.prototype = {
        __class__: J
    };
    var q = function(t, e) {
        this.keyCode = t, this.isDown = e
    };

    function $(t) {
        o.call(this, t)
    }(e["awe6.core.drivers._AInputKeyboard._HelperKeyEvent"] = q).__name__ = "awe6.core.drivers._AInputKeyboard._HelperKeyEvent", q.prototype = {
        __class__: q
    }, U = function() {}, (e["awe6.interfaces.IInputMouse"] = U).__name__ = "awe6.interfaces.IInputMouse", U.__isInterface__ = !0, U.prototype = {
        __class__: U,
        __properties__: {
            set_cursorType: "set_cursorType"
        }
    }, (e["awe6.core.drivers.AInputMouse"] = $).__name__ = "awe6.core.drivers.AInputMouse", $.__interfaces__ = [U], $.__super__ = o, $.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._driverInit(), this.x = this.y = this._xPrev = this._yPrev = this._deltaX = this._deltaY = this.scroll = this._deltaScroll = 0, this.relativeX = this.relativeY = this.relativeCentralisedX = this.relativeCentralisedY = 0, this.isMoving = !1, this._buffer = [], this._getPosition(), this.isMoving = !1, this.set_isVisible(!0), this.scroll = 0, this.set_cursorType(Mt.AUTO), this._scrollPrev = 0, this._stillUpdates = 0, this._stillDuration = 0, this._reset()
        },
        _driverInit: function() {},
        _updater: function(t) {
            null == t && (t = 0), this._deltaTimePrev = t, o.prototype._updater.call(this, t), this._xPrev = this.x, this._yPrev = this.y, this._getPosition(), this._handleButton(Nt.LEFT, 0 < this._buffer.length ? this._buffer.shift() : this._buttonLeft.isDown, t), this._handleButton(Nt.MIDDLE, this._isMiddleDown(), t), this._handleButton(Nt.RIGHT, this._isRightDown(), t), this._deltaScroll = this.scroll - this._scrollPrev, this._scrollPrev = this.scroll, this._deltaX = this.x - this._xPrev, this._deltaY = this.y - this._yPrev, this.isMoving = this.x != this._xPrev || this.y != this._yPrev, this.isMoving ? this._stillUpdates = this._stillDuration = 0 : (this._stillUpdates++, this._stillDuration += t), this.relativeX = this.x / this._kernel.factory.width, this.relativeY = this.y / this._kernel.factory.height, this.relativeCentralisedX = 2 * (this.relativeX - .5), this.relativeCentralisedY = 2 * (this.relativeY - .5), this.isWithinBounds = this._isWithinBounds()
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
        _handleButton: function(t, e, s) {
            null == s && (s = 0);
            t = this._getButton(t);
            e ? (t.isDown || (t.timeUpPrevious = t.timeUp, t.updatesUpPrevious = t.updatesUp, t.timeUp = t.updatesUp = 0, t.clickX = this.x, t.clickY = this.y), t.timeDown += s, t.updatesDown++, t.isDown = !0) : (t.isDown && (t.timeDownPrevious = t.timeDown, t.updatesDownPrevious = t.updatesDown, t.timeDown = t.updatesDown = 0), t.timeUp += s, t.updatesUp++, t.isDown = !1)
        },
        _disposer: function() {
            o.prototype._disposer.call(this)
        },
        _reset: function(t) {
            this._buffer = [], this._buttonLeft = new tt(this._kernel), this._buttonMiddle = new tt(this._kernel), this._buttonRight = new tt(this._kernel)
        },
        _getButton: function(t) {
            switch (null == t && (t = Nt.LEFT), t._hx_index) {
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
        getIsButtonRelease: function(t) {
            return 1 == this._getButton(t).updatesUp
        },
        getButtonDownDuration: function(t, e, s) {
            null == s && (s = !1), null == e && (e = !0);
            t = this._getButton(t);
            return s ? e ? t.timeDownPrevious : t.updatesDownPrevious : e ? t.timeDown : t.updatesDown
        },
        getButtonUpDuration: function(t, e, s) {
            null == s && (s = !1), null == e && (e = !0);
            t = this._getButton(t);
            return s ? e ? t.timeUpPrevious : t.updatesUpPrevious : e ? t.timeUp : t.updatesUp
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
        __class__: $,
        __properties__: t(o.prototype.__properties__, {
            set_cursorType: "set_cursorType",
            set_isVisible: "set_isVisible"
        })
    });
    var tt = function(t) {
        this.isDown = !1, this.updatesDown = 0, this.updatesUp = t.tools.BIG_NUMBER, this.timeDown = 0, this.timeUp = t.tools.BIG_NUMBER, this.updatesDownPrevious = 0, this.updatesUpPrevious = t.tools.BIG_NUMBER, this.timeDownPrevious = 0, this.timeUpPrevious = t.tools.BIG_NUMBER
    };

    function et(t, e) {
        this.factory = t, this._context = e, this.tools = this._tools = new j(this), o.call(this, this)
    }(e["awe6.core.drivers._AInputMouse._HelperButton"] = tt).__name__ = "awe6.core.drivers._AInputMouse._HelperButton", tt.prototype = {
        __class__: tt
    }, g = function() {}, (e["awe6.interfaces.ILogger"] = g).__name__ = "awe6.interfaces.ILogger", g.__isInterface__ = !0, g.prototype = {
        __class__: g
    }, U = function() {}, (e["awe6.interfaces.IKernel"] = U).__name__ = "awe6.interfaces.IKernel", U.__isInterface__ = !0, U.__interfaces__ = [g, n], U.prototype = {
        __class__: U,
        __properties__: {
            set_session: "set_session",
            get_session: "get_session",
            set_isFullScreen: "set_isFullScreen",
            set_isEyeCandy: "set_isEyeCandy"
        }
    }, (e["awe6.core.drivers.AKernel"] = et).__name__ = "awe6.core.drivers.AKernel", et.__interfaces__ = [U], et.__super__ = o, et.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this._view = new St(this, this._context, 0, this), this._processes = new xs, this._helperFramerate = new st(this.factory.targetFramerate), this._isPreloaded = !1, this.isDebug = this.factory.isDebug, this.isLocal = this._driverGetIsLocal(), this._driverInit(), this.assets = this._assetManagerProcess = new ht(this._kernel), this.audio = this._audioManager = new ct(this._kernel), this.inputs = this._inputManager = new L(this._kernel), this.scenes = this._sceneManager = new Y(this._kernel), this.messenger = this._messageManager = new B(this._kernel), this._view.addChild(this._sceneManager.view, 1), this._addProcess(this._assetManagerProcess), this._addProcess(this._inputManager), this._addProcess(this._sceneManager), this._addProcess(this._messageManager), this._addProcess(this._audioManager), this.set_isEyeCandy(!0), this.set_isFullScreen(!1), this.factory.onInitComplete(this), this.set_session(this.factory.createSession()), this.get_session().reset(), this._preloader = this.factory.createPreloader(), this._addProcess(this._preloader), this._view.addChild(this._preloader.get_view(), 2)
        },
        _driverGetIsLocal: function() {
            return !1
        },
        _driverInit: function() {},
        _driverDisposer: function() {},
        onPreloaderComplete: function(t) {
            this._isPreloaded = !0, this._removeProcess(this._preloader), this._preloader = null, this._logger = this.factory.createLogger();
            var e = this.factory.createAssetManager();
            e != this._assetManagerProcess && (this._removeProcess(this._assetManagerProcess), this.assets = this._assetManagerProcess = e, this._addProcess(this._assetManagerProcess, !1)), this.overlay = this._overlayProcess = this.factory.createOverlay(), this._addProcess(this._overlayProcess, !0), this._view.addChild(this._overlayProcess.get_view(), 3), this.isDebug && (this._addProcess(this._profiler = new yt(this)), this._view.addChild(this._profiler.get_view(), this._tools.BIG_NUMBER)), this.scenes.setScene(this.factory.startingSceneType), this.overlay.flash()
        },
        _updater: function(t) {
            null == t && (t = 0), this._helperFramerate.update();
            var e = this.factory.isFixedUpdates ? 1e3 / this.factory.targetFramerate | 0 : this._helperFramerate.timeInterval;
            o.prototype._updater.call(this, e);
            for (var s = this._processes.h; null != s;) {
                var i = s.item,
                    s = s.next;
                i.update(e)
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
            Ps.__implements(this.factory, _) && Ps.__cast(this.factory, _).dispose(), this.factory = null;
            var s = this._view;
            s.isDisposed || (s.isDisposed = !0, s.set_isActive(!1), s._disposer()), this._view = null, this._driverDisposer(), this.assets = this._assetManagerProcess = null, this.audio = this._audioManager = null, this.inputs = this._inputManager = null, this.scenes = this._sceneManager = null, this.messenger = this._messageManager = null, this.overlay = this._overlayProcess = null, this.tools = this._tools = null, this._logger = null, this._preloader = null, this.set_session(null), o.prototype._disposer.call(this)
        },
        getConfig: function(t) {
            return Object.prototype.hasOwnProperty.call(this.factory.config.h, t) ? this.factory.config.h[t] : null
        },
        log: function(t) {
            null != this._logger ? this._logger.log(t) : this.isDebug && as.trace("LOG: " + k.string(t), {
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
            return !this.factory.isFullScreenOptionEnabled || I.enumEq(this.factory.fullScreenType, kt.DISABLED) ? this.isFullScreen = !1 : (this.isFullScreen = t, this._driverSetIsFullScreen(t)), this.isFullScreen
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
        __class__: et,
        __properties__: t(o.prototype.__properties__, {
            set_session: "set_session",
            get_session: "get_session",
            set_isFullScreen: "set_isFullScreen",
            set_isEyeCandy: "set_isEyeCandy"
        })
    });
    var st = function(t) {
        this.framerate = t, this._timeAtLastUpdate = R.now() / 1e3 * 1e3 | 0
    };

    function it(t, e, s, i, n, _, a, r, o, h, c, l, u, d, p, g, m) {
        null == m && (m = .35), null == g && (g = 0), null == p && (p = 8), null == s && (s = 30), null == e && (e = 30), null == i && (i = new St(t)), null == n && (n = new St(t)), null == _ && (_ = new St(t)), null == a && (a = new St(t)), null == r && (r = new St(t)), null == o && (o = new St(t)), null == h && (h = new St(t)), null == c && (c = new St(t)), null == l && (l = new St(t)), null == u && (u = new St(t)), null == d && (d = new St(t)), this._borderView = i, this._buttonBack = new x(t, n, _, e, s), this._buttonMute = new x(t, a, r, e, s), this._buttonUnmute = new x(t, o, h, e, s), this._buttonPause = new x(t, c, l, e, s), this._buttonUnpause = new x(t, u, d, e, s), this._pauseBlur = p, this._pauseColor = g, this._pauseAlpha = m, this._context = new createjs.Container, y.call(this, t, null, this._context)
    }

    function nt(t, e, s) {
        null == s && (s = !1), this._assets = e, this._isDecached = s, o.call(this, t)
    }

    function _t(t) {
        this._context = new createjs.Container, y.call(this, t, null, this._context)
    }

    function at(t, e) {
        null == e && (e = 500), this._duration = e, this._context = new createjs.Container, y.call(this, t, null, this._context)
    }(e["awe6.core.drivers._AKernel._HelperFramerate"] = st).__name__ = "awe6.core.drivers._AKernel._HelperFramerate", st.prototype = {
        update: function() {
            this.timeInterval = (R.now() / 1e3 * 1e3 | 0) - this._timeAtLastUpdate, this.framerate = 1e3 / this.timeInterval, this._timeAtLastUpdate = R.now() / 1e3 * 1e3 | 0
        },
        __class__: st
    }, n = function() {}, (e["awe6.interfaces.IOverlay"] = n).__name__ = "awe6.interfaces.IOverlay", n.__isInterface__ = !0, n.prototype = {
        __class__: n,
        __properties__: {
            get_pauseEntity: "get_pauseEntity"
        }
    }, U = function() {}, (e["awe6.interfaces.IOverlayProcess"] = U).__name__ = "awe6.interfaces.IOverlayProcess", U.__isInterface__ = !0, U.__interfaces__ = [m, r, n], (e["awe6.core.drivers.AOverlay"] = it).__name__ = "awe6.core.drivers.AOverlay", it.__interfaces__ = [U], it.__super__ = y, it.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this.get_view().addChild(this._borderView, 4), this._wasMute = this._kernel.audio.isMute, this._driverInit(), this._progressView = new St(this._kernel, this._progressContext), this._progressView.set_isVisible(!1), this._pauseView = new St(this._kernel, this._pauseContext), this._pauseView.set_isVisible(!1), this._flashView = new St(this._kernel, this._flashContext), this._flashView.set_isVisible(!1), this._flashStartingAlpha = 1, this._flashAsTime = !0, this._flashDuration = this._flashStartingDuration = 100;
            var t = Js(this, this.activateButton),
                e = Dt.BACK,
                s = function() {
                    t(e)
                };
            this._buttonBack.onClickCallback = s;
            var i = Js(this, this.activateButton),
                n = Dt.MUTE,
                s = function() {
                    i(n)
                };
            this._buttonMute.onClickCallback = s;
            var _ = Js(this, this.activateButton),
                a = Dt.PAUSE,
                s = function() {
                    _(a)
                };
            this._buttonPause.onClickCallback = s;
            var r = Js(this, this.activateButton),
                o = Dt.UNMUTE,
                s = function() {
                    r(o)
                };
            this._buttonUnmute.onClickCallback = s;
            var h = Js(this, this.activateButton),
                c = Dt.UNPAUSE,
                s = function() {
                    h(c)
                };
            this._buttonUnpause.onClickCallback = s, this.get_view().addChild(this._flashView, 1), this.get_view().addChild(this._pauseView, 2), this.get_view().addChild(this._progressView, 3), this.addEntity(this._buttonBack, null, !0, 21), this.addEntity(this._buttonUnmute, null, !0, 22), this.addEntity(this._buttonMute, null, !0, 23), this.addEntity(this._buttonUnpause, null, !0, 24), this.addEntity(this._buttonPause, null, !0, 25);
            var l = this._buttonBack.height,
                u = this._buttonBack.width,
                s = this._kernel.factory.width - 4 * u,
                l = l;
            this.positionButton(Dt.BACK, s, l), this.positionButton(Dt.MUTE, s += u, l), this.positionButton(Dt.UNMUTE, s, l), this.positionButton(Dt.PAUSE, s += u, l), this.positionButton(Dt.UNPAUSE, s, l)
        },
        _driverInit: function() {
            this._progressContext = new createjs.Container, this._pauseContext = new createjs.Container, this._flashContext = new createjs.Container
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), y.prototype._updater.call(this, t), 0 < this._flashDuration && (this._flashDuration -= this._flashAsTime ? t : 1, e = this._flashStartingAlpha * (this._flashDuration / this._flashStartingDuration), this._flashAlpha = 1 < e ? 1 : e < 0 ? 0 : e), this._flashView.set_isVisible(0 < this._flashAlpha), null != this._kernel.factory.keyBack && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyBack) && this.activateButton(this._kernel.isActive ? Dt.BACK : Dt.UNPAUSE), null != this._kernel.factory.keyPause && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyPause) && this.activateButton(this._kernel.isActive ? Dt.PAUSE : Dt.UNPAUSE), null != this._kernel.factory.keyMute && this._kernel.inputs.keyboard.getIsKeyPress(this._kernel.factory.keyMute) && this.activateButton(this._kernel.audio.isMute ? Dt.UNMUTE : Dt.MUTE), null == this.get_pauseEntity() || this._kernel.isActive || (this.get_pauseEntity().update(t), this._pauseView.update(t))
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
        positionButton: function(t, e, s, i, n) {
            t = this._getButton(t);
            null != t && (t.set_x(e), t.set_y(s), null != i && t.set_width(i), null != n && t.set_height(n))
        },
        hideButtons: function() {
            this.showButton(Dt.BACK, !1), this.showButton(Dt.MUTE, !1), this.showButton(Dt.UNMUTE, !1), this.showButton(Dt.PAUSE, !1), this.showButton(Dt.UNPAUSE, !1)
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        activateButton: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._buttonBack.get_view().get_isInViewStack() && (this._kernel.isActive || this.activateButton(Dt.UNPAUSE), this._drawPause(!1), this._kernel.resume(), this._kernel.scenes.back());
                    break;
                case 1:
                    this._buttonMute.get_view().get_isInViewStack() && (this.showButton(Dt.MUTE, !1), this.showButton(Dt.UNMUTE, !0), this._kernel.audio.set_isMute(!0));
                    break;
                case 2:
                    this._buttonUnmute.get_view().get_isInViewStack() && !this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Dt.MUTE, !0), this.showButton(Dt.UNMUTE, !1), this._kernel.audio.set_isMute(!1));
                    break;
                case 3:
                    this._buttonPause.get_view().get_isInViewStack() && (this._kernel.pause(), this._drawPause(!0), this._wasMute = this._kernel.audio.isMute, this.showButton(Dt.PAUSE, !1), this.showButton(Dt.UNPAUSE, !0), this.activateButton(Dt.MUTE));
                    break;
                case 4:
                    this._buttonUnpause.get_view().get_isInViewStack() && (this.showButton(Dt.PAUSE, !0), this.showButton(Dt.UNPAUSE, !1), this.activateButton(this._wasMute ? Dt.MUTE : Dt.UNMUTE), this._kernel.resume(), this._drawPause(!1));
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
        __class__: it,
        __properties__: t(y.prototype.__properties__, {
            set_pauseEntity: "set_pauseEntity",
            get_pauseEntity: "get_pauseEntity"
        })
    }), n = function() {}, (e["awe6.interfaces.IProgress"] = n).__name__ = "awe6.interfaces.IProgress", n.__isInterface__ = !0, U = function() {}, (e["awe6.interfaces.IPreloader"] = U).__name__ = "awe6.interfaces.IPreloader", U.__isInterface__ = !0, U.__interfaces__ = [n, m, r], (e["awe6.core.drivers.APreloader"] = nt).__name__ = "awe6.core.drivers.APreloader", nt.__interfaces__ = [U], nt.__super__ = o, nt.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.progress = 0, null == this.get_view() && (this.view = new St(this._kernel)), this._encrypter = this._tools, this._currentProgress = 0, this._currentAsset = 0, this._isComplete = !1, 0 < this._assets.length && this._next()
        },
        _next: function() {
            if (this._currentAsset++, this._currentAsset > this._assets.length) {
                if (!this._isComplete) {
                    try {
                        var t = Js(h = this._kernel, h.onPreloaderComplete),
                            e = this;
                        hs.delay(function() {
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
        __class__: nt,
        __properties__: t(o.prototype.__properties__, {
            get_view: "get_view"
        })
    }), (e["awe6.core.drivers.AProfiler"] = _t).__name__ = "awe6.core.drivers.AProfiler", _t.__super__ = y, _t.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this._marginHeight = 25, this._marginColor = 128, this._backgroundColor = -2147483520, this._fpsColor = 16777215, this._memoryColor = 16744448, this._fpsLabel = "FPS", this._memoryLabel = "MBs", this._width = 60, this._height = 50, this._agePrev = 0
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), this._age < this._agePrev + 250 || (this._agePrev = this._age, this._driverUpdate())
        },
        _driverUpdate: function() {},
        __class__: _t
    }), U = function() {}, (e["awe6.interfaces.ISceneTransition"] = U).__name__ = "awe6.interfaces.ISceneTransition", U.__isInterface__ = !0, U.__interfaces__ = [m, n, r], (e["awe6.core.drivers.ASceneTransition"] = at).__name__ = "awe6.core.drivers.ASceneTransition", at.__interfaces__ = [U], at.__super__ = y, at.prototype = t(y.prototype, {
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
        __class__: at,
        __properties__: t(y.prototype.__properties__, {
            get_progress: "get_progress"
        })
    }), r = function() {}, (e["awe6.interfaces.ISession"] = r).__name__ = "awe6.interfaces.ISession", r.__isInterface__ = !0, r.prototype = {
        __class__: r
    };
    var rt = function(t, e) {
        null == e && (e = ""), this._kernel = t, "" == e && (e = "DEBUG_AWE6"), this.id = e, this._tools = this._kernel.tools, this._version = 1, this._init()
    };

    function ot(t, e, s, i) {
        null == s && (s = 0), this.context = e, this.set_priority(s), this.owner = i, o.call(this, t)
    }(e["awe6.core.drivers.ASession"] = rt).__name__ = "awe6.core.drivers.ASession", rt.__interfaces__ = [r], rt.prototype = {
        _init: function() {
            this._driverLoad(), C.field(this._savedData, "_____VERSION") != this._version && this._driverReset();
            var t = null != C.field(this._savedData, this.id);
            this._data = {}, this._resetter(), this._setter(), t && (this._data = C.field(this._savedData, this.id), this._getter(), this.loadCount++)
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
        __class__: rt
    }, U = function() {}, (e["awe6.interfaces.IPriority"] = U).__name__ = "awe6.interfaces.IPriority", U.__isInterface__ = !0, U.prototype = {
        __class__: U,
        __properties__: {
            set_priority: "set_priority",
            get_priority: "get_priority"
        }
    }, r = function() {}, (e["awe6.interfaces.IView"] = r).__name__ = "awe6.interfaces.IView", r.__isInterface__ = !0, r.__interfaces__ = [a, _, E, U], r.prototype = {
        __class__: r,
        __properties__: {
            get_isInViewStack: "get_isInViewStack",
            set_isVisible: "set_isVisible",
            get_parent: "get_parent"
        }
    }, (e["awe6.core.drivers.AView"] = ot).__name__ = "awe6.core.drivers.AView", ot.__interfaces__ = [r], ot.__super__ = o, ot.prototype = t(o.prototype, {
        _init: function() {
            o.prototype._init.call(this), this.globalX = 0, this.globalY = 0, this.set_x(0), this.set_y(0), this.set_isVisible(!0), this._isDirty = !0, this._children = []
        },
        addChild: function(t, e) {
            return null == e && (e = 0), this.isDisposed || null == t ? null : (t.get_parent() != this && (t.remove(), t instanceof ot && (s = t, this._children.push(s), s._setParent(this))), 0 != e && t.set_priority(e), this._isDirty = !0, t);
            var s
        },
        removeChild: function(t) {
            if (!this.isDisposed && null != t) {
                if (t instanceof ot) {
                    t = t;
                    if (t.get_parent() != this) return;
                    R.remove(this._children, t), t._setParent(null)
                }
                this._isDirty = !0
            }
        },
        remove: function() {
            null != this.get_parent() && this.get_parent().removeChild(this)
        },
        clear: function() {
            for (var t = 0, e = this._children; t < e.length;) {
                var s = e[t];
                ++t, this.removeChild(s)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), o.prototype._updater.call(this, t);
            for (var e = 0, s = this._children; e < s.length;) {
                var i = s[e];
                ++e;
                var n = t;
                null == n && (n = 0), i.isActive && !i.isDisposed && (i._age += n, i._updates++, i._updater(n))
            }
            this._isDirty && this._draw(), this.globalX = null == this.get_parent() ? this.x : this.x + this.get_parent().globalX, this.globalY = null == this.get_parent() ? this.y : this.y + this.get_parent().globalY
        },
        _disposer: function() {
            this.remove(), this._driverDisposer(), this.clear(), o.prototype._disposer.call(this)
        },
        _driverDisposer: function() {},
        _draw: function() {
            this.isDisposed || (this._children.sort(Js(h = this._tools, h.sortByPriority)), this._driverDraw(), this._isDirty = !1)
        },
        _driverDraw: function() {},
        _setParent: function(t) {
            this.parent = t
        },
        get_priority: function() {
            return this.priority
        },
        set_priority: function(t) {
            return t == this.get_priority() || (this.priority = t, this.get_parent() instanceof ot && (null != (t = this.get_parent()) && (t._isDirty = !0))), this.get_priority()
        },
        set_isVisible: function(t) {
            return t == this.isVisible || (this.isVisible = t, this.get_parent() instanceof ot && (null != (t = this.get_parent()) && t._draw())), this.isVisible
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
        __class__: ot,
        __properties__: t(o.prototype.__properties__, {
            get_parent: "get_parent",
            get_isInViewStack: "get_isInViewStack",
            set_isVisible: "set_isVisible",
            set_y: "set_y",
            set_x: "set_x",
            set_priority: "set_priority",
            get_priority: "get_priority"
        })
    });
    var ht = function(t) {
        K.call(this, t)
    };
    (e["awe6.core.drivers.createjs.AssetManager"] = ht).__name__ = "awe6.core.drivers.createjs.AssetManager", ht.__super__ = K, ht.prototype = t(K.prototype, {
        _driverGetAsset: function(t, e, s) {
            var i = null;
            return null != ht.loadQueue && (i = ht.loadQueue.getResult(t)), i
        },
        __class__: ht
    });
    var ct = function(t) {
        W.call(this, t)
    };
    (e["awe6.core.drivers.createjs.AudioManager"] = ct).__name__ = "awe6.core.drivers.createjs.AudioManager", ct.__super__ = W, ct.prototype = t(W.prototype, {
        _init: function() {
            W.prototype._init.call(this), this._visibilityWasMute = this.isMute, window.document.addEventListener("visibilitychange", Js(this, this._onVisibilityChange))
        },
        _disposer: function() {
            window.document.removeEventListener("visibilitychange", Js(this, this._onVisibilityChange)), W.prototype._disposer.call(this)
        },
        _driverSoundFactory: function(t, e, s, i, n, _, a) {
            return null == _ && (_ = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), new lt(this._kernel, t, this._packageId, e, s, i, n, _, a)
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
                var s = t[e];
                ++e;
                var i = window.document;
                if (Object.prototype.hasOwnProperty.call(i, s)) return C.field(window.document, s)
            }
            return window.document.hidden
        },
        __class__: ct
    });
    var lt = function(t, e, s, i, n, _, a, r, o) {
        null == r && (r = 0), null == a && (a = 1), null == _ && (_ = 0), null == n && (n = 1), X.call(this, t, e, s, i, 1 == n ? 0 : n, _, a, r, o)
    };

    function ut(t, e, s) {
        Q.call(this, t, e, s)
    }(e["awe6.core.drivers.createjs._HelperSound"] = lt).__name__ = "awe6.core.drivers.createjs._HelperSound", lt.__super__ = X, lt.prototype = t(X.prototype, {
        _driverInit: function() {
            try {
                this._sound = createjs.Sound.play("assets.audio." + this.id, null, 0, this._startTime, this._loops, this._volume, this._pan), createjs.WebAudioPlugin.context && "suspended" == createjs.WebAudioPlugin.context.state && createjs.WebAudioPlugin.context.resume()
            } catch (t) {}
            null != this._sound ? (this._sound.addEventListener("complete", Js(this, this._onSoundComplete)), this._driverTransform()) : this.dispose()
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
    }), (e["awe6.core.drivers.createjs.Factory"] = ut).__name__ = "awe6.core.drivers.createjs.Factory", ut.__super__ = Q, ut.prototype = t(Q.prototype, {
        _driverInit: function() {
            this.isDebug || (as.trace = function(t, e) {
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
            var s = this._concreteKernel.system.isDesktop,
                e = "default";
            Object.prototype.hasOwnProperty.call(this.config.h, "settings.fullScreen") && (e = this.config.h["settings.fullScreen"]);
            t = this._context.getStage().canvas.getAttribute("fullScreen");
            null != t && "" != t && (e = t), this._kernel.set_isFullScreen(s && ("desktop" == e || "all" == e) || !s && ("mobile" == e || "all" == e || "default" == e)), this._kernel.isFullScreen && this.isNativeExperience && !s && (this._concreteKernel.system.requestFullScreen(), this._concreteKernel.system.requestLockScreen())
        },
        _displayCredits: function() {
            as.trace(Object.prototype.hasOwnProperty.call(this.config.h, "settings.asciiArt") ? this.config.h["settings.asciiArt"] : "", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 127,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), as.trace(this.id + " v" + this.version + " by " + this.author, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 128,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), as.trace("Powered by awe6 (http://awe6.org)", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 129,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), this.isDecached && as.trace("Note: decaching is currently enabled", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 132,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            }), as.trace("", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 134,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_displayCredits"
            })
        },
        _loadConfig: function(t) {
            if ("<?xml" == R.substr(t, 0, 5)) this._parseXml(t);
            else {
                this.isDecached && (t += "?dc=" + k.random(99999));
                try {
                    var e = new As(t);
                    e.onError = Js(this, this._onIOError), e.onData = Js(this, this._onComplete), e.request()
                } catch (t) {
                    var s = _s.caught(t).unwrap();
                    return void this._onIOError(k.string(s))
                }
                this._countConfigsToLoad++
            }
        },
        _parseXml: function(t) {
            if (this._traverseElements(S.parse(t).firstElement().elements(), ""), Object.prototype.hasOwnProperty.call(this.config.h, "settings.joinXml") && this._countConfigsLoaded < 100) {
                var e = this.config.h["settings.joinXml"],
                    t = this.config;
                Object.prototype.hasOwnProperty.call(t.h, "settings.joinXml") && delete t.h["settings.joinXml"];
                for (var s = e.split(","), i = 0; i < s.length;) {
                    var n = s[i];
                    ++i, this._loadConfig(n)
                }
            }
            this._countConfigsLoaded == this._countConfigsToLoad && this._launchKernel()
        },
        _onIOError: function(t) {
            as.trace("IO Errors Occurred During Config Loading:" + t, {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 188,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), as.trace("Double check your Config path.  Cross domain (or local) file loading of Config is a security risk and is, therefore, disabled on this browser.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 189,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), null != this._config && "<?xml" == R.substr(this._config, 0, 5) ? (as.trace("Embedded Config detected, using that to continue ...", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 192,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), this._countConfigsLoaded = this._countConfigsToLoad, this._parseXml(this._config)) : (as.trace("Use a web server (or local server) to run over http and serve all files from the same domain.  Or embed the Config directlty in the code (e.g. as a Resource).", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 198,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }), as.trace("Unable to continue without Config.", {
                fileName: "awe6/core/drivers/createjs/Factory.hx",
                lineNumber: 199,
                className: "awe6.core.drivers.createjs.Factory",
                methodName: "_onIOError"
            }))
        },
        _onComplete: function(t) {
            var e;
            this._countConfigsLoaded++, "" != t ? ("<?xml" != R.substr(e = t, 0, 5) && (e = this.createEncrypter().decrypt(ds.ofString(e)).toString()), this._parseXml(e)) : this._onIOError(t)
        },
        _getAssetUrls: function() {
            for (var t = ["bin/assets/audio/Applause.m4a", "bin/assets/audio/Applause.ogg", "bin/assets/audio/Boost1.m4a", "bin/assets/audio/Boost1.ogg", "bin/assets/audio/Boost2.m4a", "bin/assets/audio/Boost2.ogg", "bin/assets/audio/Boost3.m4a", "bin/assets/audio/Boost3.ogg", "bin/assets/audio/Boost4.m4a", "bin/assets/audio/Boost4.ogg", "bin/assets/audio/ButtonOver.m4a", "bin/assets/audio/ButtonOver.ogg", "bin/assets/audio/Coin.m4a", "bin/assets/audio/Coin.ogg", "bin/assets/audio/Collision1.m4a", "bin/assets/audio/Collision1.ogg", "bin/assets/audio/Collision2.m4a", "bin/assets/audio/Collision2.ogg", "bin/assets/audio/GameOver.m4a", "bin/assets/audio/GameOver.ogg", "bin/assets/audio/GameStart.m4a", "bin/assets/audio/GameStart.ogg", "bin/assets/audio/Intro.m4a", "bin/assets/audio/Intro.ogg", "bin/assets/audio/Medal1.m4a", "bin/assets/audio/Medal1.ogg", "bin/assets/audio/Medal2.m4a", "bin/assets/audio/Medal2.ogg", "bin/assets/audio/Medal3.m4a", "bin/assets/audio/Medal3.ogg", "bin/assets/audio/MissGate.m4a", "bin/assets/audio/MissGate.ogg", "bin/assets/audio/MusicMenu.m4a", "bin/assets/audio/MusicMenu.ogg", "bin/assets/audio/Player.m4a", "bin/assets/audio/Player.ogg", "bin/assets/audio/Silence.m4a", "bin/assets/audio/Silence.ogg", "bin/assets/audio/Skid1.m4a", "bin/assets/audio/Skid1.ogg", "bin/assets/audio/Skid2.m4a", "bin/assets/audio/Skid2.ogg", "bin/assets/audio/Skid3.m4a", "bin/assets/audio/Skid3.ogg", "bin/assets/audio/Skid4.m4a", "bin/assets/audio/Skid4.ogg", "bin/assets/audio/Transition.m4a", "bin/assets/audio/Transition.ogg", "bin/assets/audio/VoiceAvatar.m4a", "bin/assets/audio/VoiceAvatar.ogg", "bin/assets/audio/VoiceInstructions.m4a", "bin/assets/audio/VoiceInstructions.ogg", "bin/assets/audio/VoiceResults0.m4a", "bin/assets/audio/VoiceResults0.ogg", "bin/assets/audio/VoiceResults1.m4a", "bin/assets/audio/VoiceResults1.ogg", "bin/assets/audio/VoiceResults2.m4a", "bin/assets/audio/VoiceResults2.ogg", "bin/assets/audio/VoiceResults3.m4a", "bin/assets/audio/VoiceResults3.ogg", "bin/assets/audio/VoiceSelectLevel.m4a", "bin/assets/audio/VoiceSelectLevel.ogg", "bin/assets/audio/VoiceShop.m4a", "bin/assets/audio/VoiceShop.ogg", "bin/assets/audio/Yeti.m4a", "bin/assets/audio/Yeti.ogg", "bin/assets/Blank.png", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.eot", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.svg", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.ttf", "bin/assets/fonts/__Exo2-extrabolditalic-webfont.woff", "bin/assets/gui/Action.png", "bin/assets/gui/AvatarUnitA.png", "bin/assets/gui/AvatarUnitB.png", "bin/assets/gui/BgAbstract1.png", "bin/assets/gui/BgAbstract2.png", "bin/assets/gui/BgAbstract3.png", "bin/assets/gui/BgAbstract4.png", "bin/assets/gui/BgDetail.jpg", "bin/assets/gui/BgGradient1.png", "bin/assets/gui/BgGradient2.png", "bin/assets/gui/BgGradient3.png", "bin/assets/gui/Burst.jpg", "bin/assets/gui/Buttons.png", "bin/assets/gui/HeroMedals.png", "bin/assets/gui/HeroUnitA.png", "bin/assets/gui/HeroUnitB.png", "bin/assets/gui/Hud.png", "bin/assets/gui/InstructionsA.png", "bin/assets/gui/InstructionsB.png", "bin/assets/gui/PanelBigBg.png", "bin/assets/gui/PanelBigFg.png", "bin/assets/gui/PanelLevel.png", "bin/assets/gui/PanelLevelBg.png", "bin/assets/gui/PanelResult.png", "bin/assets/gui/PanelShop.png", "bin/assets/gui/PanelSmallBg.png", "bin/assets/gui/PanelSmallFg.png", "bin/assets/gui/PanelUnit.png", "bin/assets/gui/SceneFgFooter1.png", "bin/assets/gui/SceneFgFooter2.png", "bin/assets/gui/SceneFgHeader1.png", "bin/assets/gui/SceneFgHeader2.png", "bin/assets/gui/Vignette.png", "bin/assets/location/Horizon.jpg", "bin/assets/location/LensFlares.jpg", "bin/assets/location/Roads.png", "bin/assets/location/Scenery.png", "bin/assets/location/Streaks.png", "bin/assets/location/Test.png", "bin/assets/location/Units.png", "bin/assets/__Config.xml", "bin/assets/__Icon128.png", "bin/assets/__Icon196.png", "bin/assets/__Icon256.png", "bin/assets/__PreloaderBg.png", "bin/assets/__Rotate.png"], e = [], s = 0, i = t.length; s < i;) t[n = s++] = R.substr(t[n], 4, null), ("__" == R.substr(t[n], 0, 2) || -1 < t[n].indexOf("/__")) && e.push(t[n]);
            for (s = 0; s < e.length;) {
                var n = e[s];
                ++s, R.remove(t, n)
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
        __class__: ut
    });
    var dt = function(t) {
        Z.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputKeyboard"] = dt).__name__ = "awe6.core.drivers.createjs.InputKeyboard", dt.__super__ = Z, dt.prototype = t(Z.prototype, {
        _driverInit: function() {
            this._document = window.document, this._preventDefaultKeyCodes = [], this._document.addEventListener("keydown", Js(this, this._onKeyDown)), this._document.addEventListener("keyup", Js(this, this._onKeyUp))
        },
        _disposer: function() {
            this._document.removeEventListener("keydown", Js(this, this._onKeyDown)), this._document.removeEventListener("keyup", Js(this, this._onKeyUp)), Z.prototype._disposer.call(this)
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
                    var s = t[e];
                    ++e;
                    s = this.getKeyCode(s);
                    p.has(this._preventDefaultKeyCodes, s) || this._preventDefaultKeyCodes.push(s)
                }
        },
        allowDefaultForKeys: function(t) {
            if (null != t)
                for (var e = 0; e < this._preventDefaultKeyCodes.length;) {
                    var s = this.getKey(this._preventDefaultKeyCodes[e]);
                    p.has(t, s) ? this._preventDefaultKeyCodes.splice(e, 1) : ++e
                }
        },
        __class__: dt
    });
    var pt = function(t) {
        $.call(this, t)
    };
    (e["awe6.core.drivers.createjs.InputMouse"] = pt).__name__ = "awe6.core.drivers.createjs.InputMouse", pt.__super__ = $, pt.prototype = t($.prototype, {
        _driverInit: function() {
            this._stage = this._kernel._stage, this._system = this._kernel.system, this._isTouch = createjs.Touch.isSupported() && !this._kernel.system.isDesktop, this._isTouch ? (createjs.Touch.enable(this._stage, !0), this._touchX = this._touchY = 0, this._stage.canvas.addEventListener("touchstart", Js(this, this._onTouchStart)), this._stage.canvas.addEventListener("touchmove", Js(this, this._onTouch)), this._stage.canvas.addEventListener("touchend", Js(this, this._onTouchEnd))) : (this._stage.addEventListener("stagemousedown", Js(this, this._onMouseDown)), this._stage.addEventListener("stagemouseup", Js(this, this._onMouseUp))), this._system.isDesktop && window.document.addEventListener("wheel", Js(this, this._onWheel)), window.focus()
        },
        _disposer: function() {
            this._isTouch ? (createjs.Touch.disable(this._stage), this._stage.canvas.removeEventListener("touchstart", Js(this, this._onTouchStart)), this._stage.canvas.removeEventListener("touchmove", Js(this, this._onTouch)), this._stage.canvas.removeEventListener("touchend", Js(this, this._onTouchEnd))) : (this._stage.removeEventListener("stagemousedown", Js(this, this._onMouseDown)), this._stage.removeEventListener("stagemouseup", Js(this, this._onMouseUp))), this._system.isDesktop && window.document.removeEventListener("wheel", Js(this, this._onWheel)), $.prototype._disposer.call(this)
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
            this._onMouseUp(t), this._onTouch(t), pt._isSoundTriggered || (this._kernel.audio.start("Silence"), pt._isSoundTriggered = !0, this._kernel.isFullScreen && this._kernel.factory.isNativeExperience && (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()))
        },
        _onTouch: function(t) {
            try {
                var e = (t.targetTouches[0].pageX - (0 | this._stage.canvas.offsetLeft)) / this._kernel._scaleX,
                    s = this._kernel.factory.width;
                this._touchX = 0 | (s < e ? s : e < 0 ? 0 : e);
                e = (t.targetTouches[0].pageY - (0 | this._stage.canvas.offsetTop)) / this._kernel._scaleY, s = this._kernel.factory.height;
                this._touchY = 0 | (s < e ? s : e < 0 ? 0 : e)
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
            return this._stage.cursor = t ? "none" : "auto", $.prototype.set_isVisible.call(this, t)
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
            return this._stage.canvas.style.cursor = e, $.prototype.set_cursorType.call(this, t)
        },
        __class__: pt
    });
    var gt = function(t, e) {
        et.call(this, t, e)
    };
    (e["awe6.core.drivers.createjs.Kernel"] = gt).__name__ = "awe6.core.drivers.createjs.Kernel", gt.__super__ = et, gt.prototype = t(et.prototype, {
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
            this.system = new wt(this), this._scaleX = this._scaleY = 1, this._stage = this._stageDynamic = this._context.getStage(), this._stage.canvas.style.setProperty("-ms-touch-action", "none", ""), this._stage.canvas.style.setProperty("image-rendering", "-o-crisp-edges", ""), this._stage.canvas.style.setProperty("image-rendering", "optimize-contrast", ""), this._stage.canvas.style.setProperty("-ms-interpolation-mode", "nearest-neighbor", ""), this._stage.canvas.style.setProperty("-webkit-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("-moz-tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("tap-highlight-color", "rgba(0,0,0,0)", ""), this._stage.canvas.style.setProperty("user-select", "none", ""), this._stage.canvas.style.setProperty("-webkit-touch-callout", "none", ""), this._stage.canvas.style.setProperty("-webkit-user-select", "none", ""), this._stage.canvas.style.setProperty("-moz-user-select", "none", ""), this._stage.canvas.style.setProperty("-ms-user-select", "none", ""), this._stage.tickOnUpdate = !1, this._stage.mouseEnabled = !1, this._stage.canvas.width = this.factory.width, this._stage.canvas.height = this.factory.height;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + R.substr(c.hex(this.factory.bgColor, 8), 2, 6)), t.graphics.drawRect(0, 0, this.factory.width, this.factory.height), t.graphics.endFill(), this._stage.addChildAt(t, 0), createjs.Ticker.setFPS(this.factory.targetFramerate), createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED, createjs.Ticker.addEventListener("tick", Js(this, this._onEnterFrame)), this._stage.canvas.addEventListener("contextmenu", Js(this, this._onContextMenu), !1), window.addEventListener("unload", Js(this, this._onUnload))
        },
        _onUnload: function(t) {
            window.removeEventListener("unload", Js(this, this._onUnload)), this.get_session().save()
        },
        _onContextMenu: function(t) {
            var e, s;
            t.preventDefault(), t.stopImmediatePropagation(), null != this.overlay && (e = Js(h = this.overlay, h.activateButton), s = Dt.PAUSE, hs.delay(function() {
                e(s)
            }, 100))
        },
        _driverDisposer: function() {
            this._stage.canvas.removeEventListener("contextmenu", Js(this, this._onContextMenu))
        },
        _onEnterFrame: function(t) {
            null != t.paused && 1 == t.paused ? this._stage.tickOnUpdate = !1 : (this._updates++, this._updater(0), this._stage.tickOnUpdate = this.isActive, this._stageDynamic.update(t));
            t = k.string(window.innerWidth) + ":" + k.string(window.innerHeight);
            this._prevWindowSize != t && this._driverSetIsFullScreen(this.isFullScreen)
        },
        _driverSetIsEyeCandy: function(t) {},
        _driverSetIsFullScreen: function(t) {
            this._prevWindowSize = k.string(window.innerWidth) + ":" + k.string(window.innerHeight), this._scaleX = this._scaleY = 1;
            var e = this.factory.width,
                s = this.factory.height,
                i = window.innerWidth,
                n = window.innerHeight,
                _ = e < s,
                a = i < n;
            this.system.isRotated = !this.system.isDesktop && _ != a;
            _ = 0, a = 0;
            if (t) {
                var r = Math.min(i / e, n / s),
                    o = this.factory.fullScreenType;
                switch (o._hx_index) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this._scaleX = i / e, this._scaleY = n / s;
                        break;
                    case 3:
                        this._scaleX = this._scaleY = r;
                        break;
                    case 4:
                        r = r < .5 ? .25 : r < 1 ? .5 : Math.floor(r), this._scaleX = this._scaleY = r;
                        break;
                    case 5:
                        var h, c, l, u = o.value;
                        null != u.bleedWidth && null != u.bleedHeight && (l = e - 2 * k.parseInt(k.string(u.bleedWidth) + ""), c = s - 2 * k.parseInt(k.string(u.bleedHeight) + ""), h = Math.min(i / l, n / c), 1 == u.isBleedInternal && ((l = (u = e / s) / (c = Math.min(e / c, Math.max(l / s, i / n)))) < 1 && (l = c / u), h = Math.min(l * i / e, l * n / s)), this._scaleX = this._scaleY = h)
                }
                _ = Math.round((i - e * this._scaleX) / 2), a = Math.round((n - s * this._scaleY) / 2)
            }
            this._stage.canvas.style.setProperty("width", Math.round(e * this._scaleX) + "px", ""), this._stage.canvas.style.setProperty("height", Math.round(s * this._scaleY) + "px", ""), this._stage.canvas.style.setProperty("margin-left", _ + "px", ""), this._stage.canvas.style.setProperty("margin-top", a + "px", "")
        },
        __class__: gt
    });
    var mt = function(t, e, s, i, n, _, a, r, o, h, c, l, u, d, p, g, m) {
        it.call(this, t, e, s, i, n, _, a, r, o, h, c, l, u, d, p, g, m)
    };
    (e["awe6.core.drivers.createjs.Overlay"] = mt).__name__ = "awe6.core.drivers.createjs.Overlay", mt.__super__ = it, mt.prototype = t(it.prototype, {
        _driverInit: function() {
            Ps.__cast(this._borderView, St).context.mouseEnabled = !1, this._context.mouseEnabled = !1, this._pauseContext = new createjs.Container, this._pauseContext.mouseEnabled = !1;
            var t = new createjs.Shape;
            t.graphics.beginFill("#" + c.hex(this._pauseColor, 6)), t.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), t.alpha = this._pauseAlpha, this._pauseContext.addChild(t), this._flashContext = new createjs.Container, this._flashContext.mouseEnabled = !1
        },
        _updater: function(t) {
            null == t && (t = 0), it.prototype._updater.call(this, t), this._flashContext.alpha = this._flashAlpha, this._flashContext.visible = 0 != this._flashAlpha
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), this._flashContext.removeAllChildren();
            var n = new createjs.Shape;
            n.graphics.beginFill("#" + c.hex(i, 6)), n.graphics.drawRect(0, 0, this._kernel.factory.width, this._kernel.factory.height), this._flashContext.addChild(n), null == t && (t = e ? 500 : .5 * this._kernel.factory.targetFramerate), this._flashDuration = this._flashStartingDuration = t, this._flashAsTime = e, this._flashAlpha = this._flashStartingAlpha = 1 < s ? 1 : s < 0 ? 0 : s
        },
        __class__: mt
    });
    var ft = function(t, e, s) {
        nt.call(this, t, e, s)
    };
    (e["awe6.core.drivers.createjs.Preloader"] = ft).__name__ = "awe6.core.drivers.createjs.Preloader", ft.__super__ = nt, ft.prototype = t(nt.prototype, {
        _init: function() {
            this._context = new createjs.Container, this.view = new St(this._kernel, this._context), nt.prototype._init.call(this), this._system = this._kernel.system, this._isDesktop = this._system.isDesktop, this._audioHoldDelay = 0, this._completedDelay = 0;
            var t = this._isDecached ? "?dc=" + k.random(999999) : "",
                e = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
            null != this._proprietaryAudioFormat && "" != this._proprietaryAudioFormat && p.has(e, this._proprietaryAudioFormat) || (this._proprietaryAudioFormat = "mp3");
            var s = [];
            if (this._manifest = [], createjs.Sound.initializeDefaultPlugins()) {
                this._audioHoldDelay = this._getAudioHoldDelay();
                var i = this._isSoundDisabled || this._system.isAndroid && this._getIsStockAndroidBrowser();
                this._validSoundFormat = createjs.Sound.getCapability("ogg") ? "ogg" : createjs.Sound.getCapability(this._proprietaryAudioFormat) ? this._proprietaryAudioFormat : "noValidFormat", this._activePlugin = createjs.Sound.activePlugin;
                for (var n = 0, _ = this._assets; n < _.length;) {
                    var a = _[n];
                    ++n;
                    var r = R.substr(a, -3, null);
                    p.has(e, r) && (s.push(a), i || r != this._validSoundFormat || (r = "assets.audio." + R.substr(a.split("/").pop(), 0, -4), this._isFastTestMode || this._manifest.push({
                        src: a + t,
                        id: r
                    })))
                }
            }
            for (n = 0; n < s.length;) {
                a = s[n];
                ++n, R.remove(this._assets, a)
            }
            for (n = 0, _ = this._assets; n < _.length;) {
                a = _[n];
                ++n, this._manifest.push({
                    src: a + t,
                    id: a
                })
            }
            this._loadQueue = new createjs.LoadQueue(!this._kernel.isLocal && !this._isFastTestMode, ""), this._loadQueue.setMaxConnections(10), this._loadQueue.installPlugin(createjs.Sound), this._manifest = this._tools.shuffle(this._manifest), this._loadQueue.addEventListener("complete", Js(this, this._onComplete)), this._loadQueue.addEventListener("fileerror", Js(this, this._onError)), this._loadQueue.addEventListener("error", Js(this, this._onError));
            var n = Js(h = this._loadQueue, h.loadManifest),
                o = this._manifest;
            hs.delay(function() {
                n(o)
            }, 200)
        },
        _next: function() {},
        get_progress: function() {
            return this._loadQueue.progress
        },
        _onComplete: function(t) {
            this._isComplete || (this._isComplete = !0, ht.loadQueue = this._loadQueue, this._completedDelay = this._audioHoldDelay, this._loadQueue.removeEventListener("complete", Js(this, this._onComplete)), this._loadQueue.removeEventListener("fileerror", Js(this, this._onError)), this._loadQueue.removeEventListener("error", Js(this, this._onError)), 0 != this._audioHoldDelay && this._showAudioHoldMessage())
        },
        _onError: function(t) {
            as.trace([t, t.title, t.message, t.data], {
                fileName: "awe6/core/drivers/createjs/Preloader.hx",
                lineNumber: 148,
                className: "awe6.core.drivers.createjs.Preloader",
                methodName: "_onError"
            })
        },
        _showAudioHoldMessage: function() {},
        _updater: function(t) {
            null == t && (t = 0), nt.prototype._updater.call(this, t), this._isComplete && (this._completedDelay -= t, (0 <= this._audioHoldDelay && this._completedDelay <= 0 || this._kernel.inputs.keyboard.getIsKeyRelease(this._kernel.factory.keyNext) || this._kernel.inputs.mouse.getIsButtonRelease()) && (this._assets = []))
        },
        _getIsStockAndroidBrowser: function() {
            var t = -1 < this._system.userAgent.indexOf("Android") && -1 < this._system.userAgent.indexOf("Mozilla/5.0") && -1 < this._system.userAgent.indexOf("AppleWebKit"),
                e = new d("AppleWebKit/([\\d.]+)", ""),
                s = e.match(this._system.userAgent),
                i = s ? parseFloat(e.matched(1)) : 0,
                n = new d("Chrome/([\\d.]+)", ""),
                e = n.match(this._system.userAgent),
                n = e ? parseFloat(n.matched(1)) : 0;
            return t && (!!(s && i < 537) || !!e && n < 37)
        },
        _getAudioHoldDelay: function() {
            if (this._isSoundDisabled) return 0;
            try {
                if ("[WebAudioPlugin]" != createjs.Sound.activePlugin || "suspended" != createjs.Sound.activePlugin.context.state) return 0
            } catch (t) {}
            var t = -1;
            Object.prototype.hasOwnProperty.call(this._kernel.factory.config.h, "settings.audioHoldDelay") && (t = k.parseInt(this._kernel.factory.config.h["settings.audioHoldDelay"]));
            try {
                var e = this._kernel.factory._context.getStage().canvas.getAttribute("audioHoldDelay");
                null != e && "" != e && (t = k.parseInt(e))
            } catch (t) {}
            return t
        },
        __class__: ft
    });
    var yt = function(t) {
        _t.call(this, t)
    };
    (e["awe6.core.drivers.createjs.Profiler"] = yt).__name__ = "awe6.core.drivers.createjs.Profiler", yt.__super__ = _t, yt.prototype = t(_t.prototype, {
        _init: function() {
            _t.prototype._init.call(this), this._isMemoryEnabled = null != window.performance && null != window.performance.memory, this._width = 75, this._height = 24, this._marginHeight = 12;
            var t = new createjs.Shape;
            this._context.addChild(t), t.alpha = .25, this._isMemoryEnabled && (t.graphics.beginFill("#" + c.hex(this._backgroundColor, 6)), t.graphics.drawRect(0, 0, this._width, this._height), t.graphics.endFill()), t.graphics.beginFill("#" + c.hex(this._marginColor, 6)), t.graphics.drawRect(0, 0, this._width, this._marginHeight), t.graphics.endFill(), t.cache(0, 0, this._width, this._height), this._fpsTextField = new createjs.Text("", "", "#" + c.hex(this._fpsColor, 6)), this._context.addChild(this._fpsTextField), this._isMemoryEnabled && (this._memoryTextField = new createjs.Text("", "", "#" + c.hex(this._memoryColor, 6)), this._memoryTextField.y = 12, this._context.addChild(this._memoryTextField))
        },
        _driverUpdate: function() {
            var t, e = 0 | this._kernel.getFramerate(!0);
            Math.min(this._height, this._height / this._kernel.factory.targetFramerate * e);
            this._fpsTextField.text = this._fpsLabel + ": " + e + " / " + this._kernel.factory.targetFramerate, this._isMemoryEnabled && this._updates % this._kernel.factory.targetFramerate == 0 && (t = Math.round(window.performance.memory.usedJSHeapSize / 1024 / 1024), e = Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024), this._memoryTextField.text = this._memoryLabel + ": " + t + " / " + e)
        },
        __class__: yt
    });
    var Et = function(t, e) {
        at.call(this, t, e)
    };

    function xt(t, e) {
        rt.call(this, t, e)
    }(e["awe6.core.drivers.createjs.SceneTransition"] = Et).__name__ = "awe6.core.drivers.createjs.SceneTransition", Et.__super__ = at, Et.prototype = t(at.prototype, {
        _init: function() {
            at.prototype._init.call(this), this._kernel.scenes.get_scene().get_view().context.cache(0, 0, this._kernel.factory.width, this._kernel.factory.height);
            var t = new createjs.Bitmap(this._kernel.scenes.get_scene().get_view().context.cacheCanvas);
            this._kernel.scenes.get_scene().get_view().context.uncache(), this._context.mouseEnabled = !1, this._context.addChild(t)
        },
        _updater: function(t) {
            null == t && (t = 0), at.prototype._updater.call(this, t), this.isDisposed || (t = this.get_progress(), this._context.alpha = 1 - t)
        },
        __class__: Et
    }), (e["awe6.core.drivers.createjs.Session"] = xt).__name__ = "awe6.core.drivers.createjs.Session", xt.__super__ = rt, xt.prototype = t(rt.prototype, {
        _init: function() {
            var t = !0;
            null != this._kernel.getConfig("settings.sessionSaved") && (t = "false" != this._kernel.getConfig("settings.sessionSaved")), this._storage = t ? Ns.getLocalStorage() : Ns.getSessionStorage(), rt.prototype._init.call(this)
        },
        _driverLoad: function() {
            if (this._savedData = {}, null != window.document.cookie && Ms.exists(this._kernel.factory.id) && (this._savedData = this._tools.unserialize(Ms.get(this._kernel.factory.id)), this._driverSave(), Ms.remove(this._kernel.factory.id)), null != this._storage) try {
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
    var wt = function(t) {
        this._kernel = t, this.isRotated = !1, this.isAndroid = this.isChromeOs = this.isIos = this.isLinux = this.isMacOs = this.isSilk = this.isWindows = this.isWindowsPhone = this.isDesktop = !1, this.userAgent = u.navigator.userAgent, this.isSilk = new d("Silk", "").match(this.userAgent), this.isKaiOs = new d("KAIOS", "").match(this.userAgent), this.isCrosswalk = new d("Crosswalk", "").match(this.userAgent), this.isCordova = null != window.cordova, new d("Android", "").match(this.userAgent) ? this.isAndroid = !0 : new d("CrOS", "").match(this.userAgent) ? this.isChromeOs = !0 : new d("iP[ao]d|iPhone", "i").match(this.userAgent) ? this.isIos = !0 : new d("Linux", "").match(this.userAgent) ? this.isLinux = !0 : new d("Mac OS", "").match(this.userAgent) ? this.isMacOs = !0 : new d("Windows", "").match(this.userAgent) && (this.isWindows = !0, new d("Windows Phone", "i").match(this.userAgent) && (this.isWindowsPhone = !0)), (this.isWindows || this.isMacOs || this.isLinux && !this.isSilk) && (this.isDesktop = !0), this.isWindowsPhone && (this.isDesktop = !1)
    };
    (e["awe6.core.drivers.createjs.System"] = wt).__name__ = "awe6.core.drivers.createjs.System", wt.prototype = {
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
        __class__: wt,
        __properties__: {
            get_isFullScreenSupported: "get_isFullScreenSupported",
            get_isWebGL: "get_isWebGL"
        }
    };
    var St = function(t, e, s, i) {
        ot.call(this, t, e, s, i)
    };

    function bt(t, e, s, i) {
        null == i && (i = !0), null == s && (s = 100), null == e && (e = 100), this.isFlippedX = !1, this.isFlippedY = !1, this.width = e, this.height = s, this._context = new createjs.Container, this.setPosition(0, 0), i && ((i = new createjs.Shape).graphics.beginFill("#FF0000"), i.graphics.drawRect(0, 0, this.width, this.height), i.graphics.endFill(), i.visible = !1, this._context.addChild(i), this._context.mask = i), y.call(this, t, null, this._context)
    }

    function vt(t, e, s, i, n, _, a) {
        null == a && (a = !1), null == _ && (_ = !1), null == i && (i = ""), this.textStyle = n, this._isMultiline = _, this._isCached = a, bt.call(this, t, e, s, !1), this.set_text(i)
    }

    function Tt(t, e, s) {
        null == s && (s = 1e3), this._callbackFunction = e, this._duration = s, y.call(this, t)
    }(e["awe6.core.drivers.createjs.View"] = St).__name__ = "awe6.core.drivers.createjs.View", St.__super__ = ot, St.prototype = t(ot.prototype, {
        _init: function() {
            null == this.context && (this.context = new createjs.Container), ot.prototype._init.call(this)
        },
        _driverDisposer: function() {
            if (null != this.context && null != this.context.parent) try {
                this.context.parent.removeChild(this.context)
            } catch (t) {}
        },
        _driverDraw: function() {
            null != this._container && null != this._container.parent && this._container.parent.removeChild(this._container), this._container = new createjs.Container, this._container.mouseEnabled = !1, this.context.addChild(this._container);
            for (var t = this._children, e = 0; e < t.length;) {
                var s = t[e];
                ++e, s.isVisible && this._container.addChild(s.context)
            }
        },
        set_x: function(t) {
            return this.context.x = t, ot.prototype.set_x.call(this, t)
        },
        set_y: function(t) {
            return this.context.y = t, ot.prototype.set_y.call(this, t)
        },
        __class__: St
    }), (e["awe6.core.drivers.createjs.extras.gui.GuiEntity"] = bt).__name__ = "awe6.core.drivers.createjs.extras.gui.GuiEntity", bt.__interfaces__ = [E], bt.__super__ = y, bt.prototype = t(y.prototype, {
        setPosition: function(t, e) {
            this.set_x(t), this.set_y(e)
        },
        set_x: function(t) {
            return this.x = t, this._context.x = this.x, this.x
        },
        set_y: function(t) {
            return this.y = t, this._context.y = this.y, this.y
        },
        __class__: bt,
        __properties__: t(y.prototype.__properties__, {
            set_y: "set_y",
            set_x: "set_x"
        })
    }), (e["awe6.core.drivers.createjs.extras.gui.Text"] = vt).__name__ = "awe6.core.drivers.createjs.extras.gui.Text", vt.__super__ = bt, vt.prototype = t(bt.prototype, {
        _init: function() {
            bt.prototype._init.call(this), this._textField = new createjs.Text, this._textField.text = this.text, this._draw(), this._context.addChild(this._textField), this._isDirty = !1, this._prevTextStyle = this.textStyle.toString()
        },
        _updater: function(t) {
            null == t && (t = 0), bt.prototype._updater.call(this, t), this._isDirty = this._isDirty || this._prevTextStyle != this.textStyle.toString(), this._isDirty && this._draw(), this._prevTextStyle = this.textStyle.toString()
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
                var t, e, s = c.hex(this.textStyle.color, 6);
                this._textField.color = "#" + s, this._textField.font = (this.textStyle.isBold ? "bold " : "") + (this.textStyle.isItalic ? "italic " : "") + this.textStyle.size + "px '" + this.textStyle.font + "'", this._textField.lineHeight = this.textStyle.spacingVertical, null != this.textStyle.filters && ((t = this._textField).shadow = null, e = this.textStyle.filters.slice(), null != this._textFieldOutline && null != this._textFieldOutline.parent && this._textFieldOutline.parent.removeChild(this._textFieldOutline), this._textFieldOutline = null, 2 != e.length && 6 != e.length || (this._textFieldOutline = this._textField.clone(), s = c.hex(e.shift(), 6), this._textFieldOutline.color = "#" + s, s = e.shift(), this._textFieldOutline.outline = 2 * s, this._context.addChildAt(this._textFieldOutline, 0), t = this._textFieldOutline), 4 == e.length && (t.shadow = new createjs.Shadow("#" + c.hex(e[0], 6), e[1], e[2], e[3])))
            }
            this._isCached && this._context.cache(0, 0, this.width, this.height), this._isDirty = !1
        },
        set_text: function(t) {
            return null == t && (t = ""), this.text == t || (this.text = t, this._textField.text = this.text, null != this._textFieldOutline && (this._textFieldOutline.text = this.text), this._isDirty = !0), this.text
        },
        __class__: vt,
        __properties__: t(bt.prototype.__properties__, {
            set_text: "set_text"
        })
    }), (e["awe6.extras.Delay"] = Tt).__name__ = "awe6.extras.Delay", Tt.__super__ = y, Tt.prototype = t(y.prototype, {
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), this._duration -= t, this._duration <= 0 && (null != this._callbackFunction && this._callbackFunction(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Tt
    }), E = function(t, e, s, i, n, _, a, r, o, h, c) {
        null == h && (h = !1), null == o && (o = !1), null == r && (r = !1), null == s && (s = 1e3), null == e && (e = 0), this._delay = e, this._duration = s, this._object = i, this._field = n, this._originalValue = _, this._newValue = a, this._isRelative = r, this._isEaseIn = o, this._isEaseOut = h, this._callback = c, this._prevProgress = 0, y.call(this, t), this._updater()
    }, (e["awe6.extras.Easer"] = E).__name__ = "awe6.extras.Easer", E.__super__ = y, E.prototype = t(y.prototype, {
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t);
            var e = (this._age - this._delay) / this._duration,
                t = 1 < e ? 1 : e < 0 ? 0 : e;
            this._isEaseIn && (t = 1 - Math.cos(.5 * t * Math.PI)), this._isEaseOut && (t = Math.sin(.5 * t * Math.PI)), .99999 <= t && (t = 1), this._isRelative ? (e = this._prevProgress, e = this._originalValue * (1 - e) + this._newValue * e, e = this._originalValue * (1 - t) + this._newValue * t - e, C.setProperty(this._object, this._field, C.getProperty(this._object, this._field) + e)) : C.setProperty(this._object, this._field, this._originalValue * (1 - t) + this._newValue * t), 1 == (this._prevProgress = t) && (null != this._callback && this._callback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: E
    });
    var At = A["awe6.interfaces.EAgenda"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 6,
                value: t,
                __enum__: "awe6.interfaces.EAgenda",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    At.__constructs__ = [At.ALWAYS, At.BIRTH, At.DEATH, At.STANDARD, At.ATTACK, At.DEFEND, At.SUB_TYPE];
    var Ct = A["awe6.interfaces.EAudioChannel"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 4,
                value: t,
                __enum__: "awe6.interfaces.EAudioChannel",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ct.__constructs__ = [Ct.DEFAULT, Ct.EFFECTS, Ct.INTERFACE, Ct.MUSIC, Ct.SUB_TYPE];
    var kt = A["awe6.interfaces.EFullScreen"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EFullScreen",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    kt.__constructs__ = [kt.DISABLED, kt.NO_SCALE, kt.SCALE_ASPECT_RATIO_IGNORE, kt.SCALE_ASPECT_RATIO_PRESERVE, kt.SCALE_NEAREST_MULTIPLE, kt.SUB_TYPE];
    var Rt = A["awe6.interfaces.EJoypadButton"] = {
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
    Rt.__constructs__ = [Rt.FIRE, Rt.UP, Rt.RIGHT, Rt.DOWN, Rt.LEFT, Rt.PRIMARY, Rt.SECONDARY];
    var It = A["awe6.interfaces.EJoypadTouch"] = {
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
        JOYSTICK: ((h = function(t) {
            return {
                _hx_index: 2,
                distance: t,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: s
            }
        })._hx_name = "JOYSTICK", h.__params__ = ["distance"], h),
        SWIPE: ((h = function(t) {
            return {
                _hx_index: 3,
                speed: t,
                __enum__: "awe6.interfaces.EJoypadTouch",
                toString: s
            }
        })._hx_name = "SWIPE", h.__params__ = ["speed"], h)
    };
    It.__constructs__ = [It.DISABLED, It.DPAD, It.JOYSTICK, It.SWIPE];
    var Ut = A["awe6.interfaces.EKey"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 99,
                value: t,
                __enum__: "awe6.interfaces.EKey",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Ut.__constructs__ = [Ut.NUM_LOCK, Ut.CLEAR, Ut.HELP, Ut.ALT, Ut.BACKSPACE, Ut.CAPS_LOCK, Ut.CONTROL, Ut.DELETE, Ut.DOWN, Ut.END, Ut.ENTER, Ut.ESCAPE, Ut.F1, Ut.F10, Ut.F11, Ut.F12, Ut.F13, Ut.F14, Ut.F15, Ut.F2, Ut.F3, Ut.F4, Ut.F5, Ut.F6, Ut.F7, Ut.F8, Ut.F9, Ut.HOME, Ut.INSERT, Ut.LEFT, Ut.NUMPAD_0, Ut.NUMPAD_1, Ut.NUMPAD_2, Ut.NUMPAD_3, Ut.NUMPAD_4, Ut.NUMPAD_5, Ut.NUMPAD_6, Ut.NUMPAD_7, Ut.NUMPAD_8, Ut.NUMPAD_9, Ut.NUMPAD_ADD, Ut.NUMPAD_DECIMAL, Ut.NUMPAD_DIVIDE, Ut.NUMPAD_ENTER, Ut.NUMPAD_MULTIPLY, Ut.NUMPAD_SUBTRACT, Ut.PAGE_DOWN, Ut.PAGE_UP, Ut.RIGHT, Ut.SHIFT, Ut.SPACE, Ut.TAB, Ut.UP, Ut.A, Ut.B, Ut.C, Ut.D, Ut.E, Ut.F, Ut.G, Ut.H, Ut.I, Ut.J, Ut.K, Ut.L, Ut.M, Ut.N, Ut.O, Ut.P, Ut.Q, Ut.R, Ut.S, Ut.T, Ut.U, Ut.V, Ut.W, Ut.X, Ut.Y, Ut.Z, Ut.NUMBER_0, Ut.NUMBER_1, Ut.NUMBER_2, Ut.NUMBER_3, Ut.NUMBER_4, Ut.NUMBER_5, Ut.NUMBER_6, Ut.NUMBER_7, Ut.NUMBER_8, Ut.NUMBER_9, Ut.COLON, Ut.EQUALS, Ut.HYPHEN, Ut.SLASH, Ut.TILDE, Ut.SQUARELEFT, Ut.SQUARERIGHT, Ut.BACKSLASH, Ut.APOSTROPHE, Ut.TOPLEFT, Ut.SUB_TYPE];
    var Pt = A["awe6.interfaces.EMessage"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 4,
                value: t,
                __enum__: "awe6.interfaces.EMessage",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Pt.__constructs__ = [Pt.DISPOSE, Pt.INIT, Pt.PAUSE, Pt.RESUME, Pt.SUB_TYPE];
    var Nt = A["awe6.interfaces.EMouseButton"] = {
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
    Nt.__constructs__ = [Nt.LEFT, Nt.MIDDLE, Nt.RIGHT];
    var Mt = A["awe6.interfaces.EMouseCursor"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EMouseCursor",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Mt.__constructs__ = [Mt.ARROW, Mt.AUTO, Mt.BUTTON, Mt.HAND, Mt.IBEAM, Mt.SUB_TYPE];
    var Dt = A["awe6.interfaces.EOverlayButton"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 5,
                value: t,
                __enum__: "awe6.interfaces.EOverlayButton",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Dt.__constructs__ = [Dt.BACK, Dt.MUTE, Dt.UNMUTE, Dt.PAUSE, Dt.UNPAUSE, Dt.SUB_TYPE];
    var Lt = A["awe6.interfaces.EScene"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 18,
                value: t,
                __enum__: "awe6.interfaces.EScene",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };
    Lt.__constructs__ = [Lt.SPLASH, Lt.INTRO, Lt.SELECT_SESSION, Lt.SELECT_STORY, Lt.SELECT_LEVEL, Lt.INSTRUCTIONS, Lt.SETTINGS, Lt.MENU, Lt.AVATAR, Lt.SHOP, Lt.REWARDS, Lt.LEADERBOARD, Lt.GAME, Lt.INTERSTITIAL, Lt.CINEMATIC, Lt.RESULTS, Lt.EXIT, Lt.TEST, Lt.SUB_TYPE];
    var Bt = A["awe6.interfaces.ETextAlign"] = {
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
    Bt.__constructs__ = [Bt.JUSTIFY, Bt.LEFT, Bt.CENTER, Bt.RIGHT];
    var Ot = A["awe6.interfaces.ETextStyle"] = {
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
        SUB_TYPE: ((h = function(t) {
            return {
                _hx_index: 6,
                value: t,
                __enum__: "awe6.interfaces.ETextStyle",
                toString: s
            }
        })._hx_name = "SUB_TYPE", h.__params__ = ["value"], h)
    };

    function Ft(t) {
        this._context = new createjs.Container, this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, this._context.mouseChildren = !1, this._context.mouseEnabled = !1, y.call(this, t, null, this._context)
    }

    function Vt(t) {
        this._kernel = t, this._tools = this._kernel.tools, this._session = this._kernel.get_session(), this._assets = this._kernel.assets, this._factory = t.factory
    }

    function Ht(t) {
        this._audio = t.audio, Ft.call(this, t)
    }

    function Yt(t) {
        ht.call(this, t)
    }
    Ot.__constructs__ = [Ot.BUTTON, Ot.BODY, Ot.HEADLINE, Ot.SUBHEAD, Ot.SMALLPRINT, Ot.OVERSIZED, Ot.SUB_TYPE], (e["cbcmtb.AEntity"] = Ft).__name__ = "cbcmtb.AEntity", Ft.__super__ = y, Ft.prototype = t(y.prototype, {
        __class__: Ft
    }), (e["cbcmtb.AVo"] = Vt).__name__ = "cbcmtb.AVo", Vt.prototype = {
        __class__: Vt
    }, (e["cbcmtb.AccessibilityManager"] = Ht).__name__ = "cbcmtb.AccessibilityManager", Ht.__super__ = Ft, Ht.prototype = t(Ft.prototype, {
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
                audioStart: Js(h = this._kernel.audio, h.start),
                audioTransform: Js(h = this._kernel.audio, h.transform)
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
                show: Js(this, this._onApiControlPanelShow),
                close: Js(this, this._onApiControlPanelClose),
                update: Js(this, this._onApiUpdate)
            }), this._api.update(), this._state.isFirstUpdate = !1), this._doOverrides(), Ft.prototype._init.call(this)
        },
        _updater: function(t) {
            null == t && (t = 0), Ft.prototype._updater.call(this, t), this._state.buttonActivateDelayDuration -= t, this._buttonsInputs()
        },
        _doOverrides: function() {
            this._kernel.audio.start = Js(this, this._overrideAudioStart), this._kernel.audio.transform = Js(this, this._overrideAudioTransform)
        },
        _overrideAudioStart: function(t, e, s, i, n, _, a, r) {
            if (null == a && (a = !1), null == _ && (_ = 0), null == n && (n = 1), null == i && (i = 0), null == s && (s = 1), null != e) switch (e._hx_index) {
                case 0:
                case 1:
                case 2:
                    n *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    n *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioStart(t, e, s, i, n, _, a, r)
        },
        _overrideAudioTransform: function(t, e, s, i, n) {
            if (null == n && (n = !1), null == i && (i = 0), null == s && (s = 1), !this._state.isSkip && null != e) switch (e._hx_index) {
                case 0:
                case 1:
                case 2:
                    s *= this.getAdjustedAudioEffectsVolume();
                    break;
                case 3:
                    s *= this.getAdjustedAudioMusicVolume()
            }
            this._supers.audioTransform(t, e, s, i, n)
        },
        _onApiControlPanelShow: function() {
            this._state.isModalVisible = !0, createjs.Ticker.setPaused(!0), this._state.wasMute = this._audio.isMute, this._audio.set_isMute(!0)
        },
        _onApiControlPanelClose: function() {
            this._state.isModalVisible = !1, createjs.Ticker.setPaused(!1), this._audio.set_isMute(this._state.wasMute)
        },
        _onApiUpdate: function(t) {
            var e, s;
            t.dateUpdated = R.strDate(k.string(t.dateUpdated)), t.version <= this._state.data.version || (t.audioIsMute != this._state.data.audioIsMute && (as.trace("Audio IsMute Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 283,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.wasMute = t.audioIsMute, this._state.isFirstUpdate && this._audio.set_isMute(t.audioIsMute)), t.audioEffectsVolume != this._state.data.audioEffectsVolume && (as.trace("Audio Effects Volume Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 293,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = 0 == this._state.data.audioEffectsVolume, e = t.audioEffectsVolume * (s ? .5 : 1 / this._state.data.audioEffectsVolume), this._state.isSkip = !0, this._audio.transform(null, Ct.EFFECTS, e, null, !s), this._audio.transform(null, Ct.INTERFACE, e, null, !s), this._audio.transform(null, Ct.DEFAULT, e, null, !s), this._state.isSkip = !1), t.audioMusicVolume != this._state.data.audioMusicVolume && (as.trace("Audio Music Volume Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 304,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = 0 == this._state.data.audioMusicVolume, e = t.audioMusicVolume * (s ? .5 : 1 / this._state.data.audioMusicVolume), this._state.isSkip = !0, this._audio.transform(null, Ct.MUSIC, e, null, !s), this._state.isSkip = !1), t.audioVoiceVolume != this._state.data.audioVoiceVolume && as.trace("Audio Voice Volume Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 311,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesIsDisabled != this._state.data.subtitlesIsDisabled && as.trace("Subtitles IsDisabled Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 312,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.subtitlesSize != this._state.data.subtitlesSize && as.trace("Subtitles Size Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 313,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsIntensity != this._state.data.visualsIntensity && as.trace("Visuals Intensity Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 314,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), t.visualsContrast != this._state.data.visualsContrast && (as.trace("Visuals Contrast Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 317,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), s = this.getAdjustedVisualsContrast(t.visualsContrast), this._stageCanvas.style.filter = "contrast(" + s + ")"), t.gameplayChallenge != this._state.data.gameplayChallenge && as.trace("Gameplay Challenge Changed", {
                fileName: "src/cbcmtb/AccessibilityManager.hx",
                lineNumber: 321,
                className: "cbcmtb.AccessibilityManager",
                methodName: "_onApiUpdate"
            }), this._state.data = t)
        },
        buttonsRegister: function(s, i, t) {
            null == t && (t = 2e3);
            var n = this;
            this._state.buttonsCache = this._state.buttons, this._state.buttonActivateDelayDuration = t, null != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), this._state.buttonHighlighted = null, this._state.buttons = [], null != s && hs.delay(function() {
                var t = s,
                    e = s.get_agenda();
                n._state.buttons = t.getEntitiesByClass(we, e, !0), !Ps.__implements(s, V) || null != (e = n._kernel.overlay._buttonPause) && n._state.buttons.push(e), n._state.buttons.sort(function(t, e) {
                    return Math.round(1e3 * (t.getAccessibilityPosition().y - e.getAccessibilityPosition().y))
                }), 0 < n._state.buttons.length && (n._state.buttonHighlighted = n._state.buttons[0]), null != i && 0 <= n._state.buttons.indexOf(i) && (n._state.buttonHighlighted = i)
            }, 1)
        },
        buttonsRevert: function() {
            null != this._state.buttonsCache && (this._state.buttons = this._state.buttonsCache), (this._state.buttonsCache = null) != this._state.buttonHighlighted && this._state.buttonHighlighted.highlight(!1), 0 < this._state.buttons.length && (this._state.buttonHighlighted = this._state.buttons[0])
        },
        _buttonsInputs: function() {
            if (0 != this._state.buttons.length) {
                var t = this._kernel.inputs.keyboard.getIsKeyPress(Ut.UP) || this._kernel.inputs.keyboard.getIsKeyPress(Ut.W),
                    e = this._kernel.inputs.keyboard.getIsKeyPress(Ut.RIGHT) || this._kernel.inputs.keyboard.getIsKeyPress(Ut.D),
                    s = this._kernel.inputs.keyboard.getIsKeyPress(Ut.DOWN) || this._kernel.inputs.keyboard.getIsKeyPress(Ut.S),
                    i = this._kernel.inputs.keyboard.getIsKeyPress(Ut.LEFT) || this._kernel.inputs.keyboard.getIsKeyPress(Ut.A),
                    n = this._state.buttonActivateDelayDuration <= 0 && (this._kernel.inputs.keyboard.getIsKeyPress(Ut.ENTER) || this._kernel.inputs.keyboard.getIsKeyPress(Ut.SPACE));
                if (t || e || s || i) {
                    if (!this._state.buttonHighlighted.get_isHighlighted()) return void this._state.buttonHighlighted.highlight(!0);
                    if (this._state.buttons.length <= 1) return;
                    for (var _ = i ? .51 : s ? .26 : e ? .01 : t ? .76 : 0, a = this._state.buttonHighlighted.getAccessibilityPosition(), r = [], o = 0, h = this._state.buttons; o < h.length;) {
                        var c = h[o];
                        ++o, c != this._state.buttonHighlighted && c.get_isHighlightable() && r.push(c)
                    }
                    for (var l = r, u = new Array(l.length), r = 0, o = l.length; r < o;) {
                        var d = r++,
                            p = l[d],
                            g = p.getAccessibilityPosition(),
                            m = a.x - g.x,
                            f = a.y - g.y,
                            g = Math.sqrt(m * m + f * f),
                            m = (Math.atan2(f, m) / (2 * Math.PI) - _ + 10) % 1;
                        .5 < m && (m = 1 - m);
                        g = m - g / 1e4;
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
        __class__: Ht,
        __properties__: t(Ft.prototype.__properties__, {
            get__isApi: "get__isApi"
        })
    }), (e["cbcmtb.AssetManager"] = Yt).__name__ = "cbcmtb.AssetManager", Yt.__super__ = ht, Yt.prototype = t(ht.prototype, {
        _init: function() {
            ht.prototype._init.call(this), this._factory = this._kernel.factory, this.overlayPauseUp = this._createView(Gt.OVERLAY_PAUSE_UP), this.overlayPauseOver = this._createView(Gt.OVERLAY_PAUSE_OVER)
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
            var e, s = new createjs.Container,
                i = new createjs.Bitmap(this.getAsset("assets/gui/Buttons.png"));
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
            return i.sourceRect = e, i.cache(0, 0, i.sourceRect.width, i.sourceRect.height), s.addChild(i), new St(this._kernel, s)
        },
        __class__: Yt,
        __properties__: t(ht.prototype.__properties__, {
            get_buttonSmallUp: "get_buttonSmallUp",
            get_buttonSmallOver: "get_buttonSmallOver",
            get_buttonUp: "get_buttonUp",
            get_buttonOver: "get_buttonOver"
        })
    });
    var Gt = A["cbcmtb.EAsset"] = {
        __ename__: "cbcmtb.EAsset",
        __constructs__: null,
        BUTTON_UP: {
            _hx_name: "BUTTON_UP",
            _hx_index: 0,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_OVER: {
            _hx_name: "BUTTON_OVER",
            _hx_index: 1,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_SMALL_UP: {
            _hx_name: "BUTTON_SMALL_UP",
            _hx_index: 2,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_SMALL_OVER: {
            _hx_name: "BUTTON_SMALL_OVER",
            _hx_index: 3,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_TWITTER_UP: {
            _hx_name: "BUTTON_TWITTER_UP",
            _hx_index: 4,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_TWITTER_OVER: {
            _hx_name: "BUTTON_TWITTER_OVER",
            _hx_index: 5,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_FACEBOOK_UP: {
            _hx_name: "BUTTON_FACEBOOK_UP",
            _hx_index: 6,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        BUTTON_FACEBOOK_OVER: {
            _hx_name: "BUTTON_FACEBOOK_OVER",
            _hx_index: 7,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        OVERLAY_PAUSE_UP: {
            _hx_name: "OVERLAY_PAUSE_UP",
            _hx_index: 8,
            __enum__: "cbcmtb.EAsset",
            toString: s
        },
        OVERLAY_PAUSE_OVER: {
            _hx_name: "OVERLAY_PAUSE_OVER",
            _hx_index: 9,
            __enum__: "cbcmtb.EAsset",
            toString: s
        }
    };

    function jt(t, e, s) {
        this.COLOR_GREY = 5789784, this.COLOR_BLACK = 0, this.COLOR_WHITE = 16777215, this.TEXTSTYLE_HUD_COINS = Ot.SUB_TYPE("HUD_COINS"), this.TEXTSTYLE_HUD_TIMER = Ot.SUB_TYPE("HUD_TIMER"), this.TEXTSTYLE_HUD_TITLE = Ot.SUB_TYPE("HUD_TITLE"), this.TEXTSTYLE_PANEL_STATS = Ot.SUB_TYPE("PANEL_STATS"), this.TEXTSTYLE_PANEL_MESSAGE = Ot.SUB_TYPE("PANEL_MESSAGE"), this.TEXTSTYLE_PANEL_TITLE = Ot.SUB_TYPE("PANEL_TITLE"), this.MESSAGE_FINISH_LINE = Pt.SUB_TYPE("FINISH_LINE"), ut.call(this, t, e, s)
    }
    Gt.__constructs__ = [Gt.BUTTON_UP, Gt.BUTTON_OVER, Gt.BUTTON_SMALL_UP, Gt.BUTTON_SMALL_OVER, Gt.BUTTON_TWITTER_UP, Gt.BUTTON_TWITTER_OVER, Gt.BUTTON_FACEBOOK_UP, Gt.BUTTON_FACEBOOK_OVER, Gt.OVERLAY_PAUSE_UP, Gt.OVERLAY_PAUSE_OVER], (e["cbcmtb.Factory"] = jt).__name__ = "cbcmtb.Factory", jt.__super__ = ut, jt.prototype = t(ut.prototype, {
        _configurer: function(t) {
            null == t && (t = !1), t && (this.id = "cbcmtb", t = "1", null != rs.getString("revision") && (t = rs.getString("revision").split("\r\n")[0]), this.version = "1.1." + t, this.author = "Hypersurge", this.isDecached = !1, this.width = 720, this.height = 405, this.joypadTouchType = It.JOYSTICK(30), this.bgColor = 0, this.startingSceneType = Lt.INTRO, this.targetFramerate = 30, this.isFixedUpdates = !0, this.keyNext = null)
        },
        _launchKernel: function() {
            ut.prototype._launchKernel.call(this), this._kernel.set_session(this.createSession("defaultSessionId")), "true" == this._kernel.getConfig("settings.disableEyeCandy") && this._kernel.set_isEyeCandy(!1)
        },
        createAssetManager: function() {
            return null == this._assets && (this._assets = new Yt(this._kernel), this.accessibility = new Ht(this._kernel)), this._assets
        },
        createLogger: function() {
            var t = k.string(this._kernel.getConfig("settings.googleAnalytics.id"));
            return "" != t ? new zt(this._kernel, t) : ut.prototype.createLogger.call(this)
        },
        createOverlay: function() {
            var t = new Oe(this._kernel);
            return t.addEntity(this.accessibility, null, !0, 90), t
        },
        createPreloader: function() {
            return new Wt(this._kernel, this._getAssetUrls(), this.isDecached)
        },
        createScene: function(t) {
            switch (this._kernel.log("scene: " + k.string(t)), t._hx_index) {
                case 1:
                    return new $e(this._kernel, t);
                case 4:
                    return new is(this._kernel, t);
                case 5:
                    return new qe(this._kernel, t);
                case 7:
                    return new ts(this._kernel, t);
                case 8:
                    return new Ze(this._kernel, t);
                case 9:
                    return new ns(this._kernel, t);
                case 12:
                    return new Je(this._kernel, t);
                case 15:
                    return new es(this._kernel, t)
            }
            return ut.prototype.createScene.call(this, t)
        },
        createSceneTransition: function(t, e) {
            return new ss(this._kernel)
        },
        createSession: function(t) {
            return new Xt(this._kernel, t)
        },
        createTextStyle: function(t) {
            null == t && (t = Ot.BODY);
            var e, s = this._kernel.getConfig("settings.font.name");
            if (null == t) e = new G(s, 12, 8421504);
            else switch (t._hx_index) {
                case 0:
                    e = new G(s, 18, this.COLOR_WHITE, !1, !1, Bt.CENTER, 0, 0, 0, []);
                    break;
                case 1:
                    e = new G(s, 16, this.COLOR_BLACK, !1, !1, Bt.LEFT, 0, 18, 0, []);
                    break;
                case 2:
                    e = new G(s, 22, this.COLOR_WHITE, !1, !1, Bt.CENTER, 0, 0, 0, []);
                    break;
                case 3:
                    e = new G(s, 22, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                    break;
                case 4:
                    e = new G("Arial", 11, this.COLOR_GREY, !1, !1, Bt.CENTER, 0, 0, 0, []);
                    break;
                case 5:
                    e = new G(s, 44, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                    break;
                case 6:
                    switch (t.value) {
                        case "HUD_COINS":
                            e = new G(s, 22, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                            break;
                        case "HUD_TIMER":
                            e = new G(s, 45, this.COLOR_WHITE, !1, !1, Bt.LEFT, 0, 0, 0, []);
                            break;
                        case "HUD_TITLE":
                            e = new G(s, 12, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_MESSAGE":
                            e = new G(s, 12, this.COLOR_WHITE, !1, !1, Bt.CENTER, 0, 0, 0, []);
                            break;
                        case "PANEL_STATS":
                            e = new G(s, 12, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PANEL_TITLE":
                            e = new G(s, 19, this.COLOR_WHITE, !1, !1, Bt.RIGHT, 0, 0, 0, []);
                            break;
                        case "PRELOADER":
                            e = new G(s, 14, this.COLOR_WHITE, !1, !1, Bt.CENTER, 0, 0, 0, []);
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
                    return Lt.AVATAR;
                case 12:
                    return Lt.SELECT_LEVEL;
                case 5:
                case 8:
                case 9:
                case 13:
                case 15:
                    return Lt.MENU
            }
            return ut.prototype.getBackSceneType.call(this, t)
        },
        getNextSceneType: function(t) {
            switch (t._hx_index) {
                case 1:
                    return Lt.MENU;
                case 4:
                    return Lt.GAME;
                case 5:
                case 7:
                    return Lt.AVATAR;
                case 8:
                case 9:
                    return Lt.SELECT_LEVEL;
                case 12:
                    return Lt.RESULTS;
                case 13:
                case 15:
                    return Lt.SHOP
            }
            return ut.prototype.getNextSceneType.call(this, t)
        },
        createCanvas: function(t, e) {
            var s = window.document.createElement("canvas");
            return s.width = t, s.height = e, s
        },
        __class__: jt
    });
    var zt = function(t, e) {
        if (this._kernel = t, this._id = e, this._factory = this._kernel.factory, this._isTrackerEnabled = !t.isLocal && "true" == t.getConfig("settings.googleAnalytics.enabled"), this._isTrackerEnabled) try {
            this._gaLib = ga, this._gaLib("create", this._id, "auto"), this._gaLib("send", "pageview"), as.trace("Google Analytics enabled with property ID " + this._id, {
                fileName: "src/cbcmtb/LoggerGoogleAnalytics.hx",
                lineNumber: 39,
                className: "cbcmtb.LoggerGoogleAnalytics",
                methodName: "new"
            })
        } catch (t) {
            this._isTrackerEnabled = !1, as.trace("Google Analytics failed with property ID " + this._id, {
                fileName: "src/cbcmtb/LoggerGoogleAnalytics.hx",
                lineNumber: 44,
                className: "cbcmtb.LoggerGoogleAnalytics",
                methodName: "new"
            })
        }
    };

    function Kt() {}(e["cbcmtb.LoggerGoogleAnalytics"] = zt).__name__ = "cbcmtb.LoggerGoogleAnalytics", zt.__interfaces__ = [g], zt.prototype = {
        log: function(t) {
            R.substr(k.string(t), 0, 25);
            t = k.string(t).split(": ");
            this._isTrackerEnabled ? this._gaLib("send", {
                hitType: "event",
                eventCategory: t[0],
                eventAction: t[1],
                eventLabel: t[2]
            }) : as.trace("Logger:" + k.string([t[0], t[1], t[2]]), {
                fileName: "src/cbcmtb/LoggerGoogleAnalytics.hx",
                lineNumber: 64,
                className: "cbcmtb.LoggerGoogleAnalytics",
                methodName: "log"
            })
        },
        __class__: zt
    }, (e["cbcmtb.Main"] = Kt).__name__ = "cbcmtb.Main", Kt.main = function() {
        var t = window.document.getElementById("gameCanvas"),
            e = Kt.getParams().h.lang;
        null != e && (s = "assets/__Config_" + e + ".xml", t.setAttribute("config", s));
        var s = new createjs.Stage(t),
            t = new createjs.Container;
        s.addChild(t), Kt.factory = new jt(t, !1, rs.getString("config"))
    }, Kt.getParams = function() {
        for (var t = R.substr(u.location.search, 1, null), e = new bs, s = 0, i = new d("[&;]", "g").split(t); s < i.length;) {
            var n = i[s];
            ++s;
            var _ = n.split("=");
            _.length < 2 || (n = _.shift(), n = decodeURIComponent(n.split("+").join(" ")), _ = _.join("="), _ = decodeURIComponent(_.split("+").join(" ")), e.h[n] = _)
        }
        return e
    };
    var Wt = function(t, e, s) {
        ft.call(this, t, e, s)
    };
    (e["cbcmtb.Preloader"] = Wt).__name__ = "cbcmtb.Preloader", Wt.__super__ = ft, Wt.prototype = t(ft.prototype, {
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
            var t = new ze(this._kernel, this._kernel.factory.width, 20, k.string(this._kernel.getConfig("gui.audioHoldMessage")).toUpperCase(), this._kernel.factory.createTextStyle(Ot.SUB_TYPE("PRELOADER")));
            t.setPosition(0, this._bg.y - 6), this.get_view().addChild(t.get_view()), this._context.removeChild(this._bg), this._context.removeChild(this._fg)
        },
        __class__: Wt
    });
    var Xt = function(t, e) {
        xt.call(this, t, e)
    };
    (e["cbcmtb.Session"] = Xt).__name__ = "cbcmtb.Session", Xt.__super__ = xt, Xt.prototype = t(xt.prototype, {
        _init: function() {
            this._version = 3, xt.prototype._init.call(this)
        },
        _getter: function() {
            xt.prototype._getter.call(this), this._upgradeSpeedUnitA = this._getValidatedInteger(this._data.upgradeSpeedUnitA), this._upgradeSteeringUnitA = this._getValidatedInteger(this._data.upgradeSteeringUnitA), this._upgradeAccelerationUnitA = this._getValidatedInteger(this._data.upgradeAccelerationUnitA), this._upgradeBoostUnitA = this._getValidatedInteger(this._data.upgradeBoostUnitA), this._medalLevel1UnitA = this._getValidatedInteger(this._data.medalLevel1UnitA), this._medalLevel2UnitA = this._getValidatedInteger(this._data.medalLevel2UnitA), this._medalLevel3UnitA = this._getValidatedInteger(this._data.medalLevel3UnitA), this._coinsUnitA = this._getValidatedInteger(this._data.coinsUnitA), this._upgradeSpeedUnitB = this._getValidatedInteger(this._data.upgradeSpeedUnitB), this._upgradeSteeringUnitB = this._getValidatedInteger(this._data.upgradeSteeringUnitB), this._upgradeAccelerationUnitB = this._getValidatedInteger(this._data.upgradeAccelerationUnitB), this._upgradeBoostUnitB = this._getValidatedInteger(this._data.upgradeBoostUnitB), this._medalLevel1UnitB = this._getValidatedInteger(this._data.medalLevel1UnitB), this._medalLevel2UnitB = this._getValidatedInteger(this._data.medalLevel2UnitB), this._medalLevel3UnitB = this._getValidatedInteger(this._data.medalLevel3UnitB), this._coinsUnitB = this._getValidatedInteger(this._data.coinsUnitB)
        },
        _getValidatedInteger: function(t) {
            return null == t || isNaN(t) ? 0 : t
        },
        _setter: function() {
            xt.prototype._setter.call(this), this._data.upgradeSpeedUnitA = this._upgradeSpeedUnitA, this._data.upgradeSteeringUnitA = this._upgradeSteeringUnitA, this._data.upgradeAccelerationUnitA = this._upgradeAccelerationUnitA, this._data.upgradeBoostUnitA = this._upgradeBoostUnitA, this._data.medalLevel1UnitA = this._medalLevel1UnitA, this._data.medalLevel2UnitA = this._medalLevel2UnitA, this._data.medalLevel3UnitA = this._medalLevel3UnitA, this._data.coinsUnitA = this._coinsUnitA, this._data.upgradeSpeedUnitB = this._upgradeSpeedUnitB, this._data.upgradeSteeringUnitB = this._upgradeSteeringUnitB, this._data.upgradeAccelerationUnitB = this._upgradeAccelerationUnitB, this._data.upgradeBoostUnitB = this._upgradeBoostUnitB, this._data.medalLevel1UnitB = this._medalLevel1UnitB, this._data.medalLevel2UnitB = this._medalLevel2UnitB, this._data.medalLevel3UnitB = this._medalLevel3UnitB, this._data.coinsUnitB = this._coinsUnitB
        },
        _resetter: function() {
            xt.prototype._resetter.call(this), this.cache = new Qt(this._kernel), this.resetUnit(ne.UNIT_A), this.resetUnit(ne.UNIT_B)
        },
        resetUnit: function(t) {
            switch (t._hx_index) {
                case 0:
                    this._upgradeSpeedUnitA = 0, this._upgradeSteeringUnitA = 0, this._upgradeAccelerationUnitA = 0, this._upgradeBoostUnitA = 0, this._medalLevel1UnitA = 0, this._medalLevel2UnitA = 0, this._medalLevel3UnitA = 0, this._coinsUnitA = 0;
                    break;
                case 1:
                    this._upgradeSpeedUnitB = 0, this._upgradeSteeringUnitB = 0, this._upgradeAccelerationUnitB = 0, this._upgradeBoostUnitB = 0, this._medalLevel1UnitB = 0, this._medalLevel2UnitB = 0, this._medalLevel3UnitB = 0, this._coinsUnitB = 0
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
        setMedal: function(t, e, s) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
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
                    switch (t._hx_index) {
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
        getMedal: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            return I.createEnumIndex(te, this._medalLevel1UnitA, null);
                        case 1:
                            return I.createEnumIndex(te, this._medalLevel2UnitA, null);
                        case 2:
                            return I.createEnumIndex(te, this._medalLevel3UnitA, null)
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return I.createEnumIndex(te, this._medalLevel1UnitB, null);
                        case 1:
                            return I.createEnumIndex(te, this._medalLevel2UnitB, null);
                        case 2:
                            return I.createEnumIndex(te, this._medalLevel3UnitB, null)
                    }
            }
        },
        setUpgrade: function(t, e, s) {
            switch (null == e && (e = this.cache.unitType), s < 0 && (s = 0), 8 < s && (s = 8), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            this._upgradeSpeedUnitA = s;
                            break;
                        case 1:
                            this._upgradeSteeringUnitA = s;
                            break;
                        case 2:
                            this._upgradeAccelerationUnitA = s;
                            break;
                        case 3:
                            this._upgradeBoostUnitA = s
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            this._upgradeSpeedUnitB = s;
                            break;
                        case 1:
                            this._upgradeSteeringUnitB = s;
                            break;
                        case 2:
                            this._upgradeAccelerationUnitB = s;
                            break;
                        case 3:
                            this._upgradeBoostUnitB = s
                    }
            }
        },
        getUpgrade: function(t, e) {
            switch (null == e && (e = this.cache.unitType), e._hx_index) {
                case 0:
                    switch (t._hx_index) {
                        case 0:
                            return this._upgradeSpeedUnitA;
                        case 1:
                            return this._upgradeSteeringUnitA;
                        case 2:
                            return this._upgradeAccelerationUnitA;
                        case 3:
                            return this._upgradeBoostUnitA
                    }
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return this._upgradeSpeedUnitB;
                        case 1:
                            return this._upgradeSteeringUnitB;
                        case 2:
                            return this._upgradeAccelerationUnitB;
                        case 3:
                            return this._upgradeBoostUnitB
                    }
            }
        },
        getUpgradeTitle: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = "gui.upgrades.speed";
                    break;
                case 1:
                    e = "gui.upgrades.steering";
                    break;
                case 2:
                    e = "gui.upgrades.acceleration";
                    break;
                case 3:
                    e = "gui.upgrades.boost"
            }
            return k.string(this._kernel.getConfig(e)).toUpperCase()
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
            return k.string(this._kernel.getConfig(e)).toUpperCase()
        },
        getMedalFromScore: function(t, e, s, i) {
            return t < e ? te.MEDAL_GOLD : t < s ? te.MEDAL_SILVER : t < i ? te.MEDAL_BRONZE : te.MEDAL_NONE
        },
        setIsTester: function(t) {
            this._isTester = t
        },
        get_isTester: function() {
            return !!this._kernel.isDebug || this._isTester
        },
        __class__: Xt
    });
    var Qt = function(t) {
        this._kernel = t, this.totalPlays = 0, this.benchmark = 0, this.debugMessage = "", this.unitType = ne.UNIT_B, this.levelType = qt.LEVEL_1, this.medalType = te.MEDAL_NONE
    };

    function Zt(t, e) {
        this.shake = {
            value: 0,
            resistance: .9,
            dx: 0,
            dy: 0
        }, this._trackLength = e, Ft.call(this, t)
    }

    function Jt(t) {
        if (this._kernel = t, this.isEnabled = !1, this.motionRelative = 0, this._parentOrientation = "", this._isIos = new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent), this._isWindows = new d("Windows", "").match(u.navigator.userAgent), this._isOrientationApproximation = "true" == this._kernel.getConfig("settings.orientationApproximation"), "true" != this._kernel.getConfig("settings.disableDeviceMotion")) try {
            this._orientation = this._getOrientation(), window.MessageEvent && window.addEventListener("message", Js(this, this._onMessage), !1), window.DeviceMotionEvent && window.addEventListener("devicemotion", Js(this, this._onDeviceMotion), !1), this.isEnabled = !0
        } catch (t) {
            this.isEnabled = !1
        }
    }(e["cbcmtb._Session._HelperCache"] = Qt).__name__ = "cbcmtb._Session._HelperCache", Qt.prototype = {
        __class__: Qt
    }, (e["cbcmtb.game.Camera"] = Zt).__name__ = "cbcmtb.game.Camera", Zt.__super__ = Ft, Zt.prototype = t(Ft.prototype, {
        _init: function() {
            Ft.prototype._init.call(this), this.drawDistance = 80, this.fieldOfView = 120, this.fogDensity = 5, this.height = 1440, this.depth = 1 / Math.tan(this.fieldOfView / 2 * Math.PI / 180), this.position = 0, this.angle = .135
        },
        _updater: function(t) {
            var e;
            null == t && (t = 0), Ft.prototype._updater.call(this, t), 1 == this._updates && (this.height = 5e3), this.height = .95 * this.height + 60 | 0, 0 < this.shake.value && (this.shake.value *= this.shake.resistance, this.shake.value < .1 ? (this.shake.value = 0, this.shake.dx = 0, this.shake.dy = 0) : (e = Math.random() * this.shake.value * 20, t = Math.random() < .5 ? -1 : 1, this.shake.dx = e * t, e = Math.random() * this.shake.value * 20, t = Math.random() < .5 ? -1 : 1, this.shake.dy = e * t))
        },
        increasePosition: function(t, e) {
            null == e && (e = 0), null == t && (t = 0), this.position += t;
            this._tools;
            e = this.angle + e, e -= +Math.floor(+e);
            this.angle = e
        },
        setShake: function(t) {
            this.shake.value = Math.abs(1 < t ? 1 : t < 0 ? 0 : t)
        },
        __class__: Zt
    }), (e["cbcmtb.game.DeviceMotion"] = Jt).__name__ = "cbcmtb.game.DeviceMotion", Jt.prototype = {
        dispose: function() {
            this.isEnabled = !1;
            try {
                window.MessageEvent && window.removeEventListener("message", Js(this, this._onMessage), !1), window.DeviceMotionEvent && window.removeEventListener("devicemotion", Js(this, this._onDeviceMotion), !1)
            } catch (t) {}
        },
        _onMessage: function(t) {
            null != t.data.orientation && (this._parentOrientation = t.data.orientation)
        },
        _onDeviceMotion: function(t) {
            this._orientation = this._getOrientation(), this.motionRelative = 0, "landscape" == this._orientation || "landscape-primary" == this._orientation || "90" == this._orientation ? (this.motionRelative = t.accelerationIncludingGravity.y, this._isWindows && (this.motionRelative = -t.accelerationIncludingGravity.x)) : "landscape-secondary" == this._orientation || "-90" == this._orientation ? (this.motionRelative = -t.accelerationIncludingGravity.y, this._isWindows && (this.motionRelative = t.accelerationIncludingGravity.x)) : "portrait" == this._orientation || "portrait-primary" == this._orientation || "0" == this._orientation ? (this.motionRelative = -t.accelerationIncludingGravity.x, this._isWindows && (this.motionRelative = -t.accelerationIncludingGravity.y)) : "portrait-secondary" == this._orientation || "180" == this._orientation ? (this.motionRelative = t.accelerationIncludingGravity.x, this._isWindows && (this.motionRelative = t.accelerationIncludingGravity.y)) : this.motionRelative = -t.accelerationIncludingGravity.y, this.motionRelative = Math.max(Math.min(this.motionRelative / 3, 1), -1) * (this._isIos ? -1 : 1)
        },
        _getOrientation: function() {
            var t = "";
            return "" == (t = this._getWindowOrientation(window.top)) && (t = "" != this._parentOrientation ? this._parentOrientation : this._isOrientationApproximation ? window.innerWidth > window.innerHeight ? "90" : "0" : this._getWindowOrientation(window)), t
        },
        _getWindowOrientation: function(t) {
            var e = "";
            try {
                null != t.screen.orientation ? (e = t.screen.orientation, null != t.screen.orientation.type && (e = t.screen.orientation.type)) : null != t.screen.mozOrientation ? e = t.screen.mozOrientation : null != t.screen.msOrientation ? e = t.screen.msOrientation : null != t.orientation && (e = t.orientation)
            } catch (t) {}
            return e
        },
        __class__: Jt
    };
    var qt = A["cbcmtb.game.ELevel"] = {
        __ename__: "cbcmtb.game.ELevel",
        __constructs__: null,
        LEVEL_1: {
            _hx_name: "LEVEL_1",
            _hx_index: 0,
            __enum__: "cbcmtb.game.ELevel",
            toString: s
        },
        LEVEL_2: {
            _hx_name: "LEVEL_2",
            _hx_index: 1,
            __enum__: "cbcmtb.game.ELevel",
            toString: s
        },
        LEVEL_3: {
            _hx_name: "LEVEL_3",
            _hx_index: 2,
            __enum__: "cbcmtb.game.ELevel",
            toString: s
        }
    };
    qt.__constructs__ = [qt.LEVEL_1, qt.LEVEL_2, qt.LEVEL_3];
    var $t = A["cbcmtb.game.ELocation"] = {
        __ename__: "cbcmtb.game.ELocation",
        __constructs__: null,
        LOCATION_A: {
            _hx_name: "LOCATION_A",
            _hx_index: 0,
            __enum__: "cbcmtb.game.ELocation",
            toString: s
        }
    };
    $t.__constructs__ = [$t.LOCATION_A];
    var te = A["cbcmtb.game.EMedal"] = {
        __ename__: "cbcmtb.game.EMedal",
        __constructs__: null,
        MEDAL_NONE: {
            _hx_name: "MEDAL_NONE",
            _hx_index: 0,
            __enum__: "cbcmtb.game.EMedal",
            toString: s
        },
        MEDAL_BRONZE: {
            _hx_name: "MEDAL_BRONZE",
            _hx_index: 1,
            __enum__: "cbcmtb.game.EMedal",
            toString: s
        },
        MEDAL_SILVER: {
            _hx_name: "MEDAL_SILVER",
            _hx_index: 2,
            __enum__: "cbcmtb.game.EMedal",
            toString: s
        },
        MEDAL_GOLD: {
            _hx_name: "MEDAL_GOLD",
            _hx_index: 3,
            __enum__: "cbcmtb.game.EMedal",
            toString: s
        }
    };
    te.__constructs__ = [te.MEDAL_NONE, te.MEDAL_BRONZE, te.MEDAL_SILVER, te.MEDAL_GOLD];
    var ee = A["cbcmtb.game.EPose"] = {
        __ename__: "cbcmtb.game.EPose",
        __constructs__: null,
        POSE_START1: {
            _hx_name: "POSE_START1",
            _hx_index: 0,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START2: {
            _hx_name: "POSE_START2",
            _hx_index: 1,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START3: {
            _hx_name: "POSE_START3",
            _hx_index: 2,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START4: {
            _hx_name: "POSE_START4",
            _hx_index: 3,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START5: {
            _hx_name: "POSE_START5",
            _hx_index: 4,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START6: {
            _hx_name: "POSE_START6",
            _hx_index: 5,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START7: {
            _hx_name: "POSE_START7",
            _hx_index: 6,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_START8: {
            _hx_name: "POSE_START8",
            _hx_index: 7,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_SLOW_STRAIGHT: {
            _hx_name: "POSE_SLOW_STRAIGHT",
            _hx_index: 8,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_SLOW_TURN1: {
            _hx_name: "POSE_SLOW_TURN1",
            _hx_index: 9,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_SLOW_TURN2: {
            _hx_name: "POSE_SLOW_TURN2",
            _hx_index: 10,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_SLOW_TURN3: {
            _hx_name: "POSE_SLOW_TURN3",
            _hx_index: 11,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_FAST_STRAIGHT: {
            _hx_name: "POSE_FAST_STRAIGHT",
            _hx_index: 12,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_FAST_TURN1: {
            _hx_name: "POSE_FAST_TURN1",
            _hx_index: 13,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_FAST_TURN2: {
            _hx_name: "POSE_FAST_TURN2",
            _hx_index: 14,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        },
        POSE_FAST_TURN3: {
            _hx_name: "POSE_FAST_TURN3",
            _hx_index: 15,
            __enum__: "cbcmtb.game.EPose",
            toString: s
        }
    };
    ee.__constructs__ = [ee.POSE_START1, ee.POSE_START2, ee.POSE_START3, ee.POSE_START4, ee.POSE_START5, ee.POSE_START6, ee.POSE_START7, ee.POSE_START8, ee.POSE_SLOW_STRAIGHT, ee.POSE_SLOW_TURN1, ee.POSE_SLOW_TURN2, ee.POSE_SLOW_TURN3, ee.POSE_FAST_STRAIGHT, ee.POSE_FAST_TURN1, ee.POSE_FAST_TURN2, ee.POSE_FAST_TURN3];
    var se = A["cbcmtb.game.ERoad"] = {
        __ename__: "cbcmtb.game.ERoad",
        __constructs__: null,
        ROAD_NONE: {
            _hx_name: "ROAD_NONE",
            _hx_index: 0,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_LEFT_SHORT: {
            _hx_name: "ROAD_LEFT_SHORT",
            _hx_index: 1,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_LEFT_MEDIUM: {
            _hx_name: "ROAD_LEFT_MEDIUM",
            _hx_index: 2,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_LEFT_LONG: {
            _hx_name: "ROAD_LEFT_LONG",
            _hx_index: 3,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_RIGHT_SHORT: {
            _hx_name: "ROAD_RIGHT_SHORT",
            _hx_index: 4,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_RIGHT_MEDIUM: {
            _hx_name: "ROAD_RIGHT_MEDIUM",
            _hx_index: 5,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        },
        ROAD_RIGHT_LONG: {
            _hx_name: "ROAD_RIGHT_LONG",
            _hx_index: 6,
            __enum__: "cbcmtb.game.ERoad",
            toString: s
        }
    };
    se.__constructs__ = [se.ROAD_NONE, se.ROAD_LEFT_SHORT, se.ROAD_LEFT_MEDIUM, se.ROAD_LEFT_LONG, se.ROAD_RIGHT_SHORT, se.ROAD_RIGHT_MEDIUM, se.ROAD_RIGHT_LONG];
    var ie = A["cbcmtb.game.EScenery"] = {
        __ename__: "cbcmtb.game.EScenery",
        __constructs__: null,
        SCENERY_COIN: {
            _hx_name: "SCENERY_COIN",
            _hx_index: 0,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_START_LEFT: {
            _hx_name: "SCENERY_START_LEFT",
            _hx_index: 1,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_START_RIGHT: {
            _hx_name: "SCENERY_START_RIGHT",
            _hx_index: 2,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_FINISH_LEFT: {
            _hx_name: "SCENERY_FINISH_LEFT",
            _hx_index: 3,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_FINISH_RIGHT: {
            _hx_name: "SCENERY_FINISH_RIGHT",
            _hx_index: 4,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TUNNEL_1_LEFT: {
            _hx_name: "SCENERY_TUNNEL_1_LEFT",
            _hx_index: 5,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TUNNEL_1_RIGHT: {
            _hx_name: "SCENERY_TUNNEL_1_RIGHT",
            _hx_index: 6,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_1: {
            _hx_name: "SCENERY_SMALL_1",
            _hx_index: 7,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_2: {
            _hx_name: "SCENERY_SMALL_2",
            _hx_index: 8,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_3: {
            _hx_name: "SCENERY_SMALL_3",
            _hx_index: 9,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_4: {
            _hx_name: "SCENERY_SMALL_4",
            _hx_index: 10,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_5: {
            _hx_name: "SCENERY_SMALL_5",
            _hx_index: 11,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_6: {
            _hx_name: "SCENERY_SMALL_6",
            _hx_index: 12,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_7: {
            _hx_name: "SCENERY_SMALL_7",
            _hx_index: 13,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SMALL_8: {
            _hx_name: "SCENERY_SMALL_8",
            _hx_index: 14,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_1: {
            _hx_name: "SCENERY_TREE_1",
            _hx_index: 15,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_2: {
            _hx_name: "SCENERY_TREE_2",
            _hx_index: 16,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_3: {
            _hx_name: "SCENERY_TREE_3",
            _hx_index: 17,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_4: {
            _hx_name: "SCENERY_TREE_4",
            _hx_index: 18,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_5: {
            _hx_name: "SCENERY_TREE_5",
            _hx_index: 19,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_6: {
            _hx_name: "SCENERY_TREE_6",
            _hx_index: 20,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_TALL_1: {
            _hx_name: "SCENERY_TREE_TALL_1",
            _hx_index: 21,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_TREE_TALL_2: {
            _hx_name: "SCENERY_TREE_TALL_2",
            _hx_index: 22,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_GATE_1_LEFT: {
            _hx_name: "SCENERY_GATE_1_LEFT",
            _hx_index: 23,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_GATE_1_RIGHT: {
            _hx_name: "SCENERY_GATE_1_RIGHT",
            _hx_index: 24,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_GATE_2_LEFT: {
            _hx_name: "SCENERY_GATE_2_LEFT",
            _hx_index: 25,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_GATE_2_RIGHT: {
            _hx_name: "SCENERY_GATE_2_RIGHT",
            _hx_index: 26,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_CLUSTER_1: {
            _hx_name: "SCENERY_CLUSTER_1",
            _hx_index: 27,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_CLUSTER_2: {
            _hx_name: "SCENERY_CLUSTER_2",
            _hx_index: 28,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_CLUSTER_3: {
            _hx_name: "SCENERY_CLUSTER_3",
            _hx_index: 29,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_CLUSTER_4: {
            _hx_name: "SCENERY_CLUSTER_4",
            _hx_index: 30,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SIDING_1_LEFT: {
            _hx_name: "SCENERY_SIDING_1_LEFT",
            _hx_index: 31,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SIDING_1_RIGHT: {
            _hx_name: "SCENERY_SIDING_1_RIGHT",
            _hx_index: 32,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SIDING_2_LEFT: {
            _hx_name: "SCENERY_SIDING_2_LEFT",
            _hx_index: 33,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_SIDING_2_RIGHT: {
            _hx_name: "SCENERY_SIDING_2_RIGHT",
            _hx_index: 34,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_BANNER_LEFT: {
            _hx_name: "SCENERY_BANNER_LEFT",
            _hx_index: 35,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        },
        SCENERY_BANNER_RIGHT: {
            _hx_name: "SCENERY_BANNER_RIGHT",
            _hx_index: 36,
            __enum__: "cbcmtb.game.EScenery",
            toString: s
        }
    };
    ie.__constructs__ = [ie.SCENERY_COIN, ie.SCENERY_START_LEFT, ie.SCENERY_START_RIGHT, ie.SCENERY_FINISH_LEFT, ie.SCENERY_FINISH_RIGHT, ie.SCENERY_TUNNEL_1_LEFT, ie.SCENERY_TUNNEL_1_RIGHT, ie.SCENERY_SMALL_1, ie.SCENERY_SMALL_2, ie.SCENERY_SMALL_3, ie.SCENERY_SMALL_4, ie.SCENERY_SMALL_5, ie.SCENERY_SMALL_6, ie.SCENERY_SMALL_7, ie.SCENERY_SMALL_8, ie.SCENERY_TREE_1, ie.SCENERY_TREE_2, ie.SCENERY_TREE_3, ie.SCENERY_TREE_4, ie.SCENERY_TREE_5, ie.SCENERY_TREE_6, ie.SCENERY_TREE_TALL_1, ie.SCENERY_TREE_TALL_2, ie.SCENERY_GATE_1_LEFT, ie.SCENERY_GATE_1_RIGHT, ie.SCENERY_GATE_2_LEFT, ie.SCENERY_GATE_2_RIGHT, ie.SCENERY_CLUSTER_1, ie.SCENERY_CLUSTER_2, ie.SCENERY_CLUSTER_3, ie.SCENERY_CLUSTER_4, ie.SCENERY_SIDING_1_LEFT, ie.SCENERY_SIDING_1_RIGHT, ie.SCENERY_SIDING_2_LEFT, ie.SCENERY_SIDING_2_RIGHT, ie.SCENERY_BANNER_LEFT, ie.SCENERY_BANNER_RIGHT];
    var ne = A["cbcmtb.game.EUnit"] = {
        __ename__: "cbcmtb.game.EUnit",
        __constructs__: null,
        UNIT_A: {
            _hx_name: "UNIT_A",
            _hx_index: 0,
            __enum__: "cbcmtb.game.EUnit",
            toString: s
        },
        UNIT_B: {
            _hx_name: "UNIT_B",
            _hx_index: 1,
            __enum__: "cbcmtb.game.EUnit",
            toString: s
        }
    };
    ne.__constructs__ = [ne.UNIT_A, ne.UNIT_B];
    var _e = A["cbcmtb.game.EUpgrade"] = {
        __ename__: "cbcmtb.game.EUpgrade",
        __constructs__: null,
        UPGRADE_SPEED: {
            _hx_name: "UPGRADE_SPEED",
            _hx_index: 0,
            __enum__: "cbcmtb.game.EUpgrade",
            toString: s
        },
        UPGRADE_STEERING: {
            _hx_name: "UPGRADE_STEERING",
            _hx_index: 1,
            __enum__: "cbcmtb.game.EUpgrade",
            toString: s
        },
        UPGRADE_ACCELERATION: {
            _hx_name: "UPGRADE_ACCELERATION",
            _hx_index: 2,
            __enum__: "cbcmtb.game.EUpgrade",
            toString: s
        },
        UPGRADE_BOOST: {
            _hx_name: "UPGRADE_BOOST",
            _hx_index: 3,
            __enum__: "cbcmtb.game.EUpgrade",
            toString: s
        }
    };

    function ae(t, e, s) {
        this.index = t, this.offset = e, this.width = s
    }

    function re(t, e, s, i) {
        null == i && (i = 1), this._kernel = t, this._width = e, this._height = s, this._brightness = i, this._x = 0, this._y = 0, this._hyp = 1.75 * Math.sqrt(this._width * this._width + this._height * this._height), this._lenses = [];
        for (var n = [.75, 0, .25, .35, .55, .65, .75, .9, 1], _ = 0, a = n.length; _ < a;) {
            var r = _++,
                o = new oe;
            o.deviation = n[r], o.sprite = this._getSprite(r), this._lenses.push(o)
        }
        this._spriteSource = this._kernel.assets.getAsset("assets/location/LensFlares.jpg")
    }
    _e.__constructs__ = [_e.UPGRADE_SPEED, _e.UPGRADE_STEERING, _e.UPGRADE_ACCELERATION, _e.UPGRADE_BOOST], (e["cbcmtb.game.Gate"] = ae).__name__ = "cbcmtb.game.Gate", ae.prototype = {
        __class__: ae
    }, (e["cbcmtb.game.Lensflare"] = re).__name__ = "cbcmtb.game.Lensflare", re.prototype = {
        _getSprite: function(t) {
            var e, s = {
                x: 0,
                y: 0,
                w: 256,
                h: 256
            };
            switch (t) {
                case 1:
                case 5:
                    e = 256;
                    break;
                case 2:
                case 6:
                    e = 512;
                    break;
                case 3:
                case 7:
                    e = 768;
                    break;
                case 0:
                case 4:
                    e = 0;
                    break;
                default:
                    e = 0
            }
            switch (s.x = e, t) {
                case 4:
                case 5:
                case 6:
                case 7:
                    e = 256;
                    break;
                default:
                    e = 0
            }
            return s.y = e, s
        },
        draw: function(t, e, s) {
            this._x = (e + 256) % 1024, this._y = s - 64;
            var i = 2 * (this._x - .5 * this._width),
                n = 2 * (this._y - .5 * this._height),
                s = Math.sqrt(i * i + n * n) / this._hyp,
                s = 4 * (this._brightness - 2.5 * s * this._brightness);
            if (s < 0 && (s = 0), t.save(), t.globalCompositeOperation = "lighter", 0 < s) {
                t.globalAlpha = s;
                for (var _ = 0, a = this._lenses; _ < a.length;) {
                    var r = a[_];
                    ++_;
                    var o = Math.round(this._x + Math.round(r.deviation * -i) - 128),
                        h = Math.round(this._y + Math.round(.9 * r.deviation * -n) - 128);
                    t.drawImage(this._spriteSource, r.sprite.x, r.sprite.y, r.sprite.w, r.sprite.h, o, h, 256, 256)
                }
            }
            t.restore()
        },
        __class__: re
    };
    var oe = function() {};

    function he(t, e, s) {
        Vt.call(this, t), this.type = e, this.title = this._getTitle(), this.locationType = this._getLocationType(), this.scoreGold = this._getScoreGold(), this.scoreSilver = this._getScoreSilver(), this.scoreBronze = this._getScoreBronze(), this.medalType = this._session.getMedal(this.type, s), this.isLocked = this._getIsLocked(s), this.isNew = this.medalType == te.MEDAL_NONE && !this.isLocked, this.message = this._getMessage(), this.trackLength = this._getTrackLength(), this.trackHills = this._getTrackHills(), this.trackCurves = this._getTrackCurves(), this.gateWidth = this._getGateWidth(), this.gateOffset = this._getGateOffset(), this.gateInterval = this._getGateInterval()
    }

    function ce(t, e, s) {
        this._levelVo = e, this._unitVo = s, this.type = e.locationType, Ft.call(this, t)
    }(e["cbcmtb.game._Lensflare._HelperLens"] = oe).__name__ = "cbcmtb.game._Lensflare._HelperLens", oe.prototype = {
        __class__: oe
    }, (e["cbcmtb.game.LevelVo"] = he).__name__ = "cbcmtb.game.LevelVo", he.__super__ = Vt, he.prototype = t(Vt.prototype, {
        _getLocationType: function() {
            switch (this.type._hx_index) {
                case 0:
                case 1:
                case 2:
                    return $t.LOCATION_A
            }
        },
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
                    return this._session.getMedal(qt.LEVEL_1, t)._hx_index <= te.MEDAL_NONE._hx_index;
                case 2:
                    return this._session.getMedal(qt.LEVEL_2, t)._hx_index <= te.MEDAL_NONE._hx_index
            }
        },
        _getScoreGold: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = 28;
                    break;
                case 1:
                    t = 40;
                    break;
                case 2:
                    t = 54
            }
            return t * this._factory.targetFramerate
        },
        _getScoreSilver: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = 30;
                    break;
                case 1:
                    t = 47;
                    break;
                case 2:
                    t = 67
            }
            return t * this._factory.targetFramerate
        },
        _getScoreBronze: function() {
            var t;
            switch (this.type._hx_index) {
                case 0:
                    t = 40;
                    break;
                case 1:
                    t = 57;
                    break;
                case 2:
                    t = 77
            }
            return t * this._factory.targetFramerate
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
            var s = this._kernel.getConfig(t);
            return c.replace(e, "__PREVIOUS_LEVEL__", s)
        },
        _getTrackLength: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 640;
                case 1:
                    return 960;
                case 2:
                    return 1280
            }
        },
        _getTrackHills: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .35;
                case 1:
                    return .65;
                case 2:
                    return 1
            }
        },
        _getTrackCurves: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .5;
                case 1:
                    return .8;
                case 2:
                    return 1
            }
        },
        _getGateWidth: function() {
            switch (this.type._hx_index) {
                case 0:
                    return .8;
                case 1:
                    return .6;
                case 2:
                    return .5
            }
        },
        _getGateOffset: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 1;
                case 1:
                    return 1.5;
                case 2:
                    return 1.9
            }
        },
        _getGateInterval: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 64;
                case 1:
                    return 48;
                case 2:
                    return 32
            }
        },
        __class__: he
    }), (e["cbcmtb.game.Location"] = ce).__name__ = "cbcmtb.game.Location", ce.__super__ = Ft, ce.prototype = t(Ft.prototype, {
        _init: function() {
            Ft.prototype._init.call(this), this.vo = new le(this._kernel, this.type), this.addEntity(this._track = new ye(this._kernel, this._levelVo, this.vo)), this.addEntity(this._camera = new Zt(this._kernel, this._track.totalDistance)), this.addEntity(this._player = new ue(this._kernel, this._unitVo, this._track, this._camera));
            var t = this._system.isDesktop ? 1 : .7,
                e = Math.ceil(this._factory.width * t),
                t = Math.ceil(this._factory.height * t);
            this.addEntity(this._renderer = new pe(this._kernel, this._track, this._camera, this._player, e, t), null, !0), this._renderer._context.scaleX = this._factory.width / e, this._renderer._context.scaleY = this._factory.height / t
        },
        getTime: function() {
            return this._player.time
        },
        getSpeed: function() {
            return Math.round(55 * Math.pow(this._player.speedPerc * (.9975 + .025 * Math.random()), 2.5))
        },
        __class__: ce
    });
    var le = function(t, e) {
        Vt.call(this, t), this.type = e, this.imageHorizon = this._getImageHorizon(), this.imageRoad = this._getImageRoad(), this.bgColor = this._getBgColor(), this.sidingDistance = this._getSidingDistance(), this.isHorizonRotated = !1
    };
    (e["cbcmtb.game.LocationVo"] = le).__name__ = "cbcmtb.game.LocationVo", le.__super__ = Vt, le.prototype = t(Vt.prototype, {
        _getImageHorizon: function() {
            return this._assets.getAsset("assets/location/Horizon.jpg")
        },
        _getImageRoad: function() {
            return this._assets.getAsset("assets/location/Roads.png")
        },
        _getBgColor: function() {
            return "#415333"
        },
        _getSidingDistance: function() {
            return 2.75
        },
        __class__: le
    });
    var ue = function(t, e, s, i) {
        this._hairFrame = 0, this.unitVo = e, this._track = s, this._camera = i, Ft.call(this, t)
    };

    function de(t, e) {
        this.worldX = 0, this.worldY = t, this.worldZ = e, this.cameraX = this.cameraY = this.cameraZ = 0, this.screenScale = 1, this.screenX = this.screenY = 0, this.screenWidth = 1
    }(e["cbcmtb.game.Player"] = ue).__name__ = "cbcmtb.game.Player", ue.__super__ = Ft, ue.prototype = t(Ft.prototype, {
        _init: function() {
            Ft.prototype._init.call(this), this.x = 0, this.y = 0, this.z = this._camera.height * this._camera.depth, this.speedPerc = 0, this.segment = null, this.percent = 0, this._speed = 0, this._boost = 0, this._impact = 0, this.steer = 0, this.time = 0, this._width = .36, this._prevQuarter = 0, this._biasSpeed = this.unitVo.getBias(_e.UPGRADE_SPEED, .85, 1), this._biasSteering = this.unitVo.getBias(_e.UPGRADE_STEERING, .9, 1.1), this._biasAcceleration = this.unitVo.getBias(_e.UPGRADE_ACCELERATION, .95, 1.25), this._biasBoost = this.unitVo.getBias(_e.UPGRADE_BOOST, .5, 1.02), this._biasCarving = this.unitVo.getBias(_e.UPGRADE_STEERING, 0, .25), this._maxSpeed = this._factory.targetFramerate * this._track.segmentDistance * .9 | 0, this._forceAcceleration = this._maxSpeed / 6, this._forceBraking = -this._maxSpeed, this._forceCoasting = -this._maxSpeed / 10, this._forceOffRoadDeceleration = -this._maxSpeed / 1.5, this._forceOffRoadLimit = .09 * this._maxSpeed, this._forceCarve = .95, this._deviceMotion = new Jt(this._kernel), this._deviceMotion.isEnabled = this._deviceMotion.isEnabled && !this._system.isDesktop, this._kernel.audio.start("Player", Ct.EFFECTS, -1, 0, .5, 0, !0)
        },
        _disposer: function() {
            Ft.prototype._disposer.call(this), this._deviceMotion.dispose(), this._kernel.audio.stop("Player", Ct.EFFECTS), this._kernel.audio.stop("Applause", Ct.EFFECTS)
        },
        _updater: function(t) {
            null == t && (t = 0), Ft.prototype._updater.call(this, t), this._move(t), this._collision(), this._boost *= .925 * this._biasBoost, this._impact *= .925 * this._biasBoost, this._boost < .05 && (this._boost = 0), this._impact < .05 && (this._impact = 0), this._hairFrame += Math.min(.75 * this.speedPerc, 1), this._kernel.audio.transform("Player", Ct.EFFECTS, .5 * this.speedPerc + .5), this.isRaceComplete ? (t = this._track.totalDistance - this._camera.position + this.z + 6e3) < 0 && (t = 3 * Math.sin(t / 700), this.steer = 1 < t ? 1 : t < -1 ? -1 : t, this._speed *= .975, this.x *= .975) : this._camera.position + this.z < this._track.totalDistance ? this.time++ : (this.isRaceComplete = !0, this._kernel.messenger.sendMessage(this._factory.MESSAGE_FINISH_LINE, this, !1, !1, !0))
        },
        _move: function(t) {
            null == t && (t = 0);
            var e = t / 1e3;
            this.speedPerc = this._speed / this._maxSpeed;
            var s = 3.25 * e * this.speedPerc;
            this._kernel.inputs.mouse.getIsButtonDown() ? .05 < this.speedPerc && (n = 2 * this._kernel.inputs.mouse.relativeCentralisedX, this.steer = .5 * this.steer + .5 * (1 < n ? 1 : n < -1 ? -1 : n)) : this._deviceMotion.isEnabled && 0 != this._deviceMotion.motionRelative && !this._kernel.inputs.mouse.getIsButtonDown() && 1e3 < this._kernel.inputs.mouse.getButtonUpDuration() ? .05 < this.speedPerc && (this.steer = .5 * this.steer + .5 * this._deviceMotion.motionRelative) : (this.steer *= .75, this._kernel.inputs.joypad.getIsButtonDown(Rt.LEFT) ? this.steer -= .25 : this._kernel.inputs.joypad.getIsButtonDown(Rt.RIGHT) && (this.steer += .25));
            var i = 1 < (n = Math.pow(this.speedPerc, .5) + .75) ? 1 : n < 0 ? 0 : n,
                n = this.steer,
                t = -i;
            this.steer = i < n ? i : n < t ? t : n, this.x += s * this._biasSteering * this.steer, this._updates % 8 == 0 && .1 < Math.abs(this.steer) && this._kernel.audio.start("Skid" + (k.random(4) + 1), Ct.EFFECTS, 0, 0, Math.abs(this.steer) * this.speedPerc * .25, 0, !0), 500 < this._age || this._kernel.inputs.joypad.getIsButtonDown(Rt.UP) ? this._speed = xe.accelerate(this._speed, this._biasAcceleration * this._forceAcceleration, e) : this._kernel.inputs.joypad.getIsButtonDown(Rt.DOWN) ? this._speed = xe.accelerate(this._speed, this._forceBraking, e) : this._speed = xe.accelerate(this._speed, this._forceCoasting, e), this._speed = xe.easeIn(this._speed, this._speed * this._forceCarve, this.steer * (1 - this._biasCarving)), (this.x < -1 || 1 < this.x) && this._speed > this._forceOffRoadLimit && (this._speed = xe.accelerate(this._speed, this._forceOffRoadDeceleration, e), this.steer -= (1 - this.speedPerc) * this.x * .5);
            n = this.x -= s * this.speedPerc * this._track.findSegment(this._camera.position).curve * .05;
            this.x = 1.25 < n ? 1.25 : n < -1.25 ? -1.25 : n;
            n = this._speed, s = this._biasSpeed * this._maxSpeed;
            this._speed = s < n ? s : n < 0 ? 0 : n, this._speed += (0 < this._boost ? .1 : 0) * this._maxSpeed, this.segment = this._track.findSegment(this._camera.position + this.z), this.percent = xe.percentRemaining(this._camera.position + this.z, this._track.segmentDistance), this.y = xe.interpolate(this.segment.position1.worldY, this.segment.position2.worldY, this.percent), this._camera.increasePosition(e * this._speed, -.04 * e * this.segment.curve * .25 * this.speedPerc);
            n = (this.segment.index + this.percent) / this._track.maxSegments, e = Math.round(2 * n);
            e > this._prevQuarter && (this._kernel.audio.start("Yeti", Ct.EFFECTS, 0, 0, .5, 0, !0), this._prevQuarter = e), .8 < n && (this._isApplause || (this._kernel.audio.start("Applause", Ct.EFFECTS, -1, 0, .25, 0, !0), this._isApplause = !0), this._kernel.audio.transform("Applause", Ct.EFFECTS, 5 * (n - .8)))
        },
        _collision: function() {
            var t, e = this._track.segments[this.segment.index + 1];
            e.isGate && (.2 < (t = (t = e.gate).width - Math.abs(this.x - t.offset)) && this._activateBoost(), t < .1 && this._activateImpact(), e.isGate = !1);
            for (var s = 0, i = e.scenery; s < i.length;) {
                var n = i[s];
                ++s, n.isCoin && (R.remove(e.scenery, n), Math.abs(this.x - n.offset) < .165 && this._activateCoin())
            }
        },
        getSprite: function() {
            var t, e, s = ee.POSE_START1,
                i = !1,
                n = this.speedPerc < .01,
                _ = this._updates < 80 || !n && this.speedPerc < .4,
                a = !_ && this.speedPerc < .8,
                r = !_ && !a;
            switch (n && (s = ee.POSE_START1), _ && (n = this.speedPerc < .1 ? [ee.POSE_START1, ee.POSE_START2, ee.POSE_START3, ee.POSE_START4, ee.POSE_START1, ee.POSE_START2, ee.POSE_START3, ee.POSE_START4] : [ee.POSE_START5, ee.POSE_START6, ee.POSE_START7, ee.POSE_START8, ee.POSE_START5, ee.POSE_START6, ee.POSE_START7, ee.POSE_START8], 3 < (_ = (this._updates / 2 | 0) % n.length) && (i = !0), s = n[_]), r && (s = ee.POSE_FAST_STRAIGHT, this.steer < -.2 && (s = ee.POSE_FAST_TURN1), this.steer < -.75 && (s = ee.POSE_FAST_TURN2), this.steer < -.95 && (s = ee.POSE_FAST_TURN3), .2 < this.steer && (s = ee.POSE_FAST_TURN1), .75 < this.steer && (s = ee.POSE_FAST_TURN2), .95 < this.steer && (s = ee.POSE_FAST_TURN3), this.steer < -.2 && (i = !0)), a && (s = ee.POSE_SLOW_STRAIGHT, this.steer < -.2 && (s = ee.POSE_SLOW_TURN1), this.steer < -.75 && (s = ee.POSE_SLOW_TURN2), this.steer < -.95 && (s = ee.POSE_SLOW_TURN3), .2 < this.steer && (s = ee.POSE_SLOW_TURN1), .75 < this.steer && (s = ee.POSE_SLOW_TURN2), .95 < this.steer && (s = ee.POSE_SLOW_TURN3), this.steer < -.2 && (i = !0)), this._poseCache = {
                type: s,
                isFlip: i
            }, s._hx_index) {
                case 1:
                case 5:
                case 9:
                case 13:
                    t = 1;
                    break;
                case 0:
                case 4:
                case 8:
                case 12:
                    t = 0;
                    break;
                case 2:
                case 6:
                case 10:
                case 14:
                    t = 2;
                    break;
                case 3:
                case 7:
                case 11:
                case 15:
                    t = 3
            }
            switch (s._hx_index) {
                case 0:
                case 1:
                case 2:
                case 3:
                    e = 0;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    e = 1;
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                    e = 2;
                    break;
                case 12:
                case 13:
                case 14:
                case 15:
                    e = 3
            }
            return {
                x: 128 * t,
                y: 192 * e,
                w: 128,
                h: 192,
                isFlip: i,
                isRotated: !1
            }
        },
        getSpriteHair: function(t, e) {
            null == e && (e = !1), null == t && (t = 0);
            var s = ((0 | this._hairFrame) + t) % 8;
            return this.speedPerc < .3 && (s = (7 + t) % 8, e = this._poseCache.isFlip), {
                x: 64 * s,
                y: 768,
                w: 64,
                h: 64,
                isFlip: e,
                isRotated: !1
            }
        },
        getHairPositions: function() {
            if (this.unitVo.type == ne.UNIT_A) return [];
            var t, e = this._poseCache.isFlip ? -1 : 1;
            switch (this._poseCache.type._hx_index) {
                case 0:
                    t = [{
                        x: -8 * e,
                        y: -185
                    }, {
                        x: 0 * e,
                        y: -185
                    }];
                    break;
                case 1:
                    t = [{
                        x: -8 * e,
                        y: -185
                    }, {
                        x: 0 * e,
                        y: -188
                    }];
                    break;
                case 2:
                    t = [{
                        x: -4 * e,
                        y: -186
                    }, {
                        x: 3 * e,
                        y: -186
                    }];
                    break;
                case 3:
                    t = [{
                        x: -1 * e,
                        y: -186
                    }, {
                        x: 7 * e,
                        y: -186
                    }];
                    break;
                case 4:
                    t = [{
                        x: 0 * e,
                        y: -183
                    }, {
                        x: 13 * e,
                        y: -183
                    }];
                    break;
                case 5:
                    t = [{
                        x: 2 * e,
                        y: -187
                    }, {
                        x: 12 * e,
                        y: -187
                    }];
                    break;
                case 6:
                    t = [{
                        x: -5 * e,
                        y: -190
                    }, {
                        x: 5 * e,
                        y: -190
                    }];
                    break;
                case 7:
                    t = [{
                        x: -13 * e,
                        y: -187
                    }, {
                        x: -3 * e,
                        y: -187
                    }];
                    break;
                case 8:
                    t = [{
                        x: -5 * e,
                        y: -185
                    }, {
                        x: 5 * e,
                        y: -185
                    }];
                    break;
                case 9:
                    t = [{
                        x: -1 * e,
                        y: -186
                    }, {
                        x: 10 * e,
                        y: -184
                    }];
                    break;
                case 10:
                    t = [{
                        x: 12 * e,
                        y: -183
                    }, {
                        x: 25 * e,
                        y: -182
                    }];
                    break;
                case 11:
                    t = [{
                        x: 13 * e,
                        y: -181
                    }, {
                        x: 27 * e,
                        y: -178
                    }];
                    break;
                case 12:
                    t = [{
                        x: -6 * e,
                        y: -184
                    }, {
                        x: 6 * e,
                        y: -184
                    }];
                    break;
                case 13:
                    t = [{
                        x: 5 * e,
                        y: -180
                    }, {
                        x: 19 * e,
                        y: -176
                    }];
                    break;
                case 14:
                    t = [{
                        x: 36 * e,
                        y: -170
                    }, {
                        x: 48 * e,
                        y: -165
                    }];
                    break;
                case 15:
                    t = [{
                        x: 44 * e,
                        y: -158
                    }, {
                        x: 55 * e,
                        y: -148
                    }]
            }
            return t
        },
        _activateBoost: function() {
            this._boost = 1, this._speed = this._maxSpeed + this._boost * this._maxSpeed * .1, this._kernel.audio.start("Boost" + (k.random(4) + 1), Ct.EFFECTS, 0, 0, .5, 0, !1)
        },
        _activateImpact: function() {
            .5 < this._impact || (this._kernel.overlay.flash(500 * this.speedPerc, !0, this.speedPerc, 16711680), this._impact = 1, this._speed = 0, this._camera.setShake(1), this._kernel.audio.start("Collision" + (k.random(2) + 1), Ct.EFFECTS, 0, 0, 2 * this.speedPerc, 0, !0))
        },
        _activateCoin: function() {
            this._session.setCoins(null, this._session.getCoins() + 20)
        },
        __class__: ue
    }), (e["cbcmtb.game.Position"] = de).__name__ = "cbcmtb.game.Position", de.prototype = {
        __class__: de
    };
    var pe = function(t, e, s, i, n, _) {
        this._isDrawRotation = 0, this._track = e, this._camera = s, this._player = i, this._width = n, this._height = _, Ft.call(this, t)
    };

    function ge(t, e, s, i, n) {
        null == i && (i = 1), null == s && (s = 0), this.configure(t, e, s, i, n), this.seed = k.random(32)
    }

    function me(t, e, s, i, n, _) {
        this.index = t, this.position1 = e, this.position2 = s, this.curve = i, this.texture = n, this.scenery = null != _ ? _ : [], this.gate = null, this.fog = 0, this.clip = 0, this.isFinishLine = !1, this.isBoost = !1, this.isGate = !1, this.boostPosition = 0
    }(e["cbcmtb.game.Renderer"] = pe).__name__ = "cbcmtb.game.Renderer", pe.__super__ = Ft, pe.prototype = t(Ft.prototype, {
        _init: function() {
            Ft.prototype._init.call(this), this._context.cache(0, 0, this._width, this._height);
            var t = this._context.cacheCanvas;
            this._canvasBuffer = this._factory.createCanvas(this._width, this._height), this._context2dBuffer = this._canvasBuffer.getContext("2d", null), this._context2d = t.getContext("2d", null), this._context2d.imageSmoothingEnabled = !0, this._imageUnits = this._player.unitVo.imageSprites, this._imageScenery = this._assets.getAsset("assets/location/Scenery.png"), this._imageRoad = this._track.locationVo.imageRoad, this._imageHorizon = this._track.locationVo.imageHorizon, this._isDrawImageUsingCanvas = this._session.cache.isDrawImageUsingCanvas, this._isDrawImageUsingCanvas && (this._canvasUnits = this._factory.createCanvas(this._imageUnits.width, this._imageUnits.height), this._canvasUnits.getContext("2d", null).drawImage(this._imageUnits, 0, 0), this._canvasScenery = this._factory.createCanvas(this._imageScenery.width, this._imageScenery.height), this._canvasScenery.getContext("2d", null).drawImage(this._imageScenery, 0, 0), this._canvasRoad = this._factory.createCanvas(this._imageRoad.width, this._imageRoad.height), this._canvasRoad.getContext("2d", null).drawImage(this._imageRoad, 0, 0), this._canvasHorizon = this._factory.createCanvas(this._imageHorizon.width, this._imageHorizon.height), this._canvasHorizon.getContext("2d", null).drawImage(this._imageHorizon, 0, 0)), this._framerateBiasTotal = 0, this._roadWidth = 2e3, this._resolution = this._height / 405, this._horizonY = 0, this._horizonPattern = this._context2d.createPattern(this._isDrawImageUsingCanvas ? this._canvasHorizon : this._imageHorizon, "repeat");
            t = 8 * this._session.cache.benchmark / 100;
            this._maxScanlines = Math.round(16 < t ? 16 : t < 6 ? 6 : t), this._cameraRotation = 0, this._lensflare = new re(this._kernel, this._width, this._height), this._streaks = new fe(this._kernel, this._width, this._height), this._isLensEffectsEnabled = this._kernel.isEyeCandy && 400 < this._session.cache.benchmark, this.c_textureRatio = 128 / this._track.segmentDistance / 16, this._coinSprites = [];
            for (var e = 0; e < 32;) {
                var s = e++;
                this._coinSprites.push({
                    x: s % 32 * 32,
                    y: 0,
                    w: 32,
                    h: 32,
                    isFlip: !1,
                    isRotated: !1
                })
            }
            this._context2d.save()
        },
        _updater: function(t) {
            null == t && (t = 0), Ft.prototype._updater.call(this, t), this._context2d.restore(), this._context2d.clearRect(0, 0, this._width, this._height), this._context2dBuffer.translate(this._camera.shake.dx, this._camera.shake.dy);
            var e = !1;
            10 < this._updates && (this._framerateBiasTotal += this._kernel.getFramerate(!0), 1e3 < this._age && (.8 < (i = this._framerateBiasTotal / (this._updates - 10) / this._factory.targetFramerate) ? this._maxScanlines++ : this._maxScanlines = Math.round(.8 * this._maxScanlines), 0 == this._isDrawRotation && (e = !0, this._isDrawRotation = this._isLensEffectsEnabled ? 1 : 2), 1 == this._isDrawRotation && (this._isDrawRotation = i < .8 ? 2 : 1)));
            t = this._maxScanlines;
            this._maxScanlines = 0 | (128 < t ? 128 : t < 6 ? 6 : t);
            var s = this._track.findSegment(this._camera.position),
                i = xe.percentRemaining(this._camera.position, this._track.segmentDistance),
                n = this._height,
                _ = 0,
                a = -s.curve * i,
                r = s,
                o = this._camera.position,
                h = this._camera.drawDistance,
                c = this._camera.fogDensity,
                l = this._tools,
                t = (t = this._camera.angle - this._player.x / 50) - +Math.floor(+t);
            (this._context2d.globalAlpha = 1) == this._isDrawRotation && !e || this._drawHorizon(t, this._horizonY), this._drawGround(this._horizonY);
            for (var u = 0, d = h; u < d;) {
                var p = u++;
                (r = this._track.segments[(s.index + p) % this._track.segments.length]).fog = 1 / Math.pow(Math.exp(1), Math.pow(p / h, 7) * c), r.clip = n;
                var l = r.position1,
                    g = this._width,
                    m = this._height;
                l.cameraX = l.worldX - (this._player.x * this._roadWidth - _), l.cameraY = l.worldY - (this._player.y + this._camera.height), l.cameraZ = l.worldZ - o, l.screenScale = this._camera.depth / l.cameraZ, l.screenX = Math.round(g / 2 + l.screenScale * l.cameraX * g / 2), l.screenY = Math.round(m / 2 - l.screenScale * l.cameraY * m / 2), l.screenWidth = Math.round(l.screenScale * this._roadWidth * g / 2);
                var f = r.position2,
                    y = this._width,
                    m = this._height;
                if (f.cameraX = f.worldX - (this._player.x * this._roadWidth - _ - a), f.cameraY = f.worldY - (this._player.y + this._camera.height), f.cameraZ = f.worldZ - o, f.screenScale = this._camera.depth / f.cameraZ, f.screenX = Math.round(y / 2 + f.screenScale * f.cameraX * y / 2), f.screenY = Math.round(m / 2 - f.screenScale * f.cameraY * m / 2), f.screenWidth = Math.round(f.screenScale * this._roadWidth * y / 2), _ += a, a += r.curve, !(r.position1.cameraZ <= this._camera.depth || r.position2.screenY >= r.position1.screenY || r.position2.screenY >= n)) {
                    n = 0 | Math.min(n, r.position2.screenY);
                    var E = r.position1.worldZ,
                        g = (r.position2.worldZ, r.position1.screenWidth),
                        m = n,
                        f = r.position2.screenWidth,
                        y = r.texture,
                        x = r.isFinishLine,
                        w = r.isBoost,
                        S = r.boostPosition;
                    if (null == S && (S = 0), null == w && (w = !1), null == x && (x = !1), m > this._height && (m = this._height), g = 1.3 * g | 0, f = 1.3 * f | 0, this.c_startX = r.position1.screenX - g, this.c_endX = r.position2.screenX - f, this.c_dx = this.c_endX - this.c_startX, this.c_startY = r.position1.screenY, this.c_endY = m, this.c_endY <= this.c_startY) {
                        this.c_dy = 0 | Math.abs(this.c_endY - this.c_startY), this.c_startW = 2 * g, this.c_dw = 2 * (f - g), this.c_startZ = E, this.c_dz = this._track.segmentDistance, this.c_sourceX = 0, this.c_sourceY = 0, this.c_sourceW = 512, this.c_sourceH = 1, this.c_destX = 0, this.c_destY = this.c_startY, this.c_destW = 1, this.c_destH = 1, this.c_steps = 0 | Math.min(this.c_dy, this._maxScanlines), 32 < this._maxScanlines && this.c_startY > this._height && (this.c_steps = this.c_dy), this.c_perc = 0, this.c_destHF = Math.floor(this.c_dy / this.c_steps), this.c_destHC = Math.ceil(this.c_dy / this.c_steps), this.c_mod = 1, this.c_destHC != this.c_destHF && (this.c_mod = Math.round(1 / (this.c_destHC - this.c_dy / this.c_steps))), this.c_destH = this.c_destHC, this.c_textureOffsetX = y < 7 ? 0 : 512, this.c_textureOffsetY = y < 7 ? 128 * y : 128 * (y - 7), this.c_source = this._isDrawImageUsingCanvas ? this._canvasRoad : this._imageRoad, this._context2d.globalAlpha = r.fog;
                        for (var b = 0, v = this.c_steps; b < v;) {
                            var T = b++;
                            this.c_perc = T / this.c_steps, this.c_sourceY = 127 - Math.floor((E + this.c_perc * this.c_dz) * this.c_textureRatio) % 128, this.c_destX = this.c_startX + this.c_perc * this.c_dx | 0, T == this.c_steps - 1 && (this.c_destH = 0 | Math.max(this.c_destH, this.c_destY - this.c_endY)), this.c_destY -= this.c_destH, this.c_destY < this._height && this.c_destY > -this.c_destH && (this.c_destW = this.c_startW + this.c_perc * this.c_dw | 0, this.c_sourceH = this.c_sourceY > 128 - this.c_destH ? 1 : this.c_destH, 2048 < this.c_destW && (this.c_destX += .5 * (this.c_destW - 2048) | 0, this.c_destW = 2048), this._context2d.drawImage(this.c_source, this.c_sourceX + this.c_textureOffsetX, this.c_sourceY + this.c_textureOffsetY, this.c_sourceW, this.c_sourceH, this.c_destX, this.c_destY, this.c_destW, this.c_destH), x && this._context2d.drawImage(this.c_source, 512, 8 * this.c_sourceY % 128, this.c_sourceW, this.c_sourceH, this.c_destX, this.c_destY, this.c_destW, this.c_destH), w && this._context2d.drawImage(this.c_source, 0, 896 + 8 * this.c_sourceY % 128, this.c_sourceW, this.c_sourceH, this.c_destX + (this.c_destW * (.5 + .5 * S / 1.3) - .5 * this.c_destW | 0), this.c_destY, this.c_destW, this.c_destH)), this.c_destH = T % this.c_mod == 0 ? this.c_destHF : this.c_destHC
                        }
                        this._context2d.globalAlpha = 1
                    }
                }
            }
            this._horizonY = n;
            for (var A, C, k, R = null, I = this._isDrawImageUsingCanvas ? this._canvasScenery : this._imageScenery, U = this._isDrawImageUsingCanvas ? this._canvasUnits : this._imageUnits, u = 0, d = h; u < d;) {
                for (var P = h - u++, b = 0, v = (r = this._track.segments[(s.index + P) % this._track.segments.length]).scenery; b < v.length;) {
                    p = v[b];
                    ++b, A = r.position1.screenScale, C = r.position1.screenX + A * p.offset * this._roadWidth * (.5 * this._width), k = r.position1.screenY, R = p.sprite, p.isCoin && (R = this._coinSprites[(this._updates + p.seed) % 32]), this._drawSprite(I, R, A * p.scale, C, k, -.5, -1, r.clip, r.fog, p.isAdd, p.life, R.isRotated ? this._cameraRotation : 0)
                }
                r == this._player.segment && this._drawPlayer(U)
            }
            this._cameraRotation = .925 * this._cameraRotation + -.03 * r.curve * .075 + .025 * this._player.steer, Math.abs(this._cameraRotation) < 1e-4 && (this._cameraRotation = 0), this._drawRotation(this._cameraRotation, t), this._isLensEffectsEnabled && (this._streaks.draw(this._context2d, this._player.isRaceComplete ? 0 : Math.min(.35 * Math.pow(this._player.speedPerc - .1, 2), .35)), this._lensflare.draw(this._context2d, 1024 * t, this._horizonY - 80)), this._context2dBuffer.translate(-this._camera.shake.dx, -this._camera.shake.dy)
        },
        _drawSprite: function(t, e, s, i, n, _, a, r, o, h, c, l) {
            null == l && (l = 0), null == c && (c = 1), null == h && (h = !1), null == o && (o = 1), null == r && (r = 0), null == a && (a = 0), null == _ && (_ = 0), .002 < s || (this.c_destW = Math.round(e.w * s * this._width * .5 * (.003 * this._roadWidth)), this.c_destH = Math.round(e.h * s * this._width * .5 * (.003 * this._roadWidth)), 768 < this.c_destW || 768 < this.c_destH || (i = (i + this.c_destW * (_ * (e.isFlip ? -1 : 1))) * (e.isFlip ? -1 : 1), n += this.c_destH * a, this.c_clipH = Math.round(Math.max(0, n + this.c_destH - r + 1)), 0 == r && (this.c_clipH = 0), this.c_tx = i + .5 * this.c_destW, this.c_ty = n + .5 * this.c_destH, this.c_clipH < this.c_destH && (this._context2d.globalAlpha = Math.pow(o, .4) * c, h && (this._context2d.globalCompositeOperation = "lighter"), e.isFlip && this._context2d.scale(-1, 1), 0 != l && (this._context2d.translate(this.c_tx, this.c_ty), this._context2d.rotate(e.isFlip ? -l : l), this._context2d.translate(-this.c_tx, -this.c_ty)), this._context2d.drawImage(t, e.x, e.y, e.w, e.h - e.h * this.c_clipH / this.c_destH, i, n, this.c_destW, this.c_destH - this.c_clipH), 0 != l && (this._context2d.translate(this.c_tx, this.c_ty), this._context2d.rotate(e.isFlip ? l : -l), this._context2d.translate(-this.c_tx, -this.c_ty)), e.isFlip && this._context2d.scale(-1, 1), h && (this._context2d.globalCompositeOperation = "source-over"), this._context2d.globalAlpha = 1)))
        },
        _drawGround: function(t) {
            null == t && (t = 0);
            t = Math.round(Math.min(t, 320));
            this._context2d.fillStyle = this._track.locationVo.bgColor, this._context2d.fillRect(0, t, this._width, this._height - t)
        },
        _drawHorizon: function(t, e) {
            null == e && (e = 0), null == t && (t = 0);
            t = Math.round(1024 * t), e = Math.round(Math.min(e, 320));
            this._context2d.clearRect(0, 0, this._width, this._height), this._context2d.fillStyle = this._horizonPattern, this._context2d.translate(t, e), this._context2d.fillRect(-t, -e, this._width, e), this._context2d.translate(-t, -e), this._context2d.fillStyle = this._track.locationVo.bgColor, this._context2d.fillRect(0, e, this._width, this._height - e)
        },
        _drawRotation: function(t, e, s) {
            var i, n, _;
            null == s && (s = 120), null == t && (t = 0), 1 == this._isDrawRotation && (.35 < t ? t = .35 : t < -.35 && (t = -.35), i = .5 * this._width, n = .75 * this._height, this._context2dBuffer.clearRect(0, 0, this._width, this._height), this._context2dBuffer.drawImage(this._context.cacheCanvas, 0, 0), _ = this._canvasBuffer, this._drawHorizon(e, this._horizonY), 0 != t ? (this._context2d.translate(i, n), this._context2d.rotate(-t), this._context2d.translate(-i, -n), this._context2d.drawImage(_, 0, 0, this._width, this._height, 0, 0, this._width, this._height), this._context2d.drawImage(_, 0, 0, this._width, 1, 0, 1 - s, this._width, s), this._context2d.drawImage(_, 0, this._height - 1, this._width, 1, 0, this._height - 1, this._width, s), this._context2d.drawImage(_, 1, 0, 1, this._height, 2 - s, 0, s, this._height), this._context2d.drawImage(_, this._width - 1, 0, 1, this._height, this._width - 1, 0, s, this._height), this._context2d.drawImage(_, 0, 0, 1, 1, -s, -s, s, s), this._context2d.drawImage(_, this._width - 1, 0, 1, 1, this._width, -s, s, s), this._context2d.drawImage(_, 0, this._height - 1, 1, 1, -s, this._height - 1, s, s), this._context2d.drawImage(_, this._width - 1, this._height - 1, 1, 1, this._width, this._height - 1, s, s), this._context2d.translate(i, n), this._context2d.rotate(t), this._context2d.translate(-i, -n)) : this._context2d.drawImage(_, 0, 0, this._width, this._height, 0, 0, this._width, this._height))
        },
        _drawPlayer: function(t) {
            var e = this._camera.depth / this._player.z,
                s = .5 * this._width,
                i = .5 * this._height - e * xe.interpolate(this._player.segment.position1.cameraY, this._player.segment.position2.cameraY, this._player.percent) * (.5 * this._height),
                n = 3 * Math.random() * this._player.speedPerc * this._resolution * (Math.random() < .5 ? -1 : 1);
            this._drawSprite(t, this._player.getSprite(), .75 * e, s, i + n + 55, -.5, -1);
            for (var _ = 0, a = 0, r = this._player.getHairPositions(); a < r.length;) {
                var o = r[a];
                ++a, this._drawSprite(t, this._player.getSpriteHair(_ += 1 + (.5 < Math.abs(this._player.steer) ? 1 : 0), _ % 2 == 0), .75 * e, s + .75 * o.x * this._resolution, i + .75 * o.y * this._resolution + n + 55, -.5, -1)
            }
        },
        __class__: pe
    }), (e["cbcmtb.game.Scenery"] = ge).__name__ = "cbcmtb.game.Scenery", ge.prototype = {
        _getWidth: function() {
            return 0
        },
        _getScale: function() {
            switch (this.type._hx_index) {
                case 0:
                    return 2;
                case 1:
                case 3:
                case 5:
                    return 2.61;
                case 2:
                case 4:
                case 6:
                    return 2.61;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    return 4 * Math.pow(Math.random(), .1);
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    return 5 * Math.pow(Math.random(), .2);
                case 21:
                case 22:
                    return 4 * Math.pow(Math.random(), .2);
                case 23:
                case 24:
                case 25:
                case 26:
                    return 1.6;
                case 27:
                case 28:
                case 29:
                case 30:
                    return 8 * Math.pow(Math.random(), .2);
                case 31:
                case 32:
                case 33:
                case 34:
                    return 2;
                case 35:
                case 36:
                    return 3
            }
        },
        _getSprite: function() {
            var t = Math.random() < .5;
            switch (this.type._hx_index) {
                case 0:
                    return {
                        x: 0,
                        y: 0,
                        w: 32,
                        h: 32,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 1:
                    return {
                        x: 0,
                        y: 32,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 2:
                    return {
                        x: 256,
                        y: 32,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 3:
                    return {
                        x: 512,
                        y: 32,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 4:
                    return {
                        x: 768,
                        y: 32,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 5:
                    return {
                        x: 0,
                        y: 288,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 6:
                    return {
                        x: 256,
                        y: 288,
                        w: 256,
                        h: 224,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 7:
                    return {
                        x: 0,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 8:
                    return {
                        x: 64,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 9:
                    return {
                        x: 128,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 10:
                    return {
                        x: 192,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 11:
                    return {
                        x: 256,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 12:
                    return {
                        x: 320,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 13:
                    return {
                        x: 384,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 14:
                    return {
                        x: 448,
                        y: 256,
                        w: 64,
                        h: 32,
                        isFlip: t,
                        isRotated: !1
                    };
                case 15:
                    return {
                        x: 512,
                        y: 256,
                        w: 192,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 16:
                    return {
                        x: 704,
                        y: 256,
                        w: 192,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 17:
                    return {
                        x: 896,
                        y: 512,
                        w: 128,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 18:
                    return {
                        x: 512,
                        y: 512,
                        w: 192,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 19:
                    return {
                        x: 704,
                        y: 512,
                        w: 192,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 20:
                    return {
                        x: 896,
                        y: 512,
                        w: 128,
                        h: 256,
                        isFlip: t,
                        isRotated: !1
                    };
                case 21:
                    return {
                        x: 0,
                        y: 512,
                        w: 128,
                        h: 512,
                        isFlip: t,
                        isRotated: !1
                    };
                case 22:
                    return {
                        x: 128,
                        y: 512,
                        w: 128,
                        h: 512,
                        isFlip: t,
                        isRotated: !1
                    };
                case 23:
                    return {
                        x: 256,
                        y: 512,
                        w: 256,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 24:
                    return {
                        x: 256,
                        y: 640,
                        w: 256,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 25:
                    return {
                        x: 256,
                        y: 768,
                        w: 256,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 26:
                    return {
                        x: 256,
                        y: 896,
                        w: 256,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 27:
                    return {
                        x: 512,
                        y: 768,
                        w: 128,
                        h: 128,
                        isFlip: t,
                        isRotated: !1
                    };
                case 28:
                    return {
                        x: 640,
                        y: 768,
                        w: 128,
                        h: 128,
                        isFlip: t,
                        isRotated: !1
                    };
                case 29:
                    return {
                        x: 512,
                        y: 896,
                        w: 128,
                        h: 128,
                        isFlip: t,
                        isRotated: !1
                    };
                case 30:
                    return {
                        x: 640,
                        y: 896,
                        w: 128,
                        h: 128,
                        isFlip: t,
                        isRotated: !1
                    };
                case 31:
                    return {
                        x: 768,
                        y: 768,
                        w: 64,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 32:
                    return {
                        x: 832,
                        y: 768,
                        w: 64,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 33:
                    return {
                        x: 768,
                        y: 896,
                        w: 64,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 34:
                    return {
                        x: 832,
                        y: 896,
                        w: 64,
                        h: 128,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 35:
                    return {
                        x: 896,
                        y: 768,
                        w: 64,
                        h: 256,
                        isFlip: !1,
                        isRotated: !1
                    };
                case 36:
                    return {
                        x: 960,
                        y: 768,
                        w: 64,
                        h: 256,
                        isFlip: !1,
                        isRotated: !1
                    }
            }
        },
        _getIsAdd: function() {
            return !1
        },
        configure: function(t, e, s, i, n) {
            null == i && (i = 1), null == s && (s = 0), this.offset = e, this.life = i, this.perc = s, this.owner = n, this.type != t && (this.type = t, this.scale = this._getScale(), this.width = this._getWidth(), this.isCoin = this.type == ie.SCENERY_COIN, this.isAdd = this._getIsAdd(), this.sprite = this._getSprite())
        },
        __class__: ge
    }, (e["cbcmtb.game.Segment"] = me).__name__ = "cbcmtb.game.Segment", me.prototype = {
        setBoost: function(t) {
            this.isBoost = !0, this.boostPosition = t
        },
        setGate: function(t, e, s) {
            this.isGate = !0, this.gate = new ae(this.index, t, e);
            this.scenery.unshift(new ge(s ? ie.SCENERY_GATE_1_LEFT : ie.SCENERY_GATE_2_LEFT, t - e - .5)), this.scenery.unshift(new ge(s ? ie.SCENERY_GATE_1_RIGHT : ie.SCENERY_GATE_2_RIGHT, t + e + .5))
        },
        __class__: me
    };
    var fe = function(t, e, s) {
        this._TEXTURE_HEIGHT = 405, this._TEXTURE_WIDTH = 720, this._kernel = t, this._width = e, this._height = s, this._texture = this._kernel.assets.getAsset("assets/location/Streaks.png")
    };
    (e["cbcmtb.game.Streaks"] = fe).__name__ = "cbcmtb.game.Streaks", fe.prototype = {
        draw: function(t, e) {
            null == e && (e = 1), e <= .25 || (e = e * (.5 * Math.random() + .5), t.save(), t.globalAlpha = e, Math.random() < .5 && (t.translate(this._width, 0), t.scale(-1, 1)), Math.random() < .5 && (t.translate(0, this._height), t.scale(1, -1)), t.scale(this._width / this._TEXTURE_WIDTH, this._height / this._TEXTURE_HEIGHT), t.drawImage(this._texture, 0, 0), t.globalAlpha = 1, t.restore())
        },
        __class__: fe
    };
    var ye = function(t, e, s) {
        this.levelVo = e, this.locationVo = s, Ft.call(this, t)
    };

    function Ee(t, e) {
        this._MAX_UPGRADES = 8, Vt.call(this, t), this.type = e, this.title = this._getTitle(), this.subtitle = this._getSubtitle(), this.imageSprites = this._getImageSprites()
    }(e["cbcmtb.game.Track"] = ye).__name__ = "cbcmtb.game.Track", ye.__super__ = Ft, ye.prototype = t(Ft.prototype, {
        _init: function() {
            for (Ft.prototype._init.call(this), this.maxSegments = this.levelVo.trackLength, this.maxSegments % 2 == 0 && this.maxSegments++, this._kernel.isDebug && (this.maxSegments = 100), this.segmentDistance = 300, this.segments = [], this._addRoad(0, 32, 0, 0, -20), this._addRoad(0, 64, 0, 0, -30); this.segments.length < this.maxSegments - 32;) {
                var t = this._tools.getRandomType(se),
                    e = this._getRoadLength(t),
                    s = this._getRoadCurve(t),
                    t = e * Math.sqrt(Math.random()) * -1 * this.levelVo.trackHills;
                this.segments.length + 2 * e < this.maxSegments - 32 ? this._addRoad(e, e, e, s, t) : this._addRoad(0, this.maxSegments - this.segments.length, 0, 0, .25 * -(this.maxSegments - this.segments.length) | 0)
            }
            this.maxSegments = this.segments.length, this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30), this._addRoad(0, 30, 0, 0, 30);
            for (var i, n = 0, _ = 0, a = 0, r = [0, 1, 2, 8, 9]; a < this.segments.length - 16;) {
                (_ = n = 0 == (i = n) ? r[k.random(r.length)] : Math.random() < .35 ? 0 : i) != i && (1 == n ? _ = 4 : 2 == n ? _ = 6 : 8 == n ? _ = 11 : 9 == n ? _ = 13 : 1 == i ? _ = 3 : 2 == i ? _ = 5 : 8 == i ? _ = 10 : 9 == i && (_ = 12));
                for (var o = a, h = a + 16; o < h;) {
                    var c = o++;
                    this.segments[c].texture = _
                }
                a += 16
            }
            for (var l = !0, o = 0, h = this.segments.length; o < h;) {
                var u = o++;
                if (10 < Math.abs(u - this.maxSegments)) {
                    if (48 < u && u < this.maxSegments - 32 && u % this.levelVo.gateInterval == 8) {
                        l = !l;
                        var d = (Math.random() - .5) * this.levelVo.gateOffset;
                        this.segments[u].setGate(d, this.levelVo.gateWidth, l);
                        for (var p = u - 6, g = u; p < g;) {
                            var m = p++;
                            this.segments[m].setBoost(d)
                        }
                    }!this.levelVo.isNew && 16 < u && u < this.maxSegments + 140 && Math.random() < (u < this.maxSegments ? .03 : 0) && this._addScenery(u, ie.SCENERY_COIN, 2 * Math.random() - 1)
                }
                this._createDefaultScenery(this.segments[u])
            }
            this._addScenery(12, ie.SCENERY_START_LEFT, -1), this._addScenery(12, ie.SCENERY_START_RIGHT, 1), this._addScenery(this.maxSegments, ie.SCENERY_FINISH_LEFT, -1), this._addScenery(this.maxSegments, ie.SCENERY_FINISH_RIGHT, 1), this.segments[this.maxSegments].isFinishLine = !0, this.segments[this.maxSegments + (this.maxSegments % 2 == 0 ? 1 : -1)].isFinishLine = !0, this.totalDistance = this.maxSegments * this.segmentDistance
        },
        findSegment: function(t) {
            return this.segments[Math.floor(t / this.segmentDistance) % this.segments.length]
        },
        _getRoadLength: function(t) {
            switch (t._hx_index) {
                case 0:
                    return 10;
                case 1:
                case 4:
                    return 10;
                case 2:
                case 5:
                    return 20;
                case 3:
                case 6:
                    return 50
            }
        },
        _getRoadCurve: function(t) {
            var e;
            switch (t._hx_index) {
                case 0:
                    e = 0;
                    break;
                case 1:
                    e = -10;
                    break;
                case 2:
                    e = -15;
                    break;
                case 3:
                    e = -20;
                    break;
                case 4:
                    e = 10;
                    break;
                case 5:
                    e = 15;
                    break;
                case 6:
                    e = 20
            }
            return Math.round(e * this.levelVo.trackCurves * .8)
        },
        _addRoad: function(t, e, s, i, n) {
            null == n && (n = 0);
            var _ = this._getLastY(),
                a = _ + n * this.segmentDistance;
            _ -= this._getMound(this.segments.length - 1);
            for (var r = t + e + s, o = 0, h = t; o < h;) {
                var c = o++;
                this._addSegment(Math.round(xe.easeIn(0, i, c / t)), xe.easeInOut(_, a, c / r))
            }
            for (o = 0, h = e; o < h;) {
                c = o++;
                this._addSegment(i, xe.easeInOut(_, a, (t + c) / r))
            }
            for (o = 0, h = s; o < h;) {
                c = o++;
                this._addSegment(Math.round(xe.easeInOut(i, 0, c / s)), xe.easeInOut(_, a, (t + e + c) / r))
            }
        },
        _addSegment: function(t, e, s) {
            null == s && (s = 0);
            var i = this.segments.length,
                n = this._getMound(i);
            this.segments.push(new me(i, new de(this._getLastY(), i * this.segmentDistance), new de(e + n, (i + 1) * this.segmentDistance), t, s))
        },
        _getMound: function(t) {
            var e = 250 + 250 * this.levelVo.trackHills,
                s = 0;
            return s += Math.sin(t / 2.5) * e * .25, s += Math.sin(t / 3.1) * e * .25, s += Math.sin(t / 5) * e * .5, s += Math.cos(t / 6) * e, s += Math.cos(t / 6.5) * -e, s += Math.cos(t / 7) * -e
        },
        _getLastY: function() {
            return 0 == this.segments.length ? 0 : this.segments[this.segments.length - 1].position2.worldY
        },
        _createDefaultScenery: function(t) {
            var e = t.index;
            e % 10 == 0 && (s = Math.random()) < .4 && ((2 < t.curve || e > this.maxSegments || e < 64) && this._addScenery(e, ie.SCENERY_CLUSTER_1, -7.5), (t.curve < -2 || e > this.maxSegments || e < 64) && this._addScenery(e, ie.SCENERY_CLUSTER_2, 7.5)), e % 2 == 0 && ((2 < t.curve || e > this.maxSegments || e < 32) && this._addScenery(e, e % 64 < 32 ? ie.SCENERY_SIDING_1_LEFT : ie.SCENERY_SIDING_2_LEFT, -this.locationVo.sidingDistance), (t.curve < -2 || e > this.maxSegments || e < 32) && this._addScenery(e, 32 < e % 64 ? ie.SCENERY_SIDING_1_RIGHT : ie.SCENERY_SIDING_2_RIGHT, this.locationVo.sidingDistance));
            var s = Math.random();
            e % 8 == 3 && s < .2 && (t.curve < -2 && this._addScenery(e, ie.SCENERY_BANNER_LEFT, -1.25), 2 < t.curve && this._addScenery(e, ie.SCENERY_BANNER_RIGHT, 1.25));
            s = Math.random();
            e % 2 == 0 && s < .2 && (i = [ie.SCENERY_SMALL_1, ie.SCENERY_SMALL_2, ie.SCENERY_SMALL_3, ie.SCENERY_SMALL_4, ie.SCENERY_SMALL_4, ie.SCENERY_SMALL_5, ie.SCENERY_SMALL_6, ie.SCENERY_SMALL_7, ie.SCENERY_SMALL_8][k.random(8)], this._addScenery(e, i, (Math.random() < .5 ? -1 : 1) * (1.15 + Math.random())));
            s = Math.random();
            32 < Math.abs(e - this.maxSegments) && 32 < e && e % 32 == 0 && s < .4 && (this._addScenery(e, ie.SCENERY_TUNNEL_1_LEFT, -1), this._addScenery(e, ie.SCENERY_TUNNEL_1_RIGHT, 1));
            s = Math.random();
            e % 2 == 0 && s < (this._system.isDesktop ? 1 : .6) && (i = [ie.SCENERY_TREE_TALL_1, ie.SCENERY_TREE_TALL_2, ie.SCENERY_TREE_1, ie.SCENERY_TREE_2, ie.SCENERY_TREE_3, ie.SCENERY_TREE_4, ie.SCENERY_TREE_5, ie.SCENERY_TREE_6][k.random(8)], this._addScenery(e, i, (Math.random() < .5 ? -1 : 1) * (3 * Math.random() + 1.5)));
            var i, s = Math.random();
            e % 2 == 1 && s < (this._system.isDesktop ? .125 : .05) && (i = [ie.SCENERY_CLUSTER_1, ie.SCENERY_CLUSTER_2, ie.SCENERY_CLUSTER_3, ie.SCENERY_CLUSTER_4][k.random(4)], this._addScenery(e, i, (Math.random() < .5 ? -1 : 1) * (5 * Math.random() + 3)))
        },
        _addScenery: function(t, e, s) {
            this.segments[t].scenery.unshift(new ge(e, s))
        },
        __class__: ye
    }), (e["cbcmtb.game.UnitVo"] = Ee).__name__ = "cbcmtb.game.UnitVo", Ee.__super__ = Vt, Ee.prototype = t(Vt.prototype, {
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
        _getImageSprites: function() {
            return this._assets.getAsset("assets/location/Units.png")
        },
        getDefault: function(t) {
            switch (this.type._hx_index) {
                case 0:
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
                    break;
                case 1:
                    switch (t._hx_index) {
                        case 0:
                            return 3;
                        case 1:
                            return 5;
                        case 2:
                            return 4;
                        case 3:
                            return 2
                    }
            }
        },
        getUpgrade: function(t) {
            switch (t._hx_index) {
                case 0:
                    return this._session.getUpgrade(_e.UPGRADE_SPEED, this.type);
                case 1:
                    return this._session.getUpgrade(_e.UPGRADE_STEERING, this.type);
                case 2:
                    return this._session.getUpgrade(_e.UPGRADE_ACCELERATION, this.type);
                case 3:
                    return this._session.getUpgrade(_e.UPGRADE_BOOST, this.type)
            }
        },
        getTotal: function(t) {
            var e, s = this._MAX_UPGRADES;
            switch (t._hx_index) {
                case 0:
                    e = this.getDefault(_e.UPGRADE_SPEED) + this.getUpgrade(_e.UPGRADE_SPEED);
                    break;
                case 1:
                    e = this.getDefault(_e.UPGRADE_STEERING) + this.getUpgrade(_e.UPGRADE_STEERING);
                    break;
                case 2:
                    e = this.getDefault(_e.UPGRADE_ACCELERATION) + this.getUpgrade(_e.UPGRADE_ACCELERATION);
                    break;
                case 3:
                    e = this.getDefault(_e.UPGRADE_BOOST) + this.getUpgrade(_e.UPGRADE_BOOST)
            }
            return 0 | Math.min(s, e)
        },
        getAvailable: function(t) {
            switch (t._hx_index) {
                case 0:
                    return this._MAX_UPGRADES - this.getTotal(_e.UPGRADE_SPEED);
                case 1:
                    return this._MAX_UPGRADES - this.getTotal(_e.UPGRADE_STEERING);
                case 2:
                    return this._MAX_UPGRADES - this.getTotal(_e.UPGRADE_ACCELERATION);
                case 3:
                    return this._MAX_UPGRADES - this.getTotal(_e.UPGRADE_BOOST)
            }
        },
        getBias: function(t, e, s) {
            t = this.getTotal(t);
            t < 0 && (t = 0), t > this._MAX_UPGRADES && (t = this._MAX_UPGRADES);
            s -= e;
            return e + Math.pow(t / this._MAX_UPGRADES, this._factory.accessibility.getAdjustedGameplayChallenge()) * s
        },
        getPercentageComplete: function() {
            return (this.getTotal(_e.UPGRADE_SPEED) + this.getTotal(_e.UPGRADE_STEERING) + this.getTotal(_e.UPGRADE_ACCELERATION) + this.getTotal(_e.UPGRADE_BOOST)) / (4 * this._MAX_UPGRADES)
        },
        __class__: Ee
    });
    var xe = function() {};
    (e["cbcmtb.game.Util"] = xe).__name__ = "cbcmtb.game.Util", xe.percentRemaining = function(t, e) {
        return t % e / e
    }, xe.accelerate = function(t, e, s) {
        return t + e * s
    }, xe.interpolate = function(t, e, s) {
        return t + (e - t) * s
    }, xe.easeIn = function(t, e, s) {
        return t + (e - t) * Math.pow(s, 2)
    }, xe.easeInOut = function(t, e, s) {
        return t + (e - t) * (-Math.cos(s * Math.PI) / 2 + .5)
    };
    var we = function(t, e, s, i, n, _, a, r, o, h, c) {
        x.call(this, t, e, s, i, n, _, a, r, o, h, c)
    };

    function Se(t, e, s, i) {
        null == i && (i = !1), null == s && (s = 100), null == e && (e = 100), this._assets = Ps.__cast(t.assets, Yt), this._factory = Ps.__cast(t.factory, jt), this._session = Ps.__cast(t.get_session(), Xt), this._system = t.system, bt.call(this, t, e, s, i)
    }

    function be(t) {
        Se.call(this, t, 720, 405, !1)
    }

    function ve(t, e) {
        this._sceneType = e, Se.call(this, t, t.factory.width, t.factory.height, !1)
    }

    function Te(t, e, s, i, n, _, a, r, o) {
        null == n && (n = 0), null == i && (i = 0);
        var h = new St(t),
            c = new St(t);
        x.call(this, t, h, c, e, s, i, n, _, a, r, o)
    }

    function Ae(t, e, s, i) {
        null == e && (e = 1), this._scale = e, Se.call(this, t, 192, 192, !1), this.setPosition(0 | s, 0 | i)
    }

    function Ce(t, e, s, i, n, _, a, r) {
        null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._title = e.toUpperCase(), this._buttonType = "TEXT", we.call(this, t, this._assets.get_buttonUp(), this._assets.get_buttonOver(), 200, 65, Math.round(s), Math.round(i), n, _, a, r)
    }

    function ke(t, e, s, i, n, _, a) {
        null == s && (s = 0), null == e && (e = 0), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SETTINGS", we.call(this, t, this._assets.overlayPauseUp, this._assets.overlayPauseOver, 50, 50, e, s, i, n, _, a)
    }

    function Re(t, e, s, i, n, _, a, r) {
        null == i && (i = 0), null == s && (s = 0), null == e && (e = ""), this._assets = t.assets, this._factory = t.factory, this._buttonType = "SMALL", we.call(this, t, this._assets.get_buttonSmallUp(), this._assets.get_buttonSmallOver(), 100, 30, s, i, n, _, a, r), this.setTitle(e)
    }

    function Ie(t, e) {
        null == e && (e = !0), this._isAnimated = e, Se.call(this, t, 120, 32, !1)
    }

    function Ue(t, e, s) {
        this._MEDAL_WIDTH = 100, this._unitType = e, this._medalType = s, Se.call(this, t, 720, 405, !1)
    }

    function Pe(t, e, s, i, n) {
        this._isCoinsVisible = e, this._scoreGold = s, this._scoreSilver = i, this._scoreBronze = n, Se.call(this, t, t.factory.width, t.factory.height, !1)
    }(e["cbcmtb.gui.AButton"] = we).__name__ = "cbcmtb.gui.AButton", we.__super__ = x, we.prototype = t(x.prototype, {
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
                s = new createjs.Bitmap(this._kernel.assets.getAsset("assets/gui/Buttons.png"));
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
            s.sourceRect = t, s.cache(0, 0, s.sourceRect.width, s.sourceRect.height), s.x = s.y = -10, e.addChild(s), this._highlightBitmap = s, this._highlightView = new St(this._kernel, e), this._highlightView.set_isVisible(!1), this.get_view().addChild(this._highlightView, 100)
        },
        __class__: we,
        __properties__: t(x.prototype.__properties__, {
            get_isHighlightable: "get_isHighlightable",
            get_isHighlighted: "get_isHighlighted"
        })
    }), (e["cbcmtb.gui.AGuiEntity"] = Se).__name__ = "cbcmtb.gui.AGuiEntity", Se.__super__ = bt, Se.prototype = t(bt.prototype, {
        __class__: Se
    }), (e["cbcmtb.gui.Action"] = be).__name__ = "cbcmtb.gui.Action", be.__super__ = Se, be.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this._context.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/Action.png")))
        },
        _updater: function(t) {
            null == t && (t = 0), Se.prototype._updater.call(this, t), this._bitmap.x = 30 * Math.sin(this._updates / 50) - 65
        },
        __class__: be
    }), (e["cbcmtb.gui.Bg"] = ve).__name__ = "cbcmtb.gui.Bg", ve.__super__ = Se, ve.prototype = t(Se.prototype, {
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
        __class__: ve
    }), (e["cbcmtb.gui.BlankButton"] = Te).__name__ = "cbcmtb.gui.BlankButton", Te.__super__ = x, Te.prototype = t(x.prototype, {
        _updater: function(t) {
            null == t && (t = 0);
            var e = this.get_view().context.localToGlobal(0, 0);
            this.get_view().globalX = e.x, this.get_view().globalY = e.y, x.prototype._updater.call(this, t)
        },
        __class__: Te
    }), (e["cbcmtb.gui.Burst"] = Ae).__name__ = "cbcmtb.gui.Burst", Ae.__super__ = Se, Ae.prototype = t(Se.prototype, {
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
        __class__: Ae
    }), (e["cbcmtb.gui.Button"] = Ce).__name__ = "cbcmtb.gui.Button", Ce.__super__ = we, Ce.prototype = t(we.prototype, {
        _init: function() {
            we.prototype._init.call(this);
            var t = 19;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                s = this.height - t,
                i = this._kernel.factory.createTextStyle(Ot.BUTTON);
            this._textUp = new ze(this._kernel, e, s, this._title, i), this._textOver = new ze(this._kernel, e, s, this._title, i), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
        },
        setTitle: function(t) {
            this._title != t && (this._title = t.toUpperCase(), this._textUp.set_text(this._textOver.set_text(this._title)))
        },
        onRollOver: function() {
            we.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Ct.INTERFACE, 0, 0, .25)
        },
        __class__: Ce
    }), (e["cbcmtb.gui.ButtonSettings"] = ke).__name__ = "cbcmtb.gui.ButtonSettings", ke.__super__ = we, ke.prototype = t(we.prototype, {
        __class__: ke
    }), (e["cbcmtb.gui.ButtonSmall"] = Re).__name__ = "cbcmtb.gui.ButtonSmall", Re.__super__ = we, Re.prototype = t(we.prototype, {
        _init: function() {
            we.prototype._init.call(this);
            var t = 5;
            new d("iP[ao]d|iPhone", "i").match(u.navigator.userAgent) && (t -= 2);
            var e = this.width - 10,
                s = this.height - t,
                i = this._kernel.factory.createTextStyle(Ot.BUTTON);
            i.size = 12, this._textUp = new ze(this._kernel, e, s, this._title, i), (i = this._kernel.factory.createTextStyle(Ot.BUTTON)).size = 12, this._textOver = new ze(this._kernel, e, s, this._title, i), this._textUp.set_x(this._textOver.set_x(5)), this._textUp.set_y(this._textOver.set_y(t)), this._stateUp.addEntity(this._textUp, null, !0, 2), this._stateOver.addEntity(this._textOver, null, !0, 2)
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
            we.prototype.onRollOver.call(this), this._kernel.audio.start("ButtonOver", Ct.INTERFACE, 0, 0, .25)
        },
        onClick: function() {
            we.prototype.onClick.call(this), this.isOver = !1
        },
        __class__: Re
    }), (e["cbcmtb.gui.Coins"] = Ie).__name__ = "cbcmtb.gui.Coins", Ie.__super__ = Se, Ie.prototype = t(Se.prototype, {
        _init: function() {
            var t = this;
            Se.prototype._init.call(this), this._displayValue = this._prevCoins = this._session.getCoins(), this._isAnimated ? (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Scenery.png")), this._bitmap.sourceRect = new createjs.Rectangle(0, 0, 32, 32), this._bitmap.y = 3) : (this._bitmap = new createjs.Bitmap(this._assets.getAsset("assets/location/Scenery.png")), this._bitmap.sourceRect = new createjs.Rectangle(320, 0, 32, 32), this._bitmap.cache(0, 0, 32, 32)), this._bitmap.x = this.width - 32, this._bitmap.y = 3, this._context.addChild(this._bitmap);
            var e = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ze(this._kernel, this._bitmap.x - 5, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.coins")).toUpperCase(), e, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._message = new ze(this._kernel, this._bitmap.x - 5, 35, k.string(this._displayValue), this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS)), this._message.setPosition(.85 * this._message.width - 1, .5 * this._message.height + 5), this._message._context.regX = .85 * this._message.width, this._message._context.regY = .5 * this._message.height, this._session.get_isTester() && this.addEntity(new Te(this._kernel, 0 | this.width, 0 | this.height, 0, 0, null, function() {
                t._session.setCoins(null, t._session.getCoins() + 100)
            }), null, !0, 10), this.addEntity(this._message, null, !0, 1)
        },
        _updater: function(t) {
            null == t && (t = 0);
            var e, s = this;
            Se.prototype._updater.call(this, t), this._isAnimated && (this._bitmap.sourceRect.x = this._updates % 32 * 32), this._age < 3e3 || (this._prevCoins != this._session.getCoins() && (this._kernel.audio.start("Coin", Ct.INTERFACE, 0, 0, .65, null, !1), null != this._tweezer && ((e = this._tweezer).isDisposed || (e.isDisposed = !0, e.set_isActive(!1), e._disposer())), this.addEntity(this._tweezer = new Os(this._kernel, function(t) {
                s._message._context.scaleX = s._message._context.scaleY = t
            }, 1.75, 1, 0, 1e3, null, Ds.EASE_OUT, Ls.QUARTIC))), this._prevCoins = this._session.getCoins(), this._displayValue != this._session.getCoins() && (e = this._tools, this._displayValue = Math.round(.9 * this._displayValue + .1 * this._session.getCoins()), Math.abs(this._displayValue - this._session.getCoins()) < 5 && (this._displayValue = this._session.getCoins()), this._message.set_text(k.string(this._displayValue))))
        },
        __class__: Ie
    }), (e["cbcmtb.gui.Hero"] = Ue).__name__ = "cbcmtb.gui.Hero", Ue.__super__ = Se, Ue.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this._container = new createjs.Container, this._context.addChild(this._container), this._container.addChild(this._bitmap = new createjs.Bitmap(this._assets.getAsset(this._getImage()))), this._medalBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/HeroMedals.png"));
            var t = this._getMedalCol() * this._MEDAL_WIDTH;
            this._medalBitmap.sourceRect = new createjs.Rectangle(t, 0, this._MEDAL_WIDTH, this.height), this._medalBitmap.x = .5 * (this.width - this._MEDAL_WIDTH), this._medalType != te.MEDAL_NONE && this._container.addChild(this._medalBitmap)
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
        __class__: Ue
    }), (e["cbcmtb.gui.Hud"] = Pe).__name__ = "cbcmtb.gui.Hud", Pe.__super__ = Se, Pe.prototype = t(Se.prototype, {
        _init: function() {
            var e = this;
            Se.prototype._init.call(this);
            var t = new createjs.Bitmap(this._assets.getAsset("assets/gui/Hud.png"));
            this._context.addChild(t), this._targets = new Me(this._kernel, this._scoreGold, this._scoreSilver, this._scoreBronze), this.addEntity(this._targets, null, !0, 10), this._targets.setPosition(40, 12), this._timer = new Le(this._kernel), this.addEntity(this._timer, null, !0, 10), this._timer.setPosition(this._targets.x + 100, 12), this._coins = new Ie(this._kernel, !1), this.addEntity(this._coins, null, this._isCoinsVisible, 10), this._coins.setPosition(this.width - 310, 12), this._speedo = new Ne(this._kernel), this.addEntity(this._speedo, null, !0, 10), this._speedo.setPosition(this._coins.x - 20, 12), this.addEntity(this._instructions = new Be(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png")), null, !1, 9), this._instructions.setPosition((this._factory.width - 300) / 2, this._factory.height - 200);

            function s(t) {
                e._instructions.set_y(t)
            }
            this.addEntity(new Os(this._kernel, s, this._factory.height, this._instructions.y, 0, 1e3, 1e3, Ds.EASE_OUT, Ls.QUARTIC, function() {
                e.addEntity(new Os(e._kernel, s, e._instructions.y, e._factory.height, 0, 1e3, 0, Ds.EASE_IN, Ls.BACK(), function() {
                    e._instructions.get_view().set_isVisible(!1)
                }))
            })), this.addEntity(new Os(this._kernel, function(t) {
                e._targets.set_y(t)
            }, -100, this._targets.y, 2e3, 1e3, 0, Ds.EASE_OUT, Ls.QUARTIC)), this.addEntity(new Os(this._kernel, function(t) {
                e._timer.set_y(t)
            }, -100, this._timer.y, 2e3, 1e3, 0, Ds.EASE_OUT, Ls.QUARTIC)), this.addEntity(new Os(this._kernel, function(t) {
                e._speedo.set_y(t)
            }, -100, this._speedo.y, 2e3, 1e3, 0, Ds.EASE_OUT, Ls.QUARTIC)), this.addEntity(new Os(this._kernel, function(t) {
                e._coins.set_y(t)
            }, -100, this._coins.y, 2e3, 1e3, 0, Ds.EASE_OUT, Ls.QUARTIC))
        },
        _updater: function(t) {
            null == t && (t = 0), Se.prototype._updater.call(this, t)
        },
        configureTargets: function(t) {
            this._targets.configure(t)
        },
        configureTimer: function(t) {
            this._timer.configure(t)
        },
        configureSpeedo: function(t) {
            this._speedo.configure(t)
        },
        __class__: Pe
    });
    var Ne = function(t) {
        Se.call(this, t, 220, 60, !1)
    };
    (e["cbcmtb.gui.HudSpeedo"] = Ne).__name__ = "cbcmtb.gui.HudSpeedo", Ne.__super__ = Se, Ne.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ze(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.speedo")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_COINS);
            this._message = new ze(this._kernel, this.width, 20, "55", t, null, null, 1), this._message.setPosition(0, 6), this.addEntity(this._message, null, !0, 10)
        },
        configure: function(t) {
            this._prevValue != t && (this._prevValue = t, this._message.set_text(null == t ? "null" : "" + t))
        },
        __class__: Ne
    });
    var Me = function(t, e, s, i) {
        this._scoreGold = e, this._scoreSilver = s, this._scoreBronze = i, Se.call(this, t, 110, 60, !1)
    };
    (e["cbcmtb.gui.HudTargets"] = Me).__name__ = "cbcmtb.gui.HudTargets", Me.__super__ = Se, Me.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ze(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.targets")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10);
            t = 11;
            this.addEntity(this._targetGold = new De(this._kernel, te.MEDAL_GOLD, this._scoreGold, 11), null, !0, 10), this.addEntity(this._targetSilver = new De(this._kernel, te.MEDAL_SILVER, this._scoreSilver, t += 11), null, !0, 10), this.addEntity(this._targetBronze = new De(this._kernel, te.MEDAL_BRONZE, this._scoreBronze, 33), null, !0, 10)
        },
        configure: function(t) {
            t >= this._scoreGold && this._targetGold.setIsExpired(), t >= this._scoreSilver && this._targetSilver.setIsExpired(), t >= this._scoreBronze && this._targetBronze.setIsExpired()
        },
        __class__: Me
    });
    var De = function(t, e, s, i) {
        this._delimeter = ".", this._medalType = e, this._score = s, Se.call(this, t, 110, 20, !1), this.set_y(i)
    };
    (e["cbcmtb.gui._HudTargets._HelperTarget"] = De).__name__ = "cbcmtb.gui._HudTargets._HelperTarget", De.__super__ = Se, De.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ze(this._kernel, 50, 20, this._session.getMedalTitle(this._medalType).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 55, s = 0, i = this._tools.convertUpdatesToFormattedTime(this._score, this._delimeter).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var _ = this._createDigit(n, e, 0);
                this._digits.push(_), this.addEntity(_, null, !0, 10), e += n == this._delimeter ? 4 : 8
            }
        },
        _createDigit: function(t, e, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            i.align = Bt.LEFT;
            i = new ze(this._kernel, 10, 10, t, i);
            return i.setPosition(e, s), i
        },
        setIsExpired: function() {
            this._context.alpha = .25
        },
        __class__: De
    });
    var Le = function(t) {
        this._delimeter = ".", Se.call(this, t, 220, 60, !1)
    };
    (e["cbcmtb.gui.HudTimer"] = Le).__name__ = "cbcmtb.gui.HudTimer", Le.__super__ = Se, Le.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this);
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TITLE);
            this._title = new ze(this._kernel, this.width, 20, k.string(this._kernel.getConfig("gui.scenes.game.hud.timer")).toUpperCase(), t, null, null, .5), this._title.setPosition(0, 0), this.addEntity(this._title, null, !0, 10), this._digits = [];
            for (var e = 33, s = 0, i = this._tools.convertUpdatesToFormattedTime(0, this._delimeter).split(""); s < i.length;) {
                var n = i[s];
                ++s;
                var _ = this._createDigit(n, e, -4);
                this._digits.push(_), this.addEntity(_, null, !0, 10), e += n == this._delimeter ? 10 : 28
            }
        },
        configure: function(t) {
            if (this._value != t) {
                this._value = t;
                for (var e = 0, s = 0, i = this._tools.convertUpdatesToFormattedTime(this._value, this._delimeter).split(""); s < i.length;) {
                    var n = i[s];
                    ++s, this._digits[e].set_text(n), ++e
                }
            }
        },
        _createDigit: function(t, e, s) {
            var i = this._factory.createTextStyle(this._factory.TEXTSTYLE_HUD_TIMER),
                i = new ze(this._kernel, 40, 40, "", i);
            return i.setPosition(e, s), i
        },
        __class__: Le
    });
    var Be = function(t, e, s, i) {
        null == i && (i = 1), null == s && (s = !1), this._imageElement = e, this._isAdd = s, Se.call(this, t, this._imageElement.width, this._imageElement.height, !1), this.set_alpha(i)
    };
    (e["cbcmtb.gui.Image"] = Be).__name__ = "cbcmtb.gui.Image", Be.__super__ = Se, Be.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this._context.mouseEnabled = !1, this._bitmap = new createjs.Bitmap(this._imageElement), this._context.addChild(this._bitmap), this._bitmap.compositeOperation = this._isAdd ? "lighter" : "source-over"
        },
        set_alpha: function(t) {
            return this._bitmap.alpha = t
        },
        __class__: Be,
        __properties__: t(Se.prototype.__properties__, {
            set_alpha: "set_alpha"
        })
    });
    var Oe = function(t) {
        this._assetManager = Ps.__cast(t.assets, Yt), this._factory = Ps.__cast(t.factory, jt), this._buttonSize = 50, mt.call(this, t, this._buttonSize, this._buttonSize, null, null, null, null, null, null, null, this._assetManager.overlayPauseUp, this._assetManager.overlayPauseOver, null, null, 4, 0, .85)
    };

    function Fe(t, e) {
        this._isSmall = e, Se.call(this, t, this._isSmall ? 230 : 380, this._isSmall ? 190 : 240, !1)
    }

    function Ve(t, e) {
        this._type = e, Fe.call(this, t, !0)
    }

    function He(t, e) {
        this._medalType = e, this._delayInitial = 1500, this._delayMedal = 750, Fe.call(this, t, !0)
    }

    function Ye(t, e) {
        this._type = e, Fe.call(this, t, !1)
    }

    function Ge(t, e) {
        this._statHeight = 12, this._statWidth = 8, this._type = e, Fe.call(this, t, !0)
    }(e["cbcmtb.gui.Overlay"] = Oe).__name__ = "cbcmtb.gui.Overlay", Oe.__super__ = mt, Oe.prototype = t(mt.prototype, {
        _init: function() {
            mt.prototype._init.call(this), this._buttonPause.remove(!0), this._buttonPause = new ke(this._kernel, null, null, null, this._buttonPause.onClickCallback, this._buttonPause.onRollOverCallback, this._buttonPause.onRollOutCallback), this.addEntity(this._buttonPause, null, !0, 25);
            var t = this._kernel.factory.width - this._buttonSize - 5;
            this.positionButton(Dt.PAUSE, t, 4), this.positionButton(Dt.UNPAUSE, -this._buttonSize - 10, 4), this.positionButton(Dt.BACK, -this._buttonSize - 10, 4), this.positionButton(Dt.MUTE, -this._buttonSize - 10, 4), this.positionButton(Dt.UNMUTE, -this._buttonSize - 10, 4), this._flashView.set_isVisible(!0), this._pauseMenu = new je(this._kernel), this.set_pauseEntity(this._pauseMenu)
        },
        flash: function(t, e, s, i) {
            null == i && (i = 16777215), null == s && (s = 1), null == e && (e = !0), s *= this._factory.accessibility.getAdjustedVisualsIntensity(), this._flashContext.compositeOperation = 0 == i ? "source-over" : "lighter", mt.prototype.flash.call(this, t, e, s, i)
        },
        _drawPause: function(t) {
            null == t && (t = !0), mt.prototype._drawPause.call(this, t), this._pauseMenu.pauseHandler(t)
        },
        __class__: Oe
    }), (e["cbcmtb.gui.Panel"] = Fe).__name__ = "cbcmtb.gui.Panel", Fe.__super__ = Se, Fe.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this.set_y(Math.round(.5 * (this._factory.height - this.height))), this.addEntity(new y(this._kernel, null, this._bgContext = new createjs.Container), null, !0, 1), this._bgContext.alpha = .5, this.addEntity(new Be(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallBg.png" : "assets/gui/PanelBigBg.png")), null, !0, 2), this.addEntity(new y(this._kernel, null, this._fgContext = new createjs.Container), null, !0, 999), this.addEntity(new Be(this._kernel, this._kernel.assets.getAsset(this._isSmall ? "assets/gui/PanelSmallFg.png" : "assets/gui/PanelBigFg.png")), null, !0, 1e3)
        },
        __class__: Fe
    }), (e["cbcmtb.gui.PanelLevel"] = Ve).__name__ = "cbcmtb.gui.PanelLevel", Ve.__super__ = Fe, Ve.prototype = t(Fe.prototype, {
        _init: function() {
            Fe.prototype._init.call(this), this.vo = new he(this._kernel, this._type), this._bgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevelBg.png"));
            var t = this._getBgCol() * this.width;
            this._bgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._bgContext.addChild(this._bgBitmap), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelLevel.png"));
            t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            t.spacingVertical = 16, this._title = new ze(this._kernel, 125, this.height - 60, this._getTitle().toUpperCase(), t), this._title.setPosition(0, 72), this.addEntity(this._title, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new ze(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10)
        },
        _getTitle: function() {
            var t = "";
            return t += this.vo.title, this.vo.isLocked || this.vo.isNew ? this.vo.isNew ? t += "\n" + k.string(this._kernel.getConfig("gui.scenes.selectLevel.new")).toUpperCase() : this.vo.isLocked && (t += "\n" + k.string(this._kernel.getConfig("gui.scenes.selectLevel.locked")).toUpperCase()) : t += "\n" + this._session.getMedalTitle(this.vo.medalType), t
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
        __class__: Ve
    }), (e["cbcmtb.gui.PanelResult"] = He).__name__ = "cbcmtb.gui.PanelResult", He.__super__ = Fe, He.prototype = t(Fe.prototype, {
        _init: function() {
            Fe.prototype._init.call(this), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelResult.png")), this._fgBitmap.sourceRect = new createjs.Rectangle(0, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            var t, e = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            switch (this._message = new ze(this._kernel, this.width - 60, this.height - 60, this._getMessage().toUpperCase(), e), this._message.setPosition(30, 131), this.addEntity(this._message, null, !0, 10), this._medalType._hx_index) {
                case 0:
                    t = [];
                    break;
                case 1:
                    t = [te.MEDAL_BRONZE];
                    break;
                case 2:
                    t = [te.MEDAL_BRONZE, te.MEDAL_SILVER];
                    break;
                case 3:
                    t = [te.MEDAL_BRONZE, te.MEDAL_SILVER, te.MEDAL_GOLD]
            }
            for (var s = this._delayInitial, i = 0; i < t.length;) {
                var n = t[i];
                ++i, s += this._delayMedal, this.addEntity(new Tt(this._kernel, function(t, e) {
                    return function() {
                        t[0](e[0])
                    }
                }([Js(this, this._showMedal)], [n]), s))
            }
        },
        _showMedal: function(t) {
            var e = this._getFgCol(t);
            this._fgBitmap.sourceRect.x = e * this.width;
            t = t._hx_index;
            this.addEntity(new Ae(this._kernel, 1, 40 * (t + 1), 70), null, !0, 1e3), this._kernel.overlay.flash(100 * t + 100, !0, .3 * t), 0 < t && (this._kernel.audio.start("GameOver", Ct.INTERFACE, 1, 0, .5 * t), this._kernel.audio.start("Medal" + t, Ct.INTERFACE, 1, 0, .5 * t))
        },
        _getMessage: function() {
            var t = "";
            return t += k.string(this._kernel.getConfig("gui.scenes.results.message")) + " ", t += this._session.getMedalTitle(this._medalType) + "\n"
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
        __class__: He
    }), (e["cbcmtb.gui.PanelShop"] = Ye).__name__ = "cbcmtb.gui.PanelShop", Ye.__super__ = Fe, Ye.prototype = t(Fe.prototype, {
        _init: function() {
            Fe.prototype._init.call(this), this.vo = new Ee(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelShop.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = new Ie(this._kernel);
            t.setPosition(215, 43), this.addEntity(t, null, !0, 30);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new ze(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new ze(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var e = 86, s = [_e.UPGRADE_SPEED, _e.UPGRADE_STEERING, _e.UPGRADE_ACCELERATION, _e.UPGRADE_BOOST], i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                n = this._createUpgrade(n, this._type, 0, e);
                this.addEntity(n, null, !0, 15), e += 0 | n.height
            }
        },
        _createUpgrade: function(t, e, s, i) {
            t = new Xe(this._kernel, t, this.vo);
            return t.setPosition(s, i), t
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
        __class__: Ye
    }), (e["cbcmtb.gui.PanelUnit"] = Ge).__name__ = "cbcmtb.gui.PanelUnit", Ge.__super__ = Fe, Ge.prototype = t(Fe.prototype, {
        _init: function() {
            Fe.prototype._init.call(this), this.vo = new Ee(this._kernel, this._type), this._fgBitmap = new createjs.Bitmap(this._assets.getAsset("assets/gui/PanelUnit.png"));
            var t = this._getFgCol() * this.width;
            this._fgBitmap.sourceRect = new createjs.Rectangle(t, 0, this.width, this.height), this._fgContext.addChild(this._fgBitmap);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE);
            this._message = new ze(this._kernel, 112, this.height - 60, this._getTitle().toUpperCase(), t, null, null, 1), this._message.setPosition(0, 50), this.addEntity(this._message, null, !0, 10);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_STATS);
            this._title = new ze(this._kernel, this._message.width, this.height - 60, this._getMessage().toUpperCase(), t, null, null, .5), this._title.setPosition(this._message.x, this._message.y - 7), this.addEntity(this._title, null, !0, 10);
            for (var e = 80, s = [_e.UPGRADE_SPEED, _e.UPGRADE_STEERING, _e.UPGRADE_ACCELERATION, _e.UPGRADE_BOOST], i = 0; i < s.length;) {
                var n = s[i];
                ++i;
                n = this._createBar(n);
                n.set_y(e), e += n.height, this.addEntity(n, null, !0, 15)
            }
        },
        _createBar: function(t) {
            var e = new Se(this._kernel, this.width, this._statHeight + 2, !1),
                s = this._title.textStyle.clone();
            s.size = 16;
            s = new ze(this._kernel, this._message.width, e.height, this._session.getUpgradeTitle(t).toUpperCase(), s);
            e.addEntity(s, null, !0, 1);
            for (var i = [], n = 0, _ = this.vo.getDefault(t); n < _;) {
                n++;
                i.push(0)
            }
            for (n = 0, _ = this.vo.getUpgrade(t); n < _;) {
                n++;
                i.push(1)
            }
            for (n = 0, _ = this.vo.getAvailable(t); n < _;) {
                n++;
                i.push(2)
            }
            for (; 8 < i.length;) i.shift();
            for (var a = 123, n = 0; n < i.length;) {
                var r = i[n];
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
        __class__: Ge
    });
    var je = function(t) {
        Ft.call(this, t)
    };
    (e["cbcmtb.gui.PauseMenu"] = je).__name__ = "cbcmtb.gui.PauseMenu", je.__super__ = Ft, je.prototype = t(Ft.prototype, {
        _init: function() {
            var t = this;
            Ft.prototype._init.call(this), this.addEntity(this._debugText = new ze(this._kernel, this._factory.width - 20, 20, "", this._factory.createTextStyle(Ot.SMALLPRINT), !0, !1, .5), null, !0, 2), this._debugText.setPosition(10, this._factory.height - this._debugText.height);
            var e = Math.round((this._kernel.factory.width - 200) / 2),
                s = Math.round((this._kernel.factory.height - 65 * (this._isFullScreenSupported() ? 4 : 3)) / 2);
            this.addEntity(new Ce(this._kernel, this._kernel.getConfig("gui.buttons.unpause"), e, s, null, function() {
                t._kernel.overlay.activateButton(Dt.UNPAUSE)
            }), At.ALWAYS, !0, 1), this.addEntity(this._audioButton = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.audioOff"), e, s += 65, null, function() {
                t._kernel.overlay._wasMute = !t._kernel.overlay._wasMute, t._factory.accessibility.setAudioIsMute(t._kernel.overlay._wasMute), t._kernel.overlay.activateButton(Dt.UNPAUSE)
            }), At.ALWAYS, !0, 1), this._isFullScreenSupported() && this.addEntity(this._fullScreenButton = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.fullScreenOn"), e, s += 65, null, function() {
                t._stageClick(), t._kernel.overlay.activateButton(Dt.UNPAUSE)
            }), At.ALWAYS, !0, 1), this.addEntity(new Ce(this._kernel, this._kernel.getConfig("gui.buttons.back"), e, s += 65, null, function() {
                t._kernel.overlay.activateButton(Dt.UNPAUSE), t._kernel.scenes.back()
            }), At.DEFEND, !0, 1), this.addEntity(new Ce(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), e, s, null, function() {
                t._kernel.overlay.activateButton(Dt.UNPAUSE), t._pressInstructions()
            }), At.STANDARD, !0, 1)
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
            this._kernel._stage.removeEventListener("click", Js(this, this._stageClick), !0), Ft.prototype._disposer.call(this)
        },
        _pressInstructions: function() {
            try {
                this._kernel.scenes.get_scene()._pressInstructions()
            } catch (t) {
                this._kernel.scenes.setScene(Lt.INSTRUCTIONS)
            }
        },
        _updater: function(t) {
            null == t && (t = 0), Ft.prototype._updater.call(this, t), this._isFullScreenClicked = !1
        },
        pauseHandler: function(t) {
            var e = this;
            t ? (this._audioButton.setTitle(this._kernel.getConfig(this._kernel.audio.isMute ? "gui.buttons.audioOn" : "gui.buttons.audioOff")), null != this._fullScreenButton && this._fullScreenButton.setTitle(this._kernel.getConfig(this._isFullScreenEnabled() ? "gui.buttons.fullScreenOff" : "gui.buttons.fullScreenOn")), this._kernel._stage.addEventListener("click", Js(this, this._stageClick), !0), this._debugText.set_text(this._factory.id.toLowerCase() + " v" + this._factory.version + " @ " + Math.round(this._kernel.getFramerate()) + "fps : " + this._session.cache.debugMessage), this.addEntity(new Os(this._kernel, function(t) {
                e._context.y = t
            }, this._factory.height, 0, 0, 500, null, Ds.EASE_OUT, Ls.QUARTIC)), this._factory.accessibility.buttonsRegister(this, null, 500)) : (this._kernel._stage.removeEventListener("click", Js(this, this._stageClick), !0), this._factory.accessibility.buttonsRevert())
        },
        _stageClick: function(t) {
            this._kernel.isActive || null != this._fullScreenButton && (this._isFullScreenClicked || this._fullScreenButton.isOver && (this._isFullScreenEnabled() ? this._kernel.system.requestExitFullScreen() : (this._kernel.system.requestFullScreen(), this._kernel.system.requestLockScreen()), this._isFullScreenClicked = !0, null != t && t.stopPropagation(), this._kernel.overlay.activateButton(Dt.UNPAUSE)))
        },
        __class__: je
    });
    var ze = function(t, e, s, i, n, _, a, r) {
        null == r && (r = 1), null == a && (a = !1), null == _ && (_ = !1), null == i && (i = ""), i = c.replace(i, "<BR/>", "\n"), i = c.replace(i, "<br/>", "\n"), vt.call(this, t, e, s, i, n, _, a), this.set_alpha(r)
    };

    function Ke(t, e, s) {
        this._big = e, this._small = s, Se.call(this, t, 360, 200, !1)
    }

    function We(t, e) {
        this._title = e, Se.call(this, t, 350, 40, !1)
    }(e["cbcmtb.gui.Text"] = ze).__name__ = "cbcmtb.gui.Text", ze.__super__ = vt, ze.prototype = t(vt.prototype, {
        _init: function() {
            vt.prototype._init.call(this), this._textField.textBaseline = "alphabetic", this._textField.y += 1.15 * this.textStyle.size, this._prevTextStyle = "invalidated"
        },
        set_alpha: function(t) {
            return this._context.alpha = t
        },
        __class__: ze,
        __properties__: t(vt.prototype.__properties__, {
            set_alpha: "set_alpha"
        })
    }), (e["cbcmtb.gui.TitleBig"] = Ke).__name__ = "cbcmtb.gui.TitleBig", Ke.__super__ = Se, Ke.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this);
            this._textBig = new ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Ot.OVERSIZED), !1, !1, 1), this._textBig.setPosition(-1, 20), this.addEntity(this._textBig, null, !0, 1), this._textSmall = new ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Ot.SUBHEAD), !1, !1, .5), this._textSmall.setPosition(0, 10), this.addEntity(this._textSmall, null, !0, 1), this.configure(this._big, this._small)
        },
        configure: function(t, e) {
            this._big = t, this._small = e, this._textBig.set_text(this._big.toUpperCase()), this._textSmall.set_text(this._small.toUpperCase())
        },
        __class__: Ke
    }), (e["cbcmtb.gui.TitleSmall"] = We).__name__ = "cbcmtb.gui.TitleSmall", We.__super__ = Se, We.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this._text = new ze(this._kernel, this.width, 30, "", this._factory.createTextStyle(Ot.HEADLINE), !1, !1, 1), this._text.setPosition(0, 7), this.addEntity(this._text, null, !0, 1), this.set_x((this._factory.width - this.width) / 2), this.configure(this._title)
        },
        configure: function(t) {
            this._title = t, this._title = this._title.toUpperCase(), this._text.set_text(this._title)
        },
        __class__: We
    });
    var Xe = function(t, e, s) {
        this._statHeight = 24, this._statWidth = 16, this._MAX_STATS = 8, this._type = e, this._unitVo = s, Se.call(this, t, 380, 28, !1)
    };

    function Qe(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this._session = t.get_session(), this._assets = t.assets, this._factory = t.factory, this._system = t.system, H.call(this, t, e, s = !0, i, n)
    }(e["cbcmtb.gui.Upgrade"] = Xe).__name__ = "cbcmtb.gui.Upgrade", Xe.__super__ = Se, Xe.prototype = t(Se.prototype, {
        _init: function() {
            Se.prototype._init.call(this), this._prevCoins = this._session.getCoins();
            var t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_TITLE),
                e = new ze(this._kernel, 112, this.height, this._session.getUpgradeTitle(this._type).toUpperCase(), t);
            e.set_y(-2), this.addEntity(e, null, !0, 1), this._bars = new createjs.Container, this._bars.x = 123, this._context.addChild(this._bars), this._button = new Re(this._kernel, "", 245, -2, null, Js(this, this.buy)), this._session.get_isTester() && this.addEntity(new Te(this._kernel, this._statWidth * this._MAX_STATS, this._statHeight, this._bars.x, 0, null, Js(this, this._reduce)), null, !0, 1);
            t = this._factory.createTextStyle(this._factory.TEXTSTYLE_PANEL_MESSAGE);
            this._message = new ze(this._kernel, 100, 20, "", t, null, null, .5), this._message.setPosition(244, 4), this.addEntity(this._message, null, !0, 29), this.configure()
        },
        _updater: function(t) {
            null == t && (t = 0), Se.prototype._updater.call(this, t), this._prevCoins != this._session.getCoins() && (this._prevCoins = this._session.getCoins(), this.configure())
        },
        configure: function() {
            this._bars.removeAllChildren();
            var t = this._unitVo.getTotal(this._type),
                e = this._getPrice(t + 1),
                s = e <= this._session.getCoins();
            this._button.setTitle(k.string(this._kernel.getConfig("gui.buttons.buy")) + " " + e), t == this._MAX_STATS ? (this._button.remove(!0), this._message.set_text(k.string(this._kernel.getConfig("gui.scenes.shop.maxed")).toUpperCase())) : s ? (this._message.set_text(""), this.addEntity(this._button, null, !0, 30)) : (this._button.remove(!0), this._message.set_text(null == e ? "null" : "" + e));
            for (var i = [], n = 0, _ = this._unitVo.getDefault(this._type); n < _;) {
                n++;
                i.push(0)
            }
            for (n = 0, _ = this._unitVo.getUpgrade(this._type); n < _;) {
                n++;
                i.push(1)
            }
            for (n = 0, _ = this._unitVo.getAvailable(this._type); n < _;) {
                n++;
                i.push(2)
            }
            for (; 8 < i.length;) i.shift();
            for (var a = 0, n = 0; n < i.length;) {
                var r = i[n];
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
            t <= this._session.getCoins() && (this._session.setCoins(null, this._session.getCoins() - t), this._session.setUpgrade(this._type, this._unitType, this._unitVo.getUpgrade(this._type) + 1), this.configure(), this._kernel.audio.start("Coin", Ct.INTERFACE, 0, 0, .5))
        },
        _reduce: function() {
            this._session.setUpgrade(this._type, this._unitType, this._session.getUpgrade(this._type, this._unitType) - 1), this.configure()
        },
        __class__: Xe
    }), (e["cbcmtb.scenes.AScene"] = Qe).__name__ = "cbcmtb.scenes.AScene", Qe.__super__ = H, Qe.prototype = t(H.prototype, {
        _init: function() {
            H.prototype._init.call(this), this._easyTweezers = [], this._kernel.overlay.get_pauseEntity().setAgenda(At.STANDARD), this._factory.preventDefaultForKeys([Ut.SPACE]), this._kernel.audio.start("MusicMenu", Ct.MUSIC, -1, 7111, .5, null, !0)
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([Ut.SPACE]), this._factory.accessibility.buttonsRegister(), H.prototype._disposer.call(this)
        },
        _pressContinue: function() {
            this._kernel.log("button: continue: " + k.string(this.type)), this._kernel.inputs.keyboard.getIsKeyDown(Ut.SQUARELEFT) && this._kernel.inputs.keyboard.getIsKeyDown(Ut.SQUARERIGHT) && this._session.setIsTester(!this._session.get_isTester());
            var t = this._factory.getNextSceneType(this.type);
            t == Lt.SELECT_LEVEL && this._session.getMedal(qt.LEVEL_1) == te.MEDAL_NONE && (t = Lt.GAME);
            var e = Js(h = this._kernel.scenes, h.setScene),
                s = t;
            this._outro(function() {
                e(s)
            })
        },
        _pressInstructions: function() {
            this._kernel.log("button: instructions");
            var t = Js(h = this._kernel.scenes, h.setScene),
                e = Lt.INSTRUCTIONS;
            this._outro(function() {
                t(e)
            })
        },
        _outro: function(t) {
            this._isOutroCalled || (this._isOutroCalled = !0, null != t && t())
        },
        _addBg: function() {
            this.addEntity(new ve(this._kernel, this.type), null, !0, 1)
        },
        _addFg: function(t, e, s, i) {
            null == i && (i = 0), null == s && (s = ""), null == e && (e = "");
            var n = this;
            this._fgHeader = new Be(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgHeader2.png" : "assets/gui/SceneFgHeader1.png"));
            var _ = this._fgHeader;
            _.set_x(_.x - i), this.addEntity(this._fgHeader, null, !0, 110), t ? this._fgHeader.addEntity(new We(this._kernel, e), null, !0, 1) : this._fgHeader.addEntity(new Ke(this._kernel, e, s), null, !0, 1), this._fgFooter = new Be(this._kernel, this._assets.getAsset(t ? "assets/gui/SceneFgFooter2.png" : "assets/gui/SceneFgFooter1.png")), this.addEntity(this._fgFooter, null, !0, 100), this.addEntity(new Os(this._kernel, function(t) {
                n._fgHeader.set_y(t)
            }, -this._factory.height, this._fgHeader.y, 500, 1e3, null, Ds.EASE_OUT, Ls.EXPONENTIAL)), this.addEntity(new Os(this._kernel, function(t) {
                n._fgFooter.set_y(t)
            }, this._factory.height, this._fgFooter.y, t ? 0 : 750, 1e3, null, Ds.EASE_OUT, Ls.EXPONENTIAL))
        },
        _addButtons: function(t, e, s, i, n, _, a) {
            null == a && (a = 0), null == _ && (_ = 0), null == n && (n = 0), null == t && (t = 1e3);
            var r = this;
            this._buttonRight = e, this._buttonLeft = s, this._buttonCenter = i, null != this._buttonRight && (this._buttonRight.setPosition(this._factory.width - 200 - 30, this._factory.height - 65 - 13), this.addEntity(this._buttonRight, null, !0, t), this.addEntity(new Os(this._kernel, function(t) {
                r._buttonRight.set_y(t)
            }, this._factory.height + 60, this._buttonRight.y, n + 1200, 2e3, null, Ds.EASE_OUT, Ls.ELASTIC()))), null != this._buttonCenter && (this._buttonCenter.setPosition(.5 * (this._factory.width - 200), this._factory.height - 65 - 13), this.addEntity(this._buttonCenter, null, !0, t + 1), this.addEntity(new Os(this._kernel, function(t) {
                r._buttonCenter.set_y(t)
            }, this._factory.height + 60, this._buttonCenter.y, a + 1300, 2e3, null, Ds.EASE_OUT, Ls.ELASTIC()))), null != this._buttonLeft && (this._buttonLeft.setPosition(30, this._factory.height - 65 - 13), this.addEntity(this._buttonLeft, null, !0, t + 2), this.addEntity(new Os(this._kernel, function(t) {
                r._buttonLeft.set_y(t)
            }, this._factory.height + 60, this._buttonLeft.y, _ + 1400, 2e3, null, Ds.EASE_OUT, Ls.ELASTIC())))
        },
        _defaultOutro: function(t) {
            var e = this;
            if (!this._isOutroCalled) {
                this._kernel.audio.start("Intro", Ct.INTERFACE, 0, 0, .5, 0, !0), this._isOutroCalled = !0;
                for (var s = 0, i = this.getEntitiesByClass(Os); s < i.length;) {
                    var n = i[s];
                    ++s, n.remove()
                }
                this._easyTweez(!1), null != this._buttonLeft && this.addEntity(new Os(this._kernel, function(t) {
                    e._buttonLeft.set_y(t)
                }, this._buttonLeft.y, this._factory.height, 0, 1e3, null, Ds.EASE_IN, Ls.BACK())), null != this._buttonCenter && this.addEntity(new Os(this._kernel, function(t) {
                    e._buttonCenter.set_y(t)
                }, this._buttonCenter.y, this._factory.height, 50, 1e3, null, Ds.EASE_IN, Ls.BACK())), null != this._buttonRight && this.addEntity(new Os(this._kernel, function(t) {
                    e._buttonRight.set_y(t)
                }, this._buttonRight.y, this._factory.height, 100, 1e3, null, Ds.EASE_IN, Ls.BACK())), this.addEntity(new Os(this._kernel, function(t) {
                    e._fgHeader.set_y(t)
                }, this._fgHeader.y, -this._factory.height, 250, 500, null, Ds.EASE_IN, Ls.EXPONENTIAL)), this.addEntity(new Os(this._kernel, function(t) {
                    e._fgFooter.set_y(t)
                }, this._fgFooter.y, this._factory.height, 500, 500, null, Ds.EASE_IN, Ls.EXPONENTIAL)), this.addEntity(new Os(this._kernel, function(t) {}, 0, 0, 100, 1e3, null, Ds.EASE_IN, Ls.BACK(), t)), this._kernel.audio.start("Transition", Ct.INTERFACE, 0, 0, .25), this._kernel.isDebug && t()
            }
        },
        _easyTweez: function(t) {
            null == t && (t = !0);
            for (var e = 0, s = this._easyTweezers; e < s.length;) {
                var i = [s[e]];
                ++e, t ? i[0].isVerticalIn ? this.addEntity(new Os(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_y(t)
                    }
                }(i), -this._factory.height + i[0].guiEntity.y, i[0].guiEntity.y, 500 + 100 * i[0].sequence, 2e3, null, Ds.EASE_OUT, Ls.QUARTIC)) : this.addEntity(new Os(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(i), this._factory.width + i[0].guiEntity.x, i[0].guiEntity.x, 500 + 100 * i[0].sequence, 2e3, null, Ds.EASE_OUT, Ls.QUARTIC)) : this.addEntity(new Os(this._kernel, function(e) {
                    return function(t) {
                        e[0].guiEntity.set_x(t)
                    }
                }(i), i[0].guiEntity.x, -1.5 * this._factory.width + i[0].guiEntity.x, 50 * i[0].sequence, 500, null, Ds.EASE_IN, Ls.BACK()))
            }
        },
        _addEasyTweez: function(t, e, s) {
            null == s && (s = !0), null != t && this._easyTweezers.push({
                guiEntity: t,
                sequence: e,
                isVerticalIn: s
            })
        },
        _createBurst: function(t, e, s, i) {
            null == i && (i = 1e4);
            s = new Ae(this._kernel, t, e, s);
            return this.addEntity(s, null, !0, i), s
        },
        __class__: Qe
    });
    var Ze = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Avatar"] = Ze).__name__ = "cbcmtb.scenes.Avatar", Ze.__super__ = Qe, Ze.prototype = t(Qe.prototype, {
        _init: function() {
            var e = this;
            Qe.prototype._init.call(this), this._session.cache.levelType = qt.LEVEL_1, this._kernel.audio.start("MusicMenu", Ct.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start("VoiceAvatar", Ct.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.avatar.title")), this._panelUnitA = new Ge(this._kernel, ne.UNIT_A), this._panelUnitA.set_x(15), this.addEntity(this._panelUnitA, null, !0, 1e3), this._panelUnitB = new Ge(this._kernel, ne.UNIT_B), this._panelUnitB.set_x(this._factory.width - this._panelUnitB.width - 15), this.addEntity(this._panelUnitB, null, !0, 1e3), this.addEntity(new Os(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, -(this._panelUnitA.width + this._panelUnitA.x), this._panelUnitA.x, 1500, 1e3, null, Ds.EASE_OUT, Ls.QUARTIC)), this.addEntity(new Os(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._factory.width, this._panelUnitB.x, 1500, 1e3, null, Ds.EASE_OUT, Ls.QUARTIC)), this._avatarUnitA = new Be(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitA.png")), this._avatarUnitB = new Be(this._kernel, this._assets.getAsset("assets/gui/AvatarUnitB.png")), this.addEntity(this._avatarUnitA, null, !0, 300), this.addEntity(this._avatarUnitB, null, !0, 300), this.addEntity(new Os(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, -this._factory.width, this._avatarUnitA.x, 100, 2e3, null, Ds.EASE_OUT, Ls.QUARTIC)), this.addEntity(new Os(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._factory.width, this._avatarUnitB.x, 100, 2e3, null, Ds.EASE_OUT, Ls.QUARTIC));
            var t = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitA"), 0, 0, null, Js(this, this._pressUnitA)),
                s = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.avatars.unitB"), 0, 0, null, Js(this, this._pressUnitB));
            this._addButtons(null, s, t), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
        },
        _updater: function(t) {
            null == t && (t = 0), Qe.prototype._updater.call(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("GameStart", Ct.INTERFACE, 1, 0, .5), this.addEntity(new Os(this._kernel, function(t) {
                e._panelUnitA.set_x(t)
            }, this._panelUnitA.x, -this._factory.width, 0, 800, null, Ds.EASE_IN, Ls.BACK())), this.addEntity(new Os(this._kernel, function(t) {
                e._panelUnitB.set_x(t)
            }, this._panelUnitB.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ls.BACK())), this.addEntity(new Os(this._kernel, function(t) {
                e._avatarUnitA.set_x(t)
            }, this._avatarUnitA.x, -this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ls.BACK(.75))), this.addEntity(new Os(this._kernel, function(t) {
                e._avatarUnitB.set_x(t)
            }, this._avatarUnitB.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ls.BACK(.75))))
        },
        _pressUnitA: function() {
            this._session.cache.unitType = ne.UNIT_A, this._pressContinue()
        },
        _pressUnitB: function() {
            this._session.cache.unitType = ne.UNIT_B, this._pressContinue()
        },
        __class__: Ze
    });
    var Je = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Game"] = Je).__name__ = "cbcmtb.scenes.Game", Je.__super__ = Qe, Je.prototype = t(Qe.prototype, {
        _init: function() {
            var t, e, s, i, n, _, a, r, o;
            Qe.prototype._init.call(this), this.isPauseable = !0, this._kernel.overlay.get_pauseEntity().setAgenda(At.DEFEND), this._session.cache.totalPlays++, this._levelVo = new he(this._kernel, this._session.cache.levelType), this._unitVo = new Ee(this._kernel, this._session.cache.unitType), this.addEntity(this._hud = new Pe(this._kernel, !this._levelVo.isNew, this._levelVo.scoreGold, this._levelVo.scoreSilver, this._levelVo.scoreBronze), null, !0, 100), this.addEntity(this._location = new ce(this._kernel, this._levelVo, this._unitVo), null, !0, 10), this._session.get_isTester() && (t = Js(this, this._winMedal), e = te.MEDAL_BRONZE, s = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.testMode.bronze"), 0, 0, null, function() {
                t(e, !0)
            }), i = Js(this, this._winMedal), n = te.MEDAL_SILVER, _ = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.testMode.silver"), 0, 0, null, function() {
                i(n, !0)
            }), a = Js(this, this._winMedal), r = te.MEDAL_GOLD, o = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.testMode.gold"), 0, 0, null, function() {
                a(r, !0)
            }), this._addButtons(null, o, s, _, 1e3, 1e3, 1e3)), this._kernel.messenger.addSubscriber(this._entity, this._factory.MESSAGE_FINISH_LINE, Js(this, this._handleFinishLine), null, null, !0), this._kernel.audio.stop(null, Ct.MUSIC), this._kernel.audio.start("GameStart", Ct.EFFECTS, 1, 0, 1), this._kernel.log("play: " + k.string(this._levelVo.type)), this._factory.preventDefaultForKeys([Ut.UP, Ut.RIGHT, Ut.DOWN, Ut.LEFT, Ut.SPACE])
        },
        _createDelay: function(t, e) {
            null == e && (e = 1e3), null == this._delay && this.addEntity(this._delay = new Tt(this._kernel, t, e))
        },
        _handleFinishLine: function(t, e) {
            for (var s = 0, i = this.getEntitiesByClass(Ce); s < i.length;) {
                var n = i[s];
                ++s, n.isDisposed || (n.isDisposed = !0, n.set_isActive(!1), n._disposer())
            }
            var _ = this._session.getMedalFromScore(this._location.getTime(), this._levelVo.scoreGold, this._levelVo.scoreSilver, this._levelVo.scoreBronze);
            return this._winMedal(_), this._createDelay(Js(this, this._gameOver), 2500), this._kernel.overlay.flash(500, !0, .5, 16777215), _ != te.MEDAL_NONE && this._kernel.audio.start("GameOver", Ct.EFFECTS, 1, 0, 1), !1
        },
        _winMedal: function(t, e) {
            null == e && (e = !1), this._session.cache.medalType = t, this._session.setMedal(this._levelVo.type, this._unitVo.type, t), this._session.setCoins(null, this._session.getCoins() + this._getScore(t)), this._kernel.log("medal: " + k.string(t) + ": " + k.string(this._levelVo.type)), e && this._gameOver()
        },
        _gameOver: function() {
            this._kernel.scenes.next()
        },
        _updater: function(t) {
            null == t && (t = 0), Qe.prototype._updater.call(this, t), this._hud.configureTargets(this._location.getTime()), this._hud.configureTimer(this._location.getTime()), this._hud.configureSpeedo(this._location.getSpeed())
        },
        _disposer: function() {
            this._factory.allowDefaultForKeys([Ut.UP, Ut.RIGHT, Ut.DOWN, Ut.LEFT, Ut.SPACE]), this._kernel.audio.stop(null, Ct.MUSIC);
            var t = this._session;
            t.saveCount++, t._setter(), t._savedData._____VERSION = t._version, t._savedData[t.id] = t._data, t._driverSave(), Qe.prototype._disposer.call(this)
        },
        _getScore: function(t) {
            switch (t._hx_index) {
                case 0:
                    return 1e3;
                case 1:
                    return 3e3;
                case 2:
                    return 5e3;
                case 3:
                    return 8e3
            }
        },
        __class__: Je
    });
    var qe = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Instructions"] = qe).__name__ = "cbcmtb.scenes.Instructions", qe.__super__ = Qe, qe.prototype = t(Qe.prototype, {
        _init: function() {
            var t = this;
            Qe.prototype._init.call(this), this._kernel.overlay.get_pauseEntity().setAgenda(At.DEFEND), this._kernel.audio.start("MusicMenu", Ct.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                t._kernel.audio.start("VoiceInstructions", Ct.INTERFACE, 1, 0, t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.instructions.title"));
            var e = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, Js(this, this._pressContinue));
            this._addButtons(null, e);
            var s = new Be(this._kernel, this._assets.getAsset(this._system.isDesktop ? "assets/gui/InstructionsA.png" : "assets/gui/InstructionsB.png"));
            this.addEntity(s, null, !0, 20), s.setPosition((this._factory.width - s.width) / 5, (this._factory.height - s.height) / 2);
            var i = new ze(this._kernel, 300, 200, k.string(this._kernel.getConfig("gui.scenes.instructions.message")).toUpperCase(), this._factory.createTextStyle(Ot.BODY), !0, !1);
            i.setPosition(this._kernel.factory.width - i.width - 40, 120), this.addEntity(i, null, !0, 21), this._addEasyTweez(s, 1, !1), this._addEasyTweez(i, 2, !1), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, e)
        },
        _outro: function(t) {
            this._isOutroCalled || this._defaultOutro(t)
        },
        __class__: qe
    });
    var $e = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), this._times = [], Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Intro"] = $e).__name__ = "cbcmtb.scenes.Intro", $e.__super__ = Qe, $e.prototype = t(Qe.prototype, {
        _init: function() {
            Qe.prototype._init.call(this);
            var t = this._factory.createCanvas(this._factory.width, this._factory.height);
            this._destinationContext2d = t.getContext("2d", null), this._sourceImage = this._assets.getAsset("assets/location/Test.png"), this._sourceCanvas = this._factory.createCanvas(this._sourceImage.width, this._sourceImage.height), this._sourceCanvas.getContext("2d", null).drawImage(this._sourceImage, 0, 0)
        },
        _updater: function(t) {
            var e, s, i, n, _, a, r, o, h;
            null == t && (t = 0), Qe.prototype._updater.call(this, t), this._kernel.overlay.flash(), 0 < this._updates && this._times.push(Math.round(R.now() / 1e3 * 1e3)), 1 == this._updates && this._stressTest(this._sourceImage), 2 == this._updates && this._stressTest(this._sourceCanvas), 3 == this._updates && this._stressTest(this._sourceCanvas), 4 == this._updates && this._stressTest(this._sourceImage), 5 == this._updates && this._stressTest(this._sourceImage), 6 == this._updates && this._stressTest(this._sourceCanvas), 7 == this._updates && (e = Math.round(25e4 / (this._times[1] - this._times[0])), s = Math.round(25e4 / (this._times[2] - this._times[1])), i = Math.round(25e4 / (this._times[3] - this._times[2])), n = Math.round(25e4 / (this._times[4] - this._times[3])), _ = Math.round(25e4 / (this._times[5] - this._times[4])), a = Math.round(25e4 / (this._times[6] - this._times[5])), h = this._averageAfterRemovingOutlier([e, n, _]), o = this._averageAfterRemovingOutlier([s, i, a]), o = (t = (r = Math.round(100 * h / o) / 100) < 2) ? o : h, this._session.cache.isDrawImageUsingCanvas = t, this._session.cache.benchmark = Math.round(o), this._session.cache.debugMessage = (null == r ? "null" : "" + r) + " | " + this._session.cache.benchmark, h = "\n\n\n\nAnd the results are ...\n\n", h += "Times: " + k.string(this._times) + "\n", h += "Image1: " + e + "\n", h += "Image2: " + n + " (" + Math.round(100 * n / e) + "%)\n", h += "Image3: " + _ + " (" + Math.round(100 * _ / e) + "%)\n", h += "Canvas1: " + s + "\n", h += "Canvas2: " + i + " (" + Math.round(100 * i / s) + "%)\n", h += "Canvas3: " + a + " (" + Math.round(100 * a / s) + "%)\n", h += "Ratio: " + r + "\n", h += "\nTherefore ... isDrawImageUsingCanvas = " + (null == t ? "null" : "" + t), h += "\n\nWith a benchmark of " + o), 10 == this._updates && this._kernel.scenes.next()
        },
        _stressTest: function(t) {
            this._destinationContext2d.canvas.width = 0, this._destinationContext2d.canvas.width = this._factory.width;
            for (var e = 0; e < 2500;) {
                var s = e++;
                this._destinationContext2d.rotate(.01 * s), this._destinationContext2d.drawImage(t, 0, 0, 512, 4, 0, s % 256, 2048, 16), this._destinationContext2d.drawImage(t, 0, 0, 512, 4, 0, s % 256, 828.416, 6.472), this._destinationContext2d.drawImage(t, 0, 0, 512, 64, 0, s % 256, 128, 16), this._destinationContext2d.drawImage(t, 0, 0, 512, 64, 0, s % 256, 316.4400494437577, 39.55500618046971), s % 50 == 0 && this._destinationContext2d.drawImage(this._destinationContext2d.canvas, 0, 0)
            }
        },
        _averageAfterRemovingOutlier: function(t) {
            if (null == t || 0 == t.length) return 1;
            for (var e = 0, s = 0; s < t.length;) {
                var i = t[s];
                ++s, e += i
            }
            e = Math.round(e / t.length);
            for (var n = 0, _ = 0, s = 0, a = t.length; s < a;) {
                var r = e - t[i = s++];
                Math.abs(r) > n && (n = r, _ = i)
            }
            for (var o = 0, s = 0, a = t.length; s < a;)(i = s++) != _ && (o += t[i]);
            return o = Math.round(o / (t.length - 1))
        },
        __class__: $e
    });
    var ts = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Menu"] = ts).__name__ = "cbcmtb.scenes.Menu", ts.__super__ = Qe, ts.prototype = t(Qe.prototype, {
        _init: function() {
            var e = this;
            Qe.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ct.MUSIC, -1, 0, .15, 0, !0), this._kernel.audio.start("Intro", Ct.EFFECTS, 0, 0, .5), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.menu.title"), this._kernel.getConfig("gui.scenes.menu.subtitle"), 100), this.addEntity(this._action = new be(this._kernel), null, !0, 200), this.addEntity(new Os(this._kernel, function(t) {
                e._action.set_x(t)
            }, -this._factory.width, this._action.x, 500, 2e3, null, Ds.EASE_OUT, Ls.ELASTIC()));
            var t = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.play"), 0, 0, null, Js(this, this._pressContinue)),
                s = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.instructions"), 0, 0, null, Js(this, this._pressInstructions));
            this._addButtons(null, t, s), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this._kernel.audio.start("Skid1", Ct.INTERFACE, 0, 0, .5, 0, !0), this.addEntity(new Os(this._kernel, function(t) {
                e._action.set_x(t)
            }, this._action.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ls.BACK())))
        },
        __class__: ts
    });
    var es = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Results"] = es).__name__ = "cbcmtb.scenes.Results", es.__super__ = Qe, es.prototype = t(Qe.prototype, {
        _init: function() {
            var e = this;
            Qe.prototype._init.call(this), this._levelVo = new he(this._kernel, this._session.cache.levelType, this._session.cache.unitType), this._kernel.audio.start("GameStart", Ct.INTERFACE, 1, 0, .5), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start(["VoiceResults0", "VoiceResults1", "VoiceResults2", "VoiceResults3"][e._session.cache.medalType._hx_index], Ct.INTERFACE, 1, 0, e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 3500 + 750 * this._session.cache.medalType._hx_index)), this._addBg(), this._addFg(!1, this._kernel.getConfig("gui.scenes.results.title"), this._levelVo.title, 120), this.addEntity(this._hero = new Ue(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this.addEntity(new Os(this._kernel, function(t) {
                e._hero.set_x(t)
            }, -this._factory.width, this._hero.x, 500, 2e3, null, Ds.EASE_OUT, Ls.ELASTIC())), this._panelResult = new He(this._kernel, this._session.cache.medalType), this._panelResult.set_x(this._factory.width - this._panelResult.width - 15), this.addEntity(this._panelResult, null, !0, 1e3), this.addEntity(new Os(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._factory.width, this._panelResult.x, 1500, 1e3, null, Ds.EASE_OUT, Ls.QUARTIC));
            var t = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, Js(this, this._pressContinue));
            this._addButtons(null, t), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
        },
        _updater: function(t) {
            null == t && (t = 0), Qe.prototype._updater.call(this, t), 2e3 < this._age && Math.random() < this._session.cache.medalType._hx_index / 3 && this._createBurst(.5 * Math.random() + .5, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .5) * this._factory.width, ((Math.random() < .5 ? -.5 : .5) * (Math.random() * Math.random()) + .25) * this._factory.height, 299)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Os(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ls.BACK())), this.addEntity(new Os(this._kernel, function(t) {
                e._panelResult.set_x(t)
            }, this._panelResult.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ls.BACK())))
        },
        __class__: es
    });
    var ss = function(t) {
        Et.call(this, t, 1e3)
    };
    (e["cbcmtb.scenes.SceneTransition"] = ss).__name__ = "cbcmtb.scenes.SceneTransition", ss.__super__ = Et, ss.prototype = t(Et.prototype, {
        _init: function() {
            Et.prototype._init.call(this)
        },
        __class__: ss
    });
    var is = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.SelectLevel"] = is).__name__ = "cbcmtb.scenes.SelectLevel", is.__super__ = Qe, is.prototype = t(Qe.prototype, {
        _init: function() {
            var t = this;
            Qe.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ct.MUSIC, -1, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                t._kernel.audio.start("VoiceSelectLevel", Ct.INTERFACE, 1, 0, .85 * t._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.selectLevel.title")), this._panelLevel1 = new Ve(this._kernel, qt.LEVEL_1), this._panelLevel1.set_x(15), this.addEntity(this._panelLevel1, null, !0, 200), this._panelLevel2 = new Ve(this._kernel, qt.LEVEL_2), this._panelLevel2.set_x(.5 * (this._factory.width - this._panelLevel2.width)), this.addEntity(this._panelLevel2, null, !0, 200), this._panelLevel3 = new Ve(this._kernel, qt.LEVEL_3), this._panelLevel3.set_x(this._factory.width - this._panelLevel3.width - 15), this.addEntity(this._panelLevel3, null, !0, 200);
            var e = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.levels.level1"), 0, 0, null, Js(this, this._pressLevel1)),
                s = this._panelLevel2.vo.isLocked ? null : new Ce(this._kernel, this._kernel.getConfig("gui.buttons.levels.level2"), 0, 0, null, Js(this, this._pressLevel2)),
                i = this._panelLevel3.vo.isLocked ? null : new Ce(this._kernel, this._kernel.getConfig("gui.buttons.levels.level3"), 0, 0, null, Js(this, this._pressLevel3));
            this._addButtons(null, i, e, s), this._addEasyTweez(this._panelLevel1, 1, !1), this._addEasyTweez(this._panelLevel2, 2, !1), this._addEasyTweez(this._panelLevel3, 3, !1), this._easyTweez(), this._factory.accessibility.buttonsRegister(this, this._panelLevel2.vo.isLocked ? e : this._panelLevel3.vo.isLocked ? s : i)
        },
        _updater: function(t) {
            null == t && (t = 0), Qe.prototype._updater.call(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Os(this._kernel, function(t) {
                e._kernel.audio.transform("MusicMenu", Ct.MUSIC, t)
            }, .5, 0, 0, 2e3)))
        },
        _pressLevel1: function() {
            this._session.cache.levelType = qt.LEVEL_1, this._pressContinue()
        },
        _pressLevel2: function() {
            this._session.cache.levelType = qt.LEVEL_2, this._pressContinue()
        },
        _pressLevel3: function() {
            this._session.cache.levelType = qt.LEVEL_3, this._pressContinue()
        },
        __class__: is
    });
    var ns = function(t, e, s, i, n) {
        null == n && (n = !1), null == i && (i = !0), null == s && (s = !1), Qe.call(this, t, e, s, i, n)
    };
    (e["cbcmtb.scenes.Shop"] = ns).__name__ = "cbcmtb.scenes.Shop", ns.__super__ = Qe, ns.prototype = t(Qe.prototype, {
        _init: function() {
            var e = this;
            Qe.prototype._init.call(this), this._kernel.audio.start("MusicMenu", Ct.MUSIC, 0, 0, .15, 0, !0), this.addEntity(new Tt(this._kernel, function() {
                e._kernel.audio.start("VoiceShop", Ct.INTERFACE, 1, 0, .85 * e._factory.accessibility.getAdjustedAudioVoiceVolume(), 0)
            }, 2e3)), this._addBg(), this._addFg(!0, this._kernel.getConfig("gui.scenes.shop.title")), this.addEntity(this._hero = new Ue(this._kernel, this._session.cache.unitType, this._session.cache.medalType), null, !0, 300), this._hero.set_x(-160), this.addEntity(new Os(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._factory.width, this._hero.x, 500, 2e3, null, Ds.EASE_OUT, Ls.QUARTIC)), this._panelShop = new Ye(this._kernel, this._session.cache.unitType), this._panelShop.set_x(this._factory.width - this._panelShop.width - 15), this.addEntity(this._panelShop, null, !0, 1e3), this.addEntity(new Os(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._factory.width, this._panelShop.x, 1500, 1e3, null, Ds.EASE_OUT, Ls.QUARTIC));
            var t = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.continue"), 0, 0, null, Js(this, this._pressContinue)),
                s = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.avatar"), 0, 0, null, Js(this, this._pressAvatar)),
                i = new Ce(this._kernel, this._kernel.getConfig("gui.buttons.reset"), 0, 0, null, Js(this, this._pressReset));
            this._addButtons(null, t, s, 1 == this._panelShop.vo.getPercentageComplete() ? i : null), this._easyTweez(!0), this._factory.accessibility.buttonsRegister(this, t)
        },
        _outro: function(t) {
            var e = this;
            this._isOutroCalled || (this._defaultOutro(t), this.addEntity(new Os(this._kernel, function(t) {
                e._hero.set_x(t)
            }, this._hero.x, -this._factory.width, 0, 1e3, null, Ds.EASE_IN, Ls.BACK())), this.addEntity(new Os(this._kernel, function(t) {
                e._panelShop.set_x(t)
            }, this._panelShop.x, this._factory.width, 0, 800, null, Ds.EASE_IN, Ls.BACK())))
        },
        _pressReset: function() {
            this._kernel.log("button: reset: "), this._session.resetUnit(this._session.cache.unitType);
            var t = Js(h = this._kernel.scenes, h.setScene),
                e = Lt.MENU;
            this._outro(function() {
                t(e)
            })
        },
        _pressAvatar: function() {
            this._kernel.log("button: avatar: ");
            var t = Js(h = this._kernel.scenes, h.setScene),
                e = Lt.AVATAR;
            this._outro(function() {
                t(e)
            })
        },
        __class__: ns
    }), g = function() {}, (e["haxe.IMap"] = g).__name__ = "haxe.IMap", g.__isInterface__ = !0;
    var _s = function(t, e, s) {
        Error.call(this, t), this.message = t, this.__previousException = e, this.__nativeException = null != s ? s : this
    };
    (e["haxe.Exception"] = _s).__name__ = "haxe.Exception", _s.caught = function(t) {
        return t instanceof _s ? t : t instanceof Error ? new _s(t.message, null, t) : new us(t, null, t)
    }, _s.thrown = function(t) {
        return t instanceof _s ? t.get_native() : t instanceof Error ? t : new us(t)
    }, _s.__super__ = Error, _s.prototype = t(Error.prototype, {
        unwrap: function() {
            return this.__nativeException
        },
        get_native: function() {
            return this.__nativeException
        },
        __class__: _s,
        __properties__: {
            get_native: "get_native"
        }
    });
    var as = function() {};
    (e["haxe.Log"] = as).__name__ = "haxe.Log", as.formatOutput = function(t, e) {
        var s = k.string(t);
        if (null == e) return s;
        var i = e.fileName + ":" + e.lineNumber;
        if (null != e.customParams)
            for (var n = 0, _ = e.customParams; n < _.length;) {
                t = _[n];
                ++n, s += ", " + k.string(t)
            }
        return i + ": " + s
    }, as.trace = function(t, e) {
        e = as.formatOutput(t, e);
        "undefined" != typeof console && null != console.log && console.log(e)
    };
    var rs = function() {};
    (e["haxe.Resource"] = rs).__name__ = "haxe.Resource", rs.getString = function(t) {
        for (var e = 0, s = rs.content; e < s.length;) {
            var i = s[e];
            if (++e, i.name == t) return null != i.str ? i.str : gs.decode(i.data).toString()
        }
        return null
    };
    var os = function() {
        this.buf = new w, this.cache = [], this.useCache = os.USE_CACHE, this.useEnumIndex = os.USE_ENUM_INDEX, this.shash = new bs, this.scount = 0
    };
    (e["haxe.Serializer"] = os).__name__ = "haxe.Serializer", os.run = function(t) {
        var e = new os;
        return e.serialize(t), e.toString()
    }, os.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(t) {
            var e = this.shash.h[t];
            if (null != e) return this.buf.b += "R", void(this.buf.b += null == e ? "null" : "" + e);
            this.shash.h[t] = this.scount++, this.buf.b += "y", t = encodeURIComponent(t), this.buf.b += k.string(t.length), this.buf.b += ":", this.buf.b += null == t ? "null" : "" + t
        },
        serializeRef: function(t) {
            for (var e = typeof t, s = 0, i = this.cache.length; s < i;) {
                var n = s++,
                    _ = this.cache[n];
                if (typeof _ == e && _ == t) return this.buf.b += "r", this.buf.b += null == n ? "null" : "" + n, !0
            }
            return this.cache.push(t), !1
        },
        serializeFields: function(t) {
            for (var e = 0, s = C.fields(t); e < s.length;) {
                var i = s[e];
                ++e, this.serializeString(i), this.serialize(C.field(t, i))
            }
            this.buf.b += "g"
        },
        serialize: function(t) {
            switch ((v = I.typeof(t))._hx_index) {
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
                    if (Ps.__instanceof(t, si)) {
                        var s = t.__name__;
                        this.buf.b += "A", this.serializeString(s)
                    } else if (Ps.__instanceof(t, ii)) this.buf.b += "B", this.serializeString(t.__ename__);
                    else {
                        if (this.useCache && this.serializeRef(t)) return;
                        this.buf.b += "o", this.serializeFields(t)
                    }
                    break;
                case 5:
                    throw _s.thrown("Cannot serialize function");
                case 6:
                    var i = v.c;
                    if (i == String) return void this.serializeString(t);
                    if (this.useCache && this.serializeRef(t)) return;
                    switch (i) {
                        case Array:
                            var n = 0;
                            this.buf.b += "a";
                            for (var _ = 0, a = t.length; _ < a;) null == t[u = _++] ? ++n : (0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n), n = 0), this.serialize(t[u]));
                            0 < n && (1 == n ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == n ? "null" : "" + n)), this.buf.b += "h";
                            break;
                        case Date:
                            var r = t;
                            this.buf.b += "v", this.buf.b += k.string(r.getTime());
                            break;
                        case Es:
                            this.buf.b += "q";
                            for (var o = (e = t).keys(); o.hasNext();) {
                                var h = o.next();
                                this.buf.b += ":", this.buf.b += null == h ? "null" : "" + h, this.serialize(e.h[h])
                            }
                            this.buf.b += "h";
                            break;
                        case xs:
                            this.buf.b += "l";
                            for (var c = (e = t).h; null != c;) {
                                var l = c.item,
                                    c = c.next,
                                    u = l;
                                this.serialize(u)
                            }
                            this.buf.b += "h";
                            break;
                        case Ss:
                            this.buf.b += "M";
                            for (o = (e = t).keys(); o.hasNext();) {
                                var h = o.next(),
                                    d = C.field(h, "__id__");
                                C.deleteField(h, "__id__"), this.serialize(h), h.__id__ = d, this.serialize(e.h[h.__id__])
                            }
                            this.buf.b += "h";
                            break;
                        case bs:
                            this.buf.b += "b";
                            for (var r = (e = t).h, p = Object.keys(r), g = p.length, m = 0; m < g;) {
                                o = p[m++];
                                this.serializeString(o), this.serialize(e.h[o])
                            }
                            this.buf.b += "h";
                            break;
                        case ds:
                            e = t;
                            this.buf.b += "s", this.buf.b += k.string(Math.ceil(8 * e.length / 6)), this.buf.b += ":";
                            var u = 0,
                                f = e.length - 2;
                            if (null == (y = os.BASE64_CODES)) {
                                for (var y = new Array(os.BASE64.length), _ = 0, a = os.BASE64.length; _ < a;) {
                                    var E = _++;
                                    y[E] = R.cca(os.BASE64, E)
                                }
                                os.BASE64_CODES = y
                            }
                            for (; u < f;) {
                                var x = e.b[u++],
                                    w = e.b[u++],
                                    S = e.b[u++];
                                this.buf.b += String.fromCodePoint(y[x >> 2]), this.buf.b += String.fromCodePoint(y[63 & (x << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(y[63 & (w << 2 | S >> 6)]), this.buf.b += String.fromCodePoint(y[63 & S])
                            }
                            u == f ? (x = e.b[u++], w = e.b[u++], this.buf.b += String.fromCodePoint(y[x >> 2]), this.buf.b += String.fromCodePoint(y[63 & (x << 4 | w >> 4)]), this.buf.b += String.fromCodePoint(y[w << 2 & 63])) : u == 1 + f && (x = e.b[u++], this.buf.b += String.fromCodePoint(y[x >> 2]), this.buf.b += String.fromCodePoint(y[x << 4 & 63]));
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != t.hxSerialize ? (this.buf.b += "C", this.serializeString(i.__name__), this.useCache && this.cache.push(t), t.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(i.__name__), this.useCache && this.cache.push(t), this.serializeFields(t))
                    }
                    break;
                case 7:
                    s = v.e;
                    if (this.useCache) {
                        if (this.serializeRef(t)) return;
                        this.cache.pop()
                    }
                    this.buf.b += k.string(this.useEnumIndex ? "j" : "w"), this.serializeString(s.__ename__), this.useEnumIndex ? (this.buf.b += ":", this.buf.b += k.string(t._hx_index)) : (s = t, this.serializeString(A[s.__enum__].__constructs__[s._hx_index]._hx_name)), this.buf.b += ":";
                    var b = I.enumParameters(t);
                    this.buf.b += k.string(b.length);
                    for (var v = 0; v < b.length;) {
                        var T = b[v];
                        ++v, this.serialize(T)
                    }
                    this.useCache && this.cache.push(t);
                    break;
                default:
                    throw _s.thrown("Cannot serialize " + k.string(t))
            }
        },
        __class__: os
    };
    var hs = function(t) {
        var e = this;
        this.id = setInterval(function() {
            e.run()
        }, t)
    };

    function cs() {}(e["haxe.Timer"] = hs).__name__ = "haxe.Timer", hs.delay = function(t, e) {
        var s = new hs(e);
        return s.run = function() {
            s.stop(), t()
        }, s
    }, hs.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: hs
    }, (e["haxe._Unserializer.DefaultResolver"] = cs).__name__ = "haxe._Unserializer.DefaultResolver", cs.prototype = {
        resolveClass: function(t) {
            return e[t]
        },
        resolveEnum: function(t) {
            return A[t]
        },
        __class__: cs
    };
    var ls = function(t) {
        this.buf = t, this.length = this.buf.length, this.pos = 0, this.scache = [], this.cache = [];
        t = ls.DEFAULT_RESOLVER;
        null == t && (t = new cs, ls.DEFAULT_RESOLVER = t), this.resolver = t
    };
    (e["haxe.Unserializer"] = ls).__name__ = "haxe.Unserializer", ls.initCodes = function() {
        for (var t = [], e = 0, s = ls.BASE64.length; e < s;) {
            var i = e++;
            t[ls.BASE64.charCodeAt(i)] = i
        }
        return t
    }, ls.run = function(t) {
        return new ls(t).unserialize()
    }, ls.prototype = {
        readDigits: function() {
            for (var t = 0, e = !1, s = this.pos;;) {
                var i = this.buf.charCodeAt(this.pos);
                if (i != i) break;
                if (45 != i) {
                    if (i < 48 || 57 < i) break;
                    t = 10 * t + (i - 48), this.pos++
                } else {
                    if (this.pos != s) break;
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
            return parseFloat(R.substr(this.buf, t, this.pos - t))
        },
        unserializeObject: function(t) {
            for (;;) {
                if (this.pos >= this.length) throw _s.thrown("Invalid object");
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var e = this.unserialize();
                if ("string" != typeof e) throw _s.thrown("Invalid object key");
                var s = this.unserialize();
                t[e] = s
            }
            this.pos++
        },
        unserializeEnum: function(t, e) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw _s.thrown("Invalid enum format");
            var s = this.readDigits();
            if (0 == s) return I.createEnum(t, e);
            for (var i = []; 0 < s--;) i.push(this.unserialize());
            return I.createEnum(t, e, i)
        },
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 65:
                    var t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw _s.thrown("Class not found " + t);
                    return u;
                case 66:
                    t = this.unserialize();
                    if (null == (d = this.resolver.resolveEnum(t))) throw _s.thrown("Enum not found " + t);
                    return d;
                case 67:
                    t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw _s.thrown("Class not found " + t);
                    var e = Object.create(u.prototype);
                    if (this.cache.push(e), e.hxUnserialize(this), 103 != this.buf.charCodeAt(this.pos++)) throw _s.thrown("Invalid custom data");
                    return e;
                case 77:
                    var s = new Ss;
                    this.cache.push(s);
                    for (var i = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize();
                        s.set(n, this.unserialize())
                    }
                    return this.pos++, s;
                case 82:
                    if ((f = this.readDigits()) < 0 || f >= this.scache.length) throw _s.thrown("Invalid string reference");
                    return this.scache[f];
                case 97:
                    var i = this.buf,
                        _ = [];
                    for (this.cache.push(_);;) {
                        if (104 == (g = this.buf.charCodeAt(this.pos))) {
                            this.pos++;
                            break
                        }
                        117 == g ? (this.pos++, f = this.readDigits(), _[_.length + f - 1] = null) : _.push(this.unserialize())
                    }
                    return _;
                case 98:
                    s = new bs;
                    this.cache.push(s);
                    for (i = this.buf; 104 != this.buf.charCodeAt(this.pos);) {
                        var n = this.unserialize(),
                            a = this.unserialize();
                        s.h[n] = a
                    }
                    return this.pos++, s;
                case 99:
                    t = this.unserialize();
                    if (null == (u = this.resolver.resolveClass(t))) throw _s.thrown("Class not found " + t);
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
                    if (null == (k = this.resolver.resolveEnum(t))) throw _s.thrown("Enum not found " + t);
                    this.pos++;
                    for (var r = this.readDigits(), o = k.__constructs__, h = new Array(o.length), c = 0, l = o.length; c < l;) h[m = c++] = o[m]._hx_name;
                    var u = h[r];
                    if (null == u) throw _s.thrown("Unknown enum index " + t + "@" + r);
                    var d = this.unserializeEnum(k, u);
                    return this.cache.push(d), d;
                case 107:
                    return NaN;
                case 108:
                    var p = new xs;
                    this.cache.push(p);
                    for (i = this.buf; 104 != this.buf.charCodeAt(this.pos);) p.add(this.unserialize());
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
                    s = new Es;
                    this.cache.push(s);
                    for (var i = this.buf, g = this.buf.charCodeAt(this.pos++); 58 == g;) {
                        var m = this.readDigits(),
                            a = this.unserialize();
                        s.h[m] = a, g = this.buf.charCodeAt(this.pos++)
                    }
                    if (104 != g) throw _s.thrown("Invalid IntMap format");
                    return s;
                case 114:
                    var f;
                    if ((f = this.readDigits()) < 0 || f >= this.cache.length) throw _s.thrown("Invalid reference");
                    return this.cache[f];
                case 115:
                    var y = this.readDigits(),
                        i = this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < y) throw _s.thrown("Invalid bytes length");
                    var E = ls.CODES;
                    null == E && (E = ls.initCodes(), ls.CODES = E);
                    for (var e = 3 & y, x = (m = this.pos) + (y - e), w = new ds(new ArrayBuffer(3 * (y >> 2) + (2 <= e ? e - 1 : 0))), S = 0; m < x;) {
                        var b = E[i.charCodeAt(m++)],
                            v = E[i.charCodeAt(m++)];
                        w.b[S++] = b << 2 | v >> 4;
                        var T = E[i.charCodeAt(m++)];
                        w.b[S++] = v << 4 | T >> 2;
                        var A = E[i.charCodeAt(m++)];
                        w.b[S++] = T << 6 | A
                    }
                    return 2 <= e && (b = E[i.charCodeAt(m++)], v = E[i.charCodeAt(m++)], w.b[S++] = b << 2 | v >> 4, 3 == e && (T = E[i.charCodeAt(m++)], w.b[S++] = v << 4 | T >> 2)), this.pos += y, this.cache.push(w), w;
                case 116:
                    return !0;
                case 118:
                    var C;
                    return 48 <= this.buf.charCodeAt(this.pos) && this.buf.charCodeAt(this.pos) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 1) && this.buf.charCodeAt(this.pos + 1) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 2) && this.buf.charCodeAt(this.pos + 2) <= 57 && 48 <= this.buf.charCodeAt(this.pos + 3) && this.buf.charCodeAt(this.pos + 3) <= 57 && 45 == this.buf.charCodeAt(this.pos + 4) ? (C = R.strDate(R.substr(this.buf, this.pos, 19)), this.pos += 19) : C = new Date(this.readFloat()), this.cache.push(C), C;
                case 119:
                    var k, t = this.unserialize();
                    if (null == (k = this.resolver.resolveEnum(t))) throw _s.thrown("Enum not found " + t);
                    d = this.unserializeEnum(k, this.unserialize());
                    return this.cache.push(d), d;
                case 120:
                    throw _s.thrown(this.unserialize());
                case 121:
                    y = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < y) throw _s.thrown("Invalid string length");
                    n = R.substr(this.buf, this.pos, y);
                    return this.pos += y, n = decodeURIComponent(n.split("+").join(" ")), this.scache.push(n), n;
                case 122:
                    return 0
            }
            throw this.pos--, _s.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos)
        },
        __class__: ls
    };
    var us = function(t, e, s) {
        _s.call(this, String(t), e, s), this.value = t
    };
    (e["haxe.ValueException"] = us).__name__ = "haxe.ValueException", us.__super__ = _s, us.prototype = t(_s.prototype, {
        unwrap: function() {
            return this.value
        },
        __class__: us
    });
    var ds = function(t) {
        this.length = t.byteLength, this.b = new Uint8Array(t), (this.b.bufferValue = t).hxBytes = this, t.bytes = this.b
    };
    (e["haxe.io.Bytes"] = ds).__name__ = "haxe.io.Bytes", ds.ofString = function(t, e) {
        if (e == ps.RawNative) {
            for (var s = new Uint8Array(t.length << 1), i = 0, n = t.length; i < n;) {
                var _ = i++,
                    a = t.charCodeAt(_);
                s[_ << 1] = 255 & a, s[_ << 1 | 1] = a >> 8
            }
            return new ds(s.buffer)
        }
        for (var r = [], _ = 0; _ < t.length;) 55296 <= (a = t.charCodeAt(_++)) && a <= 56319 && (a = a - 55232 << 10 | 1023 & t.charCodeAt(_++)), a <= 127 ? r.push(a) : (a <= 2047 ? r.push(192 | a >> 6) : (a <= 65535 ? r.push(224 | a >> 12) : (r.push(240 | a >> 18), r.push(128 | a >> 12 & 63)), r.push(128 | a >> 6 & 63)), r.push(128 | 63 & a));
        return new ds(new Uint8Array(r).buffer)
    }, ds.ofData = function(t) {
        var e = t.hxBytes;
        return null != e ? e : new ds(t)
    }, ds.prototype = {
        getString: function(t, e, s) {
            if (t < 0 || e < 0 || t + e > this.length) throw _s.thrown(Cs.OutsideBounds);
            null == s && (s = ps.UTF8);
            var i = "",
                n = this.b,
                _ = t,
                a = t + e;
            switch (s._hx_index) {
                case 0:
                    for (var r, o; _ < a;)
                        if ((h = n[_++]) < 128) {
                            if (0 == h) break;
                            i += String.fromCodePoint(h)
                        } else h < 224 ? (r = (63 & h) << 6 | 127 & n[_++], i += String.fromCodePoint(r)) : h < 240 ? (o = (31 & h) << 12 | (127 & n[_++]) << 6 | 127 & n[_++], i += String.fromCodePoint(o)) : (o = (15 & h) << 18 | (127 & n[_++]) << 12 | (127 & n[_++]) << 6 | 127 & n[_++], i += String.fromCodePoint(o));
                    break;
                case 1:
                    for (; _ < a;) {
                        var h = n[_++] | n[_++] << 8;
                        i += String.fromCodePoint(h)
                    }
            }
            return i
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: ds
    };
    var ps = A["haxe.io.Encoding"] = {
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
    ps.__constructs__ = [ps.UTF8, ps.RawNative];
    var gs = function() {};
    (e["haxe.crypto.Base64"] = gs).__name__ = "haxe.crypto.Base64", gs.decode = function(t, e) {
        if (null == e && (e = !0), e)
            for (; 61 == R.cca(t, t.length - 1);) t = R.substr(t, 0, -1);
        return new ms(gs.BYTES).decodeBytes(ds.ofString(t))
    };
    var ms = function(t) {
        for (var e = t.length, s = 1; 1 << s < e;) ++s;
        if (8 < s || e != 1 << s) throw _s.thrown("BaseCode : base length must be a power of two.");
        this.base = t, this.nbits = s
    };
    (e["haxe.crypto.BaseCode"] = ms).__name__ = "haxe.crypto.BaseCode", ms.prototype = {
        initTable: function() {
            for (var t = [], e = 0; e < 256;) t[i = e++] = -1;
            for (var e = 0, s = this.base.length; e < s;) {
                var i = e++;
                t[this.base.b[i]] = i
            }
            this.tbl = t
        },
        decodeBytes: function(t) {
            var e = this.nbits;
            this.base;
            null == this.tbl && this.initTable();
            for (var s = this.tbl, i = t.length * e >> 3, n = new ds(new ArrayBuffer(i)), _ = 0, a = 0, r = 0, o = 0; o < i;) {
                for (; a < 8;) {
                    a += e, _ <<= e;
                    var h = s[t.b[r++]];
                    if (-1 == h) throw _s.thrown("BaseCode : invalid encoded char");
                    _ |= h
                }
                a -= 8, n.b[o++] = _ >> a & 255
            }
            return n
        },
        __class__: ms
    };
    var fs = function(t, e) {
        this.elt = t, this.next = e
    };
    (e["haxe.ds.GenericCell"] = fs).__name__ = "haxe.ds.GenericCell", fs.prototype = {
        __class__: fs
    };
    var ys = function() {};
    (e["haxe.ds.GenericStack"] = ys).__name__ = "haxe.ds.GenericStack", ys.prototype = {
        remove: function(t) {
            for (var e = null, s = this.head; null != s;) {
                if (s.elt == t) {
                    null == e ? this.head = s.next : e.next = s.next;
                    break
                }
                s = (e = s).next
            }
            return null != s
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
        __class__: ys
    };
    var Es = function() {
        this.h = {}
    };
    (e["haxe.ds.IntMap"] = Es).__name__ = "haxe.ds.IntMap", Es.__interfaces__ = [g], Es.prototype = {
        keys: function() {
            var t, e = [];
            for (t in this.h) this.h.hasOwnProperty(t) && e.push(+t);
            return new ks(e)
        },
        __class__: Es
    };
    var xs = function() {
        this.length = 0
    };
    (e["haxe.ds.List"] = xs).__name__ = "haxe.ds.List", xs.prototype = {
        add: function(t) {
            t = new ws(t, null);
            null == this.h ? this.h = t : this.q.next = t, this.q = t, this.length++
        },
        push: function(t) {
            t = new ws(t, this.h);
            this.h = t, null == this.q && (this.q = t), this.length++
        },
        remove: function(t) {
            for (var e = null, s = this.h; null != s;) {
                if (s.item == t) return null == e ? this.h = s.next : e.next = s.next, this.q == s && (this.q = e), this.length--, !0;
                s = (e = s).next
            }
            return !1
        },
        __class__: xs
    };
    var ws = function(t, e) {
        this.item = t, this.next = e
    };
    (e["haxe.ds._List.ListNode"] = ws).__name__ = "haxe.ds._List.ListNode", ws.prototype = {
        __class__: ws
    };
    var Ss = function() {
        this.h = {
            __keys__: {}
        }
    };
    (e["haxe.ds.ObjectMap"] = Ss).__name__ = "haxe.ds.ObjectMap", Ss.__interfaces__ = [g], Ss.prototype = {
        set: function(t, e) {
            var s = t.__id__;
            null == s && (s = t.__id__ = u.$haxeUID++), this.h[s] = e, this.h.__keys__[s] = t
        },
        keys: function() {
            var t, e = [];
            for (t in this.h.__keys__) this.h.hasOwnProperty(t) && e.push(this.h.__keys__[t]);
            return new ks(e)
        },
        __class__: Ss
    };
    var bs = function() {
        this.h = Object.create(null)
    };
    (e["haxe.ds.StringMap"] = bs).__name__ = "haxe.ds.StringMap", bs.__interfaces__ = [g], bs.prototype = {
        __class__: bs
    };
    var vs = function(t) {
        this.h = t, this.keys = Object.keys(t), this.length = this.keys.length, this.current = 0
    };

    function Ts(t) {
        this.url = t, this.headers = [], this.params = [], this.emptyOnData = Js(this, this.onData)
    }(e["haxe.ds._StringMap.StringMapKeyIterator"] = vs).__name__ = "haxe.ds._StringMap.StringMapKeyIterator", vs.prototype = {
        hasNext: function() {
            return this.current < this.length
        },
        next: function() {
            return this.keys[this.current++]
        },
        __class__: vs
    }, (e["haxe.http.HttpBase"] = Ts).__name__ = "haxe.http.HttpBase", Ts.prototype = {
        onData: function(t) {},
        onBytes: function(t) {},
        onError: function(t) {},
        onStatus: function(t) {},
        hasOnData: function() {
            return !C.compareMethods(Js(this, this.onData), this.emptyOnData)
        },
        success: function(t) {
            this.responseBytes = t, this.responseAsString = null, this.hasOnData() && this.onData(this.get_responseData()), this.onBytes(this.responseBytes)
        },
        get_responseData: function() {
            return null == this.responseAsString && null != this.responseBytes && (this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, ps.UTF8)), this.responseAsString
        },
        __class__: Ts,
        __properties__: {
            get_responseData: "get_responseData"
        }
    };
    var As = function(t) {
        this.async = !0, this.withCredentials = !1, Ts.call(this, t)
    };
    (e["haxe.http.HttpJs"] = As).__name__ = "haxe.http.HttpJs", As.__super__ = Ts, As.prototype = t(Ts.prototype, {
        request: function(t) {
            var n = this;
            this.responseAsString = null, this.responseBytes = null;

            function e(t) {
                if (4 == _.readyState) {
                    var e, s;
                    try {
                        e = _.status
                    } catch (t) {
                        e = null
                    }
                    if (0 == e && Ns.get_supported() && null != u.location && (s = u.location.protocol.toLowerCase(), new d("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(s) && (e = null != _.response ? 200 : 404)), null == e && (e = null), null != e && n.onStatus(e), null != e && 200 <= e && e < 400) n.req = null, n.success(ds.ofData(_.response));
                    else if (null == e || 0 == e && null == _.response) n.req = null, n.onError("Failed to connect or resolve host");
                    else if (null == e) {
                        var i = (n.req = null) != _.response ? ds.ofData(_.response) : null;
                        n.responseBytes = i, n.onError("Http Error #" + _.status)
                    } else switch (e) {
                        case 12007:
                            n.req = null, n.onError("Unknown host");
                            break;
                        case 12029:
                            n.req = null, n.onError("Failed to connect to host");
                            break;
                        default:
                            i = (n.req = null) != _.response ? ds.ofData(_.response) : null;
                            n.responseBytes = i, n.onError("Http Error #" + _.status)
                    }
                }
            }
            var _ = this.req = Ns.createXMLHttpRequest();
            this.async && (_.onreadystatechange = e);
            var s, i, a = this.postData,
                r = this.postBytes;
            if (null != (s = null == a ? null == r ? null : new Blob([r.b.bufferValue]) : null == r ? a : null)) t = !0;
            else
                for (a = 0, r = this.params; a < r.length;) {
                    var o = r[a];
                    ++a, s = null == s ? "" : (null == s ? "null" : k.string(s)) + "&";
                    var h = o.name,
                        h = (null == s ? "null" : k.string(s)) + encodeURIComponent(h) + "=",
                        o = o.value;
                    s = h + encodeURIComponent(o)
                }
            try {
                t ? _.open("POST", this.url, this.async) : null != s ? (i = this.url.split("?").length <= 1, _.open("GET", this.url + (i ? "?" : "&") + (null == s ? "null" : k.string(s)), this.async), s = null) : _.open("GET", this.url, this.async), _.responseType = "arraybuffer"
            } catch (a) {
                var c = _s.caught(a).unwrap();
                return this.req = null, void this.onError(c.toString())
            }
            _.withCredentials = this.withCredentials, !p.exists(this.headers, function(t) {
                return "Content-Type" == t.name
            }) && t && null == this.postData && _.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (a = 0, r = this.headers; a < r.length;) {
                var l = r[a];
                ++a, _.setRequestHeader(l.name, l.value)
            }
            _.send(s), this.async || e()
        },
        __class__: As
    });
    var Cs = A["haxe.io.Error"] = {
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
        Custom: ((h = function(t) {
            return {
                _hx_index: 3,
                e: t,
                __enum__: "haxe.io.Error",
                toString: s
            }
        })._hx_name = "Custom", h.__params__ = ["e"], h)
    };
    Cs.__constructs__ = [Cs.Blocked, Cs.Overflow, Cs.OutsideBounds, Cs.Custom];
    var ks = function(t) {
        this.current = 0, this.array = t
    };

    function Rs(t, e, s) {
        this.xml = e, this.message = t, this.position = s, this.lineNumber = 1;
        for (var i = this.positionAtLine = 0, n = s; i < n;) {
            var _ = i++,
                _ = e.charCodeAt(_);
            10 == _ ? (this.lineNumber++, this.positionAtLine = 0) : 13 != _ && this.positionAtLine++
        }
    }(e["haxe.iterators.ArrayIterator"] = ks).__name__ = "haxe.iterators.ArrayIterator", ks.prototype = {
        hasNext: function() {
            return this.current < this.array.length
        },
        next: function() {
            return this.array[this.current++]
        },
        __class__: ks
    }, (e["haxe.xml.XmlParserException"] = Rs).__name__ = "haxe.xml.XmlParserException", Rs.prototype = {
        toString: function() {
            return Ps.getClass(this).__name__ + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine
        },
        __class__: Rs
    };
    var Is = function() {};
    (e["haxe.xml.Parser"] = Is).__name__ = "haxe.xml.Parser", Is.parse = function(t, e) {
        null == e && (e = !1);
        var s = S.createDocument();
        return Is.doParse(t, e, 0, s), s
    }, Is.doParse = function(t, e, s, i) {
        null == s && (s = 0);
        for (var n = null, _ = 1, a = 1, r = null, o = 0, h = 0, c = 0, l = new w, u = 1, d = -1; s < t.length;) {
            var p, g, m = t.charCodeAt(s);
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
                        o = s, _ = 13;
                        continue
                    }
                    _ = 0, a = 2;
                    break;
                case 2:
                    switch (m) {
                        case 33:
                            if (91 == t.charCodeAt(s + 1)) {
                                if ("CDATA[" != R.substr(t, s += 2, 6).toUpperCase()) throw _s.thrown(new Rs("Expected <![CDATA[", t, s));
                                _ = 17, o = (s += 5) + 1
                            } else if (68 == t.charCodeAt(s + 1) || 100 == t.charCodeAt(s + 1)) {
                                if ("OCTYPE" != R.substr(t, s + 2, 6).toUpperCase()) throw _s.thrown(new Rs("Expected <!DOCTYPE", t, s));
                                _ = 16, o = (s += 8) + 1
                            } else {
                                if (45 != t.charCodeAt(s + 1) || 45 != t.charCodeAt(s + 2)) throw _s.thrown(new Rs("Expected \x3c!--", t, s));
                                _ = 15, o = (s += 2) + 1
                            }
                            break;
                        case 47:
                            if (null == i) throw _s.thrown(new Rs("Expected node name", t, s));
                            o = s + 1, _ = 0, a = 10;
                            break;
                        case 63:
                            _ = 14, o = s;
                            break;
                        default:
                            _ = 3, o = s;
                            continue
                    }
                    break;
                case 3:
                    if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                    if (s == o) throw _s.thrown(new Rs("Expected node name", t, s));
                    n = S.createElement(R.substr(t, o, s - o)), i.addChild(n), ++h, _ = 0, a = 4;
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
                            _ = 5, o = s;
                            continue
                    }
                    break;
                case 5:
                    if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                    if (o == s) throw _s.thrown(new Rs("Expected attribute name", t, s));
                    r = R.substr(t, o, s - o);
                    if (n.exists(r)) throw _s.thrown(new Rs("Duplicate attribute [" + r + "]", t, s));
                    _ = 0, a = 6;
                    continue;
                case 6:
                    if (61 != m) throw _s.thrown(new Rs("Expected =", t, s));
                    _ = 0, a = 7;
                    break;
                case 7:
                    switch (m) {
                        case 34:
                        case 39:
                            l = new w, _ = 8, o = s + 1, d = m;
                            break;
                        default:
                            throw _s.thrown(new Rs('Expected "', t, s))
                    }
                    break;
                case 8:
                    switch (m) {
                        case 38:
                            var f = s - o;
                            l.b += R.substr(t, o, null == f ? null : f), _ = 18, u = 8, o = s + 1;
                            break;
                        case 60:
                        case 62:
                            if (e) throw _s.thrown(new Rs("Invalid unescaped " + String.fromCodePoint(m) + " in attribute value", t, s));
                            m == d && (p = s - o, l.b += R.substr(t, o, null == p ? null : p), p = l.b, l = new w, n.set(r, p), _ = 0, a = 4);
                            break;
                        default:
                            m == d && (p = s - o, l.b += R.substr(t, o, null == p ? null : p), p = l.b, l = new w, n.set(r, p), _ = 0, a = 4)
                    }
                    break;
                case 9:
                    o = s = Is.doParse(t, e, s, n), _ = 1;
                    break;
                case 10:
                    if (97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) break;
                    if (o == s) throw _s.thrown(new Rs("Expected node name", t, s));
                    var y = R.substr(t, o, s - o);
                    if (null == i || 0 != i.nodeType) throw _s.thrown(new Rs("Unexpected </" + y + ">, tag is not open", t, s));
                    if (i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                    if (y != i.nodeName) {
                        if (i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        throw _s.thrown(new Rs("Expected </" + i.nodeName + ">", t, s))
                    }
                    _ = 0, a = 12;
                    continue;
                case 11:
                    if (62 != m) throw _s.thrown(new Rs("Expected >", t, s));
                    _ = 1;
                    break;
                case 12:
                    if (62 == m) return 0 == h && i.addChild(S.createPCData("")), s;
                    throw _s.thrown(new Rs("Expected >", t, s));
                case 13:
                    60 == m ? (y = s - o, l.b += R.substr(t, o, null == y ? null : y), y = S.createPCData(l.b), l = new w, i.addChild(y), ++h, _ = 0, a = 2) : 38 == m && (g = s - o, l.b += R.substr(t, o, null == g ? null : g), _ = 18, u = 13, o = s + 1);
                    break;
                case 14:
                    63 == m && 62 == t.charCodeAt(s + 1) && (g = R.substr(t, o + 1, ++s - o - 2), i.addChild(S.createProcessingInstruction(g)), ++h, _ = 1);
                    break;
                case 15:
                    45 == m && 45 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2) && (i.addChild(S.createComment(R.substr(t, o, s - o))), ++h, s += 2, _ = 1);
                    break;
                case 16:
                    91 == m ? ++c : 93 == m ? --c : 62 == m && 0 == c && (i.addChild(S.createDocType(R.substr(t, o, s - o))), ++h, _ = 1);
                    break;
                case 17:
                    93 == m && 93 == t.charCodeAt(s + 1) && 62 == t.charCodeAt(s + 2) && (x = S.createCData(R.substr(t, o, s - o)), i.addChild(x), ++h, s += 2, _ = 1);
                    break;
                case 18:
                    if (59 == m) {
                        var E = R.substr(t, o, s - o);
                        if (35 == E.charCodeAt(0)) {
                            var x = 120 == E.charCodeAt(1) ? k.parseInt("0" + R.substr(E, 1, E.length - 1)) : k.parseInt(R.substr(E, 1, E.length - 1));
                            l.b += String.fromCodePoint(x)
                        } else if (Object.prototype.hasOwnProperty.call(Is.escapes.h, E)) l.b += k.string(Is.escapes.h[E]);
                        else {
                            if (e) throw _s.thrown(new Rs("Undefined entity: " + E, t, s));
                            l.b += k.string("&" + E + ";")
                        }
                        o = s + 1, _ = u
                    } else if (!(97 <= m && m <= 122 || 65 <= m && m <= 90 || 48 <= m && m <= 57 || 58 == m || 46 == m || 95 == m || 45 == m) && 35 != m) {
                        if (e) throw _s.thrown(new Rs("Invalid character in entity: " + String.fromCodePoint(m), t, s));
                        l.b += String.fromCodePoint(38);
                        E = s - o;
                        l.b += R.substr(t, o, null == E ? null : E), o = --s + 1, _ = u
                    }
            }++s
        }
        if (1 == _ && (o = s, _ = 13), 13 == _) {
            if (0 != i.nodeType) return s == o && 0 != h || (f = s - o, l.b += R.substr(t, o, null == f ? null : f), i.addChild(S.createPCData(l.b)), ++h), s;
            if (i.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
            throw _s.thrown(new Rs("Unclosed node <" + i.nodeName + ">", t, s))
        }
        if (e || 18 != _ || 13 != u) throw _s.thrown(new Rs("Unexpected end", t, s));
        l.b += String.fromCodePoint(38);
        f = s - o;
        return l.b += R.substr(t, o, null == f ? null : f), i.addChild(S.createPCData(l.b)), ++h, s
    };
    var Us = function(t) {
        this.output = new w, this.pretty = t
    };
    (e["haxe.xml.Printer"] = Us).__name__ = "haxe.xml.Printer", Us.print = function(t, e) {
        null == e && (e = !1);
        e = new Us(e);
        return e.writeNode(t, ""), e.output.b
    }, Us.prototype = {
        writeNode: function(t, e) {
            switch (t.nodeType) {
                case 0:
                    if (this.output.b += k.string(e + "<"), t.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    this.output.b += k.string(t.nodeName);
                    for (var s = t.attributes(); s.hasNext();) {
                        var i = s.next();
                        this.output.b += k.string(" " + i + '="');
                        var n = c.htmlEscape(t.get(i), !0);
                        this.output.b += k.string(n), this.output.b += '"'
                    }
                    if (this.hasChildren(t)) {
                        if (this.output.b += ">", this.pretty && (this.output.b += "\n"), t.nodeType != S.Document && t.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                        for (var _ = 0, a = t.children; _ < a.length;) {
                            var r = a[_++];
                            this.writeNode(r, this.pretty ? e + "\t" : e)
                        }
                        if (this.output.b += k.string(e + "</"), t.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                        this.output.b += k.string(t.nodeName), this.output.b += ">", this.pretty && (this.output.b += "\n")
                    } else this.output.b += "/>", this.pretty && (this.output.b += "\n");
                    break;
                case 1:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    var o = t.nodeValue;
                    0 != o.length && (n = e + c.htmlEscape(o), this.output.b += k.string(n), this.pretty && (this.output.b += "\n"));
                    break;
                case 2:
                    if (this.output.b += k.string(e + "<![CDATA["), t.nodeType == S.Document || t.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    this.output.b += k.string(t.nodeValue), this.output.b += "]]>", this.pretty && (this.output.b += "\n");
                    break;
                case 3:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    var h = t.nodeValue,
                        o = new RegExp("[\n\r\t]+", "g".split("u").join(""));
                    h = "\x3c!--" + (h = h.replace(o, "")) + "--\x3e", this.output.b += null == e ? "null" : "" + e;
                    n = c.trim(h);
                    this.output.b += k.string(n), this.pretty && (this.output.b += "\n");
                    break;
                case 4:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    this.output.b += k.string("<!DOCTYPE " + t.nodeValue + ">"), this.pretty && (this.output.b += "\n");
                    break;
                case 5:
                    if (t.nodeType == S.Document || t.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    this.output.b += k.string("<?" + t.nodeValue + "?>"), this.pretty && (this.output.b += "\n");
                    break;
                case 6:
                    if (t.nodeType != S.Document && t.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
                    for (_ = 0, a = t.children; _ < a.length;) {
                        r = a[_++];
                        this.writeNode(r, e)
                    }
            }
        },
        hasChildren: function(t) {
            if (t.nodeType != S.Document && t.nodeType != S.Element) throw _s.thrown("Bad node type, expected Element or Document but found " + (null == t.nodeType ? "null" : b.toString(t.nodeType)));
            for (var e = 0, s = t.children; e < s.length;) {
                var i = s[e++];
                switch (i.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (i.nodeType == S.Document || i.nodeType == S.Element) throw _s.thrown("Bad node type, unexpected " + (null == i.nodeType ? "null" : b.toString(i.nodeType)));
                        if (0 != c.ltrim(i.nodeValue).length) return !0
                }
            }
            return !1
        },
        __class__: Us
    };
    var Ps = function() {};
    (e["js.Boot"] = Ps).__name__ = "js.Boot", Ps.getClass = function(t) {
        if (null == t) return null;
        if (t instanceof Array) return Array;
        var e = t.__class__;
        if (null != e) return e;
        t = Ps.__nativeClassName(t);
        return null != t ? Ps.__resolveNativeClass(t) : null
    }, Ps.__string_rec = function(n, _) {
        if (null == n) return "null";
        if (5 <= _.length) return "<...>";
        var t, e = typeof n;
        switch ("function" == e && (n.__name__ || n.__ename__) && (e = "object"), e) {
            case "function":
                return "<function>";
            case "object":
                if (n.__enum__) {
                    var a = A[n.__enum__].__constructs__[n._hx_index],
                        s = a._hx_name;
                    return a.__params__ ? (_ += "\t", s + "(" + function() {
                        for (var t = [], e = 0, s = a.__params__; e < s.length;) {
                            var i = s[e];
                            e += 1, t.push(Ps.__string_rec(n[i], _))
                        }
                        return t
                    }().join(",") + ")") : s
                }
                if (n instanceof Array) {
                    var i = "[";
                    _ += "\t";
                    for (var r = 0, o = n.length; r < o;) {
                        var h = r++;
                        i += (0 < h ? "," : "") + Ps.__string_rec(n[h], _)
                    }
                    return i += "]"
                }
                try {
                    t = n.toString
                } catch (r) {
                    return "???"
                }
                if (null != t && t != Object.toString && "function" == typeof t) {
                    s = n.toString();
                    if ("[object Object]" != s) return s
                }
                i = "{\n";
                _ += "\t";
                var c = null != n.hasOwnProperty,
                    l = null;
                for (l in n) c && !n.hasOwnProperty(l) || "prototype" != l && "__class__" != l && "__super__" != l && "__interfaces__" != l && "__properties__" != l && (2 != i.length && (i += ", \n"), i += _ + l + " : " + Ps.__string_rec(n[l], _));
                return i += "\n" + (_ = _.substring(1)) + "}";
            case "string":
                return n;
            default:
                return String(n)
        }
    }, Ps.__interfLoop = function(t, e) {
        if (null == t) return !1;
        if (t == e) return !0;
        var s = t.__interfaces__;
        if (null != s)
            for (var i = 0, n = s.length; i < n;) {
                var _ = s[i++];
                if (_ == e || Ps.__interfLoop(_, e)) return !0
            }
        return Ps.__interfLoop(t.__super__, e)
    }, Ps.__instanceof = function(t, e) {
        if (null == e) return !1;
        switch (e) {
            case Array:
                return t instanceof Array;
            case ei:
                return "boolean" == typeof t;
            case $s:
                return null != t;
            case ti:
                return "number" == typeof t;
            case qs:
                return "number" == typeof t && (0 | t) === t;
            case String:
                return "string" == typeof t;
            default:
                if (null == t) return !1;
                if ("function" == typeof e) {
                    if (Ps.__downcastCheck(t, e)) return !0
                } else if ("object" == typeof e && Ps.__isNativeObj(e) && t instanceof e) return !0;
                return e == si && null != t.__name__ ? !0 : e == ii && null != t.__ename__ || null != t.__enum__ && A[t.__enum__] == e
        }
    }, Ps.__downcastCheck = function(t, e) {
        return t instanceof e || !!e.__isInterface__ && Ps.__interfLoop(Ps.getClass(t), e)
    }, Ps.__implements = function(t, e) {
        return Ps.__interfLoop(Ps.getClass(t), e)
    }, Ps.__cast = function(t, e) {
        if (null == t || Ps.__instanceof(t, e)) return t;
        throw _s.thrown("Cannot cast " + k.string(t) + " to " + k.string(e))
    }, Ps.__nativeClassName = function(t) {
        t = Ps.__toStr.call(t).slice(8, -1);
        return "Object" == t || "Function" == t || "Math" == t || "JSON" == t ? null : t
    }, Ps.__isNativeObj = function(t) {
        return null != Ps.__nativeClassName(t)
    }, Ps.__resolveNativeClass = function(t) {
        return u[t]
    };
    var Ns = function() {};
    (e["js.Browser"] = Ns).__name__ = "js.Browser", Ns.__properties__ = {
        get_supported: "get_supported"
    }, Ns.get_supported = function() {
        return "undefined" != typeof window && void 0 !== window.location && "string" == typeof window.location.protocol
    }, Ns.getLocalStorage = function() {
        try {
            var t, e = window.localStorage;
            return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
        } catch (t) {
            return null
        }
    }, Ns.getSessionStorage = function() {
        try {
            var t, e = window.sessionStorage;
            return e.getItem(""), 0 == e.length && (t = "_hx_" + Math.random(), e.setItem(t, t), e.removeItem(t)), e
        } catch (t) {
            return null
        }
    }, Ns.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw _s.thrown("Unable to create XMLHttpRequest object.")
    };
    var Ms = function() {};
    (e["js.Cookie"] = Ms).__name__ = "js.Cookie", Ms.set = function(t, e, s, i, n) {
        e = t + "=" + encodeURIComponent(e);
        null != s && (e += ";expires=" + new Date((new Date).getTime() + 1e3 * s).toGMTString()), null != i && (e += ";path=" + i), null != n && (e += ";domain=" + n), window.document.cookie = e
    }, Ms.all = function() {
        for (var t = new bs, e = window.document.cookie.split(";"), s = 0; s < e.length;) {
            var i = e[s];
            ++s;
            var n = (i = c.ltrim(i)).split("=");
            n.length < 2 || (i = decodeURIComponent(n[1].split("+").join(" ")), t.h[n[0]] = i)
        }
        return t
    }, Ms.get = function(t) {
        return Ms.all().h[t]
    }, Ms.exists = function(t) {
        var e = Ms.all();
        return Object.prototype.hasOwnProperty.call(e.h, t)
    }, Ms.remove = function(t, e, s) {
        Ms.set(t, "", -10, e, s)
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
    var Ls = A["tweezer.ETween"] = {
        __ename__: "tweezer.ETween",
        __constructs__: null,
        BACK: ((h = function(t) {
            return {
                _hx_index: 0,
                p_overshoot: t,
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
        ELASTIC: ((h = function(t, e) {
            return {
                _hx_index: 4,
                p_period: t,
                p_amplitude: e,
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

    function Bs() {}
    Ls.__constructs__ = [Ls.BACK, Ls.BOUNCE, Ls.CIRCULAR, Ls.CUBIC, Ls.ELASTIC, Ls.EXPONENTIAL, Ls.LINEAR, Ls.QUADRATIC, Ls.QUARTIC, Ls.QUINTIC, Ls.SINE], (e["tweezer.TweenFactory"] = Bs).__name__ = "tweezer.TweenFactory", Bs.createTweenFunction = function(e, s, i, t, n) {
        switch (null == t && (t = Ds.EASE_IN), null == n && (n = Ls.LINEAR), n._hx_index) {
            case 0:
                var _ = n.p_overshoot;
                switch (null == _ && (_ = 1.70158), t._hx_index) {
                    case 0:
                        return function(t) {
                            return Fs.easeIn(t, e, s, i, _)
                        };
                    case 1:
                        return function(t) {
                            return Fs.easeInOut(t, e, s, i, _)
                        };
                    case 2:
                        return function(t) {
                            return Fs.easeOut(t, e, s, i, _)
                        };
                    case 3:
                        return function(t) {
                            return Fs.easeOutIn(t, e, s, i, _)
                        }
                }
                break;
            case 1:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Vs.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Vs.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Vs.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Vs.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 2:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Hs.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Hs.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Hs.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Hs.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 3:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Ys.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Ys.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Ys.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Ys.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 4:
                var a = n.p_period,
                    r = n.p_amplitude;
                switch (null == a && (a = .3 * i * (t == Ds.EASE_IN_OUT ? 1.5 : 1)), null == r && (r = 0), t._hx_index) {
                    case 0:
                        return function(t) {
                            return Gs.easeIn(t, e, s, i, a, r)
                        };
                    case 1:
                        return function(t) {
                            return Gs.easeInOut(t, e, s, i, a, r)
                        };
                    case 2:
                        return function(t) {
                            return Gs.easeOut(t, e, s, i, a, r)
                        };
                    case 3:
                        return function(t) {
                            return Gs.easeOutIn(t, e, s, i, a, r)
                        }
                }
                break;
            case 5:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return js.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return js.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return js.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return js.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 6:
                return function(t) {
                    return zs.ease(t, e, s, i)
                };
            case 7:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Ks.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Ks.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Ks.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Ks.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 8:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Ws.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Ws.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Ws.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Ws.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 9:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Xs.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Xs.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Xs.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Xs.easeOutIn(t, e, s, i)
                        }
                }
                break;
            case 10:
                switch (t._hx_index) {
                    case 0:
                        return function(t) {
                            return Qs.easeIn(t, e, s, i)
                        };
                    case 1:
                        return function(t) {
                            return Qs.easeInOut(t, e, s, i)
                        };
                    case 2:
                        return function(t) {
                            return Qs.easeOut(t, e, s, i)
                        };
                    case 3:
                        return function(t) {
                            return Qs.easeOutIn(t, e, s, i)
                        }
                }
        }
    };
    var Os = function(t, e, s, i, n, _, a, r, o, h, c) {
        null == a && (a = 0), null == _ && (_ = 1e3), null == n && (n = 0), this._updateCallback = e, this._startValue = s, this._endValue = i, this._startDelay = n, this._duration = _, this._endDelay = a, this._easeType = r, this._tweenType = o, this._completeCallback = h, this._isSnap = c, y.call(this, t), this._updater(), this._updates = 0
    };
    (e["tweezer.Tweezer"] = Os).__name__ = "tweezer.Tweezer", Os.__super__ = y, Os.prototype = t(y.prototype, {
        _init: function() {
            y.prototype._init.call(this), this._tweenFunction = Bs.createTweenFunction(this._startValue, this._endValue - this._startValue, this._duration, this._easeType, this._tweenType)
        },
        _updater: function(t) {
            null == t && (t = 0), y.prototype._updater.call(this, t), null != this._updateCallback && (t = this._tweenFunction(Math.min(Math.max(0, this._age - this._startDelay), this._duration)), this._updateCallback(this._isSnap ? Math.round(t) : t)), this._age >= this._startDelay + this._duration + this._endDelay && (null != this._completeCallback && this._completeCallback(), this.isDisposed || (this.isDisposed = !0, this.set_isActive(!1), this._disposer()))
        },
        __class__: Os
    });
    var Fs = function() {};
    (e["tweezer.tweens.Back"] = Fs).__name__ = "tweezer.tweens.Back", Fs.easeIn = function(t, e, s, i, n) {
        return s * (t /= i) * t * ((n + 1) * t - n) + e
    }, Fs.easeOut = function(t, e, s, i, n) {
        return s * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
    }, Fs.easeInOut = function(t, e, s, i, n) {
        return (t /= i / 2) < 1 ? s / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : s / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
    }, Fs.easeOutIn = function(t, e, s, i, n) {
        return t < i / 2 ? Fs.easeOut(2 * t, e, s / 2, i, n) : Fs.easeIn(2 * t - i, e + s / 2, s / 2, i, n)
    };
    var Vs = function() {};
    (e["tweezer.tweens.Bounce"] = Vs).__name__ = "tweezer.tweens.Bounce", Vs.easeIn = function(t, e, s, i) {
        return s - Vs.easeOut(i - t, 0, s, i) + e
    }, Vs.easeOut = function(t, e, s, i) {
        return (t /= i) < .36363636363636365 ? s * (7.5625 * t * t) + e : t < .7272727272727273 ? s * (7.5625 * (t -= .5454545454545454) * t + .75) + e : t < .9090909090909091 ? s * (7.5625 * (t -= .8181818181818182) * t + .9375) + e : s * (7.5625 * (t -= .9545454545454546) * t + .984375) + e
    }, Vs.easeInOut = function(t, e, s, i) {
        return t < i / 2 ? .5 * Vs.easeIn(2 * t, 0, s, i) + e : .5 * Vs.easeOut(2 * t - i, 0, s, i) + .5 * s + e
    }, Vs.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Vs.easeOut(2 * t, e, s / 2, i) : Vs.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Hs = function() {};
    (e["tweezer.tweens.Circular"] = Hs).__name__ = "tweezer.tweens.Circular", Hs.easeIn = function(t, e, s, i) {
        return -s * (Math.sqrt(1 - (t /= i) * t) - 1) + e
    }, Hs.easeOut = function(t, e, s, i) {
        return t = t / i - 1, s * Math.sqrt(1 - t * t) + e
    }, Hs.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }, Hs.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Hs.easeOut(2 * t, e, s / 2, i) : Hs.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Ys = function() {};
    (e["tweezer.tweens.Cubic"] = Ys).__name__ = "tweezer.tweens.Cubic", Ys.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t + e
    }, Ys.easeOut = function(t, e, s, i) {
        return s * ((t = t / i - 1) * t * t + 1) + e
    }, Ys.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e
    }, Ys.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Ys.easeOut(2 * t, e, s / 2, i) : Ys.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Gs = function() {};
    (e["tweezer.tweens.Elastic"] = Gs).__name__ = "tweezer.tweens.Elastic", Gs.easeIn = function(t, e, s, i, n, _) {
        if (0 == t) return e;
        if (1 == (t /= i)) return e + s;
        s = 0 == _ || _ < Math.abs(s) ? (_ = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / _);
        return -(_ * Math.pow(2, 10 * --t) * Math.sin((t * i - s) * (2 * Math.PI) / n)) + e
    }, Gs.easeOut = function(t, e, s, i, n, _) {
        if (0 == t) return e;
        if (1 == (t /= i)) return e + s;
        var a = 0 == _ || _ < Math.abs(s) ? (_ = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / _);
        return _ * Math.pow(2, -10 * t) * Math.sin((t * i - a) * (2 * Math.PI) / n) + s + e
    }, Gs.easeInOut = function(t, e, s, i, n, _) {
        if (0 == t) return e;
        if (2 == (t /= i / 2)) return e + s;
        var a = 0 == _ || _ < Math.abs(s) ? (_ = s, n / 4) : n / (2 * Math.PI) * Math.asin(s / _);
        return t < 1 ? _ * Math.pow(2, 10 * --t) * Math.sin((t * i - a) * (2 * Math.PI) / n) * -.5 + e : _ * Math.pow(2, -10 * --t) * Math.sin((t * i - a) * (2 * Math.PI) / n) * .5 + s + e
    }, Gs.easeOutIn = function(t, e, s, i, n, _) {
        return t < i / 2 ? Gs.easeOut(2 * t, e, s / 2, i, n, _) : Gs.easeIn(2 * t - i, e + s / 2, s / 2, i, n, _)
    };
    var js = function() {};
    (e["tweezer.tweens.Exponential"] = js).__name__ = "tweezer.tweens.Exponential", js.easeIn = function(t, e, s, i) {
        return 0 == t ? e : s * Math.pow(2, 10 * (t / i - 1)) + e - .001 * s
    }, js.easeOut = function(t, e, s, i) {
        return t == i ? e + s : 1.001 * s * (1 - Math.pow(2, -10 * t / i)) + e
    }, js.easeInOut = function(t, e, s, i) {
        return 0 == t ? e : t == i ? e + s : (t /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * s : s / 2 * 1.0005 * (2 - Math.pow(2, -10 * --t)) + e
    }, js.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? js.easeOut(2 * t, e, s / 2, i) : js.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var zs = function() {};
    (e["tweezer.tweens.Linear"] = zs).__name__ = "tweezer.tweens.Linear", zs.ease = function(t, e, s, i) {
        return s * t / i + e
    };
    var Ks = function() {};
    (e["tweezer.tweens.Quadratic"] = Ks).__name__ = "tweezer.tweens.Quadratic", Ks.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t + e
    }, Ks.easeOut = function(t, e, s, i) {
        return -s * (t /= i) * (t - 2) + e
    }, Ks.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e
    }, Ks.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Ks.easeOut(2 * t, e, s / 2, i) : Ks.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Ws = function() {};
    (e["tweezer.tweens.Quartic"] = Ws).__name__ = "tweezer.tweens.Quartic", Ws.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t * t + e
    }, Ws.easeOut = function(t, e, s, i) {
        return -s * ((t = t / i - 1) * t * t * t - 1) + e
    }, Ws.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e
    }, Ws.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Ws.easeOut(2 * t, e, s / 2, i) : Ws.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Xs = function() {};
    (e["tweezer.tweens.Quintic"] = Xs).__name__ = "tweezer.tweens.Quintic", Xs.easeIn = function(t, e, s, i) {
        return s * (t /= i) * t * t * t * t + e
    }, Xs.easeOut = function(t, e, s, i) {
        return s * ((t = t / i - 1) * t * t * t * t + 1) + e
    }, Xs.easeInOut = function(t, e, s, i) {
        return (t /= i / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }, Xs.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Xs.easeOut(2 * t, e, s / 2, i) : Xs.easeIn(2 * t - i, e + s / 2, s / 2, i)
    };
    var Qs = function() {};

    function Zs(t) {
        return t instanceof Array ? new ks(t) : t.iterator()
    }

    function Js(t, e) {
        return null == e ? null : (null == e.__id__ && (e.__id__ = u.$haxeUID++), null == t.hx__closures__ ? t.hx__closures__ = {} : s = t.hx__closures__[e.__id__], null == s && (s = e.bind(t), t.hx__closures__[e.__id__] = s), s);
        var s
    }(e["tweezer.tweens.Sine"] = Qs).__name__ = "tweezer.tweens.Sine", Qs.easeIn = function(t, e, s, i) {
        return -s * Math.cos(t / i * (Math.PI / 2)) + s + e
    }, Qs.easeOut = function(t, e, s, i) {
        return s * Math.sin(t / i * (Math.PI / 2)) + e
    }, Qs.easeInOut = function(t, e, s, i) {
        return -s / 2 * (Math.cos(Math.PI * t / i) - 1) + e
    }, Qs.easeOutIn = function(t, e, s, i) {
        return t < i / 2 ? Qs.easeOut(2 * t, e, s / 2, i) : Qs.easeIn(2 * t - i, e + s / 2, s / 2, i)
    }, u.$haxeUID |= 0, "undefined" != typeof performance && "function" == typeof performance.now && (R.now = performance.now.bind(performance)), e.Math = Math, null == String.fromCodePoint && (String.fromCodePoint = function(t) {
        return t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55232 + (t >> 10)) + String.fromCharCode(56320 + (1023 & t))
    }), String.prototype.__class__ = e.String = String, String.__name__ = "String", e.Array = Array, Array.__name__ = "Array", Date.prototype.__class__ = e.Date = Date, Date.__name__ = "Date";
    var qs = {},
        $s = {},
        ti = Number,
        ei = Boolean,
        si = {},
        ii = {};
    rs.content = [{
        name: "revision",
        data: "MTcNCjIwMjQvMDMvMjggMTA6MzI6MjcNCg"
    }, {
        name: "config",
        data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxkYXRhPg0KCTxzZXR0aW5ncz4NCgkJPGFzc2V0cz4NCgkJCTxwYWNrYWdlcyBkZWZhdWx0PSJhc3NldHMiIGF1ZGlvPSJhc3NldHMuYXVkaW8iIC8+DQoJCTwvYXNzZXRzPg0KCQk8Zm9udCBuYW1lPSJleG8yLWV4dHJhYm9sZGl0YWxpYy13ZWJmb250IiAvPg0KCQk8YXNjaWlBcnQ+DQogICBfXyAgX19fX19fX19fX19fICAgIF9fIF9fX19fX19fXyAgX19fXw0KICAvICB8LyAgL18gIF9fLyBfICkgIC8gLy8gLyBfXy8gXyBcLyBfXyBcDQogLyAvfF8vIC8gLyAvIC8gXyAgfCAvIF8gIC8gXy8vICwgXy8gL18vIC8NCi9fLyAgL18vIC9fLyAvX19fXy8gL18vL18vX19fL18vfF98XF9fX18vDQoNCgkJPC9hc2NpaUFydD4NCgkJPHVybHM+DQoJCQk8d2Vic2l0ZT5odHRwczovL3d3dy5jYmMuY2Eva2lkcy9nYW1lczwvd2Vic2l0ZT4NCgkJPC91cmxzPg0KCQk8Z29vZ2xlQW5hbHl0aWNzIGlkPSJVQS0yMjQwNjMzNy01MiIgZW5hYmxlZD0idHJ1ZSIgLz4NCgkJPGF1ZGlvSG9sZERlbGF5PjUwMDA8L2F1ZGlvSG9sZERlbGF5Pg0KCQk8ZGlzYWJsZUV5ZUNhbmR5PmZhbHNlPC9kaXNhYmxlRXllQ2FuZHk+DQoJCTxkaXNhYmxlRGV2aWNlTW90aW9uPmZhbHNlPC9kaXNhYmxlRGV2aWNlTW90aW9uPg0KCQk8b3JpZW50YXRpb25BcHByb3hpbWF0aW9uPmZhbHNlPC9vcmllbnRhdGlvbkFwcHJveGltYXRpb24+DQoJPC9zZXR0aW5ncz4NCgk8Z3VpPg0KCQk8YXVkaW9Ib2xkTWVzc2FnZT5QUkVTUyBUTyBDT05USU5VRTwvYXVkaW9Ib2xkTWVzc2FnZT4NCgkJPGJ1dHRvbnM+DQoJCQk8d2Vic2l0ZT5Nb3JlIGdhbWVzPC93ZWJzaXRlPg0KCQkJPGluc3RydWN0aW9ucz5Ib3cgdG8gcGxheTwvaW5zdHJ1Y3Rpb25zPg0KCQkJPHBsYXk+UGxheSBub3c8L3BsYXk+DQoJCQk8YXZhdGFyPkNoYW5nZSBoZXJvPC9hdmF0YXI+DQoJCQk8Y29udGludWU+Q29udGludWU8L2NvbnRpbnVlPg0KCQkJPHJlc2V0PlJlc2V0IEhlcm88L3Jlc2V0Pg0KCQkJPGJ1eT5CdXk8L2J1eT4NCgkJCTx1bnBhdXNlPlJlc3VtZTwvdW5wYXVzZT4NCgkJCTxhdWRpb09uPlNvdW5kIE9uPC9hdWRpb09uPg0KCQkJPGF1ZGlvT2ZmPlNvdW5kIE9mZjwvYXVkaW9PZmY+DQoJCQk8ZnVsbFNjcmVlbk9uPkZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT24+DQoJCQk8ZnVsbFNjcmVlbk9mZj5FeGl0IGZ1bGwgc2NyZWVuPC9mdWxsU2NyZWVuT2ZmPg0KCQkJPGJhY2s+TWFpbiBtZW51PC9iYWNrPg0KCQkJPHRlc3RNb2RlPg0KCQkJCTxmaW5pc2g+RmluaXNoPC9maW5pc2g+DQoJCQkJPHNraXA+U2tpcDwvc2tpcD4NCgkJCQk8YnJvbnplPkJyb256ZTwvYnJvbnplPg0KCQkJCTxzaWx2ZXI+U2lsdmVyPC9zaWx2ZXI+DQoJCQkJPGdvbGQ+R29sZDwvZ29sZD4NCgkJCTwvdGVzdE1vZGU+DQoJCQk8YXZhdGFycz4NCgkJCQk8dW5pdEE+TWVuPC91bml0QT4NCgkJCQk8dW5pdEI+V29tZW48L3VuaXRCPg0KCQkJPC9hdmF0YXJzPg0KCQkJPGxldmVscz4NCgkJCQk8bGV2ZWwxPkJlZ2lubmVyPC9sZXZlbDE+DQoJCQkJPGxldmVsMj5Ob3JtYWw8L2xldmVsMj4NCgkJCQk8bGV2ZWwzPkV4cGVydDwvbGV2ZWwzPg0KCQkJPC9sZXZlbHM+DQoJCTwvYnV0dG9ucz4NCgkJPHVwZ3JhZGVzPg0KCQkJPHNwZWVkPlNwZWVkPC9zcGVlZD4NCgkJCTxzdGVlcmluZz5CYWxhbmNlPC9zdGVlcmluZz4NCgkJCTxhY2NlbGVyYXRpb24+UG93ZXI8L2FjY2VsZXJhdGlvbj4NCgkJCTxib29zdD5Cb29zdDwvYm9vc3Q+DQoJCTwvdXBncmFkZXM+DQoJCTxtZWRhbHM+DQoJCQk8bm9uZT5SZXNwZWN0PC9ub25lPg0KCQkJPGJyb256ZT5Ccm9uemU8L2Jyb256ZT4NCgkJCTxzaWx2ZXI+U2lsdmVyPC9zaWx2ZXI+DQoJCQk8Z29sZD5Hb2xkPC9nb2xkPg0KCQk8L21lZGFscz4NCgkJPGxldmVscz4NCgkJCTxsZXZlbDE+TGV2ZWwgMTwvbGV2ZWwxPg0KCQkJPGxldmVsMj5MZXZlbCAyPC9sZXZlbDI+DQoJCQk8bGV2ZWwzPkxldmVsIDM8L2xldmVsMz4NCgkJPC9sZXZlbHM+DQoJCTx1bml0cz4NCgkJCTx1bml0QSB0aXRsZT0iTWVuIiBzdWJ0aXRsZT0iVGVhbSIgLz4NCgkJCTx1bml0QiB0aXRsZT0iV29tZW4iIHN1YnRpdGxlPSJUZWFtIiAvPg0KCQk8L3VuaXRzPg0KCQk8c2NlbmVzPg0KCQkJPG1lbnU+DQoJCQkJPHRpdGxlPk1UQiBIZXJvPC90aXRsZT4NCgkJCQk8c3VidGl0bGU+U3VtbWVyIFNwb3J0czwvc3VidGl0bGU+DQoJCQk8L21lbnU+DQoJCQk8aW5zdHJ1Y3Rpb25zPg0KCQkJCTx0aXRsZT5Ib3cgdG8gcGxheTwvdGl0bGU+DQoJCQkJPG1lc3NhZ2U+PCFbQ0RBVEFbQ2hvb3NlIHlvdXIgaGVybyBhbmQgY29tcGV0ZSBhY3Jvc3MgMyBjb3Vyc2VzIGluIHRoZSBNb3VudGFpbiBCaWtpbmcgZG93bmhpbGwgZXZlbnQuPGJyLz48YnIvPlN0ZWVyIGJldHdlZW4gdGhlIGdhdGVzLCBhdm9pZCBvYnN0YWNsZXMgYW5kIGNvbGxlY3QgYm9vc3RzIHRvIGltcHJvdmUgeW91ciB0aW1lcy48YnIvPjxici8+V2lsbCB5b3Ugd2luIGEgR29sZCBNZWRhbD9dXT48L21lc3NhZ2U+DQoJCQk8L2luc3RydWN0aW9ucz4NCgkJCTxhdmF0YXI+DQoJCQkJPHRpdGxlPlNlbGVjdCBoZXJvPC90aXRsZT4NCgkJCTwvYXZhdGFyPg0KCQkJPHNlbGVjdExldmVsPg0KCQkJCTx0aXRsZT5TZWxlY3QgRG93bmhpbGwgZXZlbnQ8L3RpdGxlPg0KCQkJCTxtZXNzYWdlTmV3PlBsYXkgdG8gd2luIGEgbWVkYWw8L21lc3NhZ2VOZXc+DQoJCQkJPG1lc3NhZ2VMb2NrZWQ+UGxheSBfX1BSRVZJT1VTX0xFVkVMX18gdG8gdW5sb2NrPC9tZXNzYWdlTG9ja2VkPg0KCQkJCTxuZXc+TmV3PC9uZXc+DQoJCQkJPGxvY2tlZD5Mb2NrZWQ8L2xvY2tlZD4NCgkJCTwvc2VsZWN0TGV2ZWw+DQoJCQk8Z2FtZT4NCgkJCQk8aHVkPg0KCQkJCQk8dGFyZ2V0cz5UaW1lIHRvIGJlYXQ8L3RhcmdldHM+DQoJCQkJCTx0aW1lcj5DdXJyZW50IHRpbWU8L3RpbWVyPg0KCQkJCQk8c3BlZWRvPkttL2g8L3NwZWVkbz4NCgkJCQkJPGNvaW5zPkNvaW5zPC9jb2lucz4NCgkJCQk8L2h1ZD4NCgkJCTwvZ2FtZT4NCgkJCTxyZXN1bHRzPg0KCQkJCTx0aXRsZT5SZXN1bHRzPC90aXRsZT4NCgkJCQk8bWVzc2FnZT5Zb3Ugd29uPC9tZXNzYWdlPg0KCQkJPC9yZXN1bHRzPg0KCQkJPHNob3A+DQoJCQkJPHRpdGxlPlRyYWluIHlvdXIgaGVybzwvdGl0bGU+DQoJCQkJPG1heGVkPk1heGVkPC9tYXhlZD4NCgkJCTwvc2hvcD4NCgkJPC9zY2VuZXM+DQoJPC9ndWk+DQo8L2RhdGE+DQo"
    }], Ss.count = 0, Ps.__toStr = {}.toString, S.Element = 0, S.PCData = 1, S.CData = 2, S.Comment = 3, S.DocType = 4, S.ProcessingInstruction = 5, S.Document = 6, os.USE_CACHE = !1, os.USE_ENUM_INDEX = !1, os.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", ls.DEFAULT_RESOLVER = new cs, ls.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", gs.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gs.BYTES = ds.ofString(gs.CHARS), Is.escapes = ((g = new bs).h.lt = "<", g.h.gt = ">", g.h.amp = "&", g.h.quot = '"', g.h.apos = "'", g), Kt.main()
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);