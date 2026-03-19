export const moneyAnimalData = {
  isReady: false,
  title: "나의 숨겨진 재테크 동물 관상",
  subTitle: "돈 냄새 맡는 나의 본능은 어떤 동물일까?",
  mainImg: "https://images.unsplash.com/photo-1579621970795-87f957f60017?w=800", // 황금색 돈과 관련된 세련된 이미지
  questions: [
    {
      q: "갑자기 보너스 100만 원이 생겼다! 당신의 첫 행동은?",
      img: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=600",
      a: [
        { text: "일단 통장에 넣고 조용히 지켜본다.", type: "hamster" },
        { text: "지금이 기회! 평소 눈여겨본 주식이나 코인을 산다.", type: "lion" }
      ]
    },
    {
      q: "친구들과의 모임에서 계산할 때 당신은?",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      a: [
        { text: "N분의 1을 정확히 계산해 단 10원도 틀리지 않게 정산한다.", type: "owl" },
        { text: "귀찮다! 일단 내가 내고 나중에 대충 받거나 잊어버린다.", type: "golden-retriever" }
      ]
    },
    {
      q: "쇼핑몰에서 '반값 파격 세일' 알림이 왔을 때 당신은?",
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
      a: [
        { text: "필요한 게 있었나 리스트를 확인하고 냉철하게 판단한다.", type: "owl" },
        { text: "이건 못 참지! 일단 사고 나서 어디에 쓸지 고민한다.", type: "golden-retriever" }
      ]
    },
    {
      q: "투자 수익률이 -20%가 찍혔다면 당신의 멘탈 상태는?",
      img: "https://images.unsplash.com/photo-1611974710173-3bc01977792b?w=600",
      a: [
        { text: "잠이 안 온다. 매분 매초 차트를 확인하며 괴로워한다.", type: "hamster" },
        { text: "언젠간 오르겠지. 어차피 잃어도 되는 돈이라며 덮어둔다.", type: "lion" }
      ]
    },
    {
      q: "당신이 가장 선호하는 부의 축적 방식은?",
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600",
      a: [
        { text: "티끌 모아 태산! 적금과 절약으로 차곡차곡 모으기", type: "hamster" },
        { text: "인생은 한 방! 확실한 정보로 크게 배팅하기", type: "lion" }
      ]
    },
    {
      q: "노후의 내 모습을 상상한다면?",
      img: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?w=600",
      a: [
        { text: "철저한 연금 설계로 평화롭고 안정적인 생활", type: "owl" },
        { text: "건물주가 되어 여유롭게 전 세계를 유람하는 생활", type: "golden-retriever" }
      ]
    }
  ],
  results: {
    hamster: {
      name: "차곡차곡 볼주머니, 알뜰 다람쥐형",
      img: "https://images.unsplash.com/photo-1425082661705-18361f07d531?w=600",
      desc: "당신은 리스크를 최소화하고 안전하게 자산을 모으는 실속파! 푼돈의 소중함을 누구보다 잘 알며, 가계부 앱 숫자가 늘어날 때 쾌감을 느끼는군요. 큰 한 방보다는 꾸준한 배당주나 적금이 당신의 소울메이트입니다. 과도한 걱정보다는 시스템을 만드는 공부가 필요해요!",
      affiliateLink: "https://link.coupang.com/a/money-book-1", 
      ctaText: "사회초년생도 1억 모으는 가계부 꿀팁 도서"
    },
    lion: {
      name: "승부사 본능, 정글의 사자형",
      img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600",
      desc: "공격적인 투자를 즐기는 당신은 타고난 하이리스크 하이리턴형! 남들이 망설일 때 과감히 진입하는 결단력이 훌륭합니다. 다만, 가끔은 본능에만 의지해 큰 손실을 볼 수 있으니 냉정한 데이터 분석이 곁들여진다면 차기 빌딩주가 될 확률 200%!",
      affiliateLink: "https://link.coupang.com/a/investment-chart", 
      ctaText: "상위 1% 투자자의 비밀, 차트 분석법 강의"
    },
    owl: {
      name: "데이터 분석가, 지혜로운 올빼미형",
      img: "https://images.unsplash.com/photo-1543549732-2332ca993860?w=600",
      desc: "감정에 휘둘리지 않고 철저히 지표와 숫자로 판단하는 냉철한 전략가군요. 남들이 테마주에 열광할 때 재무제표를 뜯어보는 당신! 당신의 꼼꼼함은 자산을 지키는 가장 큰 방패입니다. 포트폴리오 다변화에 집중한다면 무너지지 않는 부의 제국을 건설할 거예요.",
      affiliateLink: "https://link.coupang.com/a/finance-laptop", 
      ctaText: "투자 분석용 가성비 최강 노트북 모음"
    },
    "golden-retriever": {
      name: "긍정 파워 풀매수, 낙천적인 리트리버형",
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
      desc: "돈을 쓰는 것도, 버는 것도 즐겁게! 당신은 사람을 좋아하고 소비를 통해 행복을 느끼는 타입입니다. 돈이 나가도 '또 벌면 되지!'라는 긍정 마인드가 강점이지만, 자칫하면 통장이 '텅장'이 될 수 있어요. 강제 저축 장치를 마련해두는 지혜가 필요합니다!",
      affiliateLink: "https://link.coupang.com/a/auto-saving-app", 
      ctaText: "저절로 돈이 모이는 자동 저축 저금통"
    }
  }
};