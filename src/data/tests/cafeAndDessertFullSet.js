export const cafeAndDessertFullSet = {
  isReady: false,
  title: "카페 메뉴 & 디저트 관상 테스트",
  subTitle: "얼굴에 쓰여 있는 당신의 입맛! 관상으로 보는 완벽한 페어링",
  mainImg: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", 
  questions: [
    {
      q: "카페에 들어서자마자 당신의 눈길이 가장 먼저 향하는 곳은?",
      img: "https://images.unsplash.com/photo-1507133750040-4a8f5700e35f?w=600",
      a: [
        { text: "빠르게 주문할 수 있는 카운터와 메뉴판", type: "essence" },
        { text: "햇살이 잘 드는 창가나 폭신한 소파 자리", type: "sweet" }
      ]
    },
    {
      q: "주문할 때 당신의 스타일은 어느 쪽에 가깝나요?",
      img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c02?w=600",
      a: [
        { text: "늘 마시는 '그것'으로 고민 없이 빠르게", type: "essence" },
        { text: "그날의 기분에 따라 신메뉴나 추천 메뉴 탐색", type: "soft" }
      ]
    },
    {
      q: "디저트 쇼케이스 앞에 선 당신, 당신의 심장을 뛰게 하는 비주얼은?",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
      a: [
        { text: "알록달록하고 화려한 크림이 올라간 케이크", type: "heavy-sweet" },
        { text: "작지만 단단하고 기품이 느껴지는 구움과자", type: "light-bitter" }
      ]
    },
    {
      q: "친구가 음료를 한 입만 뺏어 먹겠다고 한다면?",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600",
      a: [
        { text: "쿨하게 내어주며 맛이 어떤지 물어본다.", type: "soft" },
        { text: "내 입맛에 맞춘 거라 네 입엔 별로일걸? (철벽)", type: "essence" }
      ]
    },
    {
      q: "카페에서 노트북을 켠 당신, 지금 하고 있는 일은?",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      a: [
        { text: "오늘 안에 끝내야 할 폭풍 같은 업무나 공부", type: "essence" },
        { text: "유튜브를 보거나 여행 계획을 짜는 힐링 타임", type: "sweet" }
      ]
    },
    {
      q: "당신이 생각하는 '인생의 맛'을 정의한다면?",
      img: "https://images.unsplash.com/photo-1444412477490-ca40a9250fd9?w=600",
      a: [
        { text: "극강의 달콤함 뒤에 오는 행복", type: "heavy-sweet" },
        { text: "씁쓸하지만 깔끔한 뒷맛의 여운", type: "light-bitter" }
      ]
    }
  ],
  results: {
    essence: {
      name: "아메리카노 & 까눌레 조합: '완벽주의자' 관상",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=600",
      desc: "당신의 관상은 겉은 단단하고 속은 쫀득한 까눌레를 닮았군요! 효율을 중시하는 아메리카노파인 당신은 사회적으로 매우 유능한 차도남/차도녀입니다. 하지만 친해지면 누구보다 쫀득한 의리를 보여주는 반전 매력의 소유자네요. 족집게 같죠?",
      affiliateLink: "https://link.coupang.com/a/capsule-coffee-machine", 
      ctaText: "완벽주의자의 홈카페를 위한 캡슐 머신"
    },
    sweet: {
      name: "딸기 라떼 & 황치즈 버터바 조합: '인간 비타민' 관상",
      img: "https://images.unsplash.com/photo-1461023233033-06634c49d682?w=600",
      desc: "보기만 해도 기분이 좋아지는 선한 눈매를 가지셨네요! 당신의 관상은 화사한 딸기 라떼와 꾸덕한 황치즈 버터바가 만난 듯한 강렬한 러블리함을 풍깁니다. 주변의 분위기를 주도하는 주인공 타입이며, 자기주장 또한 뚜렷한 '확신의 센터' 관상입니다.",
      affiliateLink: "https://link.coupang.com/a/yellow-cheese-snack", 
      ctaText: "당신의 텐션을 책임질 꾸덕 쫀득 치즈 디저트"
    },
    soft: {
      name: "카페라떼 & 티라미수 조합: '부드러운 카리스마' 관상",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      desc: "모난 곳 없이 둥글둥글하고 온화한 인상이시군요! 우유 거품 같은 포용력을 가진 카페라떼 관상입니다. 하지만 티라미수처럼 그 속엔 지적이고 깊은 성찰을 담고 있네요. 사람들은 당신 곁에서 편안함을 느끼며, 당신을 정신적 지주로 생각하곤 합니다.",
      affiliateLink: "https://link.coupang.com/a/tiramisu-cake-kit", 
      ctaText: "나를 끌어올려 줄(Tirare mi su) 달콤한 케이크 세트"
    },
    "heavy-sweet": {
      name: "초코 모카 & 브라우니 조합: '열정적인 낭만파' 관상",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600",
      desc: "당신은 감성이 풍부하고 매 순간 진심을 다하는 낭만파 관상입니다! 스트레스를 미움 대신 달콤함으로 승화시킬 줄 아는 대인배이기도 하죠. 한 번 꽂히면 끝을 보는 몰입도가 뛰어나며, 사랑과 우정에 목숨을 거는 아주 뜨거운 영혼의 소유자입니다.",
      affiliateLink: "https://link.coupang.com/a/brownie-mix", 
      ctaText: "진한 낭만을 구워보세요! 초코 브라우니 믹스"
    }
  }
};