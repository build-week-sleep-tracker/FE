import React from 'react'
import styled from 'styled-components';
import Insights1 from '../../images/Insights1.jpg';
import Insights2 from '../../images/Insights2.jpg';
import Insights3 from '../../images/Insights3.jpg';
import Insights4 from '../../images/Insights4.jpg';
import Insights5 from '../../images/Insights5.jpg';
import Insights6 from '../../images/Insights6.jpg';

const Wrapper = styled.div`
height: 100%;
border: 1px solid black;
text-align: center;
margin-top: 5px;
background-color:#3421A1
`;

const MainInsight = styled.div`
height: 8rem;
justify-content: center;
border: 1px solid black;
background-image: url(${Insights1});
background-size: cover;
background-position: center;
color: #fff
`;

const Insight1 = styled.div`
height: 6.8rem;
border: 1px solid black;
justify-content: center;
margin-top: 5px;
background-image: url(${Insights2});
background-size: cover;
background-position: center;
color: #fff
`;

const Insight2 = styled.div`
height: 6.8rem;
border: 1px solid black;
justify-content: center;
margin-top: 5px;
background-image: url(${Insights3});
background-size: cover;
background-position: center;
color: #fff
`;
const Insight3 = styled.div`
height: 6.8rem;
border: 1px solid black;
justify-content: center;
margin-top: 5px;
background-image: url(${Insights4});
background-size: cover;
background-position: center;
color: #fff
`;

const Insight4 = styled.div`
height: 6.8rem;
border: 1px solid black;
justify-content: center;
margin-top: 5px;
background-image: url(${Insights5});
background-size: cover;
background-position: center;
color: #fff
`;

const Insight5 = styled.div`
height: 6.8rem;
border: 1px solid black;
justify-content: center;
margin-top: 5px;
background-image: url(${Insights6});
background-size: cover;
background-position: center;
color: #fff
`;

export default function Insights() {
    return (
       <Wrapper>
           <MainInsight>
               <h2>Sleep Insights</h2>
           </MainInsight>
           <Insight1>
               <h4>Blogs</h4>
           </Insight1>
           <Insight2>
               <h4>Podcasts</h4>
           </Insight2>
           <Insight3>
               <h4>Yoga</h4>
           </Insight3>
           <Insight4>
               <h4>Meditations</h4>
           </Insight4>
           <Insight5>
               <h4>Music</h4>
           </Insight5>
       </Wrapper>
    )
}
