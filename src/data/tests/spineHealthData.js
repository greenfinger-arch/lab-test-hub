export const spineHealthData = {
  id: "spineHealth",
  title: "나의 척추는 안녕한가요? 허리 생존 등급 테스트",
  subTitle: "에구구.. 소리가 절로 난다면? 당신의 소중한 허리를 위한 유쾌한 진단",
  relatedPostUrl: "https://ranklamp.com/lower-back-pain-herniated-disc-prevention-treatment-guide",
  isReady: true,
  mainImg: "/images/spine-main.jpg",
  questions: [
    {
      q: "아침에 일어나 바닥에 떨어진 양말을 주울 때 당신은?",
      img: "/images/spine-q1.jpg",
      a: [
        { text: "무릎을 굽히지 않고 깃털처럼 가뿐하게 줍는다 🪶", type: "FLEX" },
        { text: "나도 모르게 '아이고~' 소리가 나오며 조심조심 줍는다 🐢", type: "STIFF" }
      ]
    },
    {
      q: "의자에 앉아 있을 때, 당신의 엉덩이 위치는?",
      img: "/images/spine-q2.jpg",
      a: [
        { text: "등받이에 등을 딱! 정석대로 앉는다 📐", type: "GOOD" },
        { text: "의자 끝에 걸터앉거나 거의 누워서 업무를 본다 🛌", type: "BAD" }
      ]
    },
    {
      q: "오랜만에 운동 좀 해볼까? 당신의 선택은?",
      img: "/images/spine-q3.jpg",
      a: [
        { text: "코어를 단단하게! 플랭크나 필라테스 🧘", type: "GOOD" },
        { text: "일단 숨쉬기 운동과 가벼운 스트레칭부터.. 🌬️", type: "FLEX" }
      ]
    },
    {
      q: "무거운 짐을 들어 올려야 하는 상황, 당신의 자세는?",
      img: "/images/spine-q4.jpg",
      a: [
        { text: "허리를 숙여서 팔 힘으로 번쩍! 🏋️", type: "BAD" },
        { text: "무릎을 굽히고 앉아 다리 힘을 이용해 일어난다 🦵", type: "GOOD" }
      ]
    },
    {
      q: "지금 이 질문을 보고 있는 당신의 허리 상태는?",
      img: "/images/spine-q5.jpg",
      a: [
        { text: "꼿꼿하게 펴고 있다! (앗, 방금 폈다) ✨", type: "FLEX" },
        { text: "구부정한 자세로 모니터 속으로 빨려 들어가는 중 🌀", type: "STIFF" }
      ]
    }
  ],
  results: {
    GOOD: {
      name: "꼿꼿한 '인간 대나무' 등급",
      img: "/images/spine-res01.jpg",
      desc: "훌륭합니다! 바른 자세의 정석이시군요. 당신의 척추는 지금 아주 건강한 정렬을 유지하고 있습니다. 지금처럼 꾸준한 코어 운동으로 100세까지 흔들림 없는 꼿꼿함을 유지해 보세요!",
      ctaText: "더 강력한 코어를 위한 홈트 매트 보기",
      affiliateLink: "https://link.coupang.com/a/dYenvj"
    },
    FLEX: {
      name: "말랑말랑 '젤리 허리' 등급",
      img: "/images/spine-res02.jpg",
      desc: "유연성은 좋지만, 자칫 근력이 부족하면 허리에 무리가 올 수 있어요! 유연함 속에 단단한 근력을 채워 넣는다면 완벽한 허리 미인이 될 거예요. 가벼운 걷기부터 시작해 볼까요?",
      ctaText: "허리 지지력이 좋은 런닝화 찾기",
      affiliateLink: "https://link.coupang.com/a/dYeywN"
    },
    STIFF: {
      name: "삐걱삐걱 '양철 나무꾼' 등급",
      img: "/images/spine-res03.jpg",
      desc: "조금 위험해요! 근육이 굳어 있어 작은 충격에도 허리가 놀랄 수 있습니다. 매일 아침저녁 5분 스트레칭이 보약보다 낫다는 사실! 굳어있는 척추 마디마디에 기름칠이 필요합니다.",
      ctaText: "허리 스트레칭 전용 폼롤러 구경하기",
      affiliateLink: "https://link.coupang.com/a/dYeI5V"
    },
    BAD: {
      name: "위태로운 '피사의 사탑' 등급",
      img: "/images/spine-res04.jpg",
      desc: "당장 자세 교정이 시급합니다! 지금의 편안함이 나중에는 큰 통증으로 돌아올 수 있어요. 의자 등받이 쿠션이나 발받침대를 활용해 강제로라도 바른 자세를 만들어주는 환경 리셋이 필요합니다.",
      ctaText: "허리를 펴주는 기능성 의자 쿠션",
      affiliateLink: "https://link.coupang.com/a/dYeLnR"
    }
  }
};