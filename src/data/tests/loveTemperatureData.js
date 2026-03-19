export const loveTemperatureData = {
  isReady: false,
  title: "우리의 '연애 온도' 테스트: 뜨거운 라떼 vs 시원한 에이드",
  subTitle: "입안을 적시는 온도처럼, 당신의 사랑은 몇 도인가요?",
  mainImg: "https://images.unsplash.com/photo-1517701550927-30cf4bb1dba5?w=800", // 김이 모락모락 나는 커피와 얼음이 가득한 음료 대비 사진
  questions: [
    {
      q: "사랑하는 연인과 헤어지고 집으로 돌아가는 길, 당신의 마음은?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "방금 헤어졌는데도 벌써 보고 싶어 온몸이 근질거린다.", type: "boiling" },
        { text: "오늘 즐거웠던 기억을 되새기며 혼자만의 여유를 즐긴다.", type: "refreshing" }
      ]
    },
    {
      q: "연인이 갑자기 '나 오늘 좀 우울해'라고 연락한다면?",
      img: "https://images.unsplash.com/photo-1520113232655-6b1d2f74468d?w=600",
      a: [
        { text: "당장 집 앞으로 달려가서 꽉 안아줘야 직성이 풀린다.", type: "boiling" },
        { text: "왜 우울한지 차분히 들어주고 해결책이나 맛집을 검색한다.", type: "refreshing" }
      ]
    },
    {
      q: "당신이 생각하는 이상적인 데이트의 빈도는?",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      a: [
        { text: "할 수만 있다면 매일매일, 24시간 붙어 있고 싶다.", type: "boiling" },
        { text: "주 2~3회 정도, 각자의 삶도 존중하는 건강한 거리감이 좋다.", type: "refreshing" }
      ]
    },
    {
      q: "연인과 사소한 말다툼을 했을 때, 당신의 스타일은?",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600",
      a: [
        { text: "감정이 소용돌이치며 눈물부터 나거나 화끈하게 풀고 싶다.", type: "boiling" },
        { text: "일단 감정을 가라앉히고 논리적으로 무엇이 문제인지 생각한다.", type: "refreshing" }
      ]
    },
    {
      q: "우리의 미래를 상상할 때, 당신의 머릿속은?",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      a: [
        { text: "함께 집을 꾸미고 아이 이름까지 짓는 뜨거운 망상", type: "boiling" },
        { text: "어떻게 하면 경제적으로 안정적인 미래를 만들지 그리는 현실적 구상", type: "refreshing" }
      ]
    }
  ],
  results: {
    boiling: {
      name: "심장을 녹이는 90°C, '진득한 핫초코'형",
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600",
      desc: "당신의 사랑은 그 어떤 불길보다 뜨겁군요! 연애를 시작하면 온 세상을 상대방으로 채워버리는 '직진 본능'의 소유자입니다. 진하고 달콤한 핫초코처럼 당신의 사랑은 상대방의 얼어붙은 마음까지 단숨에 녹여버리지만, 가끔 너무 뜨거워 상대가 데지 않게 조심할 필요가 있어요!",
      affiliateLink: "https://link.coupang.com/a/hot-chocolate-marshmallow", 
      ctaText: "더 뜨겁게 사랑해! 마시멜로 듬뿍 핫초코 세트"
    },
    refreshing: {
      name: "머리까지 찡한 -5°C, '톡 쏘는 청포도 에이드'형",
      img: "https://images.unsplash.com/photo-1543158149-415206305609?w=600",
      desc: "쿨하고 상쾌한 매력의 소유자! 당신은 연애를 할 때도 자기 자신을 잃지 않는 건강한 자존감을 가졌네요. 톡 쏘는 탄산처럼 가끔은 짜릿한 설렘을 주지만, 기본적으로는 깔끔하고 시원한 관계를 선호합니다. 당신과 함께라면 질릴 틈이 없는 청량한 연애가 가능해요.",
      affiliateLink: "https://link.coupang.com/a/sparkling-water-machine", 
      ctaText: "언제나 시원하게! 탄산수 제조기 메이커"
    },
    mild: {
      name: "기분 좋은 36.5°C, '포근한 카페라떼'형",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      desc: "너무 뜨겁지도, 너무 차갑지도 않은 완벽한 체온의 사랑! 당신은 상대방을 편안하게 해주는 마법 같은 능력이 있군요. 부드러운 우유 거품 같은 다정함으로 오랜 시간 은은하게 사랑을 이어가는 스타일입니다. 당신 곁에 있는 사람은 세상에서 가장 안락한 휴식을 취하고 있을 거예요.",
      affiliateLink: "https://link.coupang.com/a/milk-frother-pro", 
      ctaText: "부드러운 사랑의 완성! 전동 우유 거품기"
    }
  }
};