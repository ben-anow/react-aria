import PropType from 'prop-types';
import React from 'react';
import { mergeProps, useDraggableItem, useDroppableItem, useFocusRing, useOption } from 'react-aria';
import DropIndicator from './DropIndicator';

function ReorderableOption({ item, state, dragState, dropState }) {
    // Setup listbox option as normal. See useListBox docs for details.
    const isCustom = item && item.value?.comp;
    console.log({item});
    const customStyle = {
        listStyleType: isCustom ? 'none' : 'inherit',
    }
    let ref = React.useRef();
    let { optionProps, } = useOption(
        { key: item.key },
        state,
        ref
    );
    let { isFocusVisible, focusProps } = useFocusRing();

    // Register the item as a drop target.
    let { dropProps, isDropTarget } = useDroppableItem(
        {
            target: { type: 'item', key: item.key, dropPosition: 'on' }
        },
        dropState,
        ref
    );

// Register the item as a drag source.
    let { dragProps } = useDraggableItem({
        key: item.key
    }, dragState);

    return (
        <>
            <DropIndicator
                style={customStyle}
                target={{ type: 'item', key: item.key, dropPosition: 'before' }}
                dropState={dropState}
            />
            <li
                style={customStyle}
                {...mergeProps(optionProps, dragProps, dropProps, focusProps)}
                ref={ref}
                className={`option ${isFocusVisible ? 'focus-visible' : ''} ${
                    isDropTarget ? 'drop-target' : ''
                }`}
            >
                {item.rendered}
            </li>
            {
                state.collection.getKeyAfter(item.key) == null &&
                (
                    <DropIndicator
                        style={customStyle}
                        target={{ type: 'item', key: item.key, dropPosition: 'after' }}
                        dropState={dropState}
                    />
                )
            }
        </>
    )
}

ReorderableOption.propTypes = {
    props: PropType.object,
}
ReorderableOption.defaultProps = {
    props: {},
}

export default ReorderableOption;