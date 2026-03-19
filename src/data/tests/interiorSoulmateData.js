export const interiorSoulmateData = {
  isReady: false,
  title: "침대 옆 인테리어 소울메이트",
  subTitle: "나의 라이프스타일과 딱 맞는 '침대 옆 감성템'은?",
  mainImg: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800", // 따뜻하고 포근한 침실 이미지
  questions: [
    {
      q: "드디어 꿀 같은 퇴근! 집에 돌아온 당신이 가장 먼저 하는 일은?",
      img: "https://images.unsplash.com/photo-1554441512-3004354226f3?w=600",
      a: [
        { text: "일단 침대에 다이빙! 폰 보면서 뒹굴거리기", type: "cozy" },
        { text: "깨끗하게 씻고 향초 하나 켜며 하루 정리하기", type: "minimal" }
      ]
    },
    {
      q: "잠들기 직전, 당신의 침대 머리맡 분위기는 어떤가요?",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
      a: [
        { text: "따뜻한 노란 조명 아래 책 한 권과 안경", type: "classic" },
        { text: "최신 가습기와 스마트 워치가 충전되는 하이테크존", type: "modern" }
      ]
    },
    {
      q: "꿈꾸던 주말 아침! 당신의 창밖 풍경으로 고른다면?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "초록초록한 나무들이 바람에 흔들리는 숲 뷰", type: "cozy" },
        { text: "탁 트인 도시의 세련된 시티 뷰", type: "modern" }
      ]
    },
    {
      q: "인테리어 소품을 고를 때 당신의 최우선 기준은?",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
      a: [
        { text: "무조건 예뻐야 함! 존재감 뿜뿜하는 디자인", type: "classic" },
        { text: "군더더기 없는 깔끔함과 확실한 기능성", type: "minimal" }
      ]
    },
    {
      q: "자기 전, 당신이 가장 즐겨 듣는 소리는 무엇인가요?",
      img: "https://images.unsplash.com/photo-1519834125788-2f9444481707?w=600",
      a: [
        { text: "마음이 편해지는 백색소음이나 빗소리", type: "minimal" },
        { text: "좋아하는 가수나 유튜버의 목소리", type: "cozy" }
      ]
    },
    {
      q: "당신이 생각하는 '진정한 휴식'이란?",
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?w=600",
      a: [
        { text: "좋아하는 것들에 둘러싸인 아늑한 시간", type: "classic" },
        { text: "복잡한 생각 없이 멍하니 비워내는 시간", type: "modern" }
      ]
    }
  ],
  results: {
    cozy: {
      name: "몽글몽글 구름 위, 버섯 무드등",
      img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600",
      desc: "당신은 포근하고 아늑한 분위기에서 에너지를 얻는 '집순이/집돌이' 끝판왕! 몽글몽글한 디자인의 버섯 단스탠드가 당신의 침실을 더욱 동화 속 한 장면처럼 만들어줄 거예요. 은은한 불빛 아래서 좋아하는 숏폼을 보면 그게 바로 천국이죠!",
      affiliateLink: "https://link.coupang.com/a/mushroom-lamp", 
      ctaText: "내 방 무드 업! 감성 버섯 조명 구경하기"
    },
    minimal: {
      name: "군더더기 제로, 미니멀 가습기",
      img: "https://images.unsplash.com/photo-1585771724684-26a6a4c6aa62?w=600",
      desc: "복잡한 건 딱 질색! 당신은 정돈된 공간에서 심리적 안정감을 느끼는 완벽주의자 스타일이네요. 침대 옆, 깔끔한 화이트 톤의 가습기나 오브제가 당신의 숙면을 도와줄 거예요. 비워낼수록 채워지는 당신의 감각, 멋져요!",
      affiliateLink: "https://link.coupang.com/a/minimal-humidifier", 
      ctaText: "쾌적한 숙면을 위한 미니멀 가습기 보기"
    },
    classic: {
      name: "시간이 멈춘 듯한, 원목 매거진 랙",
      img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600",
      desc: "당신은 유행을 타지 않는 클래식함과 아날로그 감성을 사랑하는 낭만주의자군요! 침대 옆, 읽다 만 책들이 꽂힌 따뜻한 우드 매거진 랙은 당신의 취향을 가장 잘 보여주는 소울메이트가 될 거예요. 향긋한 커피 한 잔과 함께 밤을 지새워보세요.",
      affiliateLink: "https://link.coupang.com/a/wood-magazine-rack", 
      ctaText: "감성 한 스푼, 원목 매거진 랙 확인하기"
    },
    modern: {
      name: "세련된 도시의 밤, 스마트 스피커",
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
      desc: "세련된 시티 라이프를 즐기는 당신! 기능과 디자인을 모두 잡은 스마트 스피커나 모던한 시계가 당신의 소울메이트입니다. 깔끔한 직선 라인이 돋보이는 소품들은 당신의 효율적인 라이프스타일을 더욱 빛나게 해줄 거예요. 오늘 밤엔 어떤 음악을 예약할까요?",
      affiliateLink: "https://link.coupang.com/a/smart-speaker", 
      ctaText: "삶의 질 수직 상승! 스마트 인테리어템 보기"
    }
  }
};