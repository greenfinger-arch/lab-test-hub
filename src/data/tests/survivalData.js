export const survivalData = {
  isReady: false,
  id: "survival",
  title: "나의 '위기 탈출 넘버원' 능력치 진단",
  subTitle: "갑작스러운 회식부터 마감 직전 컴퓨터 꺼짐까지! 일상의 위기 속 당신의 생존 등급은 몇 점일까요?",
  mainImg: "/images/survival-main.jpg",

  questions: [
    {
      id: 1,
      q: "중요한 발표 직전, 노트북이 갑자기 블루스크린으로 멈췄다!",
      img: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=600",
      a: [
        { text: "차분하게 재부팅을 시도하며 머릿속으로 대본을 읊는다", type: "INTEL" }, // 지능/침착형
        { text: "동공지진... 일단 주변에 살려달라는 눈빛을 보낸다", type: "LUCK" } // 운/조력형
      ]
    },
    {
      id: 2,
      q: "이미 약속이 있는데, 상사가 '오늘 번개 회식 어때?'라고 묻는다면?",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      a: [
        { text: "0.1초 만에 지어낸 '어쩔 수 없는 사정'으로 빠져나간다", type: "SPEED" }, // 순발력/임기응변
        { text: "거절 못 하고 일단 끌려가서 구석에서 탈출각만 잰다", type: "STEALTH" } // 은신/인내형
      ]
    },
    {
      id: 3,
      q: "길을 가다 예기치 못한 도심 속 조난(길치 등) 상황에 처했다면?",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      a: [
        { text: "스마트하게 지도 앱과 지형지물을 분석해 길을 찾는다", type: "INTEL" },
        { text: "내 발길이 닿는 곳이 곧 길! 직감을 믿고 일단 걷는다", type: "SPEED" }
      ]
    },
    {
      id: 4,
      q: "친구들과 간 여행지에서 예상치 못한 폭우를 만났을 때 당신은?",
      img: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=600",
      a: [
        { text: "재빨리 근처 실내 놀거리와 맛집 리스트를 새로 짠다", type: "INTEL" },
        { text: "비 맞는 것도 추억! 빗속에서 수영하거나 논다", type: "LUCK" }
      ]
    },
    {
      id: 5,
      q: "전 애인 혹은 어색한 직장 상사와 길에서 정면으로 마주쳤다면?",
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?w=600",
      a: [
        { text: "못 본 척 스마트폰에 집중하며 유령처럼 스쳐 지나간다", type: "STEALTH" },
        { text: "자연스럽게 인사하고 3초 만에 화제를 전환해 대화를 끝낸다", type: "SPEED" }
      ]
    }
  ],

  results: {
    INTEL: {
      name: "위기 분석의 신 '인간 내비게이션'",
      desc: "당신은 어떤 긴박한 상황에서도 뇌 회로가 멈추지 않는 지능형 생존자입니다. 감정에 휘둘리기보다 데이터와 논리로 해결책을 찾아내죠. 당신과 함께라면 무인도에서도 와이파이를 찾아낼 것 같네요!",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400",
      ctaText: "🧠 뇌 효율 극대화! 집중력 향상 아이템",
      affiliateLink: "https://play.ranklamp.com/survival-intel"
    },
    SPEED: {
      name: "빛의 속도 임기응변 '인간 퀵실버'",
      desc: "생각보다 몸이 먼저 반응하는 놀라운 순발력의 소유자! 말 한마디로 천 냥 빚을 갚고, 위기 상황을 개그나 재치로 승화시키는 능력이 탁월합니다. 당신의 등 뒤에는 언제나 탈출구가 열려 있군요.",
      img: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400",
      ctaText: "🏃 0.1초의 차이! 운동화/스포츠웨어 기획전",
      affiliateLink: "https://play.ranklamp.com/survival-speed"
    },
    LUCK: {
      name: "하늘이 도운 천운 '행운의 아이콘'",
      desc: "능력치보다 운이 만렙! 이상하게 위기가 닥쳐도 주변에서 도와주는 사람이 나타나거나, 우연히 상황이 좋게 풀리는 타입입니다. 낙천적인 성격이 최고의 무기네요. 다만, 운도 실력이니 평소에 덕을 쌓아두세요!",
      img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=400",
      ctaText: "🍀 행운을 부르는 나만의 부적 소품 보기",
      affiliateLink: "https://play.ranklamp.com/survival-luck"
    },
    STEALTH: {
      name: "침묵의 생존자 '사무실의 닌자'",
      desc: "당신의 무기는 은신과 인내입니다. 파도가 칠 때 정면으로 맞서기보다 파도가 지나갈 때까지 숨죽여 기다리는 지혜를 가졌군요. 위기 상황에서 가장 마지막까지 조용히 살아남는 것은 결국 당신일 겁니다.",
      img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400",
      ctaText: "🤫 아무도 모르게! 닌자급 은신/정리템",
      affiliateLink: "https://play.ranklamp.com/survival-stealth"
    }
  }
};