"use strict";var CPLocalStorage={clear:function(){this._exec(function(){localStorage.clear()})},setItem:function(e,t){this._exec(function(){localStorage.setItem(e,t)})},getItem:function(e){return this._exec(function(){return localStorage.getItem(e)})},removeItem:function(e){this._exec(function(){localStorage.removeItem(e)})},_exec:function(e){try{return e()}catch(t){}}};