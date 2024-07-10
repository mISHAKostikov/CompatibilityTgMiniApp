import {Component} from '../../Api/Components/Component/Component.js';
import {Leafable} from '../../Api/Components/Leafable/Leafable.js';
import {Rest} from '../../Api/Units/Rest/Rest.js';

import {ButtonStart} from '../ButtonStart/ButtonStart.js';
import {FormPage} from '../FormPage/FormPage.js';
import {ResultPage} from '../ResultPage/ResultPage.js';


export class Root extends Component {
    static _elements = {
        buttonStart: '',
        formPage: '',
        leafable: '',
        resultPage: '',
    };


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _rest = new Rest(`http://127.0.0.1:2000`);


    _eventListeners__define() {
        this._elements.buttonStart.addEventListener('pointerdown', this._buttonStart__on_pointerDown.bind(this));
        this._elements.formPage.addEventListener('calculate', this._formPage__on_calculate.bind(this));
    }

    _formPage__on_calculate(event) {
        this._result__define(event.detail);
    }

    async _buttonStart__on_pointerDown() {
        await this._elements.buttonStart._promise;
        this._elements.leafable.index++;
    }

    async _result__define(data) {
        let result = await this._result__receive(data);

        if (!result.length) return;

        this._elements.leafable.index++;
        this._elements.result__page.result__insert(result);
        // this._elements.result__page.refresh();
    }

    async _result__receive(data) {
        let result = await this._rest.call('compatibility__calc', data.name_1, data.name_2);

        return result;
    }
}
