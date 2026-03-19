export const reincarnatedFoodData = {
  isReady: false,
  title: "나의 전생 '음식' 테스트: 당신은 어떤 맛이었을까?",
  subTitle: "영혼의 깊은 맛을 찾아 떠나는 미식 여행, 당신의 본질은?",
  mainImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800", // 화려하고 먹음직스러운 만찬 이미지
  questions: [
    {
      q: "스트레스가 정수리까지 차오른 날, 당신을 구원할 첫 입은?",
      img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600",
      a: [
        { text: "뇌가 짜릿해질 정도로 화끈하고 강렬한 '매운맛'", type: "hot" },
        { text: "입안을 부드럽게 감싸며 마음을 녹이는 '포근한 맛'", type: "soft" }
      ]
    },
    {
      q: "당신의 평소 성격과 가장 닮은 식감은?",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      a: [
        { text: "첫 만남부터 임팩트 있는 '바삭함과 쫄깃함'", type: "hot" },
        { text: "은은하게 스며들어 여운이 남는 '담백함과 깊은 맛'", type: "classic" }
      ]
    },
    {
      q: "친구들과의 모임에서 당신은 어떤 존재인가요?",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      a: [
        { text: "분위기를 확 달궈주는 '주인공 메인 메뉴'", type: "hot" },
        { text: "없으면 허전하고 자꾸 손이 가는 '마성의 사이드 메뉴'", type: "classic" }
      ]
    },
    {
      q: "당신이 사랑을 고백할 때의 온도는?",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      a: [
        { text: "갓 구워낸 빵처럼 '따끈따끈하고 달콤한' 온도", type: "soft" },
        { text: "냉면 육수처럼 '깔끔하고 뒤끝 없는' 온도", type: "classic" }
      ]
    },
    {
      q: "인생의 좌우명을 음식으로 표현한다면?",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
      a: [
        { text: "인생은 짧다! 짧고 굵게 '자극적으로'!", type: "hot" },
        { text: "오래 보아야 맛있다! '깊고 진하게'!", type: "classic" }
      ]
    }
  ],
  results: {
    hot: {
      name: "스트레스 브레이커, '치명적인 마라탕'",
      img: "https://images.unsplash.com/photo-1623595110708-76b2f8d3384e?w=600",
      desc: "당신은 한 번 빠지면 헤어 나올 수 없는 중독성 갑, 마라탕 같은 존재군요! 강렬한 첫인상 뒤에 숨겨진 깊은 육수의 맛처럼, 당신과 대화할수록 사람들은 당신의 알싸한 매력에 중독됩니다. 오늘 저녁, 당신의 뜨거운 열정을 마라탕으로 불태워보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/maratang-kit", 
      ctaText: "집에서 즐기는 초간편 마라탕 밀키트"
    },
    soft: {
      name: "구름 한 입의 위로, '폭신폭신 수플레 팬케이크'",
      img: "https://images.unsplash.com/photo-1528207772081-41710ecf797d?w=600",
      desc: "당신은 존재만으로 주변을 몽글몽글하게 만드는 수플레 팬케이크 같은 사람이에요. 입안에서 사르르 녹는 달콤함처럼, 당신의 다정함은 지친 사람들의 마음을 치유해줍니다. 당신의 부드러운 감성을 닮은 달콤한 디저트 타임을 가져보세요.",
      affiliateLink: "https://link.coupang.com/a/pancake-mix-set", 
      ctaText: "브런치 카페 부럽지 않은 팬케이크 믹스 세트"
    },
    classic: {
      name: "질리지 않는 인생의 동반자, '겉바속촉 고등어구이'",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600",
      desc: "화려하진 않아도 언제나 식탁의 중심을 지키는 고등어구이 같은 당신! 겉은 단단하고 야무지지만 속은 누구보다 촉촉하고 담백한 매력을 가졌네요. 오랫동안 곁에 두고 싶은 진국인 당신에게는 따뜻한 집밥 한 끼가 최고의 선물입니다.",
      affiliateLink: "https://link.coupang.com/a/grilled-fish-pack", 
      ctaText: "냄새 걱정 없는 간편 고등어 구이 팩"
    }
  }
};