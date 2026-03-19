export const loveVillainData = {
  isReady: false,
  title: "나의 '연애 빌런' 지수: 혹시 나도 답정너?",
  subTitle: "사랑이라는 이름으로 저지르는 당신의 귀여운(?) 범죄 보고서",
  mainImg: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=800", // 장난스러운 커플이나 악마 뿔 소품 이미지
  questions: [
    {
      q: "새로 산 옷을 입고 나간 날, 연인이 '오늘 예쁘네'라고만 한다면?",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
      a: [
        { text: "'고마워!'라고 웃으며 넘긴다.", type: "angel" },
        { text: "'어디가? 구체적으로 어디가 어떻게 예쁜데?'라며 취조를 시작한다.", type: "answer-fixed" }
      ]
    },
    {
      q: "연인이 친구들과의 모임에서 연락이 한 시간 동안 없다면?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "재미있게 놀고 있겠거니 하며 내 할 일을 한다.", type: "angel" },
        { text: "심장이 멎는 것 같다. '지금 뭐해?'라고 폭풍 카톡을 보낼지 고민한다.", type: "obsessive" }
      ]
    },
    {
      q: "기념일, 연인이 준비한 선물이 내 취향이 아닐 때 나의 표정은?",
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600",
      a: [
        { text: "준비해 준 마음이 고마워 환하게 웃는다.", type: "angel" },
        { text: "미간이 살짝 떨린다. '이거 내가 말했던 거 아닌데...'라는 생각이 스친다.", type: "luxury" }
      ]
    },
    {
      q: "싸우고 난 뒤, 연인이 '미안해'라고 사과했을 때 나의 반응은?",
      img: "https://images.unsplash.com/photo-1509424855423-b8ac80064b55?w=600",
      a: [
        { text: "못 이기는 척 받아주고 화해한다.", type: "angel" },
        { text: "'뭐가 미안한데? 정확히 알고 미안해하는 거야?'라고 묻는다.", type: "answer-fixed" }
      ]
    },
    {
      q: "연인이 바빠서 데이트를 취소했을 때, 나는?",
      img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=600",
      a: [
        { text: "아쉽지만 다음에 더 재밌게 놀자고 위로한다.", type: "angel" },
        { text: "나보다 일이 더 중요하냐며 '사랑의 무게'를 측정하기 시작한다.", type: "obsessive" }
      ]
    }
  ],
  results: {
    "answer-fixed": {
      name: "답은 정해져 있고 너는 대답만 해! '답정너 빌런'",
      img: "https://images.unsplash.com/photo-1529111462002-ad9990176883?w=600",
      desc: "오, 당신은 상대방의 영혼까지 탈탈 털어 원하는 대답을 얻어내고야 마는 집요한 매력의 소유자군요! 당신의 '뭐가 미안한데?' 한 마디면 제국의 기사도 벌벌 떨 거예요. 하지만 그건 다 사랑받고 싶은 당신의 작고 소중한 갈망 때문이라는 걸 연인은 알고 있답니다.",
      affiliateLink: "https://link.coupang.com/a/couples-diary", 
      ctaText: "대답 대신 써줘! 우리만의 커플 문답 다이어리"
    },
    obsessive: {
      name: "지옥에서 온 집착의 화신, '구속 집행자'",
      img: "https://images.unsplash.com/photo-1516726817505-f5ed17cb619a?w=600",
      desc: "연인의 GPS가 내 손안에 있어야 직성이 풀리는 당신! 당신의 집착은 사실 '세상에 너밖에 없어'라는 치명적인 선언과도 같죠. 상대방의 사생활을 조금만 존중해 준다면, 당신의 지독한 사랑은 로맨틱한 소설 속 주인공처럼 빛날 거예요.",
      affiliateLink: "https://link.coupang.com/a/couple-phone-case", 
      ctaText: "늘 연결되어 있어! 우리만의 커플 폰케이스"
    },
    luxury: {
      name: "취향이 아니면 죽음을 달라, '까칠한 왕실장'",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600",
      desc: "선물 하나, 장소 하나에도 엄격한 기준을 들이대는 당신! 하지만 연인은 당신의 까다로운 취향을 만족시켰을 때 오는 그 짜릿한 보람에 중독되어 있군요. 때로는 연인의 서툰 노력 자체에 박수를 쳐주는 건 어떨까요? 당신은 충분히 사랑받을 자격이 있는 왕/여왕님이니까요.",
      affiliateLink: "https://link.coupang.com/a/hotel-dinner-voucher", 
      ctaText: "왕실장의 입맛을 저격할 특급 호텔 디너권"
    },
    angel: {
      name: "존재 자체가 기적, '천상계 보살 남친/여친'",
      img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600",
      desc: "이 빌런 테스트에서 천사가 나오다니요! 당신은 상대방의 모든 투정과 실수를 너른 마음으로 품어주는 진정한 사랑의 화신입니다. 하지만 가끔은 당신도 서운하다고 '예쁜 빌런'처럼 앙탈을 부려보세요. 상대방은 당신의 그런 인간미를 기다리고 있을지도 모릅니다.",
      affiliateLink: "https://link.coupang.com/a/chocolate-gift-set", 
      ctaText: "보살님을 위한 달콤한 보상, 프리미엄 초콜릿"
    }
  }
};