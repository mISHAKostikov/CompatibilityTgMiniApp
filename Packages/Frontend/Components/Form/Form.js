import {Component} from '../../Api/Components/Component/Component.js';
import {Edit} from '../Edit/Edit.js';


export class Form extends Component {
    static _elements = {
        input: '',
    };

    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }
}
