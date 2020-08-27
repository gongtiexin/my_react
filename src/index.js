import 'core-js/stable';
import 'regenerator-runtime/runtime';

import MyReact from './my_react';

const element = (
    <div id="item">
        <h1>
            item1
            <br />
            item2
        </h1>
    </div>
);

MyReact.render(element, document.getElementById('root'));
