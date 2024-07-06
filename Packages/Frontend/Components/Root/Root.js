import {Component} from '../../Api/Components/Component/Component.js';
import {Leafable} from '../../Api/Components/Leafable/Leafable.js';
import {Rest} from '../../Api/Units/Rest/Rest.js';

import {Button} from '../Button/Button.js';
import {Form} from '../Form/Form.js';
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


    _rest = new Rest(`server_url`);


    _eventListeners__define() {
        this._elements.button__start.addEventListener('pointerdown', this._button__start__on_pointerDown.bind(this));
        this._elements.form__page._elements.buttonCalculate.addEventListener('pointerdown', this._button_calculate__on_pointerDown.bind(this));
    }

    async _button_calculate__on_pointerDown() {
        await this._elements.form__page._elements.buttonCalculate._promise;
        this._result__define();
    }

    async _button__start__on_pointerDown() {
        await this._elements.button__start._promise;
        this._elements.leafable.index++;
    }

    async _result__define() {
        // let result = await this._result__receive();

        // if (!result.length) return;

        this._elements.leafable.index++;
        // this._elements.result__page.result__insert(data);
        this._elements.result__page.refresh();
    }

    async _result__receive() {
        let data = await this._rest.call('compatibility__calc', `name_1`, `name_2`); // должен вернуть массив объектов

        return data;
    }
}
