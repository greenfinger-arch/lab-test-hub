export const cafeFaceData = {
  isReady: false,
  title: "나의 '카페 메뉴' 관상 테스트",
  subTitle: "얼굴에 쓰여 있는 당신의 취향! 관상으로 보는 소울 메뉴",
  mainImg: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", // 감성적인 카페 전경
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
      q: "친구가 음료를 한 입만 뺏어 먹겠다고 한다면?",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600",
      a: [
        { text: "쿨하게 내어주며 맛이 어떤지 물어본다.", type: "soft" },
        { text: "내 입맛에 맞춘 거라 네 입엔 별로일걸? (방어)", type: "essence" }
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
      q: "당신이 생각하는 '완벽한 커피'의 조건은?",
      img: "https://images.unsplash.com/photo-1444412477490-ca40a9250fd9?w=600",
      a: [
        { text: "정신이 번쩍 들게 하는 깔끔함과 깊은 풍미", type: "essence" },
        { text: "마시는 순간 기분이 좋아지는 부드러움과 달콤함", type: "soft" }
      ]
    }
  ],
  results: {
    essence: {
      name: "차도남/차도녀의 정석, '아이스 아메리카노'상",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=600",
      desc: "당신의 관상은 군더더기 없이 깔끔하고 명확하군요! 겉으로는 차가워 보일 수 있지만, 속은 누구보다 뜨겁고 열정적인 '에스프레소'를 품고 있어요. 효율성을 중시하고 뒤끝 없는 당신의 성격은 현대 사회의 진정한 리더형입니다. 족집게 같나요?",
      affiliateLink: "https://link.coupang.com/a/capsule-coffee-machine", 
      ctaText: "아메리카노 중독자를 위한 홈카페 캡슐 머신"
    },
    sweet: {
      name: "러블리한 인간 비타민, '딸기 라떼'상",
      img: "https://images.unsplash.com/photo-1461023233033-06634c49d682?w=600",
      desc: "보기만 해도 기분이 좋아지는 선한 눈매를 가지셨네요! 당신의 관상은 달콤한 딸기와 부드러운 우유가 섞인 딸기 라떼 같아요. 주변 사람들의 기분을 단번에 끌어올리는 마성의 매력을 가졌군요. 가끔은 당신의 달콤함을 질투하는 사람들을 조심하세요!",
      affiliateLink: "https://link.coupang.com/a/strawberry-syrup", 
      ctaText: "집에서도 핑크빛 텐션 업! 프리미엄 딸기청"
    },
    soft: {
      name: "부드러운 카리스마, '카페라떼'상",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      desc: "모난 곳 없이 둥글둥글하고 온화한 인상이시군요! 당신의 관상은 우유 거품처럼 부드러운 포용력을 상징합니다. 누구와도 잘 어울리는 유연함을 가졌지만, 그 안에는 고소한 풍미 같은 자신만의 철학이 확실하네요. 사람들은 당신 곁에서 편안함을 느낍니다.",
      affiliateLink: "https://link.coupang.com/a/milk-frother", 
      ctaText: "라떼의 완성은 거품! 전동 우유 거품기"
    }
  }
};