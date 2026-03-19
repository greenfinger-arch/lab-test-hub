export const firstPageMemoryData = {
  isReady: false,
  title: "우리의 '첫 페이지' 복원하기: 그때 그 온도 기억나?",
  subTitle: "먼지 쌓인 기억 속에서 우리가 처음 사랑에 빠진 순간을 꺼내보세요.",
  mainImg: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=800", // 오래된 책 사이에 말린 꽃이나 흑백 사진
  questions: [
    {
      q: "상대방을 처음 만났던 날, 가장 기억에 남는 '첫 이미지'는 무엇인가요?",
      img: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?w=600",
      a: [
        { text: "왠지 모를 긴장감 속에 빛나던 상대방의 눈빛", type: "watercolor" },
        { text: "그날의 공기, 그리고 스치듯 느껴진 은은한 향기", type: "film-noir" }
      ]
    },
    {
      q: "우리의 첫 데이트, 당신의 마음을 가장 어지럽혔던 고민은?",
      img: "https://images.unsplash.com/photo-1529111462002-ad9990176883?w=600",
      a: [
        { text: "무슨 말을 해야 할까? 어색한 침묵이 흐를까 봐 걱정했다.", type: "watercolor" },
        { text: "어디를 가야 할까? 당신에게 완벽한 하루를 선물하고 싶었다.", type: "classic-novel" }
      ]
    },
    {
      q: "처음 손을 잡았던 순간, 당신의 체온은 어떠했나요?",
      img: "https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=600",
      a: [
        { text: "심장 소리가 손바닥까지 전달될 듯 뜨겁고 떨렸다.", type: "classic-novel" },
        { text: "차갑게 식은 손이었지만, 당신이 잡아준 순간 비로소 따뜻해졌다.", type: "film-noir" }
      ]
    },
    {
      q: "서로의 마음을 확인했던 첫 고백의 장면, 어떤 배경음악이 흐르나요?",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600",
      a: [
        { text: "가슴 벅찬 클라이맥스로 향하는 웅장한 오케스트라", type: "classic-novel" },
        { text: "빗소리와 어우러지는 나직하고 담백한 어쿠스틱 기타", type: "watercolor" }
      ]
    },
    {
      q: "시간이 흐른 지금, 그때의 우리를 떠올리면 어떤 기분이 드나요?",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      a: [
        { text: "다시 돌아갈 순 없지만, 생각만으로 웃음 짓게 되는 소중함", type: "watercolor" },
        { text: "그때보다 더 깊어진 지금의 우리가 대견하고 고마운 마음", type: "film-noir" }
      ]
    }
  ],
  results: {
    watercolor: {
      name: "번질수록 아름다운 '수채화' 같은 첫사랑",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      desc: "두 분의 시작은 맑은 물에 물감이 스며들 듯 투명하고 예뻤군요. 서툴러서 더 소중했던 그 시절의 온도가 지금도 당신들의 밑바탕이 되어주고 있습니다. 가끔 현실에 지칠 때, 서로의 얼굴을 가만히 들여다보세요. 그날의 수줍은 소년, 소녀가 여전히 거기 있을 거예요.",
      affiliateLink: "https://link.coupang.com/a/watercolor-painting-kit", 
      ctaText: "그날의 색깔을 담아, 커플 수채화 세트"
    },
    "film-noir": {
      name: "짙은 여운을 남기는 '고전 영화' 같은 인연",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
      desc: "비 오는 밤의 가로등처럼, 두 분의 만남은 드라마틱하고 깊은 여운을 가졌네요. 첫 만남의 긴장과 쌉싸름한 설렘이 쌓여 지금의 단단한 신뢰가 되었습니다. 화려한 색채는 아닐지 몰라도, 흑백 필름처럼 시간이 지날수록 클래식한 멋이 더해지는 아주 특별한 관계입니다.",
      affiliateLink: "https://link.coupang.com/a/vintage-film-camera", 
      ctaText: "지금의 우리를 기록해, 빈티지 필름 카메라"
    },
    "classic-novel": {
      name: "문장마다 숨이 멎는 '명작 소설' 같은 운명",
      img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600",
      desc: "첫눈에 반했거나, 혹은 지독하게 얽힐 수밖에 없었던 운명적인 시작! 두 분의 첫 페이지는 강렬한 문장들로 가득 차 있습니다. 뜨거웠던 고백과 벅찼던 약속들을 기억하시나요? 당신들은 서로의 인생이라는 책에서 가장 아름다운 챕터를 함께 써 내려가는 중입니다.",
      affiliateLink: "https://link.coupang.com/a/custom-leather-diary", 
      ctaText: "다음 장을 기록하자, 수제 가죽 다이어리"
    }
  }
};