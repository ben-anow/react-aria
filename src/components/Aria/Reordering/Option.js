import PropType from 'prop-types';
import React from 'react';
import { mergeProps, useDroppableItem, useFocusRing, useOption } from 'react-aria';

function Option({ item, state, dropState }) {
    // Setup listbox option as normal. See useListBox docs for details.
    let ref = React.useRef();
    let { optionProps } = useOption(
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

    // Merge option props and dnd props, and render the item.
    return (
        <li
            {...mergeProps(optionProps, dropProps, focusProps)}
            ref={ref}
            // Apply a class when the item is the active drop target.
            className={`option ${isFocusVisible ? 'focus-visible' : ''} ${
                isDropTarget ? 'drop-target' : ''
            }`}
        >
            {item.rendered}
        </li>
    );
}

Option.propTypes = {
    props: PropType.object,
}
Option.defaultProps = {
    props: {},
}

export default Option;