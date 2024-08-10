import PropTypes from "prop-types"
function ListBody(props) {

    const { listItems } = props;

    return (
        <div>
            {
                listItems.map((listItem, i) => {
                    return <div key={i} className="listItem">{listItem}</div>
                })
            }
        </div>
    )
}

export default ListBody


ListBody.propTypes = {
    listItems: PropTypes.array
}