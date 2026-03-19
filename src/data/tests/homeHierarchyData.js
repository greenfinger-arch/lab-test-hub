export const homeHierarchyData = {
  isReady: false,
  title: "집안의 진짜 실세는 누구? '우리 집 서열' 테스트",
  subTitle: "리모컨 주도권부터 외식 메뉴 결정까지, 당신의 진짜 계급은?",
  mainImg: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800", // 화려한 의자와 왕관 이미지
  questions: [
    {
      q: "오늘 저녁 메뉴를 정할 때, 최종 승자는 보통 누구인가요?",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600",
      a: [
        { text: "내가 먹고 싶은 걸 말하면 결국 그걸 먹게 된다.", type: "absolute-monarch" },
        { text: "상대방의 눈치를 살피며 '당신 먹고 싶은 거 먹자'고 한다.", type: "loyal-subject" }
      ]
    },
    {
      q: "휴일 오후, 거실 소파와 리모컨을 차지하고 있는 사람은?",
      img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600",
      a: [
        { text: "당연히 나! 내가 보고 싶은 채널이 곧 우리 집 국영 방송이다.", type: "absolute-monarch" },
        { text: "리모컨은 양보하고, 나는 옆에서 스마트폰을 본다.", type: "loyal-subject" }
      ]
    },
    {
      q: "집안의 큰 지출(가전, 가구 등)을 결정할 때 마지막 결재권자는?",
      img: "https://images.unsplash.com/photo-1554224155-1696413575b9?w=600",
      a: [
        { text: "내 입에서 'OK'가 떨어져야 결제가 진행된다.", type: "shadow-power" },
        { text: "나는 의견만 낼 뿐, 최종 승인은 그분(?)의 몫이다.", type: "loyal-subject" }
      ]
    },
    {
      q: "배우자가 화가 났을 때, 당신의 주된 대처법은?",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600",
      a: [
        { text: "논리적으로 조목조목 따지며 내 입장을 고수한다.", type: "absolute-monarch" },
        { text: "일단 소나기는 피하고 본다. 납작 엎드려 기분을 맞춰준다.", type: "loyal-subject" }
      ]
    },
    {
      q: "가족 단톡방에서 공지사항을 올리고 대화를 주도하는 사람은?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "나의 한 마디에 모두가 즉각 답장(확인)을 해야 한다.", type: "shadow-power" },
        { text: "나는 주로 '네', '알겠습니다' 등의 리액션 담당이다.", type: "loyal-subject" }
      ]
    }
  ],
  results: {
    "absolute-monarch": {
      name: "우리 집의 태양, '절대 군주'형",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600",
      desc: "당신은 우리 집의 살아있는 법이자 정의군요! 당신의 말 한마디에 집안의 공기가 바뀝니다. 하지만 진정한 군주는 백성(배우자)의 마음을 얻어야 하는 법! 오늘 하루는 백성을 위해 직접 요리를 하거나 리모컨을 양보해보는 자비로운 통치를 펼쳐보세요.",
      affiliateLink: "https://link.coupang.com/a/fancy-house-slippers", 
      ctaText: "군주의 품격, 프리미엄 가죽 거실화"
    },
    "shadow-power": {
      name: "조용한 지배자, '안방의 실세'형",
      img: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600",
      desc: "겉으로는 배우자가 대장인 척하게 해주지만, 사실 모든 중요한 결정은 당신의 손을 거칩니다. 부드러운 카리스마로 집안을 조종하는 진정한 고수군요! 배우자는 자기가 왕인 줄 알겠지만, 사실은 당신의 손바닥 위에서 춤추고 있다는 걸 우리끼리만 알고 있자고요.",
      affiliateLink: "https://link.coupang.com/a/aroma-oil-diffuser", 
      ctaText: "실세의 여유, 아로마 디퓨저 세트"
    },
    "loyal-subject": {
      name: "가정 평화의 수호자, '충직한 신하'형",
      img: "https://images.unsplash.com/photo-1520697830682-9426b9794697?w=600",
      desc: "당신이 서열이 낮아서 굽히는 게 아닙니다. 오직 '가정의 평화'를 위해 자신을 희생하는 성군형 신하군요! 당신의 인내와 배려 덕분에 우리 집이 이만큼 유지되고 있는 거예요. 오늘 밤엔 임금님(배우자)께 당당하게 '상소문(용돈 인상 요구)' 한 장 올려보시는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/massage-gun-pro", 
      ctaText: "고생한 신하의 어깨를 위해, 고성능 마사지건"
    }
  }
};