import {Component} from '../../Api/Components/Component/Component.js';


export class ButtonStart extends Component {
    static _attributes = {
        ...super._attributes,

        _animation: false,
    }

    static _elements = {
        circle: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _promise = null;
    _promise_resolve = null;
    _telegram = null;


    get _animation() {
        return this._attributes._animation;
    }
    set _animation(animation) {
        this._attribute__set('_animation', animation);
        if (animation) this._telegram.HapticFeedback.impactOccurred('medium');
    }


    _eventListeners__define() {
        this.eventListeners__add({
            pointerdown: this._on_pointerDown,
            animationend: this._on_animationEnd,
        });

        this._elements.circle.addEventListener('animationend', this._circle__on_animationEnd.bind(this));
    }

    _init() {
        this._telegram = window.Telegram.WebApp;
        this._promise = new Promise((resolve) => this._promise_resolve = resolve);
    }

    _on_pointerDown(event) {
        this._animation = true;

        //console.log(event)
    }

    _circle__on_animationEnd(event) {
    // _on_animationEnd(event) {
        // this._animation = false;

        //console.log(event)

        this._promise_resolve();
    }
}
