import {Component} from '../../Api/Components/Component/Component.js';
import {Form} from '../Form/Form.js';
import {Leafable} from '../../Api/Components/Leafable/Leafable.js';
import {ResultPage} from '../ResultPage/ResultPage.js';


export class Root extends Component {
    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }
}
