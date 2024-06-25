import {Component} from '../../Api/Components/Component/Component.js';


export class Button extends Component {
    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static _attributes = {
        ...super._attributes,

        _animation: false,
    }

    static {
        this.define();
    }

    get _animation() {
        return this._attributes._animation;
    }
    set _animation(animation) {
        this._attribute__set('_animation', animation);
    }


    _eventListeners__define() {
        this.eventListeners__add({
            pointerdown: this._on_pointerDown,
            transitionend: this._on_transitionEnd,
        });
    }

    _on_pointerDown() {
        this._animation = true;
    }

    _on_transitionEnd() {
        this._animation = false;
    }
}
