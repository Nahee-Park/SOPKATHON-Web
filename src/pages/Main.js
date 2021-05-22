import React from 'react';
import styled from 'styled-components';
import { Planet } from '../components';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Touching from '../assets/images/touching.svg';
import Sorry from '../assets/images/sorry.svg';
import mainPlanet from '../assets/images/Planet.svg';
import { useHistory } from 'react-router';

const MainPage = (user, setEmotion, setSrc) => {
  console.log(user.user.data.username);

  // 서버로부터 받을 데이터 넣을 것이지만 임의로 넣어둠
  const name = user.user.data.username;

  const emotion = {
    happy: '행복',
    sad: '서운',
    sorry: '미안',
    touching: '감동',
  };
  const history = useHistory();
  // console.log(event.target.getAttribute('src'));

  const handleHappy = (event) => {
    history.push({
      pathname: '/1/happy',
      state: { name },
    });
  };
  const handleSad = (event) => {
    history.push({
      pathname: '/1/sad',
      state: { name },
    });
  };
  const handleTouching = (event) => {
    history.push({
      pathname: '/1/touching',
      state: { name },
    });
  };
  const handleSorry = (event) => {
    history.push({
      pathname: '/1/sorry',
      state: { name },
    });
  };
  return (
    <MainWrap>
      <div className="planet">
        <div className="planet--main">
          <div className="planet--main--userName">{name}</div>
          <div className="planet--main--planet">
            <Planet size={'large'} src={mainPlanet}></Planet>
            <div className="planet--happy" onClick={handleHappy}>
              <Planet size={'happy'} src={Happy} name={emotion.happy}></Planet>
            </div>
            <div className="planet--sad" onClick={handleSad}>
              <Planet size={'sad'} src={Sad} name={emotion.sad}></Planet>
            </div>
            <div className="planet--sorry" onClick={handleSorry}>
              <Planet size={'small'} src={Sorry} name={emotion.sorry}></Planet>
            </div>
            <div className="planet--touching" onClick={handleTouching}>
              <Planet
                size={'touching'}
                src={Touching}
                name={emotion.touching}
              ></Planet>
            </div>
          </div>
          <p className="planet--main--content">{name}님의 우주입니다</p>
          <p className="planet--main--content">
            행성을 누르면 {name}님과 공유했던 감정을 기록할 수 있어요.
          </p>
        </div>
      </div>
    </MainWrap>
  );
};

export default MainPage;

const MainWrap = styled.div`
  .planet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 10rem;
      &--planet {
        position: relative;
      }
      &--userName {
        margin-top: 7rem;
        margin-bottom: 1.1rem;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        color: #ffffff;
      }
      &--content {
        margin-top: 4.1rem;
        font-size: 2rem;
        text-align: center;
        color: #ffffff;
      }
    }
    &--happy {
      position: absolute;
      top: -10rem;
      left: 60rem;
    }
    &--sad {
      position: absolute;
      top: 40rem;
      left: 55rem;
    }
    &--sorry {
      position: absolute;
      top: -10rem;
      left: -35rem;
    }
    &--touching {
      position: absolute;
      top: 35rem;
      left: -25rem;
    }
  }
`;
