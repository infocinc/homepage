var requirejs, require, define;
(function(e) {
    function a(e, t) {
        var n = t && t.split("/"),
            i = r.map,
            s = i && i["*"] || {},
            o, u, a, f, l, c, h;
        if (e && e.charAt(0) === "." && t) {
            n = n.slice(0, n.length - 1), e = n.concat(e.split("/"));
            for (l = 0; h = e[l]; l++)
                if (h === ".") e.splice(l, 1), l -= 1;
                else if (h === "..") {
                if (l === 1 && (e[2] === ".." || e[0] === "..")) return !0;
                l > 0 && (e.splice(l - 1, 2), l -= 2)
            }
            e = e.join("/")
        }
        if ((n || s) && i) {
            o = e.split("/");
            for (l = o.length; l > 0; l -= 1) {
                u = o.slice(0, l).join("/");
                if (n)
                    for (c = n.length; c > 0; c -= 1) {
                        a = i[n.slice(0, c).join("/")];
                        if (a) {
                            a = a[u];
                            if (a) {
                                f = a;
                                break
                            }
                        }
                    }
                f = f || s[u];
                if (f) {
                    o.splice(0, l, f), e = o.join("/");
                    break
                }
            }
        }
        return e
    }

    function f(t, n) {
        return function() {
            return u.apply(e, s.call(arguments, 0).concat([t, n]))
        }
    }

    function l(e) {
        return function(t) {
            return a(t, e)
        }
    }

    function c(e) {
        return function(n) {
            t[e] = n
        }
    }

    function h(r) {
        if (n.hasOwnProperty(r)) {
            var s = n[r];
            delete n[r], i[r] = !0, o.apply(e, s)
        }
        if (!t.hasOwnProperty(r)) throw new Error("No " + r);
        return t[r]
    }

    function p(e, t) {
        var n, r, i = e.indexOf("!");
        return i !== -1 ? (n = a(e.slice(0, i), t), e = e.slice(i + 1), r = h(n), r && r.normalize ? e = r.normalize(e, l(t)) : e = a(e, t)) : e = a(e, t), {
            f: n ? n + "!" + e : e,
            n: e,
            p: r
        }
    }

    function d(e) {
        return function() {
            return r && r.config && r.config[e] || {}
        }
    }
    var t = {},
        n = {},
        r = {},
        i = {},
        s = [].slice,
        o, u;
    o = function(r, s, o, u) {
        var a = [],
            l, v, m, g, y, b;
        u = u || r;
        if (typeof o == "function") {
            s = !s.length && o.length ? ["require", "exports", "module"] : s;
            for (b = 0; b < s.length; b++) {
                y = p(s[b], u), m = y.f;
                if (m === "require") a[b] = f(r);
                else if (m === "exports") a[b] = t[r] = {}, l = !0;
                else if (m === "module") v = a[b] = {
                    id: r,
                    uri: "",
                    exports: t[r],
                    config: d(r)
                };
                else if (t.hasOwnProperty(m) || n.hasOwnProperty(m)) a[b] = h(m);
                else if (y.p) y.p.load(y.n, f(u, !0), c(m), {}), a[b] = t[m];
                else if (!i[m]) throw new Error(r + " missing " + m)
            }
            g = o.apply(t[r], a);
            if (r)
                if (v && v.exports !== e && v.exports !== t[r]) t[r] = v.exports;
                else if (g !== e || !l) t[r] = g
        } else r && (t[r] = o)
    }, requirejs = require = u = function(t, n, i, s) {
        return typeof t == "string" ? h(p(t, n).f) : (t.splice || (r = t, n.splice ? (t = n, n = i, i = null) : t = e), n = n || function() {}, s ? o(e, t, n, i) : setTimeout(function() {
            o(e, t, n, i)
        }, 15), u)
    }, u.config = function(e) {
        return r = e, u
    }, define = function(e, t, r) {
        t.splice || (r = t, t = []), n[e] = [e, t, r]
    }, define.amd = {
        jQuery: !0
    }
})(), this.JST = this.JST || {}, this.JST.footer = function(e, t, n, r, i) {
        return n = n || e.helpers, '<div class="container"><div class="row"><div class="span12"><div class="copyright">i18next-webtranslate is freely distributable under the terms of the MIT license.</div></div></div></div>'
    }, this.JST.header = function(e, t, n, r, i) {
        return n = n || e.helpers, '<div class="navbar navbar-fixed-top"><div class="navbar-inner"><div class="container"><!--.btn-navbar is used as the toggle for collapsed navbar content--><a data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a><!-- Be sure to leave the brand out there if you want it shown--><a href="/" class="brand">i18next - webtranslate</a><!-- Everything you want hidden at 940px or less, place within here--><div class="nav-collapse"><ul class="nav pull-right"><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle"><i class="large icon-cog"></i><b class="caret"></b></a><ul class="languages dropdown-menu"><li class="nav-header">Change language:</li></ul></li></ul><ul class="nav pull-right"><li><a href="http://jamuhl.github.com/i18next/pages/doc_features.html" target="_new"><i class="icon-book"></i>i18next - doc</a></li></ul></div></div></div></div>'
    }, this.JST.resourceEditorItem = function(e, t, n, r, i) {
        function h(e, t) {
            var r = "",
                i, s;
            return r += '<textarea rows="5" disabled="disabled" class="span5 editor">', s = n.value, s ? i = s.call(e, {
                hash: {}
            }) : (i = e.value, i = typeof i === a ? i() : i), r += f(i) + "</textarea>", r
        }

        function p(e, t) {
            var r = "",
                i, s;
            return r += '<input type="text" value="', s = n.value, s ? i = s.call(e, {
                hash: {}
            }) : (i = e.value, i = typeof i === a ? i() : i), r += f(i) + '" disabled="disabled" class="span5 editor"/>', r
        }

        function d(e, t) {
            var r = "",
                i, s;
            return r += '<textarea rows="5" disabled="disabled" class="span5 compare-editor">', s = n.compare, s ? i = s.call(e, {
                hash: {}
            }) : (i = e.compare, i = typeof i === a ? i() : i), r += f(i) + "</textarea>", r
        }

        function v(e, t) {
            var r = "",
                i, s;
            return r += '<input type="text" value="', s = n.compare, s ? i = s.call(e, {
                hash: {}
            }) : (i = e.compare, i = typeof i === a ? i() : i), r += f(i) + '" disabled="disabled" class="span5 compare-editor"/>', r
        }
        n = n || e.helpers;
        var s = "",
            o, u, a = "function",
            f = this.escapeExpression,
            l = n.helperMissing,
            c = this;
        s += '<div class="resource"><div class="row-fluid"><div class="span2"><a style="display: none;" class="scrollTo"></a><div class="key">', o = t.key, u = n.parseKey, o = u ? u.call(t, o, {
            hash: {}
        }) : l.call(t, "parseKey", o, {
            hash: {}
        }), s += f(o) + '</div></div><div class="span5"><div style="display:inline-block; position:relative;" class="editor-wrapper">', o = t.isArray, o = n["if"].call(t, o, {
            hash: {},
            inverse: c.program(3, p, i),
            fn: c.program(1, h, i)
        });
        if (o || o === 0) s += o;
        s += '</div></div><div class="span5"><div style="display: none;" class="compareControl"><div style="display:inline-block; position:relative;" class="compare-editor-wrapper">', o = t.isArray, o = n["if"].call(t, o, {
            hash: {},
            inverse: c.program(7, v, i),
            fn: c.program(5, d, i)
        });
        if (o || o === 0) s += o;
        return s += '</div></div></div><div class="span5"><div class="previewControl"><div style="display: none;" class="testSection"><h6>', u = n.t, o = u ? u.call(t, "editor.resourceItem.options", {
            hash: {}
        }) : l.call(t, "t", "editor.resourceItem.options", {
            hash: {}
        }), s += f(o) + ":</h6><p>(", u = n.t, o = u ? u.call(t, "editor.resourceItem.optionsDesc", {
            hash: {}
        }) : l.call(t, "t", "editor.resourceItem.optionsDesc", {
            hash: {}
        }), s += f(o) + ')</p><textarea rows="5" class="span3 i18nOptions"></textarea><button class="pull-right btn btn-warning btn-mini refresh"><i class="icon-refresh"></i></button><div class="well translated"></div></div><div class="previewSection">', o = t.fallback, o = o == null || o === !1 ? o : o.value, u = n.parseValue, o = u ? u.call(t, o, {
            hash: {}
        }) : l.call(t, "parseValue", o, {
            hash: {}
        }), s += f(o) + '</div></div></div></div><div class="row-fluid"><div class="span2">&nbsp;</div><div class="span5"><div class="commands"><button class="btn btn-mini singleline"><i class="icon-minus"></i></button><button class="btn btn-mini multiline"><i class="icon-align-justify"></i></button><div style="display: none;" class="pull-right editCommands"><button class="btn btn-mini cancel"><i class="icon-remove"></i>', u = n.t, o = u ? u.call(t, "editor.cancel", {
            hash: {}
        }) : l.call(t, "t", "editor.cancel", {
            hash: {}
        }), s += f(o) + '</button><button class="btn btn-warning btn-mini save"><i class="icon-ok"></i>', u = n.t, o = u ? u.call(t, "editor.save", {
            hash: {}
        }) : l.call(t, "t", "editor.save", {
            hash: {}
        }), s += f(o) + '</button></div><div style="display: none;" class="pull-right removeCommands"><button class="btn btn-mini cancelRemove"><i class="icon-remove"></i>', u = n.t, o = u ? u.call(t, "editor.cancel", {
            hash: {}
        }) : l.call(t, "t", "editor.cancel", {
            hash: {}
        }), s += f(o) + '</button><button class="btn btn-warning btn-mini confirmRemove"><i class="icon-ok"></i>', u = n.t, o = u ? u.call(t, "editor.delete", {
            hash: {}
        }) : l.call(t, "t", "editor.delete", {
            hash: {}
        }), s += f(o) + '</button></div><div class="pull-right mainCommands"><button class="btn btn-mini remove"><i class="icon-remove"></i>', u = n.t, o = u ? u.call(t, "editor.delete", {
            hash: {}
        }) : l.call(t, "t", "editor.delete", {
            hash: {}
        }), s += f(o) + '</button><button class="btn btn-mini edit"><i class="icon-edit"></i>', u = n.t, o = u ? u.call(t, "editor.edit", {
            hash: {}
        }) : l.call(t, "t", "editor.edit", {
            hash: {}
        }), s += f(o) + '</button></div></div></div><div class="span5"><div style="display: none;" class="compare-commands commands"><button class="btn btn-mini preview"><i class="icon-eye-open"></i>', u = n.t, o = u ? u.call(t, "editor.th.displayedValue", {
            hash: {}
        }) : l.call(t, "t", "editor.th.displayedValue", {
            hash: {}
        }), s += f(o) + '</button></div><div class="preview-commands commands"><div class="pull-right"><span class="badge badge-success fallbackBadge">', o = t.fallback, o = o == null || o === !1 ? o : o.lng, o = typeof o === a ? o() : o, s += f(o) + '</span></div><div class="pull-right"><button class="btn btn-mini test"><i class="icon-check"></i>', u = n.t, o = u ? u.call(t, "editor.test", {
            hash: {}
        }) : l.call(t, "t", "editor.test", {
            hash: {}
        }), s += f(o) + '</button></div><button class="btn btn-mini compare"><i class="icon-resize-horizontal"></i>', u = n.t, o = u ? u.call(t, "editor.resourceItem.compare", {
            hash: {}
        }) : l.call(t, "t", "editor.resourceItem.compare", {
            hash: {}
        }), s += f(o) + "</button></div></div></div></div>", s
    }, this.JST.resourceEditorLayout = function(e, t, n, r, i) {
        n = n || e.helpers;
        var s = "",
            o, u, a = n.helperMissing,
            f = this.escapeExpression;
        return s += '<div class="container"><div class="row"><div class="span12"><div class="well"><div class="row-fluid"><div class="span6"><form class="form-inline"><h6>', u = n.t, o = u ? u.call(t, "editor.choose", {
            hash: {}
        }) : a.call(t, "t", "editor.choose", {
            hash: {}
        }), s += f(o) + ':</h6><div class="field control-group"><select id="languages" name="language" data-placeholder="language" class="span5"></select></div><div class="field control-group"><select id="namespaces" name="namespace" data-placeholder="namespace" class="span5"></select></div><h6>', u = n.t, o = u ? u.call(t, "editor.compare", {
            hash: {}
        }) : a.call(t, "t", "editor.compare", {
            hash: {}
        }), s += f(o) + ':</h6><div class="field control-group"><select id="compare-lng" name="compare-lng" data-placeholder="compare-lng" class="span5"></select></div><h6>', u = n.t, o = u ? u.call(t, "editor.filterKeys", {
            hash: {}
        }) : a.call(t, "t", "editor.filterKeys", {
            hash: {}
        }), s += f(o) + ':</h6><input type="text" class="span5 filter"/><h6>', u = n.t, o = u ? u.call(t, "editor.filterValue", {
            hash: {}
        }) : a.call(t, "t", "editor.filterValue", {
            hash: {}
        }), s += f(o) + ':</h6><input type="text" class="span5 filter-value"/></form></div><div class="span6"><form class="form-inline"><h6>', u = n.t, o = u ? u.call(t, "editor.addKey", {
            hash: {}
        }) : a.call(t, "t", "editor.addKey", {
            hash: {}
        }), s += f(o) + ':</h6><div class="field control-group"><input id="addKey" type="text" class="span5"/></div><button id="add" class="btn btn-primary">', u = n.t, o = u ? u.call(t, "editor.add", {
            hash: {}
        }) : a.call(t, "t", "editor.add", {
            hash: {}
        }), s += f(o) + '</button></form></div></div></div></div></div><div class="row"><div class="span12"><div class="row-fluid tableheader"><div class="span2"><h4>', u = n.t, o = u ? u.call(t, "editor.th.key", {
            hash: {}
        }) : a.call(t, "t", "editor.th.key", {
            hash: {}
        }), s += f(o) + '</h4></div><div class="span5"><h4>', u = n.t, o = u ? u.call(t, "editor.th.specificValue", {
            hash: {}
        }) : a.call(t, "t", "editor.th.specificValue", {
            hash: {}
        }), s += f(o) + '</h4></div><div class="span5"><h4>', u = n.t, o = u ? u.call(t, "editor.th.displayedValue", {
            hash: {}
        }) : a.call(t, "t", "editor.th.displayedValue", {
            hash: {}
        }), s += f(o) + " / ", u = n.t, o = u ? u.call(t, "editor.th.compareValue", {
            hash: {}
        }) : a.call(t, "t", "editor.th.compareValue", {
            hash: {}
        }), s += f(o) + '</h4></div></div></div></div><div class="row"><div class="span12"><div id="resources"></div></div></div></div>', s
    },
    function(e, t) {
        function u(e) {
            var t = o[e] = {},
                n, r;
            e = e.split(/\s+/);
            for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
            return t
        }

        function c(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(l, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : s.isNumeric(r) ? +r : f.test(r) ? s.parseJSON(r) : r
                    } catch (o) {}
                    s.data(e, n, r)
                } else r = t
            }
            return r
        }

        function h(e) {
            for (var t in e) {
                if (t === "data" && s.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1
            }
            return !0
        }

        function p(e, t, n) {
            var r = t + "defer",
                i = t + "queue",
                o = t + "mark",
                u = s._data(e, r);
            u && (n === "queue" || !s._data(e, i)) && (n === "mark" || !s._data(e, o)) && setTimeout(function() {
                !s._data(e, i) && !s._data(e, o) && (s.removeData(e, r, !0), u.fire())
            }, 0)
        }

        function H() {
            return !1
        }

        function B() {
            return !0
        }

        function W(e) {
            return !e || !e.parentNode || e.parentNode.nodeType === 11
        }

        function X(e, t, n) {
            t = t || 0;
            if (s.isFunction(t)) return s.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return s.grep(e, function(e, r) {
                return e === t === n
            });
            if (typeof t == "string") {
                var r = s.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (q.test(t)) return s.filter(t, r, !n);
                t = s.filter(t, r)
            }
            return s.grep(e, function(e, r) {
                return s.inArray(e, t) >= 0 === n
            })
        }

        function V(e) {
            var t = $.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n
        }

        function at(e, t) {
            return s.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function ft(e, t) {
            if (t.nodeType !== 1 || !s.hasData(e)) return;
            var n, r, i, o = s._data(e),
                u = s._data(t, o),
                a = o.events;
            if (a) {
                delete u.handle, u.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; r < i; r++) s.event.add(t, n, a[n][r])
            }
            u.data && (u.data = s.extend({}, u.data))
        }

        function lt(e, t) {
            var n;
            if (t.nodeType !== 1) return;
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? t.outerHTML = e.outerHTML : n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(s.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached")
        }

        function ct(e) {
            return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
        }

        function ht(e) {
            if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
        }

        function pt(e) {
            var t = (e.nodeName || "").toLowerCase();
            t === "input" ? ht(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && s.grep(e.getElementsByTagName("input"), ht)
        }

        function dt(e) {
            var t = n.createElement("div");
            return ut.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
        }

        function kt(e, t, n) {
            var r = t === "width" ? e.offsetWidth : e.offsetHeight,
                i = t === "width" ? 1 : 0,
                o = 4;
            if (r > 0) {
                if (n !== "border")
                    for (; i < o; i += 2) n || (r -= parseFloat(s.css(e, "padding" + xt[i])) || 0), n === "margin" ? r += parseFloat(s.css(e, n + xt[i])) || 0 : r -= parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0;
                return r + "px"
            }
            r = Tt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (bt.test(r)) return r;
            r = parseFloat(r) || 0;
            if (n)
                for (; i < o; i += 2) r += parseFloat(s.css(e, "padding" + xt[i])) || 0, n !== "padding" && (r += parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0), n === "margin" && (r += parseFloat(s.css(e, n + xt[i])) || 0);
            return r + "px"
        }

        function Qt(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                if (s.isFunction(n)) {
                    var r = t.toLowerCase().split(qt),
                        i = 0,
                        o = r.length,
                        u, a, f;
                    for (; i < o; i++) u = r[i], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), a = e[u] = e[u] || [], a[f ? "unshift" : "push"](n)
                }
            }
        }

        function Gt(e, n, r, i, s, o) {
            s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
            var u = e[s],
                a = 0,
                f = u ? u.length : 0,
                l = e === Wt,
                c;
            for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = Gt(e, n, r, i, c, o)));
            return (l || !c) && !o["*"] && (c = Gt(e, n, r, i, "*", o)), c
        }

        function Yt(e, n) {
            var r, i, o = s.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            i && s.extend(!0, e, i)
        }

        function Zt(e, t, n, r) {
            if (s.isArray(t)) s.each(t, function(t, i) {
                n || At.test(e) ? r(e, i) : Zt(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
            else if (!n && s.type(t) === "object")
                for (var i in t) Zt(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }

        function en(e, n, r) {
            var i = e.contents,
                s = e.dataTypes,
                o = e.responseFields,
                u, a, f, l;
            for (a in o) a in r && (n[o[a]] = r[a]);
            while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
            if (u)
                for (a in i)
                    if (i[a] && i[a].test(u)) {
                        s.unshift(a);
                        break
                    }
            if (s[0] in r) f = s[0];
            else {
                for (a in r) {
                    if (!s[0] || e.converters[a + " " + s[0]]) {
                        f = a;
                        break
                    }
                    l || (l = a)
                }
                f = f || l
            }
            if (f) return f !== s[0] && s.unshift(f), r[f]
        }

        function tn(e, n) {
            e.dataFilter && (n = e.dataFilter(n, e.dataType));
            var r = e.dataTypes,
                i = {},
                o, u, a = r.length,
                f, l = r[0],
                c, h, p, d, v;
            for (o = 1; o < a; o++) {
                if (o === 1)
                    for (u in e.converters) typeof u == "string" && (i[u.toLowerCase()] = e.converters[u]);
                c = l, l = r[o];
                if (l === "*") l = c;
                else if (c !== "*" && c !== l) {
                    h = c + " " + l, p = i[h] || i["* " + l];
                    if (!p) {
                        v = t;
                        for (d in i) {
                            f = d.split(" ");
                            if (f[0] === c || f[0] === "*") {
                                v = i[f[1] + " " + l];
                                if (v) {
                                    d = i[d], d === !0 ? p = v : v === !0 && (p = d);
                                    break
                                }
                            }
                        }
                    }!p && !v && s.error("No conversion from " + h.replace(" ", " to ")), p !== !0 && (n = p ? p(n) : v(d(n)))
                }
            }
            return n
        }

        function an() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function fn() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function yn() {
            return setTimeout(bn, 0), gn = s.now()
        }

        function bn() {
            gn = t
        }

        function wn(e, t) {
            var n = {};
            return s.each(mn.concat.apply([], mn.slice(0, t)), function() {
                n[this] = e
            }), n
        }

        function En(e) {
            if (!ln[e]) {
                var t = n.body,
                    r = s("<" + e + ">").appendTo(t),
                    i = r.css("display");
                r.remove();
                if (i === "none" || i === "") {
                    cn || (cn = n.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0), t.appendChild(cn);
                    if (!hn || !cn.createElement) hn = (cn.contentWindow || cn.contentDocument).document, hn.write((s.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), hn.close();
                    r = hn.createElement(e), hn.body.appendChild(r), i = s.css(r, "display"), t.removeChild(cn)
                }
                ln[e] = i
            }
            return ln[e]
        }

        function Nn(e) {
            return s.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n = e.document,
            r = e.navigator,
            i = e.location,
            s = function() {
                function H() {
                    if (i.isReady) return;
                    try {
                        n.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(H, 1);
                        return
                    }
                    i.ready()
                }
                var i = function(e, t) {
                        return new i.fn.init(e, t, u)
                    },
                    s = e.jQuery,
                    o = e.$,
                    u, a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    f = /\S/,
                    l = /^\s+/,
                    c = /\s+$/,
                    h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    p = /^[\],:{}\s]*$/,
                    d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    m = /(?:^|:|,)(?:\s*\[)+/g,
                    g = /(webkit)[ \/]([\w.]+)/,
                    y = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    b = /(msie) ([\w.]+)/,
                    w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    E = /-([a-z]|[0-9])/ig,
                    S = /^-ms-/,
                    x = function(e, t) {
                        return (t + "").toUpperCase()
                    },
                    T = r.userAgent,
                    N, C, k, L = Object.prototype.toString,
                    A = Object.prototype.hasOwnProperty,
                    O = Array.prototype.push,
                    M = Array.prototype.slice,
                    _ = String.prototype.trim,
                    D = Array.prototype.indexOf,
                    P = {};
                return i.fn = i.prototype = {
                    constructor: i,
                    init: function(e, r, s) {
                        var o, u, f, l;
                        if (!e) return this;
                        if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                        if (e === "body" && !r && n.body) return this.context = n, this[0] = n.body, this.selector = e, this.length = 1, this;
                        if (typeof e == "string") {
                            e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? o = [null, e, null] : o = a.exec(e);
                            if (o && (o[1] || !r)) {
                                if (o[1]) return r = r instanceof i ? r[0] : r, l = r ? r.ownerDocument || r : n, f = h.exec(e), f ? i.isPlainObject(r) ? (e = [n.createElement(f[1])], i.fn.attr.call(e, r, !0)) : e = [l.createElement(f[1])] : (f = i.buildFragment([o[1]], [l]), e = (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes), i.merge(this, e);
                                u = n.getElementById(o[2]);
                                if (u && u.parentNode) {
                                    if (u.id !== o[2]) return s.find(e);
                                    this.length = 1, this[0] = u
                                }
                                return this.context = n, this.selector = e, this
                            }
                            return !r || r.jquery ? (r || s).find(e) : this.constructor(r).find(e)
                        }
                        return i.isFunction(e) ? s.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), i.makeArray(e, this))
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return M.call(this, 0)
                    },
                    get: function(e) {
                        return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                    },
                    pushStack: function(e, t, n) {
                        var r = this.constructor();
                        return i.isArray(e) ? O.apply(r, e) : i.merge(r, e), r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                    },
                    each: function(e, t) {
                        return i.each(this, e, t)
                    },
                    ready: function(e) {
                        return i.bindReady(), C.add(e), this
                    },
                    eq: function(e) {
                        return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(M.apply(this, arguments), "slice", M.call(arguments).join(","))
                    },
                    map: function(e) {
                        return this.pushStack(i.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: O,
                    sort: [].sort,
                    splice: [].splice
                }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
                    var e, n, r, s, o, u, a = arguments[0] || {},
                        f = 1,
                        l = arguments.length,
                        c = !1;
                    typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !i.isFunction(a) && (a = {}), l === f && (a = this, --f);
                    for (; f < l; f++)
                        if ((e = arguments[f]) != null)
                            for (n in e) {
                                r = a[n], s = e[n];
                                if (a === s) continue;
                                c && s && (i.isPlainObject(s) || (o = i.isArray(s))) ? (o ? (o = !1, u = r && i.isArray(r) ? r : []) : u = r && i.isPlainObject(r) ? r : {}, a[n] = i.extend(c, u, s)) : s !== t && (a[n] = s)
                            }
                        return a
                }, i.extend({
                    noConflict: function(t) {
                        return e.$ === i && (e.$ = o), t && e.jQuery === i && (e.jQuery = s), i
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? i.readyWait++ : i.ready(!0)
                    },
                    ready: function(e) {
                        if (e === !0 && !--i.readyWait || e !== !0 && !i.isReady) {
                            if (!n.body) return setTimeout(i.ready, 1);
                            i.isReady = !0;
                            if (e !== !0 && --i.readyWait > 0) return;
                            C.fireWith(n, [i]), i.fn.trigger && i(n).trigger("ready").off("ready")
                        }
                    },
                    bindReady: function() {
                        if (C) return;
                        C = i.Callbacks("once memory");
                        if (n.readyState === "complete") return setTimeout(i.ready, 1);
                        if (n.addEventListener) n.addEventListener("DOMContentLoaded", k, !1), e.addEventListener("load", i.ready, !1);
                        else if (n.attachEvent) {
                            n.attachEvent("onreadystatechange", k), e.attachEvent("onload", i.ready);
                            var t = !1;
                            try {
                                t = e.frameElement == null
                            } catch (r) {}
                            n.documentElement.doScroll && t && H()
                        }
                    },
                    isFunction: function(e) {
                        return i.type(e) === "function"
                    },
                    isArray: Array.isArray || function(e) {
                        return i.type(e) === "array"
                    },
                    isWindow: function(e) {
                        return e != null && e == e.window
                    },
                    isNumeric: function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    type: function(e) {
                        return e == null ? String(e) : P[L.call(e)] || "object"
                    },
                    isPlainObject: function(e) {
                        if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e)) return !1;
                        try {
                            if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (n) {
                            return !1
                        }
                        var r;
                        for (r in e);
                        return r === t || A.call(e, r)
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    },
                    error: function(e) {
                        throw new Error(e)
                    },
                    parseJSON: function(t) {
                        if (typeof t != "string" || !t) return null;
                        t = i.trim(t);
                        if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                        if (p.test(t.replace(d, "@").replace(v, "]").replace(m, ""))) return (new Function("return " + t))();
                        i.error("Invalid JSON: " + t)
                    },
                    parseXML: function(n) {
                        if (typeof n != "string" || !n) return null;
                        var r, s;
                        try {
                            e.DOMParser ? (s = new DOMParser, r = s.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                        } catch (o) {
                            r = t
                        }
                        return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), r
                    },
                    noop: function() {},
                    globalEval: function(t) {
                        t && f.test(t) && (e.execScript || function(t) {
                            e.eval.call(e, t)
                        })(t)
                    },
                    camelCase: function(e) {
                        return e.replace(S, "ms-").replace(E, x)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                    },
                    each: function(e, n, r) {
                        var s, o = 0,
                            u = e.length,
                            a = u === t || i.isFunction(e);
                        if (r) {
                            if (a) {
                                for (s in e)
                                    if (n.apply(e[s], r) === !1) break
                            } else
                                for (; o < u;)
                                    if (n.apply(e[o++], r) === !1) break
                        } else if (a) {
                            for (s in e)
                                if (n.call(e[s], s, e[s]) === !1) break
                        } else
                            for (; o < u;)
                                if (n.call(e[o], o, e[o++]) === !1) break; return e
                    },
                    trim: _ ? function(e) {
                        return e == null ? "" : _.call(e)
                    } : function(e) {
                        return e == null ? "" : e.toString().replace(l, "").replace(c, "")
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        if (e != null) {
                            var r = i.type(e);
                            e.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(e) ? O.call(n, e) : i.merge(n, e)
                        }
                        return n
                    },
                    inArray: function(e, t, n) {
                        var r;
                        if (t) {
                            if (D) return D.call(t, e, n);
                            r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                            for (; n < r; n++)
                                if (n in t && t[n] === e) return n
                        }
                        return -1
                    },
                    merge: function(e, n) {
                        var r = e.length,
                            i = 0;
                        if (typeof n.length == "number")
                            for (var s = n.length; i < s; i++) e[r++] = n[i];
                        else
                            while (n[i] !== t) e[r++] = n[i++];
                        return e.length = r, e
                    },
                    grep: function(e, t, n) {
                        var r = [],
                            i;
                        n = !!n;
                        for (var s = 0, o = e.length; s < o; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
                        return r
                    },
                    map: function(e, n, r) {
                        var s, o, u = [],
                            a = 0,
                            f = e.length,
                            l = e instanceof i || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || i.isArray(e));
                        if (l)
                            for (; a < f; a++) s = n(e[a], a, r), s != null && (u[u.length] = s);
                        else
                            for (o in e) s = n(e[o], o, r), s != null && (u[u.length] = s);
                        return u.concat.apply([], u)
                    },
                    guid: 1,
                    proxy: function(e, n) {
                        if (typeof n == "string") {
                            var r = e[n];
                            n = e, e = r
                        }
                        if (!i.isFunction(e)) return t;
                        var s = M.call(arguments, 2),
                            o = function() {
                                return e.apply(n, s.concat(M.call(arguments)))
                            };
                        return o.guid = e.guid = e.guid || o.guid || i.guid++, o
                    },
                    access: function(e, n, r, s, o, u, a) {
                        var f, l = r == null,
                            c = 0,
                            h = e.length;
                        if (r && typeof r == "object") {
                            for (c in r) i.access(e, n, c, r[c], 1, u, s);
                            o = 1
                        } else if (s !== t) {
                            f = a === t && i.isFunction(s), l && (f ? (f = n, n = function(e, t, n) {
                                return f.call(i(e), n)
                            }) : (n.call(e, s), n = null));
                            if (n)
                                for (; c < h; c++) n(e[c], r, f ? s.call(e[c], c, n(e[c], r)) : s, a);
                            o = 1
                        }
                        return o ? e : l ? n.call(e) : h ? n(e[0], r) : u
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(e) {
                        e = e.toLowerCase();
                        var t = g.exec(e) || y.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                        return {
                            browser: t[1] || "",
                            version: t[2] || "0"
                        }
                    },
                    sub: function() {
                        function e(t, n) {
                            return new e.fn.init(t, n)
                        }
                        i.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, s) {
                            return s && s instanceof i && !(s instanceof e) && (s = e(s)), i.fn.init.call(this, r, s, t)
                        }, e.fn.init.prototype = e.fn;
                        var t = e(n);
                        return e
                    },
                    browser: {}
                }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                    P["[object " + t + "]"] = t.toLowerCase()
                }), N = i.uaMatch(T), N.browser && (i.browser[N.browser] = !0, i.browser.version = N.version), i.browser.webkit && (i.browser.safari = !0), f.test(" ") && (l = /^[\s\xA0]+/, c = /[\s\xA0]+$/), u = i(n), n.addEventListener ? k = function() {
                    n.removeEventListener("DOMContentLoaded", k, !1), i.ready()
                } : n.attachEvent && (k = function() {
                    n.readyState === "complete" && (n.detachEvent("onreadystatechange", k), i.ready())
                }), i
            }(),
            o = {};
        s.Callbacks = function(e) {
            e = e ? o[e] || u(e) : {};
            var n = [],
                r = [],
                i, a, f, l, c, h, p = function(t) {
                    var r, i, o, u, a;
                    for (r = 0, i = t.length; r < i; r++) o = t[r], u = s.type(o), u === "array" ? p(o) : u === "function" && (!e.unique || !v.has(o)) && n.push(o)
                },
                d = function(t, s) {
                    s = s || [], i = !e.memory || [t, s], a = !0, f = !0, h = l || 0, l = 0, c = n.length;
                    for (; n && h < c; h++)
                        if (n[h].apply(t, s) === !1 && e.stopOnFalse) {
                            i = !0;
                            break
                        }
                    f = !1, n && (e.once ? i === !0 ? v.disable() : n = [] : r && r.length && (i = r.shift(), v.fireWith(i[0], i[1])))
                },
                v = {
                    add: function() {
                        if (n) {
                            var e = n.length;
                            p(arguments), f ? c = n.length : i && i !== !0 && (l = e, d(i[0], i[1]))
                        }
                        return this
                    },
                    remove: function() {
                        if (n) {
                            var t = arguments,
                                r = 0,
                                i = t.length;
                            for (; r < i; r++)
                                for (var s = 0; s < n.length; s++)
                                    if (t[r] === n[s]) {
                                        f && s <= c && (c--, s <= h && h--), n.splice(s--, 1);
                                        if (e.unique) break
                                    }
                        }
                        return this
                    },
                    has: function(e) {
                        if (n) {
                            var t = 0,
                                r = n.length;
                            for (; t < r; t++)
                                if (e === n[t]) return !0
                        }
                        return !1
                    },
                    empty: function() {
                        return n = [], this
                    },
                    disable: function() {
                        return n = r = i = t, this
                    },
                    disabled: function() {
                        return !n
                    },
                    lock: function() {
                        return r = t, (!i || i === !0) && v.disable(), this
                    },
                    locked: function() {
                        return !r
                    },
                    fireWith: function(t, n) {
                        return r && (f ? e.once || r.push([t, n]) : (!e.once || !i) && d(t, n)), this
                    },
                    fire: function() {
                        return v.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return v
        };
        var a = [].slice;
        s.extend({
            Deferred: function(e) {
                var t = s.Callbacks("once memory"),
                    n = s.Callbacks("once memory"),
                    r = s.Callbacks("memory"),
                    i = "pending",
                    o = {
                        resolve: t,
                        reject: n,
                        notify: r
                    },
                    u = {
                        done: t.add,
                        fail: n.add,
                        progress: r.add,
                        state: function() {
                            return i
                        },
                        isResolved: t.fired,
                        isRejected: n.fired,
                        then: function(e, t, n) {
                            return a.done(e).fail(t).progress(n), this
                        },
                        always: function() {
                            return a.done.apply(a, arguments).fail.apply(a, arguments), this
                        },
                        pipe: function(e, t, n) {
                            return s.Deferred(function(r) {
                                s.each({
                                    done: [e, "resolve"],
                                    fail: [t, "reject"],
                                    progress: [n, "notify"]
                                }, function(e, t) {
                                    var n = t[0],
                                        i = t[1],
                                        o;
                                    s.isFunction(n) ? a[e](function() {
                                        o = n.apply(this, arguments), o && s.isFunction(o.promise) ? o.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === a ? r : this, [o])
                                    }) : a[e](r[i])
                                })
                            }).promise()
                        },
                        promise: function(e) {
                            if (e == null) e = u;
                            else
                                for (var t in u) e[t] = u[t];
                            return e
                        }
                    },
                    a = u.promise({}),
                    f;
                for (f in o) a[f] = o[f].fire, a[f + "With"] = o[f].fireWith;
                return a.done(function() {
                    i = "resolved"
                }, n.disable, r.lock).fail(function() {
                    i = "rejected"
                }, t.disable, r.lock), e && e.call(a, a), a
            },
            when: function(e) {
                function c(e) {
                    return function(n) {
                        t[e] = arguments.length > 1 ? a.call(arguments, 0) : n, --o || f.resolveWith(f, t)
                    }
                }

                function h(e) {
                    return function(t) {
                        i[e] = arguments.length > 1 ? a.call(arguments, 0) : t, f.notifyWith(l, i)
                    }
                }
                var t = a.call(arguments, 0),
                    n = 0,
                    r = t.length,
                    i = new Array(r),
                    o = r,
                    u = r,
                    f = r <= 1 && e && s.isFunction(e.promise) ? e : s.Deferred(),
                    l = f.promise();
                if (r > 1) {
                    for (; n < r; n++) t[n] && t[n].promise && s.isFunction(t[n].promise) ? t[n].promise().then(c(n), f.reject, h(n)) : --o;
                    o || f.resolveWith(f, t)
                } else f !== e && f.resolveWith(f, r ? [e] : []);
                return l
            }
        }), s.support = function() {
            var t, r, i, o, u, a, f, l, c, h, p, d, v = n.createElement("div"),
                m = n.documentElement;
            v.setAttribute("className", "t"), v.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", r = v.getElementsByTagName("*"), i = v.getElementsByTagName("a")[0];
            if (!r || !r.length || !i) return {};
            o = n.createElement("select"), u = o.appendChild(n.createElement("option")), a = v.getElementsByTagName("input")[0], t = {
                leadingWhitespace: v.firstChild.nodeType === 3,
                tbody: !v.getElementsByTagName("tbody").length,
                htmlSerialize: !!v.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: i.getAttribute("href") === "/a",
                opacity: /^0.55/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: a.value === "on",
                optSelected: u.selected,
                getSetAttribute: v.className !== "t",
                enctype: !!n.createElement("form").enctype,
                html5Clone: n.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            }, s.boxModel = t.boxModel = n.compatMode === "CSS1Compat", a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !u.disabled;
            try {
                delete v.test
            } catch (g) {
                t.deleteExpando = !1
            }!v.addEventListener && v.attachEvent && v.fireEvent && (v.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), v.cloneNode(!0).fireEvent("onclick")), a = n.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = a.value === "t", a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), v.appendChild(a), f = n.createDocumentFragment(), f.appendChild(v.lastChild), t.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, f.removeChild(a), f.appendChild(v);
            if (v.attachEvent)
                for (p in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) h = "on" + p, d = h in v, d || (v.setAttribute(h, "return;"), d = typeof v[h] == "function"), t[p + "Bubbles"] = d;
            return f.removeChild(v), f = o = u = v = a = null, s(function() {
                var r, i, o, u, a, f, c, h, p, m, g, y, b, w = n.getElementsByTagName("body")[0];
                if (!w) return;
                h = 1, b = "padding:0;margin:0;border:", g = "position:absolute;top:0;left:0;width:1px;height:1px;", y = b + "0;visibility:hidden;", p = "style='" + g + b + "5px solid #000;", m = "<div " + p + "display:block;'><div style='" + b + "0;display:block;overflow:hidden;'></div></div>" + "<table " + p + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", r = n.createElement("div"), r.style.cssText = y + "width:0;height:0;position:static;top:0;margin-top:" + h + "px", w.insertBefore(r, w.firstChild), v = n.createElement("div"), r.appendChild(v), v.innerHTML = "<table><tr><td style='" + b + "0;display:none'></td><td>t</td></tr></table>", l = v.getElementsByTagName("td"), d = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = d && l[0].offsetHeight === 0, e.getComputedStyle && (v.innerHTML = "", c = n.createElement("div"), c.style.width = "0", c.style.marginRight = "0", v.style.width = "2px", v.appendChild(c), t.reliableMarginRight = (parseInt((e.getComputedStyle(c, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0) === 0), typeof v.style.zoom != "undefined" && (v.innerHTML = "", v.style.width = v.style.padding = "1px", v.style.border = 0, v.style.overflow = "hidden", v.style.display = "inline", v.style.zoom = 1, t.inlineBlockNeedsLayout = v.offsetWidth === 3, v.style.display = "block", v.style.overflow = "visible", v.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = v.offsetWidth !== 3), v.style.cssText = g + y, v.innerHTML = m, i = v.firstChild, o = i.firstChild, a = i.nextSibling.firstChild.firstChild, f = {
                    doesNotAddBorder: o.offsetTop !== 5,
                    doesAddBorderForTableAndCells: a.offsetTop === 5
                }, o.style.position = "fixed", o.style.top = "20px", f.fixedPosition = o.offsetTop === 20 || o.offsetTop === 15, o.style.position = o.style.top = "", i.style.overflow = "hidden", i.style.position = "relative", f.subtractsBorderForOverflowNotVisible = o.offsetTop === -5, f.doesNotIncludeMarginInBodyOffset = w.offsetTop !== h, e.getComputedStyle && (v.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(v, null) || {
                    marginTop: 0
                }).marginTop !== "1%"), typeof r.style.zoom != "undefined" && (r.style.zoom = 1), w.removeChild(r), c = v = r = null, s.extend(t, f)
            }), t
        }();
        var f = /^(?:\{.*\}|\[.*\])$/,
            l = /([A-Z])/g;
        s.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (s.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? s.cache[e[s.expando]] : e[s.expando], !!e && !h(e)
            },
            data: function(e, n, r, i) {
                if (!s.acceptData(e)) return;
                var o, u, a, f = s.expando,
                    l = typeof n == "string",
                    c = e.nodeType,
                    h = c ? s.cache : e,
                    p = c ? e[f] : e[f] && f,
                    d = n === "events";
                if ((!p || !h[p] || !d && !i && !h[p].data) && l && r === t) return;
                p || (c ? e[f] = p = ++s.uuid : p = f), h[p] || (h[p] = {}, c || (h[p].toJSON = s.noop));
                if (typeof n == "object" || typeof n == "function") i ? h[p] = s.extend(h[p], n) : h[p].data = s.extend(h[p].data, n);
                return o = u = h[p], i || (u.data || (u.data = {}), u = u.data), r !== t && (u[s.camelCase(n)] = r), d && !u[n] ? o.events : (l ? (a = u[n], a == null && (a = u[s.camelCase(n)])) : a = u, a)
            },
            removeData: function(e, t, n) {
                if (!s.acceptData(e)) return;
                var r, i, o, u = s.expando,
                    a = e.nodeType,
                    f = a ? s.cache : e,
                    l = a ? e[u] : u;
                if (!f[l]) return;
                if (t) {
                    r = n ? f[l] : f[l].data;
                    if (r) {
                        s.isArray(t) || (t in r ? t = [t] : (t = s.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                        if (!(n ? h : s.isEmptyObject)(r)) return
                    }
                }
                if (!n) {
                    delete f[l].data;
                    if (!h(f[l])) return
                }
                s.support.deleteExpando || !f.setInterval ? delete f[l] : f[l] = null, a && (s.support.deleteExpando ? delete e[u] : e.removeAttribute ? e.removeAttribute(u) : e[u] = null)
            },
            _data: function(e, t, n) {
                return s.data(e, t, n, !0)
            },
            acceptData: function(e) {
                if (e.nodeName) {
                    var t = s.noData[e.nodeName.toLowerCase()];
                    if (t) return t !== !0 && e.getAttribute("classid") === t
                }
                return !0
            }
        }), s.fn.extend({
            data: function(e, n) {
                var r, i, o, u, a, f = this[0],
                    l = 0,
                    h = null;
                if (e === t) {
                    if (this.length) {
                        h = s.data(f);
                        if (f.nodeType === 1 && !s._data(f, "parsedAttrs")) {
                            o = f.attributes;
                            for (a = o.length; l < a; l++) u = o[l].name, u.indexOf("data-") === 0 && (u = s.camelCase(u.substring(5)), c(f, u, h[u]));
                            s._data(f, "parsedAttrs", !0)
                        }
                    }
                    return h
                }
                return typeof e == "object" ? this.each(function() {
                    s.data(this, e)
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", s.access(this, function(n) {
                    if (n === t) return h = this.triggerHandler("getData" + i, [r[0]]), h === t && f && (h = s.data(f, e), h = c(f, e, h)), h === t && r[1] ? this.data(r[0]) : h;
                    r[1] = n, this.each(function() {
                        var t = s(this);
                        t.triggerHandler("setData" + i, r), s.data(this, e, n), t.triggerHandler("changeData" + i, r)
                    })
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function(e) {
                return this.each(function() {
                    s.removeData(this, e)
                })
            }
        }), s.extend({
            _mark: function(e, t) {
                e && (t = (t || "fx") + "mark", s._data(e, t, (s._data(e, t) || 0) + 1))
            },
            _unmark: function(e, t, n) {
                e !== !0 && (n = t, t = e, e = !1);
                if (t) {
                    n = n || "fx";
                    var r = n + "mark",
                        i = e ? 0 : (s._data(t, r) || 1) - 1;
                    i ? s._data(t, r, i) : (s.removeData(t, r, !0), p(t, n, "mark"))
                }
            },
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = s._data(e, t), n && (!r || s.isArray(n) ? r = s._data(e, t, s.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = s.queue(e, t),
                    r = n.shift(),
                    i = {};
                r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), s._data(e, t + ".run", i), r.call(e, function() {
                    s.dequeue(e, t)
                }, i)), n.length || (s.removeData(e, t + "queue " + t + ".run", !0), p(e, t, "queue"))
            }
        }), s.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? s.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = s.queue(this, e, n);
                    e === "fx" && t[0] !== "inprogress" && s.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    s.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = s.fx ? s.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                function h() {
                    --u || r.resolveWith(i, [i])
                }
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                var r = s.Deferred(),
                    i = this,
                    o = i.length,
                    u = 1,
                    a = e + "defer",
                    f = e + "queue",
                    l = e + "mark",
                    c;
                while (o--)
                    if (c = s.data(i[o], a, t, !0) || (s.data(i[o], f, t, !0) || s.data(i[o], l, t, !0)) && s.data(i[o], a, s.Callbacks("once memory"), !0)) u++, c.add(h);
                return h(), r.promise(n)
            }
        });
        var d = /[\n\t\r]/g,
            v = /\s+/,
            m = /\r/g,
            g = /^(?:button|input)$/i,
            y = /^(?:button|input|object|select|textarea)$/i,
            b = /^a(?:rea)?$/i,
            w = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            E = s.support.getSetAttribute,
            S, x, T;
        s.fn.extend({
            attr: function(e, t) {
                return s.access(this, s.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    s.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return s.access(this, s.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = s.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, u, a;
                if (s.isFunction(e)) return this.each(function(t) {
                    s(this).addClass(e.call(this, t, this.className))
                });
                if (e && typeof e == "string") {
                    t = e.split(v);
                    for (n = 0, r = this.length; n < r; n++) {
                        i = this[n];
                        if (i.nodeType === 1)
                            if (!i.className && t.length === 1) i.className = e;
                            else {
                                o = " " + i.className + " ";
                                for (u = 0, a = t.length; u < a; u++) ~o.indexOf(" " + t[u] + " ") || (o += t[u] + " ");
                                i.className = s.trim(o)
                            }
                    }
                }
                return this
            },
            removeClass: function(e) {
                var n, r, i, o, u, a, f;
                if (s.isFunction(e)) return this.each(function(t) {
                    s(this).removeClass(e.call(this, t, this.className))
                });
                if (e && typeof e == "string" || e === t) {
                    n = (e || "").split(v);
                    for (r = 0, i = this.length; r < i; r++) {
                        o = this[r];
                        if (o.nodeType === 1 && o.className)
                            if (e) {
                                u = (" " + o.className + " ").replace(d, " ");
                                for (a = 0, f = n.length; a < f; a++) u = u.replace(" " + n[a] + " ", " ");
                                o.className = s.trim(u)
                            } else o.className = ""
                    }
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = typeof t == "boolean";
                return s.isFunction(e) ? this.each(function(n) {
                    s(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if (n === "string") {
                        var i, o = 0,
                            u = s(this),
                            a = t,
                            f = e.split(v);
                        while (i = f[o++]) a = r ? a : !u.hasClass(i), u[a ? "addClass" : "removeClass"](i)
                    } else if (n === "undefined" || n === "boolean") this.className && s._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : s._data(this, "__className__") || ""
                })
            },
            hasClass: function(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(d, " ").indexOf(t) > -1) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0];
                if (!arguments.length) {
                    if (o) return n = s.valHooks[o.type] || s.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, typeof r == "string" ? r.replace(m, "") : r == null ? "" : r);
                    return
                }
                return i = s.isFunction(e), this.each(function(r) {
                    var o = s(this),
                        u;
                    if (this.nodeType !== 1) return;
                    i ? u = e.call(this, r, o.val()) : u = e, u == null ? u = "" : typeof u == "number" ? u += "" : s.isArray(u) && (u = s.map(u, function(e) {
                        return e == null ? "" : e + ""
                    })), n = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, u, "value") === t) this.value = u
                })
            }
        }), s.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i, o = e.selectedIndex,
                            u = [],
                            a = e.options,
                            f = e.type === "select-one";
                        if (o < 0) return null;
                        n = f ? o : 0, r = f ? o + 1 : a.length;
                        for (; n < r; n++) {
                            i = a[n];
                            if (i.selected && (s.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !s.nodeName(i.parentNode, "optgroup"))) {
                                t = s(i).val();
                                if (f) return t;
                                u.push(t)
                            }
                        }
                        return f && !u.length && a.length ? s(a[o]).val() : u
                    },
                    set: function(e, t) {
                        var n = s.makeArray(t);
                        return s(e).find("option").each(function() {
                            this.selected = s.inArray(s(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(e, n, r, i) {
                var o, u, a, f = e.nodeType;
                if (!e || f === 3 || f === 8 || f === 2) return;
                if (i && n in s.attrFn) return s(e)[n](r);
                if (typeof e.getAttribute == "undefined") return s.prop(e, n, r);
                a = f !== 1 || !s.isXMLDoc(e), a && (n = n.toLowerCase(), u = s.attrHooks[n] || (w.test(n) ? x : S));
                if (r !== t) {
                    if (r === null) {
                        s.removeAttr(e, n);
                        return
                    }
                    return u && "set" in u && a && (o = u.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r)
                }
                return u && "get" in u && a && (o = u.get(e, n)) !== null ? o : (o = e.getAttribute(n), o === null ? t : o)
            },
            removeAttr: function(e, t) {
                var n, r, i, o, u, a = 0;
                if (t && e.nodeType === 1) {
                    r = t.toLowerCase().split(v), o = r.length;
                    for (; a < o; a++) i = r[a], i && (n = s.propFix[i] || i, u = w.test(i), u || s.attr(e, i, ""), e.removeAttribute(E ? i : n), u && n in e && (e[n] = !1))
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (g.test(e.nodeName) && e.parentNode) s.error("type property can't be changed");
                        else if (!s.support.radioValue && t === "radio" && s.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return S && s.nodeName(e, "button") ? S.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        if (S && s.nodeName(e, "button")) return S.set(e, t, n);
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, u, a = e.nodeType;
                if (!e || a === 3 || a === 8 || a === 2) return;
                return u = a !== 1 || !s.isXMLDoc(e), u && (n = s.propFix[n] || n, o = s.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && (i = o.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : y.test(e.nodeName) || b.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), s.attrHooks.tabindex = s.propHooks.tabIndex, x = {
            get: function(e, n) {
                var r, i = s.prop(e, n);
                return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                var r;
                return t === !1 ? s.removeAttr(e, n) : (r = s.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, E || (T = {
            name: !0,
            id: !0,
            coords: !0
        }, S = s.valHooks.button = {
            get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n), r && (T[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
            },
            set: function(e, t, r) {
                var i = e.getAttributeNode(r);
                return i || (i = n.createAttribute(r), e.setAttributeNode(i)), i.nodeValue = t + ""
            }
        }, s.attrHooks.tabindex.set = S.set, s.each(["width", "height"], function(e, t) {
            s.attrHooks[t] = s.extend(s.attrHooks[t], {
                set: function(e, n) {
                    if (n === "") return e.setAttribute(t, "auto"), n
                }
            })
        }), s.attrHooks.contenteditable = {
            get: S.get,
            set: function(e, t, n) {
                t === "" && (t = "false"), S.set(e, t, n)
            }
        }), s.support.hrefNormalized || s.each(["href", "src", "width", "height"], function(e, n) {
            s.attrHooks[n] = s.extend(s.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return r === null ? t : r
                }
            })
        }), s.support.style || (s.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = "" + t
            }
        }), s.support.optSelected || (s.propHooks.selected = s.extend(s.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), s.support.enctype || (s.propFix.enctype = "encoding"), s.support.checkOn || s.each(["radio", "checkbox"], function() {
            s.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        }), s.each(["radio", "checkbox"], function() {
            s.valHooks[this] = s.extend(s.valHooks[this], {
                set: function(e, t) {
                    if (s.isArray(t)) return e.checked = s.inArray(s(e).val(), t) >= 0
                }
            })
        });
        var N = /^(?:textarea|input|select)$/i,
            C = /^([^\.]*)?(?:\.(.+))?$/,
            k = /(?:^|\s)hover(\.\S+)?\b/,
            L = /^key/,
            A = /^(?:mouse|contextmenu)|click/,
            O = /^(?:focusinfocus|focusoutblur)$/,
            M = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
            _ = function(e) {
                var t = M.exec(e);
                return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
            },
            D = function(e, t) {
                var n = e.attributes || {};
                return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
            },
            P = function(e) {
                return s.event.special.hover ? e : e.replace(k, "mouseenter$1 mouseleave$1")
            };
        s.event = {
                add: function(e, n, r, i, o) {
                    var u, a, f, l, c, h, p, d, v, m, g, y;
                    if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(u = s._data(e))) return;
                    r.handler && (v = r, r = v.handler, o = v.selector), r.guid || (r.guid = s.guid++), f = u.events, f || (u.events = f = {}), a = u.handle, a || (u.handle = a = function(e) {
                        return typeof s == "undefined" || !!e && s.event.triggered === e.type ? t : s.event.dispatch.apply(a.elem, arguments)
                    }, a.elem = e), n = s.trim(P(n)).split(" ");
                    for (l = 0; l < n.length; l++) {
                        c = C.exec(n[l]) || [], h = c[1], p = (c[2] || "").split(".").sort(), y = s.event.special[h] || {}, h = (o ? y.delegateType : y.bindType) || h, y = s.event.special[h] || {}, d = s.extend({
                            type: h,
                            origType: c[1],
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: o,
                            quick: o && _(o),
                            namespace: p.join(".")
                        }, v), g = f[h];
                        if (!g) {
                            g = f[h] = [], g.delegateCount = 0;
                            if (!y.setup || y.setup.call(e, i, p, a) === !1) e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a)
                        }
                        y.add && (y.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), s.event.global[h] = !0
                    }
                    e = null
                },
                global: {},
                remove: function(e, t, n, r, i) {
                    var o = s.hasData(e) && s._data(e),
                        u, a, f, l, c, h, p, d, v, m, g, y;
                    if (!o || !(d = o.events)) return;
                    t = s.trim(P(t || "")).split(" ");
                    for (u = 0; u < t.length; u++) {
                        a = C.exec(t[u]) || [], f = l = a[1], c = a[2];
                        if (!f) {
                            for (f in d) s.event.remove(e, f + t[u], n, r, !0);
                            continue
                        }
                        v = s.event.special[f] || {}, f = (r ? v.delegateType : v.bindType) || f, g = d[f] || [], h = g.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (p = 0; p < g.length; p++) y = g[p], (i || l === y.origType) && (!n || n.guid === y.guid) && (!c || c.test(y.namespace)) && (!r || r === y.selector || r === "**" && y.selector) && (g.splice(p--, 1), y.selector && g.delegateCount--, v.remove && v.remove.call(e, y));
                        g.length === 0 && h !== g.length && ((!v.teardown || v.teardown.call(e, c) === !1) && s.removeEvent(e, f, o.handle), delete d[f])
                    }
                    s.isEmptyObject(d) && (m = o.handle, m && (m.elem = null), s.removeData(e, ["events", "handle"], !0))
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(n, r, i, o) {
                    if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                        var u = n.type || n,
                            a = [],
                            f, l, c, h, p, d, v, m, g, y;
                        if (O.test(u + s.event.triggered)) return;
                        u.indexOf("!") >= 0 && (u = u.slice(0, -1), l = !0), u.indexOf(".") >= 0 && (a = u.split("."), u = a.shift(), a.sort());
                        if ((!i || s.event.customEvent[u]) && !s.event.global[u]) return;
                        n = typeof n == "object" ? n[s.expando] ? n : new s.Event(u, n) : new s.Event(u), n.type = u, n.isTrigger = !0, n.exclusive = l, n.namespace = a.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, d = u.indexOf(":") < 0 ? "on" + u : "";
                        if (!i) {
                            f = s.cache;
                            for (c in f) f[c].events && f[c].events[u] && s.event.trigger(n, r, f[c].handle.elem, !0);
                            return
                        }
                        n.result = t, n.target || (n.target = i), r = r != null ? s.makeArray(r) : [], r.unshift(n), v = s.event.special[u] || {};
                        if (v.trigger && v.trigger.apply(i, r) === !1) return;
                        g = [
                            [i, v.bindType || u]
                        ];
                        if (!o && !v.noBubble && !s.isWindow(i)) {
                            y = v.delegateType || u, h = O.test(y + u) ? i : i.parentNode, p = null;
                            for (; h; h = h.parentNode) g.push([h, y]), p = h;
                            p && p === i.ownerDocument && g.push([p.defaultView || p.parentWindow || e, y])
                        }
                        for (c = 0; c < g.length && !n.isPropagationStopped(); c++) h = g[c][0], n.type = g[c][1], m = (s._data(h, "events") || {})[n.type] && s._data(h, "handle"), m && m.apply(h, r), m = d && h[d], m && s.acceptData(h) && m.apply(h, r) === !1 && n.preventDefault();
                        return n.type = u, !o && !n.isDefaultPrevented() && (!v._default || v._default.apply(i.ownerDocument, r) === !1) && (u !== "click" || !s.nodeName(i, "a")) && s.acceptData(i) && d && i[u] && (u !== "focus" && u !== "blur" || n.target.offsetWidth !== 0) && !s.isWindow(i) && (p = i[d], p && (i[d] = null), s.event.triggered = u, i[u](), s.event.triggered = t, p && (i[d] = p)), n.result
                    }
                    return
                },
                dispatch: function(n) {
                    n = s.event.fix(n || e.event);
                    var r = (s._data(this, "events") || {})[n.type] || [],
                        i = r.delegateCount,
                        o = [].slice.call(arguments, 0),
                        u = !n.exclusive && !n.namespace,
                        a = s.event.special[n.type] || {},
                        f = [],
                        l, c, h, p, d, v, m, g, y, b, w;
                    o[0] = n, n.delegateTarget = this;
                    if (a.preDispatch && a.preDispatch.call(this, n) === !1) return;
                    if (i && (!n.button || n.type !== "click")) {
                        p = s(this), p.context = this.ownerDocument || this;
                        for (h = n.target; h != this; h = h.parentNode || this)
                            if (h.disabled !== !0) {
                                v = {}, g = [], p[0] = h;
                                for (l = 0; l < i; l++) y = r[l], b = y.selector, v[b] === t && (v[b] = y.quick ? D(h, y.quick) : p.is(b)), v[b] && g.push(y);
                                g.length && f.push({
                                    elem: h,
                                    matches: g
                                })
                            }
                    }
                    r.length > i && f.push({
                        elem: this,
                        matches: r.slice(i)
                    });
                    for (l = 0; l < f.length && !n.isPropagationStopped(); l++) {
                        m = f[l], n.currentTarget = m.elem;
                        for (c = 0; c < m.matches.length && !n.isImmediatePropagationStopped(); c++) {
                            y = m.matches[c];
                            if (u || !n.namespace && !y.namespace || n.namespace_re && n.namespace_re.test(y.namespace)) n.data = y.data, n.handleObj = y, d = ((s.event.special[y.origType] || {}).handle || y.handler).apply(m.elem, o), d !== t && (n.result = d, d === !1 && (n.preventDefault(), n.stopPropagation()))
                        }
                    }
                    return a.postDispatch && a.postDispatch.call(this, n), n.result
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, r) {
                        var i, s, o, u = r.button,
                            a = r.fromElement;
                        return e.pageX == null && r.clientX != null && (i = e.target.ownerDocument || n, s = i.documentElement, o = i.body, e.pageX = r.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = r.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? r.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[s.expando]) return e;
                    var r, i, o = e,
                        u = s.event.fixHooks[e.type] || {},
                        a = u.props ? this.props.concat(u.props) : this.props;
                    e = s.Event(o);
                    for (r = a.length; r;) i = a[--r], e[i] = o[i];
                    return e.target || (e.target = o.srcElement || n), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), u.filter ? u.filter(e, o) : e
                },
                special: {
                    ready: {
                        setup: s.bindReady
                    },
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(e, t, n) {
                            s.isWindow(this) && (this.onbeforeunload = n)
                        },
                        teardown: function(e, t) {
                            this.onbeforeunload === t && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = s.extend(new s.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? s.event.trigger(i, null, t) : s.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, s.event.handle = s.event.dispatch, s.removeEvent = n.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                e.detachEvent && e.detachEvent("on" + t, n)
            }, s.Event = function(e, t) {
                if (!(this instanceof s.Event)) return new s.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? B : H) : this.type = e, t && s.extend(this, t), this.timeStamp = e && e.timeStamp || s.now(), this[s.expando] = !0
            }, s.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = B;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function() {
                    this.isPropagationStopped = B;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = B, this.stopPropagation()
                },
                isDefaultPrevented: H,
                isPropagationStopped: H,
                isImmediatePropagationStopped: H
            }, s.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                s.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n = this,
                            r = e.relatedTarget,
                            i = e.handleObj,
                            o = i.selector,
                            u;
                        if (!r || r !== n && !s.contains(n, r)) e.type = i.origType, u = i.handler.apply(this, arguments), e.type = t;
                        return u
                    }
                }
            }), s.support.submitBubbles || (s.event.special.submit = {
                setup: function() {
                    if (s.nodeName(this, "form")) return !1;
                    s.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = s.nodeName(n, "input") || s.nodeName(n, "button") ? n.form : t;
                        r && !r._submit_attached && (s.event.add(r, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), r._submit_attached = !0)
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && s.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    if (s.nodeName(this, "form")) return !1;
                    s.event.remove(this, "._submit")
                }
            }), s.support.changeBubbles || (s.event.special.change = {
                setup: function() {
                    if (N.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") s.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), s.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1, s.event.simulate("change", this, e, !0))
                        });
                        return !1
                    }
                    s.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        N.test(t.nodeName) && !t._change_attached && (s.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && s.event.simulate("change", this.parentNode, e, !0)
                        }), t._change_attached = !0)
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return s.event.remove(this, "._change"), N.test(this.nodeName)
                }
            }), s.support.focusinBubbles || s.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var r = 0,
                    i = function(e) {
                        s.event.simulate(t, e.target, s.event.fix(e), !0)
                    };
                s.event.special[t] = {
                    setup: function() {
                        r++ === 0 && n.addEventListener(e, i, !0)
                    },
                    teardown: function() {
                        --r === 0 && n.removeEventListener(e, i, !0)
                    }
                }
            }), s.fn.extend({
                on: function(e, n, r, i, o) {
                    var u, a;
                    if (typeof e == "object") {
                        typeof n != "string" && (r = r || n, n = t);
                        for (a in e) this.on(a, n, r, e[a], o);
                        return this
                    }
                    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                    if (i === !1) i = H;
                    else if (!i) return this;
                    return o === 1 && (u = i, i = function(e) {
                        return s().off(e), u.apply(this, arguments)
                    }, i.guid = u.guid || (u.guid = s.guid++)), this.each(function() {
                        s.event.add(this, e, i, r, n)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    if (e && e.preventDefault && e.handleObj) {
                        var i = e.handleObj;
                        return s(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
                    }
                    if (typeof e == "object") {
                        for (var o in e) this.off(o, n, e[o]);
                        return this
                    }
                    if (n === !1 || typeof n == "function") r = n, n = t;
                    return r === !1 && (r = H), this.each(function() {
                        s.event.remove(this, e, r, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                live: function(e, t, n) {
                    return s(this.context).on(e, this.selector, t, n), this
                },
                die: function(e, t) {
                    return s(this.context).off(e, this.selector || "**", t), this
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        s.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    if (this[0]) return s.event.trigger(e, t, this[0], !0)
                },
                toggle: function(e) {
                    var t = arguments,
                        n = e.guid || s.guid++,
                        r = 0,
                        i = function(n) {
                            var i = (s._data(this, "lastToggle" + e.guid) || 0) % r;
                            return s._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                        };
                    i.guid = n;
                    while (r < t.length) t[r++].guid = n;
                    return this.click(i)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), s.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                s.fn[t] = function(e, n) {
                    return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, s.attrFn && (s.attrFn[t] = !0), L.test(t) && (s.event.fixHooks[t] = s.event.keyHooks), A.test(t) && (s.event.fixHooks[t] = s.event.mouseHooks)
            }),
            function() {
                function S(e, t, n, i, s, o) {
                    for (var u = 0, a = i.length; u < a; u++) {
                        var f = i[u];
                        if (f) {
                            var l = !1;
                            f = f[e];
                            while (f) {
                                if (f[r] === n) {
                                    l = i[f.sizset];
                                    break
                                }
                                f.nodeType === 1 && !o && (f[r] = n, f.sizset = u);
                                if (f.nodeName.toLowerCase() === t) {
                                    l = f;
                                    break
                                }
                                f = f[e]
                            }
                            i[u] = l
                        }
                    }
                }

                function x(e, t, n, i, s, o) {
                    for (var u = 0, a = i.length; u < a; u++) {
                        var f = i[u];
                        if (f) {
                            var l = !1;
                            f = f[e];
                            while (f) {
                                if (f[r] === n) {
                                    l = i[f.sizset];
                                    break
                                }
                                if (f.nodeType === 1) {
                                    o || (f[r] = n, f.sizset = u);
                                    if (typeof t != "string") {
                                        if (f === t) {
                                            l = !0;
                                            break
                                        }
                                    } else if (h.filter(t, [f]).length > 0) {
                                        l = f;
                                        break
                                    }
                                }
                                f = f[e]
                            }
                            i[u] = l
                        }
                    }
                }
                var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    r = "sizcache" + (Math.random() + "").replace(".", ""),
                    i = 0,
                    o = Object.prototype.toString,
                    u = !1,
                    a = !0,
                    f = /\\/g,
                    l = /\r\n/g,
                    c = /\W/;
                [0, 0].sort(function() {
                    return a = !1, 0
                });
                var h = function(t, r, i, s) {
                    i = i || [], r = r || n;
                    var u = r;
                    if (r.nodeType !== 1 && r.nodeType !== 9) return [];
                    if (!t || typeof t != "string") return i;
                    var a, f, l, c, p, m, g, b, w = !0,
                        E = h.isXML(r),
                        S = [],
                        x = t;
                    do {
                        e.exec(""), a = e.exec(x);
                        if (a) {
                            x = a[3], S.push(a[1]);
                            if (a[2]) {
                                c = a[3];
                                break
                            }
                        }
                    } while (a);
                    if (S.length > 1 && v.exec(t))
                        if (S.length === 2 && d.relative[S[0]]) f = T(S[0] + S[1], r, s);
                        else {
                            f = d.relative[S[0]] ? [r] : h(S.shift(), r);
                            while (S.length) t = S.shift(), d.relative[t] && (t += S.shift()), f = T(t, f, s)
                        } else {
                        !s && S.length > 1 && r.nodeType === 9 && !E && d.match.ID.test(S[0]) && !d.match.ID.test(S[S.length - 1]) && (p = h.find(S.shift(), r, E), r = p.expr ? h.filter(p.expr, p.set)[0] : p.set[0]);
                        if (r) {
                            p = s ? {
                                expr: S.pop(),
                                set: y(s)
                            } : h.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !r.parentNode ? r : r.parentNode, E), f = p.expr ? h.filter(p.expr, p.set) : p.set, S.length > 0 ? l = y(f) : w = !1;
                            while (S.length) m = S.pop(), g = m, d.relative[m] ? g = S.pop() : m = "", g == null && (g = r), d.relative[m](l, g, E)
                        } else l = S = []
                    }
                    l || (l = f), l || h.error(m || t);
                    if (o.call(l) === "[object Array]")
                        if (!w) i.push.apply(i, l);
                        else if (r && r.nodeType === 1)
                        for (b = 0; l[b] != null; b++) l[b] && (l[b] === !0 || l[b].nodeType === 1 && h.contains(r, l[b])) && i.push(f[b]);
                    else
                        for (b = 0; l[b] != null; b++) l[b] && l[b].nodeType === 1 && i.push(f[b]);
                    else y(l, i);
                    return c && (h(c, u, i, s), h.uniqueSort(i)), i
                };
                h.uniqueSort = function(e) {
                    if (w) {
                        u = a, e.sort(w);
                        if (u)
                            for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
                    }
                    return e
                }, h.matches = function(e, t) {
                    return h(e, null, null, t)
                }, h.matchesSelector = function(e, t) {
                    return h(t, null, null, [e]).length > 0
                }, h.find = function(e, t, n) {
                    var r, i, s, o, u, a;
                    if (!e) return [];
                    for (i = 0, s = d.order.length; i < s; i++) {
                        u = d.order[i];
                        if (o = d.leftMatch[u].exec(e)) {
                            a = o[1], o.splice(1, 1);
                            if (a.substr(a.length - 1) !== "\\") {
                                o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                                if (r != null) {
                                    e = e.replace(d.match[u], "");
                                    break
                                }
                            }
                        }
                    }
                    return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                        set: r,
                        expr: e
                    }
                }, h.filter = function(e, n, r, i) {
                    var s, o, u, a, f, l, c, p, v, m = e,
                        g = [],
                        y = n,
                        b = n && n[0] && h.isXML(n[0]);
                    while (e && n.length) {
                        for (u in d.filter)
                            if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                                l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                                if (c.substr(c.length - 1) === "\\") continue;
                                y === g && (g = []);
                                if (d.preFilter[u]) {
                                    s = d.preFilter[u](s, y, r, g, i, b);
                                    if (!s) o = a = !0;
                                    else if (s === !0) continue
                                }
                                if (s)
                                    for (p = 0;
                                        (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                                if (a !== t) {
                                    r || (y = g), e = e.replace(d.match[u], "");
                                    if (!o) return [];
                                    break
                                }
                            }
                        if (e === m) {
                            if (o != null) break;
                            h.error(e)
                        }
                        m = e
                    }
                    return y
                }, h.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                };
                var p = h.getText = function(e) {
                        var t, n, r = e.nodeType,
                            i = "";
                        if (r) {
                            if (r === 1 || r === 9 || r === 11) {
                                if (typeof e.textContent == "string") return e.textContent;
                                if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                                for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                            } else if (r === 3 || r === 4) return e.nodeValue
                        } else
                            for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
                        return i
                    },
                    d = h.selectors = {
                        order: ["ID", "NAME", "TAG"],
                        match: {
                            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                        },
                        leftMatch: {},
                        attrMap: {
                            "class": "className",
                            "for": "htmlFor"
                        },
                        attrHandle: {
                            href: function(e) {
                                return e.getAttribute("href")
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                        relative: {
                            "+": function(e, t) {
                                var n = typeof t == "string",
                                    r = n && !c.test(t),
                                    i = n && !r;
                                r && (t = t.toLowerCase());
                                for (var s = 0, o = e.length, u; s < o; s++)
                                    if (u = e[s]) {
                                        while ((u = u.previousSibling) && u.nodeType !== 1);
                                        e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                                    }
                                i && h.filter(t, e, !0)
                            },
                            ">": function(e, t) {
                                var n, r = typeof t == "string",
                                    i = 0,
                                    s = e.length;
                                if (r && !c.test(t)) {
                                    t = t.toLowerCase();
                                    for (; i < s; i++) {
                                        n = e[i];
                                        if (n) {
                                            var o = n.parentNode;
                                            e[i] = o.nodeName.toLowerCase() === t ? o : !1
                                        }
                                    }
                                } else {
                                    for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                                    r && h.filter(t, e, !0)
                                }
                            },
                            "": function(e, t, n) {
                                var r, s = i++,
                                    o = x;
                                typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S), o("parentNode", t, s, e, r, n)
                            },
                            "~": function(e, t, n) {
                                var r, s = i++,
                                    o = x;
                                typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S), o("previousSibling", t, s, e, r, n)
                            }
                        },
                        find: {
                            ID: function(e, t, n) {
                                if (typeof t.getElementById != "undefined" && !n) {
                                    var r = t.getElementById(e[1]);
                                    return r && r.parentNode ? [r] : []
                                }
                            },
                            NAME: function(e, t) {
                                if (typeof t.getElementsByName != "undefined") {
                                    var n = [],
                                        r = t.getElementsByName(e[1]);
                                    for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                    return n.length === 0 ? null : n
                                }
                            },
                            TAG: function(e, t) {
                                if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                            }
                        },
                        preFilter: {
                            CLASS: function(e, t, n, r, i, s) {
                                e = " " + e[1].replace(f, "") + " ";
                                if (s) return e;
                                for (var o = 0, u;
                                    (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                                return !1
                            },
                            ID: function(e) {
                                return e[1].replace(f, "")
                            },
                            TAG: function(e, t) {
                                return e[1].replace(f, "").toLowerCase()
                            },
                            CHILD: function(e) {
                                if (e[1] === "nth") {
                                    e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                    var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                    e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                                } else e[2] && h.error(e[0]);
                                return e[0] = i++, e
                            },
                            ATTR: function(e, t, n, r, i, s) {
                                var o = e[1] = e[1].replace(f, "");
                                return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                            },
                            PSEUDO: function(t, n, r, i, s) {
                                if (t[1] === "not") {
                                    if (!((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                                        var o = h.filter(t[3], n, r, !0 ^ s);
                                        return r || i.push.apply(i, o), !1
                                    }
                                    t[3] = h(t[3], null, null, n)
                                } else if (d.match.POS.test(t[0]) || d.match.CHILD.test(t[0])) return !0;
                                return t
                            },
                            POS: function(e) {
                                return e.unshift(!0), e
                            }
                        },
                        filters: {
                            enabled: function(e) {
                                return e.disabled === !1 && e.type !== "hidden"
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                return e.checked === !0
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            },
                            parent: function(e) {
                                return !!e.firstChild
                            },
                            empty: function(e) {
                                return !e.firstChild
                            },
                            has: function(e, t, n) {
                                return !!h(n[3], e).length
                            },
                            header: function(e) {
                                return /h\d/i.test(e.nodeName)
                            },
                            text: function(e) {
                                var t = e.getAttribute("type"),
                                    n = e.type;
                                return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                            },
                            radio: function(e) {
                                return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                            },
                            checkbox: function(e) {
                                return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                            },
                            file: function(e) {
                                return e.nodeName.toLowerCase() === "input" && "file" === e.type
                            },
                            password: function(e) {
                                return e.nodeName.toLowerCase() === "input" && "password" === e.type
                            },
                            submit: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return (t === "input" || t === "button") && "submit" === e.type
                            },
                            image: function(e) {
                                return e.nodeName.toLowerCase() === "input" && "image" === e.type
                            },
                            reset: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return (t === "input" || t === "button") && "reset" === e.type
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return t === "input" && "button" === e.type || t === "button"
                            },
                            input: function(e) {
                                return /input|select|textarea|button/i.test(e.nodeName)
                            },
                            focus: function(e) {
                                return e === e.ownerDocument.activeElement
                            }
                        },
                        setFilters: {
                            first: function(e, t) {
                                return t === 0
                            },
                            last: function(e, t, n, r) {
                                return t === r.length - 1
                            },
                            even: function(e, t) {
                                return t % 2 === 0
                            },
                            odd: function(e, t) {
                                return t % 2 === 1
                            },
                            lt: function(e, t, n) {
                                return t < n[3] - 0
                            },
                            gt: function(e, t, n) {
                                return t > n[3] - 0
                            },
                            nth: function(e, t, n) {
                                return n[3] - 0 === t
                            },
                            eq: function(e, t, n) {
                                return n[3] - 0 === t
                            }
                        },
                        filter: {
                            PSEUDO: function(e, t, n, r) {
                                var i = t[1],
                                    s = d.filters[i];
                                if (s) return s(e, n, t, r);
                                if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                                if (i === "not") {
                                    var o = t[3];
                                    for (var u = 0, a = o.length; u < a; u++)
                                        if (o[u] === e) return !1;
                                    return !0
                                }
                                h.error(i)
                            },
                            CHILD: function(e, t) {
                                var n, i, s, o, u, a, f, l = t[1],
                                    c = e;
                                switch (l) {
                                    case "only":
                                    case "first":
                                        while (c = c.previousSibling)
                                            if (c.nodeType === 1) return !1;
                                        if (l === "first") return !0;
                                        c = e;
                                    case "last":
                                        while (c = c.nextSibling)
                                            if (c.nodeType === 1) return !1;
                                        return !0;
                                    case "nth":
                                        n = t[2], i = t[3];
                                        if (n === 1 && i === 0) return !0;
                                        s = t[0], o = e.parentNode;
                                        if (o && (o[r] !== s || !e.nodeIndex)) {
                                            a = 0;
                                            for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                            o[r] = s
                                        }
                                        return f = e.nodeIndex - i, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                                }
                            },
                            ID: function(e, t) {
                                return e.nodeType === 1 && e.getAttribute("id") === t
                            },
                            TAG: function(e, t) {
                                return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t
                            },
                            CLASS: function(e, t) {
                                return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                            },
                            ATTR: function(e, t) {
                                var n = t[1],
                                    r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                                    i = r + "",
                                    s = t[2],
                                    o = t[4];
                                return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                            },
                            POS: function(e, t, n, r) {
                                var i = t[2],
                                    s = d.setFilters[i];
                                if (s) return s(e, n, t, r)
                            }
                        }
                    },
                    v = d.match.POS,
                    m = function(e, t) {
                        return "\\" + (t - 0 + 1)
                    };
                for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
                d.match.globalPOS = v;
                var y = function(e, t) {
                    return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
                };
                try {
                    Array.prototype.slice.call(n.documentElement.childNodes, 0)[0].nodeType
                } catch (b) {
                    y = function(e, t) {
                        var n = 0,
                            r = t || [];
                        if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                        else if (typeof e.length == "number")
                            for (var i = e.length; n < i; n++) r.push(e[n]);
                        else
                            for (; e[n]; n++) r.push(e[n]);
                        return r
                    }
                }
                var w, E;
                n.documentElement.compareDocumentPosition ? w = function(e, t) {
                        return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
                    } : (w = function(e, t) {
                        if (e === t) return u = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                        var n, r, i = [],
                            s = [],
                            o = e.parentNode,
                            a = t.parentNode,
                            f = o;
                        if (o === a) return E(e, t);
                        if (!o) return -1;
                        if (!a) return 1;
                        while (f) i.unshift(f), f = f.parentNode;
                        f = a;
                        while (f) s.unshift(f), f = f.parentNode;
                        n = i.length, r = s.length;
                        for (var l = 0; l < n && l < r; l++)
                            if (i[l] !== s[l]) return E(i[l], s[l]);
                        return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
                    }, E = function(e, t, n) {
                        if (e === t) return n;
                        var r = e.nextSibling;
                        while (r) {
                            if (r === t) return -1;
                            r = r.nextSibling
                        }
                        return 1
                    }),
                    function() {
                        var e = n.createElement("div"),
                            r = "script" + (new Date).getTime(),
                            i = n.documentElement;
                        e.innerHTML = "<a name='" + r + "'/>", i.insertBefore(e, i.firstChild), n.getElementById(r) && (d.find.ID = function(e, n, r) {
                            if (typeof n.getElementById != "undefined" && !r) {
                                var i = n.getElementById(e[1]);
                                return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                            }
                        }, d.filter.ID = function(e, t) {
                            var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                            return e.nodeType === 1 && n && n.nodeValue === t
                        }), i.removeChild(e), i = e = null
                    }(),
                    function() {
                        var e = n.createElement("div");
                        e.appendChild(n.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
                            var n = t.getElementsByTagName(e[1]);
                            if (e[1] === "*") {
                                var r = [];
                                for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                                n = r
                            }
                            return n
                        }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
                            return e.getAttribute("href", 2)
                        }), e = null
                    }(), n.querySelectorAll && function() {
                        var e = h,
                            t = n.createElement("div"),
                            r = "__sizzle__";
                        t.innerHTML = "<p class='TEST'></p>";
                        if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) return;
                        h = function(t, i, s, o) {
                            i = i || n;
                            if (!o && !h.isXML(i)) {
                                var u = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                if (u && (i.nodeType === 1 || i.nodeType === 9)) {
                                    if (u[1]) return y(i.getElementsByTagName(t), s);
                                    if (u[2] && d.find.CLASS && i.getElementsByClassName) return y(i.getElementsByClassName(u[2]), s)
                                }
                                if (i.nodeType === 9) {
                                    if (t === "body" && i.body) return y([i.body], s);
                                    if (u && u[3]) {
                                        var a = i.getElementById(u[3]);
                                        if (!a || !a.parentNode) return y([], s);
                                        if (a.id === u[3]) return y([a], s)
                                    }
                                    try {
                                        return y(i.querySelectorAll(t), s)
                                    } catch (f) {}
                                } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                                    var l = i,
                                        c = i.getAttribute("id"),
                                        p = c || r,
                                        v = i.parentNode,
                                        m = /^\s*[+~]/.test(t);
                                    c ? p = p.replace(/'/g, "\\$&") : i.setAttribute("id", p), m && v && (i = i.parentNode);
                                    try {
                                        if (!m || v) return y(i.querySelectorAll("[id='" + p + "'] " + t), s)
                                    } catch (g) {} finally {
                                        c || l.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, i, s, o)
                        };
                        for (var i in e) h[i] = e[i];
                        t = null
                    }(),
                    function() {
                        var e = n.documentElement,
                            t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                        if (t) {
                            var r = !t.call(n.createElement("div"), "div"),
                                i = !1;
                            try {
                                t.call(n.documentElement, "[test!='']:sizzle")
                            } catch (s) {
                                i = !0
                            }
                            h.matchesSelector = function(e, n) {
                                n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                                if (!h.isXML(e)) try {
                                    if (i || !d.match.PSEUDO.test(n) && !/!=/.test(n)) {
                                        var s = t.call(e, n);
                                        if (s || !r || e.document && e.document.nodeType !== 11) return s
                                    }
                                } catch (o) {}
                                return h(n, null, null, [e]).length > 0
                            }
                        }
                    }(),
                    function() {
                        var e = n.createElement("div");
                        e.innerHTML = "<div class='test e'></div><div class='test'></div>";
                        if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) return;
                        e.lastChild.className = "e";
                        if (e.getElementsByClassName("e").length === 1) return;
                        d.order.splice(1, 0, "CLASS"), d.find.CLASS = function(e, t, n) {
                            if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
                        }, e = null
                    }(), n.documentElement.contains ? h.contains = function(e, t) {
                        return e !== t && (e.contains ? e.contains(t) : !0)
                    } : n.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
                        return !!(e.compareDocumentPosition(t) & 16)
                    } : h.contains = function() {
                        return !1
                    }, h.isXML = function(e) {
                        var t = (e ? e.ownerDocument || e : 0).documentElement;
                        return t ? t.nodeName !== "HTML" : !1
                    };
                var T = function(e, t, n) {
                    var r, i = [],
                        s = "",
                        o = t.nodeType ? [t] : t;
                    while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
                    e = d.relative[e] ? e + "*" : e;
                    for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
                    return h.filter(s, i)
                };
                h.attr = s.attr, h.selectors.attrMap = {}, s.find = h, s.expr = h.selectors, s.expr[":"] = s.expr.filters, s.unique = h.uniqueSort, s.text = h.getText, s.isXMLDoc = h.isXML, s.contains = h.contains
            }();
        var j = /Until$/,
            F = /^(?:parents|prevUntil|prevAll)/,
            I = /,/,
            q = /^.[^:#\[\.,]*$/,
            R = Array.prototype.slice,
            U = s.expr.match.globalPOS,
            z = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        s.fn.extend({
            find: function(e) {
                var t = this,
                    n, r;
                if (typeof e != "string") return s(e).filter(function() {
                    for (n = 0, r = t.length; n < r; n++)
                        if (s.contains(t[n], this)) return !0
                });
                var i = this.pushStack("", "find", e),
                    o, u, a;
                for (n = 0, r = this.length; n < r; n++) {
                    o = i.length, s.find(e, this[n], i);
                    if (n > 0)
                        for (u = o; u < i.length; u++)
                            for (a = 0; a < o; a++)
                                if (i[a] === i[u]) {
                                    i.splice(u--, 1);
                                    break
                                }
                }
                return i
            },
            has: function(e) {
                var t = s(e);
                return this.filter(function() {
                    for (var e = 0, n = t.length; e < n; e++)
                        if (s.contains(this, t[e])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(X(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(X(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && (typeof e == "string" ? U.test(e) ? s(e, this.context).index(this[0]) >= 0 : s.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n = [],
                    r, i, o = this[0];
                if (s.isArray(e)) {
                    var u = 1;
                    while (o && o.ownerDocument && o !== t) {
                        for (r = 0; r < e.length; r++) s(o).is(e[r]) && n.push({
                            selector: e[r],
                            elem: o,
                            level: u
                        });
                        o = o.parentNode, u++
                    }
                    return n
                }
                var a = U.test(e) || typeof e != "string" ? s(e, t || this.context) : 0;
                for (r = 0, i = this.length; r < i; r++) {
                    o = this[r];
                    while (o) {
                        if (a ? a.index(o) > -1 : s.find.matchesSelector(o, e)) {
                            n.push(o);
                            break
                        }
                        o = o.parentNode;
                        if (!o || !o.ownerDocument || o === t || o.nodeType === 11) break
                    }
                }
                return n = n.length > 1 ? s.unique(n) : n, this.pushStack(n, "closest", e)
            },
            index: function(e) {
                return e ? typeof e == "string" ? s.inArray(this[0], s(e)) : s.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                var n = typeof e == "string" ? s(e, t) : s.makeArray(e && e.nodeType ? [e] : e),
                    r = s.merge(this.get(), n);
                return this.pushStack(W(n[0]) || W(r[0]) ? r : s.unique(r))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }), s.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return s.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return s.dir(e, "parentNode", n)
            },
            next: function(e) {
                return s.nth(e, 2, "nextSibling")
            },
            prev: function(e) {
                return s.nth(e, 2, "previousSibling")
            },
            nextAll: function(e) {
                return s.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return s.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return s.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return s.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return s.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return s.sibling(e.firstChild)
            },
            contents: function(e) {
                return s.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : s.makeArray(e.childNodes)
            }
        }, function(e, t) {
            s.fn[e] = function(n, r) {
                var i = s.map(this, t, n);
                return j.test(e) || (r = n), r && typeof r == "string" && (i = s.filter(r, i)), i = this.length > 1 && !z[e] ? s.unique(i) : i, (this.length > 1 || I.test(r)) && F.test(e) && (i = i.reverse()), this.pushStack(i, e, R.call(arguments).join(","))
            }
        }), s.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? s.find.matchesSelector(t[0], e) ? [t[0]] : [] : s.find.matches(e, t)
            },
            dir: function(e, n, r) {
                var i = [],
                    o = e[n];
                while (o && o.nodeType !== 9 && (r === t || o.nodeType !== 1 || !s(o).is(r))) o.nodeType === 1 && i.push(o), o = o[n];
                return i
            },
            nth: function(e, t, n, r) {
                t = t || 1;
                var i = 0;
                for (; e; e = e[n])
                    if (e.nodeType === 1 && ++i === t) break;
                return e
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var $ = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            J = / jQuery\d+="(?:\d+|null)"/g,
            K = /^\s+/,
            Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            G = /<([\w:]+)/,
            Y = /<tbody/i,
            Z = /<|&#?\w+;/,
            et = /<(?:script|style)/i,
            tt = /<(?:script|object|embed|option|style)/i,
            nt = new RegExp("<(?:" + $ + ")[\\s/>]", "i"),
            rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /\/(java|ecma)script/i,
            st = /^\s*<!(?:\[CDATA\[|\-\-)/,
            ot = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            ut = V(n);
        ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, s.support.htmlSerialize || (ot._default = [1, "div<div>", "</div>"]), s.fn.extend({
            text: function(e) {
                return s.access(this, function(e) {
                    return e === t ? s.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (s.isFunction(e)) return this.each(function(t) {
                    s(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = s(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return s.isFunction(e) ? this.each(function(t) {
                    s(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = s(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = s.isFunction(e);
                return this.each(function(n) {
                    s(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    s.nodeName(this, "body") || s(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    this.nodeType === 1 && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    this.nodeType === 1 && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = s.clean(arguments);
                    return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    return e.push.apply(e, s.clean(arguments)), e
                }
            },
            remove: function(e, t) {
                for (var n = 0, r;
                    (r = this[n]) != null; n++)
                    if (!e || s.filter(e, [r]).length) !t && r.nodeType === 1 && (s.cleanData(r.getElementsByTagName("*")), s.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
                return this
            },
            empty: function() {
                for (var e = 0, t;
                    (t = this[e]) != null; e++) {
                    t.nodeType === 1 && s.cleanData(t.getElementsByTagName("*"));
                    while (t.firstChild) t.removeChild(t.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return s.clone(this, e, t)
                })
            },
            html: function(e) {
                return s.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(J, "") : null;
                    if (typeof e == "string" && !et.test(e) && (s.support.leadingWhitespace || !K.test(e)) && !ot[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Q, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (s.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return this[0] && this[0].parentNode ? s.isFunction(e) ? this.each(function(t) {
                    var n = s(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = s(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    s(this).remove(), t ? s(t).before(e) : s(n).append(e)
                })) : this.length ? this.pushStack(s(s.isFunction(e) ? e() : e), "replaceWith", e) : this
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                var i, o, u, a, f = e[0],
                    l = [];
                if (!s.support.checkClone && arguments.length === 3 && typeof f == "string" && rt.test(f)) return this.each(function() {
                    s(this).domManip(e, n, r, !0)
                });
                if (s.isFunction(f)) return this.each(function(i) {
                    var o = s(this);
                    e[0] = f.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                });
                if (this[0]) {
                    a = f && f.parentNode, s.support.parentNode && a && a.nodeType === 11 && a.childNodes.length === this.length ? i = {
                        fragment: a
                    } : i = s.buildFragment(e, this, l), u = i.fragment, u.childNodes.length === 1 ? o = u = u.firstChild : o = u.firstChild;
                    if (o) {
                        n = n && s.nodeName(o, "tr");
                        for (var c = 0, h = this.length, p = h - 1; c < h; c++) r.call(n ? at(this[c], o) : this[c], i.cacheable || h > 1 && c < p ? s.clone(u, !0, !0) : u)
                    }
                    l.length && s.each(l, function(e, t) {
                        t.src ? s.ajax({
                            type: "GET",
                            global: !1,
                            url: t.src,
                            async: !1,
                            dataType: "script"
                        }) : s.globalEval((t.text || t.textContent || t.innerHTML || "").replace(st, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), s.buildFragment = function(e, t, r) {
            var i, o, u, a, f = e[0];
            return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = n), e.length === 1 && typeof f == "string" && f.length < 512 && a === n && f.charAt(0) === "<" && !tt.test(f) && (s.support.checkClone || !rt.test(f)) && (s.support.html5Clone || !nt.test(f)) && (o = !0, u = s.fragments[f], u && u !== 1 && (i = u)), i || (i = a.createDocumentFragment(), s.clean(e, a, i, r)), o && (s.fragments[f] = u ? i : 1), {
                fragment: i,
                cacheable: o
            }
        }, s.fragments = {}, s.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            s.fn[e] = function(n) {
                var r = [],
                    i = s(n),
                    o = this.length === 1 && this[0].parentNode;
                if (o && o.nodeType === 11 && o.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
                for (var u = 0, a = i.length; u < a; u++) {
                    var f = (u > 0 ? this.clone(!0) : this).get();
                    s(i[u])[t](f), r = r.concat(f)
                }
                return this.pushStack(r, e, i.selector)
            }
        }), s.extend({
            clone: function(e, t, n) {
                var r, i, o, u = s.support.html5Clone || s.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : dt(e);
                if ((!s.support.noCloneEvent || !s.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !s.isXMLDoc(e)) {
                    lt(e, u), r = ct(e), i = ct(u);
                    for (o = 0; r[o]; ++o) i[o] && lt(r[o], i[o])
                }
                if (t) {
                    ft(e, u);
                    if (n) {
                        r = ct(e), i = ct(u);
                        for (o = 0; r[o]; ++o) ft(r[o], i[o])
                    }
                }
                return r = i = null, u
            },
            clean: function(e, t, r, i) {
                var o, u, a, f = [];
                t = t || n, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || n);
                for (var l = 0, c;
                    (c = e[l]) != null; l++) {
                    typeof c == "number" && (c += "");
                    if (!c) continue;
                    if (typeof c == "string")
                        if (!Z.test(c)) c = t.createTextNode(c);
                        else {
                            c = c.replace(Q, "<$1></$2>");
                            var h = (G.exec(c) || ["", ""])[1].toLowerCase(),
                                p = ot[h] || ot._default,
                                d = p[0],
                                v = t.createElement("div"),
                                m = ut.childNodes,
                                g;
                            t === n ? ut.appendChild(v) : V(t).appendChild(v), v.innerHTML = p[1] + c + p[2];
                            while (d--) v = v.lastChild;
                            if (!s.support.tbody) {
                                var y = Y.test(c),
                                    b = h === "table" && !y ? v.firstChild && v.firstChild.childNodes : p[1] === "<table>" && !y ? v.childNodes : [];
                                for (a = b.length - 1; a >= 0; --a) s.nodeName(b[a], "tbody") && !b[a].childNodes.length && b[a].parentNode.removeChild(b[a])
                            }!s.support.leadingWhitespace && K.test(c) && v.insertBefore(t.createTextNode(K.exec(c)[0]), v.firstChild), c = v.childNodes, v && (v.parentNode.removeChild(v), m.length > 0 && (g = m[m.length - 1], g && g.parentNode && g.parentNode.removeChild(g)))
                        }
                    var w;
                    if (!s.support.appendChecked)
                        if (c[0] && typeof(w = c.length) == "number")
                            for (a = 0; a < w; a++) pt(c[a]);
                        else pt(c);
                    c.nodeType ? f.push(c) : f = s.merge(f, c)
                }
                if (r) {
                    o = function(e) {
                        return !e.type || it.test(e.type)
                    };
                    for (l = 0; f[l]; l++) {
                        u = f[l];
                        if (i && s.nodeName(u, "script") && (!u.type || it.test(u.type))) i.push(u.parentNode ? u.parentNode.removeChild(u) : u);
                        else {
                            if (u.nodeType === 1) {
                                var E = s.grep(u.getElementsByTagName("script"), o);
                                f.splice.apply(f, [l + 1, 0].concat(E))
                            }
                            r.appendChild(u)
                        }
                    }
                }
                return f
            },
            cleanData: function(e) {
                var t, n, r = s.cache,
                    i = s.event.special,
                    o = s.support.deleteExpando;
                for (var u = 0, a;
                    (a = e[u]) != null; u++) {
                    if (a.nodeName && s.noData[a.nodeName.toLowerCase()]) continue;
                    n = a[s.expando];
                    if (n) {
                        t = r[n];
                        if (t && t.events) {
                            for (var f in t.events) i[f] ? s.event.remove(a, f) : s.removeEvent(a, f, t.handle);
                            t.handle && (t.handle.elem = null)
                        }
                        o ? delete a[s.expando] : a.removeAttribute && a.removeAttribute(s.expando), delete r[n]
                    }
                }
            }
        });
        var vt = /alpha\([^)]*\)/i,
            mt = /opacity=([^)]*)/,
            gt = /([A-Z]|^ms)/g,
            yt = /^[\-+]?(?:\d*\.)?\d+$/i,
            bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
            wt = /^([\-+])=([\-+.\de]+)/,
            Et = /^margin/,
            St = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xt = ["Top", "Right", "Bottom", "Left"],
            Tt, Nt, Ct;
        s.fn.css = function(e, n) {
            return s.access(this, function(e, n, r) {
                return r !== t ? s.style(e, n, r) : s.css(e, n)
            }, e, n, arguments.length > 1)
        }, s.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Tt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                        return e.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": s.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var o, u, a = s.camelCase(n),
                    f = e.style,
                    l = s.cssHooks[a];
                n = s.cssProps[a] || a;
                if (r === t) return l && "get" in l && (o = l.get(e, !1, i)) !== t ? o : f[n];
                u = typeof r, u === "string" && (o = wt.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(s.css(e, n)), u = "number");
                if (r == null || u === "number" && isNaN(r)) return;
                u === "number" && !s.cssNumber[a] && (r += "px");
                if (!l || !("set" in l) || (r = l.set(e, r)) !== t) try {
                    f[n] = r
                } catch (c) {}
            },
            css: function(e, n, r) {
                var i, o;
                n = s.camelCase(n), o = s.cssHooks[n], n = s.cssProps[n] || n, n === "cssFloat" && (n = "float");
                if (o && "get" in o && (i = o.get(e, !0, r)) !== t) return i;
                if (Tt) return Tt(e, n)
            },
            swap: function(e, t, n) {
                var r = {},
                    i, s;
                for (s in t) r[s] = e.style[s], e.style[s] = t[s];
                i = n.call(e);
                for (s in t) e.style[s] = r[s];
                return i
            }
        }), s.curCSS = s.css, n.defaultView && n.defaultView.getComputedStyle && (Nt = function(e, t) {
            var n, r, i, o, u = e.style;
            return t = t.replace(gt, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !s.contains(e.ownerDocument.documentElement, e) && (n = s.style(e, t))), !s.support.pixelMargin && i && Et.test(t) && bt.test(n) && (o = u.width, u.width = n, n = i.width, u.width = o), n
        }), n.documentElement.currentStyle && (Ct = function(e, t) {
            var n, r, i, s = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return s == null && o && (i = o[t]) && (s = i), bt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
        }), Tt = Nt || Ct, s.each(["height", "width"], function(e, t) {
            s.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return e.offsetWidth !== 0 ? kt(e, t, r) : s.swap(e, St, function() {
                        return kt(e, t, r)
                    })
                },
                set: function(e, t) {
                    return yt.test(t) ? t + "px" : t
                }
            }
        }), s.support.opacity || (s.cssHooks.opacity = {
            get: function(e, t) {
                return mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = s.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1;
                if (t >= 1 && s.trim(o.replace(vt, "")) === "") {
                    n.removeAttribute("filter");
                    if (r && !r.filter) return
                }
                n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i
            }
        }), s(function() {
            s.support.reliableMarginRight || (s.cssHooks.marginRight = {
                get: function(e, t) {
                    return s.swap(e, {
                        display: "inline-block"
                    }, function() {
                        return t ? Tt(e, "margin-right") : e.style.marginRight
                    })
                }
            })
        }), s.expr && s.expr.filters && (s.expr.filters.hidden = function(e) {
            var t = e.offsetWidth,
                n = e.offsetHeight;
            return t === 0 && n === 0 || !s.support.reliableHiddenOffsets && (e.style && e.style.display || s.css(e, "display")) === "none"
        }, s.expr.filters.visible = function(e) {
            return !s.expr.filters.hidden(e)
        }), s.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            s.cssHooks[e + t] = {
                expand: function(n) {
                    var r, i = typeof n == "string" ? n.split(" ") : [n],
                        s = {};
                    for (r = 0; r < 4; r++) s[e + xt[r] + t] = i[r] || i[r - 2] || i[0];
                    return s
                }
            }
        });
        var Lt = /%20/g,
            At = /\[\]$/,
            Ot = /\r?\n/g,
            Mt = /#.*$/,
            _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Dt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Pt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Ht = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            jt = /\?/,
            Ft = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            It = /^(?:select|textarea)/i,
            qt = /\s+/,
            Rt = /([?&])_=[^&]*/,
            Ut = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            zt = s.fn.load,
            Wt = {},
            Xt = {},
            Vt, $t, Jt = ["*/"] + ["*"];
        try {
            Vt = i.href
        } catch (Kt) {
            Vt = n.createElement("a"), Vt.href = "", Vt = Vt.href
        }
        $t = Ut.exec(Vt.toLowerCase()) || [], s.fn.extend({
            load: function(e, n, r) {
                if (typeof e != "string" && zt) return zt.apply(this, arguments);
                if (!this.length) return this;
                var i = e.indexOf(" ");
                if (i >= 0) {
                    var o = e.slice(i, e.length);
                    e = e.slice(0, i)
                }
                var u = "GET";
                n && (s.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = s.param(n, s.ajaxSettings.traditional), u = "POST"));
                var a = this;
                return s.ajax({
                    url: e,
                    type: u,
                    dataType: "html",
                    data: n,
                    complete: function(e, t, n) {
                        n = e.responseText, e.isResolved() && (e.done(function(e) {
                            n = e
                        }), a.html(o ? s("<div>").append(n.replace(Ft, "")).find(o) : n)), r && a.each(r, [n, t, e])
                    }
                }), this
            },
            serialize: function() {
                return s.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? s.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || It.test(this.nodeName) || Dt.test(this.type))
                }).map(function(e, t) {
                    var n = s(this).val();
                    return n == null ? null : s.isArray(n) ? s.map(n, function(e, n) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        }), s.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            s.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), s.each(["get", "post"], function(e, n) {
            s[n] = function(e, r, i, o) {
                return s.isFunction(r) && (o = o || i, i = r, r = t), s.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: o
                })
            }
        }), s.extend({
            getScript: function(e, n) {
                return s.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return s.get(e, t, n, "json")
            },
            ajaxSetup: function(e, t) {
                return t ? Yt(e, s.ajaxSettings) : (t = e, e = s.ajaxSettings), Yt(e, t), e
            },
            ajaxSettings: {
                url: Vt,
                isLocal: Pt.test($t[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Jt
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": s.parseJSON,
                    "text xml": s.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Qt(Wt),
            ajaxTransport: Qt(Xt),
            ajax: function(e, n) {
                function S(e, n, c, h) {
                    if (y === 2) return;
                    y = 2, m && clearTimeout(m), v = t, p = h || "", E.readyState = e > 0 ? 4 : 0;
                    var d, g, w, S = n,
                        x = c ? en(r, E, c) : t,
                        T, N;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (r.ifModified) {
                            if (T = E.getResponseHeader("Last-Modified")) s.lastModified[l] = T;
                            if (N = E.getResponseHeader("Etag")) s.etag[l] = N
                        }
                        if (e === 304) S = "notmodified", d = !0;
                        else try {
                            g = tn(r, x), S = "success", d = !0
                        } catch (C) {
                            S = "parsererror", w = C
                        }
                    } else {
                        w = S;
                        if (!S || e) S = "error", e < 0 && (e = 0)
                    }
                    E.status = e, E.statusText = "" + (n || S), d ? u.resolveWith(i, [g, S, E]) : u.rejectWith(i, [E, S, w]), E.statusCode(f), f = t, b && o.trigger("ajax" + (d ? "Success" : "Error"), [E, r, d ? g : w]), a.fireWith(i, [E, S]), b && (o.trigger("ajaxComplete", [E, r]), --s.active || s.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r = s.ajaxSetup({}, n),
                    i = r.context || r,
                    o = i !== r && (i.nodeType || i instanceof s) ? s(i) : s.event,
                    u = s.Deferred(),
                    a = s.Callbacks("once memory"),
                    f = r.statusCode || {},
                    l, c = {},
                    h = {},
                    p, d, v, m, g, y = 0,
                    b, w, E = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!y) {
                                var n = e.toLowerCase();
                                e = h[n] = h[n] || e, c[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return y === 2 ? p : null
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (y === 2) {
                                if (!d) {
                                    d = {};
                                    while (n = _t.exec(p)) d[n[1].toLowerCase()] = n[2]
                                }
                                n = d[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function(e) {
                            return y || (r.mimeType = e), this
                        },
                        abort: function(e) {
                            return e = e || "abort", v && v.abort(e), S(0, e), this
                        }
                    };
                u.promise(E), E.success = E.done, E.error = E.fail, E.complete = a.add, E.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (y < 2)
                            for (t in e) f[t] = [f[t], e[t]];
                        else t = e[E.status], E.then(t, t)
                    }
                    return this
                }, r.url = ((e || r.url) + "").replace(Mt, "").replace(Bt, $t[1] + "//"), r.dataTypes = s.trim(r.dataType || "*").toLowerCase().split(qt), r.crossDomain == null && (g = Ut.exec(r.url.toLowerCase()), r.crossDomain = !(!g || g[1] == $t[1] && g[2] == $t[2] && (g[3] || (g[1] === "http:" ? 80 : 443)) == ($t[3] || ($t[1] === "http:" ? 80 : 443)))), r.data && r.processData && typeof r.data != "string" && (r.data = s.param(r.data, r.traditional)), Gt(Wt, r, n, E);
                if (y === 2) return !1;
                b = r.global, r.type = r.type.toUpperCase(), r.hasContent = !Ht.test(r.type), b && s.active++ === 0 && s.event.trigger("ajaxStart");
                if (!r.hasContent) {
                    r.data && (r.url += (jt.test(r.url) ? "&" : "?") + r.data, delete r.data), l = r.url;
                    if (r.cache === !1) {
                        var x = s.now(),
                            T = r.url.replace(Rt, "$1_=" + x);
                        r.url = T + (T === r.url ? (jt.test(r.url) ? "&" : "?") + "_=" + x : "")
                    }
                }(r.data && r.hasContent && r.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", r.contentType), r.ifModified && (l = l || r.url, s.lastModified[l] && E.setRequestHeader("If-Modified-Since", s.lastModified[l]), s.etag[l] && E.setRequestHeader("If-None-Match", s.etag[l])), E.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + Jt + "; q=0.01" : "") : r.accepts["*"]);
                for (w in r.headers) E.setRequestHeader(w, r.headers[w]);
                if (!r.beforeSend || r.beforeSend.call(i, E, r) !== !1 && y !== 2) {
                    for (w in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) E[w](r[w]);
                    v = Gt(Xt, r, n, E);
                    if (!v) S(-1, "No Transport");
                    else {
                        E.readyState = 1, b && o.trigger("ajaxSend", [E, r]), r.async && r.timeout > 0 && (m = setTimeout(function() {
                            E.abort("timeout")
                        }, r.timeout));
                        try {
                            y = 1, v.send(c, S)
                        } catch (N) {
                            if (!(y < 2)) throw N;
                            S(-1, N)
                        }
                    }
                    return E
                }
                return E.abort(), !1
            },
            param: function(e, n) {
                var r = [],
                    i = function(e, t) {
                        t = s.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                n === t && (n = s.ajaxSettings.traditional);
                if (s.isArray(e) || e.jquery && !s.isPlainObject(e)) s.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (var o in e) Zt(o, e[o], n, i);
                return r.join("&").replace(Lt, "+")
            }
        }), s.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var nn = s.now(),
            rn = /(\=)\?(&|$)|\?\?/i;
        s.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return s.expando + "_" + nn++
            }
        }), s.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
            if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (rn.test(t.url) || i && rn.test(t.data))) {
                var o, u = t.jsonpCallback = s.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    a = e[u],
                    f = t.url,
                    l = t.data,
                    c = "$1" + u + "$2";
                return t.jsonp !== !1 && (f = f.replace(rn, c), t.url === f && (i && (l = l.replace(rn, c)), t.data === l && (f += (/\?/.test(f) ? "&" : "?") + t.jsonp + "=" + u))), t.url = f, t.data = l, e[u] = function(e) {
                    o = [e]
                }, r.always(function() {
                    e[u] = a, o && s.isFunction(a) && e[u](o[0])
                }), t.converters["script json"] = function() {
                    return o || s.error(u + " was not called"), o[0]
                }, t.dataTypes[0] = "json", "script"
            }
        }), s.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return s.globalEval(e), e
                }
            }
        }), s.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), s.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var r, i = n.head || n.getElementsByTagName("head")[0] || n.documentElement;
                return {
                    send: function(s, o) {
                        r = n.createElement("script"), r.async = "async", e.scriptCharset && (r.charset = e.scriptCharset), r.src = e.url, r.onload = r.onreadystatechange = function(e, n) {
                            if (n || !r.readyState || /loaded|complete/.test(r.readyState)) r.onload = r.onreadystatechange = null, i && r.parentNode && i.removeChild(r), r = t, n || o(200, "success")
                        }, i.insertBefore(r, i.firstChild)
                    },
                    abort: function() {
                        r && r.onload(0, 1)
                    }
                }
            }
        });
        var sn = e.ActiveXObject ? function() {
                for (var e in un) un[e](0, 1)
            } : !1,
            on = 0,
            un;
        s.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && an() || fn()
            } : an,
            function(e) {
                s.extend(s.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                })
            }(s.ajaxSettings.xhr()), s.support.ajax && s.ajaxTransport(function(n) {
                if (!n.crossDomain || s.support.cors) {
                    var r;
                    return {
                        send: function(i, o) {
                            var u = n.xhr(),
                                a, f;
                            n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async);
                            if (n.xhrFields)
                                for (f in n.xhrFields) u[f] = n.xhrFields[f];
                            n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (f in i) u.setRequestHeader(f, i[f])
                            } catch (l) {}
                            u.send(n.hasContent && n.data || null), r = function(e, i) {
                                var f, l, c, h, p;
                                try {
                                    if (r && (i || u.readyState === 4)) {
                                        r = t, a && (u.onreadystatechange = s.noop, sn && delete un[a]);
                                        if (i) u.readyState !== 4 && u.abort();
                                        else {
                                            f = u.status, c = u.getAllResponseHeaders(), h = {}, p = u.responseXML, p && p.documentElement && (h.xml = p);
                                            try {
                                                h.text = u.responseText
                                            } catch (e) {}
                                            try {
                                                l = u.statusText
                                            } catch (d) {
                                                l = ""
                                            }!f && n.isLocal && !n.crossDomain ? f = h.text ? 200 : 404 : f === 1223 && (f = 204)
                                        }
                                    }
                                } catch (v) {
                                    i || o(-1, v)
                                }
                                h && o(f, l, h, c)
                            }, !n.async || u.readyState === 4 ? r() : (a = ++on, sn && (un || (un = {}, s(e).unload(sn)), un[a] = r), u.onreadystatechange = r)
                        },
                        abort: function() {
                            r && r(0, 1)
                        }
                    }
                }
            });
        var ln = {},
            cn, hn, pn = /^(?:toggle|show|hide)$/,
            dn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            vn, mn = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ],
            gn;
        s.fn.extend({
            show: function(e, t, n) {
                var r, i;
                if (e || e === 0) return this.animate(wn("show", 3), e, t, n);
                for (var o = 0, u = this.length; o < u; o++) r = this[o], r.style && (i = r.style.display, !s._data(r, "olddisplay") && i === "none" && (i = r.style.display = ""), (i === "" && s.css(r, "display") === "none" || !s.contains(r.ownerDocument.documentElement, r)) && s._data(r, "olddisplay", En(r.nodeName)));
                for (o = 0; o < u; o++) {
                    r = this[o];
                    if (r.style) {
                        i = r.style.display;
                        if (i === "" || i === "none") r.style.display = s._data(r, "olddisplay") || ""
                    }
                }
                return this
            },
            hide: function(e, t, n) {
                if (e || e === 0) return this.animate(wn("hide", 3), e, t, n);
                var r, i, o = 0,
                    u = this.length;
                for (; o < u; o++) r = this[o], r.style && (i = s.css(r, "display"), i !== "none" && !s._data(r, "olddisplay") && s._data(r, "olddisplay", i));
                for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
                return this
            },
            _toggle: s.fn.toggle,
            toggle: function(e, t, n) {
                var r = typeof e == "boolean";
                return s.isFunction(e) && s.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function() {
                    var t = r ? e : s(this).is(":hidden");
                    s(this)[t ? "show" : "hide"]()
                }) : this.animate(wn("toggle", 3), e, t, n), this
            },
            fadeTo: function(e, t, n, r) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                function o() {
                    i.queue === !1 && s._mark(this);
                    var t = s.extend({}, i),
                        n = this.nodeType === 1,
                        r = n && s(this).is(":hidden"),
                        o, u, a, f, l, c, h, p, d, v, m;
                    t.animatedProperties = {};
                    for (a in e) {
                        o = s.camelCase(a), a !== o && (e[o] = e[a], delete e[a]);
                        if ((l = s.cssHooks[o]) && "expand" in l) {
                            c = l.expand(e[o]), delete e[o];
                            for (a in c) a in e || (e[a] = c[a])
                        }
                    }
                    for (o in e) {
                        u = e[o], s.isArray(u) ? (t.animatedProperties[o] = u[1], u = e[o] = u[0]) : t.animatedProperties[o] = t.specialEasing && t.specialEasing[o] || t.easing || "swing";
                        if (u === "hide" && r || u === "show" && !r) return t.complete.call(this);
                        n && (o === "height" || o === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], s.css(this, "display") === "inline" && s.css(this, "float") === "none" && (!s.support.inlineBlockNeedsLayout || En(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                    }
                    t.overflow != null && (this.style.overflow = "hidden");
                    for (a in e) f = new s.fx(this, t, a), u = e[a], pn.test(u) ? (m = s._data(this, "toggle" + a) || (u === "toggle" ? r ? "show" : "hide" : 0), m ? (s._data(this, "toggle" + a, m === "show" ? "hide" : "show"), f[m]()) : f[u]()) : (h = dn.exec(u), p = f.cur(), h ? (d = parseFloat(h[2]), v = h[3] || (s.cssNumber[a] ? "" : "px"), v !== "px" && (s.style(this, a, (d || 1) + v), p = (d || 1) / f.cur() * p, s.style(this, a, p + v)), h[1] && (d = (h[1] === "-=" ? -1 : 1) * d + p), f.custom(p, d, v)) : f.custom(p, u, ""));
                    return !0
                }
                var i = s.speed(t, n, r);
                return s.isEmptyObject(e) ? this.each(i.complete, [!1]) : (e = s.extend({}, e), i.queue === !1 ? this.each(o) : this.queue(i.queue, o))
            },
            stop: function(e, n, r) {
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    function u(e, t, n) {
                        var i = t[n];
                        s.removeData(e, n, !0), i.stop(r)
                    }
                    var t, n = !1,
                        i = s.timers,
                        o = s._data(this);
                    r || s._unmark(!0, this);
                    if (e == null)
                        for (t in o) o[t] && o[t].stop && t.indexOf(".run") === t.length - 4 && u(this, o, t);
                    else o[t = e + ".run"] && o[t].stop && u(this, o, t);
                    for (t = i.length; t--;) i[t].elem === this && (e == null || i[t].queue === e) && (r ? i[t](!0) : i[t].saveState(), n = !0, i.splice(t, 1));
                    (!r || !n) && s.dequeue(this, e)
                })
            }
        }), s.each({
            slideDown: wn("show", 1),
            slideUp: wn("hide", 1),
            slideToggle: wn("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            s.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), s.extend({
            speed: function(e, t, n) {
                var r = e && typeof e == "object" ? s.extend({}, e) : {
                    complete: n || !n && t || s.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !s.isFunction(t) && t
                };
                r.duration = s.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in s.fx.speeds ? s.fx.speeds[r.duration] : s.fx.speeds._default;
                if (r.queue == null || r.queue === !0) r.queue = "fx";
                return r.old = r.complete, r.complete = function(e) {
                    s.isFunction(r.old) && r.old.call(this), r.queue ? s.dequeue(this, r.queue) : e !== !1 && s._unmark(this)
                }, r
            },
            easing: {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return -Math.cos(e * Math.PI) / 2 + .5
                }
            },
            timers: [],
            fx: function(e, t, n) {
                this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
            }
        }), s.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this), (s.fx.step[this.prop] || s.fx.step._default)(this)
            },
            cur: function() {
                if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                    var e, t = s.css(this.elem, this.prop);
                    return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
                }
                return this.elem[this.prop]
            },
            custom: function(e, n, r) {
                function u(e) {
                    return i.step(e)
                }
                var i = this,
                    o = s.fx;
                this.startTime = gn || yn(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (s.cssNumber[this.prop] ? "" : "px"), u.queue = this.options.queue, u.elem = this.elem, u.saveState = function() {
                    s._data(i.elem, "fxshow" + i.prop) === t && (i.options.hide ? s._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && s._data(i.elem, "fxshow" + i.prop, i.end))
                }, u() && s.timers.push(u) && !vn && (vn = setInterval(o.tick, o.interval))
            },
            show: function() {
                var e = s._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = e || s.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), s(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = s._data(this.elem, "fxshow" + this.prop) || s.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
            },
            step: function(e) {
                var t, n, r, i = gn || yn(),
                    o = !0,
                    u = this.elem,
                    a = this.options;
                if (e || i >= a.duration + this.startTime) {
                    this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                    for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (o = !1);
                    if (o) {
                        a.overflow != null && !s.support.shrinkWrapBlocks && s.each(["", "X", "Y"], function(e, t) {
                            u.style["overflow" + t] = a.overflow[e]
                        }), a.hide && s(u).hide();
                        if (a.hide || a.show)
                            for (t in a.animatedProperties) s.style(u, t, a.orig[t]), s.removeData(u, "fxshow" + t, !0), s.removeData(u, "toggle" + t, !0);
                        r = a.complete, r && (a.complete = !1, r.call(u))
                    }
                    return !1
                }
                return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = s.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }, s.extend(s.fx, {
            tick: function() {
                var e, t = s.timers,
                    n = 0;
                for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
                t.length || s.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(vn), vn = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(e) {
                    s.style(e.elem, "opacity", e.now)
                },
                _default: function(e) {
                    e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
                }
            }
        }), s.each(mn.concat.apply([], mn), function(e, t) {
            t.indexOf("margin") && (s.fx.step[t] = function(e) {
                s.style(e.elem, t, Math.max(0, e.now) + e.unit)
            })
        }), s.expr && s.expr.filters && (s.expr.filters.animated = function(e) {
            return s.grep(s.timers, function(t) {
                return e === t.elem
            }).length
        });
        var Sn, xn = /^t(?:able|d|h)$/i,
            Tn = /^(?:body|html)$/i;
        "getBoundingClientRect" in n.documentElement ? Sn = function(e, t, n, r) {
            try {
                r = e.getBoundingClientRect()
            } catch (i) {}
            if (!r || !s.contains(n, e)) return r ? {
                top: r.top,
                left: r.left
            } : {
                top: 0,
                left: 0
            };
            var o = t.body,
                u = Nn(t),
                a = n.clientTop || o.clientTop || 0,
                f = n.clientLeft || o.clientLeft || 0,
                l = u.pageYOffset || s.support.boxModel && n.scrollTop || o.scrollTop,
                c = u.pageXOffset || s.support.boxModel && n.scrollLeft || o.scrollLeft,
                h = r.top + l - a,
                p = r.left + c - f;
            return {
                top: h,
                left: p
            }
        } : Sn = function(e, t, n) {
            var r, i = e.offsetParent,
                o = e,
                u = t.body,
                a = t.defaultView,
                f = a ? a.getComputedStyle(e, null) : e.currentStyle,
                l = e.offsetTop,
                c = e.offsetLeft;
            while ((e = e.parentNode) && e !== u && e !== n) {
                if (s.support.fixedPosition && f.position === "fixed") break;
                r = a ? a.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, c -= e.scrollLeft, e === i && (l += e.offsetTop, c += e.offsetLeft, s.support.doesNotAddBorder && (!s.support.doesAddBorderForTableAndCells || !xn.test(e.nodeName)) && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o = i, i = e.offsetParent), s.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), f = r
            }
            if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
            return s.support.fixedPosition && f.position === "fixed" && (l += Math.max(n.scrollTop, u.scrollTop), c += Math.max(n.scrollLeft, u.scrollLeft)), {
                top: l,
                left: c
            }
        }, s.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                s.offset.setOffset(this, e, t)
            });
            var n = this[0],
                r = n && n.ownerDocument;
            return r ? n === r.body ? s.offset.bodyOffset(n) : Sn(n, r, r.documentElement) : null
        }, s.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return s.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(s.css(e, "marginTop")) || 0, n += parseFloat(s.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function(e, t, n) {
                var r = s.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = s(e),
                    o = i.offset(),
                    u = s.css(e, "top"),
                    a = s.css(e, "left"),
                    f = (r === "absolute" || r === "fixed") && s.inArray("auto", [u, a]) > -1,
                    l = {},
                    c = {},
                    h, p;
                f ? (c = i.position(), h = c.top, p = c.left) : (h = parseFloat(u) || 0, p = parseFloat(a) || 0), s.isFunction(t) && (t = t.call(e, n, o)), t.top != null && (l.top = t.top - o.top + h), t.left != null && (l.left = t.left - o.left + p), "using" in t ? t.using.call(e, l) : i.css(l)
            }
        }, s.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = Tn.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(s.css(e, "marginTop")) || 0, n.left -= parseFloat(s.css(e, "marginLeft")) || 0, r.top += parseFloat(s.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(s.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || n.body;
                    while (e && !Tn.test(e.nodeName) && s.css(e, "position") === "static") e = e.offsetParent;
                    return e
                })
            }
        }), s.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            s.fn[e] = function(i) {
                return s.access(this, function(e, i, o) {
                    var u = Nn(e);
                    if (o === t) return u ? n in u ? u[n] : s.support.boxModel && u.document.documentElement[i] || u.document.body[i] : e[i];
                    u ? u.scrollTo(r ? s(u).scrollLeft() : o, r ? o : s(u).scrollTop()) : e[i] = o
                }, e, i, arguments.length, null)
            }
        }), s.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            var r = "client" + e,
                i = "scroll" + e,
                o = "offset" + e;
            s.fn["inner" + e] = function() {
                var e = this[0];
                return e ? e.style ? parseFloat(s.css(e, n, "padding")) : this[n]() : null
            }, s.fn["outer" + e] = function(e) {
                var t = this[0];
                return t ? t.style ? parseFloat(s.css(t, n, e ? "margin" : "border")) : this[n]() : null
            }, s.fn[n] = function(e) {
                return s.access(this, function(e, n, u) {
                    var a, f, l, c;
                    if (s.isWindow(e)) return a = e.document, f = a.documentElement[r], s.support.boxModel && f || a.body && a.body[r] || f;
                    if (e.nodeType === 9) return a = e.documentElement, a[r] >= a[i] ? a[r] : Math.max(e.body[i], a[i], e.body[o], a[o]);
                    if (u === t) return l = s.css(e, n), c = parseFloat(l), s.isNumeric(c) ? c : l;
                    s(e).css(n, u)
                }, n, e, arguments.length, null)
            }
        }), e.jQuery = e.$ = s, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return s
        })
    }(window),
    function(e, t) {
        function I(e) {
            return new q(e)
        }

        function q(e) {
            if (e && e._wrapped) return e;
            this._wrapped = e
        }

        function K() {
            var e, t, n, i = -1,
                s = arguments.length,
                o = {
                    bottom: "",
                    exit: "",
                    init: "",
                    top: "",
                    arrayBranch: {
                        beforeLoop: "",
                        loopExp: "++index < length"
                    },
                    objectBranch: {
                        beforeLoop: ""
                    }
                };
            while (++i < s) {
                e = arguments[i];
                for (t in e) n = (n = e[t]) == null ? "" : n, /beforeLoop|loopExp|inLoop/.test(t) ? (typeof n == "string" && (n = {
                    array: n,
                    object: n
                }), o.arrayBranch[t] = n.array, o.objectBranch[t] = n.object) : o[t] = n
            }
            var u = o.args,
                a = o.arrayBranch,
                f = o.objectBranch,
                c = /^[^,]+/.exec(u)[0],
                h = f.loopExp,
                p = /\S+$/.exec(h || c)[0];
            o.firstArg = c, o.hasDontEnumBug = r, o.hasExp = "hasOwnProperty.call(" + p + ", index)", o.iteratedObject = p, o.shadowed = l, o.useHas = o.useHas !== !1, o.exit || (o.exit = "if (!" + c + ") return result");
            if (c == "object" || !a.inLoop) o.arrayBranch = null;
            h || (f.loopExp = "index in " + p);
            var d = Function("arrayClass, funcClass, hasOwnProperty, identity, iteratorBind, objectTypes, slice, stringClass, toString, undefined", " return function(" + u + ") {\n" + R(o) + "\n}");
            return d(b, S, A, Cn, Z, g, M, N, _)
        }

        function Q(e, t) {
            return p[t]
        }

        function G(e) {
            return "\\" + y[e]
        }

        function Y(e) {
            return m[e]
        }

        function Z(e, t) {
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
        }

        function et() {}

        function nt(e, t) {
            var n = p.length;
            return p[n] = "'+\n_.escape(" + t + ") +\n'", h + n
        }

        function rt(e, t) {
            var n = p.length;
            return p[n] = "'+\n((__t = (" + t + ")) == null ? '' : __t) +\n'", h + n
        }

        function it(e, t) {
            var n = p.length;
            return p[n] = "';\n" + t + ";\n__p += '", h + n
        }

        function dt(e, t, n, r) {
            if (!e) return n;
            var i = e.length,
                s = arguments.length < 3;
            r && (t = Z(t, r));
            if (i === i >>> 0) {
                i && s && (n = e[--i]);
                while (i--) n = t(n, e[i], i, e);
                return n
            }
            var o, u = En(e);
            i = u.length, i && s && (n = e[u[--i]]);
            while (i--) o = u[i], n = t(n, e[o], o, e);
            return n
        }

        function gt(e) {
            if (!e) return [];
            if (_.call(e.toArray) == S) return e.toArray();
            var t = e.length;
            return t === t >>> 0 ? M.call(e) : Tn(e)
        }

        function yt(e) {
            var t = [];
            if (!e) return t;
            var n = -1,
                r = e.length;
            while (++n < r) e[n] && t.push(e[n]);
            return t
        }

        function bt(e) {
            var t = [];
            if (!e) return t;
            var n = -1,
                r = e.length,
                i = L.apply(t, M.call(arguments, 1));
            while (++n < r) xt(i, e[n]) < 0 && t.push(e[n]);
            return t
        }

        function wt(e, n, r) {
            if (e) return n == t || r ? e[0] : M.call(e, 0, n)
        }

        function Et(e, t) {
            var n = [];
            if (!e) return n;
            var r, i = -1,
                s = e.length;
            while (++i < s) r = e[i], on(r) ? O.apply(n, t ? r : Et(r)) : n.push(r);
            return n
        }

        function St(e, t, n) {
            var r = {};
            if (!e) return r;
            var i, s, o = -1,
                u = typeof t == "function",
                a = e.length;
            u && n && (t = Z(t, n));
            while (++o < a) s = e[o], i = u ? t(s, o, e) : s[t], (A.call(r, i) ? r[i] : r[i] = []).push(s);
            return r
        }

        function xt(e, t, n) {
            if (!e) return -1;
            var r = -1,
                i = e.length;
            if (n) {
                if (typeof n != "number") return r = Pt(e, t), e[r] === t ? r : -1;
                r = (n < 0 ? Math.max(0, i + n) : n) - 1
            }
            while (++r < i)
                if (e[r] === t) return r;
            return -1
        }

        function Tt(e, n, r) {
            return e ? M.call(e, 0, -(n == t || r ? 1 : n)) : []
        }

        function Nt(e) {
            var t = [];
            if (!e) return t;
            var n, r = -1,
                i = e.length,
                s = M.call(arguments, 1);
            while (++r < i) n = e[r], xt(t, n) < 0 && ot(s, function(e) {
                return xt(e, n) > -1
            }) && t.push(n);
            return t
        }

        function Ct(e, n, r) {
            if (e) {
                var i = e.length;
                return n == t || r ? e[i - 1] : M.call(e, -n || i)
            }
        }

        function kt(e, t, n) {
            if (!e) return -1;
            var r = e.length;
            n && typeof n == "number" && (r = (n < 0 ? Math.max(0, r + n) : Math.min(n, r - 1)) + 1);
            while (r--)
                if (e[r] === t) return r;
            return -1
        }

        function Lt(e, t, n) {
            var r = -Infinity,
                i = r;
            if (!e) return i;
            var s, o = -1,
                u = e.length;
            if (!t) {
                while (++o < u) e[o] > i && (i = e[o]);
                return i
            }
            n && (t = Z(t, n));
            while (++o < u) s = t(e[o], o, e), s > r && (r = s, i = e[o]);
            return i
        }

        function At(e, t, n) {
            var r = Infinity,
                i = r;
            if (!e) return i;
            var s, o = -1,
                u = e.length;
            if (!t) {
                while (++o < u) e[o] < i && (i = e[o]);
                return i
            }
            n && (t = Z(t, n));
            while (++o < u) s = t(e[o], o, e), s < r && (r = s, i = e[o]);
            return i
        }

        function Ot(e, t, n) {
            n || (n = 1), arguments.length < 2 && (t = e || 0, e = 0);
            var r = -1,
                i = Math.max(Math.ceil((t - e) / n), 0),
                s = Array(i);
            while (++r < i) s[r] = e, e += n;
            return s
        }

        function Mt(e, n, r) {
            return e ? M.call(e, n == t || r ? 1 : n) : []
        }

        function _t(e) {
            if (!e) return [];
            var t, n = -1,
                r = e.length,
                i = Array(r);
            while (++n < r) t = Math.floor(Math.random() * (n + 1)), i[n] = i[t], i[t] = e[n];
            return i
        }

        function Dt(e, n, r) {
            if (!e) return [];
            if (typeof n == "string") {
                var i = n;
                n = function(e) {
                    return e[i]
                }
            } else r && (n = Z(n, r));
            var s = -1,
                o = e.length,
                u = Array(o);
            while (++s < o) u[s] = {
                criteria: n(e[s], s, e),
                value: e[s]
            };
            u.sort(function(e, n) {
                var r = e.criteria,
                    i = n.criteria;
                return r === t ? 1 : i === t ? -1 : r < i ? -1 : r > i ? 1 : 0
            });
            while (o--) u[o] = u[o].value;
            return u
        }

        function Pt(e, t, n, r) {
            if (!e) return 0;
            var i, s = 0,
                o = e.length;
            if (n) {
                r && (n = qt(n, r)), t = n(t);
                while (s < o) i = s + o >>> 1, n(e[i]) < t ? s = i + 1 : o = i
            } else
                while (s < o) i = s + o >>> 1, e[i] < t ? s = i + 1 : o = i;
            return s
        }

        function Ht() {
            var e = -1,
                t = [],
                n = L.apply(t, arguments),
                r = n.length;
            while (++e < r) xt(t, n[e]) < 0 && t.push(n[e]);
            return t
        }

        function Bt(e, t, n, r) {
            var i = [];
            if (!e) return i;
            var s, o = -1,
                u = e.length,
                a = [];
            typeof t == "function" && (r = n, n = t, t = !1), n ? r && (n = Z(n, r)) : n = Cn;
            while (++o < u) {
                s = n(e[o], o, e);
                if (t ? !o || a[a.length - 1] !== s : xt(a, s) < 0) a.push(s), i.push(e[o])
            }
            return i
        }

        function jt(e) {
            var t = [];
            if (!e) return t;
            var n = M.call(arguments, 1),
                r = -1,
                i = e.length;
            while (++r < i) xt(n, e[r]) < 0 && t.push(e[r]);
            return t
        }

        function Ft(e) {
            if (!e) return [];
            var t = -1,
                n = Lt(ht(arguments, "length")),
                r = Array(n);
            while (++t < n) r[t] = ht(arguments, t);
            return r
        }

        function It(e, t) {
            return e < 1 ? t() : function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }

        function qt(e, t) {
            function s() {
                var o = arguments,
                    u = t;
                r || (e = t[n]), i.length && (o = o.length ? L.apply(i, o) : i);
                if (this instanceof s) {
                    et.prototype = e.prototype, u = new et;
                    var a = e.apply(u, o);
                    return g[typeof a] && a !== null ? a : u
                }
                return e.apply(u, o)
            }
            var n, r = _.call(e) == S;
            if (!r) n = t, t = e;
            else if (D) return D.call.apply(D, arguments);
            var i = M.call(arguments, 2);
            return s
        }

        function Rt(e) {
            var t = arguments,
                n = 1;
            t.length == 1 && (n = 0, t = nn(e));
            for (var r = t.length; n < r; n++) e[t[n]] = qt(e[t[n]], e);
            return e
        }

        function Ut() {
            var e = arguments;
            return function() {
                var t = arguments,
                    n = e.length;
                while (n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }

        function zt(e, n, r) {
            function a() {
                u = t, r || e.apply(o, i)
            }
            var i, s, o, u;
            return function() {
                var t = r && !u;
                return i = arguments, o = this, j(u), u = F(a, n), t && (s = e.apply(o, i)), s
            }
        }

        function Wt(e, n) {
            var r = M.call(arguments, 2);
            return F(function() {
                return e.apply(t, r)
            }, n)
        }

        function Xt(e) {
            var n = M.call(arguments, 1);
            return F(function() {
                return e.apply(t, n)
            }, 1)
        }

        function Vt(e, t) {
            var n = {};
            return function() {
                var r = t ? t.apply(this, arguments) : arguments[0];
                return A.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
        }

        function $t(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), t)
            }
        }

        function Jt(e) {
            var t = M.call(arguments, 1),
                n = t.length;
            return function() {
                var r, i = arguments;
                return i.length && (t.length = n, O.apply(t, i)), r = t.length == 1 ? e.call(this, t[0]) : e.apply(this, t), t.length = n, r
            }
        }

        function Kt(e, n) {
            function a() {
                u = new Date, o = t, e.apply(s, r)
            }
            var r, i, s, o, u = 0;
            return function() {
                var t = new Date,
                    f = n - (t - u);
                return r = arguments, s = this, f <= 0 ? (u = t, i = e.apply(s, r)) : o || (o = F(a, f)), i
            }
        }

        function Qt(e, t) {
            return function() {
                var n = [e];
                return arguments.length && O.apply(n, arguments), t.apply(this, n)
            }
        }

        function Gt(e) {
            return g[typeof e] && e !== null ? on(e) ? e.slice() : Zt({}, e) : e
        }

        function rn(e, t) {
            return A.call(e, t)
        }

        function un(e) {
            return e === !0 || e === !1 || _.call(e) == w
        }

        function an(e) {
            return _.call(e) == E
        }

        function fn(e) {
            return !!e && e.nodeType == 1
        }

        function cn(e, n, i) {
            i || (i = []);
            if (e === n) return e !== 0 || 1 / e == 1 / n;
            if (e == t || n == t) return e === n;
            e._chain && (e = e._wrapped), n._chain && (n = n._wrapped);
            if (e.isEqual && _.call(e.isEqual) == S) return e.isEqual(n);
            if (n.isEqual && _.call(n.isEqual) == S) return n.isEqual(e);
            var s = _.call(e);
            if (s != _.call(n)) return !1;
            switch (s) {
                case N:
                    return e == String(n);
                case x:
                    return e != +e ? n != +n : e == 0 ? 1 / e == 1 / n : e == +n;
                case w:
                case E:
                    return +e == +n;
                case T:
                    return e.source == n.source && e.global == n.global && e.multiline == n.multiline && e.ignoreCase == n.ignoreCase
            }
            if (typeof e != "object" || typeof n != "object") return !1;
            var o = i.length;
            while (o--)
                if (i[o] == e) return !0;
            var u = -1,
                a = !0,
                f = 0;
            i.push(e);
            if (s == b) {
                f = e.length, a = f == n.length;
                if (a)
                    while (f--)
                        if (!(a = cn(e[f], n[f], i))) break
            } else {
                if ("constructor" in e != "constructor" in n || e.constructor != n.constructor) return !1;
                for (var c in e)
                    if (A.call(e, c)) {
                        f++;
                        if (!(a = A.call(n, c) && cn(e[c], n[c], i))) break
                    }
                if (a) {
                    for (c in n)
                        if (A.call(n, c) && !(f--)) break;
                    a = !f
                }
                if (a && r)
                    while (++u < 7) {
                        c = l[u];
                        if (A.call(e, c) && !(a = A.call(n, c) && cn(e[c], n[c], i))) break
                    }
            }
            return i.pop(), a
        }

        function hn(e) {
            return H(e) && _.call(e) == x
        }

        function pn(e) {
            return _.call(e) == S
        }

        function dn(e) {
            return g[typeof e] && e !== null
        }

        function vn(e) {
            return _.call(e) == x && e != +e
        }

        function mn(e) {
            return e === null
        }

        function gn(e) {
            return _.call(e) == x
        }

        function yn(e) {
            return _.call(e) == T
        }

        function bn(e) {
            return _.call(e) == N
        }

        function wn(e) {
            return e === t
        }

        function Sn(e) {
            var t, n = 0,
                r = L.apply(C, arguments),
                i = r.length,
                s = {};
            while (++n < i) t = r[n], t in e && (s[t] = e[t]);
            return s
        }

        function xn(e) {
            var t = _.call(e);
            return t == b || t == N ? e.length : En(e).length
        }

        function Nn(e) {
            return e == null ? "" : (e + "").replace(a, Y)
        }

        function Cn(e) {
            return e
        }

        function kn(e) {
            ft(nn(e), function(t) {
                var n = I[t] = e[t];
                q.prototype[t] = function() {
                    var e = [this._wrapped];
                    arguments.length && O.apply(e, arguments);
                    var t = n.apply(I, e);
                    return this._chain && (t = new q(t), t._chain = !0), t
                }
            })
        }

        function Ln() {
            return e._ = s, this
        }

        function An(e, t) {
            if (!e) return null;
            var n = e[t];
            return _.call(n) == S ? e[t]() : n
        }

        function On(e, t, n) {
            n || (n = {});
            var r, i = I.templateSettings,
                s = n.escape,
                o = n.evaluate,
                a = n.interpolate,
                l = n.variable;
            return s == null && (s = i.escape), o == null && (o = i.evaluate), a == null && (a = i.interpolate), s && (e = e.replace(s, nt)), a && (e = e.replace(a, rt)), o && (e = e.replace(o, it)), e = "__p='" + e.replace(f, G).replace(u, Q) + "';\n", p.length = 0, l || (l = i.variable, e = "with (" + l + " || {}) {\n" + e + "\n}\n"), e = "function(" + l + ") {\n" + "var __p, __t, __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + e + "return __p\n}", d && (e += "\n//@ sourceURL=/lodash/template/source[" + c++ +"]"), r = Function("_", "return " + e)(I), t ? r(t) : (r.source = e, r)
        }

        function Mn(e, t, n) {
            var r = -1;
            if (n)
                while (++r < e) t.call(n, r);
            else
                while (++r < e) t(r)
        }

        function _n(e) {
            var t = i++;
            return e ? e + t : t
        }

        function Dn(e) {
            return e = new q(e), e._chain = !0, e
        }

        function Pn(e, t) {
            return t(e), e
        }

        function Hn() {
            return this._chain = !0, this
        }

        function Bn() {
            return this._wrapped
        }
        var n = typeof exports == "object" && exports && (typeof global == "object" && global && global == global.global && (e = global), exports),
            r = !{
                valueOf: 0
            }.propertyIsEnumerable("valueOf"),
            i = 0,
            s = e._,
            o = RegExp("^" + ({}.valueOf + "").replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            u = /__token__(\d+)/g,
            a = /[&<"']/g,
            f = /['\n\r\t\u2028\u2029\\]/g,
            l = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            c = 0,
            h = "__token__",
            p = [];
        try {
            var d = (Function("//@")(), !0)
        } catch (v) {}
        var m = {
                "&": "&amp;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#x27;"
            },
            g = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                "undefined": !1
            },
            y = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            b = "[object Array]",
            w = "[object Boolean]",
            E = "[object Date]",
            S = "[object Function]",
            x = "[object Number]",
            T = "[object RegExp]",
            N = "[object String]",
            C = Array.prototype,
            k = Object.prototype,
            L = C.concat,
            A = k.hasOwnProperty,
            O = C.push,
            M = C.slice,
            _ = k.toString,
            D = o.test(D = M.bind) && /\n|Opera/.test(D + _.call(e.opera)) && D,
            P = o.test(P = Array.isArray) && P,
            H = e.isFinite,
            B = o.test(B = Object.keys) && B,
            j = e.clearTimeout,
            F = e.setTimeout;
        I.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            variable: "obj"
        };
        var R = On("var index, result<% if (init) { %> = <%= init %><% } %>;\n<%= exit %>;\n<%= top %>;\n<% if (arrayBranch) { %>var length = <%= firstArg %>.length; index = -1;  <% if (objectBranch) { %>\nif (length === length >>> 0) {<% } %>\n  <%= arrayBranch.beforeLoop %>;\n  while (<%= arrayBranch.loopExp %>) {\n    <%= arrayBranch.inLoop %>;\n  }  <% if (objectBranch) { %>\n}\n<% }}if (objectBranch) {  if (arrayBranch) { %>else {\n<% }  if (!hasDontEnumBug) { %>  var skipProto = typeof <%= iteratedObject %> == 'function';\n<% } %>  <%= objectBranch.beforeLoop %>;\n  for (<%= objectBranch.loopExp %>) {  \n<%  if (hasDontEnumBug) {    if (useHas) { %>    if (<%= hasExp %>) {\n  <% } %>    <%= objectBranch.inLoop %>;<%    if (useHas) { %>\n    }<% }  }  else {  %>    if (!(skipProto && index == 'prototype')<% if (useHas) { %> && <%= hasExp %><% } %>) {\n      <%= objectBranch.inLoop %>;\n    }  <% } %>\n  }  <% if (hasDontEnumBug) { %>\n  var ctor = <%= iteratedObject %>.constructor;\n  <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === <%= iteratedObject %>) && <%      } %><%= hasExp %>) {\n    <%= objectBranch.inLoop %>;\n  }<%     }   }   if (arrayBranch) { %>\n}<% }} %>\n<%= bottom %>;\nreturn result"),
            U = {
                args: "collection, callback, thisArg",
                init: "collection",
                top: "if (!callback) {\n  callback = identity\n}\nelse if (thisArg) {\n  callback = iteratorBind(callback, thisArg)\n}",
                inLoop: "callback(collection[index], index, collection)"
            },
            z = {
                init: "true",
                inLoop: "if (!callback(collection[index], index, collection)) return !result"
            },
            W = {
                args: "object",
                init: "object",
                top: "for (var source, sourceIndex = 1, length = arguments.length; sourceIndex < length; sourceIndex++) {\n  source = arguments[sourceIndex];\n" + (r ? "  if (source) {" : ""),
                loopExp: "index in source",
                useHas: !1,
                inLoop: "object[index] = source[index]",
                bottom: (r ? "  }\n" : "") + "}"
            },
            X = {
                init: "[]",
                inLoop: "callback(collection[index], index, collection) && result.push(collection[index])"
            },
            V = {
                top: "if (thisArg) callback = iteratorBind(callback, thisArg)"
            },
            $ = {
                inLoop: {
                    object: U.inLoop
                }
            },
            J = {
                init: "",
                exit: "if (!collection) return []",
                beforeLoop: {
                    array: "result = Array(length)",
                    object: "result = []"
                },
                inLoop: {
                    array: "result[index] = callback(collection[index], index, collection)",
                    object: "result.push(callback(collection[index], index, collection))"
                }
            },
            tt = K({
                args: "object",
                exit: "if (!objectTypes[typeof object] || object === null) throw TypeError()",
                init: "[]",
                inLoop: "result.push(index)"
            }),
            st = K({
                args: "collection, target",
                init: "false",
                inLoop: "if (collection[index] === target) return true"
            }),
            ot = K(U, z),
            ut = K(U, X),
            at = K(U, V, {
                init: "",
                inLoop: "if (callback(collection[index], index, collection)) return collection[index]"
            }),
            ft = K(U, V),
            lt = K(J, {
                args: "collection, methodName",
                top: "var args = slice.call(arguments, 2),\n    isFunc = typeof methodName == 'function'",
                inLoop: {
                    array: "result[index] = (isFunc ? methodName : collection[index][methodName]).apply(collection[index], args)",
                    object: "result.push((isFunc ? methodName : collection[index][methodName]).apply(collection[index], args))"
                }
            }),
            ct = K(U, J),
            ht = K(J, {
                args: "collection, property",
                inLoop: {
                    array: "result[index] = collection[index][property]",
                    object: "result.push(collection[index][property])"
                }
            }),
            pt = K({
                args: "collection, callback, accumulator, thisArg",
                init: "accumulator",
                top: "var noaccum = arguments.length < 3;\nif (thisArg) callback = iteratorBind(callback, thisArg)",
                beforeLoop: {
                    array: "if (noaccum) result = collection[++index]"
                },
                inLoop: {
                    array: "result = callback(result, collection[index], index, collection)",
                    object: "result = noaccum\n  ? (noaccum = false, collection[index])\n  : callback(result, collection[index], index, collection)"
                }
            }),
            vt = K(U, X, {
                inLoop: "!" + X.inLoop
            }),
            mt = K(U, z, {
                init: "false",
                inLoop: z.inLoop.replace("!", "")
            }),
            Yt = K(W, {
                inLoop: "if (object[index] == undefined)" + W.inLoop
            }),
            Zt = K(W),
            en = K(U, V, $, {
                useHas: !1
            }),
            tn = K(U, V, $),
            nn = K({
                args: "object",
                init: "[]",
                useHas: !1,
                inLoop: "if (toString.call(object[index]) == funcClass) result.push(index)",
                bottom: "result.sort()"
            }),
            sn = function(e) {
                return _.call(e) == "[object Arguments]"
            };
        sn(arguments) || (sn = function(e) {
            return !!e && !!A.call(e, "callee")
        });
        var on = P || function(e) {
                return _.call(e) == b
            },
            ln = K({
                args: "value",
                init: "true",
                top: "var className = toString.call(value);\nif (className == arrayClass || className == stringClass) return !value.length",
                inLoop: {
                    object: "return false"
                }
            }),
            En = B ? function(e) {
                return typeof e == "function" ? tt(e) : B(e)
            } : tt,
            Tn = K({
                args: "object",
                init: "[]",
                inLoop: "result.push(object[index])"
            });
        I.VERSION = "0.3.2", I.after = It, I.bind = qt, I.bindAll = Rt, I.chain = Dn, I.clone = Gt, I.compact = yt, I.compose = Ut, I.contains = st, I.debounce = zt, I.defaults = Yt, I.defer = Xt, I.delay = Wt, I.difference = bt, I.escape = Nn, I.every = ot, I.extend = Zt, I.filter = ut, I.find = at, I.first = wt, I.flatten = Et, I.forEach = ft, I.forIn = en, I.forOwn = tn, I.functions = nn, I.groupBy = St, I.has = rn, I.identity = Cn, I.indexOf = xt, I.initial = Tt, I.intersection = Nt, I.invoke = lt, I.isArguments = sn, I.isArray = on, I.isBoolean = un, I.isDate = an, I.isElement = fn, I.isEmpty = ln, I.isEqual = cn, I.isFinite = hn, I.isFunction = pn, I.isNaN = vn, I.isNull = mn, I.isNumber = gn, I.isObject = dn, I.isRegExp = yn, I.isString = bn, I.isUndefined = wn, I.keys = En, I.last = Ct, I.lastIndexOf = kt, I.map = ct, I.max = Lt, I.memoize = Vt, I.min = At, I.mixin = kn, I.noConflict = Ln, I.once = $t, I.partial = Jt, I.pick = Sn, I.pluck = ht, I.range = Ot, I.reduce = pt, I.reduceRight = dt, I.reject = vt, I.rest = Mt, I.result = An, I.shuffle = _t, I.size = xn, I.some = mt, I.sortBy = Dt, I.sortedIndex = Pt, I.tap = Pn, I.template = On, I.throttle = Kt, I.times = Mn, I.toArray = gt, I.union = Ht, I.uniq = Bt, I.uniqueId = _n, I.values = Tn, I.without = jt, I.wrap = Qt, I.zip = Ft, I.all = ot, I.any = mt, I.collect = ct, I.detect = at, I.each = ft, I.foldl = pt, I.foldr = dt, I.head = wt, I.include = st, I.inject = pt, I.methods = nn, I.select = ut, I.tail = Mt, I.take = wt, I.unique = Bt, I._iteratorTemplate = R, I._shimKeys = tt, q.prototype = I.prototype, kn(I), q.prototype.chain = Hn, q.prototype.value = Bn, ft(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = C[e];
            q.prototype[e] = function() {
                var e = this._wrapped;
                return t.apply(e, arguments), e.length === 0 && delete e[0], this._chain && (e = new q(e), e._chain = !0), e
            }
        }), ft(["concat", "join", "slice"], function(e) {
            var t = C[e];
            q.prototype[e] = function() {
                var e = this._wrapped,
                    n = t.apply(e, arguments);
                return this._chain && (n = new q(n), n._chain = !0), n
            }
        }), typeof define == "function" && typeof define.amd == "object" && define.amd ? (e._ = I, define("underscore", [], function() {
            return I
        })) : n ? typeof module == "object" && module && module.exports == n ? (module.exports = I)._ = I : n._ = I : e._ = I
    }(this),
    function() {
        var e = this,
            t = e.Backbone,
            n = Array.prototype.slice,
            r = Array.prototype.splice,
            i;
        typeof exports != "undefined" ? i = exports : i = e.Backbone = {}, i.VERSION = "0.9.2";
        var s = e._;
        !s && typeof require != "undefined" && (s = require("underscore"));
        var o = e.jQuery || e.Zepto || e.ender;
        i.setDomLibrary = function(e) {
            o = e
        }, i.noConflict = function() {
            return e.Backbone = t, this
        }, i.emulateHTTP = !1, i.emulateJSON = !1;
        var u = /\s+/,
            a = i.Events = {
                on: function(e, t, n) {
                    var r, i, s, o, a;
                    if (!t) return this;
                    e = e.split(u), r = this._callbacks || (this._callbacks = {});
                    while (i = e.shift()) a = r[i], s = a ? a.tail : {}, s.next = o = {}, s.context = n, s.callback = t, r[i] = {
                        tail: o,
                        next: a ? a.next : s
                    };
                    return this
                },
                off: function(e, t, n) {
                    var r, i, o, a, f, l;
                    if (!(i = this._callbacks)) return;
                    if (!(e || t || n)) return delete this._callbacks, this;
                    e = e ? e.split(u) : s.keys(i);
                    while (r = e.shift()) {
                        o = i[r], delete i[r];
                        if (!o || !t && !n) continue;
                        a = o.tail;
                        while ((o = o.next) !== a) f = o.callback, l = o.context, (t && f !== t || n && l !== n) && this.on(r, f, l)
                    }
                    return this
                },
                trigger: function(e) {
                    var t, r, i, s, o, a, f;
                    if (!(i = this._callbacks)) return this;
                    a = i.all, e = e.split(u), f = n.call(arguments, 1);
                    while (t = e.shift()) {
                        if (r = i[t]) {
                            s = r.tail;
                            while ((r = r.next) !== s) r.callback.apply(r.context || this, f)
                        }
                        if (r = a) {
                            s = r.tail, o = [t].concat(f);
                            while ((r = r.next) !== s) r.callback.apply(r.context || this, o)
                        }
                    }
                    return this
                }
            };
        a.bind = a.on, a.unbind = a.off;
        var f = i.Model = function(e, t) {
            var n;
            e || (e = {}), t && t.parse && (e = this.parse(e));
            if (n = C(this, "defaults")) e = s.extend({}, n, e);
            t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
                silent: !0
            }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments)
        };
        s.extend(f.prototype, a, {
            changed: null,
            _silent: null,
            _pending: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return s.clone(this.attributes)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                var t;
                if (t = this._escapedAttributes[e]) return t;
                var n = this.get(e);
                return this._escapedAttributes[e] = s.escape(n == null ? "" : "" + n)
            },
            has: function(e) {
                return this.get(e) != null
            },
            set: function(e, t, n) {
                var r, i, o;
                s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
                if (!r) return this;
                r instanceof f && (r = r.attributes);
                if (n.unset)
                    for (i in r) r[i] = void 0;
                if (!this._validate(r, n)) return !1;
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                var u = n.changes = {},
                    a = this.attributes,
                    l = this._escapedAttributes,
                    c = this._previousAttributes || {};
                for (i in r) {
                    o = r[i];
                    if (!s.isEqual(a[i], o) || n.unset && s.has(a, i)) delete l[i], (n.silent ? this._silent : u)[i] = !0;
                    n.unset ? delete a[i] : a[i] = o, !s.isEqual(c[i], o) || s.has(a, i) != s.has(c, i) ? (this.changed[i] = o, n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i])
                }
                return n.silent || this.change(n), this
            },
            unset: function(e, t) {
                return (t || (t = {})).unset = !0, this.set(e, null, t)
            },
            clear: function(e) {
                return (e || (e = {})).unset = !0, this.set(s.clone(this.attributes), e)
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {};
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    if (!t.set(t.parse(r, s), e)) return !1;
                    n && n(t, r)
                }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e)
            },
            save: function(e, t, n) {
                var r, o;
                s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n = n ? s.clone(n) : {};
                if (n.wait) {
                    if (!this._validate(r, n)) return !1;
                    o = s.clone(this.attributes)
                }
                var u = s.extend({}, n, {
                    silent: !0
                });
                if (r && !this.set(r, n.wait ? u : n)) return !1;
                var a = this,
                    f = n.success;
                n.success = function(e, t, i) {
                    var o = a.parse(e, i);
                    n.wait && (delete n.wait, o = s.extend(r || {}, o));
                    if (!a.set(o, n)) return !1;
                    f ? f(a, e) : a.trigger("sync", a, e, n)
                }, n.error = i.wrapError(n.error, a, n);
                var l = this.isNew() ? "create" : "update",
                    c = (this.sync || i.sync).call(this, l, this, n);
                return n.wait && this.set(o, u), c
            },
            destroy: function(e) {
                e = e ? s.clone(e) : {};
                var t = this,
                    n = e.success,
                    r = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (this.isNew()) return r(), !1;
                e.success = function(i) {
                    e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e)
                }, e.error = i.wrapError(e.error, t, e);
                var o = (this.sync || i.sync).call(this, "delete", this, e);
                return e.wait || r(), o
            },
            url: function() {
                var e = C(this, "urlRoot") || C(this.collection, "url") || k();
                return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return this.id == null
            },
            change: function(e) {
                e || (e = {});
                var t = this._changing;
                this._changing = !0;
                for (var n in this._silent) this._pending[n] = !0;
                var r = s.extend({}, e.changes, this._silent);
                this._silent = {};
                for (var n in r) this.trigger("change:" + n, this, this.get(n), e);
                if (t) return this;
                while (!s.isEmpty(this._pending)) {
                    this._pending = {}, this.trigger("change", this, e);
                    for (var n in this.changed) {
                        if (this._pending[n] || this._silent[n]) continue;
                        delete this.changed[n]
                    }
                    this._previousAttributes = s.clone(this.attributes)
                }
                return this._changing = !1, this
            },
            hasChanged: function(e) {
                return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
                var t, n = !1,
                    r = this._previousAttributes;
                for (var i in e) {
                    if (s.isEqual(r[i], t = e[i])) continue;
                    (n || (n = {}))[i] = t
                }
                return n
            },
            previous: function(e) {
                return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return s.clone(this._previousAttributes)
            },
            isValid: function() {
                return !this.validate(this.attributes)
            },
            _validate: function(e, t) {
                if (t.silent || !this.validate) return !0;
                e = s.extend({}, this.attributes, e);
                var n = this.validate(e, t);
                return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
            }
        });
        var l = i.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
                silent: !0,
                parse: t.parse
            })
        };
        s.extend(l.prototype, a, {
            model: f,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            add: function(e, t) {
                var n, i, o, u, a, f, l = {},
                    c = {},
                    h = [];
                t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
                for (n = 0, o = e.length; n < o; n++) {
                    if (!(u = e[n] = this._prepareModel(e[n], t))) throw new Error("Can't add an invalid model to a collection");
                    a = u.cid, f = u.id;
                    if (l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
                        h.push(n);
                        continue
                    }
                    l[a] = c[f] = u
                }
                n = h.length;
                while (n--) e.splice(h[n], 1);
                for (n = 0, o = e.length; n < o; n++)(u = e[n]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
                this.length += o, i = t.at != null ? t.at : this.models.length, r.apply(this.models, [i, 0].concat(e)), this.comparator && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                for (n = 0, o = this.models.length; n < o; n++) {
                    if (!l[(u = this.models[n]).cid]) continue;
                    t.index = n, u.trigger("add", u, this, t)
                }
                return this
            },
            remove: function(e, t) {
                var n, r, i, o;
                t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
                for (n = 0, r = e.length; n < r; n++) {
                    o = this.getByCid(e[n]) || this.get(e[n]);
                    if (!o) continue;
                    delete this._byId[o.id], delete this._byCid[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o)
                }
                return this
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, t), e
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, s.extend({
                    at: 0
                }, t)), e
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            get: function(e) {
                return e == null ? void 0 : this._byId[e.id != null ? e.id : e]
            },
            getByCid: function(e) {
                return e && this._byCid[e.cid || e]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e) {
                return s.isEmpty(e) ? [] : this.filter(function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            sort: function(e) {
                e || (e = {});
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                var t = s.bind(this.comparator, this);
                return this.comparator.length == 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
            },
            pluck: function(e) {
                return s.map(this.models, function(t) {
                    return t.get(e)
                })
            },
            reset: function(e, t) {
                e || (e = []), t || (t = {});
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return this._reset(), this.add(e, s.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), this
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {}, e.parse === undefined && (e.parse = !0);
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r)
                }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e)
            },
            create: function(e, t) {
                var n = this;
                t = t ? s.clone(t) : {}, e = this._prepareModel(e, t);
                if (!e) return !1;
                t.wait || n.add(e, t);
                var r = t.success;
                return t.success = function(i, s, o) {
                    t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            chain: function() {
                return s(this.models).chain()
            },
            _reset: function(e) {
                this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
            },
            _prepareModel: function(e, t) {
                t || (t = {});
                if (e instanceof f) e.collection || (e.collection = this);
                else {
                    var n = e;
                    t.collection = this, e = new this.model(n, t), e._validate(e.attributes, t) || (e = !1)
                }
                return e
            },
            _removeReference: function(e) {
                this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e == "add" || e == "remove") && n != this) return;
                e == "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments)
            }
        });
        var c = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
        s.each(c, function(e) {
            l.prototype[e] = function() {
                return s[e].apply(s, [this.models].concat(s.toArray(arguments)))
            }
        });
        var h = i.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            p = /:\w+/g,
            d = /\*\w+/g,
            v = /[-[\]{}()+?.,\\^$|#\s]/g;
        s.extend(h.prototype, a, {
            initialize: function() {},
            route: function(e, t, n) {
                return i.history || (i.history = new m), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), i.history.route(e, s.bind(function(r) {
                    var s = this._extractParameters(e, r);
                    n && n.apply(this, s), this.trigger.apply(this, ["route:" + t].concat(s)), i.history.trigger("route", this, t, s)
                }, this)), this
            },
            navigate: function(e, t) {
                i.history.navigate(e, t)
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                var e = [];
                for (var t in this.routes) e.unshift([t, this.routes[t]]);
                for (var n = 0, r = e.length; n < r; n++) this.route(e[n][0], e[n][1], this[e[n][1]])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(v, "\\$&").replace(p, "([^/]+)").replace(d, "(.*?)"), new RegExp("^" + e + "$")
            },
            _extractParameters: function(e, t) {
                return e.exec(t).slice(1)
            }
        });
        var m = i.History = function() {
                this.handlers = [], s.bindAll(this, "checkUrl")
            },
            g = /^[#\/]/,
            y = /msie [\w.]+/;
        m.started = !1, s.extend(m.prototype, a, {
            interval: 50,
            getHash: function(e) {
                var t = e ? e.location : window.location,
                    n = t.href.match(/#(.*)$/);
                return n ? n[1] : ""
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || t) {
                        e = window.location.pathname;
                        var n = window.location.search;
                        n && (e += n)
                    } else e = this.getHash();
                return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(g, "")
            },
            start: function(e) {
                if (m.started) throw new Error("Backbone.history has already been started");
                m.started = !0, this.options = s.extend({}, {
                    root: "/"
                }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
                var t = this.getFragment(),
                    n = document.documentMode,
                    r = y.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                r && (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
                var i = window.location,
                    u = i.pathname == this.options.root;
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
                this._wantsPushState && this._hasPushState && u && i.hash && (this.fragment = this.getHash().replace(g, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment));
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                o(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), m.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t == this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
            },
            loadUrl: function(e) {
                var t = this.fragment = this.getFragment(e),
                    n = s.any(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0
                    });
                return n
            },
            navigate: function(e, t) {
                if (!m.started) return !1;
                if (!t || t === !0) t = {
                    trigger: t
                };
                var n = (e || "").replace(g, "");
                if (this.fragment == n) return;
                this._hasPushState ? (n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, t.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e)
            },
            _updateHash: function(e, t, n) {
                n ? e.replace(e.toString().replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t
            }
        });
        var b = i.View = function(e) {
                this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            w = /^(\S+)\s*(.*)$/,
            E = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
        s.extend(b.prototype, a, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this
            },
            make: function(e, t, n) {
                var r = document.createElement(e);
                return t && o(r).attr(t), n && o(r).html(n), r
            },
            setElement: function(e, t) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof o ? e : o(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = C(this, "events"))) return;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    s.isFunction(n) || (n = this[e[t]]);
                    if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                    var r = t.match(w),
                        i = r[1],
                        o = r[2];
                    n = s.bind(n, this), i += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(i, n) : this.$el.delegate(o, i, n)
                }
            },
            undelegateEvents: function() {
                this.$el.unbind(".delegateEvents" + this.cid)
            },
            _configure: function(e) {
                this.options && (e = s.extend({}, this.options, e));
                for (var t = 0, n = E.length; t < n; t++) {
                    var r = E[t];
                    e[r] && (this[r] = e[r])
                }
                this.options = e
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = C(this, "attributes") || {};
                    this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
                } else this.setElement(this.el, !1)
            }
        });
        var S = function(e, t) {
            var n = N(this, e, t);
            return n.extend = this.extend, n
        };
        f.extend = l.extend = h.extend = b.extend = S;
        var x = {
            create: "POST",
            update: "PUT",
            "delete": "DELETE",
            read: "GET"
        };
        i.sync = function(e, t, n) {
            var r = x[e];
            n || (n = {});
            var u = {
                type: r,
                dataType: "json"
            };
            return n.url || (u.url = C(t, "url") || k()), !n.data && t && (e == "create" || e == "update") && (u.contentType = "application/json", u.data = JSON.stringify(t.toJSON())), i.emulateJSON && (u.contentType = "application/x-www-form-urlencoded", u.data = u.data ? {
                model: u.data
            } : {}), i.emulateHTTP && (r === "PUT" || r === "DELETE") && (i.emulateJSON && (u.data._method = r), u.type = "POST", u.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", r)
            }), u.type !== "GET" && !i.emulateJSON && (u.processData = !1), o.ajax(s.extend(u, n))
        }, i.wrapError = function(e, t, n) {
            return function(r, i) {
                i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n)
            }
        };
        var T = function() {},
            N = function(e, t, n) {
                var r;
                return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function() {
                    e.apply(this, arguments)
                }, s.extend(r, e), T.prototype = e.prototype, r.prototype = new T, t && s.extend(r.prototype, t), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
            },
            C = function(e, t) {
                return !e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t]
            },
            k = function() {
                throw new Error('A "url" property or function must be specified')
            }
    }.call(this), define("backbone", ["underscore", "jquery"], function(e) {
        return function() {
            return e.Backbone
        }
    }(this)), Backbone.Marionette = function(e, t, n) {
        var r = {};
        r.EventBinder = function() {
            this._eventBindings = []
        }, t.extend(r.EventBinder.prototype, {
            bindTo: function(e, t, n, r) {
                r = r || this, e.on(t, n, r);
                var i = {
                    obj: e,
                    eventName: t,
                    callback: n,
                    context: r
                };
                return this._eventBindings.push(i), i
            },
            unbindFrom: function(e) {
                e.obj.off(e.eventName, e.callback, e.context), this._eventBindings = t.reject(this._eventBindings, function(t) {
                    return t === e
                })
            },
            unbindAll: function() {
                var e = this,
                    n = t.map(this._eventBindings, t.identity);
                t.each(n, function(t, n) {
                    e.unbindFrom(t)
                })
            }
        }), r.EventBinder.extend = e.View.extend, r.View = e.View.extend({
            constructor: function() {
                var n = new r.EventBinder;
                t.extend(this, n), e.View.prototype.constructor.apply(this, arguments), this.bindTo(this, "show", this.onShowCalled, this)
            },
            getTemplate: function() {
                var e;
                return this.options && this.options.template ? e = this.options.template : e = this.template, e
            },
            serializeData: function() {
                var e;
                return this.model ? e = this.model.toJSON() : this.collection && (e = {
                    items: this.collection.toJSON()
                }), e = this.mixinTemplateHelpers(e), e
            },
            mixinTemplateHelpers: function(e) {
                e = e || {};
                var n = this.templateHelpers;
                return t.isFunction(n) && (n = n.call(this)), t.extend(e, n)
            },
            configureTriggers: function() {
                if (!this.triggers) return;
                var e = this.triggers,
                    n = this,
                    r = {};
                return t.isFunction(e) && (e = e.call(this)), t.each(e, function(e, t) {
                    r[t] = function(t) {
                        t && t.preventDefault && t.preventDefault(), t && t.stopPropagation && t.stopPropagation(), n.trigger(e)
                    }
                }), r
            },
            delegateEvents: function(n) {
                n = n || this.events, t.isFunction(n) && (n = n.call(this));
                var r = {},
                    i = this.configureTriggers();
                t.extend(r, n, i), e.View.prototype.delegateEvents.call(this, r)
            },
            onShowCalled: function() {},
            close: function() {
                this.beforeClose && this.beforeClose(), this.remove(), this.onClose && this.onClose(), this.trigger("close"), this.unbindAll(), this.unbind()
            },
            bindUIElements: function() {
                if (!this.ui) return;
                var e = this;
                this.uiBindings || (this.uiBindings = this.ui), this.ui = {}, t.each(t.keys(this.uiBindings), function(t) {
                    var n = e.uiBindings[t];
                    e.ui[t] = e.$(n)
                })
            }
        }), r.ItemView = r.View.extend({
            constructor: function() {
                r.View.prototype.constructor.apply(this, arguments), this.initialEvents()
            },
            initialEvents: function() {
                this.collection && this.bindTo(this.collection, "reset", this.render, this)
            },
            render: function() {
                this.beforeRender && this.beforeRender(), this.trigger("before:render", this), this.trigger("item:before:render", this);
                var e = this.serializeData(),
                    t = this.getTemplate(),
                    n = r.Renderer.render(t, e);
                return this.$el.html(n), this.bindUIElements(), this.onRender && this.onRender(), this.trigger("render", this), this.trigger("item:rendered", this), this
            },
            close: function() {
                this.trigger("item:before:close"), r.View.prototype.close.apply(this, arguments), this.trigger("item:closed")
            }
        }), r.CollectionView = r.View.extend({
            constructor: function() {
                r.View.prototype.constructor.apply(this, arguments), this.initChildViewStorage(), this.initialEvents(), this.onShowCallbacks = new r.Callbacks
            },
            initialEvents: function() {
                this.collection && (this.bindTo(this.collection, "add", this.addChildView, this), this.bindTo(this.collection, "remove", this.removeItemView, this), this.bindTo(this.collection, "reset", this.render, this))
            },
            addChildView: function(e, t, n) {
                this.closeEmptyView();
                var r = this.getItemView();
                return this.addItemView(e, r, n.index)
            },
            onShowCalled: function() {
                this.onShowCallbacks.run()
            },
            triggerBeforeRender: function() {
                this.beforeRender && this.beforeRender(), this.trigger("before:render", this), this.trigger("collection:before:render", this)
            },
            triggerRendered: function() {
                this.onRender && this.onRender(), this.trigger("render", this), this.trigger("collection:rendered", this)
            },
            render: function() {
                return this.triggerBeforeRender(), this.closeEmptyView(), this.closeChildren(), this.collection && this.collection.length > 0 ? this.showCollection() : this.showEmptyView(), this.triggerRendered(), this
            },
            showCollection: function() {
                var e = this,
                    t = this.getItemView();
                this.collection.each(function(n, r) {
                    e.addItemView(n, t, r)
                })
            },
            showEmptyView: function() {
                var t = this.options.emptyView || this.emptyView;
                if (t && !this._showingEmptyView) {
                    this._showingEmptyView = !0;
                    var n = new e.Model;
                    this.addItemView(n, t, 0)
                }
            },
            closeEmptyView: function() {
                this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
            },
            getItemView: function() {
                var e = this.options.itemView || this.itemView;
                if (!e) {
                    var t = new Error("An `itemView` must be specified");
                    throw t.name = "NoItemViewError", t
                }
                return e
            },
            addItemView: function(e, t, n) {
                var r = this,
                    s = this.buildItemView(e, t);
                this.storeChild(s), this.onItemAdded && this.onItemAdded(s), this.trigger("item:added", s);
                var o = this.renderItemView(s, n);
                s.onShow && this.onShowCallbacks.add(s.onShow, s);
                var u = this.bindTo(s, "all", function() {
                    var e = i.call(arguments);
                    e[0] = "itemview:" + e[0], e.splice(1, 0, s), r.trigger.apply(r, e)
                });
                return this.childBindings = this.childBindings || {}, this.childBindings[s.cid] = u, o
            },
            renderItemView: function(e, t) {
                e.render(), this.appendHtml(this, e, t)
            },
            buildItemView: function(e, n) {
                var r = t.result(this, "itemViewOptions"),
                    i = t.extend({
                        model: e
                    }, r),
                    s = new n(i);
                return s
            },
            removeItemView: function(e) {
                var t = this.children[e.cid];
                if (t) {
                    var n = this.childBindings[t.cid];
                    n && (this.unbindFrom(n), delete this.childBindings[t.cid]), t.close(), delete this.children[e.cid]
                }(!this.collection || this.collection.length === 0) && this.showEmptyView(), this.trigger("item:removed", t)
            },
            appendHtml: function(e, t, n) {
                e.$el.append(t.el)
            },
            storeChild: function(e) {
                this.children[e.model.cid] = e
            },
            initChildViewStorage: function() {
                this.children = {}
            },
            close: function() {
                this.trigger("collection:before:close"), this.closeChildren(), r.View.prototype.close.apply(this, arguments), this.trigger("collection:closed")
            },
            closeChildren: function() {
                var e = this;
                this.children && t.each(t.clone(this.children), function(t) {
                    e.removeItemView(t.model)
                })
            }
        }), r.CompositeView = r.CollectionView.extend({
            constructor: function(e) {
                r.CollectionView.apply(this, arguments), this.itemView = this.getItemView()
            },
            initialEvents: function() {
                this.collection && (this.bindTo(this.collection, "add", this.addChildView, this), this.bindTo(this.collection, "remove", this.removeItemView, this), this.bindTo(this.collection, "reset", this.renderCollection, this))
            },
            getItemView: function() {
                return this.itemView || this.constructor
            },
            render: function() {
                var e = this;
                this.resetItemViewContainer();
                var t = this.renderModel();
                return this.$el.html(t), this.bindUIElements(), this.trigger("composite:model:rendered"), this.trigger("render"), this.renderCollection(), this.trigger("composite:rendered"), this
            },
            renderCollection: function() {
                r.CollectionView.prototype.render.apply(this, arguments), this.trigger("composite:collection:rendered")
            },
            renderModel: function() {
                var e = {};
                e = this.serializeData();
                var t = this.getTemplate();
                return r.Renderer.render(t, e)
            },
            appendHtml: function(e, t) {
                var n = this.getItemViewContainer(e);
                n.append(t.el)
            },
            getItemViewContainer: function(e) {
                var n;
                if ("$itemViewContainer" in e) n = e.$itemViewContainer;
                else {
                    if (e.itemViewContainer) {
                        n = e.$(t.result(e, "itemViewContainer"));
                        if (n.length <= 0) {
                            var r = new Error("Missing `itemViewContainer`");
                            throw r.name = "ItemViewContainerMissingError", r
                        }
                    } else n = e.$el;
                    e.$itemViewContainer = n
                }
                return n
            },
            resetItemViewContainer: function() {
                this.$itemViewContainer && delete this.$itemViewContainer
            }
        }), r.Region = function(e) {
            this.options = e || {};
            var n = new r.EventBinder;
            t.extend(this, n, e);
            if (!this.el) {
                var i = new Error("An 'el' must be specified");
                throw i.name = "NoElError", i
            }
            this.initialize && this.initialize.apply(this, arguments)
        }, t.extend(r.Region.prototype, e.Events, {
            show: function(e) {
                this.ensureEl(), this.close(), e.render(), this.open(e), e.onShow && e.onShow(), e.trigger("show"), this.onShow && this.onShow(e), this.trigger("view:show", e), this.currentView = e
            },
            ensureEl: function() {
                if (!this.$el || this.$el.length === 0) this.$el = this.getEl(this.el)
            },
            getEl: function(e) {
                return n(e)
            },
            open: function(e) {
                this.$el.html(e.el)
            },
            close: function() {
                var e = this.currentView;
                if (!e) return;
                e.close && e.close(), this.trigger("view:closed", e), delete this.currentView
            },
            attachView: function(e) {
                this.currentView = e
            }
        }), r.Region.extend = e.View.extend, r.Layout = r.ItemView.extend({
            regionType: r.Region,
            constructor: function() {
                e.Marionette.ItemView.apply(this, arguments), this.initializeRegions()
            },
            render: function() {
                var e = r.ItemView.prototype.render.apply(this, arguments);
                return this.render = function() {
                    this.closeRegions(), this.reInitializeRegions();
                    var e = r.ItemView.prototype.render.apply(this, arguments);
                    return e
                }, e
            },
            close: function() {
                this.closeRegions(), this.destroyRegions(), e.Marionette.ItemView.prototype.close.call(this, arguments)
            },
            initializeRegions: function() {
                this.regionManagers || (this.regionManagers = {});
                var e = this;
                t.each(this.regions, function(t, n) {
                    if (typeof t != "string" && typeof t.selector != "string") throw new Exception("Region must be specified as a selector string or an object with selector property");
                    selector = typeof t == "string" ? t : t.selector;
                    var r = typeof t.regionType == "undefined" ? e.regionType : t.regionType,
                        i = new r({
                            el: selector,
                            getEl: function(t) {
                                return e.$(t)
                            }
                        });
                    e.regionManagers[n] = i, e[n] = i
                })
            },
            reInitializeRegions: function() {
                this.regionManagers && t.size(this.regionManagers) === 0 ? this.initializeRegions() : t.each(this.regionManagers, function(e) {
                    delete e.$el
                })
            },
            closeRegions: function() {
                var e = this;
                t.each(this.regionManagers, function(e, t) {
                    e.close()
                })
            },
            destroyRegions: function() {
                var e = this;
                t.each(this.regionManagers, function(t, n) {
                    delete e[n]
                }), this.regionManagers = {}
            }
        }), r.Application = function(e) {
            this.initCallbacks = new r.Callbacks, this.vent = new r.EventAggregator, this.submodules = {};
            var n = new r.EventBinder;
            t.extend(this, n, e)
        }, t.extend(r.Application.prototype, e.Events, {
            addInitializer: function(e) {
                this.initCallbacks.add(e)
            },
            start: function(e) {
                this.trigger("initialize:before", e), this.initCallbacks.run(e, this), this.trigger("initialize:after", e), this.trigger("start", e)
            },
            addRegions: function(e) {
                var t, n, i;
                for (i in e) e.hasOwnProperty(i) && (t = e[i], typeof t == "string" ? n = new r.Region({
                    el: t
                }) : n = new t, this[i] = n)
            },
            removeRegion: function(e) {
                this[e].close(), delete this[e]
            },
            module: function(e, t) {
                var n = i.call(arguments);
                return n.unshift(this), r.Module.create.apply(r.Module, n)
            }
        }), r.Application.extend = e.View.extend, r.AppRouter = e.Router.extend({
            constructor: function(t) {
                e.Router.prototype.constructor.call(this, t);
                if (this.appRoutes) {
                    var n = this.controller;
                    t && t.controller && (n = t.controller), this.processAppRoutes(n, this.appRoutes)
                }
            },
            processAppRoutes: function(e, n) {
                var r, i, s, o, u, a = [],
                    f = this;
                for (s in n) n.hasOwnProperty(s) && a.unshift([s, n[s]]);
                o = a.length;
                for (u = 0; u < o; u++) {
                    s = a[u][0], i = a[u][1], r = e[i];
                    if (!r) {
                        var l = "Method '" + i + "' was not found on the controller",
                            c = new Error(l);
                        throw c.name = "NoMethodError", c
                    }
                    r = t.bind(r, e), f.route(s, i, r)
                }
            }
        }), r.Module = function(e, n, i) {
            this.moduleName = e, this.submodules = {}, this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks, this._config = {}, this._config.app = n, this._config.customArgs = i, this._config.definitions = [];
            var s = new r.EventBinder;
            t.extend(this, s)
        }, t.extend(r.Module.prototype, e.Events, {
            addInitializer: function(e) {
                this._initializerCallbacks.add(e)
            },
            addFinalizer: function(e) {
                this._finalizerCallbacks.add(e)
            },
            start: function(e) {
                this._runModuleDefinition(), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.submodules && t.each(this.submodules, function(e) {
                    e.start()
                })
            },
            stop: function() {
                if (!this._isInitialized) return;
                this._isInitialized = !1, this._finalizerCallbacks.run(), t.each(this.submodules, function(e) {
                    e.stop()
                })
            },
            addDefinition: function(e) {
                this._config.definitions.push(e)
            },
            _runModuleDefinition: function() {
                if (this._config.definitions.length === 0) return;
                var i = t.flatten([this, this._config.app, e, r, n, t, this._config.customArgs]),
                    s = this._config.definitions.length - 1;
                for (var o = 0; o <= s; o++) {
                    var u = this._config.definitions[o];
                    u.apply(this, i)
                }
            }
        }), t.extend(r.Module, {
            create: function(e, n, s) {
                var o = this,
                    u = e,
                    n = n.split("."),
                    a = i.apply(arguments);
                a.splice(0, 3);
                var f = n.length;
                return t.each(n, function(t, n) {
                    var i = n === f - 1,
                        l = u[t];
                    l || (l = new r.Module(t, e, a), u[t] = l, u.submodules[t] = l), i && o._createModuleDefinition(l, s, e), u = l
                }), u
            },
            _createModuleDefinition: function(e, t, n) {
                var r = this._getModuleDefinitionOptions(t);
                r.definition && e.addDefinition(r.definition), r.startWithApp && n.addInitializer(function(t) {
                    e.start(t)
                })
            },
            _getModuleDefinitionOptions: function(e) {
                var n = {
                    startWithApp: !0
                };
                return e ? (t.isFunction(e) ? n.definition = e : (n.definition = e.define, e.hasOwnProperty("startWithApp") && (n.startWithApp = e.startWithApp)), n) : n
            }
        }), r.TemplateCache = function(e) {
            this.templateId = e
        }, t.extend(r.TemplateCache, {
            templateCaches: {},
            get: function(e) {
                var t = this,
                    n = this.templateCaches[e];
                return n || (n = new r.TemplateCache(e), this.templateCaches[e] = n), n.load()
            },
            clear: function() {
                var e, t = arguments.length;
                if (t > 0)
                    for (e = 0; e < t; e++) delete this.templateCaches[arguments[e]];
                else this.templateCaches = {}
            }
        }), t.extend(r.TemplateCache.prototype, {
            load: function() {
                var e = this;
                if (this.compiledTemplate) return this.compiledTemplate;
                var t = this.loadTemplate(this.templateId);
                return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate
            },
            loadTemplate: function(e) {
                var t = n(e).html();
                if (!t || t.length === 0) {
                    var r = "Could not find template: '" + e + "'",
                        i = new Error(r);
                    throw i.name = "NoTemplateError", i
                }
                return t
            },
            compileTemplate: function(e) {
                return t.template(e)
            }
        }), r.Renderer = {
            render: function(e, t) {
                var n = r.TemplateCache.get(e),
                    i = n(t);
                return i
            }
        }, r.Callbacks = function() {
            this.deferred = n.Deferred(), this.promise = this.deferred.promise()
        }, t.extend(r.Callbacks.prototype, {
            add: function(e, t) {
                this.promise.done(function(n, r) {
                    t && (n = t), e.call(n, r)
                })
            },
            run: function(e, t) {
                this.deferred.resolve(t, e)
            }
        }), r.EventAggregator = r.EventBinder.extend({
            constructor: function(e) {
                r.EventBinder.apply(this, arguments), t.extend(this, e)
            },
            bindTo: function(e, t, n) {
                return r.EventBinder.prototype.bindTo.call(this, this, e, t, n)
            }
        }), t.extend(r.EventAggregator.prototype, e.Events), r.EventAggregator.extend = e.View.extend;
        var i = Array.prototype.slice;
        return r
    }(Backbone, _, window.jQuery || window.Zepto || window.ender), define("marionette", ["backbone"], function(e) {
        return function() {
            return e.Backbone.Marionette
        }
    }(this)), Backbone.Marionette.Async = function(e, t, n, r) {
        var i = {
            init: function() {
                t.TemplateCache = i.TemplateCache, t.Renderer = i.Renderer, n.extend(t.ItemView.prototype, i.ItemView), n.extend(t.CollectionView.prototype, i.CollectionView), n.extend(t.CompositeView.prototype, i.CompositeView), n.extend(t.Region.prototype, i.Region)
            }
        };
        i.ItemView = {
            render: function() {
                var e = this,
                    n = r.Deferred(),
                    i = function() {
                        e.trigger("before:render", e), e.trigger("item:before:render", e);
                        var t = e.serializeData();
                        r.when(t).then(o)
                    },
                    o = function(n) {
                        var i = e.getTemplate(),
                            s = t.Renderer.render(i, n);
                        r.when(s).then(u)
                    },
                    u = function(t) {
                        e.$el.html(t), s(e.onRender, a, e)
                    },
                    a = function() {
                        e.trigger("render", e), e.trigger("item:rendered", e), n.resolve()
                    };
                return s(this.beforeRender, i, this), n.promise()
            }
        }, i.CollectionView = {
            render: function() {
                var e = this,
                    t = r.Deferred(),
                    n;
                this.triggerBeforeRender(), this.closeEmptyView(), this.closeChildren();
                if (this.collection && this.collection.length > 0) n = this.showCollection();
                else {
                    var i = this.showEmptyView();
                    n = [i]
                }
                return t.done(function() {
                    e.triggerRendered()
                }), r.when.apply(this, n).then(function() {
                    t.resolveWith(e)
                }), t.promise()
            },
            showCollection: function() {
                var e = this,
                    t = [],
                    n = this.getItemView();
                return this.collection.each(function(r, i) {
                    var s = e.addItemView(r, n, i);
                    t.push(s)
                }), t
            },
            showEmptyView: function(t) {
                var n, r = this.options.emptyView || this.emptyView;
                if (r && !this._showingEmptyView) {
                    this._showingEmptyView = !0;
                    var i = new e.Model;
                    n = this.addItemView(i, r, 0)
                }
                return n
            },
            renderItemView: function(e, t) {
                var n = this,
                    i = e.render();
                return r.when(i).then(function() {
                    n.appendHtml(n, e, t)
                }), i
            }
        }, i.CompositeView = {
            render: function() {
                var e = this,
                    t = r.Deferred();
                this.resetItemViewContainer();
                var n = this.renderModel();
                return r.when(n).then(function(n) {
                    e.$el.html(n), e.trigger("composite:model:rendered"), e.trigger("render");
                    var i = e.renderCollection();
                    r.when(i).then(function() {
                        t.resolve()
                    })
                }), t.done(function() {
                    e.trigger("composite:rendered")
                }), t.promise()
            },
            renderCollection: function() {
                var e = t.CollectionView.prototype.render.apply(this, arguments);
                return e.done(function() {
                    this.trigger("composite:collection:rendered")
                }), e.promise()
            }
        }, i.Region = {
            show: function(e) {
                var t = this,
                    n = r.Deferred();
                return this.ensureEl(), this.close(), r.when(e.render()).then(function() {
                    t.open(e), e.onShow && e.onShow(), e.trigger("show"), t.onShow && t.onShow(e), t.trigger("view:show", e), n.resolve()
                }), this.currentView = e, n.promise()
            }
        }, i.Renderer = {
            render: function(e, n) {
                var i = r.Deferred(),
                    s = t.TemplateCache.get(e);
                return r.when(s).then(function(e) {
                    var t = e(n);
                    i.resolve(t)
                }), i.promise()
            }
        }, i.TemplateCache = function(e) {
            this.templateId = e
        }, n.extend(i.TemplateCache, {
            templateCaches: {},
            get: function(e) {
                var n = this,
                    r = this.templateCaches[e];
                return r || (r = new t.TemplateCache(e), this.templateCaches[e] = r), r.load()
            },
            clear: function() {
                var e, t = arguments.length;
                if (t > 0)
                    for (e = 0; e < t; e++) delete this.templateCaches[arguments[e]];
                else this.templateCaches = {}
            }
        }), n.extend(i.TemplateCache.prototype, {
            load: function() {
                var e = this;
                return this.deferred ? this.deferred.promise() : (this.deferred = r.Deferred(), this.loadTemplate(this.templateId, function(t) {
                    e.template = t, e.deferred.resolve(t)
                }), this.deferred.promise())
            },
            loadTemplate: function(e, t) {
                var n = r(e).html();
                if (!n || n.length === 0) {
                    var i = "Could not find template: '" + e + "'",
                        s = new Error(i);
                    throw s.name = "NoTemplateError", s
                }
                n = this.compileTemplate(n), t.call(this, n)
            },
            compileTemplate: function(e) {
                return n.template(e)
            }
        });
        var s = function(e, t, i) {
            var s;
            e && (s = e.call(i)), r.when(s).then(n.bind(t, i))
        };
        return i.init(), i
    }(Backbone, Backbone.Marionette, _, window.jQuery || window.Zepto || window.ender), define("marionette_async", ["backbone", "marionette"], function(e) {
        return function() {
            return e.Backbone.Marionette
        }
    }(this));
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function(e, t, n) {
    n && (t.not = n), this.helpers[e] = t
}, Handlebars.registerPartial = function(e, t) {
    this.partials[e] = t
}, Handlebars.registerHelper("helperMissing", function(e) {
    if (arguments.length === 2) return undefined;
    throw new Error("Could not find property '" + e + "'")
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function(e, t) {
    var n = t.inverse || function() {},
        r = t.fn,
        i = "",
        s = toString.call(e);
    s === functionType && (e = e.call(this));
    if (e === !0) return r(this);
    if (e === !1 || e == null) return n(this);
    if (s === "[object Array]") {
        if (e.length > 0)
            for (var o = 0, u = e.length; o < u; o++) i += r(e[o]);
        else i = n(this);
        return i
    }
    return r(e)
}), Handlebars.registerHelper("each", function(e, t) {
    var n = t.fn,
        r = t.inverse,
        i = "";
    if (e && e.length > 0)
        for (var s = 0, o = e.length; s < o; s++) i += n(e[s]);
    else i = r(this);
    return i
}), Handlebars.registerHelper("if", function(e, t) {
    var n = toString.call(e);
    return n === functionType && (e = e.call(this)), !e || Handlebars.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
}), Handlebars.registerHelper("unless", function(e, t) {
    var n = t.fn,
        r = t.inverse;
    return t.fn = r, t.inverse = n, Handlebars.helpers["if"].call(this, e, t)
}), Handlebars.registerHelper("with", function(e, t) {
    return t.fn(e)
}), Handlebars.registerHelper("log", function(e) {
    Handlebars.log(e)
});
var handlebars = function() {
    var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                statements: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                params: 25,
                hash: 26,
                param: 27,
                STRING: 28,
                INTEGER: 29,
                BOOLEAN: 30,
                hashSegments: 31,
                hashSegment: 32,
                ID: 33,
                EQUALS: 34,
                pathSegments: 35,
                SEP: 36,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "STRING",
                29: "INTEGER",
                30: "BOOLEAN",
                33: "ID",
                34: "EQUALS",
                36: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 3],
                [4, 1],
                [4, 0],
                [6, 1],
                [6, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [25, 2],
                [25, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [26, 1],
                [31, 2],
                [31, 1],
                [32, 3],
                [32, 3],
                [32, 3],
                [32, 3],
                [21, 1],
                [35, 3],
                [35, 1]
            ],
            performAction: function(t, n, r, i, s, o, u) {
                var a = o.length - 1;
                switch (s) {
                    case 1:
                        return o[a - 1];
                    case 2:
                        this.$ = new i.ProgramNode(o[a - 2], o[a]);
                        break;
                    case 3:
                        this.$ = new i.ProgramNode(o[a]);
                        break;
                    case 4:
                        this.$ = new i.ProgramNode([]);
                        break;
                    case 5:
                        this.$ = [o[a]];
                        break;
                    case 6:
                        o[a - 1].push(o[a]), this.$ = o[a - 1];
                        break;
                    case 7:
                        this.$ = new i.InverseNode(o[a - 2], o[a - 1], o[a]);
                        break;
                    case 8:
                        this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a]);
                        break;
                    case 9:
                        this.$ = o[a];
                        break;
                    case 10:
                        this.$ = o[a];
                        break;
                    case 11:
                        this.$ = new i.ContentNode(o[a]);
                        break;
                    case 12:
                        this.$ = new i.CommentNode(o[a]);
                        break;
                    case 13:
                        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                        break;
                    case 14:
                        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                        break;
                    case 15:
                        this.$ = o[a - 1];
                        break;
                    case 16:
                        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                        break;
                    case 17:
                        this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                        break;
                    case 18:
                        this.$ = new i.PartialNode(o[a - 1]);
                        break;
                    case 19:
                        this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                        break;
                    case 20:
                        break;
                    case 21:
                        this.$ = [
                            [o[a - 2]].concat(o[a - 1]), o[a]
                        ];
                        break;
                    case 22:
                        this.$ = [
                            [o[a - 1]].concat(o[a]), null
                        ];
                        break;
                    case 23:
                        this.$ = [
                            [o[a - 1]], o[a]
                        ];
                        break;
                    case 24:
                        this.$ = [
                            [o[a]], null
                        ];
                        break;
                    case 25:
                        o[a - 1].push(o[a]), this.$ = o[a - 1];
                        break;
                    case 26:
                        this.$ = [o[a]];
                        break;
                    case 27:
                        this.$ = o[a];
                        break;
                    case 28:
                        this.$ = new i.StringNode(o[a]);
                        break;
                    case 29:
                        this.$ = new i.IntegerNode(o[a]);
                        break;
                    case 30:
                        this.$ = new i.BooleanNode(o[a]);
                        break;
                    case 31:
                        this.$ = new i.HashNode(o[a]);
                        break;
                    case 32:
                        o[a - 1].push(o[a]), this.$ = o[a - 1];
                        break;
                    case 33:
                        this.$ = [o[a]];
                        break;
                    case 34:
                        this.$ = [o[a - 2], o[a]];
                        break;
                    case 35:
                        this.$ = [o[a - 2], new i.StringNode(o[a])];
                        break;
                    case 36:
                        this.$ = [o[a - 2], new i.IntegerNode(o[a])];
                        break;
                    case 37:
                        this.$ = [o[a - 2], new i.BooleanNode(o[a])];
                        break;
                    case 38:
                        this.$ = new i.IdNode(o[a]);
                        break;
                    case 39:
                        o[a - 2].push(o[a]), this.$ = o[a - 2];
                        break;
                    case 40:
                        this.$ = [o[a]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 4],
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16]
            }, {
                5: [2, 3],
                7: 17,
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 19],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [2, 5],
                19: [2, 5],
                20: [2, 5],
                22: [2, 5],
                23: [2, 5],
                24: [2, 5]
            }, {
                4: 20,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                4: 21,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                17: 22,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 26,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 27,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 28,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                21: 29,
                33: [1, 25],
                35: 24
            }, {
                1: [2, 1]
            }, {
                6: 30,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [2, 6],
                19: [2, 6],
                20: [2, 6],
                22: [2, 6],
                23: [2, 6],
                24: [2, 6]
            }, {
                17: 22,
                18: [1, 31],
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                10: 32,
                20: [1, 33]
            }, {
                10: 34,
                20: [1, 33]
            }, {
                18: [1, 35]
            }, {
                18: [2, 24],
                21: 40,
                25: 36,
                26: 37,
                27: 38,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 38],
                28: [2, 38],
                29: [2, 38],
                30: [2, 38],
                33: [2, 38],
                36: [1, 46]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                36: [2, 40]
            }, {
                18: [1, 47]
            }, {
                18: [1, 48]
            }, {
                18: [1, 49]
            }, {
                18: [1, 50],
                21: 51,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 2],
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 2],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [2, 7],
                19: [2, 7],
                20: [2, 7],
                22: [2, 7],
                23: [2, 7],
                24: [2, 7]
            }, {
                21: 52,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                18: [2, 22],
                21: 40,
                26: 53,
                27: 54,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 23]
            }, {
                18: [2, 26],
                28: [2, 26],
                29: [2, 26],
                30: [2, 26],
                33: [2, 26]
            }, {
                18: [2, 31],
                32: 55,
                33: [1, 56]
            }, {
                18: [2, 27],
                28: [2, 27],
                29: [2, 27],
                30: [2, 27],
                33: [2, 27]
            }, {
                18: [2, 28],
                28: [2, 28],
                29: [2, 28],
                30: [2, 28],
                33: [2, 28]
            }, {
                18: [2, 29],
                28: [2, 29],
                29: [2, 29],
                30: [2, 29],
                33: [2, 29]
            }, {
                18: [2, 30],
                28: [2, 30],
                29: [2, 30],
                30: [2, 30],
                33: [2, 30]
            }, {
                18: [2, 33],
                33: [2, 33]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                34: [1, 57],
                36: [2, 40]
            }, {
                33: [1, 58]
            }, {
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 17],
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }, {
                18: [1, 59]
            }, {
                18: [1, 60]
            }, {
                18: [2, 21]
            }, {
                18: [2, 25],
                28: [2, 25],
                29: [2, 25],
                30: [2, 25],
                33: [2, 25]
            }, {
                18: [2, 32],
                33: [2, 32]
            }, {
                34: [1, 57]
            }, {
                21: 61,
                28: [1, 62],
                29: [1, 63],
                30: [1, 64],
                33: [1, 25],
                35: 24
            }, {
                18: [2, 39],
                28: [2, 39],
                29: [2, 39],
                30: [2, 39],
                33: [2, 39],
                36: [2, 39]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                18: [2, 34],
                33: [2, 34]
            }, {
                18: [2, 35],
                33: [2, 35]
            }, {
                18: [2, 36],
                33: [2, 36]
            }, {
                18: [2, 37],
                33: [2, 37]
            }],
            defaultActions: {
                16: [2, 1],
                37: [2, 23],
                53: [2, 21]
            },
            parseError: function(t, n) {
                throw new Error(t)
            },
            parse: function(t) {
                function d(e) {
                    r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
                }

                function v() {
                    var e;
                    return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
                }
                var n = this,
                    r = [0],
                    i = [null],
                    s = [],
                    o = this.table,
                    u = "",
                    a = 0,
                    f = 0,
                    l = 0,
                    c = 2,
                    h = 1;
                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
                var p = this.lexer.yylloc;
                s.push(p), typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
                var m, g, y, b, w, E, S = {},
                    x, T, N, C;
                for (;;) {
                    y = r[r.length - 1], this.defaultActions[y] ? b = this.defaultActions[y] : (m == null && (m = v()), b = o[y] && o[y][m]);
                    if (typeof b == "undefined" || !b.length || !b[0])
                        if (!l) {
                            C = [];
                            for (x in o[y]) this.terminals_[x] && x > 2 && C.push("'" + this.terminals_[x] + "'");
                            var k = "";
                            this.lexer.showPosition ? k = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + C.join(", ") + ", got '" + this.terminals_[m] + "'" : k = "Parse error on line " + (a + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'"), this.parseError(k, {
                                text: this.lexer.match,
                                token: this.terminals_[m] || m,
                                line: this.lexer.yylineno,
                                loc: p,
                                expected: C
                            })
                        }
                    if (b[0] instanceof Array && b.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + y + ", token: " + m);
                    switch (b[0]) {
                        case 1:
                            r.push(m), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(b[1]), m = null, g ? (m = g, g = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                            break;
                        case 2:
                            T = this.productions_[b[1]][1], S.$ = i[i.length - T], S._$ = {
                                first_line: s[s.length - (T || 1)].first_line,
                                last_line: s[s.length - 1].last_line,
                                first_column: s[s.length - (T || 1)].first_column,
                                last_column: s[s.length - 1].last_column
                            }, E = this.performAction.call(S, u, f, a, this.yy, b[1], i, s);
                            if (typeof E != "undefined") return E;
                            T && (r = r.slice(0, -1 * T * 2), i = i.slice(0, -1 * T), s = s.slice(0, -1 * T)), r.push(this.productions_[b[1]][0]), i.push(S.$), s.push(S._$), N = o[r[r.length - 2]][r[r.length - 1]], r.push(N);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        },
        t = function() {
            var e = {
                EOF: 1,
                parseError: function(t, n) {
                    if (!this.yy.parseError) throw new Error(t);
                    this.yy.parseError(t, n)
                },
                setInput: function(e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this
                },
                input: function() {
                    var e = this._input[0];
                    this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
                    var t = e.match(/\n/);
                    return t && this.yylineno++, this._input = this._input.slice(1), e
                },
                unput: function(e) {
                    return this._input = e + this._input, this
                },
                more: function() {
                    return this._more = !0, this
                },
                pastInput: function() {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var e = this.pastInput(),
                        t = (new Array(e.length + 1)).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var e, t, n, r;
                    this._more || (this.yytext = "", this.match = "");
                    var i = this._currentRules();
                    for (var s = 0; s < i.length; s++) {
                        t = this._input.match(this.rules[i[s]]);
                        if (t) {
                            r = t[0].match(/\n.*/g), r && (this.yylineno += r.length), this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: r ? r[r.length - 1].length - 1 : this.yylloc.last_column + t[0].length
                            }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, i[s], this.conditionStack[this.conditionStack.length - 1]);
                            if (e) return e;
                            return
                        }
                    }
                    if (this._input === "") return this.EOF;
                    this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var t = this.next();
                    return typeof t != "undefined" ? t : this.lex()
                },
                begin: function(t) {
                    this.conditionStack.push(t)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(t) {
                    this.begin(t)
                }
            };
            return e.performAction = function(t, n, r, i) {
                var s = i;
                switch (r) {
                    case 0:
                        n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                        if (n.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(), 14;
                    case 3:
                        return 24;
                    case 4:
                        return 16;
                    case 5:
                        return 20;
                    case 6:
                        return 19;
                    case 7:
                        return 19;
                    case 8:
                        return 23;
                    case 9:
                        return 23;
                    case 10:
                        return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
                    case 11:
                        return 22;
                    case 12:
                        return 34;
                    case 13:
                        return 33;
                    case 14:
                        return 33;
                    case 15:
                        return 36;
                    case 16:
                        break;
                    case 17:
                        return this.popState(), 18;
                    case 18:
                        return this.popState(), 18;
                    case 19:
                        return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 28;
                    case 20:
                        return 30;
                    case 21:
                        return 30;
                    case 22:
                        return 29;
                    case 23:
                        return 33;
                    case 24:
                        return n.yytext = n.yytext.substr(1, n.yyleng - 2), 33;
                    case 25:
                        return "INVALID";
                    case 26:
                        return 5
                }
            }, e.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/], e.conditions = {
                mu: {
                    rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                    inclusive: !1
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 26],
                    inclusive: !0
                }
            }, e
        }();
    return e.lexer = t, e
}();
typeof require != "undefined" && typeof exports != "undefined" && (exports.parser = handlebars, exports.parse = function() {
        return handlebars.parse.apply(handlebars, arguments)
    }, exports.main = function(t) {
        if (!t[1]) throw new Error("Usage: " + t[0] + " FILE");
        if (typeof process != "undefined") var n = require("fs").readFileSync(require("path").join(process.cwd(), t[1]), "utf8");
        else var r = require("file").path(require("file").cwd()),
            n = r.join(t[1]).read({
                charset: "utf-8"
            });
        return exports.parser.parse(n)
    }, typeof module != "undefined" && require.main === module && exports.main(typeof process != "undefined" ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
        return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
    }, Handlebars.print = function(e) {
        return (new Handlebars.PrintVisitor).accept(e)
    }, Handlebars.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function(e, t) {}
    }, Handlebars.log = function(e, t) {
        Handlebars.logger.log(e, t)
    },
    function() {
        Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
            this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
        }, Handlebars.AST.MustacheNode = function(e, t, n) {
            this.type = "mustache", this.id = e[0], this.params = e.slice(1), this.hash = t, this.escaped = !n
        }, Handlebars.AST.PartialNode = function(e, t) {
            this.type = "partial", this.id = e, this.context = t
        };
        var e = function(e, t) {
            if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
        };
        Handlebars.AST.BlockNode = function(t, n, r) {
            e(t.id, r), this.type = "block", this.mustache = t, this.program = n
        }, Handlebars.AST.InverseNode = function(t, n, r) {
            e(t.id, r), this.type = "inverse", this.mustache = t, this.program = n
        }, Handlebars.AST.ContentNode = function(e) {
            this.type = "content", this.string = e
        }, Handlebars.AST.HashNode = function(e) {
            this.type = "hash", this.pairs = e
        }, Handlebars.AST.IdNode = function(e) {
            this.type = "ID", this.original = e.join(".");
            var t = [],
                n = 0;
            for (var r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s)
            }
            this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = t.length === 1 && n === 0
        }, Handlebars.AST.StringNode = function(e) {
            this.type = "STRING", this.string = e
        }, Handlebars.AST.IntegerNode = function(e) {
            this.type = "INTEGER", this.integer = e
        }, Handlebars.AST.BooleanNode = function(e) {
            this.type = "BOOLEAN", this.bool = e
        }, Handlebars.AST.CommentNode = function(e) {
            this.type = "comment", this.comment = e
        }
    }(), Handlebars.Exception = function(e) {
        var t = Error.prototype.constructor.apply(this, arguments);
        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
        this.message = t.message
    }, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
        this.string = e
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString()
    },
    function() {
        var e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = /&(?!\w+;)|[<>"'`]/g,
            n = /[&<>"'`]/,
            r = function(t) {
                return e[t] || "&amp;"
            };
        Handlebars.Utils = {
            escapeExpression: function(e) {
                return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e
            },
            isEmpty: function(e) {
                return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1
            }
        }
    }(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {},
    function(e, t) {
        e.OPCODE_MAP = {
            appendContent: 1,
            getContext: 2,
            lookupWithHelpers: 3,
            lookup: 4,
            append: 5,
            invokeMustache: 6,
            appendEscaped: 7,
            pushString: 8,
            truthyOrFallback: 9,
            functionOrFallback: 10,
            invokeProgram: 11,
            invokePartial: 12,
            push: 13,
            assignToHash: 15,
            pushStringParam: 16
        }, e.MULTI_PARAM_OPCODES = {
            appendContent: 1,
            getContext: 1,
            lookupWithHelpers: 2,
            lookup: 1,
            invokeMustache: 3,
            pushString: 1,
            truthyOrFallback: 1,
            functionOrFallback: 1,
            invokeProgram: 3,
            invokePartial: 1,
            push: 1,
            assignToHash: 1,
            pushStringParam: 1
        }, e.DISASSEMBLE_MAP = {};
        for (var n in e.OPCODE_MAP) {
            var r = e.OPCODE_MAP[n];
            e.DISASSEMBLE_MAP[r] = n
        }
        e.multiParamSize = function(t) {
            return e.MULTI_PARAM_OPCODES[e.DISASSEMBLE_MAP[t]]
        }, e.prototype = {
            compiler: e,
            disassemble: function() {
                var t = this.opcodes,
                    n, r, i = [],
                    s, o, u;
                for (var a = 0, f = t.length; a < f; a++) {
                    n = t[a];
                    if (n === "DECLARE") o = t[++a], u = t[++a], i.push("DECLARE " + o + " = " + u);
                    else {
                        s = e.DISASSEMBLE_MAP[n];
                        var l = e.multiParamSize(n),
                            c = [];
                        for (var h = 0; h < l; h++) r = t[++a], typeof r == "string" && (r = '"' + r.replace("\n", "\\n") + '"'), c.push(r);
                        s = s + " " + c.join(" "), i.push(s)
                    }
                }
                return i.join("\n")
            },
            guid: 0,
            compile: function(e, t) {
                this.children = [], this.depths = {
                    list: []
                }, this.options = t;
                var n = this.options.knownHelpers;
                this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0
                };
                if (n)
                    for (var r in n) this.options.knownHelpers[r] = n[r];
                return this.program(e)
            },
            accept: function(e) {
                return this[e.type](e)
            },
            program: function(e) {
                var t = e.statements,
                    n;
                this.opcodes = [];
                for (var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
                return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function(e, t) {
                    return e - t
                }), this
            },
            compileProgram: function(e) {
                var t = (new this.compiler).compile(e, this.options),
                    n = this.guid++;
                this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                for (var r = 0, i = t.depths.list.length; r < i; r++) {
                    depth = t.depths.list[r];
                    if (depth < 2) continue;
                    this.addDepth(depth - 1)
                }
                return n
            },
            block: function(e) {
                var t = e.mustache,
                    n, r, i, s, o = this.setupStackForMustache(t),
                    u = this.compileProgram(e.program);
                e.program.inverse && (s = this.compileProgram(e.program.inverse), this.declare("inverse", s)), this.opcode("invokeProgram", u, o.length, !!t.hash), this.declare("inverse", null), this.opcode("append")
            },
            inverse: function(e) {
                var t = this.setupStackForMustache(e.mustache),
                    n = this.compileProgram(e.program);
                this.declare("inverse", n), this.opcode("invokeProgram", null, t.length, !!e.mustache.hash), this.declare("inverse", null), this.opcode("append")
            },
            hash: function(e) {
                var t = e.pairs,
                    n, r;
                this.opcode("push", "{}");
                for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0])
            },
            partial: function(e) {
                var t = e.id;
                this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
            },
            content: function(e) {
                this.opcode("appendContent", e.string)
            },
            mustache: function(e) {
                var t = this.setupStackForMustache(e);
                this.opcode("invokeMustache", t.length, e.id.original, !!e.hash), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ID: function(e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("lookupWithHelpers", e.parts[0] || null, e.isScoped || !1);
                for (var t = 1, n = e.parts.length; t < n; t++) this.opcode("lookup", e.parts[t])
            },
            STRING: function(e) {
                this.opcode("pushString", e.string)
            },
            INTEGER: function(e) {
                this.opcode("push", e.integer)
            },
            BOOLEAN: function(e) {
                this.opcode("push", e.bool)
            },
            comment: function() {},
            pushParams: function(e) {
                var t = e.length,
                    n;
                while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n)
            },
            opcode: function(t, n, r, i) {
                this.opcodes.push(e.OPCODE_MAP[t]), n !== undefined && this.opcodes.push(n), r !== undefined && this.opcodes.push(r), i !== undefined && this.opcodes.push(i)
            },
            declare: function(e, t) {
                this.opcodes.push("DECLARE"), this.opcodes.push(e), this.opcodes.push(t)
            },
            addDepth: function(e) {
                if (e === 0) return;
                this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
            },
            setupStackForMustache: function(e) {
                var t = e.params;
                return this.pushParams(t), e.hash && this.hash(e.hash), this.ID(e.id), t
            }
        }, t.prototype = {
            nameLookup: function(e, n, r) {
                return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
            },
            appendToBuffer: function(e) {
                return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(e, t, n, r) {
                this.environment = e, this.options = t || {}, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    aliases: {
                        self: "this"
                    },
                    registers: {
                        list: []
                    }
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.compileChildren(e, t);
                var i = e.opcodes,
                    s;
                this.i = 0;
                for (u = i.length; this.i < u; this.i++) s = this.nextOpcode(0), s[0] === "DECLARE" ? (this.i = this.i + 2, this[s[1]] = s[2]) : (this.i = this.i + s[1].length, this[s[0]].apply(this, s[1]));
                return this.createFunctionContext(r)
            },
            nextOpcode: function(t) {
                var n = this.environment.opcodes,
                    r = n[this.i + t],
                    i, s, o, u;
                if (r === "DECLARE") return i = n[this.i + 1], s = n[this.i + 2], ["DECLARE", i, s];
                i = e.DISASSEMBLE_MAP[r], o = e.multiParamSize(r), u = [];
                for (var a = 0; a < o; a++) u.push(n[this.i + a + 1 + t]);
                return [i, u]
            },
            eat: function(e) {
                this.i = this.i + e.length
            },
            preamble: function() {
                var e = [];
                this.useRegister("foundHelper");
                if (!this.isChild) {
                    var t = this.namespace,
                        n = "helpers = helpers || " + t + ".helpers;";
                    this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), e.push(n)
                } else e.push("");
                this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
            },
            createFunctionContext: function(e) {
                var t = this.stackVars;
                this.isChild || (t = t.concat(this.context.registers.list)), t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
                if (!this.isChild) {
                    var n = [];
                    for (var r in this.context.aliases) this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]
                }
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
                var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
                for (var s = 0, o = this.environment.depths.list.length; s < o; s++) i.push("depth" + this.environment.depths.list[s]);
                if (e) return i.push(this.source.join("\n  ")), Function.apply(this, i);
                var u = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
                return Handlebars.log(Handlebars.logger.DEBUG, u + "\n\n"), u
            },
            appendContent: function(e) {
                this.source.push(this.appendToBuffer(this.quotedString(e)))
            },
            append: function() {
                var e = this.popStack();
                this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                var e = this.nextOpcode(1),
                    t = "";
                this.context.aliases.escapeExpression = "this.escapeExpression", e[0] === "appendContent" && (t = " + " + this.quotedString(e[1][0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
            },
            getContext: function(e) {
                this.lastContext !== e && (this.lastContext = e)
            },
            lookupWithHelpers: function(e, t) {
                if (e) {
                    var n = this.nextStack();
                    this.usingKnownHelper = !1;
                    var r;
                    !t && this.options.knownHelpers[e] ? (r = n + " = " + this.nameLookup("helpers", e, "helper"), this.usingKnownHelper = !0) : t || this.options.knownHelpersOnly ? r = n + " = " + this.nameLookup("depth" + this.lastContext, e, "context") : (this.register("foundHelper", this.nameLookup("helpers", e, "helper")), r = n + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, e, "context")), r += ";", this.source.push(r)
                } else this.pushStack("depth" + this.lastContext)
            },
            lookup: function(e) {
                var t = this.topStack();
                this.source.push(t + " = (" + t + " === null || " + t + " === undefined || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context") + ");")
            },
            pushStringParam: function(e) {
                this.pushStack("depth" + this.lastContext), this.pushString(e)
            },
            pushString: function(e) {
                this.pushStack(this.quotedString(e))
            },
            push: function(e) {
                this.pushStack(e)
            },
            invokeMustache: function(e, t, n) {
                this.populateParams(e, this.quotedString(t), "{}", null, n, function(e, t, n) {
                    this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + n + "=== undef) { " + e + " = helperMissing.call(" + t + "); }"), e !== n && this.source.push("else { " + e + " = " + n + "; }"))
                })
            },
            invokeProgram: function(e, t, n) {
                var r = this.programExpression(this.inverse),
                    i = this.programExpression(e);
                this.populateParams(t, null, i, r, n, function(e, t, n) {
                    this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + e + " = blockHelperMissing.call(" + t + "); }"))
                })
            },
            populateParams: function(e, t, n, r, i, s) {
                var o = i || this.options.stringParams || r || this.options.data,
                    u = this.popStack(),
                    a, f = [],
                    l, c, h;
                o ? (this.register("tmp1", n), h = "tmp1") : h = "{ hash: {} }";
                if (o) {
                    var p = i ? this.popStack() : "{}";
                    this.source.push("tmp1.hash = " + p + ";")
                }
                this.options.stringParams && this.source.push("tmp1.contexts = [];");
                for (var d = 0; d < e; d++) l = this.popStack(), f.push(l), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
                r && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + r + ";")), this.options.data && this.source.push("tmp1.data = data;"), f.push(h), this.populateCall(f, u, t || u, s, n !== "{}")
            },
            populateCall: function(e, t, n, r, i) {
                var s = ["depth0"].concat(e).join(", "),
                    o = ["depth0"].concat(n).concat(e).join(", "),
                    u = this.nextStack();
                if (this.usingKnownHelper) this.source.push(u + " = " + t + ".call(" + s + ");");
                else {
                    this.context.aliases.functionType = '"function"';
                    var a = i ? "foundHelper && " : "";
                    this.source.push("if(" + a + "typeof " + t + " === functionType) { " + u + " = " + t + ".call(" + s + "); }")
                }
                r.call(this, u, o, t), this.usingKnownHelper = !1
            },
            invokePartial: function(e) {
                params = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"], this.options.data && params.push("data"), this.pushStack("self.invokePartial(" + params.join(", ") + ");")
            },
            assignToHash: function(e) {
                var t = this.popStack(),
                    n = this.topStack();
                this.source.push(n + "['" + e + "'] = " + t + ";")
            },
            compiler: t,
            compileChildren: function(e, t) {
                var n = e.children,
                    r, i;
                for (var s = 0, o = n.length; s < o; s++) {
                    r = n[s], i = new this.compiler, this.context.programs.push("");
                    var u = this.context.programs.length;
                    r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context)
                }
            },
            programExpression: function(e) {
                if (e == null) return "self.noop";
                var t = this.environment.children[e],
                    n = t.depths.list,
                    r = [t.index, t.name, "data"];
                for (var i = 0, s = n.length; i < s; i++) depth = n[i], depth === 1 ? r.push("depth0") : r.push("depth" + (depth - 1));
                return n.length === 0 ? "self.program(" + r.join(", ") + ")" : (r.shift(), "self.programWithDepth(" + r.join(", ") + ")")
            },
            register: function(e, t) {
                this.useRegister(e), this.source.push(e + " = " + t + ";")
            },
            useRegister: function(e) {
                this.context.registers[e] || (this.context.registers[e] = !0, this.context.registers.list.push(e))
            },
            pushStack: function(e) {
                return this.source.push(this.nextStack() + " = " + e + ";"), "stack" + this.stackSlot
            },
            nextStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
            },
            popStack: function() {
                return "stack" + this.stackSlot--
            },
            topStack: function() {
                return "stack" + this.stackSlot
            },
            quotedString: function(e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
            }
        };
        var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
            s = t.RESERVED_WORDS = {};
        for (var o = 0, u = i.length; o < u; o++) s[i[o]] = !0;
        t.isValidJavaScriptVariableName = function(e) {
            return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
        }
    }(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
        t = t || {};
        var n = Handlebars.parse(e),
            r = (new Handlebars.Compiler).compile(n, t);
        return (new Handlebars.JavaScriptCompiler).compile(r, t)
    }, Handlebars.compile = function(e, t) {
        function r() {
            var n = Handlebars.parse(e),
                r = (new Handlebars.Compiler).compile(n, t),
                i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
            return Handlebars.template(i)
        }
        t = t || {};
        var n;
        return function(e, t) {
            return n || (n = r()), n.call(this, e, t)
        }
    }, Handlebars.VM = {
        template: function(e) {
            var t = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(e, t, n) {
                    var r = this.programs[e];
                    return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r)
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop
            };
            return function(n, r) {
                return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)
            }
        },
        programWithDepth: function(e, t, n) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function(n, i) {
                return i = i || {}, e.apply(this, [n, i.data || t].concat(r))
            }
        },
        program: function(e, t) {
            return function(n, r) {
                return r = r || {}, e(n, r.data || t)
            }
        },
        noop: function() {
            return ""
        },
        invokePartial: function(e, t, n, r, i, s) {
            options = {
                helpers: r,
                partials: i,
                data: s
            };
            if (e === undefined) throw new Handlebars.Exception("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, options);
            if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
            return i[t] = Handlebars.compile(e), i[t](n, options)
        }
    }, Handlebars.template = Handlebars.VM.template, define("handlebars", function(e) {
        return function() {
            return e.Handlebars
        }
    }(this)), define("backstrapp/templateLoader", ["jquery", "underscore", "handlebars"], function(e, t, n) {
        return {
            fetchTemplate: function(r, i) {
                var s = window.JST = window.JST || {},
                    o = new e.Deferred;
                if (s[r]) {
                    var u = n.template(s[r]);
                    return t.isFunction(i) && i(u), o.resolve(u)
                }
                return r = "app/templates/" + r + ".html", e.ajax({
                    url: r,
                    type: "get",
                    dataType: "text",
                    cache: !1,
                    global: !1,
                    success: function(e) {
                        s[r] = e, t.isFunction(i) && i(s[r]), o.resolve(s[r])
                    }
                }), o.promise()
            }
        }
    }), define("backstrapp/backstrappMarionette", ["underscore", "backbone", "marionette_async", "handlebars", "./templateLoader"], function(e, t, n, r, i) {
        var s = {},
            o = t.Marionette;
        s.Marionette = o, s.Layout = o.Layout, s.Region = o.Region, o.View.prototype.log = function(e, t) {
            if (s.app.debug !== !0) return;
            var n = "";
            this.template && (n = e.cid + "::" + this.template + " --- " + t.toUpperCase()), this.itemView && (n = e.cid + "::" + this.itemView.prototype.template + "_Collection" + " --- " + this.collection.length + " ITEMS " + t.toUpperCase()), s.app.log("info", n, e)
        }, s.Layout = o.Layout.extend({
            constructor: function() {
                var e = this;
                arguments.length > 0 && arguments[0].parent && (this.parent = arguments[0].parent, this.parent.on("item:before:close", function() {
                    e.close()
                })), o.Layout.prototype.constructor.apply(this, arguments), this.log(this, "constructed"), this.bindTo(this, "show", function() {
                    e.log(e, "showed")
                }, this)
            },
            render: function() {
                var e = o.Layout.prototype.render.apply(this);
                return this.log(this, "rendered"), e
            },
            close: function() {
                o.Layout.prototype.close.apply(this), this.log(this, "closed")
            }
        }), s.ItemView = o.ItemView.extend({
            constructor: function() {
                var e = this;
                arguments.length > 0 && arguments[0].parent && (this.parent = arguments[0].parent, this.parent.on("item:before:close", function() {
                    e.close()
                })), o.ItemView.prototype.constructor.apply(this, arguments), this.log(this, "constructed"), this.bindTo(this, "show", function() {
                    e.log(e, "showed")
                }, this)
            },
            render: function() {
                var e = o.ItemView.prototype.render.apply(this);
                return this.log(this, "rendered"), e
            },
            close: function() {
                o.ItemView.prototype.close.apply(this), this.log(this, "closed")
            }
        }), s.CollectionView = o.CollectionView.extend({
            constructor: function() {
                var e = this;
                arguments.length > 0 && arguments[0].parent && (this.parent = arguments[0].parent, this.parent.on("item:before:close", function() {
                    e.close()
                })), o.CollectionView.prototype.constructor.apply(this, arguments), this.log(this, "constructed"), this.bindTo(this, "show", function() {
                    e.log(e, "showed")
                }, this)
            },
            render: function() {
                var e = o.CollectionView.prototype.render.apply(this);
                return this.log(this, "rendered"), e
            },
            close: function() {
                o.CollectionView.prototype.close.apply(this), this.log(this, "closed")
            }
        }), s.CompositeView = o.CompositeView, o.Application.prototype.origStart = o.Application.prototype.start, e.extend(o.Application.prototype, {
            asyncInitializers: [],
            addAsyncInitializer: function(e) {
                this.asyncInitializers.push(e)
            },
            start: function(e, t) {
                function r() {
                    n--, !n && t && t()
                }
                typeof e == "function" && (t = e, e = {}), e = e || {};
                var n = this.asyncInitializers.length;
                for (var i = 0, s = n; i < s; i++) this.asyncInitializers[i](e, r);
                this.origStart(e)
            }
        }), s.app = new o.Application, s.app.store = new t.Model, s.app.log = function(e, t, n) {
            if (s.app.debug !== !0) return;
            window.console && window.console.log && console.log(t)
        }, s.renderer = o.Renderer, t.Marionette.TemplateCache.prototype.loadTemplate = function(t, n) {
            var s = this;
            i.fetchTemplate(t, function(t) {
                var i = e.isFunction(t) ? t : r.compile(t);
                n.call(s, i)
            })
        };
        var u = function(e, t) {
            if (!e) return null;
            var n = e(t);
            return n
        };
        return s.renderer.renderTemplate = u, s
    }), define("backstrapp/baseCollection", ["underscore", "backbone"], function(e, t) {
        var n = t.Collection.extend({
            fetchNew: function(n) {
                n = n || {};
                var r = this,
                    i = n.success;
                return n.success = function(t, s, o) {
                    e(r.parse(t, o)).each(function(e) {
                        r.get(e.id) || r.add(e, {
                            silent: !0
                        })
                    }), n.silent || r.trigger("reset", r, n), i && i(r, t)
                }, (this.sync || t.sync).call(this, "read", this, n)
            },
            getOrCreate: function(e, t) {
                t = t || !0;
                var n = this.get(e);
                return n || (n = new this.model({
                    id: e
                }), t && this.add(n)), n
            }
        });
        return n
    }), define("backstrapp/baseModel", ["underscore", "backbone"], function(e, t) {
        var n = t.Model.extend({
            fetchNew: function(n) {
                n = n || {};
                var r = this,
                    i = n.success;
                return n.success = function(t, s, o) {
                    e(r.parse(t, o)).each(function(e) {
                        r.get(e.id) || r.add(e, {
                            silent: !0
                        })
                    }), n.silent || r.trigger("reset", r, n), i && i(r, t)
                }, (this.sync || t.sync).call(this, "read", this, n)
            }
        });
        return n
    }), define("backstrapp/baseController", ["underscore", "backbone"], function(e, t) {
        var n = t.Model.extend({
            navigate: function(n, r, i) {
                e.isArray(r) || (i = r || {}, r = []), i = i || {};
                if (this[n]) this[n].apply(this, r);
                else {
                    i.trigger = !0;
                    for (var s = 0, o = r.length; s < o; s++) n = n + "/" + r[s]
                }
                t.history.navigate(n, i)
            }
        });
        return n
    }), define("backstrapp/baseRouter", ["underscore", "backbone", "marionette"], function(e, t, n) {
        var r = t.Marionette.AppRouter.extend({});
        return r
    }), define("backstrapp/qs", ["underscore", "backbone"], function(e, t) {
        function i(e) {
            e.split("&").forEach(function(e) {
                var t = e.split("="),
                    n = t[1] ? decodeURIComponent(t[1]) : null;
                t.length > 1 && r.setSerialized(t[0], n)
            })
        }
        var n = t.Model.extend({
                initialize: function() {
                    this.params = {}
                },
                deserialize: function(t, n) {
                    var r = this.params,
                        i = r[t] && r[t].deserialize || e.identity;
                    return i(n)
                },
                serialize: function(t, n) {
                    var r = this.params,
                        i = r[t] && r[t].serialize || e.identity;
                    return i(n)
                },
                setSerialized: function(e, t) {
                    o = {}, o[e] = this.deserialize(e, t), this.set(o)
                }
            }),
            r = new n;
        return originalGetFragment = t.History.prototype.getFragment, t.History.prototype.getFragment = function() {
            var e = originalGetFragment.apply(this, arguments),
                t = e.split("?"),
                n = t[1];
            return n && i(n), t[0]
        }, r
    }), define("backstrapp/backstrapp", ["underscore", "backbone", "./backstrappMarionette", "./baseCollection", "./baseModel", "./baseController", "./baseRouter", "./qs"], function(e, t, n, r, i, s, o, u) {
        t.sync = function(e, t, n) {
            var r = a[e];
            if (r !== "GET") return n.success();
            origSync(e, t, n)
        };
        var a = {
                create: "POST",
                update: "PUT",
                "delete": "DELETE",
                read: "GET"
            },
            f = e.extend({}, n);
        return f.Collection = r, f.Model = i, f.Controller = s, f.Router = o, f.qs = u, f
    }),
    function(e, t) {
        if (typeof exports == "object") {
            var n = require("jquery");
            module.exports = t(n)
        } else typeof define == "function" && define.amd && define("i18next", ["jquery"], t)
    }(this, function(e) {
        function u(e, t) {
            if (!t || typeof t == "function") return e;
            for (var n in t) e[n] = t[n];
            return e
        }

        function a(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = s === undefined || typeof e == "function";
            if (n) {
                if (o) {
                    for (r in e)
                        if (t.apply(e[r], n) === !1) break
                } else
                    for (; i < s;)
                        if (t.apply(e[i++], n) === !1) break
            } else if (o) {
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break
            } else
                for (; i < s;)
                    if (t.call(e[i], i, e[i++]) === !1) break; return e
        }

        function f(e) {
            var t = function(e) {
                    if (window.XMLHttpRequest) return e(null, new XMLHttpRequest);
                    if (window.ActiveXObject) try {
                        return e(null, new ActiveXObject("Msxml2.XMLHTTP"))
                    } catch (t) {
                        return e(null, new ActiveXObject("Microsoft.XMLHTTP"))
                    }
                    return e(new Error)
                },
                n = function(e) {
                    if (typeof e == "string") return e;
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                },
                r = function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    var t = "";
                    for (var n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
                    }
                    return t
                },
                i = function(e) {
                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    e = r(e);
                    var n = "",
                        i, s, o, u, a, f, l, c = 0;
                    do i = e.charCodeAt(c++), s = e.charCodeAt(c++), o = e.charCodeAt(c++), u = i >> 2, a = (i & 3) << 4 | s >> 4, f = (s & 15) << 2 | o >> 6, l = o & 63, isNaN(s) ? f = l = 64 : isNaN(o) && (l = 64), n += t.charAt(u) + t.charAt(a) + t.charAt(f) + t.charAt(l), i = s = o = "", u = a = f = l = ""; while (c < e.length);
                    return n
                },
                s = function() {
                    var e = arguments[0];
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function(e, r, i, u) {
                    typeof i == "function" && (u = i, i = {}), i.cache = i.cache || !1, i.data = i.data || {}, i.headers = i.headers || {}, i.jsonp = i.jsonp || !1, i.async = i.async === undefined ? !0 : i.async;
                    var a = s({
                            accept: "*/*",
                            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
                        }, o.headers, i.headers),
                        f;
                    a["content-type"] === "application/json" ? f = JSON.stringify(i.data) : f = n(i.data);
                    if (e === "GET") {
                        var l = [];
                        f && (l.push(f), f = null), i.cache || l.push("_=" + (new Date).getTime()), i.jsonp && (l.push("callback=" + i.jsonp), l.push("jsonp=" + i.jsonp)), l = l.join("&"), l.length > 1 && (r.indexOf("?") > -1 ? r += "&" + l : r += "?" + l);
                        if (i.jsonp) {
                            var c = document.getElementsByTagName("head")[0],
                                h = document.createElement("script");
                            h.type = "text/javascript", h.src = r, c.appendChild(h);
                            return
                        }
                    }
                    t(function(t, n) {
                        if (t) return u(t);
                        n.open(e, r, i.async);
                        for (var s in a) a.hasOwnProperty(s) && n.setRequestHeader(s, a[s]);
                        n.onreadystatechange = function() {
                            if (n.readyState === 4) {
                                var e = n.responseText || "";
                                if (!u) return;
                                u(n.status, {
                                    text: function() {
                                        return e
                                    },
                                    json: function() {
                                        return JSON.parse(e)
                                    }
                                })
                            }
                        }, n.send(f)
                    })
                },
                u = {
                    authBasic: function(e, t) {
                        o.headers.Authorization = "Basic " + i(e + ":" + t)
                    },
                    connect: function(e, t, n) {
                        return o("CONNECT", e, t, n)
                    },
                    del: function(e, t, n) {
                        return o("DELETE", e, t, n)
                    },
                    get: function(e, t, n) {
                        return o("GET", e, t, n)
                    },
                    head: function(e, t, n) {
                        return o("HEAD", e, t, n)
                    },
                    headers: function(e) {
                        o.headers = e || {}
                    },
                    isAllowed: function(e, t, n) {
                        this.options(e, function(e, r) {
                            n(r.text().indexOf(t) !== -1)
                        })
                    },
                    options: function(e, t, n) {
                        return o("OPTIONS", e, t, n)
                    },
                    patch: function(e, t, n) {
                        return o("PATCH", e, t, n)
                    },
                    post: function(e, t, n) {
                        return o("POST", e, t, n)
                    },
                    put: function(e, t, n) {
                        return o("PUT", e, t, n)
                    },
                    trace: function(e, t, n) {
                        return o("TRACE", e, t, n)
                    }
                },
                a = e.type ? e.type.toLowerCase() : "get";
            u[a](e.url, e, function(t, n) {
                t === 200 ? e.success(n.json(), t, null) : e.error(n.text(), t, null)
            })
        }

        function p(i, u) {
            typeof i == "function" && (u = i, i = {}), i = i || {}, h.extend(o, i), typeof o.ns == "string" && (o.ns = {
                namespaces: [o.ns],
                defaultNs: o.ns
            }), o.interpolationPrefixEscaped = h.regexEscape(o.interpolationPrefix), o.interpolationSuffixEscaped = h.regexEscape(o.interpolationSuffix), o.lng || (o.lng = h.detectLanguage()), o.lng ? o.useCookie && h.cookie.create(o.cookieName, o.lng, o.cookieExpirationTime) : (o.lng = o.fallbackLng, o.useCookie && h.cookie.remove(o.cookieName)), s = h.toLanguages(o.lng), r = s[0], h.log("currentLng set to: " + r), M.setCurrentLng(r), e && o.setJqueryExt && E();
            var a;
            e && e.Deferred && (a = e.Deferred());
            if (o.resStore) {
                n = o.resStore, u && u(C), a && a.resolve();
                if (a) return a.promise();
                return
            }
            var f = h.toLanguages(o.lng);
            typeof o.preload == "string" && (o.preload = [o.preload]);
            for (var l = 0, c = o.preload.length; l < c; l++) {
                var p = h.toLanguages(o.preload[l]);
                for (var d = 0, v = p.length; d < v; d++) f.indexOf(p[d]) < 0 && f.push(p[d])
            }
            t.sync.load(f, o, function(e, t) {
                n = t, u && u(C), a && a.resolve()
            });
            if (a) return a.promise()
        }

        function d(e, t) {
            typeof e == "string" && (e = [e]);
            for (var n = 0, r = e.length; n < r; n++) o.preload.indexOf(e[n]) < 0 && o.preload.push(e[n]);
            return p(t)
        }

        function v(e, t, r) {
            typeof t != "string" && (r = t, t = o.ns.defaultNs), n[e] = n[e] || {}, n[e][t] = n[e][t] || {}, h.extend(n[e][t], r)
        }

        function m(e) {
            o.ns.defaultNs = e
        }

        function g(e, t) {
            y([e], t)
        }

        function y(e, r) {
            var i = {
                    dynamicLoad: o.dynamicLoad,
                    resGetPath: o.resGetPath,
                    getAsync: o.getAsync,
                    ns: {
                        namespaces: e,
                        defaultNs: ""
                    }
                },
                s = h.toLanguages(o.lng);
            typeof o.preload == "string" && (o.preload = [o.preload]);
            for (var u = 0, a = o.preload.length; u < a; u++) {
                var f = h.toLanguages(o.preload[u]);
                for (var l = 0, c = f.length; l < c; l++) s.indexOf(f[l]) < 0 && s.push(f[l])
            }
            var p = [];
            for (var d = 0, v = s.length; d < v; d++) {
                var m = !1,
                    g = n[s[d]];
                if (g)
                    for (var y = 0, b = e.length; y < b; y++) g[e[y]] || (m = !0);
                else m = !0;
                m && p.push(s[d])
            }
            p.length ? t.sync._fetch(p, i, function(i, s) {
                var u = e.length * p.length;
                h.each(e, function(e, i) {
                    h.each(p, function(e, a) {
                        n[a] = n[a] || {}, n[a][i] = s[a][i], u--, u === 0 && r && (o.useLocalStorage && t.sync._storeLocal(n), r())
                    })
                })
            }) : r && r()
        }

        function b(e, t) {
            return p({
                lng: e
            }, t)
        }

        function w() {
            return r
        }

        function E() {
            function t(t, n, r) {
                if (n.length === 0) return;
                var i = "text";
                if (n.indexOf("[") === 0) {
                    var s = n.split("]");
                    n = s[1], i = s[0].substr(1, s[0].length - 1)
                }
                n.indexOf(";") === n.length - 1 && (n = n.substr(0, n.length - 2));
                var u;
                i === "html" ? (u = o.defaultValueFromContent ? e.extend({
                    defaultValue: t.html()
                }, r) : r, t.html(e.t(n, u))) : i === "text" ? (u = o.defaultValueFromContent ? e.extend({
                    defaultValue: t.text()
                }, r) : r, t.text(e.t(n, u))) : (u = o.defaultValueFromContent ? e.extend({
                    defaultValue: t.attr(i)
                }, r) : r, t.attr(i, e.t(n, u)))
            }

            function n(n, r) {
                var i = n.attr(o.selectorAttr);
                if (!i) return;
                var s = n,
                    u = n.data("i18n-target");
                u && (s = n.find(u) || n), !r && o.useDataAttrOptions === !0 && (r = n.data("i18n-options")), r = r || {};
                if (i.indexOf(";") <= i.length - 1) {
                    var a = i.split(";");
                    e.each(a, function(e, n) {
                        t(s, n, r)
                    })
                } else t(s, k, r);
                o.useDataAttrOptions === !0 && n.data("i18n-options", r)
            }
            e.t = e.t || C, e.fn.i18n = function(t) {
                return this.each(function() {
                    n(e(this), t);
                    var r = e(this).find("[" + o.selectorAttr + "]");
                    r.each(function() {
                        n(e(this), t)
                    })
                })
            }
        }

        function S(e, t, n, r) {
            r = r || t;
            if (e.indexOf(r.interpolationPrefix || o.interpolationPrefix) < 0) return e;
            var i = r.interpolationPrefix ? h.regexEscape(r.interpolationPrefix) : o.interpolationPrefixEscaped,
                s = r.interpolationSuffix ? h.regexEscape(r.interpolationSuffix) : o.interpolationSuffixEscaped;
            return h.each(t, function(t, u) {
                typeof u == "object" && u !== null ? e = S(e, u, n ? n + o.keyseparator + t : t, r) : e = e.replace(new RegExp([i, n ? n + o.keyseparator + t : t, s].join(""), "g"), u)
            }), e
        }

        function x(e, t) {
            var n = ",",
                r = "{",
                s = "}",
                u = h.extend({}, t);
            delete u.postProcess;
            while (e.indexOf(o.reusePrefix) != -1) {
                i++;
                if (i > o.maxRecursion) break;
                var a = e.indexOf(o.reusePrefix),
                    f = e.indexOf(o.reuseSuffix, a) + o.reuseSuffix.length,
                    l = e.substring(a, f),
                    c = l.replace(o.reusePrefix, "").replace(o.reuseSuffix, "");
                if (c.indexOf(n) != -1) {
                    var p = c.indexOf(n);
                    if (c.indexOf(r, p) != -1 && c.indexOf(s, p) != -1) {
                        var d = c.indexOf(r, p),
                            v = c.indexOf(s, d) + s.length;
                        try {
                            u = h.extend(u, JSON.parse(c.substring(d, v))), c = c.substring(0, p)
                        } catch (m) {}
                    }
                }
                var g = L(c, u);
                e = e.replace(l, g)
            }
            return e
        }

        function T(e) {
            return e.context && typeof e.context == "string"
        }

        function N(e) {
            return e.count !== undefined && typeof e.count != "string" && e.count !== 1
        }

        function C(e, t) {
            return i = 0, L(e, t)
        }

        function L(e, i) {
            i = i || {};
            if (!n) return f;
            var u, a, f = i.defaultValue || e,
                l = s;
            if (i.lng) {
                l = h.toLanguages(i.lng);
                if (!n[l[0]]) {
                    var c = o.getAsync;
                    o.getAsync = !1, t.sync.load(l, o, function(e, t) {
                        h.extend(n, t), o.getAsync = c
                    })
                }
            }
            var p = i.ns || o.ns.defaultNs;
            if (e.indexOf(o.nsseparator) > -1) {
                var d = e.split(o.nsseparator);
                p = d[0], e = d[1]
            }
            if (T(i)) {
                u = h.extend({}, i), delete u.context, u.defaultValue = o.contextNotFound;
                var v = p + o.nsseparator + e + "_" + i.context;
                a = C(v, u);
                if (a != o.contextNotFound) return S(a, {
                    context: i.context
                })
            }
            if (N(i)) {
                u = h.extend({}, i), delete u.count, u.defaultValue = o.pluralNotFound;
                var m = p + o.nsseparator + e + o.pluralSuffix,
                    g = M.get(r, i.count);
                g >= 0 ? m = m + "_" + g : g === 1 && (m = p + o.nsseparator + e), a = C(m, u);
                if (a != o.pluralNotFound) return S(a, {
                    count: i.count
                })
            }
            var y, b = e.split(o.keyseparator);
            for (var w = 0, E = l.length; w < E; w++) {
                if (y) break;
                var k = l[w],
                    A = 0,
                    D = n[k] && n[k][p];
                while (b[A]) D = D && D[b[A]], A++;
                if (D !== undefined) {
                    if (typeof D == "string") D = S(D, i), D = x(D, i);
                    else if (Object.prototype.toString.apply(D) === "[object Array]" && !o.returnObjectTrees && !i.returnObjectTrees) D = D.join("\n"), D = S(D, i), D = x(D, i);
                    else if (!o.returnObjectTrees && !i.returnObjectTrees) D = "key '" + p + ":" + e + " (" + k + ")' " + "returned a object instead of string.", h.log(D);
                    else {
                        var P = {};
                        for (var H in D) P[H] = L(p + o.nsseparator + e + o.keyseparator + H, i);
                        D = P
                    }
                    y = D
                }
            }
            y === undefined && o.fallbackToDefaultNS && (y = L(e, i)), y === undefined && o.sendMissing && (i.lng ? O.postMissing(l[0], p, e, f, l) : O.postMissing(o.lng, p, e, f, l));
            var B = i.postProcess || o.postProcess;
            return y !== undefined && B && _[B] && (y = _[B](y, e, i)), y === undefined && (f = S(f, i), f = x(f, i)), y !== undefined ? y : f
        }

        function A() {
            var e, t = [];
            typeof window != "undefined" && (function() {
                var e = window.location.search.substring(1),
                    n = e.split("&");
                for (var r = 0; r < n.length; r++) {
                    var i = n[r].indexOf("=");
                    if (i > 0) {
                        var s = n[r].substring(0, i),
                            o = n[r].substring(i + 1);
                        t[s] = o
                    }
                }
            }(), t[o.detectLngQS] && (e = t[o.detectLngQS]));
            if (!e && typeof document != "undefined" && o.useCookie) {
                var n = h.cookie.read(o.cookieName);
                n && (e = n)
            }
            return !e && typeof navigator != "undefined" && (e = navigator.language ? navigator.language : navigator.userLanguage), e
        }
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            if (this == null) throw new TypeError;
            var t = Object(this),
                n = t.length >>> 0;
            if (n === 0) return -1;
            var r = 0;
            arguments.length > 0 && (r = Number(arguments[1]), r != r ? r = 0 : r != 0 && r != Infinity && r != -Infinity && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
            if (r >= n) return -1;
            var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0);
            for (; i < n; i++)
                if (i in t && t[i] === e) return i;
            return -1
        });
        var t = {},
            n = {},
            r, i = 0,
            s = [],
            o = {
                lng: undefined,
                load: "all",
                preload: [],
                lowerCaseLng: !1,
                returnObjectTrees: !1,
                fallbackLng: "dev",
                detectLngQS: "setLng",
                ns: "translation",
                fallbackToDefaultNS: !1,
                nsseparator: ":",
                keyseparator: ".",
                selectorAttr: "data-i18n",
                debug: !1,
                resGetPath: "locales/__lng__/__ns__.json",
                resPostPath: "locales/add/__lng__/__ns__",
                getAsync: !0,
                postAsync: !0,
                resStore: undefined,
                useLocalStorage: !1,
                localStorageExpirationTime: 6048e5,
                dynamicLoad: !1,
                sendMissing: !1,
                sendMissingTo: "fallback",
                sendType: "POST",
                interpolationPrefix: "__",
                interpolationSuffix: "__",
                reusePrefix: "$t(",
                reuseSuffix: ")",
                pluralSuffix: "_plural",
                pluralNotFound: ["plural_not_found", Math.random()].join(""),
                contextNotFound: ["context_not_found", Math.random()].join(""),
                setJqueryExt: !0,
                defaultValueFromContent: !0,
                useDataAttrOptions: !1,
                cookieExpirationTime: undefined,
                useCookie: !0,
                cookieName: "i18next",
                postProcess: undefined
            },
            l = {
                create: function(e, t, n) {
                    var r;
                    if (n) {
                        var i = new Date;
                        i.setTime(i.getTime() + n * 60 * 1e3), r = "; expires=" + i.toGMTString()
                    } else r = "";
                    document.cookie = e + "=" + t + r + "; path=/"
                },
                read: function(e) {
                    var t = e + "=",
                        n = document.cookie.split(";");
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        while (i.charAt(0) == " ") i = i.substring(1, i.length);
                        if (i.indexOf(t) === 0) return i.substring(t.length, i.length)
                    }
                    return null
                },
                remove: function(e) {
                    this.create(e, "", -1)
                }
            },
            c = {
                create: function(e, t, n) {},
                read: function(e) {
                    return null
                },
                remove: function(e) {}
            },
            h = {
                extend: e ? e.extend : u,
                each: e ? e.each : a,
                ajax: e ? e.ajax : f,
                cookie: typeof document != "undefined" ? l : c,
                detectLanguage: A,
                log: function(e) {
                    o.debug && typeof console != "undefined" && console.log(e)
                },
                toLanguages: function(e) {
                    var t = [];
                    if (typeof e == "string" && e.indexOf("-") > -1) {
                        var n = e.split("-");
                        e = o.lowerCaseLng ? n[0].toLowerCase() + "-" + n[1].toLowerCase() : n[0].toLowerCase() + "-" + n[1].toUpperCase(), o.load !== "unspecific" && t.push(e), o.load !== "current" && t.push(n[0])
                    } else t.push(e);
                    return t.indexOf(o.fallbackLng) === -1 && o.fallbackLng && t.push(o.fallbackLng), t
                },
                regexEscape: function(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }
            },
            O = {
                load: function(e, t, n) {
                    t.useLocalStorage ? O._loadLocal(e, t, function(r, i) {
                        var s = [];
                        for (var o = 0, u = e.length; o < u; o++) i[e[o]] || s.push(e[o]);
                        s.length > 0 ? O._fetch(s, t, function(e, t) {
                            h.extend(i, t), O._storeLocal(t), n(null, i)
                        }) : n(null, i)
                    }) : O._fetch(e, t, function(e, t) {
                        n(null, t)
                    })
                },
                _loadLocal: function(e, t, n) {
                    var r = {},
                        i = (new Date).getTime();
                    if (window.localStorage) {
                        var s = e.length;
                        h.each(e, function(e, o) {
                            var u = window.localStorage.getItem("res_" + o);
                            u && (u = JSON.parse(u), u.i18nStamp && u.i18nStamp + t.localStorageExpirationTime > i && (r[o] = u)), s--, s === 0 && n(null, r)
                        })
                    }
                },
                _storeLocal: function(e) {
                    if (window.localStorage)
                        for (var t in e) e[t].i18nStamp = (new Date).getTime(), window.localStorage.setItem("res_" + t, JSON.stringify(e[t]));
                    return
                },
                _fetch: function(e, t, n) {
                    var r = t.ns,
                        i = {};
                    if (!t.dynamicLoad) {
                        var s = r.namespaces.length * e.length,
                            o;
                        h.each(r.namespaces, function(r, u) {
                            h.each(e, function(e, r) {
                                var a = function(e, t) {
                                    e && (o = o || [], o.push(e)), i[r] = i[r] || {}, i[r][u] = t, s--, s === 0 && n(o, i)
                                };
                                typeof t.customLoad == "function" ? t.customLoad(r, u, t, a) : O._fetchOne(r, u, t, a)
                            })
                        })
                    } else {
                        var u = S(t.resGetPath, {
                            lng: e.join("+"),
                            ns: r.namespaces.join("+")
                        });
                        h.ajax({
                            url: u,
                            success: function(e, t, r) {
                                h.log("loaded: " + u), n(null, e)
                            },
                            error: function(e, t, r) {
                                h.log("failed loading: " + u), n("failed loading resource.json error: " + r)
                            },
                            dataType: "json",
                            async: t.getAsync
                        })
                    }
                },
                _fetchOne: function(e, t, n, r) {
                    var i = S(n.resGetPath, {
                        lng: e,
                        ns: t
                    });
                    h.ajax({
                        url: i,
                        success: function(e, t, n) {
                            h.log("loaded: " + i), r(null, e)
                        },
                        error: function(e, t, n) {
                            h.log("failed loading: " + i), r(n, {})
                        },
                        dataType: "json",
                        async: n.getAsync
                    })
                },
                postMissing: function(e, t, r, i, s) {
                    var u = {};
                    u[r] = i;
                    var a = [];
                    if (o.sendMissingTo === "fallback") a.push({
                        lng: o.fallbackLng,
                        url: S(o.resPostPath, {
                            lng: o.fallbackLng,
                            ns: t
                        })
                    });
                    else if (o.sendMissingTo === "current") a.push({
                        lng: e,
                        url: S(o.resPostPath, {
                            lng: e,
                            ns: t
                        })
                    });
                    else if (o.sendMissingTo === "all")
                        for (var f = 0, l = s.length; f < l; f++) a.push({
                            lng: s[f],
                            url: S(o.resPostPath, {
                                lng: s[f],
                                ns: t
                            })
                        });
                    for (var c = 0, p = a.length; c < p; c++) {
                        var d = a[c];
                        h.ajax({
                            url: d.url,
                            type: o.sendType,
                            data: u,
                            success: function(e, s, o) {
                                h.log("posted missing key '" + r + "' to: " + d.url);
                                var u = r.split("."),
                                    a = 0,
                                    f = n[d.lng][t];
                                while (u[a]) a === u.length - 1 ? f = f[u[a]] = i : f = f[u[a]] = f[u[a]] || {}, a++
                            },
                            error: function(e, t, n) {
                                h.log("failed posting missing key '" + r + "' to: " + d.url)
                            },
                            dataType: "json",
                            async: o.postAsync
                        })
                    }
                }
            },
            M = {
                rules: {
                    ach: {
                        name: "Acholi",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    af: {
                        name: "Afrikaans",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ak: {
                        name: "Akan",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    am: {
                        name: "Amharic",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    an: {
                        name: "Aragonese",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ar: {
                        name: "Arabic",
                        numbers: [0, 1, 2, 3, 11, 100],
                        plurals: function(e) {
                            return Number(e === 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                        }
                    },
                    arn: {
                        name: "Mapudungun",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    ast: {
                        name: "Asturian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ay: {
                        name: "Aymará",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    az: {
                        name: "Azerbaijani",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    be: {
                        name: "Belarusian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    bg: {
                        name: "Bulgarian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    bn: {
                        name: "Bengali",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    bo: {
                        name: "Tibetan",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    br: {
                        name: "Breton",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    bs: {
                        name: "Bosnian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    ca: {
                        name: "Catalan",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    cgg: {
                        name: "Chiga",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    cs: {
                        name: "Czech",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                        }
                    },
                    csb: {
                        name: "Kashubian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    cy: {
                        name: "Welsh",
                        numbers: [1, 2, 3, 8],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3)
                        }
                    },
                    da: {
                        name: "Danish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    de: {
                        name: "German",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    dz: {
                        name: "Dzongkha",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    el: {
                        name: "Greek",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    en: {
                        name: "English",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    eo: {
                        name: "Esperanto",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    es: {
                        name: "Spanish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    es_ar: {
                        name: "Argentinean Spanish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    et: {
                        name: "Estonian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    eu: {
                        name: "Basque",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    fa: {
                        name: "Persian",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    fi: {
                        name: "Finnish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    fil: {
                        name: "Filipino",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    fo: {
                        name: "Faroese",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    fr: {
                        name: "French",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    fur: {
                        name: "Friulian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    fy: {
                        name: "Frisian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ga: {
                        name: "Irish",
                        numbers: [1, 2, 3, 7, 11],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                        }
                    },
                    gd: {
                        name: "Scottish Gaelic",
                        numbers: [1, 2, 3, 20],
                        plurals: function(e) {
                            return Number(e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3)
                        }
                    },
                    gl: {
                        name: "Galician",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    gu: {
                        name: "Gujarati",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    gun: {
                        name: "Gun",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    ha: {
                        name: "Hausa",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    he: {
                        name: "Hebrew",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    hi: {
                        name: "Hindi",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    hr: {
                        name: "Croatian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    hu: {
                        name: "Hungarian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    hy: {
                        name: "Armenian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ia: {
                        name: "Interlingua",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    id: {
                        name: "Indonesian",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    is: {
                        name: "Icelandic",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e % 10 != 1 || e % 100 == 11)
                        }
                    },
                    it: {
                        name: "Italian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ja: {
                        name: "Japanese",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    jbo: {
                        name: "Lojban",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    jv: {
                        name: "Javanese",
                        numbers: [0, 1],
                        plurals: function(e) {
                            return Number(e !== 0)
                        }
                    },
                    ka: {
                        name: "Georgian",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    kk: {
                        name: "Kazakh",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    km: {
                        name: "Khmer",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    kn: {
                        name: "Kannada",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ko: {
                        name: "Korean",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    ku: {
                        name: "Kurdish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    kw: {
                        name: "Cornish",
                        numbers: [1, 2, 3, 4],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3)
                        }
                    },
                    ky: {
                        name: "Kyrgyz",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    lb: {
                        name: "Letzeburgesch",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ln: {
                        name: "Lingala",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    lo: {
                        name: "Lao",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    lt: {
                        name: "Lithuanian",
                        numbers: [1, 2, 10],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    lv: {
                        name: "Latvian",
                        numbers: [0, 1, 2],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2)
                        }
                    },
                    mai: {
                        name: "Maithili",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    mfe: {
                        name: "Mauritian Creole",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    mg: {
                        name: "Malagasy",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    mi: {
                        name: "Maori",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    mk: {
                        name: "Macedonian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e == 1 || e % 10 == 1 ? 0 : 1)
                        }
                    },
                    ml: {
                        name: "Malayalam",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    mn: {
                        name: "Mongolian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    mnk: {
                        name: "Mandinka",
                        numbers: [0, 1, 2],
                        plurals: function(e) {
                            return Number(e == 1 ? 1 : 2)
                        }
                    },
                    mr: {
                        name: "Marathi",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ms: {
                        name: "Malay",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    mt: {
                        name: "Maltese",
                        numbers: [1, 2, 11, 20],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e === 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                        }
                    },
                    nah: {
                        name: "Nahuatl",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    nap: {
                        name: "Neapolitan",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    nb: {
                        name: "Norwegian Bokmal",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ne: {
                        name: "Nepali",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    nl: {
                        name: "Dutch",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    nn: {
                        name: "Norwegian Nynorsk",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    no: {
                        name: "Norwegian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    nso: {
                        name: "Northern Sotho",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    oc: {
                        name: "Occitan",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    or: {
                        name: "Oriya",
                        numbers: [2, 1],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    pa: {
                        name: "Punjabi",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    pap: {
                        name: "Papiamento",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    pl: {
                        name: "Polish",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    pms: {
                        name: "Piemontese",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ps: {
                        name: "Pashto",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    pt: {
                        name: "Portuguese",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    pt_br: {
                        name: "Brazilian Portuguese",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    rm: {
                        name: "Romansh",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ro: {
                        name: "Romanian",
                        numbers: [1, 2, 20],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e === 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                        }
                    },
                    ru: {
                        name: "Russian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    sah: {
                        name: "Yakut",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    sco: {
                        name: "Scots",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    se: {
                        name: "Northern Sami",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    si: {
                        name: "Sinhala",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    sk: {
                        name: "Slovak",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                        }
                    },
                    sl: {
                        name: "Slovenian",
                        numbers: [5, 1, 2, 3],
                        plurals: function(e) {
                            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                        }
                    },
                    so: {
                        name: "Somali",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    son: {
                        name: "Songhay",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    sq: {
                        name: "Albanian",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    sr: {
                        name: "Serbian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    su: {
                        name: "Sundanese",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    sv: {
                        name: "Swedish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    sw: {
                        name: "Swahili",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    ta: {
                        name: "Tamil",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    te: {
                        name: "Telugu",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    tg: {
                        name: "Tajik",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    th: {
                        name: "Thai",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    ti: {
                        name: "Tigrinya",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    tk: {
                        name: "Turkmen",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    tr: {
                        name: "Turkish",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    tt: {
                        name: "Tatar",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    ug: {
                        name: "Uyghur",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    uk: {
                        name: "Ukrainian",
                        numbers: [1, 2, 5],
                        plurals: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        }
                    },
                    ur: {
                        name: "Urdu",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    uz: {
                        name: "Uzbek",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    vi: {
                        name: "Vietnamese",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    wa: {
                        name: "Walloon",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e > 1)
                        }
                    },
                    wo: {
                        name: "Wolof",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    },
                    yo: {
                        name: "Yoruba",
                        numbers: [1, 2],
                        plurals: function(e) {
                            return Number(e != 1)
                        }
                    },
                    zh: {
                        name: "Chinese",
                        numbers: [1],
                        plurals: function(e) {
                            return 0
                        }
                    }
                },
                addRule: function(e, t) {
                    M.rules[e] = t
                },
                setCurrentLng: function(e) {
                    if (!M.currentRule || M.currentRule.lng !== e) {
                        var t = e.split("-");
                        M.currentRule = {
                            lng: e,
                            rule: M.rules[t[0]]
                        }
                    }
                },
                get: function(e, t) {
                    function r(t, n) {
                        var r;
                        M.currentRule && M.currentRule.lng === e ? r = M.currentRule.rule : r = M.rules[t];
                        if (r) {
                            var i = r.plurals(n),
                                s = r.numbers[i];
                            return r.numbers.length === 2 && r.numbers[0] === 1 && (s === 2 ? s = -1 : s === 1 && (s = 1)), s
                        }
                        return n === 1 ? "1" : "-1"
                    }
                    var n = e.split("-");
                    return r(n[0], t)
                }
            },
            _ = {},
            D = function(e, t) {
                _[e] = t
            },
            P = function() {
                function e(e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                }

                function t(e, t) {
                    for (var n = []; t > 0; n[--t] = e);
                    return n.join("")
                }
                var n = function() {
                    return n.cache.hasOwnProperty(arguments[0]) || (n.cache[arguments[0]] = n.parse(arguments[0])), n.format.call(null, n.cache[arguments[0]], arguments)
                };
                return n.format = function(n, r) {
                    var i = 1,
                        s = n.length,
                        o = "",
                        u, a = [],
                        f, l, c, h, p, d;
                    for (f = 0; f < s; f++) {
                        o = e(n[f]);
                        if (o === "string") a.push(n[f]);
                        else if (o === "array") {
                            c = n[f];
                            if (c[2]) {
                                u = r[i];
                                for (l = 0; l < c[2].length; l++) {
                                    if (!u.hasOwnProperty(c[2][l])) throw P('[sprintf] property "%s" does not exist', c[2][l]);
                                    u = u[c[2][l]]
                                }
                            } else c[1] ? u = r[c[1]] : u = r[i++];
                            if (/[^s]/.test(c[8]) && e(u) != "number") throw P("[sprintf] expecting number but found %s", e(u));
                            switch (c[8]) {
                                case "b":
                                    u = u.toString(2);
                                    break;
                                case "c":
                                    u = String.fromCharCode(u);
                                    break;
                                case "d":
                                    u = parseInt(u, 10);
                                    break;
                                case "e":
                                    u = c[7] ? u.toExponential(c[7]) : u.toExponential();
                                    break;
                                case "f":
                                    u = c[7] ? parseFloat(u).toFixed(c[7]) : parseFloat(u);
                                    break;
                                case "o":
                                    u = u.toString(8);
                                    break;
                                case "s":
                                    u = (u = String(u)) && c[7] ? u.substring(0, c[7]) : u;
                                    break;
                                case "u":
                                    u = Math.abs(u);
                                    break;
                                case "x":
                                    u = u.toString(16);
                                    break;
                                case "X":
                                    u = u.toString(16).toUpperCase()
                            }
                            u = /[def]/.test(c[8]) && c[3] && u >= 0 ? "+" + u : u, p = c[4] ? c[4] == "0" ? "0" : c[4].charAt(1) : " ", d = c[6] - String(u).length, h = c[6] ? t(p, d) : "", a.push(c[5] ? u + h : h + u)
                        }
                    }
                    return a.join("")
                }, n.cache = {}, n.parse = function(e) {
                    var t = e,
                        n = [],
                        r = [],
                        i = 0;
                    while (t) {
                        if ((n = /^[^\x25]+/.exec(t)) !== null) r.push(n[0]);
                        else if ((n = /^\x25{2}/.exec(t)) !== null) r.push("%");
                        else {
                            if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null) throw "[sprintf] huh?";
                            if (n[2]) {
                                i |= 1;
                                var s = [],
                                    o = n[2],
                                    u = [];
                                if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null) throw "[sprintf] huh?";
                                s.push(u[1]);
                                while ((o = o.substring(u[0].length)) !== "")
                                    if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) s.push(u[1]);
                                    else {
                                        if ((u = /^\[(\d+)\]/.exec(o)) === null) throw "[sprintf] huh?";
                                        s.push(u[1])
                                    }
                                n[2] = s
                            } else i |= 2;
                            if (i === 3) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                            r.push(n)
                        }
                        t = t.substring(n[0].length)
                    }
                    return r
                }, n
            }(),
            H = function(e, t) {
                return t.unshift(e), P.apply(null, t)
            };
        return D("sprintf", function(e, t, n) {
            return n.sprintf ? Object.prototype.toString.apply(n.sprintf) === "[object Array]" ? H(e, n.sprintf) : typeof n.sprintf == "object" ? P(e, n.sprintf) : e : e
        }), t.init = p, t.setLng = b, t.preload = d, t.addResourceBundle = v, t.loadNamespace = g, t.loadNamespaces = y, t.setDefaultNamespace = m, t.t = C, t.translate = C, t.detectLanguage = h.detectLanguage, t.pluralExtensions = M, t.sync = O, t.functions = h, t.lng = w, t.addPostProcessor = D, t.options = o, e.i18n = t, e.t = t.t, t
    }), Array.prototype.every || (Array.prototype.every = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        var r = arguments[1];
        for (var i = 0; i < n; i++)
            if (i in t && !e.call(r, t[i], i, t)) return !1;
        return !0
    }), Array.prototype.filter || (Array.prototype.filter = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        var r = [],
            i = arguments[1];
        for (var s = 0; s < n; s++)
            if (s in t) {
                var o = t[s];
                e.call(i, o, s, t) && r.push(o)
            }
        return r
    }), Array.prototype.forEach || (Array.prototype.forEach = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        var r = arguments[1];
        for (var i = 0; i < n; i++) i in t && e.call(r, t[i], i, t)
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (n === 0) return -1;
        var r = 0;
        arguments.length > 0 && (r = Number(arguments[1]), r !== r ? r = 0 : r !== 0 && r !== Infinity && r !== -Infinity && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
        if (r >= n) return -1;
        var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0);
        for (; i < n; i++)
            if (i in t && t[i] === e) return i;
        return -1
    }), Array.isArray = Array.isArray || function(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }, Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (n === 0) return -1;
        var r = n;
        arguments.length > 1 && (r = Number(arguments[1]), r !== r ? r = 0 : r !== 0 && r !== Infinity && r !== -Infinity && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
        var i = r >= 0 ? Math.min(r, n - 1) : n - Math.abs(r);
        for (; i >= 0; i--)
            if (i in t && t[i] === e) return i;
        return -1
    }), Array.prototype.map || (Array.prototype.map = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        var r = new Array(n),
            i = arguments[1];
        for (var s = 0; s < n; s++) s in t && (r[s] = e.call(i, t[s], s, t));
        return r
    }), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        if (n == 0 && arguments.length == 1) throw new TypeError;
        var r = 0,
            i;
        if (arguments.length >= 2) i = arguments[1];
        else
            do {
                if (r in t) {
                    i = t[r++];
                    break
                }
                if (++r >= n) throw new TypeError
            } while (!0);
        while (r < n) r in t && (i = e.call(undefined, i, t[r], r, t)), r++;
        return i
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        if (n === 0 && arguments.length === 1) throw new TypeError;
        var r = n - 1,
            i;
        if (arguments.length >= 2) i = arguments[1];
        else
            do {
                if (r in this) {
                    i = this[r--];
                    break
                }
                if (--r < 0) throw new TypeError
            } while (!0);
        while (r >= 0) r in t && (i = e.call(undefined, i, t[r], r, t)), r--;
        return i
    }), Array.prototype.some || (Array.prototype.some = function(e) {
        if (this === void 0 || this === null) throw new TypeError;
        var t = Object(this),
            n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError;
        var r = arguments[1];
        for (var i = 0; i < n; i++)
            if (i in t && e.call(r, t[i], i, t)) return !0;
        return !1
    }), Date.now || (Date.now = function() {
        return +(new Date)
    }), Date.prototype.toISOString || (Date.prototype.toISOString = function() {
        var e = function(t, n) {
            return n = n || 2, (t += "", t.length === n) ? t : e("0" + t, n)
        };
        return function() {
            var t = this.getUTCFullYear();
            t = (t < 0 ? "-" : t > 9999 ? "+" : "") + ("00000" + Math.abs(t)).slice(0 <= t && t <= 9999 ? -4 : -6);
            var n = [t, e(this.getUTCMonth() + 1), e(this.getUTCDate())].join("-"),
                r = [e(this.getUTCHours()), e(this.getUTCMinutes()), e(this.getUTCSeconds())].join(":") + "." + e(this.getUTCMilliseconds(), 3);
            return [n, r].join("T") + "Z"
        }
    }()), Date.prototype.toJSON || (Date.prototype.toJSON = Date.prototype.toJSON), Function.prototype.bind || (Function.prototype.bind = function(e) {
        if (typeof this != "function") throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice,
            n = t.call(arguments, 1),
            r = this,
            i = function() {},
            s = function() {
                if (i.prototype && this instanceof i) {
                    var s = r.apply(new i, n.concat(t.call(arguments)));
                    return Object(s) === s ? s : r
                }
                return r.apply(e, n.concat(t.call(arguments)))
            };
        return i.prototype = r.prototype, s.prototype = new i, s
    }),
    function() {
        "use strict";
        var e = function(e) {
            if (e !== Object(e)) throw new TypeError("Object.getPrototypeOf called on non-object")
        };
        Object.getPrototypeOf || (typeof "test".__proto__ == "object" ? Object.getPrototypeOf = function(t) {
            return e(t), t.__proto__
        } : Object.getPrototypeOf = function(t) {
            return e(t), t.constructor.prototype
        })
    }(), Object.keys || (Object.keys = function() {
        var e = Object.prototype.hasOwnProperty,
            t = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            r = n.length;
        return function(i) {
            if (typeof i != "object" && typeof i != "function" || i === null) throw new TypeError("Object.keys called on non-object");
            var s = [];
            for (var o in i) e.call(i, o) && s.push(o);
            if (t)
                for (var u = 0; u < r; u++) e.call(i, n[u]) && s.push(n[u]);
            return s
        }
    }()), String.prototype.trim || (String.prototype.trim = function() {
        var e = /^\s+/,
            t = /\s+$/;
        return function() {
            return this.replace(e, "").replace(t, "")
        }
    }()), define("augment", function() {}), ! function(e) {
        e(function() {
            "use strict";
            e.support.transition = function() {
                var t = document.body || document.documentElement,
                    n = t.style,
                    r = n.transition !== undefined || n.WebkitTransition !== undefined || n.MozTransition !== undefined || n.MsTransition !== undefined || n.OTransition !== undefined;
                return r && {
                    end: function() {
                        var t = "TransitionEnd";
                        return e.browser.webkit ? t = "webkitTransitionEnd" : e.browser.mozilla ? t = "transitionend" : e.browser.opera && (t = "oTransitionEnd"), t
                    }()
                }
            }()
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = '[data-dismiss="alert"]',
            n = function(n) {
                e(n).on("click", t, this.close)
            };
        n.prototype = {
            constructor: n,
            close: function(t) {
                function s() {
                    i.trigger("closed").remove()
                }
                var n = e(this),
                    r = n.attr("data-target"),
                    i;
                r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), i.trigger("close"), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger("close").removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
            }
        }, e.fn.alert = function(t) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("alert");
                i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
            })
        }, e.fn.alert.Constructor = n, e(function() {
            e("body").on("click.alert.data-api", t, n.prototype.close)
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
        };
        t.prototype = {
            constructor: t,
            setState: function(e) {
                var t = "disabled",
                    n = this.$element,
                    r = n.data(),
                    i = n.is("input") ? "val" : "html";
                e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function() {
                    e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
                }, 0)
            },
            toggle: function() {
                var e = this.$element.parent('[data-toggle="buttons-radio"]');
                e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
            }
        }, e.fn.button = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("button"),
                    s = typeof n == "object" && n;
                i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
            })
        }, e.fn.button.defaults = {
            loadingText: "loading..."
        }, e.fn.button.Constructor = t, e(function() {
            e("body").on("click.button.data-api", "[data-toggle^=button]", function(t) {
                var n = e(t.target);
                n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.carousel.defaults, n), this.options.slide && this.slide(this.options.slide), this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
        };
        t.prototype = {
            cycle: function() {
                return this.interval = setInterval(e.proxy(this.next, this), this.options.interval), this
            },
            to: function(t) {
                var n = this.$element.find(".active"),
                    r = n.parent().children(),
                    i = r.index(n),
                    s = this;
                if (t > r.length - 1 || t < 0) return;
                return this.sliding ? this.$element.one("slid", function() {
                    s.to(t)
                }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(r[t]))
            },
            pause: function() {
                return clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                if (this.sliding) return;
                return this.slide("next")
            },
            prev: function() {
                if (this.sliding) return;
                return this.slide("prev")
            },
            slide: function(t, n) {
                var r = this.$element.find(".active"),
                    i = n || r[t](),
                    s = this.interval,
                    o = t == "next" ? "left" : "right",
                    u = t == "next" ? "first" : "last",
                    a = this;
                this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u]();
                if (i.hasClass("active")) return;
                return !e.support.transition && this.$element.hasClass("slide") ? (this.$element.trigger("slide"), r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")) : (i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.trigger("slide"), this.$element.one(e.support.transition.end, function() {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                        a.$element.trigger("slid")
                    }, 0)
                })), s && this.cycle(), this
            }
        }, e.fn.carousel = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("carousel"),
                    s = typeof n == "object" && n;
                i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : typeof n == "string" || (n = s.slide) ? i[n]() : i.cycle()
            })
        }, e.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, e.fn.carousel.Constructor = t, e(function() {
            e("body").on("click.carousel.data-api", "[data-slide]", function(t) {
                var n = e(this),
                    r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                    s = !i.data("modal") && e.extend({}, i.data(), n.data());
                i.carousel(s), t.preventDefault()
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.prototype = {
            constructor: t,
            dimension: function() {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height"
            },
            show: function() {
                var t = this.dimension(),
                    n = e.camelCase(["scroll", t].join("-")),
                    r = this.$parent && this.$parent.find(".in"),
                    i;
                r && r.length && (i = r.data("collapse"), r.collapse("hide"), i || r.data("collapse", null)), this.$element[t](0), this.transition("addClass", "show", "shown"), this.$element[t](this.$element[0][n])
            },
            hide: function() {
                var e = this.dimension();
                this.reset(this.$element[e]()), this.transition("removeClass", "hide", "hidden"), this.$element[e](0)
            },
            reset: function(e) {
                var t = this.dimension();
                return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(t, n, r) {
                var i = this,
                    s = function() {
                        n == "show" && i.reset(), i.$element.trigger(r)
                    };
                this.$element.trigger(n)[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        }, e.fn.collapse = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("collapse"),
                    s = typeof n == "object" && n;
                i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.collapse.defaults = {
            toggle: !0
        }, e.fn.collapse.Constructor = t, e(function() {
            e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
                var n = e(this),
                    r, i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
                    s = e(i).data("collapse") ? "toggle" : n.data();
                e(i).collapse(s)
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";

        function r() {
            e(t).parent().removeClass("open")
        }
        var t = '[data-toggle="dropdown"]',
            n = function(t) {
                var n = e(t).on("click.dropdown.data-api", this.toggle);
                e("html").on("click.dropdown.data-api", function() {
                    n.parent().removeClass("open")
                })
            };
        n.prototype = {
            constructor: n,
            toggle: function(t) {
                var n = e(this),
                    i = n.attr("data-target"),
                    s, o;
                return i || (i = n.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), s = e(i), s.length || (s = n.parent()), o = s.hasClass("open"), r(), !o && s.toggleClass("open"), !1
            }
        }, e.fn.dropdown = function(t) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("dropdown");
                i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
            })
        }, e.fn.dropdown.Constructor = n, e(function() {
            e("html").on("click.dropdown.data-api", r), e("body").on("click.dropdown.data-api", t, n.prototype.toggle)
        })
    }(window.jQuery), ! function(e) {
        "use strict";

        function n() {
            var t = this,
                n = setTimeout(function() {
                    t.$element.off(e.support.transition.end), r.call(t)
                }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n), r.call(t)
            })
        }

        function r(e) {
            this.$element.hide().trigger("hidden"), i.call(this)
        }

        function i(t) {
            var n = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.options.backdrop != "static" && this.$backdrop.click(e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(s, this)) : s.call(this)) : t && t()
        }

        function s() {
            this.$backdrop.remove(), this.$backdrop = null
        }

        function o() {
            var t = this;
            this.isShown && this.options.keyboard ? e(document).on("keyup.dismiss.modal", function(e) {
                e.which == 27 && t.hide()
            }) : this.isShown || e(document).off("keyup.dismiss.modal")
        }
        var t = function(t, n) {
            this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this))
        };
        t.prototype = {
            constructor: t,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var t = this;
                if (this.isShown) return;
                e("body").addClass("modal-open"), this.isShown = !0, this.$element.trigger("show"), o.call(this), i.call(this, function() {
                    var n = e.support.transition && t.$element.hasClass("fade");
                    !t.$element.parent().length && t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in"), n ? t.$element.one(e.support.transition.end, function() {
                        t.$element.trigger("shown")
                    }) : t.$element.trigger("shown")
                })
            },
            hide: function(t) {
                t && t.preventDefault();
                if (!this.isShown) return;
                var i = this;
                this.isShown = !1, e("body").removeClass("modal-open"), o.call(this), this.$element.trigger("hide").removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? n.call(this) : r.call(this)
            }
        }, e.fn.modal = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("modal"),
                    s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
                i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
            })
        }, e.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.fn.modal.Constructor = t, e(function() {
            e("body").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
                var n = e(this),
                    r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
                    s = i.data("modal") ? "toggle" : e.extend({}, i.data(), n.data());
                t.preventDefault(), i.modal(s)
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("tooltip", e, t)
        };
        t.prototype = {
            constructor: t,
            init: function(t, n, r) {
                var i, s;
                this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, this.options.trigger != "manual" && (i = this.options.trigger == "hover" ? "mouseenter" : "focus", s = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(i, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(t) {
                return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && typeof t.delay == "number" && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), t
            },
            enter: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                !n.options.delay || !n.options.delay.show ? n.show() : (n.hoverState = "in", setTimeout(function() {
                    n.hoverState == "in" && n.show()
                }, n.options.delay.show))
            },
            leave: function(t) {
                var n = e(t.currentTarget)[this.type](this._options).data(this.type);
                !n.options.delay || !n.options.delay.hide ? n.hide() : (n.hoverState = "out", setTimeout(function() {
                    n.hoverState == "out" && n.hide()
                }, n.options.delay.hide))
            },
            show: function() {
                var e, t, n, r, i, s, o;
                if (this.hasContent() && this.enabled) {
                    e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(s), e.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, i = e[0].offsetHeight;
                    switch (t ? s.split(" ")[1] : s) {
                        case "bottom":
                            o = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "top":
                            o = {
                                top: n.top - i,
                                left: n.left + n.width / 2 - r / 2
                            };
                            break;
                        case "left":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left - r
                            };
                            break;
                        case "right":
                            o = {
                                top: n.top + n.height / 2 - i / 2,
                                left: n.left + n.width
                            }
                    }
                    e.css(o).addClass(s).addClass("in")
                }
            },
            setContent: function() {
                var e = this.tip();
                e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function r() {
                    var t = setTimeout(function() {
                        n.off(e.support.transition.end).remove()
                    }, 500);
                    n.one(e.support.transition.end, function() {
                        clearTimeout(t), n.remove()
                    })
                }
                var t = this,
                    n = this.tip();
                n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r() : n.remove()
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(t) {
                return e.extend({}, t ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e = (e || "").toString().replace(/(^\s*|\s*$)/, ""), e
            },
            tip: function() {
                return this.$tip = this.$tip || e(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide" : "show"]()
            }
        }, e.fn.tooltip = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("tooltip"),
                    s = typeof n == "object" && n;
                i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
            animation: !0,
            delay: 0,
            selector: !1,
            placement: "top",
            trigger: "hover",
            title: "",
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        }
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(e, t) {
            this.init("popover", e, t)
        };
        t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
            constructor: t,
            setContent: function() {
                var t = this.tip(),
                    n = this.getTitle(),
                    r = this.getContent();
                t.find(".popover-title")[e.type(n) == "object" ? "append" : "html"](n), t.find(".popover-content > *")[e.type(r) == "object" ? "append" : "html"](r), t.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var e, t = this.$element,
                    n = this.options;
                return e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content), e = e.toString().replace(/(^\s*|\s*$)/, ""), e
            },
            tip: function() {
                return this.$tip || (this.$tip = e(this.options.template)), this.$tip
            }
        }), e.fn.popover = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("popover"),
                    s = typeof n == "object" && n;
                i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
            placement: "right",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
        })
    }(window.jQuery), ! function(e) {
        "use strict";

        function t(t, n) {
            var r = e.proxy(this.process, this),
                i = e(t).is("body") ? e(window) : e(t),
                s;
            this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body").on("click.scroll.data-api", this.selector, r), this.refresh(), this.process()
        }
        t.prototype = {
            constructor: t,
            refresh: function() {
                this.targets = this.$body.find(this.selector).map(function() {
                    var t = e(this).attr("href");
                    return /^#\w/.test(t) && e(t).length ? t : null
                }), this.offsets = e.map(this.targets, function(t) {
                    return e(t).position().top
                })
            },
            process: function() {
                var e = this.$scrollElement.scrollTop() + this.options.offset,
                    t = this.offsets,
                    n = this.targets,
                    r = this.activeTarget,
                    i;
                for (i = t.length; i--;) r != n[i] && e >= t[i] && (!t[i + 1] || e <= t[i + 1]) && this.activate(n[i])
            },
            activate: function(e) {
                var t;
                this.activeTarget = e, this.$body.find(this.selector).parent(".active").removeClass("active"), t = this.$body.find(this.selector + '[href="' + e + '"]').parent("li").addClass("active"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active")
            }
        }, e.fn.scrollspy = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("scrollspy"),
                    s = typeof n == "object" && n;
                i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
            offset: 10
        }, e(function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                t.scrollspy(t.data())
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t) {
            this.element = e(t)
        };
        t.prototype = {
            constructor: t,
            show: function() {
                var t = this.element,
                    n = t.closest("ul:not(.dropdown-menu)"),
                    r = t.attr("data-target"),
                    i, s;
                r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
                if (t.parent("li").hasClass("active")) return;
                i = n.find(".active a").last()[0], t.trigger({
                    type: "show",
                    relatedTarget: i
                }), s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                    t.trigger({
                        type: "shown",
                        relatedTarget: i
                    })
                })
            },
            activate: function(t, n, r) {
                function o() {
                    i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
                }
                var i = n.find("> .active"),
                    s = r && e.support.transition && i.hasClass("fade");
                s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
            }
        }, e.fn.tab = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("tab");
                i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
            })
        }, e.fn.tab.Constructor = t, e(function() {
            e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
                t.preventDefault(), e(this).tab("show")
            })
        })
    }(window.jQuery), ! function(e) {
        "use strict";
        var t = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.$menu = e(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
        };
        t.prototype = {
            constructor: t,
            select: function() {
                var e = this.$menu.find(".active").attr("data-value");
                return this.$element.val(e), this.$element.change(), this.hide()
            },
            show: function() {
                var t = e.extend({}, this.$element.offset(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.css({
                    top: t.top + t.height,
                    left: t.left
                }), this.$menu.show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function(t) {
                var n = this,
                    r, i;
                return this.query = this.$element.val(), this.query ? (r = e.grep(this.source, function(e) {
                    if (n.matcher(e)) return e
                }), r = this.sorter(r), r.length ? this.render(r.slice(0, this.options.items)).show() : this.shown ? this.hide() : this) : this.shown ? this.hide() : this
            },
            matcher: function(e) {
                return ~e.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(e) {
                var t = [],
                    n = [],
                    r = [],
                    i;
                while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
                return t.concat(n, r)
            },
            highlighter: function(e) {
                return e.replace(new RegExp("(" + this.query + ")", "ig"), function(e, t) {
                    return "<strong>" + t + "</strong>"
                })
            },
            render: function(t) {
                var n = this;
                return t = e(t).map(function(t, r) {
                    return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
                }), t.first().addClass("active"), this.$menu.html(t), this
            },
            next: function(t) {
                var n = this.$menu.find(".active").removeClass("active"),
                    r = n.next();
                r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
            },
            prev: function(e) {
                var t = this.$menu.find(".active").removeClass("active"),
                    n = t.prev();
                n.length || (n = this.$menu.find("li").last()), n.addClass("active")
            },
            listen: function() {
                this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), (e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keypress, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
            },
            keyup: function(e) {
                switch (e.keyCode) {
                    case 40:
                    case 38:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                e.stopPropagation(), e.preventDefault()
            },
            keypress: function(e) {
                if (!this.shown) return;
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        e.preventDefault(), this.next()
                }
                e.stopPropagation()
            },
            blur: function(e) {
                var t = this;
                setTimeout(function() {
                    t.hide()
                }, 150)
            },
            click: function(e) {
                e.stopPropagation(), e.preventDefault(), this.select()
            },
            mouseenter: function(t) {
                this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
            }
        }, e.fn.typeahead = function(n) {
            return this.each(function() {
                var r = e(this),
                    i = r.data("typeahead"),
                    s = typeof n == "object" && n;
                i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
            })
        }, e.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>'
        }, e.fn.typeahead.Constructor = t, e(function() {
            e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
                var n = e(this);
                if (n.data("typeahead")) return;
                t.preventDefault(), n.typeahead(n.data())
            })
        })
    }(window.jQuery), define("twitterbootstrap", function() {}),
    function(e) {
        function s(e) {
            return e.replace(/(:|\.)/g, "\\$1")
        }
        var t = "1.4.4",
            n = {
                exclude: [],
                excludeWithin: [],
                offset: 0,
                direction: "top",
                scrollElement: null,
                scrollTarget: null,
                beforeScroll: function() {},
                afterScroll: function() {},
                easing: "swing",
                speed: 400,
                autoCoefficent: 2
            },
            r = function(t) {
                var n = [],
                    r = !1,
                    i = t.dir && t.dir == "left" ? "scrollLeft" : "scrollTop";
                return this.each(function() {
                    if (this == document || this == window) return;
                    var t = e(this);
                    if (t[i]() > 0) {
                        n.push(this);
                        return
                    }
                    t[i](1), r = t[i]() > 0, t[i](0);
                    if (r) {
                        n.push(this);
                        return
                    }
                }), t.el === "first" && n.length && (n = [n.shift()]), n
            },
            i = "ontouchend" in document;
        e.fn.extend({
            scrollable: function(e) {
                var t = r.call(this, {
                    dir: e
                });
                return this.pushStack(t)
            },
            firstScrollable: function(e) {
                var t = r.call(this, {
                    el: "first",
                    dir: e
                });
                return this.pushStack(t)
            },
            smoothScroll: function(t) {
                t = t || {};
                var n = e.extend({}, e.fn.smoothScroll.defaults, t),
                    r = e.smoothScroll.filterPath(location.pathname);
                return this.die("click.smoothscroll").live("click.smoothscroll", function(t) {
                    var i = {},
                        o = this,
                        u = e(this),
                        a = location.hostname === o.hostname || !o.hostname,
                        f = n.scrollTarget || (e.smoothScroll.filterPath(o.pathname) || r) === r,
                        l = s(o.hash),
                        c = !0;
                    if (!n.scrollTarget && (!a || !f || !l)) c = !1;
                    else {
                        var h = n.exclude,
                            p = 0,
                            d = h.length;
                        while (c && p < d) u.is(s(h[p++])) && (c = !1);
                        var v = n.excludeWithin,
                            m = 0,
                            g = v.length;
                        while (c && m < g) u.closest(v[m++]).length && (c = !1)
                    }
                    c && (t.preventDefault(), e.extend(i, n, {
                        scrollTarget: n.scrollTarget || l,
                        link: o
                    }), e.smoothScroll(i))
                }), this
            }
        }), e.smoothScroll = function(t, n) {
            var r, s, o, u, a = 0,
                f = "offset",
                l = "scrollTop",
                c = {},
                h = !1,
                p = [];
            typeof t == "number" ? (r = e.fn.smoothScroll.defaults, o = t) : (r = e.extend({}, e.fn.smoothScroll.defaults, t || {}), r.scrollElement && (f = "position", r.scrollElement.css("position") == "static" && r.scrollElement.css("position", "relative")), o = n || e(r.scrollTarget)[f]() && e(r.scrollTarget)[f]()[r.direction] || 0), r = e.extend({
                link: null
            }, r), l = r.direction == "left" ? "scrollLeft" : l, r.scrollElement ? (s = r.scrollElement, a = s[l]()) : (s = e("html, body").firstScrollable(), h = i && "scrollTo" in window), c[l] = o + a + r.offset, r.beforeScroll.call(s, r), h ? (p = r.direction == "left" ? [c[l], 0] : [0, c[l]], window.scrollTo.apply(window, p), r.afterScroll.call(r.link, r)) : (u = r.speed, u === "auto" && (u = c[l] || s.scrollTop(), u /= r.autoCoefficent), s.animate(c, {
                duration: u,
                easing: r.easing,
                complete: function() {
                    r.afterScroll.call(r.link, r)
                }
            }))
        }, e.smoothScroll.version = t, e.smoothScroll.filterPath = function(e) {
            return e.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }, e.fn.smoothScroll.defaults = n
    }(jQuery), define("jquery_smoothscroll", function() {}),
    function() {
        var e;
        e = function() {
            function e() {
                this.options_index = 0, this.parsed = []
            }
            return e.prototype.add_node = function(e) {
                return e.nodeName === "OPTGROUP" ? this.add_group(e) : this.add_option(e)
            }, e.prototype.add_group = function(e) {
                var t, n, r, i, s, o;
                t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: e.label,
                    children: 0,
                    disabled: e.disabled
                }), s = e.childNodes, o = [];
                for (r = 0, i = s.length; r < i; r++) n = s[r], o.push(this.add_option(n, t, e.disabled));
                return o
            }, e.prototype.add_option = function(e, t, n) {
                if (e.nodeName === "OPTION") return e.text !== "" ? (t != null && (this.parsed[t].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: e.value,
                    text: e.text,
                    html: e.innerHTML,
                    selected: e.selected,
                    disabled: n === !0 ? n : e.disabled,
                    group_array_index: t,
                    classes: e.className,
                    style: e.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1
            }, e
        }(), e.select_to_array = function(t) {
            var n, r, i, s, o;
            r = new e, o = t.childNodes;
            for (i = 0, s = o.length; i < s; i++) n = o[i], r.add_node(n);
            return r.parsed
        }, this.SelectParser = e
    }.call(this),
    function() {
        var e, t;
        t = this, e = function() {
            function e(e, t) {
                this.form_field = e, this.options = t != null ? t : {}, this.set_default_values(), this.is_multiple = this.form_field.multiple, this.set_default_text(), this.setup(), this.set_up_html(), this.register_observers(), this.finish_setup()
            }
            return e.prototype.set_default_values = function() {
                var e = this;
                return this.click_test_action = function(t) {
                    return e.test_active_click(t)
                }, this.activate_action = function(t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.search_contains = this.options.search_contains || !1, this.choices = 0, this.max_selected_options = this.options.max_selected_options || Infinity
            }, e.prototype.set_default_text = function() {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options" : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option", this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match"
            }, e.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, e.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, e.prototype.input_focus = function(e) {
                var t = this;
                if (!this.active_field) return setTimeout(function() {
                    return t.container_mousedown()
                }, 50)
            }, e.prototype.input_blur = function(e) {
                var t = this;
                if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
                    return t.blur_test()
                }, 100)
            }, e.prototype.result_add_option = function(e) {
                var t, n;
                return e.disabled ? "" : (e.dom_id = this.container_id + "_o_" + e.array_index, t = e.selected && this.is_multiple ? [] : ["active-result"], e.selected && t.push("result-selected"), e.group_array_index != null && t.push("group-option"), e.classes !== "" && t.push(e.classes), n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "", '<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>")
            }, e.prototype.results_update_field = function() {
                return this.results_reset(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build()
            }, e.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, e.prototype.results_search = function(e) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, e.prototype.keyup_checker = function(e) {
                var t, n;
                t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale();
                switch (t) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        e.preventDefault();
                        if (this.results_showing) return this.result_select(e);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, e.prototype.generate_field_id = function() {
                var e;
                return e = this.generate_random_id(), this.form_field.id = e, e
            }, e.prototype.generate_random_char = function() {
                var e, t, n;
                return e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = Math.floor(Math.random() * e.length), t = e.substring(n, n + 1)
            }, e
        }(), t.AbstractChosen = e
    }.call(this),
    function() {
        var e, t, n, r, i = Object.prototype.hasOwnProperty,
            s = function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            };
        r = this, e = jQuery, e.fn.extend({
            chosen: function(n) {
                return !e.browser.msie || e.browser.version !== "6.0" && e.browser.version !== "7.0" ? this.each(function(r) {
                    var i;
                    i = e(this);
                    if (!i.hasClass("chzn-done")) return i.data("chosen", new t(this, n))
                }) : this
            }
        }), t = function(t) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }
            return s(i, t), i.prototype.setup = function() {
                return this.form_field_jq = e(this.form_field), this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
            }, i.prototype.finish_setup = function() {
                return this.form_field_jq.addClass("chzn-done")
            }, i.prototype.set_up_html = function() {
                var t, r, i, s;
                return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id(), this.container_id += "_chzn", this.f_width = this.form_field_jq.outerWidth(), t = e("<div />", {
                    id: this.container_id,
                    "class": "chzn-container" + (this.is_rtl ? " chzn-rtl" : ""),
                    style: "width: " + this.f_width + "px;"
                }), this.is_multiple ? t.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>') : t.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'), this.form_field_jq.hide().after(t), this.container = e("#" + this.container_id), this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single")), this.dropdown = this.container.find("div.chzn-drop").first(), r = this.container.height(), i = this.f_width - n(this.dropdown), this.dropdown.css({
                    width: i + "px",
                    top: r + "px"
                }), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chzn-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first(), s = i - n(this.search_container) - n(this.search_field), this.search_field.css({
                    width: s + "px"
                })), this.results_build(), this.set_tab_index(), this.form_field_jq.trigger("liszt:ready", {
                    chosen: this
                })
            }, i.prototype.register_observers = function() {
                var e = this;
                return this.container.mousedown(function(t) {
                    return e.container_mousedown(t)
                }), this.container.mouseup(function(t) {
                    return e.container_mouseup(t)
                }), this.container.mouseenter(function(t) {
                    return e.mouse_enter(t)
                }), this.container.mouseleave(function(t) {
                    return e.mouse_leave(t)
                }), this.search_results.mouseup(function(t) {
                    return e.search_results_mouseup(t)
                }), this.search_results.mouseover(function(t) {
                    return e.search_results_mouseover(t)
                }), this.search_results.mouseout(function(t) {
                    return e.search_results_mouseout(t)
                }), this.form_field_jq.bind("liszt:updated", function(t) {
                    return e.results_update_field(t)
                }), this.search_field.blur(function(t) {
                    return e.input_blur(t)
                }), this.search_field.keyup(function(t) {
                    return e.keyup_checker(t)
                }), this.search_field.keydown(function(t) {
                    return e.keydown_checker(t)
                }), this.is_multiple ? (this.search_choices.click(function(t) {
                    return e.choices_click(t)
                }), this.search_field.focus(function(t) {
                    return e.input_focus(t)
                })) : this.container.click(function(e) {
                    return e.preventDefault()
                })
            }, i.prototype.search_field_disabled = function() {
                this.is_disabled = this.form_field_jq[0].disabled;
                if (this.is_disabled) return this.container.addClass("chzn-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus", this.activate_action), this.close_field();
                this.container.removeClass("chzn-disabled"), this.search_field[0].disabled = !1;
                if (!this.is_multiple) return this.selected_item.bind("focus", this.activate_action)
            }, i.prototype.container_mousedown = function(t) {
                var n;
                if (!this.is_disabled) return n = t != null ? e(t.target).hasClass("search-choice-close") : !1, t && t.type === "mousedown" && !this.results_showing && t.stopPropagation(), !this.pending_destroy_click && !n ? (this.active_field ? !this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length) && (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).click(this.click_test_action), this.results_show()), this.activate_field()) : this.pending_destroy_click = !1
            }, i.prototype.container_mouseup = function(e) {
                if (e.target.nodeName === "ABBR") return this.results_reset(e)
            }, i.prototype.blur_test = function(e) {
                if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field()
            }, i.prototype.close_field = function() {
                return e(document).unbind("click", this.click_test_action), this.is_multiple || (this.selected_item.attr("tabindex", this.search_field.attr("tabindex")), this.search_field.attr("tabindex", -1)), this.active_field = !1, this.results_hide(), this.container.removeClass("chzn-container-active"), this.winnow_results_clear(), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, i.prototype.activate_field = function() {
                return !this.is_multiple && !this.active_field && (this.search_field.attr("tabindex", this.selected_item.attr("tabindex")), this.selected_item.attr("tabindex", -1)), this.container.addClass("chzn-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, i.prototype.test_active_click = function(t) {
                return e(t.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field()
            }, i.prototype.results_build = function() {
                var e, t, n, i, s;
                this.parsing = !0, this.results_data = r.SelectParser.select_to_array(this.form_field), this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(), this.choices = 0) : this.is_multiple || (this.selected_item.find("span").text(this.default_text), this.form_field.options.length <= this.disable_search_threshold ? this.container.addClass("chzn-container-single-nosearch") : this.container.removeClass("chzn-container-single-nosearch")), e = "", s = this.results_data;
                for (n = 0, i = s.length; n < i; n++) t = s[n], t.group ? e += this.result_add_group(t) : t.empty || (e += this.result_add_option(t), t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && (this.selected_item.removeClass("chzn-default").find("span").text(t.text), this.allow_single_deselect && this.single_deselect_control_build()));
                return this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.search_results.html(e), this.parsing = !1
            }, i.prototype.result_add_group = function(t) {
                return t.disabled ? "" : (t.dom_id = this.container_id + "_g_" + t.array_index, '<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>")
            }, i.prototype.result_do_highlight = function(e) {
                var t, n, r, i, s;
                if (e.length) {
                    this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), r = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), i = r + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight();
                    if (t >= i) return this.search_results.scrollTop(t - r > 0 ? t - r : 0);
                    if (n < s) return this.search_results.scrollTop(n)
                }
            }, i.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, i.prototype.results_show = function() {
                var e;
                if (!this.is_multiple) this.selected_item.addClass("chzn-single-with-drop"), this.result_single_selected && this.result_do_highlight(this.result_single_selected);
                else if (this.max_selected_options <= this.choices) return this.form_field_jq.trigger("liszt:maxselected", {
                    chosen: this
                }), !1;
                return e = this.is_multiple ? this.container.height() : this.container.height() - 1, this.form_field_jq.trigger("liszt:showing_dropdown", {
                    chosen: this
                }), this.dropdown.css({
                    top: e + "px",
                    left: 0
                }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results()
            }, i.prototype.results_hide = function() {
                return this.is_multiple || this.selected_item.removeClass("chzn-single-with-drop"), this.result_clear_highlight(), this.form_field_jq.trigger("liszt:hiding_dropdown", {
                    chosen: this
                }), this.dropdown.css({
                    left: "-9000px"
                }), this.results_showing = !1
            }, i.prototype.set_tab_index = function(e) {
                var t;
                if (this.form_field_jq.attr("tabindex")) return t = this.form_field_jq.attr("tabindex"), this.form_field_jq.attr("tabindex", -1), this.is_multiple ? this.search_field.attr("tabindex", t) : (this.selected_item.attr("tabindex", t), this.search_field.attr("tabindex", -1))
            }, i.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function(t) {
                var n;
                n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
                if (n.length) return this.result_highlight = n, this.result_select(t)
            }, i.prototype.search_results_mouseover = function(t) {
                var n;
                n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
                if (n) return this.result_do_highlight(n)
            }, i.prototype.search_results_mouseout = function(t) {
                if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
            }, i.prototype.choices_click = function(t) {
                t.preventDefault();
                if (this.active_field && !e(t.target).hasClass("search-choice") && !this.results_showing) return this.results_show()
            }, i.prototype.choice_build = function(t) {
                var n, r, i = this;
                return this.is_multiple && this.max_selected_options <= this.choices ? (this.form_field_jq.trigger("liszt:maxselected", {
                    chosen: this
                }), !1) : (n = this.container_id + "_c_" + t.array_index, this.choices += 1, this.search_container.before('<li class="search-choice" id="' + n + '"><span>' + t.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + t.array_index + '"></a></li>'), r = e("#" + n).find("a").first(), r.click(function(e) {
                    return i.choice_destroy_link_click(e)
                }))
            }, i.prototype.choice_destroy_link_click = function(t) {
                return t.preventDefault(), this.is_disabled ? t.stopPropagation : (this.pending_destroy_click = !0, this.choice_destroy(e(t.target)))
            }, i.prototype.choice_destroy = function(e) {
                return this.choices -= 1, this.show_search_field_default(), this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide(), this.result_deselect(e.attr("rel")), e.parents("li").first().remove()
            }, i.prototype.results_reset = function() {
                this.form_field.options[0].selected = !0, this.selected_item.find("span").text(this.default_text), this.is_multiple || this.selected_item.addClass("chzn-default"), this.show_search_field_default(), this.selected_item.find("abbr").remove(), this.form_field_jq.trigger("change");
                if (this.active_field) return this.results_hide()
            }, i.prototype.result_select = function(e) {
                var t, n, r, i;
                if (this.result_highlight) return t = this.result_highlight, n = t.attr("id"), this.result_clear_highlight(), this.is_multiple ? this.result_deactivate(t) : (this.search_results.find(".result-selected").removeClass("result-selected"), this.result_single_selected = t, this.selected_item.removeClass("chzn-default")), t.addClass("result-selected"), i = n.substr(n.lastIndexOf("_") + 1), r = this.results_data[i], r.selected = !0, this.form_field.options[r.options_index].selected = !0, this.is_multiple ? this.choice_build(r) : (this.selected_item.find("span").first().text(r.text), this.allow_single_deselect && this.single_deselect_control_build()), (!e.metaKey || !this.is_multiple) && this.results_hide(), this.search_field.val(""), this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[r.options_index].value
                }), this.search_field_scale()
            }, i.prototype.result_activate = function(e) {
                return e.addClass("active-result")
            }, i.prototype.result_deactivate = function(e) {
                return e.removeClass("active-result")
            }, i.prototype.result_deselect = function(t) {
                var n, r;
                return r = this.results_data[t], r.selected = !1, this.form_field.options[r.options_index].selected = !1, n = e("#" + this.container_id + "_o_" + t), n.removeClass("result-selected").addClass("active-result").show(), this.result_clear_highlight(), this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[r.options_index].value
                }), this.search_field_scale()
            }, i.prototype.single_deselect_control_build = function() {
                if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
            }, i.prototype.winnow_results = function() {
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y;
                this.no_results_clear(), f = 0, l = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html(), o = this.search_contains ? "" : "^", s = new RegExp(o + l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), p = new RegExp(l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), y = this.results_data;
                for (d = 0, m = y.length; d < m; d++) {
                    n = y[d];
                    if (!n.disabled && !n.empty)
                        if (n.group) e("#" + n.dom_id).css("display", "none");
                        else if (!this.is_multiple || !n.selected) {
                        t = !1, a = n.dom_id, u = e("#" + a);
                        if (s.test(n.html)) t = !0, f += 1;
                        else if (n.html.indexOf(" ") >= 0 || n.html.indexOf("[") === 0) {
                            i = n.html.replace(/\[|\]/g, "").split(" ");
                            if (i.length)
                                for (v = 0, g = i.length; v < g; v++) r = i[v], s.test(r) && (t = !0, f += 1)
                        }
                        t ? (l.length ? (c = n.html.search(p), h = n.html.substr(0, c + l.length) + "</em>" + n.html.substr(c + l.length), h = h.substr(0, c) + "<em>" + h.substr(c)) : h = n.html, u.html(h), this.result_activate(u), n.group_array_index != null && e("#" + this.results_data[n.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && a === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(u))
                    }
                }
                return f < 1 && l.length ? this.no_results(l) : this.winnow_results_set_highlight()
            }, i.prototype.winnow_results_clear = function() {
                var t, n, r, i, s;
                this.search_field.val(""), n = this.search_results.find("li"), s = [];
                for (r = 0, i = n.length; r < i; r++) t = n[r], t = e(t), t.hasClass("group-result") ? s.push(t.css("display", "auto")) : !this.is_multiple || !t.hasClass("result-selected") ? s.push(this.result_activate(t)) : s.push(void 0);
                return s
            }, i.prototype.winnow_results_set_highlight = function() {
                var e, t;
                if (!this.result_highlight) {
                    t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first();
                    if (e != null) return this.result_do_highlight(e)
                }
            }, i.prototype.no_results = function(t) {
                var n;
                return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
            }, i.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function() {
                var t, n;
                this.result_highlight ? this.results_showing && (n = this.result_highlight.nextAll("li.active-result").first(), n && this.result_do_highlight(n)) : (t = this.search_results.find("li.active-result").first(), t && this.result_do_highlight(e(t)));
                if (!this.results_showing) return this.results_show()
            }, i.prototype.keyup_arrow = function() {
                var e;
                if (!this.results_showing && !this.is_multiple) return this.results_show();
                if (this.result_highlight) return e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices > 0 && this.results_hide(), this.result_clear_highlight())
            }, i.prototype.keydown_backstroke = function() {
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (this.pending_backstroke = this.search_container.siblings("li.search-choice").last(), this.pending_backstroke.addClass("search-choice-focus"))
            }, i.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.keydown_checker = function(e) {
                var t, n;
                t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(), t !== 8 && this.pending_backstroke && this.clear_backstroke();
                switch (t) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                        break;
                    case 13:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        this.keydown_arrow()
                }
            }, i.prototype.search_field_scale = function() {
                var t, n, r, i, s, o, u, a, f;
                if (this.is_multiple) {
                    r = 0, u = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                    for (a = 0, f = o.length; a < f; a++) i = o[a], s += i + ":" + this.search_field.css(i) + ";";
                    return n = e("<div />", {
                        style: s
                    }), n.text(this.search_field.val()), e("body").append(n), u = n.width() + 25, n.remove(), u > this.f_width - 10 && (u = this.f_width - 10), this.search_field.css({
                        width: u + "px"
                    }), t = this.container.height(), this.dropdown.css({
                        top: t + "px"
                    })
                }
            }, i.prototype.generate_random_id = function() {
                var t;
                t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
                while (e("#" + t).length > 0) t += this.generate_random_char();
                return t
            }, i
        }(AbstractChosen), n = function(e) {
            var t;
            return t = e.outerWidth() - e.width()
        }, r.get_side_border_padding = n
    }.call(this), define("chosen", function() {}), define("preconditions", ["augment", "twitterbootstrap", "jquery_smoothscroll", "chosen"], function() {
        return {}
    }), define("namespace", ["jquery", "underscore", "backstrapp/backstrapp", "backbone", "handlebars", "i18next", "preconditions"], function(e, t, n, r, i, s) {
        i.registerHelper("t", function(e) {
            var t = s.t(e);
            return new i.SafeString(t)
        }), i.registerHelper("tr", function(e, n) {
            var r = t.extend(n.hash, e);
            n.fn && (r.defaultValue = n.fn(e));
            var o = s.t(r.key, r);
            return new i.SafeString(o)
        }), i.registerHelper("parseKey", function(e) {
            if (!e) return "";
            var t = e.replace(new RegExp(" ", "g"), "<br />&nbsp;&nbsp;");
            return new i.SafeString(t)
        }), i.registerHelper("parseValue", function(e) {
            if (!e) return "";
            var t = e.replace(new RegExp("\n", "g"), "<br />");
            return new i.SafeString(t)
        });
        var o = t.extend({
                modules: {},
                module: function(e) {
                    var n = t.extend({
                        Views: {},
                        Models: {},
                        Collections: {}
                    }, e);
                    return n.name && n.append === !0 && (this.modules[n.name] = n), n
                }
            }, n),
            u = o.app;
        return r.History.prototype.loadUrl = function(e) {
            var n = this.fragment = this.getFragment(e),
                r = t.any(this.handlers, function(e) {
                    if (e.route.test(n)) return e.callback(n), !0
                });
            return /^\//.test(n) || (n = "/" + n), window._gaq !== undefined && window._gaq.push(["_trackPageview", n]), u.log("info", "######\n# navigated to: " + n), r
        }, o
    }), define("resources", ["jquery", "underscore"], function(e, t) {
        return {
            en: {
                translation: {
                    layout: {
                        header: {
                            language: "english"
                        }
                    },
                    editor: {
                        choose: "select",
                        addKey: "add Key",
                        add: "add",
                        "delete": "delete",
                        edit: "edit",
                        cancel: "cancel",
                        save: "save",
                        test: "test",
                        filterKeys: "filter keys",
                        filterValue: "filter value",
                        compare: "compare to",
                        download: "download",
                        th: {
                            key: "key",
                            specificValue: "specific value",
                            displayedValue: "displayed value",
                            compareValue: "compare value"
                        },
                        resourceItem: {
                            compare: "compare",
                            options: "options",
                            optionsDesc: "one option per line, eg. count=0"
                        }
                    }
                }
            },
            de: {
                translation: {
                    layout: {
                        header: {
                            language: "deutsch"
                        }
                    },
                    editor: {
                        choose: "Wählen",
                        addKey: "Schlüssel hinzufügen",
                        add: "hinzufügen",
                        "delete": "löschen",
                        edit: "ändern",
                        cancel: "abbrechen",
                        save: "speichern",
                        test: "testen",
                        filterKeys: "Schlüssel filtern",
                        filterValue: "Inhalt filtern",
                        compare: "Vergleichen mit",
                        download: "herunterladen",
                        th: {
                            key: "Schlüssel",
                            specificValue: "spezifischer Wert",
                            displayedValue: "angezeigter Wert",
                            compareValue: "Vergleich"
                        },
                        resourceItem: {
                            compare: "vergleichen",
                            options: "Optionen",
                            optionsDesc: "Eine Option pro Zeile, bspw. count=0"
                        }
                    }
                }
            },
            it: {
                translation: {
                    layout: {
                        header: {
                            language: "italiano"
                        }
                    },
                    editor: {
                        choose: "selezionare",
                        addKey: "aggiungere chiave",
                        add: "aggiungere",
                        "delete": "cancellare",
                        edit: "modificare",
                        cancel: "cancellare",
                        save: "memorizzare",
                        test: "provare",
                        filterKeys: "filtrare chiave",
                        filterValue: "filtrare valore",
                        compare: "cparagonare a",
                        download: "scaricare",
                        th: {
                            key: "chiave",
                            specificValue: "valore specificato",
                            displayedValue: "valore indicato",
                            compareValue: "cparagonare valore"
                        },
                        resourceItem: {
                            compare: "paragonare",
                            options: "opzione",
                            optionsDesc: "un opzione per riga"
                        }
                    }
                }
            },
            fr: {
                translation: {
                    layout: {
                        header: {
                            language: "français"
                        }
                    },
                    editor: {
                        choose: "seléctioner",
                        addKey: "ajouter clé",
                        add: "ajouter",
                        "delete": "supprimer",
                        edit: "modifier",
                        cancel: "annuller",
                        save: "mémoriser",
                        test: "tester",
                        filterKeys: "filtrer clé",
                        filterValue: "filtrer valeur",
                        compare: "comparer avec",
                        download: "télécharger",
                        th: {
                            key: "clé",
                            specificValue: "valeur spécifique",
                            displayedValue: "valeur indiqué",
                            compareValue: "comparer"
                        },
                        resourceItem: {
                            compare: "comparer",
                            options: "Option",
                            optionsDesc: "une option par ligne"
                        }
                    }
                }
            }
        }
    }), define("modules/data/resources", ["backbone", "namespace"], function(e, t) {
        var n = t.app,
            r = t.module();
        return r.Models.Resource = t.Model.extend({
            url: function() {
                return "/data/my/group/" + this.id
            },
            initialize: function(e) {
                arguments.length > 1 && (e = arguments[1]), e && e.collection && e.collection.parent && (this.parent = e.collection.parent)
            }
        }), r.Collections.Resources = t.Collection.extend({
            url: "/data/my/groups",
            model: r.Models.Resource,
            initialize: function(e, t) {
                t && t.parent && (this.parent = t.parent)
            },
            comparator: function(e) {
                return e.get("key")
            }
        }), r
    }), define("modules/data/appData", ["backbone", "namespace", "underscore", "./resources"], function(e, t, n, r) {
        var i = t.app,
            s = t.module({
                name: "data",
                append: !0
            });
        return n.extend(s.Models, r.Models), n.extend(s.Collections, r.Collections), t.modules
    }), define("modules/translate/resourceSync", ["backbone", "namespace", "underscore", "jquery", "i18next", "../data/appData"], function(e, t, n, r, i) {
        function a(e, t, n) {
            return e.indexOf(i.options.interpolationPrefix) < 0 ? e : (i.functions.each(t, function(t, r) {
                typeof r == "object" ? e = a(e, r, t) : e = e.replace(new RegExp([i.options.interpolationPrefix, n ? n + "." + t : t, i.options.interpolationSuffix].join(""), "g"), r)
            }), e)
        }
        var s = t.app,
            o = t.modules.data.Collections,
            u = t.modules.data.Models,
            f = {},
            l = {
                languages: ["dev"],
                namespaces: ["translation"],
                resGetPath: "locales/__lng__/__ns__.json",
                resUpdatePath: "locales/change/__lng__/__ns__",
                resRemovePath: "locales/remove/__lng__/__ns__",
                fallbackLng: "dev",
                lowerCaseLng: !1,
                sendType: "POST",
                postAsync: "true",
                getAsync: "true"
            };
        return n.extend(f, {
            init: function(e, t) {
                var r = this;
                this.options = n.extend(l, e || {}), this.options.ns = {
                    namespaces: this.options.namespaces
                };
                var s = [];
                for (var o = 0, u = this.options.languages.length; o < u; o++) {
                    var a = this._toLanguages(this.options.languages[o]);
                    for (var f = 0, c = a.length; f < c; f++) s.indexOf(a[f]) < 0 && s.push(a[f])
                }
                this.options.languages = s, this.options.languages.sort(), this.options.namespaces.sort(), this.i18nOptions = n.clone(i.options), this.loadResources(this.options, function() {
                    r.flatten(r.resStore, r.options), t()
                })
            },
            _toLanguages: function(e) {
                var t = [];
                if (e.indexOf("-") === 2 && e.length === 5) {
                    var n = e.split("-");
                    e = this.options.lowerCaseLng ? n[0].toLowerCase() + "-" + n[1].toLowerCase() : n[0].toLowerCase() + "-" + n[1].toUpperCase(), t.push(e), t.push(e.substr(0, 2))
                } else t.push(e);
                return t.indexOf(this.options.fallbackLng) === -1 && t.push(this.options.fallbackLng), t
            },
            loadResources: function(e, t) {
                var r = this;
                i.sync._fetch(e.languages, this.options, function(e, i) {
                    r.resStore = r.resStore || {}, n.extend(r.resStore, i), t()
                })
            },
            flatten: function(e, t) {
                function u(e, t, n, r, i) {
                    for (var s in r) {
                        var o, a = r[s],
                            f = i;
                        f.length > 0 ? f = f + " ." + s : f = s, typeof a == "string" ? (o = {
                            id: f.replace(new RegExp(" ", "g"), ""),
                            lng: e,
                            ns: t,
                            key: f,
                            value: a,
                            fallback: {
                                value: a,
                                lng: e
                            }
                        }, n.push(o)) : Object.prototype.toString.apply(a) === "[object Array]" ? (o = {
                            id: f.replace(new RegExp(" ", "g"), ""),
                            lng: e,
                            ns: t,
                            key: f,
                            value: a.join("\n"),
                            isArray: !0,
                            fallback: {
                                value: a.join("\n"),
                                lng: e,
                                isArray: !0
                            }
                        }, n.push(o)) : u(e, t, n, a, f)
                    }
                }

                function a(e, t) {
                    for (var r = 0, i = t.length; r < i; r++) {
                        if (t[r] === e) continue;
                        var s = n[t[r]],
                            u = n[e];
                        for (var a in s) {
                            var f = s[a],
                                l = u[a] || new o.Resources;
                            f.each(function(n) {
                                !l.get(n.id) && n.get("fallback").lng === n.get("lng") && l.push({
                                    id: n.id,
                                    key: n.get("key"),
                                    lng: e,
                                    ns: a,
                                    isArray: n.get("isArray"),
                                    fallback: {
                                        value: n.get("value"),
                                        lng: t[r],
                                        isArray: n.get("isArray")
                                    }
                                })
                            })
                        }
                    }
                }
                var n = this.flat = [],
                    r, i, s;
                for (r in e) {
                    s = e[r], n[r] = {};
                    for (i in s) n[r][i] = new o.Resources, u(r, i, n[r][i], s[i], "")
                }
                for (r in n) a(r, this._toLanguages(r))
            },
            update: function(e, t, n, r, s) {
                var o = this,
                    u = {};
                u[n] = r;
                var f = a(this.options.resChangePath, {
                    lng: e,
                    ns: t
                });
                i.functions.ajax({
                    url: f,
                    type: this.options.sendType,
                    data: u,
                    success: function(u, a, l) {
                        i.functions.log("posted change key '" + n + "' to: " + f);
                        var c = n.split("."),
                            h = 0,
                            p = o.resStore[e][t];
                        while (c[h]) h === c.length - 1 ? p = p[c[h]] = r : p = p[c[h]] = p[c[h]] || {}, h++;
                        var d = o.flat[e][t].get(n);
                        if (!d) {
                            var v = o._toLanguages(e);
                            for (var m = 0, g = v.length; m < g; m++) {
                                if (v[m] === e) continue;
                                var y = o.flat[v[m]][t][n],
                                    b = o.flat[e][t].get(n);
                                if (!y || b) break;
                                o.flat[e][t].push({
                                    id: y.id,
                                    key: y.get("key"),
                                    lng: e,
                                    ns: t,
                                    isArray: y.get("isArray"),
                                    fallback: {
                                        value: y.get("value"),
                                        lng: v[m],
                                        isArray: y.get("isArray")
                                    }
                                })
                            }
                            d = o.flat[e][t].get(n);
                            if (!d) {
                                var w = n.split(".").join(" .");
                                o.flat[e][t].push({
                                    id: n,
                                    key: w,
                                    lng: e,
                                    ns: t,
                                    value: "",
                                    isArray: !1,
                                    fallback: {
                                        value: "",
                                        lng: e,
                                        isArray: !1
                                    }
                                })
                            }
                        } else d.set("value", r);
                        s && s(null)
                    },
                    error: function(e, t, r) {
                        i.functions.log("failed change key '" + n + "' to: " + f), s && s(r)
                    },
                    dataType: "json",
                    async: this.options.postAsync
                })
            },
            remove: function(e, t, n, r, s) {
                var o = this,
                    u = {};
                u[n] = r;
                var f = a(this.options.resRemovePath, {
                    lng: e,
                    ns: t
                });
                i.functions.ajax({
                    url: f,
                    type: this.options.sendType,
                    data: u,
                    success: function(r, u, a) {
                        i.functions.log("posted remove key '" + n + "' to: " + f);
                        var l = n.split("."),
                            c = 0,
                            h = o.resStore[e][t];
                        while (l[c]) c === l.length - 1 ? delete h[l[c]] : h = h[l[c]] = h[l[c]] || {}, c++;
                        var p = o.flat[e][t].get(n);
                        p.destroy(), s && s(null)
                    },
                    error: function(e, t, r) {
                        i.functions.log("failed remove key '" + n + "' to: " + f), s && s(r)
                    },
                    dataType: "json",
                    async: this.options.postAsync
                })
            }
        }), f
    }), define("modules/common/common", ["backbone", "namespace"], function(e, t) {
        var n = t.app,
            r = t.module({
                name: "common",
                append: !0,
                utils: {}
            }),
            i = r.utils.cookie = {
                create: function(e, t, n) {
                    var r;
                    if (n) {
                        var i = new Date;
                        i.setTime(i.getTime() + n * 60 * 1e3), r = "; expires=" + i.toGMTString()
                    } else r = "";
                    document.cookie = e + "=" + t + r + "; path=/"
                },
                read: function(e) {
                    var t = e + "=",
                        n = document.cookie.split(";");
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        while (i.charAt(0) == " ") i = i.substring(1, i.length);
                        if (i.indexOf(t) === 0) return i.substring(t.length, i.length)
                    }
                    return null
                },
                remove: function(e) {
                    this.create(e, "", -1)
                }
            },
            s, o = r.utils.detectMobile = function() {
                return s === undefined && (s = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)), s
            },
            u = r.utils.tooltip = function(e, t) {
                if (!o()) {
                    var n = t + " i[rel=tooltip]";
                    e.$(t).tooltip({
                        selector: "i[rel=tooltip]"
                    }), e.$(n).on("click", function(e) {
                        $(this).tooltip("hide")
                    })
                }
            };
        return r
    }), define("modules/layout/header", ["namespace", "backbone", "i18next"], function(e, t, n) {
        var r = e.app,
            i = e.module({
                name: "header",
                append: !0
            }),
            s = e.Controller.extend({
                standard: function() {
                    var t = new i.Views.Standard;
                    e.app.header.show(t)
                }
            });
        return i.controller = new s, i.Views.Standard = e.ItemView.extend({
            tagName: "div",
            template: "header",
            onRender: function() {
                function n(n) {
                    var i = '<li><a href="javascript:;">' + e.t("layout.header.language", {
                            lng: n
                        }) + "</a></li>",
                        s = $(i);
                    s.on("click", function(e) {
                        e.preventDefault(), r.setLng(n)
                    }), t.$(".languages").append(s)
                }
                var t = this;
                for (var i = 0, s = r.languages.length; i < s; i++) n(r.languages[i])
            }
        }), i
    }), define("modules/layout/footer", ["namespace", "backbone", "i18next"], function(e, t, n) {
        var r = e.app,
            i = e.module({
                name: "footer",
                append: !0
            }),
            s = e.Controller.extend({
                standard: function() {
                    var t = new i.Views.Standard;
                    e.app.footer.show(t)
                }
            });
        return i.controller = new s, i.Views.Standard = e.ItemView.extend({
            tagName: "div",
            template: "footer"
        }), i
    }), define("modules/layout/layout", ["namespace", "./header", "./footer"], function(e) {
        return
    }), define("modules/translate/resourceEditor", ["backbone", "namespace", "./resourceSync", "i18next"], function(e, t, n, r) {
        var i = t.app,
            s = t.module({
                name: "translationSample",
                append: !1
            }),
            o = t.Controller.extend({
                editor: function() {
                    var e = new s.Views.Main;
                    i.main.show(e)
                }
            });
        s.controller = new o;
        var u = t.Router.extend({
                appRoutes: {
                    "": "editor",
                    editor: "editor"
                },
                controller: s.controller
            }),
            a = new u,
            f = "";
        return s.Views.Main = t.Layout.extend({
            tagName: "div",
            template: "resourceEditorLayout",
            regions: {
                resources: "#resources"
            },
            initialize: function(e) {},
            events: {
                "click #add": "ui_add",
                "keyup .filter": "ui_filter",
                "keyup .filter-value": "ui_filter_value"
            },
            ui_filter: _.debounce(function(e) {
                i.vent.trigger("filter", this.$(".filter").val())
            }, 250),
            ui_filter_value: _.debounce(function(e) {
                i.vent.trigger("filter", this.$(".filter-value").val(), !0)
            }, 250),
            ui_load: function(e) {
                e && e.preventDefault();
                var t = this.$("#languages").val(),
                    r = this.$("#namespaces").val();
                f = this.$("#compare-lng").val();
                var i = n.flat[f][r],
                    o = n.flat[t][r];
                if (o.models.length > 0) {
                    var u = o.models.length,
                        a = i.models.length,
                        l = 0,
                        c = 0;
                    for (l = 0; l < u; l++) {
                        var h = !1;
                        for (c = 0; c < a; c++)
                            if (i.models[c] && i.models[c].get("key") == o.models[l].get("key")) {
                                o.models[l].set({
                                    compare: i.models[c].get("value")
                                }), h = !0;
                                break
                            }
                        h || o.models[l].set({
                            compare: ""
                        })
                    }
                }
                var p = new s.Views.Resources({
                    collection: n.flat[t][r],
                    parent: this
                });
                this.resources.show(p)
            },
            ui_add: function(e) {
                e.preventDefault();
                var t = this,
                    r = this.$("#addKey").val();
                n.update(this.$("#languages").val(), this.$("#namespaces").val(), r, "", function(e) {
                    t.$("#addKey").val("").blur();
                    var n = t.bindTo(t.resources.currentView, "render", function() {
                        setTimeout(function() {
                            var e = "#" + r.replace(/\./g, ""),
                                i = ".resources:not(:has(" + e + "))";
                            while ($(e) < 0);
                            $.smoothScroll({
                                offset: -90,
                                direction: "top",
                                scrollTarget: e,
                                easing: "swing",
                                speed: 400
                            }), t.unbindFrom(n)
                        }, 200)
                    }, t);
                    t.resources.currentView.collection.sort()
                })
            },
            onRender: function() {
                var e = n.options,
                    t, r, i, s;
                for (t = 0, r = e.languages.length; t < r; t++) i = e.languages[t], s = '<option value="' + i + '">' + i + "</option> ", this.$("#languages").append($(s)), this.$("#compare-lng").append($(s));
                for (t = 0, r = e.namespaces.length; t < r; t++) i = e.namespaces[t], s = '<option value="' + i + '">' + i + "</option> ", this.$("#namespaces").append($(s));
                this.ui_load()
            },
            onShow: function() {
                var e = this;
                this.$("#languages").chosen().change(function() {
                    e.ui_load()
                }), this.$("#namespaces").chosen().change(function() {
                    e.ui_load()
                }), this.$("#compare-lng").chosen().change(function() {
                    e.ui_load()
                })
            }
        }), s.Views.ResourceItem = t.ItemView.extend({
            tagName: "li",
            template: "resourceEditorItem",
            initialize: function(e) {
                this.isHidden = !1, this.bindTo(i.vent, "filter", this.filter, this)
            },
            events: {
                "click .edit": "ui_edit",
                "click .editor-wrapper": "ui_edit",
                "click .cancel": "ui_cancelEdit",
                "click .save": "ui_save",
                "click .remove": "ui_toggleRemove",
                "click .cancelRemove": "ui_toggleRemove",
                "click .confirmRemove": "ui_confirmRemove",
                "click .test": "ui_toggleTest",
                "click .refresh": "ui_refreshTest",
                "click .compare": "ui_compare",
                "click .preview": "ui_preview",
                "click .multiline": "ui_toggleArray",
                "click .singleline": "ui_toggleArray",
                "click .compareEdit": "ui_compare_edit",
                "click .compare-editor-wrapper": "ui_compare_edit",
                "click .compareCancel": "ui_compare_cancelEdit",
                "click .compareSave": "ui_compare_save"
            },
            filter: function(e, t) {
                var n = new RegExp(e),
                    r;
                t ? r = this.model.get("value") : r = this.model.get("id"), e === "" && this.isHidden ? (this.$el.show(), this.isHidden = !1) : n.test(r) === !1 && !this.isHidden ? (this.$el.hide(), this.isHidden = !0) : n.test(r) === !0 && this.isHidden && (this.$el.show(), this.isHidden = !1)
            },
            ui_edit: function(e) {
                e.preventDefault(), this.$(".editor").val() || this.$(".editor").val(this.model.get("fallback").value), this.$(".editor").removeAttr("disabled"), this.$(".editor").focus(), this.$(".mainCommands").hide(), this.$(".editCommands").show()
            },
            ui_cancelEdit: function(e, t) {
                e && e.preventDefault(), this.$(".editor").attr("disabled", "disabled"), this.$(".mainCommands").show(), this.$(".editCommands").hide(), t || this.$(".editor").val(this.model.get("value"))
            },
            ui_save: function(e) {
                e && e.preventDefault();
                var t = this;
                this.$(".editCommands button").attr("disabled", "disabled");
                var r = this.$(".editor").val(),
                    i;
                this.model.get("isArray") && (i = r.split("\n")), n.update(this.model.get("lng"), this.model.get("ns"), this.model.id, i || r, function(e) {
                    t.model.set("value", r), t.$(".editCommands button").removeAttr("disabled"), t.ui_cancelEdit(undefined, !0)
                })
            },
            ui_toggleRemove: function(e) {
                e && e.preventDefault(), this.removing ? (this.removing = !1, this.$(".removeCommands").hide(), this.$(".mainCommands").show(), this.resetI18n(function() {})) : (this.removing = !0, this.$(".removeCommands").show(), this.$(".mainCommands").hide())
            },
            ui_confirmRemove: function(e) {
                e && e.preventDefault();
                var t = this;
                this.$(".remove").attr("disabled", "disabled"), n.remove(this.model.get("lng"), this.model.get("ns"), this.model.id, "", function(e) {})
            },
            ui_toggleTest: function(e) {
                e.preventDefault(), this.testing ? (this.testing = !1, this.$(".testSection").hide(), this.$(".previewSection").show(), this.resetI18n(function() {})) : (this.testing = !0, this.$(".testSection").show(), this.$(".previewSection").hide(), this.ui_refreshTest())
            },
            ui_refreshTest: function(e) {
                function f(e, n) {
                    t.$(".translated").html(e(t.model.get("ns") + ":" + t.model.id, n))
                }
                e && e.preventDefault();
                var t = this,
                    i = {},
                    s = t.$(".i18nOptions").val();
                if (s.length > 0) {
                    s = s.replace(new RegExp(" = ", "g"), "=").split(/\n|\r/);
                    for (var o = 0, u = s.length; o < u; o++) {
                        var a = s[o].split("=");
                        $.isNumeric(a[1]) ? a[1] = parseInt(a[1], 10) : a[1] = a[1].replace(/'|"/g, ""), i[a[0]] = a[1]
                    }
                }
                n.i18nDirty ? f(r.t, i) : this.prepareI18n(function(e) {
                    f(e, i)
                })
            },
            ui_compare: function(e) {
                e.preventDefault(), this.$(".compare-commands").show(), this.$(".compareControl").show(), this.$(".preview-commands").hide(), this.$(".previewControl").hide()
            },
            ui_preview: function(e) {
                e.preventDefault(), this.$(".compare-commands").hide(), this.$(".compareControl").hide(), this.$(".preview-commands").show(), this.$(".previewControl").show()
            },
            prepareI18n: function(e) {
                var t = this;
                r.init({
                    resStore: n.resStore,
                    lng: this.model.get("lng")
                }, function(t) {
                    n.i18nDirty = !0, e(t)
                })
            },
            resetI18n: function(e) {
                var t = this;
                r.init(n.i18nOptions, function(t) {
                    n.i18nDirty = !1, e && e(t)
                })
            },
            ui_toggleArray: function(e) {
                e.preventDefault(), this.model.get("isArray") ? this.model.set("isArray", !1) : this.model.set("isArray", !0), this.render()
            },
            onRender: function() {
                this.$el.attr("id", this.model.id.replace(/\./, "")).attr("name", this.model.id.replace(/\./, "")).attr("href", "/#" + this.model.id.replace(/\./, ""));
                var e = this.model.get("fallback").lng;
                e !== this.model.get("lng") && (this.$(".resource").addClass("isFallback"), this.$(".key").addClass("isFallback"), this.$(".fallbackBadge").removeClass("badge-success").addClass("badge-warning")), e === n.options.fallbackLng && this.model.get("lng").indexOf(n.options.fallbackLng) < 0 && (this.$(".resource").addClass("toFallback"), this.$(".key").addClass("toFallback"), this.$(".fallbackBadge").removeClass("badge-success").removeClass("badge-warning").addClass("badge-error")), this.model.get("isArray") ? this.$(".multiline").hide() : this.$(".singleline").hide()
            },
            onClose: function() {
                n.i18nDirty && this.resetI18n()
            },
            ui_compare_edit: function(e) {
                e.preventDefault(), !this.$(".compare-editor").val(), this.$(".compare-editor").removeAttr("disabled"), this.$(".compare-editor").focus(), this.$(".compareMainCommands").hide(), this.$(".compareEditCommands").show()
            },
            ui_compare_cancelEdit: function(e, t) {
                e && e.preventDefault(), this.$(".compare-editor").attr("disabled", "disabled"), this.$(".compareMainCommands").show(), this.$(".compareEditCommands").hide(), t || this.$(".compare-editor").val(this.model.get("compare"))
            },
            ui_compare_save: function(e) {
                e && e.preventDefault();
                var t = this;
                this.$(".compareEditCommands button").attr("disabled", "disabled");
                var r = this.$(".compare-editor").val(),
                    i;
                this.model.get("isArray") && (i = r.split("\n")), f && n.update(f, this.model.get("ns"), this.model.id, i || r, function(e) {
                    t.$(".compareEditCommands button").removeAttr("disabled"), t.ui_compare_cancelEdit(undefined, !0)
                })
            }
        }), s.Views.Resources = t.CollectionView.extend({
            tagName: "ul",
            className: "unstyled resources",
            itemView: s.Views.ResourceItem
        }), s
    }), require(["namespace", "jquery", "backbone", "i18next", "resources", "modules/data/appData", "modules/translate/resourceSync", "modules/common/common", "modules/layout/layout", "modules/translate/resourceEditor"], function(e, t, n, r, i, s, o) {
        var u = e.app;
        u.debug = !1, u.store = new n.Model, u.languages = ["en", "de", "it", "fr"], u.resStore = i, u.setLng = function(e) {
            e = e.substring(0, 2), u.languages.indexOf(e) < 0 && (e = r.options.fallbackLng), r.setLng(e, function() {
                u.header.currentView && u.header.currentView.render(), u.main.currentView && u.main.currentView.render(), u.footer.currentView && u.footer.currentView.render()
            }), u.currentLng = e
        }, u.addRegions({
            header: ".header-inner",
            main: ".main-inner",
            footer: ".footer-inner"
        }), u.addInitializer(function(e) {
            t.support.placeholder = !1, test = document.createElement("input"), "placeholder" in test && (t.support.placeholder = !0)
        }), window.i18nextWT_onready && window.i18nextWT_onready({
            addResourceSet: function(e, t) {
                u.languages = u.languages || [], u.languages.indexOf(e) < 0 && u.languages.push(e);
                var n = {};
                n[e] = {}, n[e].translation = t, u.resStore = u.resStore || {}, _.extend(u.resStore, n)
            },
            config: function(t) {
                var n = {
                    resStore: u.resStore,
                    fallbackLng: "en"
                };
                u.addAsyncInitializer(function(t, i) {
                    r.init(n, function(t) {
                        e.t = t, u.setLng(r.lng()), i()
                    })
                }), u.addAsyncInitializer(function(e, n) {
                    o.init(t, function() {
                        n()
                    })
                })
            },
            start: function() {
                u.start(function() {
                    e.modules.header.controller.standard(), e.modules.footer.controller.standard(), n.history.start()
                })
            }
        })
    }), define("main", function() {}), require.config({
        deps: ["main"],
        paths: {
            libs: "../assets/js/libs",
            augment: "../assets/js/libs/augment",
            i18next: "../assets/js/libs/i18next.amd.withJQuery-1.6.0",
            jquery: "../assets/js/libs/jquery-1.7.2",
            jquery_smoothscroll: "../assets/js/libs/jquery.smooth-scroll-1.4.4",
            underscore: "../assets/js/libs/lodash-0.3.2",
            handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
            backbone: "../assets/js/libs/backbone-0.9.2",
            marionette: "../assets/js/libs/backbone.marionette-0.9.5",
            marionette_async: "../assets/js/libs/backbone.marionette.async-0.9.5",
            twitterbootstrap: "../assets/js/libs/bootstrap-2.0.2",
            chosen: "../assets/js/libs/chosen-0.9.8"
        },
        shim: {
            augment: [],
            chosen: ["jquery"],
            jquery_smoothscroll: ["jquery"],
            underscore: {
                deps: [],
                exports: "_"
            },
            handlebars: {
                deps: [],
                exports: "Handlebars"
            },
            marionette: {
                deps: ["backbone"],
                exports: "Backbone.Marionette"
            },
            marionette_async: {
                deps: ["backbone", "marionette"],
                exports: "Backbone.Marionette"
            },
            backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },
            twitterbootstrap: []
        }
    }), define("config", function() {});
