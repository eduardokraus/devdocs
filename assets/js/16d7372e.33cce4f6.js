"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[43806],{45136:function(e,t,s){s.r(t),s.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=s(83117),r=s(80102),o=(s(67294),s(3905)),a=s(13904),n=["components"],l={title:"Security procedures",sidebar_label:"Security",tags:["Security","Processes"]},d=void 0,u={unversionedId:"development/process/security",id:"development/process/security",title:"Security procedures",description:"In the Moodle software, security issues are treated very seriously. Even though a lot of time is dedicated designing the code to avoid such problems, it is inevitable in a project of this size that new vulnerabilities will occasionally be discovered.",source:"@site/general/development/process/security.md",sourceDirName:"development/process",slug:"/development/process/security",permalink:"/devdocs/general/development/process/security",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/security.md",tags:[{label:"Security",permalink:"/devdocs/general/tags/security"},{label:"Processes",permalink:"/devdocs/general/tags/processes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"Security procedures",sidebar_label:"Security",tags:["Security","Processes"]},sidebar:"process",previous:{title:"Docs required issues",permalink:"/devdocs/general/development/process/release/docsrequiredissues"},next:{title:"Penetration testing",permalink:"/devdocs/general/development/process/security/penetration-testing"}},p={},c=[{value:"Disclosure policy",id:"disclosure-policy",level:2},{value:"How can I report a  security issue?",id:"how-can-i-report-a--security-issue",level:2},{value:"How we deal with a reported security issue",id:"how-we-deal-with-a-reported-security-issue",level:2},{value:"Rewards",id:"rewards",level:2},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],m={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,(0,i.Z)({frontMatter:l},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("p",null,"In the Moodle software, security issues are treated very seriously. Even though a lot of time is dedicated designing the code to avoid such problems, it is inevitable in a project of this size that new vulnerabilities will occasionally be discovered."),(0,o.kt)("h2",{id:"disclosure-policy"},"Disclosure policy"),(0,o.kt)("p",null,"In Moodle, ",(0,o.kt)("em",{parentName:"p"},"responsible disclosure")," is practised, which means there is a policy of disclosing all security issues that come to our attention, but only after we have solved the issue and given registered Moodle sites time to upgrade or patch their installations."),(0,o.kt)("p",null,"When reporting a security issue, you are asked to observe these same guidelines too. Beyond communicating with the security team, ",(0,o.kt)("strong",{parentName:"p"},"do not share your knowledge of security issues with the public at large"),"."),(0,o.kt)("h2",{id:"how-can-i-report-a--security-issue"},"How can I report a  security issue?"),(0,o.kt)("p",null,"Please submit your findings via our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://moodle.org/security/report"},"security issue submission form")),", providing step by step instructions if possible. The form is broken down into sections to help you provide all of the necessary details to help us assess the issue."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/security/report"},"submission form")," is linked to our ",(0,o.kt)("a",{parentName:"p",href:"https://bugcrowd.com"},"Bugcrowd")," program, which ensures more efficient triage of incoming security issues and a smoother overall responsible disclosure process."),(0,o.kt)("p",null,"If you are a developer and wish to submit a fix along with your submission, please feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/CreateIssue.jspa?pid=10011&issuetype=1"},"create a new issue")," in the Moodle Tracker instead, ensuring that you set a security level on the issue (",(0,o.kt)("strong",{parentName:"p"},'"Serious security issue"')," or ",(0,o.kt)("strong",{parentName:"p"},'"Minor security issue"'),"), which will hide it from public view. If you are submitting via Tracker and not sure whether an issue is a security issue, you should set the security level to ",(0,o.kt)("strong",{parentName:"p"},'"Could be a security issue"'),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In line with the responsible disclosure philosophy, please do ",(0,o.kt)("em",{parentName:"p"},"not")," post about security issues in the forums on moodle.org or elsewhere, as this will reveal the issue before we are able to prepare a fix."))),(0,o.kt)("h2",{id:"how-we-deal-with-a-reported-security-issue"},"How we deal with a reported security issue"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Issues submitted via the submission form are received by Bugcrowd's triage team, who perform initial triage on the report."),(0,o.kt)("li",{parentName:"ol"},"If the issue is confirmed valid and not a duplicate by the Bugcrowd team, the Moodle security team reviews the issue and evaluates its potential impact on all supported versions of Moodle. If the issue was submitted directly into Tracker rather than via the form, this will be the first step in the process."),(0,o.kt)("li",{parentName:"ol"},"Valid issues are then pushed to the ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org"},"Moodle Tracker")," (restricted from public view)."),(0,o.kt)("li",{parentName:"ol"},"The Moodle security team works with the issue reporter to resolve the problem, following the ",(0,o.kt)("a",{parentName:"li",href:"/general/development/process#security-issues"},"Security issue development process")," and keeping details of the problem and its solution hidden until a release is made."),(0,o.kt)("li",{parentName:"ol"},"New versions are created and tested."),(0,o.kt)("li",{parentName:"ol"},"Meanwhile Moodle requests ",(0,o.kt)("a",{parentName:"li",href:"http://cve.mitre.org/"},"CVE identifiers")," for the security issue."),(0,o.kt)("li",{parentName:"ol"},"New packages are created and made available on ",(0,o.kt)("a",{parentName:"li",href:"https://download.moodle.org/"},"download.moodle.org"),"."),(0,o.kt)("li",{parentName:"ol"},"Advisories are mailed to administrators of registered Moodle sites, giving a period of time when they can upgrade before the issue becomes public."),(0,o.kt)("li",{parentName:"ol"},"A public announcement is made about the security issue in the ",(0,o.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/view.php?id=7128"},"Moodle security news forum"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://oss-security.openwall.org/wiki/"},"Open Source Software Security")," is notified about it."),(0,o.kt)("li",{parentName:"ol"},"Issues submitted via the submission form are marked fixed in the Bugcrowd platform, which will notify the reporter.")),(0,o.kt)("h2",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"When a patched Moodle LMS security vulnerability is announced via ",(0,o.kt)("a",{parentName:"p",href:"http://cve.mitre.org/"},"CVE")," and in the ",(0,o.kt)("a",{parentName:"p",href:"http://moodle.org/mod/forum/view.php?id=7128"},"Moodle security news forum"),", credits are always given by naming the first reporter of the issue (regardless of submission method)."),(0,o.kt)("p",null,"In addition to this, if an email address is provided with submissions made via the ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.org/security/report"},"submission form"),", it is possible for members of the Bugcrowd platform to claim their submissions under their Bugcrowd account. Please note that security issues submitted by other means (for example, Tracker, email) cannot be linked to a Bugcrowd account, as they will not be triaged via that platform."),(0,o.kt)("p",null,"At this time, no paid public bug bounty program is offered."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/general/development/process#security-issues"},"Security issue development process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/general/development/process/security/penetration-testing"},"Moodle Penetration Testing"))),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Sicherheitsprozeduren"},"Sicherheitsprozeduren")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Procedimientos_de_seguridad_en_Moodle"},"Procedimientos de seguridad en Moodle"))))}h.isMDXComponent=!0}}]);