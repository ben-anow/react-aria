import ListComp1 from '../ListComponents/ListComp1';
import ReorderExample from '../Aria/ReorderExample';

const CompList = () => {
    const testList = [
        { id: 1, comp: <ListComp1 data={'item 1'}/>, name: 'item 1' },
        { id: 2, comp: <ListComp1 data={'item 2'}/>, name: 'item 2' },
        { id: 3, comp: <ListComp1 data={'item 3'}/>, name: 'item 3' },
    ]

    const vertical = {
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <div style={vertical}>
            <ReorderExample
                items={
                    testList
                }
            />
        </div>
    )
};

CompList.propTypes = {
}

export default CompList;