import { useDropIndicator } from 'react-aria';
import React from 'react';
import PropType from 'prop-types';
import './DropIndicator.css';

function DropIndicator(props) {
    let style = props.style || {};
    let ref = React.useRef();
    const { dropState } = props;
    let { dropIndicatorProps, isHidden, isDropTarget } = useDropIndicator(
        props,
        dropState,
        ref
    );
    if (isHidden) {
        return null;
    }

    return (
        <li
            style={style}
            {...dropIndicatorProps}
            role="option"
            ref={ref}
            className={`drop-indicator ${isDropTarget ? 'drop-target' : ''}`}
        />
    );
}

DropIndicator.propTypes = {
    props: PropType.object,
}
DropIndicator.defaultProps = {
    props: null,
}

export default DropIndicator;