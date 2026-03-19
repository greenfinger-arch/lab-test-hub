export const myCafeData = {
  isReady: false,
  title: "퇴사 후 내가 차릴 카페는?",
  subTitle: "내 취향이 머무는 곳, 어떤 공간이 탄생할까요?",
  mainImg: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800", // 따뜻한 카페 전경
  questions: [
    {
      q: "카페를 열기 위해 가장 먼저 고민하는 것은?",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      a: [
        { text: "사람들이 북적이는 도심 속 세련된 공간", type: "urban" },
        { text: "골목길 끝, 조용하고 아늑한 나만의 아지트", type: "cozy" }
      ]
    },
    {
      q: "우리 카페의 시그니처 메뉴를 고른다면?",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600",
      a: [
        { text: "기본에 충실한, 풍미 깊은 핸드드립 커피", type: "classic" },
        { text: "눈과 입이 즐거운 화려한 비주얼의 디저트", type: "creative" }
      ]
    },
    {
      q: "가장 신경 써서 고를 인테리어 요소는?",
      img: "https://images.unsplash.com/photo-1511914265872-c40672604a80?w=600",
      a: [
        { text: "햇살이 잘 드는 커다란 통창과 식물들", type: "cozy" },
        { text: "모던하고 감각적인 가구와 은은한 조명", type: "urban" }
      ]
    },
    {
      q: "손님이 카페에 머물 때 어떤 기분을 느끼길 바라나요?",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
      a: [
        { text: "바쁜 일상 속에서 찾는 잠깐의 쉼표", type: "classic" },
        { text: "새로운 영감과 에너지가 샘솟는 공간", type: "creative" }
      ]
    },
    {
      q: "카페에서 흘러나올 배경 음악은 어떤 스타일인가요?",
      img: "https://images.unsplash.com/photo-1514525253361-b83a65c0d7c0?w=600",
      a: [
        { text: "마음이 차분해지는 잔잔한 재즈나 클래식", type: "classic" },
        { text: "리듬감이 느껴지는 세련된 팝이나 인디 음악", type: "creative" }
      ]
    },
    {
      q: "퇴사 후 첫 출근 날, 당신의 기분은?",
      img: "https://images.unsplash.com/photo-1507133366044-c99fb27e1e03?w=600",
      a: [
        { text: "드디어 내 공간이 생겼다는 벅찬 설렘", type: "urban" },
        { text: "조금은 걱정되지만 자유로운 평온함", type: "cozy" }
      ]
    }
  ],
  results: {
    urban: {
      name: "세련된 감각, '오버 더 윈도우(Over the Window)'",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
      desc: "당신은 트렌디하고 세련된 감각을 지닌 도시의 카페 주인! 모던한 인테리어와 감각적인 음악이 흐르는 '오버 더 윈도우'는 힙스터들의 성지가 될 거예요. 사람들에게 영감을 주는 멋진 공간을 운영하는 당신의 모습, 정말 근사하지 않나요?",
      affiliateLink: "https://link.coupang.com/a/espresso-machine", 
      ctaText: "홈카페의 완성! 전문가용 에스프레소 머신 보기"
    },
    cozy: {
      name: "다정한 쉼표, '숲속의 오후'",
      img: "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=600",
      desc: "당신은 따뜻한 성품과 다정함을 지닌 아늑한 공간의 주인! '숲속의 오후'는 지친 사람들이 찾아와 위로를 얻는 소중한 아지트가 될 거예요. 향긋한 차 한 잔과 당신의 친절한 미소라면, 그 어떤 대형 카페도 부럽지 않은 최고의 공간이 될 겁니다.",
      affiliateLink: "https://link.coupang.com/a/wood-tray", 
      ctaText: "감성을 더하는 따뜻한 원목 트레이 세트"
    },
    classic: {
      name: "커피에 진심인, '로스팅 랩 102'",
      img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600",
      desc: "당신은 본질에 집중하는 완벽주의자 바리스타! 유행을 따르기보다 최고의 원두와 추출 방식을 고집하는 '로스팅 랩 102'는 커피 마니아들의 성지가 될 거예요. 당신의 진심이 담긴 커피 한 잔은 세상 그 무엇보다 강력한 힘을 가집니다.",
      affiliateLink: "https://link.coupang.com/a/hand-drip-set", 
      ctaText: "장인의 손길을 집에서, 프리미엄 핸드드립 세트"
    },
    creative: {
      name: "영감이 샘솟는, '뮤즈의 서재'",
      img: "https://images.unsplash.com/photo-1521017432521-f34f739831af?w=600",
      desc: "당신은 예술적 감성과 독특한 아이디어가 넘치는 크리에이터! '뮤즈의 서재'는 카페이자 갤러리, 그리고 누군가의 꿈이 피어나는 공간이 될 거예요. 당신만의 독창적인 디저트와 인테리어는 사람들에게 잊지 못할 경험을 선사할 것입니다.",
      affiliateLink: "https://link.coupang.com/a/art-book-collection", 
      ctaText: "카페 인테리어의 완성, 감성 아트북 컬렉션"
    }
  }
};