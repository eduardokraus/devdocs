"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[10587],{53870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 3.11.7",tags:["Release notes","Moodle 3.11"],sidebar_position:7,moodleVersion:"3.11.7"},d=void 0,m={unversionedId:"releases/3.11/3.11.7",id:"releases/3.11/3.11.7",title:"Moodle 3.11.7",description:"Release date: 9 May 2022",source:"@site/general/releases/3.11/3.11.7.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.7",permalink:"/devdocs/general/releases/3.11/3.11.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/devdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle 3.11.7",tags:["Release notes","Moodle 3.11"],sidebar_position:7,moodleVersion:"3.11.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.6",permalink:"/devdocs/general/releases/3.11/3.11.6"},next:{title:"Moodle 3.11.8",permalink:"/devdocs/general/releases/3.11/3.11.8"}},p={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 May 2022"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.11.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.11.7"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69552"},"MDL-69552")," - Tag filter not working when adding random question from questionbank"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48633"},"MDL-48633")," - Lesson grade handling is buggy when scales in use"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58044"},"MDL-58044")," - Course completion report labels do not align correctly in RTL mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74299"},"MDL-74299")," - Unable to delete Questions from Question bank"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73979"},"MDL-73979")," - Timeline block views should display consistent information"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74127"},"MDL-74127"),' - Attempts remaining for lesson are only displayed when "This page" is set to wrong answers'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74321"},"MDL-74321")," - Increased DB reads on forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74486"},"MDL-74486")," - Background images bleed into user tours"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57383"},"MDL-57383")," - Upload users admin tool incorrectly updates authentication method for existing users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74258"},"MDL-74258")," - H5P activities not searchable by global search"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73874"},"MDL-73874")," - Drag and drop into text & Select missing words questions: form should validate 'multiple' is on for choices used more than once"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69078"},"MDL-69078")," - The error when importing a GIFT question file with the wrong encoding does not make the problem clear"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74481"},"MDL-74481")," - LTI Advantage: Non-Editing Teacher has role Student"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74478"},"MDL-74478")," - Awarded badge for activity completion, despite not receiving a passing grade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74436"},"MDL-74436"),' - Fatal error when importing "course" events from ics file'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-74427"},"MDL-74427")," - Coding error detected when deleting question category")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=434578"},"MSA-22-0010")," Stored XSS in assignment bulk marker allocation form via user ID number"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=434579"},"MSA-22-0011")," Description field hidden by user policies (hiddenuserfields) is still visible"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=434580"},"MSA-22-0012")," Global search results reveal authors of content unexpectedly for some activities"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=434581"},"MSA-22-0013")," SQL injection risk in badge award criteria"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=434582"},"MSA-22-0014")," Failed login attempts counted incorrectly")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.11.7"},"Notes de mise \xe0 jour de Moodle 3.11.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.11.7"},"Notas de Moodle 3.11.7"))))}k.isMDXComponent=!0}}]);