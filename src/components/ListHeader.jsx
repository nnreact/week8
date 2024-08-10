import PropTypes from "prop-types";
function ListHeader(props) {
    const { handleAdd, handleInputChange, inputValue } = props;
    return (
        <div className="header-cont">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter Task" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default ListHeader

ListHeader.propTypes = {
    handleAdd: PropTypes.func,
    handleInputChange: PropTypes.func,
    inputValue: PropTypes.string
}