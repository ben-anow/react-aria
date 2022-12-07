import Layout from '../Layout/Layout';
import CompList from '../CompList/CompList';
import ReorderExample from '../Aria/ReorderExample';
import DroppedOnExample from '../Aria/DroppedOn/DroppedOnExample';

const EntryPoint = () => {
    const colStyle = {
        display: 'flex',
        flexDirection: 'row',
    };
    const rowStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        border: '1px solid lightgray',
    }
    return (
        <Layout>
            <div style={colStyle}>
                <div style={rowStyle}>
                    <CompList />
                </div>
                <div style={rowStyle}>
                    <DroppedOnExample/>
                </div>
                <div style={rowStyle}>
                    <ReorderExample
                        items={
                            [
                                { id: 1, name: 'Cat' },
                                { id: 2, name: 'Dog' },
                                { id: 3, name: 'Kangaroo' },
                                { id: 4, name: 'Panda' },
                                { id: 5, name: 'Snake' }
                            ]
                        }
                    />
                </div>
            </div>

        </Layout>
    );
};

EntryPoint.propTypes = {};
export default EntryPoint;