import {Component} from '../../Api/Components/Component/Component.js';
import {Flickable} from '../../Api/Components/Flickable/Flickable.js';
import {Repeater} from '../../Api/Components/Repeater/Repeater.js';

import {Pie} from '../Pie/Pie.js';


export class ResultPage extends Component {
    static _components = [Flickable, Repeater, Pie];

    static _elements = {
        display: '',
        repeater: '',
    };

    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static Repeater_manager = class extends Repeater.Manager {
        data__apply() {
            this._item.progress = this._model_item.progress;
        }

        init() {
            this.data__apply();
        }
    };

    static {
        this.define();
    }


    _eventListeners__define() {
        this._elements.repeater.eventListeners__add({
            add: this._repeater__on_add.bind(this),
            define: this._repeater__on_add.bind(this),
        });
        window.addEventListener('resize', this._window__on_resize.bind(this));
    }

    _init() {
        this._elements.repeater.Manager = this.constructor.Repeater_manager;
        this.refresh();
        this._result__load()
    }

    _repeater__on_add(event) {
        this.refresh();
    }

    _window__on_resize() {
        this.refresh();
    }


    result__insert(result) {
        this._elements.repeater.model.add(result);
    }

    refresh() {
        this._elements.display.refresh();
    }
}
