import { useDroppableCollectionState, useListState } from 'react-stately';

import {
    ListDropTargetDelegate,
    ListKeyboardDelegate,
    mergeProps,
    useDroppableCollection,
    useListBox,
} from 'react-aria';
import React from 'react';
import PropType from 'prop-types';
import Option from './Option';

function ListBox(props) {
    // Setup listbox as normal. See the useListBox docs for more details.
    let state = useListState(props);
    let ref = React.useRef();
    let { listBoxProps } = useListBox(props, state, ref);

    // Setup react-stately and react-aria hooks for drag and drop.
    let dropState = useDroppableCollectionState({
        ...props,
        // Collection and selection manager come from list state.
        collection: state.collection,
        selectionManager: state.selectionManager
    });

    let { collectionProps } = useDroppableCollection(
        {
            ...props,
            // Provide drop targets for keyboard and pointer-based drag and drop.
            keyboardDelegate: new ListKeyboardDelegate(
                state.collection,
                state.disabledKeys,
                ref
            ),
            dropTargetDelegate: new ListDropTargetDelegate(state.collection, ref)
        },
        dropState,
        ref
    );

    // Merge listbox props and dnd props, and render the items as normal.
    return (
        <ul {...mergeProps(listBoxProps, collectionProps)} ref={ref}>
            {[...state.collection].map((item) => (
                <Option
                    key={item.key}
                    item={item}
                    state={state}
                    dropState={dropState}
                />
            ))}
        </ul>
    );
}

ListBox.propTypes = {
    props: PropType.object,
}
ListBox.defaultProps = {
    props: {},
}

export default ListBox;