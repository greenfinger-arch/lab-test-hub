export const deskHealthData = {
  id: "deskHealth",
  title: "나의 데스크 건강 등급 & 생산성 진단",
  relatedPostUrl: "https://ranklamp.com/office-worker-health-productivity-desk-management",
  subTitle: "거북목 탈출! 당신의 업무 효율을 200% 올릴 데스크 환경은?",
  isReady: true,
  mainImg: "/images/deskhealth-main.jpg",
  questions: [
    {
      q: "지금 당신의 모니터를 바라보는 자세는?",
      img: "/images/desk-q1.jpg",
      a: [
        { text: "거북이가 형님 할 정도, 모니터 속으로 들어갈 기세 🐢", type: "TURTLE" },
        { text: "허리를 꼿꼿이! 바른 자세의 정석 꼿꼿 선비 🧘", type: "ZEN" }
      ]
    },
    {
      q: "책상 위에 놓인 물건들의 상태는 어떤가요?",
      img: "/images/desk-q2.jpg",
      a: [
        { text: "서류와 전선이 엉킨 카오스, 정보의 바다 🌊", type: "CHAOS" },
        { text: "각 잡힌 모니터와 키보드, 완벽한 미니멀리즘 📐", type: "ZEN" }
      ]
    },
    {
      q: "오후 3시, 당신의 몸에서 가장 먼저 신호를 보내는 곳은?",
      img: "/images/desk-q3.jpg",
      a: [
        { text: "뻐근한 뒷목과 승모근, 누가 올라타 있는 듯 👤", type: "TURTLE" },
        { text: "욱신거리는 손목과 손가락 마디마디 🖐️", type: "CHAOS" }
      ]
    },
    {
      q: "업무에 집중할 때 당신의 발은 어디에 있나요?",
      img: "/images/desk-q4.jpg",
      a: [
        { text: "자연스럽게 꼬아진 다리, 혹은 의자 위로 안착 🥨", type: "CHAOS" },
        { text: "바닥에 발바닥이 딱! 안정적인 접지 상태 👣", type: "ZEN" }
      ]
    },
    {
      q: "당신에게 '아이템'이란 어떤 의미인가요?",
      img: "/images/desk-q5.jpg",
      a: [
        { text: "장비가 실력이다! 인체공학적 도구에 진심 🖱️", type: "ZEN" },
        { text: "회사가 주는 대로 쓴다, 도구 탓은 하지 않는 고수 🛠️", type: "TURTLE" }
      ]
    }
  ],
  results: {
    TURTLE: {
      name: "위험천만 '명예 거북이' 타입",
      img: "/images/desk-res01.jpg",
      desc: "모니터와 물아일체 직전! 거북목과 라운드 숄더가 당신의 생산성을 갉아먹고 있군요. 지금 당장 모니터 받침대를 높이고 목을 뒤로 당기세요! 장비빨이 시급한 상황입니다.",
      ctaText: "거북목 방지 모니터암 확인하기",
      affiliateLink: "https://link.coupang.com/a/dXteYj"
    },
    ZEN: {
      name: "갓벽한 '데스크 테라피스트' 타입",
      img: "/images/desk-res02.jpg",
      desc: "바른 자세와 정리된 환경, 당신은 효율의 마스터군요! 지금의 환경을 유지하면서 조명이나 향기로 감성을 한 스푼 더해보세요. 업무 집중력이 우주 끝까지 상승할 거예요.",
      ctaText: "집중력을 높이는 데스크 조명 보기",
      affiliateLink: "https://link.coupang.com/a/dXtjuY"
    },
    CHAOS: {
      name: "창의적인 '혼돈의 마법사' 타입",
      img: "/images/desk-res03.jpg",
      desc: "정리되지 않은 책상 위에서 창의력이 샘솟지만, 몸은 비명을 지르고 있어요! 손목 터널 증후군이 오기 전에 마우스부터 버티컬로 바꿔보는 건 어떨까요? 작은 변화가 큰 건강을 만듭니다.",
      ctaText: "손목 편한 버티컬 마우스 구경하기",
      affiliateLink: "https://link.coupang.com/a/dXtmy2"
    }
  }
};