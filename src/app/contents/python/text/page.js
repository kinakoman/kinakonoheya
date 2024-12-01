import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【Python入門学習】",
    tag: ["Python"],
    date: ["2024", "11", "04"],
    latest: ["2024", "12", "01"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Toc />
                <Sec title="概要">
                    <Sub>インストール</Sub>
                    <Tx>仮想環境をローカルに用意します。</Tx>
                    <Code lang={"javascript"} tab={"Linux"}>{`$ wget https://repo.anaconda.com/archive/Anaconda3-2024.06-1-Linux-x86_64.sh
$ bash Anaconda3-2024.06-1-Linux-x86_64.sh
$ echo 'export PATH=$PATH:/anaconda3/bin' >> ~/.bashrc
$ source .bashrc
`}</Code>
                    <Sub>Hello,World</Sub>
                    <Tx>Pythonファイルの実行にはpython3コマンドを利用します。</Tx>
                    <Code lang={"python"} tab={"test.py"}>{`print("Hello,World")`}</Code>
                    <Code lang={"shell"} tab={""}>{`$ python3 test.py
Hello,World
`}</Code>
                    <Tx>Pythonはインタプリタ言語で対話形式の実行も可能です。</Tx>
                    <Code lang={"shell"} tab={"ターミナル"}>{`$ python3
Python 3.11.3 (main, Apr 19 2023, 23:54:32) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello,World")
Hello,World
>>> exit()`}</Code>
                </Sec>

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

                <Sec title="関数">
                    <Sub>関数の定義</Sub>
                    <Tx>Pythonの関数定義は以下の通りです。引数が無い場合でも{`()`}は省略できません。</Tx>
                    <Code lang="python">{`def Hello():
    print("Hello")
Hello()`}</Code>
                    <Sub>引数と戻り値</Sub>
                    <Tx>関数には引数と戻り値を設定できます。</Tx>
                    <Code lang="python">{`def echo(word):
    print(word)

def add(a,b):
    return a+b

word="Hello"
echo(word)
# Hello

a,b=10,20
print(add(a,b))
# 30`}</Code>
                    <Sub>位置引数とキーワード引数</Sub>
                    <Tx>関数を呼び出す際に渡す引数の順は定義した際の引数の順に一致させます。これを位置引数と呼びます。反対に定義した際の変数に明示的に代入して渡す引数をキーワード引数と呼びます。
                        キーワード引数は渡す順番に制限はありません
                    </Tx>
                    <Code lang="python">{`def Info(age,birth):
    print("年齢は",age)
    print("誕生日は",birth)

age=20
birth=20001010

Info(age,birth)
# 年齢は 20
# 誕生日は 20001010
Info(birth=birth,age=age)
# 年齢は 20
# 誕生日は 20001010`}</Code>
                    <Sub>関数内関数</Sub>
                    <Tx>関数の中で関数を定義して実行することもできます。関数内で定義した内側関数はその関数外からは利用できません。</Tx>
                    <Code lang="python">{`def outer(x,y):
    def inner (x,y):
        return x+y
    
    print(inner(x,y))

x,y=10,20
outer(10,20)
# 30`}</Code>
                    <Sub>クロージャ―</Sub>
                    <Tx>関数内関数を戻り値にすることで、外側関数の引数の状態を保持した関数を取り出すことが出来ます。戻り値となる内側関数をクロージャーと呼びます。
                        クロージャーを利用すれば同じ関数で異なる処理を実行することが出来ます。</Tx>
                    <Code lang="python">{`def outer(x):
    def inner (str):
        for i in range(x):
            print(str)
    
    return inner

x,y=outer(2),outer(4)

x("hello")
# hello
# hello
y("goodbye")
# goodbye
# goodbye
# goodbye
# goodbye`}</Code>
                </Sec>

                <Sec title="Numpy">
                    <Sub>ライブラリのインポート</Sub>
                    <Code lang={"python"} tab={""}>{`import numpy as np`}</Code>
                    <Sub>np.ndarray</Sub>
                    <Tx>Numpy配列はNumpyの中でも重要な概念です。Numpy配列は要素の数値計算等が容易に行えます。</Tx>
                    <Code lang={"python"} tab={""}>{`# 1次元配列
arr=np.array([1,2,3,4])
# 2次元配列
arr_2d=np.array([[5,6,7,8],[9,10,11,12]])

print(type(arr))        #Numpy配列の型
print(arr.ndim)         #配列の次元
print(arr.shape)        #配列のシェイプ
print(len(arr_2d[0]))   #各次元のサイズ
print(arr.dtype)        #要素のデータ型`}</Code>
                    <Sub>単一要素配列</Sub>
                    <Tx>引数に任意の配列のシェイプを受け取り配列を生成することが出来ます。</Tx>
                    <Code lang={"python"} tab={""}>{`one=np.ones((2,3))                  #2行3列の1のみの配列
full=np.full((3,4),20)              #3行4列の20のみの配列
empty=np.empty((10,10))             #10x10の空配列
zeros=np.zeros((2,2,3))             #2x2x3の0の配列(float)
zeros_like=np.zeros_like(zeros)     #zerosと同じshapeの0の配列(int)`}</Code>
                    <Sub>等差配列</Sub>
                    <Tx>等差・連番要素の配列はarangeかlinspaceを使用します。</Tx>
                    <Code lang={"python"} tab={""}>{`# 引数はstart、end、step
# start以上end未満でstepずつ
x=np.arange(0,10,1)
# 引数はstart、end、space
# startからendをspace分割
y=np.linspace(0,9,10)`}</Code>
                    <Sub>インデキシング</Sub>
                    <Tx>配列の要素はインデックスで取り出せます。</Tx>
                    <Code lang={"python"} tab={""}>{`x=np.array([["00","01","02","03"],
            ["10","11","12","13"],
            ["20","21","22","23"]])

# indexで直接取り出し
print(x[0,1])                
#01

# fancy indexing
# 複数取り出す時は軸ごとに順に指定する。
print(x[[0,0,2],[0,1,2]])    
#['00' '01' '22']`}</Code>
                    <Sub>スライシング</Sub>
                    <Tx>配列の要素を取り出すことをスライシングと言います。</Tx>
                    <Code lang={"python"} >{`x=np.arange(0,10,1)
print(x)        #[0 1 2 3 4 5 6 7 8 9]

# [start:end]の形で記述し、end-1番まで取り出し
print(x[2:7])   #[2 3 4 5 6]

# :の前後を省略すると0からあるいは最後までを指定
print(x[:7])    #[0 1 2 3 4 5 6]
print(x[2:])    #[2 3 4 5 6 7 8 9]`}
                    </Code>
                    <Tx>多次元配列ではカンマで区切りながら各軸についてスライシングを指定します。</Tx>
                    <Code lang={"python"} >{`x=np.array([["00","01","02","03"],
            ["10","11","12","13"],
            ["20","21","22","23"]])

print(x[:,1:3])
# [['01' '02']
#  ['11' '12']
#  ['21' '22']]

print(x[:2,1:])
# [['01' '02' '03']
#  ['11' '12' '13']]`}
                    </Code>
                    <Sub>配列の論理演算</Sub>
                    <Tx>Numpy配列では論理演算を用いた操作が可能です。</Tx>
                    <Code lang={"python"} >{`x=np.array([1,3,5,7])
y=np.array([0,4,2,9])

# 配列の論理演算(ブール配列の生成)
print(x>4)
# [False False  True  True]

# ブール配列でのインデキシング
print(x[x>y])
# [1 5]

# ブール配列を用いた要素操作
newArr=np.zeros(np.shape(x))
# ブール配列のTrueのインデックスに代入
newArr[x<y]=1
print(newArr)
# [0. 1. 0. 1.]`}
                    </Code>
                </Sec>
                <Sec title="Pandas">
                    <Sub>ライブラリのインポート</Sub>
                    <Code lang="python">{`import pandas as pd`}</Code>
                    <Sub>データフレームの作成</Sub>
                    <Tx>Pandasはデータフレームの扱いに特化したライブラリです。リストや辞書を元にデータフレームを作成することが出来ます。</Tx>
                    <Code lang="python">{`list=[1,2,3] # 1次元リストは行として認識される
df=pd.DataFrame(list)
print(df)
#    0
# 0  1
# 1  2
# 2  3

list=[[1,2,3]] # 2重リストの場合は外側が行、内側が列となる
df=pd.DataFrame(list)
print(df)
#    0  1  2
# 0  1  2  3

# 辞書ではkeyが列名として認識される
data={
    'name':["suzuki","tanaka","yamada"],
    'age':[24,38,54],
    'from':["Osaka","Kyoto","Tokyo"]
}

df=pd.DataFrame(data)
print(df)
#     name  age   from
# 0  suzuki   24  Osaka
# 1  tanaka   38  Kyoto
# 2  yamada   54  Tokyo`}</Code>
                    <Sub>行名と列名の指定</Sub>
                    <Tx>DataFrame内でcolumnsとindexから列名と行名を明示的に設定できます。</Tx>
                    <Code lang="python">{`list = np.full((3,3),1)
columns_name=["column1","column2","column3"]
index_name=["index1","index2","index3"]

df=pd.DataFrame(list,columns=columns_name,index=index_name)
print(df)
#         column1  column2  column3
# index1        1        1        1
# index2        1        1        1
# index3        1        1        1

# 名前の取得
print(df.columns)
print(df.index)
# Index(['column1', 'column2', 'column3'], dtype='object')
# Index(['index1', 'index2', 'index3'], dtype='object')`}</Code>
                    <Sub>行と列の取り出し</Sub>
                    <Tx>{`[]`}で列名を指定するとその列を取り出せます。配列として指定すれば複数列を取り出せます。</Tx>
                    <Code lang="python">{`print(df)
#        name  age   from
# No1  suzuki   24  Osaka
# No2  tanaka   38  Kyoto
# No3  yamada   54  Tokyo

# 列の取り出し
print(df["name"])
# No1    suzuki
# No2    tanaka
# No3    yamada
# Name: name, dtype: object

# 複数列の取り出し、指定した順で表示
print(df[["age","name"]])
#      age    name
# No1   24  suzuki
# No2   38  tanaka
# No3   54  yamada  `}</Code>
                    <Tx>行を取り出す際はインデックスをスライスで指定します。</Tx>
                    <Code lang="python">{`# スライスで行の取り出し
print(df[1:3])
#        name  age   from
# No2  tanaka   38  Kyoto
# No3  yamada   54  Tokyo`}</Code>
                    <Sub>loc</Sub>
                    <Tx>locを使用すれば列名と行名から明示的にデータを取り出せます。locは列と行を指定することで対応したデータを取り出せます。</Tx>
                    <Code lang="python">{`print(df)
#        name  age   from
# No1  suzuki   24  Osaka
# No2  tanaka   38  Kyoto
# No3  yamada   54  Tokyo

# locで単一の要素を取得
print(df.loc["No1","age"])
# 24
print(df.loc["No3","name"])
# yamada`}</Code>
                    <Tx>列と行をそれぞれ複数指定することで、各組合せのデータが取り出し可能です。fancy indexingとは仕様が異なるので注意が必要です。</Tx>
                    <Code lang="python">{`# 複数の要素を取得、各組合せに対応した全てのデータを取り出す。
print(df.loc[["No2","No3"],["name","from"]])
#        name   from
# No2  tanaka  Kyoto
# No3  yamada  Tokyo`}</Code>
                    <Tx>スライスも利用可能です。通常のスライスと異なりstop値も対象に含まれます。</Tx>
                    <Code lang="python">{`# スライスを利用
print(df.loc["No1":"No3","age":"from"])
#      age   from
# No1   24  Osaka
# No2   38  Kyoto
# No3   54  Tokyo`}</Code>
                    <Sub>iloc</Sub>
                    <Tx>ilocはlocと同様の使い方が出来ますが、ラベル名からではなくインデックスで指定を行います。
                        スライスを利用する場合は通常のスライスと同様にstop値は対象に含まれません。
                    </Tx>
                    <Code lang="python">{`print(df)
#        name  age   from
# No1  suzuki   24  Osaka
# No2  tanaka   38  Kyoto
# No3  yamada   54  Tokyo

print(df.iloc[0,1])
# 24

print(df.iloc[[0,1],[1,2]])
#      age   from
# No1   24  Osaka
# No2   38  Kyoto

print(df.iloc[1:2,0:3])
    #  name  age   from
# No2  tanaka   38  Kyoto`}</Code>
                    <Sub>csvファイルの読み込み</Sub>
                    <Tx>csvファイルを読み込んでデータフレームを作成できます。{`header=None`}を指定すればcsvファイルの一行目もデータに含まれることになります。</Tx>
                    <Code lang="python">{`df_csv=pd.read_csv("data.csv")  #  一行目をヘッダーに
# df_csv=pd.read_csv("data.csv",header=None)  #  1行目もデータに含める
print(df_csv)
#      name  age   from
# 0  suzuki   24  Osaka
# 1  tanaka   38  Kyoto`}</Code>
                    <Code lang="shell" tab="data.csv">{`name,age,from
suzuki,24,Osaka
tanaka,38,Kyoto`}</Code>
                </Sec>

                {/* <Sec title="はじめに">
                    <Sub>こんにちは</Sub>
                    <Tx>これは本文</Tx>
                    <Code lang={"javascript"} comment={"コードの例"}>{`const testiD=document.getElementById("test")
console.log(testiD)
testiD.addEventListener("mouseout",function () {
    this.classList.add("testadd")
})`}</Code>
                    <Sub>こんにちは2</Sub>

                </Sec>
                <Sec title="はじめにの">
                    <Sub>こんにちは3</Sub>
                    <Sub>こんにちは4</Sub>
                </Sec> */}
            </Contents>
        </>
    )
}
