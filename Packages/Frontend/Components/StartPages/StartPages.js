import {Component} from '../../Api/Components/Component/Component.js';


export class StartPages extends Component {
    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }
}
