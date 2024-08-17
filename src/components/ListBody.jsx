import PropTypes from "prop-types"
function ListBody(props) {

    const { listItems, handleDelete } = props;

    return (
        <div className="listBody">
            {
                listItems.length === 0 && <p>No List Items Found!</p>
            }
            {
                listItems.map((listItem, i) => {
                    return <div key={i} className="listItem">
                        <p>
                            {listItem}
                        </p>
                        <button onClick={() => handleDelete(i)} >Delete</button>
                    </div>

                })
            }
        </div>
    )
}

export default ListBody


ListBody.propTypes = {
    listItems: PropTypes.array,
    handleDelete: PropTypes.func
}