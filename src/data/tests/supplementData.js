export const supplementData = {
  isReady: false,
  id: "supplement",
  title: "나의 라이프스타일별 '필수 영양제' 찾기",
  subTitle: "피로도와 생활 습관을 분석하여 지금 당신에게 가장 필요한 영양 조합을 추천해 드립니다.",
  mainImg: "/images/supplement-main.jpg", // 준비하신 메인 이미지 경로
  
  questions: [
    {
      id: 1,
      q: "아침에 일어났을 때 당신의 상태는?",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600",
      a: [
        { text: "천근만근... 눈 뜨기가 너무 힘들다", type: "FATIGUE" },
        { text: "비교적 가뿐하지만 눈이 뻑뻑하다", type: "EYE" }
      ]
    },
    {
      id: 2,
      q: "하루 중 가장 많이 머무는 장소나 활동은?",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      a: [
        { text: "컴퓨터나 스마트폰 앞 (장시간 업무)", type: "EYE" },
        { text: "잦은 미팅과 야근, 스트레스가 많은 현장", type: "FATIGUE" }
      ]
    },
    {
      id: 3,
      q: "평소 식습관은 어떤 편인가요?",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
      a: [
        { text: "고기 위주의 식단이나 배달 음식을 즐김", type: "BLOOD" },
        { text: "채소는 챙겨 먹지만 일조량이 부족함", type: "VITAMIN" }
      ]
    },
    {
      id: 4,
      q: "최근 가장 고민되는 몸의 변화는?",
      img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600",
      a: [
        { text: "손발이 차고 혈액순환이 안 되는 느낌", type: "BLOOD" },
        { text: "피부가 푸석하고 면역력이 떨어진 느낌", type: "VITAMIN" }
      ]
    },
    {
      id: 5,
      q: "당신이 원하는 가장 이상적인 컨디션은?",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      a: [
        { text: "지치지 않는 에너자이저 같은 활력", type: "FATIGUE" },
        { text: "맑고 깨끗한 시야와 가벼운 몸", type: "EYE" }
      ]
    }
  ],
  
  results: {
    FATIGUE: {
      name: "지친 당신을 위한 '고함량 비타민 B군'",
      desc: "늘 피곤에 절어 있는 당신에게는 에너지 대사를 돕는 비타민 B군과 밀크씨슬 조합이 필수입니다. 간 건강을 챙겨 활력을 되찾으세요!",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400",
      ctaText: "🔋 피로회복 1위 비타민 B 추천 리스트",
      affiliateLink: "https://yourblog.com/best-vitamin-b"
    },
    EYE: {
      name: "디지털 기기 중독자를 위한 '루테인 지아잔틴'",
      desc: "스마트폰과 PC 사용량이 많은 당신! 침침한 눈을 방치하면 시력이 급격히 저하됩니다. 안토시아닌이 풍부한 베리류와 루테인을 꼭 챙기세요.",
      img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400",
      ctaText: "👁️ 눈 피로 싹! 프리미엄 루테인 확인하기",
      affiliateLink: "https://yourblog.com/best-lutein"
    },
    BLOOD: {
      name: "혈액순환과 심혈관 건강을 위한 '오메가-3'",
      desc: "육류 위주의 식단과 운동 부족이 걱정된다면 rTG 오메가-3가 정답입니다. 혈행 개선을 통해 손발 저림과 혈압 관리를 시작하세요.",
      img: "https://images.unsplash.com/photo-1559087316-652ce3021884?w=400",
      ctaText: "🐟 중금속 걱정 없는 깨끗한 오메가-3 TOP 5",
      affiliateLink: "https://yourblog.com/best-omega3"
    },
    VITAMIN: {
      name: "햇빛 부족 현대인의 필수템 '비타민 D & 아연'",
      desc: "실내 생활이 많은 당신은 면역력의 핵심인 비타민 D가 부족할 확률이 매우 높습니다. 아연과 함께 섭취하여 기초 면역을 튼튼히 다지세요.",
      img: "https://images.unsplash.com/photo-1616671285442-11342ec63bc1?w=400",
      ctaText: "☀️ 뼈 건강과 면역력을 동시에! 비타민 D 추천",
      affiliateLink: "https://yourblog.com/best-vitamin-d"
    }
  }
};