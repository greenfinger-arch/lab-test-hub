import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// 데이터 임포트
import { fengShuiWealthData } from "./data/tests/fengShuiWealthData";
import { fengShuiWarningData } from "./data/tests/fengShuiWarningData";
import { fengShuiBlessingData } from "./data/tests/fengShuiBlessingData";
import { krPlantMiracleData } from "./data/tests/krPlantMiracleData.JS";
import { KitchenScentData } from "./data/tests/KitchenScentData.js";
import { BedUnderworldData } from "./data/tests/BedUnderworldData.js";
import { ClosetFortuneData } from "./data/tests/ClosetFortuneData.js";
import { FengShuiMasterData } from "./data/tests/FengShuiMasterData.js";
import { StudentRoomData } from "./data/tests/StudentRoomData.js";
import { HealingRoomData } from "./data/tests/HealingRoomData.js";
import { SingleRoomData } from "./data/tests/SingleRoomData.js";
import { PetTeriorData } from "./data/tests/PetTeriorData.js";
import { BabyRoomData } from "./data/tests/BabyRoomData.js";
import { BabyLifestyleCuratedData } from "./data/tests/BabyLifestyleCuratedData.js";

// 1. 전역 스타일 및 애니메이션
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0a0a0a; /* 더 깊은 블랙 */
    color: #e0e0e0; 
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0a0a0a;
  }

  a {
    color: #d4af37;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #111;
  }
  ::-webkit-scrollbar-thumb {
    background: #c5a059;
    border-radius: 10px;
  }
`;

const fadeIn = keyframes` from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } `;
const spin = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } `;

// 테스트 레지스트리
const testRegistry = {
  fengShuiWealth: fengShuiWealthData,
  fengShuiWarning: fengShuiWarningData,
  fengShuiBlessing: fengShuiBlessingData,
  krPlantMiracle: krPlantMiracleData,
  KitchenScent: KitchenScentData,
  BedUnderworld: BedUnderworldData,
  ClosetFortune: ClosetFortuneData,
  FengShuiMaster: FengShuiMasterData,
  StudentRoom: StudentRoomData,
  HealingRoom: HealingRoomData,
  SingleRoom: SingleRoomData,
  PetTerior: PetTeriorData,
  BabyRoomData: BabyRoomData,
  BabyLifestyleCurated: BabyLifestyleCuratedData,
};

// [삽입 코드 1] 공개 가능한 테스트 키값만 추출 (isReady가 true인 것만)
const activeTestKeys = Object.keys(testRegistry).filter(
  (key) => testRegistry[key].isReady === true,
);

// 2. 메인 페이지 컴포넌트
const MainGallery = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <Badge>Premium Selection</Badge>
        <MainTitle>LIFE CHOICE PICKS LAB</MainTitle>
        <SubTitle>당신의 일상을 바꾸는 특별한 큐레이션</SubTitle>
      </header>

      <Grid>
        {activeTestKeys.map((key) => (
          <TestCard key={key} onClick={() => navigate(`/${key}`)}>
            <CardImg
              $src={
                testRegistry[key].mainImg ||
                "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600"
              }
            />
            <CardBody>
              <CardTag>LIMITED EDITION</CardTag>
              <CardHead>{testRegistry[key].title}</CardHead>
              <CardDesc>{testRegistry[key].subTitle}</CardDesc>
            </CardBody>
          </TestCard>
        ))}
      </Grid>
      <Footer>© 2026 Premium Hub. All rights reserved.</Footer>
    </MainContainer>
  );
};

// 3. 페이지 로더 로직
const AutoTestLoader = () => {
  // 1. 현재 접속한 경로(Path)에서 공백이나 슬래시를 제거하고 순수한 키값만 추출합니다.
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  // 2. 경로가 없으면(메인 페이지면) 갤러리를 보여줍니다.
  if (!path) return <MainGallery />;

  // 3. 레지스트리에서 해당 경로에 맞는 데이터를 가져옵니다.
  const data = testRegistry[path];

  // 4. [핵심 수정] 데이터가 아예 없거나(존재하지 않는 주소),
  //    데이터는 있지만 isReady가 true가 아니라면(작업 중) 메인으로 리다이렉트합니다.
  if (!data || data.isReady !== true) {
    return <Navigate to="/" replace />;
  }

  // 5. 모든 검문을 통과했다면(데이터가 있고 준비됨) 테스트 화면을 보여줍니다.
  return <TestManager data={data} />;
};

