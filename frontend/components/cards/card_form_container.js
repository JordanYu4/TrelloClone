import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CardForm from './card_form';

import { createCard } from '../../actions/card_actions';
import { editList } from '../../actions/list_actions';
import { selectList } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  list: selectList(state.entities, ownProps.listId)
});

const mapDispatchToProps = dispatch => ({
  createCard: card => dispatch(createCard(card)),
  editList: list => dispatch(editList(list))
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(CardForm));