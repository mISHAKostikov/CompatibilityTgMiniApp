import {Component} from '../../Api/Components/Component/Component.js';


export class Button extends Component {
    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }
}
