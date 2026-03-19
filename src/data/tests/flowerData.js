export const flowerData = {
  isReady: false,
  id: "flower",
  title: "나에게 어울리는 봄꽃 찾기",
  subTitle: "내 성향에 딱 맞는 봄맞이 추천 아이템까지 확인하세요!",

  mainImg: "/images/flower-main.jpg",
 
  questions: [
    {
      id: 1,
      q: "따스한 햇살이 비치는 주말 아침, 당신의 행동은?",
      img: "/images/q1.jpg",
      a: [
        { text: "커튼을 활짝 열고 신나는 음악을 튼다", type: "SUN" }, // 해바라기(활기)
        { text: "조용한 음악과 함께 차 한 잔의 여유를 즐긴다", type: "SUE" } // 수선화(차분)
      ]
    },
    {
      id: 2,
      q: "방 분위기를 바꾸고 싶을 때, 가장 먼저 하는 고민은?",
      img: "/images/q2.jpg",
      a: [
        { text: "포인트를 줄 수 있는 화려한 소품 찾기", type: "SUN" },
        { text: "깔끔하고 심플한 미니멀리즘 가구 배치", type: "SUE" }
      ]
    },
    {
      id: 3,
      q: "쇼핑할 때 당신의 스타일은?",
      img: "/images/q3.jpg",
      a: [
        { text: "실용성보다는 디자인과 내 취향이 우선!", type: "FRE" }, // 프리지아(감성)
        { text: "가성비와 후기를 꼼꼼히 따져본 뒤 구매!", type: "MIN" } // 민들레(자유/실용)
      ]
    },
    {
      id: 4,
      q: "친구에게 줄 선물을 고른다면 어떤 것이 좋을까요?",
      img: "/images/q4.jpg",
      a: [
        { text: "누구나 좋아할 만한 베스트셀러 상품", type: "LIL" }, // 라일락(무난/대중)
        { text: "그 친구만을 위한 특별하고 유니크한 소품", type: "FRE" }
      ]
    },
    {
      id: 5,
      q: "나에게 주는 최고의 보상은?",
      img: "/images/q5.jpg",
      a: [
        { text: "밖에서 즐기는 맛있는 음식과 쇼핑", type: "SUN" },
        { text: "집에서 즐기는 포근한 휴식과 독서", type: "SUE" }
      ]
    }
  ],
  results: {
    SUN: {
      name: "에너제틱 해바라기",
      desc: "당신은 공간에 생기를 불어넣는 긍정의 아이콘! 화사한 노란색 포인트 인테리어와 에너지를 채워줄 비타민이 최고의 조합입니다.",
      img: "/images/flower1.jpg",
      ctaText: "🌻 화사한 봄 인테리어 소품 보러가기",
      affiliateLink: "https://yourblog.com/bright-interior-top10"
    },
    SUE: {
      name: "차분한 수선화",
      desc: "내면의 평온을 중시하는 당신에게는 미니멀한 데스크테리어와 차분한 우디향 디퓨저를 추천합니다.",
      img: "/images/flower2.jpg",
      ctaText: "🕯️ 집중력을 높이는 데스크 아이템 확인",
      affiliateLink: "https://yourblog.com/minimal-desk-items"
    },
    FRE: {
      name: "감성 가득 프리지아",
      desc: "예술적 감각이 뛰어난 당신! 봄의 향기를 담은 니치 향수와 무드 있는 조명이 당신의 감성을 완성해 줄 거예요.",
      img: "/images/flower3.jpg",
      ctaText: "💖 내 감성을 채워줄 니치 향수 TOP 5",
      affiliateLink: "https://yourblog.com/spring-perfume"
    },
    MIN: {
      name: "자유로운 민들레",
      desc: "실용성과 활동성을 겸비한 당신! 어디든 가볍게 떠날 수 있는 슬링백과 봄나들이 캠핑 용품이 최고의 선택입니다.",
      img: "/images/flower4.jpg",
      ctaText: "🎒 가벼운 봄나들이 필수템 리스트",
      affiliateLink: "https://yourblog.com/spring-picnic"
    },
    LIL: {
      name: "은은한 라일락",
      desc: "누구에게나 사랑받는 은은한 매력의 소유자! 대중적이면서도 퀄리티 높은 프리미엄 바디케어 세트로 힐링해 보세요.",
      img: "/images/flower5.jpg",
      ctaText: "🛁 선물하기 좋은 바디케어 베스트 상품",
      affiliateLink: "https://yourblog.com/body-care-gift"
    }
  }
};