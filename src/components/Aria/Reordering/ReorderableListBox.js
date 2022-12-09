import {
    ListDropTargetDelegate,
    ListKeyboardDelegate, mergeProps,
    useDraggableCollection,
    useDroppableCollection, useListBox
} from 'react-aria';
import { useDraggableCollectionState, useDroppableCollectionState, useListState } from 'react-stately';
import PropType from 'prop-types';
import React from 'react';
import ReorderableOption from './ReorderableOption';

function ReorderableListBox(props) {
    // See useListBox docs for more details.
    let state = useListState(props);
    let ref = React.useRef();
    let { listBoxProps } = useListBox(
        {
            ...props,
            shouldSelectOnPressUp: true
        },
        state,
        ref
    );

    let dropState = useDroppableCollectionState({
        ...props,
        collection: state.collection,
        selectionManager: state.selectionManager
    });

    let { collectionProps } = useDroppableCollection(
        {
            ...props,
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

    // Setup drag state for the collection.
    let dragState = useDraggableCollectionState({
        ...props,
        // Collection and selection manager come from list state.
        collection: state.collection,
        selectionManager: state.selectionManager,
        // Provide data for each dragged item. This function could
        // also be provided by the user of the component.
        getItems: props.getItems || ((keys) => {
            return [...keys].map((key) => {
                let item = state.collection.getItem(key);

                return {
                    'text/plain': item.textValue
                };
            });
        })
    });

    useDraggableCollection(props, dragState, ref);

    return (
        <ul
            style={{paddingInlineStart: '0px'}}
            {...mergeProps(listBoxProps, collectionProps)}
            ref={ref}
        >
            {[...state.collection].map((item) => (
                <ReorderableOption
                    key={item.key}
                    item={item}
                    state={state}
                    dragState={dragState}
                    dropState={dropState}
                />
            ))}
        </ul>
    );
}

ReorderableListBox.propTypes = {
    props: PropType.object,
}
ReorderableListBox.defaultProps = {
    props: {},
}
export default ReorderableListBox;