# javascript-movie-review

FE 레벨1 영화관 미션

---

# 2단계 구현 사항

- [x] 무한 스크롤
  - [x] 스크롤 이벤트는 너무 자주 일어나니 옵저버사용
- [x] 모달
  - [x] 아예 생성하고 제거하는 방식을 사용
- [x] 반응형
  - [x] 미디어 쿼리 사용
- [x] 모달 뒤 스크롤 방지
  - [x] 스크롤이 아예 사라지는 방법은 스크롤이 생겼다 사라지는 과정에서 width가 어색하게 변화하므로 스크롤을 유지하는 방법으로 고정한다.
- [x] 스크롤 내려도 상단에 헤더 고정
- [x] 페이지 최상단으로 올리는 버튼
  - [x] 페이지가 스크롤이 필요없을 정도로 짧으면 버튼을 숨긴다.
- [x] 검색어가 변경될 때마다 fetch 요청을 수행한다.
  - [x] 넷플릭스 방식

# 1단계 구현 사항

## Domain

- [x] Movie : 개별 영화 데이터 객체
  - [x] 각각의 Movie는 영화 id, title, posterUrl, voteAverage가 담긴 movie 필드를 갖는다.
  - [x] movie 필드 안의 posterUrl는 절대경로로 변환된 URL 주소의 문자열값을 갖는다.
  - [x] getter를 통해 id, title, posterUrl, averageScore를 반환할 수 있다.
- [x] pageNumberManager
  - [x] 필요한 페이지 각각의 로드된 페이지 상태를 기억한다.

## Service

- [x] MovieService
  - [x] TMDB API를 통해 필요한 영화 목록을 요청하고 수신한다.
  - [x] TMDB API를 통해 수신한 영화 목록을 도메인 객체의 배열 형태로 반환한다.
    - [x] "지금 인기 있는 영화" 목록을 생성하여 반환할 수 있다.
    - [x] 검색 키워드가 포함된 영화에 대한 "검색 결과" 목록을 생성하여 반환할 수 있다.

## Controller

- [x] MovieService를 통해 영화 데이터를 받아 컴포넌트로 넘긴다.
  - [x] 검색어 입력폼을 통해 검색어가 입력되면 해당 검색어가 포함된 영화 데이터를 받아 컴포넌트로 넘긴다.
  - [x] 영화 데이터 fetching이 실패하면 에러 메시지와 함께 재시도 버튼을 띄운다.
  - [x] 5회를 초과하여 실패시 에러 메시지와 함께 재시도 버튼을 제거한다.

## UI

- [x] Header

  - [x] 로고 이미지를 누르면 앱의 첫 화면으로 돌아간다.
  - [x] 영화 검색어 입력폼을 구현한다.

- [x] MovieContainer

  - [x] AppController로부터 받은 영화 데이터를 화면에 출력한다.
    - [x] "지금 인기 있는 영화", "키워드 검색 결과"에 따라 섹션 제목을 채운다.
    - [x] 각 영화 별로 데이터가 완전히 로드되기 전까지는 스켈레톤 UI를 생성하여 유지한다.
    - [x] 각 영화 별로 데이터가 완전히 로드되면 스켈레톤 UI 영역을 실제 영화 데이터로 대체한다.
    - [x] 포스터 이미지가 존재하지 않는 영화에는 포스터 영역에 placeholder 이미지를 채운다.
  - [x] 다음에 불러올 영화 데이터가 존재한다면 영화 목록 하단에 "더 보기" 버튼을 출력한다.
    - [x] "더 보기" 버튼을 누르면 다음 영화 데이터를 가져와 출력한다.
  - [x] 다음에 불러올 영화 데이터가 없다면 "더 보기" 버튼을 출력하지 않는다.
  - [x] 검색 결과가 없다면 화면의 스켈레톤 UI를 모두 없애고 안내 문구를 출력한다.

- [x] Button

  - [x] 타입, 크기, 형식, 이름을 입력받아 버튼을 생성해 반환한다.

- [x] Toast

  - [x] 문구를 받아 하단에 잠시 머물렀다 사라진다.

- [x] MovieItem

  - [x] 스켈레톤 아이템을 만들어 반환한다.
  - [x] 스켈레톤 아이템에 비동기로 받은 데이터를 주입해 업데이트 한다.

- [x] MovieList
  - [x] 스켈레톤 아이템 배열을 만들어 반환한다.

# test

- 오류 테스트

  - [x] 에러가 발생한 경우 toast를 띄워 안내한다.
  - [x] 에러가 발생한 경우 재요청 버튼을 눌러 다시 api를 요청할 수 있다.
  - [x] 5번을 초과한 재요청 시도시 더 이상 요청할 수 없게 제한한다.

- E2E 테스트

  - [x] 로고를 클릭하면 메인 페이지로 돌아간다.
  - [x] 더 보기를 누르면 영화 리스트를 더 불러온다.
  - [x] 더 불러올 영화 목록이 없으면 더 보기 버튼을 띄우지 않는다.
  - [x] 키워드로 검색하면 검색 페이지로 전환된다.
  - [x] 키워드와 일치하는 영화가 없으면 검색 결과가 없다고 안내한다.
  - [x] 검색어를 입력하지 않으면 검색어가 없다고 안내한다.
