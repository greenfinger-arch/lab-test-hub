export const tomorrowSeasonsData = {
  isReady: false,
  title: "우리가 함께 그리는 '당신과 걷고 싶은 길'",
  subTitle: "먼 훗날, 우리 곁에는 어떤 바람이 불고 있을까요?",
  mainImg: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800", // 평화로운 지평선이나 함께 걷는 뒷모습
  questions: [
    {
      q: "아주 먼 훗날, 우리 둘만의 작은 정원이 생긴다면 무엇을 심고 싶나요?",
      img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600",
      a: [
        { text: "매년 화사하게 피어나 우리를 설레게 할 꽃나무", type: "eternal-spring" },
        { text: "천천히 자라나 든든한 그늘을 만들어줄 큰 나무", type: "forest-shelter" }
      ]
    },
    {
      q: "은퇴 후 맞이하는 첫 번째 월요일 아침, 당신이 꿈꾸는 풍경은?",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      a: [
        { text: "알람 소리 없이 일어나 함께 마시는 따뜻한 커피 한 잔", type: "forest-shelter" },
        { text: "가벼운 배낭을 메고 공항으로 향하는 설레는 발걸음", type: "ocean-voyage" }
      ]
    },
    {
      q: "우리 얼굴에 깊게 새겨진 주름을 보며 당신이 건넬 첫 마디는?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "\"당신, 여전히 내 눈엔 세상에서 제일 예뻐/멋져.\"", type: "eternal-spring" },
        { text: "\"우리 참 치열하게, 그리고 참 예쁘게 잘 살았다.\"", type: "ocean-voyage" }
      ]
    },
    {
      q: "세월이 흘러도 절대 변하지 않았으면 하는 우리만의 '하나'는?",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=600",
      a: [
        { text: "잠들기 전 마주 잡는 두 손의 따뜻한 온기", type: "forest-shelter" },
        { text: "사소한 일에도 아이처럼 깔깔대며 웃는 유머 감각", type: "ocean-voyage" }
      ]
    },
    {
      q: "우리가 함께 걷는 이 길의 끝에서, 당신이 듣고 싶은 말은?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "\"당신 덕분에 내 인생은 늘 봄이었어.\"", type: "eternal-spring" },
        { text: "\"다음 생에도 꼭 당신과 다시 걷고 싶어.\"", type: "ocean-voyage" }
      ]
    }
  ],
  results: {
    "eternal-spring": {
      name: "언제나 설레는 봄, '영원한 연인'형",
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600",
      desc: "두 분의 미래는 갓 피어난 꽃망울처럼 늘 싱그럽겠군요! 세월이 흘러도 서로를 '자기야'라고 부르며 손잡고 산책하는, 동네에서 제일 유명한 잉꼬부부가 될 관상입니다. 당신들에게 나이란 그저 숫자에 불과하며, 매일이 연애 첫날처럼 빛날 거예요.",
      affiliateLink: "https://link.coupang.com/a/custom-photo-book-set", 
      ctaText: "미래의 우리를 미리 기록해, 커플 포토북 제작권"
    },
    "ocean-voyage": {
      name: "자유로운 항해사, '끝없는 모험가'형",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "익숙함에 안주하기보다 끊임없이 새로운 세상을 함께 탐험할 두 분! 70대에도 배낭을 메고 기차에 오를 만큼 뜨거운 열정을 가지셨네요. 탁 트인 바다처럼 시원시원한 두 분의 성격은 서로에게 가장 든든한 여행 메이트가 되어줄 것입니다.",
      affiliateLink: "https://link.coupang.com/a/premium-luggage-set", 
      ctaText: "미래의 여행을 준비해, 프리미엄 캐리어 세트"
    },
    "forest-shelter": {
      name: "깊은 뿌리의 나무, '평온한 안식처'형",
      img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
      desc: "화려하지 않아도 깊은 숲처럼 단단하고 평온한 미래가 기다리고 있습니다. 말하지 않아도 통하는 깊은 신뢰를 바탕으로, 서로가 서로에게 완벽한 집이 되어주는 관계군요. 당신들이 함께 걷는 길은 늘 고요하고 따뜻하며, 그 온기는 영원할 거예요.",
      affiliateLink: "https://link.coupang.com/a/teaset-for-two-handcrafted", 
      ctaText: "함께 늙어가는 오후의 여유, 수공예 찻잔 세트"
    }
  }
};