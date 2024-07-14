import {Component} from '../../Api/Components/Component/Component.js';
import {Leafable} from '../../Api/Components/Leafable/Leafable.js';
import {Rest} from '../../Api/Units/Rest/Rest.js';

import {ButtonStart} from '../ButtonStart/ButtonStart.js';
import {FormPage} from '../FormPage/FormPage.js';
import {ResultPage} from '../ResultPage/ResultPage.js';


export class Root extends Component {
    static _components = [ResultPage];

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


    _form_data = [];
    _rest = new Rest(`https://mmnds.store`);
    _telegram = null;


    _eventListeners__define() {
        this._elements.buttonStart.addEventListener('pointerdown', this._buttonStart__on_pointerDown.bind(this));
        this._elements.formPage.addEventListener('calculate', this._formPage__on_calculate.bind(this));
        this._elements.resultPage._elements.button__back.addEventListener('pointerdown', this._button__back__on_pointerDown.bind(this));
    }

    _button__back__on_pointerDown() {
       this._elements.leafable.index--;
    }

    async _buttonStart__on_pointerDown() {
        await this._elements.buttonStart._promise;
        this._elements.leafable.index++;
    }

    _formPage__on_calculate(event) {
        this._form_data = event.detail;
        this._result__define();
    }

    async _result__define() {
        let result = await this._result__receive();

        if (!result.length) return;

        this._elements.leafable.index++;
        this._elements.resultPage.result__insert(result);
    }

    async _result__receive() {
        let result = await this._rest.call('compatibility__calc', ...this._form_data);

        return result;
    }

    _init() {
        this._telegram = window.Telegram.WebApp;

        // console.log(this._telegram.platform)
    }
}
