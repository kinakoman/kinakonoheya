
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "fancy indexing について理解する",
    tag: ["Python"],
    date: ["2024", "11", "04"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>Numpy配列の要素指定の方法にfancy indexingがあります。
                        便利ですが指定の仕方が少しいややこしいのでまとめておきます。
                    </Text>
                </Section>
                <Section title="Numpy配列のインデキシング">
                    <Text>Numpy配列も他の言語の配列を同様にインデキシングでの要素の取り出しが可能です。</Text>
                    <CodeBox lang={"python"} comment={"Numpy配列のインデキシング"}>{`>>> import numpy as np
>>> arr=np.array([[0,1,2],[3,4,5]])
>>> print(arr[0,1])
1
>>> print(arr[0][1])
1`}</CodeBox>
                </Section>
                <Section title="fancy indexing">
                    <Text>普通のインデキシングでは要素は1つずつ取り出しますが、fancy indexingでは複数を一括で取り出せます。</Text>
                    <CodeBox lang={"python"} comment={"fancy indexing"}>{`>>> arr=np.array([[0,1,2],[3,4,5],[6,7,8]])
>>> print(arr[[0,1,2],[1,0,2]])
[1 3 8]`}</CodeBox>
                    <Text>fancy indexingでは、配列のインデックスに元配列の軸の数と同数の{`[]`}引数を求められます。また、各{`[]`}の要素数は出力したい要素数に一致します。
                        {`[]`}は順に元配列の軸のインデックスを指定します。
                    </Text>
                    <Text>上の例では、出力する要素の第一軸のインデックスがそれぞれ{`0,1,2`}、第二軸のインデックスが{`1,0,2`}になり、
                        {`(0,1)、(1,0)、(2,2)`}の要素が出力されます。
                    </Text>
                    <Text>ある軸の指定が全て同じなら{`[]`}を省略した記述が可能です。</Text>
                    <CodeBox lang={"python"} comment={"省略した記述"}>{`>>> print(arr[1,[0,1,2]])
[3 4 5]`}</CodeBox>
                    <Text>上の例では{`arr[1]`}のインデックス{`[0,1,2]`}が順に出力されます。全軸がそれぞれ同じ値なら通常のインデキシングになります。</Text>
                    <SubSection>1軸目のfancy index</SubSection>
                    <Text>{`[]`}が1つだけなら1軸目の各インデックスの要素を全て取り出すことになります。</Text>
                    <CodeBox lang={"python"} comment={"1軸目の指定"}>{`>>> arr=np.zeros((3,3,3))
>>> arr[1,1,1]=1
>>> print(arr)
[[[0. 0. 0.]
  [0. 0. 0.]
  [0. 0. 0.]]

 [[0. 0. 0.]
  [0. 1. 0.]
  [0. 0. 0.]]

 [[0. 0. 0.]
  [0. 0. 0.]
  [0. 0. 0.]]]
>>> arr[[1]]
array([[[0., 0., 0.],
        [0., 1., 0.],
        [0., 0., 0.]]])`}</CodeBox>
                    <Text>{`arr[1]`}の要素が全て取り出せていることがわかります。</Text>
                    <CodeBox lang={"python"} comment={"arr[[1,1,1]]"}>{`>>> print(arr[[1,1,1]])
[[[0. 0. 0.]
  [0. 1. 0.]
  [0. 0. 0.]]

 [[0. 0. 0.]
  [0. 1. 0.]
  [0. 0. 0.]]

 [[0. 0. 0.]
  [0. 1. 0.]
  [0. 0. 0.]]]`}</CodeBox>
                    <Text>上の例ではfancy indexingで{`arr[1]`}を3回指定していることになります。{`arr[1,1,1]`}や{`arr[(1,1,1)]`}とは異なることを覚えておきましょう。</Text>
                </Section>
                {/* <Section title="セクション名">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>
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
