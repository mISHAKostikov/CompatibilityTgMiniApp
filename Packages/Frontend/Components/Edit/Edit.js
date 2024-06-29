import {Component} from '../../Api/Components/Component/Component.js';


export class Edit extends Component {
    static _elements = {
        input: '',
    };

    static _attributes = {
        ...super._attributes,

        placeholder: '',
    }


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    get placeholder() {
        return this._attributes.placeholder;
    }
    set placeholder(placeholder) {
        this._attribute__set('placeholder', placeholder);
        this._elements.input.placeholder = this.placeholder;
    }


    _eventListeners__define() {
        this._elements.input.addEventListener('beforeinput', this._input__on_beforeInput.bind(this), false);
    }

    _init() {
        this.props__sync('placeholder');
    }

    _input__on_beforeInput(event) {
        if (this._elements.input.value || event.data == '@') return;

        event.preventDefault();
    }
}
