// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacters = styled.div`
.test {
background-color: black;
opacity: 1;
display:flex;
   fex-wrap:wrap;
   flex-direction:row;
   justify-content:space-around;
   aling-content:space-around;
}
span {
   display:flex;
   fex-wrap:wrap;
   flex-direction:row;
   justify-content:space-around;
   aling-content:space-around;
   color:gold;
  }
    p {
      width:15%;
      border-radius:10px;
      box-shadow: 60px 1px blue, -60px 1px red;
      background-color: grey;
      border: 2px solid black;
      color:gold;
  }
`


const charStats = props => {
   const {info} = props
    return (
        <StyledCharacters>
         <div className='test'>
            <span>{info.name}</span>
              <p>{info.birth_year}</p>
            </div>
        </StyledCharacters>
    )
}

export default charStats;