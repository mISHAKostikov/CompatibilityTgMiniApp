import {Component} from '../../Api/Components/Component/Component.js';
import {Pie} from '../Pie/Pie.js';


export class ResultPage extends Component {
    static css_url = true;
    static html_url = true;
    static url = import.meta.url;

    static {
        this.define();
    }
}
