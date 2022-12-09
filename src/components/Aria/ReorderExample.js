import { useListData } from 'react-stately';
import ReorderableListBox from './Reordering/ReorderableListBox';
import { Item } from 'react-stately';
import PropType from 'prop-types';
import { showSuccessToast } from '../Toaster/toaster';

function ReorderExample({ items }) {
    const isCustom = items.length > 0 && items[0].comp;
    let list = useListData({
        initialItems: items
    });

    const getName = (id) => list.items.find((l) => l.id === id)?.name;

    let onReorder = (e) => {
        if (e.target.dropPosition === 'before') {
            list.moveBefore(e.target.key, e.keys);
            console.log({target: e.target.key, source: [...e.keys][0], list});
            showSuccessToast(`Moved ${getName([...e.keys][0])} to ${e.target.dropPosition} ${getName(e.target.key)}`);
        } else if (e.target.dropPosition === 'after') {
            list.moveAfter(e.target.key, e.keys);
            showSuccessToast(`Moved ${getName([...e.keys][0])} to ${e.target.dropPosition} ${getName(e.target.key)}`);
        }
    };

    return (
        <>
            <h5 style={{ paddingTop: '0px', marginTop: '0px', color: 'black' }}>
                {isCustom? 'Custom component Re-order Example' : 'Re-order Example'}
            </h5>
            <ReorderableListBox
                aria-label="Favorite animals"
                selectionMode="multiple"
                selectionBehavior="replace"
                items={list.items}
                onReorder={onReorder}
            >
                {(item) => <Item textValue={item.name}>{item.comp ? item.comp : item.name}</Item>}
            </ReorderableListBox>
        </>
    );
}

ReorderExample.propTypes = {
    items: PropType.arrayOf(PropType.object),
};
ReorderExample.defaultProps = {
    items: [],
};
export default ReorderExample;