import {Component} from '../../Api/Components/Component/Component.js';


export class Pie extends Component {
    static _attributes = {
        ...super._attributes,

        progress: {
            default: 0,
            range: [0, 100],
        },
        velocity: {
            default: 15,
            range: [0, Infinity],
        },
    }

    static _elements = {
        pie_value_tens: '',
        pie_value_units: '',
        root: '',
    }


    static css_url = true;
    static html_url = true;
    static url = import.meta.url;


    static {
        this.define();
    }


    _pie__counter_animate = 0;
    _pie_value_tens = 0;
    _pie_value_tens__gain = 0;
    _pie_value_tens__velocity = 0;
    _pie_value_units = 0;
    _pie_value_units__gain = 0;
    _pie_value_units__velocity = 0;


    get _pie_value_tens_current() {
        return +this._elements.pie_value_tens.textContent || 0;
    }
    set _pie_value_tens_current(value) {
        this._elements.pie_value_tens.textContent = +value;
    }

    get _pie_value_units_current() {
        return +this._elements.pie_value_units.textContent;
    }
    set _pie_value_units_current(value) {
        this._elements.pie_value_units.textContent = +value;
    }


    get progress() {
        return this._attributes.progress;
    }
    set progress(progress) {
        this._attribute__set('progress', progress);
        this._render();
    }

    get velocity() {
        return this._attributes.velocity;
    }
    set velocity(velocity) {
        this._attribute__set('velocity', +velocity);
    }


    _init() {
        this.props__sync('progress');
    }

    _pie__animation() {
        this._elements.root.style.setProperty('--progress', this._pie__counter_animate);
        this._pie__counter_animate++;

        if (this._pie__counter_animate <= this.progress) {
            setTimeout(this._pie__animation.bind(this), this.velocity);
        }
    }

    _pie_value_tens__animation() {
        if (this._pie_value_tens__gain < 0) {
            this._pie_value_tens_current++;

            if (this._pie_value_tens_current < this._pie_value_tens) {
                setTimeout(this._pie_value_tens__animation.bind(this), this._pie_value_tens__velocity);
            }
        }
        else {
            this._pie_value_tens_current--;

            if (this._pie_value_tens_current > this._pie_value_tens) {
                setTimeout(this._pie_value_tens__animation.bind(this), this._pie_value_tens__velocity);
            }
        }
    }

    _pie_value_units__animation() {
        if (this._pie_value_units__gain < 0) {
            this._pie_value_units_current++;

            if (this._pie_value_units_current < this._pie_value_units) {
                setTimeout(this._pie_value_units__animation.bind(this), this._pie_value_units__velocity);
            }
        }
        else {
            this._pie_value_units_current--;

            if (this._pie_value_units_current > this._pie_value_units) {
                setTimeout(this._pie_value_units__animation.bind(this), this._pie_value_units__velocity);
            }
        }
    }

    _render() {
        this._pie__counter_animate = 0;
        this._pie_value_tens = Math.floor(this.progress / 10);
        this._pie_value_units = this.progress % 10;

        if (this._pie_value_tens_current - this._pie_value_tens) {
            this._pie_value_tens__gain = this._pie_value_tens_current - this._pie_value_tens;
            this._pie_value_tens__velocity = Math.round(Math.abs(this.velocity * this.progress / this._pie_value_tens__gain));

            this._pie_value_tens__animation();
        }

        if (this._pie_value_units_current - this._pie_value_units) {
            this._pie_value_units__gain = this._pie_value_units_current - this._pie_value_units;
            this._pie_value_units__velocity = Math.round(Math.abs(this.velocity * this.progress / this._pie_value_units__gain));

            this._pie_value_units__animation();
        }

        this._pie__animation();
    }
}
