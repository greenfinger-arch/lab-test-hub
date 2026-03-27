export const ComprehensiveGrowthTestData = {
  id: "child-growth-total-audit-2026",
  isReady: true,
  version: "2.0.0", // 통합 업그레이드 버전
  title: "우리 아이 쑥쑥 성장 종합 진단",
  subTitle: "영양부터 자세, 면역까지! 성장을 가로막는 '숨은 방해물'을 찾아드립니다.",
  // 시리즈 전체 링크를 연결하여 체류 시간 극대화
  seriesLinks: [
    { part: 1, title: "영양과 측정", url: "https://lifechoicepicks.com/child-growth-height-golden-time-solutions-2026" },
    { part: 2, title: "자세와 골격", url: "https://lifechoicepicks.com/child-posture-correction-spine-health-guide-2026" },
    { part: 3, title: "면역과 체력", url: "https://lifechoicepicks.com/child-immunity-stamina-foundation-growth-2026" }
  ],
  
  // [질문 설계] 1~3편의 핵심 로직을 골고루 배분 (총 6문항)
  questions: [
    {
      id: "Q1", // 1편: 영양/측정 관련
      q: "우리 아이의 식사 습관과 키 측정 주기는 어떤가요?",
      a: [
        { text: "골고루 잘 먹으며 매달 정기적으로 키를 기록한다.", score: { nutrition: 3, tracking: 3 } },
        { text: "편식이 조금 있지만 성장은 어림짐작으로 확인한다.", score: { nutrition: 1, tracking: 1 } },
        { text: "인스턴트를 즐기고 영유아 검진 때만 키를 잰다.", score: { nutrition: 0, tracking: 0 } }
      ]
    },
    {
      id: "Q2", // 2편: 자세/골격 관련
      q: "아이의 평소 앉아있는 모습이나 어깨 라인은 어떤가요?",
      a: [
        { text: "자세가 늘 바르고 어깨가 활짝 펴져 있다.", score: { posture: 3 } },
        { text: "가끔 구부정하게 앉거나 거북목 증상이 보인다.", score: { posture: 1 } },
        { text: "이미 어깨가 안으로 말리고(라운드 숄더) 자주 기대어 앉는다.", score: { posture: 0 } }
      ]
    },
    {
      id: "Q3", // 3편: 면역/체력 관련
      q: "아이가 환절기에 감기를 앓는 빈도나 기초 체력은 어떤가요?",
      a: [
        { text: "잔병치레가 거의 없고 야외 활동을 즐긴다.", score: { immunity: 3 } },
        { text: "계절이 바뀔 때마다 감기를 앓거나 금방 지친다.", score: { immunity: 1 } },
        { text: "비염 등 만성 호흡기 질환이 있고 아침에 일어나기 힘들어한다.", score: { immunity: 0 } }
      ]
    },
    {
      id: "Q4", // 1편: 수면 관련 (성장 호르몬)
      q: "아이의 수면 시간과 수면의 질은 어떠한가요?",
      a: [
        { text: "밤 10시 이전에 잠들고 중간에 깨지 않는다.", score: { sleep: 3 } },
        { text: "11시쯤 잠들고 가끔 코막힘 등으로 뒤척인다.", score: { sleep: 1 } },
        { text: "자정 가까이 늦게 자거나 수면 시간이 매우 불규칙하다.", score: { sleep: 0 } }
      ]
    },
    {
      id: "Q5", // 2편: 보행/균형 관련
      q: "아이의 걸음걸이나 신발 밑창 닳는 모양은 어떤가요?",
      a: [
        { text: "팔자나 안짱다리 없이 고르게 걷는다.", score: { balance: 3 } },
        { text: "신발 안쪽이나 바깥쪽 한 면만 유독 빨리 닳는다.", score: { balance: 1 } },
        { text: "걸을 때 자주 발을 헛디디거나 아치가 무너져 보인다.", score: { balance: 0 } }
      ]
    },
    {
      id: "Q6", // 3편: 환경/위생 관련
      q: "아이 방의 공기질 관리와 외출 시 방어 습관은?",
      a: [
        { text: "공기청정기를 항상 가동하고 마스크 착용이 습관화되어 있다.", score: { hygiene: 3 } },
        { text: "환기 위주로 관리하며 미세먼지가 심할 때만 신경 쓴다.", score: { hygiene: 1 } },
        { text: "딱히 실내 공기질에 신경 쓰지 않으며 마스크를 답답해한다.", score: { hygiene: 0 } }
      ]
    }
  ],

  // [결과 설계] 점수에 따른 입체적 처방
  results: {
    perfect: {
      type: "D",
      title: "🥇 성장의 정석! 완벽한 밸런스를 유지 중입니다",
      desc: "영양, 자세, 면역의 삼박자가 완벽합니다! 지금의 생활 습관을 유지하는 것이 가장 중요합니다. 꾸준한 영양 공급과 정밀한 기록으로 아이의 잠재력을 100% 이끌어내 주세요.",
      mustRead: 1, // 1편 권장
      bestItem: "연세대학교 키즈텐 042 (대용량)"
    },
    correction_needed: {
      type: "B",
      title: "🥈 골격 관리 주의보! 자세가 성장을 막고 있습니다",
      desc: "영양 상태는 양호하나 '굽은 등'과 '무너진 자세'가 숨은 키를 가두고 있습니다. 뼈와 근육이 올바른 방향으로 자라도록 물리적인 교정이 시급한 단계입니다.",
      mustRead: 2, // 2편 권장
      bestItem: "커블체어 키즈 & 닥코 자세교정밴드"
    },
    immunity_needed: {
      type: "C",
      title: "🥉 면역 방어망 비상! 에너지가 새어나가고 있습니다",
      desc: "아이가 자주 아프면 성장의 에너지가 병을 이기는 데 소모됩니다. 장 건강과 기초 체력을 보강하여 '성장 엔진'이 멈추지 않도록 면역 보호막을 먼저 쳐주세요.",
      mustRead: 3, // 3편 권장
      bestItem: "정관장 홍이장군 & 락토핏 키즈"
    },
    total_care_needed: {
      type: "A",
      title: "⚠️ 종합 집중 케어 필요! 골든타임 재설계가 시급합니다",
      desc: "전반적인 생활 습관 리모델링이 필요합니다. 측정부터 시작해 자세 교정, 면역력 강화까지 단계별로 차근차근 관리해야 합니다. 오늘부터 생활의선택 시리즈를 정독하며 하나씩 실천해 보세요!",
      mustRead: 0, // 전체 기사 권장
      bestItem: "휴비딕 초음파 신장계 (측정부터 시작하세요)"
    }
  }
};