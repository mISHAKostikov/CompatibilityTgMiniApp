import {Component} from '../../Api/Components/Component/Component.js';


export class ButtonCalculate extends Component {
    static _attributes = {
        ...super._attributes,

        animation: false,
    }

    static _elements = {
        image: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _promise = null;
    _promise_resolve = null;


    get animation() {
        return this._attributes._animation;
    }
    set animation(animation) {
        this._attribute__set('_animation', animation);
    }


    _eventListeners__define() {
        this.eventListeners__add({
            // pointerdown: this._on_pointerDown,
            animationend: this._on_animationEnd,
        });

        this._elements.image.addEventListener('animationend', this._circle__on_animationEnd.bind(this));
    }

    _init() {
        this._promise = new Promise((resolve) => this._promise_resolve = resolve);
    }

    // _on_pointerDown(event) {
    //     this._animation = true;

    //     //console.log(event)
    // }

    _circle__on_animationEnd(event) {
    // _on_animationEnd(event) {
        // this._animation = false;

        //console.log(event)

        this._promise_resolve();
    }
}
