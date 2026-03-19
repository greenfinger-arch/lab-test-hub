export const sleepData = {
  isReady: false,
  id: "sleep",
  title: "나의 '침대 위 부캐' 진단 테스트",
  subTitle: "이불 밖은 위험해! 침대 위에서 당신은 어떤 모습인가요? 당신의 수면 스타일과 밤의 정체성을 찾아드립니다.",
  mainImg: "/images/sleep-main.jpg",

  questions: [
    {
      id: 1,
      q: "불 끄고 누운 직후, 당신이 가장 먼저 하는 행동은?",
      img: "https://images.unsplash.com/photo-1507034589631-9433c7bc3413?w=600",
      a: [
        { text: "눈 감고 오늘 하루를 반추하며 명상(혹은 기절)", type: "DEEP" }, // 숙면/기절형
        { text: "자세 잡고 스마트폰으로 너튜브/커뮤니티 탐험", type: "NIGHT" } // 올빼미/탐험형
      ]
    },
    {
      id: 2,
      q: "내일 아침을 위해 맞춰둔 알람의 개수는?",
      img: "https://images.unsplash.com/photo-1495364141860-b0d0362f0335?w=600",
      a: [
        { text: "딱 하나! 한 번에 일어나야 진정한 프로", type: "MORNING" }, // 미라클모닝형
        { text: "5분 간격으로 최소 5개 이상. 나를 못 믿는다", type: "LAZY" } // 현실부정형
      ]
    },
    {
      id: 3,
      q: "자고 일어났을 때, 당신의 이불과 베개 상태는?",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
      a: [
        { text: "어제 정리한 그대로, 평온함 그 자체", type: "DEEP" },
        { text: "이불은 바닥에, 베개는 발 밑에... 격렬한 전투의 흔적", type: "LAZY" }
      ]
    },
    {
      id: 4,
      q: "자기 전, 야식의 유혹이 찾아온다면?",
      img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600",
      a: [
        { text: "내일의 붓기가 걱정되어 물 한 잔으로 참는다", type: "MORNING" },
        { text: "행복하게 먹고 바로 눕는 게 최고의 보약!", type: "NIGHT" }
      ]
    },
    {
      id: 5,
      q: "주말 아침, 눈을 떴는데 아직 오전 8시라면?",
      img: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=600",
      a: [
        { text: "일어난 김에 기지개 펴고 갓생 살 준비를 한다", type: "MORNING" },
        { text: "이건 꿈이야! 빛의 속도로 다시 이불 속으로 잠입", type: "LAZY" }
      ]
    }
  ],

  results: {
    DEEP: {
      name: "숙면의 신 '기절 전문 꿀잠러'",
      desc: "머리만 대면 3초 컷! 당신은 침대와 물아일체되는 탁월한 능력을 가졌습니다. 잡생각 없이 깊게 잠드는 당신은 축복받은 수면 효율의 소유자네요. 당신에게 침대는 진정한 에너지 충전소입니다.",
      img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400",
      ctaText: "💤 꿀잠 퀄리티 업! 프리미엄 안대 보기",
      affiliateLink: "https://play.ranklamp.com/sleep-deep"
    },
    NIGHT: {
      name: "어둠의 지배자 '새벽 감성 폰중독자'",
      desc: "불 끄고 나서부터 진짜 하루가 시작되는 타입! 알고리즘의 파도를 타고 새벽 3시까지 탐험을 즐기는 당신은 침대 위 정보 분석가입니다. 눈 건강은 조금 걱정되지만, 그 시간의 즐거움을 놓칠 순 없죠!",
      img: "https://images.unsplash.com/photo-1511296265581-c245004440b4?w=400",
      ctaText: "📱 침대용 스마트폰 거치대 필수템 보기",
      affiliateLink: "https://play.ranklamp.com/sleep-night"
    },
    MORNING: {
      name: "갓생의 정석 '미라클 모닝 루틴러'",
      desc: "침대는 오직 잠만 자는 곳! 아침 햇살과 함께 눈을 뜨는 당신은 계획적인 생활의 달인입니다. 규칙적인 수면 습관으로 언제나 맑은 정신을 유지하는 당신, 사무실에서도 가장 먼저 업무 모드로 전환되는 능력자군요.",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400",
      ctaText: "☀️ 상쾌한 아침을 위한 티 타임 세트",
      affiliateLink: "https://play.ranklamp.com/sleep-morning"
    },
    LAZY: {
      name: "이불 밖은 위험해 '현실 부정 프로 집순이'",
      desc: "알람 10개도 부족하다! 침대와의 이별을 세상에서 가장 힘들어하는 당신은 프로 게으름뱅이(이지만 귀여운) 유형입니다. 주말엔 24시간 침대 위에서 모든 것을 해결할 수 있는 놀라운 생존력을 보여주는군요.",
      img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=400",
      ctaText: "🛌 침대랑 한몸! 베드 테이블/등받이 베개 보기",
      affiliateLink: "https://play.ranklamp.com/sleep-lazy"
    }
  }
};