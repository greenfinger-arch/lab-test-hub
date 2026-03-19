export const loveMoodLightData = {
  isReady: false,
  title: "나의 '연애 언어' 무드등 테스트",
  subTitle: "당신의 마음을 환하게 밝히는 사랑의 빛깔은 무엇인가요?",
  mainImg: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800", // 은은한 무드등이 가득한 방 사진
  questions: [
    {
      q: "힘든 하루를 마치고 집에 돌아온 당신, 연인에게 가장 듣고 싶은 말은?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "\"오늘 정말 고생 많았어, 네가 최고야!\" (칭찬/격려)", type: "warm-yellow" },
        { text: "\"아무 말 안 해도 돼, 내가 옆에 있어 줄게.\" (함께하는 시간)", type: "soft-purple" }
      ]
    },
    {
      q: "기념일이 아닌 날, 연인이 불쑥 내민 작은 선물에 당신의 반응은?",
      img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
      a: [
        { text: "나를 생각하며 골랐을 정성에 눈물이 핑 돈다. (선물)", type: "ocean-blue" },
        { text: "선물도 좋지만, 오늘 같이 맛있는 거 먹으러 가자고 한다. (함께하는 시간)", type: "soft-purple" }
      ]
    },
    {
      q: "데이트 중 당신이 가장 행복을 느끼는 순간은?",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600",
      a: [
        { text: "서로의 손을 꼭 잡고 거리를 걸을 때 (스킨십)", type: "sweet-pink" },
        { text: "연인이 나를 위해 맛있는 요리를 해줄 때 (봉사)", type: "pure-white" }
      ]
    },
    {
      q: "연인이 나를 정말 사랑한다고 확신하게 되는 지점은?",
      img: "https://images.unsplash.com/photo-1518101642274-1f9947844002?w=600",
      a: [
        { text: "사소한 고민도 진지하게 들어주고 공감해 줄 때", type: "warm-yellow" },
        { text: "바쁜 와중에도 나를 위해 시간을 내어 달려올 때", type: "soft-purple" }
      ]
    },
    {
      q: "당신이 연인에게 가장 해주고 싶은 '사랑의 표현'은?",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
      a: [
        { text: "맛있는 걸 사주거나 집안일을 도와주는 실질적인 도움", type: "pure-white" },
        { text: "틈날 때마다 '사랑해', '고마워'라고 말해주기", type: "warm-yellow" }
      ]
    }
  ],
  results: {
    "warm-yellow": {
      name: "다정한 격려의 빛, '웜 옐로우' 무드등",
      img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600",
      desc: "당신의 연애 언어는 '인정하는 말'이군요! 따스한 햇살 같은 칭찬과 격려 한 마디면 세상 모든 시름이 녹아내리는 타입입니다. 비판보다는 응원을 먹고 자라는 예쁜 꽃 같은 당신에게, 연인이 건네는 '고생했어'라는 말은 그 어떤 보석보다 빛나는 조명입니다.",
      affiliateLink: "https://link.coupang.com/a/custom-engraved-lamp", 
      ctaText: "우리만의 메시지를 새긴 레터링 무드등"
    },
    "soft-purple": {
      name: "함께 속삭이는 밤, '소프트 퍼플' 무드등",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600",
      desc: "당신에게 사랑이란 곧 '함께하는 시간'입니다. 화려한 이벤트보다 단둘이 도란도란 이야기를 나누는 고요한 밤을 더 소중히 여기시네요. 보랏빛 새벽처럼 신비롭고 깊은 당신의 사랑은, 오직 서로에게만 집중하는 그 정적 속에서 가장 환하게 빛납니다.",
      affiliateLink: "https://link.coupang.com/a/projection-mood-light", 
      ctaText: "방 안을 오로라로 채우는 빔 무드등"
    },
    "sweet-pink": {
      name: "심장이 간지러운, '스위트 핑크' 무드등",
      img: "https://images.unsplash.com/photo-1520412099561-6481978b7ab7?w=600",
      desc: "당신의 연애 언어는 '스킨십'! 맞잡은 두 손의 온기, 포근한 포옹에서 가장 큰 안정감과 사랑을 느낍니다. 핑크빛 무드등처럼 달콤하고 사랑스러운 당신은 애정 표현에 솔직하며, 연인과 물리적으로 가까이 있을 때 영혼의 배터리가 100% 충전되는 로맨티스트입니다.",
      affiliateLink: "https://link.coupang.com/a/body-pillow-u-shape", 
      ctaText: "안고 자면 꿀잠 예약! 곰돌이 바디필로우"
    },
    "pure-white": {
      name: "조건 없는 헌신, '퓨어 화이트' 무드등",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
      desc: "말보다는 행동! 당신의 연애 언어는 '봉사와 헌신'입니다. 연인을 위해 맛있는 것을 준비하거나 복잡한 일을 해결해 줄 때 진정한 행복을 느끼는 타입이죠. 깨끗하고 맑은 화이트 조명처럼 당신의 사랑은 투명하고 정직합니다. 당신의 배려 덕분에 연인의 세상은 늘 밝고 쾌적하답니다.",
      affiliateLink: "https://link.coupang.com/a/automatic-coffee-machine", 
      ctaText: "사랑하는 이를 위한 아침 커피 머신"
    },
    "ocean-blue": {
      name: "특별한 기억의 조각, '오션 블루' 무드등",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600",
      desc: "당신에게 사랑은 '정성이 담긴 선물'로 기억됩니다. 값비싼 것이 아니더라도, 나를 생각하며 골랐을 그 '순간'의 마음이 푸른 바다처럼 깊은 감동으로 다가오죠. 선물을 주고받는 과정을 통해 서로의 존재를 확인하는 당신은, 일상을 기념일로 만드는 마법 같은 능력을 가졌습니다.",
      affiliateLink: "https://link.coupang.com/a/instant-camera-set", 
      ctaText: "모든 순간을 선물로! 인스탁스 미니 카메라"
    }
  }
};