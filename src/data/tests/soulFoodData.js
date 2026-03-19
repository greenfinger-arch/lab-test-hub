export const soulFoodData = {
  isReady: false,
  id: "soul-food",
  title: "나의 '소울 푸드' 평생권 당첨 테스트",
  subTitle: "전 세계 딱 하나의 음식만 평생 무료로 먹을 수 있다면? 당신의 성향과 입맛에 딱 맞는 인생 음식을 찾아드립니다.",
  mainImg: "/images/food-main.jpg",

  questions: [
    {
      id: 1,
      q: "오늘 하루 정말 고생한 나를 위해, 단 하나의 메뉴를 고른다면?",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      a: [
        { text: "지글지글 구운 고기와 시원한 소맥 한 잔", type: "K-SOUL" }, // 한국인의 소울(삼겹살/국밥)
        { text: "입안에서 살살 녹는 달콤하고 화려한 디저트 세트", type: "SWEET" } // 힐링 디저트
      ]
    },
    {
      id: 2,
      q: "당신의 식사 철학에 더 가까운 것은?",
      img: "https://images.unsplash.com/photo-1490812945541-905a505d4d3a?w=600",
      a: [
        { text: "자극적이고 화끈한 맛! 스트레스가 풀려야 한다", type: "SPICY" }, // 매운맛/마라
        { text: "자극적이지 않고 매일 먹어도 질리지 않는 담백함", type: "DAILY" } // 스테디셀러(떡볶이/라면)
      ]
    },
    {
      id: 3,
      q: "여행지에서 우연히 발견한 맛집, 줄이 1시간이나 길다면?",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      a: [
        { text: "이걸 먹으러 왔다! 끝까지 기다려 인증샷을 남긴다", type: "SWEET" },
        { text: "줄 서는 건 딱 질색. 근처에 사람 적고 편한 곳으로 간다", type: "DAILY" }
      ]
    },
    {
      id: 4,
      q: "당신의 '소울 푸드'가 갖춰야 할 가장 중요한 덕목은?",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      a: [
        { text: "먹자마자 땀이 쫙 나며 도파민이 터지는 강렬함", type: "SPICY" },
        { text: "부모님의 손맛처럼 언제 먹어도 마음이 편해지는 든든함", type: "K-SOUL" }
      ]
    },
    {
      id: 5,
      q: "주변 친구들이 말하는 당신의 평소 입맛은?",
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600",
      a: [
        { text: "새로운 건 무조건 먹어봐야 하는 얼리어답터 입맛", type: "SPICY" },
        { text: "먹던 것만 먹는 지조 있는 '한 우물' 입맛", type: "K-SOUL" }
      ]
    }
  ],

  results: {
    "K-SOUL": {
      name: "든든함이 최고! '평생 삼겹살&국밥권'",
      desc: "당신은 뼛속까지 한국인! 격렬한 업무 뒤에 먹는 고기 한 점과 뜨끈한 국밥 한 그릇이 당신의 원동력입니다. 당신에겐 유행하는 음식보다 오랜 시간 검증된 '아는 맛'이 최고의 힐링이죠. 오늘 저녁도 든든하게 한 끼 어떠세요?",
      img: "https://images.unsplash.com/photo-1594000199109-5a9e937599ae?w=400",
      ctaText: "🥩 오늘 회식은 여기! 맛집 리스트 보기",
      affiliateLink: "https://play.ranklamp.com/soul-food-meat"
    },
    SPICY: {
      name: "도파민 대폭발! '평생 마라탕&떡볶이권'",
      desc: "지루한 건 못 참아! 화끈한 매운맛으로 스트레스를 박살 내는 당신은 열정적인 에너지의 소유자입니다. 혈중 마라 농도를 유지해야 직성이 풀리는 당신, 당신의 소울 푸드는 언제나 붉고 강렬합니다!",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
      ctaText: "🌶️ 맵부심 폭발! 전국 매운맛 지도 확인",
      affiliateLink: "https://play.ranklamp.com/soul-food-spicy"
    },
    DAILY: {
      name: "질리지 않는 단짝 '평생 라면&김밥권'",
      desc: "가장 단순한 것이 가장 위대한 법! 당신은 소박하지만 확실한 행복을 아는 사람입니다. 화려한 요리보다 출출할 때 먹는 라면 한 그릇에 진심으로 감동하곤 하죠. 어떤 상황에서도 기복 없는 당신의 성격과 참 닮은 메뉴네요.",
      img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400",
      ctaText: "🍜 한정판 라면/간편식 특가 구경하기",
      affiliateLink: "https://play.ranklamp.com/soul-food-daily"
    },
    SWEET: {
      name: "인생은 달콤하게 '평생 디저트&커피권'",
      desc: "당신에게 식사는 단순히 배를 채우는 행위 그 이상, '기분 전환'입니다. 예쁜 비주얼과 달콤한 한 입을 위해 웨이팅도 마다하지 않는 당신! 당신의 인생도 이 디저트들처럼 언제나 달콤하고 향긋하길 바랄게요.",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
      ctaText: "🍰 눈과 입이 즐거운 '핫플' 카페 예약",
      affiliateLink: "https://play.ranklamp.com/soul-food-sweet"
    }
  }
};