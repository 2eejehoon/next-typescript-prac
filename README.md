# 요구사항 체크리스트

## API Server

- [x] json-server를 사용하고 첨부된 db.json을 이용합니다.

## Library & Framework

- [x] Next.js는 React를 기반으로 한 정적-서버 사이드 렌더링 프레임워크 입니다. github의 README.md를 보고 사용법을 익힌 후 하단의 요구사항을 구현합니다.

- [x] CSS 프레임워크를 한가지 골라서 적용합니다. Material-UI, Ant-design, React-Bootstrap등 어떤 것도 괜찮습니다.

## 화면

- [x] 헤더 - 바디 - 푸터 형식으로 표현
- [x] 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT` + `STORE`) 표현
- [x] 푸터에는 카피라이트 추가(`@ 2020 내이름`)
- [x] ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
- [x] STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
- [x] 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
- [x] 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
- [x] 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동
