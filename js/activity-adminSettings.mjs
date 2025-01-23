import{V as n,t as d,a as m}from"./index-FHDXXk0Q.chunk.mjs";import{N as o,m as s,a as c,A as p,i as u,s as a}from"./settings-store-Ce8jp8fS.chunk.mjs";import{x as g,b as l}from"./NcCheckboxRadioSwitch-CvMEEI9x-BV2YqD7g.chunk.mjs";import"./_commonjsHelpers-D9DevfhH.chunk.mjs";import"./NcNoteCard-CImn6F9p-B5NIs5kG.chunk.mjs";import"./logger-DdfSSqJ9.chunk.mjs";const v={name:"AdminSettings",components:{NcCheckboxRadioSwitch:g,NcSettingsSection:o},computed:{...s({emailEnabled:"emailEnabled"}),settingDescription(){return this.emailEnabled?t("activity","Choose for which activities you want to get an email or push notification."):t("activity","Choose for which activities you want to get a push notification.")}},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings/admin"})},methods:{...c(["setEndpoint","toggleEmailEnabled"])}};var h=function(){var i=this,e=i._self._c;return e("NcSettingsSection",{attrs:{name:i.t("activity","Notification")}},[e("NcCheckboxRadioSwitch",{attrs:{type:"checkbox",checked:i.emailEnabled},on:{"update:checked":function(r){return i.toggleEmailEnabled({emailEnabled:r})}}},[i._v(" "+i._s(i.t("activity","Enable notification emails"))+" ")])],1)},f=[],y=l(v,h,f,!1,null,null);const E=y.exports,b={name:"DefaultActivitySettings",components:{ActivityGrid:p,NcSettingsSection:o},computed:{...s({emailEnabled:"emailEnabled"})},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings/admin"})},methods:{...c(["setEndpoint","toggleEmailEnabled"])}};var S=function(){var i=this,e=i._self._c;return e("NcSettingsSection",{attrs:{name:i.t("activity","Default settings"),description:i.t("activity","Configure the default notification settings for new accounts.")}},[e("ActivityGrid")],1)},w=[],N=l(b,S,w,!1,null,null);const A=N.exports;n.prototype.t=d,n.prototype.n=m,n.use(u),new n({el:"#activity-admin-settings",store:a,name:"ActivityPersonalSettings",render:i=>i(E)}),new n({el:"#activity-default-settings",store:a,name:"ActivityDefaultSettings",render:i=>i(A)});
