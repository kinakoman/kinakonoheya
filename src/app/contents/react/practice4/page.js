import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"

export const data = {
  title: "【React入門#4】タグとコンポーネント",
  tag: ["React", "TypeScript"],
  date: ["2024", "12", "11"],
  // latest: ["9999", "99", "99"]
}
export const metadata = {
  title: `${data.title} | きなこの部屋`
}

export default function test() {
  return (
    <>
      <Contents data={data}>
        <Section title="はじめに">
          <Text>この記事はReact入門第3回の記事の続きになります。</Text>
          <LinkIn link="react/practice3" title="【React入門#3】TailwindCSSの導入"></LinkIn>
          <Text>今回はReactのアプリケーション開発で最も基礎的な知識であるTSXでのhtmlタグの記述方法と、コンポーネントの作成についてまとめます。
          </Text>
          <Text>また、今回紹介している内容は以下の記事でも詳しく紹介しています。</Text>
          <LinkIn link="next/practice4" title="【Next.js入門#4】コンポーネントの作成"></LinkIn>
          <LinkIn link="next/practice5" title="【Next.js入門#5】propsの使い方"></LinkIn>

        </Section>
        <Section title="TSXでのタグ記述">
          <SubSection>TSXとは</SubSection>
          <Text>そもそもTypeScriptとはJavaScriptに静的な型付けを採用した言語であり、
            JavaScriptに変換して実行されます。
          </Text>
          <Text>ReactのアプリケーションはJSX(JavaScript XML)で記述され、
            jsファイル内でhtmlタグの記述が出来るようになっています。
          </Text>
          <Text>TSXはJSXをTypeScriptで記述したものであり、Reactのアプリケーションに静的な型付け機能を追加します。
          </Text>
          <SubSection>TSXの記述方法</SubSection>
          <Text>TSXも基本的には通常のTypeScriptと同様に記述できます。</Text>
          <Text>実際にhtmlタグの記述を行うのはexport default functionで定義したreturn内です。
            returnの中では通常のTypeScriptの記述は許されず、
            また記述できるhtmlタグの親要素は1つまでになり、複数のタグを記述したい場合は空タグ{`<></>`}等の子要素として記述します。。
          </Text>
          <Text>returnの中でTypeScriptの変数や関数を記述するには{`{}`}の中で記述します。</Text>
          <Text>ReactアプリケーションではApp.tsxのexport default functionのreturn内の記述がデフォルトで出力されます。</Text>
          <Text>実際に編集を行ってみます。</Text>
          <CodeBox lang="typescript" comment="/react-sample/src/App.tsx">{`const text: string = "This is contents area."

function App() {
  return (
    <>
      <div className='text-center'>This is React App.</div>
      <div className='h-32 w-full bg-red-200 flex justify-center items-center'>
        <div>{text}</div>
      </div>
    </>
  );
}

export default App;
`}</CodeBox>
          <ImageSet alt="タグ編集後画像" height={200} width={700} image={image1} />
        </Section>
        <Section title="コンポーネント">
          <SubSection>コンポーネントとは</SubSection>
          <Text>通常のhtmlファイルを用いたWebアプリケーションは1つのファイルでアプリケーション全体を記述しますが、
            Reactのアプリケーションではコンポーネントと呼ばれるパーツ単位でアプリケーションを構築します。
          </Text>
          <Text>コンポーネントはTSXファイルとして記述し、export default functionのreturn内にタグを記述します。
            上で編集したApp.txsもコンポーネントとみなすことが出来ます。
          </Text>
          <Text>コンポーネントとして定義する関数とTSXファイルの一文字目は大文字にします。さらに、
            コンポーネントを利用する親ファイルで関数としてimportします。
            importしたコンポーネントはreturn内で通常のタグと同様に記述して利用できます。
          </Text>
          <Text>では、実際にコンポーネントを作成してApp.tsxで利用してみます。</Text>
          <CodeBox lang="typescript" comment="/react-sample/src/components/Home.tsx">{`export default function Home() {
    return (
        <>
            <div className="w-full text-center font-bold">This is Home.</div>
        </>
    )
}  `}</CodeBox>
          <CodeBox lang="typescript" comment="/react-sample/src/components/About.tsx">{`export default function About() {
    return (
        <>
            <div className="w-full text-center font-bold">This is About.</div>
        </>
    )
}`}</CodeBox>
          <CodeBox lang="typescript" comment="/react-sample/src/App.tsx">{`import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <div className='text-center text-bold bg-red-200'>This is React App.</div>
      <Home />
      <About />
    </>
  );
}

export default App;
`}</CodeBox>
          <ImageSet alt="コンポーネント適用後画像" height={200} width={700} image={image2} />
        </Section>
        <Section title="propsの使い方">
          <SubSection>propsの渡し方</SubSection>
          <Text>propsとはコンポーネント間で値のやり取りを行う変数のことです。</Text>
          <Text>TSXではpropsを利用する子コンポーネント側で、propsの変数のデータ型を型エイリアスとして定義します。
            さらに、export defult fuctionの引数として{`{propsの変数}:propsの型エイリアス`}の形でpropsの変数を受け取ります。
          </Text>
          <Text>
            親コンポーネント側では子コンポーネントと一緒にpropsの変数にTypeScriptの値として代入します。
          </Text>
          <CodeBox lang="typescript" comment="/react-sample/src/components/List.tsx">{`// propsの型を定義
export type props = {
    title: string
    num: number
}

export default function List({ title, num }: props) {
    return (
        <>
            <div className="font-bold text-xl">{title + num}</div>
        </>
    )
}`}</CodeBox>
          <CodeBox lang="typescript" comment="/react-sample/src/App.tsx">{`import Home from './components/Home';
import About from './components/About';
import List, { props } from './components/List';

const arr: props[] = [  // props型に合わせた配列データ
  { title: "This is List content", num: 1 },
  { title: "This is List content", num: 2 },
  { title: "This is List content", num: 3 }
]

function App() {
  return (
    <>
      <div className='text-center text-bold bg-red-200'>This is React App.</div>
      <Home />
      <About />
      <div className='flex justify-center items-center flex-col'>
        {arr.map((element: props) => {
          return (
            <List title={element.title} num={element.num}></List>
          )
        })}
      </div>
    </>
  );
}

export default App;`}</CodeBox>
          <ImageSet alt="propsの受け渡し" height={200} width={700} image={image3} />
          <SubSection>Children</SubSection>
          <Text>Childrenは特殊な扱いのpropsになります。</Text>
          <Text>Childrenは通常のprops変数のように受け渡しをするのではなく、
            通常のタグのように子コンポーネントタグの子要素として渡します。
            子要素として渡されたChildrenは子コンポーネントの中で利用できます。
          </Text>
          <Text>ChildrenはReactChildren型として定義されます。</Text>
          <Text>先ほど作成したList.tsxの中でchildrenを利用したコンポーネントを利用してみます。</Text>
          <CodeBox lang="typescript" comment="/react-sample/src/components/Children.tsx">{`import React from "react"

type props = {
    children: React.ReactNode  //childrenの型定義
}

export default function Children({ children }: props) {
    return (
        <>
            <div className="text-red-600">{children}</div>
        </>
    )
}`}</CodeBox>
          <CodeBox lang="typescript" comment="/react-sample/src/components/List.tsx">{`import React from "react"

type props = {
    children: React.ReactNode  //childrenの型定義
}

export default function Children({ children }: props) {
    return (
        <>
            {/* 子要素の色を赤に */}
            <div className="text-red-600">{children}</div>
        </>
    )
}`}</CodeBox>
          <CodeBox lang="typescript" comment="/react-sample/src/App.tsx">{`import Home from './components/Home';
import About from './components/About';
import List, { props } from './components/List';

const arr: props[] = [  // props型に合わせた配列データ
  { title: "This is List content", num: 1 },
  { title: "This is List content", num: 2 },
  { title: "This is List content", num: 3 }
]

function App() {
  return (
    <>
      <div className='text-center text-bold bg-red-200'>This is React App.</div>
      <Home />
      <About />
      <div className='flex justify-center items-center flex-col'>
        {arr.map((element: props) => {
          return (
            <List key={element.num} title={element.title} num={element.num}></List>
          )
        })}
      </div>
    </>
  );
}

export default App;`}</CodeBox>
          <ImageSet alt="childrenの利用" height={200} width={700} image={image4} />
          <Text>List.tsxのテキストの配色が変更できていることが分かります。</Text>
        </Section>
        <Section title="おわりに">
          <Text>今回の記事はここまでです。Reactにおけるルーティングについて解説します。
          </Text>
          <LinkIn link="react/practice5" title="【React入門#5】Reactのルーティング"></LinkIn>
        </Section>
        {/* <Section title="セクション名">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>S
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <LinkIn link={"PythonInstall"} title={"ページのタイトルページのタイトルページのタイトル"}></LinkIn>
                    <CodeBox lang={"javascript"} comment={"コードの例"}>{`console.log("test")`}</CodeBox>
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} />
                </Section> */}
      </Contents>
    </>
  )
}
