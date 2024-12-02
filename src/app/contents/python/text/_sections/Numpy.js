import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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
        </>
    )
}