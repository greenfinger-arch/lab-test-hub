export const officesurvivalData = {
  isReady: true,
  id: "officesurvival",
  title: "직장인 생존 가이드: 나의 오피스 생존력은?",
  relatedPostUrl: "https://ranklamp.com/office-survival-guide-personality-test",
  subTitle:
    "약육강식의 정글 같은 사무실, 당신은 어떤 전략으로 살아남고 있나요? 당신의 생존 등급을 진단해 드립니다.",
  mainImg: "/images/officesurvival-main.jpg",

  questions: [
    {
      id: 1,
      q: "일요일 밤 10시, 갑자기 업무 단톡방에 불이 켜졌다면?",
      img: "/images/officesurvival1.jpg",
      a: [
        { text: "일단 확인은 하되 답장은 내일 아침에 한다", type: "STEALTH" }, // 은신 생존형
        { text: "누구보다 빠르게 확인하고 '넵'을 보낸다", type: "CHAMELEON" }, // 적응형
      ],
    },
    {
      id: 2,
      q: "상사가 도무지 이해가 안 되는 지시를 내렸을 때 당신은?",
      img: "/images/officesurvival2.jpg",
      a: [
        {
          text: "질문을 통해 정확한 의도를 파악하고 조율한다",
          type: "STRATEGIST",
        }, // 전략가형
        {
          text: "속으로 욕하지만 얼굴은 웃으며 일단 알겠다고 한다",
          type: "CACTUS",
        }, // 인내형
      ],
    },
    {
      id: 3,
      q: "오늘따라 업무가 산더미! 당신의 점심시간은?",
      img: "/images/officesurvival3.jpg",
      a: [
        {
          text: "에너지가 필요해! 맛집을 찾아가 든든하게 먹는다",
          type: "CACTUS",
        },
        {
          text: "자리에서 대충 때우고 잠시라도 혼자만의 시간을 갖는다",
          type: "STEALTH",
        },
      ],
    },
    {
      id: 4,
      q: "팀원들 사이에서 미묘한 갈등의 기류가 흐를 때 당신은?",
      img: "/images/officesurvival4.jpg",
      a: [
        {
          text: "분위기를 감지하고 중재하거나 적당히 분위기를 띄운다",
          type: "CHAMELEON",
        },
        {
          text: "절대 끼어들지 않고 무관심한 척 내 일에만 집중한다",
          type: "STRATEGIST",
        },
      ],
    },
    {
      id: 5,
      q: "당신이 생각하는 가장 완벽한 퇴근의 모습은?",
      img: "/images/officesurvival5.jpg",
      a: [
        {
          text: "정시 퇴근 1분 전, 모든 짐을 싸서 문 앞 대기",
          type: "STEALTH",
        },
        {
          text: "오늘의 할 일을 완벽히 마무리하고 홀가분하게 퇴근",
          type: "STRATEGIST",
        },
      ],
    },
  ],

  results: {
    STRATEGIST: {
      name: "냉철한 승부사 '사무실의 제갈공명'",
      desc: "당신은 감정에 휘둘리지 않고 업무의 핵심을 찌르는 전략가입니다. 높은 생존력과 함께 성과까지 챙기는 타입이죠. 하지만 동료들에게 너무 계산적으로 보일 수 있으니 때로는 인간미를 보여주세요!",
      img: "/images/officesurvival01.jpg",
      ctaText: "🧠 전략가의 뇌 휴식! 무선 노이즈캔슬링 헤드셋",
      affiliateLink: "https://link.coupang.com/a/dWm7Eu",
    },
    CHAMELEON: {
      name: "분위기 마스터 '오피스 카멜레온'",
      desc: "어떤 상황, 어떤 상사를 만나도 찰떡같이 적응하는 최고의 사회성을 가졌군요! 당신이 있는 팀은 언제나 분위기가 좋습니다. 다만, 남의 비위를 맞추느라 정작 당신의 속마음이 멍들지 않게 조심하세요.",
      img: "/images/officesurvival02.jpg",
      ctaText: "🌈 카멜레온의 텐션 유지! 비타민 선물세트",
      affiliateLink: "https://link.coupang.com/a/dWncLU",
    },
    STEALTH: {
      name: "생존 전문가 '그림자 닌자'",
      desc: "최소한의 노출로 최대의 효율을 뽑아내는 은신술의 달인입니다. 불필요한 일에 엮이지 않는 능력이 탁월하시네요. 하지만 너무 존재감이 없으면 결정적인 순간에 공로를 뺏길 수 있으니 주의하세요!",
      img: "/images/officesurvival03.jpg",
      ctaText: "🥷 닌자의 완벽한 은신! 모니터 보안 필름",
      affiliateLink: "https://link.coupang.com/a/dWnhL8",
    },
    CACTUS: {
      name: "외유내강 '사무실의 선인장'",
      desc: "거친 환경에서도 묵묵히 제자리를 지키는 인내심의 끝판왕! 당신은 팀의 든든한 버팀목입니다. 겉으론 가시를 세우고 있어도 속은 누구보다 따뜻하군요. 가끔은 당신의 가시를 내려놓고 편히 쉴 곳을 찾아보세요.",
      img: "/images/officesurvival04.jpg",
      ctaText: "🌵 선인장의 힐링! 데스크 테리어 미니 화분",
      affiliateLink: "https://link.coupang.com/a/dWnql0",
    },
  },
};
