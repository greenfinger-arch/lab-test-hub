export const secretHideoutData = {
  isReady: false,
  title: "나만의 '비밀 아지트' 찾기: 영혼이 쉬어가는 곳",
  subTitle: "세상의 소음을 잠시 끄고, 당신의 영혼이 가고 싶어 하는 그곳으로.",
  mainImg: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800", // 창가에 놓인 차 한 잔과 책
  questions: [
    {
      q: "무거운 외투를 벗듯 일상의 걱정을 내려놓고 싶을 때, 당신이 떠올리는 '소리'는?",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      a: [
        { text: "나뭇잎을 스치는 고요한 바람 소리와 새소리", type: "forest-cabin" },
        { text: "일정한 리듬으로 밀려왔다 멀어지는 파도 소리", type: "ocean-breeze" }
      ]
    },
    {
      q: "아무도 모르는 아지트의 문을 열었을 때, 당신을 반기는 '향기'는?",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
      a: [
        { text: "오래된 책장에서 나는 포근하고 쌉싸름한 종이 냄새", type: "vintage-library" },
        { text: "갓 구운 빵과 진한 커피가 어우러진 고소한 향기", type: "small-cafe" }
      ]
    },
    {
      q: "그곳에서 당신은 어떤 '빛' 아래 머물고 싶나요?",
      img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=600",
      a: [
        { text: "창밖에서 쏟아져 들어오는 눈부신 정오의 햇살", type: "ocean-breeze" },
        { text: "타오르는 장작불이 만드는 붉고 따뜻한 일렁임", type: "forest-cabin" }
      ]
    },
    {
      q: "오직 당신만을 위해 준비된 '의자'는 어떤 모습인가요?",
      img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600",
      a: [
        { text: "온몸을 깊숙이 파묻을 수 있는 푹신한 1인용 소파", type: "vintage-library" },
        { text: "흔들거리며 리듬을 탈 수 있는 나무 흔들의자", type: "forest-cabin" }
      ]
    },
    {
      q: "이곳에서 머무는 시간 동안, 당신이 가장 하고 싶은 일은?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "아무 생각 없이 창밖을 보며 멍하니 시간을 보내기", type: "ocean-breeze" },
        { text: "그동안 미뤄왔던 나만의 기록을 일기에 남겨보기", type: "vintage-library" }
      ]
    }
  ],
  results: {
    "forest-cabin": {
      name: "깊은 숲속, '장작 타는 소리가 들리는 오두막'",
      img: "https://images.unsplash.com/photo-1449156006053-d7c3cf391ca3?w=600",
      desc: "당신의 영혼은 지금 완전한 고립과 안정이 필요하군요. 문명과 멀어진 숲속 오두막에서 타오르는 모닥불을 바라보며(불멍), 오직 나 자신의 호흡에 집중할 때 비로소 치유를 얻습니다. 이곳에선 그 누구도 당신을 방해할 수 없어요. 당신은 안전합니다.",
      affiliateLink: "https://link.coupang.com/a/wood-fire-incense-sticks", 
      ctaText: "방 안에서 즐기는 불멍, 장작 향 인센스 스틱"
    },
    "ocean-breeze": {
      name: "지평선 끝, '파도가 머무는 하얀 테라스'",
      img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
      desc: "답답한 일상에서 벗어나 탁 트인 개방감을 갈구하고 계시네요. 끝없이 펼쳐진 바다를 보며 마음속 찌꺼기들을 파도에 씻어 보낼 때 영혼이 깨어납니다. 짠 내 섞인 바람과 따가운 햇살이 당신의 지친 의욕을 다시금 충전해 줄 거예요.",
      affiliateLink: "https://link.coupang.com/a/ocean-scented-candle-large", 
      ctaText: "바다의 향기를 담은 대용량 소이 캔들"
    },
    "vintage-library": {
      name: "시간이 멈춘, '오래된 비밀 서재'",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600",
      desc: "지적이고 차분한 휴식을 선호하는 당신. 빼곡한 책들과 나무 냄새가 가득한 서재는 당신의 가장 완벽한 피난처입니다. 누군가가 남긴 문장 속에서 내 고민의 해답을 찾고, 조용히 사색하며 나 자신을 재정립할 때 가장 큰 위안을 얻습니다.",
      affiliateLink: "https://link.coupang.com/a/premium-wooden-book-stand", 
      ctaText: "사색의 시간을 돕는 원목 독서대"
    },
    "small-cafe": {
      name: "비 오는 날의, '나만 아는 골목 카페'",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
      desc: "적당한 소음과 따뜻한 온기 속에서 편안함을 느끼는 타입이군요. 빗소리가 들리는 창가 자리, 은은한 음악, 그리고 한 잔의 커피만 있다면 세상 부러울 게 없습니다. 혼자이지만 고립되지는 않은 그 절묘한 거리감이 당신의 지친 마음을 다정하게 감싸줄 거예요.",
      affiliateLink: "https://link.coupang.com/a/drip-coffee-starter-kit", 
      ctaText: "집에서도 카페 무드, 핸드드립 스타터 세트"
    }
  }
};