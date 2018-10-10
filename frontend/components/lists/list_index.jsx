import React from 'react';

import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentWillMount() {
    this.boardId = this.props.boardId; 
    if (!this.props.board) this.props.fetchBoard(this.boardId); 
    this.props.fetchListsForBoard(this.boardId);
  }
  
  render() {
    if (typeof this.props.board.list_order === "undefined" || 
        typeof this.props.lists === "undefined") {
      return null;
    }
    const { lists, board: {list_order} } = this.props;
    let indexedLists = jQuery.isEmptyObject(lists) ? null : list_order.map(list_id => (
      <ListIndexItemContainer
        key={list_id}
        list={lists[list_id]}
      /> 
    ));

    return (
      <div className="list-index-container">
        <ul className="list-index">
          { indexedLists }
          <li className="list-form-container">
            <span className="list-form-toggle-button js-form-open">
              + Add another list
            </span>
            <ListFormContainer />
          </li>
        </ul>
      </div>
    )
  }
};

export default ListIndex;