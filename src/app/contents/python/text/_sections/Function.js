import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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
                <Sub>デコレータ</Sub>
                <Tx>クロージャ―を利用すれば関数を修飾した新たな関数を作ることが出来ます。</Tx>
                <Code lang="python">{`# デコレータ関数を定義(クロージャを利用)
def decorator(func): # 関数を引数にとる
    #修飾した関数を定義
    def new_func(text):
        new_text=f"{text},world"
        func(new_text)
    
    return new_func # 修飾した関数を返す

# 関数を定義
def echo(text):
    print(text)

decorated_echo=decorator(echo) # デコレートした関数を定義
echo("hello")
# hello
decorated_echo("hello")
# hello,world`}</Code>
                <Tx>@を使えば再定義した関数をオブジェクトとして定義せずとも関数を修飾が可能です。</Tx>
                <Code lang="python">{`@decorator # @デコレータ関数名、を記述
def echo(text):
    print(text)

echo("hello")
# hello,world
# 関数が常に修飾された状態に`}</Code>
                <Tx>可変長変数{`*args、**kwargs`}を利用すれば一つのデコレータで引数の異なる複数の関数を修飾できます。</Tx>
                <Code lang="python">{`def decorator(func): 
    def new_func(*args, **kwargs): # 再定義する関数の引数に*args, **kwargs
        print("function starts")
        func(*args, **kwargs)
        print("function ends")
    
    return new_func # 修飾した関数を返す

@decorator
def echo(text):
    print(text)

@decorator
def sum(x,y):
    print(x+y)
    
echo("hello,world")
# function starts
# hello,world
# function ends
sum(10,20)
# function starts
# 30
# function ends
`}</Code>
            </Sec>
        </>
    )
}