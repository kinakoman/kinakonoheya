import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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
                <Tx>csvファイルを読み込んでデータフレームを作成できます。
                    デフォルトではcsvファイルの一行目は列名として認識され、{`header=None`}を指定すれば一行目もデータに含まれることになります。</Tx>
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
        </>
    )
}