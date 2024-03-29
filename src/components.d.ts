/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PuButton {
        "color": 'default' | 'purple' | 'red';
        "disabled": boolean;
        "href": string | null;
        "icon": boolean;
        "text": string;
    }
    interface PuTachieBox {
        "color": 'attacker' | 'all-rounder' | 'defender' | 'speedster' | 'supporter';
        "disabled": boolean;
        "pokemon": string;
        "team": 'orange' | 'purple';
        "trainer": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPuButtonElement extends Components.PuButton, HTMLStencilElement {
    }
    var HTMLPuButtonElement: {
        prototype: HTMLPuButtonElement;
        new (): HTMLPuButtonElement;
    };
    interface HTMLPuTachieBoxElement extends Components.PuTachieBox, HTMLStencilElement {
    }
    var HTMLPuTachieBoxElement: {
        prototype: HTMLPuTachieBoxElement;
        new (): HTMLPuTachieBoxElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pu-button": HTMLPuButtonElement;
        "pu-tachie-box": HTMLPuTachieBoxElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PuButton {
        "color"?: 'default' | 'purple' | 'red';
        "disabled"?: boolean;
        "href"?: string | null;
        "icon"?: boolean;
        "text"?: string;
    }
    interface PuTachieBox {
        "color"?: 'attacker' | 'all-rounder' | 'defender' | 'speedster' | 'supporter';
        "disabled"?: boolean;
        "pokemon"?: string;
        "team"?: 'orange' | 'purple';
        "trainer"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pu-button": PuButton;
        "pu-tachie-box": PuTachieBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pu-button": LocalJSX.PuButton & JSXBase.HTMLAttributes<HTMLPuButtonElement>;
            "pu-tachie-box": LocalJSX.PuTachieBox & JSXBase.HTMLAttributes<HTMLPuTachieBoxElement>;
        }
    }
}
