import type { VNode, VueConstructor, DirectiveBinding } from "vue";

type TPluginOptions = {
  useDefaultBehavior: false;
};

type TDirectiveModifiers = {
  enter: boolean,
  impossible: boolean
}

type TDirectiveOptions = {
  tabIndex: number,
  order: number,
  modifiers: TDirectiveModifiers,
  target: Element,
  targetSelector: string,
  onFocusing: (event?: any) => any,
  onFocused: (event?: any) => any,
};

function* traverseHtmlEntity(node: Element) {
  function* traversal(node: Element): Generator<Element> {
    yield node;
    if (node.children.length) {
      for (const child of node.children) {
        yield* traversal(child);
      }
    }
  }
  for (const element of traversal(node)) {
    yield element;
  }
}

const focusDirective = {
  bind: function(element: Element, binding: DirectiveBinding<TDirectiveOptions>, vnode: VNode, oldVnode: VNode): void {},
  inserted: function(element: Element, binding: DirectiveBinding<TDirectiveOptions>, vnode: VNode, oldVnode: VNode): void {},
  update: function(element: Element, binding: DirectiveBinding<TDirectiveOptions>, vnode: VNode, oldVnode: VNode): void {},
  componentUpdated: function(element: Element, binding: DirectiveBinding<TDirectiveOptions>, vnode: VNode, oldVnode: VNode): void {},
  unbind: function(element: Element, binding: DirectiveBinding<TDirectiveOptions>, vnode: VNode, oldVnode: VNode): void {}
};

export default {
  install: function(Vue: VueConstructor, options: TPluginOptions) {
    Vue.directive("focus", focusDirective);
  }
}