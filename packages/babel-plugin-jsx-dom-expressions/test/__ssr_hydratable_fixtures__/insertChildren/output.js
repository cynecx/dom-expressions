import { mergeProps as _$mergeProps } from "r-server";
import { ssrSpread as _$ssrSpread } from "r-server";
import { escape as _$escape } from "r-server";
import { createComponent as _$createComponent } from "r-server";
import { ssr as _$ssr } from "r-server";
import { getHydrationKey as _$getHydrationKey } from "r-server";
const _tmpl$ = ['<div data-hk="', '"></div>'],
  _tmpl$2 = ['<module data-hk="', '">', "</module>"],
  _tmpl$3 = ['<module data-hk="', '">Hello</module>'],
  _tmpl$4 = ['<module data-hk="', '" ', "></module>"],
  _tmpl$5 = ['<module data-hk="', '" ', ">Hello</module>"],
  _tmpl$6 = ['<module data-hk="', '" ', ">", "</module>"],
  _tmpl$7 = ['<module data-hk="', '">Hi <!--#-->', "<!--/--></module>"];

const children = _$ssr(_tmpl$, _$getHydrationKey());

const dynamic = {
  children
};

const template = _$createComponent(Module, {
  children: children
});

const template2 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(children));

const template3 = _$ssr(_tmpl$3, _$getHydrationKey());

const template4 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(_$createComponent(Hello, {})));

const template5 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(dynamic.children));

const template6 = _$createComponent(Module, {
  get children() {
    return dynamic.children;
  }
});

const template7 = _$ssr(_tmpl$4, _$getHydrationKey(), _$ssrSpread(dynamic, false, false));

const template8 = _$ssr(_tmpl$5, _$getHydrationKey(), _$ssrSpread(dynamic, false, true));

const template9 = _$ssr(
  _tmpl$6,
  _$getHydrationKey(),
  _$ssrSpread(dynamic, false, true),
  _$escape(dynamic.children)
);

const template10 = _$createComponent(
  Module,
  _$mergeProps(dynamic, {
    children: "Hello"
  })
);

const template11 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(state.children));

const template12 = _$createComponent(Module, {
  children: state.children
});

const template13 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(children));

const template14 = _$createComponent(Module, {
  children: children
});

const template15 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(dynamic.children));

const template16 = _$createComponent(Module, {
  get children() {
    return dynamic.children;
  }
});

const template18 = _$ssr(_tmpl$7, _$getHydrationKey(), _$escape(children));

const template19 = _$createComponent(Module, {
  get children() {
    return ["Hi ", children];
  }
});

const template20 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(children()));

const template21 = _$createComponent(Module, {
  get children() {
    return children();
  }
});

const template22 = _$ssr(_tmpl$2, _$getHydrationKey(), _$escape(state.children()));

const template23 = _$createComponent(Module, {
  get children() {
    return state.children();
  }
});
