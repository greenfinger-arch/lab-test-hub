export const deskData = {
  isReady: false,
  id: "desk",
  title: "나의 업무 성향별 '데스크테리어' 진단",
  subTitle: "당신의 작업 스타일을 분석해 업무 효율을 200% 높여줄 최적의 데스크 셋업을 제안합니다.",
  mainImg: "/images/desk-main.jpg", 
  
  questions: [
    {
      id: 1,
      q: "책상 앞에 앉았을 때, 가장 먼저 하는 행동은?",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      a: [
        { text: "할 일 목록을 정리하며 모니터를 세팅한다", type: "PRO" }, // 전문가형
        { text: "은은한 조명을 켜고 좋아하는 향을 세팅한다", type: "MOOD" } // 감성형
      ]
    },
    {
      id: 2,
      q: "당신의 책상 위는 어떤 상태에 가까운가요?",
      img: "https://images.unsplash.com/photo-1489257715757-ca3c22a06c73?w=600",
      a: [
        { text: "필요한 물건만 딱 있는 칼 같은 미니멀리즘", type: "MIN" }, // 실용/미니멀
        { text: "좋아하는 피규어, 엽서 등으로 꽉 찬 맥시멀리즘", type: "MOOD" }
      ]
    },
    {
      id: 3,
      q: "업무 중 가장 큰 방해 요소는 무엇인가요?",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600",
      a: [
        { text: "어깨와 목의 통증, 어정쩡한 자세", type: "PRO" },
        { text: "정리되지 않은 복잡한 케이블과 전선들", type: "MIN" }
      ]
    },
    {
      id: 4,
      q: "새로운 장비를 산다면 가장 중요하게 생각하는 것은?",
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
      a: [
        { text: "성능과 스펙, 그리고 확실한 작업 효율", type: "PRO" },
        { text: "우리 집 인테리어와 어울리는 디자인", type: "MOOD" }
      ]
    },
    {
      id: 5,
      q: "야간 작업을 할 때, 당신의 스타일은?",
      img: "https://images.unsplash.com/photo-1534483321129-c69f10b735c8?w=600",
      a: [
        { text: "환한 메인 조명 아래서 빠르게 집중!", type: "MIN" },
        { text: "간접 조명만 켜놓은 아늑한 분위기에서 몰입!", type: "MOOD" }
      ]
    }
  ],
  
  results: {
    PRO: {
      name: "생산성 폭발! '퍼포먼스 전문가'형",
      desc: "당신에게는 최고의 효율을 뽑아낼 수 있는 장비가 최우선입니다! 거북목을 방지하는 모니터암과 장시간 타이핑에도 무리가 없는 인체공학적 키보드를 강력 추천합니다.",
      img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400",
      ctaText: "🚀 업무 속도 2배! 필수 장비 리스트 보기",
      affiliateLink: "https://yourblog.com/top-performance-gear"
    },
    MOOD: {
      name: "영감이 샘솟는 '감성 아티스트'형",
      desc: "당신에게 책상은 단순한 작업 공간 그 이상입니다. 눈의 피로를 덜어주는 모니터 스크린바와 무드 있는 데스크 매트로 당신만의 창의적인 영역을 완성해 보세요.",
      img: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=400",
      ctaText: "✨ 분위기 끝판왕! 감성 데스크템 추천",
      affiliateLink: "https://yourblog.com/mood-deskterior"
    },
    MIN: {
      name: "군더더기 없는 '스마트 미니멀리스트'형",
      desc: "복잡한 건 딱 질색인 당신! 책상 위 공간을 넓게 쓸 수 있는 무선 충전기 세트와 깔끔한 케이블 정리함을 통해 심플하지만 강력한 작업 환경을 구축해 보세요.",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400",
      ctaText: "📏 책상이 넓어지는 마법! 정리템 보기",
      affiliateLink: "https://yourblog.com/minimal-desk-setup"
    }
  }
};