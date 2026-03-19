export const salaryLupinData = {
  isReady: false,
  title: "나의 월급 루팡 등급 테스트",
  subTitle: "전생에 베짱이였을 확률은? 나의 은밀한 루팡 등급 확인!",
  mainImg: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800", // 커피와 노트북, 여유로운 분위기
  questions: [
    {
      q: "출근 직후, 당신이 가장 먼저 하는 '루틴'은?",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
      a: [
        { text: "PC 전원을 켜자마자 메일함과 업무 스케줄 확인", type: "ant" },
        { text: "커피 한 잔의 여유와 함께 오늘의 뉴스(또는 커뮤니티) 탐닉", type: "grasshopper" }
      ]
    },
    {
      q: "상사나 동료가 내 자리 근처로 다가오는 기척이 느껴진다면?",
      img: "https://images.unsplash.com/photo-1534067783941-51c9c23ceff3?w=600",
      a: [
        { text: "하던 업무 화면을 더 크게 띄우고 집중하는 척한다.", type: "pro-lupin" },
        { text: "자연스럽게 업무 질문을 던지며 열일 중임을 어필한다.", type: "ant" }
      ]
    },
    {
      q: "메신저에서 'ㅋㅋ'가 들어간 사담을 나누고 있을 때 당신의 표정은?",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
      a: [
        { text: "입은 웃고 있지만 손가락은 키보드를 격렬하게 두드린다.(보고서 작성하듯)", type: "pro-lupin" },
        { text: "들킬까 봐 조마조마해서 빨리 창을 내린다.", type: "rookie" }
      ]
    },
    {
      q: "점심시간이 끝난 직후, 오후 업무를 시작하기 전 당신은?",
      img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f52?w=600",
      a: [
        { text: "식곤증을 이기기 위해 바로 업무에 몰입한다.", type: "ant" },
        { text: "양치질을 20분간 하거나 빈 회의실에서 명상을(잠깐 존다) 한다.", type: "grasshopper" }
      ]
    },
    {
      q: "나에게 오늘 '월급 루팡'이란 어떤 의미인가요?",
      img: "https://images.unsplash.com/photo-1522071823930-74df21dd01d1?w=600",
      a: [
        { text: "번아웃을 막기 위한 최소한의 자기방어", type: "pro-lupin" },
        { text: "하면 안 되지만 자꾸 빠져드는 달콤한 유혹", type: "rookie" }
      ]
    },
    {
      q: "퇴근 30분 전, 당신의 상태는?",
      img: "https://images.unsplash.com/photo-1504194104404-433180773017?w=600",
      a: [
        { text: "이미 짐은 다 쌌다. 마우스 커서는 시계와 퇴근 버튼에.", type: "grasshopper" },
        { text: "오늘 못한 업무가 없는지 끝까지 리스트를 점검한다.", type: "ant" }
      ]
    }
  ],
  results: {
    ant: {
      name: "성실함이 죄라면 무기징역, '일개미 영웅'",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      desc: "루팡은커녕 남의 일까지 도맡아 하는 당신! 전생에 나라를 구한 일꾼이었나요? 당신의 성실함 덕분에 회사가 돌아가지만, 정작 당신의 에너지는 고갈되고 있을지 몰라요. 가끔은 당당하게 루팡의 기술을 한 스푼 섞어보세요. 당신에겐 휴식이 필요합니다!",
      affiliateLink: "https://link.coupang.com/a/energy-drink", 
      ctaText: "일개미의 필수템! 고농축 비타민 & 피로회복제"
    },
    grasshopper: {
      name: "여유로운 영혼, '낭만 베짱이'",
      img: "https://images.unsplash.com/photo-1494173853114-728150448b57?w=600",
      desc: "인생은 즐거워야 한다는 마인드! 전생에 흥이 많은 베짱이였을 확률 99%입니다. 남들 바쁠 때 창밖을 보며 계절의 변화를 느끼는 당신의 여유가 부럽네요. 업무 효율은 짧고 굵게! 남는 시간은 당신의 행복을 위해 쓰세요. 물론 들키지 않을 정도만요!",
      affiliateLink: "https://link.coupang.com/a/noise-cancelling", 
      ctaText: "완벽한 루팡을 위한 노이즈 캔슬링 이어폰"
    },
    "pro-lupin": {
      name: "사무실의 유령, '프로 루팡 마스터'",
      img: "https://images.unsplash.com/photo-1506485334402-417d72183d7a?w=600",
      desc: "당신은 이미 경지에 올랐습니다. 분명 자리에 앉아있는데 아무도 당신이 쇼핑 중이라는 걸 눈치채지 못하죠. 현란한 단축키 활용과 포커페이스는 국보급! 당신의 영리한 에너지 관리가 오래가는 직장 생활의 비결입니다. 이 능력을 재테크 공부에 써보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/security-film", 
      ctaText: "루팡의 생존권 보장! 모니터 정보보호 필름"
    },
    rookie: {
      name: "심장이 쫄깃한, '초보 루팡 새싹'",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
      desc: "딴짓을 하면서도 뒤통수가 따가워 자꾸 뒤를 돌아보는 당신! 아직은 양심이 살아있는 귀여운 루팡이네요. 딴짓하는 시간보다 들킬까 봐 걱정하는 시간이 더 길진 않나요? 차라리 확실하게 쉬고 확실하게 일하는 루틴을 만들어보세요. 당신의 심장은 소중하니까요!",
      affiliateLink: "https://link.coupang.com/a/desk-diffuser", 
      ctaText: "긴장 완화에 최고! 사무실용 아로마 디퓨저"
    }
  }
};