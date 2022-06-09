"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[61327],{68842:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 2.8.8",tags:["Release notes","Moodle 2.8"],sidebar_position:8,moodleVersion:"2.8.8"},d=void 0,p={unversionedId:"releases/2.8/2.8.8",id:"releases/2.8/2.8.8",title:"Moodle 2.8.8",description:"Release date: 14 September 2015",source:"@site/general/releases/2.8/2.8.8.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.8",permalink:"/devdocs/general/releases/2.8/2.8.8",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.8.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654783321,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:8,frontMatter:{title:"Moodle 2.8.8",tags:["Release notes","Moodle 2.8"],sidebar_position:8,moodleVersion:"2.8.8"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.7",permalink:"/devdocs/general/releases/2.8/2.8.7"},next:{title:"Moodle 2.8.9",permalink:"/devdocs/general/releases/2.8/2.8.9"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 September 2015"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8.8%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.8.8"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50062"},"MDL-50062"),' - Changing grading category aggregation method no longer results in unexpected "Extra credit" items'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34938"},"MDL-34938")," - Enrolment expiration dates are now respected in meta course enrolments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35148"},"MDL-35148")," - Course/Category themes are respected when viewing website on tablets or mobile devices"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45772"},"MDL-45772"),' - Forms such as "Create new group" are no longer populated with passwords and usernames by the browsers')),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37832"},"MDL-37832"),' - Course overview block on "My" ("Dashboard") page indicates that activities are expandable/collapsible'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46860"},"MDL-46860")," - Filepicker is displayed correctly inside Manage Files popup in Atto"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49536"},"MDL-49536"),' - "Clean" and "More" theme\'s logo removes all header information.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45841"},"MDL-45841")," - Blog-style forums better indicate unread posts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50293"},"MDL-50293")," - File name wraps properly in the Navigation block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50323"},"MDL-50323")," - Unordered lists are styled in course sections properly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50869"},"MDL-50869")," - Increased contract of warning colours for AA accessibility"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50801"},"MDL-50801")," - Allow to set the caption side in Atto table")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49826"},"MDL-49826")," - Single view now requires capability moodle/grade:edit and not moodle/grade:manage"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35027"},"MDL-35027")," - Forum's subscribers list shows participants with no access to forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51179"},"MDL-51179")," - Atto autosave restore is disabled if the content is modified by somebody else"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49629"},"MDL-49629")," - Possible to specify icon URL for a named external tool"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50868"},"MDL-50868")," - Allow to use ruby tags")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49085"},"MDL-49085")," - Block tag_youtube is converted to the new YouTube API"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49360"},"MDL-49360")," - Function get_local_referer() should be used rather than HTTP_REFERER directly")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320287"},"MSA-15-0030")," Students can re-attempt answering questions in the lesson"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320289"},"MSA-15-0032")," Users can delete files uploaded by other users in wiki"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320290"},"MSA-15-0033")," Meta course synchronisation enrols suspended students as managers for a short period of time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320291"},"MSA-15-0034")," Vulnerability in password recovery mechanism"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320292"},"MSA-15-0035")," Rating component does not check separate groups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=320293"},"MSA-15-0036")," XSS in grouping description")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46232"},"MDL-46232"),' - Fixed "Only lowercase letters allowed" error on deleting users with empty email'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30315"},"MDL-30315")," - Uploading feedback from CSV no longer overrides local assigned grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49440"},"MDL-49440")," - Date picker correctly displays names for week days in all locales"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42670"},"MDL-42670")," - Recent activity block no longer shows student name when assignment blind marking is on"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49864"},"MDL-49864")," - Assignment PDF Pen annotations are always visible even if there are draft pen annotations"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43785"},"MDL-43785")," - Corrected error message text about expired sessions when clicking on AJAX elements such as expanding admin menu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44962"},"MDL-44962")," - Fixed error when using HTML tags inside wiki headers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50649"},"MDL-50649")," - Optimised database query for Course Participation report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50714"},"MDL-50714")," - Posting in a forum does not unnecessary require capability 'mod/forum:movediscussions'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50799"},"MDL-50799"),' - Improve question bank "questions per page" string behaviour')),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.8"},"Notes de mise \xe0 jour de Moodle 2.8.8")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.8"},"Notas de Moodle 2.8.8"))))}h.isMDXComponent=!0}}]);