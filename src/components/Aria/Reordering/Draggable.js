import {mergeProps, useButton, useDrag} from 'react-aria';
import PropType from 'prop-types';
import React from 'react';

function Draggable({ children }) {
    let { dragProps, dragButtonProps, isDragging } = useDrag({
        getAllowedDropOperations: () => ['copy'],
        getItems() {
            return [{
                'text/plain': children,
                'my-app-custom-type': JSON.stringify({ message: children }),
                'value': children,
            }];
        },
        getText() { return children}
    });

    let ref = React.useRef();
    let { buttonProps } = useButton(
        { ...dragButtonProps, elementType: 'div' },
        ref
    );

    return (
        <div
            {...mergeProps(dragProps, buttonProps)}
            ref={ref}
            className={`draggable ${
                isDragging
                    ? 'dragging'
                    : ''
            }`}
        >
            <span aria-hidden="true">≡</span> {children}
        </div>
    );
}

Draggable.propTypes = {
    props: PropType.object,
}
Draggable.defaultProps = {
    props: {},
}
export default Draggable;