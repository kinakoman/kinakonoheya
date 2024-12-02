import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="基本構文">
                <Sub>変数</Sub>
                <Tx>Pythonでは変数定義に初期化やデータ型の指定は必要ありません。</Tx>
                <Code lang={"python"} tab={""}>{`# int型
num_int=10
# float型
num_float=0.123
# 文字列
text="Hello"
# 配列
arr=[10,20,30]
`}</Code>
                <Tx>カンマで区切って同時に定義もすることも可能です。</Tx>
                <Code lang={"python"}>{`x,y,z=5,10,"text"
print(x,y,z)
# 5 10 text`}
                </Code>
                <Sub>比較演算子</Sub>
                <Tx>比較演算子はTrueとFalseのブール値を出力します。</Tx>
                <Code lang={"python"}>{`>>> x,y,z=5,10,10
>>> x==y
False
>>> x!=y
True
>>> x<z
True
>>> y<=z
True
>>> x>z
False
>>> x>=z
False`}</Code>
                <Sub>論理演算子</Sub>
                <Tx>論理演算子はブール値をもとに真偽判断を行います。andは論理積、orは論理和、notは真偽の反転を行います。</Tx>
                <Code lang={"python"}>{`>>> x,y=True,False
>>> x and y
False
>>> x or y
True
>>> not y
True
>>> x and not y
True`}</Code>
                <Sub>if文</Sub>
                <Tx>論理演算を元に条件分岐を行います。条件が1個、2個ならelseとifを、3個以上ならelifを利用します。</Tx>
                <Code lang={"python"}>{`x,y=5,10
if(x==y):
    print("x=y")
else:
    print("x≠y")
    
z=10
if(x==z):
    print("x=z")
elif(x==y):
    print("x=y")
else:
    print("x≠z and x≠y")`}</Code>
                <Sub>for文</Sub>
                <Tx>for文はデータ構造やリストから繰り返し数を取得します。
                </Tx>
                <Code lang={"python"}>{`# データ構造から繰り返し
for i in range(5):
    print(i)
# 文字列から繰り返し
word="python"
for letter in word:
    print(letter)
# リストから繰り返し
list=["one","two","three"]
for i,text in enumerate(list):
    print(i,text)`}</Code>
                <Sub>break,continue</Sub>
                <Tx>breakでは繰り返しの中断、continueでは次の繰り返し処理へのスキップが可能です。</Tx>
                <Code lang={"python"}>{`list=["zero","one","two","three"]

for i,text in enumerate(list):
    if i==1:
        print("break")
        break
    print(i,text)

for i,text in enumerate(list):
    print(i)
    if(i==2):
        print("continue")
        continue
    #i==2ではtextの出力はされずi=3にスキップ
    print(text)`}</Code>
            </Sec>
        </>
    )
}