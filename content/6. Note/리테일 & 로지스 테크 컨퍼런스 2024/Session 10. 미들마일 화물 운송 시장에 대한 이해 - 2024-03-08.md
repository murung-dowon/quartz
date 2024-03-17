---
tags:
  - AI
  - Logistics
  - Midlemile
aliases:
  - TMAP_mobility
type: Note
created: 2024-03-07
summary: true
reviewed:
---
### Topic:: [[리테일 & 로지스 테크 컨퍼런스 2024]]
**Previous Note** : [[Session 9. 생성형 AI, 이커머스에서의 활용 방안 - 2024-03-08]]

- - -
## Summary
- 미들마일 시장이 뚫기 어려운 시장임은 알고 있었는데, 왜 어려운지에 관한 배경과 더불어 미들마일에 관한 이해도를 높일 수 있어서 감사했다. 
- 그리고 티맵 모빌리티가 이 어려운 미들마일 시장에서 어떤 액션들을 하고 있고, 궁극적으로 그리는 청사진이 어떤것인지 알 수 있었다.
- 어떻게 Freight Price Model의 이름이 SMTM(쇼미더머니), CWAL(캔트웨잇애니롱거)... 젊어보이면서도 쉽고 직관적이여서 확 각인되었다 ㅎ


- - -
## Notes
- Speech : 티맵 모빌리티, 박일섭 TMAP화물 담당

AI / DX가 가져올 생태계의 변화 

![](https://i.imgur.com/84K2GSo.png)


### 1. 미들마일 물류에 대한 이해

![](https://i.imgur.com/n868tW2.png)

- 제조기업 -> 물류 센터 / 대리점
- 기업과 기업 간 중간 물류 구간으로, 37조 규모의 시장으로 라스트 마일의 약 3배 정도 된다. 

미들마일 물류 시장이 발전하지 못한 이유

![](https://i.imgur.com/NFcYw1C.png)

- 다양한 이해관계자들이 얽혀있어서 비효율적인 중개 비용이 발생한다. 

디지털 심화도가 낮은 주선 방식

![](https://i.imgur.com/jFplXdU.png)

- 배차 담당자의 주관적 경험과 업무 역량 (감)에 따라, 배차 성공률과 수익률이 결정된다. 
- (이미지 : 주선사의 배차 업무 과정)

### 2. 글로벌 트렌드로 알아보는 미들마일 물류의 미래
물류 디지털 혁신을 견인하는 신흥 Player

![](https://i.imgur.com/TkYkBGl.png)


#### Uber Freight : 기술 기반 물류 플랫폼의 사례

![](https://i.imgur.com/4TVW7TN.png)

- 예상 견적 테이블
- 운송 일정관리 API
- 자율주행 화물 차량 네트워크 구축
- 운송 현황 관제

#### Convoy : AI기반 마켓 플레이스 사례 (폐업 수순)

![](https://i.imgur.com/cn6p44d.png)

- 실시간 Dynamic Pricing
- 자동 화물 매칭
- 운송 관리 (TMS)
- Hi-Fi Visibility
- 주선사와의 파트너십 (CONVOY for brokers)

### 3. 데이터 기반 화물운송 플랫폼 : TMAP 화물
사람의 이동에서 사물의 이동으로 : IT 기술력과 물류 전문성 결합으로 시너지 효과 기대 
- 티맵 : AI / DATA, 플랫폼 전문성, 운송 경로 최적화
- 물류 전문기업 : 전국 공급망, 배차 경쟁력, 운영 노하우

#### 가장 중요한 것은 : 단가

![](https://i.imgur.com/m6JbS4y.png)

- Dynamic Pricing으로 답을 찾아보려했다.
- 대부분 2회 이상의 단가 조정이 되어야 차주에게 배차가 가능하다.

#### AI 기반 단가 모델
- 실시간 데이터 (화물차 수요 / 공급 현황)
- 외생 변수 (기온, 강수량, 적설량, 풍속)
- 운송 조건 (상/하차 위치, 상/하차 일시, 화물 차종 / 톤 수, 운송 거리, 운송 품목, 부가 옵션)
- ML with XGboost

#### SMTM / CWAL (단가 모델들)
CWALc : 현재 단가로 배차가 가능한지, 불가하다면 이전에는 얼마의 배차로 적용했었는지
CWALp : 예전의 단가는 얼마로 배차가 진행되었는지 

### 4. AI 자율주행 기반 간선운송 자동화

![](https://i.imgur.com/jtRBKE0.png)

자율주행 유상운송에 대한 상용화 검증 w.마스오토
- MARS AUTO와의 협업 : 15톤 트럭에 1000만원 정도의 자율주행 

대량화물 처리 프로세스 구축을 통한 운영 만족도 제고
- 대량 화물 엑셀 업로드
- 채널별 일괄 자동 배차

### 앞으로의 목표

![](https://i.imgur.com/KAmPynv.png)
