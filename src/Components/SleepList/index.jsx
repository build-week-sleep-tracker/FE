import React from  'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchSleeps } from '../../Actions/creators';
import Sleep from './Sleeps';


const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 88.2vh;
`;

class SleepList extends React.Component {
  
  componentDidMount() {
    this.props.fetchSleeps();
  }

  render() {
    return (
      <StyledList>
        {
          this.props.sleepsState.sleeps.map(sleep => {
            return <Sleep sleep={sleep} />
          })
        }
      </StyledList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sleepsState: state.sleeps
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSleeps
  }
)(SleepList);