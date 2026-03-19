export const marriedCouplesNightData = {
  isReady: false,
  title: "우리 부부의 '밤의 온도' 테스트: 불꽃 vs 난로",
  subTitle: "아이들이 잠든 뒤, 우리만의 은밀하고 뜨거운 온도를 측정해 보세요.",
  mainImg: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?w=800", // 붉은 와인 잔과 촛불이 켜진 분위기 있는 사진
  questions: [
    {
      q: "아이들이 드디어 잠들었습니다. 거실에서 연인(배우자)을 바라보는 당신의 눈빛은?",
      img: "https://images.unsplash.com/photo-1518101642274-1f9947844002?w=600",
      a: [
        { text: "오늘만을 기다렸다! 강렬하게 타오르는 '사냥꾼'의 눈빛", type: "volcano" },
        { text: "오늘 하루도 고생했어, 편안하게 쉬고 싶은 '안식처'의 눈빛", type: "fireplace" }
      ]
    },
    {
      q: "당신이 생각하는 가장 완벽한 밤의 분위기는?",
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600",
      a: [
        { text: "빠르고 강렬한 비트의 음악처럼 열정적인 분위기", type: "volcano" },
        { text: "은은한 재즈와 아로마 향초가 흐르는 로맨틱한 분위기", type: "aroma" }
      ]
    },
    {
      q: "배우자가 슬쩍 당신의 허리를 감싸 안는다면, 당신의 반응은?",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600",
      a: [
        { text: "기다렸다는 듯 더 깊은 스킨십으로 응답한다.", type: "volcano" },
        { text: "그대로 기대어 체온을 느끼며 나긋나긋한 대화를 나눈다.", type: "fireplace" }
      ]
    },
    {
      q: "침실에서 당신을 가장 설레게 하는 배우자의 모습은?",
      img: "https://images.unsplash.com/photo-1520113232655-6b1d2f74468d?w=600",
      a: [
        { text: "평소와는 다른 과감하고 도발적인 옷차림과 행동", type: "volcano" },
        { text: "샤워 후 은은한 비누 향기를 풍기며 다가오는 청초한 모습", type: "aroma" }
      ]
    },
    {
      q: "내일은 주말! 오늘 밤 당신의 '에너지' 잔량은?",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      a: [
        { text: "밤새도록 이야기를 나눠도 모자란 무한 동력!", type: "aroma" },
        { text: "에너지는 방전됐지만, 배우자의 손길로 충전받고 싶다.", type: "fireplace" }
      ]
    }
  ],
  results: {
    volcano: {
      name: "멈출 수 없는 용암, '화산 폭발'형",
      img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
      desc: "두 분의 밤은 그 어떤 화산보다 뜨겁군요! 신혼 시절의 열정이 여전히 식지 않은 '에너자이저 부부'입니다. 서로를 향한 갈망이 강렬하며, 익숙함 속에서도 늘 새로운 자극을 찾아내는 본능적인 타입이죠. 오늘 밤, 침실의 에어컨 온도를 미리 낮춰두셔야겠어요!",
      affiliateLink: "https://link.coupang.com/a/red-wine-set-premium", 
      ctaText: "열정을 더해줄 프리미엄 레드 와인 세트"
    },
    fireplace: {
      name: "포근하고 깊은 온기, '벽난로'형",
      img: "https://images.unsplash.com/photo-1542372254-ca798363768b?w=600",
      desc: "자극적인 불꽃보다 은은하게 오래가는 온기가 소중한 부부입니다. 격정적인 스킨십보다 서로의 심장 소리를 들으며 나누는 포옹에서 깊은 사랑을 느끼시네요. 화려하진 않지만 세상에서 가장 안락한 안식처 같은 관계! 벽난로처럼 서로를 따뜻하게 데워주는 밤이 계속될 거예요.",
      affiliateLink: "https://link.coupang.com/a/hotel-grade-bedding-set", 
      ctaText: "안락함을 극대화할 80수 호텔 침구 세트"
    },
    aroma: {
      name: "감각을 깨우는 향기, '아로마 캔들'형",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600",
      desc: "분위기와 무드를 가장 중요시하는 로맨틱 부부! 섬세한 손길과 다정한 대화, 은은한 향기가 어우러질 때 두 분의 사랑은 완성됩니다. 단순히 신체적인 교감을 넘어 영혼까지 소통하는 높은 수준의 교감을 나누고 계시군요. 오늘 밤은 아로마 조명을 켜고 깊은 대화에 빠져보세요.",
      affiliateLink: "https://link.coupang.com/a/scented-candle-warmer", 
      ctaText: "밤의 무드를 완성하는 캔들 워머 세트"
    }
  }
};