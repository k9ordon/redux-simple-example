import { store } from './store';

import { item_selected } from './action';

for (var $item of document.querySelectorAll('.item')) {
    $item.addEventListener('click', (e) => {
        e.preventDefault();
        store.dispatch(item_selected(e.target.dataset.id));
    });
}

let update = function() {
    for (var item of store.getState().Items) {
        let $item = document.querySelector(`.item[data-id="${item.id}"]`);

        if(item.selected == true)
            $item.classList.add('item--selected');
        else
            $item.classList.remove('item--selected');
    }
};

update();
store.subscribe(update);
