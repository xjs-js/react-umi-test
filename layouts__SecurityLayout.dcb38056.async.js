(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{L9NX:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r("2Taf")),a=n(r("vZ4D")),i=n(r("l4Ni")),o=n(r("ujKo")),s=n(r("MhPg")),d=n(r("q1tI")),l=r("MuoO"),c=r("ArA+"),f=n(r("Jdo2")),p=function(e){function t(){var e,r;(0,u.default)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return r=(0,i.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(a))),r.state={isReady:!1},r}return(0,s.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=this.props.dispatch;e&&e({type:"user/fetchCurrent"})}},{key:"render",value:function(){var e=this.state.isReady,t=this.props,r=t.children,n=t.loading,u=t.currentUser;return!u.userid&&n||!e?d.default.createElement(f.default,null):u.userid?r:d.default.createElement(c.Redirect,{to:"/user/login"})}}]),t}(d.default.Component),h=(0,l.connect)(function(e){var t=e.user,r=e.loading;return{currentUser:t.currentUser,loading:r.models.user}})(p);t.default=h}}]);