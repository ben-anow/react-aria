import PropType from 'prop-types';

const ListComp1 = ({ data }) => {
    const size = {
        marginTop: '10px',
        padding: '10px',
        border: '1px solid pink',
    };
    const centered = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    };
    return (
        <div style={size}>
            <div style={centered}>
                {data}
            </div>
        </div>
    )
}
ListComp1.propTypes = {
    data: PropType.string,
};
ListComp1.defaultProps = {
    data: 'No Data',
}
export default ListComp1;