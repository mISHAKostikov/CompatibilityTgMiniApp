import {Component} from '../../Api/Components/Component/Component.js';
import {Edit} from '../Edit/Edit.js';
import {ButtonCalculate} from '../ButtonCalculate/ButtonCalculate.js';


export class FormPage extends Component {
    static _elements = {
        name_1: '',
        name_2: '',
        buttonCalculate: '',
    };

    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }

    async _buttonCalculate__on_pointerDown() {
        let name_1 = this._elements.name_1.value;
        let name_2 = this._elements.name_2.value;

        if (!name_1 || !name_2) return;

        this._elements.buttonCalculate.animation = true;;
        await this._elements.buttonCalculate._promise;

        let detail = {
            name_1: name_1,
            name_2: name_2,
        }

        this.event__dispatch('calculate', detail);
    }

    _eventListeners__define() {
        this._elements.buttonCalculate.addEventListener('pointerdown', this._buttonCalculate__on_pointerDown.bind(this));
    }
}
