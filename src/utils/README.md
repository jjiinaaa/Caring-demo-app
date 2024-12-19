# 유틸리티 함수

특정 작업을 수행하는 작은 크기의 재사용 가능한 코드 조각입니다. 보통 반복적이고 자주 사용되는 작업을 처리하기 위해 만들어지며, 여러 곳에서 재사용할 수 있도록 설계됩니다. 유틸리티 함수는 특정 로직을 하나의 함수로 추상화하여 코드의 중복을 줄이고, 유지보수성을 높이며, 가독성을 향상시키는 데 도움을 줍니다.

# 유틸리티 함수의 예시

- 날짜 처리 함수
  - 날짜를 포맷하거나 특정 날짜 간격을 계산하는 함수 등

```javascript
// 날짜 포맷팅 함수
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
```

- 문자열 처리 함수
  - 문자열을 변환하거나 특정 문자열을 찾는 함수 등

```javascript
// 문자열 대소문자 변환 함수
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
```

- 배열/객체 처리 함수
  - 배열이나 객체에서 값을 찾거나 필터링하는 함수 등

```javascript
// 배열에서 중복 값 제거하는 함수
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

- 유효성 검사 함수
  - 입력 값이 특정 조건을 만족하는지 확인하는 함수 등

```javascript
// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
```

- 숫자 처리 함수
  - 숫자 포맷팅이나 계산 관련 함수 등

```javascript
// 금액을 천 단위로 구분하는 함수
function formatCurrency(amount) {
  return amount.toLocaleString();
}
```

- 유틸리티 함수의 특징
  - 재사용성: 한 번 작성한 유틸리티 함수는 여러 곳에서 반복적으로 사용할 수 있습니다.
  - 단일 책임: 유틸리티 함수는 하나의 작업만을 수행해야 하며, 그 기능에 집중합니다.
  - 모듈화: 코드의 복잡도를 줄이고 모듈화하여, 다른 기능에 영향을 주지 않고 쉽게 수정할 수 있게 합니다.
- 유틸리티 함수의 사용 사례
  - 폼 데이터 검증: 입력값이 유효한지 검사하는 함수 (isValidEmail, isValidPhoneNumber 등)
  - UI 구성 요소에 대한 공통 로직: 버튼 클릭 시 발생하는 공통 이벤트 처리, 날짜 포맷팅 등
  - API 응답 처리: 응답 데이터를 일정 형식으로 정리하는 함수
  - 배열이나 객체의 필터링 및 변환: 배열에서 중복을 제거하거나, 객체를 특정 기준에 맞게 정렬하는 함수 등
- 유틸리티 함수 관리 중요 사항항
  - utils/ 폴더: 유틸리티 함수들은 일반적으로 utils/라는 디렉토리에 모아서 관리합니다.
  - 명확한 네이밍: 유틸리티 함수는 기능에 맞는 이름을 짓는 것이 중요합니다. 예를 들어, capitalizeFirstLetter와 같은 명확한 함수 이름을 사용하여 함수가 어떤 일을 하는지 쉽게 알 수 있게 합니다.
  - 유틸리티 함수는 다양한 종류가 있으며, 여러 프로젝트에서 공통적으로 사용되는 로직을 효율적으로 관리하고 재사용하는 데 큰 도움이 됩니다.
