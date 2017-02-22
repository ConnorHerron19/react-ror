import React from 'react';
import { connect } from 'react-redux';
import Stream from './stream';
import { fetchTracks } from '../../actions/tracks_actions';
import { receiveCurrentTrack, togglePlay } from '../../actions/current_track_actions';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  currentTrack: state.currentTrack
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  receiveCurrentTrack: (track, queue) => dispatch(receiveCurrentTrack(track, queue)),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
