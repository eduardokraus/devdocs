"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[40673],{57492:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.8.2",tags:["Release notes","Moodle 3.8"],sidebar_position:2,moodleVersion:"3.8.2"},m=void 0,p={unversionedId:"releases/3.8/3.8.2",id:"releases/3.8/3.8.2",title:"Moodle 3.8.2",description:"Release date: 9 March 2020",source:"@site/general/releases/3.8/3.8.2.md",sourceDirName:"releases/3.8",slug:"/releases/3.8/3.8.2",permalink:"/devdocs/general/releases/3.8/3.8.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.8/3.8.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.8",permalink:"/devdocs/general/tags/moodle-3-8"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.8.2",tags:["Release notes","Moodle 3.8"],sidebar_position:2,moodleVersion:"3.8.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.8.1",permalink:"/devdocs/general/releases/3.8/3.8.1"},next:{title:"Moodle 3.8.3",permalink:"/devdocs/general/releases/3.8/3.8.3"}},d={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security fixes and improvements",id:"security-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:3},{value:"Translations",id:"translations",level:2}],k={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 March 2020"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.8.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.8.2"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67175"},"MDL-67175")," - Chrome 80 support"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57755"},"MDL-57755")," - Notifications automatically marked as read when messaging deactivated"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67132"},"MDL-67132")," - LTI Adv grades do not roll up in course total"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67414"},"MDL-67414")," - PostgreSQL 12.x support"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67894"},"MDL-67894"),' - Database error when sorting responses by "Groups"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67204"},"MDL-67204"),' - Assignment calendar events with "alwaysshowdescription" get updated on every task run because of not updated "lastcron" field'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65952"},"MDL-65952"),' - mod_scorm automatically checks "passed" and "completed" completion options'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67690"},"MDL-67690")," - Course Overview doesn't remember Starred filter state"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63316"},"MDL-63316")," - Give back the default sort behaviour (lastname) in the participant table"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49103"},"MDL-49103")," - Badge baking uses tEXt instead of iTXt"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64531"},"MDL-64531")," - Delete quiz JSON error if question category deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67532"},"MDL-67532")," - Create Badge Page -- language defaults to 'Afar'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67817"},"MDL-67817")," - Update time zones listed in the language strings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67675"},"MDL-67675")," - Cannot cut and paste if H5P button is added to the Atto toolbar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60126"},"MDL-60126")," - Competency user data is not being erased when user gets deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67842"},"MDL-67842")," - Cannot remove the idnumber from a question"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67674"},"MDL-67674")," - Performance: Course category tree cache can get built in parallel"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66024"},"MDL-66024")," - tool_uploadcourse: fullname/shortname fields don't get length checked while uploading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51225"},"MDL-51225")," - Q&A forum recent activity reveals posts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67486"},"MDL-67486")," - Minimize how long we hold the global cron lock for"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67721"},"MDL-67721")," - No 'View grade' button for single simple discussion forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65884"},"MDL-65884"),' - "Activity names auto-linking" filter and activity name like "-" (hyphen) breaks course content visualization'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67471"},"MDL-67471")," - mark_notification_read fails if messaging disabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66721"},"MDL-66721"),' - Add an activity or resource menu "add" button appears below the fold'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67364"},"MDL-67364")," - TinyMCE editor font sizes are too small in Classic theme (and other child themes)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67891"},"MDL-67891")," - Uninstalling Cohort roles tool can break site upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67511"},"MDL-67511")," - Toast wrapper can interfere with Forum grading buttons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63424"},"MDL-63424")," - Required field indicator missing from Assign submission page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66875"},"MDL-66875")," - Calendar - Navigating months - URL doesn't work"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66858"},"MDL-66858")," - ",(0,s.kt)("inlineCode",{parentName:"li"},"<header>")," HTML5 tag is filtered out by Atto editor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66220"},"MDL-66220")," - Q&A forum allows students to reply to posts they cannot see"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67830"},"MDL-67830")," - Error being logged when navigating from gradebook to quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67746"},"MDL-67746")," - Cleanup of task logs fails with big number of records to be deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66897"},"MDL-66897")," - 'The grades were not saved...' should not be displayed as a success message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67142"},"MDL-67142")," - Long quiz names break deletion ad hoc task when questions are backed up"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67312"},"MDL-67312")," - Events without subscriptions can lock users out of their sites"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66108"},"MDL-66108"),' - Error "You cannot make a category of one of its own subcategories."'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67644"},"MDL-67644")," - Allow to disable identity providers via Moodle app feature settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67806"},"MDL-67806")," - Allow to disable Dark Mode via Moodle app feature settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67237"},"MDL-67237"),' - Option to disable "H5P Offline" feature in the app'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67980"},"MDL-67980"),' - Sort ad-hoc tasks by "nextruntime"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65573"},"MDL-65573")," - Splitting a discussion creates discussion record with an incorrect first post author"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67732"},"MDL-67732")," - Respect the capability for displaying the fullname"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64686"},"MDL-64686"),' - "Search courses" layout should look good on all screen sizes'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67942"},"MDL-67942")," - Quiz: report delete_selected_attempts notice when a user has multiple enrolments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67424"},"MDL-67424")," - Errors showing for Forums in Complete Report for students")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67969"},"MDL-67969")," - Calendar: View event details: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67899"},"MDL-67899")," - Emoji picker button does not have a description"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67876"},"MDL-67876")," - Forms with client-side validation should always scroll to the invalid element when you try to submit"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67865"},"MDL-67865")," - Broken ARIA reference in the user menu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67863"},"MDL-67863")," - Ensure keyboard focus order is efficient and logical"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67862"},"MDL-67862")," - Empty h3 tag in message deletion dialogue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67684"},"MDL-67684")," - Cache data contained in nested ul"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67577"},"MDL-67577")," - Accessibility: Wrong tabindex order in top navbar (message+notification)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61390"},"MDL-61390")," - Forum: Heading structure on Search results page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61389"},"MDL-61389"),' - Forum: "Discuss this topic" accessibility'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59817"},"MDL-59817")," - Atto Accessibility Checker not catching accessibility issues in Firefox"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35971"},"MDL-35971")," - Forum discussion table has no summary")),(0,s.kt)("h2",{id:"security-fixes-and-improvements"},"Security fixes and improvements"),(0,s.kt)("h3",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=398350"},"MSA-20-0002")," Grade history report does not respect Separate groups mode in the course settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=398351"},"MSA-20-0003")," IP addresses can be spoofed using X-Forwarded-For"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=398352"},"MSA-20-0004")," Admin PHP unit webrunner tool requires additional input escaping")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.8.2"},"Notes de mise \xe0 jour de Moodle 3.8.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.8.2"},"Notas de Moodle 3.8.2"))))}c.isMDXComponent=!0}}]);