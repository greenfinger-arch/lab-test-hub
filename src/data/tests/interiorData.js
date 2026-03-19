export const interiorData = {
  isReady: false,
  id: "interior",
  title: "내가 만약 공간이라면? 나의 '무드 인테리어' 테스트",
  subTitle: "나의 성격과 취향이 하나의 방이 된다면 어떤 모습일까요? 당신의 내면이 머물고 싶은 공간을 찾아드립니다.",
  mainImg: "/images/interior-main.jpg", // 직접 준비하실 메인 이미지 경로

  questions: [
    {
      id: 1,
      q: "주말 오후, 당신이 꿈꾸는 가장 완벽한 휴식은?",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
      a: [
        { text: "햇살이 잘 드는 창가에서 차를 마시는 고요한 시간", type: "NATURAL" }, // 내추럴/우드
        { text: "세련된 조명 아래서 좋아하는 음악을 크게 틀어놓는 시간", type: "MODERN" } // 모던/미드센추리
      ]
    },
    {
      id: 2,
      q: "방에 놓을 단 하나의 가구를 고른다면?",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
      a: [
        { text: "세월의 흔적이 느껴지는 따뜻한 질감의 나무 탁자", type: "NATURAL" },
        { text: "강렬한 컬러와 독특한 실루엣의 금속 소재 체어", type: "VIVID" } // 비비드/팝
      ]
    },
    {
      id: 3,
      q: "어질러진 물건들을 정리할 때 당신의 스타일은?",
      img: "https://images.unsplash.com/photo-1594404322491-094ec894297a?w=600",
      a: [
        { text: "안 보이는 수납함에 모두 넣어 깔끔한 여백을 만든다", type: "MINIMAL" }, // 미니멀/화이트
        { text: "예쁜 소품들을 보기 좋게 진열하며 분위기를 바꾼다", type: "VIVID" }
      ]
    },
    {
      id: 4,
      q: "여행지에서 숙소를 고를 때 가장 먼저 보는 것은?",
      img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
      a: [
        { text: "호텔처럼 군더더기 없고 정갈한 공간인가?", type: "MINIMAL" },
        { text: "그 지역의 감성과 개성이 듬뿍 담긴 공간인가?", type: "MODERN" }
      ]
    },
    {
      id: 5,
      q: "비가 오는 날, 당신의 방에 더 어울리는 향기는?",
      img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=600",
      a: [
        { text: "비 젖은 흙과 숲의 내음이 나는 우디향", type: "NATURAL" },
        { text: "세련되고 묵직한 가죽과 머스크 계열의 향", type: "MODERN" }
      ]
    },
    {
      id: 6,
      q: "당신의 삶에서 더 중요하다고 생각하는 가치는?",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      a: [
        { text: "편안함과 안정, 몸과 마음의 휴식", type: "NATURAL" },
        { text: "자기표현과 창의성, 감각적인 자극", type: "VIVID" }
      ]
    }
  ],

  results: {
    NATURAL: {
      name: "다정한 숲의 숨결, '웜 우디 스테이'",
      desc: "당신은 존재만으로 주변을 편안하게 만드는 사람입니다. 자연의 질감을 살린 원목 가구와 초록색 식물이 어우러진 공간이 당신을 닮았네요. 마음을 차분하게 해주는 라탄 소품과 베이지 톤의 패브릭으로 당신만의 안식처를 꾸며보세요.",
      img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=400",
      ctaText: "🌿 편안한 휴식을 위한 우드 소품 보기",
      affiliateLink: "https://play.ranklamp.com/interior-natural"
    },
    MODERN: {
      name: "시간을 앞서가는 세련미, '미드센추리 라운지'",
      desc: "당신은 확고한 취향과 예술적 감각을 가진 사람입니다. 직선과 곡선이 조화를 이루는 스틸 소재 가구와 힙한 조명이 있는 세련된 바(Bar) 같은 공간이 당신에게 어울립니다. 모던한 포스터 한 장만으로도 당신의 공간은 완벽해질 거예요.",
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
      ctaText: "🛋️ 힙한 공간의 완성! 인테리어 조명 보기",
      affiliateLink: "https://play.ranklamp.com/interior-modern"
    },
    MINIMAL: {
      name: "여백의 미가 흐르는 고요함, '정갈한 화이트 큐브'",
      desc: "당신은 복잡한 일상 속에서도 핵심을 놓치지 않는 명확한 사람입니다. 불필요한 장식을 덜어내고 빛과 공기만으로 가득 찬 깨끗한 공간이 당신의 정체성을 보여줍니다. 화이트 톤의 가구와 은은한 간접 조명으로 머릿속까지 맑아지는 공간을 만들어보세요.",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400",
      ctaText: "📏 여백을 만드는 마법, 수납/정리템 보기",
      affiliateLink: "https://play.ranklamp.com/interior-minimal"
    },
    VIVID: {
      name: "에너지가 톡톡 튀는 갤러리, '컬러풀 팝 스튜디오'",
      desc: "당신은 어디서나 주인공이 되는 생동감 넘치는 사람입니다. 과감한 원색의 포인트 벽지나 독특한 소품들이 가득한 팝아트 갤러리 같은 공간이 당신을 완벽하게 표현합니다. 정형화되지 않은 비정형 거울이나 알록달록한 쿠션으로 당신의 에너지를 발산해 보세요!",
      img: "https://images.unsplash.com/photo-1550583724-b26cc28df5d1?w=400",
      ctaText: "🎨 분위기 반전! 유니크한 소품 쇼핑하기",
      affiliateLink: "https://play.ranklamp.com/interior-vivid"
    }
  }
};