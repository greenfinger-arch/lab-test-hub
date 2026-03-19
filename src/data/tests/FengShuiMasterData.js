export const FengShuiMasterData = {
  id: "kr-fengshui-master",
  title: "2026 총결산: 당신의 집은 '운의 고속도로'인가요? 가상(家相) 마스터 진단",
  relatedPostUrl: "https://ranklamp.com/2026-feng-shui-home-layout-blueprint/",
  subTitle: "집의 구조를 바꿀 수 없다면 기운의 흐름을 바꾸세요. 2026년 당신의 인생을 바꿀 풍수 설계도를 그려드립니다.",
  isReady: true,
  mainImg: "/images/krMasterMain.jpg",
  questions: [
    {
      q: "우리 집 현관에서 거실로 들어올 때 가장 먼저 느끼는 기분은?",
      img: "/images/krMasterQ1.jpg",
      a: [
        { text: "시야가 탁 트여 시원하고 밝은 느낌이다.", type: "HIGHWAY" },
        { text: "복도나 가구에 가려져 조금 답답한 느낌이다.", type: "OBSTACLE" },
        { text: "어둡거나 아늑하지만 조금 정적인 느낌이다.", type: "SHADOW" },
        { text: "복잡한 물건들이 먼저 눈에 들어온다.", type: "CHAOS" }
      ]
    },
    {
      q: "가장 큰 창문(거실 창 등)의 방향과 채광 상태는 어떤가요?",
      img: "/images/krMasterQ2.jpg",
      a: [
        { text: "남향 계열로 햇살이 깊숙이 들어온다.", type: "HIGHWAY" },
        { text: "동/서향으로 특정 시간에만 빛이 강하다.", type: "SHADOW" },
        { text: "북향이거나 주변 건물에 가려 빛이 적다.", type: "OBSTACLE" },
        { text: "통풍은 잘 되지만 채광은 보통이다.", type: "CHAOS" }
      ]
    },
    {
      q: "집안의 '가장 큰 가구(침대, 소파)'의 위치를 정한 기준은?",
      img: "/images/krMasterQ3.jpg",
      a: [
        { text: "문과 대각선 방향으로 배치해 안정감을 고려했다.", type: "HIGHWAY" },
        { text: "콘센트나 TV 위치에 맞춰 어쩔 수 없이 배치했다.", type: "CHAOS" },
        { text: "문과 마주 보거나 등지는 구조로 되어 있다.", type: "OBSTACLE" },
        { text: "벽면 구석에 최대한 붙여서 공간을 확보했다.", type: "SHADOW" }
      ]
    },
    {
      q: "풍수적으로 불리한 구조(예: 현관과 화장실이 마주함 등)가 있다면?",
      img: "/images/krMasterQ4.jpg",
      a: [
        { text: "딱히 없거나 이미 가림막 등으로 보완했다.", type: "HIGHWAY" },
        { text: "알고는 있지만 공간이 좁아 방치 중이다.", type: "OBSTACLE" },
        { text: "어디가 문제인지 잘 모르겠다.", type: "CHAOS" },
        { text: "구조보다는 인테리어 소품에 신경 쓰는 편이다.", type: "SHADOW" }
      ]
    },
    {
      q: "당신이 집이라는 공간을 통해 얻고 싶은 최종적인 에너지는?",
      img: "/images/krMasterQ5.jpg",
      a: [
        { text: "성공과 명예가 솟구치는 '상승의 에너지'", type: "HIGHWAY" },
        { text: "어떤 풍파도 막아주는 '철통 같은 방어 에너지'", type: "SHADOW" },
        { text: "막힌 인생의 돌파구를 찾는 '순환의 에너지'", type: "OBSTACLE" },
        { text: "가족 모두가 화목하고 건강한 '치유의 에너지'", type: "CHAOS" }
      ]
    }
  ],
  results: {
    HIGHWAY: {
      name: "거침없이 질주하는 '운세 프리패스 하우스'",
      img: "/images/krMasterRes01.jpg",
      desc: "당신의 공간은 기의 흐름이 매우 원활한 '운의 고속도로' 상태입니다. 채광과 통풍의 조화가 뛰어나 2026년 어떤 일을 시작해도 탄력을 받을 것입니다. 현관에 맑은 소리가 나는 종을 달아 행운의 입장을 알리고, 거실에 생기 있는 화분 하나만 두어 이 흐름을 유지하세요.",
      ctaText: "행운을 부르는 '도어벨' 컬렉션",
      affiliateLink: "https://link.coupang.com/a/d5xfuG"
    },
    OBSTACLE: {
      name: "보완이 필요한 '잠재력의 공간' (비보 풍수 필수)",
      img: "/images/krMasterRes02.jpg",
      desc: "구조상 기가 정체되기 쉬운 부분이 보입니다. 하지만 걱정 마세요! 현관에서 거실이 바로 보인다면 파티션이나 식물로 시선을 분산시키고, 채광이 부족하다면 밝은 조명을 활용해 인위적으로 '양기'를 보충하면 됩니다. 작은 변화만으로도 막혔던 재물운의 물꼬를 틀 수 있습니다.",
      ctaText: "공간의 기운을 바꾸는 '무드등 & 가림막'",
      affiliateLink: "https://link.coupang.com/a/d5xnKH"
    },
    SHADOW: {
      name: "에너지가 고여있는 '정적인 안식처'",
      img: "/images/krMasterRes03.jpg",
      desc: "집안의 기운이 너무 차분하여 '상승'하는 힘이 부족할 수 있습니다. 특히 북향이거나 그늘진 곳이 많다면 붉은 계열의 액자나 따뜻한 색감의 카펫을 활용해 온기를 더하세요. 기운을 억지로 바꾸려 하기보다, 소품을 통해 에너지를 살짝 깨워주는 것만으로도 충분합니다.",
      ctaText: "따뜻한 기운을 더해줄 '인테리어 액자'",
      affiliateLink: "https://link.coupang.com/a/d5xsbu"
    },
    CHAOS: {
      name: "재배치가 시급한 '운의 혼선 구간'",
      img: "/images/krMasterRes04.jpg",
      desc: "물건의 배치와 기의 흐름이 서로 엉켜 있어, 에너지가 소모되고 있습니다. 큰 가구의 위치를 조금만 옮겨도 무거웠던 머리가 맑아지는 것을 느낄 수 있습니다. 풍수에서 가장 큰 개운법은 '정리'와 '환기'입니다. 오늘 당장 창문을 열고, 사용하지 않는 물건을 정리하는 것부터 시작해 보세요.",
      ctaText: "공간을 살리는 '심플한 리빙박스 정리함'",
      affiliateLink: "https://link.coupang.com/a/d5xDAp"
    }
  }
};