import Draggable from '../Reordering/Draggable';
import ListBox from '../Reordering/ListBox';
import { Item } from 'react-stately';
import { showSuccessToast } from '../../Toaster/toaster';

const DroppedOnExample = () => {
    return (
        <>
            <h5 style={{ paddingTop: '0px', marginTop: '0px', color: 'black'}}> Dropped On Example</h5>
            <Draggable>Octopus</Draggable>
            <Draggable>Cactus</Draggable>
            <ListBox
                aria-label="Categories"
                selectionMode="single"
                onItemDrop={async (e) => showSuccessToast(` ${await e.items[0].getText('value')} Dropped on ${e.target.key}`)}
            >
                <Item key="animals">Animals</Item>
                <Item key="people">People</Item>
                <Item key="plants">Plants</Item>
            </ListBox>
        </>
    )
};

DroppedOnExample.propTypes = {};

export default  DroppedOnExample;