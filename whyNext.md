### Pre-rendering

Pre-rendering은 Next.js에서 중요한 컨셉 중 하나다.
기본적으로, Next.js는 모든 페이지를 pre-render을 한다.
이는 Next.js가 client-side JavaScript로 모든 작업을 수행하는 대신 미리 각 페이지에 대해서 HTML을 만들어두는 것을
의미한다.
Pre-rendering은 SEO에서 더 나은 퍼포먼스를 보여줄 수 있다.
이렇게 만들어진 HTML은 해당 페이지에 적은 자바스크립트 코드와 연관된다.
페이지가 브라우저에 로드될 때, 해당 자바스크립트 코드가 작동하고 완전한 인터렉티브 페이지가 되도록 만든다.
이를 "Hydration" 이라고 한다.

### seo의 이점

일반 CRA와 달리 서버쪽에서 html의 태그를 반환해서 내려주기때문에 기존의 방법 root div 안에 빈 html을 담아주는거와 비교하여
검색엔진 최적화와 우선순위의 강점이 있다.(h1, 시멘틱 등등)

### Fetch Style

1. option 1 : fetch products on "server side" (getStaticProps)
   용도 : 페이지 경로가 외부데이터에 연동된다
   즉, 기본적인 클라이언트사이드의 데이터 호출 방법과 다르게 마운트 될때
   데이터를 그제서야 가져오는것이 아닌 가지고 나서 화면을그릴때 '정적인 상황'(업데이트 할 필요가 없는 페이지)

   업데이트 시점 : 프로덕션이 배포될때

- 기본패턴 next js 함수 getStaticProps 사용

```
  export async function getStaticProps() {
    const res = await fetch('https~');
    const products = await res.json();
    return { props: { products }};
  }
```

- 개선안 : getStaticProps 내 revalidate 시간을 주어서 시간마다 데이터 갱신 (hybridation..?)

2. option 2 : fetch products on client side (in useEffect)
   용도 : 항상 최신의 데이터를 사용하는 동적 페이지를 위하여

   업데이트 시점 : 데이터가 바뀔때마다

- 기본패턴 react useEffect or useLayoutEffect

```
  export async function getProducts() {
    const response = await fetch(`https~`);
    const products = await response.json();
    return products;
  }
  const [list, setList] = useState([]);

  useEffect(()=> {
    getProducts().then(setList)
  },[]);

```

3. option 3 : fetch products on server side(getServerSideProps)

   용도 : 페이지 경로가 외부데이터에 연동된다. 반동적

   업데이트 시점 : 새로고침하여 다시 서버에 요청

- 기본패턴 next js 함수 getServerSideProps 사용

```
  export async function getServerSideProps() {
    const res = await fetch('https~');
    const products = await res.json();
    return { props: { products }};
  }
```
