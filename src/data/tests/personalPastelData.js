export const personalPastelData = {
  isReady: false,
  title: "나를 포근하게 감싸주는 '퍼스널 파스텔'",
  subTitle: "오늘 당신의 지친 마음을 달래줄 가장 다정한 색깔은 무엇일까요?",
  mainImg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800", // 부드러운 파스텔톤 그라데이션
  questions: [
    {
      q: "지금 이 순간, 당신의 눈앞에 펼쳐졌으면 하는 풍경은?",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      a: [
        { text: "부드러운 햇살이 내리쬐는 평화로운 꽃밭", type: "warm" },
        { text: "해질녘 보랏빛으로 물들어가는 고요한 바다", type: "cool" }
      ]
    },
    {
      q: "오늘 하루 중 당신에게 가장 필요했던 것은 무엇인가요?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "누군가의 따뜻한 격려와 응원", type: "warm" },
        { text: "아무에게도 방해받지 않는 나만의 정적", type: "cool" }
      ]
    },
    {
      q: "당신을 기분 좋게 만드는 촉감을 골라보세요.",
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600",
      a: [
        { text: "햇볕에 잘 말라 바스락거리는 코튼 담요", type: "warm" },
        { text: "매끄럽고 시원한 실크 베갯잇", type: "cool" }
      ]
    },
    {
      q: "지친 당신을 위해 누군가 차(Tea)를 내어준다면?",
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600",
      a: [
        { text: "은은한 단맛이 도는 따뜻한 캐모마일", type: "warm" },
        { text: "상쾌하고 맑은 기운의 페퍼민트", type: "cool" }
      ]
    },
    {
      q: "내일 아침, 어떤 기분으로 눈을 뜨고 싶나요?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "새로운 설렘으로 가득한 기분", type: "warm" },
        { text: "어제보다 훨씬 가볍고 개운해진 기분", type: "cool" }
      ]
    }
  ],
  results: {
    warm: {
      name: "당신을 안아주는 '에이프리콧 베이지'",
      img: "https://images.unsplash.com/photo-1528459061998-5645ad9dd7a0?w=600",
      desc: "당신은 오늘 참 많은 에너지를 쏟아냈군요. 에이프리콧 베이지는 잘 익은 살구처럼 따스하고 다정한 색이에요. 이 색은 당신에게 '오늘도 충분히 잘했어'라고 속삭여줄 거예요. 주변에 따뜻한 조명을 켜고 스스로를 칭찬해주는 시간을 가져보세요.",
      affiliateLink: "https://link.coupang.com/a/warm-mood-lamp", 
      ctaText: "방 안을 온기로 채워줄 은은한 무드 조명"
    },
    cool: {
      name: "마음을 정화하는 '미스티 블루'",
      img: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=600",
      desc: "복잡한 생각들로 머릿속이 가득 찼던 하루였나요? 안개 낀 새벽 하늘을 닮은 미스티 블루는 당신의 어지러운 마음을 차분하게 가라앉혀 줄 거예요. 이 색과 함께라면 당신의 고민도 물 흐르듯 씻겨 내려갈 거예요. 잠시 모든 것을 내려놓고 깊은 숨을 들이마셔 보세요.",
      affiliateLink: "https://link.coupang.com/a/essential-oil-diffuser", 
      ctaText: "복잡한 마음을 씻어줄 아로마 디퓨저 세트"
    },
    dreamy: {
      name: "상상을 현실로 만드는 '라벤더 퍼플'",
      img: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=600",
      desc: "당신은 현실의 무게에 눌려 잠시 꿈꾸는 법을 잊고 있었나 봐요. 라벤더 퍼플은 당신의 감수성을 깨워주고 창의적인 영감을 주는 신비로운 색이에요. 오늘 밤엔 이 색과 함께 기분 좋은 상상을 하며 잠들어보세요. 내일은 동화 같은 일이 일어날지도 모르니까요.",
      affiliateLink: "https://link.coupang.com/a/lavender-sleep-mist", 
      ctaText: "꿈속까지 포근하게, 라벤더 슬립 미스트"
    }
  }
};