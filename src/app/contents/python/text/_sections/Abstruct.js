import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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

        </>
    )
}