import React from 'react';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

class UserInfo extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  }

  render () {
    const user = this.props.user
    if (!user.id) return (<div></div>);
    return (
      <div className="info">
        <img src={user.photo_url} />
        <h5>{user.username}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
