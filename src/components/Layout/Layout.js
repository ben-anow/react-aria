import PropType from 'prop-types';
import ToasterNotify from '../Toaster/ToasterNotify';

const Layout = ({ children }) => {
    const layoutStyle = {
        color: 'gray',
        margin: '2rem',
        border: '2px solid blue',
        width: '100%',
        height: '100%',
    };
    const size = {
        width: '1400px',
        height: '700px',
        margin: 'auto',
    }
    return (
        <>
            <ToasterNotify />
            <div style={size}>
                <div style={layoutStyle}>
                    {children}
                </div>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropType.node.isRequired,
}
export default Layout;