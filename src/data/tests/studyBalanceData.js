export const studyBalanceData = {
  id: "studyBalance",
  title: "나의 수험생활 '능률 & 활력' 밸런스 진단",
  subTitle: "무조건 열심히만 하고 있나요? 당신의 뇌와 몸이 원하는 진짜 휴식과 공부법",
  relatedPostUrl: "https://ranklamp.com/learning-efficiency-study-methods-exercise-for-students",
  isReady: true,
  mainImg: "/images/study-balance-main.jpg",
  questions: [
    {
      q: "오늘 아침, 눈을 떴을 때 당신의 몸 상태는?",
      img: "/images/study-balance-q1.jpg",
      a: [
        { text: "천근만근 찌뿌둥... 조금만 더 자고 싶다 💤", type: "REST" },
        { text: "어느 정도 개운하게 '오늘 할 일'이 머릿속에 그려진다 ✨", type: "FLOW" }
      ]
    },
    {
      q: "문제가 잘 안 풀려 답답할 때, 당신의 선택은?",
      img: "/images/study-balance-q2.jpg",
      a: [
        { text: "풀릴 때까지 엉덩이 힘으로 끝까지 앉아 있는다 🪑", type: "STAMINA" },
        { text: "잠시 일어나 스트레칭을 하거나 창밖을 본다 🍃", type: "FLOW" }
      ]
    },
    {
      q: "가장 선호하는 학습 마무리 방식은?",
      img: "/images/study-balance-q3.jpg",
      a: [
        { text: "깜지 쓰듯 손으로 빽빽하게 적으며 외우기 ✍️", type: "STAMINA" },
        { text: "중요 키워드를 눈으로 훑으며 머릿속으로 구조화하기 🧠", type: "FLOW" }
      ]
    },
    {
      q: "공부 중간, 당신의 '운동'은 어느 정도인가요?",
      img: "/images/study-balance-q4.jpg",
      a: [
        { text: "계단 오르기나 가벼운 산책으로 숨을 고른다 🏃", type: "FLOW" },
        { text: "운동할 시간조차 아까워 최대한 움직이지 않는다 🚫", type: "REST" }
      ]
    },
    {
      q: "나에게 '휴식'이란 어떤 의미인가요?",
      img: "/images/study-balance-q5.jpg",
      a: [
        { text: "다시 달리기 위해 꼭 필요한 '연료 주입' ⛽", type: "FLOW" },
        { text: "죄책감이 살짝 들지만 어쩔 수 없이 하는 것 😅", type: "REST" }
      ]
    }
  ],
  results: {
    FLOW: {
      name: "완벽한 흐름을 타는 '스마트 러너'",
      img: "/images/study-balance-res01.jpg",
      desc: "당신은 이미 뇌와 몸의 밸런스를 잘 맞추고 있군요! 무리한 암기보다 흐름을 이해하는 스마트한 학습법이 체질에 맞습니다. 지금처럼 하루 15분 산책으로 뇌에 산소를 공급해 주세요. 당신의 성적은 이미 우상향 중입니다.",
      ctaText: "뇌 활성화를 돕는 공기 청정기 확인",
      affiliateLink: "https://link.coupang.com/a/dX5wsL"
    },
    REST: {
      name: "충전이 필요한 '방전 직전의 열공파'",
      img: "/images/study-balance-res02.jpg",
      desc: "열정은 높지만 몸이 따라주지 않아 마음이 조급하시군요. 지금 당신에게 필요한 건 더 많은 공부가 아니라 질 좋은 휴식입니다. 자기 전 따뜻한 안대로 눈의 피로만 풀어줘도 내일의 집중력이 2배는 좋아질 거예요.",
      ctaText: "꿀잠 보장 온열 안대 구경하기",
      affiliateLink: "https://link.coupang.com/a/dX5IHn"
    },
    STAMINA: {
      name: "우직한 끈기파 '엉덩이 대장님'",
      img: "/images/study-balance-res03.jpg",
      desc: "노력은 배신하지 않는다는 말을 몸소 실천하는 당신! 하지만 무거운 어깨와 허리가 집중력을 방해하고 있어요. 50분 공부 후 5분만 목과 허리를 스트레칭해 보세요. 근육의 긴장이 풀리면 뇌 회전 속도도 빨라집니다.",
      ctaText: "바른 자세 지지 스트레칭 밴드",
      affiliateLink: "https://link.coupang.com/a/dX5MFR"
    }
  }
};