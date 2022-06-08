# Hello NextJS

https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

# 리액트

- 리액트는 인터랙티브한 UI를 만들기 위한 라이브러리임
- 인터랙티브 UI란, 사용자가 상호작용할 수 있는 UI를 말한다
- react는 리액트 핵심 라이브러리이고, react-dom은 DOM과 함께 리액트를 쓸 수 있게 해주는 라이브러리임  
    ```html
    <script type="text/jsx">
      const app = document.getElementById("app")
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
    </script>
    ```
- 리액트는 컴포넌트를 쌓아서 페이지를 만듬.
  - 한번 만든 컴포넌트를 다른 컴포넌트에서 재활용하는것도 가능함
- 컴포넌트에 데이터를 넘기려면 props를 사용하면 됨
- 컴포넌트의 상태를 만드려면 useState Hook을 사용해서 state를 만들면 됨.
  - setState를 통해서만 state를 변경해야 함

# NextJS

### NextJS는 프레임워크!

- NextJS는 리액트에 필요한 도구 및 구성을 처리하고, 애플리케이션 구조, 기능 최적화를 해주는 프레임워크임!
- 타입스크립트 설정, 린트 설정, 컴파일, 번들링, minify등의 세팅을 NextJS에서 대신 제공함.
  - 사실 NextJS라고 용빼는 재주가 있는건 아님. 얘도 우리가 하는것처럼 설정하는건데, 이걸 우리가 안하고 얘들이 해주는걸 쓰면 된다는게 장점임
- 그 외에도 Next.JS 컴파일러라는게 따로 있다고 함. SWC라는게 있다는데 자세한건 모르겠음. 좀 더 조사해봐야할듯

### 코드 분할(Code Spliting)

- 페이지마다 코드 분할을 해서 작은 코드조각인 청크로 분할함. 이를 코드 분할(Code Spliting)이라고 함
- 페이지를 로드할 때, 정말 필요로 하는 청크만 받음. 이렇게 해서 페이지 초기 로드 시간을 최소화함.
- 공유되는 코드는 다시 다운하지 않도록 다른 번들로 분할됨
- 초기 페이지 로드 후, 탐색가능성이 있는 다른 페이지를 미리 로드([pre-load](https://nextjs.org/docs/api-reference/next/link))할 수 있음.
- [Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import)를 통해 처음 로드되는 코드를 수동으로 분할할 수 있음
