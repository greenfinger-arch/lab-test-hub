export const friendVillainTest = {
  isReady: false,
  title: "우리 중 '최고의 빌런'은 누구? 민폐 지수 테스트",
  subTitle: "얄밉지만 미워할 수 없는 당신, 혹시 우리 모임의 공공의 적?!",
  mainImg: "https://images.unsplash.com/photo-1594132176008-db2a4209581c?w=800", // 장난스러운 악당 가면이나 빌런 느낌 이미지
  questions: [
    {
      q: "약속 시간 10분 전! 단톡방에 당신이 올릴 메시지는?",
      img: "https://images.unsplash.com/photo-1509139562610-5a218202b077?w=600",
      a: [
        { text: "\"야, 나 지금 일어남... 미안 (당당)\"", type: "late-king" },
        { text: "\"거의 다 왔어! (사실은 아직 집 화장실)\"", type: "lying-ghost" }
      ]
    },
    {
      q: "다 같이 맛집에 갔소. 메뉴를 고를 때 당신의 스타일은?",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600",
      a: [
        { text: "\"아무거나!\"라고 해놓고 남이 고른 것마다 \"그건 좀...\" 한다.", type: "decision-disaster" },
        { text: "제일 비싼 걸 고르고 계산할 때 화장실로 사라진다.", type: "wallet-killer" }
      ]
    },
    {
      q: "단톡방에 중요한 공지가 올라왔을 때 당신은?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "숫자 '1'은 사라지게 하고 대답은 절대로 안 한다.", type: "ghost-reader" },
        { text: "다 결정된 뒤에 뒤늦게 나타나 \"근데 우리 어디서 봐?\" 묻는다.", type: "decision-disaster" }
      ]
    },
    {
      q: "술자리에서 취기가 오르면 당신이 저지르는 만행은?",
      img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=600",
      a: [
        { text: "갑자기 서러운 옛날 얘기를 꺼내며 분위기를 갑분싸 만든다.", type: "drama-villain" },
        { text: "안주만 미친 듯이 흡입하며 남의 술잔에 물을 채운다.", type: "wallet-killer" }
      ]
    },
    {
      q: "친구의 연애 상담을 해줄 때 당신의 태도는?",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600",
      a: [
        { text: "건성으로 듣다가 결국 자기 자랑으로 끝을 맺는다.", type: "drama-villain" },
        { text: "\"그냥 헤어져!\"라며 무책임한 악담을 퍼붓는다.", type: "late-king" }
      ]
    }
  ],
  results: {
    "late-king": {
      name: "코리안 타임의 지배자, '지각계의 레전드'",
      img: "https://images.unsplash.com/photo-1508921331509-4c7428550775?w=600",
      desc: "당신의 시계는 혹시 안드로메다 설정인가요? 약속 시간에 나타나면 친구들이 박수를 쳐줄 정도군요. 미안해하는 척이라도 하면 다행인데, 뻔뻔함까지 갖춘 당신은 진정한 시간의 약탈자! 친구들의 인내심이 바닥나기 전에 오늘은 커피라도 쏘시오.",
      affiliateLink: "https://link.coupang.com/a/smart-watch-alarm-intense", 
      ctaText: "제발 좀 일찍 와! 진동 빡센 스마트워치"
    },
    "lying-ghost": {
      name: "입만 열면 구라, '거의 다 왔어 요정'",
      img: "https://images.unsplash.com/photo-1516726817505-f5ed17cb619a?w=600",
      desc: "\"나 지금 엘베 앞이야\" (현실: 침대 위). 당신의 화려한 거짓말에 속아 추위에 떨며 기다린 친구들이 한 트럭입니다. 거짓말도 실력이지만, 친구들의 신뢰도 지하 암반층까지 뚫고 내려갔소! 솔직하게 말하는 용기를 가져보시오.",
      affiliateLink: "https://link.coupang.com/a/lie-detector-toy-set", 
      ctaText: "진실의 방으로! 거짓말 탐지기 게임기"
    },
    "wallet-killer": {
      name: "계산할 때만 화장실, '지갑 수호자'형",
      img: "https://images.unsplash.com/photo-1554224155-1696413575b9?w=600",
      desc: "지갑에 접착제라도 발랐나요? 계산할 때만 되면 신발 끈을 묶거나 전화를 받는 당신의 순발력은 가히 올림픽 급입니다. 안주발은 제일 세우면서 돈 낼 땐 뒷짐 지는 모습에 친구들의 주먹이 울고 있소. 양심이 있다면 이번 모임은 당신이 골든벨을 울리시오!",
      affiliateLink: "https://link.coupang.com/a/slim-leather-card-wallet", 
      ctaText: "꺼내기 편한 거로 바꿨다! 슬림 카드 지갑"
    },
    "decision-disaster": {
      name: "답정너를 넘어서는 '민폐 브레이커'형",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      desc: "아무거나 괜찮다며 다 정해지면 초를 치는 당신! 혹은 남들 다 얘기할 때 안 듣다가 나중에 딴소리하는 빌런 중의 빌런입니다. 친구들의 기력을 쪽쪽 빨아먹는 '에너지 뱀파이어'가 바로 당신이군요. 제발 남의 말 좀 경청하고 의견 좀 똑바로 내시오!",
      affiliateLink: "https://link.coupang.com/a/voice-recorder-pen", 
      ctaText: "공지 좀 들어라! 볼펜형 녹음기"
    },
    "ghost-reader": {
      name: "소통 단절의 아이콘, '안읽씹 유니콘'",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      desc: "단톡방에 숫자는 사라지는데 당신의 대답은 영영 돌아오지 않군요. 실존은 하지만 소통은 안 되는 신비로운 존재입니다. 친구들이 당신 죽은 줄 알고 제사 지낼 뻔했소! 이모티콘이라도 하나 찍는 게 그렇게 어렵소? 당신 때문에 모임 장소 정하기가 하늘의 별 따기요!",
      affiliateLink: "https://link.coupang.com/a/kakao-friends-emoticon-card", 
      ctaText: "대답 대신 이거라도! 이모티콘 상품권"
    }
  }
};