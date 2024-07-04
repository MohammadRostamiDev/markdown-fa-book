import { _ as __nuxt_component_0 } from "./nuxt-link-DyZc7qn_.js";
import { a as useSeoMeta } from "./index-DIUDACRG.js";
import { withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      author: "محمد داداش رستمی",
      title: "آموزش رایگان و آزاد Go Lang",
      ogTitle: "آموزش رایگان و آزاد Go Lang",
      description: "آموزش رایگان Go که به صورت آزادمنتشر شده به آموزش کامل زبان برنامه نویسی Go می پردازد این کتاب به صورت آزاد توسط محمد داداش رستمی منتشر شده و در دسترس همه می باشد",
      ogDescription: "آموزش رایگان Go که به صورت آزادمنتشر شده به آموزش کامل زبان برنامه نویسی Go می پردازد این کتاب به صورت آزاد توسط محمد داداش رستمی منتشر شده و در دسترس همه می باشد",
      ogImage: "https://bairesdev.mo.cloudinary.net/blog/2023/08/golang.jpg?tx=w_1920,q_auto",
      robots: "index, follow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container-fluid mt-5" id="hero"><div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center"><div class="col-lg-7 p-3 p-lg-5 pt-lg-3"><h1 class="display-6 fw-bold lh-1 app-bigtitle"> راهنمای جامع و رایگان <strong class="text-info">Markdown</strong></h1><p class="lead mt-5 text-justify"><strong class="fw-bold">مارک داون (Markdown)</strong> در سال 2004 با این ایده که بتواند خواندن و نوشتن یک متن تحت وب را برای همه آسان کند و قابل تبدیل به خانواده HTML هم باشد به وجود آمد. از Markdown به عنوان یک استاندارد متن نویسی یاد می‌شود و بزرگترین مزیت این استاندارد استفاده از حروف ساده و کوتاه برای اهداف نگارشی (از جمله پررنگ کردن متن و .... ) می‌باشد </p><blockquote class="fw-lighter q-block text-justify"><div>راهنمایی جامع و البته رایگان برای کسایی که دوس دارن Markdown یاد بگیرن :)</div> توی این کتاب که به زبان شیرین <span class="fw-bold text-info">پارسی</span> منتشر کردم سعی دارم که به صورت کامل و جامع به برسی و آموزش نحوه استفاده از سینتکس Markdown بپردازم در صورت مشاهده هرگونه مشکل میتونید اون رو با راه های ارتباطی در اختیارم قرار بدین تا اصلاح صورت بگیره </blockquote><div class="d-grid gap-3 d-md-flex justify-content-md-start mb-4 mb-lg-3" id="main-actions">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/book" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="btn app-btn-primery w-100 app-btn-bordered btn-lg px-4 me-md-2 fw-bold"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"${_scopeId}></path></svg> از اینجا شروع کنید </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn app-btn-primery w-100 app-btn-bordered btn-lg px-4 me-md-2 fw-bold"
              }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  class: "icon icon-tabler icons-tabler-filled icon-tabler-player-play"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("path", { d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" })
                ])),
                createTextVNode(" از اینجا شروع کنید ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "https://github.com/devnotec" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="btn btn-outline-secondary btn-lg px-4 w-100"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"${_scopeId}><path stroke="none" d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"${_scopeId}></path></svg> رفتن به Github </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn btn-outline-secondary btn-lg px-4 w-100"
              }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  class: "icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
                }, [
                  createVNode("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createVNode("path", { d: "M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" })
                ])),
                createTextVNode(" رفتن به Github ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-lg-3 offset-lg-1 p-0 overflow-hidden" id="hero-image"><svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-markdown-fill svg-primery"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5zM3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06V7.01z"></path></svg></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-UhxZV5Ew.js.map
