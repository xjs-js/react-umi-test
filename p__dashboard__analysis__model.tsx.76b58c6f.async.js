(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{Cj9e:function(a,e,t){"use strict";var r=t("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.fakeChartData=c;var n=r(t("d6i3")),s=r(t("1l/V")),u=r(t("t3Un"));function c(){return l.apply(this,arguments)}function l(){return l=(0,s.default)(n.default.mark(function a(){return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.default)("/api/fake_chart_data"));case 1:case"end":return a.stop()}},a)})),l.apply(this,arguments)}},hgwi:function(a,e,t){"use strict";var r=t("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("p0pE")),s=r(t("d6i3")),u=t("Cj9e"),c={visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]},l={namespace:"dashboardAnalysis",state:c,effects:{fetch:s.default.mark(function a(e,t){var r,n,c;return s.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=t.call,n=t.put,a.next=3,r(u.fakeChartData);case 3:return c=a.sent,a.next=6,n({type:"save",payload:c});case 6:case"end":return a.stop()}},a)}),fetchSalesData:s.default.mark(function a(e,t){var r,n,c;return s.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return r=t.call,n=t.put,a.next=3,r(u.fakeChartData);case 3:return c=a.sent,a.next=6,n({type:"save",payload:{salesData:c.salesData}});case 6:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){var t=e.payload;return(0,n.default)({},a,t)},clear:function(){return c}}},i=l;e.default=i}}]);