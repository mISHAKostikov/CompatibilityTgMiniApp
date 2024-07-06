import {Button} from '../Button/Button.js';
import {Component} from '../../Api/Components/Component/Component.js';
import {Form} from '../Form/Form.js';
import {Leafable} from '../../Api/Components/Leafable/Leafable.js';
import {ResultPage} from '../ResultPage/ResultPage.js';


export class Root extends Component {
    static _elements = {
        button__start: '',
        form__page: '',
        leafable: '',
        result__page: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _eventListeners__define() {
        this._elements.button__start.addEventListener('pointerdown', this._button__start__on_pointerDown.bind(this));
    }

    async _button__start__on_pointerDown() {
        await this._elements.button__start._promise;
        this._elements.leafable.index++;
    }

}
