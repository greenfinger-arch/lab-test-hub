export const guardianPlantData = {
  isReady: false,
  title: "나를 지켜주는 초록 수호신: 반려 식물 테스트",
  subTitle: "지친 당신의 일상에 산소를 불어넣어 줄 단 하나의 초록 파트너",
  mainImg: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800", // 울창한 숲이나 온실 이미지
  questions: [
    {
      q: "답답한 도심 속, 당신이 가장 그리워하는 자연의 소리는?",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      a: [
        { text: "나뭇잎 사이를 스치는 바스락거리는 바람 소리", type: "freedom" },
        { text: "빗방울이 커다란 잎사귀에 툭툭 떨어지는 소리", type: "calm" }
      ]
    },
    {
      q: "새로운 식물을 들인다면, 어디에 두고 싶나요?",
      img: "https://images.unsplash.com/photo-1512428813833-df4dcad9979a?w=600",
      a: [
        { text: "햇살이 가장 잘 드는 화사한 창가", type: "freedom" },
        { text: "늘 곁에서 지켜볼 수 있는 나의 책상 위", type: "strong" }
      ]
    },
    {
      q: "당신이 식물에게 주고 싶은 가장 큰 사랑은?",
      img: "https://images.unsplash.com/photo-1416870230247-3b461769d163?w=600",
      a: [
        { text: "매일 아침 다정하게 건네는 눈인사와 물 한 잔", type: "strong" },
        { text: "아무 방해 없이 마음껏 자랄 수 있는 자유", type: "freedom" }
      ]
    },
    {
      q: "삶의 폭풍우가 찾아올 때, 당신은 어떻게 견디나요?",
      img: "https://images.unsplash.com/photo-1502086223501-7ea2443d844c?w=600",
      a: [
        { text: "유연하게 몸을 흔들며 바람을 흘려보낸다.", type: "calm" },
        { text: "뿌리를 깊게 내리고 그 자리에서 묵묵히 버틴다.", type: "strong" }
      ]
    },
    {
      q: "초록색을 보면 어떤 기분이 가장 먼저 드나요?",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=600",
      a: [
        { text: "막혔던 숨이 탁 트이는 듯한 시원함", type: "freedom" },
        { text: "불안했던 마음이 가라앉는 평온함", type: "calm" }
      ]
    }
  ],
  results: {
    freedom: {
      name: "자유로운 영혼의 파트너, '유칼립투스'",
      img: "https://images.unsplash.com/photo-1512428813833-df4dcad9979a?w=600",
      desc: "당신은 구속받지 않는 맑은 영혼을 가졌군요. 상쾌한 향기로 공기를 정화하는 유칼립투스는 당신의 복잡한 머릿속을 시원하게 비워줄 수호신입니다. 함께 있는 것만으로도 새로운 아이디어가 샘솟고 마음이 가벼워질 거예요.",
      affiliateLink: "https://link.coupang.com/a/eucalyptus-pot", 
      ctaText: "비염까지 잡아주는 상쾌함! 유칼립투스 화분"
    },
    calm: {
      name: "고요한 사색의 동반자, '몬스테라'",
      img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600",
      desc: "커다란 잎사귀로 비바람을 막아주는 몬스테라처럼, 당신은 배려심 깊고 평온한 사람입니다. 몬스테라는 당신의 공간에 안정감을 더해주고, 당신이 흔들릴 때마다 묵묵히 곁을 지키며 '괜찮아'라고 말해줄 거예요. 잎이 찢어지며 자라는 모습은 당신의 성숙함을 닮았네요.",
      affiliateLink: "https://link.coupang.com/a/monstera-plant", 
      ctaText: "인테리어의 완성, 잎이 예쁜 몬스테라"
    },
    strong: {
      name: "변치 않는 강인함의 상징, '고무나무'",
      img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600",
      desc: "두껍고 광택 나는 잎을 가진 고무나무는 당신의 단단한 내면과 꼭 닮았습니다. 어떤 환경에서도 묵묵히 제 자리를 지키며 공기를 맑게 하는 이 식물은, 당신이 목표를 향해 나아갈 때 든든한 버팀목이 되어줄 거예요. 당신의 성공을 묵묵히 응원하는 수호신입니다.",
      affiliateLink: "https://link.coupang.com/a/rubber-plant", 
      ctaText: "강력한 공기정화 능력! 든든한 고무나무"
    }
  }
};