// 3. 테스트 엔진 (에러 수정됨)
const TestManager = ({ data }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState({});

  const handleAnswer = (type) => {
    setScore((prev) => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
    if (currentIdx + 1 < data.questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep(2);
      setTimeout(() => setStep(3), 1500);
    }
  };

  const getResult = () => {
    const winner = Object.keys(score).reduce((a, b) =>
      score[a] > score[b] ? a : b,
    );
    return data.results[winner];
  };

  const result = step === 3 ? getResult() : null;

  return (
    <Wrapper>
      <Card>
        {step === 0 && (
          <FadeContainer>
            <Badge>Personal Curation</Badge>
            <Title>{data.title}</Title>
            <SubTitle style={{ marginBottom: "20px" }}>
              {data.subTitle}
            </SubTitle>
            {data.mainImg && <MainBanner src={data.mainImg} alt="main" />}
            <MainButton onClick={() => setStep(1)}>테스트 시작하기</MainButton>
          </FadeContainer>
        )}

        {step === 1 && (
          <FadeContainer key={currentIdx}>
            <ProgressOuter>
              <ProgressInner
                $width={(currentIdx / data.questions.length) * 100}
              />
            </ProgressOuter>
            <QuestionNum>STEP {currentIdx + 1}</QuestionNum>
            {data.questions[currentIdx].img && (
              <ContentImage src={data.questions[currentIdx].img} alt="q" />
            )}
            <QuestionText>{data.questions[currentIdx].q}</QuestionText>
            <ButtonGroup>
              {data.questions[currentIdx].a.map((ans, i) => (
                <AnswerButton key={i} onClick={() => handleAnswer(ans.type)}>
                  {ans.text}
                </AnswerButton>
              ))}
            </ButtonGroup>
          </FadeContainer>
        )}

        {step === 2 && (
          <LoadingWrapper>
            <Spinner />
            <LoadingText>프리미엄 결과 분석 중...</LoadingText>
          </LoadingWrapper>
        )}

        {step === 3 && result && (
          <FadeContainer>
            <Badge>나의 맞춤 결과</Badge>
            <ResultName>{result.name}</ResultName>
            <ContentImage
              src={result.img}
              alt="res"
              style={{ height: "180px" }}
            />
            <ResultDesc>{result.desc}</ResultDesc>
            <AffiliateButton
              onClick={() => window.open(result.affiliateLink, "_blank")}
            >
              {result.ctaText}
            </AffiliateButton>
            <Disclaimer>
              본 서비스는 파트너스 활동을 통해, 일정액의 수수료를 제공받을 수
              있습니다.
            </Disclaimer>
            <ShareButton onClick={() => alert("링크가 복사되었습니다!")}>
              결과 공유하기
            </ShareButton>
            <ActionGroup>
              <TextActionButton
                onClick={() => {
                  setStep(0);
                  setCurrentIdx(0);
                  setScore({});
                }}
              >
                다시하기
              </TextActionButton>
              <Divider>|</Divider>
              <TextActionButton onClick={() => navigate("/")}>
                목록으로 이동 →
              </TextActionButton>
            </ActionGroup>
          </FadeContainer>
        )}
      </Card>
    </Wrapper>
  );
};

// --- 스타일 컴포넌트 (누락된 FadeContainer 추가 및 블랙&골드 밸런스 조정) ---

const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  animation: ${fadeIn} 0.8s ease-out;
`;
const MainTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  color: #d4af37;
  letter-spacing: 2px;
`;
const SubTitle = styled.p`
  color: #888;
  font-size: 1rem;
  margin-bottom: 20px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;
const TestCard = styled.div`
  background: #151515;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #222;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    border-color: #d4af37;
  }
`;
const CardImg = styled.div`
  width: 100%;
  height: 200px;
  background: #222 url(${(props) => props.$src}) no-repeat center;
  background-size: cover;
`;
const CardBody = styled.div`
  padding: 24px;
  text-align: left;
`;
const CardTag = styled.div`
  color: #c5a059;
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 8px;
`;
const CardHead = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: #f5f5f5;
`;
const CardDesc = styled.p`
  margin: 10px 0 0;
  color: #999;
  font-size: 0.9rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background: #0a0a0a;
  box-sizing: border-box;
`;
const Card = styled.div`
  background: #111;
  width: 100%;
  max-width: 440px;
  padding: 30px 25px;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  text-align: center;
  border: 1px solid #222;
  margin-top: 20px;
`;
const FadeContainer = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Badge = styled.div`
  background: rgba(212, 175, 55, 0.1);
  color: #d4af37;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: inline-block;
`;
const Title = styled.h1`
  font-size: 1.7rem;
  margin: 15px 0 10px;
  color: #f5f5f5;
`;
const MainBanner = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 20px;
`;
const ContentImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 15px;
`;
const QuestionNum = styled.div`
  color: #d4af37;
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;
const QuestionText = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 25px;
  color: #f5f5f5;
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const AnswerButton = styled.button`
  width: 100%;
  padding: 18px;
  border: 1px solid #333;
  border-radius: 16px;
  background: #1a1a1a;
  color: #ccc;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
  &:hover {
    border-color: #d4af37;
    color: #d4af37;
    background: #222;
  }
`;
const MainButton = styled.button`
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #c5a059, #d4af37);
  color: #000;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
`;
const AffiliateButton = styled(MainButton)`
  background: linear-gradient(135deg, #d4af37, #f1d592);
  margin-top: 20px;
`;
const ShareButton = styled.button`
  width: 100%;
  padding: 15px;
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  border-radius: 16px;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
`;
const ResultName = styled.h2`
  font-size: 1.8rem;
  color: #d4af37;
  margin: 15px 0;
  font-weight: 900;
`;
const ResultDesc = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 20px;
  font-size: 0.95rem;
  color: #bbb;
  text-align: left;
  line-height: 1.7;
  border-left: 5px solid #d4af37;
  margin-bottom: 25px;
`;
const ProgressOuter = styled.div`
  width: 100%;
  height: 4px;
  background: #222;
  border-radius: 10px;
  margin-bottom: 25px;
`;
const ProgressInner = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background: #d4af37;
  transition: width 0.4s ease;
`;
const LoadingWrapper = styled.div`
  padding: 40px 0;
`;
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #222;
  border-top: 3px solid #d4af37;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 15px;
`;
const LoadingText = styled.p`
  color: #d4af37;
  font-size: 0.9rem;
`;
const Disclaimer = styled.p`
  font-size: 11px;
  color: #666;
  margin: 15px 0;
  line-height: 1.4;
`;
const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #222;
  width: 100%;
`;
const TextActionButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.85rem;
  cursor: pointer;
  &:hover {
    color: #d4af37;
  }
`;
const Divider = styled.span`
  color: #333;
`;
const Footer = styled.footer`
  margin-top: 80px;
  text-align: center;
  color: #444;
  font-size: 0.8rem;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoTestLoader />} />
        <Route path="/:testId" element={<AutoTestLoader />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
