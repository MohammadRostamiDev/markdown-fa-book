const __vite__fileDeps=["./pKkjE2la.js","./D_mijP87.js","./CHNqNXQb.js","./CodeBlock.CSENyriD.css","./CodeExample.Cj8j_E6k.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{h as m,g as h,o as g,f,w as t,a as e,b as o,d as n,i as w,j as k}from"./CHNqNXQb.js";import{_ as c,a as M}from"./DJ-OPZdH.js";import{_ as d}from"./D_mijP87.js";import x from"./pKkjE2la.js";import{u as y}from"./eObJC1iS.js";import"./DLGN_vH8.js";const v=m("/assets/img/my image.jpg"),L=w(()=>k(()=>import("./pKkjE2la.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(_=>_.default||_)),b={class:"paragraph-container"},A=e("strong",null,"متن لینک:",-1),C=e("strong",null,"آدرس لینک:",-1),P=e("a",{href:"https://www.google.com"},"وبسایت گوگل",-1),j={class:"paragraph-container"},B=e("h3",null,"لینک‌های داخلی",-1),R=e("h4",null,"1. ایجاد شناسه (Anchor)",-1),V=e("strong",null," بخش-مورد-نظر",-1),D=e("h4",null,"2. ایجاد لینک داخلی",-1),I=e("a",{href:"#بخش-مورد-نظر"},"بخش مورد نظر",-1),N={class:"paragraph-container"},S=e("h3",null,"استفاده از تصاویر در Markdown",-1),T=e("strong",null," متن جایگزین (alt text):",-1),U=e("strong",null,"آدرس تصویر:",-1),z=e("img",{src:"https://picsum.photos/200/300",alt:"sample-image"},null,-1),E={class:"paragraph-container"},H=e("h3",null,"تصاویر با مسیر مطلق",-1),q=e("img",{src:v,alt:"my image"},null,-1),O="[متن لینک](آدرس لینک)",$="[وبسایت گوگل](https://www.google.com)",F="## بخش مورد نظر",oo=h({__name:"LinkAndPhotos",setup(_){return y({author:"محمد داداش رستمی",title:"راهنمای جامع Markdown - کار با لینک ها و تصاویر",ogTitle:"راهنمای جامع Markdown - کار با لینک ها و تصاویر",description:"در این راهنما با نحوه کار با لینک‌ها و تصاویر در Markdown آشنا شوید. لینک‌ها و تصاویر ابزارهای مهمی برای بهبود محتوای شما هستند و با استفاده از Markdown، می‌توانید به راحتی آن‌ها را در متن خود اضافه کنید و محتوایتان را بهبود دهید.",ogDescription:"در این راهنما با نحوه کار با لینک‌ها و تصاویر در Markdown آشنا شوید. لینک‌ها و تصاویر ابزارهای مهمی برای بهبود محتوای شما هستند و با استفاده از Markdown، می‌توانید به راحتی آن‌ها را در متن خود اضافه کنید و محتوایتان را بهبود دهید.",ogImage:"https://bairesdev.mo.cloudinary.net/blog/2023/08/golang.jpg?tx=w_1920,q_auto",robots:"index, follow",colorScheme:"dark light",charset:"utf-8",keywords:"Markdown, راهنمای Markdown, آموزش Markdown, لینک‌ها در Markdown, تصاویر در Markdown, کار با لینک‌ها و تصاویر, زبان نشانه‌گذاری"}),(G,J)=>{const r=c,i=d,a=c,s=x,l=d,u=L,p=M;return g(),f(p,{"page-title":"کار با لینک ها و تصاویر در Markdown"},{default:t(()=>[e("div",b,[o(r,null,{default:t(()=>[n(" لینک‌های خارجی برای ارجاع به منابع یا صفحات وب خارج از سند فعلی استفاده می‌شوند. برای ایجاد یک لینک خارجی، از ساختار زیر استفاده کنید: ")]),_:1}),o(i,{code:O}),o(a,null,{default:t(()=>[A,n(" متنی که داخل براکت‌ها [ ] قرار می‌گیرد، متنی است که به عنوان لینک نمایش داده می‌شود. ")]),_:1}),o(a,null,{default:t(()=>[C,n(" URL یا آدرس وب‌سایتی که می‌خواهید به آن ارجاع دهید، داخل پرانتز ( ) قرار می‌گیرد. ")]),_:1}),o(a,null,{default:t(()=>[n("مثلا اگر بخواهیم یک لینک به سایت گوگل داشته باشیم به صورت زیر عمل میکنیم")]),_:1}),o(s,{code:$},{default:t(()=>[P,n(" ّ ")]),_:1})]),e("div",j,[B,o(a,null,{default:t(()=>[n(" لینک‌های داخلی برای ارجاع به بخش‌های مختلف در همان سند استفاده می‌شوند. برای این کار، ابتدا باید به بخش مورد نظر یک شناسه (anchor) اختصاص دهید و سپس از آن شناسه برای ایجاد لینک داخلی استفاده کنید. ")]),_:1}),R,o(a,null,{default:t(()=>[n(" شناسه‌ها معمولاً با استفاده از عناوین (Headers) ایجاد می‌شوند. به عنوان مثال، فرض کنید یک عنوان به صورت زیر دارید: ")]),_:1}),o(l,{code:F}),o(a,null,{default:t(()=>[n(" Markdown به طور خودکار برای این عنوان یک شناسه ایجاد می‌کند که معمولاً با خط تیره (dash) بین کلمات نمایش داده می‌شود. در این مثال، شناسه "),V,n(" خواهد بود. ")]),_:1}),D,o(a,null,{default:t(()=>[n("برای ایجاد یک لینک داخلی به این بخش، از ساختار زیر استفاده کنید:")]),_:1}),o(l,{code:"[متن لینک](#شناسه)"}),o(a,null,{default:t(()=>[n("برای مثال :")]),_:1}),o(s,{code:"[بخش مورد نظر](#بخش-مورد-نظر)"},{default:t(()=>[I]),_:1})]),e("div",N,[S,o(a,null,{default:t(()=>[n(" افزودن تصاویر به مستندات Markdown، زیبایی و خوانایی آنها را افزایش می‌دهد و اطلاعات بصری مفیدی ارائه می‌دهد. برای درج تصاویر در Markdown، از ساختار ساده‌ای استفاده می‌شود. ")]),_:1}),o(l,{code:"![متن جایگزین](آدرس تصویر)"}),o(a,null,{default:t(()=>[T,n(" متنی که در صورت عدم بارگذاری تصویر نمایش داده می‌شود. این متن برای دسترسی‌پذیری و بهینه‌سازی موتورهای جستجو نیز مفید است. "),U,n(" URL یا مسیر محلی فایل تصویری که می‌خواهید نمایش داده شود. ")]),_:1}),o(a,null,{default:t(()=>[n(" برای مثال میتونیم یک عکس از Lorem Picsum رو اینجوری نشون بدیم ")]),_:1}),o(u,{code:"![نمونه تصویر](https://picsum.photos/200/300)"},{default:t(()=>[z]),_:1}),o(a,null,{default:t(()=>[n(" تفاوتی که مابین لینک معمولی و تصویر وجود داره این هست که برای نمایش عکس باید از ! در ابتدای لینکمون استفاده کنیم تا برامون نمایش داده بشه ")]),_:1})]),e("div",E,[H,o(a,null,{default:t(()=>[n("برای تنظیم مسیر مطلق میتون از این الگو استفاده کرد")]),_:1}),o(s,{code:"![my image](/assets/img/my image.jpg)"},{default:t(()=>[q]),_:1}),o(a,null,{default:t(()=>[n("مسیر مطلق مسیری هست که تصاویر در کنار فایل مارک داون قرار دارند و توسط یک مسیر نسبی به تصویر دسترسی پیدا میکنیم و میتونیم اون رو نشون بدیم")]),_:1})])]),_:1})}}});export{oo as default};