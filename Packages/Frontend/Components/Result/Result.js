import {Component} from '../../Api/Components/Component/Component.js';
import {Pie} from '../Pie/Pie.js';


export class Result extends Component {
    static _components = [Pie];

    static _elements = {
        header: '',
        pie: '',
    }


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    get progress() {
        return this._elements.pie.progress;
    }
    set progress(progress) {
        this._elements.pie.progress = +progress;
    }

    get title() {
        return this._elements.header.textContent;
    }
    set title(title) {
        this._elements.header.textContent = title;
    }
}
